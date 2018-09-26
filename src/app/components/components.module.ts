import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { NgbCollapseModule, NgbModalModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        NgbCollapseModule,
        NgbModalModule,
        NgbDatepickerModule,
        RouterModule
    ],
    declarations: [CardsComponent, HeaderComponent],
    exports: [
        CardsComponent,
        HeaderComponent
    ]
})
export class ComponentsModule { }
