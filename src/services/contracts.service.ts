import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractsService {
    contracts = {
        "contracts": [
            {
                "id": "6e389ae6-4d01-44d2-92a2-623975eaf07a",
                "signed": false
            },
            {
                "id": "6e389ae6-4d01-44d2-92a2-623975eaf06b",
                "signed": false
            }
        ]
    }

    otpResp = {
        'referenceId': "transactionId"
    }

    errorResp = {
        'info': {
            'resultCode': '400',
            'resultMessage': 'Invalid parameter type',
            'resultDetails': [
                'Bad request: Invalid parameter type'
            ],
            'executionTime': 0,
            'requestId': ""
        }
    }
    getContracts() {
        return this.contracts;
    }

    getOtpResp() {
        return this.otpResp;
    }
    
    getErrorResp() {
        return this.errorResp;
    }

}
