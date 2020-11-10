import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { DataService } from 'src/services/data/data.service';

@Controller('/v1/customer')
export class ApiCustomerController {
    constructor(private customer: DataService){}

    @Get('/fea')
    getFeaStatus() {
        console.log(":::FEA status:::");
        console.log(this,this.customer.getFeaStatus());
        return this.customer.getFeaStatus();
    }

    @Get('/numbers')
    getPhoneNumbers() {
        console.log(":::Customer Numbers:::");
        console.log(this.customer.getPhoneNumbers());
        return this.customer.getPhoneNumbers();
    }

    @Post('/fea/start')
    startFEA(@Body() prefNumber: Response) {
        console.log("Prefferd number :: ", prefNumber);
        console.log(":::::::::::::::::::::::::::::::");
        console.log(":::FEA Start:::");
        console.log(this.customer.getFeaStart());
        return this.customer.getFeaStart().id;
    }

    @Post('/fea/accept')
    @HttpCode(202)
    acceptFEA() {
        console.log(':::FEA Accepted:::');
        return 'Ridaje';
    }
}
