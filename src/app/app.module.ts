import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AuthModule,
        AppRoutingModule,
        BrowserModule,
        ComponentsModule,
        CoreModule,
        DynamicComponentsModule,
        SharedModule.forRoot()
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    constructor() {
        console.log('App module loaded!!!');
    }
}
