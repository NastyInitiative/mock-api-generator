import { Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { DataService } from "../../services/data/data.service";


@Controller('/v1/contracts')
export class ApiContractsController {
    constructor(private contracts: DataService){}

    @Get()
    getContracts() {
        return this.contracts.getContracts();
    }

    @Put('/:contractId/signature')
    @HttpCode(201)
    create(@Param('contractId') contractId: string) {
        console.log("ApiContractsController -> create -> contractId", contractId)
        return 'Created'
    }
    
    @Post('/:contractId/signature/otps')
    generateNewOtp() {
        return 'codice otps'
    }

    @Put('/:contractId/signature/otps/:referenceId')
    signIn(@Param('contractId') contractId: string, @Param('referenceId') referenceId: string) {
        console.log("ApiContractsController -> signIn -> referenceId", referenceId)
        console.log("ApiContractsController -> signIn -> contractId", contractId)

        return 'Daje tutta';
        
    }
}
