import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractsService {
    // contracts = {
    //     "contracts": [
    //         {
    //             "id": "6e389ae6-4d01-44d2-92a2-623975eaf07a",
    //             "signed": false
    //         },
    //         {
    //             "id": "6e389ae6-4d01-44d2-92a2-623975eaf06b",
    //             "signed": false
    //         }
    //     ]
    // }
    contracts = {
        "contracts": [
            
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
        "5ceebf6c-cd63-4e4c-a1c0-377b4ef33064": {
            "filename": "PosteSoluzionePremium - Precontrattuale DIP Aggiuntivo.pdf",
            "attributes": {
                "value": [
                    {
                        "value": " PosteSoluzionePremium - Precontrattuale DIP Aggiuntivo ",
                        "name": "ids:ui:description"
                    },
                    {
                        "value": "Contratti",
                        "name": "ids:all:documentGroup"
                    },
                    {
                        "value": " true ",
                        "name": "ids:wf:sendToCds"
                    },
                    {
                        "value": " ACCETTAZIONE_FIRMA ",
                        "name": "ids:wf:type"
                    }
                ]
            },
            "metadata": {
                "value": []
            }
        },
        "c3d652f3-bc24-4a95-81d6-4b933a6e27d7": {
            "filename": "Proposta di Consulenza - FullKit.pdf",
            "attributes": {
                "value": [
                    {
                        "value": " Proposta di Consulenza - FullKit ",
                        "name": "ids:ui:description"
                    },
                    {
                        "value": "Contratti",
                        "name": "ids:all:documentGroup"
                    },
                    {
                        "value": " true ",
                        "name": "ids:wf:sendToCds"
                    },
                    {
                        "value": " ACCETTAZIONE_FIRMA ",
                        "name": "ids:wf:type"
                    }
                ]
            },
            "metadata": {
                "value": []
            },
            "signatureFields": [
                {
                    "attributes": {
                        "value": [
                            {
                                "value": "Contratti",
                                "name": "ids:ui:fieldGroup"
                            },
                            {
                                "value": " Firma Cliente ",
                                "name": "ids:ui:shortDescription"
                            },
                            {
                                "value": " Firma Cliente / Legale rappresentante / Soggetto munito di idonei poteri ",
                                "name": "ids:ui:longDescription"
                            },
                            {
                                "value": " false ",
                                "name": "ids:all:isOptional"
                            }
                        ]
                    },
                    "location": {
                        "value": [
                            {
                                "value": " Signature1 ",
                                "name": "name"
                            }
                        ],
                        "type": "fieldName"
                    },
                    "actorRefs": {
                        "actorRef": [
                            {
                                "id": "a0b8d677-b573-43d7-aceb-d076907d795e"
                            }
                        ]
                    },
                    "type": "signature",
                    "index": 0
                }
            ]
        },
        "8b7e519e-2db8-49fe-a1a2-88abcbcc9392": {
            "filename": "PosteSoluzionePremium - Contratto CGA.pdf",
            "attributes": {
                "value": [
                    {
                        "value": " PosteSoluzionePremium - Contratto CGA ",
                        "name": "ids:ui:description"
                    },
                    {
                        "value": "Contratti",
                        "name": "ids:all:documentGroup"
                    },
                    {
                        "value": " true ",
                        "name": "ids:wf:sendToCds"
                    },
                    {
                        "value": " ACCETTAZIONE_FIRMA ",
                        "name": "ids:wf:type"
                    }
                ]
            },
            "metadata": {
                "value": []
            }
        },
        "f89e513d-ac54-4e05-aa1f-f7c38e580823": {
            "filename": "Dichiarazione Conflitto Interessi - Polizze Vita.pdf",
            "attributes": {
                "value": [
                    {
                        "value": " Dichiarazione Conflitto Interessi - Polizze Vita ",
                        "name": "ids:ui:description"
                    },
                    {
                        "value": "Contratti",
                        "name": "ids:all:documentGroup"
                    },
                    {
                        "value": " true ",
                        "name": "ids:wf:sendToCds"
                    },
                    {
                        "value": " ACCETTAZIONE_FIRMA ",
                        "name": "ids:wf:type"
                    }
                ]
            },
            "metadata": {
                "value": []
            },
            "signatureFields": [
                {
                    "attributes": {
                        "value": [
                            {
                                "value": "Contratti",
                                "name": "ids:ui:fieldGroup"
                            },
                            {
                                "value": " Firma Cliente ",
                                "name": "ids:ui:shortDescription"
                            },
                            {
                                "value": " Firma Cliente ",
                                "name": "ids:ui:longDescription"
                            },
                            {
                                "value": " false ",
                                "name": "ids:all:isOptional"
                            }
                        ]
                    },
                    "location": {
                        "value": [
                            {
                                "value": " Signature1 ",
                                "name": "name"
                            }
                        ],
                        "type": "fieldName"
                    },
                    "actorRefs": {
                        "actorRef": [
                            {
                                "id": "a0b8d677-b573-43d7-aceb-d076907d795e"
                            }
                        ]
                    },
                    "type": "signature",
                    "index": 0
                }
            ]
        },
        "6ac691db-f32e-4072-b42c-702b411e916e": {
            "filename": "QuestionarioAdeguataVerifica - eventi assicurativi.pdf",
            "attributes": {
                "value": [
                    {
                        "value": " QuestionarioAdeguataVerifica - eventi assicurativi ",
                        "name": "ids:ui:description"
                    },
                    {
                        "value": "Contratti",
                        "name": "ids:all:documentGroup"
                    },
                    {
                        "value": " true ",
                        "name": "ids:wf:sendToCds"
                    },
                    {
                        "value": " ACCETTAZIONE_FIRMA ",
                        "name": "ids:wf:type"
                    }
                ]
            },
            "metadata": {
                "value": []
            },
            "signatureFields": [
                {
                    "attributes": {
                        "value": [
                            {
                                "value": "Contratti",
                                "name": "ids:ui:fieldGroup"
                            },
                            {
                                "value": " Firma Cliente ",
                                "name": "ids:ui:shortDescription"
                            },
                            {
                                "value": " Firma Cliente ",
                                "name": "ids:ui:longDescription"
                            },
                            {
                                "value": " false ",
                                "name": "ids:all:isOptional"
                            }
                        ]
                    },
                    "location": {
                        "value": [
                            {
                                "value": " Signature1 ",
                                "name": "name"
                            }
                        ],
                        "type": "fieldName"
                    },
                    "actorRefs": {
                        "actorRef": [
                            {
                                "id": "a0b8d677-b573-43d7-aceb-d076907d795e"
                            }
                        ]
                    },
                    "type": "signature",
                    "index": 0
                },
                {
                    "attributes": {
                        "value": [
                            {
                                "value": "CGS",
                                "name": "ids:ui:fieldGroup"
                            },
                            {
                                "value": "Seconda Firma",
                                "name": "ShortDescription"
                            },
                            {
                                "value": "Dichiaro di aver preso visione e di approvare specificatamente, anche ai sensi e per gli effetti degli artt. 1341 e 1342 del codice civile, le disposizioni contenute negli articoli di seguito riportati:</br><b>Condizioni generali di contratto del Libretto Smart</b>: PARTE I - art.3 (Caratteristiche del Libretto nominativo Smart; art. 4 (Intestazione del Libretto nominativo Smart); art. 5 (Richiesta di apertura del libretto ed identificazione della Clientela e di altri soggetti autorizzati a operare nei rapporti con Poste Italiane); art. 6 (Rendiconto delle registrazioni contabili del libretto dematerializzato. Comunicazioni al Cliente); art. 7 (Deposito di firme autorizzate ad operare); art. 8 (Limite di prelevamento in contanti); art. 9 (Interessi); art. 11 (Recesso â€“ Estinzione); art. 13 (Condizioni contrattuali ed economiche e relative variazioni); art. 15 (Compensazione). PARTE II -  art. 18 (TitolaritÃ ); art. 20 (Custodia della Carta e del PIN); art. 21 (ModalitÃ  di utilizzo della Carta); art. 22 (Limitazioni nellâ€™utilizzo della Carta); art. 23 (Smarrimento o sottrazione della Carta o del PIN); art. 24 (Comunicazioni); art. 25 (Modifica unilaterale delle condizioni contrattuali); art. 26 (Recesso ed estinzione); art. 27 (Restituzione della Carta). PARTE III â€“ art. 28 (Oggetto); art. 29 (Attivazione del servizio - Sicurezza â€“ Strumenti identificativi ed operativi); art. 30 (OperativitÃ  - Esecuzione, revoca e rifiuto delle operazioni); art. 31 (Registrazioni delle operazioni dispositive); art. 32 (Comunicazioni); art. 33 (Sospensione); art. 34 (Diligenza - ResponsabilitÃ  - Cause di esclusione); art. 35 (Modifica unilaterale delle condizioni contrattuali); art. 36 (Durata, recesso ed estinzione). PARTE IV â€“  art. 39 (Interessi); art. 40 (Rinnovo â€“ Estinzione dellâ€™Accantonamento); art. 41 (Regime fiscale); art. 42 (Disposizioni applicabili). PARTE V â€“ Disposizioni comuni: art. 43 (Lingua, legge applicabile e Foro competente); art. 44 (Reclami, risoluzione stragiudiziale delle controversie. Clausola di mediazione).</br><b>Condizioni generali di contratto e Regolamento del Prestito per la sottoscrizione dei Buoni Fruttiferi Postali dematerializzati</b>: art. 6 (Rimborso a scadenza e anticipato).",
                                "name": "ids:ui:longDescription"
                            },
                            {
                                "value": "\n\t\t              60\n\t\t            ",
                                "name": "custom:bancoposta:ids:ui:numberofwordstoshow"
                            },
                            {
                                "value": "False",
                                "name": "ids:all:isOptional"
                            }
                        ]
                    },
                    "location": {
                        "value": [
                            {
                                "value": "Signature2",
                                "name": "name"
                            }
                        ],
                        "type": "fieldName"
                    },
                    "actorRefs": {
                        "actorRef": [
                            {
                                "id": "1"
                            }
                        ]
                    },
                    "type": "signature",
                    "index": 1
                }
            ]
        }
	}
    // documents = {
    //     "4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a":{
    //         "filename":"Questionario di adeguata verifica.pdf",
    //         "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
    //         "attributes":{
    //             "type": null, 
    //             "description": "Questionario di adeguata verifica"
    //         },
    //         "metadata":{},
    //         "signatureFields":[
    //             {
    //                 "type": "signature",
    //                 "index": 0,
    //                 "attributes": {
    //                     "fieldGroup":"CONTRACT",
    //                     "name": "signature1",
    //                     "ShortDescription": "Firma del Cliente",
    //                     "longDescription": "L'Esercente approva specificatamente ai sensi e per gli effetti degli art. 1341 e 1342 c.c., le seguenti clausole contenute nelle Condizioni Generali Servizio di acquiring Postepay Codice art. 2 (Accettazione delle Carte, Modalità di accettazione delle transazioni); art3 (Obblighi dell'Esercente nell'esecuzione delle Transazioni, nei confronti del Titolare e dellAcquirer) punti 2,3,4,5 num. iv e v, 8; art. 4 (Rifiuto-Riaddebito dei Pagamenti); art. 5 (Sospensione del pagamento); art. 6 (Modalità di accredito e addebito - condizioni economiche) punti 1 e 6, art. 7 (Rendiconto e comunicazioni periodiche) punto 3 e 4; art. 8 (Durata - Recesso - Tempi massimi di chiusura - Estinzione) punti 2,5 e 6, art. 9 (Sospensione - Blocco delloperatività); art. 10 (Comunicazioni) punto 2; art. 13 (Modifica unilaterale delle condizioni contrattuali) punti 1 e 3, art.14 (Responsabilità dell'Esercente per contestazioni o reclami del Titolare); art. 16 (Clausola risolutiva espressa - Risoluzione) punti 1,2; art.17 (Dati informativi riguardanti l'Esercente) punto 2; art. 18 (Trattamento dei dati personali e riservatezza) punti 5 e 6, art. 19 (Lingua del Contratto. Legge applicabile e foro competente. Politica Integrata di Gruppo) punto 2.",
    //                     "numberOfWordsToShow": 62,
    //                     "isOptional": false
    //                 }	
    //             },
    //             {
    //                 "type": "signature",
    //                 "index": 1,
    //                 "attributes": {
    //                     "fieldGroup":"CGS",
    //                     "name": "signature2",
    //                     "ShortDescription": "Seconda Firma",
    //                     "longDescription": "Dichiaro di aver preso visione e di approvare....",
    //                     "numberOfWordsToShow": 60,
    //                     "isOptional": false
    //                 }		
    //             }
    //         ]		
    //     },
    //     "8240353e-6315-4030-94ee-c2da9a95fa85":{
    //         "filename":"Contratto di noleggio.pdf",
    //         "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
    //         "attributes":{
    //             "description": "Contratto di noleggio",
    //             "type": null
    //         },
    //         "metadata":{},
    //         "signatureFields":[
    //             {
    //                 "type": "checkbox",
    //                 "index": 0,
    //                 "attributes": {
    //                     "fieldGroup":"CONTRACT_FLAG",
    //                     "name": "signature1",
    //                     "ShortDescription": "Accettazione del Cliente",
    //                     "longDescription": "Conferma della Richiesta di adesione e accettazione...",
    //                     "isOptional": false
    //                 }		
    //             },
    //             {
    //                 "type": "checkbox",
    //                 "index": 1,
    //                 "attributes": {
    //                     "fieldGroup":"CONTRACT_FLAG",
    //                     "name": "signature2",
    //                     "ShortDescription": "Accettazione del Cliente",
    //                     "longDescription": "Il Cliente dichiara, inoltre, di...",
    //                     "numberOfWordsToShow": 62,
    //                     "isOptional": false
    //                 }		
    //             }
    //         ]		
    //     },
    //     "c515f808-529d-4fbf-9111-a9d7c117a329":{
    //         "filename":"Modulo di richiesta del Buono Fruttifero e del Libretto Smart.pdf",
    //         "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
    //         "attributes":{
    //             "description": "Modulo di richiesta del Buono Fruttifero Libretto Smart",
    //             "type": null
    //         },
    //         "metadata":{},
    //         "signatureFields":[
    //             {
    //                 "type": "signature",
    //                 "index": 0,
    //                 "attributes": {
    //                     "fieldGroup":"CONTRACT",
    //                     "name": "signature1",
    //                     "ShortDescription": "Prima firma",
    //                     "longDescription": "Il/La sottoscritto/a richiede l’apertura del Libretto Smart....",
    //                     "numberOfWordsToShow": 69,
    //                     "isOptional": false
    //                 }		
    //             },
    //             {
    //                 "type": "signature",
    //                 "index": 1,
    //                 "attributes": {
    //                     "fieldGroup":"CGS",
    //                     "name": "signature2",
    //                     "ShortDescription": "Seconda Firma",
    //                     "longDescription": "Dichiaro di aver preso visione e di approvare....",
    //                     "numberOfWordsToShow": 60,
    //                     "isOptional": false
    //                 }		
    //             }
    //         ]
    //     },
    //     "3ead7a0c-82d7-40f5-a5be-02337e480401":{
    //         "filename":"Modulo di variazione anagrafica.pdf",
    //         "url": "https://minio-service-minio-distributed.app.svil2.ocprm.testposte/pom-oad/P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868/PosteSoluzionePremium%20-%20Precontrattuale%20DIP%20Aggiuntivo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SfU1xnBs%2F20201112%2F%2Fs3%2Faws4_request&X-Amz-Date=20201112T114432Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5869b641d36ae085cf4b0c351eeec5d687e976121b97fb8abc74e8b0ae3fb409",
    //         "attributes":{
    //             "description": "Modulo di variazione anagrafica",
    //             "type": null
    //         },
    //         "metadata":{},
    //         "signatureFields":[
    //             {
    //                 "type": "checkbox",
    //                 "index": 0,
    //                 "attributes": {
    //                     "fieldGroup":"CUSTOMER_CHANGES",
    //                     "name": "signature1",
    //                     "ShortDescription": "Accettazione del Cliente",
    //                     "longDescription": "Conferma della Richiesta di adesione e accettazione...",
    //                     "numberOfWordsToShow": 75,
    //                     "isOptional": false
    //                 }		
    //             }
    //         ]
    //     }
	// }
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
