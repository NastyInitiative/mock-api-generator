import { Controller, Get } from '@nestjs/common';
import { SignatureService } from 'src/services/signature.service';

@Controller('/v1/signature')
export class ApiSignatureController {
    constructor(private signature: SignatureService){}

    @Get('/ui/getSignatureUI')
    getSignature(){
        console.log("::::::::::::::::::GET SIGNATURE::::::::::::::::::");
        console.log(':::Returned request data:::');
        // console.log(this.signature.getfdiProducts());
        console.log(this.signature.getRandomizedProducts());
        console.log("::::::::::::::::::::::::::::::::::::");
        return this.signature.getRandomizedProducts();
    }

    @Get('/ui/getFEAOtpNumber')
    getFEAOtpNumber(){
        console.log("::::::::::::::::::GET SIGNATURE OPT NUMBER::::::::::::::::::");
        console.log(':::Returned request data:::');
        console.log(this.signature.getRandomizedNumbers());
        console.log("::::::::::::::::::::::::::::::::::::");
        return this.signature.getRandomizedNumbers();
    }
}
