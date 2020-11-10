import { Controller, Get } from '@nestjs/common';
import { DataService } from 'src/services/data/data.service';

@Controller('/v1/customer')
export class ApiCustomerController {
    constructor(private customer: DataService){}

    feaStatus = {
        "feaStatus": "TODO"
    }

    @Get('/fea')
    getFeaStatus() {
        console.log(":::Returning FEA status:::");
        console.log(this.feaStatus);
        return this.feaStatus
    }
}
