import { Injectable } from '@nestjs/common';
import { ContractsService } from './contracts.service';

@Injectable()
export class SignatureService {
    constructor(private contractsService: ContractsService) {}

    fdiProducts = {
        "signatureProducts": [
            {
                "product": {},
                "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868",
                "attributes": {
                    "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                    "ids:ui:description": " Kit contrattuale OaD ",
                    "custom:fieldGroup:viewType:CGS": "ContractTerms"
                },
                "completed": false,
                "params": {
                    "ids:wf:suspendable": " True "
                },
                "views": [
                    {
                        "type": "FinancialContractDocuments",
                        "fieldGroup": "Contratti",
                        "signType": "signature",
                        "signed": false,
                        "documents": [
                            {
                                "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                "index": 0
                            },
                            {
                                "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                "index": 1
                            },
                        ]
                    },
                    {
                        "type": "ContractTerms",
                        "fieldGroup": "CGS",
                        "signType": "signature",
                        "signed": false,
                        "documents": [
                            {
                                "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                "index": 4
                            }
                        ]
                    }
                ]
            }
        ],
        "documents": {
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
    };

    signatureProductsArray = [
        {
            "signatureProducts": [
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                                {
                                    "documentId": "5ceebf6c-cd63-4e4c-a1c0-377b4ef33064",
                                    "index": 2
                                },
                            ]
                        },
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                        {
                            "type":"NonFinancialContractDocuments",
                            "fieldGroup":"CONTRACT_FLAG",
                            "signType": "checkbox",
                            "signed": false,
                            "documents":[
                                {
                                    "documentId":"8240353e-6315-4030-94ee-c2da9a95fa85",
                                    "index":0
                                },
                                {
                                    "documentId":"4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a",
                                    "index":1
                                }
                            ]
                        }
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da855",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                            ]
                        },
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                     
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da773",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": true,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                        {
                            "type":"NonFinancialContractDocuments",
                            "fieldGroup":"CONTRACT_FLAG",
                            "signType": "checkbox",
                            "signed": false,
                            "documents":[
                                {
                                    "documentId":"8240353e-6315-4030-94ee-c2da9a95fa85",
                                    "index":0
                                },
                                {
                                    "documentId":"4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a",
                                    "index":1
                                }
                            ]
                        }
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da334",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                            ]
                        },
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        }
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da222",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                            ]
                        },
                        {
                            "type":"NonFinancialContractDocuments",
                            "fieldGroup":"CONTRACT_FLAG",
                            "signType": "checkbox",
                            "signed": false,
                            "documents":[
                                {
                                    "documentId":"8240353e-6315-4030-94ee-c2da9a95fa85",
                                    "index":0
                                },
                                {
                                    "documentId":"4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a",
                                    "index":1
                                }
                            ]
                        }
                    ]
                },
            ],
            "documents": {
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
                },
                "4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a": {
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
                },
                "8240353e-6315-4030-94ee-c2da9a95fa85": {
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
        },
        {
            "signatureProducts": [
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                                {
                                    "documentId": "5ceebf6c-cd63-4e4c-a1c0-377b4ef33064",
                                    "index": 2
                                },
                            ]
                        },
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": true,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                        {
                            "type":"NonFinancialContractDocuments",
                            "fieldGroup":"CONTRACT_FLAG",
                            "signType": "checkbox",
                            "signed": true,
                            "documents":[
                                {
                                    "documentId":"8240353e-6315-4030-94ee-c2da9a95fa85",
                                    "index":0
                                },
                                {
                                    "documentId":"4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a",
                                    "index":1
                                }
                            ]
                        }
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da855",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                            ]
                        },
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                     
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da773",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": true,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                        {
                            "type":"NonFinancialContractDocuments",
                            "fieldGroup":"CONTRACT_FLAG",
                            "signType": "checkbox",
                            "signed": true,
                            "documents":[
                                {
                                    "documentId":"8240353e-6315-4030-94ee-c2da9a95fa85",
                                    "index":0
                                },
                                {
                                    "documentId":"4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a",
                                    "index":1
                                }
                            ]
                        }
                    ]
                }
            ],
            "documents": {
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
                },
                "4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a": {
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
                },
                "8240353e-6315-4030-94ee-c2da9a95fa85": {
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
        },
        {
            "signatureProducts": [
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                                {
                                    "documentId": "5ceebf6c-cd63-4e4c-a1c0-377b4ef33064",
                                    "index": 2
                                }
                            ]
                        },
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                        {
                            "type":"NonFinancialContractDocuments",
                            "fieldGroup":"CONTRACT_FLAG",
                            "signType": "checkbox",
                            "signed": false,
                            "documents":[
                                {
                                    "documentId":"8240353e-6315-4030-94ee-c2da9a95fa85",
                                    "index":0
                                },
                                {
                                    "documentId":"4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a",
                                    "index":1
                                }
                            ]
                        }
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da773",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                        {
                            "type":"NonFinancialContractDocuments",
                            "fieldGroup":"CONTRACT_FLAG",
                            "signType": "checkbox",
                            "signed": false,
                            "documents":[
                                {
                                    "documentId":"8240353e-6315-4030-94ee-c2da9a95fa85",
                                    "index":0
                                },
                                {
                                    "documentId":"4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a",
                                    "index":1
                                }
                            ]
                        }
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da334",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                            ]
                        },
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        }
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da222",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                            ]
                        },
                        {
                            "type":"NonFinancialContractDocuments",
                            "fieldGroup":"CONTRACT_FLAG",
                            "signType": "checkbox",
                            "signed": false,
                            "documents":[
                                {
                                    "documentId":"8240353e-6315-4030-94ee-c2da9a95fa85",
                                    "index":0
                                },
                                {
                                    "documentId":"4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a",
                                    "index":1
                                }
                            ]
                        }
                    ]
                },
            ],
            "documents": {
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
                },
                "4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a": {
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
                },
                "8240353e-6315-4030-94ee-c2da9a95fa85": {
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
        },
        {
            "signatureProducts": [
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da868",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                                {
                                    "documentId": "5ceebf6c-cd63-4e4c-a1c0-377b4ef33064",
                                    "index": 2
                                },
                            ]
                        },
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": true,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                        {
                            "type":"NonFinancialContractDocuments",
                            "fieldGroup":"CONTRACT_FLAG",
                            "signType": "checkbox",
                            "signed": false,
                            "documents":[
                                {
                                    "documentId":"8240353e-6315-4030-94ee-c2da9a95fa85",
                                    "index":0
                                },
                                {
                                    "documentId":"4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a",
                                    "index":1
                                }
                            ]
                        }
                    ]
                },
                {
                    "product": {},
                    "dossierItemId": "P-00000000715-0fcbb388-83d5-439c-a86f-d6f95a9da855",
                    "attributes": {
                        "custom:fieldGroup:viewType:Contratti": "FinancialContractDocuments",
                        "ids:ui:description": " Kit contrattuale OaD ",
                        "custom:fieldGroup:viewType:CGS": "ContractTerms"
                    },
                    "completed": false,
                    "params": {
                        "ids:wf:suspendable": " True "
                    },
                    "views": [
                        {
                            "type": "FinancialContractDocuments",
                            "fieldGroup": "Contratti",
                            "signType": "signature",
                            "signed": false,
                            "documents": [
                                {
                                    "documentId": "c3d652f3-bc24-4a95-81d6-4b933a6e27d7",
                                    "index": 0
                                },
                                {
                                    "documentId": "f89e513d-ac54-4e05-aa1f-f7c38e580823",
                                    "index": 1
                                },
                            ]
                        },
                        {
                            "type": "ContractTerms",
                            "fieldGroup": "CGS",
                            "signType": "signature",
                            "signed": true,
                            "documents": [
                                {
                                    "documentId": "6ac691db-f32e-4072-b42c-702b411e916e",
                                    "index": 4
                                }
                            ]
                        },
                     
                    ]
                }
            ],
            "documents": {
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
                },
                "4a48a8e6-64c3-4f4c-a95a-07dde32e8a7a": {
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
                },
                "8240353e-6315-4030-94ee-c2da9a95fa85": {
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
        },
    ];

    signatureOptNumbersArray = [
    
        {​​​​​
            "feaOtpNumber": "*******233"
        },​​​​​
        {​​​​​
            "feaOtpNumber": "*******334"
        },​​​​​
        {​​​​​
            "feaOtpNumber": "*******556"
        },​​​​​
        {​​​​​
            "feaOtpNumber": "*******734"
        },​​​​​
        {​​​​​
            "feaOtpNumber": null
        }​​​​​

    ];
    
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
    }

    setContracts(products){
        this.contractsService.contracts.contracts = [];
        products.forEach(element => {
            const contract = {
                'id': '',
                'signed': false
            };
           contract.id= element.dossierItemId;
           contract.signed = element.completed;
           this.contractsService.contracts.contracts.push(contract);
           console.log("🚀 ~ file: signature.service.ts ~ line 3182 ~ SignatureService ~ setContracts ~ contract", contract)
        });
    }

    getfdiProducts() {
        return this.fdiProducts;
    }

    getRandomizedProducts() {
        const randIndex = this.getRandomIntInclusive(0, 3);
        console.log("🚀 ~ file: signature.service.ts ~ line 2370 ~ SignatureService ~ getRandomizedProducts ~ randIndex", randIndex);
        const randomizedProducts = this.signatureProductsArray[randIndex];
        this.setContracts(randomizedProducts.signatureProducts);
        return randomizedProducts;
    }

    getRandomizedNumbers() {
        const randIndex = this.getRandomIntInclusive(0, this.signatureOptNumbersArray.length - 1);
        const randomNumber = this.signatureOptNumbersArray[randIndex];
        return randomNumber;
    }
    
}
