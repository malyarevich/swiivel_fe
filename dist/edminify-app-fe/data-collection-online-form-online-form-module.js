(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-collection-online-form-online-form-module"],{

/***/ "./src/app/modules/data-collection/online-form/directives/field-content.directive.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/directives/field-content.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: FieldContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldContentDirective", function() { return FieldContentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldContentDirective = /** @class */ (function () {
    function FieldContentDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    FieldContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appFieldContent]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], FieldContentDirective);
    return FieldContentDirective;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/model/general-info-section-name.model.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/model/general-info-section-name.model.ts ***!
  \**********************************************************************************************/
/*! exports provided: generalSectionsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalSectionsNames", function() { return generalSectionsNames; });
var generalSectionsNames = {
    familyInfo: 'familyInfo',
    parentsInfo: 'parentsInfo',
    paternalGrandparents: 'paternalGrandparents',
    maternalGrandparents: 'maternalGrandparents',
    studentsInfo: 'studentsInfo',
    lunch: 'lunch',
    transportation: 'transportation',
};


/***/ }),

/***/ "./src/app/modules/data-collection/online-form/model/main-menu-name.model.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/model/main-menu-name.model.ts ***!
  \***********************************************************************************/
/*! exports provided: mainMenuNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainMenuNames", function() { return mainMenuNames; });
var mainMenuNames = {
    generalInfo: 'generalInfo',
    documentsForms: 'documentsForms',
    consentInfo: 'consentInfo',
    paymentSettings: 'paymentSettings',
    tuitionContract: 'tuitionContract',
    termsConditions: 'termsConditions',
    payment: 'payment',
};


/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-consent/consent-nav/consent-nav.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-consent/consent-nav/consent-nav.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWNvbnNlbnQvY29uc2VudC1uYXYvY29uc2VudC1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-consent/consent-nav/consent-nav.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-consent/consent-nav/consent-nav.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg py-0\">\r\n  <div class=\"justify-content-left\">\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <ng-container *ngFor=\"let item of consents; let i = index\">\r\n        <li class=\"nav-item py-2 px-1\"\r\n            [ngClass]=\"{'app-text-primary app-of-nav-active-border' : activeConsentId === item.id}\">\r\n          <a class=\"nav-link font-weight-bold app-cursor-pointer\"\r\n             (click)=\"setActiveConsentId(item.id)\">\r\n            {{item.title}}\r\n          </a>\r\n        </li>\r\n        <li [hidden]=\"i === consents.length-1\" class=\"nav-item py-2 px-1\">\r\n          <a class=\"nav-link\">\r\n            <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\r\n          </a>\r\n        </li>\r\n      </ng-container>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-consent/consent-nav/consent-nav.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-consent/consent-nav/consent-nav.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ConsentNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsentNavComponent", function() { return ConsentNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConsentNavComponent = /** @class */ (function () {
    function ConsentNavComponent() {
        this.activeConsentEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ConsentNavComponent.prototype.ngOnInit = function () {
        if (this.consents.length)
            this.setActiveConsentId(this.consents[0].id);
    };
    ConsentNavComponent.prototype.setActiveConsentId = function (id) {
        this.activeConsentId = id;
        this.activeConsentEmitter.emit(this.activeConsentId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ConsentNavComponent.prototype, "consents", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConsentNavComponent.prototype, "activeConsentEmitter", void 0);
    ConsentNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consent-nav',
            template: __webpack_require__(/*! ./consent-nav.component.html */ "./src/app/modules/data-collection/online-form/online-form-consent/consent-nav/consent-nav.component.html"),
            styles: [__webpack_require__(/*! ./consent-nav.component.css */ "./src/app/modules/data-collection/online-form/online-form-consent/consent-nav/consent-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConsentNavComponent);
    return ConsentNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-consent/online-form-consent.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-consent/online-form-consent.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWNvbnNlbnQvb25saW5lLWZvcm0tY29uc2VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-consent/online-form-consent.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-consent/online-form-consent.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\r\n  Consent\r\n</p>\r\n\r\n<div class=\"app-of-wrap\">\r\n\r\n  <div class=\"row no-gutters align-items-center\">\r\n    <div class=\"col-12 app-of-nav-wrap\">\r\n      <app-consent-nav [consents]=\"form.consentInfo.consents\"\r\n                       (activeConsentEmitter)=\"onActiveConsent($event)\"></app-consent-nav>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngFor=\"let item of consents\">\r\n    <div *ngIf=\"item.id === activeConsentId\">\r\n\r\n      <!--Title-->\r\n      <div class=\"row no-gutters align-items-center pt-4\">\r\n        <div class=\"col-12 text-center\">\r\n          <p class=\"app-text-extra-bold mb-0\">\r\n            {{item.title | uppercase}}\r\n          </p>\r\n          <p class=\"app-text-second app-text-small mb-0\">\r\n            <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n            ~15 minutes\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Text-->\r\n      <div class=\"row no-gutters pt-4\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8\" [innerHTML]=\"item.text.value\"></div>\r\n        <div class=\"col-2\"></div>\r\n      </div>\r\n\r\n      <!--Checkbox-->\r\n      <div *ngIf=\"item.checkbox.isActive\" class=\"row no-gutters pt-4\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8\">\r\n          <label class=\"app-checkbox-container\"><span class=\"font-weight-bold\">{{item.checkbox.text}}</span>\r\n            <input type=\"checkbox\" [(ngModel)]=\"item.checkbox.checked\">\r\n            <span class=\"app-checkbox-checkmark\"></span>\r\n          </label>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n      </div>\r\n\r\n      <!--SIGNATURE-->\r\n      <div *ngIf=\"item.signature.isRequire\" class=\"mt-3\">\r\n\r\n        <!--E-SIGN SIGNATURE-->\r\n        <ng-container *ngIf=\"item.signature.type === SIGNATURE_TYPES.ESIGN\">\r\n\r\n          <!--EXTERNAL SIGNATURE-->\r\n          <ng-container *ngIf=\"item.signature.eType === E_SIGNATURE_TYPES.EXTERNAL\">\r\n\r\n            <div class=\"row no-gutters pt-3\" *ngIf=\"!item.signature.isBothParents\">\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-8 app-consent-text\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <textarea class=\"app-consent-table w-100 pl-3\"\r\n                              rows=\"2\"\r\n                              placeholder=\"Parent's Signature\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row no-gutters pt-3\" *ngIf=\"item.signature.isBothParents\">\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-8 app-consent-text\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n          <textarea class=\"app-consent-table w-100 pl-3\"\r\n                    rows=\"2\"\r\n                    placeholder=\"Father's Signature\"></textarea>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n          <textarea class=\"app-consent-table w-100 pl-3\"\r\n                    rows=\"2\"\r\n                    placeholder=\"Mother's Signature\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row no-gutters p-4\">\r\n              <div class=\"col-12 text-right\">\r\n                <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-container>\r\n\r\n          <!--SYSTEM SIGNATURE-->\r\n          <ng-container *ngIf=\"item.signature.eType === E_SIGNATURE_TYPES.SYSTEM\">\r\n\r\n            <div class=\"row no-gutters pt-3\" *ngIf=\"!item.signature.isBothParents\">\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-8\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <label class=\"app-checkbox-container\">Parent's Signature\r\n                      <input type=\"checkbox\"\r\n                             [(ngModel)]=\"item.signature.signed.parents\"\r\n                      [disabled]=\"isDisabledSign('parents', item.id)\">\r\n                      <span class=\"app-checkbox-checkmark\"></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row no-gutters pt-3\" *ngIf=\"item.signature.isBothParents\">\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-8\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <label class=\"app-checkbox-container\">Father's Signature\r\n                      <input type=\"checkbox\"\r\n                             [(ngModel)]=\"item.signature.signed.fathers\"\r\n                             [disabled]=\"isDisabledSign('fathers', item.id)\">\r\n                      <span class=\"app-checkbox-checkmark\"></span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <label class=\"app-checkbox-container\">Mother's Signature\r\n                      <input type=\"checkbox\"\r\n                             [(ngModel)]=\"item.signature.signed.mothers\"\r\n                             [disabled]=\"isDisabledSign('mothers', item.id)\">\r\n                      <span class=\"app-checkbox-checkmark\"></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row no-gutters p-4\">\r\n              <div class=\"col-12 text-right\">\r\n                <button class=\"btn app-btn-primary py-2 px-4\"\r\n                        (click)=\"onSystemSign(item.id)\">Accept\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-container>\r\n\r\n        </ng-container>\r\n\r\n        <!--WET SIGNATURE-->\r\n        <ng-container *ngIf=\"item.signature.type === SIGNATURE_TYPES.WET\">\r\n\r\n          <div class=\"row no-gutters pt-3\" *ngIf=\"!item.signature.isBothParents\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8 app-consent-text\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <textarea class=\"app-consent-table w-100 pl-3\"\r\n                            rows=\"2\"\r\n                            placeholder=\"Parent's Signature\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n\r\n          <div class=\"row no-gutters pt-3\" *ngIf=\"item.signature.isBothParents\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8 app-consent-text\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <textarea class=\"app-consent-table w-100 pl-3\"\r\n                            rows=\"2\"\r\n                            placeholder=\"Father's Signature\"></textarea>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <textarea class=\"app-consent-table w-100 pl-3\"\r\n                            rows=\"2\"\r\n                            placeholder=\"Mother's Signature\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n\r\n          <div class=\"row no-gutters p-4\">\r\n            <div class=\"col-12 text-right\">\r\n              <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\r\n            </div>\r\n          </div>\r\n\r\n        </ng-container>\r\n\r\n      </div>\r\n      <!--END SIGNATURE-->\r\n\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"row no-gutters mt-4\">\r\n  <div class=\"col-12 text-right\">\r\n    <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\r\n    <button class=\"btn app-btn-primary py-2 px-4\">Save & Go Next Step</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-consent/online-form-consent.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-consent/online-form-consent.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: OnlineFormConsentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormConsentComponent", function() { return OnlineFormConsentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/data-collection/online-form/services/signatures/system-signature.service.ts");





var OnlineFormConsentComponent = /** @class */ (function () {
    function OnlineFormConsentComponent(systemSignatureService) {
        this.systemSignatureService = systemSignatureService;
        this.SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_3__["SIGNATURE_TYPES"];
        this.E_SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_3__["E_SIGNATURE_TYPES"];
    }
    OnlineFormConsentComponent.prototype.ngOnInit = function () {
        this.consents = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.form.consentInfo.consents);
    };
    OnlineFormConsentComponent.prototype.onActiveConsent = function (id) {
        this.activeConsentId = id;
    };
    OnlineFormConsentComponent.prototype.onSystemSign = function (consentId) {
        var _this = this;
        var signed = this.consents.find(function (item) { return item.id === consentId; }).signature.signed;
        Object.keys(signed).map(function (item) {
            if (signed[item])
                _this.saveSystemSign(item, 'consentInfo', consentId);
        });
    };
    OnlineFormConsentComponent.prototype.saveSystemSign = function (personsType, itemType, consentId) {
        var _this = this;
        this.systemSignatureService.sign(this.form._id, this.form.personId, itemType, consentId)
            .subscribe(function (res) {
            _this.form.consentInfo.consents
                .find(function (item) { return item.id === consentId; }).signature.signed[personsType] = res.created;
        });
    };
    OnlineFormConsentComponent.prototype.isDisabledSign = function (personsType, consentId) {
        return this.form.consentInfo.consents.find(function (item) { return item.id === consentId; }).signature.signed[personsType];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormConsentComponent.prototype, "form", void 0);
    OnlineFormConsentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-consent',
            template: __webpack_require__(/*! ./online-form-consent.component.html */ "./src/app/modules/data-collection/online-form/online-form-consent/online-form-consent.component.html"),
            styles: [__webpack_require__(/*! ./online-form-consent.component.css */ "./src/app/modules/data-collection/online-form/online-form-consent/online-form-consent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormConsentComponent);
    return OnlineFormConsentComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let document of form.documents\" class=\"mb-3\">\r\n  <div class=\"\">\r\n    <span class=\"app-text-extra-bold\">{{document.name | uppercase}}</span>\r\n  </div>\r\n  <div class=\"my-2\" [innerHTML]=\"document.accompanyingText.data\"></div>\r\n  <div class=\"col-6  mx-2 document-cont-div row no-gutters align-items-center\" >\r\n<!--    {{document | json}}-->\r\n    <div class=\"col-1 py-2 mx-0\">\r\n      <i class=\"far fa-file-pdf fa-3x app-fb-section-icon\"></i>\r\n    </div>\r\n    <div class=\"col-7 py-2\"><span class=\"span-download\" (click)=\"openForPreview(document)\">{{form.attachments[document.data].name}}</span></div>\r\n    <div class=\"col-4\" (click)=\"openForPreview(document)\" ><button class=\"btn app-btn-primary form-control\">Download Document</button> </div>\r\n  </div>\r\n  <hr>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document-cont-div {\n  border-radius: 3px;\n  background-color: #F6F6F6; }\n\n.app-btn-primary {\n  color: white; }\n\n.app-btn-primary:hover, .app-btn-primary:focus, .app-btn-primary:active {\n    background-color: #4350a2; }\n\n.span-download {\n  color: #4350A2;\n  font-weight: bold;\n  cursor: pointer; }\n\n.link-a {\n  color: white; }\n\n.link-a:hover, .link-a:focus, .link-a:active {\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1kb2N1bWVudHMvQzpcXHJlZFxcZmUvc3JjXFxhcHBcXG1vZHVsZXNcXGRhdGEtY29sbGVjdGlvblxcb25saW5lLWZvcm1cXG9ubGluZS1mb3JtLWRvY3VtZW50cy1mb3Jtc1xcb25saW5lLWRvY3VtZW50c1xcb25saW5lLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1kb2N1bWVudHMvQzpcXHJlZFxcZmUvc3JjXFxzdHlsZXNcXHZhcmlhYmxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7RUFBRSx5QkFBeUIsRUFBQTs7QUFFL0M7RUFDRSxZQUFZLEVBQUE7O0FBRGQ7SUFHSSx5QkNSd0IsRUFBQTs7QURXNUI7RUFDRSxjQUFjO0VBQUcsaUJBQWlCO0VBQUUsZUFBZSxFQUFBOztBQUdyRDtFQUNFLFlBQVksRUFBQTs7QUFEZDtJQUdJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWRvY3VtZW50cy1mb3Jtcy9vbmxpbmUtZG9jdW1lbnRzL29ubGluZS1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG4uZG9jdW1lbnQtY29udC1kaXZ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1x0YmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxufVxyXG4uYXBwLWJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgJjpob3ZlciwgJjpmb2N1cywgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGVsZW1lbnQtYmFzZS1jb2xvcjtcclxuICB9XHJcbn1cclxuLnNwYW4tZG93bmxvYWR7XHJcbiAgY29sb3I6ICM0MzUwQTI7XHRcdGZvbnQtd2VpZ2h0OiBib2xkOyBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saW5rLWF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gICY6aG92ZXIsICY6Zm9jdXMsICY6YWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuIiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcclxuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xyXG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xyXG4kZWxlbWVudC1kYW5nZXItY29sb3I6IHJlZDtcclxuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xyXG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcclxuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcclxuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xyXG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xyXG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XHJcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XHJcblxyXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xyXG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XHJcblxyXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcclxuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcclxuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XHJcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcblxyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xyXG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcclxuJHJlZC1jb2xvcjogI2ZjNjQ2NztcclxuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xyXG5cclxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xyXG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XHJcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XHJcblxyXG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xyXG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcclxuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcclxuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xyXG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XHJcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XHJcblxyXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7Il19 */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: OnlineDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineDocumentsComponent", function() { return OnlineDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/files.service */ "./src/app/modules/data-collection/online-form/services/files.service.ts");




var OnlineDocumentsComponent = /** @class */ (function () {
    function OnlineDocumentsComponent(fileService) {
        this.fileService = fileService;
        this.token = '?api_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_token;
    }
    OnlineDocumentsComponent.prototype.ngOnInit = function () {
    };
    OnlineDocumentsComponent.prototype.openForPreview = function (document) {
        if (!document.data)
            return;
        window.open(this.form.attachments[document.data].link + this.token, '_self');
    };
    OnlineDocumentsComponent.prototype.downloadFile = function (document) {
        if (!document.data)
            return;
        this.fileService.getFileFromServer(this.form.attachments[document.data].link);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineDocumentsComponent.prototype, "form", void 0);
    OnlineDocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-documents',
            template: __webpack_require__(/*! ./online-documents.component.html */ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.html"),
            styles: [__webpack_require__(/*! ./online-documents.component.scss */ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_files_service__WEBPACK_IMPORTED_MODULE_3__["FilesService"]])
    ], OnlineDocumentsComponent);
    return OnlineDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWRvY3VtZW50cy1mb3Jtcy9vbmxpbmUtZm9ybS1kb2N1bWVudHMtZm9ybXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\r\n  Documents & Forms\r\n</p>\r\n\r\n\r\n<div class=\"app-of-wrap\">\r\n  <div class=\"row no-gutters align-items-center\">\r\n    <div class=\"col-12 app-of-nav-wrap\">\r\n      <nav class=\"navbar navbar-expand-lg py-0\">\r\n        <div class=\"justify-content-left\">\r\n          <ul class=\"navbar-nav\">\r\n\r\n            <li class=\"nav-item py-2 px-1\"\r\n                [ngClass]=\"{'app-text-primary app-of-nav-active-border' : isDocuments}\">\r\n              <a class=\"nav-link font-weight-bold app-cursor-pointer\"\r\n                 (click)=\"isDocuments=!isDocuments\">\r\n                Documents for Parents\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item py-2 px-1\">\r\n              <a class=\"nav-link\">\r\n                <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item py-2 px-1\"\r\n                [ngClass]=\"{'app-text-primary app-of-nav-active-border' : !isDocuments}\">\r\n              <a class=\"nav-link font-weight-bold app-cursor-pointer\"\r\n                 (click)=\"isDocuments=!isDocuments\">\r\n                School Forms\r\n              </a>\r\n          </ul>\r\n\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n\r\n\r\n      <div class=\"row no-gutters p-4\">\r\n        <div class=\"col-12\">\r\n        <app-online-documents *ngIf=\"isDocuments\" [form]=\"form\"></app-online-documents>\r\n        <app-online-pdf-forms *ngIf=\"!isDocuments\" [form]=\"form\"></app-online-pdf-forms>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"row no-gutters mt-4\">\r\n  <div class=\"col-12 text-right\">\r\n    <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\r\n    <button class=\"btn app-btn-primary py-2 px-4\" (click)=\"logWhatIWant()\">Save & Go Next Step</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: OnlineFormDocumentsFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormDocumentsFormsComponent", function() { return OnlineFormDocumentsFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlineFormDocumentsFormsComponent = /** @class */ (function () {
    function OnlineFormDocumentsFormsComponent() {
        this.isDocuments = true;
    }
    OnlineFormDocumentsFormsComponent.prototype.ngOnInit = function () {
    };
    OnlineFormDocumentsFormsComponent.prototype.logWhatIWant = function () {
        console.log(this.form.forms[0].form);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormDocumentsFormsComponent.prototype, "form", void 0);
    OnlineFormDocumentsFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-documents-forms',
            template: __webpack_require__(/*! ./online-form-documents-forms.component.html */ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.html"),
            styles: [__webpack_require__(/*! ./online-form-documents-forms.component.css */ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormDocumentsFormsComponent);
    return OnlineFormDocumentsFormsComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.css":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slice-wrap{\r\n  position:relative;\r\n  width: 816px;\r\n  height: 1056px;\r\n\r\n}\r\n\r\n.dotted-wrap{\r\n  border: 3px dashed #D6D6D6;\tborder-radius: 3px;\tbackground-color: #F6F6F6\r\n}\r\n\r\n.overlay{\r\n  background-color: rgba(0,0,0,0.7);\r\n  position: absolute\r\n}\r\n\r\n.test-c{\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 816px;\r\n  height: 1056px;\r\n\r\n}\r\n\r\n.div-inside{\r\n  border: 2px solid #000000;\r\n  background-color: white;\r\n  position: absolute;\r\n  z-index: 9900;\r\n  /*font-size: 0.5rem!important;*/\r\n}\r\n\r\n.app-input{\r\n  min-height: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1wZGYtZm9ybXMvb25saW5lLXBkZi1mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLDBCQUEwQixFQUFFLGtCQUFrQixFQUFFO0FBQ2xEOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsS0FBSztFQUNMLE1BQU07RUFDTixZQUFZO0VBQ1osY0FBYzs7QUFFaEI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1wZGYtZm9ybXMvb25saW5lLXBkZi1mb3Jtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWNlLXdyYXB7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgxNnB4O1xyXG4gIGhlaWdodDogMTA1NnB4O1xyXG5cclxufVxyXG5cclxuLmRvdHRlZC13cmFwe1xyXG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjRDZENkQ2O1x0Ym9yZGVyLXJhZGl1czogM3B4O1x0YmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNlxyXG59XHJcblxyXG4ub3ZlcmxheXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlXHJcbn1cclxuLnRlc3QtY3tcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6IDgxNnB4O1xyXG4gIGhlaWdodDogMTA1NnB4O1xyXG5cclxufVxyXG4uZGl2LWluc2lkZXtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTAwO1xyXG4gIC8qZm9udC1zaXplOiAwLjVyZW0haW1wb3J0YW50OyovXHJcbn1cclxuLmFwcC1pbnB1dHtcclxuICBtaW4taGVpZ2h0OiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let pdf of form.forms\">\r\n  <!--Title-->\r\n  <div class=\"row no-gutters align-items-center pt-4\">\r\n    <div class=\"col-12 text-center\">\r\n      <p class=\"app-text-extra-bold mb-0\">\r\n        {{pdf.name | uppercase}}\r\n      </p>\r\n      <p class=\"app-text-second app-text-small mb-0\">\r\n        <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n        ~15 minutes\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Text-->\r\n  <div class=\"row no-gutters pt-4\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8 text-center\" [innerHTML]=\"pdf.accompanyingText.data\"></div>\r\n    <div class=\"col-2\"></div>\r\n  </div>\r\n\r\n<div class=\"dotted-wrap mt-3 d-flex justify-content-center\">\r\n  <div class=\"slice-wrap m-3\">\r\n\r\n    <div [hidden]=\"loading\" class=\"test-c d-flex justify-content-center overlay pt-5\">\r\n      <div class=\"spinner-border text-light\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div [hidden]=\"!loading\" class=\"test-c\">\r\n      <div *ngFor=\"let div of pdf.form.fieldsPdf[page-1]\">\r\n        <div\r\n          [ngStyle]=\"styleObject(div)\"\r\n          class=\"div-inside\"\r\n              >\r\n          <div *ngIf=\"div.type==='system'\" class=\"form-group app-input-container\"\r\n               [ngClass]=\"{'app-input-fill': div.linkedField.value && !div.linkedField.options.hideLabel}\">\r\n            <label *ngIf=\"!div.linkedField.options.hideLabel\" class=\"app-input-label\">{{div.linkedField.name | titlecase}}</label>\r\n            <input type=\"text\"\r\n                   aria-describedby=\"basic-addon2\"\r\n                   class=\"app-input \"\r\n                   [(ngModel)]=\"div.linkedField.value\"\r\n                   [readOnly]=\"div.linkedField.options.readonly\"\r\n                   [required]=\"div.linkedField.options.required\"\r\n                   [placeholder]=\"div.linkedField.name | titlecase\">\r\n          </div>\r\n          <div *ngIf=\"div.type==='temporary'\" class=\"form-group app-input-container\"\r\n               [ngClass]=\"{'app-input-fill': div.linkedField.value}\">\r\n            <label class=\"app-input-label\">{{div.linkedField.name | titlecase}}</label>\r\n            <input type=\"text\"\r\n                   aria-describedby=\"basic-addon2\"\r\n                   class=\"app-input \"\r\n                   [(ngModel)]=\"div.linkedField.value\"\r\n                   [placeholder]=\"div.linkedField.name | titlecase\">\r\n          </div>\r\n          <div *ngIf=\"div.type==='signature'\" class=\"form-group\"\r\n               >\r\n            <span>Sign Here</span>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div>\r\n\r\n      <pdf-viewer\r\n        [original-size]=\"false\"\r\n        [src]=\"{ url: pdf.form.link+token}\"\r\n        [render-text-mode]=\"0\"\r\n        [autoresize]=\"true\"\r\n        [show-all]=\"false\"\r\n        [page]=\"page\"\r\n        style=\"display: block;\"\r\n        (on-progress)=\"onProgress($event)\"\r\n      >\r\n      </pdf-viewer>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n  <div *ngIf=\"pdf.form.numberOfPages>1\" class=\"d-flex justify-content-center pt-4\">\r\n    <ngb-pagination [collectionSize]=\"pdf.form.numberOfPages * 10\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\r\n\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: OnlinePdfFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinePdfFormsComponent", function() { return OnlinePdfFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");



var OnlinePdfFormsComponent = /** @class */ (function () {
    function OnlinePdfFormsComponent() {
        this.token = "?api_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_token;
        this.page = 1;
        this.loading = false;
    }
    OnlinePdfFormsComponent.prototype.ngOnInit = function () {
    };
    OnlinePdfFormsComponent.prototype.onProgress = function (progressData) {
        // do anything with progress data. For example progress indicator
        this.loading = progressData.loaded <= progressData.total;
    };
    OnlinePdfFormsComponent.prototype.styleObject = function (div) {
        return {
            'top': div.top + 'px',
            'left': div.left + 'px',
            'width': div.width + 'px',
            'height': div.height + 'px'
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlinePdfFormsComponent.prototype, "form", void 0);
    OnlinePdfFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-pdf-forms',
            template: __webpack_require__(/*! ./online-pdf-forms.component.html */ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html"),
            styles: [__webpack_require__(/*! ./online-pdf-forms.component.css */ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlinePdfFormsComponent);
    return OnlinePdfFormsComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/entryComponents.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/entryComponents.ts ***!
  \*******************************************************************************************/
/*! exports provided: entryComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entryComponents", function() { return entryComponents; });
/* harmony import */ var _fileds_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileds/short-text-field/short-text-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts");
/* harmony import */ var _fileds_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileds/empty-line-field/empty-line-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _fileds_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fileds/long-text-field/long-text-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts");
/* harmony import */ var _fileds_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fileds/label-field/label-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.ts");
/* harmony import */ var _fileds_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fileds/number-text-field/number-text-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts");
/* harmony import */ var _fileds_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fileds/multiple-options-field/multiple-options-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _fileds_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fileds/email-field/email-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.ts");
/* harmony import */ var _fileds_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fileds/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _fileds_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fileds/date-time-field/date-time-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts");
/* harmony import */ var _fileds_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fileds/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _fileds_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fileds/time-field/time-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.ts");
/* harmony import */ var _fileds_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fileds/phone-number-field/phone-number-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts");












var entryComponents = [
    _fileds_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_0__["ShortTextFieldComponent"],
    _fileds_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_2__["LongTextFieldComponent"],
    _fileds_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_4__["NumberTextFieldComponent"],
    _fileds_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_5__["MultipleOptionsFieldComponent"],
    _fileds_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_6__["EmailFieldComponent"],
    _fileds_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_7__["DropDownListFieldComponent"],
    _fileds_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_8__["DateTimeFieldComponent"],
    _fileds_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_9__["HebrewDateFieldComponent"],
    _fileds_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__["TimeFieldComponent"],
    _fileds_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_11__["PhoneNumberFieldComponent"],
    _fileds_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_3__["LabelFieldComponent"],
    _fileds_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_1__["EmptyLineFieldComponent"]
];


/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.css":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWxlZHMvZGF0ZS10aW1lLWZpZWxkL2RhdGUtdGltZS1maWVsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group app-input-container app-input-fill\"\r\n     [ngClass]=\"{'app-input-fill': formatDate && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input class=\"form-control app-input\"\r\n         placeholder=\"yyyy-mm-dd\"\r\n         name=\"dp\"\r\n         ngbDatepicker\r\n         #d=\"ngbDatepicker\"\r\n         (ngModelChange)=\"blurChanges($event)\"\r\n         (click)=\"d.toggle()\"\r\n         [ngModel]=\"formatDate\"\r\n         [disabled]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\">\r\n\r\n  <div class=\"input-group-append\">\r\n    <button class=\"btn app-btn-outline-primary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n      <i class=\"far fa-calendar\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DateTimeFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFieldComponent", function() { return DateTimeFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var DateTimeFieldComponent = /** @class */ (function () {
    function DateTimeFieldComponent(parserFormatter) {
        this.parserFormatter = parserFormatter;
    }
    DateTimeFieldComponent.prototype.ngOnInit = function () {
        this.formatDate = this.parserFormatter.parse(this.data.value);
    };
    DateTimeFieldComponent.prototype.blurChanges = function (event) {
        this.data.value = this.parserFormatter.format(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DateTimeFieldComponent.prototype, "data", void 0);
    DateTimeFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-date-time-field',
            template: __webpack_require__(/*! ./date-time-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.html"),
            styles: [__webpack_require__(/*! ./date-time-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]])
    ], DateTimeFieldComponent);
    return DateTimeFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.css":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWxlZHMvZHJvcC1kb3duLWxpc3QtZmllbGQvZHJvcC1kb3duLWxpc3QtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value}\">\r\n  <label class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <select class=\"app-input form-control\"\r\n          [(ngModel)]=\"data.value\"\r\n          [required]=\"data.options.required\"\r\n          [disabled]=\"data.options.readonly\">\r\n    <option *ngFor=\"let item of data.options.items || list\" [selected]=\"data.value\" [ngValue]=\"item\">{{item}}</option>\r\n  </select>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: DropDownListFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownListFieldComponent", function() { return DropDownListFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropDownListFieldComponent = /** @class */ (function () {
    function DropDownListFieldComponent() {
        this.list = ["Options 1", "Options 2", "Options 3", "Options 4", "Options 5",];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropDownListFieldComponent.prototype, "data", void 0);
    DropDownListFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drop-down-list-field',
            template: __webpack_require__(/*! ./drop-down-list-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.html"),
            styles: [__webpack_require__(/*! ./drop-down-list-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.css")]
        })
    ], DropDownListFieldComponent);
    return DropDownListFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9lbWFpbC1maWVsZC9lbWFpbC1maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWxlZHMvZW1haWwtZmllbGQvZW1haWwtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"text\"\r\n         class=\"app-input form-control\"\r\n         email\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: EmailFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFieldComponent", function() { return EmailFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailFieldComponent = /** @class */ (function () {
    function EmailFieldComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmailFieldComponent.prototype, "data", void 0);
    EmailFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-field',
            template: __webpack_require__(/*! ./email-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.html"),
            styles: [__webpack_require__(/*! ./email-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.css")]
        })
    ], EmailFieldComponent);
    return EmailFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.css":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWxlZHMvZW1wdHktbGluZS1maWVsZC9lbXB0eS1saW5lLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: EmptyLineFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyLineFieldComponent", function() { return EmptyLineFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmptyLineFieldComponent = /** @class */ (function () {
    // @Input() data: any;
    function EmptyLineFieldComponent() {
    }
    EmptyLineFieldComponent.prototype.ngOnInit = function () {
        //  this.data.name='';
    };
    EmptyLineFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty-line-field',
            template: __webpack_require__(/*! ./empty-line-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.html"),
            styles: [__webpack_require__(/*! ./empty-line-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmptyLineFieldComponent);
    return EmptyLineFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-datepicker class=\"hebrew rtl\" #dp [(ngModel)]=\"model\" [displayMonths]=\"1\" [firstDayOfWeek]=\"7\" [dayTemplate]=\"dt\"\r\n                [dayTemplateData]=\"dayTemplateData\">\r\n</ngb-datepicker>\r\n\r\n<ng-template #dt let-date let-data=\"data\" let-selected=\"selected\" let-currentMonth=\"currentMonth\">\r\n  <div class=\"hebrew-day\" [class.outside]=\"date.month !== currentMonth\" [class.selected]=\"selected\">\r\n    <div class=\"gregorian-num\">{{ data.gregorian.day + '/' + (data.gregorian.month) }}</div>\r\n    <div class=\"hebrew-num\">{{ i18n.getDayNumerals(date) }}</div>\r\n  </div>\r\n</ng-template>\r\n\r\n<hr/>\r\n\r\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\r\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\r\n\r\n<hr/>\r\n\r\n\r\n\r\n\r\n<!--<form class=\"form-inline\">-->\r\n  <!--<div class=\"form-group\">-->\r\n    <!--<div class=\"input-group\">-->\r\n      <!--<input class=\"form-control\" placeholder=\"yyyy-mm-dd\"-->\r\n             <!--name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker [footerTemplate]=\"dt\"  [displayMonths]=\"1\" [firstDayOfWeek]=\"7\" [dayTemplate]=\"dt\" #dp=\"ngbDatepicker\" [dayTemplateData]=\"dayTemplateData\">-->\r\n      <!--<div class=\"input-group-addon\">-->\r\n        <!--<button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</form>-->\r\n\r\n<!--<ng-template #dt let-date let-data=\"data\" let-selected=\"selected\" let-currentMonth=\"currentMonth\">-->\r\n<!--<div class=\"hebrew-day\" [class.outside]=\"date.month !== currentMonth\" [class.selected]=\"selected\">-->\r\n<!--&lt;!&ndash;<div class=\"gregorian-num\">{{ data.gregorian.day + '/' + (data.gregorian.month) }}</div>&ndash;&gt;-->\r\n<!--<div class=\"hebrew-num\">{{ i18n.getDayNumerals(date) }}</div>-->\r\n<!--</div>-->\r\n  <!--&lt;!&ndash;<hr/>&ndash;&gt;-->\r\n\r\n  <!--&lt;!&ndash;<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>&ndash;&gt;-->\r\n  <!--&lt;!&ndash;<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>&ndash;&gt;-->\r\n\r\n  <!--&lt;!&ndash;<hr/>&ndash;&gt;-->\r\n<!--</ng-template>-->\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-datepicker-month-view {\n  display: block; }\n\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n  line-height: 3rem;\n  text-align: center;\n  font-style: italic; }\n\n.ngb-dp-weekday {\n  color: #5bc0de;\n  color: var(--info); }\n\n.ngb-dp-week {\n  border-radius: 0.25rem;\n  display: flex; }\n\n.ngb-dp-weekdays {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0; }\n\n.ngb-dp-day,\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n  width: 2rem;\n  height: 2rem; }\n\n.ngb-dp-day {\n  cursor: pointer; }\n\n.ngb-dp-day.disabled,\n.ngb-dp-day.hidden {\n  cursor: default; }\n\n.hebrew-day {\n  text-align: right;\n  padding: 0.25rem 0.65rem 0.25rem 0.25rem;\n  border-radius: 0.25rem;\n  display: inline-block;\n  height: 2.75rem;\n  width: 2.75rem; }\n\n.hebrew-day:hover,\n.hebrew-day.focused {\n  background-color: #e6e6e6; }\n\n.hebrew-day.selected {\n  background-color: #007bff;\n  color: white; }\n\n.outside {\n  color: lightgray; }\n\n.gregorian-num {\n  font-size: 0.5rem;\n  direction: ltr; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9oZWJyZXctZGF0ZS1maWVsZC9DOlxccmVkXFxmZS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmaWVsZHNcXGhlYnJldy1kYXRlLWZpZWxkXFxoZWJyZXctZGF0ZS1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usc0JBQXNCO0VBRXRCLGFBQWEsRUFBQTs7QUFFZjtFQUNFLDZDQUE2QztFQUM3QyxnQkFBZ0IsRUFBQTs7QUFFbEI7OztFQUdFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxlQUFlLEVBQUE7O0FBRWpCOztFQUVFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7O0VBRUUseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFFZDtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL2hlYnJldy1kYXRlLWZpZWxkL2hlYnJldy1kYXRlLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4ubmdiLWRwLXdlZWtkYXkge1xyXG4gIGNvbG9yOiAjNWJjMGRlO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmZvKTtcclxufVxyXG4ubmdiLWRwLXdlZWsge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubmdiLWRwLXdlZWtkYXlzIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4ubmdiLWRwLWRheSxcclxuLm5nYi1kcC13ZWVrLW51bWJlcixcclxuLm5nYi1kcC13ZWVrZGF5IHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbn1cclxuLm5nYi1kcC1kYXkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmdiLWRwLWRheS5kaXNhYmxlZCxcclxuLm5nYi1kcC1kYXkuaGlkZGVuIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5oZWJyZXctZGF5IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNjVyZW0gMC4yNXJlbSAwLjI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMi43NXJlbTtcclxuICB3aWR0aDogMi43NXJlbTtcclxufVxyXG4uaGVicmV3LWRheTpob3ZlcixcclxuLmhlYnJldy1kYXkuZm9jdXNlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxufVxyXG4uaGVicmV3LWRheS5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm91dHNpZGUge1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuLmdyZWdvcmlhbi1udW0ge1xyXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: HebrewDateFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HebrewDateFieldComponent", function() { return HebrewDateFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var HebrewDateFieldComponent = /** @class */ (function () {
    function HebrewDateFieldComponent(calendar, i18n) {
        this.calendar = calendar;
        this.i18n = i18n;
        this.dayTemplateData = this.dayTemplateData.bind(this);
        // console.log(this.dayTemplateData);
    }
    HebrewDateFieldComponent.prototype.dayTemplateData = function (date) {
        return {
            gregorian: this.calendar.toGregorian(date)
        };
    };
    HebrewDateFieldComponent.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    HebrewDateFieldComponent.prototype.ngOnInit = function () {
        // console.log(this.calendar);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HebrewDateFieldComponent.prototype, "data", void 0);
    HebrewDateFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hebrew-date-field',
            template: __webpack_require__(/*! ./hebrew-date-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.html"),
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendarHebrew"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18nHebrew"] }
            ],
            styles: [__webpack_require__(/*! ./hebrew-date-field.component.scss */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"]])
    ], HebrewDateFieldComponent);
    return HebrewDateFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>{{data.value}}</label>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWxlZHMvbGFiZWwtZmllbGQvbGFiZWwtZmllbGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: LabelFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelFieldComponent", function() { return LabelFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LabelFieldComponent = /** @class */ (function () {
    function LabelFieldComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LabelFieldComponent.prototype, "data", void 0);
    LabelFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-label-field',
            template: __webpack_require__(/*! ./label-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.html"),
            styles: [__webpack_require__(/*! ./label-field.component.scss */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.scss")]
        })
    ], LabelFieldComponent);
    return LabelFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.css":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9sb25nLXRleHQtZmllbGQvbG9uZy10ZXh0LWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL2xvbmctdGV4dC1maWVsZC9sb25nLXRleHQtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"text\"\r\n         class=\"app-input form-control\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: LongTextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongTextFieldComponent", function() { return LongTextFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LongTextFieldComponent = /** @class */ (function () {
    function LongTextFieldComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LongTextFieldComponent.prototype, "data", void 0);
    LongTextFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-long-text-field',
            template: __webpack_require__(/*! ./long-text-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.html"),
            styles: [__webpack_require__(/*! ./long-text-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.css")]
        })
    ], LongTextFieldComponent);
    return LongTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multi-div{\r\n  border: 1px solid bisque;\r\n  border-radius: 11px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9tdWx0aXBsZS1vcHRpb25zLWZpZWxkL211bHRpcGxlLW9wdGlvbnMtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL211bHRpcGxlLW9wdGlvbnMtZmllbGQvbXVsdGlwbGUtb3B0aW9ucy1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11bHRpLWRpdntcclxuICBib3JkZXI6IDFweCBzb2xpZCBiaXNxdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group multi-div\">\r\n<div class=\"checkbox\" *ngFor=\"let item of data.options.item || list\">\r\n  <label><input type=\"checkbox\" value=\"\">{{item}}</label>\r\n</div>\r\n  <div class=\"checkbox\">\r\n  <label><input type=\"checkbox\" value=\"\"> <input type=\"text\" placeholder=\"Other\"></label>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: MultipleOptionsFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleOptionsFieldComponent", function() { return MultipleOptionsFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MultipleOptionsFieldComponent = /** @class */ (function () {
    function MultipleOptionsFieldComponent() {
        this.list = ["Options 1", "Options 2", "Options 3", "Options 4", "Options 5"];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MultipleOptionsFieldComponent.prototype, "data", void 0);
    MultipleOptionsFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multiple-options-field',
            template: __webpack_require__(/*! ./multiple-options-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.html"),
            styles: [__webpack_require__(/*! ./multiple-options-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.css")]
        })
    ], MultipleOptionsFieldComponent);
    return MultipleOptionsFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.css":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWxlZHMvbnVtYmVyLXRleHQtZmllbGQvbnVtYmVyLXRleHQtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"number\"\r\n         class=\"app-input form-control\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: NumberTextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberTextFieldComponent", function() { return NumberTextFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberTextFieldComponent = /** @class */ (function () {
    function NumberTextFieldComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NumberTextFieldComponent.prototype, "data", void 0);
    NumberTextFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-number-text-field',
            template: __webpack_require__(/*! ./number-text-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.html"),
            styles: [__webpack_require__(/*! ./number-text-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.css")]
        })
    ], NumberTextFieldComponent);
    return NumberTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.css":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWxlZHMvcGhvbmUtbnVtYmVyLWZpZWxkL3Bob25lLW51bWJlci1maWVsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"text\"\r\n         aria-describedby=\"basic-addon2\"\r\n         class=\"app-input form-control\"\r\n         pattern=\"^((\\+\\d{1,3}(-| )?\\(?\\d\\)?(-| )?\\d{1,5})|(\\(?\\d{2,6}\\)?))(-| )?(\\d{3,4})(-| )?(\\d{4})(( x| ext)\\d{1,5}){0,1}$\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: PhoneNumberFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberFieldComponent", function() { return PhoneNumberFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhoneNumberFieldComponent = /** @class */ (function () {
    function PhoneNumberFieldComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhoneNumberFieldComponent.prototype, "data", void 0);
    PhoneNumberFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phone-number-field',
            template: __webpack_require__(/*! ./phone-number-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.html"),
            styles: [__webpack_require__(/*! ./phone-number-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.css")]
        })
    ], PhoneNumberFieldComponent);
    return PhoneNumberFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.css":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9zaG9ydC10ZXh0LWZpZWxkL3Nob3J0LXRleHQtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWxlZHMvc2hvcnQtdGV4dC1maWVsZC9zaG9ydC10ZXh0LWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"text\"\r\n         aria-describedby=\"basic-addon2\"\r\n         class=\"app-input form-control\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ShortTextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortTextFieldComponent", function() { return ShortTextFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShortTextFieldComponent = /** @class */ (function () {
    function ShortTextFieldComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShortTextFieldComponent.prototype, "data", void 0);
    ShortTextFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-short-text-field',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./short-text-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.html"),
            styles: [__webpack_require__(/*! ./short-text-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.css")]
        })
    ], ShortTextFieldComponent);
    return ShortTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWxlZHMvdGltZS1maWVsZC90aW1lLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"time\"\r\n         class=\"app-input form-control\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: TimeFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFieldComponent", function() { return TimeFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimeFieldComponent = /** @class */ (function () {
    function TimeFieldComponent() {
    }
    TimeFieldComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimeFieldComponent.prototype, "data", void 0);
    TimeFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-time-field',
            template: __webpack_require__(/*! ./time-field.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.html"),
            styles: [__webpack_require__(/*! ./time-field.component.css */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeFieldComponent);
    return TimeFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/online-form-fields.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/online-form-fields.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>-->\r\n  <!--<label class=\"has-float-label\">-->\r\n    <!--<span class=\"spanForLabel\" *ngIf=\"!field.options.hideLabel\">{{field.name}}</span>-->\r\n    <ng-template appFieldContent ></ng-template>\r\n  <!--</label>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/online-form-fields.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/online-form-fields.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9vbmxpbmUtZm9ybS1maWVsZHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-fields/online-form-fields.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-fields/online-form-fields.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: OnlineFormFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormFieldsComponent", function() { return OnlineFormFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/online-form.service */ "./src/app/modules/data-collection/online-form/services/online-form.service.ts");
/* harmony import */ var _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/field-content.directive */ "./src/app/modules/data-collection/online-form/directives/field-content.directive.ts");





var OnlineFormFieldsComponent = /** @class */ (function () {
    function OnlineFormFieldsComponent(resolver, onlineFormService) {
        this.resolver = resolver;
        this.onlineFormService = onlineFormService;
    }
    OnlineFormFieldsComponent.prototype.ngOnInit = function () {
        this.createComponent();
    };
    OnlineFormFieldsComponent.prototype.createComponent = function () {
        if (!this.field._id) {
            this.field._id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        }
        // TODO Remove '+' after fix return number field type of new existing field
        var componentFactory = this.resolver.resolveComponentFactory(this.onlineFormService.componentFieldsMap.get(+this.field.type));
        var viewContainerRef = this.contentDirective.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.field;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormFieldsComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directives_field_content_directive__WEBPACK_IMPORTED_MODULE_4__["FieldContentDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_4__["FieldContentDirective"])
    ], OnlineFormFieldsComponent.prototype, "contentDirective", void 0);
    OnlineFormFieldsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-online-form-fields",
            template: __webpack_require__(/*! ./online-form-fields.component.html */ "./src/app/modules/data-collection/online-form/online-form-fields/online-form-fields.component.html"),
            styles: [__webpack_require__(/*! ./online-form-fields.component.scss */ "./src/app/modules/data-collection/online-form/online-form-fields/online-form-fields.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__["OnlineFormService"]])
    ], OnlineFormFieldsComponent);
    return OnlineFormFieldsComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-nav/general-info-nav.component.css":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/general-info-nav/general-info-nav.component.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWdlbmVyYWwtaW5mby9nZW5lcmFsLWluZm8tbmF2L2dlbmVyYWwtaW5mby1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-nav/general-info-nav.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/general-info-nav/general-info-nav.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg py-0\">\r\n  <div class=\"justify-content-left\">\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <ng-container *ngFor=\"let item of sectionNames; let i = index\">\r\n        <li class=\"nav-item py-2 px-1\"\r\n            [ngClass]=\"{\r\n            'app-text-primary app-of-nav-active-border' : activeSection === item.name,\r\n            'app-text-danger' : generalSectionsNames.familyInfo === item.name && activeSection !== item.name,\r\n            'app-text-success' : generalSectionsNames.parentsInfo === item.name && activeSection !== item.name\r\n            }\">\r\n          <a class=\"nav-link font-weight-bold app-cursor-pointer\"\r\n             (click)=\"setActiveSection(item.name)\">\r\n            {{item.title}}\r\n          </a>\r\n        </li>\r\n        <li [hidden]=\"i === sectionNames.length-1\" class=\"nav-item py-2 px-1\">\r\n          <a class=\"nav-link\">\r\n            <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\r\n          </a>\r\n        </li>\r\n      </ng-container>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-nav/general-info-nav.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/general-info-nav/general-info-nav.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: GeneralInfoNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoNavComponent", function() { return GeneralInfoNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/general-info-section-name.model */ "./src/app/modules/data-collection/online-form/model/general-info-section-name.model.ts");



var GeneralInfoNavComponent = /** @class */ (function () {
    function GeneralInfoNavComponent() {
        this.activeSectionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.generalSectionsNames = _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__["generalSectionsNames"];
        this.activeSection = _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__["generalSectionsNames"].parentsInfo;
        this.sectionNames = [
            // {name: generalSectionsNames.familyInfo, title: 'Family General Info'},
            { name: _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__["generalSectionsNames"].parentsInfo, title: 'Parents Info' },
        ];
    }
    GeneralInfoNavComponent.prototype.ngOnInit = function () {
        this.activeSectionEmitter.emit(this.activeSection);
    };
    GeneralInfoNavComponent.prototype.setActiveSection = function (sectionName) {
        this.activeSection = sectionName;
        this.activeSectionEmitter.emit(this.activeSection);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeneralInfoNavComponent.prototype, "activeSectionEmitter", void 0);
    GeneralInfoNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-info-nav',
            template: __webpack_require__(/*! ./general-info-nav.component.html */ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-nav/general-info-nav.component.html"),
            styles: [__webpack_require__(/*! ./general-info-nav.component.css */ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-nav/general-info-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoNavComponent);
    return GeneralInfoNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.css":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWdlbmVyYWwtaW5mby9nZW5lcmFsLWluZm8tcGFyZW50cy9nZW5lcmFsLWluZm8tcGFyZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center pb-4\">\r\n  <div class=\"col-4\"></div>\r\n  <div class=\"col-4 text-center\">\r\n    <p class=\"app-text-extra-bold mb-0\">\r\n      {{'Parents Information' | uppercase}}\r\n    </p>\r\n    <p class=\"app-text-second app-text-small mb-0\">\r\n      <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n      ~15 minutes\r\n    </p>\r\n  </div>\r\n  <div class=\"col-4 text-right\">\r\n    <button class=\"btn app-btn-outline-primary\">Add Parent</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"app-of-general-info-section px-3 py-4\">\r\n\r\n  <!--General Fields-->\r\n  <div *ngIf=\"form\" class=\"row no-gutters\">\r\n    <ng-container *ngFor=\"let item of form.fields\">\r\n\r\n      <div *ngIf=\"item.type !== 113\" class=\"col-{{item.options.size}} p-2\">\r\n        <app-online-form-fields [field]=\"item\"></app-online-form-fields>\r\n      </div>\r\n\r\n      <div class=\"row no-gutters col-12\" *ngIf=\"item.type === 113\">\r\n        <div class=\"col-12\">\r\n          <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">{{item.name | uppercase}}</p>\r\n        </div>\r\n        <ng-container *ngFor=\"let groupField of item.fields\">\r\n          <div class=\"col-{{groupField.options.size}} px-2\">\r\n            <app-online-form-fields [field]=\"groupField\"></app-online-form-fields>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: GeneralInfoParentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoParentsComponent", function() { return GeneralInfoParentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeneralInfoParentsComponent = /** @class */ (function () {
    function GeneralInfoParentsComponent() {
    }
    GeneralInfoParentsComponent.prototype.ngOnInit = function () {
        console.log("form:");
        console.log(this.form);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeneralInfoParentsComponent.prototype, "form", void 0);
    GeneralInfoParentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-info-parents',
            template: __webpack_require__(/*! ./general-info-parents.component.html */ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.html"),
            styles: [__webpack_require__(/*! ./general-info-parents.component.css */ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoParentsComponent);
    return GeneralInfoParentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWdlbmVyYWwtaW5mby9nZW5lcmFsLWluZm8tc3R1ZGVudHMvZ2VuZXJhbC1pbmZvLXN0dWRlbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center pb-4\">\r\n  <div class=\"col-4\"></div>\r\n  <div class=\"col-4 text-center\">\r\n    <p class=\"app-text-extra-bold mb-0\">\r\n      {{'Student(s) Information' | uppercase}}\r\n    </p>\r\n    <p class=\"app-text-second app-text-small mb-0\">\r\n      <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n      ~15 minutes\r\n    </p>\r\n  </div>\r\n  <div class=\"col-4 text-right\">\r\n    <button class=\"btn app-btn-outline-primary\">Add Student</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"app-of-general-info-section px-3 py-4\">\r\n\r\n  <!--General Fields-->\r\n  <div class=\"row no-gutters\">\r\n\r\n    <div class=\"col-3 px-2\">\r\n      <div class=\"form-group app-input-container app-input-fill\">\r\n        <label for=\"firstName\" class=\"app-input-label\">First Name</label>\r\n        <input type=\"text\"\r\n               class=\"app-input form-control\"\r\n               id=\"firstName\"\r\n               placeholder=\"First Name\"\r\n               value=\"Charlotte\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3 px-2\">\r\n      <div class=\"form-group app-input-container app-input-fill\">\r\n        <label for=\"lastName\" class=\"app-input-label\">Last Name</label>\r\n        <input type=\"text\"\r\n               class=\"app-input form-control\"\r\n               id=\"lastName\"\r\n               placeholder=\"Last Name\"\r\n               value=\"Jennings\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3 px-2\">\r\n      <div class=\"form-group app-input-container app-input-fill\">\r\n        <label class=\"app-input-label\" for=\"grade\">Grade</label>\r\n        <select class=\"app-input\"\r\n                id=\"grade\">\r\n          <option [value]=\"'Grade 1'\"\r\n                  [selected]=\"true\">\r\n            {{'Grade 1'}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3 px-2\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-8\">\r\n          <div class=\"form-group app-input-container app-input-fill mb-0\">\r\n            <label for=\"photo\" class=\"app-input-label\">Photo (optional)</label>\r\n            <input type=\"text\"\r\n                   class=\"app-input form-control\"\r\n                   id=\"photo\"\r\n                   placeholder=\"Photo (optional)\"\r\n                   value=\"Photo123871.jpg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4 d-flex align-items-center\">\r\n          <button class=\"btn app-btn-primary h-100\">Upload</button>\r\n          <i class=\"fas fa-trash ml-2 app-text-second\"></i>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <!--End General Fields-->\r\n\r\n  <!--MEDICAL INFO-->\r\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">MEDICAL INFORMATION</p>\r\n\r\n  <!--END MEDICAL INFO-->\r\n\r\n  <!--DOCTORS’S INFO-->\r\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">DOCTORS’S INFORMATION</p>\r\n\r\n  <!--End DOCTORS’S INFO-->\r\n\r\n\r\n  <!--DOCTOR’S ADDRESS-->\r\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">DOCTOR’S ADDRESS</p>\r\n\r\n  <!--END DOCTOR’S ADDRESS-->\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: GeneralInfoStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoStudentsComponent", function() { return GeneralInfoStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeneralInfoStudentsComponent = /** @class */ (function () {
    function GeneralInfoStudentsComponent() {
    }
    GeneralInfoStudentsComponent.prototype.ngOnInit = function () {
    };
    GeneralInfoStudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-info-students',
            template: __webpack_require__(/*! ./general-info-students.component.html */ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.html"),
            styles: [__webpack_require__(/*! ./general-info-students.component.css */ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoStudentsComponent);
    return GeneralInfoStudentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/online-form-general-info.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/online-form-general-info.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\r\n  General Information\r\n</p>\r\n\r\n<div class=\"app-of-wrap\">\r\n\r\n  <div class=\"row no-gutters align-items-center\">\r\n    <div class=\"col-12 app-of-nav-wrap\">\r\n      <app-general-info-nav (activeSectionEmitter)=\"onActiveSection($event)\"></app-general-info-nav>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row no-gutters p-4\">\r\n    <div class=\"col-12\">\r\n      <app-general-info-students *ngIf=\"activeSection === generalSectionsNames.studentsInfo\">\r\n      </app-general-info-students>\r\n      <!-- <app-general-info-parents *ngIf=\"activeSection === generalSectionsNames.parentsInfo\"\r\n                                [form]=\"form\">\r\n      </app-general-info-parents> -->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/online-form-general-info.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/online-form-general-info.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWdlbmVyYWwtaW5mby9vbmxpbmUtZm9ybS1nZW5lcmFsLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-general-info/online-form-general-info.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-general-info/online-form-general-info.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: OnlineFormGeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormGeneralInfoComponent", function() { return OnlineFormGeneralInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/general-info-section-name.model */ "./src/app/modules/data-collection/online-form/model/general-info-section-name.model.ts");



var OnlineFormGeneralInfoComponent = /** @class */ (function () {
    function OnlineFormGeneralInfoComponent() {
        this.generalSectionsNames = _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__["generalSectionsNames"];
    }
    OnlineFormGeneralInfoComponent.prototype.ngOnInit = function () { };
    OnlineFormGeneralInfoComponent.prototype.onActiveSection = function (sectionName) {
        this.activeSection = sectionName;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormGeneralInfoComponent.prototype, "form", void 0);
    OnlineFormGeneralInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-online-form-general-info",
            template: __webpack_require__(/*! ./online-form-general-info.component.html */ "./src/app/modules/data-collection/online-form/online-form-general-info/online-form-general-info.component.html"),
            styles: [__webpack_require__(/*! ./online-form-general-info.component.scss */ "./src/app/modules/data-collection/online-form/online-form-general-info/online-form-general-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormGeneralInfoComponent);
    return OnlineFormGeneralInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-menu/online-form-menu.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-menu/online-form-menu.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-of-menu-wrap\">\r\n  <ul class=\"list-group bg-white\">\r\n    <ng-container *ngFor=\"let item of menuItems\">\r\n      <li\r\n        class=\"list-group-item app-cursor-pointer\"\r\n        [ngClass]=\"activeMenuItem === item.name ? 'app-of-menu-active' : ''\"\r\n        *ngIf=\"isShowMenuItem(item.name)\"\r\n        (click)=\"setActiveMenuItem(item.name)\"\r\n      >\r\n        <div class=\"row no-gutters align-items-center py-1\">\r\n          <div class=\"col-auto mr-2\">\r\n            <i\r\n              class=\"fas fa-file-alt fa-lg app-of-menu-i\"\r\n              [ngClass]=\"\r\n                activeMenuItem === item.name\r\n                  ? 'app-text-primary'\r\n                  : 'app-text-second'\r\n              \"\r\n            ></i>\r\n          </div>\r\n          <div class=\"col\">\r\n            <p\r\n              class=\"mb-0 app-text-extra-bold app-text-large\"\r\n              [ngClass]=\"\r\n                activeMenuItem === item.name\r\n                  ? 'app-text-primary'\r\n                  : 'app-text-second'\r\n              \"\r\n            >\r\n              {{ item.title }}\r\n            </p>\r\n            <p class=\"mb-0 app-text-second app-text-small\">\r\n              <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n              ~{{ item.time }} minutes\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ng-container>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-menu/online-form-menu.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-menu/online-form-menu.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\r\n *  suffixes:\r\n *      -only - for strict range pixels\r\n *      -between - for range devices\r\n *      -up - for device and above\r\n */\n.content_section__page_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  text-align: center; }\n.content_section__main {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 1.5rem; }\n.content_section__article_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 0; }\n.content_section__article {\n  border: 0.1rem #ccc solid;\n  border-radius: 0.4rem;\n  display: flex;\n  font-size: 1rem;\n  justify-content: center;\n  height: auto;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  max-width: 615px;\n  min-width: 20rem;\n  padding: 1rem;\n  width: auto; }\n.content_section__article_text {\n  text-align: justify; }\n.content_section__additional_fields {\n  width: 100%; }\n.content_section__controls_container {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 1.5rem; }\n.content_section__button {\n  padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem; }\n.content_section__inputs_container--p0 {\n    padding: 0rem; }\n.content_section__textarea {\n  background-color: #fefefe;\n  margin: 1rem;\n  max-width: 30rem;\n  min-width: 20rem;\n  padding: 0.2rem; }\n.content_section__textarea:disabled {\n    background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center; }\n.content_section__checkbox_container--p0 {\n    padding: 0rem; }\n.content_section__checkbox {\n  opacity: 0;\n  position: absolute; }\n.content_section__checkbox:disabled {\n    background-color: #fefefe; }\n.content_section__checkbox_label {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin: 0;\n  outline: 0 transparent solid;\n  padding: 1rem;\n  position: relative; }\n.content_section__checkbox_label:hover {\n    cursor: pointer; }\n.content_section__checkbox_checkmark {\n  background-color: #fefefe;\n  position: relative;\n  margin-right: 1rem; }\n.content_section__checkbox_checkmark:hover {\n    cursor: pointer; }\n.app-of-menu-wrap {\n  background-color: #ffffff;\n  border: 1px solid #e7e9ef;\n  border-radius: 3px; }\n.app-of-menu-i {\n  display: inline-block;\n  border-radius: 50%;\n  padding: 0.6em 0.7em;\n  background-color: #e4e7ff; }\n.app-of-menu-active {\n  border-left: 3px solid #4350a2; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tbWVudS9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxvcmdhbml6YXRpb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tbWVudS9vbmxpbmUtZm9ybS1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1tZW51L0M6XFxyZWRcXGZlL3NyY1xcYXBwXFxtb2R1bGVzXFxkYXRhLWNvbGxlY3Rpb25cXG9ubGluZS1mb3JtXFxzaGFyZWRcXHN0eWxlc1xcaW5kZXguc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tbWVudS9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tbWVudS9DOlxccmVkXFxmZS9zcmNcXGFwcFxcbW9kdWxlc1xcZGF0YS1jb2xsZWN0aW9uXFxvbmxpbmUtZm9ybVxcb25saW5lLWZvcm0tbWVudVxcb25saW5lLWZvcm0tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7Ozs7RUNBRTtBQ0ZBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFHZjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVyxFQUFBO0FBR2I7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTtBQUViO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UseUJDakQ0QjtFRGtENUIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBTGhCO0lBUUcseUJDeEQwQixFQUFBO0FEZ0Q3QjtJQVlHLG9CQUFvQixFQUFBO0FBWnZCO0lBWUcsb0JBQW9CLEVBQUE7QUFadkI7SUFZRyxvQkFBb0IsRUFBQTtBQUl4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBO0FBRXZCO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQixFQUFBO0FBRm5CO0lBS0cseUJDaEYwQixFQUFBO0FEb0Y5QjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBUG5CO0lBVUcsZUFBZSxFQUFBO0FBSW5CO0VBQ0UseUJDbkc0QjtFRG9HNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBSG5CO0lBTUcsZUFBZSxFQUFBO0FFaElyQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix5QkFBeUIsRUFBQTtBQUczQjtFQUNFLDhCRGhCMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLW1lbnUvb25saW5lLWZvcm0tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XHJcblxyXG4kbWFpbi1tZW51LXdpZHRoOiA1NXB4O1xyXG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xyXG5cclxuLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXHJcbiAqICBzdWZmaXhlczpcclxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXHJcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xyXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXHJcbiAqL1xyXG5cclxuLy8gIEV4YW1wbGU6IFxyXG4vLyAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHsgXHJcbi8vICAgICAgICAgIC4uLlxyXG4vLyAgICAgIH1cclxuICIsIi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xyXG4gKiAgc3VmZml4ZXM6XHJcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xyXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcclxuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxyXG4gKi9cbi5jb250ZW50X3NlY3Rpb25fX3BhZ2VfdGl0bGUge1xuICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fbWFpbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMS41cmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUge1xuICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2FydGljbGUge1xuICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWF4LXdpZHRoOiA2MTVweDtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IGF1dG87IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxuXG4uY29udGVudF9zZWN0aW9uX19hZGRpdGlvbmFsX2ZpZWxkcyB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NvbnRyb2xzX2NvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEuNXJlbTsgfVxuXG4uY29udGVudF9zZWN0aW9uX19idXR0b24ge1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2lucHV0c19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2lucHV0c19jb250YWluZXItLXAwIHtcbiAgICBwYWRkaW5nOiAwcmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiAxcmVtO1xuICBtYXgtd2lkdGg6IDMwcmVtO1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAwLjJyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWE6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgfVxuXG4uY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyLS1wMCB7XG4gICAgcGFkZGluZzogMHJlbTsgfVxuXG4uY29udGVudF9zZWN0aW9uX19jaGVja2JveCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveDpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuXG4uY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyazpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5hcHAtb2YtbWVudS13cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTllZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG5cbi5hcHAtb2YtbWVudS1pIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDAuNmVtIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmOyB9XG5cbi5hcHAtb2YtbWVudS1hY3RpdmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM0MzUwYTI7IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2luZGV4LnNjc3NcIjtcclxuXHJcbi5jb250ZW50X3NlY3Rpb24ge1xyXG4gICZfX3BhZ2VfdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX21haW4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYXJ0aWNsZV90aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gICZfX2FydGljbGUge1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA2MTVweDtcclxuICAgIG1pbi13aWR0aDogMjByZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19hcnRpY2xlX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcblxyXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udHJvbHNfY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX2lucHV0c19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgJi0tcDAge1xyXG4gICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NoZWNrYm94X2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJi0tcDAge1xyXG4gICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY2hlY2tib3gge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jaGVja2JveF9sYWJlbCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NoZWNrYm94X2NoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xyXG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XHJcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XHJcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xyXG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XHJcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xyXG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XHJcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcclxuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcclxuXHJcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XHJcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcclxuXHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xyXG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xyXG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcclxuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuXHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XHJcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xyXG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xyXG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XHJcblxyXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XHJcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcclxuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcclxuXHJcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XHJcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xyXG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xyXG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XHJcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcclxuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcclxuXHJcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiLCJAaW1wb3J0IFwiLi4vc2hhcmVkL3N0eWxlcy9pbmRleC5zY3NzXCI7XHJcblxyXG4uYXBwLW9mLW1lbnUtd3JhcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlOWVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmFwcC1vZi1tZW51LWkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogMC42ZW0gMC43ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdmZjtcclxufVxyXG5cclxuLmFwcC1vZi1tZW51LWFjdGl2ZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkZWxlbWVudC1iYXNlLWNvbG9yO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-menu/online-form-menu.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-menu/online-form-menu.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: OnlineFormMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormMenuComponent", function() { return OnlineFormMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/main-menu-name.model */ "./src/app/modules/data-collection/online-form/model/main-menu-name.model.ts");



var OnlineFormMenuComponent = /** @class */ (function () {
    function OnlineFormMenuComponent() {
        this.activeMenuItemEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeMenuItem = _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].generalInfo;
        this.menuItems = [
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].generalInfo, title: "General Information", time: 48 },
            // {name: mainMenuNames.documentsForms, title: 'Documents & Forms', time: 15},
            // {name: mainMenuNames.consentInfo, title: 'Consent', time: 12},
            // {name: mainMenuNames.paymentSettings, title: 'Payment Settings', time: 10},
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].tuitionContract, title: "Tuition Contract", time: 6 },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].termsConditions, title: 'Term & Conditions', time: 14 },
        ];
    }
    OnlineFormMenuComponent.prototype.ngOnInit = function () {
        this.activeMenuItemEmitter.emit(this.activeMenuItem);
    };
    OnlineFormMenuComponent.prototype.setActiveMenuItem = function (menuItemName) {
        this.activeMenuItem = menuItemName;
        this.activeMenuItemEmitter.emit(this.activeMenuItem);
    };
    OnlineFormMenuComponent.prototype.isShowMenuItem = function (itemMenuName) {
        switch (itemMenuName) {
            case _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].consentInfo:
                return this.checkItemIsActive(_model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].consentInfo);
            case _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].termsConditions:
                return this.checkItemIsActive(_model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].termsConditions);
            case _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].tuitionContract:
                return this.checkItemIsActive(_model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].tuitionContract);
            default:
                return true;
        }
    };
    OnlineFormMenuComponent.prototype.checkItemIsActive = function (itemMenuName) {
        if (this.form && this.form[itemMenuName]) {
            return this.form[itemMenuName].isActive;
        }
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormMenuComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormMenuComponent.prototype, "activeMenuItemEmitter", void 0);
    OnlineFormMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-online-form-menu",
            template: __webpack_require__(/*! ./online-form-menu.component.html */ "./src/app/modules/data-collection/online-form/online-form-menu/online-form-menu.component.html"),
            styles: [__webpack_require__(/*! ./online-form-menu.component.scss */ "./src/app/modules/data-collection/online-form/online-form-menu/online-form-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormMenuComponent);
    return OnlineFormMenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-nav/online-form-nav.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-nav/online-form-nav.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row no-gutters py-2 align-items-center\">\r\n  <div class=\"col app-text-second app-text-uppercase\">{{formName}}</div>\r\n  <div class=\"col text-right\">\r\n    <button class=\"btn app-btn-outline-primary app-text-uppercase px-5 mr-3\" (click)=\"onAction('cancel')\">Back</button>\r\n    <button class=\"btn app-btn-primary app-text-uppercase px-5\" (click)=\"onAction('save')\">Save Form</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-nav/online-form-nav.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-nav/online-form-nav.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLW5hdi9vbmxpbmUtZm9ybS1uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-nav/online-form-nav.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-nav/online-form-nav.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: OnlineFormNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormNavComponent", function() { return OnlineFormNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlineFormNavComponent = /** @class */ (function () {
    function OnlineFormNavComponent() {
        this.actionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OnlineFormNavComponent.prototype.ngOnInit = function () {
    };
    OnlineFormNavComponent.prototype.onAction = function (type) {
        this.actionEmitter.emit(type);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OnlineFormNavComponent.prototype, "formName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormNavComponent.prototype, "actionEmitter", void 0);
    OnlineFormNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-nav',
            template: __webpack_require__(/*! ./online-form-nav.component.html */ "./src/app/modules/data-collection/online-form/online-form-nav/online-form-nav.component.html"),
            styles: [__webpack_require__(/*! ./online-form-nav.component.scss */ "./src/app/modules/data-collection/online-form/online-form-nav/online-form-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormNavComponent);
    return OnlineFormNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: routes, OnlineFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormRoutingModule", function() { return OnlineFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-form-view/online-form-view.component */ "./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.ts");




var routes = [
    {
        path: '',
        component: _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_3__["OnlineFormViewComponent"],
        children: [
            {
                path: '',
                component: _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_3__["OnlineFormViewComponent"],
            },
        ],
    }
];
var OnlineFormRoutingModule = /** @class */ (function () {
    function OnlineFormRoutingModule() {
    }
    OnlineFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OnlineFormRoutingModule);
    return OnlineFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content_section__page_title\">\r\n  Term & Conditions\r\n</h1>\r\n\r\n<div class=\"app-of-wrap content_section__main\">\r\n  <!--Title-->\r\n  <ng-container *ngIf=\"form.termsConditions?.termsConditionsItems?.length\">\r\n    <ng-container\r\n      *ngFor=\"\r\n        let item of form.termsConditions.termsConditionsItems;\r\n        let indexItem = index\r\n      \"\r\n    >\r\n      <!--Title-->\r\n      <h2 class=\"content_section__article_title\">\r\n        {{ item.title | uppercase }}\r\n      </h2>\r\n\r\n      <!--Text-->\r\n      <article class=\"content_section__article\">\r\n        <div\r\n          class=\"content_section__article_text\"\r\n          [innerHTML]=\"item.text\"\r\n        ></div>\r\n      </article>\r\n\r\n      <!--Checkbox-->\r\n\r\n      <div\r\n        *ngIf=\"item.checkbox.isActive\"\r\n        class=\"content_section__additional_fields\"\r\n      >\r\n        <div class=\"content_section__inputs_container content_section__inputs_container--p0\">\r\n          <div class=\"content_section__checkbox_container content_section__checkbox_container--p0\">\r\n            <input\r\n              class=\"content_section__checkbox\"\r\n              type=\"checkbox\"\r\n              id=\"item.checkbox.id\"\r\n              [(ngModel)]=\"item.checkbox.checked\"\r\n              [disabled]=\"true\"\r\n            />\r\n\r\n            <label\r\n              tabindex=\"indexItem\"\r\n              for=\"item.id\"\r\n              class=\"content_section__checkbox_label\"\r\n            >\r\n              <span\r\n                class=\"app-checkbox-checkmark\r\n                  content_section__checkbox_checkmark\"\r\n              ></span>\r\n              {{ item.checkbox.text }}\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <app-online-form-signatures\r\n      [signature]=\"signature\"\r\n    ></app-online-form-signatures>\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\r\n *  suffixes:\r\n *      -only - for strict range pixels\r\n *      -between - for range devices\r\n *      -up - for device and above\r\n */\n.content_section__page_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  text-align: center; }\n.content_section__main {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 1.5rem; }\n.content_section__article_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 0; }\n.content_section__article {\n  border: 0.1rem #ccc solid;\n  border-radius: 0.4rem;\n  display: flex;\n  font-size: 1rem;\n  justify-content: center;\n  height: auto;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  max-width: 615px;\n  min-width: 20rem;\n  padding: 1rem;\n  width: auto; }\n.content_section__article_text {\n  text-align: justify; }\n.content_section__additional_fields {\n  width: 100%; }\n.content_section__controls_container {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 1.5rem; }\n.content_section__button {\n  padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem; }\n.content_section__inputs_container--p0 {\n    padding: 0rem; }\n.content_section__textarea {\n  background-color: #fefefe;\n  margin: 1rem;\n  max-width: 30rem;\n  min-width: 20rem;\n  padding: 0.2rem; }\n.content_section__textarea:disabled {\n    background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center; }\n.content_section__checkbox_container--p0 {\n    padding: 0rem; }\n.content_section__checkbox {\n  opacity: 0;\n  position: absolute; }\n.content_section__checkbox:disabled {\n    background-color: #fefefe; }\n.content_section__checkbox_label {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin: 0;\n  outline: 0 transparent solid;\n  padding: 1rem;\n  position: relative; }\n.content_section__checkbox_label:hover {\n    cursor: pointer; }\n.content_section__checkbox_checkmark {\n  background-color: #fefefe;\n  position: relative;\n  margin-right: 1rem; }\n.content_section__checkbox_checkmark:hover {\n    cursor: pointer; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdGVybXMtY29uZGl0aW9ucy9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxvcmdhbml6YXRpb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdGVybXMtY29uZGl0aW9ucy9vbmxpbmUtZm9ybS10ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS10ZXJtcy1jb25kaXRpb25zL0M6XFxyZWRcXGZlL3NyY1xcYXBwXFxtb2R1bGVzXFxkYXRhLWNvbGxlY3Rpb25cXG9ubGluZS1mb3JtXFxzaGFyZWRcXHN0eWxlc1xcaW5kZXguc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdGVybXMtY29uZGl0aW9ucy9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7Ozs7RUNBRTtBQ0ZBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFHZjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVyxFQUFBO0FBR2I7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTtBQUViO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UseUJDakQ0QjtFRGtENUIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBTGhCO0lBUUcseUJDeEQwQixFQUFBO0FEZ0Q3QjtJQVlHLG9CQUFvQixFQUFBO0FBWnZCO0lBWUcsb0JBQW9CLEVBQUE7QUFadkI7SUFZRyxvQkFBb0IsRUFBQTtBQUl4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBO0FBRXZCO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQixFQUFBO0FBRm5CO0lBS0cseUJDaEYwQixFQUFBO0FEb0Y5QjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBUG5CO0lBVUcsZUFBZSxFQUFBO0FBSW5CO0VBQ0UseUJDbkc0QjtFRG9HNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBSG5CO0lBTUcsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdGVybXMtY29uZGl0aW9ucy9vbmxpbmUtZm9ybS10ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9icy9pbmRleC5zY3NzJztcclxuXHJcbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XHJcbiR0b3AtbWVudS1oZWlnaHQ6IDQwcHg7XHJcblxyXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcclxuICogIHN1ZmZpeGVzOlxyXG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcclxuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXHJcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcclxuICovXHJcblxyXG4vLyAgRXhhbXBsZTogXHJcbi8vICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykgeyBcclxuLy8gICAgICAgICAgLi4uXHJcbi8vICAgICAgfVxyXG4gIiwiLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXHJcbiAqICBzdWZmaXhlczpcclxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXHJcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xyXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXHJcbiAqL1xuLmNvbnRlbnRfc2VjdGlvbl9fcGFnZV90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxLjVyZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZSB7XG4gIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXgtd2lkdGg6IDYxNXB4O1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogYXV0bzsgfVxuXG4uY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMS41cmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lci0tcDAge1xuICAgIHBhZGRpbmc6IDByZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IDFyZW07XG4gIG1heC13aWR0aDogMzByZW07XG4gIG1pbi13aWR0aDogMjByZW07XG4gIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jb250YWluZXItLXAwIHtcbiAgICBwYWRkaW5nOiAwcmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94OmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2luZGV4LnNjc3NcIjtcclxuXHJcbi5jb250ZW50X3NlY3Rpb24ge1xyXG4gICZfX3BhZ2VfdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX21haW4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYXJ0aWNsZV90aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gICZfX2FydGljbGUge1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA2MTVweDtcclxuICAgIG1pbi13aWR0aDogMjByZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19hcnRpY2xlX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcblxyXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udHJvbHNfY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX2lucHV0c19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgJi0tcDAge1xyXG4gICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NoZWNrYm94X2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJi0tcDAge1xyXG4gICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY2hlY2tib3gge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jaGVja2JveF9sYWJlbCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NoZWNrYm94X2NoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xyXG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XHJcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XHJcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xyXG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XHJcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xyXG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XHJcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcclxuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcclxuXHJcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XHJcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcclxuXHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xyXG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xyXG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcclxuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuXHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XHJcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xyXG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xyXG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XHJcblxyXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XHJcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcclxuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcclxuXHJcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XHJcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xyXG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xyXG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XHJcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcclxuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcclxuXHJcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: OnlineFormTermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormTermsConditionsComponent", function() { return OnlineFormTermsConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/data-collection/online-form/services/signatures/system-signature.service.ts");





var OnlineFormTermsConditionsComponent = /** @class */ (function () {
    function OnlineFormTermsConditionsComponent(systemSignatureService) {
        this.systemSignatureService = systemSignatureService;
        this.SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_3__["SIGNATURE_TYPES"];
        this.E_SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_3__["E_SIGNATURE_TYPES"];
    }
    OnlineFormTermsConditionsComponent.prototype.ngOnInit = function () {
        this.signature = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.form.termsConditions.signature);
    };
    OnlineFormTermsConditionsComponent.prototype.onSystemSign = function () {
        var _this = this;
        Object.keys(this.signature.signed).map(function (item) {
            if (_this.signature.signed[item])
                _this.saveSystemSign(item, 'termsConditions');
        });
    };
    OnlineFormTermsConditionsComponent.prototype.saveSystemSign = function (personsType, itemType) {
        var _this = this;
        this.systemSignatureService.sign(this.form._id, this.form.personId, itemType)
            .subscribe(function (res) {
            _this.form.termsConditions.signature.signed[personsType] = res.created;
        });
    };
    OnlineFormTermsConditionsComponent.prototype.isDisabledSign = function (personsType) {
        return this.form.termsConditions.signature.signed[personsType];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormTermsConditionsComponent.prototype, "form", void 0);
    OnlineFormTermsConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-terms-conditions',
            template: __webpack_require__(/*! ./online-form-terms-conditions.component.html */ "./src/app/modules/data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./online-form-terms-conditions.component.scss */ "./src/app/modules/data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormTermsConditionsComponent);
    return OnlineFormTermsConditionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content_section__page_title\">\r\n  Tuition Contract\r\n</h1>\r\n<div class=\"app-of-wrap content_section__main\">\r\n  <!--Title-->\r\n  <h2 class=\"content_section__article_title\">\r\n    FEES CONTRACT\r\n  </h2>\r\n\r\n  <!--Table-->\r\n  <article\r\n    class=\"app-fb-tuition-table content_section__article\"\r\n    *ngIf=\"\r\n      form.tuitionContract.splitBy === TUITION_CONTRACT_SPLIT_TYPES.STUDENT\r\n    \"\r\n  >\r\n    <app-tuition-contract-by-student\r\n      [tuitionContract]=\"form.tuitionContract\"\r\n    ></app-tuition-contract-by-student>\r\n  </article>\r\n  <article\r\n    class=\"content_section__article\"\r\n    *ngIf=\"form.tuitionContract.splitBy === TUITION_CONTRACT_SPLIT_TYPES.FEE\"\r\n  >\r\n    <div>\r\n      <app-tuition-contract-by-fee\r\n        [tuitionContract]=\"form.tuitionContract\"\r\n      ></app-tuition-contract-by-fee>\r\n    </div>\r\n  </article>\r\n\r\n  <!--Text-->\r\n  <h2 class=\"content_section__article_title\">CONTRACT TEXT:</h2>\r\n  <article class=\"content_section__article\">\r\n    <div\r\n      class=\"content_section__article_text\"\r\n      [innerHTML]=\"form.tuitionContract.text\"\r\n    ></div>\r\n  </article>\r\n\r\n  <app-online-form-signatures\r\n    [signature]=\"signature\"\r\n  ></app-online-form-signatures>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\r\n *  suffixes:\r\n *      -only - for strict range pixels\r\n *      -between - for range devices\r\n *      -up - for device and above\r\n */\n.content_section__page_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  text-align: center; }\n.content_section__main {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 1.5rem; }\n.content_section__article_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 0; }\n.content_section__article {\n  border: 0.1rem #ccc solid;\n  border-radius: 0.4rem;\n  display: flex;\n  font-size: 1rem;\n  justify-content: center;\n  height: auto;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  max-width: 615px;\n  min-width: 20rem;\n  padding: 1rem;\n  width: auto; }\n.content_section__article_text {\n  text-align: justify; }\n.content_section__additional_fields {\n  width: 100%; }\n.content_section__controls_container {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 1.5rem; }\n.content_section__button {\n  padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem; }\n.content_section__inputs_container--p0 {\n    padding: 0rem; }\n.content_section__textarea {\n  background-color: #fefefe;\n  margin: 1rem;\n  max-width: 30rem;\n  min-width: 20rem;\n  padding: 0.2rem; }\n.content_section__textarea:disabled {\n    background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center; }\n.content_section__checkbox_container--p0 {\n    padding: 0rem; }\n.content_section__checkbox {\n  opacity: 0;\n  position: absolute; }\n.content_section__checkbox:disabled {\n    background-color: #fefefe; }\n.content_section__checkbox_label {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin: 0;\n  outline: 0 transparent solid;\n  padding: 1rem;\n  position: relative; }\n.content_section__checkbox_label:hover {\n    cursor: pointer; }\n.content_section__checkbox_checkmark {\n  background-color: #fefefe;\n  position: relative;\n  margin-right: 1rem; }\n.content_section__checkbox_checkmark:hover {\n    cursor: pointer; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdHVpdGlvbi1jb250cmFjdC9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxvcmdhbml6YXRpb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdHVpdGlvbi1jb250cmFjdC9vbmxpbmUtZm9ybS10dWl0aW9uLWNvbnRyYWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS10dWl0aW9uLWNvbnRyYWN0L0M6XFxyZWRcXGZlL3NyY1xcYXBwXFxtb2R1bGVzXFxkYXRhLWNvbGxlY3Rpb25cXG9ubGluZS1mb3JtXFxzaGFyZWRcXHN0eWxlc1xcaW5kZXguc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdHVpdGlvbi1jb250cmFjdC9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7Ozs7RUNBRTtBQ0ZBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFHZjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVyxFQUFBO0FBR2I7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTtBQUViO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UseUJDakQ0QjtFRGtENUIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBTGhCO0lBUUcseUJDeEQwQixFQUFBO0FEZ0Q3QjtJQVlHLG9CQUFvQixFQUFBO0FBWnZCO0lBWUcsb0JBQW9CLEVBQUE7QUFadkI7SUFZRyxvQkFBb0IsRUFBQTtBQUl4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBO0FBRXZCO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQixFQUFBO0FBRm5CO0lBS0cseUJDaEYwQixFQUFBO0FEb0Y5QjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBUG5CO0lBVUcsZUFBZSxFQUFBO0FBSW5CO0VBQ0UseUJDbkc0QjtFRG9HNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBSG5CO0lBTUcsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdHVpdGlvbi1jb250cmFjdC9vbmxpbmUtZm9ybS10dWl0aW9uLWNvbnRyYWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9icy9pbmRleC5zY3NzJztcclxuXHJcbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XHJcbiR0b3AtbWVudS1oZWlnaHQ6IDQwcHg7XHJcblxyXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcclxuICogIHN1ZmZpeGVzOlxyXG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcclxuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXHJcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcclxuICovXHJcblxyXG4vLyAgRXhhbXBsZTogXHJcbi8vICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykgeyBcclxuLy8gICAgICAgICAgLi4uXHJcbi8vICAgICAgfVxyXG4gIiwiLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXHJcbiAqICBzdWZmaXhlczpcclxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXHJcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xyXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXHJcbiAqL1xuLmNvbnRlbnRfc2VjdGlvbl9fcGFnZV90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxLjVyZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZSB7XG4gIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXgtd2lkdGg6IDYxNXB4O1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogYXV0bzsgfVxuXG4uY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMS41cmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lci0tcDAge1xuICAgIHBhZGRpbmc6IDByZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IDFyZW07XG4gIG1heC13aWR0aDogMzByZW07XG4gIG1pbi13aWR0aDogMjByZW07XG4gIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jb250YWluZXItLXAwIHtcbiAgICBwYWRkaW5nOiAwcmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94OmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2luZGV4LnNjc3NcIjtcclxuXHJcbi5jb250ZW50X3NlY3Rpb24ge1xyXG4gICZfX3BhZ2VfdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX21haW4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYXJ0aWNsZV90aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gICZfX2FydGljbGUge1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA2MTVweDtcclxuICAgIG1pbi13aWR0aDogMjByZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19hcnRpY2xlX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcblxyXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udHJvbHNfY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX2lucHV0c19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgJi0tcDAge1xyXG4gICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NoZWNrYm94X2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJi0tcDAge1xyXG4gICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY2hlY2tib3gge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jaGVja2JveF9sYWJlbCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NoZWNrYm94X2NoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xyXG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XHJcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XHJcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xyXG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XHJcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xyXG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XHJcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcclxuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcclxuXHJcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XHJcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcclxuXHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xyXG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xyXG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcclxuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuXHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XHJcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xyXG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xyXG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XHJcblxyXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XHJcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcclxuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcclxuXHJcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XHJcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xyXG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xyXG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XHJcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcclxuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcclxuXHJcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: OnlineFormTuitionContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormTuitionContractComponent", function() { return OnlineFormTuitionContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/data-collection/online-form/services/signatures/system-signature.service.ts");





var OnlineFormTuitionContractComponent = /** @class */ (function () {
    function OnlineFormTuitionContractComponent(systemSignatureService) {
        this.systemSignatureService = systemSignatureService;
        this.TUITION_CONTRACT_SPLIT_TYPES = _enums__WEBPACK_IMPORTED_MODULE_3__["TUITION_CONTRACT_SPLIT_TYPES"];
        this.SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_3__["SIGNATURE_TYPES"];
        this.E_SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_3__["E_SIGNATURE_TYPES"];
    }
    OnlineFormTuitionContractComponent.prototype.ngOnInit = function () {
        this.signature = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.form.tuitionContract.signature);
    };
    OnlineFormTuitionContractComponent.prototype.onSystemSign = function () {
    };
    OnlineFormTuitionContractComponent.prototype.saveSystemSign = function () {
    };
    OnlineFormTuitionContractComponent.prototype.isDisabledSign = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormTuitionContractComponent.prototype, "form", void 0);
    OnlineFormTuitionContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-tuition-contract',
            template: __webpack_require__(/*! ./online-form-tuition-contract.component.html */ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.html"),
            styles: [__webpack_require__(/*! ./online-form-tuition-contract.component.scss */ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormTuitionContractComponent);
    return OnlineFormTuitionContractComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <thead>\r\n    <tr class=\"app-tuition-table-header\">\r\n      <th scope=\"col\">FEES</th>\r\n      <th scope=\"col\">FEE AMOUNT</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <ng-container *ngFor=\"let item of tuitionContract.fees; let i = index\">\r\n      <tr *ngIf=\"item.isActive\">\r\n        <td class=\"font-weight-bold\">{{ item.name }}</td>\r\n        <td>${{ tempFees[i] || tempFees[0] }}</td>\r\n      </tr>\r\n    </ng-container>\r\n    <tr class=\"app-tuition-table-total font-weight-bold\">\r\n      <td>BUILDING FEE</td>\r\n      <td>$1000</td>\r\n    </tr>\r\n    <tr class=\"app-tuition-table-total font-weight-bold\">\r\n      <td>SECURITY FEE</td>\r\n      <td>$520</td>\r\n    </tr>\r\n    <tr class=\"app-tuition-table-total font-weight-bold\">\r\n      <td>Tuition and Family Fees Total</td>\r\n      <td>$21160</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLXR1aXRpb24tY29udHJhY3QvdHVpdGlvbi1jb250cmFjdC1ieS1mZWUvdHVpdGlvbi1jb250cmFjdC1ieS1mZWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: TuitionContractByFeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuitionContractByFeeComponent", function() { return TuitionContractByFeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TuitionContractByFeeComponent = /** @class */ (function () {
    function TuitionContractByFeeComponent() {
        this.tempFees = [1600, 1080, 1080, 9840, 3200, 3200];
    }
    TuitionContractByFeeComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TuitionContractByFeeComponent.prototype, "tuitionContract", void 0);
    TuitionContractByFeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tuition-contract-by-fee',
            template: __webpack_require__(/*! ./tuition-contract-by-fee.component.html */ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.html"),
            styles: [__webpack_require__(/*! ./tuition-contract-by-fee.component.scss */ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TuitionContractByFeeComponent);
    return TuitionContractByFeeComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <thead>\r\n    <tr class=\"app-tuition-table-header\">\r\n      <th></th>\r\n      <th scope=\"col\">\r\n        CHARLOTTE SIMON\r\n        <br /><span class=\"font-weight-normal\">1st grade</span>\r\n      </th>\r\n      <th scope=\"col\">\r\n        LUELLA SIMON\r\n        <br /><span class=\"font-weight-normal\">1st grade</span>\r\n      </th>\r\n      <th scope=\"col\">\r\n        KEITH SIMON\r\n        <br /><span class=\"font-weight-normal\">1st grade</span>\r\n      </th>\r\n      <th scope=\"col\" class=\"app-th-align-reset\">FEE TOTAL</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <ng-container *ngFor=\"let item of tuitionContract.fees\">\r\n      <tr *ngIf=\"item.isActive\">\r\n        <td class=\"font-weight-bold\">{{ item.name }}</td>\r\n        <td>\r\n          $200<br />\r\n          <ng-container *ngIf=\"item.isActiveDiscount\">\r\n            <span class=\"app-tuition-discount\">$90 discount</span>\r\n          </ng-container>\r\n        </td>\r\n        <td>$200</td>\r\n        <td>$200</td>\r\n        <td>$600</td>\r\n      </tr>\r\n    </ng-container>\r\n    <tr class=\"app-tuition-table-total-2 font-weight-bold\">\r\n      <td>TOTAL PER STUDENTS</td>\r\n      <td>$1000</td>\r\n      <td>$1000</td>\r\n      <td>$1000</td>\r\n      <td>$3500</td>\r\n    </tr>\r\n    <tr class=\"app-tuition-table-total font-weight-bold\">\r\n      <td>BUILDING FEE</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td>$1000</td>\r\n    </tr>\r\n    <tr class=\"app-tuition-table-total font-weight-bold\">\r\n      <td>SECURITY FEE</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td>$4500</td>\r\n    </tr>\r\n    <tr class=\"app-tuition-table-total font-weight-bold\">\r\n      <td>Tuition and Family Fees Total</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td>$4500</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLXR1aXRpb24tY29udHJhY3QvdHVpdGlvbi1jb250cmFjdC1ieS1zdHVkZW50L3R1aXRpb24tY29udHJhY3QtYnktc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: TuitionContractByStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuitionContractByStudentComponent", function() { return TuitionContractByStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TuitionContractByStudentComponent = /** @class */ (function () {
    function TuitionContractByStudentComponent() {
    }
    TuitionContractByStudentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TuitionContractByStudentComponent.prototype, "tuitionContract", void 0);
    TuitionContractByStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tuition-contract-by-student',
            template: __webpack_require__(/*! ./tuition-contract-by-student.component.html */ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.html"),
            styles: [__webpack_require__(/*! ./tuition-contract-by-student.component.scss */ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TuitionContractByStudentComponent);
    return TuitionContractByStudentComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"form\">\r\n  <app-online-form-nav\r\n    [formName]=\"form?.name\"\r\n    (actionEmitter)=\"onAction($event)\"\r\n  ></app-online-form-nav>\r\n  <div\r\n    class=\"container-fluid app-of-background min-vh-100 online_form_container\"\r\n  >\r\n    <div class=\"online_form_container__nav\">\r\n      <app-online-form-menu\r\n        [form]=\"form\"\r\n        (activeMenuItemEmitter)=\"onActiveMenuItem($event)\"\r\n      ></app-online-form-menu>\r\n    </div>\r\n    <div class=\"online_form_container__content\">\r\n      <app-online-form-general-info\r\n        *ngIf=\"activeSection === mainMenuNames.generalInfo\"\r\n        [form]=\"form\"\r\n      >\r\n      </app-online-form-general-info>\r\n      <app-online-form-documents-forms\r\n        [form]=\"form\"\r\n        *ngIf=\"activeSection === mainMenuNames.documentsForms\"\r\n      ></app-online-form-documents-forms>\r\n      <app-online-form-consent\r\n        [form]=\"form\"\r\n        *ngIf=\"activeSection === mainMenuNames.consentInfo\"\r\n      ></app-online-form-consent>\r\n      <app-online-form-terms-conditions\r\n        [form]=\"form\"\r\n        *ngIf=\"activeSection === mainMenuNames.termsConditions\"\r\n      ></app-online-form-terms-conditions>\r\n      <app-online-form-tuition-contract\r\n        [form]=\"form\"\r\n        *ngIf=\"activeSection === mainMenuNames.tuitionContract\"\r\n      ></app-online-form-tuition-contract>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<div *ngIf=\"!form\" class=\"row min-vh-100 align-items-center\">\r\n  <div class=\"col-12 text-center\">\r\n    <div\r\n      class=\"spinner-border text-warning\"\r\n      style=\"width: 4rem; height: 4rem;\"\r\n      role=\"status\"\r\n    >\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\r\n *  suffixes:\r\n *      -only - for strict range pixels\r\n *      -between - for range devices\r\n *      -up - for device and above\r\n */\n.content_section__page_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  text-align: center; }\n.content_section__main {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 1.5rem; }\n.content_section__article_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 0; }\n.content_section__article {\n  border: 0.1rem #ccc solid;\n  border-radius: 0.4rem;\n  display: flex;\n  font-size: 1rem;\n  justify-content: center;\n  height: auto;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  max-width: 615px;\n  min-width: 20rem;\n  padding: 1rem;\n  width: auto; }\n.content_section__article_text {\n  text-align: justify; }\n.content_section__additional_fields {\n  width: 100%; }\n.content_section__controls_container {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 1.5rem; }\n.content_section__button {\n  padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem; }\n.content_section__inputs_container--p0 {\n    padding: 0rem; }\n.content_section__textarea {\n  background-color: #fefefe;\n  margin: 1rem;\n  max-width: 30rem;\n  min-width: 20rem;\n  padding: 0.2rem; }\n.content_section__textarea:disabled {\n    background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center; }\n.content_section__checkbox_container--p0 {\n    padding: 0rem; }\n.content_section__checkbox {\n  opacity: 0;\n  position: absolute; }\n.content_section__checkbox:disabled {\n    background-color: #fefefe; }\n.content_section__checkbox_label {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin: 0;\n  outline: 0 transparent solid;\n  padding: 1rem;\n  position: relative; }\n.content_section__checkbox_label:hover {\n    cursor: pointer; }\n.content_section__checkbox_checkmark {\n  background-color: #fefefe;\n  position: relative;\n  margin-right: 1rem; }\n.content_section__checkbox_checkmark:hover {\n    cursor: pointer; }\n.app-of-background {\n  background-color: #f3f2f3; }\n.online_form_container {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  min-height: auto;\n  padding: 1rem; }\n@media (min-width: 992px) {\n    .online_form_container {\n      flex-direction: row; } }\n.online_form_container__nav {\n    width: auto;\n    width: -webkit-fill-available; }\n@media (min-width: 992px) {\n      .online_form_container__nav {\n        padding-right: 1rem;\n        width: 27rem; } }\n.online_form_container__content {\n    width: auto;\n    width: -webkit-fill-available; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdmlldy9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxvcmdhbml6YXRpb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdmlldy9vbmxpbmUtZm9ybS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS12aWV3L0M6XFxyZWRcXGZlL3NyY1xcYXBwXFxtb2R1bGVzXFxkYXRhLWNvbGxlY3Rpb25cXG9ubGluZS1mb3JtXFxzaGFyZWRcXHN0eWxlc1xcaW5kZXguc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdmlldy9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdmlldy9DOlxccmVkXFxmZS9zcmNcXGFwcFxcbW9kdWxlc1xcZGF0YS1jb2xsZWN0aW9uXFxvbmxpbmUtZm9ybVxcb25saW5lLWZvcm0tdmlld1xcb25saW5lLWZvcm0tdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tdmlldy9DOlxccmVkXFxmZS9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7Ozs7RUNBRTtBQ0ZBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFHZjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVyxFQUFBO0FBR2I7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTtBQUViO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UseUJDakQ0QjtFRGtENUIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBTGhCO0lBUUcseUJDeEQwQixFQUFBO0FEZ0Q3QjtJQVlHLG9CQUFvQixFQUFBO0FBWnZCO0lBWUcsb0JBQW9CLEVBQUE7QUFadkI7SUFZRyxvQkFBb0IsRUFBQTtBQUl4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBO0FBRXZCO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQixFQUFBO0FBRm5CO0lBS0cseUJDaEYwQixFQUFBO0FEb0Y5QjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBUG5CO0lBVUcsZUFBZSxFQUFBO0FBSW5CO0VBQ0UseUJDbkc0QjtFRG9HNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBSG5CO0lBTUcsZUFBZSxFQUFBO0FFaElyQjtFQUNJLHlCRElzQixFQUFBO0FDRDFCO0VBQ0ksb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUNnRGI7SUR0REo7TUFTUSxtQkFBbUIsRUFBQSxFQWlCMUI7QUFkRztJQUNJLFdBQVc7SUFDWCw2QkFBNkIsRUFBQTtBQ3dDakM7TUQxQ0E7UUFLUSxtQkFBbUI7UUFDbkIsWUFBWSxFQUFBLEVBRW5CO0FBRUQ7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS12aWV3L29ubGluZS1mb3JtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2JzL2luZGV4LnNjc3MnO1xyXG5cclxuJG1haW4tbWVudS13aWR0aDogNTVweDtcclxuJHRvcC1tZW51LWhlaWdodDogNDBweDtcclxuXHJcbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xyXG4gKiAgc3VmZml4ZXM6XHJcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xyXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcclxuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxyXG4gKi9cclxuXHJcbi8vICBFeGFtcGxlOiBcclxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxyXG4vLyAgICAgICAgICAuLi5cclxuLy8gICAgICB9XHJcbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcclxuICogIHN1ZmZpeGVzOlxyXG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcclxuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXHJcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcclxuICovXG4uY29udGVudF9zZWN0aW9uX19wYWdlX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX21haW4ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEuNXJlbTsgfVxuXG4uY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMDsgfVxuXG4uY29udGVudF9zZWN0aW9uX19hcnRpY2xlIHtcbiAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1heC13aWR0aDogNjE1cHg7XG4gIG1pbi13aWR0aDogMjByZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiBhdXRvOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fYWRkaXRpb25hbF9maWVsZHMge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uY29udGVudF9zZWN0aW9uX19jb250cm9sc19jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxLjVyZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fYnV0dG9uIHtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTsgfVxuXG4uY29udGVudF9zZWN0aW9uX19pbnB1dHNfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19pbnB1dHNfY29udGFpbmVyLS1wMCB7XG4gICAgcGFkZGluZzogMHJlbTsgfVxuXG4uY29udGVudF9zZWN0aW9uX190ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogMXJlbTtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgcGFkZGluZzogMC4ycmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NvbnRhaW5lci0tcDAge1xuICAgIHBhZGRpbmc6IDByZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3gge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfbGFiZWwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfbGFiZWw6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcms6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uYXBwLW9mLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzOyB9XG5cbi5vbmxpbmVfZm9ybV9jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxcmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5vbmxpbmVfZm9ybV9jb250YWluZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfSB9XG4gIC5vbmxpbmVfZm9ybV9jb250YWluZXJfX25hdiB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIC5vbmxpbmVfZm9ybV9jb250YWluZXJfX25hdiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAyN3JlbTsgfSB9XG4gIC5vbmxpbmVfZm9ybV9jb250YWluZXJfX2NvbnRlbnQge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9pbmRleC5zY3NzXCI7XHJcblxyXG4uY29udGVudF9zZWN0aW9uIHtcclxuICAmX19wYWdlX3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19tYWluIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX2FydGljbGVfdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAmX19hcnRpY2xlIHtcclxuICAgIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1heC13aWR0aDogNjE1cHg7XHJcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fYXJ0aWNsZV90ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgfVxyXG5cclxuICAmX19hZGRpdGlvbmFsX2ZpZWxkcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICZfX2NvbnRyb2xzX2NvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmX19pbnB1dHNfY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAgICYtLXAwIHtcclxuICAgICAgcGFkZGluZzogMHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RleHRhcmVhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcclxuICAgIG1pbi13aWR0aDogMjByZW07XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jaGVja2JveF9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICYtLXAwIHtcclxuICAgICAgcGFkZGluZzogMHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NoZWNrYm94IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY2hlY2tib3hfbGFiZWwge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jaGVja2JveF9jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcclxuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xyXG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xyXG4kZWxlbWVudC1kYW5nZXItY29sb3I6IHJlZDtcclxuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xyXG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcclxuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcclxuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xyXG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xyXG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XHJcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XHJcblxyXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xyXG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XHJcblxyXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcclxuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcclxuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XHJcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcblxyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xyXG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcclxuJHJlZC1jb2xvcjogI2ZjNjQ2NztcclxuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xyXG5cclxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xyXG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XHJcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XHJcblxyXG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xyXG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcclxuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcclxuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xyXG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XHJcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XHJcblxyXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7IiwiQGltcG9ydCAnLi4vc2hhcmVkL3N0eWxlcy9pbmRleC5zY3NzJztcclxuXHJcbi5hcHAtb2YtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxufVxyXG5cclxuLm9ubGluZV9mb3JtX2NvbnRhaW5lcntcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAmX19uYXYge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDI3cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIH1cclxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: OnlineFormViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormViewComponent", function() { return OnlineFormViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/online-form.service */ "./src/app/modules/data-collection/online-form/services/online-form.service.ts");
/* harmony import */ var _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/main-menu-name.model */ "./src/app/modules/data-collection/online-form/model/main-menu-name.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var OnlineFormViewComponent = /** @class */ (function () {
    function OnlineFormViewComponent(route, onlineFormService, location) {
        this.route = route;
        this.onlineFormService = onlineFormService;
        this.location = location;
        this.mainMenuNames = _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_4__["mainMenuNames"];
    }
    OnlineFormViewComponent.prototype.ngOnInit = function () {
        this.getForm();
    };
    OnlineFormViewComponent.prototype.getForm = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.onlineFormService.getOneForm(id).subscribe(function (form) {
            _this.form = form;
        });
    };
    OnlineFormViewComponent.prototype.onAction = function (actionType) {
        switch (actionType) {
            case 'save':
                this.saveForm();
            case 'cancel':
                this.goBack();
        }
    };
    OnlineFormViewComponent.prototype.saveForm = function () {
        //PDF form save
        // this.onlineFormService.sendForm(this.form).subscribe(res => this.goBack());
        // this.onlineFormService.sendFamilyForm(this.form).subscribe(res => this.goBack());
    };
    OnlineFormViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    OnlineFormViewComponent.prototype.onActiveMenuItem = function (menuItemName) {
        this.activeSection = menuItemName;
    };
    OnlineFormViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-view',
            template: __webpack_require__(/*! ./online-form-view.component.html */ "./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.html"),
            styles: [__webpack_require__(/*! ./online-form-view.component.scss */ "./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__["OnlineFormService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], OnlineFormViewComponent);
    return OnlineFormViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/online-form.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/online-form.module.ts ***!
  \***************************************************************************/
/*! exports provided: OnlineFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormModule", function() { return OnlineFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _online_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-form-routing.module */ "./src/app/modules/data-collection/online-form/online-form-routing.module.ts");
/* harmony import */ var _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./online-form-view/online-form-view.component */ "./src/app/modules/data-collection/online-form/online-form-view/online-form-view.component.ts");
/* harmony import */ var _online_form_nav_online_form_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./online-form-nav/online-form-nav.component */ "./src/app/modules/data-collection/online-form/online-form-nav/online-form-nav.component.ts");
/* harmony import */ var _online_form_menu_online_form_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./online-form-menu/online-form-menu.component */ "./src/app/modules/data-collection/online-form/online-form-menu/online-form-menu.component.ts");
/* harmony import */ var _online_form_general_info_online_form_general_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./online-form-general-info/online-form-general-info.component */ "./src/app/modules/data-collection/online-form/online-form-general-info/online-form-general-info.component.ts");
/* harmony import */ var _services_online_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/online-form.service */ "./src/app/modules/data-collection/online-form/services/online-form.service.ts");
/* harmony import */ var _online_form_general_info_general_info_nav_general_info_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./online-form-general-info/general-info-nav/general-info-nav.component */ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-nav/general-info-nav.component.ts");
/* harmony import */ var _online_form_general_info_general_info_students_general_info_students_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./online-form-general-info/general-info-students/general-info-students.component */ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.ts");
/* harmony import */ var _online_form_general_info_general_info_parents_general_info_parents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./online-form-general-info/general-info-parents/general-info-parents.component */ "./src/app/modules/data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.ts");
/* harmony import */ var _online_form_fields_online_form_fields_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./online-form-fields/online-form-fields.component */ "./src/app/modules/data-collection/online-form/online-form-fields/online-form-fields.component.ts");
/* harmony import */ var _online_form_fields_fileds_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./online-form-fields/fileds/time-field/time-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./online-form-fields/fileds/short-text-field/short-text-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./online-form-fields/fileds/phone-number-field/phone-number-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./online-form-fields/fileds/number-text-field/number-text-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./online-form-fields/fileds/multiple-options-field/multiple-options-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./online-form-fields/fileds/long-text-field/long-text-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./online-form-fields/fileds/label-field/label-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./online-form-fields/fileds/empty-line-field/empty-line-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./online-form-fields/fileds/email-field/email-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./online-form-fields/fileds/date-time-field/date-time-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts");
/* harmony import */ var _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/field-content.directive */ "./src/app/modules/data-collection/online-form/directives/field-content.directive.ts");
/* harmony import */ var _online_form_fields_entryComponents__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./online-form-fields/entryComponents */ "./src/app/modules/data-collection/online-form/online-form-fields/entryComponents.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _online_form_consent_online_form_consent_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./online-form-consent/online-form-consent.component */ "./src/app/modules/data-collection/online-form/online-form-consent/online-form-consent.component.ts");
/* harmony import */ var _online_form_consent_consent_nav_consent_nav_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./online-form-consent/consent-nav/consent-nav.component */ "./src/app/modules/data-collection/online-form/online-form-consent/consent-nav/consent-nav.component.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/signatures/system-signature.service */ "./src/app/modules/data-collection/online-form/services/signatures/system-signature.service.ts");
/* harmony import */ var _online_form_documents_forms_online_form_documents_forms_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./online-form-documents-forms/online-form-documents-forms.component */ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.ts");
/* harmony import */ var _online_form_documents_forms_online_documents_online_documents_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./online-form-documents-forms/online-documents/online-documents.component */ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.ts");
/* harmony import */ var _online_form_documents_forms_online_pdf_forms_online_pdf_forms_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./online-form-documents-forms/online-pdf-forms/online-pdf-forms.component */ "./src/app/modules/data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _online_form_terms_conditions_online_form_terms_conditions_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./online-form-terms-conditions/online-form-terms-conditions.component */ "./src/app/modules/data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.ts");
/* harmony import */ var _online_form_tuition_contract_online_form_tuition_contract_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./online-form-tuition-contract/online-form-tuition-contract.component */ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.ts");
/* harmony import */ var _online_form_tuition_contract_tuition_contract_by_student_tuition_contract_by_student_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component */ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.ts");
/* harmony import */ var _online_form_tuition_contract_tuition_contract_by_fee_tuition_contract_by_fee_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component */ "./src/app/modules/data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.ts");
/* harmony import */ var _shared_components_signatures_signatures_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/components/signatures/signatures.component */ "./src/app/modules/data-collection/online-form/shared/components/signatures/signatures.component.ts");









































var OnlineFormModule = /** @class */ (function () {
    function OnlineFormModule() {
    }
    OnlineFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shared_components_signatures_signatures_component__WEBPACK_IMPORTED_MODULE_40__["SignaturesComponent"],
                _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_4__["OnlineFormViewComponent"],
                _online_form_nav_online_form_nav_component__WEBPACK_IMPORTED_MODULE_5__["OnlineFormNavComponent"],
                _online_form_menu_online_form_menu_component__WEBPACK_IMPORTED_MODULE_6__["OnlineFormMenuComponent"],
                _online_form_general_info_online_form_general_info_component__WEBPACK_IMPORTED_MODULE_7__["OnlineFormGeneralInfoComponent"],
                _online_form_general_info_general_info_nav_general_info_nav_component__WEBPACK_IMPORTED_MODULE_9__["GeneralInfoNavComponent"],
                _online_form_general_info_general_info_students_general_info_students_component__WEBPACK_IMPORTED_MODULE_10__["GeneralInfoStudentsComponent"],
                _online_form_general_info_general_info_parents_general_info_parents_component__WEBPACK_IMPORTED_MODULE_11__["GeneralInfoParentsComponent"],
                _online_form_fields_online_form_fields_component__WEBPACK_IMPORTED_MODULE_12__["OnlineFormFieldsComponent"],
                _online_form_fields_fileds_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_13__["TimeFieldComponent"],
                _online_form_fields_fileds_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_14__["ShortTextFieldComponent"],
                _online_form_fields_fileds_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_15__["PhoneNumberFieldComponent"],
                _online_form_fields_fileds_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_16__["NumberTextFieldComponent"],
                _online_form_fields_fileds_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_17__["MultipleOptionsFieldComponent"],
                _online_form_fields_fileds_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_18__["LongTextFieldComponent"],
                _online_form_fields_fileds_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_19__["LabelFieldComponent"],
                _online_form_fields_fileds_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_20__["HebrewDateFieldComponent"],
                _online_form_fields_fileds_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_21__["EmptyLineFieldComponent"],
                _online_form_fields_fileds_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_22__["EmailFieldComponent"],
                _online_form_fields_fileds_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_23__["DropDownListFieldComponent"],
                _online_form_fields_fileds_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_24__["DateTimeFieldComponent"],
                _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_25__["FieldContentDirective"],
                _online_form_consent_online_form_consent_component__WEBPACK_IMPORTED_MODULE_29__["OnlineFormConsentComponent"],
                _online_form_consent_consent_nav_consent_nav_component__WEBPACK_IMPORTED_MODULE_30__["ConsentNavComponent"],
                _online_form_documents_forms_online_form_documents_forms_component__WEBPACK_IMPORTED_MODULE_32__["OnlineFormDocumentsFormsComponent"],
                _online_form_documents_forms_online_documents_online_documents_component__WEBPACK_IMPORTED_MODULE_33__["OnlineDocumentsComponent"],
                _online_form_documents_forms_online_pdf_forms_online_pdf_forms_component__WEBPACK_IMPORTED_MODULE_34__["OnlinePdfFormsComponent"],
                _online_form_terms_conditions_online_form_terms_conditions_component__WEBPACK_IMPORTED_MODULE_36__["OnlineFormTermsConditionsComponent"],
                _online_form_tuition_contract_online_form_tuition_contract_component__WEBPACK_IMPORTED_MODULE_37__["OnlineFormTuitionContractComponent"],
                _online_form_tuition_contract_tuition_contract_by_student_tuition_contract_by_student_component__WEBPACK_IMPORTED_MODULE_38__["TuitionContractByStudentComponent"],
                _online_form_tuition_contract_tuition_contract_by_fee_tuition_contract_by_fee_component__WEBPACK_IMPORTED_MODULE_39__["TuitionContractByFeeComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"],
                _online_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineFormRoutingModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_35__["PdfViewerModule"]
            ],
            providers: [_services_online_form_service__WEBPACK_IMPORTED_MODULE_8__["OnlineFormService"], _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_31__["SystemSignatureService"]],
            entryComponents: [_online_form_fields_entryComponents__WEBPACK_IMPORTED_MODULE_26__["entryComponents"]],
        })
    ], OnlineFormModule);
    return OnlineFormModule;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/services/files.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/services/files.service.ts ***!
  \*******************************************************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");




var FilesService = /** @class */ (function () {
    function FilesService(http) {
        this.http = http;
        this.token = '?api_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_token;
    }
    FilesService.prototype.getFileFromServer = function (url) {
        var _this = this;
        this.http.get(url + this.token).subscribe(function (data) { return _this.downloadFile(data); }),
            function (error) { return console.log('Error downloading the file.'); },
            function () { return console.info('OK'); };
    };
    FilesService.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    FilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/services/online-form.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/services/online-form.service.ts ***!
  \*************************************************************************************/
/*! exports provided: OnlineFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormService", function() { return OnlineFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _online_form_fields_fileds_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../online-form-fields/fileds/short-text-field/short-text-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../online-form-fields/fileds/long-text-field/long-text-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../online-form-fields/fileds/number-text-field/number-text-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../online-form-fields/fileds/multiple-options-field/multiple-options-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../online-form-fields/fileds/date-time-field/date-time-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../online-form-fields/fileds/time-field/time-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/time-field/time-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../online-form-fields/fileds/email-field/email-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/email-field/email-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../online-form-fields/fileds/phone-number-field/phone-number-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../online-form-fields/fileds/label-field/label-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/label-field/label-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../online-form-fields/fileds/empty-line-field/empty-line-field.component */ "./src/app/modules/data-collection/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");

















var OnlineFormService = /** @class */ (function () {
    function OnlineFormService(http) {
        this.http = http;
        this.componentFieldsMap = new Map([
            [101, _online_form_fields_fileds_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_4__["ShortTextFieldComponent"]],
            [102, _online_form_fields_fileds_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_5__["LongTextFieldComponent"]],
            [103, _online_form_fields_fileds_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_6__["NumberTextFieldComponent"]],
            [104, _online_form_fields_fileds_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_7__["MultipleOptionsFieldComponent"]],
            [105, _online_form_fields_fileds_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_8__["DropDownListFieldComponent"]],
            [106, _online_form_fields_fileds_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_9__["DateTimeFieldComponent"]],
            [107, _online_form_fields_fileds_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__["TimeFieldComponent"]],
            [108, _online_form_fields_fileds_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_11__["EmailFieldComponent"]],
            [109, _online_form_fields_fileds_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_12__["PhoneNumberFieldComponent"]],
            [110, _online_form_fields_fileds_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_13__["HebrewDateFieldComponent"]],
            [111, _online_form_fields_fileds_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_14__["LabelFieldComponent"]],
            [112, _online_form_fields_fileds_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_15__["EmptyLineFieldComponent"]]
        ]);
    }
    OnlineFormService.prototype.getOneForm = function (id) {
        return this.http.get("/proxy/forms/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    OnlineFormService.prototype.sendForm = function (form) {
        if (form._id !== "") {
            form.step = 1;
            return this.http.put("/proxy/forms/" + form._id, form)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
        }
        return this.http.post('/proxy/forms', form)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    OnlineFormService.prototype.sendFamilyForm = function (form) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].apiFB + "/familyForm/" + form._id + "?api_token=123", form)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    OnlineFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OnlineFormService);
    return OnlineFormService;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/services/signatures/system-signature.service.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/services/signatures/system-signature.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SystemSignatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemSignatureService", function() { return SystemSignatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");





var SystemSignatureService = /** @class */ (function () {
    function SystemSignatureService(http) {
        this.http = http;
    }
    SystemSignatureService.prototype.sign = function (formId, personId, entity, entityId) {
        if (entityId === void 0) { entityId = null; }
        var data = {
            api_token: "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_token,
            formId: formId,
            personId: personId,
            entity: entity,
            entityId: entityId
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiFB + "/sign", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    SystemSignatureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SystemSignatureService);
    return SystemSignatureService;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/online-form/shared/components/signatures/signatures.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/shared/components/signatures/signatures.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--SIGNATURE-->\r\n<div *ngIf=\"signature?.isRequire\" class=\"content_section__additional_fields\">\r\n  <!--E-SIGN SIGNATURE-->\r\n  <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.ESIGN\">\r\n    <!--EXTERNAL SIGNATURE-->\r\n    <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.EXTERNAL\">\r\n      <div\r\n        class=\"content_section__inputs_container\"\r\n        *ngIf=\"!signature.isBothParents\"\r\n      >\r\n        <textarea\r\n          class=\"app-input form-control content_section__textarea\"\r\n          rows=\"2\"\r\n          placeholder=\"Parent's Signature\"\r\n          [disabled]=\"true\"\r\n        ></textarea>\r\n      </div>\r\n\r\n      <div\r\n        class=\"content_section__inputs_container\"\r\n        *ngIf=\"signature.isBothParents\"\r\n      >\r\n        <textarea\r\n          class=\"app-input form-control content_section__textarea\"\r\n          rows=\"2\"\r\n          placeholder=\"Father's Signature\"\r\n          [disabled]=\"true\"\r\n        ></textarea>\r\n        <textarea\r\n          class=\"app-input form-control content_section__textarea\"\r\n          rows=\"2\"\r\n          placeholder=\"Mother's Signature\"\r\n          [disabled]=\"true\"\r\n        ></textarea>\r\n      </div>\r\n\r\n      <div class=\"content_section__controls_container\">\r\n        <button\r\n          class=\"btn app-btn-primary content_section__button\"\r\n          [disabled]=\"true\"\r\n        >\r\n          Accept\r\n        </button>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!--SYSTEM SIGNATURE-->\r\n    <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.SYSTEM\">\r\n      <div class=\"content_section__inputs_container\">\r\n        <ng-container *ngIf=\"!signature.isBothParents\">\r\n          <div class=\"content_section__checkbox_container\">\r\n            <input\r\n              class=\"content_section__checkbox\"\r\n              type=\"checkbox\"\r\n              id=\"system_signature_parents\"\r\n              [(ngModel)]=\"signature.signed.parents\"\r\n              [disabled]=\"true\"\r\n            />\r\n\r\n            <label\r\n              tabindex=\"1\"\r\n              for=\"system_signature_parents\"\r\n              class=\"content_section__checkbox_label\"\r\n            >\r\n              <span\r\n                class=\"app-checkbox-checkmark\r\n                      content_section__checkbox_checkmark\"\r\n              ></span>\r\n              Parent's Signature\r\n            </label>\r\n          </div>\r\n          <!-- /.content_section__checkbox_container -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"signature.isBothParents\">\r\n          <div class=\"content_section__checkbox_container\">\r\n            <input\r\n              class=\"content_section__checkbox\"\r\n              type=\"checkbox\"\r\n              id=\"system_signature_fathers\"\r\n              [(ngModel)]=\"signature.signed.fathers\"\r\n              [disabled]=\"true\"\r\n            />\r\n\r\n            <label\r\n              tabindex=\"1\"\r\n              for=\"system_signature_fathers\"\r\n              class=\"content_section__checkbox_label\"\r\n            >\r\n              <span\r\n                class=\"app-checkbox-checkmark\r\n                  content_section__checkbox_checkmark\"\r\n              ></span>\r\n              Father's Signature\r\n            </label>\r\n          </div>\r\n          <!-- /.content_section__checkbox_container -->\r\n\r\n          <div class=\"content_section__checkbox_container\">\r\n            <input\r\n              class=\"content_section__checkbox\"\r\n              type=\"checkbox\"\r\n              id=\"system_signature_mothers\"\r\n              [(ngModel)]=\"signature.signed.mothers\"\r\n              [disabled]=\"true\"\r\n            />\r\n\r\n            <label\r\n              tabindex=\"1\"\r\n              for=\"system_signature_mothers\"\r\n              class=\"content_section__checkbox_label\"\r\n            >\r\n              <span\r\n                class=\"app-checkbox-checkmark\r\n                  content_section__checkbox_checkmark\"\r\n              ></span>\r\n              Mother's Signature\r\n            </label>\r\n          </div>\r\n          <!-- /.content_section__checkbox_container -->\r\n        </ng-container>\r\n      </div>\r\n      <!-- /.content_section__inputs_container -->\r\n\r\n      <div class=\"content_section__controls_container\">\r\n        <button\r\n          class=\"btn app-btn-primary content_section__button\"\r\n          [disabled]=\"true\"\r\n        >\r\n          Accept\r\n        </button>\r\n      </div>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <!--WET SIGNATURE-->\r\n  <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.WET\">\r\n    <div\r\n      class=\"content_section__inputs_container\"\r\n      *ngIf=\"!signature.isBothParents\"\r\n    >\r\n      <textarea\r\n        class=\"app-input form-control content_section__textarea\"\r\n        rows=\"2\"\r\n        placeholder=\"Parent's Signature\"\r\n        [disabled]=\"true\"\r\n      ></textarea>\r\n    </div>\r\n\r\n    <div\r\n      class=\"content_section__inputs_container\"\r\n      *ngIf=\"signature.isBothParents\"\r\n    >\r\n      <textarea\r\n        class=\"app-input form-control content_section__textarea\"\r\n        rows=\"2\"\r\n        placeholder=\"Father's Signature\"\r\n        [disabled]=\"true\"\r\n      ></textarea>\r\n\r\n      <textarea\r\n        class=\"app-input form-control content_section__textarea\"\r\n        rows=\"2\"\r\n        placeholder=\"Mother's Signature\"\r\n        [disabled]=\"true\"\r\n      ></textarea>\r\n    </div>\r\n\r\n    <div class=\"content_section__controls_container\">\r\n      <button\r\n        class=\"btn app-btn-primary content_section__button\"\r\n        [disabled]=\"true\"\r\n      >\r\n        Accept\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n<!--END SIGNATURE-->\r\n"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/shared/components/signatures/signatures.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/shared/components/signatures/signatures.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\r\n *  suffixes:\r\n *      -only - for strict range pixels\r\n *      -between - for range devices\r\n *      -up - for device and above\r\n */\n.content_section__page_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  text-align: center; }\n.content_section__main {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 1.5rem; }\n.content_section__article_title {\n  font-family: NunitoSans-ExtraBold;\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 0; }\n.content_section__article {\n  border: 0.1rem #ccc solid;\n  border-radius: 0.4rem;\n  display: flex;\n  font-size: 1rem;\n  justify-content: center;\n  height: auto;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  max-width: 615px;\n  min-width: 20rem;\n  padding: 1rem;\n  width: auto; }\n.content_section__article_text {\n  text-align: justify; }\n.content_section__additional_fields {\n  width: 100%; }\n.content_section__controls_container {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 1.5rem; }\n.content_section__button {\n  padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem; }\n.content_section__inputs_container--p0 {\n    padding: 0rem; }\n.content_section__textarea {\n  background-color: #fefefe;\n  margin: 1rem;\n  max-width: 30rem;\n  min-width: 20rem;\n  padding: 0.2rem; }\n.content_section__textarea:disabled {\n    background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n    padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center; }\n.content_section__checkbox_container--p0 {\n    padding: 0rem; }\n.content_section__checkbox {\n  opacity: 0;\n  position: absolute; }\n.content_section__checkbox:disabled {\n    background-color: #fefefe; }\n.content_section__checkbox_label {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  margin: 0;\n  outline: 0 transparent solid;\n  padding: 1rem;\n  position: relative; }\n.content_section__checkbox_label:hover {\n    cursor: pointer; }\n.content_section__checkbox_checkmark {\n  background-color: #fefefe;\n  position: relative;\n  margin-right: 1rem; }\n.content_section__checkbox_checkmark:hover {\n    cursor: pointer; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vc2hhcmVkL2NvbXBvbmVudHMvc2lnbmF0dXJlcy9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxvcmdhbml6YXRpb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vc2hhcmVkL2NvbXBvbmVudHMvc2lnbmF0dXJlcy9zaWduYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvY29tcG9uZW50cy9zaWduYXR1cmVzL0M6XFxyZWRcXGZlL3NyY1xcYXBwXFxtb2R1bGVzXFxkYXRhLWNvbGxlY3Rpb25cXG9ubGluZS1mb3JtXFxzaGFyZWRcXHN0eWxlc1xcaW5kZXguc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vc2hhcmVkL2NvbXBvbmVudHMvc2lnbmF0dXJlcy9DOlxccmVkXFxmZS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7Ozs7RUNBRTtBQ0ZBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFHZjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVyxFQUFBO0FBR2I7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTtBQUViO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UseUJDakQ0QjtFRGtENUIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBTGhCO0lBUUcseUJDeEQwQixFQUFBO0FEZ0Q3QjtJQVlHLG9CQUFvQixFQUFBO0FBWnZCO0lBWUcsb0JBQW9CLEVBQUE7QUFadkI7SUFZRyxvQkFBb0IsRUFBQTtBQUl4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBO0FBRXZCO0lBQ0UsYUFBYSxFQUFBO0FBSWpCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQixFQUFBO0FBRm5CO0lBS0cseUJDaEYwQixFQUFBO0FEb0Y5QjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBUG5CO0lBVUcsZUFBZSxFQUFBO0FBSW5CO0VBQ0UseUJDbkc0QjtFRG9HNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBSG5CO0lBTUcsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vc2hhcmVkL2NvbXBvbmVudHMvc2lnbmF0dXJlcy9zaWduYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9icy9pbmRleC5zY3NzJztcclxuXHJcbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XHJcbiR0b3AtbWVudS1oZWlnaHQ6IDQwcHg7XHJcblxyXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcclxuICogIHN1ZmZpeGVzOlxyXG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcclxuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXHJcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcclxuICovXHJcblxyXG4vLyAgRXhhbXBsZTogXHJcbi8vICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykgeyBcclxuLy8gICAgICAgICAgLi4uXHJcbi8vICAgICAgfVxyXG4gIiwiLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXHJcbiAqICBzdWZmaXhlczpcclxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXHJcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xyXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXHJcbiAqL1xuLmNvbnRlbnRfc2VjdGlvbl9fcGFnZV90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxLjVyZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZSB7XG4gIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXgtd2lkdGg6IDYxNXB4O1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogYXV0bzsgfVxuXG4uY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMS41cmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lci0tcDAge1xuICAgIHBhZGRpbmc6IDByZW07IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IDFyZW07XG4gIG1heC13aWR0aDogMzByZW07XG4gIG1pbi13aWR0aDogMjByZW07XG4gIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jb250YWluZXItLXAwIHtcbiAgICBwYWRkaW5nOiAwcmVtOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94OmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG5cbi5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2luZGV4LnNjc3NcIjtcclxuXHJcbi5jb250ZW50X3NlY3Rpb24ge1xyXG4gICZfX3BhZ2VfdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX21haW4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYXJ0aWNsZV90aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gICZfX2FydGljbGUge1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA2MTVweDtcclxuICAgIG1pbi13aWR0aDogMjByZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19hcnRpY2xlX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcblxyXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udHJvbHNfY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX2lucHV0c19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgJi0tcDAge1xyXG4gICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NoZWNrYm94X2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJi0tcDAge1xyXG4gICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY2hlY2tib3gge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jaGVja2JveF9sYWJlbCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NoZWNrYm94X2NoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xyXG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XHJcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XHJcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xyXG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XHJcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xyXG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XHJcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcclxuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcclxuXHJcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XHJcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcclxuXHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xyXG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xyXG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcclxuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuXHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XHJcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xyXG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xyXG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XHJcblxyXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XHJcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcclxuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcclxuXHJcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XHJcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xyXG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xyXG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XHJcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcclxuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcclxuXHJcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/data-collection/online-form/shared/components/signatures/signatures.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/data-collection/online-form/shared/components/signatures/signatures.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SignaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignaturesComponent", function() { return SignaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/signatures/system-signature.service */ "./src/app/modules/data-collection/online-form/services/signatures/system-signature.service.ts");




var SignaturesComponent = /** @class */ (function () {
    function SignaturesComponent(systemSignatureService) {
        this.systemSignatureService = systemSignatureService;
        this.SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_2__["SIGNATURE_TYPES"];
        this.E_SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_2__["E_SIGNATURE_TYPES"];
    }
    SignaturesComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignaturesComponent.prototype, "signature", void 0);
    SignaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-signatures',
            template: __webpack_require__(/*! ./signatures.component.html */ "./src/app/modules/data-collection/online-form/shared/components/signatures/signatures.component.html"),
            styles: [__webpack_require__(/*! ./signatures.component.scss */ "./src/app/modules/data-collection/online-form/shared/components/signatures/signatures.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_3__["SystemSignatureService"]])
    ], SignaturesComponent);
    return SignaturesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data-collection-online-form-online-form-module.js.map