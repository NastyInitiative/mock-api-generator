import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
    gender =  [ 
        {
            "code": "M",
            "value": "MASCHIO"
        },
        {
            "code": "F",
            "value": "FEMMINA"
        },
        {
            "code": "NS",
            "value": "Non saprei"
        },
        {
            "code": "?",
            "value": "Sono confuso"
        }
     ]

    fdi = {
        "instanceId": "4a7d2cf2-5c1d-4bd7-9039-964db85cd3cd",
        "data": {
            "funnel": {
                "uid": "4a7d2cf2-5c1d-4bd7-9039-964db85cd3cd",
                "creationDate": "2020-11-24T12:58:08.236+0000",
                "lastEdit": "2020-11-24T12:58:08.341+0000",
                "steps": [
                    {
                        "stepId": "catalog",
                        "stepName": "Catalogo Prodotti",
                        "uid": "df9af84b-bc6e-4159-b865-b3c37c2e54d7",
                        "level": 0,
                        "priority": 100,
                        "disallowGoBack": false,
                        "gate": false,
                        "enabled": true,
                        "hidden": false,
                        "internal": true,
                        "running": false,
                        "endpoint": "/catalog",
                        "state": "ok",
                        "success": true,
                        "completed": true,
                        "completedDate": "2020-11-24T12:58:08.341+0000",
                        "productIds": [],
                        "dependsOnSteps": [],
                        "dependsOnLevels": []
                    }
                ],
                "executedUids": [
                    "df9af84b-bc6e-4159-b865-b3c37c2e54d7"
                ],
                "nextUids": [],
                "lastStepId": "catalog",
                "previousStepUrl": "/catalog",
                "navigationInfo": {
                    "lastCompletedStepUrl": "/catalog",
                    "lastCompletedNavigableStepUrl": "/catalog",
                    "lastGateStepLevel": 0
                },
                "byProduct": {}
            },
            "customers": {
                "info": {
                    "lastUpdate": "2020-11-24T12:58:04.202+0000"
                },
                "items": {
                    "234c576a-8e7c-4329-816e-a8fbdd1e7dec": {
                        "addresses": [
                            {
                                "type": {
                                    "code": "6",
                                    "value": "DOMICILIO"
                                },
                                "toponym": "VIALE EUROPA",
                                "number": "175",
                                "city": {
                                    "code": "H501",
                                    "value": "ROMA"
                                },
                                "province": {
                                    "code": "RM",
                                    "value": "ROMA"
                                },
                                "zipCode": {
                                    "value": "00144"
                                },
                                "country": {
                                    "code": "IT",
                                    "value": "ITALIA"
                                },
                                "fullAddress": "VIALE EUROPA 175"
                            },
                            {
                                "type": {
                                    "code": "2",
                                    "value": "RESIDENZA"
                                },
                                "toponym": "VIALE EUROPA",
                                "number": "175",
                                "city": {
                                    "code": "H501",
                                    "value": "ROMA"
                                },
                                "province": {
                                    "code": "RM",
                                    "value": "ROMA"
                                },
                                "zipCode": {
                                    "value": "00144"
                                },
                                "country": {
                                    "code": "IT",
                                    "value": "ITALIA"
                                },
                                "fullAddress": "VIALE EUROPA 175"
                            }
                        ],
                        "attributes": [],
                        "bankAccounts": [],
                        "emails": [
                            {
                                "email": "alfreda.actualrpol@posteitaliane.it",
                                "type": {
                                    "code": "27",
                                    "value": "EMAIL CERTIFICATA"
                                }
                            },
                            {
                                "email": "ALFREDA.ACTUALRPOL@POSTEITALIANE.IT",
                                "type": {
                                    "code": "2",
                                    "value": "EMAIL"
                                }
                            }
                        ],
                        "id": "234c576a-8e7c-4329-816e-a8fbdd1e7dec",
                        "legalInfo": {
                            "businessActivities": [],
                            "salesPoints": [],
                            "subscriptions": [],
                            "websites": []
                        },
                        "legalNature": "PF",
                        "ndg": {
                            "id": "0000055299279",
                            "customData": {
                                "ndgOrdinante": "28210535"
                            }
                        },
                        "personInfo": {
                            "firstName": "DEHHI",
                            "lastName": "ZANXI",
                            "gender": {
                                "code": "M",
                                "value": "MASCHIO"
                            },
                            "citizenships": [],
                            "birthProvince": {
                                "code": "VC",
                                "value": "VERCELLI"
                            },
                            "birthCity": {
                                "code": "G702",
                                "value": "PISA"
                            },
                            "birthCountry": {
                                "code": "IT",
                                "value": "ITALIA"
                            },
                            "postalEmployee": false,
                            "economicClassification": [
                                {
                                    "type": "SAE",
                                    "code": "0600",
                                    "description": "FAMIGLIE CONSUMATRICI"
                                },
                                {
                                    "type": "RAE",
                                    "code": "0000",
                                    "description": "NON VALORIZZABILE"
                                },
                                {
                                    "type": "CIAE",
                                    "code": "6090",
                                    "description": "DIPENDENTE PRIVATO"
                                }
                            ],
                            "customData": {
                                "customerCodes": [
                                    {
                                        "code": "idClienteAuc",
                                        "value": "1412824727"
                                    },
                                    {
                                        "code": "businessPartner",
                                        "value": "3981128783"
                                    },
                                    {
                                        "code": "ndg",
                                        "value": "000007101616"
                                    }
                                ],
                                "newTaxCode": "ZNXDHH16D09M179G"
                            },
                            "birthDate": "1916-04-09"
                        },
                        "phoneNumbers": [
                            {
                                "type": {
                                    "code": "9",
                                    "value": "CELLULARE CERTIFICATO"
                                },
                                "number": "3485928842"
                            },
                            {
                                "type": {
                                    "code": "31",
                                    "value": "CELLULARE DI REGISTRAZIONE"
                                },
                                "number": "3485928842"
                            },
                            {
                                "type": {
                                    "code": "30",
                                    "value": "2° CELLULARE"
                                },
                                "number": "3355254296"
                            }
                        ],
                        "questionnaires": [],
                        "relatedCustomer": [],
                        "taxData": {
                            "taxCode": "CTLLRD85D57G702B",
                            "taxResidences": [
                                {
                                    "country": {
                                        "code": "IT",
                                        "value": "ITALIA"
                                    }
                                }
                            ]
                        },
                        "type": {
                            "code": "A",
                            "value": "ACTUAL"
                        }
                    }
                }
            },
            "documentsV2": {
                "items": {
                    "cfbbb64d-bb0c-434d-924c-42662cdc1af8": {
                        "associatedRoles": [
                            {
                                "role": {
                                    "customerId": "234c576a-8e7c-4329-816e-a8fbdd1e7dec",
                                    "mainCustomer": true
                                }
                            }
                        ],
                        "attributes": [],
                        "childDocuments": [],
                        "id": "cfbbb64d-bb0c-434d-924c-42662cdc1af8",
                        "identityDocumentType": {
                            "code": "1",
                            "value": "CARTA D'IDENTITA'"
                        },
                        "issueCity": {
                            "code": "H501",
                            "value": "ROMA"
                        },
                        "issuedBy": {
                            "code": "1",
                            "value": "COMUNE"
                        },
                        "issueProvince": {
                            "code": "RM"
                        },
                        "mainCustomerId": "234c576a-8e7c-4329-816e-a8fbdd1e7dec",
                        "number": "AT1819191",
                        "productIds": [],
                        "signatures": [],
                        "type": "Identity",
                        "expirationDate": "2020-07-31",
                        "issueDate": "2020-07-06"
                    }
                }
            },
            "wishlist": {
                "info": {
                    "lastUpdate": "2020-11-24T12:58:04.201+0000"
                },
                "items": {
                    "908354df-34c3-43b7-80d9-a85c860e7577": {
                        "productV2": {
                            "additionalData": [
                                {
                                    "attributeAcronym": "idOperazione",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "dettaglioOperazioneTipo",
                                    "attributeValue": "ACCO",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "dettaglioOperazioneCausale",
                                    "attributeValue": "ACQ",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "altriCodici",
                                    "configRules": [],
                                    "values": [
                                        {
                                            "value": "PAMR106",
                                            "description": "rischioPrometeia"
                                        }
                                    ]
                                },
                                {
                                    "attributeAcronym": "controvaloreComplessivo",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "controvalore",
                                    "attributeValue": "5000.0",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "quantita",
                                    "attributeValue": "5000.0",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "prezzo",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "percentuale",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "numeroContratto",
                                    "attributeValue": "nuoviStrumenti",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "need",
                                    "attributeValue": "INV",
                                    "configRules": [],
                                    "values": []
                                }
                            ],
                            "attributes": [],
                            "code": "MR106",
                            "consistencyRules": [],
                            "currency": "EUR",
                            "drivers": [],
                            "entityPricings": [],
                            "externalKeys": [],
                            "familyCode": "POLIZZE",
                            "familyDescription": "POLIZZE",
                            "level": 1,
                            "modules": [],
                            "order": 6,
                            "pricingRules": [],
                            "primaryCode": "MR106",
                            "productFamilies": [],
                            "relatedProducts": [],
                            "saleableRules": [],
                            "shortDescription": "Poste Multi Scelta Premio Ricorrente Linea 1",
                            "subProducts": [
                                {
                                    "additionalData": [
                                        {
                                            "attributeAcronym": "importoPrimoVersamento",
                                            "attributeValue": "4750.0",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "periodicita",
                                            "attributeValue": "0",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "frazionamento",
                                            "attributeValue": "annuale",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "giornoAddebito",
                                            "attributeValue": "19",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "durataPianoMM",
                                            "attributeValue": "0",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "importoRata",
                                            "attributeValue": "250.0",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "importoPiano",
                                            "attributeValue": "0.0",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "nomeCommerciale",
                                            "attributeValue": "Opzione premio ricorrente su polizza",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "attiva",
                                            "attributeValue": "null",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "modifica",
                                            "attributeValue": "null",
                                            "configRules": [],
                                            "values": []
                                        }
                                    ],
                                    "attributes": [],
                                    "code": "MR106_OPZ006",
                                    "consistencyRules": [],
                                    "drivers": [],
                                    "entityPricings": [],
                                    "externalKeys": [],
                                    "level": 2,
                                    "longDescription": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                    "modules": [],
                                    "order": 1,
                                    "pricingRules": [],
                                    "primaryCode": "OPZ006",
                                    "productFamilies": [],
                                    "relatedProducts": [],
                                    "saleableRules": [],
                                    "shortDescription": "Opzione premio ricorrente",
                                    "subProducts": [],
                                    "suites": [],
                                    "tags": [],
                                    "type": "A"
                                }
                            ],
                            "suites": [],
                            "tags": [],
                            "type": "O"
                        },
                        "steps": [
                            "configura-polizza",
                            "qav",
                            "digital-signature",
                            "payment-authorization"
                        ],
                        "listOfTag": []
                    },
                    "37cc040b-26a1-4a1c-8ae5-6f8d61822a69": {
                        "productV2": {
                            "additionalData": [],
                            "attributes": [],
                            "code": "Consulenza",
                            "consistencyRules": [],
                            "drivers": [],
                            "entityPricings": [],
                            "externalKeys": [],
                            "familyCode": "Consulenza",
                            "id": "55355010",
                            "level": 1,
                            "longDescription": "",
                            "modules": [],
                            "order": 1,
                            "pricingRules": [],
                            "primaryCode": "Consulenza",
                            "productFamilies": [],
                            "relatedProducts": [],
                            "saleableRules": [],
                            "shortDescription": "Proposta di consulenza",
                            "startDate": "2020-11-19T12:00:00.000+12:00",
                            "state": "10",
                            "subProducts": [],
                            "suites": [],
                            "tags": [],
                            "type": "Z",
                            "version": "v1"
                        },
                        "steps": [
                            "compila",
                            "configura-riepilogo",
                            "digital-signature"
                        ],
                        "listOfTag": []
                    },
                    "f0321fff-cda2-4043-89ad-b487d4027489": {
                        "productV2": {
                            "additionalData": [
                                {
                                    "attributeAcronym": "idOperazione",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "dettaglioOperazioneTipo",
                                    "attributeValue": "ACCO",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "dettaglioOperazioneCausale",
                                    "attributeValue": "ACQ",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "altriCodici",
                                    "configRules": [],
                                    "values": [
                                        {
                                            "value": "IT0004331820",
                                            "description": "isin"
                                        }
                                    ]
                                },
                                {
                                    "attributeAcronym": "controvaloreComplessivo",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "controvalore",
                                    "attributeValue": "9984.0",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "quantita",
                                    "attributeValue": "9984.0",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "prezzo",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "percentuale",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "need",
                                    "attributeValue": "INV",
                                    "configRules": [],
                                    "values": []
                                }
                            ],
                            "attributes": [],
                            "code": "IT0004331820",
                            "consistencyRules": [],
                            "currency": "EUR",
                            "drivers": [],
                            "entityPricings": [],
                            "externalKeys": [],
                            "familyCode": "FONDI",
                            "familyDescription": "FONDI",
                            "level": 1,
                            "modules": [],
                            "order": 4,
                            "pricingRules": [],
                            "primaryCode": "IT0004331820",
                            "productFamilies": [],
                            "relatedProducts": [],
                            "saleableRules": [],
                            "shortDescription": "Azionario Euro",
                            "subProducts": [
                                {
                                    "additionalData": [
                                        {
                                            "attributeAcronym": "importoPrimoVersamento",
                                            "attributeValue": "9984.0",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "periodicita",
                                            "attributeValue": "1",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "frazionamento",
                                            "attributeValue": "0",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "giornoAddebito",
                                            "attributeValue": "16",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "durataPianoMM",
                                            "attributeValue": "26",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "importoRata",
                                            "attributeValue": "250.0",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "importoPiano",
                                            "attributeValue": "16484.0",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "nomeCommerciale",
                                            "attributeValue": "Opzione PAC su fondo",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "attiva",
                                            "attributeValue": "null",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "modifica",
                                            "attributeValue": "null",
                                            "configRules": [],
                                            "values": []
                                        }
                                    ],
                                    "attributes": [],
                                    "code": "IT0004331820_OPZ001",
                                    "consistencyRules": [],
                                    "drivers": [],
                                    "entityPricings": [],
                                    "externalKeys": [],
                                    "level": 2,
                                    "longDescription": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                    "modules": [],
                                    "order": 1,
                                    "pricingRules": [],
                                    "primaryCode": "OPZ001",
                                    "productFamilies": [],
                                    "relatedProducts": [],
                                    "saleableRules": [],
                                    "shortDescription": "Opzione PAC",
                                    "subProducts": [],
                                    "suites": [],
                                    "tags": [],
                                    "type": "A"
                                }
                            ],
                            "suites": [],
                            "tags": [],
                            "type": "O"
                        },
                        "steps": [
                            "configura-fondo",
                            "qav",
                            "digital-signature",
                            "payment-authorization"
                        ],
                        "listOfTag": []
                    },
                    "307dacc6-7e9e-48d2-af3a-8a785d02a7ce": {
                        "productV2": {
                            "additionalData": [
                                {
                                    "attributeAcronym": "idOperazione",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "dettaglioOperazioneTipo",
                                    "attributeValue": "ACCO",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "dettaglioOperazioneCausale",
                                    "attributeValue": "ACQ",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "altriCodici",
                                    "configRules": [],
                                    "values": [
                                        {
                                            "value": "PAMR503",
                                            "description": "rischioPrometeia"
                                        }
                                    ]
                                },
                                {
                                    "attributeAcronym": "controvaloreComplessivo",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "controvalore",
                                    "attributeValue": "20000.0",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "quantita",
                                    "attributeValue": "20000.0",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "prezzo",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "percentuale",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "need",
                                    "attributeValue": "INV",
                                    "configRules": [],
                                    "values": []
                                }
                            ],
                            "attributes": [],
                            "code": "MR503",
                            "consistencyRules": [],
                            "currency": "EUR",
                            "drivers": [],
                            "entityPricings": [],
                            "externalKeys": [],
                            "familyCode": "POLIZZE",
                            "familyDescription": "POLIZZE",
                            "level": 1,
                            "modules": [],
                            "order": 5,
                            "pricingRules": [],
                            "primaryCode": "MR503",
                            "productFamilies": [],
                            "relatedProducts": [],
                            "saleableRules": [],
                            "shortDescription": "Poste Vita Selezione Multipla Linea 5",
                            "subProducts": [
                                {
                                    "additionalData": [
                                        {
                                            "attributeAcronym": "codiceFiscaleBeneficiario",
                                            "attributeValue": "BRNVNT79T48H501Y",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "nomeCommerciale",
                                            "attributeValue": "Opzione cedola su polizza",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "attiva",
                                            "attributeValue": "null",
                                            "configRules": [],
                                            "values": []
                                        },
                                        {
                                            "attributeAcronym": "modifica",
                                            "attributeValue": "null",
                                            "configRules": [],
                                            "values": []
                                        }
                                    ],
                                    "attributes": [],
                                    "code": "MR503_OPZ002",
                                    "consistencyRules": [],
                                    "drivers": [],
                                    "entityPricings": [],
                                    "externalKeys": [],
                                    "level": 2,
                                    "longDescription": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                    "modules": [],
                                    "order": 1,
                                    "pricingRules": [],
                                    "primaryCode": "OPZ002",
                                    "productFamilies": [],
                                    "relatedProducts": [],
                                    "saleableRules": [],
                                    "shortDescription": "Opzione cedola",
                                    "subProducts": [],
                                    "suites": [],
                                    "tags": [],
                                    "type": "A"
                                }
                            ],
                            "suites": [],
                            "tags": [],
                            "type": "O"
                        },
                        "steps": [
                            "configura-polizza",
                            "qav",
                            "digital-signature",
                            "payment-authorization"
                        ],
                        "listOfTag": []
                    },
                    "16102611-04c9-43b9-bd34-0cdab16520f5": {
                        "productV2": {
                            "additionalData": [
                                {
                                    "attributeAcronym": "codiceOAD",
                                    "attributeValue": "1328-129",
                                    "configRules": [],
                                    "values": []
                                }
                            ],
                            "attributes": [],
                            "code": "OAD",
                            "consistencyRules": [],
                            "drivers": [],
                            "entityPricings": [],
                            "externalKeys": [],
                            "familyCode": "OAD",
                            "id": "6af80388-2141-4735-916e-cbdd40bd3b58",
                            "level": 1,
                            "longDescription": "Proposta di investimento",
                            "modules": [],
                            "order": 2,
                            "pricingRules": [],
                            "primaryCode": "OAD",
                            "productFamilies": [],
                            "relatedProducts": [],
                            "saleableRules": [],
                            "shortDescription": "1245-128",
                            "startDate": "2020-11-16T12:00:00.000+12:00",
                            "state": "10",
                            "subProducts": [],
                            "suites": [],
                            "tags": [],
                            "type": "Z",
                            "version": "v1"
                        },
                        "listOfTag": []
                    },
                    "2bba5c13-49ff-401b-ad88-3ea25ae69754": {
                        "productV2": {
                            "additionalData": [
                                {
                                    "attributeAcronym": "idOperazione",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "dettaglioOperazioneTipo",
                                    "attributeValue": "ACCO",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "dettaglioOperazioneCausale",
                                    "attributeValue": "ACQ",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "altriCodici",
                                    "configRules": [],
                                    "values": [
                                        {
                                            "value": "IT0005199606",
                                            "description": "isin"
                                        }
                                    ]
                                },
                                {
                                    "attributeAcronym": "controvaloreComplessivo",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "controvalore",
                                    "attributeValue": "15016.0",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "quantita",
                                    "attributeValue": "15016.0",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "prezzo",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "percentuale",
                                    "attributeValue": "null",
                                    "configRules": [],
                                    "values": []
                                },
                                {
                                    "attributeAcronym": "need",
                                    "attributeValue": "INV",
                                    "configRules": [],
                                    "values": []
                                }
                            ],
                            "attributes": [],
                            "code": "IT0005199606",
                            "consistencyRules": [],
                            "currency": "EUR",
                            "drivers": [],
                            "entityPricings": [],
                            "externalKeys": [],
                            "familyCode": "FONDI",
                            "familyDescription": "FONDI",
                            "level": 1,
                            "modules": [],
                            "order": 3,
                            "pricingRules": [],
                            "primaryCode": "IT0005199606",
                            "productFamilies": [],
                            "relatedProducts": [],
                            "saleableRules": [],
                            "shortDescription": "Mix 3 Classe A",
                            "subProducts": [],
                            "suites": [],
                            "tags": [],
                            "type": "O"
                        },
                        "steps": [
                            "configura-fondo",
                            "qav",
                            "digital-signature",
                            "payment-authorization"
                        ],
                        "listOfTag": []
                    }
                }
            },
            "mainCustomer": {
                "fiscalId": "CTLLRD85D57G702B"
            },
            "identities": {
                "items": {
                    "234c576a-8e7c-4329-816e-a8fbdd1e7dec": {
                        "id": "234c576a-8e7c-4329-816e-a8fbdd1e7dec",
                        "name": "alfreda actualrpol",
                        "firstName": "alfreda",
                        "lastName": "actualrpol",
                        "cf": "CTLLRD85D57G702B",
                        "fiscalId": "CTLLRD85D57G702B",
                        "underAge": false,
                        "legalForm": "PF",
                        "dateOfBirth": "1916-04-09",
                        "tbc": false,
                        "roles": [
                            {
                                "wishlist_id": "908354df-34c3-43b7-80d9-a85c860e7577",
                                "role_id": "CONTRAENTE"
                            },
                            {
                                "wishlist_id": "908354df-34c3-43b7-80d9-a85c860e7577",
                                "role_id": "ASSICURATO"
                            },
                            {
                                "wishlist_id": "f0321fff-cda2-4043-89ad-b487d4027489",
                                "role_id": "RICHIEDENTE"
                            },
                            {
                                "wishlist_id": "307dacc6-7e9e-48d2-af3a-8a785d02a7ce",
                                "role_id": "CONTRAENTE"
                            },
                            {
                                "wishlist_id": "307dacc6-7e9e-48d2-af3a-8a785d02a7ce",
                                "role_id": "ASSICURATO"
                            },
                            {
                                "wishlist_id": "2bba5c13-49ff-401b-ad88-3ea25ae69754",
                                "role_id": "RICHIEDENTE"
                            }
                        ]
                    }
                }
            },
            "carts": {
                "items": {
                    "37cc040b-26a1-4a1c-8ae5-6f8d61822a69": {
                        "wishlist_id": "37cc040b-26a1-4a1c-8ae5-6f8d61822a69",
                        "offering": {
                            "additionalData": [],
                            "attributes": [],
                            "code": "Consulenza",
                            "consistencyRules": [],
                            "drivers": [],
                            "entityPricings": [],
                            "externalKeys": [],
                            "familyCode": "Consulenza",
                            "id": "55355010",
                            "level": 1,
                            "longDescription": "",
                            "modules": [],
                            "order": 1,
                            "pricingRules": [],
                            "primaryCode": "Consulenza",
                            "productFamilies": [],
                            "relatedProducts": [],
                            "saleableRules": [],
                            "shortDescription": "Proposta di consulenza",
                            "startDate": "2020-11-19T12:00:00.000+12:00",
                            "state": "10",
                            "subProducts": [],
                            "suites": [],
                            "tags": [],
                            "type": "Z",
                            "version": "v1"
                        }
                    },
                    "16102611-04c9-43b9-bd34-0cdab16520f5": {
                        "wishlist_id": "16102611-04c9-43b9-bd34-0cdab16520f5",
                        "offering": {
                            "additionalData": [
                                {
                                    "attributeAcronym": "codiceOAD",
                                    "attributeValue": "1328-129",
                                    "configRules": [],
                                    "values": []
                                }
                            ],
                            "attributes": [],
                            "code": "OAD",
                            "consistencyRules": [],
                            "drivers": [],
                            "entityPricings": [],
                            "externalKeys": [],
                            "familyCode": "OAD",
                            "id": "6af80388-2141-4735-916e-cbdd40bd3b58",
                            "level": 1,
                            "longDescription": "Proposta di investimento",
                            "modules": [],
                            "order": 2,
                            "pricingRules": [],
                            "primaryCode": "OAD",
                            "productFamilies": [],
                            "relatedProducts": [],
                            "saleableRules": [],
                            "shortDescription": "1245-128",
                            "startDate": "2020-11-16T12:00:00.000+12:00",
                            "state": "10",
                            "subProducts": [],
                            "suites": [],
                            "tags": [],
                            "type": "Z",
                            "version": "v1"
                        }
                    }
                }
            }
        },
        "info": {
            "fiscalId": "CTLLRD85D57G702B",
            "operatorId": "FIA9COAC",
            "agent": "NO-SDP",
            "frazionario": "55111",
            "accountancyDate": "2020-11-24T12:58:08.237+0000",
            "lastUpdateTimestamp": "2020-11-24T12:58:08.342+0000",
            "state": "completed",
            "workstationNumber": "WEB",
            "originatorChannel": "Online",
            "properties": {
                "userid": "alfreda.actualrpol"
            }
        },
        "navigationInfo": {
            "lastCompletedStepUrl": "/catalog",
            "lastCompletedNavigableStepUrl": "/catalog",
            "lastGateStepLevel": 0
        }
    }


    address = {
        dug: 'Corso', 
        toponym: 'Cavour', 
        number: '123', 
        zipcode: '05018',
        city: 'Orvieto', 
        province: 'TR',
        country: 'Italia' 
    }

    getGender() {
        return this.gender
    }

    getPerson() {
        const items = this.fdi.data.customers.items;
        let personInfo;

        Object.keys(items).forEach(el => {
            const extractedPersonInfo = items[el].personInfo
            if(Object.keys(extractedPersonInfo).length) {
                personInfo = extractedPersonInfo
            }
        })
        
        return personInfo
    }

    getAddress() {
        return this.address
    }
}
