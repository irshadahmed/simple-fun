import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _userSvc: UserService
  ) { }

  ngOnInit() {
    this._userSvc.registerUser({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@happiestminds.com'
    }).subscribe((response: HttpResponse<any>) => {
      console.log(response);
    });
    this._userSvc.getUserDetails('johndoe').subscribe((response: HttpResponse<any>) => {
      console.log(response);
    });
    this._userSvc.getError().subscribe(() => {

    }, (error: any) => {
      console.log(error);
    })
  }

}
