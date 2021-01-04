import { Injectable } from "@nestjs/common";


@Injectable()
export class LocationService {
    countries = ['Francia', 'Germania', 'Austria', 'Italia']
    provinces =  ['AG', 'BR', 'CR', 'TR']
    cities = ['Roma', 'Milano', 'Orvieto']

    getCountries() {
        return this.countries
    }

    getProvinces() {
        return this.provinces
    }

    getCities() {
        return this.cities
    }
}