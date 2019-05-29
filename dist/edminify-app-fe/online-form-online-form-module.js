(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["online-form-online-form-module"],{

/***/ "./src/app/modules/online-form/directives/field-content.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/online-form/directives/field-content.directive.ts ***!
  \***************************************************************************/
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

/***/ "./src/app/modules/online-form/model/general-info-section-name.model.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/online-form/model/general-info-section-name.model.ts ***!
  \******************************************************************************/
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

/***/ "./src/app/modules/online-form/model/main-menu-name.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/online-form/model/main-menu-name.model.ts ***!
  \*******************************************************************/
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

/***/ "./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tY29uc2VudC9jb25zZW50LW5hdi9jb25zZW50LW5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg py-0\">\r\n  <div class=\"justify-content-left\">\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <ng-container *ngFor=\"let item of consents; let i = index\">\r\n        <li class=\"nav-item py-2 px-1\"\r\n            [ngClass]=\"{'app-text-primary app-of-nav-active-border' : activeConsentId === item.id}\">\r\n          <a class=\"nav-link font-weight-bold app-cursor-pointer\"\r\n             (click)=\"setActiveConsentId(item.id)\">\r\n            {{item.title}}\r\n          </a>\r\n        </li>\r\n        <li [hidden]=\"i === consents.length-1\" class=\"nav-item py-2 px-1\">\r\n          <a class=\"nav-link\">\r\n            <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\r\n          </a>\r\n        </li>\r\n      </ng-container>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.ts ***!
  \**********************************************************************************************/
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
            template: __webpack_require__(/*! ./consent-nav.component.html */ "./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.html"),
            styles: [__webpack_require__(/*! ./consent-nav.component.css */ "./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConsentNavComponent);
    return ConsentNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-consent/online-form-consent.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-consent/online-form-consent.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tY29uc2VudC9vbmxpbmUtZm9ybS1jb25zZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-consent/online-form-consent.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-consent/online-form-consent.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\r\n  Consent\r\n</p>\r\n\r\n<div class=\"app-of-wrap\">\r\n\r\n  <div class=\"row no-gutters align-items-center\">\r\n    <div class=\"col-12 app-of-nav-wrap\">\r\n      <app-consent-nav [consents]=\"form.consentInfo.consents\"\r\n                       (activeConsentEmitter)=\"onActiveConsent($event)\"></app-consent-nav>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngFor=\"let item of consents\">\r\n    <div *ngIf=\"item.id === activeConsentId\">\r\n\r\n      <!--Title-->\r\n      <div class=\"row no-gutters align-items-center pt-4\">\r\n        <div class=\"col-12 text-center\">\r\n          <p class=\"app-text-extra-bold mb-0\">\r\n            {{item.title | uppercase}}\r\n          </p>\r\n          <p class=\"app-text-second app-text-small mb-0\">\r\n            <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n            ~15 minutes\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Text-->\r\n      <div class=\"row no-gutters pt-4\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8\" [innerHTML]=\"item.text.value\"></div>\r\n        <div class=\"col-2\"></div>\r\n      </div>\r\n\r\n      <!--Checkbox-->\r\n      <div *ngIf=\"item.checkbox.isActive\" class=\"row no-gutters pt-4\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8\">\r\n          <label class=\"app-checkbox-container\"><span class=\"font-weight-bold\">{{item.checkbox.text}}</span>\r\n            <input type=\"checkbox\" [(ngModel)]=\"item.checkbox.checked\">\r\n            <span class=\"app-checkbox-checkmark\"></span>\r\n          </label>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n      </div>\r\n\r\n      <!--SIGNATURE-->\r\n      <div *ngIf=\"item.signature.isRequire\" class=\"mt-3\">\r\n\r\n        <!--E-SIGN SIGNATURE-->\r\n        <ng-container *ngIf=\"item.signature.type === SIGNATURE_TYPES.ESIGN\">\r\n\r\n          <!--EXTERNAL SIGNATURE-->\r\n          <ng-container *ngIf=\"item.signature.eType === E_SIGNATURE_TYPES.EXTERNAL\">\r\n\r\n            <div class=\"row no-gutters pt-3\" *ngIf=\"!item.signature.isBothParents\">\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-8 app-consent-text\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <textarea class=\"app-consent-table w-100 pl-3\"\r\n                              rows=\"2\"\r\n                              placeholder=\"Parent's Signature\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row no-gutters pt-3\" *ngIf=\"item.signature.isBothParents\">\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-8 app-consent-text\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n          <textarea class=\"app-consent-table w-100 pl-3\"\r\n                    rows=\"2\"\r\n                    placeholder=\"Father's Signature\"></textarea>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n          <textarea class=\"app-consent-table w-100 pl-3\"\r\n                    rows=\"2\"\r\n                    placeholder=\"Mother's Signature\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row no-gutters p-4\">\r\n              <div class=\"col-12 text-right\">\r\n                <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-container>\r\n\r\n          <!--SYSTEM SIGNATURE-->\r\n          <ng-container *ngIf=\"item.signature.eType === E_SIGNATURE_TYPES.SYSTEM\">\r\n\r\n            <div class=\"row no-gutters pt-3\" *ngIf=\"!item.signature.isBothParents\">\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-8\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <label class=\"app-checkbox-container\">Parent's Signature\r\n                      <input type=\"checkbox\"\r\n                             [(ngModel)]=\"item.signature.signed.parents\"\r\n                      [disabled]=\"isDisabledSign('parents', item.id)\">\r\n                      <span class=\"app-checkbox-checkmark\"></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row no-gutters pt-3\" *ngIf=\"item.signature.isBothParents\">\r\n              <div class=\"col-2\"></div>\r\n              <div class=\"col-8\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <label class=\"app-checkbox-container\">Father's Signature\r\n                      <input type=\"checkbox\"\r\n                             [(ngModel)]=\"item.signature.signed.fathers\"\r\n                             [disabled]=\"isDisabledSign('fathers', item.id)\">\r\n                      <span class=\"app-checkbox-checkmark\"></span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <label class=\"app-checkbox-container\">Mother's Signature\r\n                      <input type=\"checkbox\"\r\n                             [(ngModel)]=\"item.signature.signed.mothers\"\r\n                             [disabled]=\"isDisabledSign('mothers', item.id)\">\r\n                      <span class=\"app-checkbox-checkmark\"></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row no-gutters p-4\">\r\n              <div class=\"col-12 text-right\">\r\n                <button class=\"btn app-btn-primary py-2 px-4\"\r\n                        (click)=\"onSystemSign(item.id)\">Accept\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-container>\r\n\r\n        </ng-container>\r\n\r\n        <!--WET SIGNATURE-->\r\n        <ng-container *ngIf=\"item.signature.type === SIGNATURE_TYPES.WET\">\r\n\r\n          <div class=\"row no-gutters pt-3\" *ngIf=\"!item.signature.isBothParents\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8 app-consent-text\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <textarea class=\"app-consent-table w-100 pl-3\"\r\n                            rows=\"2\"\r\n                            placeholder=\"Parent's Signature\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n\r\n          <div class=\"row no-gutters pt-3\" *ngIf=\"item.signature.isBothParents\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8 app-consent-text\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <textarea class=\"app-consent-table w-100 pl-3\"\r\n                            rows=\"2\"\r\n                            placeholder=\"Father's Signature\"></textarea>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <textarea class=\"app-consent-table w-100 pl-3\"\r\n                            rows=\"2\"\r\n                            placeholder=\"Mother's Signature\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n\r\n          <div class=\"row no-gutters p-4\">\r\n            <div class=\"col-12 text-right\">\r\n              <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\r\n            </div>\r\n          </div>\r\n\r\n        </ng-container>\r\n\r\n      </div>\r\n      <!--END SIGNATURE-->\r\n\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"row no-gutters mt-4\">\r\n  <div class=\"col-12 text-right\">\r\n    <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\r\n    <button class=\"btn app-btn-primary py-2 px-4\">Save & Go Next Step</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-consent/online-form-consent.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-consent/online-form-consent.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OnlineFormConsentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormConsentComponent", function() { return OnlineFormConsentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/online-form/services/signatures/system-signature.service.ts");





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
            template: __webpack_require__(/*! ./online-form-consent.component.html */ "./src/app/modules/online-form/online-form-consent/online-form-consent.component.html"),
            styles: [__webpack_require__(/*! ./online-form-consent.component.css */ "./src/app/modules/online-form/online-form-consent/online-form-consent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormConsentComponent);
    return OnlineFormConsentComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let document of form.documents\" class=\"mb-3\">\r\n  <div class=\"\">\r\n    <span class=\"app-text-extra-bold\">{{document.name | uppercase}}</span>\r\n  </div>\r\n  <div class=\"my-2\" [innerHTML]=\"document.accompanyingText.data\"></div>\r\n  <div class=\"col-6  mx-2 document-cont-div row no-gutters align-items-center\" >\r\n<!--    {{document | json}}-->\r\n    <div class=\"col-1 py-2 mx-0\">\r\n      <i class=\"far fa-file-pdf fa-3x app-fb-section-icon\"></i>\r\n    </div>\r\n    <div class=\"col-7 py-2\"><span class=\"span-download\" (click)=\"openForPreview(document)\">{{form.attachments[document.data].name}}</span></div>\r\n    <div class=\"col-4\" (click)=\"openForPreview(document)\" ><button class=\"btn app-btn-primary form-control\">Download Document</button> </div>\r\n  </div>\r\n  <hr>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document-cont-div {\n  border-radius: 3px;\n  background-color: #F6F6F6; }\n\n.app-btn-primary {\n  color: white; }\n\n.app-btn-primary:hover, .app-btn-primary:focus, .app-btn-primary:active {\n    background-color: #4350a2; }\n\n.span-download {\n  color: #4350A2;\n  font-weight: bold;\n  cursor: pointer; }\n\n.link-a {\n  color: white; }\n\n.link-a:hover, .link-a:focus, .link-a:active {\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1kb2N1bWVudHMtZm9ybXMvb25saW5lLWRvY3VtZW50cy9EOlxccmVkL3NyY1xcYXBwXFxtb2R1bGVzXFxvbmxpbmUtZm9ybVxcb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zXFxvbmxpbmUtZG9jdW1lbnRzXFxvbmxpbmUtZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWRvY3VtZW50cy1mb3Jtcy9vbmxpbmUtZG9jdW1lbnRzL0Q6XFxyZWQvc3JjXFxzdHlsZXNcXHZhcmlhYmxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7RUFBRSx5QkFBeUIsRUFBQTs7QUFFL0M7RUFDRSxZQUFZLEVBQUE7O0FBRGQ7SUFHSSx5QkNSd0IsRUFBQTs7QURXNUI7RUFDRSxjQUFjO0VBQUcsaUJBQWlCO0VBQUUsZUFBZSxFQUFBOztBQUdyRDtFQUNFLFlBQVksRUFBQTs7QUFEZDtJQUdJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1kb2N1bWVudHMvb25saW5lLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbi5kb2N1bWVudC1jb250LWRpdntcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG59XHJcbi5hcHAtYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAmOmhvdmVyLCAmOmZvY3VzLCAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xyXG4gIH1cclxufVxyXG4uc3Bhbi1kb3dubG9hZHtcclxuICBjb2xvcjogIzQzNTBBMjtcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7IGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpbmstYXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgJjpob3ZlciwgJjpmb2N1cywgJjphY3RpdmUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xyXG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XHJcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XHJcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcclxuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcclxuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcclxuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xyXG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xyXG5cclxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcclxuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xyXG5cclxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XHJcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XHJcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xyXG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG5cclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcclxuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XHJcbiRyZWQtY29sb3I6ICNmYzY0Njc7XHJcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcclxuXHJcbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcclxuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xyXG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xyXG5cclxuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcclxuJGdyYXktY29sb3I6ICM5MDkwOTA7XHJcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XHJcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcclxuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xyXG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xyXG5cclxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: OnlineDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineDocumentsComponent", function() { return OnlineDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/files.service */ "./src/app/modules/online-form/services/files.service.ts");




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
            template: __webpack_require__(/*! ./online-documents.component.html */ "./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.html"),
            styles: [__webpack_require__(/*! ./online-documents.component.scss */ "./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_files_service__WEBPACK_IMPORTED_MODULE_3__["FilesService"]])
    ], OnlineDocumentsComponent);
    return OnlineDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-form-documents-forms.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-form-documents-forms.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1mb3JtLWRvY3VtZW50cy1mb3Jtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-form-documents-forms.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-form-documents-forms.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\r\n  Documents & Forms\r\n</p>\r\n\r\n\r\n<div class=\"app-of-wrap\">\r\n  <div class=\"row no-gutters align-items-center\">\r\n    <div class=\"col-12 app-of-nav-wrap\">\r\n      <nav class=\"navbar navbar-expand-lg py-0\">\r\n        <div class=\"justify-content-left\">\r\n          <ul class=\"navbar-nav\">\r\n\r\n            <li class=\"nav-item py-2 px-1\"\r\n                [ngClass]=\"{'app-text-primary app-of-nav-active-border' : isDocuments}\">\r\n              <a class=\"nav-link font-weight-bold app-cursor-pointer\"\r\n                 (click)=\"isDocuments=!isDocuments\">\r\n                Documents for Parents\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item py-2 px-1\">\r\n              <a class=\"nav-link\">\r\n                <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item py-2 px-1\"\r\n                [ngClass]=\"{'app-text-primary app-of-nav-active-border' : !isDocuments}\">\r\n              <a class=\"nav-link font-weight-bold app-cursor-pointer\"\r\n                 (click)=\"isDocuments=!isDocuments\">\r\n                School Forms\r\n              </a>\r\n          </ul>\r\n\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n\r\n\r\n      <div class=\"row no-gutters p-4\">\r\n        <div class=\"col-12\">\r\n        <app-online-documents *ngIf=\"isDocuments\" [form]=\"form\"></app-online-documents>\r\n        <app-online-pdf-forms *ngIf=\"!isDocuments\" [form]=\"form\"></app-online-pdf-forms>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"row no-gutters mt-4\">\r\n  <div class=\"col-12 text-right\">\r\n    <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\r\n    <button class=\"btn app-btn-primary py-2 px-4\" (click)=\"logWhatIWant()\">Save & Go Next Step</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-form-documents-forms.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-form-documents-forms.component.ts ***!
  \**********************************************************************************************************/
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
            template: __webpack_require__(/*! ./online-form-documents-forms.component.html */ "./src/app/modules/online-form/online-form-documents-forms/online-form-documents-forms.component.html"),
            styles: [__webpack_require__(/*! ./online-form-documents-forms.component.css */ "./src/app/modules/online-form/online-form-documents-forms/online-form-documents-forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormDocumentsFormsComponent);
    return OnlineFormDocumentsFormsComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slice-wrap{\r\n  position:relative;\r\n  width: 816px;\r\n  height: 1056px;\r\n\r\n}\r\n\r\n.dotted-wrap{\r\n  border: 3px dashed #D6D6D6;\tborder-radius: 3px;\tbackground-color: #F6F6F6\r\n}\r\n\r\n.overlay{\r\n  background-color: rgba(0,0,0,0.7);\r\n  position: absolute\r\n}\r\n\r\n.test-c{\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 816px;\r\n  height: 1056px;\r\n\r\n}\r\n\r\n.div-inside{\r\n  border: 2px solid #000000;\r\n  background-color: white;\r\n  position: absolute;\r\n  z-index: 9900;\r\n  /*font-size: 0.5rem!important;*/\r\n}\r\n\r\n.app-input{\r\n  min-height: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1kb2N1bWVudHMtZm9ybXMvb25saW5lLXBkZi1mb3Jtcy9vbmxpbmUtcGRmLWZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UsMEJBQTBCLEVBQUUsa0JBQWtCLEVBQUU7QUFDbEQ7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakM7QUFDRjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFlBQVk7RUFDWixjQUFjOztBQUVoQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWRvY3VtZW50cy1mb3Jtcy9vbmxpbmUtcGRmLWZvcm1zL29ubGluZS1wZGYtZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGljZS13cmFwe1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MTZweDtcclxuICBoZWlnaHQ6IDEwNTZweDtcclxuXHJcbn1cclxuXHJcbi5kb3R0ZWQtd3JhcHtcclxuICBib3JkZXI6IDNweCBkYXNoZWQgI0Q2RDZENjtcdGJvcmRlci1yYWRpdXM6IDNweDtcdGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjZcclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG59XHJcbi50ZXN0LWN7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOiA4MTZweDtcclxuICBoZWlnaHQ6IDEwNTZweDtcclxuXHJcbn1cclxuLmRpdi1pbnNpZGV7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTkwMDtcclxuICAvKmZvbnQtc2l6ZTogMC41cmVtIWltcG9ydGFudDsqL1xyXG59XHJcbi5hcHAtaW5wdXR7XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let pdf of form.forms\">\r\n  <!--Title-->\r\n  <div class=\"row no-gutters align-items-center pt-4\">\r\n    <div class=\"col-12 text-center\">\r\n      <p class=\"app-text-extra-bold mb-0\">\r\n        {{pdf.name | uppercase}}\r\n      </p>\r\n      <p class=\"app-text-second app-text-small mb-0\">\r\n        <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n        ~15 minutes\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Text-->\r\n  <div class=\"row no-gutters pt-4\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8 text-center\" [innerHTML]=\"pdf.accompanyingText.data\"></div>\r\n    <div class=\"col-2\"></div>\r\n  </div>\r\n\r\n<div class=\"dotted-wrap mt-3 d-flex justify-content-center\">\r\n  <div class=\"slice-wrap m-3\">\r\n\r\n    <div [hidden]=\"loading\" class=\"test-c d-flex justify-content-center overlay pt-5\">\r\n      <div class=\"spinner-border text-light\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div [hidden]=\"!loading\" class=\"test-c\">\r\n      <div *ngFor=\"let div of pdf.form.fieldsPdf[page-1]\">\r\n        <div\r\n          [ngStyle]=\"styleObject(div)\"\r\n          class=\"div-inside\"\r\n              >\r\n          <div *ngIf=\"div.type==='system'\" class=\"form-group app-input-container\"\r\n               [ngClass]=\"{'app-input-fill': div.linkedField.value && !div.linkedField.options.hideLabel}\">\r\n            <label *ngIf=\"!div.linkedField.options.hideLabel\" class=\"app-input-label\">{{div.linkedField.name | titlecase}}</label>\r\n            <input type=\"text\"\r\n                   aria-describedby=\"basic-addon2\"\r\n                   class=\"app-input \"\r\n                   [(ngModel)]=\"div.linkedField.value\"\r\n                   [readOnly]=\"div.linkedField.options.readonly\"\r\n                   [required]=\"div.linkedField.options.required\"\r\n                   [placeholder]=\"div.linkedField.name | titlecase\">\r\n          </div>\r\n          <div *ngIf=\"div.type==='temporary'\" class=\"form-group app-input-container\"\r\n               [ngClass]=\"{'app-input-fill': div.linkedField.value}\">\r\n            <label class=\"app-input-label\">{{div.linkedField.name | titlecase}}</label>\r\n            <input type=\"text\"\r\n                   aria-describedby=\"basic-addon2\"\r\n                   class=\"app-input \"\r\n                   [(ngModel)]=\"div.linkedField.value\"\r\n                   [placeholder]=\"div.linkedField.name | titlecase\">\r\n          </div>\r\n          <div *ngIf=\"div.type==='signature'\" class=\"form-group\"\r\n               >\r\n            <span>Sign Here</span>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div>\r\n\r\n      <pdf-viewer\r\n        [original-size]=\"false\"\r\n        [src]=\"{ url: pdf.form.link+token}\"\r\n        [render-text-mode]=\"0\"\r\n        [autoresize]=\"true\"\r\n        [show-all]=\"false\"\r\n        [page]=\"page\"\r\n        style=\"display: block;\"\r\n        (on-progress)=\"onProgress($event)\"\r\n      >\r\n      </pdf-viewer>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n  <div *ngIf=\"pdf.form.numberOfPages>1\" class=\"d-flex justify-content-center pt-4\">\r\n    <ngb-pagination [collectionSize]=\"pdf.form.numberOfPages * 10\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\r\n\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: OnlinePdfFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinePdfFormsComponent", function() { return OnlinePdfFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");



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
            template: __webpack_require__(/*! ./online-pdf-forms.component.html */ "./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html"),
            styles: [__webpack_require__(/*! ./online-pdf-forms.component.css */ "./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlinePdfFormsComponent);
    return OnlinePdfFormsComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/entryComponents.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/entryComponents.ts ***!
  \***************************************************************************/
/*! exports provided: entryComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entryComponents", function() { return entryComponents; });
/* harmony import */ var _fileds_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileds/short-text-field/short-text-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts");
/* harmony import */ var _fileds_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileds/empty-line-field/empty-line-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _fileds_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fileds/long-text-field/long-text-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts");
/* harmony import */ var _fileds_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fileds/label-field/label-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.ts");
/* harmony import */ var _fileds_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fileds/number-text-field/number-text-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts");
/* harmony import */ var _fileds_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fileds/multiple-options-field/multiple-options-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _fileds_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fileds/email-field/email-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.ts");
/* harmony import */ var _fileds_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fileds/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _fileds_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fileds/date-time-field/date-time-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts");
/* harmony import */ var _fileds_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fileds/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _fileds_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fileds/time-field/time-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.ts");
/* harmony import */ var _fileds_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fileds/phone-number-field/phone-number-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts");












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

/***/ "./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9kYXRlLXRpbWUtZmllbGQvZGF0ZS10aW1lLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group app-input-container app-input-fill\"\r\n     [ngClass]=\"{'app-input-fill': formatDate && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input class=\"form-control app-input\"\r\n         placeholder=\"yyyy-mm-dd\"\r\n         name=\"dp\"\r\n         ngbDatepicker\r\n         #d=\"ngbDatepicker\"\r\n         (ngModelChange)=\"blurChanges($event)\"\r\n         (click)=\"d.toggle()\"\r\n         [ngModel]=\"formatDate\"\r\n         [disabled]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\">\r\n\r\n  <div class=\"input-group-append\">\r\n    <button class=\"btn app-btn-outline-primary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n      <i class=\"far fa-calendar\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts ***!
  \************************************************************************************************************/
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
            template: __webpack_require__(/*! ./date-time-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.html"),
            styles: [__webpack_require__(/*! ./date-time-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]])
    ], DateTimeFieldComponent);
    return DateTimeFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9kcm9wLWRvd24tbGlzdC1maWVsZC9kcm9wLWRvd24tbGlzdC1maWVsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value}\">\r\n  <label class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <select class=\"app-input form-control\"\r\n          [(ngModel)]=\"data.value\"\r\n          [required]=\"data.options.required\"\r\n          [disabled]=\"data.options.readonly\">\r\n    <option *ngFor=\"let item of data.options.items || list\" [selected]=\"data.value\" [ngValue]=\"item\">{{item}}</option>\r\n  </select>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts ***!
  \**********************************************************************************************************************/
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
            template: __webpack_require__(/*! ./drop-down-list-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.html"),
            styles: [__webpack_require__(/*! ./drop-down-list-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.css")]
        })
    ], DropDownListFieldComponent);
    return DropDownListFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL2VtYWlsLWZpZWxkL2VtYWlsLWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL2VtYWlsLWZpZWxkL2VtYWlsLWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"text\"\r\n         class=\"app-input form-control\"\r\n         email\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.ts ***!
  \****************************************************************************************************/
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
            template: __webpack_require__(/*! ./email-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.html"),
            styles: [__webpack_require__(/*! ./email-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.css")]
        })
    ], EmailFieldComponent);
    return EmailFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9lbXB0eS1saW5lLWZpZWxkL2VtcHR5LWxpbmUtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts ***!
  \**************************************************************************************************************/
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
            template: __webpack_require__(/*! ./empty-line-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.html"),
            styles: [__webpack_require__(/*! ./empty-line-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmptyLineFieldComponent);
    return EmptyLineFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-datepicker class=\"hebrew rtl\" #dp [(ngModel)]=\"model\" [displayMonths]=\"1\" [firstDayOfWeek]=\"7\" [dayTemplate]=\"dt\"\r\n                [dayTemplateData]=\"dayTemplateData\">\r\n</ngb-datepicker>\r\n\r\n<ng-template #dt let-date let-data=\"data\" let-selected=\"selected\" let-currentMonth=\"currentMonth\">\r\n  <div class=\"hebrew-day\" [class.outside]=\"date.month !== currentMonth\" [class.selected]=\"selected\">\r\n    <div class=\"gregorian-num\">{{ data.gregorian.day + '/' + (data.gregorian.month) }}</div>\r\n    <div class=\"hebrew-num\">{{ i18n.getDayNumerals(date) }}</div>\r\n  </div>\r\n</ng-template>\r\n\r\n<hr/>\r\n\r\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\r\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\r\n\r\n<hr/>\r\n\r\n\r\n\r\n\r\n<!--<form class=\"form-inline\">-->\r\n  <!--<div class=\"form-group\">-->\r\n    <!--<div class=\"input-group\">-->\r\n      <!--<input class=\"form-control\" placeholder=\"yyyy-mm-dd\"-->\r\n             <!--name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker [footerTemplate]=\"dt\"  [displayMonths]=\"1\" [firstDayOfWeek]=\"7\" [dayTemplate]=\"dt\" #dp=\"ngbDatepicker\" [dayTemplateData]=\"dayTemplateData\">-->\r\n      <!--<div class=\"input-group-addon\">-->\r\n        <!--<button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</form>-->\r\n\r\n<!--<ng-template #dt let-date let-data=\"data\" let-selected=\"selected\" let-currentMonth=\"currentMonth\">-->\r\n<!--<div class=\"hebrew-day\" [class.outside]=\"date.month !== currentMonth\" [class.selected]=\"selected\">-->\r\n<!--&lt;!&ndash;<div class=\"gregorian-num\">{{ data.gregorian.day + '/' + (data.gregorian.month) }}</div>&ndash;&gt;-->\r\n<!--<div class=\"hebrew-num\">{{ i18n.getDayNumerals(date) }}</div>-->\r\n<!--</div>-->\r\n  <!--&lt;!&ndash;<hr/>&ndash;&gt;-->\r\n\r\n  <!--&lt;!&ndash;<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>&ndash;&gt;-->\r\n  <!--&lt;!&ndash;<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>&ndash;&gt;-->\r\n\r\n  <!--&lt;!&ndash;<hr/>&ndash;&gt;-->\r\n<!--</ng-template>-->\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-datepicker-month-view {\n  display: block; }\n\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n  line-height: 3rem;\n  text-align: center;\n  font-style: italic; }\n\n.ngb-dp-weekday {\n  color: #5bc0de;\n  color: var(--info); }\n\n.ngb-dp-week {\n  border-radius: 0.25rem;\n  display: flex; }\n\n.ngb-dp-weekdays {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0; }\n\n.ngb-dp-day,\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n  width: 2rem;\n  height: 2rem; }\n\n.ngb-dp-day {\n  cursor: pointer; }\n\n.ngb-dp-day.disabled,\n.ngb-dp-day.hidden {\n  cursor: default; }\n\n.hebrew-day {\n  text-align: right;\n  padding: 0.25rem 0.65rem 0.25rem 0.25rem;\n  border-radius: 0.25rem;\n  display: inline-block;\n  height: 2.75rem;\n  width: 2.75rem; }\n\n.hebrew-day:hover,\n.hebrew-day.focused {\n  background-color: #e6e6e6; }\n\n.hebrew-day.selected {\n  background-color: #007bff;\n  color: white; }\n\n.outside {\n  color: lightgray; }\n\n.gregorian-num {\n  font-size: 0.5rem;\n  direction: ltr; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL2hlYnJldy1kYXRlLWZpZWxkL0Q6XFxyZWQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZmllbGRzXFxoZWJyZXctZGF0ZS1maWVsZFxcaGVicmV3LWRhdGUtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFjLEVBQUE7O0FBRWhCOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHNCQUFzQjtFQUV0QixhQUFhLEVBQUE7O0FBRWY7RUFDRSw2Q0FBNkM7RUFDN0MsZ0JBQWdCLEVBQUE7O0FBRWxCOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjs7RUFFRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCOztFQUVFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL2hlYnJldy1kYXRlLWZpZWxkL2hlYnJldy1kYXRlLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4ubmdiLWRwLXdlZWtkYXkge1xyXG4gIGNvbG9yOiAjNWJjMGRlO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmZvKTtcclxufVxyXG4ubmdiLWRwLXdlZWsge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubmdiLWRwLXdlZWtkYXlzIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4ubmdiLWRwLWRheSxcclxuLm5nYi1kcC13ZWVrLW51bWJlcixcclxuLm5nYi1kcC13ZWVrZGF5IHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbn1cclxuLm5nYi1kcC1kYXkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmdiLWRwLWRheS5kaXNhYmxlZCxcclxuLm5nYi1kcC1kYXkuaGlkZGVuIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5oZWJyZXctZGF5IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNjVyZW0gMC4yNXJlbSAwLjI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMi43NXJlbTtcclxuICB3aWR0aDogMi43NXJlbTtcclxufVxyXG4uaGVicmV3LWRheTpob3ZlcixcclxuLmhlYnJldy1kYXkuZm9jdXNlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxufVxyXG4uaGVicmV3LWRheS5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm91dHNpZGUge1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuLmdyZWdvcmlhbi1udW0ge1xyXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts ***!
  \****************************************************************************************************************/
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
            template: __webpack_require__(/*! ./hebrew-date-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.html"),
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendarHebrew"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18nHebrew"] }
            ],
            styles: [__webpack_require__(/*! ./hebrew-date-field.component.scss */ "./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"]])
    ], HebrewDateFieldComponent);
    return HebrewDateFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>{{data.value}}</label>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9sYWJlbC1maWVsZC9sYWJlbC1maWVsZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.ts ***!
  \****************************************************************************************************/
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
            template: __webpack_require__(/*! ./label-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.html"),
            styles: [__webpack_require__(/*! ./label-field.component.scss */ "./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.scss")]
        })
    ], LabelFieldComponent);
    return LabelFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL2xvbmctdGV4dC1maWVsZC9sb25nLXRleHQtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9sb25nLXRleHQtZmllbGQvbG9uZy10ZXh0LWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"text\"\r\n         class=\"app-input form-control\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts ***!
  \************************************************************************************************************/
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
            template: __webpack_require__(/*! ./long-text-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.html"),
            styles: [__webpack_require__(/*! ./long-text-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.css")]
        })
    ], LongTextFieldComponent);
    return LongTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multi-div{\r\n  border: 1px solid bisque;\r\n  border-radius: 11px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL211bHRpcGxlLW9wdGlvbnMtZmllbGQvbXVsdGlwbGUtb3B0aW9ucy1maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9tdWx0aXBsZS1vcHRpb25zLWZpZWxkL211bHRpcGxlLW9wdGlvbnMtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aS1kaXZ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmlzcXVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group multi-div\">\r\n<div class=\"checkbox\" *ngFor=\"let item of data.options.item || list\">\r\n  <label><input type=\"checkbox\" value=\"\">{{item}}</label>\r\n</div>\r\n  <div class=\"checkbox\">\r\n  <label><input type=\"checkbox\" value=\"\"> <input type=\"text\" placeholder=\"Other\"></label>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts ***!
  \**************************************************************************************************************************/
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
            template: __webpack_require__(/*! ./multiple-options-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.html"),
            styles: [__webpack_require__(/*! ./multiple-options-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.css")]
        })
    ], MultipleOptionsFieldComponent);
    return MultipleOptionsFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9udW1iZXItdGV4dC1maWVsZC9udW1iZXItdGV4dC1maWVsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"number\"\r\n         class=\"app-input form-control\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts ***!
  \****************************************************************************************************************/
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
            template: __webpack_require__(/*! ./number-text-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.html"),
            styles: [__webpack_require__(/*! ./number-text-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.css")]
        })
    ], NumberTextFieldComponent);
    return NumberTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy9waG9uZS1udW1iZXItZmllbGQvcGhvbmUtbnVtYmVyLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"text\"\r\n         aria-describedby=\"basic-addon2\"\r\n         class=\"app-input form-control\"\r\n         pattern=\"^((\\+\\d{1,3}(-| )?\\(?\\d\\)?(-| )?\\d{1,5})|(\\(?\\d{2,6}\\)?))(-| )?(\\d{3,4})(-| )?(\\d{4})(( x| ext)\\d{1,5}){0,1}$\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts ***!
  \******************************************************************************************************************/
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
            template: __webpack_require__(/*! ./phone-number-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.html"),
            styles: [__webpack_require__(/*! ./phone-number-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.css")]
        })
    ], PhoneNumberFieldComponent);
    return PhoneNumberFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL3Nob3J0LXRleHQtZmllbGQvc2hvcnQtdGV4dC1maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmlsZWRzL3Nob3J0LXRleHQtZmllbGQvc2hvcnQtdGV4dC1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"text\"\r\n         aria-describedby=\"basic-addon2\"\r\n         class=\"app-input form-control\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts ***!
  \**************************************************************************************************************/
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
            template: __webpack_require__(/*! ./short-text-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.html"),
            styles: [__webpack_require__(/*! ./short-text-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.css")]
        })
    ], ShortTextFieldComponent);
    return ShortTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpbGVkcy90aW1lLWZpZWxkL3RpbWUtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\r\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\r\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\r\n  <input type=\"time\"\r\n         class=\"app-input form-control\"\r\n         [(ngModel)]=\"data.value\"\r\n         [readOnly]=\"data.options.readonly\"\r\n         [required]=\"data.options.required\"\r\n         [placeholder]=\"data.name | titlecase\">\r\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.ts ***!
  \**************************************************************************************************/
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
            template: __webpack_require__(/*! ./time-field.component.html */ "./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.html"),
            styles: [__webpack_require__(/*! ./time-field.component.css */ "./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeFieldComponent);
    return TimeFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/online-form-fields.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/online-form-fields.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL29ubGluZS1mb3JtLWZpZWxkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/online-form-fields.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/online-form-fields.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>-->\r\n  <!--<label class=\"has-float-label\">-->\r\n    <!--<span class=\"spanForLabel\" *ngIf=\"!field.options.hideLabel\">{{field.name}}</span>-->\r\n    <ng-template appFieldContent ></ng-template>\r\n  <!--</label>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/online-form-fields.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/online-form-fields.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OnlineFormFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormFieldsComponent", function() { return OnlineFormFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/online-form.service */ "./src/app/modules/online-form/services/online-form.service.ts");
/* harmony import */ var _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/field-content.directive */ "./src/app/modules/online-form/directives/field-content.directive.ts");





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
            selector: 'app-online-form-fields',
            template: __webpack_require__(/*! ./online-form-fields.component.html */ "./src/app/modules/online-form/online-form-fields/online-form-fields.component.html"),
            styles: [__webpack_require__(/*! ./online-form-fields.component.css */ "./src/app/modules/online-form/online-form-fields/online-form-fields.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__["OnlineFormService"]])
    ], OnlineFormFieldsComponent);
    return OnlineFormFieldsComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/general-info-nav/general-info-nav.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/general-info-nav/general-info-nav.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZ2VuZXJhbC1pbmZvL2dlbmVyYWwtaW5mby1uYXYvZ2VuZXJhbC1pbmZvLW5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/general-info-nav/general-info-nav.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/general-info-nav/general-info-nav.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg py-0\">\r\n  <div class=\"justify-content-left\">\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <ng-container *ngFor=\"let item of sectionNames; let i = index\">\r\n        <li class=\"nav-item py-2 px-1\"\r\n            [ngClass]=\"{\r\n            'app-text-primary app-of-nav-active-border' : activeSection === item.name,\r\n            'app-text-danger' : generalSectionsNames.familyInfo === item.name && activeSection !== item.name,\r\n            'app-text-success' : generalSectionsNames.parentsInfo === item.name && activeSection !== item.name\r\n            }\">\r\n          <a class=\"nav-link font-weight-bold app-cursor-pointer\"\r\n             (click)=\"setActiveSection(item.name)\">\r\n            {{item.title}}\r\n          </a>\r\n        </li>\r\n        <li [hidden]=\"i === sectionNames.length-1\" class=\"nav-item py-2 px-1\">\r\n          <a class=\"nav-link\">\r\n            <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\r\n          </a>\r\n        </li>\r\n      </ng-container>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/general-info-nav/general-info-nav.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/general-info-nav/general-info-nav.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GeneralInfoNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoNavComponent", function() { return GeneralInfoNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/general-info-section-name.model */ "./src/app/modules/online-form/model/general-info-section-name.model.ts");



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
            template: __webpack_require__(/*! ./general-info-nav.component.html */ "./src/app/modules/online-form/online-form-general-info/general-info-nav/general-info-nav.component.html"),
            styles: [__webpack_require__(/*! ./general-info-nav.component.css */ "./src/app/modules/online-form/online-form-general-info/general-info-nav/general-info-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoNavComponent);
    return GeneralInfoNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/general-info-parents/general-info-parents.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/general-info-parents/general-info-parents.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZ2VuZXJhbC1pbmZvL2dlbmVyYWwtaW5mby1wYXJlbnRzL2dlbmVyYWwtaW5mby1wYXJlbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/general-info-parents/general-info-parents.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/general-info-parents/general-info-parents.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center pb-4\">\r\n  <div class=\"col-4\"></div>\r\n  <div class=\"col-4 text-center\">\r\n    <p class=\"app-text-extra-bold mb-0\">\r\n      {{'Parents Information' | uppercase}}\r\n    </p>\r\n    <p class=\"app-text-second app-text-small mb-0\">\r\n      <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n      ~15 minutes\r\n    </p>\r\n  </div>\r\n  <div class=\"col-4 text-right\">\r\n    <button class=\"btn app-btn-outline-primary\">Add Parent</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"app-of-general-info-section px-3 py-4\">\r\n\r\n  <!--General Fields-->\r\n  <div *ngIf=\"form\" class=\"row no-gutters\">\r\n    <ng-container *ngFor=\"let item of form.fields\">\r\n\r\n      <div *ngIf=\"item.type !== 113\" class=\"col-{{item.options.size}} p-2\">\r\n        <app-online-form-fields [field]=\"item\"></app-online-form-fields>\r\n      </div>\r\n\r\n      <div class=\"row no-gutters col-12\" *ngIf=\"item.type === 113\">\r\n        <div class=\"col-12\">\r\n          <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">{{item.name | uppercase}}</p>\r\n        </div>\r\n        <ng-container *ngFor=\"let groupField of item.fields\">\r\n          <div class=\"col-{{groupField.options.size}} px-2\">\r\n            <app-online-form-fields [field]=\"groupField\"></app-online-form-fields>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/general-info-parents/general-info-parents.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/general-info-parents/general-info-parents.component.ts ***!
  \*********************************************************************************************************************/
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
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeneralInfoParentsComponent.prototype, "form", void 0);
    GeneralInfoParentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-info-parents',
            template: __webpack_require__(/*! ./general-info-parents.component.html */ "./src/app/modules/online-form/online-form-general-info/general-info-parents/general-info-parents.component.html"),
            styles: [__webpack_require__(/*! ./general-info-parents.component.css */ "./src/app/modules/online-form/online-form-general-info/general-info-parents/general-info-parents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoParentsComponent);
    return GeneralInfoParentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/general-info-students/general-info-students.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/general-info-students/general-info-students.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZ2VuZXJhbC1pbmZvL2dlbmVyYWwtaW5mby1zdHVkZW50cy9nZW5lcmFsLWluZm8tc3R1ZGVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/general-info-students/general-info-students.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/general-info-students/general-info-students.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center pb-4\">\r\n  <div class=\"col-4\"></div>\r\n  <div class=\"col-4 text-center\">\r\n    <p class=\"app-text-extra-bold mb-0\">\r\n      {{'Student(s) Information' | uppercase}}\r\n    </p>\r\n    <p class=\"app-text-second app-text-small mb-0\">\r\n      <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n      ~15 minutes\r\n    </p>\r\n  </div>\r\n  <div class=\"col-4 text-right\">\r\n    <button class=\"btn app-btn-outline-primary\">Add Student</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"app-of-general-info-section px-3 py-4\">\r\n\r\n  <!--General Fields-->\r\n  <div class=\"row no-gutters\">\r\n\r\n    <div class=\"col-3 px-2\">\r\n      <div class=\"form-group app-input-container app-input-fill\">\r\n        <label for=\"firstName\" class=\"app-input-label\">First Name</label>\r\n        <input type=\"text\"\r\n               class=\"app-input form-control\"\r\n               id=\"firstName\"\r\n               placeholder=\"First Name\"\r\n               value=\"Charlotte\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3 px-2\">\r\n      <div class=\"form-group app-input-container app-input-fill\">\r\n        <label for=\"lastName\" class=\"app-input-label\">Last Name</label>\r\n        <input type=\"text\"\r\n               class=\"app-input form-control\"\r\n               id=\"lastName\"\r\n               placeholder=\"Last Name\"\r\n               value=\"Jennings\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3 px-2\">\r\n      <div class=\"form-group app-input-container app-input-fill\">\r\n        <label class=\"app-input-label\" for=\"grade\">Grade</label>\r\n        <select class=\"app-input\"\r\n                id=\"grade\">\r\n          <option [value]=\"'Grade 1'\"\r\n                  [selected]=\"true\">\r\n            {{'Grade 1'}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-3 px-2\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-8\">\r\n          <div class=\"form-group app-input-container app-input-fill mb-0\">\r\n            <label for=\"photo\" class=\"app-input-label\">Photo (optional)</label>\r\n            <input type=\"text\"\r\n                   class=\"app-input form-control\"\r\n                   id=\"photo\"\r\n                   placeholder=\"Photo (optional)\"\r\n                   value=\"Photo123871.jpg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4 d-flex align-items-center\">\r\n          <button class=\"btn app-btn-primary h-100\">Upload</button>\r\n          <i class=\"fas fa-trash ml-2 app-text-second\"></i>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <!--End General Fields-->\r\n\r\n  <!--MEDICAL INFO-->\r\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">MEDICAL INFORMATION</p>\r\n\r\n  <!--END MEDICAL INFO-->\r\n\r\n  <!--DOCTORS’S INFO-->\r\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">DOCTORS’S INFORMATION</p>\r\n\r\n  <!--End DOCTORS’S INFO-->\r\n\r\n\r\n  <!--DOCTOR’S ADDRESS-->\r\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">DOCTOR’S ADDRESS</p>\r\n\r\n  <!--END DOCTOR’S ADDRESS-->\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/general-info-students/general-info-students.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/general-info-students/general-info-students.component.ts ***!
  \***********************************************************************************************************************/
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
            template: __webpack_require__(/*! ./general-info-students.component.html */ "./src/app/modules/online-form/online-form-general-info/general-info-students/general-info-students.component.html"),
            styles: [__webpack_require__(/*! ./general-info-students.component.css */ "./src/app/modules/online-form/online-form-general-info/general-info-students/general-info-students.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoStudentsComponent);
    return GeneralInfoStudentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/online-form-general-info.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/online-form-general-info.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZ2VuZXJhbC1pbmZvL29ubGluZS1mb3JtLWdlbmVyYWwtaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/online-form-general-info.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/online-form-general-info.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\r\n  General Information\r\n</p>\r\n\r\n<div class=\"app-of-wrap\">\r\n\r\n  <div class=\"row no-gutters align-items-center\">\r\n    <div class=\"col-12 app-of-nav-wrap\">\r\n      <app-general-info-nav (activeSectionEmitter)=\"onActiveSection($event)\"></app-general-info-nav>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row no-gutters p-4\">\r\n    <div class=\"col-12\">\r\n      <app-general-info-students *ngIf=\"activeSection === generalSectionsNames.studentsInfo\">\r\n      </app-general-info-students>\r\n      <app-general-info-parents *ngIf=\"activeSection === generalSectionsNames.parentsInfo\"\r\n                                [form]=\"form\">\r\n      </app-general-info-parents>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-general-info/online-form-general-info.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-general-info/online-form-general-info.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: OnlineFormGeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormGeneralInfoComponent", function() { return OnlineFormGeneralInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/general-info-section-name.model */ "./src/app/modules/online-form/model/general-info-section-name.model.ts");



var OnlineFormGeneralInfoComponent = /** @class */ (function () {
    function OnlineFormGeneralInfoComponent() {
        this.generalSectionsNames = _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__["generalSectionsNames"];
    }
    OnlineFormGeneralInfoComponent.prototype.ngOnInit = function () {
    };
    OnlineFormGeneralInfoComponent.prototype.onActiveSection = function (sectionName) {
        this.activeSection = sectionName;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormGeneralInfoComponent.prototype, "form", void 0);
    OnlineFormGeneralInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-general-info',
            template: __webpack_require__(/*! ./online-form-general-info.component.html */ "./src/app/modules/online-form/online-form-general-info/online-form-general-info.component.html"),
            styles: [__webpack_require__(/*! ./online-form-general-info.component.css */ "./src/app/modules/online-form/online-form-general-info/online-form-general-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormGeneralInfoComponent);
    return OnlineFormGeneralInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-menu/online-form-menu.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-menu/online-form-menu.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-of-menu-wrap\">\r\n  <ul class=\"list-group bg-white \">\r\n\r\n    <ng-container *ngFor=\"let item of menuItems\">\r\n    <li class=\"list-group-item app-cursor-pointer\"\r\n        [ngClass]=\"activeMenuItem === item.name ? 'app-of-menu-active' : ''\"\r\n        *ngIf=\"isShowMenuItem(item.name)\"\r\n        (click)=\"setActiveMenuItem(item.name)\">\r\n      <div class=\"row no-gutters align-items-center py-1\">\r\n        <div class=\"col-2\">\r\n          <i class=\"fas fa-file-alt fa-lg app-of-menu-i\"\r\n             [ngClass]=\"activeMenuItem === item.name ? 'app-text-primary' : 'app-text-second'\"></i>\r\n        </div>\r\n        <div class=\"col\">\r\n          <p class=\"mb-0 app-text-extra-bold app-text-large\"\r\n             [ngClass]=\"activeMenuItem === item.name ? 'app-text-primary' : 'app-text-second'\">\r\n            {{item.title}}\r\n          </p>\r\n          <p class=\"mb-0 app-text-second app-text-small\">\r\n            <i class=\"far fa-clock fa-sm mr-1\"></i>\r\n            ~{{item.time}} minutes\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    </ng-container>\r\n\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-menu/online-form-menu.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-menu/online-form-menu.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-of-menu-wrap {\n  background-color: #ffffff;\n  border: 1px solid #E7E9EF;\n  border-radius: 3px; }\n\n.app-of-menu-i {\n  display: inline-block;\n  border-radius: 50%;\n  padding: 0.6em 0.7em;\n  background-color: #E4E7FF; }\n\n.app-of-menu-active {\n  border-left: 3px solid #4350a2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1tZW51L0Q6XFxyZWQvc3JjXFxhcHBcXG1vZHVsZXNcXG9ubGluZS1mb3JtXFxvbmxpbmUtZm9ybS1tZW51XFxvbmxpbmUtZm9ybS1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29ubGluZS1mb3JtL29ubGluZS1mb3JtLW1lbnUvRDpcXHJlZC9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksOEJDaEJ3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1tZW51L29ubGluZS1mb3JtLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnNcIjtcclxuXHJcbi5hcHAtb2YtbWVudS13cmFwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTdFOUVGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uYXBwLW9mLW1lbnUtaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAwLjdlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEU3RkY7XHJcbn1cclxuXHJcbi5hcHAtb2YtbWVudS1hY3RpdmUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkZWxlbWVudC1iYXNlLWNvbG9yO1xyXG59IiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcclxuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xyXG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xyXG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XHJcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xyXG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xyXG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XHJcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcclxuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcclxuXHJcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XHJcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcclxuXHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xyXG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xyXG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcclxuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuXHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XHJcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xyXG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xyXG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XHJcblxyXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XHJcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcclxuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcclxuXHJcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XHJcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xyXG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xyXG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XHJcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcclxuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcclxuXHJcbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-menu/online-form-menu.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-menu/online-form-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: OnlineFormMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormMenuComponent", function() { return OnlineFormMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/main-menu-name.model */ "./src/app/modules/online-form/model/main-menu-name.model.ts");



var OnlineFormMenuComponent = /** @class */ (function () {
    function OnlineFormMenuComponent() {
        this.activeMenuItemEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeMenuItem = _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].generalInfo;
        this.menuItems = [
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].generalInfo, title: 'General Information', time: 48 },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].documentsForms, title: 'Documents & Forms', time: 15 },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].consentInfo, title: 'Consent', time: 12 },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].paymentSettings, title: 'Payment Settings', time: 10 },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].tuitionContract, title: 'Tuition Contract', time: 6 },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].termsConditions, title: 'Term & Conditions', time: 14 },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].payment, title: 'Payment', time: 18 },
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
            case _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].consentInfo: return this.checkItemIsActive(_model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].consentInfo);
            case _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].termsConditions: return this.checkItemIsActive(_model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].termsConditions);
            case _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].tuitionContract: return this.checkItemIsActive(_model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].tuitionContract);
            default: return true;
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
            selector: 'app-online-form-menu',
            template: __webpack_require__(/*! ./online-form-menu.component.html */ "./src/app/modules/online-form/online-form-menu/online-form-menu.component.html"),
            styles: [__webpack_require__(/*! ./online-form-menu.component.scss */ "./src/app/modules/online-form/online-form-menu/online-form-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormMenuComponent);
    return OnlineFormMenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-nav/online-form-nav.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-nav/online-form-nav.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tbmF2L29ubGluZS1mb3JtLW5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-nav/online-form-nav.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-nav/online-form-nav.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row no-gutters py-2 align-items-center\">\r\n  <div class=\"col app-text-second\">{{formName | uppercase}}</div>\r\n  <div class=\"col text-right\">\r\n    <button class=\"btn app-btn-outline-primary px-5 mr-3\" (click)=\"onAction('cancel')\">Cancel</button>\r\n    <button class=\"btn app-btn-primary px-5\" (click)=\"onAction('save')\">Save & Exit</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-nav/online-form-nav.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-nav/online-form-nav.component.ts ***!
  \**********************************************************************************/
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
            template: __webpack_require__(/*! ./online-form-nav.component.html */ "./src/app/modules/online-form/online-form-nav/online-form-nav.component.html"),
            styles: [__webpack_require__(/*! ./online-form-nav.component.css */ "./src/app/modules/online-form/online-form-nav/online-form-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormNavComponent);
    return OnlineFormNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: routes, OnlineFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormRoutingModule", function() { return OnlineFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-form-view/online-form-view.component */ "./src/app/modules/online-form/online-form-view/online-form-view.component.ts");




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

/***/ "./src/app/modules/online-form/online-form-terms-conditions/online-form-terms-conditions.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-terms-conditions/online-form-terms-conditions.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tdGVybXMtY29uZGl0aW9ucy9vbmxpbmUtZm9ybS10ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-terms-conditions/online-form-terms-conditions.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-terms-conditions/online-form-terms-conditions.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\r\n  Term & Conditions\r\n</p>\r\n<ng-container *ngIf=\"form.termsConditions?.termsConditionsItems?.length\">\r\n  <div class=\"app-of-wrap pb-4\">\r\n\r\n    <div *ngFor=\"let item of form.termsConditions.termsConditionsItems\" class=\"mb-3\">\r\n\r\n      <!--Title-->\r\n      <div class=\"row no-gutters align-items-center pt-4\">\r\n        <div class=\"col-12 text-center\">\r\n          <p class=\"app-text-extra-bold mb-0\">\r\n            {{item.title | uppercase}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Text-->\r\n      <div class=\"row no-gutters pt-4\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8\" [innerHTML]=\"item.text\"></div>\r\n        <div class=\"col-2\"></div>\r\n      </div>\r\n\r\n      <!--Checkbox-->\r\n      <div *ngIf=\"item.checkbox.isActive\" class=\"row no-gutters pt-4\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8\">\r\n          <label class=\"app-checkbox-container\"><span class=\"font-weight-bold\">{{item.checkbox.text}}</span>\r\n            <input type=\"checkbox\" [(ngModel)]=\"item.checkbox.checked\">\r\n            <span class=\"app-checkbox-checkmark\"></span>\r\n          </label>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--SIGNATURE-->\r\n    <div *ngIf=\"signature?.isRequire\" class=\"mt-3\">\r\n\r\n      <!--E-SIGN SIGNATURE-->\r\n      <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.ESIGN\">\r\n\r\n        <!--EXTERNAL SIGNATURE-->\r\n        <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.EXTERNAL\">\r\n\r\n          <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8 app-consent-text\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n      <textarea class=\"app-consent-table w-100 pl-3\"\r\n                rows=\"2\"\r\n                placeholder=\"Parent's Signature\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n\r\n          <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8 app-consent-text\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n      <textarea class=\"app-consent-table w-100 pl-3\"\r\n                rows=\"2\"\r\n                placeholder=\"Father's Signature\"></textarea>\r\n                </div>\r\n                <div class=\"col-6\">\r\n      <textarea class=\"app-consent-table w-100 pl-3\"\r\n                rows=\"2\"\r\n                placeholder=\"Mother's Signature\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n\r\n          <div class=\"row no-gutters p-4\">\r\n            <div class=\"col-12 text-right\">\r\n              <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\r\n            </div>\r\n          </div>\r\n\r\n        </ng-container>\r\n\r\n        <!--SYSTEM SIGNATURE-->\r\n        <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.SYSTEM\">\r\n\r\n          <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <label class=\"app-checkbox-container\">Parent's Signature\r\n                    <input type=\"checkbox\"\r\n                           [(ngModel)]=\"signature.signed.parents\"\r\n                           [disabled]=\"isDisabledSign('parents')\">\r\n                    <span class=\"app-checkbox-checkmark\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n\r\n          <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <label class=\"app-checkbox-container\">Father's Signature\r\n                    <input type=\"checkbox\"\r\n                           [(ngModel)]=\"signature.signed.fathers\"\r\n                           [disabled]=\"isDisabledSign('fathers')\">\r\n                    <span class=\"app-checkbox-checkmark\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <label class=\"app-checkbox-container\">Mother's Signature\r\n                    <input type=\"checkbox\"\r\n                           [(ngModel)]=\"signature.signed.mothers\"\r\n                           [disabled]=\"isDisabledSign('mothers')\">\r\n                    <span class=\"app-checkbox-checkmark\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n          </div>\r\n\r\n          <div class=\"row no-gutters p-4\">\r\n            <div class=\"col-12 text-right\">\r\n              <button class=\"btn app-btn-primary py-2 px-4\"\r\n                      (click)=\"onSystemSign()\">Accept\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </ng-container>\r\n\r\n      </ng-container>\r\n\r\n      <!--WET SIGNATURE-->\r\n      <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.WET\">\r\n\r\n        <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\r\n          <div class=\"col-2\"></div>\r\n          <div class=\"col-8 app-consent-text\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n      <textarea class=\"app-consent-table w-100 pl-3\"\r\n                rows=\"2\"\r\n                placeholder=\"Parent's Signature\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\r\n          <div class=\"col-2\"></div>\r\n          <div class=\"col-8 app-consent-text\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n      <textarea class=\"app-consent-table w-100 pl-3\"\r\n                rows=\"2\"\r\n                placeholder=\"Father's Signature\"></textarea>\r\n              </div>\r\n              <div class=\"col-6\">\r\n      <textarea class=\"app-consent-table w-100 pl-3\"\r\n                rows=\"2\"\r\n                placeholder=\"Mother's Signature\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters p-4\">\r\n          <div class=\"col-12 text-right\">\r\n            <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\r\n          </div>\r\n        </div>\r\n\r\n      </ng-container>\r\n\r\n    </div>\r\n    <!--END SIGNATURE-->\r\n\r\n  </div>\r\n\r\n  <div class=\"row no-gutters mt-4\">\r\n    <div class=\"col-12 text-right\">\r\n      <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\r\n      <button class=\"btn app-btn-primary py-2 px-4\">Save & Go Next Step</button>\r\n    </div>\r\n  </div>\r\n\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-terms-conditions/online-form-terms-conditions.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-terms-conditions/online-form-terms-conditions.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: OnlineFormTermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormTermsConditionsComponent", function() { return OnlineFormTermsConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/online-form/services/signatures/system-signature.service.ts");





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
            template: __webpack_require__(/*! ./online-form-terms-conditions.component.html */ "./src/app/modules/online-form/online-form-terms-conditions/online-form-terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./online-form-terms-conditions.component.css */ "./src/app/modules/online-form/online-form-terms-conditions/online-form-terms-conditions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormTermsConditionsComponent);
    return OnlineFormTermsConditionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-tuition-contract/online-form-tuition-contract.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-tuition-contract/online-form-tuition-contract.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tdHVpdGlvbi1jb250cmFjdC9vbmxpbmUtZm9ybS10dWl0aW9uLWNvbnRyYWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-tuition-contract/online-form-tuition-contract.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-tuition-contract/online-form-tuition-contract.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\r\n  Tuition Contract\r\n</p>\r\n<div class=\"app-of-wrap p-4\">\r\n\r\n  <!--Title-->\r\n  <div class=\"row no-gutters align-items-center mb-4\">\r\n    <div class=\"col-12 text-center\">\r\n      <p class=\"app-text-extra-bold mb-0\">\r\n        FEES CONTRACT\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Table-->\r\n  <div class=\"app-fb-tuition-table p-3\" *ngIf=\"form.tuitionContract.splitBy === TUITION_CONTRACT_SPLIT_TYPES.STUDENT\">\r\n    <app-tuition-contract-by-student [tuitionContract]=\"form.tuitionContract\"></app-tuition-contract-by-student>\r\n  </div>\r\n  <div class=\"row no-gutters\" *ngIf=\"form.tuitionContract.splitBy === TUITION_CONTRACT_SPLIT_TYPES.FEE\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8\">\r\n      <app-tuition-contract-by-fee [tuitionContract]=\"form.tuitionContract\"></app-tuition-contract-by-fee>\r\n    </div>\r\n    <div class=\"col-2\"></div>\r\n  </div>\r\n\r\n\r\n  <!--Text-->\r\n  <div class=\"row no-gutters mt-4\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8\" [innerHTML]=\"form.tuitionContract.text\"></div>\r\n    <div class=\"col-2\"></div>\r\n  </div>\r\n\r\n  <!--SIGNATURE-->\r\n  <div *ngIf=\"signature?.isRequire\" class=\"mt-3\">\r\n\r\n    <!--E-SIGN SIGNATURE-->\r\n    <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.ESIGN\">\r\n\r\n      <!--EXTERNAL SIGNATURE-->\r\n      <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.EXTERNAL\">\r\n\r\n        <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\r\n          <div class=\"col-2\"></div>\r\n          <div class=\"col-8 app-consent-text\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n  <textarea class=\"app-consent-table w-100 pl-3\"\r\n            rows=\"2\"\r\n            placeholder=\"Parent's Signature\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\r\n          <div class=\"col-2\"></div>\r\n          <div class=\"col-8 app-consent-text\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n  <textarea class=\"app-consent-table w-100 pl-3\"\r\n            rows=\"2\"\r\n            placeholder=\"Father's Signature\"></textarea>\r\n              </div>\r\n              <div class=\"col-6\">\r\n  <textarea class=\"app-consent-table w-100 pl-3\"\r\n            rows=\"2\"\r\n            placeholder=\"Mother's Signature\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters p-4\">\r\n          <div class=\"col-12 text-right\">\r\n            <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\r\n          </div>\r\n        </div>\r\n\r\n      </ng-container>\r\n\r\n      <!--SYSTEM SIGNATURE-->\r\n      <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.SYSTEM\">\r\n\r\n        <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\r\n          <div class=\"col-2\"></div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <label class=\"app-checkbox-container\">Parent's Signature\r\n                  <input type=\"checkbox\"\r\n                         [(ngModel)]=\"signature.signed.parents\"\r\n                         [disabled]=\"isDisabledSign('parents')\">\r\n                  <span class=\"app-checkbox-checkmark\"></span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\r\n          <div class=\"col-2\"></div>\r\n          <div class=\"col-8\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <label class=\"app-checkbox-container\">Father's Signature\r\n                  <input type=\"checkbox\"\r\n                         [(ngModel)]=\"signature.signed.fathers\"\r\n                         [disabled]=\"isDisabledSign('fathers')\">\r\n                  <span class=\"app-checkbox-checkmark\"></span>\r\n                </label>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <label class=\"app-checkbox-container\">Mother's Signature\r\n                  <input type=\"checkbox\"\r\n                         [(ngModel)]=\"signature.signed.mothers\"\r\n                         [disabled]=\"isDisabledSign('mothers')\">\r\n                  <span class=\"app-checkbox-checkmark\"></span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters p-4\">\r\n          <div class=\"col-12 text-right\">\r\n            <button class=\"btn app-btn-primary py-2 px-4\"\r\n                    (click)=\"onSystemSign()\">Accept\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </ng-container>\r\n\r\n    </ng-container>\r\n\r\n    <!--WET SIGNATURE-->\r\n    <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.WET\">\r\n\r\n      <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8 app-consent-text\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n  <textarea class=\"app-consent-table w-100 pl-3\"\r\n            rows=\"2\"\r\n            placeholder=\"Parent's Signature\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n      </div>\r\n\r\n      <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8 app-consent-text\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n  <textarea class=\"app-consent-table w-100 pl-3\"\r\n            rows=\"2\"\r\n            placeholder=\"Father's Signature\"></textarea>\r\n            </div>\r\n            <div class=\"col-6\">\r\n  <textarea class=\"app-consent-table w-100 pl-3\"\r\n            rows=\"2\"\r\n            placeholder=\"Mother's Signature\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n      </div>\r\n\r\n      <div class=\"row no-gutters p-4\">\r\n        <div class=\"col-12 text-right\">\r\n          <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-container>\r\n\r\n  </div>\r\n  <!--END SIGNATURE-->\r\n\r\n\r\n</div>\r\n\r\n<div class=\"row no-gutters mt-4\">\r\n  <div class=\"col-12 text-right\">\r\n    <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\r\n    <button class=\"btn app-btn-primary py-2 px-4\">Save & Go Next Step</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-tuition-contract/online-form-tuition-contract.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-tuition-contract/online-form-tuition-contract.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: OnlineFormTuitionContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormTuitionContractComponent", function() { return OnlineFormTuitionContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/online-form/services/signatures/system-signature.service.ts");





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
        var _this = this;
        Object.keys(this.signature.signed).map(function (item) {
            if (_this.signature.signed[item])
                _this.saveSystemSign(item, 'tuitionContract');
        });
    };
    OnlineFormTuitionContractComponent.prototype.saveSystemSign = function (personsType, itemType) {
        var _this = this;
        this.systemSignatureService.sign(this.form._id, this.form.personId, itemType)
            .subscribe(function (res) {
            _this.form.tuitionContract.signature.signed[personsType] = res.created;
        });
    };
    OnlineFormTuitionContractComponent.prototype.isDisabledSign = function (personsType) {
        return this.form.tuitionContract.signature.signed[personsType];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormTuitionContractComponent.prototype, "form", void 0);
    OnlineFormTuitionContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-tuition-contract',
            template: __webpack_require__(/*! ./online-form-tuition-contract.component.html */ "./src/app/modules/online-form/online-form-tuition-contract/online-form-tuition-contract.component.html"),
            styles: [__webpack_require__(/*! ./online-form-tuition-contract.component.css */ "./src/app/modules/online-form/online-form-tuition-contract/online-form-tuition-contract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormTuitionContractComponent);
    return OnlineFormTuitionContractComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.css":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tdHVpdGlvbi1jb250cmFjdC90dWl0aW9uLWNvbnRyYWN0LWJ5LWZlZS90dWl0aW9uLWNvbnRyYWN0LWJ5LWZlZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <thead>\r\n  <tr class=\"app-tuition-table-header\">\r\n    <th scope=\"col\">FEES</th>\r\n    <th scope=\"col\">FEE AMOUNT</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <ng-container *ngFor=\"let item of tuitionContract.fees; let i = index\">\r\n    <tr *ngIf=\"item.isActive\">\r\n      <td class=\"font-weight-bold\">{{item.name}}</td>\r\n      <td>${{tempFees[i] || tempFees[0]}}</td>\r\n    </tr>\r\n  </ng-container>\r\n  <tr class=\"app-tuition-table-total font-weight-bold\">\r\n    <td>BUILDING FEE</td>\r\n    <td>$1000</td>\r\n  </tr>\r\n  <tr class=\"app-tuition-table-total font-weight-bold\">\r\n    <td>SECURITY FEE</td>\r\n    <td>$520</td>\r\n  </tr>\r\n  <tr class=\"app-tuition-table-total font-weight-bold\">\r\n    <td>Tuition and Family Fees Total</td>\r\n    <td>$21160</td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.ts ***!
  \*******************************************************************************************************************************/
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
            template: __webpack_require__(/*! ./tuition-contract-by-fee.component.html */ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.html"),
            styles: [__webpack_require__(/*! ./tuition-contract-by-fee.component.css */ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TuitionContractByFeeComponent);
    return TuitionContractByFeeComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tdHVpdGlvbi1jb250cmFjdC90dWl0aW9uLWNvbnRyYWN0LWJ5LXN0dWRlbnQvdHVpdGlvbi1jb250cmFjdC1ieS1zdHVkZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <thead>\r\n  <tr class=\"app-tuition-table-header\">\r\n    <th></th>\r\n    <th scope=\"col\">\r\n      CHARLOTTE SIMON\r\n      <br><span class=\"font-weight-normal\">1st grade</span>\r\n    </th>\r\n    <th scope=\"col\">\r\n      LUELLA SIMON\r\n      <br><span class=\"font-weight-normal\">1st grade</span>\r\n    </th>\r\n    <th scope=\"col\">\r\n      KEITH SIMON\r\n      <br><span class=\"font-weight-normal\">1st grade</span>\r\n    </th>\r\n    <th scope=\"col\" class=\"app-th-align-reset\">FEE TOTAL</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <ng-container *ngFor=\"let item of tuitionContract.fees\">\r\n    <tr *ngIf=\"item.isActive\">\r\n      <td class=\"font-weight-bold\">{{item.name}}</td>\r\n      <td>$200<br>\r\n        <ng-container *ngIf=\"item.isActiveDiscount\">\r\n          <span class=\"app-tuition-discount\">$90 discount</span>\r\n        </ng-container>\r\n      </td>\r\n      <td>$200</td>\r\n      <td>$200</td>\r\n      <td>$600</td>\r\n    </tr>\r\n  </ng-container>\r\n  <tr class=\"app-tuition-table-total-2 font-weight-bold\">\r\n    <td>TOTAL PER STUDENTS</td>\r\n    <td>$1000</td>\r\n    <td>$1000</td>\r\n    <td>$1000</td>\r\n    <td>$3500</td>\r\n  </tr>\r\n  <tr class=\"app-tuition-table-total font-weight-bold\">\r\n    <td>BUILDING FEE</td>\r\n    <td></td>\r\n    <td></td>\r\n    <td></td>\r\n    <td>$1000</td>\r\n  </tr>\r\n  <tr class=\"app-tuition-table-total font-weight-bold\">\r\n    <td>SECURITY FEE</td>\r\n    <td></td>\r\n    <td></td>\r\n    <td></td>\r\n    <td>$4500</td>\r\n  </tr>\r\n  <tr class=\"app-tuition-table-total font-weight-bold\">\r\n    <td>Tuition and Family Fees Total</td>\r\n    <td></td>\r\n    <td></td>\r\n    <td></td>\r\n    <td>$4500</td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.ts ***!
  \***************************************************************************************************************************************/
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
            template: __webpack_require__(/*! ./tuition-contract-by-student.component.html */ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.html"),
            styles: [__webpack_require__(/*! ./tuition-contract-by-student.component.css */ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TuitionContractByStudentComponent);
    return TuitionContractByStudentComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-view/online-form-view.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-view/online-form-view.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-of-background {\r\n    background-color: #F8F8FA!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS12aWV3L29ubGluZS1mb3JtLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tdmlldy9vbmxpbmUtZm9ybS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW9mLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGQSFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-view/online-form-view.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-view/online-form-view.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"form\">\r\n  <app-online-form-nav [formName]=\"form?.name\" (actionEmitter)=\"onAction($event)\"></app-online-form-nav>\r\n  <div class=\"container-fluid app-of-background min-vh-100 py-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <app-online-form-menu [form]=\"form\" (activeMenuItemEmitter)=\"onActiveMenuItem($event)\"></app-online-form-menu>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <app-online-form-general-info *ngIf=\"activeSection === mainMenuNames.generalInfo\"\r\n                                      [form]=\"form\">\r\n        </app-online-form-general-info>\r\n        <app-online-form-documents-forms [form]=\"form\" *ngIf=\"activeSection === mainMenuNames.documentsForms\"></app-online-form-documents-forms>\r\n        <app-online-form-consent [form]=\"form\" *ngIf=\"activeSection === mainMenuNames.consentInfo\"></app-online-form-consent>\r\n        <app-online-form-terms-conditions [form]=\"form\" *ngIf=\"activeSection === mainMenuNames.termsConditions\"></app-online-form-terms-conditions>\r\n        <app-online-form-tuition-contract [form]=\"form\" *ngIf=\"activeSection === mainMenuNames.tuitionContract\"></app-online-form-tuition-contract>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<div *ngIf=\"!form\" class=\"row min-vh-100 align-items-center\">\r\n  <div class=\"col-12 text-center\">\r\n    <div class=\"spinner-border text-warning\" style=\"width: 4em; height: 4em;\" role=\"status\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-view/online-form-view.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-view/online-form-view.component.ts ***!
  \************************************************************************************/
/*! exports provided: OnlineFormViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormViewComponent", function() { return OnlineFormViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/online-form.service */ "./src/app/modules/online-form/services/online-form.service.ts");
/* harmony import */ var _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/main-menu-name.model */ "./src/app/modules/online-form/model/main-menu-name.model.ts");
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
        var _this = this;
        // this.onlineFormService.sendForm(this.form).subscribe(res => this.goBack());
        this.onlineFormService.sendFamilyForm(this.form).subscribe(function (res) { return _this.goBack(); });
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
            template: __webpack_require__(/*! ./online-form-view.component.html */ "./src/app/modules/online-form/online-form-view/online-form-view.component.html"),
            styles: [__webpack_require__(/*! ./online-form-view.component.css */ "./src/app/modules/online-form/online-form-view/online-form-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__["OnlineFormService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], OnlineFormViewComponent);
    return OnlineFormViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/online-form/online-form.module.ts ***!
  \***********************************************************/
/*! exports provided: OnlineFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormModule", function() { return OnlineFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _online_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-form-routing.module */ "./src/app/modules/online-form/online-form-routing.module.ts");
/* harmony import */ var _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./online-form-view/online-form-view.component */ "./src/app/modules/online-form/online-form-view/online-form-view.component.ts");
/* harmony import */ var _online_form_nav_online_form_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./online-form-nav/online-form-nav.component */ "./src/app/modules/online-form/online-form-nav/online-form-nav.component.ts");
/* harmony import */ var _online_form_menu_online_form_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./online-form-menu/online-form-menu.component */ "./src/app/modules/online-form/online-form-menu/online-form-menu.component.ts");
/* harmony import */ var _online_form_general_info_online_form_general_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./online-form-general-info/online-form-general-info.component */ "./src/app/modules/online-form/online-form-general-info/online-form-general-info.component.ts");
/* harmony import */ var _services_online_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/online-form.service */ "./src/app/modules/online-form/services/online-form.service.ts");
/* harmony import */ var _online_form_general_info_general_info_nav_general_info_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./online-form-general-info/general-info-nav/general-info-nav.component */ "./src/app/modules/online-form/online-form-general-info/general-info-nav/general-info-nav.component.ts");
/* harmony import */ var _online_form_general_info_general_info_students_general_info_students_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./online-form-general-info/general-info-students/general-info-students.component */ "./src/app/modules/online-form/online-form-general-info/general-info-students/general-info-students.component.ts");
/* harmony import */ var _online_form_general_info_general_info_parents_general_info_parents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./online-form-general-info/general-info-parents/general-info-parents.component */ "./src/app/modules/online-form/online-form-general-info/general-info-parents/general-info-parents.component.ts");
/* harmony import */ var _online_form_fields_online_form_fields_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./online-form-fields/online-form-fields.component */ "./src/app/modules/online-form/online-form-fields/online-form-fields.component.ts");
/* harmony import */ var _online_form_fields_fileds_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./online-form-fields/fileds/time-field/time-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./online-form-fields/fileds/short-text-field/short-text-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./online-form-fields/fileds/phone-number-field/phone-number-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./online-form-fields/fileds/number-text-field/number-text-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./online-form-fields/fileds/multiple-options-field/multiple-options-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./online-form-fields/fileds/long-text-field/long-text-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./online-form-fields/fileds/label-field/label-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./online-form-fields/fileds/empty-line-field/empty-line-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./online-form-fields/fileds/email-field/email-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./online-form-fields/fileds/date-time-field/date-time-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts");
/* harmony import */ var _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/field-content.directive */ "./src/app/modules/online-form/directives/field-content.directive.ts");
/* harmony import */ var _online_form_fields_entryComponents__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./online-form-fields/entryComponents */ "./src/app/modules/online-form/online-form-fields/entryComponents.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _online_form_consent_online_form_consent_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./online-form-consent/online-form-consent.component */ "./src/app/modules/online-form/online-form-consent/online-form-consent.component.ts");
/* harmony import */ var _online_form_consent_consent_nav_consent_nav_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./online-form-consent/consent-nav/consent-nav.component */ "./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/signatures/system-signature.service */ "./src/app/modules/online-form/services/signatures/system-signature.service.ts");
/* harmony import */ var _online_form_documents_forms_online_form_documents_forms_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./online-form-documents-forms/online-form-documents-forms.component */ "./src/app/modules/online-form/online-form-documents-forms/online-form-documents-forms.component.ts");
/* harmony import */ var _online_form_documents_forms_online_documents_online_documents_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./online-form-documents-forms/online-documents/online-documents.component */ "./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.ts");
/* harmony import */ var _online_form_documents_forms_online_pdf_forms_online_pdf_forms_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./online-form-documents-forms/online-pdf-forms/online-pdf-forms.component */ "./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _online_form_terms_conditions_online_form_terms_conditions_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./online-form-terms-conditions/online-form-terms-conditions.component */ "./src/app/modules/online-form/online-form-terms-conditions/online-form-terms-conditions.component.ts");
/* harmony import */ var _online_form_tuition_contract_online_form_tuition_contract_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./online-form-tuition-contract/online-form-tuition-contract.component */ "./src/app/modules/online-form/online-form-tuition-contract/online-form-tuition-contract.component.ts");
/* harmony import */ var _online_form_tuition_contract_tuition_contract_by_student_tuition_contract_by_student_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component */ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.ts");
/* harmony import */ var _online_form_tuition_contract_tuition_contract_by_fee_tuition_contract_by_fee_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component */ "./src/app/modules/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.ts");








































