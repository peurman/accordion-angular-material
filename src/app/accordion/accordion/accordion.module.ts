import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [AccordionComponent],
  exports: [AccordionComponent],
  imports: [CommonModule, MatSlideToggleModule, CdkAccordionModule],
})
export class AccordionModule {}
