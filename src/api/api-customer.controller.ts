import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { doc } from 'prettier';
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
    @HttpCode(202)
    getDocId(@Param('documentIds') docId: string){
        console.log(":::::::::::::::::Document IDs GET:::::::::::::::::::");
        console.log(":::Received Id Array:::");
        console.log(docId);
        const splittedIds = docId.includes(',') ? docId.split(',') : [docId];
        const docArray = this.customer.getDocId().documents;
        const result = docArray.filter(outerElem => splittedIds.includes(outerElem.id))
        const docRespArray = {documents: result};
        return docRespArray;
    }
    @HttpCode(400)
    getDocError() {
        throw new HttpException('bad request', HttpStatus.FORBIDDEN);
    }


    // @Get('/fea/documents/:documentIds')
    // getDocId(@Param('documentIds') docId: string){
    //     console.log(":::::::::::::::::Document IDs GET:::::::::::::::::::");
    //     console.log(":::Received Id Array:::");
    //     console.log(docId);
    //     const splittedIds = docId.includes(',') ? docId.split(',') : [docId];
    //     const docArray = this.customer.getDocId().documents;
    //     const result = {
    //         documents: []
    //     };
    //     docArray.forEach((outerElem) => {
    //         splittedIds.forEach((innerElem) => {
    //             if(outerElem.id == innerElem) {
    //                 result.documents.push(outerElem);
    //             };
    //         });
    //     });
    //     return result;
    // }
}
