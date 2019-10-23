import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Methods } from './methods.enum';

export const requestsFormDetails = [];

requestsFormDetails.push({
    request: new HttpRequest(Methods.GET, "/form-management/form-details"),
    response: new HttpResponse({ 
        status: 200,
        body: {
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
                    "fields": [
                        {
                            "type": 114,
                            "name": "Parents information",
                            "width": "full",
                            "isActive": false,
                            "settings": {
                                "multiplier": [],
                                "options": []
                            },
                            "fields": [
                                {
                                    "type": 113,
                                    "name": "father information",
                                    "width": "full",
                                    "prefix": "father",
                                    "isActive": false,
                                    "options": {
                                        "title": "string",
                                        "hideTitle": false,
                                        "size": 3
                                    },
                                    "settings": {
                                        "multiplier": [],
                                        "options": []
                                    },
                                    "fields": [
                                        {
                                            "type": 101,
                                            "name": "First Name",
                                            "width": "quarter",
                                            "options": {
                                                "placeholder": "ttttt",
                                                "language": "",
                                                "isSupportText": false,
                                                "supportText": "",
                                                "supportTextDisplayed": "directly",
                                                "required": true,
                                                "readonly": false,
                                                "hideLabel": false,
                                                "unique": false,
                                                "value": "string",
                                                "autoComplete": false,
                                                "size": 3,
                                                "default": "string"
                                            },
                                            "constraints": [],
                                            "validators": [],
                                            "prefix": "father",
                                            "mapped": "first_name",
                                            "exist": true,
                                            "fields": [],
                                            "_id": "52068a26-e86e-43d5-b090-252b1880974c",
                                            "isValid": true,
                                            "isValidName": true
                                        },
                                        {
                                            "type": 101,
                                            "name": "Last Name",
                                            "width": "quarter",
                                            "options": {
                                                "placeholder": "",
                                                "language": "",
                                                "isSupportText": false,
                                                "supportText": "",
                                                "supportTextDisplayed": "directly",
                                                "required": false,
                                                "readonly": false,
                                                "hideLabel": false,
                                                "unique": false,
                                                "value": "string",
                                                "autoComplete": false,
                                                "size": 3,
                                                "default": "string"
                                            },
                                            "constraints": [],
                                            "validators": [],
                                            "prefix": "father",
                                            "mapped": "last_name",
                                            "exist": true,
                                            "fields": [],
                                            "_id": "73b505b9-6824-4f4a-bd14-58b1c46fe5a2",
                                            "isValid": true,
                                            "isValidName": true
                                        }
                                    ],
                                    "_id": "d7e9ad8e-bd1f-4e57-9723-4f6b410667d2",
                                    "isValid": true,
                                    "isValidName": true,
                                    "mapped": "father_information"
                                },
                                {
                                    "type": 113,
                                    "name": "mather information",
                                    "width": "full",
                                    "prefix": "mother",
                                    "isActive": false,
                                    "options": {
                                        "title": "string",
                                        "hideTitle": false,
                                        "size": 3
                                    },
                                    "settings": {
                                        "multiplier": [],
                                        "options": []
                                    },
                                    "fields": [
                                        {
                                            "type": 101,
                                            "name": "First Name",
                                            "width": "quarter",
                                            "options": {
                                                "placeholder": "",
                                                "language": "",
                                                "isSupportText": false,
                                                "supportText": "",
                                                "supportTextDisplayed": "directly",
                                                "required": false,
                                                "readonly": false,
                                                "hideLabel": false,
                                                "unique": false,
                                                "value": "string",
                                                "autoComplete": false,
                                                "size": 3,
                                                "default": "string"
                                            },
                                            "constraints": [],
                                            "validators": [],
                                            "prefix": "mother",
                                            "mapped": "first_name",
                                            "exist": true,
                                            "fields": [],
                                            "_id": "bb21d38b-792b-4b73-8e7e-78b0d03ab2bb",
                                            "isValid": true,
                                            "isValidName": true
                                        },
                                        {
                                            "type": 101,
                                            "name": "Last Name",
                                            "width": "quarter",
                                            "options": {
                                                "placeholder": "",
                                                "language": "",
                                                "isSupportText": false,
                                                "supportText": "",
                                                "supportTextDisplayed": "directly",
                                                "required": false,
                                                "readonly": false,
                                                "hideLabel": false,
                                                "unique": false,
                                                "value": "string",
                                                "autoComplete": false,
                                                "size": 3,
                                                "default": "string"
                                            },
                                            "constraints": [],
                                            "validators": [],
                                            "prefix": "mother",
                                            "mapped": "last_name",
                                            "exist": true,
                                            "fields": [],
                                            "_id": "a2e9a57b-6c8d-48ec-92c0-0591bb7cf03f",
                                            "isValid": true,
                                            "isValidName": true
                                        }
                                    ],
                                    "_id": "066a9fde-ddeb-4a21-83d9-614a589eb0cf",
                                    "isValid": true,
                                    "isValidName": true,
                                    "mapped": "mather_information"
                                }
                            ],
                            "_id": "a28524d6-8cf4-43b5-94b4-b5a0aca80d9d",
                            "isValid": true,
                            "isValidName": true,
                            "mapped": "parents_information"
                        },
                        {
                            "type": 114,
                            "name": "Students information",
                            "width": "full",
                            "prefix": "student",
                            "isActive": false,
                            "settings": {
                                "multiplier": [],
                                "options": []
                            },
                            "fields": [
                                {
                                    "type": 101,
                                    "name": "First Name",
                                    "width": "quarter",
                                    "options": {
                                        "placeholder": "",
                                        "language": "",
                                        "isSupportText": false,
                                        "supportText": "",
                                        "supportTextDisplayed": "directly",
                                        "required": false,
                                        "readonly": false,
                                        "hideLabel": false,
                                        "unique": false,
                                        "value": "string",
                                        "autoComplete": false,
                                        "size": 3,
                                        "default": "string"
                                    },
                                    "constraints": [],
                                    "validators": [],
                                    "prefix": "student",
                                    "mapped": "first_name",
                                    "exist": true,
                                    "fields": [],
                                    "_id": "97bd0486-97a0-4b81-9c96-c92ca2e4ba6c",
                                    "isValid": true,
                                    "isValidName": true
                                },
                                {
                                    "type": 101,
                                    "name": "Last Name",
                                    "width": "quarter",
                                    "options": {
                                        "placeholder": "",
                                        "language": "",
                                        "isSupportText": false,
                                        "supportText": "",
                                        "supportTextDisplayed": "directly",
                                        "required": false,
                                        "readonly": false,
                                        "hideLabel": false,
                                        "unique": false,
                                        "value": "string",
                                        "autoComplete": false,
                                        "size": 3,
                                        "default": "string"
                                    },
                                    "constraints": [],
                                    "validators": [],
                                    "prefix": "student",
                                    "mapped": "last_name",
                                    "exist": true,
                                    "fields": [],
                                    "_id": "dd0182e1-1697-48e5-91e9-b65b0a0d8a56",
                                    "isValid": true,
                                    "isValidName": true
                                }
                            ],
                            "_id": "104292c1-1c4d-43bd-a030-251e37a36552",
                            "isValid": true,
                            "isValidName": true,
                            "mapped": "students_information"
                        }
                    ],
                    "formDates": {
                        "startDate": "2019-09-25",
                        "endDate": "2019-12-25"
                    },
                    "formPeriods": [
                        true,
                        false,
                        false,
                        false
                    ],
                    "paymentSettings": {
                        "sectionName": "Payment Settings",
                        "sectionWidth": "full",
                        "paymentSettingsItems": [],
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
                        },
                        "paymentOptionsContent": ""
                    },
                    "sidebar": [
                        {
                            "type": 113,
                            "name": "Family Information",
                            "isActive": true,
                            "options": {
                                "title": "string",
                                "hideTitle": false,
                                "size": 3
                            },
                            "fields": [
                                {
                                    "type": 113,
                                    "name": "Personal Info",
                                    "isActive": true,
                                    "options": {
                                        "title": "string",
                                        "hideTitle": false,
                                        "size": 3
                                    },
                                    "fields": [
                                        {
                                            "type": 114,
                                            "name": "Parents information",
                                            "width": "full",
                                            "isActive": false,
                                            "settings": {
                                                "multiplier": [],
                                                "options": []
                                            },
                                            "fields": [
                                                {
                                                    "type": 113,
                                                    "name": "father information",
                                                    "width": "full",
                                                    "prefix": "father",
                                                    "isActive": false,
                                                    "options": {
                                                        "title": "string",
                                                        "hideTitle": false,
                                                        "size": 3
                                                    },
                                                    "settings": {
                                                        "multiplier": [],
                                                        "options": []
                                                    },
                                                    "fields": [
                                                        {
                                                            "type": 101,
                                                            "name": "Title",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "title",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 105,
                                                            "name": "Gender",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "items": [
                                                                    "Male",
                                                                    "Female"
                                                                ],
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "gender",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "First Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "first_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Middle Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "middle_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Last Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "last_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 106,
                                                            "name": "Dob",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string",
                                                                "separator": "string",
                                                                "format": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "dob",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Hebrew First Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "hebrew_first_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Hebrew Middle Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "hebrew_middle_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Hebrew Last Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "hebrew_last_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 109,
                                                            "name": "Contact Phone",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string",
                                                                "format": "string",
                                                                "cellPhone": false,
                                                                "checkCellPhone": false
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "contact_phone",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 108,
                                                            "name": "Contact Email",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "contact_email",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 109,
                                                            "name": "Corporate Phone",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string",
                                                                "format": "string",
                                                                "cellPhone": false,
                                                                "checkCellPhone": false
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "corporate_phone",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 108,
                                                            "name": "Corporate Email",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "father",
                                                            "mapped": "corporate_email",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 113,
                                                            "name": "Home Address",
                                                            "width": "full",
                                                            "options": {
                                                                "title": "string",
                                                                "hideTitle": false,
                                                                "size": 3
                                                            },
                                                            "settings": {
                                                                "multiplier": [],
                                                                "options": []
                                                            },
                                                            "fields": [
                                                                {
                                                                    "type": 101,
                                                                    "name": "Address",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "father",
                                                                    "mapped": "address",
                                                                    "exist": false
                                                                },
                                                                {
                                                                    "type": 101,
                                                                    "name": "City",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "father",
                                                                    "mapped": "city",
                                                                    "exist": false
                                                                },
                                                                {
                                                                    "type": 101,
                                                                    "name": "State",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "father",
                                                                    "mapped": "state",
                                                                    "exist": false
                                                                },
                                                                {
                                                                    "type": 101,
                                                                    "name": "Country",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "father",
                                                                    "mapped": "country",
                                                                    "exist": false
                                                                },
                                                                {
                                                                    "type": 101,
                                                                    "name": "Zip",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "father",
                                                                    "mapped": "zip",
                                                                    "exist": false
                                                                }
                                                            ],
                                                            "exist": false,
                                                            "mapped": "home_address"
                                                        }
                                                    ],
                                                    "exist": false,
                                                    "mapped": "father_information"
                                                },
                                                {
                                                    "type": 113,
                                                    "name": "mather information",
                                                    "width": "full",
                                                    "prefix": "mother",
                                                    "isActive": false,
                                                    "options": {
                                                        "title": "string",
                                                        "hideTitle": false,
                                                        "size": 3
                                                    },
                                                    "settings": {
                                                        "multiplier": [],
                                                        "options": []
                                                    },
                                                    "fields": [
                                                        {
                                                            "type": 101,
                                                            "name": "Title",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "title",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 105,
                                                            "name": "Gender",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "items": [
                                                                    "Male",
                                                                    "Female"
                                                                ],
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "gender",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "First Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "first_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Middle Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "middle_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Last Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "last_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 106,
                                                            "name": "Dob",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string",
                                                                "separator": "string",
                                                                "format": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "dob",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Hebrew First Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "hebrew_first_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Hebrew Middle Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "hebrew_middle_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Hebrew Last Name",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "hebrew_last_name",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 109,
                                                            "name": "Contact Phone",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string",
                                                                "format": "string",
                                                                "cellPhone": false,
                                                                "checkCellPhone": false
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "contact_phone",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 108,
                                                            "name": "Contact Email",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "contact_email",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 109,
                                                            "name": "Corporate Phone",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string",
                                                                "format": "string",
                                                                "cellPhone": false,
                                                                "checkCellPhone": false
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "corporate_phone",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 108,
                                                            "name": "Corporate Email",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "size": 3,
                                                                "value": "string",
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "mother",
                                                            "mapped": "corporate_email",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 113,
                                                            "name": "Home Address",
                                                            "width": "full",
                                                            "options": {
                                                                "title": "string",
                                                                "hideTitle": false,
                                                                "size": 3
                                                            },
                                                            "settings": {
                                                                "multiplier": [],
                                                                "options": []
                                                            },
                                                            "fields": [
                                                                {
                                                                    "type": 101,
                                                                    "name": "Address",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "mother",
                                                                    "mapped": "address",
                                                                    "exist": false
                                                                },
                                                                {
                                                                    "type": 101,
                                                                    "name": "City",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "mother",
                                                                    "mapped": "city",
                                                                    "exist": false
                                                                },
                                                                {
                                                                    "type": 101,
                                                                    "name": "State",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "mother",
                                                                    "mapped": "state",
                                                                    "exist": false
                                                                },
                                                                {
                                                                    "type": 101,
                                                                    "name": "Country",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "mother",
                                                                    "mapped": "country",
                                                                    "exist": false
                                                                },
                                                                {
                                                                    "type": 101,
                                                                    "name": "Zip",
                                                                    "width": "quarter",
                                                                    "options": {
                                                                        "placeholder": "",
                                                                        "language": "",
                                                                        "isSupportText": false,
                                                                        "supportText": "",
                                                                        "supportTextDisplayed": "directly",
                                                                        "required": false,
                                                                        "readonly": false,
                                                                        "hideLabel": false,
                                                                        "unique": false,
                                                                        "value": "string",
                                                                        "autoComplete": false,
                                                                        "size": 3,
                                                                        "default": "string"
                                                                    },
                                                                    "constraints": [],
                                                                    "validators": [],
                                                                    "prefix": "mother",
                                                                    "mapped": "zip",
                                                                    "exist": false
                                                                }
                                                            ],
                                                            "exist": false,
                                                            "mapped": "home_address"
                                                        }
                                                    ],
                                                    "exist": false,
                                                    "mapped": "mather_information"
                                                }
                                            ],
                                            "exist": true,
                                            "mapped": "parents_information"
                                        },
                                        {
                                            "type": 114,
                                            "name": "Students information",
                                            "width": "full",
                                            "prefix": "student",
                                            "isActive": false,
                                            "settings": {
                                                "multiplier": [],
                                                "options": []
                                            },
                                            "fields": [
                                                {
                                                    "type": 101,
                                                    "name": "Title",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "value": "string",
                                                        "autoComplete": false,
                                                        "size": 3,
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "title",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 105,
                                                    "name": "Gender",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "size": 3,
                                                        "items": [
                                                            "Male",
                                                            "Female"
                                                        ],
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "gender",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 101,
                                                    "name": "First Name",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "value": "string",
                                                        "autoComplete": false,
                                                        "size": 3,
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "first_name",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 101,
                                                    "name": "Middle Name",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "value": "string",
                                                        "autoComplete": false,
                                                        "size": 3,
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "middle_name",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 101,
                                                    "name": "Last Name",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "value": "string",
                                                        "autoComplete": false,
                                                        "size": 3,
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "last_name",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 106,
                                                    "name": "Dob",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "size": 3,
                                                        "value": "string",
                                                        "default": "string",
                                                        "separator": "string",
                                                        "format": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "dob",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 101,
                                                    "name": "Hebrew First Name",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "value": "string",
                                                        "autoComplete": false,
                                                        "size": 3,
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "hebrew_first_name",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 101,
                                                    "name": "Hebrew Middle Name",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "value": "string",
                                                        "autoComplete": false,
                                                        "size": 3,
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "hebrew_middle_name",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 101,
                                                    "name": "Hebrew Last Name",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "value": "string",
                                                        "autoComplete": false,
                                                        "size": 3,
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "hebrew_last_name",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 109,
                                                    "name": "Contact Phone",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "size": 3,
                                                        "value": "string",
                                                        "default": "string",
                                                        "format": "string",
                                                        "cellPhone": false,
                                                        "checkCellPhone": false
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "contact_phone",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 108,
                                                    "name": "Contact Email",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "size": 3,
                                                        "value": "string",
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "contact_email",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 109,
                                                    "name": "Corporate Phone",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "size": 3,
                                                        "value": "string",
                                                        "default": "string",
                                                        "format": "string",
                                                        "cellPhone": false,
                                                        "checkCellPhone": false
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "corporate_phone",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 108,
                                                    "name": "Corporate Email",
                                                    "width": "quarter",
                                                    "options": {
                                                        "placeholder": "",
                                                        "language": "",
                                                        "isSupportText": false,
                                                        "supportText": "",
                                                        "supportTextDisplayed": "directly",
                                                        "required": false,
                                                        "readonly": false,
                                                        "hideLabel": false,
                                                        "unique": false,
                                                        "size": 3,
                                                        "value": "string",
                                                        "default": "string"
                                                    },
                                                    "constraints": [],
                                                    "validators": [],
                                                    "prefix": "student",
                                                    "mapped": "corporate_email",
                                                    "exist": false
                                                },
                                                {
                                                    "type": 113,
                                                    "name": "Home Address",
                                                    "width": "full",
                                                    "options": {
                                                        "title": "string",
                                                        "hideTitle": false,
                                                        "size": 3
                                                    },
                                                    "settings": {
                                                        "multiplier": [],
                                                        "options": []
                                                    },
                                                    "fields": [
                                                        {
                                                            "type": 101,
                                                            "name": "Address",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "student",
                                                            "mapped": "address",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "City",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "student",
                                                            "mapped": "city",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "State",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "student",
                                                            "mapped": "state",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Country",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "student",
                                                            "mapped": "country",
                                                            "exist": false
                                                        },
                                                        {
                                                            "type": 101,
                                                            "name": "Zip",
                                                            "width": "quarter",
                                                            "options": {
                                                                "placeholder": "",
                                                                "language": "",
                                                                "isSupportText": false,
                                                                "supportText": "",
                                                                "supportTextDisplayed": "directly",
                                                                "required": false,
                                                                "readonly": false,
                                                                "hideLabel": false,
                                                                "unique": false,
                                                                "value": "string",
                                                                "autoComplete": false,
                                                                "size": 3,
                                                                "default": "string"
                                                            },
                                                            "constraints": [],
                                                            "validators": [],
                                                            "prefix": "student",
                                                            "mapped": "zip",
                                                            "exist": false
                                                        }
                                                    ],
                                                    "exist": false,
                                                    "mapped": "home_address"
                                                }
                                            ],
                                            "exist": true,
                                            "mapped": "students_information"
                                        }
                                    ],
                                    "mapped": "personal_info"
                                }
                            ],
                            "mapped": "family_information"
                        }
                    ],
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
    })
});