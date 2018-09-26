import { Component, OnInit } from '@angular/core';
import { EventManagerService } from '../core/event-manager.service';
import { AppService } from '../core/app.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cards: any[];
  constructor(
    private eventManagerSvc: EventManagerService,
    private _appSvc: AppService
  ) { }

  ngOnInit() {
    this._getProductList();
  }

  passCardDataToParent(data: any) {
    console.log('Data passed from child', data);
  }
  addNewCard() {
    this.cards.push({
      title: 'Something!!!',
      desc: 'Something more detail!!!'
    });
    this.eventManagerSvc.onCardAdd.emit(this.cards.length);
  }

  private _getProductList() {
    this._appSvc.getProducts().subscribe((response: HttpResponse<any>) => {
      console.log(response);
      this.cards = [
        {
          name: 'Samasung',
          desc: 'Samsung Galaxy Note 5!!'
        },
        {
          name: 'Samasung',
          desc: 'Samsung Galaxy Note 5!!'
        },
        {
          name: 'Samasung',
          desc: 'Samsung Galaxy Note 5!!'
        }
      ];
    });
  }

}
