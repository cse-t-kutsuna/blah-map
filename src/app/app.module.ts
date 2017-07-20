import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MangolModule } from 'mangol';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MangolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