var OnlineFormModule = /** @class */ (function () {
    function OnlineFormModule() {
    }
    OnlineFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
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

/***/ "./src/app/modules/online-form/services/files.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/online-form/services/files.service.ts ***!
  \***************************************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




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

/***/ "./src/app/modules/online-form/services/online-form.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/online-form/services/online-form.service.ts ***!
  \*********************************************************************/
/*! exports provided: OnlineFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormService", function() { return OnlineFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _online_form_fields_fileds_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../online-form-fields/fileds/short-text-field/short-text-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/short-text-field/short-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../online-form-fields/fileds/long-text-field/long-text-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/long-text-field/long-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../online-form-fields/fileds/number-text-field/number-text-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/number-text-field/number-text-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../online-form-fields/fileds/multiple-options-field/multiple-options-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../online-form-fields/fileds/date-time-field/date-time-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/date-time-field/date-time-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../online-form-fields/fileds/time-field/time-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/time-field/time-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../online-form-fields/fileds/email-field/email-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/email-field/email-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../online-form-fields/fileds/phone-number-field/phone-number-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/phone-number-field/phone-number-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../online-form-fields/fileds/label-field/label-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/label-field/label-field.component.ts");
/* harmony import */ var _online_form_fields_fileds_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../online-form-fields/fileds/empty-line-field/empty-line-field.component */ "./src/app/modules/online-form/online-form-fields/fileds/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");

















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

/***/ "./src/app/modules/online-form/services/signatures/system-signature.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/online-form/services/signatures/system-signature.service.ts ***!
  \*************************************************************************************/
/*! exports provided: SystemSignatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemSignatureService", function() { return SystemSignatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");





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



/***/ })

}]);
//# sourceMappingURL=online-form-online-form-module.js.map