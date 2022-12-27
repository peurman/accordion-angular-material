import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccordionModule } from './accordion/accordion.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarOriginService } from './services/car-origin/car-origin.service';
import { CarFeaturesService } from './services/car-features/car-features.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AccordionModule, BrowserAnimationsModule],
  providers: [CarOriginService, CarFeaturesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
