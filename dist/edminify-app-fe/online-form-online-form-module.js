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

module.exports = "<nav class=\"navbar navbar-expand-lg py-0\">\n  <div class=\"justify-content-left\">\n    <ul class=\"navbar-nav\">\n\n      <ng-container *ngFor=\"let item of consents; let i = index\">\n        <li class=\"nav-item py-2 px-1\"\n            [ngClass]=\"{'app-text-primary app-of-nav-active-border' : activeConsentId === item.id}\">\n          <a class=\"nav-link font-weight-bold app-cursor-pointer\"\n             (click)=\"setActiveConsentId(item.id)\">\n            {{item.title}}\n          </a>\n        </li>\n        <li [hidden]=\"i === consents.length-1\" class=\"nav-item py-2 px-1\">\n          <a class=\"nav-link\">\n            <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\n          </a>\n        </li>\n      </ng-container>\n\n    </ul>\n  </div>\n</nav>"

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

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\n  Consent\n</p>\n\n<div class=\"app-of-wrap\">\n\n  <div class=\"row no-gutters align-items-center\">\n    <div class=\"col-12 app-of-nav-wrap\">\n      <app-consent-nav [consents]=\"form.consentInfo.consents\"\n                       (activeConsentEmitter)=\"onActiveConsent($event)\"></app-consent-nav>\n    </div>\n  </div>\n\n  <ng-container *ngFor=\"let item of consents\">\n    <div *ngIf=\"item.id === activeConsentId\">\n\n      <!--Title-->\n      <div class=\"row no-gutters align-items-center pt-4\">\n        <div class=\"col-12 text-center\">\n          <p class=\"app-text-extra-bold mb-0\">\n            {{item.title | uppercase}}\n          </p>\n          <p class=\"app-text-second app-text-small mb-0\">\n            <i class=\"far fa-clock fa-sm mr-1\"></i>\n            ~15 minutes\n          </p>\n        </div>\n      </div>\n\n      <!--Text-->\n      <div class=\"row no-gutters pt-4\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8\" [innerHTML]=\"item.text.value\"></div>\n        <div class=\"col-2\"></div>\n      </div>\n\n      <!--Checkbox-->\n      <div *ngIf=\"item.checkbox.isActive\" class=\"row no-gutters pt-4\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8\">\n          <label class=\"app-checkbox-container\"><span class=\"font-weight-bold\">{{item.checkbox.text}}</span>\n            <input type=\"checkbox\" [(ngModel)]=\"item.checkbox.checked\">\n            <span class=\"app-checkbox-checkmark\"></span>\n          </label>\n        </div>\n        <div class=\"col-2\"></div>\n      </div>\n\n      <!--SIGNATURE-->\n      <div *ngIf=\"item.signature.isRequire\" class=\"mt-3\">\n\n        <!--E-SIGN SIGNATURE-->\n        <ng-container *ngIf=\"item.signature.type === SIGNATURE_TYPES.ESIGN\">\n\n          <!--EXTERNAL SIGNATURE-->\n          <ng-container *ngIf=\"item.signature.eType === E_SIGNATURE_TYPES.EXTERNAL\">\n\n            <div class=\"row no-gutters pt-3\" *ngIf=\"!item.signature.isBothParents\">\n              <div class=\"col-2\"></div>\n              <div class=\"col-8 app-consent-text\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <textarea class=\"app-consent-table w-100 pl-3\"\n                              rows=\"2\"\n                              placeholder=\"Parent's Signature\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-2\"></div>\n            </div>\n\n            <div class=\"row no-gutters pt-3\" *ngIf=\"item.signature.isBothParents\">\n              <div class=\"col-2\"></div>\n              <div class=\"col-8 app-consent-text\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n          <textarea class=\"app-consent-table w-100 pl-3\"\n                    rows=\"2\"\n                    placeholder=\"Father's Signature\"></textarea>\n                  </div>\n                  <div class=\"col-6\">\n          <textarea class=\"app-consent-table w-100 pl-3\"\n                    rows=\"2\"\n                    placeholder=\"Mother's Signature\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-2\"></div>\n            </div>\n\n            <div class=\"row no-gutters p-4\">\n              <div class=\"col-12 text-right\">\n                <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\n              </div>\n            </div>\n\n          </ng-container>\n\n          <!--SYSTEM SIGNATURE-->\n          <ng-container *ngIf=\"item.signature.eType === E_SIGNATURE_TYPES.SYSTEM\">\n\n            <div class=\"row no-gutters pt-3\" *ngIf=\"!item.signature.isBothParents\">\n              <div class=\"col-2\"></div>\n              <div class=\"col-8\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <label class=\"app-checkbox-container\">Parent's Signature\n                      <input type=\"checkbox\"\n                             [(ngModel)]=\"item.signature.signed.parents\"\n                      [disabled]=\"isDisabledSign('parents', item.id)\">\n                      <span class=\"app-checkbox-checkmark\"></span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-2\"></div>\n            </div>\n\n            <div class=\"row no-gutters pt-3\" *ngIf=\"item.signature.isBothParents\">\n              <div class=\"col-2\"></div>\n              <div class=\"col-8\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <label class=\"app-checkbox-container\">Father's Signature\n                      <input type=\"checkbox\"\n                             [(ngModel)]=\"item.signature.signed.fathers\"\n                             [disabled]=\"isDisabledSign('fathers', item.id)\">\n                      <span class=\"app-checkbox-checkmark\"></span>\n                    </label>\n                  </div>\n                  <div class=\"col-6\">\n                    <label class=\"app-checkbox-container\">Mother's Signature\n                      <input type=\"checkbox\"\n                             [(ngModel)]=\"item.signature.signed.mothers\"\n                             [disabled]=\"isDisabledSign('mothers', item.id)\">\n                      <span class=\"app-checkbox-checkmark\"></span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-2\"></div>\n            </div>\n\n            <div class=\"row no-gutters p-4\">\n              <div class=\"col-12 text-right\">\n                <button class=\"btn app-btn-primary py-2 px-4\"\n                        (click)=\"onSystemSign(item.id)\">Accept\n                </button>\n              </div>\n            </div>\n\n          </ng-container>\n\n        </ng-container>\n\n        <!--WET SIGNATURE-->\n        <ng-container *ngIf=\"item.signature.type === SIGNATURE_TYPES.WET\">\n\n          <div class=\"row no-gutters pt-3\" *ngIf=\"!item.signature.isBothParents\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8 app-consent-text\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <textarea class=\"app-consent-table w-100 pl-3\"\n                            rows=\"2\"\n                            placeholder=\"Parent's Signature\"></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-2\"></div>\n          </div>\n\n          <div class=\"row no-gutters pt-3\" *ngIf=\"item.signature.isBothParents\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8 app-consent-text\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <textarea class=\"app-consent-table w-100 pl-3\"\n                            rows=\"2\"\n                            placeholder=\"Father's Signature\"></textarea>\n                </div>\n                <div class=\"col-6\">\n                  <textarea class=\"app-consent-table w-100 pl-3\"\n                            rows=\"2\"\n                            placeholder=\"Mother's Signature\"></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-2\"></div>\n          </div>\n\n          <div class=\"row no-gutters p-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\n            </div>\n          </div>\n\n        </ng-container>\n\n      </div>\n      <!--END SIGNATURE-->\n\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"row no-gutters mt-4\">\n  <div class=\"col-12 text-right\">\n    <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\n    <button class=\"btn app-btn-primary py-2 px-4\">Save & Go Next Step</button>\n  </div>\n</div>"

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
/* harmony import */ var _services_online_form_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/online-form/signatures/system-signature.service */ "./src/app/services/online-form/signatures/system-signature.service.ts");





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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_online_form_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
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

module.exports = "<div *ngFor=\"let document of form.documents\" class=\"mb-3\">\n  <div class=\"\">\n    <span class=\"app-text-extra-bold\">{{document.name | uppercase}}</span>\n  </div>\n  <div class=\"my-2\" [innerHTML]=\"document.accompanyingText.data\"></div>\n  <div class=\"col-6  mx-2 document-cont-div row no-gutters align-items-center\" >\n<!--    {{document | json}}-->\n    <div class=\"col-1 py-2 mx-0\">\n      <i class=\"far fa-file-pdf fa-3x app-fb-section-icon\"></i>\n    </div>\n    <div class=\"col-7 py-2\"><span class=\"span-download\" (click)=\"openForPreview(document)\">{{form.attachments[document.data].name}}</span></div>\n    <div class=\"col-4\" (click)=\"openForPreview(document)\" ><button class=\"btn app-btn-primary form-control\">Download Document</button> </div>\n  </div>\n  <hr>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-documents/online-documents.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document-cont-div {\n  border-radius: 3px;\n  background-color: #F6F6F6; }\n\n.app-btn-primary {\n  color: white; }\n\n.app-btn-primary:hover, .app-btn-primary:focus, .app-btn-primary:active {\n    background-color: #4350a2; }\n\n.span-download {\n  color: #4350A2;\n  font-weight: bold;\n  cursor: pointer; }\n\n.link-a {\n  color: white; }\n\n.link-a:hover, .link-a:focus, .link-a:active {\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1kb2N1bWVudHMtZm9ybXMvb25saW5lLWRvY3VtZW50cy9vbmxpbmUtZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7RUFBRSx5QkFBeUIsRUFBQTs7QUFFL0M7RUFDRSxZQUFZLEVBQUE7O0FBRGQ7SUFHSSx5QkNSd0IsRUFBQTs7QURXNUI7RUFDRSxjQUFjO0VBQUcsaUJBQWlCO0VBQUUsZUFBZSxFQUFBOztBQUdyRDtFQUNFLFlBQVksRUFBQTs7QUFEZDtJQUdJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1kb2N1bWVudHMvb25saW5lLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcblxuLmRvY3VtZW50LWNvbnQtZGl2e1xuICBib3JkZXItcmFkaXVzOiAzcHg7XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xufVxuLmFwcC1idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJjpob3ZlciwgJjpmb2N1cywgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRlbGVtZW50LWJhc2UtY29sb3I7XG4gIH1cbn1cbi5zcGFuLWRvd25sb2Fke1xuICBjb2xvcjogIzQzNTBBMjtcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7IGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpbmstYXtcbiAgY29sb3I6IHdoaXRlO1xuICAmOmhvdmVyLCAmOmZvY3VzLCAmOmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

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
/* harmony import */ var _services_online_form_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/online-form/files.service */ "./src/app/services/online-form/files.service.ts");




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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_online_form_files_service__WEBPACK_IMPORTED_MODULE_3__["FilesService"]])
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

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\n  Documents & Forms\n</p>\n\n\n<div class=\"app-of-wrap\">\n  <div class=\"row no-gutters align-items-center\">\n    <div class=\"col-12 app-of-nav-wrap\">\n      <nav class=\"navbar navbar-expand-lg py-0\">\n        <div class=\"justify-content-left\">\n          <ul class=\"navbar-nav\">\n\n            <li class=\"nav-item py-2 px-1\"\n                [ngClass]=\"{'app-text-primary app-of-nav-active-border' : isDocuments}\">\n              <a class=\"nav-link font-weight-bold app-cursor-pointer\"\n                 (click)=\"isDocuments=!isDocuments\">\n                Documents for Parents\n              </a>\n            </li>\n            <li class=\"nav-item py-2 px-1\">\n              <a class=\"nav-link\">\n                <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\n              </a>\n            </li>\n            <li class=\"nav-item py-2 px-1\"\n                [ngClass]=\"{'app-text-primary app-of-nav-active-border' : !isDocuments}\">\n              <a class=\"nav-link font-weight-bold app-cursor-pointer\"\n                 (click)=\"isDocuments=!isDocuments\">\n                School Forms\n              </a>\n          </ul>\n\n        </div>\n      </nav>\n    </div>\n  </div>\n\n\n      <div class=\"row no-gutters p-4\">\n        <div class=\"col-12\">\n        <app-online-documents *ngIf=\"isDocuments\" [form]=\"form\"></app-online-documents>\n        <app-online-pdf-forms *ngIf=\"!isDocuments\" [form]=\"form\"></app-online-pdf-forms>\n        </div>\n      </div>\n\n\n\n\n</div>\n\n<div class=\"row no-gutters mt-4\">\n  <div class=\"col-12 text-right\">\n    <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\n    <button class=\"btn app-btn-primary py-2 px-4\" (click)=\"logWhatIWant()\">Save & Go Next Step</button>\n  </div>\n</div>\n"

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

module.exports = ".slice-wrap{\n  position:relative;\n  width: 816px;\n  height: 1056px;\n\n}\n\n.dotted-wrap{\n  border: 3px dashed #D6D6D6;\tborder-radius: 3px;\tbackground-color: #F6F6F6\n}\n\n.overlay{\n  background-color: rgba(0,0,0,0.7);\n  position: absolute\n}\n\n.test-c{\n  position:absolute;\n  top:0;\n  left:0;\n  width: 816px;\n  height: 1056px;\n\n}\n\n.div-inside{\n  border: 2px solid #000000;\n  background-color: white;\n  position: absolute;\n  z-index: 9900;\n  /*font-size: 0.5rem!important;*/\n}\n\n.app-input{\n  min-height: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1kb2N1bWVudHMtZm9ybXMvb25saW5lLXBkZi1mb3Jtcy9vbmxpbmUtcGRmLWZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UsMEJBQTBCLEVBQUUsa0JBQWtCLEVBQUU7QUFDbEQ7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakM7QUFDRjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFlBQVk7RUFDWixjQUFjOztBQUVoQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWRvY3VtZW50cy1mb3Jtcy9vbmxpbmUtcGRmLWZvcm1zL29ubGluZS1wZGYtZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGljZS13cmFwe1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgd2lkdGg6IDgxNnB4O1xuICBoZWlnaHQ6IDEwNTZweDtcblxufVxuXG4uZG90dGVkLXdyYXB7XG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjRDZENkQ2O1x0Ym9yZGVyLXJhZGl1czogM3B4O1x0YmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNlxufVxuXG4ub3ZlcmxheXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGVcbn1cbi50ZXN0LWN7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICB3aWR0aDogODE2cHg7XG4gIGhlaWdodDogMTA1NnB4O1xuXG59XG4uZGl2LWluc2lkZXtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTkwMDtcbiAgLypmb250LXNpemU6IDAuNXJlbSFpbXBvcnRhbnQ7Ki9cbn1cbi5hcHAtaW5wdXR7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let pdf of form.forms\">\n  <!--Title-->\n  <div class=\"row no-gutters align-items-center pt-4\">\n    <div class=\"col-12 text-center\">\n      <p class=\"app-text-extra-bold mb-0\">\n        {{pdf.name | uppercase}}\n      </p>\n      <p class=\"app-text-second app-text-small mb-0\">\n        <i class=\"far fa-clock fa-sm mr-1\"></i>\n        ~15 minutes\n      </p>\n    </div>\n  </div>\n\n  <!--Text-->\n  <div class=\"row no-gutters pt-4\">\n    <div class=\"col-2\"></div>\n    <div class=\"col-8 text-center\" [innerHTML]=\"pdf.accompanyingText.data\"></div>\n    <div class=\"col-2\"></div>\n  </div>\n\n<div class=\"dotted-wrap mt-3 d-flex justify-content-center\">\n  <div class=\"slice-wrap m-3\">\n\n    <div [hidden]=\"loading\" class=\"test-c d-flex justify-content-center overlay pt-5\">\n      <div class=\"spinner-border text-light\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n\n    <div [hidden]=\"!loading\" class=\"test-c\">\n      <div *ngFor=\"let div of pdf.form.fieldsPdf[page-1]\">\n        <div\n          [ngStyle]=\"styleObject(div)\"\n          class=\"div-inside\"\n              >\n          <div *ngIf=\"div.type==='system'\" class=\"form-group app-input-container\"\n               [ngClass]=\"{'app-input-fill': div.linkedField.value && !div.linkedField.options.hideLabel}\">\n            <label *ngIf=\"!div.linkedField.options.hideLabel\" class=\"app-input-label\">{{div.linkedField.name | titlecase}}</label>\n            <input type=\"text\"\n                   aria-describedby=\"basic-addon2\"\n                   class=\"app-input \"\n                   [(ngModel)]=\"div.linkedField.value\"\n                   [readOnly]=\"div.linkedField.options.readonly\"\n                   [required]=\"div.linkedField.options.required\"\n                   [placeholder]=\"div.linkedField.name | titlecase\">\n          </div>\n          <div *ngIf=\"div.type==='temporary'\" class=\"form-group app-input-container\"\n               [ngClass]=\"{'app-input-fill': div.linkedField.value}\">\n            <label class=\"app-input-label\">{{div.linkedField.name | titlecase}}</label>\n            <input type=\"text\"\n                   aria-describedby=\"basic-addon2\"\n                   class=\"app-input \"\n                   [(ngModel)]=\"div.linkedField.value\"\n                   [placeholder]=\"div.linkedField.name | titlecase\">\n          </div>\n          <div *ngIf=\"div.type==='signature'\" class=\"form-group\"\n               >\n            <span>Sign Here</span>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n\n    <div>\n\n      <pdf-viewer\n        [original-size]=\"false\"\n        [src]=\"{ url: pdf.form.link+token}\"\n        [render-text-mode]=\"0\"\n        [autoresize]=\"true\"\n        [show-all]=\"false\"\n        [page]=\"page\"\n        style=\"display: block;\"\n        (on-progress)=\"onProgress($event)\"\n      >\n      </pdf-viewer>\n\n    </div>\n\n\n  </div>\n\n</div>\n\n  <div *ngIf=\"pdf.form.numberOfPages>1\" class=\"d-flex justify-content-center pt-4\">\n    <ngb-pagination [collectionSize]=\"pdf.form.numberOfPages * 10\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n\n  </div>\n</ng-container>\n"

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
/* harmony import */ var _fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields/short-text-field/short-text-field.component */ "./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts");
/* harmony import */ var _fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields/empty-line-field/empty-line-field.component */ "./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/long-text-field/long-text-field.component */ "./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts");
/* harmony import */ var _fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/label-field/label-field.component */ "./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.ts");
/* harmony import */ var _fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fields/number-text-field/number-text-field.component */ "./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts");
/* harmony import */ var _fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields/multiple-options-field/multiple-options-field.component */ "./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields/email-field/email-field.component */ "./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.ts");
/* harmony import */ var _fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fields/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fields/date-time-field/date-time-field.component */ "./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts");
/* harmony import */ var _fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fields/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields/time-field/time-field.component */ "./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.ts");
/* harmony import */ var _fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/phone-number-field/phone-number-field.component */ "./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts");












var entryComponents = [
    _fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_0__["ShortTextFieldComponent"],
    _fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_2__["LongTextFieldComponent"],
    _fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_4__["NumberTextFieldComponent"],
    _fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_5__["MultipleOptionsFieldComponent"],
    _fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_6__["EmailFieldComponent"],
    _fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_7__["DropDownListFieldComponent"],
    _fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_8__["DateTimeFieldComponent"],
    _fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_9__["HebrewDateFieldComponent"],
    _fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__["TimeFieldComponent"],
    _fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_11__["PhoneNumberFieldComponent"],
    _fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_3__["LabelFieldComponent"],
    _fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_1__["EmptyLineFieldComponent"]
];


