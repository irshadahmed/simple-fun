import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations: [UserManagementComponent, RegisterComponent]
})
export class UserModule {
    constructor() {
        console.log('User module loaded!!!');
    }
}
