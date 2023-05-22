import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core/core.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
       MainComponent
    ],
    imports: [
        BrowserModule,
        MainRoutingModule,
        CoreModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class MainModule { }
