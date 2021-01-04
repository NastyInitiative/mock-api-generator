import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    feaStatus = {
        "feaStatus": "COMPLETED"
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

    // docIds = {
    //     "documents": [
    //         {
    //             "id": "MOD_CONTRATTO_FEA",
    //             "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/digital-signature/5ccc1a07-3546-497c-8ece-fdade1320271/MOD_CONTRATTO_FEA.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201112T185256Z&X-Amz-SignedHeaders=host&X-Amz-Expires=419&X-Amz-Credential=SfU1xnBs%2F20201112%2FUS_EAST_1%2Fs3%2Faws4_request&X-Amz-Signature=803acd1cc2b916b50793d7daf022de3f5b70515531b42d6bb52a8dbea95e1b12",
    //             "description": "Richiesta di adesione e Condizioni relative all'uso della firma elettronica avanzata (PDF)",
    //             "fields": [
    //                 {
    //                     "name": "accept1",
    //                     "fieldGroup": "FEA_SIGN",
    //                     "shortDescription": "Conferma della richiesta di adesione e accettazione delle Condizioni della firma elettronica avanzata",
    //                     "longDescription": "Conferma della richiesta di adesione e accettazione delle Condizioni relative all'uso della firma elettronica avanzata",
    //                     "optional": false
    //                 },
    //                 {
    //                     "name": "accept2",
    //                     "fieldGroup": "FEA_SIGN",
    //                     "shortDescription": "Condizioni di utilizzo della firma elettronica avanzata",
    //                     "longDescription": "Il Cliente dichiara, inoltre di approvare specificatamente anche ai sensi e per gli effetti degli articoli 1341 e 1342 del Codice Civile, le disposizioni contenute Condizioni relative all'uso della firma elettronica avanzata",
    //                     "optional": false
    //                 }
    //             ]
    //         },
    //         {
    //             "id": "CARATTERISTICHE_FEA",
    //             "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
    //             "description": "Caratteristiche tecnologiche della soluzione FEA",
    //             "fields": [
    //                 {
    //                     "name": "Signature1",
    //                     "fieldGroup": "B",
    //                     "shortDescription": "Condizioni di utilizzo della firma elettronica avanzata",
    //                     "longDescription": "Il Cliente dichiara, inoltre, di approvare specificatamente le clausole di seguito riportate (cc.dd. clausole vessatorie) relative alle disposizioni contenute nelle Condizioni della Firma Elettronica Avanzata: articoli 3, 4, 7, 8, 12 e 17.",
    //                     "optional": true
    //                 },
    //                 {
    //                     "name": "Signature2",
    //                     "fieldGroup": "B",
    //                     "shortDescription": "Condizioni di utilizzo della firma elettronica avanzata",
    //                     "longDescription": "Il Cliente dichiara, inoltre, di approvare specificatamente le clausole di seguito riportate (cc.dd. clausole vessatorie) relative alle disposizioni contenute nelle Condizioni della Firma Elettronica Avanzata: articoli 3, 4, 7, 8, 12 e 17.",
    //                     "optional": true
    //                 },
    //             ]
    //         },
    //         {
    //             "id": "PRIVACY_FEA",
    //             "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
    //             "description": "Caratteristiche tecnologiche della soluzione FEA",
    //             "fields": [
    //                 {
    //                     "name": "Signature1",
    //                     "fieldGroup": "B",
    //                     "shortDescription": "Condizioni di utilizzo della firma elettronica avanzata",
    //                     "longDescription": "Il Cliente dichiara, inoltre, di approvare specificatamente le clausole di seguito riportate (cc.dd. clausole vessatorie) relative alle disposizioni contenute nelle Condizioni della Firma Elettronica Avanzata: articoli 3, 4, 7, 8, 12 e 17.",
    //                     "optional": true
    //                 },
    //                 {
    //                     "name": "Signature2",
    //                     "fieldGroup": "B",
    //                     "shortDescription": "Condizioni di utilizzo della firma elettronica avanzata",
    //                     "longDescription": "Il Cliente dichiara, inoltre, di approvare specificatamente le clausole di seguito riportate (cc.dd. clausole vessatorie) relative alle disposizioni contenute nelle Condizioni della Firma Elettronica Avanzata: articoli 3, 4, 7, 8, 12 e 17.",
    //                     "optional": true
    //                 },
    //             ]
    //         }
    //     ]
    // }

    docIds = {
        "documents":[
           {
              "id":"PRIVACY_FEA",
              "url":"https://minio-service-minio-distributed.app.svil2.ocprm.testposte/feastatics/v1/PRIVACY_FEA?response-content-disposition=inline&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201125T070354Z&X-Amz-SignedHeaders=host&X-Amz-Expires=419&X-Amz-Credential=SfU1xnBs%2F20201125%2FUS_EAST_1%2Fs3%2Faws4_request&X-Amz-Signature=5a932217a26607e31238e6902f978889e81281da35b3cb20cdef13c529220827",
              "description":"Condizioni relative all’uso della firma elettronica avanzata da canali digitali",
              "fields":[
                 
              ]
           },
           {
              "id":"CARATTERISTICHE_FEA",
              "url":"https://minio-service-minio-distributed.app.svil2.ocprm.testposte/feastatics/v1/CARATTERISTICHE_FEA?response-content-disposition=inline&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201125T070354Z&X-Amz-SignedHeaders=host&X-Amz-Expires=420&X-Amz-Credential=SfU1xnBs%2F20201125%2FUS_EAST_1%2Fs3%2Faws4_request&X-Amz-Signature=995a81070c4f585b027b66014f921fb82a183143a0adebd2194158bb051ca367",
              "description":"Caratteristiche della soluzione di firma elettronica avanzata da canali digitali",
              "fields":[
                 
              ]
           },
           {
              "id":"MOD_CONTRATTO_FEA",
              "url":"https://minio-service-minio-distributed.app.svil2.ocprm.testposte/digital-signature/418aa372-e44b-4ed2-b6a6-2d18f8ff1107/MOD_CONTRATTO_FEA.pdf?response-content-disposition=inline&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201125T070354Z&X-Amz-SignedHeaders=host&X-Amz-Expires=419&X-Amz-Credential=SfU1xnBs%2F20201125%2FUS_EAST_1%2Fs3%2Faws4_request&X-Amz-Signature=a7e32be4f767d93ad347fcb482d8e781b5a9be1a605bec659250171c263b6426",
              "description":"Richiesta di adesione e Condizioni relative all'uso della firma elettronica avanzata (PDF)",
              "fields":[
                 {
                    "name":"accept1",
                    "fieldGroup":"FEA_SIGN",
                    "shortDescription":"Conferma della richiesta di adesione e accettazione delle Condizioni della firma elettronica avanzata",
                    "longDescription":"Conferma della richiesta di adesione e accettazione delle Condizioni relative all'uso della firma elettronica avanzata",
                    "optional":false
                 },
                 {
                    "name":"accept2",
                    "fieldGroup":"FEA_SIGN",
                    "shortDescription":"Condizioni di utilizzo della firma elettronica avanzata",
                    "longDescription":"Il Cliente dichiara, inoltre di approvare specificatamente anche ai sensi e per gli effetti degli articoli 1341 e 1342 del Codice Civile, le disposizioni contenute Condizioni relative all'uso della firma elettronica avanzata",
                    "optional":false
                 }
              ]
           }
        ]
    };

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
    getErrorResp() {
            return this.errorResp;
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

    getDocId() {
        return this.docIds;
    }
}
