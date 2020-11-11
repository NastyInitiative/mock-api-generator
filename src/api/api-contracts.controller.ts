import { Body, 
        Controller, 
        Get, 
        HttpCode, 
        HttpException, 
        HttpStatus, 
        Param, 
        Post, 
        Put } from '@nestjs/common';
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
        return 'Created';
    }
    
    @Post('/:contractId/signature/otps')
    generateNewOtp(@Body() contractId: string) {
        console.log("::::::::::::::::::POST OTP::::::::::::::::::");
        console.log(":::Received contract ID param:::");
        console.log(contractId);
        console.log(":::Reference Id");
        console.log(this.contracts.getOtpResp());
        console.log("::::::::::::::::::::::::::::::::::::");
        return this.contracts.getOtpResp();
    }
    @HttpCode(400)
    postOtpErrorResponse() {
        throw new HttpException(this.contracts.getErrorResp(), HttpStatus.FORBIDDEN)
    }

    @Put('/:contractId/signature/otps/:referenceId')
    signIn(@Body() contractBody: string ,@Param('contractId') contractId: string, @Param('referenceId') referenceId: string) {
        console.log("::::::::::::::::PUT OTP::::::::::::::::::::");
        console.log(":::Received contract ID param:::");
        console.log(contractId);
        console.log(":::Received reference ID param:::");
        console.log(referenceId);
        console.log(":::Received body data:::");
        console.log(contractBody);
        console.log("::::::::::::::::::::::::::::::::::::");
        return 'Daje tutta';
    }
    @HttpCode(400)
    putOtpErrorResponse() {
        throw new HttpException(this.contracts.getErrorResp(), HttpStatus.FORBIDDEN);
    }
    
}
