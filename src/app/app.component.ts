import { Component } from '@angular/core';
import {
    EventManagerService
} from './core/event-manager.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'simple-fun';
    public isCollapsed: boolean;
    public cards: any[] = [
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
    constructor(
        private eventManagerSvc: EventManagerService
    ) {

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
}
