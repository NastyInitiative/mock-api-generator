import { Controller, Get } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
import { PersonService } from 'src/services/feu-ui-services/person.service';

@Controller()
export class ApiPersonController {
    constructor(private person: PersonService){}

    @Get('/getPerson')
    @Timeout(6000)
    getPerson() {
        console.log('::: GET PERSON :::');
        console.log(this.person.getPerson());
        console.log(':::::::::::::::::::');
        return this.person.getPerson()
    }
    @Get('/getAddress')
    @Timeout(6000)
    getAddress() {
        console.log('::: GET PERSON :::');
        console.log(this.person.getAddress());
        console.log(':::::::::::::::::::');
        return this.person.getAddress()
    }
    @Get('/getGender')
    @Timeout(6000)
    getGender() {
        console.log('::: GET PERSON :::');
        console.log(this.person.getGender());
        console.log(':::::::::::::::::::');
        return this.person.getGender()
    }
}
