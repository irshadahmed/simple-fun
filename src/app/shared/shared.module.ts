import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SharedService
} from './shared.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CardComponent } from './card/card.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [CardComponent]
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule, providers: [
                SharedService
            ]
        }
    }
}
