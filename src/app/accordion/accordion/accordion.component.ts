import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  cars = {
    American: ['Chevrolet', 'Ford', 'GMC', 'Chrysler', 'Dodge', 'Jeep', 'RAM'],
    Japanese: [
      'Toyota',
      'Honda',
      'Nissan',
      'Suzuki',
      'Mazda',
      'Mitsubishi',
      'Subaru',
    ],
    German: [
      'Volkswagen',
      'Mercedes - Benz',
      'Audi',
      'BMW',
      'Porsche',
      'Daimler',
      'Opel',
    ],
  };
  expandedIndex = 0;
}
