import { Component, Input } from '@angular/core';
import { CarFeatures } from '../interfaces/car-features.interface';
import { CarOriginBrands } from '../interfaces/car-origin.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() carsOriginBrands!: CarOriginBrands;
  @Input() carsDetails!: CarFeatures[];

  theCheckbox = false;
  buttonValue = 'Expand all';

  displayedColumns: string[] = [
    'brand',
    'model',
    'category',
    'release',
    'engine',
    'weight',
    'price',
    'logo',
    'images',
  ];

  filterBrand(carsArray: CarFeatures[], brand: string) {
    return carsArray.filter(el => el.brand === brand);
  }

  handleClick() {
    this.theCheckbox = !this.theCheckbox;
    if (this.theCheckbox) this.buttonValue = 'Contract all';
    if (!this.theCheckbox) this.buttonValue = 'Expand all';
  }
}
