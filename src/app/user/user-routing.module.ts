import { UserManagementComponent } from './user-management/user-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: UserManagementComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UserRoutingModule { }
