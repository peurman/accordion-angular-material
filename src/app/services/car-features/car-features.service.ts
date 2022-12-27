import { Injectable } from '@angular/core';
import { CarFeatures } from 'src/app/interfaces/car-features.interface';

@Injectable({
  providedIn: 'root',
})
export class CarFeaturesService {
  carFeatures: CarFeatures[] = [
    {
      brand: 'Ford',
      model: 'Focus',
      category: 'sedan',
      release: 2020,
      engine: '16V',
      weight: 2500,
      price: 50000,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ford-Motor-Company-Logo.png/1200px-Ford-Motor-Company-Logo.png',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/d/d7/Ford_Focus_IV_sedan_01_China_2019-03-25.jpg',
        'https://cdn.webtekno.com/media/cache/content_detail_v2/article/54934/yeni-ford-focus-sedan-turkiye-gorselleri-sizdi-1539334599.jpg',
      ],
    },
    {
      brand: 'BMW',
      model: 'Serie 2',
      category: 'coupe',
      release: 2022,
      engine: '16V',
      weight: 2000,
      price: 250000,
      logo: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c46e.png',
      images: [
        'https://autotest.com.ar/wp-content/uploads/2022/06/BMW-Serie-2-Gran-Coupe-Trompa-2.jpg',
        'https://i0.wp.com/tiempomotor.com/wp-content/uploads/2021/06/BMW_Serie_4_Gran_Coup%C3%A9_1.jpg',
      ],
    },
    {
      brand: 'Chevrolet',
      model: 'Camaro',
      category: 'sedan',
      release: 2020,
      engine: '16V',
      weight: 2500,
      price: 50000,
      logo: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c479.png',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/5/5f/2011_Chevrolet_Camaro_2SS_--_2011_DC.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a9/2010_Chevrolet_Camaro_SS.jpg',
      ],
    },
  ];
}
