export const mockFormDetails = {
    "data": {
        "form_data": {
            "_id": "5d8b6b1e8ffb08187f5745f7",
            "name": "SD 2019-09-25",
            "type": "registration",
            "owner_id": 1,
            "serialNumber": 132,
            "updated_at": "2019-09-25 13:27:52",
            "created_at": "2019-09-25 13:26:54",
            "activeSections": {
                "formFields": {
                    "isActive": true,
                    "showSideInfo": true
                },
                "documentsForms": {
                    "isActive": true,
                    "showSideInfo": true
                },
                "consent": {
                    "isActive": true,
                    "showSideInfo": true
                },
                "tuition": {
                    "isActive": false,
                    "showSideInfo": false
                },
                "paymentSettings": {
                    "isActive": false,
                    "showSideInfo": false
                },
                "termsConditionals": {
                    "isActive": true,
                    "showSideInfo": true
                },
                "formPayment": {
                    "isActive": false,
                    "showSideInfo": false
                }
            },
            "consentInfo": {
                "sectionName": "Parent Consent",
                "sectionWidth": "full",
                "consents": [
                    {
                        "title": "asdasd",
                        "id": "4316d7ea-d864-4dbe-a08b-63392a9f6dc5",
                        "text": {
                            "value": "Parent Consent father=-{{father}}- eee mother=-{{mother}}- eee parents=--{{parents}}-- eeee student/students=--{{student/students}}--<div><br></div><div>End page</div>"
                        },
                        "checkbox": {
                            "isActive": true,
                            "checked": false,
                            "text": "adsdasd"
                        },
                        "signature": {
                            "isRequire": true,
                            "type": "esign",
                            "eType": "system",
                            "isBothParents": true,
                            "signed": {
                                "parents": false,
                                "fathers": false,
                                "mothers": false
                            }
                        }
                    }
                ]
            },
            "documentsForms": {
                "documents": {
                    "sectionName": "Documents for Parents",
                    "sectionWidth": "full",
                    "documentsItems": []
                },
                "formsPDF": {
                    "sectionName": "School Forms",
                    "sectionWidth": "full",
                    "formsPDFItems": []
                }
            },
            "fields": [],
            "sidebar": [],
            "termsConditions": {
                "sectionName": "Terms and Conditions",
                "sectionWidth": "full",
                "termsConditionsItems": [
                    {
                        "title": "sdfsdf",
                        "id": "9cecc5f3-6927-401f-9597-2cb474614418",
                        "text": "Terms and Conditions father=-{{father}}- eee mother=-{{mother}}- eee parents=--{{parents}}-- eeee student/students=--{{student/students}}--<div><br></div><div>End terms</div>",
                        "checkbox": {
                            "isActive": true,
                            "checked": false,
                            "text": "sdfdasfafsdafd"
                        }
                    }
                ],
                "signature": {
                    "isRequire": false,
                    "type": "esign",
                    "eType": "system",
                    "isBothParents": false,
                    "signed": {
                        "parents": false,
                        "fathers": false,
                        "mothers": false
                    }
                }
            },
            "documents": [
                {
                    "_id": "5d8b6b588ffb083a530cb617",
                    "id": "5a37e743-0813-4bd4-8ffa-3f18def60607",
                    "name": "doc 1",
                    "isUpload": true,
                    "isPerFamily": true,
                    "accompanyingText": {
                        "data": "doc text",
                        "isBold": false,
                        "isItalic": false
                    },
                    "data": "attach5d8b50540e010",
                    "dataTypeAllowed": [],
                    "formId": "5d8b6b1e8ffb08187f5745f7",
                    "updated_at": "2019-09-25 13:27:52",
                    "created_at": "2019-09-25 13:27:52"
                }
            ],
            "forms": [
                {
                    "_id": "5d8b6b588ffb083a530cb618",
                    "id": "1c67878e-149e-452c-baba-220e405e1e6b",
                    "name": "ex form",
                    "isNew": true,
                    "isPerFamily": true,
                    "isAllowDownloadUpload": true,
                    "isFillableOnline": true,
                    "accompanyingText": {
                        "data": "sdafdaffd asdfasdfadfs",
                        "isBold": false,
                        "isItalic": false
                    },
                    "form": {
                        "success": true,
                        "hash": "pdfForm5d8b506434bc8",
                        "filename": "pdfForm5d8b506434bc8.pdf",
                        "name": "document.pdf",
                        "link": "http://34.73.126.99/api/v1/forms/file?api_token=123&objectId=PdfForms/pdfForm5d8b506434bc8.pdf&bucketId=test_school_bucket",
                        "formName": "first form",
                        "type": "new form",
                        "fieldsPdf": [
                            [],
                            []
                        ],
                        "numberOfPages": 2,
                        "updated_at": "2019-09-25 11:32:53",
                        "created_at": "2019-09-25 11:32:53",
                        "_id": "5d8b5065fb2cfb0cd821450a"
                    },
                    "formId": "5d8b6b1e8ffb08187f5745f7",
                    "updated_at": "2019-09-26 10:50:11",
                    "created_at": "2019-09-25 13:27:52"
                }
            ]
        },
        "form_history": [],
        "documents": []
    },
    "status": 1
}