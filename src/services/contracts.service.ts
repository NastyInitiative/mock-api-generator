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

    documents = {
        "4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a":{
            "filename":"Questionario di adeguata verifica.pdf",
            "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
            "attributes":{
                "type": null, 
                "description": "Questionario di adeguata verifica"
            },
            "metadata":{},
            "signatureFields":[
                {
                    "type": "signature",
                    "index": 0,
                    "attributes": {
                        "fieldGroup":"CONTRACT",
                        "name": "signature1",
                        "ShortDescription": "Firma del Cliente",
                        "longDescription": "L'Esercente approva specificatamente ai sensi e per gli effetti degli art. 1341 e 1342 c.c., le seguenti clausole contenute nelle Condizioni Generali Servizio di acquiring Postepay Codice art. 2 (Accettazione delle Carte, Modalità di accettazione delle transazioni); art3 (Obblighi dell'Esercente nell'esecuzione delle Transazioni, nei confronti del Titolare e dellAcquirer) punti 2,3,4,5 num. iv e v, 8; art. 4 (Rifiuto-Riaddebito dei Pagamenti); art. 5 (Sospensione del pagamento); art. 6 (Modalità di accredito e addebito - condizioni economiche) punti 1 e 6, art. 7 (Rendiconto e comunicazioni periodiche) punto 3 e 4; art. 8 (Durata - Recesso - Tempi massimi di chiusura - Estinzione) punti 2,5 e 6, art. 9 (Sospensione - Blocco delloperatività); art. 10 (Comunicazioni) punto 2; art. 13 (Modifica unilaterale delle condizioni contrattuali) punti 1 e 3, art.14 (Responsabilità dell'Esercente per contestazioni o reclami del Titolare); art. 16 (Clausola risolutiva espressa - Risoluzione) punti 1,2; art.17 (Dati informativi riguardanti l'Esercente) punto 2; art. 18 (Trattamento dei dati personali e riservatezza) punti 5 e 6, art. 19 (Lingua del Contratto. Legge applicabile e foro competente. Politica Integrata di Gruppo) punto 2.",
                        "numberOfWordsToShow": 62,
                        "isOptional": false
                    }	
                },
                {
                    "type": "signature",
                    "index": 1,
                    "attributes": {
                        "fieldGroup":"CGS",
                        "name": "signature2",
                        "ShortDescription": "Seconda Firma",
                        "longDescription": "Dichiaro di aver preso visione e di approvare....",
                        "numberOfWordsToShow": 60,
                        "isOptional": false
                    }		
                }
            ]		
        },
        "8240353e-6315-4030-94ee-c2da9a95fa85":{
            "filename":"Contratto di noleggio.pdf",
            "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
            "attributes":{
                "description": "Contratto di noleggio",
                "type": null
            },
            "metadata":{},
            "signatureFields":[
                {
                    "type": "checkbox",
                    "index": 0,
                    "attributes": {
                        "fieldGroup":"CONTRACT_FLAG",
                        "name": "signature1",
                        "ShortDescription": "Accettazione del Cliente",
                        "longDescription": "Conferma della Richiesta di adesione e accettazione...",
                        "isOptional": false
                    }		
                },
                {
                    "type": "checkbox",
                    "index": 1,
                    "attributes": {
                        "fieldGroup":"CONTRACT_FLAG",
                        "name": "signature2",
                        "ShortDescription": "Accettazione del Cliente",
                        "longDescription": "Il Cliente dichiara, inoltre, di...",
                        "numberOfWordsToShow": 62,
                        "isOptional": false
                    }		
                }
            ]		
        },
        "c515f808-529d-4fbf-9111-a9d7c117a329":{
            "filename":"Modulo di richiesta del Buono Fruttifero e del Libretto Smart.pdf",
            "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
            "attributes":{
                "description": "Modulo di richiesta del Buono Fruttifero Libretto Smart",
                "type": null
            },
            "metadata":{},
            "signatureFields":[
                {
                    "type": "signature",
                    "index": 0,
                    "attributes": {
                        "fieldGroup":"CONTRACT",
                        "name": "signature1",
                        "ShortDescription": "Prima firma",
                        "longDescription": "Il/La sottoscritto/a richiede l’apertura del Libretto Smart....",
                        "numberOfWordsToShow": 69,
                        "isOptional": false
                    }		
                },
                {
                    "type": "signature",
                    "index": 1,
                    "attributes": {
                        "fieldGroup":"CGS",
                        "name": "signature2",
                        "ShortDescription": "Seconda Firma",
                        "longDescription": "Dichiaro di aver preso visione e di approvare....",
                        "numberOfWordsToShow": 60,
                        "isOptional": false
                    }		
                }
            ]
        },
        "3ead7a0c-82d7-40f5-a5be-02337e480401":{
            "filename":"Modulo di variazione anagrafica.pdf",
            "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
            "attributes":{
                "description": "Modulo di variazione anagrafica",
                "type": null
            },
            "metadata":{},
            "signatureFields":[
                {
                    "type": "checkbox",
                    "index": 0,
                    "attributes": {
                        "fieldGroup":"CUSTOMER_CHANGES",
                        "name": "signature1",
                        "ShortDescription": "Accettazione del Cliente",
                        "longDescription": "Conferma della Richiesta di adesione e accettazione...",
                        "numberOfWordsToShow": 75,
                        "isOptional": false
                    }		
                }
            ]
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

    getDocuments() {
        return this.documents;
    }

}
