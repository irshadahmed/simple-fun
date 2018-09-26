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
    constructor(
        
    ) {

    }
    
}
