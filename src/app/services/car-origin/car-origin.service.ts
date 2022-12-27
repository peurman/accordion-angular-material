import { Injectable } from '@angular/core';

import { CarOriginBrands } from 'src/app/interfaces/car-origin.interface';

@Injectable({
  providedIn: 'root',
})
export class CarOriginService {
  cars: CarOriginBrands = {
    American: ['Chevrolet', 'Ford', 'GMC', 'Chrysler'],
    Japanese: ['Toyota', 'Honda', 'Nissan', 'Suzuki'],
    German: ['Volkswagen', 'Mercedes - Benz', 'Audi', 'BMW'],
  };
}
