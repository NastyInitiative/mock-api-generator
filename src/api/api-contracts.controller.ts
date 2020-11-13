import { Body, 
        Controller, 
        Get, 
        HttpCode, 
        HttpException, 
        HttpStatus, 
        Param, 
        Post, 
        Put } from '@nestjs/common';
import { ContractsService } from '../services/contracts.service';
import { OTP } from '../models/contracts.model';
import { DataService } from 'src/services/data.service';
import { CustomersService } from 'src/services/customers.service';


@Controller('/v1/contracts')
export class ApiContractsController {
    constructor(private contracts: ContractsService, private documents: DataService, private customers: CustomersService){}

    @Get()
    getContracts() {
        return this.contracts.getContracts();
    }

    @Put('/:contractId/signature')
    @HttpCode(201)
    create(@Param('contractId') contractId: string) {
        console.log("::::::::::::::::::PUT SIGNATURE::::::::::::::::::");
        console.log(":::Received contract ID param:::");
        console.log(contractId);
        console.log("::::::::::::::::::::::::::::::::::::");
        return 'Created';
    }
    
    @Post('/:contractId/signature/otps')
    @HttpCode(400)
    postOtpErrorResponse() {
        throw new HttpException(this.contracts.getErrorResp(), HttpStatus.FORBIDDEN)
    }
    @HttpCode(201)
    generateNewOtp(@Body() contractId: string) {
        console.log("::::::::::::::::::POST OTP::::::::::::::::::");
        console.log(":::Received contract ID param:::");
        console.log(contractId);
        console.log(":::Reference Id");
        console.log(this.contracts.getOtpResp());
        console.log("::::::::::::::::::::::::::::::::::::");
        return this.contracts.getOtpResp();
    }

    @Put('/:contractId/signature/otps/:referenceId')
    @HttpCode(400)
    putOtpErrorResponse() {
        throw new HttpException(this.contracts.getErrorResp(), HttpStatus.FORBIDDEN);
    }
    @HttpCode(201)
    signIn(@Body() contractBody: OTP ,@Param('contractId') contractId: string, @Param('referenceId') referenceId: string) {
        console.log("::::::::::::::::PUT OTP::::::::::::::::::::");
        console.log(":::Received contract ID param:::");
        console.log(contractId);
        console.log(":::Received reference ID param:::");
        console.log(referenceId);
        console.log(":::Received body data:::");
        console.log(contractBody);
        console.log("::::::::::::::::::::::::::::::::::::");
        return `Daje tutta, funziona: 
                ${contractBody}`;
    }
    @Get(':contractId/documents/:documentIds')
    getContractDoc(@Param('contractId') contractId: string, @Param('documentIDs') docId: string){
        console.log("::::::::::::::::GET CONTRACTS::::::::::::::::::::");
        console.log(":::Received Contract ID param");
        console.log(contractId);
        console.log(':::Received Document ID param:::');
        console.log(docId);
        console.log("::::::::::::::::::::::::::::::::::::");
        return this.documents.searchDocs(docId, this.customers.getDocId().documents);        
    }

}