/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9kYXRlLXRpbWUtZmllbGQvZGF0ZS10aW1lLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group app-input-container app-input-fill\"\n     [ngClass]=\"{'app-input-fill': formatDate && !data.options.hideLabel}\">\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <input class=\"form-control app-input\"\n         placeholder=\"yyyy-mm-dd\"\n         name=\"dp\"\n         ngbDatepicker\n         #d=\"ngbDatepicker\"\n         (ngModelChange)=\"blurChanges($event)\"\n         (click)=\"d.toggle()\"\n         [ngModel]=\"formatDate\"\n         [disabled]=\"data.options.readonly\"\n         [required]=\"data.options.required\">\n\n  <div class=\"input-group-append\">\n    <button class=\"btn app-btn-outline-primary calendar\" (click)=\"d.toggle()\" type=\"button\">\n      <i class=\"far fa-calendar\"></i>\n    </button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts ***!
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
            template: __webpack_require__(/*! ./date-time-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.html"),
            styles: [__webpack_require__(/*! ./date-time-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]])
    ], DateTimeFieldComponent);
    return DateTimeFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9kcm9wLWRvd24tbGlzdC1maWVsZC9kcm9wLWRvd24tbGlzdC1maWVsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\n     [ngClass]=\"{'app-input-fill': data.value}\">\n  <label class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <select class=\"app-input form-control\"\n          [(ngModel)]=\"data.value\"\n          [required]=\"data.options.required\"\n          [disabled]=\"data.options.readonly\">\n    <option *ngFor=\"let item of data.options.items || list\" [selected]=\"data.value\" [ngValue]=\"item\">{{item}}</option>\n  </select>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts ***!
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
            template: __webpack_require__(/*! ./drop-down-list-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.html"),
            styles: [__webpack_require__(/*! ./drop-down-list-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.css")]
        })
    ], DropDownListFieldComponent);
    return DropDownListFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ninput{\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL2VtYWlsLWZpZWxkL2VtYWlsLWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL2VtYWlsLWZpZWxkL2VtYWlsLWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlucHV0e1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <input type=\"text\"\n         class=\"app-input form-control\"\n         email\n         [(ngModel)]=\"data.value\"\n         [readOnly]=\"data.options.readonly\"\n         [required]=\"data.options.required\"\n         [placeholder]=\"data.name | titlecase\">\n</div>\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.ts ***!
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
            template: __webpack_require__(/*! ./email-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.html"),
            styles: [__webpack_require__(/*! ./email-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.css")]
        })
    ], EmailFieldComponent);
    return EmailFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9lbXB0eS1saW5lLWZpZWxkL2VtcHR5LWxpbmUtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts ***!
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
            template: __webpack_require__(/*! ./empty-line-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.html"),
            styles: [__webpack_require__(/*! ./empty-line-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmptyLineFieldComponent);
    return EmptyLineFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-datepicker class=\"hebrew rtl\" #dp [(ngModel)]=\"model\" [displayMonths]=\"1\" [firstDayOfWeek]=\"7\" [dayTemplate]=\"dt\"\n                [dayTemplateData]=\"dayTemplateData\">\n</ngb-datepicker>\n\n<ng-template #dt let-date let-data=\"data\" let-selected=\"selected\" let-currentMonth=\"currentMonth\">\n  <div class=\"hebrew-day\" [class.outside]=\"date.month !== currentMonth\" [class.selected]=\"selected\">\n    <div class=\"gregorian-num\">{{ data.gregorian.day + '/' + (data.gregorian.month) }}</div>\n    <div class=\"hebrew-num\">{{ i18n.getDayNumerals(date) }}</div>\n  </div>\n</ng-template>\n\n<hr/>\n\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\n\n<hr/>\n\n\n\n\n<!--<form class=\"form-inline\">-->\n  <!--<div class=\"form-group\">-->\n    <!--<div class=\"input-group\">-->\n      <!--<input class=\"form-control\" placeholder=\"yyyy-mm-dd\"-->\n             <!--name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker [footerTemplate]=\"dt\"  [displayMonths]=\"1\" [firstDayOfWeek]=\"7\" [dayTemplate]=\"dt\" #dp=\"ngbDatepicker\" [dayTemplateData]=\"dayTemplateData\">-->\n      <!--<div class=\"input-group-addon\">-->\n        <!--<button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</form>-->\n\n<!--<ng-template #dt let-date let-data=\"data\" let-selected=\"selected\" let-currentMonth=\"currentMonth\">-->\n<!--<div class=\"hebrew-day\" [class.outside]=\"date.month !== currentMonth\" [class.selected]=\"selected\">-->\n<!--&lt;!&ndash;<div class=\"gregorian-num\">{{ data.gregorian.day + '/' + (data.gregorian.month) }}</div>&ndash;&gt;-->\n<!--<div class=\"hebrew-num\">{{ i18n.getDayNumerals(date) }}</div>-->\n<!--</div>-->\n  <!--&lt;!&ndash;<hr/>&ndash;&gt;-->\n\n  <!--&lt;!&ndash;<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>&ndash;&gt;-->\n  <!--&lt;!&ndash;<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>&ndash;&gt;-->\n\n  <!--&lt;!&ndash;<hr/>&ndash;&gt;-->\n<!--</ng-template>-->\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-datepicker-month-view {\n  display: block; }\n\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n  line-height: 3rem;\n  text-align: center;\n  font-style: italic; }\n\n.ngb-dp-weekday {\n  color: #5bc0de;\n  color: var(--info); }\n\n.ngb-dp-week {\n  border-radius: 0.25rem;\n  display: flex; }\n\n.ngb-dp-weekdays {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0; }\n\n.ngb-dp-day,\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n  width: 2rem;\n  height: 2rem; }\n\n.ngb-dp-day {\n  cursor: pointer; }\n\n.ngb-dp-day.disabled,\n.ngb-dp-day.hidden {\n  cursor: default; }\n\n.hebrew-day {\n  text-align: right;\n  padding: 0.25rem 0.65rem 0.25rem 0.25rem;\n  border-radius: 0.25rem;\n  display: inline-block;\n  height: 2.75rem;\n  width: 2.75rem; }\n\n.hebrew-day:hover,\n.hebrew-day.focused {\n  background-color: #e6e6e6; }\n\n.hebrew-day.selected {\n  background-color: #007bff;\n  color: white; }\n\n.outside {\n  color: lightgray; }\n\n.gregorian-num {\n  font-size: 0.5rem;\n  direction: ltr; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL2hlYnJldy1kYXRlLWZpZWxkL2hlYnJldy1kYXRlLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxzQkFBc0I7RUFFdEIsYUFBYSxFQUFBOztBQUVmO0VBQ0UsNkNBQTZDO0VBQzdDLGdCQUFnQixFQUFBOztBQUVsQjs7O0VBR0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGVBQWUsRUFBQTs7QUFFakI7O0VBRUUsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjs7RUFFRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9oZWJyZXctZGF0ZS1maWVsZC9oZWJyZXctZGF0ZS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGNvbG9yOiAjNWJjMGRlO1xuICBjb2xvcjogdmFyKC0taW5mbyk7XG59XG4ubmdiLWRwLXdlZWsge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5uZ2ItZHAtd2Vla2RheXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubmdiLWRwLWRheSxcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmdiLWRwLWRheS5kaXNhYmxlZCxcbi5uZ2ItZHAtZGF5LmhpZGRlbiB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmhlYnJldy1kYXkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjY1cmVtIDAuMjVyZW0gMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIuNzVyZW07XG4gIHdpZHRoOiAyLjc1cmVtO1xufVxuLmhlYnJldy1kYXk6aG92ZXIsXG4uaGVicmV3LWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5oZWJyZXctZGF5LnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm91dHNpZGUge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuLmdyZWdvcmlhbi1udW0ge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts ***!
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
            template: __webpack_require__(/*! ./hebrew-date-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.html"),
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendarHebrew"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18nHebrew"] }
            ],
            styles: [__webpack_require__(/*! ./hebrew-date-field.component.scss */ "./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"]])
    ], HebrewDateFieldComponent);
    return HebrewDateFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>{{data.value}}</label>\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9sYWJlbC1maWVsZC9sYWJlbC1maWVsZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.ts ***!
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
            template: __webpack_require__(/*! ./label-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.html"),
            styles: [__webpack_require__(/*! ./label-field.component.scss */ "./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.scss")]
        })
    ], LabelFieldComponent);
    return LabelFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL2xvbmctdGV4dC1maWVsZC9sb25nLXRleHQtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9sb25nLXRleHQtZmllbGQvbG9uZy10ZXh0LWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <input type=\"text\"\n         class=\"app-input form-control\"\n         [(ngModel)]=\"data.value\"\n         [readOnly]=\"data.options.readonly\"\n         [required]=\"data.options.required\"\n         [placeholder]=\"data.name | titlecase\">\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts ***!
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
            template: __webpack_require__(/*! ./long-text-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.html"),
            styles: [__webpack_require__(/*! ./long-text-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.css")]
        })
    ], LongTextFieldComponent);
    return LongTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multi-div{\n  border: 1px solid bisque;\n  border-radius: 11px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL211bHRpcGxlLW9wdGlvbnMtZmllbGQvbXVsdGlwbGUtb3B0aW9ucy1maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9tdWx0aXBsZS1vcHRpb25zLWZpZWxkL211bHRpcGxlLW9wdGlvbnMtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aS1kaXZ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJpc3F1ZTtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group multi-div\">\n<div class=\"checkbox\" *ngFor=\"let item of data.options.item || list\">\n  <label><input type=\"checkbox\" value=\"\">{{item}}</label>\n</div>\n  <div class=\"checkbox\">\n  <label><input type=\"checkbox\" value=\"\"> <input type=\"text\" placeholder=\"Other\"></label>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts ***!
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
            template: __webpack_require__(/*! ./multiple-options-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.html"),
            styles: [__webpack_require__(/*! ./multiple-options-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.css")]
        })
    ], MultipleOptionsFieldComponent);
    return MultipleOptionsFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9udW1iZXItdGV4dC1maWVsZC9udW1iZXItdGV4dC1maWVsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <input type=\"number\"\n         class=\"app-input form-control\"\n         [(ngModel)]=\"data.value\"\n         [readOnly]=\"data.options.readonly\"\n         [required]=\"data.options.required\"\n         [placeholder]=\"data.name | titlecase\">\n</div>\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts ***!
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
            template: __webpack_require__(/*! ./number-text-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.html"),
            styles: [__webpack_require__(/*! ./number-text-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.css")]
        })
    ], NumberTextFieldComponent);
    return NumberTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9waG9uZS1udW1iZXItZmllbGQvcGhvbmUtbnVtYmVyLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <input type=\"text\"\n         aria-describedby=\"basic-addon2\"\n         class=\"app-input form-control\"\n         pattern=\"^((\\+\\d{1,3}(-| )?\\(?\\d\\)?(-| )?\\d{1,5})|(\\(?\\d{2,6}\\)?))(-| )?(\\d{3,4})(-| )?(\\d{4})(( x| ext)\\d{1,5}){0,1}$\"\n         [(ngModel)]=\"data.value\"\n         [readOnly]=\"data.options.readonly\"\n         [required]=\"data.options.required\"\n         [placeholder]=\"data.name | titlecase\">\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts ***!
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
            template: __webpack_require__(/*! ./phone-number-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.html"),
            styles: [__webpack_require__(/*! ./phone-number-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.css")]
        })
    ], PhoneNumberFieldComponent);
    return PhoneNumberFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL3Nob3J0LXRleHQtZmllbGQvc2hvcnQtdGV4dC1maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL3Nob3J0LXRleHQtZmllbGQvc2hvcnQtdGV4dC1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <input type=\"text\"\n         aria-describedby=\"basic-addon2\"\n         class=\"app-input form-control\"\n         [(ngModel)]=\"data.value\"\n         [readOnly]=\"data.options.readonly\"\n         [required]=\"data.options.required\"\n         [placeholder]=\"data.name | titlecase\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts ***!
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
            template: __webpack_require__(/*! ./short-text-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.html"),
            styles: [__webpack_require__(/*! ./short-text-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.css")]
        })
    ], ShortTextFieldComponent);
    return ShortTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy90aW1lLWZpZWxkL3RpbWUtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <input type=\"time\"\n         class=\"app-input form-control\"\n         [(ngModel)]=\"data.value\"\n         [readOnly]=\"data.options.readonly\"\n         [required]=\"data.options.required\"\n         [placeholder]=\"data.name | titlecase\">\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.ts ***!
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
            template: __webpack_require__(/*! ./time-field.component.html */ "./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.html"),
            styles: [__webpack_require__(/*! ./time-field.component.css */ "./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.css")]
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

module.exports = "<!--<div>-->\n  <!--<label class=\"has-float-label\">-->\n    <!--<span class=\"spanForLabel\" *ngIf=\"!field.options.hideLabel\">{{field.name}}</span>-->\n    <ng-template appFieldContent ></ng-template>\n  <!--</label>-->\n<!--</div>-->\n"

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

module.exports = "<nav class=\"navbar navbar-expand-lg py-0\">\n  <div class=\"justify-content-left\">\n    <ul class=\"navbar-nav\">\n\n      <ng-container *ngFor=\"let item of sectionNames; let i = index\">\n        <li class=\"nav-item py-2 px-1\"\n            [ngClass]=\"{\n            'app-text-primary app-of-nav-active-border' : activeSection === item.name,\n            'app-text-danger' : generalSectionsNames.familyInfo === item.name && activeSection !== item.name,\n            'app-text-success' : generalSectionsNames.parentsInfo === item.name && activeSection !== item.name\n            }\">\n          <a class=\"nav-link font-weight-bold app-cursor-pointer\"\n             (click)=\"setActiveSection(item.name)\">\n            {{item.title}}\n          </a>\n        </li>\n        <li [hidden]=\"i === sectionNames.length-1\" class=\"nav-item py-2 px-1\">\n          <a class=\"nav-link\">\n            <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\n          </a>\n        </li>\n      </ng-container>\n\n    </ul>\n  </div>\n</nav>"

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

module.exports = "<div class=\"row align-items-center pb-4\">\n  <div class=\"col-4\"></div>\n  <div class=\"col-4 text-center\">\n    <p class=\"app-text-extra-bold mb-0\">\n      {{'Parents Information' | uppercase}}\n    </p>\n    <p class=\"app-text-second app-text-small mb-0\">\n      <i class=\"far fa-clock fa-sm mr-1\"></i>\n      ~15 minutes\n    </p>\n  </div>\n  <div class=\"col-4 text-right\">\n    <button class=\"btn app-btn-outline-primary\">Add Parent</button>\n  </div>\n</div>\n\n<div class=\"app-of-general-info-section px-3 py-4\">\n\n  <!--General Fields-->\n  <div *ngIf=\"false && form\" class=\"row no-gutters\">\n    <ng-container *ngFor=\"let item of form.fields\">\n\n      <div *ngIf=\"item.type !== 113\" class=\"col-{{item.options.size}} p-2\">\n        <app-online-form-fields [field]=\"item\"></app-online-form-fields>\n      </div>\n\n      <div class=\"row no-gutters col-12\" *ngIf=\"item.type === 113\">\n        <div class=\"col-12\">\n          <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">{{item.name | uppercase}}</p>\n        </div>\n        <ng-container *ngFor=\"let groupField of item.fields\">\n          <div class=\"col-{{groupField.options.size}} px-2\">\n            <app-online-form-fields [field]=\"groupField\"></app-online-form-fields>\n          </div>\n        </ng-container>\n      </div>\n\n    </ng-container>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"row align-items-center pb-4\">\n  <div class=\"col-4\"></div>\n  <div class=\"col-4 text-center\">\n    <p class=\"app-text-extra-bold mb-0\">\n      {{'Student(s) Information' | uppercase}}\n    </p>\n    <p class=\"app-text-second app-text-small mb-0\">\n      <i class=\"far fa-clock fa-sm mr-1\"></i>\n      ~15 minutes\n    </p>\n  </div>\n  <div class=\"col-4 text-right\">\n    <button class=\"btn app-btn-outline-primary\">Add Student</button>\n  </div>\n</div>\n\n<div class=\"app-of-general-info-section px-3 py-4\">\n\n  <!--General Fields-->\n  <div class=\"row no-gutters\">\n\n    <div class=\"col-3 px-2\">\n      <div class=\"form-group app-input-container app-input-fill\">\n        <label for=\"firstName\" class=\"app-input-label\">First Name</label>\n        <input type=\"text\"\n               class=\"app-input form-control\"\n               id=\"firstName\"\n               placeholder=\"First Name\"\n               value=\"Charlotte\">\n      </div>\n    </div>\n\n    <div class=\"col-3 px-2\">\n      <div class=\"form-group app-input-container app-input-fill\">\n        <label for=\"lastName\" class=\"app-input-label\">Last Name</label>\n        <input type=\"text\"\n               class=\"app-input form-control\"\n               id=\"lastName\"\n               placeholder=\"Last Name\"\n               value=\"Jennings\">\n      </div>\n    </div>\n\n    <div class=\"col-3 px-2\">\n      <div class=\"form-group app-input-container app-input-fill\">\n        <label class=\"app-input-label\" for=\"grade\">Grade</label>\n        <select class=\"app-input\"\n                id=\"grade\">\n          <option [value]=\"'Grade 1'\"\n                  [selected]=\"true\">\n            {{'Grade 1'}}\n          </option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"col-3 px-2\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-8\">\n          <div class=\"form-group app-input-container app-input-fill mb-0\">\n            <label for=\"photo\" class=\"app-input-label\">Photo (optional)</label>\n            <input type=\"text\"\n                   class=\"app-input form-control\"\n                   id=\"photo\"\n                   placeholder=\"Photo (optional)\"\n                   value=\"Photo123871.jpg\">\n          </div>\n        </div>\n        <div class=\"col-4 d-flex align-items-center\">\n          <button class=\"btn app-btn-primary h-100\">Upload</button>\n          <i class=\"fas fa-trash ml-2 app-text-second\"></i>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n  <!--End General Fields-->\n\n  <!--MEDICAL INFO-->\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">MEDICAL INFORMATION</p>\n\n  <!--END MEDICAL INFO-->\n\n  <!--DOCTORS’S INFO-->\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">DOCTORS’S INFORMATION</p>\n\n  <!--End DOCTORS’S INFO-->\n\n\n  <!--DOCTOR’S ADDRESS-->\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">DOCTOR’S ADDRESS</p>\n\n  <!--END DOCTOR’S ADDRESS-->\n\n\n</div>\n"

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

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\n  General Information\n</p>\n\n<div class=\"app-of-wrap\">\n\n  <div class=\"row no-gutters align-items-center\">\n    <div class=\"col-12 app-of-nav-wrap\">\n      <app-general-info-nav (activeSectionEmitter)=\"onActiveSection($event)\"></app-general-info-nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters p-4\">\n    <div class=\"col-12\">\n      <app-general-info-students *ngIf=\"activeSection === generalSectionsNames.studentsInfo\">\n      </app-general-info-students>\n      <app-general-info-parents *ngIf=\"activeSection === generalSectionsNames.parentsInfo\"\n                                [form]=\"form\">\n      </app-general-info-parents>\n  </div>\n\n</div>\n"

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

module.exports = "<div class=\"app-of-menu-wrap\">\n  <ul class=\"list-group bg-white \">\n\n    <ng-container *ngFor=\"let item of menuItems\">\n    <li class=\"list-group-item app-cursor-pointer\"\n        [ngClass]=\"activeMenuItem === item.name ? 'app-of-menu-active' : ''\"\n        *ngIf=\"isShowMenuItem(item.name)\"\n        (click)=\"setActiveMenuItem(item.name)\">\n      <div class=\"row no-gutters align-items-center py-1\">\n        <div class=\"col-auto mr-2\">\n          <i class=\"fas fa-file-alt fa-lg app-of-menu-i\"\n             [ngClass]=\"activeMenuItem === item.name ? 'app-text-primary' : 'app-text-second'\"></i>\n        </div>\n        <div class=\"col\">\n          <p class=\"mb-0 app-text-extra-bold app-text-large\"\n             [ngClass]=\"activeMenuItem === item.name ? 'app-text-primary' : 'app-text-second'\">\n            {{item.title}}\n          </p>\n          <p class=\"mb-0 app-text-second app-text-small\">\n            <i class=\"far fa-clock fa-sm mr-1\"></i>\n            ~{{item.time}} minutes\n          </p>\n        </div>\n      </div>\n    </li>\n    </ng-container>\n\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-menu/online-form-menu.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-menu/online-form-menu.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-of-menu-wrap {\n  background-color: #ffffff;\n  border: 1px solid #E7E9EF;\n  border-radius: 3px; }\n\n.app-of-menu-i {\n  display: inline-block;\n  border-radius: 50%;\n  padding: 0.6em 0.7em;\n  background-color: #E4E7FF; }\n\n.app-of-menu-active {\n  border-left: 3px solid #4350a2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1tZW51L29ubGluZS1mb3JtLW1lbnUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksOEJDaEJ3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1tZW51L29ubGluZS1mb3JtLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnNcIjtcblxuLmFwcC1vZi1tZW51LXdyYXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U3RTlFRjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5hcHAtb2YtbWVudS1pIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDAuNmVtIDAuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEU3RkY7XG59XG5cbi5hcHAtb2YtbWVudS1hY3RpdmUge1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJGVsZW1lbnQtYmFzZS1jb2xvcjtcbn0iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

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

module.exports = "<div class=\"container-fluid row no-gutters py-2 align-items-center\">\n  <div class=\"col app-text-second\">{{formName | uppercase}}</div>\n  <div class=\"col text-right\">\n    <button class=\"btn app-btn-outline-primary px-5 mr-3\" (click)=\"onAction('cancel')\">Cancel</button>\n    <button class=\"btn app-btn-primary px-5\" (click)=\"onAction('save')\">Save & Exit</button>\n  </div>\n</div>"

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

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\n  Term & Conditions\n</p>\n<ng-container *ngIf=\"form.termsConditions?.termsConditionsItems?.length\">\n  <div class=\"app-of-wrap pb-4\">\n\n    <div *ngFor=\"let item of form.termsConditions.termsConditionsItems\" class=\"mb-3\">\n\n      <!--Title-->\n      <div class=\"row no-gutters align-items-center pt-4\">\n        <div class=\"col-12 text-center\">\n          <p class=\"app-text-extra-bold mb-0\">\n            {{item.title | uppercase}}\n          </p>\n        </div>\n      </div>\n\n      <!--Text-->\n      <div class=\"row no-gutters pt-4\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8\" [innerHTML]=\"item.text\"></div>\n        <div class=\"col-2\"></div>\n      </div>\n\n      <!--Checkbox-->\n      <div *ngIf=\"item.checkbox.isActive\" class=\"row no-gutters pt-4\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8\">\n          <label class=\"app-checkbox-container\"><span class=\"font-weight-bold\">{{item.checkbox.text}}</span>\n            <input type=\"checkbox\" [(ngModel)]=\"item.checkbox.checked\">\n            <span class=\"app-checkbox-checkmark\"></span>\n          </label>\n        </div>\n        <div class=\"col-2\"></div>\n      </div>\n\n    </div>\n\n    <!--SIGNATURE-->\n    <div *ngIf=\"signature?.isRequire\" class=\"mt-3\">\n\n      <!--E-SIGN SIGNATURE-->\n      <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.ESIGN\">\n\n        <!--EXTERNAL SIGNATURE-->\n        <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.EXTERNAL\">\n\n          <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8 app-consent-text\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n      <textarea class=\"app-consent-table w-100 pl-3\"\n                rows=\"2\"\n                placeholder=\"Parent's Signature\"></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-2\"></div>\n          </div>\n\n          <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8 app-consent-text\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n      <textarea class=\"app-consent-table w-100 pl-3\"\n                rows=\"2\"\n                placeholder=\"Father's Signature\"></textarea>\n                </div>\n                <div class=\"col-6\">\n      <textarea class=\"app-consent-table w-100 pl-3\"\n                rows=\"2\"\n                placeholder=\"Mother's Signature\"></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-2\"></div>\n          </div>\n\n          <div class=\"row no-gutters p-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\n            </div>\n          </div>\n\n        </ng-container>\n\n        <!--SYSTEM SIGNATURE-->\n        <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.SYSTEM\">\n\n          <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <label class=\"app-checkbox-container\">Parent's Signature\n                    <input type=\"checkbox\"\n                           [(ngModel)]=\"signature.signed.parents\"\n                           [disabled]=\"isDisabledSign('parents')\">\n                    <span class=\"app-checkbox-checkmark\"></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-2\"></div>\n          </div>\n\n          <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <label class=\"app-checkbox-container\">Father's Signature\n                    <input type=\"checkbox\"\n                           [(ngModel)]=\"signature.signed.fathers\"\n                           [disabled]=\"isDisabledSign('fathers')\">\n                    <span class=\"app-checkbox-checkmark\"></span>\n                  </label>\n                </div>\n                <div class=\"col-6\">\n                  <label class=\"app-checkbox-container\">Mother's Signature\n                    <input type=\"checkbox\"\n                           [(ngModel)]=\"signature.signed.mothers\"\n                           [disabled]=\"isDisabledSign('mothers')\">\n                    <span class=\"app-checkbox-checkmark\"></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-2\"></div>\n          </div>\n\n          <div class=\"row no-gutters p-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn app-btn-primary py-2 px-4\"\n                      (click)=\"onSystemSign()\">Accept\n              </button>\n            </div>\n          </div>\n\n        </ng-container>\n\n      </ng-container>\n\n      <!--WET SIGNATURE-->\n      <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.WET\">\n\n        <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\n          <div class=\"col-2\"></div>\n          <div class=\"col-8 app-consent-text\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n      <textarea class=\"app-consent-table w-100 pl-3\"\n                rows=\"2\"\n                placeholder=\"Parent's Signature\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-2\"></div>\n        </div>\n\n        <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\n          <div class=\"col-2\"></div>\n          <div class=\"col-8 app-consent-text\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n      <textarea class=\"app-consent-table w-100 pl-3\"\n                rows=\"2\"\n                placeholder=\"Father's Signature\"></textarea>\n              </div>\n              <div class=\"col-6\">\n      <textarea class=\"app-consent-table w-100 pl-3\"\n                rows=\"2\"\n                placeholder=\"Mother's Signature\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-2\"></div>\n        </div>\n\n        <div class=\"row no-gutters p-4\">\n          <div class=\"col-12 text-right\">\n            <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\n          </div>\n        </div>\n\n      </ng-container>\n\n    </div>\n    <!--END SIGNATURE-->\n\n  </div>\n\n  <div class=\"row no-gutters mt-4\">\n    <div class=\"col-12 text-right\">\n      <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\n      <button class=\"btn app-btn-primary py-2 px-4\">Save & Go Next Step</button>\n    </div>\n  </div>\n\n</ng-container>\n"

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
/* harmony import */ var _services_online_form_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/online-form/signatures/system-signature.service */ "./src/app/services/online-form/signatures/system-signature.service.ts");





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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_online_form_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
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

module.exports = "<p class=\"text-center app-text-extra-large app-text-extra-bold\">\n  Tuition Contract\n</p>\n<div class=\"app-of-wrap p-4\">\n\n  <!--Title-->\n  <div class=\"row no-gutters align-items-center mb-4\">\n    <div class=\"col-12 text-center\">\n      <p class=\"app-text-extra-bold mb-0\">\n        FEES CONTRACT\n      </p>\n    </div>\n  </div>\n\n  <!--Table-->\n  <div class=\"app-fb-tuition-table p-3\" *ngIf=\"form.tuitionContract.splitBy === TUITION_CONTRACT_SPLIT_TYPES.STUDENT\">\n    <app-tuition-contract-by-student [tuitionContract]=\"form.tuitionContract\"></app-tuition-contract-by-student>\n  </div>\n  <div class=\"row no-gutters\" *ngIf=\"form.tuitionContract.splitBy === TUITION_CONTRACT_SPLIT_TYPES.FEE\">\n    <div class=\"col-2\"></div>\n    <div class=\"col-8\">\n      <app-tuition-contract-by-fee [tuitionContract]=\"form.tuitionContract\"></app-tuition-contract-by-fee>\n    </div>\n    <div class=\"col-2\"></div>\n  </div>\n\n\n  <!--Text-->\n  <div class=\"row no-gutters mt-4\">\n    <div class=\"col-2\"></div>\n    <div class=\"col-8\" [innerHTML]=\"form.tuitionContract.text\"></div>\n    <div class=\"col-2\"></div>\n  </div>\n\n  <!--SIGNATURE-->\n  <div *ngIf=\"signature?.isRequire\" class=\"mt-3\">\n\n    <!--E-SIGN SIGNATURE-->\n    <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.ESIGN\">\n\n      <!--EXTERNAL SIGNATURE-->\n      <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.EXTERNAL\">\n\n        <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\n          <div class=\"col-2\"></div>\n          <div class=\"col-8 app-consent-text\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n  <textarea class=\"app-consent-table w-100 pl-3\"\n            rows=\"2\"\n            placeholder=\"Parent's Signature\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-2\"></div>\n        </div>\n\n        <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\n          <div class=\"col-2\"></div>\n          <div class=\"col-8 app-consent-text\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n  <textarea class=\"app-consent-table w-100 pl-3\"\n            rows=\"2\"\n            placeholder=\"Father's Signature\"></textarea>\n              </div>\n              <div class=\"col-6\">\n  <textarea class=\"app-consent-table w-100 pl-3\"\n            rows=\"2\"\n            placeholder=\"Mother's Signature\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-2\"></div>\n        </div>\n\n        <div class=\"row no-gutters p-4\">\n          <div class=\"col-12 text-right\">\n            <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\n          </div>\n        </div>\n\n      </ng-container>\n\n      <!--SYSTEM SIGNATURE-->\n      <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.SYSTEM\">\n\n        <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\n          <div class=\"col-2\"></div>\n          <div class=\"col-8\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <label class=\"app-checkbox-container\">Parent's Signature\n                  <input type=\"checkbox\"\n                         [(ngModel)]=\"signature.signed.parents\"\n                         [disabled]=\"isDisabledSign('parents')\">\n                  <span class=\"app-checkbox-checkmark\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-2\"></div>\n        </div>\n\n        <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\n          <div class=\"col-2\"></div>\n          <div class=\"col-8\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <label class=\"app-checkbox-container\">Father's Signature\n                  <input type=\"checkbox\"\n                         [(ngModel)]=\"signature.signed.fathers\"\n                         [disabled]=\"isDisabledSign('fathers')\">\n                  <span class=\"app-checkbox-checkmark\"></span>\n                </label>\n              </div>\n              <div class=\"col-6\">\n                <label class=\"app-checkbox-container\">Mother's Signature\n                  <input type=\"checkbox\"\n                         [(ngModel)]=\"signature.signed.mothers\"\n                         [disabled]=\"isDisabledSign('mothers')\">\n                  <span class=\"app-checkbox-checkmark\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-2\"></div>\n        </div>\n\n        <div class=\"row no-gutters p-4\">\n          <div class=\"col-12 text-right\">\n            <button class=\"btn app-btn-primary py-2 px-4\"\n                    (click)=\"onSystemSign()\">Accept\n            </button>\n          </div>\n        </div>\n\n      </ng-container>\n\n    </ng-container>\n\n    <!--WET SIGNATURE-->\n    <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.WET\">\n\n      <div class=\"row no-gutters pt-3\" *ngIf=\"!signature.isBothParents\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8 app-consent-text\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n  <textarea class=\"app-consent-table w-100 pl-3\"\n            rows=\"2\"\n            placeholder=\"Parent's Signature\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-2\"></div>\n      </div>\n\n      <div class=\"row no-gutters pt-3\" *ngIf=\"signature.isBothParents\">\n        <div class=\"col-2\"></div>\n        <div class=\"col-8 app-consent-text\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n  <textarea class=\"app-consent-table w-100 pl-3\"\n            rows=\"2\"\n            placeholder=\"Father's Signature\"></textarea>\n            </div>\n            <div class=\"col-6\">\n  <textarea class=\"app-consent-table w-100 pl-3\"\n            rows=\"2\"\n            placeholder=\"Mother's Signature\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-2\"></div>\n      </div>\n\n      <div class=\"row no-gutters p-4\">\n        <div class=\"col-12 text-right\">\n          <button class=\"btn app-btn-primary py-2 px-4\">Accept</button>\n        </div>\n      </div>\n\n    </ng-container>\n\n  </div>\n  <!--END SIGNATURE-->\n\n\n</div>\n\n<div class=\"row no-gutters mt-4\">\n  <div class=\"col-12 text-right\">\n    <button class=\"btn app-btn-outline-primary py-2 px-4 mr-3\">Cancel</button>\n    <button class=\"btn app-btn-primary py-2 px-4\">Save & Go Next Step</button>\n  </div>\n</div>\n"

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
/* harmony import */ var _services_online_form_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/online-form/signatures/system-signature.service */ "./src/app/services/online-form/signatures/system-signature.service.ts");





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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_online_form_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
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

