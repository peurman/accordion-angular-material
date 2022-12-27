import { Injectable } from '@angular/core';

import { CarOriginBrands } from 'src/app/interfaces/car-origin.interface';

@Injectable({
  providedIn: 'root',
})
export class CarOriginService {
  cars: CarOriginBrands = {
    American: ['Chevrolet', 'Ford', 'Chrysler'],
    German: ['Volkswagen', 'Audi', 'BMW'],
    Japanese: ['Toyota', 'Nissan'],
  };
}
