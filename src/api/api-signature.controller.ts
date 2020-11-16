import { Controller, Get } from '@nestjs/common';
import { SignatureService } from 'src/services/signature.service';

@Controller('/v1/signature')
export class ApiSignatureController {
    constructor(private signature: SignatureService){}

    @Get('/ui/getSignatureUI')
    getSignature(){
        console.log("::::::::::::::::::GET SIGNATURE::::::::::::::::::");
        console.log(':::Returned request data:::');
        console.log(this.signature.getfdiProducts());
        console.log("::::::::::::::::::::::::::::::::::::");
        return this.signature.getfdiProducts();
    }
}
