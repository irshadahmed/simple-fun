import { AdDirective } from './ad.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBannerComponent } from './ad-banner/ad-banner.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AdBannerComponent,
        AdDirective
    ]
})
export class DynamicComponentsModule { }
