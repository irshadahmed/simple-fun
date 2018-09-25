import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
    @Input()
    public cards: any[];
    @Output()
    public onCardClick: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() {
        console.log(this.cards);
    }
    cardClick(card: any) {
        console.log(card);
        this.onCardClick.emit(card);
    }
}
