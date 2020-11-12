import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
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

    @Get('/fea/documents/:documentIds')
    getDocId(@Param('documentIds') docId: Array<string>){
        console.log(":::::::::::::::::Document IDs GET:::::::::::::::::::");
        console.log(":::Received Id Array:::");
        console.log(docId);
        const docArray = this.customer.getDocId().documents;
        const result = docArray.filter((outerElem) => {
            return docId.filter((innerElem) => {
                return outerElem.id = innerElem
            });
        });
        return result;
    } 
}
