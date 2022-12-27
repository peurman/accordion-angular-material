import { Component } from '@angular/core';
import { CarFeaturesService } from './services/car-features/car-features.service';
import { CarOriginService } from './services/car-origin/car-origin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'week5-part2';
  constructor(
    public carOrigin: CarOriginService,
    public carFeatures: CarFeaturesService
  ) {}
}
