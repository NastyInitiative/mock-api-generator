import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {

    responseDocuments = {
        "info": {
            "resultCode": "PI_MS_0000",
            "resultMessage": "OK",
            "executionTime": 1695,
            "requestId": "6b86993c-487f-4745-874f-1372203afeca"
        },
        "scanDocument": {
            "type": {
                "code": "1",
                "value": "CARTA D'IDENTITA'"
            },
            "sides": {
                "front": {
                    "url": "minio://postepay-code-documents:b963e0da-b61f-4074-b47c-e8efe9ea0f5b/68a34ef3-e5dc-49cc-9c6d-4d7033d1020b.",
                    "customData": {
                        "minio-url": "minio://postepay-code-documents:b963e0da-b61f-4074-b47c-e8efe9ea0f5b/68a34ef3-e5dc-49cc-9c6d-4d7033d1020b."
                    }
                },
                "back": {
                    "url": "minio://postepay-code-documents:b963e0da-b61f-4074-b47c-e8efe9ea0f5b/b568a3be-f369-44fd-8c95-9d79e580b7c5.",
                    "customData": {
                        "minio-url": "minio://postepay-code-documents:b963e0da-b61f-4074-b47c-e8efe9ea0f5b/b568a3be-f369-44fd-8c95-9d79e580b7c5."
                    }
                }
            },
            "subType": "Cartaceo"
        }
    }
    getDocs(): Object {
        return this.responseDocuments;
    }
}
