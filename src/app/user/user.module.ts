import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
    imports: [
        UserRoutingModule
    ],
    declarations: [UserManagementComponent]
})
export class UserModule {
    constructor() {
        console.log('User module loaded!!!');
    }
}
