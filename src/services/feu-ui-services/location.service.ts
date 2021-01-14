import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  // countries = ['Francia', 'Germania', 'Austria', 'Italia']

  countries = [
    {
      'code': 'IT',
      'value': 'ITALIA',
    },
    {
      'code': 'DE',
      'value': 'GERMANIA',
    },
    {
      'code': 'AU',
      'value': 'AUSTRIA',
    },
    {
      'code': 'FR',
      'value': 'FRANCIA',
    },
  ];

  provinces = ['AG', 'BR', 'CR', 'TR'];
  cities = ['Roma', 'Milano', 'Orvieto'];

  getCountries() {
    return this.countries;
  }

  getProvinces() {
    return this.provinces;
  }

  getCities() {
    return this.cities;
  }
}
