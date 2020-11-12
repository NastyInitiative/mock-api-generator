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

    docIds = {
        "documents": [
            {
                "id": "MOD_CONTRATTO_FEA",
                "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/Proposta%20di%20Consulenza%20-%20FullKit.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114011Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=ecfdd03742adf82fface64a83384f036a03f57ca726cd9baf7d341b0ff2baf9c",
                "description": "Richiesta di adesione alla Firma Elettronica Avanzata (FEA)",
                "fields": [
                        {
                        "name": "Signature1",
                        "fieldGroup": "A",
                        "shortDescription": "Conferma della richiesta di adesione e accettazione delle Condizioni della firma elettronica avanzata",
                        "longDescription": "Conferma della Richiesta di adesione e accettazione delle Condizioni relative all’uso della Firma Elettronica Avanzata.",
                        "optional": true
                        },
                        {
                        "name": "Signature2",
                        "fieldGroup": "A",
                        "shortDescription": "Condizioni di utilizzo della firma elettronica avanzata",
                        "longDescription": "Il Cliente dichiara, inoltre, di approvare specificatamente le clausole di seguito riportate (cc.dd. clausole vessatorie) relative alle disposizioni contenute nelle Condizioni della Firma Elettronica Avanzata: articoli 3, 4, 7, 8, 12 e 17.",
                        "optional": true
                        },
                    ]
          },
          {
                "id": "CARATTERISTICHE_FEA",
                "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
                "description": "Caratteristiche tecnologiche della soluzione FEA",
                "fields": [
                    {
                        "name": "Signature1",
                        "fieldGroup": "B",
                        "shortDescription": "Condizioni di utilizzo della firma elettronica avanzata",
                        "longDescription": "Il Cliente dichiara, inoltre, di approvare specificatamente le clausole di seguito riportate (cc.dd. clausole vessatorie) relative alle disposizioni contenute nelle Condizioni della Firma Elettronica Avanzata: articoli 3, 4, 7, 8, 12 e 17.",
                        "optional": true
                    },
                    {
                        "name": "Signature2",
                        "fieldGroup": "B",
                        "shortDescription": "Condizioni di utilizzo della firma elettronica avanzata",
                        "longDescription": "Il Cliente dichiara, inoltre, di approvare specificatamente le clausole di seguito riportate (cc.dd. clausole vessatorie) relative alle disposizioni contenute nelle Condizioni della Firma Elettronica Avanzata: articoli 3, 4, 7, 8, 12 e 17.",
                        "optional": true
                    },
                ]
            },
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

    getDocId() {
        return this.docIds;
    }
}
