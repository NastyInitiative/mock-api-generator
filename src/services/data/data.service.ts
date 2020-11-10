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
                        "minio-url": "minio://postepay-code-documents:b963e0da-b61f-4074-b47c-e8efe9ea0f5b/68a34ef3-e5dc-49cc-9c6d-4d7033d1020b.",
                        "azure-url": "https://tappgateway.rete.testposte/postepay-code-documents-coll/852ab806-83fa-4f80-af6f-3e80d9717d65.png",
                    }
                },
                "back": {
                    "url": "minio://postepay-code-documents:b963e0da-b61f-4074-b47c-e8efe9ea0f5b/b568a3be-f369-44fd-8c95-9d79e580b7c5.",
                    "customData": {
                        "minio-url": "minio://postepay-code-documents:b963e0da-b61f-4074-b47c-e8efe9ea0f5b/b568a3be-f369-44fd-8c95-9d79e580b7c5.",
                        "azure-url": "https://tappgateway.rete.testposte/postepay-code-documents-coll/22b6cb88-cc1e-455e-b35a-e907b17ab4f1.png",
                    }
                }
            },
            "subType": "Cartaceo"
        }
    }

    TitolareDitta = [
        {
            id: "TitolareDitta1",
            ndg: {},
            legalNature: "PF",
            legalForm: {
                code: "PF",
                value: "PERSONA FISICA",
            },
            type: {
                code: "A",
                value: "ACTUAL",
            },
            personInfo: {
                firstName: "MORENO",
                lastName: "CAVALIERI",
                gender: {
                    code: "M",
                    value: "MASCHIO",
                },
                citizenships: [
                    {
                        country: {
                            code: "IT",
                            value: "ITALIA",
                        },
                    },
                ],
                birthProvince: {
                    code: "FE",
                    value: "FERRARA",
                },
                birthCity: {
                    code: "C912",
                    value: "COMACCHIO",
                },
                birthCountry: {
                    code: "IT",
                    value: "ITALIA",
                },
                economicClassification: [],
                birthDate: "1963-11-18",
            },
            legalInfo: {
                subscriptions: [],
                businessActivities: [],
                salesPoints: [],
            },
            addresses: [
                {
                    type: {
                        code: "6",
                        value: "DOMICILIO",
                    },
                    dug: "VICOLO",
                    toponym: "RAVUZZI",
                    number: "4",
                    city: {
                        code: "H199",
                        value: "RAVENNA",
                    },
                    province: {
                        code: "RA",
                        value: "RAVENNA",
                    },
                    zipCode: {
                        code: "48123",
                        value: "48123",
                    },
                    country: {
                        code: "IT",
                        value: "ITALIA",
                    },
                },
                {
                    type: {
                        code: "2",
                        value: "RESIDENZA",
                    },
                    dug: "VICOLO",
                    toponym: "RAVUZZI",
                    number: "4",
                    city: {
                        code: "H199",
                        value: "RAVENNA",
                    },
                    province: {
                        code: "RA",
                        value: "RAVENNA",
                    },
                    zipCode: {
                        code: "48123",
                        value: "48123",
                    },
                    country: {
                        code: "IT",
                        value: "ITALIA",
                    },
                },
            ],
            emails: [
                {
                    email: "",
                    PEC: true,
                    type: {
                        code: "7",
                        value: "POSTA ELETTRONICA CERTIFICATA",
                    },
                },
                {
                    email: "CODICE_355@POSTE.IT",
                    PEC: false,
                    type: {
                        code: "2",
                        value: "EMAIL",
                    },
                },
            ],
            phoneNumbers: [
                {
                    type: {
                        code: "6",
                        value: "CELLULARE",
                    },
                    countryCode: {
                        code: "IT",
                        value: "+39",
                    },
                    areaCode: "234",
                    number: "4567856",
                },
            ],
            scanDocuments: [
                {
                    type: {
                        code: "2",
                        value: "PAT. GUIDA'",
                    },
                    number: "UT1528975",
                    issuedBy: {
                        code: "10",
                        value: "MOTORIZZAZIONE",
                    },
                    counterSuit: false,
                    sides: {
                        front: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/852ab806-83fa-4f80-af6f-3e80d9717d65.png",
                            customData: {
                                "azure-url": "https://tappgateway.rete.testposte/postepay-code-documents-coll/852ab806-83fa-4f80-af6f-3e80d9717d65.png",
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/852ab806-83fa-4f80-af6f-3e80d9717d65.png",
                            },
                        },
                        back: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/22b6cb88-cc1e-455e-b35a-e907b17ab4f1.png",
                            customData: {
                                "azure-url": "https://tappgateway.rete.testposte/postepay-code-documents-coll/22b6cb88-cc1e-455e-b35a-e907b17ab4f1.png",
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/22b6cb88-cc1e-455e-b35a-e907b17ab4f1.png",
                            },
                        },
                    },
                    subType: "Elettronico",
                    issueCity: {
                        code: "C121",
                        value: "CASTEL GUELFO DI BOLOGNA",
                    },
                    issueProvince: {
                        code: "BO",
                        value: "BOLOGNA",
                    },
                    issueCountry: {
                        code: "IT",
                        value: "ITALIA",
                    },
                    customData: {
                        SKIP_OCR: false,
                    },
                    issueDate: "2015-01-01",
                    expirationDate: "2025-01-01",
                },
                {
                    type: {
                        code: "26",
                        value: "TESSERA SANITARIA",
                    },
                    sides: {
                        front: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/7a17e600-c889-4817-96b8-37ec08399474.png",
                            customData: {
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/7a17e600-c889-4817-96b8-37ec08399474.png",
                            },
                        },
                        back: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/52742110-94bb-4f47-a8a9-b1d94e1ceefb.png",
                            customData: {
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/52742110-94bb-4f47-a8a9-b1d94e1ceefb.png",
                            },
                        },
                    },
                    subType: "Elettronico",
                },
                {
                    type: {
                        code: "31",
                        value: "CERTIFICATO ATTRIBUZIONE PARTITA IVA",
                    },
                    sides: {
                        front: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/479814d8-0622-43bb-8342-dd9156bad2b5.png",
                            customData: {
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/479814d8-0622-43bb-8342-dd9156bad2b5.png",
                            },
                        },
                    },
                    subType: "Cartaceo",
                },
            ],
            cards: [],
            bankAccounts: [],
            classification: {
                code: "R",
                value: "RETAIL",
            },
            relatedCustomer: [],
            taxData: {
                taxCode: "CVLMRN63S18C912M",
                taxResidences: [
                    {
                        country: {
                            code: "IT",
                            value: "ITALIA",
                        },
                        nif: "CVLMRN63S18C912M",
                    },
                ],
            },
        },
        {
            id: "TitolareDitta2",
            ndg: {},
            legalNature: "PF",
            legalForm: {
                code: "PF",
                value: "PERSONA FISICA",
            },
            type: {
                code: "A",
                value: "ACTUAL",
            },
            personInfo: {
                firstName: "PIPPO",
                lastName: "BAUDO",
                gender: {
                    code: "M",
                    value: "MASCHIO",
                },
                citizenships: [
                    {
                        country: {
                            code: "IT",
                            value: "ITALIA",
                        },
                    },
                ],
                birthProvince: {
                    code: "FE",
                    value: "FERRARA",
                },
                birthCity: {
                    code: "C912",
                    value: "COMACCHIO",
                },
                birthCountry: {
                    code: "IT",
                    value: "ITALIA",
                },
                economicClassification: [],
                birthDate: "1963-11-18",
            },
            legalInfo: {
                subscriptions: [],
                businessActivities: [],
                salesPoints: [],
            },
            addresses: [
                {
                    type: {
                        code: "6",
                        value: "DOMICILIO",
                    },
                    dug: "VICOLO",
                    toponym: "RAVUZZI",
                    number: "4",
                    city: {
                        code: "H199",
                        value: "RAVENNA",
                    },
                    province: {
                        code: "RA",
                        value: "RAVENNA",
                    },
                    zipCode: {
                        code: "48123",
                        value: "48123",
                    },
                    country: {
                        code: "IT",
                        value: "ITALIA",
                    },
                },
                {
                    type: {
                        code: "2",
                        value: "RESIDENZA",
                    },
                    dug: "VICOLO",
                    toponym: "RAVUZZI",
                    number: "4",
                    city: {
                        code: "H199",
                        value: "RAVENNA",
                    },
                    province: {
                        code: "RA",
                        value: "RAVENNA",
                    },
                    zipCode: {
                        code: "48123",
                        value: "48123",
                    },
                    country: {
                        code: "IT",
                        value: "ITALIA",
                    },
                },
            ],
            emails: [
                {
                    email: "",
                    PEC: true,
                    type: {
                        code: "7",
                        value: "POSTA ELETTRONICA CERTIFICATA",
                    },
                },
                {
                    email: "CODICE_355@POSTE.IT",
                    PEC: false,
                    type: {
                        code: "2",
                        value: "EMAIL",
                    },
                },
            ],
            phoneNumbers: [
                {
                    type: {
                        code: "6",
                        value: "CELLULARE",
                    },
                    countryCode: {
                        code: "IT",
                        value: "+39",
                    },
                    areaCode: "234",
                    number: "4567856",
                },
            ],
            scanDocuments: [
                {
                    type: {
                        code: "2",
                        value: "PAT. GUIDA'",
                    },
                    number: "UT1528975",
                    issuedBy: {
                        code: "10",
                        value: "MOTORIZZAZIONE",
                    },
                    counterSuit: false,
                    sides: {
                        front: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/852ab806-83fa-4f80-af6f-3e80d9717d65.png",
                            customData: {
                                "azure-url": "https://tappgateway.rete.testposte/postepay-code-documents-coll/852ab806-83fa-4f80-af6f-3e80d9717d65.png",
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/852ab806-83fa-4f80-af6f-3e80d9717d65.png",
                            },
                        },
                        back: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/22b6cb88-cc1e-455e-b35a-e907b17ab4f1.png",
                            customData: {
                                "azure-url": "https://tappgateway.rete.testposte/postepay-code-documents-coll/22b6cb88-cc1e-455e-b35a-e907b17ab4f1.png",
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/22b6cb88-cc1e-455e-b35a-e907b17ab4f1.png",
                            },
                        },
                    },
                    subType: "Elettronico",
                    issueCity: {
                        code: "C121",
                        value: "CASTEL GUELFO DI BOLOGNA",
                    },
                    issueProvince: {
                        code: "BO",
                        value: "BOLOGNA",
                    },
                    issueCountry: {
                        code: "IT",
                        value: "ITALIA",
                    },
                    customData: {
                        SKIP_OCR: false,
                    },
                    issueDate: "2015-01-01",
                    expirationDate: "2025-01-01",
                },
                {
                    type: {
                        code: "26",
                        value: "TESSERA SANITARIA",
                    },
                    sides: {
                        front: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/7a17e600-c889-4817-96b8-37ec08399474.png",
                            customData: {
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/7a17e600-c889-4817-96b8-37ec08399474.png",
                            },
                        },
                        back: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/52742110-94bb-4f47-a8a9-b1d94e1ceefb.png",
                            customData: {
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/52742110-94bb-4f47-a8a9-b1d94e1ceefb.png",
                            },
                        },
                    },
                    subType: "Elettronico",
                },
                {
                    type: {
                        code: "31",
                        value: "CERTIFICATO ATTRIBUZIONE PARTITA IVA",
                    },
                    sides: {
                        front: {
                            url: "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/479814d8-0622-43bb-8342-dd9156bad2b5.png",
                            customData: {
                                "minio-url": "minio://postepay-code-documents:7e8a2656-33fd-4829-bd3a-10f7b64795b7/479814d8-0622-43bb-8342-dd9156bad2b5.png",
                            },
                        },
                    },
                    subType: "Cartaceo",
                },
            ],
            cards: [],
            bankAccounts: [],
            classification: {
                code: "R",
                value: "RETAIL",
            },
            relatedCustomer: [],
            taxData: {
                taxCode: "CVLMRN63S18C912M",
                taxResidences: [
                    {
                        country: {
                            code: "IT",
                            value: "ITALIA",
                        },
                        nif: "CVLMRN63S18C912M",
                    },
                ],
            },
        },

    ]

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

    feaStatus = {
        "feaStatus": "TODO"
    }

    numbers = [3298877661, 3884466558, 3405136874];

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
    }
    getDocs() {
        return this.responseDocuments;
    }

    getListTitolare() {
        return this.TitolareDitta;
    }

    getContracts() {
        return this.contracts;
    }

    getFeaStatus() {
        return this.feaStatus;
    }

    getPhoneNumbers() {
        return this.numbers;
    }

    getFeaStart() {
        return this.feaStartResp;
    }
}
