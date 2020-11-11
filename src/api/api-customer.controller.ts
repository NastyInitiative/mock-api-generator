import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CustomersService } from 'src/services/customers.service';

@Controller('/v1/customer')
export class ApiCustomerController {
    constructor(private customer: CustomersService){}

    @Get('/fea')
    getFeaStatus() {
        console.log("::::::::::::::::::::::::::::::::::::");
        console.log(":::FEA status:::");
        console.log(this,this.customer.getFeaStatus());
        console.log("::::::::::::::::::::::::::::::::::::");
        return this.customer.getFeaStatus();
    }

    @Get('/numbers')
    getPhoneNumbers() {
        console.log("::::::::::::::::::::::::::::::::::::");
        console.log(":::Customer Numbers:::");
        console.log(this.customer.getPhoneNumbers());
        console.log("::::::::::::::::::::::::::::::::::::");

        return this.customer.getPhoneNumbers();
    }

    @Post('/fea/start')
    startFEA(@Body() prefNumber: string) {
        console.log("::::::::::::::::::::::::::::::::::::");
        console.log(":::FEA Start:::");
        console.log("Prefferd number :: ", prefNumber);
        console.log(this.customer.getFeaStart());
        console.log("::::::::::::::::::::::::::::::::::::");
        return this.customer.getFeaStart();
    }

    @Post('/fea/accept')
    @HttpCode(202)
    acceptFEA() {
        console.log("::::::::::::::::::::::::::::::::::::");
        console.log(':::FEA Accepted:::');
        console.log("::::::::::::::::::::::::::::::::::::");
        return 'Ridaje';
    }
}
