import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ContractsService } from 'src/services/contracts.service';


@Controller('/v1/contracts')
export class ApiContractsController {
    constructor(private contracts: ContractsService){}

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
        return 'Created'
    }
    
    @Post('/:contractId/signature/otps')
    generateNewOtp(@Body() contractId:string ) {
        console.log("::::::::::::::::::POST OTP::::::::::::::::::");
        console.log(":::Received contract ID param:::");
        console.log(contractId);
        console.log(":::Reference Id");
        console.log(this.contracts.getOtpResp());
        console.log("::::::::::::::::::::::::::::::::::::");
        return this.contracts.getOtpResp();
    }

    @Put('/:contractId/signature/otps/:referenceId')
    signIn(@Param('contractId') contractId: string, @Param('referenceId') referenceId: string) {
        console.log("::::::::::::::::PUT OTP::::::::::::::::::::");
        console.log(":::Received contract ID param:::");
        console.log(contractId);
        console.log(":::Received reference ID param:::");
        console.log(referenceId);
        console.log("::::::::::::::::::::::::::::::::::::");
        return 'Daje tutta';
        
    }
}