module.exports = "<table class=\"table\">\n  <thead>\n  <tr class=\"app-tuition-table-header\">\n    <th scope=\"col\">FEES</th>\n    <th scope=\"col\">FEE AMOUNT</th>\n  </tr>\n  </thead>\n  <tbody>\n  <ng-container *ngFor=\"let item of tuitionContract.fees; let i = index\">\n    <tr *ngIf=\"item.isActive\">\n      <td class=\"font-weight-bold\">{{item.name}}</td>\n      <td>${{tempFees[i] || tempFees[0]}}</td>\n    </tr>\n  </ng-container>\n  <tr class=\"app-tuition-table-total font-weight-bold\">\n    <td>BUILDING FEE</td>\n    <td>$1000</td>\n  </tr>\n  <tr class=\"app-tuition-table-total font-weight-bold\">\n    <td>SECURITY FEE</td>\n    <td>$520</td>\n  </tr>\n  <tr class=\"app-tuition-table-total font-weight-bold\">\n    <td>Tuition and Family Fees Total</td>\n    <td>$21160</td>\n  </tr>\n  </tbody>\n</table>\n\n"

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

module.exports = "<table class=\"table\">\n  <thead>\n  <tr class=\"app-tuition-table-header\">\n    <th></th>\n    <th scope=\"col\">\n      CHARLOTTE SIMON\n      <br><span class=\"font-weight-normal\">1st grade</span>\n    </th>\n    <th scope=\"col\">\n      LUELLA SIMON\n      <br><span class=\"font-weight-normal\">1st grade</span>\n    </th>\n    <th scope=\"col\">\n      KEITH SIMON\n      <br><span class=\"font-weight-normal\">1st grade</span>\n    </th>\n    <th scope=\"col\" class=\"app-th-align-reset\">FEE TOTAL</th>\n  </tr>\n  </thead>\n  <tbody>\n  <ng-container *ngFor=\"let item of tuitionContract.fees\">\n    <tr *ngIf=\"item.isActive\">\n      <td class=\"font-weight-bold\">{{item.name}}</td>\n      <td>$200<br>\n        <ng-container *ngIf=\"item.isActiveDiscount\">\n          <span class=\"app-tuition-discount\">$90 discount</span>\n        </ng-container>\n      </td>\n      <td>$200</td>\n      <td>$200</td>\n      <td>$600</td>\n    </tr>\n  </ng-container>\n  <tr class=\"app-tuition-table-total-2 font-weight-bold\">\n    <td>TOTAL PER STUDENTS</td>\n    <td>$1000</td>\n    <td>$1000</td>\n    <td>$1000</td>\n    <td>$3500</td>\n  </tr>\n  <tr class=\"app-tuition-table-total font-weight-bold\">\n    <td>BUILDING FEE</td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td>$1000</td>\n  </tr>\n  <tr class=\"app-tuition-table-total font-weight-bold\">\n    <td>SECURITY FEE</td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td>$4500</td>\n  </tr>\n  <tr class=\"app-tuition-table-total font-weight-bold\">\n    <td>Tuition and Family Fees Total</td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td>$4500</td>\n  </tr>\n  </tbody>\n</table>\n\n\n"

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

module.exports = ".app-of-background {\n    background-color: #F8F8FA!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS12aWV3L29ubGluZS1mb3JtLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25saW5lLWZvcm0vb25saW5lLWZvcm0tdmlldy9vbmxpbmUtZm9ybS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW9mLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4RkEhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/online-form/online-form-view/online-form-view.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/online-form/online-form-view/online-form-view.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"form\">\n  <app-online-form-nav [formName]=\"form?.name\" (actionEmitter)=\"onAction($event)\"></app-online-form-nav>\n  <div class=\"container-fluid app-of-background min-vh-100 py-4\">\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <app-online-form-menu [form]=\"form\" (activeMenuItemEmitter)=\"onActiveMenuItem($event)\"></app-online-form-menu>\n      </div>\n      <div class=\"col-9\">\n        <app-online-form-general-info *ngIf=\"activeSection === mainMenuNames.generalInfo\"\n                                      [form]=\"form\">\n        </app-online-form-general-info>\n        <app-online-form-documents-forms [form]=\"form\" *ngIf=\"activeSection === mainMenuNames.documentsForms\"></app-online-form-documents-forms>\n        <app-online-form-consent [form]=\"form\" *ngIf=\"activeSection === mainMenuNames.consentInfo\"></app-online-form-consent>\n        <app-online-form-terms-conditions [form]=\"form\" *ngIf=\"activeSection === mainMenuNames.termsConditions\"></app-online-form-terms-conditions>\n        <app-online-form-tuition-contract [form]=\"form\" *ngIf=\"activeSection === mainMenuNames.tuitionContract\"></app-online-form-tuition-contract>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<div *ngIf=\"!form\" class=\"row min-vh-100 align-items-center\">\n  <div class=\"col-12 text-center\">\n    <div class=\"spinner-border text-warning\" style=\"width: 4em; height: 4em;\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _online_form_fields_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./online-form-fields/fields/time-field/time-field.component */ "./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.ts");
/* harmony import */ var _online_form_fields_fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./online-form-fields/fields/short-text-field/short-text-field.component */ "./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./online-form-fields/fields/phone-number-field/phone-number-field.component */ "./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts");
/* harmony import */ var _online_form_fields_fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./online-form-fields/fields/number-text-field/number-text-field.component */ "./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./online-form-fields/fields/multiple-options-field/multiple-options-field.component */ "./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _online_form_fields_fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./online-form-fields/fields/long-text-field/long-text-field.component */ "./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./online-form-fields/fields/label-field/label-field.component */ "./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.ts");
/* harmony import */ var _online_form_fields_fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./online-form-fields/fields/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _online_form_fields_fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./online-form-fields/fields/empty-line-field/empty-line-field.component */ "./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _online_form_fields_fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./online-form-fields/fields/email-field/email-field.component */ "./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.ts");
/* harmony import */ var _online_form_fields_fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./online-form-fields/fields/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _online_form_fields_fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./online-form-fields/fields/date-time-field/date-time-field.component */ "./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts");
/* harmony import */ var _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/field-content.directive */ "./src/app/modules/online-form/directives/field-content.directive.ts");
/* harmony import */ var _online_form_fields_entryComponents__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./online-form-fields/entryComponents */ "./src/app/modules/online-form/online-form-fields/entryComponents.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _online_form_consent_online_form_consent_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./online-form-consent/online-form-consent.component */ "./src/app/modules/online-form/online-form-consent/online-form-consent.component.ts");
/* harmony import */ var _online_form_consent_consent_nav_consent_nav_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./online-form-consent/consent-nav/consent-nav.component */ "./src/app/modules/online-form/online-form-consent/consent-nav/consent-nav.component.ts");
/* harmony import */ var _services_online_form_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./../../services/online-form/signatures/system-signature.service */ "./src/app/services/online-form/signatures/system-signature.service.ts");
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
                _online_form_fields_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_13__["TimeFieldComponent"],
                _online_form_fields_fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_14__["ShortTextFieldComponent"],
                _online_form_fields_fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_15__["PhoneNumberFieldComponent"],
                _online_form_fields_fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_16__["NumberTextFieldComponent"],
                _online_form_fields_fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_17__["MultipleOptionsFieldComponent"],
                _online_form_fields_fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_18__["LongTextFieldComponent"],
                _online_form_fields_fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_19__["LabelFieldComponent"],
                _online_form_fields_fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_20__["HebrewDateFieldComponent"],
                _online_form_fields_fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_21__["EmptyLineFieldComponent"],
                _online_form_fields_fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_22__["EmailFieldComponent"],
                _online_form_fields_fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_23__["DropDownListFieldComponent"],
                _online_form_fields_fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_24__["DateTimeFieldComponent"],
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
            providers: [_services_online_form_service__WEBPACK_IMPORTED_MODULE_8__["OnlineFormService"], _services_online_form_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_31__["SystemSignatureService"]],
            entryComponents: [_online_form_fields_entryComponents__WEBPACK_IMPORTED_MODULE_26__["entryComponents"]],
        })
    ], OnlineFormModule);
    return OnlineFormModule;
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
/* harmony import */ var _online_form_fields_fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../online-form-fields/fields/short-text-field/short-text-field.component */ "./src/app/modules/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../online-form-fields/fields/long-text-field/long-text-field.component */ "./src/app/modules/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../online-form-fields/fields/number-text-field/number-text-field.component */ "./src/app/modules/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../online-form-fields/fields/multiple-options-field/multiple-options-field.component */ "./src/app/modules/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _online_form_fields_fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../online-form-fields/fields/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _online_form_fields_fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../online-form-fields/fields/date-time-field/date-time-field.component */ "./src/app/modules/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts");
/* harmony import */ var _online_form_fields_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../online-form-fields/fields/time-field/time-field.component */ "./src/app/modules/online-form/online-form-fields/fields/time-field/time-field.component.ts");
/* harmony import */ var _online_form_fields_fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../online-form-fields/fields/email-field/email-field.component */ "./src/app/modules/online-form/online-form-fields/fields/email-field/email-field.component.ts");
/* harmony import */ var _online_form_fields_fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../online-form-fields/fields/phone-number-field/phone-number-field.component */ "./src/app/modules/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts");
/* harmony import */ var _online_form_fields_fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../online-form-fields/fields/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _online_form_fields_fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../online-form-fields/fields/label-field/label-field.component */ "./src/app/modules/online-form/online-form-fields/fields/label-field/label-field.component.ts");
/* harmony import */ var _online_form_fields_fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../online-form-fields/fields/empty-line-field/empty-line-field.component */ "./src/app/modules/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");

















