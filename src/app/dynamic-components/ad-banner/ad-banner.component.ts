import { AdService } from './../ad.service';
import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
    selector: 'app-ad-banner',
    templateUrl: './ad-banner.component.html',
    styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit, OnDestroy {
    private _ads: any[];
    private _currentAdIndex: number;
    private _interval: any;
    constructor(
        private _adSvc: AdService,
        private _compFactRes: ComponentFactoryResolver
    ) { }

    ngOnInit() {
        this._ads = this._adSvc.getAds();
        this.getAds();
    }

    public loadComponent(): void {
        const adItem: any = this._ads[this._currentAdIndex];
        if (!adItem) {
            return;
        }
    }

    getAds() {
        this._interval = setInterval(() => {
            this._currentAdIndex = (this._currentAdIndex + 1) % this._ads.length;
            this.loadComponent()
        }, 3000);
    }

    ngOnDestroy() {
        clearInterval(this._interval);
    }
}
