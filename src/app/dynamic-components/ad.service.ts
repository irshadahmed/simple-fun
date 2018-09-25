import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdService {

    constructor() { }

    public getAds(): any[] {
        return [
            {
                id: 1
            }
        ];
    }
}
