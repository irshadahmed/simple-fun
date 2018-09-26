import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
const routes: Routes = [
    {
        path: 'users',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
