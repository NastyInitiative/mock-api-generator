import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
    gender = ['M', 'F', 'Non saprei', 'Sono confuso']

    personInfo = {
        'name': 'Paolo',
        'surname': 'Rossi',
        'taxCode':'PCRNLX22R32I122N',
        'gender': 'M',
        'birthDate': '22/05/1991',
        'birthCity': 'Roma',
        'birthCountry': 'Italia'
    }

    address = {
        dug: 'Corso', 
        toponym: 'Cavour', 
        number: '123', 
        zipcode: '05018',
        city: 'Orvieto', 
        province: 'TR',
        country: 'Italia' 
    }

    getGender() {
        return this.gender
    }

    getPerson() {
        return this.personInfo
    }

    getAddress() {
        return this.address
    }
}
