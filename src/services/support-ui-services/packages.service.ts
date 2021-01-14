import { Injectable } from '@nestjs/common';

const first = "2c218d38-3068-4b03-9acd-7e5c8f005f4d"
const second = "e90c70bc-31de-42ef-bba3-cbc014e36f7b"
@Injectable()
export class PackagesService {
    successResponse = {
        "info": {
          "executionTime": 123,
          "requestId": first,
          "resultCode": "string",
          "resultDetails": [
            "string"
          ],
          "resultMessage": "string"
        }
    }

    getSuccessResponse() {
        return this.successResponse
    }
}