var OnlineFormService = /** @class */ (function () {
    function OnlineFormService(http) {
        this.http = http;
        this.componentFieldsMap = new Map([
            [101, _online_form_fields_fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_4__["ShortTextFieldComponent"]],
            [102, _online_form_fields_fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_5__["LongTextFieldComponent"]],
            [103, _online_form_fields_fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_6__["NumberTextFieldComponent"]],
            [104, _online_form_fields_fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_7__["MultipleOptionsFieldComponent"]],
            [105, _online_form_fields_fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_8__["DropDownListFieldComponent"]],
            [106, _online_form_fields_fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_9__["DateTimeFieldComponent"]],
            [107, _online_form_fields_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__["TimeFieldComponent"]],
            [108, _online_form_fields_fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_11__["EmailFieldComponent"]],
            [109, _online_form_fields_fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_12__["PhoneNumberFieldComponent"]],
            [110, _online_form_fields_fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_13__["HebrewDateFieldComponent"]],
            [111, _online_form_fields_fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_14__["LabelFieldComponent"]],
            [112, _online_form_fields_fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_15__["EmptyLineFieldComponent"]]
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

/***/ "./src/app/modules/vertical-data-collection/online-form/directives/field-content.directive.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/directives/field-content.directive.ts ***!
  \****************************************************************************************************/
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

/***/ "./src/app/modules/vertical-data-collection/online-form/model/general-info-section-name.model.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/model/general-info-section-name.model.ts ***!
  \*******************************************************************************************************/
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

/***/ "./src/app/modules/vertical-data-collection/online-form/model/main-menu-name.model.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/model/main-menu-name.model.ts ***!
  \********************************************************************************************/
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

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-consent/online-form-consent.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-consent/online-form-consent.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content_section__page_title\">\n  Consent\n</h1>\n<!-- Content Nav -->\n<div class=\"content_section__nav\">\n  <app-content-nav\n    [content]=\"form.consentInfo.consents\"\n    (activeEmitter)=\"onActiveConsent($event)\"\n  ></app-content-nav>\n</div>\n<div class=\"app-of-wrap content_section__main\">\n  \n  <ng-container *ngFor=\"let item of consents\">\n    <div *ngIf=\"item.id === activeConsentId\">\n      <!--Title-->\n      <h2 class=\"content_section__article_title\">\n        {{ item.title }}\n      </h2>\n      <!--SubTitle-->\n      <h3 class=\"content_section__article_sub_title\">\n        <i class=\"far fa-clock fa-sm mr-1\"></i>\n        ~15 minutes\n      </h3>\n\n\n      <!--Text-->\n      <article class=\"content_section__article\">\n        <div\n          class=\"content_section__article_text\"\n          [innerHTML]=\"item.text.value\"\n        ></div>\n      </article>\n\n      \n      <!--Checkbox-->\n      <div\n        *ngIf=\"item.checkbox.isActive\"\n        class=\"content_section__additional_fields\"\n      >\n        <div class=\"content_section__inputs_container\">\n          <div class=\"content_section__checkbox_container p-0\">\n            <input\n              class=\"content_section__checkbox\"\n              type=\"checkbox\"\n              id=\"item.checkbox.id\"\n              [(ngModel)]=\"item.checkbox.checked\"\n              [disabled]=\"true\"\n            />\n\n            <label\n              tabindex=\"indexItem\"\n              for=\"item.id\"\n              class=\"content_section__checkbox_label py-0\"\n            >\n              <span\n                class=\"app-checkbox-checkmark\n                  content_section__checkbox_checkmark\"\n              ></span>\n              {{ item.checkbox.text }}\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <!--SIGNATURE-->\n      <app-online-form-signatures\n        [signature]=\"item.signature\"\n      ></app-online-form-signatures>\n      <!--END SIGNATURE-->\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-consent/online-form-consent.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-consent/online-form-consent.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1jb25zZW50L29ubGluZS1mb3JtLWNvbnNlbnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9zdHlsZXMvaW5kZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUUzQjtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlLEVBQUE7QUFHakI7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtBQUViO01BQ0UsZ0JBQWdCLEVBQUE7QUFJcEI7SUFDRSxjQ1BnQjtJRFFoQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUVsQjtNQUNFLGtCQUFrQixFQUFBO0FBSXRCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUdsQjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFHakI7SUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7QUFHZjtJQUNFLHlCQy9FNEI7SURnRjVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUxoQjtNQVFHLHlCQ3RGMEIsRUFBQTtBRDhFN0I7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFJeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkIsRUFBQTtBQUc3QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7QUFIbkI7TUFNRyx5QkMzRzBCLEVBQUE7QUQrRzlCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFWbkI7TUFhRyxlQUFlLEVBQUE7QUFJbkI7SUFDRSx5QkNqSTRCO0lEa0k1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQUpoQjtNQU9HLGVBQWUsRUFBQTtBQUtyQjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWNvbnNlbnQvb25saW5lLWZvcm0tY29uc2VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZS0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogIzkwOTA5MDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0LS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcms6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAmX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICAmX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICZfX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXG5cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gIH1cblxuICAmX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICB9XG5cbiAgJl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBtaW4taGVpZ2h0OiA5MHZoO1xuICAvLyBtaW4td2lkdGg6IDkwdnc7IFxuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-consent/online-form-consent.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-consent/online-form-consent.component.ts ***!
  \*******************************************************************************************************************/
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
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/vertical-data-collection/online-form/services/signatures/system-signature.service.ts");





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
            template: __webpack_require__(/*! ./online-form-consent.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-consent/online-form-consent.component.html"),
            styles: [__webpack_require__(/*! ./online-form-consent.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-consent/online-form-consent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormConsentComponent);
    return OnlineFormConsentComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let document of form.documents\" class=\"mb-3\">\n  <!--Title-->\n  <h2\n    class=\"content_section__article_title content_section__article_title--left\"\n  >\n    {{ document.name }}\n  </h2>\n\n  <div\n    class=\"content_section__article_text\"\n    [innerHTML]=\"document.accompanyingText.data\"\n  ></div>\n\n  <div class=\"document_container\">\n    <!-- {{ document| json }} -->\n    <div class=\"document_container__icon_container\">\n      <i class=\"far fa-file-pdf fa-3x document_container__pdf_icon\"></i>\n    </div>\n    <ng-container *ngIf=\"document.isUpload\">\n      <div class=\"document_container__file_information\">\n        <span>Choose file...</span>\n      </div>\n      <div class=\"document_container__load\">\n        <button class=\"btn app-btn-primary form-control\">\n          Upload Document\n        </button>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"!document.isUpload\">\n      <div\n        class=\"document_container__file_information\"\n        (click)=\"openForPreview(document)\"\n      >\n        <span>{{ form.attachments[document.data].name }}</span>\n        <span class=\"document_container__file_details\">230KB (2 pages)</span>\n      </div>\n      <div class=\"document_container__load\">\n        <!-- <button\n          class=\"btn app-btn-primary form-control text-nowrap\"\n          (click)=\"downloadFile(document)\"\n        ></button> -->\n        <button\n          class=\"btn app-btn-primary form-control text-nowrap\"\n          (click)=\"openForPreview(document)\"\n        >\n          Download Document\n        </button>\n      </div>\n    </ng-container>\n  </div>\n  <hr />\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n.document_container {\n  align-items: stretch;\n  border-radius: 3px;\n  background-color: #f6f6f6;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  margin-bottom: 0.25rem;\n  margin-top: 0.25rem;\n  padding: 1rem; }\n@media (min-width: 768px) {\n    .document_container {\n      align-items: center;\n      flex-direction: row;\n      justify-content: flex-start; } }\n.document_container__icon_container {\n    display: flex;\n    flex: initial;\n    justify-content: center; }\n.document_container__pdf_icon {\n    color: #A4A8BE; }\n.document_container__file_information {\n    align-items: center;\n    color: #4350a2;\n    cursor: pointer;\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    font-weight: bold;\n    padding: 0 1rem; }\n@media (min-width: 768px) {\n      .document_container__file_information {\n        align-items: flex-start; } }\n.document_container__load {\n    flex: initial; }\n.document_container__file_details {\n    color: #909090;\n    font-family: \"NunitoSans-Regular\";\n    font-size: 0.85rem; }\n.app-btn-primary {\n  color: white;\n  outline: 0 solid transparent; }\n.app-btn-primary:hover, .app-btn-primary:focus, .app-btn-primary:active {\n    background-color: #4350a2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1kb2N1bWVudHMtZm9ybXMvb25saW5lLWRvY3VtZW50cy9vbmxpbmUtZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvc3R5bGVzL2luZGV4LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1kb2N1bWVudHMvb25saW5lLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7Ozs7O0VDQUU7QUNIRjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBO0FBRTNCO0lBQ0UsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0FBR3BCO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGVBQWUsRUFBQTtBQUdqQjtJQUNFLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0FBRWI7TUFDRSxnQkFBZ0IsRUFBQTtBQUlwQjtJQUNFLGNDUGdCO0lEUWhCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVyxFQUFBO0FBR2I7SUFDRSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0FBRWxCO01BQ0Usa0JBQWtCLEVBQUE7QUFJdEI7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0FBR2xCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWUsRUFBQTtBQUdqQjtJQUNFLHNCQUFzQixFQUFBO0FBR3hCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGFBQWEsRUFBQTtBQUdmO0lBQ0UseUJDL0U0QjtJRGdGNUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0FBTGhCO01BUUcseUJDdEYwQixFQUFBO0FEOEU3QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFadkI7TUFZRyxvQkFBb0IsRUFBQTtBQUl4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJCQUEyQixFQUFBO0FBRzdCO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0IsRUFBQTtBQUhuQjtNQU1HLHlCQzNHMEIsRUFBQTtBRCtHOUI7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtBQVZuQjtNQWFHLGVBQWUsRUFBQTtBQUluQjtJQUNFLHlCQ2pJNEI7SURrSTVCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0FBSmhCO01BT0csZUFBZSxFQUFBO0FBS3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFHbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTSxFQUFBO0FFOUtSO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBO0FDZ0RYO0lEMURKO01BYUksbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQiwyQkFBMkIsRUFBQSxFQXFDOUI7QUFsQ0M7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QixFQUFBO0FBR3pCO0lBQ0UsY0RVMEIsRUFBQTtBQ1A1QjtJQUNFLG1CQUFtQjtJQUNuQixjRGhDd0I7SUNpQ3hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0FDc0JmO01EOUJGO1FBV0ksdUJBQXVCLEVBQUEsRUFFMUI7QUFFRDtJQUNFLGFBQWEsRUFBQTtBQUdmO0lBQ0UsY0RYZ0I7SUNZaEIsaUNBQWlDO0lBQ2pDLGtCQUFrQixFQUFBO0FBSXRCO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QixFQUFBO0FBRjlCO0lBT0kseUJEL0R3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1kb2N1bWVudHMvb25saW5lLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZS0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogIzkwOTA5MDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0LS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcms6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDsgfVxuXG4uZG9jdW1lbnRfY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZzogMXJlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuZG9jdW1lbnRfY29udGFpbmVyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9IH1cbiAgLmRvY3VtZW50X2NvbnRhaW5lcl9faWNvbl9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogaW5pdGlhbDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuZG9jdW1lbnRfY29udGFpbmVyX19wZGZfaWNvbiB7XG4gICAgY29sb3I6ICNBNEE4QkU7IH1cbiAgLmRvY3VtZW50X2NvbnRhaW5lcl9fZmlsZV9pbmZvcm1hdGlvbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzQzNTBhMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiBhdXRvO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMCAxcmVtOyB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAuZG9jdW1lbnRfY29udGFpbmVyX19maWxlX2luZm9ybWF0aW9uIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH0gfVxuICAuZG9jdW1lbnRfY29udGFpbmVyX19sb2FkIHtcbiAgICBmbGV4OiBpbml0aWFsOyB9XG4gIC5kb2N1bWVudF9jb250YWluZXJfX2ZpbGVfZGV0YWlscyB7XG4gICAgY29sb3I6ICM5MDkwOTA7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvU2Fucy1SZWd1bGFyXCI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XG5cbi5hcHAtYnRuLXByaW1hcnkge1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IDAgc29saWQgdHJhbnNwYXJlbnQ7IH1cbiAgLmFwcC1idG4tcHJpbWFyeTpob3ZlciwgLmFwcC1idG4tcHJpbWFyeTpmb2N1cywgLmFwcC1idG4tcHJpbWFyeTphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzUwYTI7IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2luZGV4LnNjc3NcIjtcblxuLmNvbnRlbnRfc2VjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgJl9fcGFnZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX19uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAmLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgJl9fYXJ0aWNsZV9zdWJfdGl0bGUge1xuICAgIGNvbG9yOiAkZ3JheS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxuXG4gICZfX2FydGljbGUge1xuICAgIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAmX19hcnRpY2xlX3RleHQge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyBcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IFxuXG4gICAgJi0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19hZGRpdGlvbmFsX2ZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICB9XG5cbiAgJl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgfVxuXG4gICZfX2lucHV0c19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAmX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW07XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICZfX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2NoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLnNwaW5uZXJfYm94IHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbWluLWhlaWdodDogOTB2aDtcbiAgLy8gbWluLXdpZHRoOiA5MHZ3OyBcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuIiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcbiRlbGVtZW50LXNlY29uZC1jb2xvcjogIzlmYTZjYjtcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XG4kZWxlbWVudC1kYW5nZXItY29sb3I6IHJlZDtcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcblxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcbiR3aGl0ZTogI2ZmZjtcbiRiYWNrZ3JvdW5kLWRpc2FibGVkLWNvbG9yOiAjY2VkNGRhO1xuXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcblxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XG5cbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcbiRyZWQtY29sb3I6ICNmYzY0Njc7XG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XG5cbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XG5cbiRpY29uLWRhcmstZ3JheS1jb2xvcjogI0E0QThCRTtcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xuXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7IiwiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG4uZG9jdW1lbnRfY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICZfX2ljb25fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IGluaXRpYWw7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmX19wZGZfaWNvbiB7XG4gICAgY29sb3I6ICRpY29uLWRhcmstZ3JheS1jb2xvcjtcbiAgfVxuXG4gICZfX2ZpbGVfaW5mb3JtYXRpb24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICRlbGVtZW50LWJhc2UtY29sb3I7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gICZfX2xvYWQge1xuICAgIGZsZXg6IGluaXRpYWw7XG4gIH1cblxuICAmX19maWxlX2RldGFpbHMge1xuICAgIGNvbG9yOiAkZ3JheS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLVJlZ3VsYXJcIjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbn1cblxuLmFwcC1idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogMCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGVsZW1lbnQtYmFzZS1jb2xvcjtcbiAgfVxufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: OnlineDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineDocumentsComponent", function() { return OnlineDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/files.service */ "./src/app/modules/vertical-data-collection/online-form/services/files.service.ts");



var OnlineDocumentsComponent = /** @class */ (function () {
    function OnlineDocumentsComponent(fileService) {
        this.fileService = fileService;
    }
    OnlineDocumentsComponent.prototype.ngOnInit = function () {
        // console.log(this);
    };
    //FIXME: download instead open
    OnlineDocumentsComponent.prototype.openForPreview = function (document) {
        if (!document.data)
            return;
        window.open(this.form.attachments[document.data].link, "_self");
    };
    //FIXME: from server 200, but ok=false
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
            selector: "app-online-documents",
            template: __webpack_require__(/*! ./online-documents.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.html"),
            styles: [__webpack_require__(/*! ./online-documents.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"]])
    ], OnlineDocumentsComponent);
    return OnlineDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content_section__page_title\">\n  Documents & Forms\n</h1>\n<!-- Content Nav -->\n<div class=\"content_section__nav\">\n  <app-content-nav\n    [content]=\"navContent\"\n    (activeEmitter)=\"onActive($event)\"\n  ></app-content-nav>\n</div>\n<div class=\"app-of-wrap content_section__main\">\n  <div>\n    <app-online-documents\n      *ngIf=\"activeId == 'documents'\"\n      [form]=\"form\"\n    ></app-online-documents>\n    <app-online-pdf-forms\n      *ngIf=\"activeId == 'pdf-forms'\"\n      [form]=\"form\"\n    ></app-online-pdf-forms>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1kb2N1bWVudHMtZm9ybXMvb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvc3R5bGVzL2luZGV4LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7Ozs7RUNBRTtBQ0hGO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7QUFFM0I7SUFDRSxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0FBR2I7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZSxFQUFBO0FBR2pCO0lBQ0UsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7QUFFYjtNQUNFLGdCQUFnQixFQUFBO0FBSXBCO0lBQ0UsY0NQZ0I7SURRaEIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0FBR3BCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFFbEI7TUFDRSxrQkFBa0IsRUFBQTtBQUl0QjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7QUFHbEI7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZSxFQUFBO0FBR2pCO0lBQ0Usc0JBQXNCLEVBQUE7QUFHeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsYUFBYSxFQUFBO0FBR2Y7SUFDRSx5QkMvRTRCO0lEZ0Y1QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7QUFMaEI7TUFRRyx5QkN0RjBCLEVBQUE7QUQ4RTdCO01BWUcsb0JBQW9CLEVBQUE7QUFadkI7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBSXhCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMkJBQTJCLEVBQUE7QUFHN0I7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQixFQUFBO0FBSG5CO01BTUcseUJDM0cwQixFQUFBO0FEK0c5QjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0FBVm5CO01BYUcsZUFBZSxFQUFBO0FBSW5CO0lBQ0UseUJDakk0QjtJRGtJNUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7QUFKaEI7TUFPRyxlQUFlLEVBQUE7QUFLckI7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtFQUdsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1kb2N1bWVudHMtZm9ybXMvb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9icy9pbmRleC5zY3NzJztcblxuJG1haW4tbWVudS13aWR0aDogNTVweDtcbiR0b3AtbWVudS1oZWlnaHQ6IDQwcHg7XG5cbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuXG4vLyAgRXhhbXBsZTogXG4vLyAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHsgXG4vLyAgICAgICAgICBcbi8vICAgICAgfVxuICIsIi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuLmNvbnRlbnRfc2VjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fcGFnZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RpdGxlLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV9zdWJfdGl0bGUge1xuICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGUge1xuICAgIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IGF1dG87IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYWRkaXRpb25hbF9maWVsZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2J1dHRvbiB7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19pbnB1dHNfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC4ycmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWE6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveDpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfbGFiZWw6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyazpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnNwaW5uZXJfYm94IHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9pbmRleC5zY3NzXCI7XG5cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICZfX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9fbWFpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gICZfX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgJi0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gICZfX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogJGdyYXktY29sb3I7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgJl9fYXJ0aWNsZV90ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgXG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyBcblxuICAgICYtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fYWRkaXRpb25hbF9maWVsZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgfVxuXG4gICZfX2NvbnRyb2xzX2NvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIH1cblxuICAmX19pbnB1dHNfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgJl9fdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC4ycmVtO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmX19jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfbGFiZWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWluLXdpZHRoOiAxcmVtO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIC8vIG1pbi13aWR0aDogOTB2dzsgXG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: OnlineFormDocumentsFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormDocumentsFormsComponent", function() { return OnlineFormDocumentsFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlineFormDocumentsFormsComponent = /** @class */ (function () {
    function OnlineFormDocumentsFormsComponent() {
        this.navContent = [
            {
                id: "documents",
                title: "Documents for Parents"
            },
            {
                id: "pdf-forms",
                title: "School Forms"
            }
        ];
        this.activeId = "documents";
    }
    OnlineFormDocumentsFormsComponent.prototype.ngOnInit = function () {
        // console.log(this.form);
    };
    OnlineFormDocumentsFormsComponent.prototype.logWhatIWant = function () {
        console.log(this.form.forms[0].form);
    };
    OnlineFormDocumentsFormsComponent.prototype.onActive = function (id) {
        this.activeId = id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormDocumentsFormsComponent.prototype, "form", void 0);
    OnlineFormDocumentsFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-online-form-documents-forms",
            template: __webpack_require__(/*! ./online-form-documents-forms.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.html"),
            styles: [__webpack_require__(/*! ./online-form-documents-forms.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormDocumentsFormsComponent);
    return OnlineFormDocumentsFormsComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let pdf of form.forms; let indexPdf = index\">\n  <!--Title-->\n  <h2 class=\"content_section__article_title\">\n    {{ pdf.name }}\n  </h2>\n\n  <!--SubTitle-->\n  <h3 class=\"content_section__article_sub_title\">\n    <i class=\"far fa-clock fa-sm mr-1\"></i>\n    ~15 minutes\n  </h3>\n\n  <!--Text-->\n  <div\n    class=\"content_section__article_text content_section__article_text--center text_center_max_w\"\n    [innerHTML]=\"pdf.accompanyingText.data\"\n  ></div>\n\n  <!-- PDF Loader -->\n  <app-pdf-loader [pdf]=\"pdf\"></app-pdf-loader>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n.pdf_container {\n  display: flex;\n  justify-content: center;\n  padding-top: 2rem; }\n.text_center_max_w {\n  margin: 0 auto;\n  max-width: 54rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1kb2N1bWVudHMtZm9ybXMvb25saW5lLXBkZi1mb3Jtcy9vbmxpbmUtcGRmLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvc3R5bGVzL2luZGV4LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1wZGYtZm9ybXMvb25saW5lLXBkZi1mb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7Ozs7RUNBRTtBQ0hGO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7QUFFM0I7SUFDRSxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0FBR2I7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZSxFQUFBO0FBR2pCO0lBQ0UsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7QUFFYjtNQUNFLGdCQUFnQixFQUFBO0FBSXBCO0lBQ0UsY0NQZ0I7SURRaEIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0FBR3BCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFFbEI7TUFDRSxrQkFBa0IsRUFBQTtBQUl0QjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7QUFHbEI7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZSxFQUFBO0FBR2pCO0lBQ0Usc0JBQXNCLEVBQUE7QUFHeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsYUFBYSxFQUFBO0FBR2Y7SUFDRSx5QkMvRTRCO0lEZ0Y1QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7QUFMaEI7TUFRRyx5QkN0RjBCLEVBQUE7QUQ4RTdCO01BWUcsb0JBQW9CLEVBQUE7QUFadkI7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBSXhCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMkJBQTJCLEVBQUE7QUFHN0I7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQixFQUFBO0FBSG5CO01BTUcseUJDM0cwQixFQUFBO0FEK0c5QjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0FBVm5CO01BYUcsZUFBZSxFQUFBO0FBSW5CO0lBQ0UseUJDakk0QjtJRGtJNUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7QUFKaEI7TUFPRyxlQUFlLEVBQUE7QUFLckI7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtFQUdsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNLEVBQUE7QUU5S1I7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZG9jdW1lbnRzLWZvcm1zL29ubGluZS1wZGYtZm9ybXMvb25saW5lLXBkZi1mb3Jtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZS0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogIzkwOTA5MDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0LS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcms6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDsgfVxuXG4ucGRmX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMnJlbTsgfVxuXG4udGV4dF9jZW50ZXJfbWF4X3cge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA1NHJlbTsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAmX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICAmX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICZfX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXG5cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gIH1cblxuICAmX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICB9XG5cbiAgJl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBtaW4taGVpZ2h0OiA5MHZoO1xuICAvLyBtaW4td2lkdGg6IDkwdnc7IFxuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL2luZGV4LnNjc3MnO1xuXG4ucGRmX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLnRleHRfY2VudGVyX21heF93IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNTRyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: OnlinePdfFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinePdfFormsComponent", function() { return OnlinePdfFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlinePdfFormsComponent = /** @class */ (function () {
    function OnlinePdfFormsComponent() {
    }
    OnlinePdfFormsComponent.prototype.ngOnInit = function () {
        // console.log(this);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlinePdfFormsComponent.prototype, "form", void 0);
    OnlinePdfFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-online-pdf-forms",
            template: __webpack_require__(/*! ./online-pdf-forms.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.html"),
            styles: [__webpack_require__(/*! ./online-pdf-forms.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlinePdfFormsComponent);
    return OnlinePdfFormsComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/entryComponents.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/entryComponents.ts ***!
  \****************************************************************************************************/
/*! exports provided: entryComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entryComponents", function() { return entryComponents; });
/* harmony import */ var _fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields/short-text-field/short-text-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts");
/* harmony import */ var _fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields/empty-line-field/empty-line-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/long-text-field/long-text-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts");
/* harmony import */ var _fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/label-field/label-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.ts");
/* harmony import */ var _fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fields/number-text-field/number-text-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts");
/* harmony import */ var _fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields/multiple-options-field/multiple-options-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields/email-field/email-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.ts");
/* harmony import */ var _fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fields/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fields/date-time-field/date-time-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts");
/* harmony import */ var _fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fields/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields/time-field/time-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.ts");
/* harmony import */ var _fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/phone-number-field/phone-number-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts");












var entryComponents = [
    _fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_0__["ShortTextFieldComponent"],
    _fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_2__["LongTextFieldComponent"],
    _fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_4__["NumberTextFieldComponent"],
    _fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_5__["MultipleOptionsFieldComponent"],
    _fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_6__["EmailFieldComponent"],
    _fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_7__["DropDownListFieldComponent"],
    _fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_8__["DateTimeFieldComponent"],
    _fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_9__["HebrewDateFieldComponent"],
    _fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__["TimeFieldComponent"],
    _fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_11__["PhoneNumberFieldComponent"],
    _fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_3__["LabelFieldComponent"],
    _fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_1__["EmptyLineFieldComponent"]
];


/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.css":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWVsZHMvZGF0ZS10aW1lLWZpZWxkL2RhdGUtdGltZS1maWVsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"input-group app-input-container app-input-fill\"\n  [ngClass]=\"{ 'app-input-fill': formatDate && !data.options.hideLabel }\"\n>\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{\n    data.name | titlecase\n  }}</label>\n  <input\n    class=\"form-control app-input\"\n    placeholder=\"yyyy-mm-dd\"\n    name=\"dp\"\n    ngbDatepicker\n    #d=\"ngbDatepicker\"\n    (ngModelChange)=\"blurChanges($event)\"\n    (click)=\"d.toggle()\"\n    [ngModel]=\"formatDate\"\n    [disabled]=\"true\"\n    [required]=\"data.options.required\"\n  />\n\n  <div class=\"input-group-append\">\n    <button\n      class=\"btn app-btn-outline-primary calendar\"\n      (click)=\"d.toggle()\"\n      type=\"button\"\n      [disabled]=\"true\"\n    >\n      <i class=\"far fa-calendar\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts ***!
  \*************************************************************************************************************************************/
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
            selector: "app-date-time-field",
            template: __webpack_require__(/*! ./date-time-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.html"),
            styles: [__webpack_require__(/*! ./date-time-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]])
    ], DateTimeFieldComponent);
    return DateTimeFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.css":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWVsZHMvZHJvcC1kb3duLWxpc3QtZmllbGQvZHJvcC1kb3duLWxpc3QtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"form-group app-input-container\"\n  [ngClass]=\"{ 'app-input-fill': data.value }\"\n>\n  <label class=\"app-input-label\">{{ data.name | titlecase }}</label>\n  <select\n    class=\"app-input form-control\"\n    [(ngModel)]=\"data.value\"\n    [required]=\"data.options.required\"\n    [disabled]=\"true\"\n  >\n    <option\n      *ngFor=\"let item of data.options.items || list\"\n      [selected]=\"data.value\"\n      [ngValue]=\"item\"\n      >{{ item }}</option\n    >\n  </select>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: DropDownListFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownListFieldComponent", function() { return DropDownListFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropDownListFieldComponent = /** @class */ (function () {
    function DropDownListFieldComponent() {
        this.list = [
            "Options 1",
            "Options 2",
            "Options 3",
            "Options 4",
            "Options 5"
        ];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropDownListFieldComponent.prototype, "data", void 0);
    DropDownListFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-drop-down-list-field",
            template: __webpack_require__(/*! ./drop-down-list-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.html"),
            styles: [__webpack_require__(/*! ./drop-down-list-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.css")]
        })
    ], DropDownListFieldComponent);
    return DropDownListFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.css":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ninput{\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9lbWFpbC1maWVsZC9lbWFpbC1maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWVsZHMvZW1haWwtZmllbGQvZW1haWwtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <input type=\"text\"\n         class=\"app-input form-control\"\n         email\n         [(ngModel)]=\"data.value\"\n         [readOnly]=\"true\"\n         [disabled]=\"true\"\n         [required]=\"data.options.required\"\n         [placeholder]=\"data.name | titlecase\">\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.ts ***!
  \*****************************************************************************************************************************/
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
            selector: "app-email-field",
            template: __webpack_require__(/*! ./email-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.html"),
            styles: [__webpack_require__(/*! ./email-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.css")]
        })
    ], EmailFieldComponent);
    return EmailFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWVsZHMvZW1wdHktbGluZS1maWVsZC9lbXB0eS1saW5lLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts ***!
  \***************************************************************************************************************************************/
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
            selector: "app-empty-line-field",
            template: __webpack_require__(/*! ./empty-line-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.html"),
            styles: [__webpack_require__(/*! ./empty-line-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmptyLineFieldComponent);
    return EmptyLineFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-datepicker\n  class=\"hebrew rtl\"\n  #dp\n  [(ngModel)]=\"model\"\n  [displayMonths]=\"1\"\n  [firstDayOfWeek]=\"7\"\n  [dayTemplate]=\"dt\"\n  [dayTemplateData]=\"dayTemplateData\"\n  [disabled]=\"true\"\n  [markDisabled]=\"true\"\n>\n</ngb-datepicker>\n\n<ng-template\n  #dt\n  let-date\n  let-data=\"data\"\n  let-selected=\"selected\"\n  let-currentMonth=\"currentMonth\"\n>\n  <div\n    class=\"hebrew-day\"\n    [class.outside]=\"date.month !== currentMonth\"\n    [class.selected]=\"selected\"\n  >\n    <div class=\"gregorian-num\">\n      {{ data.gregorian.day + \"/\" + data.gregorian.month }}\n    </div>\n    <div class=\"hebrew-num\">{{ i18n.getDayNumerals(date) }}</div>\n  </div>\n</ng-template>\n\n<hr />\n\n<button\n  class=\"btn btn-sm btn-outline-primary mr-2\"\n  (click)=\"selectToday()\"\n  [disabled]=\"true\"\n>\n  Select Today\n</button>\n<button\n  class=\"btn btn-sm btn-outline-primary mr-2\"\n  (click)=\"dp.navigateTo()\"\n  [disabled]=\"true\"\n>\n  To current month\n</button>\n\n<hr />\n\n<!--<form class=\"form-inline\">-->\n<!--<div class=\"form-group\">-->\n<!--<div class=\"input-group\">-->\n<!--<input class=\"form-control\" placeholder=\"yyyy-mm-dd\"-->\n<!--name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker [footerTemplate]=\"dt\"  [displayMonths]=\"1\" [firstDayOfWeek]=\"7\" [dayTemplate]=\"dt\" #dp=\"ngbDatepicker\" [dayTemplateData]=\"dayTemplateData\">-->\n<!--<div class=\"input-group-addon\">-->\n<!--<button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n<!--</form>-->\n\n<!--<ng-template #dt let-date let-data=\"data\" let-selected=\"selected\" let-currentMonth=\"currentMonth\">-->\n<!--<div class=\"hebrew-day\" [class.outside]=\"date.month !== currentMonth\" [class.selected]=\"selected\">-->\n<!--&lt;!&ndash;<div class=\"gregorian-num\">{{ data.gregorian.day + '/' + (data.gregorian.month) }}</div>&ndash;&gt;-->\n<!--<div class=\"hebrew-num\">{{ i18n.getDayNumerals(date) }}</div>-->\n<!--</div>-->\n<!--&lt;!&ndash;<hr/>&ndash;&gt;-->\n\n<!--&lt;!&ndash;<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>&ndash;&gt;-->\n<!--&lt;!&ndash;<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>&ndash;&gt;-->\n\n<!--&lt;!&ndash;<hr/>&ndash;&gt;-->\n<!--</ng-template>-->\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\nngb-datepicker-month-view {\n  display: block; }\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n  line-height: 3rem;\n  text-align: center;\n  font-style: italic; }\n.ngb-dp-weekday {\n  color: #5bc0de;\n  color: var(--info); }\n.ngb-dp-week {\n  border-radius: 0.25rem;\n  display: flex; }\n.ngb-dp-weekdays {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0; }\n.ngb-dp-day,\n.ngb-dp-week-number,\n.ngb-dp-weekday {\n  width: 2rem;\n  height: 2rem; }\n.ngb-dp-day {\n  cursor: pointer; }\n.ngb-dp-day.disabled,\n.ngb-dp-day.hidden {\n  cursor: default; }\n.hebrew-day {\n  text-align: right;\n  padding: 0.25rem 0.65rem 0.25rem 0.25rem;\n  border-radius: 0.25rem;\n  display: inline-block;\n  height: 2.75rem;\n  width: 2.75rem; }\n.hebrew-day:hover,\n.hebrew-day.focused {\n  background-color: #e6e6e6; }\n.hebrew-day.selected {\n  background-color: #007bff;\n  color: white; }\n.outside {\n  color: lightgray; }\n.gregorian-num {\n  font-size: 0.5rem;\n  direction: ltr; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL2hlYnJldy1kYXRlLWZpZWxkL2hlYnJldy1kYXRlLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZHMvaGVicmV3LWRhdGUtZmllbGQvaGVicmV3LWRhdGUtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7Ozs7O0VDQUU7QUNKRjtFQUNFLGNBQWMsRUFBQTtBQUVoQjs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0Usc0JBQXNCO0VBRXRCLGFBQWEsRUFBQTtBQUVmO0VBQ0UsNkNBQTZDO0VBQzdDLGdCQUFnQixFQUFBO0FBRWxCOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBRWQ7RUFDRSxlQUFlLEVBQUE7QUFFakI7O0VBRUUsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjLEVBQUE7QUFFaEI7O0VBRUUseUJBQXlCLEVBQUE7QUFFM0I7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0FBRWQ7RUFDRSxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL2hlYnJldy1kYXRlLWZpZWxkL2hlYnJldy1kYXRlLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9icy9pbmRleC5zY3NzJztcblxuJG1haW4tbWVudS13aWR0aDogNTVweDtcbiR0b3AtbWVudS1oZWlnaHQ6IDQwcHg7XG5cbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuXG4vLyAgRXhhbXBsZTogXG4vLyAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHsgXG4vLyAgICAgICAgICBcbi8vICAgICAgfVxuICIsIi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgY29sb3I6ICM1YmMwZGU7XG4gIGNvbG9yOiB2YXIoLS1pbmZvKTsgfVxuXG4ubmdiLWRwLXdlZWsge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4ubmdiLWRwLXdlZWtkYXlzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG5cbi5uZ2ItZHAtZGF5LFxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07IH1cblxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLm5nYi1kcC1kYXkuZGlzYWJsZWQsXG4ubmdiLWRwLWRheS5oaWRkZW4ge1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuLmhlYnJldy1kYXkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjY1cmVtIDAuMjVyZW0gMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIuNzVyZW07XG4gIHdpZHRoOiAyLjc1cmVtOyB9XG5cbi5oZWJyZXctZGF5OmhvdmVyLFxuLmhlYnJldy1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7IH1cblxuLmhlYnJldy1kYXkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm91dHNpZGUge1xuICBjb2xvcjogbGlnaHRncmF5OyB9XG5cbi5ncmVnb3JpYW4tbnVtIHtcbiAgZm9udC1zaXplOiAwLjVyZW07XG4gIGRpcmVjdGlvbjogbHRyOyB9XG4iLCJcbm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzViYzBkZTtcbiAgY29sb3I6IHZhcigtLWluZm8pO1xufVxuLm5nYi1kcC13ZWVrIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmdiLWRwLXdlZWtkYXlzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cbi5uZ2ItZHAtZGF5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5nYi1kcC1kYXkuZGlzYWJsZWQsXG4ubmdiLWRwLWRheS5oaWRkZW4ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5oZWJyZXctZGF5IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC42NXJlbSAwLjI1cmVtIDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICB3aWR0aDogMi43NXJlbTtcbn1cbi5oZWJyZXctZGF5OmhvdmVyLFxuLmhlYnJldy1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4uaGVicmV3LWRheS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5vdXRzaWRlIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5ncmVnb3JpYW4tbnVtIHtcbiAgZm9udC1zaXplOiAwLjVyZW07XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts ***!
  \*****************************************************************************************************************************************/
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
            selector: "app-hebrew-date-field",
            template: __webpack_require__(/*! ./hebrew-date-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.html"),
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendarHebrew"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18nHebrew"] }
            ],
            styles: [__webpack_require__(/*! ./hebrew-date-field.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"]])
    ], HebrewDateFieldComponent);
    return HebrewDateFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>{{data.value}}</label>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWVsZHMvbGFiZWwtZmllbGQvbGFiZWwtZmllbGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.ts ***!
  \*****************************************************************************************************************************/
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
            selector: "app-label-field",
            template: __webpack_require__(/*! ./label-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.html"),
            styles: [__webpack_require__(/*! ./label-field.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.scss")]
        })
    ], LabelFieldComponent);
    return LabelFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.css":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9sb25nLXRleHQtZmllbGQvbG9uZy10ZXh0LWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL2xvbmctdGV4dC1maWVsZC9sb25nLXRleHQtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"form-group app-input-container\"\n  [ngClass]=\"{ 'app-input-fill': data.value && !data.options.hideLabel }\"\n>\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{\n    data.name | titlecase\n  }}</label>\n  <input\n    type=\"text\"\n    class=\"app-input form-control\"\n    [(ngModel)]=\"data.value\"\n    [readOnly]=\"true\"\n    [disabled]=\"true\"\n    [required]=\"data.options.required\"\n    [placeholder]=\"data.name | titlecase\"\n  />\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts ***!
  \*************************************************************************************************************************************/
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
            selector: "app-long-text-field",
            template: __webpack_require__(/*! ./long-text-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.html"),
            styles: [__webpack_require__(/*! ./long-text-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.css")]
        })
    ], LongTextFieldComponent);
    return LongTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multi-div{\n  border: 1px solid bisque;\n  border-radius: 11px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9tdWx0aXBsZS1vcHRpb25zLWZpZWxkL211bHRpcGxlLW9wdGlvbnMtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1maWVsZHMvZmllbGRzL211bHRpcGxlLW9wdGlvbnMtZmllbGQvbXVsdGlwbGUtb3B0aW9ucy1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11bHRpLWRpdntcbiAgYm9yZGVyOiAxcHggc29saWQgYmlzcXVlO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group multi-div\">\n  <div class=\"checkbox\" *ngFor=\"let item of data.options.item || list\">\n    <label>\n      <input type=\"checkbox\" value=\"\" [disabled]=\"true\" />{{ item }}\n    </label>\n  </div>\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" value=\"\" [disabled]=\"true\" />\n      <input type=\"text\" placeholder=\"Other\" [disabled]=\"true\" />\n    </label>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: MultipleOptionsFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleOptionsFieldComponent", function() { return MultipleOptionsFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MultipleOptionsFieldComponent = /** @class */ (function () {
    function MultipleOptionsFieldComponent() {
        this.list = [
            "Options 1",
            "Options 2",
            "Options 3",
            "Options 4",
            "Options 5"
        ];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MultipleOptionsFieldComponent.prototype, "data", void 0);
    MultipleOptionsFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-multiple-options-field",
            template: __webpack_require__(/*! ./multiple-options-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.html"),
            styles: [__webpack_require__(/*! ./multiple-options-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.css")]
        })
    ], MultipleOptionsFieldComponent);
    return MultipleOptionsFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.css":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWVsZHMvbnVtYmVyLXRleHQtZmllbGQvbnVtYmVyLXRleHQtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group app-input-container\"\n     [ngClass]=\"{'app-input-fill': data.value && !data.options.hideLabel}\">\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{data.name | titlecase}}</label>\n  <input type=\"number\"\n         class=\"app-input form-control\"\n         [(ngModel)]=\"data.value\"\n         [readOnly]=\"true\"\n         [disabled]=\"true\"\n         [required]=\"data.options.required\"\n         [placeholder]=\"data.name | titlecase\">\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts ***!
  \*****************************************************************************************************************************************/
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
            selector: "app-number-text-field",
            template: __webpack_require__(/*! ./number-text-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.html"),
            styles: [__webpack_require__(/*! ./number-text-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.css")]
        })
    ], NumberTextFieldComponent);
    return NumberTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.css":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWVsZHMvcGhvbmUtbnVtYmVyLWZpZWxkL3Bob25lLW51bWJlci1maWVsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"form-group app-input-container\"\n  [ngClass]=\"{ 'app-input-fill': data.value && !data.options.hideLabel }\"\n>\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{\n    data.name | titlecase\n  }}</label>\n  <input\n    type=\"text\"\n    aria-describedby=\"basic-addon2\"\n    class=\"app-input form-control\"\n    pattern=\"^((\\+\\d{1,3}(-| )?\\(?\\d\\)?(-| )?\\d{1,5})|(\\(?\\d{2,6}\\)?))(-| )?(\\d{3,4})(-| )?(\\d{4})(( x| ext)\\d{1,5}){0,1}$\"\n    [(ngModel)]=\"data.value\"\n    [readOnly]=\"true\"\n    [disabled]=\"true\"\n    [required]=\"data.options.required\"\n    [placeholder]=\"data.name | titlecase\"\n  />\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts ***!
  \*******************************************************************************************************************************************/
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
            selector: "app-phone-number-field",
            template: __webpack_require__(/*! ./phone-number-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.html"),
            styles: [__webpack_require__(/*! ./phone-number-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.css")]
        })
    ], PhoneNumberFieldComponent);
    return PhoneNumberFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZmllbGRzL2ZpZWxkcy9zaG9ydC10ZXh0LWZpZWxkL3Nob3J0LXRleHQtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWVsZHMvc2hvcnQtdGV4dC1maWVsZC9zaG9ydC10ZXh0LWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"form-group app-input-container\"\n  [ngClass]=\"{ 'app-input-fill': data.value && !data.options.hideLabel }\"\n>\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{\n    data.name | titlecase\n  }}</label>\n  <input\n    type=\"text\"\n    aria-describedby=\"basic-addon2\"\n    class=\"app-input form-control\"\n    [(ngModel)]=\"data.value\"\n    [readOnly]=\"true\"\n    [disabled]=\"true\"\n    [required]=\"data.options.required\"\n    [placeholder]=\"data.name | titlecase\"\n  />\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts ***!
  \***************************************************************************************************************************************/
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
            selector: "app-short-text-field",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./short-text-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.html"),
            styles: [__webpack_require__(/*! ./short-text-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.css")]
        })
    ], ShortTextFieldComponent);
    return ShortTextFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.css":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9maWVsZHMvdGltZS1maWVsZC90aW1lLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"form-group app-input-container\"\n  [ngClass]=\"{ 'app-input-fill': data.value && !data.options.hideLabel }\"\n>\n  <label *ngIf=\"!data.options.hideLabel\" class=\"app-input-label\">{{\n    data.name | titlecase\n  }}</label>\n  <input\n    type=\"time\"\n    class=\"app-input form-control\"\n    [(ngModel)]=\"data.value\"\n    [readOnly]=\"true\"\n    [disabled]=\"true\"\n    [required]=\"data.options.required\"\n    [placeholder]=\"data.name | titlecase\"\n  />\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.ts ***!
  \***************************************************************************************************************************/
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
    TimeFieldComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimeFieldComponent.prototype, "data", void 0);
    TimeFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-time-field",
            template: __webpack_require__(/*! ./time-field.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.html"),
            styles: [__webpack_require__(/*! ./time-field.component.css */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeFieldComponent);
    return TimeFieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/online-form-fields.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/online-form-fields.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>-->\n  <!--<label class=\"has-float-label\">-->\n    <!--<span class=\"spanForLabel\" *ngIf=\"!field.options.hideLabel\">{{field.name}}</span>-->\n    <ng-template appFieldContent ></ng-template>\n  <!--</label>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/online-form-fields.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/online-form-fields.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWZpZWxkcy9vbmxpbmUtZm9ybS1maWVsZHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/online-form-fields.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-fields/online-form-fields.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: OnlineFormFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormFieldsComponent", function() { return OnlineFormFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/online-form.service */ "./src/app/modules/vertical-data-collection/online-form/services/online-form.service.ts");
/* harmony import */ var _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/field-content.directive */ "./src/app/modules/vertical-data-collection/online-form/directives/field-content.directive.ts");





var OnlineFormFieldsComponent = /** @class */ (function () {
    function OnlineFormFieldsComponent(resolver, onlineFormService) {
        this.resolver = resolver;
        this.onlineFormService = onlineFormService;
    }
    OnlineFormFieldsComponent.prototype.ngOnInit = function () {
        // console.log(this.field);
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
            template: __webpack_require__(/*! ./online-form-fields.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/online-form-fields.component.html"),
            styles: [__webpack_require__(/*! ./online-form-fields.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/online-form-fields.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__["OnlineFormService"]])
    ], OnlineFormFieldsComponent);
    return OnlineFormFieldsComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Title-->\n<h2 class=\"content_section__article_title\">\n  Parents Information\n</h2>\n\n<!--SubTitle-->\n<h3 class=\"content_section__article_sub_title\">\n  <i class=\"far fa-clock fa-sm mr-1\"></i>\n  ~15 minutes\n</h3>\n\n<ng-container *ngIf=\"form\">\n  <div class=\"app-of-general-info-section px-3 py-4\">\n    <ng-container *ngFor=\"let familyMember of form.fields\">\n      <ng-container *ngIf=\"familyMember.prefix !== 'student'\">\n        <!--Title-->\n        <p\n          class=\"content_section__article_title content_section__article_title--left\"\n        >\n          {{ familyMember.name }}\n        </p>\n\n        <!--General Fields-->\n        <div class=\"row no-gutters\">\n          <ng-container *ngFor=\"let item of familyMember.fields\">\n            <div\n              *ngIf=\"item.type !== 113\"\n              class=\"col-{{ item.options.size }} p-2\"\n            >\n              <app-online-form-fields [field]=\"item\"></app-online-form-fields>\n            </div>\n\n            <div class=\"row no-gutters col-12\" *ngIf=\"item.type === 113\">\n              <div class=\"col-12\">\n                <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">\n                  {{ item.name | uppercase }}\n                </p>\n              </div>\n              <ng-container *ngFor=\"let groupField of item.fields\">\n                <div class=\"col-{{ groupField.options.size }} px-2\">\n                  <app-online-form-fields\n                    [field]=\"groupField\"\n                  ></app-online-form-fields>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1nZW5lcmFsLWluZm8vZ2VuZXJhbC1pbmZvLXBhcmVudHMvZ2VuZXJhbC1pbmZvLXBhcmVudHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9zdHlsZXMvaW5kZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUUzQjtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlLEVBQUE7QUFHakI7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtBQUViO01BQ0UsZ0JBQWdCLEVBQUE7QUFJcEI7SUFDRSxjQ1BnQjtJRFFoQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUVsQjtNQUNFLGtCQUFrQixFQUFBO0FBSXRCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUdsQjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFHakI7SUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7QUFHZjtJQUNFLHlCQy9FNEI7SURnRjVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUxoQjtNQVFHLHlCQ3RGMEIsRUFBQTtBRDhFN0I7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFJeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkIsRUFBQTtBQUc3QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7QUFIbkI7TUFNRyx5QkMzRzBCLEVBQUE7QUQrRzlCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFWbkI7TUFhRyxlQUFlLEVBQUE7QUFJbkI7SUFDRSx5QkNqSTRCO0lEa0k1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQUpoQjtNQU9HLGVBQWUsRUFBQTtBQUtyQjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLWdlbmVyYWwtaW5mby9nZW5lcmFsLWluZm8tcGFyZW50cy9nZW5lcmFsLWluZm8tcGFyZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZS0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogIzkwOTA5MDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0LS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcms6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAmX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICAmX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICZfX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXG5cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gIH1cblxuICAmX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICB9XG5cbiAgJl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBtaW4taGVpZ2h0OiA5MHZoO1xuICAvLyBtaW4td2lkdGg6IDkwdnc7IFxuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.ts ***!
  \**********************************************************************************************************************************************/
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
        // console.log("form:");
        // console.log(this.form);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeneralInfoParentsComponent.prototype, "form", void 0);
    GeneralInfoParentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-general-info-parents",
            template: __webpack_require__(/*! ./general-info-parents.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.html"),
            styles: [__webpack_require__(/*! ./general-info-parents.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoParentsComponent);
    return GeneralInfoParentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Title-->\n<h2 class=\"content_section__article_title\">\n  Student(s) Information\n</h2>\n\n<!--SubTitle-->\n<h3 class=\"content_section__article_sub_title\">\n  <i class=\"far fa-clock fa-sm mr-1\"></i>\n  ~15 minutes\n</h3>\n\n<div class=\"app-of-general-info-section px-3 py-4\">\n  <ng-container *ngFor=\"let familyMember of form.fields\">\n    <ng-container *ngIf=\"familyMember.prefix === 'student'\">\n      <!--Title-->\n      <p\n        class=\"content_section__article_title content_section__article_title--left\"\n      >\n        Name: {{ familyMember.name }}\n      </p>\n\n      <!--General Fields-->\n      <div class=\"row no-gutters\">\n        <ng-container *ngFor=\"let item of familyMember.fields\">\n          <div\n            *ngIf=\"item.type !== 113\"\n            class=\"col-{{ item.options.size }} p-2\"\n          >\n            <app-online-form-fields [field]=\"item\"></app-online-form-fields>\n          </div>\n\n          <div class=\"row no-gutters col-12\" *ngIf=\"item.type === 113\">\n            <div class=\"col-12\">\n              <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">\n                {{ item.name | uppercase }}\n              </p>\n            </div>\n            <ng-container *ngFor=\"let groupField of item.fields\">\n              <div class=\"col-{{ groupField.options.size }} px-2\">\n                <app-online-form-fields\n                  [field]=\"groupField\"\n                ></app-online-form-fields>\n              </div>\n            </ng-container>\n          </div>\n        </ng-container>\n      </div>\n    </ng-container>\n  </ng-container>\n\n  <!--General Fields-->\n  <div class=\"row no-gutters\">\n    <div class=\"col-3 px-2\">\n      <div class=\"form-group app-input-container app-input-fill\">\n        <label for=\"firstName\" class=\"app-input-label\">First Name</label>\n        <input\n          type=\"text\"\n          class=\"app-input form-control\"\n          id=\"firstName\"\n          placeholder=\"First Name\"\n          value=\"Charlotte\"\n          [disabled]=\"true\"\n        />\n      </div>\n    </div>\n\n    <div class=\"col-3 px-2\">\n      <div class=\"form-group app-input-container app-input-fill\">\n        <label for=\"lastName\" class=\"app-input-label\">Last Name</label>\n        <input\n          type=\"text\"\n          class=\"app-input form-control\"\n          id=\"lastName\"\n          placeholder=\"Last Name\"\n          value=\"Jennings\"\n          [disabled]=\"true\"\n        />\n      </div>\n    </div>\n\n    <div class=\"col-3 px-2\">\n      <div class=\"form-group app-input-container app-input-fill\">\n        <label class=\"app-input-label\" for=\"grade\">Grade</label>\n        <select class=\"app-input\" id=\"grade\" [disabled]=\"true\">\n          <option [value]=\"'Grade 1'\" [selected]=\"true\" [disabled]=\"true\">\n            {{ \"Grade 1\" }}\n          </option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"col-3 px-2\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-8\">\n          <div class=\"form-group app-input-container app-input-fill mb-0\">\n            <label for=\"photo\" class=\"app-input-label\">Photo (optional)</label>\n            <input\n              type=\"text\"\n              class=\"app-input form-control\"\n              id=\"photo\"\n              placeholder=\"Photo (optional)\"\n              value=\"Photo123871.jpg\"\n              [disabled]=\"true\"\n            />\n          </div>\n        </div>\n        <div class=\"col-4 d-flex align-items-center\">\n          <button class=\"btn app-btn-primary h-100\" [disabled]=\"true\">\n            Upload\n          </button>\n          <i class=\"fas fa-trash ml-2 app-text-second\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--End General Fields-->\n\n  <!--MEDICAL INFO-->\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">\n    MEDICAL INFORMATION\n  </p>\n\n  <!--END MEDICAL INFO-->\n\n  <!--DOCTORS’S INFO-->\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">\n    DOCTORS’S INFORMATION\n  </p>\n\n  <!--End DOCTORS’S INFO-->\n\n  <!--DOCTOR’S ADDRESS-->\n  <p class=\"px-2 py-2 app-text-small app-text-extra-bold\">DOCTOR’S ADDRESS</p>\n\n  <!--END DOCTOR’S ADDRESS-->\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1nZW5lcmFsLWluZm8vZ2VuZXJhbC1pbmZvLXN0dWRlbnRzL2dlbmVyYWwtaW5mby1zdHVkZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vc2hhcmVkL3N0eWxlcy9pbmRleC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7Ozs7O0VDQUU7QUNIRjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBO0FBRTNCO0lBQ0UsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0FBR3BCO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGVBQWUsRUFBQTtBQUdqQjtJQUNFLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0FBRWI7TUFDRSxnQkFBZ0IsRUFBQTtBQUlwQjtJQUNFLGNDUGdCO0lEUWhCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVyxFQUFBO0FBR2I7SUFDRSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0FBRWxCO01BQ0Usa0JBQWtCLEVBQUE7QUFJdEI7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0FBR2xCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWUsRUFBQTtBQUdqQjtJQUNFLHNCQUFzQixFQUFBO0FBR3hCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGFBQWEsRUFBQTtBQUdmO0lBQ0UseUJDL0U0QjtJRGdGNUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0FBTGhCO01BUUcseUJDdEYwQixFQUFBO0FEOEU3QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFadkI7TUFZRyxvQkFBb0IsRUFBQTtBQUl4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJCQUEyQixFQUFBO0FBRzdCO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0IsRUFBQTtBQUhuQjtNQU1HLHlCQzNHMEIsRUFBQTtBRCtHOUI7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtBQVZuQjtNQWFHLGVBQWUsRUFBQTtBQUluQjtJQUNFLHlCQ2pJNEI7SURrSTVCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0FBSmhCO01BT0csZUFBZSxFQUFBO0FBS3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFHbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tZ2VuZXJhbC1pbmZvL2dlbmVyYWwtaW5mby1zdHVkZW50cy9nZW5lcmFsLWluZm8tc3R1ZGVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2JzL2luZGV4LnNjc3MnO1xuXG4kbWFpbi1tZW51LXdpZHRoOiA1NXB4O1xuJHRvcC1tZW51LWhlaWdodDogNDBweDtcblxuLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG5cbi8vICBFeGFtcGxlOiBcbi8vICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykgeyBcbi8vICAgICAgICAgIFxuLy8gICAgICB9XG4gIiwiLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAuY29udGVudF9zZWN0aW9uX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fbWFpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICM5MDkwOTA7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bzsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dC0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19hZGRpdGlvbmFsX2ZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NvbnRyb2xzX2NvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2lucHV0c19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94OmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfbGFiZWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbDpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWluLXdpZHRoOiAxcmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2luZGV4LnNjc3NcIjtcblxuLmNvbnRlbnRfc2VjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgJl9fcGFnZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX19uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAmLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgJl9fYXJ0aWNsZV9zdWJfdGl0bGUge1xuICAgIGNvbG9yOiAkZ3JheS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxuXG4gICZfX2FydGljbGUge1xuICAgIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAmX19hcnRpY2xlX3RleHQge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyBcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IFxuXG4gICAgJi0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19hZGRpdGlvbmFsX2ZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICB9XG5cbiAgJl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgfVxuXG4gICZfX2lucHV0c19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAmX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW07XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICZfX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2NoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLnNwaW5uZXJfYm94IHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbWluLWhlaWdodDogOTB2aDtcbiAgLy8gbWluLXdpZHRoOiA5MHZ3OyBcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuIiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcbiRlbGVtZW50LXNlY29uZC1jb2xvcjogIzlmYTZjYjtcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XG4kZWxlbWVudC1kYW5nZXItY29sb3I6IHJlZDtcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcblxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcbiR3aGl0ZTogI2ZmZjtcbiRiYWNrZ3JvdW5kLWRpc2FibGVkLWNvbG9yOiAjY2VkNGRhO1xuXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcblxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XG5cbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcbiRyZWQtY29sb3I6ICNmYzY0Njc7XG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XG5cbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XG5cbiRpY29uLWRhcmstZ3JheS1jb2xvcjogI0E0QThCRTtcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xuXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7Il19 */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.ts ***!
  \************************************************************************************************************************************************/
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
    GeneralInfoStudentsComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeneralInfoStudentsComponent.prototype, "form", void 0);
    GeneralInfoStudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-general-info-students",
            template: __webpack_require__(/*! ./general-info-students.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.html"),
            styles: [__webpack_require__(/*! ./general-info-students.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralInfoStudentsComponent);
    return GeneralInfoStudentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/online-form-general-info.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-general-info/online-form-general-info.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content_section__page_title\">\n  General Information\n</h1>\n\n<!-- Content Nav -->\n<div class=\"content_section__nav\">\n  <app-content-nav\n    [content]=\"navContent\"\n    (activeEmitter)=\"onActive($event)\"\n  ></app-content-nav>\n</div>\n\n<!-- Content -->\n<div class=\"app-of-wrap content_section__main\">\n  <div>\n    <app-general-info-parents\n      *ngIf=\"activeId === 'parents'\"\n      [form]=\"form\"\n    ></app-general-info-parents>\n    <app-general-info-students\n      *ngIf=\"activeId === 'students'\"\n      [form]=\"form\"\n    ></app-general-info-students>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/online-form-general-info.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-general-info/online-form-general-info.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1nZW5lcmFsLWluZm8vb25saW5lLWZvcm0tZ2VuZXJhbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvc3R5bGVzL2luZGV4LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7Ozs7RUNBRTtBQ0hGO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7QUFFM0I7SUFDRSxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsV0FBVyxFQUFBO0FBR2I7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZSxFQUFBO0FBR2pCO0lBQ0UsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7QUFFYjtNQUNFLGdCQUFnQixFQUFBO0FBSXBCO0lBQ0UsY0NQZ0I7SURRaEIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0FBR3BCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFFbEI7TUFDRSxrQkFBa0IsRUFBQTtBQUl0QjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7QUFHbEI7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZSxFQUFBO0FBR2pCO0lBQ0Usc0JBQXNCLEVBQUE7QUFHeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsYUFBYSxFQUFBO0FBR2Y7SUFDRSx5QkMvRTRCO0lEZ0Y1QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7QUFMaEI7TUFRRyx5QkN0RjBCLEVBQUE7QUQ4RTdCO01BWUcsb0JBQW9CLEVBQUE7QUFadkI7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBSXhCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMkJBQTJCLEVBQUE7QUFHN0I7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQixFQUFBO0FBSG5CO01BTUcseUJDM0cwQixFQUFBO0FEK0c5QjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0FBVm5CO01BYUcsZUFBZSxFQUFBO0FBSW5CO0lBQ0UseUJDakk0QjtJRGtJNUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7QUFKaEI7TUFPRyxlQUFlLEVBQUE7QUFLckI7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtFQUdsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1nZW5lcmFsLWluZm8vb25saW5lLWZvcm0tZ2VuZXJhbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9icy9pbmRleC5zY3NzJztcblxuJG1haW4tbWVudS13aWR0aDogNTVweDtcbiR0b3AtbWVudS1oZWlnaHQ6IDQwcHg7XG5cbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuXG4vLyAgRXhhbXBsZTogXG4vLyAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHsgXG4vLyAgICAgICAgICBcbi8vICAgICAgfVxuICIsIi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuLmNvbnRlbnRfc2VjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fcGFnZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RpdGxlLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV9zdWJfdGl0bGUge1xuICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGUge1xuICAgIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IGF1dG87IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYWRkaXRpb25hbF9maWVsZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2J1dHRvbiB7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19pbnB1dHNfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC4ycmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWE6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveDpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfbGFiZWw6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyazpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnNwaW5uZXJfYm94IHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9pbmRleC5zY3NzXCI7XG5cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICZfX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9fbWFpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gICZfX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgJi0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gICZfX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogJGdyYXktY29sb3I7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgJl9fYXJ0aWNsZV90ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgXG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyBcblxuICAgICYtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fYWRkaXRpb25hbF9maWVsZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgfVxuXG4gICZfX2NvbnRyb2xzX2NvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIH1cblxuICAmX19pbnB1dHNfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgJl9fdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC4ycmVtO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmX19jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfbGFiZWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWluLXdpZHRoOiAxcmVtO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIC8vIG1pbi13aWR0aDogOTB2dzsgXG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/online-form-general-info.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-general-info/online-form-general-info.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: OnlineFormGeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormGeneralInfoComponent", function() { return OnlineFormGeneralInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/general-info-section-name.model */ "./src/app/modules/vertical-data-collection/online-form/model/general-info-section-name.model.ts");



var OnlineFormGeneralInfoComponent = /** @class */ (function () {
    function OnlineFormGeneralInfoComponent() {
        this.navContent = [
            {
                id: "parents",
                title: "Parents information"
            },
            {
                id: "students",
                title: "Students information"
            }
        ];
        this.activeId = "parents";
        this.generalSectionsNames = _model_general_info_section_name_model__WEBPACK_IMPORTED_MODULE_2__["generalSectionsNames"];
    }
    OnlineFormGeneralInfoComponent.prototype.ngOnInit = function () { };
    OnlineFormGeneralInfoComponent.prototype.onActive = function (id) {
        this.activeId = id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormGeneralInfoComponent.prototype, "form", void 0);
    OnlineFormGeneralInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-online-form-general-info",
            template: __webpack_require__(/*! ./online-form-general-info.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/online-form-general-info.component.html"),
            styles: [__webpack_require__(/*! ./online-form-general-info.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/online-form-general-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormGeneralInfoComponent);
    return OnlineFormGeneralInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-menu/online-form-menu.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-menu/online-form-menu.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-of-menu-wrap\">\n  <ul class=\"list-group bg-white\">\n    <ng-container *ngFor=\"let item of menuItems\">\n      <li\n        class=\"list-group-item app-cursor-pointer\"\n        [ngClass]=\"activeMenuItem === item.name ? 'app-of-menu-active' : ''\"\n        *ngIf=\"isShowMenuItem(item.name)\"\n        (click)=\"setActiveMenuItem(item.name)\"\n      >\n        <div class=\"row no-gutters align-items-center py-1\">\n          <div class=\"col-auto mr-2\">\n            <i\n              class=\"fas fa-file-alt fa-lg app-of-menu-i\"\n              [ngClass]=\"\n                activeMenuItem === item.name\n                  ? 'app-text-primary'\n                  : 'app-text-second'\n              \"\n            ></i>\n          </div>\n          <div class=\"col\">\n            <p\n              class=\"mb-0 app-text-extra-bold app-text-large\"\n              [ngClass]=\"\n                activeMenuItem === item.name\n                  ? 'app-text-primary'\n                  : 'app-text-second'\n              \"\n            >\n              {{ item.title }}\n            </p>\n            <p class=\"mb-0 app-text-second app-text-small\">\n              <i class=\"far fa-clock fa-sm mr-1\"></i>\n              ~{{ item.time }} minutes\n            </p>\n          </div>\n        </div>\n      </li>\n    </ng-container>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-menu/online-form-menu.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-menu/online-form-menu.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n.app-of-menu-wrap {\n  background-color: #ffffff;\n  border: 1px solid #e7e9ef;\n  border-radius: 3px; }\n.app-of-menu-i {\n  display: inline-block;\n  border-radius: 50%;\n  padding: 0.6em 0.7em;\n  background-color: #e4e7ff; }\n.app-of-menu-active {\n  border-left: 3px solid #4350a2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1tZW51L29ubGluZS1mb3JtLW1lbnUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9zdHlsZXMvaW5kZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1tZW51L29ubGluZS1mb3JtLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7Ozs7O0VDQUU7QUNIRjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBO0FBRTNCO0lBQ0UsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0FBR3BCO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGVBQWUsRUFBQTtBQUdqQjtJQUNFLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0FBRWI7TUFDRSxnQkFBZ0IsRUFBQTtBQUlwQjtJQUNFLGNDUGdCO0lEUWhCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVyxFQUFBO0FBR2I7SUFDRSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0FBRWxCO01BQ0Usa0JBQWtCLEVBQUE7QUFJdEI7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0FBR2xCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWUsRUFBQTtBQUdqQjtJQUNFLHNCQUFzQixFQUFBO0FBR3hCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGFBQWEsRUFBQTtBQUdmO0lBQ0UseUJDL0U0QjtJRGdGNUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0FBTGhCO01BUUcseUJDdEYwQixFQUFBO0FEOEU3QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFadkI7TUFZRyxvQkFBb0IsRUFBQTtBQUl4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJCQUEyQixFQUFBO0FBRzdCO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0IsRUFBQTtBQUhuQjtNQU1HLHlCQzNHMEIsRUFBQTtBRCtHOUI7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtBQVZuQjtNQWFHLGVBQWUsRUFBQTtBQUluQjtJQUNFLHlCQ2pJNEI7SURrSTVCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0FBSmhCO01BT0csZUFBZSxFQUFBO0FBS3JCO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFHbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTSxFQUFBO0FFOUtSO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsOEJEaEIwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vb25saW5lLWZvcm0tbWVudS9vbmxpbmUtZm9ybS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9icy9pbmRleC5zY3NzJztcblxuJG1haW4tbWVudS13aWR0aDogNTVweDtcbiR0b3AtbWVudS1oZWlnaHQ6IDQwcHg7XG5cbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuXG4vLyAgRXhhbXBsZTogXG4vLyAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHsgXG4vLyAgICAgICAgICBcbi8vICAgICAgfVxuICIsIi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuLmNvbnRlbnRfc2VjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fcGFnZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RpdGxlLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV9zdWJfdGl0bGUge1xuICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGUge1xuICAgIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IGF1dG87IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYWRkaXRpb25hbF9maWVsZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2J1dHRvbiB7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19pbnB1dHNfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC4ycmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWE6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveDpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfbGFiZWw6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyazpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnNwaW5uZXJfYm94IHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwOyB9XG5cbi5hcHAtb2YtbWVudS13cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTllZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG5cbi5hcHAtb2YtbWVudS1pIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDAuNmVtIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmOyB9XG5cbi5hcHAtb2YtbWVudS1hY3RpdmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM0MzUwYTI7IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2luZGV4LnNjc3NcIjtcblxuLmNvbnRlbnRfc2VjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgJl9fcGFnZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX19uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAmLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgJl9fYXJ0aWNsZV9zdWJfdGl0bGUge1xuICAgIGNvbG9yOiAkZ3JheS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxuXG4gICZfX2FydGljbGUge1xuICAgIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAmX19hcnRpY2xlX3RleHQge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyBcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IFxuXG4gICAgJi0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19hZGRpdGlvbmFsX2ZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICB9XG5cbiAgJl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgfVxuXG4gICZfX2lucHV0c19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAmX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW07XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICZfX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2NoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLnNwaW5uZXJfYm94IHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbWluLWhlaWdodDogOTB2aDtcbiAgLy8gbWluLXdpZHRoOiA5MHZ3OyBcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuIiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcbiRlbGVtZW50LXNlY29uZC1jb2xvcjogIzlmYTZjYjtcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XG4kZWxlbWVudC1kYW5nZXItY29sb3I6IHJlZDtcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcblxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcbiR3aGl0ZTogI2ZmZjtcbiRiYWNrZ3JvdW5kLWRpc2FibGVkLWNvbG9yOiAjY2VkNGRhO1xuXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcblxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XG5cbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcbiRyZWQtY29sb3I6ICNmYzY0Njc7XG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XG5cbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XG5cbiRpY29uLWRhcmstZ3JheS1jb2xvcjogI0E0QThCRTtcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xuXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7IiwiQGltcG9ydCBcIi4uL3NoYXJlZC9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG4uYXBwLW9mLW1lbnUtd3JhcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U5ZWY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmFwcC1vZi1tZW51LWkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMC42ZW0gMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZmY7XG59XG5cbi5hcHAtb2YtbWVudS1hY3RpdmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICRlbGVtZW50LWJhc2UtY29sb3I7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-menu/online-form-menu.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-menu/online-form-menu.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: OnlineFormMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormMenuComponent", function() { return OnlineFormMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/main-menu-name.model */ "./src/app/modules/vertical-data-collection/online-form/model/main-menu-name.model.ts");



var OnlineFormMenuComponent = /** @class */ (function () {
    function OnlineFormMenuComponent() {
        this.activeMenuItemEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeMenuItem = _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].generalInfo;
        this.menuItems = [
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].generalInfo, title: "General Information", time: 48 },
            {
                name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].documentsForms,
                title: "Documents & Forms",
                time: 15
            },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].consentInfo, title: "Consent", time: 12 },
            {
                name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].paymentSettings,
                title: "Payment Settings",
                time: 10
            },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].tuitionContract, title: "Tuition Contract", time: 6 },
            {
                name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].termsConditions,
                title: "Term & Conditions",
                time: 14
            },
            { name: _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].payment, title: "Payment", time: 18 }
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
            case _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].paymentSettings:
                return this.checkItemIsActive(_model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_2__["mainMenuNames"].paymentSettings);
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
            template: __webpack_require__(/*! ./online-form-menu.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-menu/online-form-menu.component.html"),
            styles: [__webpack_require__(/*! ./online-form-menu.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-menu/online-form-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormMenuComponent);
    return OnlineFormMenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-nav/online-form-nav.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-nav/online-form-nav.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row no-gutters py-2 align-items-center\">\n  <div class=\"col app-text-second app-text-uppercase\">{{formName}}</div>\n  <div class=\"col text-right\">\n    <button class=\"btn app-btn-outline-primary app-text-uppercase px-5 mr-3\" (click)=\"onAction('cancel')\">Back</button>\n    <button class=\"btn app-btn-primary app-text-uppercase px-5\" (click)=\"onAction('save')\">Save Form</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-nav/online-form-nav.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-nav/online-form-nav.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLW5hdi9vbmxpbmUtZm9ybS1uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-nav/online-form-nav.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-nav/online-form-nav.component.ts ***!
  \***********************************************************************************************************/
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
            template: __webpack_require__(/*! ./online-form-nav.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-nav/online-form-nav.component.html"),
            styles: [__webpack_require__(/*! ./online-form-nav.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-nav/online-form-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnlineFormNavComponent);
    return OnlineFormNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-payment-settings/online-form-payment-settings.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-payment-settings/online-form-payment-settings.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content_section__page_title\">\n  Term & Conditions\n</h1>\n\n<div class=\"app-of-wrap content_section__main\">\n  <!--Title-->\n  <ng-container *ngIf=\"form.paymentSettings?.paymentSettingsItems?.length\">\n    <ng-container\n      *ngFor=\"\n        let item of form.paymentSettings.paymentSettingsItems;\n        let indexItem = index\n      \"\n    >\n      <!--Title-->\n      <h2 class=\"content_section__article_title\">\n        {{ item.title | uppercase }}\n      </h2>\n\n      <!--Text-->\n      <article class=\"content_section__article\">\n        <div\n          class=\"content_section__article_text\"\n          [innerHTML]=\"item.text\"\n        ></div>\n      </article>\n\n      <!--Checkbox-->\n\n      <div\n        *ngIf=\"item.checkbox.isActive\"\n        class=\"content_section__additional_fields\"\n      >\n        <div class=\"content_section__inputs_container p-0\">\n          <div class=\"content_section__checkbox_container p-0\">\n            <input\n              class=\"content_section__checkbox\"\n              type=\"checkbox\"\n              id=\"item.checkbox.id\"\n              [(ngModel)]=\"item.checkbox.checked\"\n              [disabled]=\"true\"\n            />\n\n            <label\n              tabindex=\"indexItem\"\n              for=\"item.id\"\n              class=\"content_section__checkbox_label\"\n            >\n              <span\n                class=\"app-checkbox-checkmark\n                  content_section__checkbox_checkmark\"\n              ></span>\n              {{ item.checkbox.text }}\n            </label>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <app-online-form-signatures\n      [signature]=\"signature\"\n    ></app-online-form-signatures>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-payment-settings/online-form-payment-settings.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-payment-settings/online-form-payment-settings.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS1wYXltZW50LXNldHRpbmdzL29ubGluZS1mb3JtLXBheW1lbnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9zdHlsZXMvaW5kZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUUzQjtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlLEVBQUE7QUFHakI7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtBQUViO01BQ0UsZ0JBQWdCLEVBQUE7QUFJcEI7SUFDRSxjQ1BnQjtJRFFoQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUVsQjtNQUNFLGtCQUFrQixFQUFBO0FBSXRCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUdsQjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFHakI7SUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7QUFHZjtJQUNFLHlCQy9FNEI7SURnRjVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUxoQjtNQVFHLHlCQ3RGMEIsRUFBQTtBRDhFN0I7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFJeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkIsRUFBQTtBQUc3QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7QUFIbkI7TUFNRyx5QkMzRzBCLEVBQUE7QUQrRzlCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFWbkI7TUFhRyxlQUFlLEVBQUE7QUFJbkI7SUFDRSx5QkNqSTRCO0lEa0k1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQUpoQjtNQU9HLGVBQWUsRUFBQTtBQUtyQjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLXBheW1lbnQtc2V0dGluZ3Mvb25saW5lLWZvcm0tcGF5bWVudC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZS0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogIzkwOTA5MDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0LS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcms6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAmX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICAmX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICZfX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXG5cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gIH1cblxuICAmX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICB9XG5cbiAgJl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBtaW4taGVpZ2h0OiA5MHZoO1xuICAvLyBtaW4td2lkdGg6IDkwdnc7IFxuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-payment-settings/online-form-payment-settings.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-payment-settings/online-form-payment-settings.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: OnlineFormPaymentSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormPaymentSettingsComponent", function() { return OnlineFormPaymentSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/vertical-data-collection/online-form/services/signatures/system-signature.service.ts");




// import {PaymentSettingsSignature} from "../../../vertical-data-collection/v-form-constructor/v-form-builder/v-terms-conditions/model/payment-settings.model";

var OnlineFormPaymentSettingsComponent = /** @class */ (function () {
    function OnlineFormPaymentSettingsComponent(systemSignatureService) {
        this.systemSignatureService = systemSignatureService;
        this.SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_3__["SIGNATURE_TYPES"];
        this.E_SIGNATURE_TYPES = _enums__WEBPACK_IMPORTED_MODULE_3__["E_SIGNATURE_TYPES"];
    }
    OnlineFormPaymentSettingsComponent.prototype.ngOnInit = function () {
        this.signature = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.form.paymentSettings.signature);
    };
    OnlineFormPaymentSettingsComponent.prototype.onSystemSign = function () {
        var _this = this;
        Object.keys(this.signature.signed).map(function (item) {
            if (_this.signature.signed[item])
                _this.saveSystemSign(item, 'paymentSettings');
        });
    };
    OnlineFormPaymentSettingsComponent.prototype.saveSystemSign = function (personsType, itemType) {
        var _this = this;
        this.systemSignatureService.sign(this.form._id, this.form.personId, itemType)
            .subscribe(function (res) {
            _this.form.paymentSettings.signature.signed[personsType] = res.created;
        });
    };
    OnlineFormPaymentSettingsComponent.prototype.isDisabledSign = function (personsType) {
        return this.form.paymentSettings.signature.signed[personsType];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OnlineFormPaymentSettingsComponent.prototype, "form", void 0);
    OnlineFormPaymentSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-form-payment-settings',
            template: __webpack_require__(/*! ./online-form-payment-settings.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-payment-settings/online-form-payment-settings.component.html"),
            styles: [__webpack_require__(/*! ./online-form-payment-settings.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-payment-settings/online-form-payment-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormPaymentSettingsComponent);
    return OnlineFormPaymentSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: routes, OnlineFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormRoutingModule", function() { return OnlineFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-form-view/online-form-view.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.ts");




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

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content_section__page_title\">\n  Term & Conditions\n</h1>\n\n<div class=\"app-of-wrap content_section__main\">\n  <!--Title-->\n  <div *ngIf=\"form.termsConditions?.termsConditionsItems?.length\">\n    <ng-container\n      *ngFor=\"\n        let item of form.termsConditions.termsConditionsItems;\n        let indexItem = index\n      \"\n    >\n      <!--Title-->\n      <h2 class=\"content_section__article_title\">\n        {{ item.title }}\n      </h2>\n\n      <!--Text-->\n      <article class=\"content_section__article\">\n        <div\n          class=\"content_section__article_text\"\n          [innerHTML]=\"item.text\"\n        ></div>\n      </article>\n\n      <!--Checkbox-->\n      <div\n        *ngIf=\"item.checkbox.isActive\"\n        class=\"content_section__additional_fields\"\n      >\n        <div class=\"content_section__inputs_container\">\n          <div class=\"content_section__checkbox_container py-0\">\n            <input\n              class=\"content_section__checkbox\"\n              type=\"checkbox\"\n              id=\"item.checkbox.id\"\n              [(ngModel)]=\"item.checkbox.checked\"\n              [disabled]=\"true\"\n            />\n\n            <label\n              tabindex=\"indexItem\"\n              for=\"item.id\"\n              class=\"content_section__checkbox_label\"\n            >\n              <span\n                class=\"app-checkbox-checkmark\n                  content_section__checkbox_checkmark\"\n              ></span>\n              {{ item.checkbox.text }}\n            </label>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <app-online-form-signatures\n      [signature]=\"signature\"\n    ></app-online-form-signatures>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS10ZXJtcy1jb25kaXRpb25zL29ubGluZS1mb3JtLXRlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9zdHlsZXMvaW5kZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUUzQjtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlLEVBQUE7QUFHakI7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtBQUViO01BQ0UsZ0JBQWdCLEVBQUE7QUFJcEI7SUFDRSxjQ1BnQjtJRFFoQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUVsQjtNQUNFLGtCQUFrQixFQUFBO0FBSXRCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUdsQjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFHakI7SUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7QUFHZjtJQUNFLHlCQy9FNEI7SURnRjVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUxoQjtNQVFHLHlCQ3RGMEIsRUFBQTtBRDhFN0I7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFJeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkIsRUFBQTtBQUc3QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7QUFIbkI7TUFNRyx5QkMzRzBCLEVBQUE7QUQrRzlCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFWbkI7TUFhRyxlQUFlLEVBQUE7QUFJbkI7SUFDRSx5QkNqSTRCO0lEa0k1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQUpoQjtNQU9HLGVBQWUsRUFBQTtBQUtyQjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLXRlcm1zLWNvbmRpdGlvbnMvb25saW5lLWZvcm0tdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZS0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogIzkwOTA5MDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0LS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcms6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAmX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICAmX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICZfX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXG5cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gIH1cblxuICAmX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICB9XG5cbiAgJl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBtaW4taGVpZ2h0OiA5MHZoO1xuICAvLyBtaW4td2lkdGg6IDkwdnc7IFxuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.ts ***!
  \*************************************************************************************************************************************/
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
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/vertical-data-collection/online-form/services/signatures/system-signature.service.ts");





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
            template: __webpack_require__(/*! ./online-form-terms-conditions.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./online-form-terms-conditions.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormTermsConditionsComponent);
    return OnlineFormTermsConditionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"content_section__page_title\">\n  Tuition Contract\n</h1>\n<div class=\"app-of-wrap content_section__main\">\n    <div>\n      \n  <!--Title-->\n  <h2 class=\"content_section__article_title\">\n    FEES CONTRACT\n  </h2>\n\n  <!--Table-->\n  <article\n    class=\"app-fb-tuition-table content_section__article\"\n    *ngIf=\"\n      form.tuitionContract.splitBy === TUITION_CONTRACT_SPLIT_TYPES.STUDENT\n    \"\n  >\n    <app-tuition-contract-by-student\n      [tuitionContract]=\"form.tuitionContract\"\n    ></app-tuition-contract-by-student>\n  </article>\n  <article\n    class=\"content_section__article\"\n    *ngIf=\"form.tuitionContract.splitBy === TUITION_CONTRACT_SPLIT_TYPES.FEE\"\n  >\n    <div>\n      <app-tuition-contract-by-fee\n        [tuitionContract]=\"form.tuitionContract\"\n      ></app-tuition-contract-by-fee>\n    </div>\n  </article>\n\n  <!--Text-->\n  <h2 class=\"content_section__article_title\">CONTRACT TEXT:</h2>\n  <article class=\"content_section__article\">\n    <div\n      class=\"content_section__article_text\"\n      [innerHTML]=\"form.tuitionContract.text\"\n    ></div>\n  </article>\n\n  <app-online-form-signatures\n    [signature]=\"signature\"\n  ></app-online-form-signatures>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS10dWl0aW9uLWNvbnRyYWN0L29ubGluZS1mb3JtLXR1aXRpb24tY29udHJhY3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9zdHlsZXMvaW5kZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUUzQjtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlLEVBQUE7QUFHakI7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtBQUViO01BQ0UsZ0JBQWdCLEVBQUE7QUFJcEI7SUFDRSxjQ1BnQjtJRFFoQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUVsQjtNQUNFLGtCQUFrQixFQUFBO0FBSXRCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUdsQjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFHakI7SUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7QUFHZjtJQUNFLHlCQy9FNEI7SURnRjVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUxoQjtNQVFHLHlCQ3RGMEIsRUFBQTtBRDhFN0I7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFJeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkIsRUFBQTtBQUc3QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7QUFIbkI7TUFNRyx5QkMzRzBCLEVBQUE7QUQrRzlCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFWbkI7TUFhRyxlQUFlLEVBQUE7QUFJbkI7SUFDRSx5QkNqSTRCO0lEa0k1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQUpoQjtNQU9HLGVBQWUsRUFBQTtBQUtyQjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLXR1aXRpb24tY29udHJhY3Qvb25saW5lLWZvcm0tdHVpdGlvbi1jb250cmFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZS0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogIzkwOTA5MDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0LS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcms6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAmX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICAmX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICZfX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXG5cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gIH1cblxuICAmX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICB9XG5cbiAgJl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBtaW4taGVpZ2h0OiA5MHZoO1xuICAvLyBtaW4td2lkdGg6IDkwdnc7IFxuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.ts ***!
  \*************************************************************************************************************************************/
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
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signatures/system-signature.service */ "./src/app/modules/vertical-data-collection/online-form/services/signatures/system-signature.service.ts");





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
            template: __webpack_require__(/*! ./online-form-tuition-contract.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.html"),
            styles: [__webpack_require__(/*! ./online-form-tuition-contract.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_4__["SystemSignatureService"]])
    ], OnlineFormTuitionContractComponent);
    return OnlineFormTuitionContractComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr class=\"app-tuition-table-header\">\n      <th scope=\"col\">FEES</th>\n      <th scope=\"col\">FEE AMOUNT</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let item of tuitionContract.fees; let i = index\">\n      <tr *ngIf=\"item.isActive\">\n        <td class=\"font-weight-bold\">{{ item.name }}</td>\n        <td>${{ tempFees[i] || tempFees[0] }}</td>\n      </tr>\n    </ng-container>\n    <tr class=\"app-tuition-table-total font-weight-bold\">\n      <td>BUILDING FEE</td>\n      <td>$1000</td>\n    </tr>\n    <tr class=\"app-tuition-table-total font-weight-bold\">\n      <td>SECURITY FEE</td>\n      <td>$520</td>\n    </tr>\n    <tr class=\"app-tuition-table-total font-weight-bold\">\n      <td>Tuition and Family Fees Total</td>\n      <td>$21160</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLXR1aXRpb24tY29udHJhY3QvdHVpdGlvbi1jb250cmFjdC1ieS1mZWUvdHVpdGlvbi1jb250cmFjdC1ieS1mZWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.ts ***!
  \********************************************************************************************************************************************************/
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
            template: __webpack_require__(/*! ./tuition-contract-by-fee.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.html"),
            styles: [__webpack_require__(/*! ./tuition-contract-by-fee.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TuitionContractByFeeComponent);
    return TuitionContractByFeeComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr class=\"app-tuition-table-header\">\n      <th></th>\n      <th scope=\"col\">\n        CHARLOTTE SIMON\n        <br /><span class=\"font-weight-normal\">1st grade</span>\n      </th>\n      <th scope=\"col\">\n        LUELLA SIMON\n        <br /><span class=\"font-weight-normal\">1st grade</span>\n      </th>\n      <th scope=\"col\">\n        KEITH SIMON\n        <br /><span class=\"font-weight-normal\">1st grade</span>\n      </th>\n      <th scope=\"col\" class=\"app-th-align-reset\">FEE TOTAL</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let item of tuitionContract.fees\">\n      <tr *ngIf=\"item.isActive\">\n        <td class=\"font-weight-bold\">{{ item.name }}</td>\n        <td>\n          $200<br />\n          <ng-container *ngIf=\"item.isActiveDiscount\">\n            <span class=\"app-tuition-discount\">$90 discount</span>\n          </ng-container>\n        </td>\n        <td>$200</td>\n        <td>$200</td>\n        <td>$600</td>\n      </tr>\n    </ng-container>\n    <tr class=\"app-tuition-table-total-2 font-weight-bold\">\n      <td>TOTAL PER STUDENTS</td>\n      <td>$1000</td>\n      <td>$1000</td>\n      <td>$1000</td>\n      <td>$3500</td>\n    </tr>\n    <tr class=\"app-tuition-table-total font-weight-bold\">\n      <td>BUILDING FEE</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td>$1000</td>\n    </tr>\n    <tr class=\"app-tuition-table-total font-weight-bold\">\n      <td>SECURITY FEE</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td>$4500</td>\n    </tr>\n    <tr class=\"app-tuition-table-total font-weight-bold\">\n      <td>Tuition and Family Fees Total</td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td>$4500</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL29ubGluZS1mb3JtLXR1aXRpb24tY29udHJhY3QvdHVpdGlvbi1jb250cmFjdC1ieS1zdHVkZW50L3R1aXRpb24tY29udHJhY3QtYnktc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.ts ***!
  \****************************************************************************************************************************************************************/
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
            template: __webpack_require__(/*! ./tuition-contract-by-student.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.html"),
            styles: [__webpack_require__(/*! ./tuition-contract-by-student.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TuitionContractByStudentComponent);
    return TuitionContractByStudentComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"form\">\n  <app-online-form-nav\n    [formName]=\"form?.name\"\n    (actionEmitter)=\"onAction($event)\"\n  ></app-online-form-nav>\n  <div class=\"container-fluid app-of-background online_form_container\">\n    <div class=\"online_form_container__nav\">\n      <app-online-form-menu\n        [form]=\"form\"\n        (activeMenuItemEmitter)=\"onActiveMenuItem($event)\"\n      ></app-online-form-menu>\n    </div>\n    <div class=\"online_form_container__content\">\n      <app-online-form-general-info\n        *ngIf=\"activeSection === mainMenuNames.generalInfo\"\n        [form]=\"form\"\n      >\n      </app-online-form-general-info>\n      <app-online-form-documents-forms\n        [form]=\"form\"\n        *ngIf=\"activeSection === mainMenuNames.documentsForms\"\n      ></app-online-form-documents-forms>\n      <app-online-form-consent\n        [form]=\"form\"\n        *ngIf=\"activeSection === mainMenuNames.consentInfo\"\n      ></app-online-form-consent>\n      <app-online-form-payment-settings\n        [form]=\"form\"\n        *ngIf=\"activeSection === mainMenuNames.paymentSettings\"\n      ></app-online-form-payment-settings>\n      <app-online-form-terms-conditions\n        [form]=\"form\"\n        *ngIf=\"activeSection === mainMenuNames.termsConditions\"\n      ></app-online-form-terms-conditions>\n      <app-online-form-tuition-contract\n        [form]=\"form\"\n        *ngIf=\"activeSection === mainMenuNames.tuitionContract\"\n      ></app-online-form-tuition-contract>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"!form\">\n  <main-spinner class=\"spinner_box\"></main-spinner\n></ng-container>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n.app-of-background {\n  background-color: #f3f2f3; }\n.online_form_container {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  min-height: auto;\n  padding: 1rem; }\n@media (min-width: 992px) {\n    .online_form_container {\n      flex-direction: row; } }\n.online_form_container__nav {\n    width: auto;\n    width: -webkit-fill-available; }\n@media (min-width: 992px) {\n      .online_form_container__nav {\n        padding-right: 1rem;\n        width: 27rem; } }\n.online_form_container__content {\n    width: auto;\n    width: -webkit-fill-available; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS12aWV3L29ubGluZS1mb3JtLXZpZXcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9zdHlsZXMvaW5kZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS12aWV3L29ubGluZS1mb3JtLXZpZXcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUUzQjtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlLEVBQUE7QUFHakI7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtBQUViO01BQ0UsZ0JBQWdCLEVBQUE7QUFJcEI7SUFDRSxjQ1BnQjtJRFFoQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUVsQjtNQUNFLGtCQUFrQixFQUFBO0FBSXRCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUdsQjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFHakI7SUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7QUFHZjtJQUNFLHlCQy9FNEI7SURnRjVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUxoQjtNQVFHLHlCQ3RGMEIsRUFBQTtBRDhFN0I7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFJeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkIsRUFBQTtBQUc3QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7QUFIbkI7TUFNRyx5QkMzRzBCLEVBQUE7QUQrRzlCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFWbkI7TUFhRyxlQUFlLEVBQUE7QUFJbkI7SUFDRSx5QkNqSTRCO0lEa0k1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQUpoQjtNQU9HLGVBQWUsRUFBQTtBQUtyQjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU0sRUFBQTtBRTlLUjtFQUNJLHlCRElzQixFQUFBO0FDRDFCO0VBQ0ksb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUNnRGI7SUR0REo7TUFTUSxtQkFBbUIsRUFBQSxFQWlCMUI7QUFkRztJQUNJLFdBQVc7SUFDWCw2QkFBNkIsRUFBQTtBQ3dDakM7TUQxQ0E7UUFLUSxtQkFBbUI7UUFDbkIsWUFBWSxFQUFBLEVBRW5CO0FBRUQ7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9vbmxpbmUtZm9ybS12aWV3L29ubGluZS1mb3JtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2JzL2luZGV4LnNjc3MnO1xuXG4kbWFpbi1tZW51LXdpZHRoOiA1NXB4O1xuJHRvcC1tZW51LWhlaWdodDogNDBweDtcblxuLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG5cbi8vICBFeGFtcGxlOiBcbi8vICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykgeyBcbi8vICAgICAgICAgIFxuLy8gICAgICB9XG4gIiwiLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAuY29udGVudF9zZWN0aW9uX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fbWFpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICM5MDkwOTA7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bzsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dC0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19hZGRpdGlvbmFsX2ZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NvbnRyb2xzX2NvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2lucHV0c19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94OmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfbGFiZWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbDpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWluLXdpZHRoOiAxcmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7IH1cblxuLmFwcC1vZi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMzsgfVxuXG4ub25saW5lX2Zvcm1fY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMXJlbTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAub25saW5lX2Zvcm1fY29udGFpbmVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH0gfVxuICAub25saW5lX2Zvcm1fY29udGFpbmVyX19uYXYge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAub25saW5lX2Zvcm1fY29udGFpbmVyX19uYXYge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMjdyZW07IH0gfVxuICAub25saW5lX2Zvcm1fY29udGFpbmVyX19jb250ZW50IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAmX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICAmX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICZfX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXG5cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gIH1cblxuICAmX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICB9XG5cbiAgJl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBtaW4taGVpZ2h0OiA5MHZoO1xuICAvLyBtaW4td2lkdGg6IDkwdnc7IFxuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiLCJAaW1wb3J0ICcuLi9zaGFyZWQvc3R5bGVzL2luZGV4LnNjc3MnO1xuXG4uYXBwLW9mLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4ub25saW5lX2Zvcm1fY29udGFpbmVye1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgICZfX25hdiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICB3aWR0aDogMjdyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: OnlineFormViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormViewComponent", function() { return OnlineFormViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/online-form.service */ "./src/app/modules/vertical-data-collection/online-form/services/online-form.service.ts");
/* harmony import */ var _model_main_menu_name_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/main-menu-name.model */ "./src/app/modules/vertical-data-collection/online-form/model/main-menu-name.model.ts");
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
            template: __webpack_require__(/*! ./online-form-view.component.html */ "./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.html"),
            styles: [__webpack_require__(/*! ./online-form-view.component.scss */ "./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_online_form_service__WEBPACK_IMPORTED_MODULE_3__["OnlineFormService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], OnlineFormViewComponent);
    return OnlineFormViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/online-form.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/online-form.module.ts ***!
  \************************************************************************************/
/*! exports provided: OnlineFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormModule", function() { return OnlineFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _online_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-form-routing.module */ "./src/app/modules/vertical-data-collection/online-form/online-form-routing.module.ts");
/* harmony import */ var _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./online-form-view/online-form-view.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-view/online-form-view.component.ts");
/* harmony import */ var _online_form_nav_online_form_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./online-form-nav/online-form-nav.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-nav/online-form-nav.component.ts");
/* harmony import */ var _online_form_menu_online_form_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./online-form-menu/online-form-menu.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-menu/online-form-menu.component.ts");
/* harmony import */ var _online_form_general_info_online_form_general_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./online-form-general-info/online-form-general-info.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/online-form-general-info.component.ts");
/* harmony import */ var _services_online_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/online-form.service */ "./src/app/modules/vertical-data-collection/online-form/services/online-form.service.ts");
/* harmony import */ var _online_form_general_info_general_info_students_general_info_students_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./online-form-general-info/general-info-students/general-info-students.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-students/general-info-students.component.ts");
/* harmony import */ var _online_form_general_info_general_info_parents_general_info_parents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./online-form-general-info/general-info-parents/general-info-parents.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-general-info/general-info-parents/general-info-parents.component.ts");
/* harmony import */ var _online_form_fields_online_form_fields_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./online-form-fields/online-form-fields.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/online-form-fields.component.ts");
/* harmony import */ var _online_form_fields_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./online-form-fields/fields/time-field/time-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.ts");
/* harmony import */ var _online_form_fields_fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./online-form-fields/fields/short-text-field/short-text-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./online-form-fields/fields/phone-number-field/phone-number-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts");
/* harmony import */ var _online_form_fields_fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./online-form-fields/fields/number-text-field/number-text-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./online-form-fields/fields/multiple-options-field/multiple-options-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _online_form_fields_fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./online-form-fields/fields/long-text-field/long-text-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./online-form-fields/fields/label-field/label-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.ts");
/* harmony import */ var _online_form_fields_fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./online-form-fields/fields/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _online_form_fields_fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./online-form-fields/fields/empty-line-field/empty-line-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _online_form_fields_fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./online-form-fields/fields/email-field/email-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.ts");
/* harmony import */ var _online_form_fields_fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./online-form-fields/fields/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _online_form_fields_fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./online-form-fields/fields/date-time-field/date-time-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts");
/* harmony import */ var _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/field-content.directive */ "./src/app/modules/vertical-data-collection/online-form/directives/field-content.directive.ts");
/* harmony import */ var _online_form_fields_entryComponents__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./online-form-fields/entryComponents */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/entryComponents.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _online_form_consent_online_form_consent_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./online-form-consent/online-form-consent.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-consent/online-form-consent.component.ts");
/* harmony import */ var _shared_components_content_nav_content_nav_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/components/content-nav/content-nav.component */ "./src/app/modules/vertical-data-collection/online-form/shared/components/content-nav/content-nav.component.ts");
/* harmony import */ var _shared_components_pdf_loader_pdf_loader_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/components/pdf-loader/pdf-loader.component */ "./src/app/modules/vertical-data-collection/online-form/shared/components/pdf-loader/pdf-loader.component.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/signatures/system-signature.service */ "./src/app/modules/vertical-data-collection/online-form/services/signatures/system-signature.service.ts");
/* harmony import */ var _online_form_documents_forms_online_form_documents_forms_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./online-form-documents-forms/online-form-documents-forms.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-form-documents-forms.component.ts");
/* harmony import */ var _online_form_documents_forms_online_documents_online_documents_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./online-form-documents-forms/online-documents/online-documents.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-documents/online-documents.component.ts");
/* harmony import */ var _online_form_documents_forms_online_pdf_forms_online_pdf_forms_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./online-form-documents-forms/online-pdf-forms/online-pdf-forms.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-documents-forms/online-pdf-forms/online-pdf-forms.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _online_form_payment_settings_online_form_payment_settings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./online-form-payment-settings/online-form-payment-settings.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-payment-settings/online-form-payment-settings.component.ts");
/* harmony import */ var _online_form_terms_conditions_online_form_terms_conditions_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./online-form-terms-conditions/online-form-terms-conditions.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-terms-conditions/online-form-terms-conditions.component.ts");
/* harmony import */ var _online_form_tuition_contract_online_form_tuition_contract_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./online-form-tuition-contract/online-form-tuition-contract.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/online-form-tuition-contract.component.ts");
/* harmony import */ var _online_form_tuition_contract_tuition_contract_by_student_tuition_contract_by_student_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-student/tuition-contract-by-student.component.ts");
/* harmony import */ var _online_form_tuition_contract_tuition_contract_by_fee_tuition_contract_by_fee_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-tuition-contract/tuition-contract-by-fee/tuition-contract-by-fee.component.ts");
/* harmony import */ var _shared_components_signatures_signatures_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/components/signatures/signatures.component */ "./src/app/modules/vertical-data-collection/online-form/shared/components/signatures/signatures.component.ts");
/* harmony import */ var _shared_components_sharedRedComponents_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../shared/components/sharedRedComponents.module */ "./src/app/shared/components/sharedRedComponents.module.ts");











































var OnlineFormModule = /** @class */ (function () {
    function OnlineFormModule() {
    }
    OnlineFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shared_components_signatures_signatures_component__WEBPACK_IMPORTED_MODULE_41__["SignaturesComponent"],
                _online_form_view_online_form_view_component__WEBPACK_IMPORTED_MODULE_4__["OnlineFormViewComponent"],
                _online_form_nav_online_form_nav_component__WEBPACK_IMPORTED_MODULE_5__["OnlineFormNavComponent"],
                _online_form_menu_online_form_menu_component__WEBPACK_IMPORTED_MODULE_6__["OnlineFormMenuComponent"],
                _online_form_general_info_online_form_general_info_component__WEBPACK_IMPORTED_MODULE_7__["OnlineFormGeneralInfoComponent"],
                _online_form_general_info_general_info_students_general_info_students_component__WEBPACK_IMPORTED_MODULE_9__["GeneralInfoStudentsComponent"],
                _online_form_general_info_general_info_parents_general_info_parents_component__WEBPACK_IMPORTED_MODULE_10__["GeneralInfoParentsComponent"],
                _online_form_fields_online_form_fields_component__WEBPACK_IMPORTED_MODULE_11__["OnlineFormFieldsComponent"],
                _online_form_fields_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_12__["TimeFieldComponent"],
                _online_form_fields_fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_13__["ShortTextFieldComponent"],
                _online_form_fields_fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_14__["PhoneNumberFieldComponent"],
                _online_form_fields_fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_15__["NumberTextFieldComponent"],
                _online_form_fields_fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_16__["MultipleOptionsFieldComponent"],
                _online_form_fields_fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_17__["LongTextFieldComponent"],
                _online_form_fields_fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_18__["LabelFieldComponent"],
                _online_form_fields_fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_19__["HebrewDateFieldComponent"],
                _online_form_fields_fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_20__["EmptyLineFieldComponent"],
                _online_form_fields_fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_21__["EmailFieldComponent"],
                _online_form_fields_fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_22__["DropDownListFieldComponent"],
                _online_form_fields_fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_23__["DateTimeFieldComponent"],
                _directives_field_content_directive__WEBPACK_IMPORTED_MODULE_24__["FieldContentDirective"],
                _online_form_consent_online_form_consent_component__WEBPACK_IMPORTED_MODULE_28__["OnlineFormConsentComponent"],
                _shared_components_content_nav_content_nav_component__WEBPACK_IMPORTED_MODULE_29__["ContentNavComponent"],
                _shared_components_pdf_loader_pdf_loader_component__WEBPACK_IMPORTED_MODULE_30__["PdfLoaderComponent"],
                _online_form_documents_forms_online_form_documents_forms_component__WEBPACK_IMPORTED_MODULE_32__["OnlineFormDocumentsFormsComponent"],
                _online_form_documents_forms_online_documents_online_documents_component__WEBPACK_IMPORTED_MODULE_33__["OnlineDocumentsComponent"],
                _online_form_documents_forms_online_pdf_forms_online_pdf_forms_component__WEBPACK_IMPORTED_MODULE_34__["OnlinePdfFormsComponent"],
                _online_form_payment_settings_online_form_payment_settings_component__WEBPACK_IMPORTED_MODULE_36__["OnlineFormPaymentSettingsComponent"],
                _online_form_terms_conditions_online_form_terms_conditions_component__WEBPACK_IMPORTED_MODULE_37__["OnlineFormTermsConditionsComponent"],
                _online_form_tuition_contract_online_form_tuition_contract_component__WEBPACK_IMPORTED_MODULE_38__["OnlineFormTuitionContractComponent"],
                _online_form_tuition_contract_tuition_contract_by_student_tuition_contract_by_student_component__WEBPACK_IMPORTED_MODULE_39__["TuitionContractByStudentComponent"],
                _online_form_tuition_contract_tuition_contract_by_fee_tuition_contract_by_fee_component__WEBPACK_IMPORTED_MODULE_40__["TuitionContractByFeeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"],
                _online_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineFormRoutingModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_35__["PdfViewerModule"],
                _shared_components_sharedRedComponents_module__WEBPACK_IMPORTED_MODULE_42__["SharedRedComponentsModule"]
            ],
            providers: [_services_online_form_service__WEBPACK_IMPORTED_MODULE_8__["OnlineFormService"], _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_31__["SystemSignatureService"]],
            entryComponents: [_online_form_fields_entryComponents__WEBPACK_IMPORTED_MODULE_25__["entryComponents"]]
        })
    ], OnlineFormModule);
    return OnlineFormModule;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/services/files.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/services/files.service.ts ***!
  \****************************************************************************************/
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
        // this.http.get(url+this.token).subscribe(data=>this.downloadFile(data)),
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

/***/ "./src/app/modules/vertical-data-collection/online-form/services/online-form.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/services/online-form.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: OnlineFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineFormService", function() { return OnlineFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _online_form_fields_fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../online-form-fields/fields/short-text-field/short-text-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/short-text-field/short-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../online-form-fields/fields/long-text-field/long-text-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/long-text-field/long-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../online-form-fields/fields/number-text-field/number-text-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/number-text-field/number-text-field.component.ts");
/* harmony import */ var _online_form_fields_fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../online-form-fields/fields/multiple-options-field/multiple-options-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/multiple-options-field/multiple-options-field.component.ts");
/* harmony import */ var _online_form_fields_fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../online-form-fields/fields/drop-down-list-field/drop-down-list-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/drop-down-list-field/drop-down-list-field.component.ts");
/* harmony import */ var _online_form_fields_fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../online-form-fields/fields/date-time-field/date-time-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/date-time-field/date-time-field.component.ts");
/* harmony import */ var _online_form_fields_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../online-form-fields/fields/time-field/time-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/time-field/time-field.component.ts");
/* harmony import */ var _online_form_fields_fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../online-form-fields/fields/email-field/email-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/email-field/email-field.component.ts");
/* harmony import */ var _online_form_fields_fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../online-form-fields/fields/phone-number-field/phone-number-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/phone-number-field/phone-number-field.component.ts");
/* harmony import */ var _online_form_fields_fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../online-form-fields/fields/hebrew-date-field/hebrew-date-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/hebrew-date-field/hebrew-date-field.component.ts");
/* harmony import */ var _online_form_fields_fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../online-form-fields/fields/label-field/label-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/label-field/label-field.component.ts");
/* harmony import */ var _online_form_fields_fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../online-form-fields/fields/empty-line-field/empty-line-field.component */ "./src/app/modules/vertical-data-collection/online-form/online-form-fields/fields/empty-line-field/empty-line-field.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");

















var OnlineFormService = /** @class */ (function () {
    function OnlineFormService(http) {
        this.http = http;
        this.componentFieldsMap = new Map([
            [101, _online_form_fields_fields_short_text_field_short_text_field_component__WEBPACK_IMPORTED_MODULE_4__["ShortTextFieldComponent"]],
            [102, _online_form_fields_fields_long_text_field_long_text_field_component__WEBPACK_IMPORTED_MODULE_5__["LongTextFieldComponent"]],
            [103, _online_form_fields_fields_number_text_field_number_text_field_component__WEBPACK_IMPORTED_MODULE_6__["NumberTextFieldComponent"]],
            [104, _online_form_fields_fields_multiple_options_field_multiple_options_field_component__WEBPACK_IMPORTED_MODULE_7__["MultipleOptionsFieldComponent"]],
            [105, _online_form_fields_fields_drop_down_list_field_drop_down_list_field_component__WEBPACK_IMPORTED_MODULE_8__["DropDownListFieldComponent"]],
            [106, _online_form_fields_fields_date_time_field_date_time_field_component__WEBPACK_IMPORTED_MODULE_9__["DateTimeFieldComponent"]],
            [107, _online_form_fields_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__["TimeFieldComponent"]],
            [108, _online_form_fields_fields_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_11__["EmailFieldComponent"]],
            [109, _online_form_fields_fields_phone_number_field_phone_number_field_component__WEBPACK_IMPORTED_MODULE_12__["PhoneNumberFieldComponent"]],
            [110, _online_form_fields_fields_hebrew_date_field_hebrew_date_field_component__WEBPACK_IMPORTED_MODULE_13__["HebrewDateFieldComponent"]],
            [111, _online_form_fields_fields_label_field_label_field_component__WEBPACK_IMPORTED_MODULE_14__["LabelFieldComponent"]],
            [112, _online_form_fields_fields_empty_line_field_empty_line_field_component__WEBPACK_IMPORTED_MODULE_15__["EmptyLineFieldComponent"]]
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

/***/ "./src/app/modules/vertical-data-collection/online-form/services/signatures/system-signature.service.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/services/signatures/system-signature.service.ts ***!
  \**************************************************************************************************************/
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

/***/ "./src/app/modules/vertical-data-collection/online-form/shared/components/content-nav/content-nav.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/shared/components/content-nav/content-nav.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 app-of-nav-wrap\">\n  <nav class=\"navbar navbar-expand py-0\">\n    <div class=\"justify-content-left\">\n      <ul class=\"navbar-nav\">\n        <ng-container\n          *ngFor=\"let item of content; let i = index; let lastIndex = last\"\n        >\n          <li\n            class=\"nav-item py-2 px-1\"\n            [ngClass]=\"{\n              'app-text-primary app-of-nav-active-border': activeId === item.id\n            }\"\n          >\n            <a\n              class=\"nav-link font-weight-bold app-cursor-pointer\"\n              (click)=\"setActiveId(item.id)\"\n            >\n              {{ item.title }}\n            </a>\n          </li>\n          <ng-container *ngIf=\"!lastIndex\">\n            <li class=\"nav-item py-2 px-1\">\n              <a class=\"nav-link\">\n                <i class=\"fas fa-chevron-right fa-sm app-text-second\"></i>\n              </a>\n            </li>\n          </ng-container>\n        </ng-container>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/shared/components/content-nav/content-nav.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/shared/components/content-nav/content-nav.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n.navbar-expand .navbar-nav {\n  flex-wrap: wrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvY29tcG9uZW50cy9jb250ZW50LW5hdi9jb250ZW50LW5hdi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvbW9kdWxlcy92ZXJ0aWNhbC1kYXRhLWNvbGxlY3Rpb24vb25saW5lLWZvcm0vc2hhcmVkL3N0eWxlcy9pbmRleC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9jb21wb25lbnRzL2NvbnRlbnQtbmF2L2NvbnRlbnQtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUUzQjtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlLEVBQUE7QUFHakI7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtBQUViO01BQ0UsZ0JBQWdCLEVBQUE7QUFJcEI7SUFDRSxjQ1BnQjtJRFFoQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUVsQjtNQUNFLGtCQUFrQixFQUFBO0FBSXRCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUdsQjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFHakI7SUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7QUFHZjtJQUNFLHlCQy9FNEI7SURnRjVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUxoQjtNQVFHLHlCQ3RGMEIsRUFBQTtBRDhFN0I7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFJeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkIsRUFBQTtBQUc3QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7QUFIbkI7TUFNRyx5QkMzRzBCLEVBQUE7QUQrRzlCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFWbkI7TUFhRyxlQUFlLEVBQUE7QUFJbkI7SUFDRSx5QkNqSTRCO0lEa0k1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQUpoQjtNQU9HLGVBQWUsRUFBQTtBQUtyQjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU0sRUFBQTtBRTlLUjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9jb21wb25lbnRzL2NvbnRlbnQtbmF2L2NvbnRlbnQtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9icy9pbmRleC5zY3NzJztcblxuJG1haW4tbWVudS13aWR0aDogNTVweDtcbiR0b3AtbWVudS1oZWlnaHQ6IDQwcHg7XG5cbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuXG4vLyAgRXhhbXBsZTogXG4vLyAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHsgXG4vLyAgICAgICAgICBcbi8vICAgICAgfVxuICIsIi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuLmNvbnRlbnRfc2VjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fcGFnZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtRXh0cmFCb2xkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RpdGxlLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV9zdWJfdGl0bGUge1xuICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGUge1xuICAgIGJvcmRlcjogMC4xcmVtICNjY2Mgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IGF1dG87IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYWRkaXRpb25hbF9maWVsZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2J1dHRvbiB7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19pbnB1dHNfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC4ycmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWE6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveDpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfbGFiZWw6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NoZWNrbWFyazpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnNwaW5uZXJfYm94IHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwOyB9XG5cbi5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IHtcbiAgZmxleC13cmFwOiB3cmFwOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9pbmRleC5zY3NzXCI7XG5cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICZfX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9fbWFpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gICZfX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgJi0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gICZfX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogJGdyYXktY29sb3I7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgJl9fYXJ0aWNsZV90ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgXG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyBcblxuICAgICYtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fYWRkaXRpb25hbF9maWVsZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgfVxuXG4gICZfX2NvbnRyb2xzX2NvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIH1cblxuICAmX19pbnB1dHNfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgJl9fdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC4ycmVtO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmX19jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfbGFiZWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWluLXdpZHRoOiAxcmVtO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIC8vIG1pbi13aWR0aDogOTB2dzsgXG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9pbmRleC5zY3NzJztcblxuLm5hdmJhci1leHBhbmQgLm5hdmJhci1uYXYge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/shared/components/content-nav/content-nav.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/shared/components/content-nav/content-nav.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ContentNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentNavComponent", function() { return ContentNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentNavComponent = /** @class */ (function () {
    function ContentNavComponent() {
        this.activeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ContentNavComponent.prototype.ngOnInit = function () {
        // console.log(this.content);
        if (this.content.length) {
            this.setActiveId(this.content[0].id);
            // console.log(this.content[0].id);
        }
    };
    ContentNavComponent.prototype.setActiveId = function (id) {
        this.activeId = id;
        this.activeEmitter.emit(this.activeId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ContentNavComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContentNavComponent.prototype, "activeEmitter", void 0);
    ContentNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-nav',
            template: __webpack_require__(/*! ./content-nav.component.html */ "./src/app/modules/vertical-data-collection/online-form/shared/components/content-nav/content-nav.component.html"),
            styles: [__webpack_require__(/*! ./content-nav.component.scss */ "./src/app/modules/vertical-data-collection/online-form/shared/components/content-nav/content-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentNavComponent);
    return ContentNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/shared/components/pdf-loader/pdf-loader.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/shared/components/pdf-loader/pdf-loader.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"zooming\">\n    <div class=\"pdf_wrapper\">\n        <ng-container *ngIf=\"isStartLoading && !isFinishLoading\">\n          <main-spinner class=\"spinner_box\"></main-spinner>\n          <!-- Old spinner -->\n          <!-- <div\n            class=\"test-c d-flex justify-content-center overlay pt-5\"\n          >\n            <div class=\"spinner-border text-light\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div> -->\n        </ng-container>\n        <div class=\"slice-wrap m-3\">\n      \n          <ng-container *ngIf=\"isFinishLoading\">\n            <div class=\"fields_group\">\n              <div *ngFor=\"let div of pdf.form.fieldsPdf[page - 1]\">\n                <div [ngStyle]=\"styleObject(div)\" class=\"div-inside\">\n                  <ng-container *ngIf=\"isShowLinkedFieldForSystem(div)\">\n                    <div\n                      class=\"form-group app-input-container\"\n                      [ngClass]=\"{\n                        'app-input-fill':\n                          div.linkedField.value && !div.linkedField.options.hideLabel\n                      }\"\n                    >\n                      <label\n                        *ngIf=\"!div.linkedField.options.hideLabel\"\n                        class=\"app-input-label\"\n                        >{{ div.linkedField.name | titlecase }}</label\n                      >\n                      <input\n                        type=\"text\"\n                        aria-describedby=\"basic-addon2\"\n                        class=\"app-input\"\n                        [(ngModel)]=\"div.linkedField.value\"\n                        [readOnly]=\"div.linkedField.options.readonly\"\n                        [required]=\"div.linkedField.options.required\"\n                        [placeholder]=\"div.linkedField.name | titlecase\"\n                        disabled\n                      />\n                    </div>\n                  </ng-container>\n      \n                  <ng-container *ngIf=\"isShowLinkedFieldForTemporary(div)\">\n                    <div\n                      *ngIf=\"isShowLinkedFieldForTemporary(div)\"\n                      class=\"form-group app-input-container\"\n                      [ngClass]=\"{ 'app-input-fill': div.linkedField.value }\"\n                    >\n                      <label class=\"app-input-label\">{{\n                        div.linkedField.name | titlecase\n                      }}</label>\n                      <input\n                        type=\"text\"\n                        aria-describedby=\"basic-addon2\"\n                        class=\"app-input\"\n                        [(ngModel)]=\"div.linkedField.value\"\n                        [placeholder]=\"div.linkedField.name | titlecase\"\n                        disabled\n                      />\n                    </div>\n                  </ng-container>\n                  <ng-container *ngIf=\"isShowLinkedFieldForSignature(div)\">\n                    <div\n                      *ngIf=\"isShowLinkedFieldForSignature(div)\"\n                      class=\"form-group\"\n                    >\n                      <span>&nbsp; Sign Here</span>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n      \n          <div>\n            <pdf-viewer\n              [original-size]=\"false\"\n              [src]=\"{ url: pdf.form.link + token }\"\n              [render-text-mode]=\"0\"\n              [autoresize]=\"true\"\n              [show-all]=\"false\"\n              [page]=\"page\"\n              style=\"display: block;\"\n              (on-progress)=\"onProgress($event)\"\n            >\n            </pdf-viewer>\n          </div>\n        </div>\n      </div>\n      \n      <div *ngIf=\"pdf.form.numberOfPages > 1\" class=\"pdf_container\">\n        <ngb-pagination\n          [collectionSize]=\"pdf.form.numberOfPages * 10\"\n          [(page)]=\"page\"\n          aria-label=\"Default pagination\"\n        ></ngb-pagination>\n      </div>\n      \n</div> "

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/shared/components/pdf-loader/pdf-loader.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/shared/components/pdf-loader/pdf-loader.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n.pdf_wrapper {\n  border: 3px dashed #d6d6d6;\n  border-radius: 3px;\n  background-color: #f6f6f6;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  position: relative;\n  zoom: normal; }\n.slice-wrap {\n  height: auto;\n  min-height: 54em;\n  position: relative;\n  width: 55em;\n  zoom: normal; }\n.overlay {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  zoom: normal; }\n.fields_group {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 54em;\n  height: auto;\n  min-height: 54em;\n  zoom: normal; }\n.div-inside {\n  border: 2px solid #000000;\n  background-color: white;\n  position: absolute;\n  z-index: 9900;\n  /*font-size: 0.5rem!important;*/\n  zoom: normal; }\n.app-input {\n  border: none;\n  min-height: 0;\n  zoom: normal; }\n.zooming {\n  zoom: 0.35; }\n@media (min-width: 576px) {\n    .zooming {\n      zoom: 0.5; } }\n@media (min-width: 768px) {\n    .zooming {\n      zoom: 0.75; } }\n@media (min-width: 992px) {\n    .zooming {\n      zoom: normal; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvY29tcG9uZW50cy9wZGYtbG9hZGVyL3BkZi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9zdHlsZXMvaW5kZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvY29tcG9uZW50cy9wZGYtbG9hZGVyL3BkZi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUUzQjtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlLEVBQUE7QUFHakI7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtBQUViO01BQ0UsZ0JBQWdCLEVBQUE7QUFJcEI7SUFDRSxjQ1BnQjtJRFFoQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUVsQjtNQUNFLGtCQUFrQixFQUFBO0FBSXRCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUdsQjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFHakI7SUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7QUFHZjtJQUNFLHlCQy9FNEI7SURnRjVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUxoQjtNQVFHLHlCQ3RGMEIsRUFBQTtBRDhFN0I7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFJeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkIsRUFBQTtBQUc3QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7QUFIbkI7TUFNRyx5QkMzRzBCLEVBQUE7QUQrRzlCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFWbkI7TUFhRyxlQUFlLEVBQUE7QUFJbkI7SUFDRSx5QkNqSTRCO0lEa0k1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQUpoQjtNQU9HLGVBQWUsRUFBQTtBQUtyQjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU0sRUFBQTtBRTlLUjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2Q7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUVkO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0FBRWQ7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsK0JBQUE7RUFDQSxZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWSxFQUFBO0FBR2Q7RUFDRSxVQUFVLEVBQUE7QUNRUjtJRFRKO01BSUksU0FBUyxFQUFBLEVBVVo7QUNMRztJRFRKO01BUUksVUFBVSxFQUFBLEVBTWI7QUNMRztJRFRKO01BWUksWUFBWSxFQUFBLEVBRWYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvY29tcG9uZW50cy9wZGYtbG9hZGVyL3BkZi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2JzL2luZGV4LnNjc3MnO1xuXG4kbWFpbi1tZW51LXdpZHRoOiA1NXB4O1xuJHRvcC1tZW51LWhlaWdodDogNDBweDtcblxuLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG5cbi8vICBFeGFtcGxlOiBcbi8vICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykgeyBcbi8vICAgICAgICAgIFxuLy8gICAgICB9XG4gIiwiLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAuY29udGVudF9zZWN0aW9uX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fbWFpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICM5MDkwOTA7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bzsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlX3RleHQge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dC0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19hZGRpdGlvbmFsX2ZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MTVweDtcbiAgICBtaW4td2lkdGg6IDIwcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NvbnRyb2xzX2NvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2lucHV0c19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94OmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfbGFiZWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbDpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWluLXdpZHRoOiAxcmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY2hlY2ttYXJrOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7IH1cblxuLnBkZl93cmFwcGVyIHtcbiAgYm9yZGVyOiAzcHggZGFzaGVkICNkNmQ2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgem9vbTogbm9ybWFsOyB9XG5cbi5zbGljZS13cmFwIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA1NGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1NWVtO1xuICB6b29tOiBub3JtYWw7IH1cblxuLm92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgem9vbTogbm9ybWFsOyB9XG5cbi5maWVsZHNfZ3JvdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDU0ZW07XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNTRlbTtcbiAgem9vbTogbm9ybWFsOyB9XG5cbi5kaXYtaW5zaWRlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTkwMDtcbiAgLypmb250LXNpemU6IDAuNXJlbSFpbXBvcnRhbnQ7Ki9cbiAgem9vbTogbm9ybWFsOyB9XG5cbi5hcHAtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHpvb206IG5vcm1hbDsgfVxuXG4uem9vbWluZyB7XG4gIHpvb206IDAuMzU7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgLnpvb21pbmcge1xuICAgICAgem9vbTogMC41OyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnpvb21pbmcge1xuICAgICAgem9vbTogMC43NTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC56b29taW5nIHtcbiAgICAgIHpvb206IG5vcm1hbDsgfSB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9pbmRleC5zY3NzXCI7XG5cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICZfX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fbmF2IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9fbWFpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gICZfX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgJi0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gICZfX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogJGdyYXktY29sb3I7XG4gICAgZm9udC1mYW1pbHk6IE51bml0b1NhbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgJl9fYXJ0aWNsZV90ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgXG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyBcblxuICAgICYtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fYWRkaXRpb25hbF9maWVsZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgfVxuXG4gICZfX2NvbnRyb2xzX2NvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIH1cblxuICAmX19pbnB1dHNfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgJl9fdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC4ycmVtO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmX19jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfbGFiZWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWluLXdpZHRoOiAxcmVtO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIC8vIG1pbi13aWR0aDogOTB2dzsgXG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG4ucGRmX3dyYXBwZXIge1xuICBib3JkZXI6IDNweCBkYXNoZWQgI2Q2ZDZkNjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6b29tOiBub3JtYWw7XG59XG5cbi5zbGljZS13cmFwIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA1NGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1NWVtO1xuICB6b29tOiBub3JtYWw7XG59XG5cbi5vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHpvb206IG5vcm1hbDtcbn1cbi5maWVsZHNfZ3JvdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDU0ZW07XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNTRlbTtcbiAgem9vbTogbm9ybWFsO1xufVxuLmRpdi1pbnNpZGUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTAwO1xuICAvKmZvbnQtc2l6ZTogMC41cmVtIWltcG9ydGFudDsqL1xuICB6b29tOiBub3JtYWw7XG59XG5cbi5hcHAtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHpvb206IG5vcm1hbDtcbn1cblxuLnpvb21pbmcge1xuICB6b29tOiAwLjM1O1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICB6b29tOiAwLjU7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgem9vbTogMC43NTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICB6b29tOiBub3JtYWw7XG4gIH1cbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/shared/components/pdf-loader/pdf-loader.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/shared/components/pdf-loader/pdf-loader.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PdfLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfLoaderComponent", function() { return PdfLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PdfLoaderComponent = /** @class */ (function () {
    function PdfLoaderComponent() {
        // @Output() changeSomeEmitter = new EventEmitter<any>();
        // token = `?api_token=${environment.api_token}`;
        this.token = "";
        this.page = 1;
        this.isStartLoading = false;
        this.isFinishLoading = false;
        this.defaultHeightPdf = 1156;
        this.defaultWidthPdf = 816;
        this.heightPdf = 934;
        this.widthPdf = 660;
    }
    PdfLoaderComponent.prototype.ngOnInit = function () {
        // console.log(this.pdf);
    };
    // actionSome() {
    //   this.changeSomeEmitter.emit(this.isFinishLoading);
    // }
    PdfLoaderComponent.prototype.onProgress = function (progressData) {
        // do anything with progress data. For example progress indicator
        this.isStartLoading = true;
        this.isFinishLoading = progressData.loaded <= progressData.total;
    };
    PdfLoaderComponent.prototype.getKY = function () {
        return this.heightPdf / this.defaultHeightPdf;
    };
    PdfLoaderComponent.prototype.getKX = function () {
        return this.widthPdf / this.defaultWidthPdf;
    };
    PdfLoaderComponent.prototype.styleObject = function (div) {
        return {
            top: (div.top * this.getKY()) / 12 + "em",
            left: (div.left * this.getKX()) / 12 + "em",
            width: (div.width * this.getKX()) / 12 + "em",
            height: (div.height * this.getKY()) / 12 + "em"
        };
    };
    // FIXME: need condition for parse linkedField
    // form.forms.form.fieldsPdf[index].linkedField = undefined;
    PdfLoaderComponent.prototype.isShowLinkedFieldForSystem = function (div) {
        // error with:
        // div.type === 'system'
        // if(div.type === 'system') {
        //   console.log("div.type === 'system' && div.linkedField");
        //   console.log(div.type === 'system');
        //   console.log(div.linkedField);
        // }
        return div.type === "system" && div.linkedField;
    };
    PdfLoaderComponent.prototype.isShowLinkedFieldForTemporary = function (div) {
        // error with:
        // div.type === 'temporary'
        // if(div.type === 'temporary') {
        //   console.log("div.type === 'temporary' && div.linkedField");
        //   console.log(div.type === 'temporary')
        //   console.log(div.linkedField);
        // }
        return div.type === "temporary" && div.linkedField;
    };
    PdfLoaderComponent.prototype.isShowLinkedFieldForSignature = function (div) {
        // error with:
        // div.type === 'signature'
        // if(div.type === 'signature') {
        //   console.log("div.type === 'signature' && div.linkedField");
        //   console.log(div.type === 'signature');
        //   console.log(div.linkedField);
        // }
        return div.type === "signature";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PdfLoaderComponent.prototype, "pdf", void 0);
    PdfLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pdf-loader",
            template: __webpack_require__(/*! ./pdf-loader.component.html */ "./src/app/modules/vertical-data-collection/online-form/shared/components/pdf-loader/pdf-loader.component.html"),
            styles: [__webpack_require__(/*! ./pdf-loader.component.scss */ "./src/app/modules/vertical-data-collection/online-form/shared/components/pdf-loader/pdf-loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PdfLoaderComponent);
    return PdfLoaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/shared/components/signatures/signatures.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/shared/components/signatures/signatures.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--SIGNATURE-->\n<div *ngIf=\"signature?.isRequire\" class=\"content_section__additional_fields\">\n  <!--E-SIGN SIGNATURE-->\n  <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.ESIGN\">\n    <!--EXTERNAL SIGNATURE-->\n    <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.EXTERNAL\">\n      <div\n        class=\"content_section__inputs_container\"\n        *ngIf=\"!signature.isBothParents\"\n      >\n        <textarea\n          class=\"app-input form-control content_section__textarea\"\n          rows=\"2\"\n          placeholder=\"Parent's Signature\"\n          [disabled]=\"true\"\n        ></textarea>\n      </div>\n\n      <div\n        class=\"content_section__inputs_container\"\n        *ngIf=\"signature.isBothParents\"\n      >\n        <textarea\n          class=\"app-input form-control content_section__textarea\"\n          rows=\"2\"\n          placeholder=\"Father's Signature\"\n          [disabled]=\"true\"\n        ></textarea>\n        <textarea\n          class=\"app-input form-control content_section__textarea\"\n          rows=\"2\"\n          placeholder=\"Mother's Signature\"\n          [disabled]=\"true\"\n        ></textarea>\n      </div>\n\n      <div class=\"content_section__controls_container\">\n        <button\n          class=\"btn app-btn-primary content_section__button\"\n          [disabled]=\"true\"\n        >\n          Accept\n        </button>\n      </div>\n    </ng-container>\n\n    <!--SYSTEM SIGNATURE-->\n    <ng-container *ngIf=\"signature.eType === E_SIGNATURE_TYPES.SYSTEM\">\n      <div class=\"content_section__inputs_container\">\n        <ng-container *ngIf=\"!signature.isBothParents\">\n          <div class=\"content_section__checkbox_container\">\n            <input\n              class=\"content_section__checkbox\"\n              type=\"checkbox\"\n              id=\"system_signature_parents\"\n              [(ngModel)]=\"signature.signed.parents\"\n              [disabled]=\"true\"\n            />\n\n            <label\n              tabindex=\"1\"\n              for=\"system_signature_parents\"\n              class=\"content_section__checkbox_label\"\n            >\n              <span\n                class=\"app-checkbox-checkmark\n                      content_section__checkbox_checkmark\"\n              ></span>\n              Parent's Signature\n            </label>\n          </div>\n          <!-- /.content_section__checkbox_container -->\n        </ng-container>\n\n        <ng-container *ngIf=\"signature.isBothParents\">\n          <div class=\"content_section__checkbox_container\">\n            <input\n              class=\"content_section__checkbox\"\n              type=\"checkbox\"\n              id=\"system_signature_fathers\"\n              [(ngModel)]=\"signature.signed.fathers\"\n              [disabled]=\"true\"\n            />\n\n            <label\n              tabindex=\"1\"\n              for=\"system_signature_fathers\"\n              class=\"content_section__checkbox_label\"\n            >\n              <span\n                class=\"app-checkbox-checkmark\n                  content_section__checkbox_checkmark\"\n              ></span>\n              Father's Signature\n            </label>\n          </div>\n          <!-- /.content_section__checkbox_container -->\n\n          <div class=\"content_section__checkbox_container\">\n            <input\n              class=\"content_section__checkbox\"\n              type=\"checkbox\"\n              id=\"system_signature_mothers\"\n              [(ngModel)]=\"signature.signed.mothers\"\n              [disabled]=\"true\"\n            />\n\n            <label\n              tabindex=\"1\"\n              for=\"system_signature_mothers\"\n              class=\"content_section__checkbox_label\"\n            >\n              <span\n                class=\"app-checkbox-checkmark\n                  content_section__checkbox_checkmark\"\n              ></span>\n              Mother's Signature\n            </label>\n          </div>\n          <!-- /.content_section__checkbox_container -->\n        </ng-container>\n      </div>\n      <!-- /.content_section__inputs_container -->\n\n      <div class=\"content_section__controls_container\">\n        <button\n          class=\"btn app-btn-primary content_section__button\"\n          [disabled]=\"true\"\n        >\n          Accept\n        </button>\n      </div>\n    </ng-container>\n  </ng-container>\n\n  <!--WET SIGNATURE-->\n  <ng-container *ngIf=\"signature.type === SIGNATURE_TYPES.WET\">\n    <div\n      class=\"content_section__inputs_container p-0\"\n      *ngIf=\"!signature.isBothParents\"\n    >\n      <textarea\n        class=\"app-input form-control content_section__textarea\"\n        rows=\"2\"\n        placeholder=\"Parent's Signature\"\n        [disabled]=\"true\"\n      ></textarea>\n    </div>\n\n    <div\n      class=\"content_section__inputs_container p-0\"\n      *ngIf=\"signature.isBothParents\"\n    >\n      <textarea\n        class=\"app-input form-control content_section__textarea\"\n        rows=\"2\"\n        placeholder=\"Father's Signature\"\n        [disabled]=\"true\"\n      ></textarea>\n\n      <textarea\n        class=\"app-input form-control content_section__textarea\"\n        rows=\"2\"\n        placeholder=\"Mother's Signature\"\n        [disabled]=\"true\"\n      ></textarea>\n    </div>\n\n    <div class=\"content_section__controls_container\">\n      <button\n        class=\"btn app-btn-primary content_section__button\"\n        [disabled]=\"true\"\n      >\n        Accept\n      </button>\n    </div>\n  </ng-container>\n</div>\n<!--END SIGNATURE-->\n"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/shared/components/signatures/signatures.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/shared/components/signatures/signatures.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.content_section {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.content_section__page_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    text-align: center; }\n.content_section__nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%; }\n.content_section__main {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1.5rem; }\n.content_section__article_title {\n    font-family: NunitoSans-ExtraBold;\n    font-size: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    margin-top: 0; }\n.content_section__article_title--left {\n      text-align: left; }\n.content_section__article_sub_title {\n    color: #909090;\n    font-family: NunitoSans-Regular;\n    font-size: 0.85rem;\n    text-align: center;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article {\n    border: 0.1rem #ccc solid;\n    border-radius: 0.4rem;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    height: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    max-width: 615px;\n    min-width: 20rem;\n    padding: 1rem;\n    width: auto; }\n.content_section__article_text {\n    text-align: justify;\n    margin-bottom: 0.5rem;\n    margin-top: 0.5rem; }\n.content_section__article_text--center {\n      text-align: center; }\n.content_section__additional_fields {\n    width: 100%;\n    max-width: 615px;\n    min-width: 20rem; }\n.content_section__controls_container {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    padding: 1.5rem; }\n.content_section__button {\n    padding: 0.5rem 1.5rem; }\n.content_section__inputs_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 1rem; }\n.content_section__textarea {\n    background-color: #fefefe;\n    margin: 1rem;\n    max-width: 30rem;\n    min-width: 20rem;\n    padding: 0.2rem; }\n.content_section__textarea:disabled {\n      background-color: #fefefe; }\n.content_section__textarea::-webkit-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::-ms-input-placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__textarea::placeholder {\n      padding: 0.5rem 1rem; }\n.content_section__checkbox_container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n.content_section__checkbox {\n    display: none;\n    opacity: 0;\n    position: absolute; }\n.content_section__checkbox:disabled {\n      background-color: #fefefe; }\n.content_section__checkbox_label {\n    align-items: center;\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    outline: 0 transparent solid;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    position: relative; }\n.content_section__checkbox_label:hover {\n      cursor: pointer; }\n.content_section__checkbox_checkmark {\n    background-color: #fefefe;\n    position: relative;\n    margin-right: 1rem;\n    min-width: 1rem; }\n.content_section__checkbox_checkmark:hover {\n      cursor: pointer; }\n.spinner_box {\n  align-items: stretch;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3ZlcnRpY2FsLWRhdGEtY29sbGVjdGlvbi9vbmxpbmUtZm9ybS9zaGFyZWQvY29tcG9uZW50cy9zaWduYXR1cmVzL3NpZ25hdHVyZXMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9zdHlsZXMvaW5kZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUUzQjtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUFHYjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlLEVBQUE7QUFHakI7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtBQUViO01BQ0UsZ0JBQWdCLEVBQUE7QUFJcEI7SUFDRSxjQ1BnQjtJRFFoQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFHcEI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQUdiO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtBQUVsQjtNQUNFLGtCQUFrQixFQUFBO0FBSXRCO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQUdsQjtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFHakI7SUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7QUFHZjtJQUNFLHlCQy9FNEI7SURnRjVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUxoQjtNQVFHLHlCQ3RGMEIsRUFBQTtBRDhFN0I7TUFZRyxvQkFBb0IsRUFBQTtBQVp2QjtNQVlHLG9CQUFvQixFQUFBO0FBWnZCO01BWUcsb0JBQW9CLEVBQUE7QUFJeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkIsRUFBQTtBQUc3QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7QUFIbkI7TUFNRyx5QkMzRzBCLEVBQUE7QUQrRzlCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUFWbkI7TUFhRyxlQUFlLEVBQUE7QUFJbkI7SUFDRSx5QkNqSTRCO0lEa0k1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQUpoQjtNQU9HLGVBQWUsRUFBQTtBQUtyQjtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBR2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVydGljYWwtZGF0YS1jb2xsZWN0aW9uL29ubGluZS1mb3JtL3NoYXJlZC9jb21wb25lbnRzL3NpZ25hdHVyZXMvc2lnbmF0dXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbi5jb250ZW50X3NlY3Rpb24ge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX3BhZ2VfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuY29udGVudF9zZWN0aW9uX19tYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLUV4dHJhQm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90aXRsZS0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfc3ViX3RpdGxlIHtcbiAgICBjb2xvcjogIzkwOTA5MDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19hcnRpY2xlIHtcbiAgICBib3JkZXI6IDAuMXJlbSAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNjE1cHg7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHdpZHRoOiBhdXRvOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fYXJ0aWNsZV90ZXh0LS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDEuNXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX19idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTsgfVxuICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX3RleHRhcmVhOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cbiAgICAuY29udGVudF9zZWN0aW9uX190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cbiAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLmNvbnRlbnRfc2VjdGlvbl9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9sYWJlbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250ZW50X3NlY3Rpb25fX2NoZWNrYm94X2xhYmVsOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07IH1cbiAgICAuY29udGVudF9zZWN0aW9uX19jaGVja2JveF9jaGVja21hcms6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zcGlubmVyX2JveCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvaW5kZXguc2Nzc1wiO1xuXG4uY29udGVudF9zZWN0aW9uIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAmX19wYWdlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX21haW4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAmX19hcnRpY2xlX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogTnVuaXRvU2Fucy1FeHRyYUJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICAmX19hcnRpY2xlX3N1Yl90aXRsZSB7XG4gICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9TYW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG5cbiAgJl9fYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAwLjFyZW0gI2NjYyBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gICZfX2FydGljbGVfdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXG5cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2FkZGl0aW9uYWxfZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYxNXB4O1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gIH1cblxuICAmX19jb250cm9sc19jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICB9XG5cbiAgJl9faW5wdXRzX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gICZfX3RleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94X2xhYmVsIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fY2hlY2tib3hfY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lcl9ib3gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBtaW4taGVpZ2h0OiA5MHZoO1xuICAvLyBtaW4td2lkdGg6IDkwdnc7IFxuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/modules/vertical-data-collection/online-form/shared/components/signatures/signatures.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/vertical-data-collection/online-form/shared/components/signatures/signatures.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SignaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignaturesComponent", function() { return SignaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/signatures/system-signature.service */ "./src/app/modules/vertical-data-collection/online-form/services/signatures/system-signature.service.ts");




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
            template: __webpack_require__(/*! ./signatures.component.html */ "./src/app/modules/vertical-data-collection/online-form/shared/components/signatures/signatures.component.html"),
            styles: [__webpack_require__(/*! ./signatures.component.scss */ "./src/app/modules/vertical-data-collection/online-form/shared/components/signatures/signatures.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_signatures_system_signature_service__WEBPACK_IMPORTED_MODULE_3__["SystemSignatureService"]])
    ], SignaturesComponent);
    return SignaturesComponent;
}());



/***/ }),

/***/ "./src/app/services/online-form/files.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/online-form/files.service.ts ***!
  \*******************************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




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

/***/ "./src/app/services/online-form/signatures/system-signature.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/online-form/signatures/system-signature.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SystemSignatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemSignatureService", function() { return SystemSignatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





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
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiFB + "/sign", data)
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