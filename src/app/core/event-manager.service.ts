import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventManagerService {
    public onCardAdd: EventEmitter<number> = new EventEmitter();
}
