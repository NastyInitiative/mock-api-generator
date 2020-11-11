import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    feaStatus = {
        "feaStatus": "TODO"
    }

    numbers = {
        'numbers':[
            3298877661, 
            3884466558, 
            3405136874
        ]
    };

    feaStartResp = {
        "id": "3ead7a0c-82d7-40f5-a5be-02337e480567",
        "documentIds": [
            "string"
        ],
        "fieldGroups": [
            {
                "name": "string",
                "documentIds": [
                    "string"
                ]
            }
        ]
    };

    feaStart = {
        "id": "FEA_ACCEPT",
        "documentIds": [
            "PRIVACY_FEA",
            "CARATTERISTICHE_FEA",
            "MOD_CONTRATTO_FEA"
        ],
        "fieldGroups": [
            {
                "name": "FEA_SIGN",
                "documentIds": [
                    "MOD_CONTRATTO_FEA"
                ]
            }
        ]
    }

    getFeaStatus() {
        return this.feaStatus;
    }

    getPhoneNumbers() {
        return this.numbers;
    }

    getFeaStart() {
        return this.feaStart;
    }
}
