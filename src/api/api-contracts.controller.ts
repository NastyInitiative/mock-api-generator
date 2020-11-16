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
import { Documents, OTP } from '../models/contracts.model';
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
    // Implement only if request has a body
    // @HttpCode(400)
    // postOtpErrorResponse() {
    //     throw new HttpException(this.contracts.getErrorResp(), HttpStatus.FORBIDDEN)
    // }
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
    // Implement only if request has a body
    // @HttpCode(400)
    // putOtpErrorResponse() {
    //     throw new HttpException(this.contracts.getErrorResp(), HttpStatus.FORBIDDEN);
    // }
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
    getContractDoc(@Param('contractId') contractId: string, @Param('documentIds') docId: string){
        console.log("::::::::::::::::GET CONTRACTS::::::::::::::::::::");
        console.log(":::Received Contract ID param");
        console.log(contractId);
        console.log(':::Received Document ID param:::');
        console.log(docId);
        console.log("::::::::::::::::::::::::::::::::::::");
        const splittedIds = docId.includes(',') ? docId.split(',') : [docId];

        const docs = this.contracts.getDocuments();
        const resp = {documents: []};
        splittedIds.forEach( elem =>  {
            if(docs.hasOwnProperty(elem)) {
                const innerDoc = docs[elem];
                const outerDoc: Documents = {
                    id: "",
                    url: "",
                    description: "",
                    fields: []
                };
                outerDoc.id = elem;
                outerDoc.url = innerDoc.url;
                outerDoc.description = innerDoc.attributes.description
                innerDoc.signatureFields.forEach((singleField) => {
                    const mappedField = {
                        fieldGroup: singleField.attributes.fieldGroup,
                        name: singleField.attributes.name,
                        shortDescription: singleField.attributes.ShortDescription,
                        longDescription: singleField.attributes.longDescription,
                        optional: singleField.attributes.isOptional

                    }
                    outerDoc.fields.push(mappedField)
                });
                resp.documents.push(outerDoc);
            }
        });
        return resp;
        // return this.documents.searchDocs(docId, this.customers.getDocId().documents);        
    }

}
