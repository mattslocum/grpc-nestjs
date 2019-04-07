import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import { CirclesComponent } from './circles/circles.component';
import { CircleComponent } from './circle/circle.component';
import {CounterService} from "./CounterService";
import {CirclesService} from "./CirclesService";

@NgModule({
  declarations: [
    AppComponent,
    CirclesComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [CounterService, CirclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
