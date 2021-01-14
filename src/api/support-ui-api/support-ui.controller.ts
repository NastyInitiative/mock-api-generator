import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { kitPackage } from 'src/models/support-ui-models/support-ui.model';
import { PackagesService } from 'src/services/support-ui-services/packages.service';

@Controller('/package-sender/v1')
export class SupportUiController {

    constructor(private packages: PackagesService){}

    @Post('/packages')
    sendPackage(@Body() req ){
        
        const respToSend = this.packages.getSuccessResponse()

        let isResponseOkToSend = false;

        function checkInvalidParamEx( firstVal, secondVal ) {
            if(typeof firstVal == typeof '' || typeof secondVal == typeof '') {
                isResponseOkToSend = true
            } else {
                isResponseOkToSend = false
                throw new HttpException('PI_MS_4003: Invalid parameter type', HttpStatus.BAD_REQUEST)
            }
        }

        function checkResourceNotFoundEx(firstVal, secondVal) {
            if(firstVal !== secondVal) {
                isResponseOkToSend = false
                throw new HttpException('PI_MS_4000: Resource not found', HttpStatus.NOT_FOUND)
            } else {
                isResponseOkToSend = true
            }
        }

        console.log("::::::::::::::::::::::::::::::::::::");
        console.log(":::OUTBOUND PACKAGE RESPONSE:::");
        console.log(respToSend);
        console.log("::::::::::::::::::::::::::::::::::::");
        console.log(":::INBOUND PACKAGE RESPONSE:::");
        console.log('::: incoming funnel id' ,typeof req.funnelId);
        console.log(req);
        console.log("::::::::::::::::::::::::::::::::::::");
        console.log('response to send info :: ', respToSend.info.requestId);
        console.log('request funnelId :: ', req.funnelId );

        checkInvalidParamEx(req.funnelId, req.stepId);
        checkResourceNotFoundEx(respToSend.info.requestId, req.funnelId)
        // if (respToSend.info.requestId !== req.funnelId) {
        //     throwResourceNotFoundEx()
        // }

        // if(typeof req.funnelId == typeof '' || typeof req.stepId == typeof '') {
        //     return respToSend
        // } else {
        //     throwInvalidParamEx()
        // }

        if(isResponseOkToSend) {
            return respToSend
        }
        



    }

}
