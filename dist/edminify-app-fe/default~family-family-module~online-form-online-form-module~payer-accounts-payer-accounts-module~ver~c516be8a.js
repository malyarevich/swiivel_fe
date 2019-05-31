(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~family-family-module~online-form-online-form-module~payer-accounts-payer-accounts-module~ver~c516be8a"],{

/***/ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/fesm5/ng-select.js ***!
  \**************************************************************/
/*! exports provided: NgSelectComponent, SELECTION_MODEL_FACTORY, NgSelectModule, NgSelectConfig, ɵs, ɵo, ɵt, ɵr, ɵi, ɵh, ɵf, ɵn, ɵl, ɵg, ɵj, ɵe, ɵd, ɵm, ɵk, ɵc, ɵb, ɵp, ɵq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function() { return NgSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function() { return SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectModule", function() { return NgSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function() { return NgSelectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return ConsoleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgDropdownPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return NgOptionHighlightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgLoadingSpinnerTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgLoadingTextTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgMultiLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgNotFoundTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgOptgroupTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgOptionTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return NgTagTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NgTypeToSearchTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DefaultSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DefaultSelectionModelFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return VirtualScrollService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgOptionTemplateDirective = /** @class */ (function () {
    function NgOptionTemplateDirective(template) {
        this.template = template;
    }
    NgOptionTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-option-tmp]' },] }
    ];
    /** @nocollapse */
    NgOptionTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgOptionTemplateDirective;
}());
var NgOptgroupTemplateDirective = /** @class */ (function () {
    function NgOptgroupTemplateDirective(template) {
        this.template = template;
    }
    NgOptgroupTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-optgroup-tmp]' },] }
    ];
    /** @nocollapse */
    NgOptgroupTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgOptgroupTemplateDirective;
}());
var NgLabelTemplateDirective = /** @class */ (function () {
    function NgLabelTemplateDirective(template) {
        this.template = template;
    }
    NgLabelTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-label-tmp]' },] }
    ];
    /** @nocollapse */
    NgLabelTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgLabelTemplateDirective;
}());
var NgMultiLabelTemplateDirective = /** @class */ (function () {
    function NgMultiLabelTemplateDirective(template) {
        this.template = template;
    }
    NgMultiLabelTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-multi-label-tmp]' },] }
    ];
    /** @nocollapse */
    NgMultiLabelTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgMultiLabelTemplateDirective;
}());
var NgHeaderTemplateDirective = /** @class */ (function () {
    function NgHeaderTemplateDirective(template) {
        this.template = template;
    }
    NgHeaderTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-header-tmp]' },] }
    ];
    /** @nocollapse */
    NgHeaderTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgHeaderTemplateDirective;
}());
var NgFooterTemplateDirective = /** @class */ (function () {
    function NgFooterTemplateDirective(template) {
        this.template = template;
    }
    NgFooterTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-footer-tmp]' },] }
    ];
    /** @nocollapse */
    NgFooterTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgFooterTemplateDirective;
}());
var NgNotFoundTemplateDirective = /** @class */ (function () {
    function NgNotFoundTemplateDirective(template) {
        this.template = template;
    }
    NgNotFoundTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-notfound-tmp]' },] }
    ];
    /** @nocollapse */
    NgNotFoundTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgNotFoundTemplateDirective;
}());
var NgTypeToSearchTemplateDirective = /** @class */ (function () {
    function NgTypeToSearchTemplateDirective(template) {
        this.template = template;
    }
    NgTypeToSearchTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-typetosearch-tmp]' },] }
    ];
    /** @nocollapse */
    NgTypeToSearchTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgTypeToSearchTemplateDirective;
}());
var NgLoadingTextTemplateDirective = /** @class */ (function () {
    function NgLoadingTextTemplateDirective(template) {
        this.template = template;
    }
    NgLoadingTextTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-loadingtext-tmp]' },] }
    ];
    /** @nocollapse */
    NgLoadingTextTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgLoadingTextTemplateDirective;
}());
var NgTagTemplateDirective = /** @class */ (function () {
    function NgTagTemplateDirective(template) {
        this.template = template;
    }
    NgTagTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-tag-tmp]' },] }
    ];
    /** @nocollapse */
    NgTagTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgTagTemplateDirective;
}());
var NgLoadingSpinnerTemplateDirective = /** @class */ (function () {
    function NgLoadingSpinnerTemplateDirective(template) {
        this.template = template;
    }
    NgLoadingSpinnerTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng-loadingspinner-tmp]' },] }
    ];
    /** @nocollapse */
    NgLoadingSpinnerTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return NgLoadingSpinnerTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ConsoleService = /** @class */ (function () {
    function ConsoleService() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    ConsoleService.prototype.warn = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.warn(message);
    };
    ConsoleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ ConsoleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
    return ConsoleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isPromise(value) {
    return value instanceof Promise;
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return value instanceof Function;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
/**
 * @param {?} text
 * @return {?}
 */
function stripSpecialChars(text) {
    /** @type {?} */
    var match = function (a) {
        return diacritics[a] || a;
    };
    return text.replace(/[^\u0000-\u007E]/g, match);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
        /** @type {?} */
        var val = Math.random() * 16 | 0;
        return val.toString(16);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ItemsList = /** @class */ (function () {
    function ItemsList(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    Object.defineProperty(ItemsList.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "filteredItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "selectedItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectionModel.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems[this._markedIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = this.selectedItems.length - 1;
            for (; i >= 0; i--) {
                /** @type {?} */
                var item = this.selectedItems[i];
                if (!item.disabled) {
                    return item;
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} items
     * @return {?}
     */
    ItemsList.prototype.setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this._items = items.map(function (item, index) { return _this.mapItem(item, index); });
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this._items);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        /** @type {?} */
        var multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.unselect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ItemsList.prototype.findItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var findBy;
        if (this._ngSelect.compareWith) {
            findBy = function (item) { return _this._ngSelect.compareWith(item.value, value); };
        }
        else if (this._ngSelect.bindValue) {
            findBy = function (item) { return !item.children && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; };
        }
        else {
            findBy = function (item) { return item.value === value ||
                !item.children && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel); };
        }
        return this._items.find(function (item) { return findBy(item); });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.addItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    };
    /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    ItemsList.prototype.clearSelected = /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    function (keepDisabled) {
        if (keepDisabled === void 0) { keepDisabled = false; }
        this._selectionModel.clear(keepDisabled);
        this._items.forEach(function (item) {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        });
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    };
    /**
     * @param {?} term
     * @return {?}
     */
    ItemsList.prototype.findByLabel = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find(function (item) {
            /** @type {?} */
            var label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        });
    };
    /**
     * @param {?} term
     * @return {?}
     */
    ItemsList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var e_1, _a;
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        /** @type {?} */
        var match = this._ngSelect.searchFn || this._defaultSearchFn;
        /** @type {?} */
        var hideSelected = this._ngSelect.hideSelected;
        var _loop_1 = function (key) {
            var e_2, _a, _b;
            /** @type {?} */
            var matchedItems = [];
            try {
                for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this_1._groups.get(key)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                        continue;
                    }
                    /** @type {?} */
                    var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                    if (match(term, searchItem)) {
                        matchedItems.push(item);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (matchedItems.length > 0) {
                var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(matchedItems.slice(-1), 1), last_1 = _e[0];
                if (last_1.parent) {
                    /** @type {?} */
                    var head = this_1._items.find(function (x) { return x === last_1.parent; });
                    this_1._filteredItems.push(head);
                }
                (_b = this_1._filteredItems).push.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(matchedItems));
            }
        };
        var this_1 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_1(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.resetFilteredItems = /**
     * @return {?}
     */
    function () {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter(function (x) { return !x.selected; });
        }
        else {
            this._filteredItems = this._items;
        }
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.unmarkItem = /**
     * @return {?}
     */
    function () {
        this._markedIndex = -1;
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.markNextItem = /**
     * @return {?}
     */
    function () {
        this._stepToItem(+1);
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.markPreviousItem = /**
     * @return {?}
     */
    function () {
        this._stepToItem(-1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.markItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    };
    /**
     * @param {?=} markDefault
     * @return {?}
     */
    ItemsList.prototype.markSelectedOrDefault = /**
     * @param {?=} markDefault
     * @return {?}
     */
    function (markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        /** @type {?} */
        var indexOfLastSelected = this._ngSelect.hideSelected ? -1 : this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && indexOfLastSelected > -1) {
            this._markedIndex = indexOfLastSelected;
        }
        else {
            if (this._ngSelect.excludeGroupsFromDefaultSelection) {
                this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled && !x.children; }) : -1;
            }
            else {
                this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled; }) : -1;
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    ItemsList.prototype.resolveNested = /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    function (option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */
            var value = option;
            for (var i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    ItemsList.prototype.mapItem = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        /** @type {?} */
        var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        /** @type {?} */
        var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: newId(),
        };
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.mapSelectedItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_3, _a;
        /** @type {?} */
        var multiple = this._ngSelect.multiple;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selected = _c.value;
                /** @type {?} */
                var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                /** @type {?} */
                var item = isDefined(value) ? this.findItem(value) : null;
                this._selectionModel.unselect(selected, multiple);
                this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(function (x) { return _this.selectedItems.indexOf(x) === -1; });
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype._showSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_4, _a;
        this._filteredItems.push(item);
        if (item.parent) {
            /** @type {?} */
            var parent_1 = item.parent;
            /** @type {?} */
            var parentExists = this._filteredItems.find(function (x) { return x === parent_1; });
            if (!parentExists) {
                this._filteredItems.push(parent_1);
            }
        }
        else if (item.children) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(item.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.selected = false;
                    this._filteredItems.push(child);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this._filteredItems.sort(function (a, b) { return (a.index - b.index); }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype._hideSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._filteredItems = this._filteredItems.filter(function (x) { return x !== item; });
        if (item.parent) {
            /** @type {?} */
            var children = item.parent.children;
            if (children.every(function (x) { return x.selected; })) {
                this._filteredItems = this._filteredItems.filter(function (x) { return x !== item.parent; });
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter(function (x) { return x.parent !== item; });
        }
    };
    /**
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    ItemsList.prototype._defaultSearchFn = /**
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    function (search, opt) {
        /** @type {?} */
        var label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    };
    /**
     * @param {?} steps
     * @return {?}
     */
    ItemsList.prototype._getNextItemIndex = /**
     * @param {?} steps
     * @return {?}
     */
    function (steps) {
        if (steps > 0) {
            return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    };
    /**
     * @param {?} steps
     * @return {?}
     */
    ItemsList.prototype._stepToItem = /**
     * @param {?} steps
     * @return {?}
     */
    function (steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) { return x.disabled; })) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    };
    /**
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    ItemsList.prototype._groupBy = /**
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    function (items, prop) {
        var _this = this;
        var e_5, _a, e_6, _b;
        /** @type {?} */
        var groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[/** @type {?} */ (prop)])) {
            try {
                for (var items_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    /** @type {?} */
                    var children = (item.value[/** @type {?} */ (prop)] || []).map(function (x, index) { return _this.mapItem(x, index); });
                    groups.set(item, children);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return groups;
        }
        /** @type {?} */
        var isFnKey = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        var keyFn = function (item) {
            /** @type {?} */
            var key = isFnKey ? (/** @type {?} */ (prop))(item.value) : item.value[/** @type {?} */ (prop)];
            return isDefined(key) ? key : undefined;
        };
        try {
            // Group items by key.
            for (var items_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                var item = items_2_1.value;
                /** @type {?} */
                var key = keyFn(item);
                /** @type {?} */
                var group = groups.get(key);
                if (group) {
                    group.push(item);
                }
                else {
                    groups.set(key, [item]);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (items_2_1 && !items_2_1.done && (_b = items_2.return)) _b.call(items_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return groups;
    };
    /**
     * @param {?} groups
     * @return {?}
     */
    ItemsList.prototype._flatten = /**
     * @param {?} groups
     * @return {?}
     */
    function (groups) {
        var e_7, _a;
        /** @type {?} */
        var isGroupByFn = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        var items = [];
        /** @type {?} */
        var withoutGroup = groups.get(undefined) || [];
        items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(withoutGroup));
        /** @type {?} */
        var i = withoutGroup.length;
        var _loop_2 = function (key) {
            if (!isDefined(key)) {
                return "continue";
            }
            /** @type {?} */
            var isObjectKey = isObject(key);
            /** @type {?} */
            var parent_2 = {
                label: isObjectKey ? '' : /** @type {?} */ (key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this_2._ngSelect.selectableGroup,
                htmlId: newId(),
            };
            /** @type {?} */
            var groupKey = isGroupByFn ? this_2._ngSelect.bindLabel : /** @type {?} */ (this_2._ngSelect.groupBy);
            /** @type {?} */
            var groupValue = this_2._ngSelect.groupValue || (function () {
                var _a;
                if (isObjectKey) {
                    return (/** @type {?} */ (key)).value;
                }
                return _a = {}, _a[groupKey] = key, _a;
            });
            /** @type {?} */
            var children = groups.get(key).map(function (x) {
                x.parent = parent_2;
                x.children = undefined;
                x.index = i++;
                return x;
            });
            parent_2.children = children;
            parent_2.value = groupValue(key, children.map(function (x) { return x.value; }));
            items.push(parent_2);
            items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(children));
        };
        var this_2 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Array.from(groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_2(key);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return items;
    };
    return ItemsList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    WindowService.prototype.requestAnimationFrame = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return window.requestAnimationFrame(fn);
    };
    /**
     * @param {?} handler
     * @param {?} timeout
     * @return {?}
     */
    WindowService.prototype.setTimeout = /**
     * @param {?} handler
     * @param {?} timeout
     * @return {?}
     */
    function (handler, timeout) {
        return window.setTimeout(handler, timeout);
    };
    WindowService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ WindowService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function WindowService_Factory() { return new WindowService(); }, token: WindowService, providedIn: "root" });
    return WindowService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var VirtualScrollService = /** @class */ (function () {
    function VirtualScrollService() {
    }
    /**
     * @param {?} d
     * @param {?} dropdownEl
     * @param {?} bufferAmount
     * @return {?}
     */
    VirtualScrollService.prototype.calculateItems = /**
     * @param {?} d
     * @param {?} dropdownEl
     * @param {?} bufferAmount
     * @return {?}
     */
    function (d, dropdownEl, bufferAmount) {
        /** @type {?} */
        var scrollHeight = d.childHeight * d.itemsLength;
        if (dropdownEl.scrollTop > scrollHeight) {
            dropdownEl.scrollTop = scrollHeight;
        }
        /** @type {?} */
        var scrollTop = Math.max(0, dropdownEl.scrollTop);
        /** @type {?} */
        var indexByScrollTop = scrollTop / scrollHeight * d.itemsLength;
        /** @type {?} */
        var end = Math.min(d.itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerCol + 1));
        /** @type {?} */
        var maxStartEnd = end;
        /** @type {?} */
        var maxStart = Math.max(0, maxStartEnd - d.itemsPerCol - 1);
        /** @type {?} */
        var start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        var topPadding = d.childHeight * Math.ceil(start) - (d.childHeight * Math.min(start, bufferAmount));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= bufferAmount;
        start = Math.max(0, start);
        end += bufferAmount;
        end = Math.min(d.itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    };
    /**
     * @param {?} itemsLength
     * @param {?} index
     * @param {?} panelEl
     * @param {?} contentEl
     * @return {?}
     */
    VirtualScrollService.prototype.calculateDimensions = /**
     * @param {?} itemsLength
     * @param {?} index
     * @param {?} panelEl
     * @param {?} contentEl
     * @return {?}
     */
    function (itemsLength, index, panelEl, contentEl) {
        /** @type {?} */
        var panelRect = panelEl.getBoundingClientRect();
        /** @type {?} */
        var itemRect = contentEl.children[index] ? contentEl.children[index].getBoundingClientRect() : {
            width: panelRect.width,
            height: panelRect.height,
            top: 0,
        };
        /** @type {?} */
        var itemsPerCol = Math.max(1, Math.floor(panelRect.height / itemRect.height));
        return {
            itemsLength: itemsLength,
            viewWidth: panelRect.width,
            viewHeight: panelRect.height,
            childWidth: itemRect.width,
            childHeight: itemRect.height,
            itemsPerCol: itemsPerCol,
        };
    };
    VirtualScrollService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ VirtualScrollService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function VirtualScrollService_Factory() { return new VirtualScrollService(); }, token: VirtualScrollService, providedIn: "root" });
    return VirtualScrollService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
var BOTTOM_CSS_CLASS = 'ng-select-bottom';
var NgDropdownPanelComponent = /** @class */ (function () {
    function NgDropdownPanelComponent(_renderer, _zone, _virtualScrollService, _window, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._virtualScrollService = _virtualScrollService;
        this._window = _window;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._startupLoop = true;
        this._isScrolledToMarked = false;
        this._scrollToEndFired = false;
        this._disposeScrollListener = function () { };
        this._disposeDocumentResizeListener = function () { };
        this._dropdown = _elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = /** @type {?} */ ($event.target);
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._select = this._dropdown.parentElement;
        this._handleScroll();
        if (this._document) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'touchstart', { capture: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'mousedown', { capture: true }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
                .subscribe(function ($event) { return _this._handleOutsideClick($event); });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["items"]) {
            this._isScrolledToMarked = false;
            this._handleItemsChange(changes["items"]);
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._disposeDocumentResizeListener();
        this._disposeScrollListener();
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._whenContentReady().then(function () {
            if (_this._destroy$.closed) {
                return;
            }
            if (_this.appendTo) {
                _this._appendDropdown();
                _this._handleDocumentResize();
            }
            _this.updateDropdownPosition();
        });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._zone.runOutsideAngular(function () {
                _this._window.requestAnimationFrame(function () {
                    _this._updateItems().then(resolve);
                });
            });
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollInto = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return;
        }
        /** @type {?} */
        var index = this.items.indexOf(item);
        if (index < 0 || index >= this.items.length) {
            return;
        }
        /** @type {?} */
        var d = this._calculateDimensions(this.virtualScroll ? 0 : index);
        /** @type {?} */
        var scrollEl = this.scrollElementRef.nativeElement;
        /** @type {?} */
        var buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
        if (this.virtualScroll) {
            scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
        }
        else {
            /** @type {?} */
            var contentEl = this.contentElementRef.nativeElement;
            /** @type {?} */
            var childrenHeight = Array.from(contentEl.children).slice(0, index).reduce(function (c, n) { return c + n.clientHeight; }, 0);
            scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollIntoTag = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.scrollElementRef.nativeElement;
        /** @type {?} */
        var d = this._calculateDimensions();
        el.scrollTop = d.childHeight * (d.itemsLength + 1);
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.updateDropdownPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._window.setTimeout(function () {
            _this._currentPosition = _this._calculateCurrentPosition(_this._dropdown);
            if (_this._currentPosition === 'top') {
                _this._renderer.addClass(_this._dropdown, TOP_CSS_CLASS);
                _this._renderer.removeClass(_this._dropdown, BOTTOM_CSS_CLASS);
                _this._renderer.addClass(_this._select, TOP_CSS_CLASS);
                _this._renderer.removeClass(_this._select, BOTTOM_CSS_CLASS);
            }
            else {
                _this._renderer.addClass(_this._dropdown, BOTTOM_CSS_CLASS);
                _this._renderer.removeClass(_this._dropdown, TOP_CSS_CLASS);
                _this._renderer.addClass(_this._select, BOTTOM_CSS_CLASS);
                _this._renderer.removeClass(_this._select, TOP_CSS_CLASS);
            }
            if (_this.appendTo) {
                _this._updateAppendedDropdownPosition();
            }
            _this._dropdown.style.opacity = '1';
        }, 0);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleOutsideClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this._select.contains($event.target)) {
            return;
        }
        if (this._dropdown.contains($event.target)) {
            return;
        }
        /** @type {?} */
        var path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this.outsideClick.emit();
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', function () {
            _this.refresh();
            _this._fireScrollToEnd();
        });
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleItemsChange = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this._scrollToEndFired = false;
        this._previousStart = undefined;
        this._previousEnd = undefined;
        if (items !== undefined && items.previousValue === undefined ||
            (items.previousValue !== undefined && items.previousValue.length === 0)) {
            this._startupLoop = true;
        }
        this.items = items.currentValue || [];
        this.refresh().then(function () {
            if (_this.appendTo && _this._currentPosition === 'top') {
                _this._updateAppendedDropdownPosition();
            }
        });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"].assertNotInAngularZone();
        if (!this.virtualScroll) {
            this._zone.run(function () {
                _this.update.emit(_this.items.slice());
                _this._scrollToMarked();
            });
            return Promise.resolve();
        }
        /** @type {?} */
        var loop = function (resolve) {
            /** @type {?} */
            var d = _this._calculateDimensions();
            /** @type {?} */
            var res = _this._virtualScrollService.calculateItems(d, _this.scrollElementRef.nativeElement, _this.bufferAmount || 0);
            (/** @type {?} */ (_this.paddingElementRef.nativeElement)).style.height = res.scrollHeight + "px";
            (/** @type {?} */ (_this.contentElementRef.nativeElement)).style.transform = 'translateY(' + res.topPadding + 'px)';
            if (res.start !== _this._previousStart || res.end !== _this._previousEnd) {
                _this._zone.run(function () {
                    _this.update.emit(_this.items.slice(res.start, res.end));
                    _this.scroll.emit({ start: res.start, end: res.end });
                });
                _this._previousStart = res.start;
                _this._previousEnd = res.end;
                if (_this._startupLoop === true) {
                    loop(resolve);
                }
            }
            else if (_this._startupLoop === true) {
                _this._startupLoop = false;
                _this._scrollToMarked();
                resolve();
            }
        };
        return new Promise(function (resolve) { return loop(resolve); });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
     * @return {?}
     */
    function () {
        if (this._scrollToEndFired) {
            return;
        }
        /** @type {?} */
        var scroll = this.scrollElementRef.nativeElement;
        /** @type {?} */
        var padding = this.virtualScroll ?
            this.paddingElementRef.nativeElement :
            this.contentElementRef.nativeElement;
        if (scroll.scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this.scrollToEnd.emit();
            this._scrollToEndFired = true;
        }
    };
    /**
     * @param {?=} index
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._calculateDimensions = /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = 0; }
        return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleDocumentResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.appendTo) {
            return;
        }
        this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', function () {
            _this._updateAppendedDropdownPosition();
        });
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._scrollToMarked = /**
     * @return {?}
     */
    function () {
        if (this._isScrolledToMarked || !this.markedItem) {
            return;
        }
        this._isScrolledToMarked = true;
        this.scrollInto(this.markedItem);
    };
    /**
     * @param {?} dropdownEl
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
     * @param {?} dropdownEl
     * @return {?}
     */
    function (dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        var selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        var offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        var height = selectRect.height;
        /** @type {?} */
        var dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._appendDropdown = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
        }
        parent.appendChild(this._dropdown);
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateAppendedDropdownPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = document.querySelector(this.appendTo) || document.body;
        this._dropdown.style.display = 'none';
        /** @type {?} */
        var selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        var boundingRect = parent.getBoundingClientRect();
        this._dropdown.style.display = '';
        /** @type {?} */
        var offsetTop = selectRect.top - boundingRect.top;
        /** @type {?} */
        var offsetLeft = selectRect.left - boundingRect.left;
        /** @type {?} */
        var topDelta = this._currentPosition === 'bottom' ? selectRect.height : -this._dropdown.clientHeight;
        this._dropdown.style.top = offsetTop + topDelta + 'px';
        this._dropdown.style.bottom = 'auto';
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = selectRect.width + 'px';
        this._dropdown.style.minWidth = selectRect.width + 'px';
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._whenContentReady = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.items.length === 0) {
            return Promise.resolve();
        }
        /** @type {?} */
        var ready = function (resolve) {
            /** @type {?} */
            var ngOption = _this._dropdown.querySelector('.ng-option');
            if (ngOption) {
                resolve();
                return;
            }
            _this._zone.runOutsideAngular(function () {
                setTimeout(function () { return ready(resolve); }, 5);
            });
        };
        return new Promise(function (resolve) { return ready(resolve); });
    };
    NgDropdownPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    selector: 'ng-dropdown-panel',
                    template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length > 0\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    NgDropdownPanelComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: VirtualScrollService },
        { type: WindowService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    NgDropdownPanelComponent.propDecorators = {
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        markedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        filterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
        scrollElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
        paddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
        handleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
    };
    return NgDropdownPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgOptionComponent = /** @class */ (function () {
    function NgOptionComponent(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._disabled = false;
    }
    Object.defineProperty(NgOptionComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = this._isDisabled(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgOptionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["disabled"]) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgOptionComponent.prototype._isDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value != null && "" + value !== 'false';
    };
    NgOptionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-option',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NgOptionComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NgOptionComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgOptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgSelectConfig = /** @class */ (function () {
    function NgSelectConfig() {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
    }
    NgSelectConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NgSelectConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
    return NgSelectConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ng-select-selection-model');
var NgSelectComponent = /** @class */ (function () {
    function NgSelectComponent(classes, tabIndex, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        var _this = this;
        this.classes = classes;
        this.tabIndex = tabIndex;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.excludeGroupsFromDefaultSelection = false;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.autoCorrect = 'off';
        this.autoCapitalize = 'off';
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disabled = false;
        this.viewPortItems = [];
        this.filterValue = null;
        this.dropdownId = newId();
        this._items = [];
        this._defaultLabel = 'label';
        this._primitive = true;
        this._pressedKeys = [];
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this.clearItem = function (item) {
            /** @type {?} */
            var option = _this.selectedItems.find(function (x) { return x.value === item; });
            _this.unselect(option);
        };
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    Object.defineProperty(NgSelectComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () { return this._items; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemsAreUsed = true;
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
        get: /**
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (!isFunction(fn)) {
                throw Error('`compareWith` must be a function.');
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "clearSearchOnAdd", {
        get: /**
         * @return {?}
         */
        function () { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clearSearchOnAdd = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "filtered", {
        get: /**
         * @return {?}
         */
        function () { return !!this.filterValue && this.searchable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemsList.selectedItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedItems.map(function (x) { return x.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedItems.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._handleKeyPresses();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["multiple"]) {
            this.itemsList.clearSelected();
        }
        if (changes["items"]) {
            this._setItems(changes["items"].currentValue || []);
        }
        if (changes["isOpen"]) {
            this._manualOpen = isDefined(changes["isOpen"].currentValue);
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this._itemsAreUsed) {
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleKeyDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (KeyCode[$event.which]) {
            switch ($event.which) {
                case KeyCode.ArrowDown:
                    this._handleArrowDown($event);
                    break;
                case KeyCode.ArrowUp:
                    this._handleArrowUp($event);
                    break;
                case KeyCode.Space:
                    this._handleSpace($event);
                    break;
                case KeyCode.Enter:
                    this._handleEnter($event);
                    break;
                case KeyCode.Tab:
                    this._handleTab($event);
                    break;
                case KeyCode.Esc:
                    this.close();
                    $event.preventDefault();
                    $event.stopPropagation();
                    break;
                case KeyCode.Backspace:
                    this._handleBackspace();
                    break;
            }
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = /** @type {?} */ ($event.target);
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        $event.stopPropagation();
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.handleArrowClick = /**
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.handleClearClick = /**
     * @return {?}
     */
    function () {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        if (this._isTypeahead) {
            this.typeahead.next(null);
        }
        this.clearEvent.emit();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.clearModel = /**
     * @return {?}
     */
    function () {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.filterValue) {
            this.focus();
        }
        this.detectChanges();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        this._clearSearch();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.toggleItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd) {
                this._clearSearch();
            }
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
            this._updateNgModel();
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.filterInput.nativeElement.focus();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.unselect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.selectTag = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a;
        /** @type {?} */
        var tag;
        if (isFunction(this.addTag)) {
            tag = (/** @type {?} */ (this.addTag))(this.filterValue);
        }
        else {
            tag = this._primitive ? this.filterValue : (_a = {}, _a[this.bindLabel] = this.filterValue, _a);
        }
        /** @type {?} */
        var handleTag = function (item) { return _this._isTypeahead || !_this.isOpen ? _this.itemsList.mapItem(item, null) : _this.itemsList.addItem(item); };
        if (isPromise(tag)) {
            tag.then(function (item) { return _this.select(handleTag(item)); }).catch(function () { });
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showClear = /**
     * @return {?}
     */
    function () {
        return this.clearable && (this.hasValue || this.filterValue) && !this.disabled;
    };
    Object.defineProperty(NgSelectComponent.prototype, "showAddTag", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.filterValue) {
                return false;
            }
            /** @type {?} */
            var term = this.filterValue.toLowerCase();
            return this.addTag &&
                (!this.itemsList.filteredItems.some(function (x) { return x.label.toLowerCase() === term; }) &&
                    (!this.hideSelected && this.isOpen || !this.selectedItems.some(function (x) { return x.label.toLowerCase() === term; }))) &&
                !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showNoItemsFound = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this.filterValue && !this.loading)) &&
            !this.showAddTag;
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showTypeToSearch = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this.filterValue && !this.loading;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    NgSelectComponent.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this.filterValue = term;
        if (this._isTypeahead) {
            this.typeahead.next(this.filterValue);
        }
        else {
            this.itemsList.filter(this.filterValue);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term: term, items: this.itemsList.filteredItems.map(function (x) { return x.value; }) });
        this.open();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.onInputFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.focused) {
            return;
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.onInputBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        this.focused = false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.onItemHover = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        if (!(/** @type {?} */ (this._cd)).destroyed) {
            this._cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.updateDropdownPosition = /**
     * @return {?}
     */
    function () {
        if (this.dropdownPanel) {
            this.dropdownPanel.updateDropdownPosition();
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NgSelectComponent.prototype._setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        /** @type {?} */
        var firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.filterValue) && !this._isTypeahead) {
            this.itemsList.filter(this.filterValue);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._setItemsFromNgOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var handleNgOptions = function (options) {
            _this.items = options.map(function (option) { return ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }); });
            _this.itemsList.setItems(_this.items);
            if (_this.hasValue) {
                _this.itemsList.mapSelectedItems();
            }
            _this.detectChanges();
        };
        /** @type {?} */
        var handleOptionChange = function () {
            /** @type {?} */
            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this.ngOptions.changes, _this._destroy$);
            rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(_this.ngOptions.map(function (option) { return option.stateChange$; }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(changedOrDestroyed))
                .subscribe(function (option) {
                /** @type {?} */
                var item = _this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                _this._cd.markForCheck();
            });
        };
        this.ngOptions.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
            .subscribe(function (options) {
            _this.bindLabel = _this._defaultLabel;
            handleNgOptions(options);
            handleOptionChange();
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgSelectComponent.prototype._isValidWriteValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        /** @type {?} */
        var validateBinding = function (item) {
            if (!isDefined(_this.compareWith) && isObject(item) && _this.bindValue) {
                _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                return false;
            }
            return true;
        };
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every(function (item) { return validateBinding(item); });
        }
        else {
            return validateBinding(value);
        }
    };
    /**
     * @param {?} ngModel
     * @return {?}
     */
    NgSelectComponent.prototype._handleWriteValue = /**
     * @param {?} ngModel
     * @return {?}
     */
    function (ngModel) {
        var _this = this;
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        /** @type {?} */
        var select = function (val) {
            var _a;
            /** @type {?} */
            var item = _this.itemsList.findItem(val);
            if (item) {
                _this.itemsList.select(item);
            }
            else {
                /** @type {?} */
                var isValObject = isObject(val);
                /** @type {?} */
                var isPrimitive = !isValObject && !_this.bindValue;
                if ((isValObject || isPrimitive)) {
                    _this.itemsList.select(_this.itemsList.mapItem(val, null));
                }
                else if (_this.bindValue) {
                    item = (_a = {},
                        _a[_this.bindLabel] = null,
                        _a[_this.bindValue] = val,
                        _a);
                    _this.itemsList.select(_this.itemsList.mapItem(item, null));
                }
            }
        };
        if (this.multiple) {
            (/** @type {?} */ (ngModel)).forEach(function (item) { return select(item); });
        }
        else {
            select(ngModel);
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._handleKeyPresses = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (letter) { return _this._pressedKeys.push(letter); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return _this._pressedKeys.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this._pressedKeys.join(''); }))
            .subscribe(function (term) {
            /** @type {?} */
            var item = _this.itemsList.findByLabel(term);
            if (item) {
                if (_this.isOpen) {
                    _this.itemsList.markItem(item);
                    _this._cd.markForCheck();
                }
                else {
                    _this.select(item);
                }
            }
            _this._pressedKeys = [];
        });
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._updateNgModel = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var model = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (this.bindValue) {
                    /** @type {?} */
                    var value = null;
                    if (item.children) {
                        value = item.value[/** @type {?} */ (this.groupBy)];
                    }
                    else {
                        value = this.itemsList.resolveNested(item.value, this.bindValue);
                    }
                    model.push(value);
                }
                else {
                    model.push(item.value);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var selected = this.selectedItems.map(function (x) { return x.value; });
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._clearSearch = /**
     * @return {?}
     */
    function () {
        if (!this.filterValue) {
            return;
        }
        this.filterValue = null;
        this.itemsList.resetFilteredItems();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._scrollToMarked = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollInto(this.itemsList.markedItem);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._scrollToTag = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollIntoTag();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleTab = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isOpen) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleEnter = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleSpace = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleArrowDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleArrowUp = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    };
    /**
     * @param {?} nextStep
     * @return {?}
     */
    NgSelectComponent.prototype._nextItemIsTag = /**
     * @param {?} nextStep
     * @return {?}
     */
    function (nextStep) {
        /** @type {?} */
        var nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.filterValue
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype._handleBackspace = /**
     * @return {?}
     */
    function () {
        if (this.filterValue || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    };
    Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
        get: /**
         * @return {?}
         */
        function () {
            return this.typeahead && this.typeahead.observers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    NgSelectComponent.prototype._mergeGlobalConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
    };
    NgSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-select',
                    template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\">{{item.label}}</span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #filterInput\n                   type=\"text\"\n                   [attr.autocomplete]=\"labelForId ? 'off' : dropdownId\"\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [attr.autocorrect]=\"autoCorrect\"\n                   [attr.autocapitalize]=\"autoCapitalize\"\n                   [readOnly]=\"!searchable\"\n                   [disabled]=\"disabled\"\n                   [value]=\"filterValue ? filterValue : ''\"\n                   (input)=\"filter(filterInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defautlLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defautlLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n    class=\"ng-dropdown-panel\"\n    [virtualScroll]=\"virtualScroll\"\n    [bufferAmount]=\"bufferAmount\"\n    [appendTo]=\"appendTo\"\n    [position]=\"dropdownPosition\"\n    [headerTemplate]=\"headerTemplate\"\n    [footerTemplate]=\"footerTemplate\"\n    [filterValue]=\"filterValue\"\n    [items]=\"itemsList.filteredItems\"\n    [markedItem]=\"itemsList.markedItem\"\n    (update)=\"viewPortItems = $event\"\n    (scroll)=\"scroll.emit($event)\"\n    (scrollToEnd)=\"scrollToEnd.emit($event)\"\n    (outsideClick)=\"close()\"\n    [class.ng-select-multiple]=\"multiple\"\n    [ngClass]=\"appendTo ? classes : null\"\n    [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\">{{item.label}}</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{filterValue}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgSelectComponent; }),
                            multi: true
                        }],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'role': 'listbox',
                        'class': 'ng-select',
                        '[class.ng-select-single]': '!multiple',
                    },
                    styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
                }] }
    ];
    /** @nocollapse */
    NgSelectComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['class',] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['autofocus',] }] },
        { type: NgSelectConfig },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SELECTION_MODEL_FACTORY,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: ConsoleService }
    ]; };
    NgSelectComponent.propDecorators = {
        bindLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bindValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        markFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        typeToSearchText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        addTagText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearAllText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dropdownPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openOnEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectableGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectableGroupAsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeGroupsFromDefaultSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearOnBackspace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        labelForId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoCorrect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoCapitalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-typeahead',] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-multiple',] }],
        addTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-taggable',] }],
        searchable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-searchable',] }],
        clearable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-clearable',] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-opened',] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearSearchOnAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['blur',] }],
        focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['focus',] }],
        changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['change',] }],
        openEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['open',] }],
        closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['close',] }],
        searchEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['search',] }],
        clearEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['clear',] }],
        addEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['add',] }],
        removeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['remove',] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scroll',] }],
        scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollToEnd',] }],
        optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        optgroupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        labelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        multiLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        typeToSearchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        loadingTextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        tagTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        loadingSpinnerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        dropdownPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgDropdownPanelComponent; }),] }],
        ngOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgOptionComponent, { descendants: true },] }],
        filterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['filterInput',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-disabled',] }],
        filtered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-filtered',] }],
        handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
    };
    return NgSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgOptionHighlightDirective = /** @class */ (function () {
    function NgOptionHighlightDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.element = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    NgOptionHighlightDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._canHighlight) {
            this._highlightLabel();
        }
    };
    /**
     * @return {?}
     */
    NgOptionHighlightDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.label = this.element.innerHTML;
        if (this._canHighlight) {
            this._highlightLabel();
        }
    };
    /**
     * @return {?}
     */
    NgOptionHighlightDirective.prototype._highlightLabel = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var label = this.label;
        if (!this.term) {
            this._setInnerHtml(label);
            return;
        }
        /** @type {?} */
        var indexOfTerm = stripSpecialChars(label)
            .toLowerCase()
            .indexOf(stripSpecialChars(this.term).toLowerCase());
        if (indexOfTerm > -1) {
            this._setInnerHtml(label.substring(0, indexOfTerm)
                + ("<span class=\"highlighted\">" + label.substr(indexOfTerm, this.term.length) + "</span>")
                + label.substring(indexOfTerm + this.term.length, label.length));
        }
        else {
            this._setInnerHtml(label);
        }
    };
    Object.defineProperty(NgOptionHighlightDirective.prototype, "_canHighlight", {
        get: /**
         * @return {?}
         */
        function () {
            return isDefined(this.term) && isDefined(this.label);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} html
     * @return {?}
     */
    NgOptionHighlightDirective.prototype._setInnerHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
    };
    NgOptionHighlightDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngOptionHighlight]'
                },] }
    ];
    /** @nocollapse */
    NgOptionHighlightDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    NgOptionHighlightDirective.propDecorators = {
        term: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngOptionHighlight',] }]
    };
    return NgOptionHighlightDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
var DefaultSelectionModel = /** @class */ (function () {
    function DefaultSelectionModel() {
        this._selected = [];
    }
    Object.defineProperty(DefaultSelectionModel.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    DefaultSelectionModel.prototype.select = /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    function (item, multiple, groupAsModel) {
        item.selected = true;
        if (groupAsModel || !item.children) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                /** @type {?} */
                var childrenCount = item.parent.children.length;
                /** @type {?} */
                var selectedCount = item.parent.children.filter(function (x) { return x.selected; }).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (!groupAsModel) {
                    this._selected = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(this._selected, item.children);
                }
            }
        }
    };
    /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    DefaultSelectionModel.prototype.unselect = /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    function (item, multiple) {
        var _a;
        this._selected = this._selected.filter(function (x) { return x !== item; });
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                /** @type {?} */
                var children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                (_a = this._selected).push.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(children.filter(function (x) { return x !== item; })));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    };
    /**
     * @param {?} keepDisabled
     * @return {?}
     */
    DefaultSelectionModel.prototype.clear = /**
     * @param {?} keepDisabled
     * @return {?}
     */
    function (keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter(function (x) { return x.disabled; }) : [];
    };
    /**
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    DefaultSelectionModel.prototype._setChildrenSelectedState = /**
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    function (children, selected) {
        children.forEach(function (x) { return x.selected = selected; });
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    DefaultSelectionModel.prototype._removeChildren = /**
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        this._selected = this._selected.filter(function (x) { return x.parent !== parent; });
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    DefaultSelectionModel.prototype._removeParent = /**
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        this._selected = this._selected.filter(function (x) { return x !== parent; });
    };
    return DefaultSelectionModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ɵ0 = DefaultSelectionModelFactory;
var NgSelectModule = /** @class */ (function () {
    function NgSelectModule() {
    }
    NgSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        NgDropdownPanelComponent,
                        NgOptionComponent,
                        NgSelectComponent,
                        NgOptionHighlightDirective,
                        NgOptgroupTemplateDirective,
                        NgOptionTemplateDirective,
                        NgLabelTemplateDirective,
                        NgMultiLabelTemplateDirective,
                        NgHeaderTemplateDirective,
                        NgFooterTemplateDirective,
                        NgNotFoundTemplateDirective,
                        NgTypeToSearchTemplateDirective,
                        NgLoadingTextTemplateDirective,
                        NgTagTemplateDirective,
                        NgLoadingSpinnerTemplateDirective
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [
                        NgSelectComponent,
                        NgOptionComponent,
                        NgOptionHighlightDirective,
                        NgOptgroupTemplateDirective,
                        NgOptionTemplateDirective,
                        NgLabelTemplateDirective,
                        NgMultiLabelTemplateDirective,
                        NgHeaderTemplateDirective,
                        NgFooterTemplateDirective,
                        NgNotFoundTemplateDirective,
                        NgTypeToSearchTemplateDirective,
                        NgLoadingTextTemplateDirective,
                        NgTagTemplateDirective,
                        NgLoadingSpinnerTemplateDirective
                    ],
                    providers: [
                        { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                    ]
                },] }
    ];
    return NgSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvbmctdGVtcGxhdGVzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2NvbnNvbGUuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3ZhbHVlLXV0aWxzLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvc2VhcmNoLWhlbHBlci50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2lkLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvaXRlbXMtbGlzdC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC50eXBlcy50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3dpbmRvdy5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvdmlydHVhbC1zY3JvbGwuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLW9wdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9uZy1vcHRpb24taGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3NlbGVjdGlvbi1tb2RlbC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctb3B0aW9uLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW9wdGdyb3VwLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbGFiZWwtdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1tdWx0aS1sYWJlbC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctaGVhZGVyLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWZvb3Rlci10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1ub3Rmb3VuZC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXR5cGV0b3NlYXJjaC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1sb2FkaW5ndGV4dC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXRhZy10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1sb2FkaW5nc3Bpbm5lci10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb25zb2xlU2VydmljZSB7XG4gICAgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgaXNEZWZpbmVkKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWU6IGFueSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuIiwiY29uc3QgZGlhY3JpdGljcyA9IHtcbiAgICAnXFx1MjRCNic6ICdBJyxcbiAgICAnXFx1RkYyMSc6ICdBJyxcbiAgICAnXFx1MDBDMCc6ICdBJyxcbiAgICAnXFx1MDBDMSc6ICdBJyxcbiAgICAnXFx1MDBDMic6ICdBJyxcbiAgICAnXFx1MUVBNic6ICdBJyxcbiAgICAnXFx1MUVBNCc6ICdBJyxcbiAgICAnXFx1MUVBQSc6ICdBJyxcbiAgICAnXFx1MUVBOCc6ICdBJyxcbiAgICAnXFx1MDBDMyc6ICdBJyxcbiAgICAnXFx1MDEwMCc6ICdBJyxcbiAgICAnXFx1MDEwMic6ICdBJyxcbiAgICAnXFx1MUVCMCc6ICdBJyxcbiAgICAnXFx1MUVBRSc6ICdBJyxcbiAgICAnXFx1MUVCNCc6ICdBJyxcbiAgICAnXFx1MUVCMic6ICdBJyxcbiAgICAnXFx1MDIyNic6ICdBJyxcbiAgICAnXFx1MDFFMCc6ICdBJyxcbiAgICAnXFx1MDBDNCc6ICdBJyxcbiAgICAnXFx1MDFERSc6ICdBJyxcbiAgICAnXFx1MUVBMic6ICdBJyxcbiAgICAnXFx1MDBDNSc6ICdBJyxcbiAgICAnXFx1MDFGQSc6ICdBJyxcbiAgICAnXFx1MDFDRCc6ICdBJyxcbiAgICAnXFx1MDIwMCc6ICdBJyxcbiAgICAnXFx1MDIwMic6ICdBJyxcbiAgICAnXFx1MUVBMCc6ICdBJyxcbiAgICAnXFx1MUVBQyc6ICdBJyxcbiAgICAnXFx1MUVCNic6ICdBJyxcbiAgICAnXFx1MUUwMCc6ICdBJyxcbiAgICAnXFx1MDEwNCc6ICdBJyxcbiAgICAnXFx1MDIzQSc6ICdBJyxcbiAgICAnXFx1MkM2Ric6ICdBJyxcbiAgICAnXFx1QTczMic6ICdBQScsXG4gICAgJ1xcdTAwQzYnOiAnQUUnLFxuICAgICdcXHUwMUZDJzogJ0FFJyxcbiAgICAnXFx1MDFFMic6ICdBRScsXG4gICAgJ1xcdUE3MzQnOiAnQU8nLFxuICAgICdcXHVBNzM2JzogJ0FVJyxcbiAgICAnXFx1QTczOCc6ICdBVicsXG4gICAgJ1xcdUE3M0EnOiAnQVYnLFxuICAgICdcXHVBNzNDJzogJ0FZJyxcbiAgICAnXFx1MjRCNyc6ICdCJyxcbiAgICAnXFx1RkYyMic6ICdCJyxcbiAgICAnXFx1MUUwMic6ICdCJyxcbiAgICAnXFx1MUUwNCc6ICdCJyxcbiAgICAnXFx1MUUwNic6ICdCJyxcbiAgICAnXFx1MDI0Myc6ICdCJyxcbiAgICAnXFx1MDE4Mic6ICdCJyxcbiAgICAnXFx1MDE4MSc6ICdCJyxcbiAgICAnXFx1MjRCOCc6ICdDJyxcbiAgICAnXFx1RkYyMyc6ICdDJyxcbiAgICAnXFx1MDEwNic6ICdDJyxcbiAgICAnXFx1MDEwOCc6ICdDJyxcbiAgICAnXFx1MDEwQSc6ICdDJyxcbiAgICAnXFx1MDEwQyc6ICdDJyxcbiAgICAnXFx1MDBDNyc6ICdDJyxcbiAgICAnXFx1MUUwOCc6ICdDJyxcbiAgICAnXFx1MDE4Nyc6ICdDJyxcbiAgICAnXFx1MDIzQic6ICdDJyxcbiAgICAnXFx1QTczRSc6ICdDJyxcbiAgICAnXFx1MjRCOSc6ICdEJyxcbiAgICAnXFx1RkYyNCc6ICdEJyxcbiAgICAnXFx1MUUwQSc6ICdEJyxcbiAgICAnXFx1MDEwRSc6ICdEJyxcbiAgICAnXFx1MUUwQyc6ICdEJyxcbiAgICAnXFx1MUUxMCc6ICdEJyxcbiAgICAnXFx1MUUxMic6ICdEJyxcbiAgICAnXFx1MUUwRSc6ICdEJyxcbiAgICAnXFx1MDExMCc6ICdEJyxcbiAgICAnXFx1MDE4Qic6ICdEJyxcbiAgICAnXFx1MDE4QSc6ICdEJyxcbiAgICAnXFx1MDE4OSc6ICdEJyxcbiAgICAnXFx1QTc3OSc6ICdEJyxcbiAgICAnXFx1MDFGMSc6ICdEWicsXG4gICAgJ1xcdTAxQzQnOiAnRFonLFxuICAgICdcXHUwMUYyJzogJ0R6JyxcbiAgICAnXFx1MDFDNSc6ICdEeicsXG4gICAgJ1xcdTI0QkEnOiAnRScsXG4gICAgJ1xcdUZGMjUnOiAnRScsXG4gICAgJ1xcdTAwQzgnOiAnRScsXG4gICAgJ1xcdTAwQzknOiAnRScsXG4gICAgJ1xcdTAwQ0EnOiAnRScsXG4gICAgJ1xcdTFFQzAnOiAnRScsXG4gICAgJ1xcdTFFQkUnOiAnRScsXG4gICAgJ1xcdTFFQzQnOiAnRScsXG4gICAgJ1xcdTFFQzInOiAnRScsXG4gICAgJ1xcdTFFQkMnOiAnRScsXG4gICAgJ1xcdTAxMTInOiAnRScsXG4gICAgJ1xcdTFFMTQnOiAnRScsXG4gICAgJ1xcdTFFMTYnOiAnRScsXG4gICAgJ1xcdTAxMTQnOiAnRScsXG4gICAgJ1xcdTAxMTYnOiAnRScsXG4gICAgJ1xcdTAwQ0InOiAnRScsXG4gICAgJ1xcdTFFQkEnOiAnRScsXG4gICAgJ1xcdTAxMUEnOiAnRScsXG4gICAgJ1xcdTAyMDQnOiAnRScsXG4gICAgJ1xcdTAyMDYnOiAnRScsXG4gICAgJ1xcdTFFQjgnOiAnRScsXG4gICAgJ1xcdTFFQzYnOiAnRScsXG4gICAgJ1xcdTAyMjgnOiAnRScsXG4gICAgJ1xcdTFFMUMnOiAnRScsXG4gICAgJ1xcdTAxMTgnOiAnRScsXG4gICAgJ1xcdTFFMTgnOiAnRScsXG4gICAgJ1xcdTFFMUEnOiAnRScsXG4gICAgJ1xcdTAxOTAnOiAnRScsXG4gICAgJ1xcdTAxOEUnOiAnRScsXG4gICAgJ1xcdTI0QkInOiAnRicsXG4gICAgJ1xcdUZGMjYnOiAnRicsXG4gICAgJ1xcdTFFMUUnOiAnRicsXG4gICAgJ1xcdTAxOTEnOiAnRicsXG4gICAgJ1xcdUE3N0InOiAnRicsXG4gICAgJ1xcdTI0QkMnOiAnRycsXG4gICAgJ1xcdUZGMjcnOiAnRycsXG4gICAgJ1xcdTAxRjQnOiAnRycsXG4gICAgJ1xcdTAxMUMnOiAnRycsXG4gICAgJ1xcdTFFMjAnOiAnRycsXG4gICAgJ1xcdTAxMUUnOiAnRycsXG4gICAgJ1xcdTAxMjAnOiAnRycsXG4gICAgJ1xcdTAxRTYnOiAnRycsXG4gICAgJ1xcdTAxMjInOiAnRycsXG4gICAgJ1xcdTAxRTQnOiAnRycsXG4gICAgJ1xcdTAxOTMnOiAnRycsXG4gICAgJ1xcdUE3QTAnOiAnRycsXG4gICAgJ1xcdUE3N0QnOiAnRycsXG4gICAgJ1xcdUE3N0UnOiAnRycsXG4gICAgJ1xcdTI0QkQnOiAnSCcsXG4gICAgJ1xcdUZGMjgnOiAnSCcsXG4gICAgJ1xcdTAxMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjInOiAnSCcsXG4gICAgJ1xcdTFFMjYnOiAnSCcsXG4gICAgJ1xcdTAyMUUnOiAnSCcsXG4gICAgJ1xcdTFFMjQnOiAnSCcsXG4gICAgJ1xcdTFFMjgnOiAnSCcsXG4gICAgJ1xcdTFFMkEnOiAnSCcsXG4gICAgJ1xcdTAxMjYnOiAnSCcsXG4gICAgJ1xcdTJDNjcnOiAnSCcsXG4gICAgJ1xcdTJDNzUnOiAnSCcsXG4gICAgJ1xcdUE3OEQnOiAnSCcsXG4gICAgJ1xcdTI0QkUnOiAnSScsXG4gICAgJ1xcdUZGMjknOiAnSScsXG4gICAgJ1xcdTAwQ0MnOiAnSScsXG4gICAgJ1xcdTAwQ0QnOiAnSScsXG4gICAgJ1xcdTAwQ0UnOiAnSScsXG4gICAgJ1xcdTAxMjgnOiAnSScsXG4gICAgJ1xcdTAxMkEnOiAnSScsXG4gICAgJ1xcdTAxMkMnOiAnSScsXG4gICAgJ1xcdTAxMzAnOiAnSScsXG4gICAgJ1xcdTAwQ0YnOiAnSScsXG4gICAgJ1xcdTFFMkUnOiAnSScsXG4gICAgJ1xcdTFFQzgnOiAnSScsXG4gICAgJ1xcdTAxQ0YnOiAnSScsXG4gICAgJ1xcdTAyMDgnOiAnSScsXG4gICAgJ1xcdTAyMEEnOiAnSScsXG4gICAgJ1xcdTFFQ0EnOiAnSScsXG4gICAgJ1xcdTAxMkUnOiAnSScsXG4gICAgJ1xcdTFFMkMnOiAnSScsXG4gICAgJ1xcdTAxOTcnOiAnSScsXG4gICAgJ1xcdTI0QkYnOiAnSicsXG4gICAgJ1xcdUZGMkEnOiAnSicsXG4gICAgJ1xcdTAxMzQnOiAnSicsXG4gICAgJ1xcdTAyNDgnOiAnSicsXG4gICAgJ1xcdTI0QzAnOiAnSycsXG4gICAgJ1xcdUZGMkInOiAnSycsXG4gICAgJ1xcdTFFMzAnOiAnSycsXG4gICAgJ1xcdTAxRTgnOiAnSycsXG4gICAgJ1xcdTFFMzInOiAnSycsXG4gICAgJ1xcdTAxMzYnOiAnSycsXG4gICAgJ1xcdTFFMzQnOiAnSycsXG4gICAgJ1xcdTAxOTgnOiAnSycsXG4gICAgJ1xcdTJDNjknOiAnSycsXG4gICAgJ1xcdUE3NDAnOiAnSycsXG4gICAgJ1xcdUE3NDInOiAnSycsXG4gICAgJ1xcdUE3NDQnOiAnSycsXG4gICAgJ1xcdUE3QTInOiAnSycsXG4gICAgJ1xcdTI0QzEnOiAnTCcsXG4gICAgJ1xcdUZGMkMnOiAnTCcsXG4gICAgJ1xcdTAxM0YnOiAnTCcsXG4gICAgJ1xcdTAxMzknOiAnTCcsXG4gICAgJ1xcdTAxM0QnOiAnTCcsXG4gICAgJ1xcdTFFMzYnOiAnTCcsXG4gICAgJ1xcdTFFMzgnOiAnTCcsXG4gICAgJ1xcdTAxM0InOiAnTCcsXG4gICAgJ1xcdTFFM0MnOiAnTCcsXG4gICAgJ1xcdTFFM0EnOiAnTCcsXG4gICAgJ1xcdTAxNDEnOiAnTCcsXG4gICAgJ1xcdTAyM0QnOiAnTCcsXG4gICAgJ1xcdTJDNjInOiAnTCcsXG4gICAgJ1xcdTJDNjAnOiAnTCcsXG4gICAgJ1xcdUE3NDgnOiAnTCcsXG4gICAgJ1xcdUE3NDYnOiAnTCcsXG4gICAgJ1xcdUE3ODAnOiAnTCcsXG4gICAgJ1xcdTAxQzcnOiAnTEonLFxuICAgICdcXHUwMUM4JzogJ0xqJyxcbiAgICAnXFx1MjRDMic6ICdNJyxcbiAgICAnXFx1RkYyRCc6ICdNJyxcbiAgICAnXFx1MUUzRSc6ICdNJyxcbiAgICAnXFx1MUU0MCc6ICdNJyxcbiAgICAnXFx1MUU0Mic6ICdNJyxcbiAgICAnXFx1MkM2RSc6ICdNJyxcbiAgICAnXFx1MDE5Qyc6ICdNJyxcbiAgICAnXFx1MjRDMyc6ICdOJyxcbiAgICAnXFx1RkYyRSc6ICdOJyxcbiAgICAnXFx1MDFGOCc6ICdOJyxcbiAgICAnXFx1MDE0Myc6ICdOJyxcbiAgICAnXFx1MDBEMSc6ICdOJyxcbiAgICAnXFx1MUU0NCc6ICdOJyxcbiAgICAnXFx1MDE0Nyc6ICdOJyxcbiAgICAnXFx1MUU0Nic6ICdOJyxcbiAgICAnXFx1MDE0NSc6ICdOJyxcbiAgICAnXFx1MUU0QSc6ICdOJyxcbiAgICAnXFx1MUU0OCc6ICdOJyxcbiAgICAnXFx1MDIyMCc6ICdOJyxcbiAgICAnXFx1MDE5RCc6ICdOJyxcbiAgICAnXFx1QTc5MCc6ICdOJyxcbiAgICAnXFx1QTdBNCc6ICdOJyxcbiAgICAnXFx1MDFDQSc6ICdOSicsXG4gICAgJ1xcdTAxQ0InOiAnTmonLFxuICAgICdcXHUyNEM0JzogJ08nLFxuICAgICdcXHVGRjJGJzogJ08nLFxuICAgICdcXHUwMEQyJzogJ08nLFxuICAgICdcXHUwMEQzJzogJ08nLFxuICAgICdcXHUwMEQ0JzogJ08nLFxuICAgICdcXHUxRUQyJzogJ08nLFxuICAgICdcXHUxRUQwJzogJ08nLFxuICAgICdcXHUxRUQ2JzogJ08nLFxuICAgICdcXHUxRUQ0JzogJ08nLFxuICAgICdcXHUwMEQ1JzogJ08nLFxuICAgICdcXHUxRTRDJzogJ08nLFxuICAgICdcXHUwMjJDJzogJ08nLFxuICAgICdcXHUxRTRFJzogJ08nLFxuICAgICdcXHUwMTRDJzogJ08nLFxuICAgICdcXHUxRTUwJzogJ08nLFxuICAgICdcXHUxRTUyJzogJ08nLFxuICAgICdcXHUwMTRFJzogJ08nLFxuICAgICdcXHUwMjJFJzogJ08nLFxuICAgICdcXHUwMjMwJzogJ08nLFxuICAgICdcXHUwMEQ2JzogJ08nLFxuICAgICdcXHUwMjJBJzogJ08nLFxuICAgICdcXHUxRUNFJzogJ08nLFxuICAgICdcXHUwMTUwJzogJ08nLFxuICAgICdcXHUwMUQxJzogJ08nLFxuICAgICdcXHUwMjBDJzogJ08nLFxuICAgICdcXHUwMjBFJzogJ08nLFxuICAgICdcXHUwMUEwJzogJ08nLFxuICAgICdcXHUxRURDJzogJ08nLFxuICAgICdcXHUxRURBJzogJ08nLFxuICAgICdcXHUxRUUwJzogJ08nLFxuICAgICdcXHUxRURFJzogJ08nLFxuICAgICdcXHUxRUUyJzogJ08nLFxuICAgICdcXHUxRUNDJzogJ08nLFxuICAgICdcXHUxRUQ4JzogJ08nLFxuICAgICdcXHUwMUVBJzogJ08nLFxuICAgICdcXHUwMUVDJzogJ08nLFxuICAgICdcXHUwMEQ4JzogJ08nLFxuICAgICdcXHUwMUZFJzogJ08nLFxuICAgICdcXHUwMTg2JzogJ08nLFxuICAgICdcXHUwMTlGJzogJ08nLFxuICAgICdcXHVBNzRBJzogJ08nLFxuICAgICdcXHVBNzRDJzogJ08nLFxuICAgICdcXHUwMUEyJzogJ09JJyxcbiAgICAnXFx1QTc0RSc6ICdPTycsXG4gICAgJ1xcdTAyMjInOiAnT1UnLFxuICAgICdcXHUyNEM1JzogJ1AnLFxuICAgICdcXHVGRjMwJzogJ1AnLFxuICAgICdcXHUxRTU0JzogJ1AnLFxuICAgICdcXHUxRTU2JzogJ1AnLFxuICAgICdcXHUwMUE0JzogJ1AnLFxuICAgICdcXHUyQzYzJzogJ1AnLFxuICAgICdcXHVBNzUwJzogJ1AnLFxuICAgICdcXHVBNzUyJzogJ1AnLFxuICAgICdcXHVBNzU0JzogJ1AnLFxuICAgICdcXHUyNEM2JzogJ1EnLFxuICAgICdcXHVGRjMxJzogJ1EnLFxuICAgICdcXHVBNzU2JzogJ1EnLFxuICAgICdcXHVBNzU4JzogJ1EnLFxuICAgICdcXHUwMjRBJzogJ1EnLFxuICAgICdcXHUyNEM3JzogJ1InLFxuICAgICdcXHVGRjMyJzogJ1InLFxuICAgICdcXHUwMTU0JzogJ1InLFxuICAgICdcXHUxRTU4JzogJ1InLFxuICAgICdcXHUwMTU4JzogJ1InLFxuICAgICdcXHUwMjEwJzogJ1InLFxuICAgICdcXHUwMjEyJzogJ1InLFxuICAgICdcXHUxRTVBJzogJ1InLFxuICAgICdcXHUxRTVDJzogJ1InLFxuICAgICdcXHUwMTU2JzogJ1InLFxuICAgICdcXHUxRTVFJzogJ1InLFxuICAgICdcXHUwMjRDJzogJ1InLFxuICAgICdcXHUyQzY0JzogJ1InLFxuICAgICdcXHVBNzVBJzogJ1InLFxuICAgICdcXHVBN0E2JzogJ1InLFxuICAgICdcXHVBNzgyJzogJ1InLFxuICAgICdcXHUyNEM4JzogJ1MnLFxuICAgICdcXHVGRjMzJzogJ1MnLFxuICAgICdcXHUxRTlFJzogJ1MnLFxuICAgICdcXHUwMTVBJzogJ1MnLFxuICAgICdcXHUxRTY0JzogJ1MnLFxuICAgICdcXHUwMTVDJzogJ1MnLFxuICAgICdcXHUxRTYwJzogJ1MnLFxuICAgICdcXHUwMTYwJzogJ1MnLFxuICAgICdcXHUxRTY2JzogJ1MnLFxuICAgICdcXHUxRTYyJzogJ1MnLFxuICAgICdcXHUxRTY4JzogJ1MnLFxuICAgICdcXHUwMjE4JzogJ1MnLFxuICAgICdcXHUwMTVFJzogJ1MnLFxuICAgICdcXHUyQzdFJzogJ1MnLFxuICAgICdcXHVBN0E4JzogJ1MnLFxuICAgICdcXHVBNzg0JzogJ1MnLFxuICAgICdcXHUyNEM5JzogJ1QnLFxuICAgICdcXHVGRjM0JzogJ1QnLFxuICAgICdcXHUxRTZBJzogJ1QnLFxuICAgICdcXHUwMTY0JzogJ1QnLFxuICAgICdcXHUxRTZDJzogJ1QnLFxuICAgICdcXHUwMjFBJzogJ1QnLFxuICAgICdcXHUwMTYyJzogJ1QnLFxuICAgICdcXHUxRTcwJzogJ1QnLFxuICAgICdcXHUxRTZFJzogJ1QnLFxuICAgICdcXHUwMTY2JzogJ1QnLFxuICAgICdcXHUwMUFDJzogJ1QnLFxuICAgICdcXHUwMUFFJzogJ1QnLFxuICAgICdcXHUwMjNFJzogJ1QnLFxuICAgICdcXHVBNzg2JzogJ1QnLFxuICAgICdcXHVBNzI4JzogJ1RaJyxcbiAgICAnXFx1MjRDQSc6ICdVJyxcbiAgICAnXFx1RkYzNSc6ICdVJyxcbiAgICAnXFx1MDBEOSc6ICdVJyxcbiAgICAnXFx1MDBEQSc6ICdVJyxcbiAgICAnXFx1MDBEQic6ICdVJyxcbiAgICAnXFx1MDE2OCc6ICdVJyxcbiAgICAnXFx1MUU3OCc6ICdVJyxcbiAgICAnXFx1MDE2QSc6ICdVJyxcbiAgICAnXFx1MUU3QSc6ICdVJyxcbiAgICAnXFx1MDE2Qyc6ICdVJyxcbiAgICAnXFx1MDBEQyc6ICdVJyxcbiAgICAnXFx1MDFEQic6ICdVJyxcbiAgICAnXFx1MDFENyc6ICdVJyxcbiAgICAnXFx1MDFENSc6ICdVJyxcbiAgICAnXFx1MDFEOSc6ICdVJyxcbiAgICAnXFx1MUVFNic6ICdVJyxcbiAgICAnXFx1MDE2RSc6ICdVJyxcbiAgICAnXFx1MDE3MCc6ICdVJyxcbiAgICAnXFx1MDFEMyc6ICdVJyxcbiAgICAnXFx1MDIxNCc6ICdVJyxcbiAgICAnXFx1MDIxNic6ICdVJyxcbiAgICAnXFx1MDFBRic6ICdVJyxcbiAgICAnXFx1MUVFQSc6ICdVJyxcbiAgICAnXFx1MUVFOCc6ICdVJyxcbiAgICAnXFx1MUVFRSc6ICdVJyxcbiAgICAnXFx1MUVFQyc6ICdVJyxcbiAgICAnXFx1MUVGMCc6ICdVJyxcbiAgICAnXFx1MUVFNCc6ICdVJyxcbiAgICAnXFx1MUU3Mic6ICdVJyxcbiAgICAnXFx1MDE3Mic6ICdVJyxcbiAgICAnXFx1MUU3Nic6ICdVJyxcbiAgICAnXFx1MUU3NCc6ICdVJyxcbiAgICAnXFx1MDI0NCc6ICdVJyxcbiAgICAnXFx1MjRDQic6ICdWJyxcbiAgICAnXFx1RkYzNic6ICdWJyxcbiAgICAnXFx1MUU3Qyc6ICdWJyxcbiAgICAnXFx1MUU3RSc6ICdWJyxcbiAgICAnXFx1MDFCMic6ICdWJyxcbiAgICAnXFx1QTc1RSc6ICdWJyxcbiAgICAnXFx1MDI0NSc6ICdWJyxcbiAgICAnXFx1QTc2MCc6ICdWWScsXG4gICAgJ1xcdTI0Q0MnOiAnVycsXG4gICAgJ1xcdUZGMzcnOiAnVycsXG4gICAgJ1xcdTFFODAnOiAnVycsXG4gICAgJ1xcdTFFODInOiAnVycsXG4gICAgJ1xcdTAxNzQnOiAnVycsXG4gICAgJ1xcdTFFODYnOiAnVycsXG4gICAgJ1xcdTFFODQnOiAnVycsXG4gICAgJ1xcdTFFODgnOiAnVycsXG4gICAgJ1xcdTJDNzInOiAnVycsXG4gICAgJ1xcdTI0Q0QnOiAnWCcsXG4gICAgJ1xcdUZGMzgnOiAnWCcsXG4gICAgJ1xcdTFFOEEnOiAnWCcsXG4gICAgJ1xcdTFFOEMnOiAnWCcsXG4gICAgJ1xcdTI0Q0UnOiAnWScsXG4gICAgJ1xcdUZGMzknOiAnWScsXG4gICAgJ1xcdTFFRjInOiAnWScsXG4gICAgJ1xcdTAwREQnOiAnWScsXG4gICAgJ1xcdTAxNzYnOiAnWScsXG4gICAgJ1xcdTFFRjgnOiAnWScsXG4gICAgJ1xcdTAyMzInOiAnWScsXG4gICAgJ1xcdTFFOEUnOiAnWScsXG4gICAgJ1xcdTAxNzgnOiAnWScsXG4gICAgJ1xcdTFFRjYnOiAnWScsXG4gICAgJ1xcdTFFRjQnOiAnWScsXG4gICAgJ1xcdTAxQjMnOiAnWScsXG4gICAgJ1xcdTAyNEUnOiAnWScsXG4gICAgJ1xcdTFFRkUnOiAnWScsXG4gICAgJ1xcdTI0Q0YnOiAnWicsXG4gICAgJ1xcdUZGM0EnOiAnWicsXG4gICAgJ1xcdTAxNzknOiAnWicsXG4gICAgJ1xcdTFFOTAnOiAnWicsXG4gICAgJ1xcdTAxN0InOiAnWicsXG4gICAgJ1xcdTAxN0QnOiAnWicsXG4gICAgJ1xcdTFFOTInOiAnWicsXG4gICAgJ1xcdTFFOTQnOiAnWicsXG4gICAgJ1xcdTAxQjUnOiAnWicsXG4gICAgJ1xcdTAyMjQnOiAnWicsXG4gICAgJ1xcdTJDN0YnOiAnWicsXG4gICAgJ1xcdTJDNkInOiAnWicsXG4gICAgJ1xcdUE3NjInOiAnWicsXG4gICAgJ1xcdTI0RDAnOiAnYScsXG4gICAgJ1xcdUZGNDEnOiAnYScsXG4gICAgJ1xcdTFFOUEnOiAnYScsXG4gICAgJ1xcdTAwRTAnOiAnYScsXG4gICAgJ1xcdTAwRTEnOiAnYScsXG4gICAgJ1xcdTAwRTInOiAnYScsXG4gICAgJ1xcdTFFQTcnOiAnYScsXG4gICAgJ1xcdTFFQTUnOiAnYScsXG4gICAgJ1xcdTFFQUInOiAnYScsXG4gICAgJ1xcdTFFQTknOiAnYScsXG4gICAgJ1xcdTAwRTMnOiAnYScsXG4gICAgJ1xcdTAxMDEnOiAnYScsXG4gICAgJ1xcdTAxMDMnOiAnYScsXG4gICAgJ1xcdTFFQjEnOiAnYScsXG4gICAgJ1xcdTFFQUYnOiAnYScsXG4gICAgJ1xcdTFFQjUnOiAnYScsXG4gICAgJ1xcdTFFQjMnOiAnYScsXG4gICAgJ1xcdTAyMjcnOiAnYScsXG4gICAgJ1xcdTAxRTEnOiAnYScsXG4gICAgJ1xcdTAwRTQnOiAnYScsXG4gICAgJ1xcdTAxREYnOiAnYScsXG4gICAgJ1xcdTFFQTMnOiAnYScsXG4gICAgJ1xcdTAwRTUnOiAnYScsXG4gICAgJ1xcdTAxRkInOiAnYScsXG4gICAgJ1xcdTAxQ0UnOiAnYScsXG4gICAgJ1xcdTAyMDEnOiAnYScsXG4gICAgJ1xcdTAyMDMnOiAnYScsXG4gICAgJ1xcdTFFQTEnOiAnYScsXG4gICAgJ1xcdTFFQUQnOiAnYScsXG4gICAgJ1xcdTFFQjcnOiAnYScsXG4gICAgJ1xcdTFFMDEnOiAnYScsXG4gICAgJ1xcdTAxMDUnOiAnYScsXG4gICAgJ1xcdTJDNjUnOiAnYScsXG4gICAgJ1xcdTAyNTAnOiAnYScsXG4gICAgJ1xcdUE3MzMnOiAnYWEnLFxuICAgICdcXHUwMEU2JzogJ2FlJyxcbiAgICAnXFx1MDFGRCc6ICdhZScsXG4gICAgJ1xcdTAxRTMnOiAnYWUnLFxuICAgICdcXHVBNzM1JzogJ2FvJyxcbiAgICAnXFx1QTczNyc6ICdhdScsXG4gICAgJ1xcdUE3MzknOiAnYXYnLFxuICAgICdcXHVBNzNCJzogJ2F2JyxcbiAgICAnXFx1QTczRCc6ICdheScsXG4gICAgJ1xcdTI0RDEnOiAnYicsXG4gICAgJ1xcdUZGNDInOiAnYicsXG4gICAgJ1xcdTFFMDMnOiAnYicsXG4gICAgJ1xcdTFFMDUnOiAnYicsXG4gICAgJ1xcdTFFMDcnOiAnYicsXG4gICAgJ1xcdTAxODAnOiAnYicsXG4gICAgJ1xcdTAxODMnOiAnYicsXG4gICAgJ1xcdTAyNTMnOiAnYicsXG4gICAgJ1xcdTI0RDInOiAnYycsXG4gICAgJ1xcdUZGNDMnOiAnYycsXG4gICAgJ1xcdTAxMDcnOiAnYycsXG4gICAgJ1xcdTAxMDknOiAnYycsXG4gICAgJ1xcdTAxMEInOiAnYycsXG4gICAgJ1xcdTAxMEQnOiAnYycsXG4gICAgJ1xcdTAwRTcnOiAnYycsXG4gICAgJ1xcdTFFMDknOiAnYycsXG4gICAgJ1xcdTAxODgnOiAnYycsXG4gICAgJ1xcdTAyM0MnOiAnYycsXG4gICAgJ1xcdUE3M0YnOiAnYycsXG4gICAgJ1xcdTIxODQnOiAnYycsXG4gICAgJ1xcdTI0RDMnOiAnZCcsXG4gICAgJ1xcdUZGNDQnOiAnZCcsXG4gICAgJ1xcdTFFMEInOiAnZCcsXG4gICAgJ1xcdTAxMEYnOiAnZCcsXG4gICAgJ1xcdTFFMEQnOiAnZCcsXG4gICAgJ1xcdTFFMTEnOiAnZCcsXG4gICAgJ1xcdTFFMTMnOiAnZCcsXG4gICAgJ1xcdTFFMEYnOiAnZCcsXG4gICAgJ1xcdTAxMTEnOiAnZCcsXG4gICAgJ1xcdTAxOEMnOiAnZCcsXG4gICAgJ1xcdTAyNTYnOiAnZCcsXG4gICAgJ1xcdTAyNTcnOiAnZCcsXG4gICAgJ1xcdUE3N0EnOiAnZCcsXG4gICAgJ1xcdTAxRjMnOiAnZHonLFxuICAgICdcXHUwMUM2JzogJ2R6JyxcbiAgICAnXFx1MjRENCc6ICdlJyxcbiAgICAnXFx1RkY0NSc6ICdlJyxcbiAgICAnXFx1MDBFOCc6ICdlJyxcbiAgICAnXFx1MDBFOSc6ICdlJyxcbiAgICAnXFx1MDBFQSc6ICdlJyxcbiAgICAnXFx1MUVDMSc6ICdlJyxcbiAgICAnXFx1MUVCRic6ICdlJyxcbiAgICAnXFx1MUVDNSc6ICdlJyxcbiAgICAnXFx1MUVDMyc6ICdlJyxcbiAgICAnXFx1MUVCRCc6ICdlJyxcbiAgICAnXFx1MDExMyc6ICdlJyxcbiAgICAnXFx1MUUxNSc6ICdlJyxcbiAgICAnXFx1MUUxNyc6ICdlJyxcbiAgICAnXFx1MDExNSc6ICdlJyxcbiAgICAnXFx1MDExNyc6ICdlJyxcbiAgICAnXFx1MDBFQic6ICdlJyxcbiAgICAnXFx1MUVCQic6ICdlJyxcbiAgICAnXFx1MDExQic6ICdlJyxcbiAgICAnXFx1MDIwNSc6ICdlJyxcbiAgICAnXFx1MDIwNyc6ICdlJyxcbiAgICAnXFx1MUVCOSc6ICdlJyxcbiAgICAnXFx1MUVDNyc6ICdlJyxcbiAgICAnXFx1MDIyOSc6ICdlJyxcbiAgICAnXFx1MUUxRCc6ICdlJyxcbiAgICAnXFx1MDExOSc6ICdlJyxcbiAgICAnXFx1MUUxOSc6ICdlJyxcbiAgICAnXFx1MUUxQic6ICdlJyxcbiAgICAnXFx1MDI0Nyc6ICdlJyxcbiAgICAnXFx1MDI1Qic6ICdlJyxcbiAgICAnXFx1MDFERCc6ICdlJyxcbiAgICAnXFx1MjRENSc6ICdmJyxcbiAgICAnXFx1RkY0Nic6ICdmJyxcbiAgICAnXFx1MUUxRic6ICdmJyxcbiAgICAnXFx1MDE5Mic6ICdmJyxcbiAgICAnXFx1QTc3Qyc6ICdmJyxcbiAgICAnXFx1MjRENic6ICdnJyxcbiAgICAnXFx1RkY0Nyc6ICdnJyxcbiAgICAnXFx1MDFGNSc6ICdnJyxcbiAgICAnXFx1MDExRCc6ICdnJyxcbiAgICAnXFx1MUUyMSc6ICdnJyxcbiAgICAnXFx1MDExRic6ICdnJyxcbiAgICAnXFx1MDEyMSc6ICdnJyxcbiAgICAnXFx1MDFFNyc6ICdnJyxcbiAgICAnXFx1MDEyMyc6ICdnJyxcbiAgICAnXFx1MDFFNSc6ICdnJyxcbiAgICAnXFx1MDI2MCc6ICdnJyxcbiAgICAnXFx1QTdBMSc6ICdnJyxcbiAgICAnXFx1MUQ3OSc6ICdnJyxcbiAgICAnXFx1QTc3Ric6ICdnJyxcbiAgICAnXFx1MjRENyc6ICdoJyxcbiAgICAnXFx1RkY0OCc6ICdoJyxcbiAgICAnXFx1MDEyNSc6ICdoJyxcbiAgICAnXFx1MUUyMyc6ICdoJyxcbiAgICAnXFx1MUUyNyc6ICdoJyxcbiAgICAnXFx1MDIxRic6ICdoJyxcbiAgICAnXFx1MUUyNSc6ICdoJyxcbiAgICAnXFx1MUUyOSc6ICdoJyxcbiAgICAnXFx1MUUyQic6ICdoJyxcbiAgICAnXFx1MUU5Nic6ICdoJyxcbiAgICAnXFx1MDEyNyc6ICdoJyxcbiAgICAnXFx1MkM2OCc6ICdoJyxcbiAgICAnXFx1MkM3Nic6ICdoJyxcbiAgICAnXFx1MDI2NSc6ICdoJyxcbiAgICAnXFx1MDE5NSc6ICdodicsXG4gICAgJ1xcdTI0RDgnOiAnaScsXG4gICAgJ1xcdUZGNDknOiAnaScsXG4gICAgJ1xcdTAwRUMnOiAnaScsXG4gICAgJ1xcdTAwRUQnOiAnaScsXG4gICAgJ1xcdTAwRUUnOiAnaScsXG4gICAgJ1xcdTAxMjknOiAnaScsXG4gICAgJ1xcdTAxMkInOiAnaScsXG4gICAgJ1xcdTAxMkQnOiAnaScsXG4gICAgJ1xcdTAwRUYnOiAnaScsXG4gICAgJ1xcdTFFMkYnOiAnaScsXG4gICAgJ1xcdTFFQzknOiAnaScsXG4gICAgJ1xcdTAxRDAnOiAnaScsXG4gICAgJ1xcdTAyMDknOiAnaScsXG4gICAgJ1xcdTAyMEInOiAnaScsXG4gICAgJ1xcdTFFQ0InOiAnaScsXG4gICAgJ1xcdTAxMkYnOiAnaScsXG4gICAgJ1xcdTFFMkQnOiAnaScsXG4gICAgJ1xcdTAyNjgnOiAnaScsXG4gICAgJ1xcdTAxMzEnOiAnaScsXG4gICAgJ1xcdTI0RDknOiAnaicsXG4gICAgJ1xcdUZGNEEnOiAnaicsXG4gICAgJ1xcdTAxMzUnOiAnaicsXG4gICAgJ1xcdTAxRjAnOiAnaicsXG4gICAgJ1xcdTAyNDknOiAnaicsXG4gICAgJ1xcdTI0REEnOiAnaycsXG4gICAgJ1xcdUZGNEInOiAnaycsXG4gICAgJ1xcdTFFMzEnOiAnaycsXG4gICAgJ1xcdTAxRTknOiAnaycsXG4gICAgJ1xcdTFFMzMnOiAnaycsXG4gICAgJ1xcdTAxMzcnOiAnaycsXG4gICAgJ1xcdTFFMzUnOiAnaycsXG4gICAgJ1xcdTAxOTknOiAnaycsXG4gICAgJ1xcdTJDNkEnOiAnaycsXG4gICAgJ1xcdUE3NDEnOiAnaycsXG4gICAgJ1xcdUE3NDMnOiAnaycsXG4gICAgJ1xcdUE3NDUnOiAnaycsXG4gICAgJ1xcdUE3QTMnOiAnaycsXG4gICAgJ1xcdTI0REInOiAnbCcsXG4gICAgJ1xcdUZGNEMnOiAnbCcsXG4gICAgJ1xcdTAxNDAnOiAnbCcsXG4gICAgJ1xcdTAxM0EnOiAnbCcsXG4gICAgJ1xcdTAxM0UnOiAnbCcsXG4gICAgJ1xcdTFFMzcnOiAnbCcsXG4gICAgJ1xcdTFFMzknOiAnbCcsXG4gICAgJ1xcdTAxM0MnOiAnbCcsXG4gICAgJ1xcdTFFM0QnOiAnbCcsXG4gICAgJ1xcdTFFM0InOiAnbCcsXG4gICAgJ1xcdTAxN0YnOiAnbCcsXG4gICAgJ1xcdTAxNDInOiAnbCcsXG4gICAgJ1xcdTAxOUEnOiAnbCcsXG4gICAgJ1xcdTAyNkInOiAnbCcsXG4gICAgJ1xcdTJDNjEnOiAnbCcsXG4gICAgJ1xcdUE3NDknOiAnbCcsXG4gICAgJ1xcdUE3ODEnOiAnbCcsXG4gICAgJ1xcdUE3NDcnOiAnbCcsXG4gICAgJ1xcdTAxQzknOiAnbGonLFxuICAgICdcXHUyNERDJzogJ20nLFxuICAgICdcXHVGRjREJzogJ20nLFxuICAgICdcXHUxRTNGJzogJ20nLFxuICAgICdcXHUxRTQxJzogJ20nLFxuICAgICdcXHUxRTQzJzogJ20nLFxuICAgICdcXHUwMjcxJzogJ20nLFxuICAgICdcXHUwMjZGJzogJ20nLFxuICAgICdcXHUyNEREJzogJ24nLFxuICAgICdcXHVGRjRFJzogJ24nLFxuICAgICdcXHUwMUY5JzogJ24nLFxuICAgICdcXHUwMTQ0JzogJ24nLFxuICAgICdcXHUwMEYxJzogJ24nLFxuICAgICdcXHUxRTQ1JzogJ24nLFxuICAgICdcXHUwMTQ4JzogJ24nLFxuICAgICdcXHUxRTQ3JzogJ24nLFxuICAgICdcXHUwMTQ2JzogJ24nLFxuICAgICdcXHUxRTRCJzogJ24nLFxuICAgICdcXHUxRTQ5JzogJ24nLFxuICAgICdcXHUwMTlFJzogJ24nLFxuICAgICdcXHUwMjcyJzogJ24nLFxuICAgICdcXHUwMTQ5JzogJ24nLFxuICAgICdcXHVBNzkxJzogJ24nLFxuICAgICdcXHVBN0E1JzogJ24nLFxuICAgICdcXHUwMUNDJzogJ25qJyxcbiAgICAnXFx1MjRERSc6ICdvJyxcbiAgICAnXFx1RkY0Ric6ICdvJyxcbiAgICAnXFx1MDBGMic6ICdvJyxcbiAgICAnXFx1MDBGMyc6ICdvJyxcbiAgICAnXFx1MDBGNCc6ICdvJyxcbiAgICAnXFx1MUVEMyc6ICdvJyxcbiAgICAnXFx1MUVEMSc6ICdvJyxcbiAgICAnXFx1MUVENyc6ICdvJyxcbiAgICAnXFx1MUVENSc6ICdvJyxcbiAgICAnXFx1MDBGNSc6ICdvJyxcbiAgICAnXFx1MUU0RCc6ICdvJyxcbiAgICAnXFx1MDIyRCc6ICdvJyxcbiAgICAnXFx1MUU0Ric6ICdvJyxcbiAgICAnXFx1MDE0RCc6ICdvJyxcbiAgICAnXFx1MUU1MSc6ICdvJyxcbiAgICAnXFx1MUU1Myc6ICdvJyxcbiAgICAnXFx1MDE0Ric6ICdvJyxcbiAgICAnXFx1MDIyRic6ICdvJyxcbiAgICAnXFx1MDIzMSc6ICdvJyxcbiAgICAnXFx1MDBGNic6ICdvJyxcbiAgICAnXFx1MDIyQic6ICdvJyxcbiAgICAnXFx1MUVDRic6ICdvJyxcbiAgICAnXFx1MDE1MSc6ICdvJyxcbiAgICAnXFx1MDFEMic6ICdvJyxcbiAgICAnXFx1MDIwRCc6ICdvJyxcbiAgICAnXFx1MDIwRic6ICdvJyxcbiAgICAnXFx1MDFBMSc6ICdvJyxcbiAgICAnXFx1MUVERCc6ICdvJyxcbiAgICAnXFx1MUVEQic6ICdvJyxcbiAgICAnXFx1MUVFMSc6ICdvJyxcbiAgICAnXFx1MUVERic6ICdvJyxcbiAgICAnXFx1MUVFMyc6ICdvJyxcbiAgICAnXFx1MUVDRCc6ICdvJyxcbiAgICAnXFx1MUVEOSc6ICdvJyxcbiAgICAnXFx1MDFFQic6ICdvJyxcbiAgICAnXFx1MDFFRCc6ICdvJyxcbiAgICAnXFx1MDBGOCc6ICdvJyxcbiAgICAnXFx1MDFGRic6ICdvJyxcbiAgICAnXFx1MDI1NCc6ICdvJyxcbiAgICAnXFx1QTc0Qic6ICdvJyxcbiAgICAnXFx1QTc0RCc6ICdvJyxcbiAgICAnXFx1MDI3NSc6ICdvJyxcbiAgICAnXFx1MDFBMyc6ICdvaScsXG4gICAgJ1xcdTAyMjMnOiAnb3UnLFxuICAgICdcXHVBNzRGJzogJ29vJyxcbiAgICAnXFx1MjRERic6ICdwJyxcbiAgICAnXFx1RkY1MCc6ICdwJyxcbiAgICAnXFx1MUU1NSc6ICdwJyxcbiAgICAnXFx1MUU1Nyc6ICdwJyxcbiAgICAnXFx1MDFBNSc6ICdwJyxcbiAgICAnXFx1MUQ3RCc6ICdwJyxcbiAgICAnXFx1QTc1MSc6ICdwJyxcbiAgICAnXFx1QTc1Myc6ICdwJyxcbiAgICAnXFx1QTc1NSc6ICdwJyxcbiAgICAnXFx1MjRFMCc6ICdxJyxcbiAgICAnXFx1RkY1MSc6ICdxJyxcbiAgICAnXFx1MDI0Qic6ICdxJyxcbiAgICAnXFx1QTc1Nyc6ICdxJyxcbiAgICAnXFx1QTc1OSc6ICdxJyxcbiAgICAnXFx1MjRFMSc6ICdyJyxcbiAgICAnXFx1RkY1Mic6ICdyJyxcbiAgICAnXFx1MDE1NSc6ICdyJyxcbiAgICAnXFx1MUU1OSc6ICdyJyxcbiAgICAnXFx1MDE1OSc6ICdyJyxcbiAgICAnXFx1MDIxMSc6ICdyJyxcbiAgICAnXFx1MDIxMyc6ICdyJyxcbiAgICAnXFx1MUU1Qic6ICdyJyxcbiAgICAnXFx1MUU1RCc6ICdyJyxcbiAgICAnXFx1MDE1Nyc6ICdyJyxcbiAgICAnXFx1MUU1Ric6ICdyJyxcbiAgICAnXFx1MDI0RCc6ICdyJyxcbiAgICAnXFx1MDI3RCc6ICdyJyxcbiAgICAnXFx1QTc1Qic6ICdyJyxcbiAgICAnXFx1QTdBNyc6ICdyJyxcbiAgICAnXFx1QTc4Myc6ICdyJyxcbiAgICAnXFx1MjRFMic6ICdzJyxcbiAgICAnXFx1RkY1Myc6ICdzJyxcbiAgICAnXFx1MDBERic6ICdzJyxcbiAgICAnXFx1MDE1Qic6ICdzJyxcbiAgICAnXFx1MUU2NSc6ICdzJyxcbiAgICAnXFx1MDE1RCc6ICdzJyxcbiAgICAnXFx1MUU2MSc6ICdzJyxcbiAgICAnXFx1MDE2MSc6ICdzJyxcbiAgICAnXFx1MUU2Nyc6ICdzJyxcbiAgICAnXFx1MUU2Myc6ICdzJyxcbiAgICAnXFx1MUU2OSc6ICdzJyxcbiAgICAnXFx1MDIxOSc6ICdzJyxcbiAgICAnXFx1MDE1Ric6ICdzJyxcbiAgICAnXFx1MDIzRic6ICdzJyxcbiAgICAnXFx1QTdBOSc6ICdzJyxcbiAgICAnXFx1QTc4NSc6ICdzJyxcbiAgICAnXFx1MUU5Qic6ICdzJyxcbiAgICAnXFx1MjRFMyc6ICd0JyxcbiAgICAnXFx1RkY1NCc6ICd0JyxcbiAgICAnXFx1MUU2Qic6ICd0JyxcbiAgICAnXFx1MUU5Nyc6ICd0JyxcbiAgICAnXFx1MDE2NSc6ICd0JyxcbiAgICAnXFx1MUU2RCc6ICd0JyxcbiAgICAnXFx1MDIxQic6ICd0JyxcbiAgICAnXFx1MDE2Myc6ICd0JyxcbiAgICAnXFx1MUU3MSc6ICd0JyxcbiAgICAnXFx1MUU2Ric6ICd0JyxcbiAgICAnXFx1MDE2Nyc6ICd0JyxcbiAgICAnXFx1MDFBRCc6ICd0JyxcbiAgICAnXFx1MDI4OCc6ICd0JyxcbiAgICAnXFx1MkM2Nic6ICd0JyxcbiAgICAnXFx1QTc4Nyc6ICd0JyxcbiAgICAnXFx1QTcyOSc6ICd0eicsXG4gICAgJ1xcdTI0RTQnOiAndScsXG4gICAgJ1xcdUZGNTUnOiAndScsXG4gICAgJ1xcdTAwRjknOiAndScsXG4gICAgJ1xcdTAwRkEnOiAndScsXG4gICAgJ1xcdTAwRkInOiAndScsXG4gICAgJ1xcdTAxNjknOiAndScsXG4gICAgJ1xcdTFFNzknOiAndScsXG4gICAgJ1xcdTAxNkInOiAndScsXG4gICAgJ1xcdTFFN0InOiAndScsXG4gICAgJ1xcdTAxNkQnOiAndScsXG4gICAgJ1xcdTAwRkMnOiAndScsXG4gICAgJ1xcdTAxREMnOiAndScsXG4gICAgJ1xcdTAxRDgnOiAndScsXG4gICAgJ1xcdTAxRDYnOiAndScsXG4gICAgJ1xcdTAxREEnOiAndScsXG4gICAgJ1xcdTFFRTcnOiAndScsXG4gICAgJ1xcdTAxNkYnOiAndScsXG4gICAgJ1xcdTAxNzEnOiAndScsXG4gICAgJ1xcdTAxRDQnOiAndScsXG4gICAgJ1xcdTAyMTUnOiAndScsXG4gICAgJ1xcdTAyMTcnOiAndScsXG4gICAgJ1xcdTAxQjAnOiAndScsXG4gICAgJ1xcdTFFRUInOiAndScsXG4gICAgJ1xcdTFFRTknOiAndScsXG4gICAgJ1xcdTFFRUYnOiAndScsXG4gICAgJ1xcdTFFRUQnOiAndScsXG4gICAgJ1xcdTFFRjEnOiAndScsXG4gICAgJ1xcdTFFRTUnOiAndScsXG4gICAgJ1xcdTFFNzMnOiAndScsXG4gICAgJ1xcdTAxNzMnOiAndScsXG4gICAgJ1xcdTFFNzcnOiAndScsXG4gICAgJ1xcdTFFNzUnOiAndScsXG4gICAgJ1xcdTAyODknOiAndScsXG4gICAgJ1xcdTI0RTUnOiAndicsXG4gICAgJ1xcdUZGNTYnOiAndicsXG4gICAgJ1xcdTFFN0QnOiAndicsXG4gICAgJ1xcdTFFN0YnOiAndicsXG4gICAgJ1xcdTAyOEInOiAndicsXG4gICAgJ1xcdUE3NUYnOiAndicsXG4gICAgJ1xcdTAyOEMnOiAndicsXG4gICAgJ1xcdUE3NjEnOiAndnknLFxuICAgICdcXHUyNEU2JzogJ3cnLFxuICAgICdcXHVGRjU3JzogJ3cnLFxuICAgICdcXHUxRTgxJzogJ3cnLFxuICAgICdcXHUxRTgzJzogJ3cnLFxuICAgICdcXHUwMTc1JzogJ3cnLFxuICAgICdcXHUxRTg3JzogJ3cnLFxuICAgICdcXHUxRTg1JzogJ3cnLFxuICAgICdcXHUxRTk4JzogJ3cnLFxuICAgICdcXHUxRTg5JzogJ3cnLFxuICAgICdcXHUyQzczJzogJ3cnLFxuICAgICdcXHUyNEU3JzogJ3gnLFxuICAgICdcXHVGRjU4JzogJ3gnLFxuICAgICdcXHUxRThCJzogJ3gnLFxuICAgICdcXHUxRThEJzogJ3gnLFxuICAgICdcXHUyNEU4JzogJ3knLFxuICAgICdcXHVGRjU5JzogJ3knLFxuICAgICdcXHUxRUYzJzogJ3knLFxuICAgICdcXHUwMEZEJzogJ3knLFxuICAgICdcXHUwMTc3JzogJ3knLFxuICAgICdcXHUxRUY5JzogJ3knLFxuICAgICdcXHUwMjMzJzogJ3knLFxuICAgICdcXHUxRThGJzogJ3knLFxuICAgICdcXHUwMEZGJzogJ3knLFxuICAgICdcXHUxRUY3JzogJ3knLFxuICAgICdcXHUxRTk5JzogJ3knLFxuICAgICdcXHUxRUY1JzogJ3knLFxuICAgICdcXHUwMUI0JzogJ3knLFxuICAgICdcXHUwMjRGJzogJ3knLFxuICAgICdcXHUxRUZGJzogJ3knLFxuICAgICdcXHUyNEU5JzogJ3onLFxuICAgICdcXHVGRjVBJzogJ3onLFxuICAgICdcXHUwMTdBJzogJ3onLFxuICAgICdcXHUxRTkxJzogJ3onLFxuICAgICdcXHUwMTdDJzogJ3onLFxuICAgICdcXHUwMTdFJzogJ3onLFxuICAgICdcXHUxRTkzJzogJ3onLFxuICAgICdcXHUxRTk1JzogJ3onLFxuICAgICdcXHUwMUI2JzogJ3onLFxuICAgICdcXHUwMjI1JzogJ3onLFxuICAgICdcXHUwMjQwJzogJ3onLFxuICAgICdcXHUyQzZDJzogJ3onLFxuICAgICdcXHVBNzYzJzogJ3onLFxuICAgICdcXHUwMzg2JzogJ1xcdTAzOTEnLFxuICAgICdcXHUwMzg4JzogJ1xcdTAzOTUnLFxuICAgICdcXHUwMzg5JzogJ1xcdTAzOTcnLFxuICAgICdcXHUwMzhBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwM0FBJzogJ1xcdTAzOTknLFxuICAgICdcXHUwMzhDJzogJ1xcdTAzOUYnLFxuICAgICdcXHUwMzhFJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwM0FCJzogJ1xcdTAzQTUnLFxuICAgICdcXHUwMzhGJzogJ1xcdTAzQTknLFxuICAgICdcXHUwM0FDJzogJ1xcdTAzQjEnLFxuICAgICdcXHUwM0FEJzogJ1xcdTAzQjUnLFxuICAgICdcXHUwM0FFJzogJ1xcdTAzQjcnLFxuICAgICdcXHUwM0FGJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NBJzogJ1xcdTAzQjknLFxuICAgICdcXHUwMzkwJzogJ1xcdTAzQjknLFxuICAgICdcXHUwM0NDJzogJ1xcdTAzQkYnLFxuICAgICdcXHUwM0NEJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0NCJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0IwJzogJ1xcdTAzQzUnLFxuICAgICdcXHUwM0M5JzogJ1xcdTAzQzknLFxuICAgICdcXHUwM0MyJzogJ1xcdTAzQzMnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBTcGVjaWFsQ2hhcnModGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXRjaCA9IChhOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gZGlhY3JpdGljc1thXSB8fCBhO1xuICAgIH07XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15cXHUwMDAwLVxcdTAwN0VdL2csIG1hdGNoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBuZXdJZCgpIHtcbiAgICAvLyBGaXJzdCBjaGFyYWN0ZXIgaXMgYW4gJ2EnLCBpdCdzIGdvb2QgcHJhY3RpY2UgdG8gdGFnIGlkIHRvIGJlZ2luIHdpdGggYSBsZXR0ZXJcbiAgICByZXR1cm4gJ2F4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3hdL2csIGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGNvbnN0IHZhbCA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgKiBhcyBzZWFyY2hIZWxwZXIgZnJvbSAnLi9zZWFyY2gtaGVscGVyJztcbmltcG9ydCB7IE5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IGlzRGVmaW5lZCwgaXNGdW5jdGlvbiwgaXNPYmplY3QgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcbmltcG9ydCB7IG5ld0lkIH0gZnJvbSAnLi9pZCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcblxudHlwZSBPcHRpb25Hcm91cHMgPSBNYXA8c3RyaW5nIHwgTmdPcHRpb24sIE5nT3B0aW9uW10+O1xuXG5leHBvcnQgY2xhc3MgSXRlbXNMaXN0IHtcbiAgICBwcml2YXRlIF9ncm91cHM6IE9wdGlvbkdyb3VwcztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9uZ1NlbGVjdDogTmdTZWxlY3RDb21wb25lbnQsXG4gICAgICAgIHByaXZhdGUgX3NlbGVjdGlvbk1vZGVsOiBTZWxlY3Rpb25Nb2RlbCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgX2l0ZW1zOiBOZ09wdGlvbltdID0gW107XG5cbiAgICBnZXQgaXRlbXMoKTogTmdPcHRpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maWx0ZXJlZEl0ZW1zOiBOZ09wdGlvbltdID0gW107XG5cbiAgICBnZXQgZmlsdGVyZWRJdGVtcygpOiBOZ09wdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkSXRlbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWFya2VkSW5kZXggPSAtMTtcblxuICAgIGdldCBtYXJrZWRJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VkSW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC52YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbWFya2VkSXRlbSgpOiBOZ09wdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZEl0ZW1zW3RoaXMuX21hcmtlZEluZGV4XTtcbiAgICB9XG5cbiAgICBnZXQgbm9JdGVtc1RvU2VsZWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgbWF4SXRlbXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlICYmIHRoaXMuX25nU2VsZWN0Lm1heFNlbGVjdGVkSXRlbXMgPD0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgbGFzdFNlbGVjdGVkSXRlbSgpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtc1tpXTtcbiAgICAgICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNldEl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMubWFwSXRlbShpdGVtLCBpbmRleCkpO1xuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSkge1xuICAgICAgICAgICAgdGhpcy5fZ3JvdXBzID0gdGhpcy5fZ3JvdXBCeSh0aGlzLl9pdGVtcywgdGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XG4gICAgICAgICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuX2ZsYXR0ZW4odGhpcy5fZ3JvdXBzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRoaXMuX2dyb3Vwcy5zZXQodW5kZWZpbmVkLCB0aGlzLl9pdGVtcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMuX2l0ZW1zXTtcbiAgICB9XG5cbiAgICBzZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgfHwgdGhpcy5tYXhJdGVtc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZTtcbiAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclNlbGVjdGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSwgbXVsdGlwbGUsIHRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cEFzTW9kZWwpO1xuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlU2VsZWN0ZWQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC51bnNlbGVjdChpdGVtLCB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZSk7XG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgJiYgaXNEZWZpbmVkKGl0ZW0uaW5kZXgpICYmIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93U2VsZWN0ZWQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSXRlbSh2YWx1ZTogYW55KTogTmdPcHRpb24ge1xuICAgICAgICBsZXQgZmluZEJ5OiAoaXRlbTogTmdPcHRpb24pID0+IGJvb2xlYW47XG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5jb21wYXJlV2l0aCkge1xuICAgICAgICAgICAgZmluZEJ5ID0gaXRlbSA9PiB0aGlzLl9uZ1NlbGVjdC5jb21wYXJlV2l0aChpdGVtLnZhbHVlLCB2YWx1ZSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpIHtcbiAgICAgICAgICAgIGZpbmRCeSA9IGl0ZW0gPT4gIWl0ZW0uY2hpbGRyZW4gJiYgdGhpcy5yZXNvbHZlTmVzdGVkKGl0ZW0udmFsdWUsIHRoaXMuX25nU2VsZWN0LmJpbmRWYWx1ZSkgPT09IHZhbHVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaW5kQnkgPSBpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlIHx8XG4gICAgICAgICAgICAgICAgIWl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5sYWJlbCAmJiBpdGVtLmxhYmVsID09PSB0aGlzLnJlc29sdmVOZXN0ZWQodmFsdWUsIHRoaXMuX25nU2VsZWN0LmJpbmRMYWJlbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuZmluZChpdGVtID0+IGZpbmRCeShpdGVtKSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5tYXBJdGVtKGl0ZW0sIHRoaXMuX2l0ZW1zLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKG9wdGlvbik7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3RlZChrZWVwRGlzYWJsZWQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcihrZWVwRGlzYWJsZWQpO1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGtlZXBEaXNhYmxlZCAmJiBpdGVtLnNlbGVjdGVkICYmIGl0ZW0uZGlzYWJsZWQ7XG4gICAgICAgICAgICBpdGVtLm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcmVkSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRCeUxhYmVsKHRlcm06IHN0cmluZykge1xuICAgICAgICB0ZXJtID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRlcm0pLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKGl0ZW0ubGFiZWwpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gbGFiZWwuc3Vic3RyKDAsIHRlcm0ubGVuZ3RoKSA9PT0gdGVybTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlsdGVyKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIXRlcm0pIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXJlZEl0ZW1zKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgICAgIHRlcm0gPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiA/IHRlcm0gOiBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnModGVybSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiB8fCB0aGlzLl9kZWZhdWx0U2VhcmNoRm47XG4gICAgICAgIGNvbnN0IGhpZGVTZWxlY3RlZCA9IHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZDtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuX2dyb3Vwcy5rZXlzKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9ncm91cHMuZ2V0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVNlbGVjdGVkICYmIChpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5zZWxlY3RlZCB8fCBpdGVtLnNlbGVjdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHRoaXMuX25nU2VsZWN0LnNlYXJjaEZuID8gaXRlbS52YWx1ZSA6IGl0ZW07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKHRlcm0sIHNlYXJjaEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsYXN0XSA9IG1hdGNoZWRJdGVtcy5zbGljZSgtMSk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3QucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWQgPSB0aGlzLl9pdGVtcy5maW5kKHggPT4geCA9PT0gbGFzdC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goaGVhZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaCguLi5tYXRjaGVkSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRGaWx0ZXJlZEl0ZW1zKCkge1xuICAgICAgICBpZiAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2l0ZW1zLmZpbHRlcih4ID0+ICF4LnNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubWFya0l0ZW0oKSB7XG4gICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgbWFya05leHRJdGVtKCkge1xuICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKCsxKTtcbiAgICB9XG5cbiAgICBtYXJrUHJldmlvdXNJdGVtKCkge1xuICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKC0xKTtcbiAgICB9XG5cbiAgICBtYXJrSXRlbShpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB9XG5cbiAgICBtYXJrU2VsZWN0ZWRPckRlZmF1bHQobWFya0RlZmF1bHQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4T2ZMYXN0U2VsZWN0ZWQgPSB0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgPyAtMSA6IHRoaXMuX2ZpbHRlcmVkSXRlbXMuaW5kZXhPZih0aGlzLmxhc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5sYXN0U2VsZWN0ZWRJdGVtICYmIGluZGV4T2ZMYXN0U2VsZWN0ZWQgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSBpbmRleE9mTGFzdFNlbGVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmV4Y2x1ZGVHcm91cHNGcm9tRGVmYXVsdFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gbWFya0RlZmF1bHQgPyB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZEluZGV4KHggPT4gIXguZGlzYWJsZWQgJiYgIXguY2hpbGRyZW4pIDogLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gbWFya0RlZmF1bHQgPyB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZEluZGV4KHggPT4gIXguZGlzYWJsZWQpIDogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNvbHZlTmVzdGVkKG9wdGlvbjogYW55LCBrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qob3B0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25ba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtrZXlzW2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcEl0ZW0oaXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogTmdPcHRpb24ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGlzRGVmaW5lZChpdGVtLiRuZ09wdGlvbkxhYmVsKSA/IGl0ZW0uJG5nT3B0aW9uTGFiZWwgOiB0aGlzLnJlc29sdmVOZXN0ZWQoaXRlbSwgdGhpcy5fbmdTZWxlY3QuYmluZExhYmVsKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc0RlZmluZWQoaXRlbS4kbmdPcHRpb25WYWx1ZSkgPyBpdGVtLiRuZ09wdGlvblZhbHVlIDogaXRlbTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGxhYmVsOiBpc0RlZmluZWQobGFiZWwpID8gbGFiZWwudG9TdHJpbmcoKSA6ICcnLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXG4gICAgICAgICAgICBodG1sSWQ6IG5ld0lkKCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbWFwU2VsZWN0ZWRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZTtcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RlZCBvZiB0aGlzLnNlbGVjdGVkSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlID8gdGhpcy5yZXNvbHZlTmVzdGVkKHNlbGVjdGVkLnZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpIDogc2VsZWN0ZWQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXNEZWZpbmVkKHZhbHVlKSA/IHRoaXMuZmluZEl0ZW0odmFsdWUpIDogbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnVuc2VsZWN0KHNlbGVjdGVkLCBtdWx0aXBsZSk7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSB8fCBzZWxlY3RlZCwgbXVsdGlwbGUsIHRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cEFzTW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZih4KSA9PT0gLTEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2hvd1NlbGVjdGVkKGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLnBhcmVudDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEV4aXN0cyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmluZCh4ID0+IHggPT09IHBhcmVudCk7XG4gICAgICAgICAgICBpZiAoIXBhcmVudEV4aXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMuX2ZpbHRlcmVkSXRlbXMuc29ydCgoYSwgYikgPT4gKGEuaW5kZXggLSBiLmluZGV4KSldO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hpZGVTZWxlY3RlZChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtKTtcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmV2ZXJ5KHggPT4geC5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtLnBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCAhPT0gaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0U2VhcmNoRm4oc2VhcmNoOiBzdHJpbmcsIG9wdDogTmdPcHRpb24pIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnMob3B0LmxhYmVsKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbGFiZWwuaW5kZXhPZihzZWFyY2gpID4gLTFcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXROZXh0SXRlbUluZGV4KHN0ZXBzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHN0ZXBzID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9tYXJrZWRJbmRleCA9PT0gdGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxKSA/IDAgOiAodGhpcy5fbWFya2VkSW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX21hcmtlZEluZGV4IDw9IDApID8gKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoIC0gMSkgOiAodGhpcy5fbWFya2VkSW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGVwVG9JdGVtKHN0ZXBzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwIHx8IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZXZlcnkoeCA9PiB4LmRpc2FibGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSB0aGlzLl9nZXROZXh0SXRlbUluZGV4KHN0ZXBzKTtcbiAgICAgICAgaWYgKHRoaXMubWFya2VkSXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fc3RlcFRvSXRlbShzdGVwcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9ncm91cEJ5KGl0ZW1zOiBOZ09wdGlvbltdLCBwcm9wOiBzdHJpbmcgfCBGdW5jdGlvbik6IE9wdGlvbkdyb3VwcyB7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXA8c3RyaW5nIHwgTmdPcHRpb24sIE5nT3B0aW9uW10+KCk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBpdGVtcyBhcmUgYWxyZWFkeSBncm91cGVkIGJ5IGdpdmVuIGtleS5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXNbMF0udmFsdWVbPHN0cmluZz5wcm9wXSkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gKGl0ZW0udmFsdWVbPHN0cmluZz5wcm9wXSB8fCBbXSkubWFwKCh4LCBpbmRleCkgPT4gdGhpcy5tYXBJdGVtKHgsIGluZGV4KSk7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnNldChpdGVtLCBjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNGbktleSA9IGlzRnVuY3Rpb24odGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XG4gICAgICAgIGNvbnN0IGtleUZuID0gKGl0ZW06IE5nT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQga2V5ID0gaXNGbktleSA/ICg8RnVuY3Rpb24+cHJvcCkoaXRlbS52YWx1ZSkgOiBpdGVtLnZhbHVlWzxzdHJpbmc+cHJvcF07XG4gICAgICAgICAgICByZXR1cm4gaXNEZWZpbmVkKGtleSkgPyBrZXkgOiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR3JvdXAgaXRlbXMgYnkga2V5LlxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlGbihpdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzLmdldChrZXkpO1xuICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnNldChrZXksIFtpdGVtXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mbGF0dGVuKGdyb3VwczogT3B0aW9uR3JvdXBzKSB7XG4gICAgICAgIGNvbnN0IGlzR3JvdXBCeUZuID0gaXNGdW5jdGlvbih0aGlzLl9uZ1NlbGVjdC5ncm91cEJ5KTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgY29uc3Qgd2l0aG91dEdyb3VwID0gZ3JvdXBzLmdldCh1bmRlZmluZWQpIHx8IFtdO1xuICAgICAgICBpdGVtcy5wdXNoKC4uLndpdGhvdXRHcm91cCk7XG4gICAgICAgIGxldCBpID0gd2l0aG91dEdyb3VwLmxlbmd0aDtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbShncm91cHMua2V5cygpKSkge1xuICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNPYmplY3RLZXkgPSBpc09iamVjdChrZXkpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50OiBOZ09wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogaXNPYmplY3RLZXkgPyAnJyA6IDxzdHJpbmc+a2V5LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpKyssXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLl9uZ1NlbGVjdC5zZWxlY3RhYmxlR3JvdXAsXG4gICAgICAgICAgICAgICAgaHRtbElkOiBuZXdJZCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gaXNHcm91cEJ5Rm4gPyB0aGlzLl9uZ1NlbGVjdC5iaW5kTGFiZWwgOiA8c3RyaW5nPnRoaXMuX25nU2VsZWN0Lmdyb3VwQnk7XG4gICAgICAgICAgICBjb25zdCBncm91cFZhbHVlID0gdGhpcy5fbmdTZWxlY3QuZ3JvdXBWYWx1ZSB8fCAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdEtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxOZ09wdGlvbj5rZXkpLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBbZ3JvdXBLZXldOiBrZXkgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBncm91cHMuZ2V0KGtleSkubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgIHgucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHguY2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgeC5pbmRleCA9IGkrKztcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICBwYXJlbnQudmFsdWUgPSBncm91cFZhbHVlKGtleSwgY2hpbGRyZW4ubWFwKHggPT4geC52YWx1ZSkpO1xuICAgICAgICAgICAgaXRlbXMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgaXRlbXMucHVzaCguLi5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgTmdPcHRpb24ge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XG4gICAgaW5kZXg/OiBudW1iZXI7XG4gICAgaHRtbElkPzogc3RyaW5nO1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgbWFya2VkPzogYm9vbGVhbjtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICB2YWx1ZT86IHN0cmluZyB8IE9iamVjdDtcbiAgICBwYXJlbnQ/OiBOZ09wdGlvbjtcbiAgICBjaGlsZHJlbj86IE5nT3B0aW9uW107XG59XG5cbmV4cG9ydCBlbnVtIEtleUNvZGUge1xuICAgIFRhYiA9IDksXG4gICAgRW50ZXIgPSAxMyxcbiAgICBFc2MgPSAyNyxcbiAgICBTcGFjZSA9IDMyLFxuICAgIEFycm93VXAgPSAzOCxcbiAgICBBcnJvd0Rvd24gPSA0MCxcbiAgICBCYWNrc3BhY2UgPSA4XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgV2luZG93U2VydmljZSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KGhhbmRsZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgdGltZW91dDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtc0RpbWVuc2lvbnMge1xuICAgIGl0ZW1zTGVuZ3RoOiBudW1iZXI7XG4gICAgdmlld1dpZHRoOiBudW1iZXI7XG4gICAgdmlld0hlaWdodDogbnVtYmVyO1xuICAgIGNoaWxkV2lkdGg6IG51bWJlcjtcbiAgICBjaGlsZEhlaWdodDogbnVtYmVyO1xuICAgIGl0ZW1zUGVyQ29sOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbXNSYW5nZVJlc3VsdCB7XG4gICAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XG4gICAgdG9wUGFkZGluZzogbnVtYmVyO1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVmlydHVhbFNjcm9sbFNlcnZpY2Uge1xuXG4gICAgY2FsY3VsYXRlSXRlbXMoZDogSXRlbXNEaW1lbnNpb25zLCBkcm9wZG93bkVsOiBIVE1MRWxlbWVudCwgYnVmZmVyQW1vdW50OiBudW1iZXIpOiBJdGVtc1JhbmdlUmVzdWx0IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZC5jaGlsZEhlaWdodCAqIGQuaXRlbXNMZW5ndGg7XG4gICAgICAgIGlmIChkcm9wZG93bkVsLnNjcm9sbFRvcCA+IHNjcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgZHJvcGRvd25FbC5zY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBkcm9wZG93bkVsLnNjcm9sbFRvcCk7XG4gICAgICAgIGNvbnN0IGluZGV4QnlTY3JvbGxUb3AgPSBzY3JvbGxUb3AgLyBzY3JvbGxIZWlnaHQgKiBkLml0ZW1zTGVuZ3RoO1xuICAgICAgICBsZXQgZW5kID0gTWF0aC5taW4oZC5pdGVtc0xlbmd0aCwgTWF0aC5jZWlsKGluZGV4QnlTY3JvbGxUb3ApICsgKGQuaXRlbXNQZXJDb2wgKyAxKSk7XG5cbiAgICAgICAgY29uc3QgbWF4U3RhcnRFbmQgPSBlbmQ7XG4gICAgICAgIGNvbnN0IG1heFN0YXJ0ID0gTWF0aC5tYXgoMCwgbWF4U3RhcnRFbmQgLSBkLml0ZW1zUGVyQ29sIC0gMSk7XG4gICAgICAgIGxldCBzdGFydCA9IE1hdGgubWluKG1heFN0YXJ0LCBNYXRoLmZsb29yKGluZGV4QnlTY3JvbGxUb3ApKTtcblxuICAgICAgICBsZXQgdG9wUGFkZGluZyA9IGQuY2hpbGRIZWlnaHQgKiBNYXRoLmNlaWwoc3RhcnQpIC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihzdGFydCwgYnVmZmVyQW1vdW50KSk7XG4gICAgICAgIHRvcFBhZGRpbmcgPSAhaXNOYU4odG9wUGFkZGluZykgPyB0b3BQYWRkaW5nIDogMDtcbiAgICAgICAgc3RhcnQgPSAhaXNOYU4oc3RhcnQpID8gc3RhcnQgOiAtMTtcbiAgICAgICAgZW5kID0gIWlzTmFOKGVuZCkgPyBlbmQgOiAtMTtcbiAgICAgICAgc3RhcnQgLT0gYnVmZmVyQW1vdW50O1xuICAgICAgICBzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0KTtcbiAgICAgICAgZW5kICs9IGJ1ZmZlckFtb3VudDtcbiAgICAgICAgZW5kID0gTWF0aC5taW4oZC5pdGVtc0xlbmd0aCwgZW5kKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wUGFkZGluZzogdG9wUGFkZGluZyxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodDogc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBlbmRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZURpbWVuc2lvbnMoaXRlbXNMZW5ndGg6IG51bWJlciwgaW5kZXg6IG51bWJlciwgcGFuZWxFbDogSFRNTEVsZW1lbnQsIGNvbnRlbnRFbDogSFRNTEVsZW1lbnQpOiBJdGVtc0RpbWVuc2lvbnMge1xuICAgICAgICBjb25zdCBwYW5lbFJlY3QgPSBwYW5lbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBpdGVtUmVjdCA9IGNvbnRlbnRFbC5jaGlsZHJlbltpbmRleF0gPyBjb250ZW50RWwuY2hpbGRyZW5baW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDoge1xuICAgICAgICAgICAgd2lkdGg6IHBhbmVsUmVjdC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcGFuZWxSZWN0LmhlaWdodCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaXRlbXNQZXJDb2wgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBhbmVsUmVjdC5oZWlnaHQgLyBpdGVtUmVjdC5oZWlnaHQpKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXNMZW5ndGg6IGl0ZW1zTGVuZ3RoLFxuICAgICAgICAgICAgdmlld1dpZHRoOiBwYW5lbFJlY3Qud2lkdGgsXG4gICAgICAgICAgICB2aWV3SGVpZ2h0OiBwYW5lbFJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgY2hpbGRXaWR0aDogaXRlbVJlY3Qud2lkdGgsXG4gICAgICAgICAgICBjaGlsZEhlaWdodDogaXRlbVJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgaXRlbXNQZXJDb2w6IGl0ZW1zUGVyQ29sLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uRGVzdHJveSxcbiAgICBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIE5nWm9uZSxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9uSW5pdCxcbiAgICBPbkNoYW5nZXMsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIE9wdGlvbmFsLFxuICAgIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgeyBEcm9wZG93blBvc2l0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFZpcnR1YWxTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcblxuY29uc3QgVE9QX0NTU19DTEFTUyA9ICduZy1zZWxlY3QtdG9wJztcbmNvbnN0IEJPVFRPTV9DU1NfQ0xBU1MgPSAnbmctc2VsZWN0LWJvdHRvbSc7XG5cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc2VsZWN0b3I6ICduZy1kcm9wZG93bi1wYW5lbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdJZj1cImhlYWRlclRlbXBsYXRlXCIgY2xhc3M9XCJuZy1kcm9wZG93bi1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBzZWFyY2hUZXJtOiBmaWx0ZXJWYWx1ZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICNzY3JvbGwgY2xhc3M9XCJuZy1kcm9wZG93bi1wYW5lbC1pdGVtcyBzY3JvbGwtaG9zdFwiPlxuICAgICAgICAgICAgPGRpdiAjcGFkZGluZyBbY2xhc3MudG90YWwtcGFkZGluZ109XCJ2aXJ0dWFsU2Nyb2xsXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250ZW50IFtjbGFzcy5zY3JvbGxhYmxlLWNvbnRlbnRdPVwidmlydHVhbFNjcm9sbCAmJiBpdGVtcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZm9vdGVyVGVtcGxhdGVcIiBjbGFzcz1cIm5nLWRyb3Bkb3duLWZvb3RlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHNlYXJjaFRlcm06IGZpbHRlclZhbHVlIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgIEBJbnB1dCgpIGl0ZW1zOiBOZ09wdGlvbltdID0gW107XG4gICAgQElucHV0KCkgbWFya2VkSXRlbTogTmdPcHRpb247XG4gICAgQElucHV0KCkgcG9zaXRpb246IERyb3Bkb3duUG9zaXRpb24gPSAnYXV0byc7XG4gICAgQElucHV0KCkgYXBwZW5kVG86IHN0cmluZztcbiAgICBASW5wdXQoKSBidWZmZXJBbW91bnQgPSA0O1xuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBASW5wdXQoKSBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBASW5wdXQoKSBmaWx0ZXJWYWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICAgIEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcbiAgICBAT3V0cHV0KCkgc2Nyb2xsVG9FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgQE91dHB1dCgpIG91dHNpZGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY29udGVudEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHNjcm9sbEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgncGFkZGluZycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwYWRkaW5nRWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kcm9wZG93bjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfc2VsZWN0OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9wcmV2aW91c1N0YXJ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHJldmlvdXNFbmQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zdGFydHVwTG9vcCA9IHRydWU7XG4gICAgcHJpdmF0ZSBfaXNTY3JvbGxlZFRvTWFya2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9FbmRGaXJlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2N1cnJlbnRQb3NpdGlvbjogRHJvcGRvd25Qb3NpdGlvbjtcbiAgICBwcml2YXRlIF9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7IH07XG4gICAgcHJpdmF0ZSBfZGlzcG9zZURvY3VtZW50UmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7IH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBfem9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIF92aXJ0dWFsU2Nyb2xsU2VydmljZTogVmlydHVhbFNjcm9sbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3dpbmRvdzogV2luZG93U2VydmljZSxcbiAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5fZHJvcGRvd24gPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gICAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9zZWxlY3QgPSB0aGlzLl9kcm9wZG93bi5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLl9oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgeyBjYXB0dXJlOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ21vdXNlZG93bicsIHsgY2FwdHVyZTogdHJ1ZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoJGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVPdXRzaWRlQ2xpY2soJGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1Njcm9sbGVkVG9NYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUl0ZW1zQ2hhbmdlKGNoYW5nZXMuaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VEb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9kcm9wZG93bi5wYXJlbnROb2RlLCB0aGlzLl9kcm9wZG93bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMuX3doZW5Db250ZW50UmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZXN0cm95JC5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRG9jdW1lbnRSZXNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbXMoKS50aGVuKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2Nyb2xsSW50byhpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnModGhpcy52aXJ0dWFsU2Nyb2xsID8gMCA6IGluZGV4KTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRWw6IEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gTWF0aC5mbG9vcihkLnZpZXdIZWlnaHQgLyBkLmNoaWxkSGVpZ2h0KSAtIDE7XG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IChpbmRleCAqIGQuY2hpbGRIZWlnaHQpIC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihpbmRleCwgYnVmZmVyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWw6IEhUTUxFbGVtZW50ID0gdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSBBcnJheS5mcm9tKGNvbnRlbnRFbC5jaGlsZHJlbikuc2xpY2UoMCwgaW5kZXgpLnJlZHVjZSgoYywgbikgPT4gYyArIG4uY2xpZW50SGVpZ2h0LCAwKTtcbiAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IGNoaWxkcmVuSGVpZ2h0IC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihpbmRleCwgYnVmZmVyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxJbnRvVGFnKCkge1xuICAgICAgICBjb25zdCBlbDogRWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBkID0gdGhpcy5fY2FsY3VsYXRlRGltZW5zaW9ucygpO1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBkLmNoaWxkSGVpZ2h0ICogKGQuaXRlbXNMZW5ndGggKyAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLl93aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24gPSB0aGlzLl9jYWxjdWxhdGVDdXJyZW50UG9zaXRpb24odGhpcy5fZHJvcGRvd24pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcm9wZG93biwgVE9QX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcGRvd24sIEJPVFRPTV9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdCwgVE9QX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fc2VsZWN0LCBCT1RUT01fQ1NTX0NMQVNTKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcm9wZG93biwgQk9UVE9NX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcGRvd24sIFRPUF9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdCwgQk9UVE9NX0NTU19DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fc2VsZWN0LCBUT1BfQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVBcHBlbmRlZERyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlT3V0c2lkZUNsaWNrKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3QuY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9kcm9wZG93bi5jb250YWlucygkZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9ICRldmVudC5wYXRoIHx8ICgkZXZlbnQuY29tcG9zZWRQYXRoICYmICRldmVudC5jb21wb3NlZFBhdGgoKSk7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICYmICRldmVudC50YXJnZXQuc2hhZG93Um9vdCAmJiBwYXRoICYmIHBhdGhbMF0gJiYgdGhpcy5fc2VsZWN0LmNvbnRhaW5zKHBhdGhbMF0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm91dHNpZGVDbGljay5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVTY3JvbGxUb0VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVJdGVtc0NoYW5nZShpdGVtczogeyBwcmV2aW91c1ZhbHVlOiBOZ09wdGlvbltdLCBjdXJyZW50VmFsdWU6IE5nT3B0aW9uW10gfSkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb0VuZEZpcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzRW5kID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoaXRlbXMgIT09IHVuZGVmaW5lZCAmJiBpdGVtcy5wcmV2aW91c1ZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIChpdGVtcy5wcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQgJiYgaXRlbXMucHJldmlvdXNWYWx1ZS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydHVwTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zLmN1cnJlbnRWYWx1ZSB8fCBbXTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUl0ZW1zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBOZ1pvbmUuYXNzZXJ0Tm90SW5Bbmd1bGFyWm9uZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLml0ZW1zLnNsaWNlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvb3AgPSAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuX3ZpcnR1YWxTY3JvbGxTZXJ2aWNlLmNhbGN1bGF0ZUl0ZW1zKGQsIHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1ZmZlckFtb3VudCB8fCAwKTtcblxuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLnBhZGRpbmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN0eWxlLmhlaWdodCA9IGAke3Jlcy5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKCcgKyByZXMudG9wUGFkZGluZyArICdweCknO1xuXG4gICAgICAgICAgICBpZiAocmVzLnN0YXJ0ICE9PSB0aGlzLl9wcmV2aW91c1N0YXJ0IHx8IHJlcy5lbmQgIT09IHRoaXMuX3ByZXZpb3VzRW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuaXRlbXMuc2xpY2UocmVzLnN0YXJ0LCByZXMuZW5kKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmVtaXQoeyBzdGFydDogcmVzLnN0YXJ0LCBlbmQ6IHJlcy5lbmQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdGFydCA9IHJlcy5zdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c0VuZCA9IHJlcy5lbmQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhcnR1cExvb3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9vcChyZXNvbHZlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGFydHVwTG9vcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0dXBMb29wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbG9vcChyZXNvbHZlKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9maXJlU2Nyb2xsVG9FbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb0VuZEZpcmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2Nyb2xsOiBIVE1MRWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nOiBIVE1MRWxlbWVudCA9IHRoaXMudmlydHVhbFNjcm9sbCA/XG4gICAgICAgICAgICB0aGlzLnBhZGRpbmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOlxuICAgICAgICAgICAgdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmIChzY3JvbGwuc2Nyb2xsVG9wICsgdGhpcy5fZHJvcGRvd24uY2xpZW50SGVpZ2h0ID49IHBhZGRpbmcuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvRW5kLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvRW5kRmlyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlRGltZW5zaW9ucyhpbmRleCA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTY3JvbGxTZXJ2aWNlLmNhbGN1bGF0ZURpbWVuc2lvbnMoXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZURvY3VtZW50UmVzaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kaXNwb3NlRG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY3JvbGxUb01hcmtlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2Nyb2xsZWRUb01hcmtlZCB8fCAhdGhpcy5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNTY3JvbGxlZFRvTWFya2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvKHRoaXMubWFya2VkSXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ3VycmVudFBvc2l0aW9uKGRyb3Bkb3duRWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLl9zZWxlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHNlbGVjdFJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzZWxlY3RSZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3QgZHJvcGRvd25IZWlnaHQgPSBkcm9wZG93bkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgaWYgKG9mZnNldFRvcCArIGhlaWdodCArIGRyb3Bkb3duSGVpZ2h0ID4gc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuICd0b3AnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYXBwZW5kRHJvcGRvd24oKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5hcHBlbmRUbyk7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFwcGVuZFRvIHNlbGVjdG9yICR7dGhpcy5hcHBlbmRUb30gZGlkIG5vdCBmb3VuZCBhbnkgcGFyZW50IGVsZW1lbnRgKVxuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLl9kcm9wZG93bik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuYXBwZW5kVG8pIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnN0IHNlbGVjdFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLl9zZWxlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCAtIGJvdW5kaW5nUmVjdC50b3A7XG4gICAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBzZWxlY3RSZWN0LmxlZnQgLSBib3VuZGluZ1JlY3QubGVmdDtcbiAgICAgICAgY29uc3QgdG9wRGVsdGEgPSB0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICdib3R0b20nID8gc2VsZWN0UmVjdC5oZWlnaHQgOiAtdGhpcy5fZHJvcGRvd24uY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS50b3AgPSBvZmZzZXRUb3AgKyB0b3BEZWx0YSArICdweCc7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUubGVmdCA9IG9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS53aWR0aCA9IHNlbGVjdFJlY3Qud2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5taW5XaWR0aCA9IHNlbGVjdFJlY3Qud2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3doZW5Db250ZW50UmVhZHkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWR5ID0gKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5nT3B0aW9uID0gdGhpcy5fZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLm5nLW9wdGlvbicpO1xuICAgICAgICAgICAgaWYgKG5nT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVhZHkocmVzb2x2ZSksIDUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVhZHkocmVzb2x2ZSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1vcHRpb24nLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgTmdPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgICBASW5wdXQoKVxuICAgIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fZGlzYWJsZWQgPSB0aGlzLl9pc0Rpc2FibGVkKHZhbHVlKSB9XG5cbiAgICByZWFkb25seSBzdGF0ZUNoYW5nZSQgPSBuZXcgU3ViamVjdDx7IHZhbHVlOiBhbnksIGRpc2FibGVkOiBib29sZWFuIH0+KCk7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2UkLm5leHQoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLl9kaXNhYmxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0Q29uZmlnIHtcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIG5vdEZvdW5kVGV4dCA9ICdObyBpdGVtcyBmb3VuZCc7XG4gICAgdHlwZVRvU2VhcmNoVGV4dCA9ICdUeXBlIHRvIHNlYXJjaCc7XG4gICAgYWRkVGFnVGV4dCA9ICdBZGQgaXRlbSc7XG4gICAgbG9hZGluZ1RleHQgPSAnTG9hZGluZy4uLic7XG4gICAgY2xlYXJBbGxUZXh0ID0gJ0NsZWFyIGFsbCc7XG4gICAgZGlzYWJsZVZpcnR1YWxTY3JvbGwgPSB0cnVlO1xuICAgIG9wZW5PbkVudGVyID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkNoYW5nZXMsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBmb3J3YXJkUmVmLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ29udGVudENoaWxkLFxuICAgIFRlbXBsYXRlUmVmLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBWaWV3Q2hpbGQsXG4gICAgRWxlbWVudFJlZixcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBJbmplY3QsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIEluamVjdGlvblRva2VuLFxuICAgIEF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHRha2VVbnRpbCwgc3RhcnRXaXRoLCB0YXAsIGRlYm91bmNlVGltZSwgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vbmctdGVtcGxhdGVzLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9jb25zb2xlLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNEZWZpbmVkLCBpc0Z1bmN0aW9uLCBpc1Byb21pc2UsIGlzT2JqZWN0IH0gZnJvbSAnLi92YWx1ZS11dGlscyc7XG5pbXBvcnQgeyBJdGVtc0xpc3QgfSBmcm9tICcuL2l0ZW1zLWxpc3QnO1xuaW1wb3J0IHsgTmdPcHRpb24sIEtleUNvZGUgfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XG5pbXBvcnQgeyBuZXdJZCB9IGZyb20gJy4vaWQnO1xuaW1wb3J0IHsgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1kcm9wZG93bi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL25nLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xuaW1wb3J0IHsgTmdTZWxlY3RDb25maWcgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZID0gbmV3IEluamVjdGlvblRva2VuPFNlbGVjdGlvbk1vZGVsRmFjdG9yeT4oJ25nLXNlbGVjdC1zZWxlY3Rpb24tbW9kZWwnKTtcbmV4cG9ydCB0eXBlIERyb3Bkb3duUG9zaXRpb24gPSAnYm90dG9tJyB8ICd0b3AnIHwgJ2F1dG8nO1xuZXhwb3J0IHR5cGUgQXV0b0NvcnJlY3QgPSAnb2ZmJyB8ICdvbic7XG5leHBvcnQgdHlwZSBBdXRvQ2FwaXRhbGl6ZSA9ICdvZmYnIHwgJ29uJztcbmV4cG9ydCB0eXBlIEFkZFRhZ0ZuID0gKCh0ZXJtOiBzdHJpbmcpID0+IGFueSB8IFByb21pc2U8YW55Pik7XG5leHBvcnQgdHlwZSBDb21wYXJlV2l0aEZuID0gKGE6IGFueSwgYjogYW55KSA9PiBib29sZWFuO1xuZXhwb3J0IHR5cGUgR3JvdXBWYWx1ZUZuID0gKGtleTogc3RyaW5nIHwgb2JqZWN0LCBjaGlsZHJlbjogYW55W10pID0+IHN0cmluZyB8IG9iamVjdDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1zZWxlY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25nLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9XSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ3JvbGUnOiAnbGlzdGJveCcsXG4gICAgICAgICdjbGFzcyc6ICduZy1zZWxlY3QnLFxuICAgICAgICAnW2NsYXNzLm5nLXNlbGVjdC1zaW5nbGVdJzogJyFtdWx0aXBsZScsXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBiaW5kTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBiaW5kVmFsdWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBtYXJrRmlyc3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbm90Rm91bmRUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgdHlwZVRvU2VhcmNoVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFkZFRhZ1RleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBsb2FkaW5nVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsZWFyQWxsVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRyb3Bkb3duUG9zaXRpb246IERyb3Bkb3duUG9zaXRpb24gPSAnYXV0byc7XG4gICAgQElucHV0KCkgYXBwZW5kVG86IHN0cmluZztcbiAgICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gICAgQElucHV0KCkgaGlkZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2VsZWN0T25UYWIgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBvcGVuT25FbnRlcjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBtYXhTZWxlY3RlZEl0ZW1zOiBudW1iZXI7XG4gICAgQElucHV0KCkgZ3JvdXBCeTogc3RyaW5nIHwgRnVuY3Rpb247XG4gICAgQElucHV0KCkgZ3JvdXBWYWx1ZTogR3JvdXBWYWx1ZUZuO1xuICAgIEBJbnB1dCgpIGJ1ZmZlckFtb3VudCA9IDQ7XG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXAgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXBBc01vZGVsID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzZWFyY2hGbiA9IG51bGw7XG4gICAgQElucHV0KCkgZXhjbHVkZUdyb3Vwc0Zyb21EZWZhdWx0U2VsZWN0aW9uID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2xlYXJPbkJhY2tzcGFjZSA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBsYWJlbEZvcklkID0gbnVsbDtcbiAgICBASW5wdXQoKSBhdXRvQ29ycmVjdDogQXV0b0NvcnJlY3QgPSAnb2ZmJztcbiAgICBASW5wdXQoKSBhdXRvQ2FwaXRhbGl6ZTogQXV0b0NhcGl0YWxpemUgPSAnb2ZmJztcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC10eXBlYWhlYWQnKSB0eXBlYWhlYWQ6IFN1YmplY3Q8c3RyaW5nPjtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1tdWx0aXBsZScpIG11bHRpcGxlID0gZmFsc2U7XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtdGFnZ2FibGUnKSBhZGRUYWc6IGJvb2xlYW4gfCBBZGRUYWdGbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LXNlYXJjaGFibGUnKSBzZWFyY2hhYmxlID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1jbGVhcmFibGUnKSBjbGVhcmFibGUgPSB0cnVlO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LW9wZW5lZCcpIGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBnZXQgaXRlbXMoKSB7IHJldHVybiB0aGlzLl9pdGVtcyB9O1xuICAgIHNldCBpdGVtcyh2YWx1ZTogYW55W10pIHtcbiAgICAgICAgdGhpcy5faXRlbXNBcmVVc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgQElucHV0KClcbiAgICBnZXQgY29tcGFyZVdpdGgoKSB7IHJldHVybiB0aGlzLl9jb21wYXJlV2l0aDsgfVxuICAgIHNldCBjb21wYXJlV2l0aChmbjogQ29tcGFyZVdpdGhGbikge1xuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignYGNvbXBhcmVXaXRoYCBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29tcGFyZVdpdGggPSBmbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBjbGVhclNlYXJjaE9uQWRkKCkgeyByZXR1cm4gaXNEZWZpbmVkKHRoaXMuX2NsZWFyU2VhcmNoT25BZGQpID8gdGhpcy5fY2xlYXJTZWFyY2hPbkFkZCA6IHRoaXMuY2xvc2VPblNlbGVjdDsgfTtcbiAgICBzZXQgY2xlYXJTZWFyY2hPbkFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jbGVhclNlYXJjaE9uQWRkID0gdmFsdWU7XG4gICAgfTtcblxuICAgIC8vIG91dHB1dCBldmVudHNcbiAgICBAT3V0cHV0KCdibHVyJykgYmx1ckV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ2ZvY3VzJykgZm9jdXNFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdjaGFuZ2UnKSBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdvcGVuJykgb3BlbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ2Nsb3NlJykgY2xvc2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdzZWFyY2gnKSBzZWFyY2hFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8e3Rlcm06IHN0cmluZywgaXRlbXM6IGFueVtdfT4oKTtcbiAgICBAT3V0cHV0KCdjbGVhcicpIGNsZWFyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnYWRkJykgYWRkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgncmVtb3ZlJykgcmVtb3ZlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnc2Nyb2xsJykgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH0+KCk7XG4gICAgQE91dHB1dCgnc2Nyb2xsVG9FbmQnKSBzY3JvbGxUb0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vIGN1c3RvbSB0ZW1wbGF0ZXNcbiAgICBAQ29udGVudENoaWxkKE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgb3B0Z3JvdXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbXVsdGlMYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbm90Rm91bmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdHlwZVRvU2VhcmNoVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbG9hZGluZ1RleHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGFnVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ0xvYWRpbmdTcGlubmVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbG9hZGluZ1NwaW5uZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQpKSBkcm9wZG93blBhbmVsOiBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZHJlbihOZ09wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBuZ09wdGlvbnM6IFF1ZXJ5TGlzdDxOZ09wdGlvbkNvbXBvbmVudD47XG4gICAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKSBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LWRpc2FibGVkJykgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1maWx0ZXJlZCcpIGdldCBmaWx0ZXJlZCgpIHsgcmV0dXJuICEhdGhpcy5maWx0ZXJWYWx1ZSAmJiB0aGlzLnNlYXJjaGFibGUgfTtcblxuICAgIGl0ZW1zTGlzdDogSXRlbXNMaXN0O1xuICAgIHZpZXdQb3J0SXRlbXM6IE5nT3B0aW9uW10gPSBbXTtcbiAgICBmaWx0ZXJWYWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgICBkcm9wZG93bklkID0gbmV3SWQoKTtcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBmb2N1c2VkOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfaXRlbXMgPSBbXTtcbiAgICBwcml2YXRlIF9pdGVtc0FyZVVzZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfZGVmYXVsdExhYmVsID0gJ2xhYmVsJztcbiAgICBwcml2YXRlIF9wcmltaXRpdmUgPSB0cnVlO1xuICAgIHByaXZhdGUgX21hbnVhbE9wZW46IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfcHJlc3NlZEtleXM6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfY29tcGFyZVdpdGg6IENvbXBhcmVXaXRoRm47XG4gICAgcHJpdmF0ZSBfY2xlYXJTZWFyY2hPbkFkZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9rZXlQcmVzcyQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gICAgY2xlYXJJdGVtID0gKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZCh4ID0+IHgudmFsdWUgPT09IGl0ZW0pO1xuICAgICAgICB0aGlzLnVuc2VsZWN0KG9wdGlvbik7XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBAQXR0cmlidXRlKCdjbGFzcycpIHB1YmxpYyBjbGFzc2VzOiBzdHJpbmcsXG4gICAgICAgIEBBdHRyaWJ1dGUoJ3RhYmluZGV4JykgcHVibGljIHRhYkluZGV4OiBzdHJpbmcsXG4gICAgICAgIEBBdHRyaWJ1dGUoJ2F1dG9mb2N1cycpIHByaXZhdGUgYXV0b0ZvY3VzOiBhbnksXG4gICAgICAgIGNvbmZpZzogTmdTZWxlY3RDb25maWcsXG4gICAgICAgIEBJbmplY3QoU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlkpIG5ld1NlbGVjdGlvbk1vZGVsOiBTZWxlY3Rpb25Nb2RlbEZhY3RvcnksXG4gICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgX2NvbnNvbGU6IENvbnNvbGVTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX21lcmdlR2xvYmFsQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0ID0gbmV3IEl0ZW1zTGlzdCh0aGlzLCBuZXdTZWxlY3Rpb25Nb2RlbCgpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtcygpOiBOZ09wdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNMaXN0LnNlbGVjdGVkSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkVmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBoYXNWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVLZXlQcmVzc2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVtcyhjaGFuZ2VzLml0ZW1zLmN1cnJlbnRWYWx1ZSB8fCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW51YWxPcGVuID0gaXNEZWZpbmVkKGNoYW5nZXMuaXNPcGVuLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXRlbXNBcmVVc2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVtc0Zyb21OZ09wdGlvbnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZmluZWQodGhpcy5hdXRvRm9jdXMpKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIGhhbmRsZUtleURvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChLZXlDb2RlWyRldmVudC53aGljaF0pIHtcbiAgICAgICAgICAgIHN3aXRjaCAoJGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkFycm93RG93bjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dEb3duKCRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5BcnJvd1VwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVBcnJvd1VwKCRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5TcGFjZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU3BhY2UoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFbnRlcigkZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuVGFiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVUYWIoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVzYzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQmFja3NwYWNlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVCYWNrc3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoJGV2ZW50LmtleSAmJiAkZXZlbnQua2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3MkLm5leHQoJGV2ZW50LmtleS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWNsZWFyLXdyYXBwZXInKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGVhckNsaWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmctYXJyb3ctd3JhcHBlcicpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy12YWx1ZS1pY29uJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBcnJvd0NsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xlYXJDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmNsZWFyU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkLm5leHQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhckV2ZW50LmVtaXQoKTtcbiAgICB9XG5cbiAgICBjbGVhck1vZGVsKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xlYXJhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCgpO1xuICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVXcml0ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzT3BlbiB8fCB0aGlzLml0ZW1zTGlzdC5tYXhJdGVtc1NlbGVjdGVkIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faXNUeXBlYWhlYWQgJiYgIXRoaXMuYWRkVGFnICYmIHRoaXMuaXRlbXNMaXN0Lm5vSXRlbXNUb1NlbGVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcbiAgICAgICAgdGhpcy5vcGVuRXZlbnQuZW1pdCgpO1xuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KCk7XG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRvZ2dsZUl0ZW0oaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8IGl0ZW0uZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51bnNlbGVjdChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmICghaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPbkFkZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudC5lbWl0KGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCB8fCB0aGlzLml0ZW1zTGlzdC5ub0l0ZW1zVG9TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnVuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU5nTW9kZWwoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudC5lbWl0KGl0ZW0pO1xuICAgIH1cblxuICAgIHNlbGVjdFRhZygpIHtcbiAgICAgICAgbGV0IHRhZztcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5hZGRUYWcpKSB7XG4gICAgICAgICAgICB0YWcgPSAoPEFkZFRhZ0ZuPnRoaXMuYWRkVGFnKSh0aGlzLmZpbHRlclZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhZyA9IHRoaXMuX3ByaW1pdGl2ZSA/IHRoaXMuZmlsdGVyVmFsdWUgOiB7IFt0aGlzLmJpbmRMYWJlbF06IHRoaXMuZmlsdGVyVmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVRhZyA9IChpdGVtKSA9PiB0aGlzLl9pc1R5cGVhaGVhZCB8fCAhdGhpcy5pc09wZW4gPyB0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKGl0ZW0sIG51bGwpIDogdGhpcy5pdGVtc0xpc3QuYWRkSXRlbShpdGVtKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZSh0YWcpKSB7XG4gICAgICAgICAgICB0YWcudGhlbihpdGVtID0+IHRoaXMuc2VsZWN0KGhhbmRsZVRhZyhpdGVtKSkpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdChoYW5kbGVUYWcodGFnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q2xlYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyYWJsZSAmJiAodGhpcy5oYXNWYWx1ZSB8fCB0aGlzLmZpbHRlclZhbHVlKSAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBnZXQgc2hvd0FkZFRhZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy5maWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRUYWcgJiZcbiAgICAgICAgICAgICghdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5zb21lKHggPT4geC5sYWJlbC50b0xvd2VyQ2FzZSgpID09PSB0ZXJtKSAmJlxuICAgICAgICAgICAgICAgICghdGhpcy5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5pc09wZW4gfHwgIXRoaXMuc2VsZWN0ZWRJdGVtcy5zb21lKHggPT4geC5sYWJlbC50b0xvd2VyQ2FzZSgpID09PSB0ZXJtKSkpICYmXG4gICAgICAgICAgICAhdGhpcy5sb2FkaW5nO1xuICAgIH1cblxuICAgIHNob3dOb0l0ZW1zRm91bmQoKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDA7XG4gICAgICAgIHJldHVybiAoKGVtcHR5ICYmICF0aGlzLl9pc1R5cGVhaGVhZCAmJiAhdGhpcy5sb2FkaW5nKSB8fFxuICAgICAgICAgICAgKGVtcHR5ICYmIHRoaXMuX2lzVHlwZWFoZWFkICYmIHRoaXMuZmlsdGVyVmFsdWUgJiYgIXRoaXMubG9hZGluZykpICYmXG4gICAgICAgICAgICAhdGhpcy5zaG93QWRkVGFnO1xuICAgIH1cblxuICAgIHNob3dUeXBlVG9TZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDA7XG4gICAgICAgIHJldHVybiBlbXB0eSAmJiB0aGlzLl9pc1R5cGVhaGVhZCAmJiAhdGhpcy5maWx0ZXJWYWx1ZSAmJiAhdGhpcy5sb2FkaW5nO1xuICAgIH1cblxuICAgIGZpbHRlcih0ZXJtOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHRlcm07XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzVHlwZWFoZWFkKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZC5uZXh0KHRoaXMuZmlsdGVyVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuZmlsdGVyKHRoaXMuZmlsdGVyVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VhcmNoRXZlbnQuZW1pdCh7IHRlcm0sIGl0ZW1zOiB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpIH0pO1xuXG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cygkZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nLXNlbGVjdC1mb2N1c2VkJyk7XG4gICAgICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KCRldmVudCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduZy1zZWxlY3QtZm9jdXNlZCcpO1xuICAgICAgICB0aGlzLmJsdXJFdmVudC5lbWl0KCRldmVudCk7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uSXRlbUhvdmVyKGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya0l0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICAgICAgaWYgKCEoPGFueT50aGlzLl9jZCkuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kcm9wZG93blBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duUGFuZWwudXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0SXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IGl0ZW1zWzBdO1xuICAgICAgICB0aGlzLmJpbmRMYWJlbCA9IHRoaXMuYmluZExhYmVsIHx8IHRoaXMuX2RlZmF1bHRMYWJlbDtcbiAgICAgICAgdGhpcy5fcHJpbWl0aXZlID0gaXNEZWZpbmVkKGZpcnN0SXRlbSkgPyAhaXNPYmplY3QoZmlyc3RJdGVtKSA6IHRoaXMuX3ByaW1pdGl2ZTtcbiAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2V0SXRlbXMoaXRlbXMpO1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXBTZWxlY3RlZEl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGlzRGVmaW5lZCh0aGlzLmZpbHRlclZhbHVlKSAmJiAhdGhpcy5faXNUeXBlYWhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmZpbHRlcih0aGlzLmZpbHRlclZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQgfHwgdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtTZWxlY3RlZE9yRGVmYXVsdCh0aGlzLm1hcmtGaXJzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRJdGVtc0Zyb21OZ09wdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU5nT3B0aW9ucyA9IChvcHRpb25zOiBRdWVyeUxpc3Q8TmdPcHRpb25Db21wb25lbnQ+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gb3B0aW9ucy5tYXAob3B0aW9uID0+ICh7XG4gICAgICAgICAgICAgICAgJG5nT3B0aW9uVmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAkbmdPcHRpb25MYWJlbDogb3B0aW9uLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2V0SXRlbXModGhpcy5pdGVtcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZU9wdGlvbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZWRPckRlc3Ryb3llZCA9IG1lcmdlKHRoaXMubmdPcHRpb25zLmNoYW5nZXMsIHRoaXMuX2Rlc3Ryb3kkKTtcbiAgICAgICAgICAgIG1lcmdlKC4uLnRoaXMubmdPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnN0YXRlQ2hhbmdlJCkpXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKGNoYW5nZWRPckRlc3Ryb3llZCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc0xpc3QuZmluZEl0ZW0ob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5uZ09wdGlvbnMuY2hhbmdlc1xuICAgICAgICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMubmdPcHRpb25zKSwgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUob3B0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kTGFiZWwgPSB0aGlzLl9kZWZhdWx0TGFiZWw7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmdPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGhhbmRsZU9wdGlvbkNoYW5nZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNWYWxpZFdyaXRlVmFsdWUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkgfHwgKHRoaXMubXVsdGlwbGUgJiYgdmFsdWUgPT09ICcnKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlQmluZGluZyA9IChpdGVtOiBhbnkpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKHRoaXMuY29tcGFyZVdpdGgpICYmIGlzT2JqZWN0KGl0ZW0pICYmIHRoaXMuYmluZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKGBCaW5kaW5nIG9iamVjdCgke0pTT04uc3RyaW5naWZ5KGl0ZW0pfSkgd2l0aCBiaW5kVmFsdWUgaXMgbm90IGFsbG93ZWQuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oJ011bHRpcGxlIHNlbGVjdCBuZ01vZGVsIHNob3VsZCBiZSBhcnJheS4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiB2YWxpZGF0ZUJpbmRpbmcoaXRlbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlQmluZGluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVXcml0ZVZhbHVlKG5nTW9kZWw6IGFueSB8IGFueVtdKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNWYWxpZFdyaXRlVmFsdWUobmdNb2RlbCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNMaXN0LmZpbmRJdGVtKHZhbCk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNWYWxPYmplY3QgPSBpc09iamVjdCh2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUHJpbWl0aXZlID0gIWlzVmFsT2JqZWN0ICYmICF0aGlzLmJpbmRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoKGlzVmFsT2JqZWN0IHx8IGlzUHJpbWl0aXZlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZWxlY3QodGhpcy5pdGVtc0xpc3QubWFwSXRlbSh2YWwsIG51bGwpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmluZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5iaW5kTGFiZWxdOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuYmluZFZhbHVlXTogdmFsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdCh0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKGl0ZW0sIG51bGwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICg8YW55W10+bmdNb2RlbCkuZm9yRWFjaChpdGVtID0+IHNlbGVjdChpdGVtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3QobmdNb2RlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVLZXlQcmVzc2VzKCkge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9rZXlQcmVzcyRcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCksXG4gICAgICAgICAgICAgICAgdGFwKGxldHRlciA9PiB0aGlzLl9wcmVzc2VkS2V5cy5wdXNoKGxldHRlcikpLFxuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgICAgICBtYXAoKCkgPT4gdGhpcy5fcHJlc3NlZEtleXMuam9pbignJykpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh0ZXJtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc0xpc3QuZmluZEJ5TGFiZWwodGVybSk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrSXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc3NlZEtleXMgPSBbXTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZU5nTW9kZWwoKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gW107XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnNlbGVjdGVkSXRlbXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJpbmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpdGVtLnZhbHVlWzxzdHJpbmc+dGhpcy5ncm91cEJ5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuaXRlbXNMaXN0LnJlc29sdmVOZXN0ZWQoaXRlbS52YWx1ZSwgdGhpcy5iaW5kVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2RlbC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWwucHVzaChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UobW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHNlbGVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKGlzRGVmaW5lZChtb2RlbFswXSkgPyBtb2RlbFswXSA6IG51bGwpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHNlbGVjdGVkWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NsZWFyU2VhcmNoKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1zTGlzdC5yZXNldEZpbHRlcmVkSXRlbXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY3JvbGxUb01hcmtlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCAhdGhpcy5kcm9wZG93blBhbmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wZG93blBhbmVsLnNjcm9sbEludG8odGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9UYWcoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgIXRoaXMuZHJvcGRvd25QYW5lbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcGRvd25QYW5lbC5zY3JvbGxJbnRvVGFnKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlVGFiKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0T25UYWIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dBZGRUYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhZygpO1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVFbnRlcigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dBZGRUYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3Blbk9uRW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVTcGFjZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlQXJyb3dEb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5fbmV4dEl0ZW1Jc1RhZygrMSkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnVubWFya0l0ZW0oKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvVGFnKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrTmV4dEl0ZW0oKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUFycm93VXAoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9uZXh0SXRlbUlzVGFnKC0xKSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QudW5tYXJrSXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9UYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtQcmV2aW91c0l0ZW0oKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmV4dEl0ZW1Jc1RhZyhuZXh0U3RlcDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEluZGV4ICsgbmV4dFN0ZXA7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRhZyAmJiB0aGlzLmZpbHRlclZhbHVlXG4gICAgICAgICAgICAmJiB0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtXG4gICAgICAgICAgICAmJiAobmV4dEluZGV4IDwgMCB8fCBuZXh0SW5kZXggPT09IHRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMubGVuZ3RoKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUJhY2tzcGFjZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUgfHwgIXRoaXMuY2xlYXJhYmxlIHx8ICF0aGlzLmNsZWFyT25CYWNrc3BhY2UgfHwgIXRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2VsZWN0KHRoaXMuaXRlbXNMaXN0Lmxhc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhck1vZGVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfaXNUeXBlYWhlYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVhaGVhZCAmJiB0aGlzLnR5cGVhaGVhZC5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tZXJnZUdsb2JhbENvbmZpZyhjb25maWc6IE5nU2VsZWN0Q29uZmlnKSB7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8IGNvbmZpZy5wbGFjZWhvbGRlcjtcbiAgICAgICAgdGhpcy5ub3RGb3VuZFRleHQgPSB0aGlzLm5vdEZvdW5kVGV4dCB8fCBjb25maWcubm90Rm91bmRUZXh0O1xuICAgICAgICB0aGlzLnR5cGVUb1NlYXJjaFRleHQgPSB0aGlzLnR5cGVUb1NlYXJjaFRleHQgfHwgY29uZmlnLnR5cGVUb1NlYXJjaFRleHQ7XG4gICAgICAgIHRoaXMuYWRkVGFnVGV4dCA9IHRoaXMuYWRkVGFnVGV4dCB8fCBjb25maWcuYWRkVGFnVGV4dDtcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dCA9IHRoaXMubG9hZGluZ1RleHQgfHwgY29uZmlnLmxvYWRpbmdUZXh0O1xuICAgICAgICB0aGlzLmNsZWFyQWxsVGV4dCA9IHRoaXMuY2xlYXJBbGxUZXh0IHx8IGNvbmZpZy5jbGVhckFsbFRleHQ7XG4gICAgICAgIHRoaXMudmlydHVhbFNjcm9sbCA9IGlzRGVmaW5lZCh0aGlzLnZpcnR1YWxTY3JvbGwpXG4gICAgICAgICAgICA/IHRoaXMudmlydHVhbFNjcm9sbFxuICAgICAgICAgICAgOiBpc0RlZmluZWQoY29uZmlnLmRpc2FibGVWaXJ0dWFsU2Nyb2xsKSA/ICFjb25maWcuZGlzYWJsZVZpcnR1YWxTY3JvbGwgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5vcGVuT25FbnRlciA9IGlzRGVmaW5lZCh0aGlzLm9wZW5PbkVudGVyKSA/IHRoaXMub3Blbk9uRW50ZXIgOiBjb25maWcub3Blbk9uRW50ZXI7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgc2VhcmNoSGVscGVyIGZyb20gJy4vc2VhcmNoLWhlbHBlcic7XG5pbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gJy4vdmFsdWUtdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ09wdGlvbkhpZ2hsaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgnbmdPcHRpb25IaWdobGlnaHQnKSB0ZXJtOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbkhpZ2hsaWdodCkge1xuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0TGFiZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgIGlmICh0aGlzLl9jYW5IaWdobGlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oaWdobGlnaHRMYWJlbCgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsO1xuICAgICAgICBpZiAoIXRoaXMudGVybSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0SW5uZXJIdG1sKGxhYmVsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4T2ZUZXJtID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKGxhYmVsKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmRleE9mKHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyh0aGlzLnRlcm0pLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBpZiAoaW5kZXhPZlRlcm0gPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0SW5uZXJIdG1sKFxuICAgICAgICAgICAgICAgIGxhYmVsLnN1YnN0cmluZygwLCBpbmRleE9mVGVybSlcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodGVkXCI+JHtsYWJlbC5zdWJzdHIoaW5kZXhPZlRlcm0sIHRoaXMudGVybS5sZW5ndGgpfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKyBsYWJlbC5zdWJzdHJpbmcoaW5kZXhPZlRlcm0gKyB0aGlzLnRlcm0ubGVuZ3RoLCBsYWJlbC5sZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldElubmVySHRtbChsYWJlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfY2FuSGlnaGxpZ2h0KCkge1xuICAgICAgICByZXR1cm4gaXNEZWZpbmVkKHRoaXMudGVybSkgJiYgaXNEZWZpbmVkKHRoaXMubGFiZWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldElubmVySHRtbChodG1sKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpbm5lckhUTUwnLCBodG1sKTtcbiAgICB9XG59ICAgXG4iLCJpbXBvcnQgeyBOZ09wdGlvbiB9IGZyb20gJy4vbmctc2VsZWN0LnR5cGVzJztcblxuZXhwb3J0IHR5cGUgU2VsZWN0aW9uTW9kZWxGYWN0b3J5ID0gKCkgPT4gU2VsZWN0aW9uTW9kZWw7XG5cbmV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5KCkge1xuICAgIHJldHVybiBuZXcgRGVmYXVsdFNlbGVjdGlvbk1vZGVsKCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0aW9uTW9kZWwge1xuICAgIHZhbHVlOiBOZ09wdGlvbltdO1xuICAgIHNlbGVjdChpdGVtOiBOZ09wdGlvbiwgbXVsdGlwbGU6IGJvb2xlYW4sIHNlbGVjdGFibGVHcm91cEFzTW9kZWw6IGJvb2xlYW4pO1xuICAgIHVuc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbik7XG4gICAgY2xlYXIoa2VlcERpc2FibGVkOiBib29sZWFuKTtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRTZWxlY3Rpb25Nb2RlbCBpbXBsZW1lbnRzIFNlbGVjdGlvbk1vZGVsIHtcbiAgICBwcml2YXRlIF9zZWxlY3RlZDogTmdPcHRpb25bXSA9IFtdO1xuXG4gICAgZ2V0IHZhbHVlKCk6IE5nT3B0aW9uW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbiwgZ3JvdXBBc01vZGVsOiBib29sZWFuKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoZ3JvdXBBc01vZGVsIHx8ICFpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5Db3VudCA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZENvdW50ID0gaXRlbS5wYXJlbnQuY2hpbGRyZW4uZmlsdGVyKHggPT4geC5zZWxlY3RlZCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50LnNlbGVjdGVkID0gY2hpbGRyZW5Db3VudCA9PT0gc2VsZWN0ZWRDb3VudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldENoaWxkcmVuU2VsZWN0ZWRTdGF0ZShpdGVtLmNoaWxkcmVuLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbihpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoIWdyb3VwQXNNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IFsuLi50aGlzLl9zZWxlY3RlZCwgLi4uaXRlbS5jaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24sIG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQuZmlsdGVyKHggPT4geCAhPT0gaXRlbSk7XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZVBhcmVudChpdGVtLnBhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oaXRlbS5wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLnB1c2goLi4uY2hpbGRyZW4uZmlsdGVyKHggPT4geCAhPT0gaXRlbSkpO1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDaGlsZHJlblNlbGVjdGVkU3RhdGUoaXRlbS5jaGlsZHJlbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoa2VlcERpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0ga2VlcERpc2FibGVkID8gdGhpcy5fc2VsZWN0ZWQuZmlsdGVyKHggPT4geC5kaXNhYmxlZCkgOiBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRDaGlsZHJlblNlbGVjdGVkU3RhdGUoY2hpbGRyZW46IE5nT3B0aW9uW10sIHNlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goeCA9PiB4LnNlbGVjdGVkID0gc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbW92ZUNoaWxkcmVuKHBhcmVudDogTmdPcHRpb24pIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5maWx0ZXIoeCA9PiB4LnBhcmVudCAhPT0gcGFyZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZW1vdmVQYXJlbnQocGFyZW50OiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGVkLmZpbHRlcih4ID0+IHggIT09IHBhcmVudClcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nU2VsZWN0Q29tcG9uZW50LCBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vbmctdGVtcGxhdGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmctb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSB9IGZyb20gJy4vbmctb3B0aW9uLWhpZ2hsaWdodC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1kcm9wZG93bi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVmYXVsdFNlbGVjdGlvbk1vZGVsRmFjdG9yeSB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50LFxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcbiAgICAgICAgTmdTZWxlY3RDb21wb25lbnQsXG4gICAgICAgIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlLFxuICAgICAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xvYWRpbmdTcGlubmVyVGVtcGxhdGVEaXJlY3RpdmVcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5nU2VsZWN0Q29tcG9uZW50LFxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcbiAgICAgICAgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlksIHVzZVZhbHVlOiBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5IH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyIsInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUFJSSxtQ0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7Z0JBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs7OztnQkFGdEIsV0FBVzs7b0NBQS9COzs7SUFTSSxxQ0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7Z0JBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTs7OztnQkFQeEIsV0FBVzs7c0NBQS9COzs7SUFjSSxrQ0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7Z0JBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7OztnQkFackIsV0FBVzs7bUNBQS9COzs7SUFtQkksdUNBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7O2dCQUZyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7Ozs7Z0JBakIzQixXQUFXOzt3Q0FBL0I7OztJQXdCSSxtQ0FBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7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LFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixR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

/***/ }),

/***/ "./src/app/enums/sort-order.ts":
/*!*************************************!*\
  !*** ./src/app/enums/sort-order.ts ***!
  \*************************************/
/*! exports provided: SORT_ORDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_ORDER", function() { return SORT_ORDER; });
var SORT_ORDER;
(function (SORT_ORDER) {
    SORT_ORDER["DESC"] = "DESC";
    SORT_ORDER["ASC"] = "ASC";
})(SORT_ORDER || (SORT_ORDER = {}));


/***/ }),

/***/ "./src/app/shared/components/badge-dropdown/badge-dropdown.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/badge-dropdown/badge-dropdown.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-badge-dropdown\"\n  (click)=\"onDropdown()\"\n>\n  <div class=\"app-badge-dropdown__content\">\n    {{activeValue}}\n  </div>\n  <div\n    class=\"app-badge-dropdown__arrow\"\n    [ngClass]=\"{'app-badge-dropdown__arrow-down': !isOpenDropdown, 'app-badge-dropdown__arrow-up': isOpenDropdown}\"\n  >\n    <i\n      class=\"fas\"\n      [ngClass]=\"{'fa-sort-down': !isOpenDropdown, 'fa-sort-up': isOpenDropdown}\"\n    ></i>\n  </div>\n</div>\n<nav\n  class=\"app-badge-dropdown__nav\"\n  *ngIf=\"isOpenDropdown\"\n>\n  <li\n    class=\"app-badge-dropdown__nav--li\"\n    *ngFor=\"let value of values\"\n    (click)=\"onChooseValue(value)\"\n    [ngClass]=\"{'app-badge-dropdown__nav--li__activated': value === activeValue}\"\n  >\n    {{value}}\n  </li>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/components/badge-dropdown/badge-dropdown.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/badge-dropdown/badge-dropdown.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-badge-dropdown {\n  font: 10px 'NunitoSans-Regular';\n  border-radius: 3px;\n  color: #fff;\n  background: #4350a2;\n  padding: .25rem .5rem;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  text-transform: capitalize; }\n  .app-badge-dropdown:hover {\n    background: #9fa6cb;\n    color: #fff; }\n  .app-badge-dropdown .app-badge-dropdown__content {\n    margin: 0 .75rem 0 0; }\n  .app-badge-dropdown .app-badge-dropdown__arrow {\n    position: relative; }\n  .app-badge-dropdown .app-badge-dropdown__arrow-down {\n    top: -1px; }\n  .app-badge-dropdown .app-badge-dropdown__arrow-up {\n    top: 3px; }\n  .app-badge-dropdown__nav {\n  margin: 5px 0 0 0;\n  border-radius: 3px;\n  background: #fff;\n  position: absolute;\n  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.15); }\n  .app-badge-dropdown__nav .app-badge-dropdown__nav--li {\n    color: #151515;\n    padding: 10px;\n    list-style-type: none;\n    min-width: 90px;\n    cursor: pointer;\n    font: 11px 'NunitoSans-Regular';\n    text-transform: capitalize; }\n  .app-badge-dropdown__nav .app-badge-dropdown__nav--li:hover, .app-badge-dropdown__nav .app-badge-dropdown__nav--li.app-badge-dropdown__nav--li__activated {\n      color: #4350a2;\n      background: #f4f5f7;\n      font: 11px 'NunitoSans-Bold'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFkZ2UtZHJvcGRvd24vYmFkZ2UtZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQ04wQjtFRE8xQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDBCQUEwQixFQUFBO0VBVjVCO0lBYUksbUJDZDBCO0lEZTFCLFdBQVcsRUFBQTtFQWRmO0lBa0JJLG9CQUFvQixFQUFBO0VBbEJ4QjtJQXNCSSxrQkFBa0IsRUFBQTtFQXRCdEI7SUEwQkksU0FBUyxFQUFBO0VBMUJiO0lBOEJJLFFBQVEsRUFBQTtFQUlaO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLCtDQUErQyxFQUFBO0VBTGpEO0lBUUksY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsMEJBQTBCLEVBQUE7RUFkOUI7TUFrQk0sY0N0RHNCO01EdUR0QixtQkFBbUI7TUFDbkIsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9iYWRnZS1kcm9wZG93bi9iYWRnZS1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcblxuLmFwcC1iYWRnZS1kcm9wZG93biB7XG4gIGZvbnQ6IDEwcHggJ051bml0b1NhbnMtUmVndWxhcic7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICRlbGVtZW50LWJhc2UtY29sb3I7XG4gIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGVsZW1lbnQtc2Vjb25kLWNvbG9yO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmFwcC1iYWRnZS1kcm9wZG93bl9fY29udGVudCB7XG4gICAgbWFyZ2luOiAwIC43NXJlbSAwIDA7XG4gIH1cblxuICAuYXBwLWJhZGdlLWRyb3Bkb3duX19hcnJvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmFwcC1iYWRnZS1kcm9wZG93bl9fYXJyb3ctZG93biB7XG4gICAgdG9wOiAtMXB4O1xuICB9XG5cbiAgLmFwcC1iYWRnZS1kcm9wZG93bl9fYXJyb3ctdXAge1xuICAgIHRvcDogM3B4O1xuICB9XG59XG5cbi5hcHAtYmFkZ2UtZHJvcGRvd25fX25hdiB7XG4gIG1hcmdpbjogNXB4IDAgMCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbiAgLmFwcC1iYWRnZS1kcm9wZG93bl9fbmF2LS1saSB7XG4gICAgY29sb3I6ICMxNTE1MTU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWluLXdpZHRoOiA5MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250OiAxMXB4ICdOdW5pdG9TYW5zLVJlZ3VsYXInO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgJjpob3ZlcixcbiAgICAmLmFwcC1iYWRnZS1kcm9wZG93bl9fbmF2LS1saV9fYWN0aXZhdGVkIHtcbiAgICAgIGNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZDogI2Y0ZjVmNztcbiAgICAgIGZvbnQ6IDExcHggJ051bml0b1NhbnMtQm9sZCc7XG4gICAgfVxuICB9XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/shared/components/badge-dropdown/badge-dropdown.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/badge-dropdown/badge-dropdown.component.ts ***!
  \******************************************************************************/
/*! exports provided: BadgeDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeDropdownComponent", function() { return BadgeDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeDropdownComponent = /** @class */ (function () {
    function BadgeDropdownComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isOpenDropdown = false;
    }
    BadgeDropdownComponent.prototype.ngOnInit = function () { };
    BadgeDropdownComponent.prototype.onDropdown = function () {
        this.isOpenDropdown = !this.isOpenDropdown;
    };
    BadgeDropdownComponent.prototype.onChooseValue = function (value) {
        this.activeValue = value;
        this.isOpenDropdown = false;
        this.changeValue.emit(this.activeValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BadgeDropdownComponent.prototype, "values", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BadgeDropdownComponent.prototype, "activeValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BadgeDropdownComponent.prototype, "changeValue", void 0);
    BadgeDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge-dropdown',
            template: __webpack_require__(/*! ./badge-dropdown.component.html */ "./src/app/shared/components/badge-dropdown/badge-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./badge-dropdown.component.scss */ "./src/app/shared/components/badge-dropdown/badge-dropdown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeDropdownComponent);
    return BadgeDropdownComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/badge/badge.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/badge/badge.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-badge\"\n  [ngClass]=\"{'app-badge-success': type === 'success', 'app-badge-danger': type === 'danger'}\"\n>\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/badge/badge.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/badge/badge.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-badge {\n  font: 10px 'NunitoSans-Regular';\n  border-radius: 3px;\n  color: #909090;\n  background: #f2f2f2;\n  padding: .25rem;\n  white-space: nowrap; }\n  .app-badge.app-badge-success {\n    color: #00a772;\n    background: #d3ede2; }\n  .app-badge.app-badge-danger {\n    color: #f94951;\n    background: #ffd3d4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsY0NrQ2tCO0VEakNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0VBTnJCO0lBU0ksY0FBYztJQUNkLG1CQUFtQixFQUFBO0VBVnZCO0lBY0ksY0FBYztJQUNkLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycyc7XG5cbi5hcHAtYmFkZ2Uge1xuICBmb250OiAxMHB4ICdOdW5pdG9TYW5zLVJlZ3VsYXInO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAkZ3JheS1jb2xvcjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZzogLjI1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICYuYXBwLWJhZGdlLXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjMDBhNzcyO1xuICAgIGJhY2tncm91bmQ6ICNkM2VkZTI7XG4gIH1cblxuICAmLmFwcC1iYWRnZS1kYW5nZXIge1xuICAgIGNvbG9yOiAjZjk0OTUxO1xuICAgIGJhY2tncm91bmQ6ICNmZmQzZDQ7XG4gIH1cbn1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/badge/badge.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/badge/badge.component.ts ***!
  \************************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    BadgeComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BadgeComponent.prototype, "type", void 0);
    BadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge',
            template: __webpack_require__(/*! ./badge.component.html */ "./src/app/shared/components/badge/badge.component.html"),
            styles: [__webpack_require__(/*! ./badge.component.scss */ "./src/app/shared/components/badge/badge.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/buttons/search-filter-btn/search-filter-btn.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/buttons/search-filter-btn/search-filter-btn.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  class=\"btn app-btn-primary app-search-filter-btn\"\n  (click)=\"onClick()\"\n>\n  <img\n    src=\"/assets/images/icons/icon-filter.svg\"\n    class=\"app-search-filter-btn-img\"\n    [ngClass]=\"{'app-search-filter-btn__direction-asc': direction === 'asc', 'app-search-filter-btn__direction-desc': direction === 'desc'}\"\n  />\n</button>\n"

/***/ }),

/***/ "./src/app/shared/components/buttons/search-filter-btn/search-filter-btn.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/buttons/search-filter-btn/search-filter-btn.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-search-filter-btn {\n  padding: 5px 6px; }\n  .app-search-filter-btn .app-search-filter-btn-img {\n    width: 16px;\n    transition: all .5s linear; }\n  .app-search-filter-btn .app-search-filter-btn__direction-asc {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  .app-search-filter-btn .app-search-filter-btn__direction-desc {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9ucy9zZWFyY2gtZmlsdGVyLWJ0bi9zZWFyY2gtZmlsdGVyLWJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBSUksV0FBVztJQUNYLDBCQUEwQixFQUFBO0VBTDlCO0lBU0ksNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBO0VBVHhCO0lBYUksaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9ucy9zZWFyY2gtZmlsdGVyLWJ0bi9zZWFyY2gtZmlsdGVyLWJ0bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcblxuLmFwcC1zZWFyY2gtZmlsdGVyLWJ0biB7XG4gIHBhZGRpbmc6IDVweCA2cHg7XG5cbiAgLmFwcC1zZWFyY2gtZmlsdGVyLWJ0bi1pbWcge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgbGluZWFyO1xuICB9XG5cbiAgLmFwcC1zZWFyY2gtZmlsdGVyLWJ0bl9fZGlyZWN0aW9uLWFzYyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cblxuICAuYXBwLXNlYXJjaC1maWx0ZXItYnRuX19kaXJlY3Rpb24tZGVzYyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/buttons/search-filter-btn/search-filter-btn.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/buttons/search-filter-btn/search-filter-btn.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SearchFilterBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterBtnComponent", function() { return SearchFilterBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchFilterBtnComponent = /** @class */ (function () {
    function SearchFilterBtnComponent() {
        this.direction = 'asc'; // 'asc'/'desc'
    }
    SearchFilterBtnComponent.prototype.ngOnInit = function () { };
    SearchFilterBtnComponent.prototype.onClick = function () {
        if (this.direction === 'asc') {
            this.direction = 'desc';
        }
        else {
            this.direction = 'asc';
        }
    };
    SearchFilterBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-filter-btn',
            template: __webpack_require__(/*! ./search-filter-btn.component.html */ "./src/app/shared/components/buttons/search-filter-btn/search-filter-btn.component.html"),
            styles: [__webpack_require__(/*! ./search-filter-btn.component.scss */ "./src/app/shared/components/buttons/search-filter-btn/search-filter-btn.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchFilterBtnComponent);
    return SearchFilterBtnComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component.css":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cancel-input {\n    float: right;\n}\n.filter-text-container {\n    position: relative;\n}\n.filter-text-search-icon {\n    position: absolute;\n    right: 10%;\n    top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWhlYWRlci9kYXRhLXRhYmxlLWhlYWRlci1maWx0ZXItZGF0ZS9kYXRhLXRhYmxlLWhlYWRlci1maWx0ZXItZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1oZWFkZXIvZGF0YS10YWJsZS1oZWFkZXItZmlsdGVyLWRhdGUvZGF0YS10YWJsZS1oZWFkZXItZmlsdGVyLWRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW5jZWwtaW5wdXQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5maWx0ZXItdGV4dC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpbHRlci10ZXh0LXNlYXJjaC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICB0b3A6IDMwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-data-table-header-title [title]=\"col.title\" [isSort]=\"col.sort\"\n                             (sortFilter)=\"changeSort($event)\"></app-data-table-header-title>\n<div class=\"filter-text-container\">\n  <i *ngIf=\"!value\" class=\"fas fa-search fa-sm app-text-second filter-text-search-icon\"></i>\n  <i *ngIf=\"value\" class=\"fas fa-times fa-xs  app-text-danger filter-text-search-icon app-cursor-pointer\" (click)=\"cancelSearch()\"></i>\n  <input class=\"form-control app-input-search h-75 py-1\"\n         [(ngModel)]=\"value\"\n         ngbDatepicker\n         (ngModelChange)=\"sendData()\"\n         #d=\"ngbDatepicker\"\n         [disabled]=\"!col.search\"\n         (click)=\"d.toggle()\">\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DataTableHeaderFilterDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderFilterDateComponent", function() { return DataTableHeaderFilterDateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../enums/sort-order */ "./src/app/enums/sort-order.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var DataTableHeaderFilterDateComponent = /** @class */ (function () {
    function DataTableHeaderFilterDateComponent(parserFormatter) {
        this.parserFormatter = parserFormatter;
        this.filterDataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sortOrder = _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__["SORT_ORDER"].DESC;
    }
    DataTableHeaderFilterDateComponent.prototype.ngOnInit = function () {
    };
    DataTableHeaderFilterDateComponent.prototype.changeSort = function (sortOrder) {
        this.sortOrder = sortOrder;
        this.emitData();
    };
    DataTableHeaderFilterDateComponent.prototype.cancelSearch = function () {
        this.value = null;
        this.emitData();
    };
    DataTableHeaderFilterDateComponent.prototype.sendData = function () {
        this.emitData();
    };
    DataTableHeaderFilterDateComponent.prototype.emitData = function () {
        this.filterDataEmitter.emit({
            value: this.parserFormatter.format(this.value) || '',
            order: this.sortOrder
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableHeaderFilterDateComponent.prototype, "col", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataTableHeaderFilterDateComponent.prototype, "filterDataEmitter", void 0);
    DataTableHeaderFilterDateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table-header-filter-date',
            template: __webpack_require__(/*! ./data-table-header-filter-date.component.html */ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component.html"),
            styles: [__webpack_require__(/*! ./data-table-header-filter-date.component.css */ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"]])
    ], DataTableHeaderFilterDateComponent);
    return DataTableHeaderFilterDateComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component.css":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cancel-input {\n    float: right;\n}\n\n.filter-text-container {\n    position: relative;\n}\n\n.filter-text-search-icon {\n    position: absolute;\n    right: 10%;\n    top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWhlYWRlci9kYXRhLXRhYmxlLWhlYWRlci1maWx0ZXItdGV4dC9kYXRhLXRhYmxlLWhlYWRlci1maWx0ZXItdGV4dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWhlYWRlci9kYXRhLXRhYmxlLWhlYWRlci1maWx0ZXItdGV4dC9kYXRhLXRhYmxlLWhlYWRlci1maWx0ZXItdGV4dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbmNlbC1pbnB1dCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmlsdGVyLXRleHQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maWx0ZXItdGV4dC1zZWFyY2gtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgdG9wOiAzMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-data-table-header-title [title]=\"col.title\" [isSort]=\"col.sort\"\n                        (sortFilter)=\"changeSort($event)\"></app-data-table-header-title>\n<div class=\"filter-text-container\">\n  <i *ngIf=\"!value\" class=\"fas fa-search fa-sm app-text-second filter-text-search-icon\"></i>\n  <i *ngIf=\"value\" class=\"fas fa-times fa-xs app-text-danger filter-text-search-icon app-cursor-pointer\" (click)=\"cancelSearch()\"></i>\n  <input class=\"form-control app-input-search h-75 py-1\"\n         type=\"text\"\n         [(ngModel)]=\"value\"\n         (input)=\"sendData()\"\n         [disabled]=\"!col.search\">\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DataTableHeaderFilterTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderFilterTextComponent", function() { return DataTableHeaderFilterTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../enums/sort-order */ "./src/app/enums/sort-order.ts");



var DataTableHeaderFilterTextComponent = /** @class */ (function () {
    function DataTableHeaderFilterTextComponent() {
        this.filterDataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sortOrder = _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__["SORT_ORDER"].DESC;
    }
    DataTableHeaderFilterTextComponent.prototype.ngOnInit = function () {
    };
    DataTableHeaderFilterTextComponent.prototype.changeSort = function (sortOrder) {
        this.sortOrder = sortOrder;
        this.emitData();
    };
    DataTableHeaderFilterTextComponent.prototype.cancelSearch = function () {
        this.value = null;
        this.emitData();
    };
    DataTableHeaderFilterTextComponent.prototype.sendData = function () {
        this.emitData();
    };
    DataTableHeaderFilterTextComponent.prototype.emitData = function () {
        this.filterDataEmitter.emit({
            value: this.value || '',
            order: this.sortOrder
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableHeaderFilterTextComponent.prototype, "col", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataTableHeaderFilterTextComponent.prototype, "filterDataEmitter", void 0);
    DataTableHeaderFilterTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table-header-filter-text',
            template: __webpack_require__(/*! ./data-table-header-filter-text.component.html */ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component.html"),
            styles: [__webpack_require__(/*! ./data-table-header-filter-text.component.css */ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataTableHeaderFilterTextComponent);
    return DataTableHeaderFilterTextComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header-title/data-table-header-title.component.css":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header-title/data-table-header-title.component.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-table-header-title {\n    color: #151515;\n    letter-spacing: 0.3px;\n    cursor: pointer;\n}\n\n.app-table-header-title i {\n    color: #A3A3A3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWhlYWRlci9kYXRhLXRhYmxlLWhlYWRlci10aXRsZS9kYXRhLXRhYmxlLWhlYWRlci10aXRsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1oZWFkZXIvZGF0YS10YWJsZS1oZWFkZXItdGl0bGUvZGF0YS10YWJsZS1oZWFkZXItdGl0bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtdGFibGUtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogIzE1MTUxNTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXBwLXRhYmxlLWhlYWRlci10aXRsZSBpIHtcbiAgICBjb2xvcjogI0EzQTNBMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header-title/data-table-header-title.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header-title/data-table-header-title.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span (click)=\"changeSort()\" class=\"app-table-header-title app-text-small font-weight-normal\">{{title}}\n  <span *ngIf=\"isSort\" class=\"ml-3\">\n  <i class=\"fas fa-sort\" *ngIf=\"!sortOrder\"></i>\n  <i class=\"fas fa-sort-up\" *ngIf=\"sortOrder === sort['ASC']\"></i>\n  <i class=\"fas fa-sort-down\" *ngIf=\"sortOrder === sort['DESC']\"></i>\n  </span>\n</span>\n\n"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header-title/data-table-header-title.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header-title/data-table-header-title.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DataTableHeaderTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderTitleComponent", function() { return DataTableHeaderTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../enums/sort-order */ "./src/app/enums/sort-order.ts");



var DataTableHeaderTitleComponent = /** @class */ (function () {
    function DataTableHeaderTitleComponent() {
        this.sortFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sort = _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__["SORT_ORDER"];
    }
    DataTableHeaderTitleComponent.prototype.ngOnInit = function () {
    };
    DataTableHeaderTitleComponent.prototype.changeSort = function () {
        this.sortOrder = this.sortOrder === _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__["SORT_ORDER"].DESC ? _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__["SORT_ORDER"].ASC : _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__["SORT_ORDER"].DESC;
        this.sortFilter.emit(this.sortOrder);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataTableHeaderTitleComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DataTableHeaderTitleComponent.prototype, "isSort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataTableHeaderTitleComponent.prototype, "sortFilter", void 0);
    DataTableHeaderTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table-header-title',
            template: __webpack_require__(/*! ./data-table-header-title.component.html */ "./src/app/shared/components/data-table/data-table-header/data-table-header-title/data-table-header-title.component.html"),
            styles: [__webpack_require__(/*! ./data-table-header-title.component.css */ "./src/app/shared/components/data-table/data-table-header/data-table-header-title/data-table-header-title.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataTableHeaderTitleComponent);
    return DataTableHeaderTitleComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr class=\"table_head__tr\">\n  <th scope=\"col\" nowrap class=\"app-table-th\" *ngFor=\"let col of cols\" [width]=\"col.width\">\n    <ng-container [ngSwitch]=\"col.type\">\n      <ng-template ngSwitchCase=\"text\">\n        <app-data-table-header-filter-text [col]=\"col\" (filterDataEmitter)=\"searchCtrl($event, col.id)\"></app-data-table-header-filter-text>\n      </ng-template>\n      <ng-template ngSwitchCase=\"date\">\n        <app-data-table-header-filter-date [col]=\"col\" (filterDataEmitter)=\"searchCtrl($event, col.id)\"></app-data-table-header-filter-date>\n      </ng-template>\n    </ng-container>\n  </th>\n</tr>\n"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n.app-table-th {\n  border-top: none; }\n.table_head__tr {\n  background-color: #F2F2F2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUtaGVhZGVyL2RhdGEtdGFibGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUtaGVhZGVyL2RhdGEtdGFibGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7Ozs7O0VDQUU7QUNIRjtFQUNJLGdCQUFnQixFQUFBO0FBS2hCO0VBQ0kseUJDb0MrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWhlYWRlci9kYXRhLXRhYmxlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbi5hcHAtdGFibGUtdGgge1xuICBib3JkZXItdG9wOiBub25lOyB9XG5cbi50YWJsZV9oZWFkX190ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9pbmRleC5zY3NzJztcblxuLmFwcC10YWJsZS10aCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLnRhYmxlX2hlYWR7XG5cbiAgICAmX190ciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table-header/data-table-header.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table-header/data-table-header.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DataTableHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function() { return DataTableHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataTableHeaderComponent = /** @class */ (function () {
    function DataTableHeaderComponent() {
        this.searchQueryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DataTableHeaderComponent.prototype.ngOnInit = function () {
    };
    DataTableHeaderComponent.prototype.searchCtrl = function (data, field) {
        this.searchQueryEmitter.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { field: field }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataTableHeaderComponent.prototype, "cols", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataTableHeaderComponent.prototype, "searchQueryEmitter", void 0);
    DataTableHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-data-table-header]',
            template: __webpack_require__(/*! ./data-table-header.component.html */ "./src/app/shared/components/data-table/data-table-header/data-table-header.component.html"),
            styles: [__webpack_require__(/*! ./data-table-header.component.scss */ "./src/app/shared/components/data-table/data-table-header/data-table-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataTableHeaderComponent);
    return DataTableHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/data-table/data-table.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" [ngClass]=\"tableType\">\n  <thead app-data-table-header [cols]=\"cols\" (searchQueryEmitter)=\"onSetSearch($event)\"></thead>\n  <ng-content>\n\n  </ng-content>\n</table>\n"

/***/ }),

/***/ "./src/app/shared/components/data-table/data-table.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table.component.ts ***!
  \**********************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.searchQueryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DataTableComponent.prototype.ngOnInit = function () {
    };
    DataTableComponent.prototype.onSetSearch = function (event) {
        this.searchQueryEmitter.emit(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataTableComponent.prototype, "tableType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataTableComponent.prototype, "cols", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataTableComponent.prototype, "searchQueryEmitter", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/shared/components/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/shared/components/data-table/data-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/fields/checkbox-field/checkbox-field.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/fields/checkbox-field/checkbox-field.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-checkbox-field\"\n  [ngClass]=\"{'app-checkbox-field-has-error': isInvalid}\"\n>\n  <label\n    class=\"app-checkbox-field-label\"\n    [ngClass]=\"{'app-checkbox-field-label__text': hasMargin}\"\n    ([for])=\"id\"\n  >\n    <div>\n      {{label}}\n    </div>\n    <input\n      type=\"checkbox\"\n      ([id])=\"id\"\n      [value]=\"isSelected\"\n      [checked]=\"isSelected\"\n      [disabled]=\"disabled\"\n      (click)=\"toggleCheckbox()\"\n    >\n    <div class=\"app-checkbox-field-checkmark\"></div>\n  </label>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/fields/checkbox-field/checkbox-field.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/fields/checkbox-field/checkbox-field.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-checkbox-field {\n  display: inline-block; }\n\n.app-checkbox-field-label {\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  cursor: pointer;\n  font-size: 12px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.app-checkbox-field-label__text {\n  margin: 0 0 20px; }\n\n.app-checkbox-field-label__text--margin-0 {\n  margin: 0; }\n\n.app-checkbox-field-label input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n.app-checkbox-field-checkmark {\n  position: relative;\n  height: 16px;\n  min-width: 16px;\n  margin: 0 4px 0 0;\n  background-color: #eee;\n  border: 1px solid #4350a2;\n  border-radius: 4px; }\n\n.app-checkbox-field-label:hover input ~ .app-checkbox-field-checkmark {\n  background-color: #ccc; }\n\n.app-checkbox-field-label input:checked ~ .app-checkbox-field-checkmark {\n  background-color: #4350a2; }\n\n.app-checkbox-field-checkmark:after {\n  content: '';\n  position: absolute;\n  display: none; }\n\n.app-checkbox-field-label input:checked ~ .app-checkbox-field-checkmark:after {\n  display: block; }\n\n.app-checkbox-field-label .app-checkbox-field-checkmark:after {\n  left: 5px;\n  top: 1px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.app-checkbox-field-has-error .app-checkbox-field-label {\n  color: #e65757; }\n\n.app-checkbox-field-has-error .app-checkbox-field-checkmark {\n  border-color: #e65757; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL2NoZWNrYm94LWZpZWxkL2NoZWNrYm94LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUdWO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkN0QzBCO0VEdUMxQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkMvQzBCLEVBQUE7O0FEa0Q1QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFHMUI7RUFFSSxjQUFjLEVBQUE7O0FBRmxCO0VBTUkscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZHMvY2hlY2tib3gtZmllbGQvY2hlY2tib3gtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycyc7XG5cbi5hcHAtY2hlY2tib3gtZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hcHAtY2hlY2tib3gtZmllbGQtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmFwcC1jaGVja2JveC1maWVsZC1sYWJlbF9fdGV4dCB7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG59XG5cbi5hcHAtY2hlY2tib3gtZmllbGQtbGFiZWxfX3RleHQtLW1hcmdpbi0wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXBwLWNoZWNrYm94LWZpZWxkLWxhYmVsIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi5hcHAtY2hlY2tib3gtZmllbGQtY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1pbi13aWR0aDogMTZweDtcbiAgbWFyZ2luOiAwIDRweCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRlbGVtZW50LWJhc2UtY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFwcC1jaGVja2JveC1maWVsZC1sYWJlbDpob3ZlciBpbnB1dCB+IC5hcHAtY2hlY2tib3gtZmllbGQtY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmFwcC1jaGVja2JveC1maWVsZC1sYWJlbCBpbnB1dDpjaGVja2VkIH4gLmFwcC1jaGVja2JveC1maWVsZC1jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xufVxuXG4uYXBwLWNoZWNrYm94LWZpZWxkLWNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcHAtY2hlY2tib3gtZmllbGQtbGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5hcHAtY2hlY2tib3gtZmllbGQtY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hcHAtY2hlY2tib3gtZmllbGQtbGFiZWwgLmFwcC1jaGVja2JveC1maWVsZC1jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMXB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmFwcC1jaGVja2JveC1maWVsZC1oYXMtZXJyb3Ige1xuICAuYXBwLWNoZWNrYm94LWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogI2U2NTc1NztcbiAgfVxuXG4gIC5hcHAtY2hlY2tib3gtZmllbGQtY2hlY2ttYXJrIHtcbiAgICBib3JkZXItY29sb3I6ICNlNjU3NTc7XG4gIH1cbn1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/fields/checkbox-field/checkbox-field.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/fields/checkbox-field/checkbox-field.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CheckboxFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxFieldComponent", function() { return CheckboxFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CheckboxFieldComponent = /** @class */ (function () {
    function CheckboxFieldComponent() {
        this.label = '';
        this.isInvalid = false;
        this.hasMargin = false;
        this.changeCheckboxState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    CheckboxFieldComponent_1 = CheckboxFieldComponent;
    CheckboxFieldComponent.prototype.ngOnInit = function () { };
    CheckboxFieldComponent.prototype.writeValue = function (obj) {
        this.isSelected = obj;
    };
    CheckboxFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CheckboxFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CheckboxFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    CheckboxFieldComponent.prototype.toggleCheckbox = function () {
        if (this.disabled) {
            return;
        }
        this.isSelected = !this.isSelected;
        this.changeCheckboxState.emit(this.isSelected);
        this.onChange(this.isSelected);
    };
    var CheckboxFieldComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CheckboxFieldComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CheckboxFieldComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxFieldComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxFieldComponent.prototype, "isInvalid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CheckboxFieldComponent.prototype, "isSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CheckboxFieldComponent.prototype, "hasMargin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxFieldComponent.prototype, "changeCheckboxState", void 0);
    CheckboxFieldComponent = CheckboxFieldComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox-field',
            template: __webpack_require__(/*! ./checkbox-field.component.html */ "./src/app/shared/components/fields/checkbox-field/checkbox-field.component.html"),
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxFieldComponent_1; }),
                    multi: true
                }],
            styles: [__webpack_require__(/*! ./checkbox-field.component.scss */ "./src/app/shared/components/fields/checkbox-field/checkbox-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxFieldComponent);
    return CheckboxFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/fields/input-field/input-field.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/fields/input-field/input-field.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-input-field\"\n  [ngClass]=\"{\n    'app-input-field-has-error': isInvalid,\n    'app-input-field-table': fieldType == 'table'\n  }\"\n>\n  <label\n    *ngIf=\"label\"\n    (click)=\"input.focus()\"\n    [for]=\"id\"\n    class=\"app-input-field-label\"\n    [ngClass]=\"{'app-input-field-label__value': value}\"\n  >\n    {{label}}\n  </label>\n  <input\n    #input\n    class=\"form-control\"\n    [ngClass]=\"{\n      'app-input-field__value': value && label\n    }\"\n    [id]=\"id\"\n    [type]=\"type\"\n    [value]=\"value\"\n    [pattern]=\"pattern\"\n    [maxlength]=\"maxLength\"\n    [disabled]=\"disabled\"\n    [(ngModel)]=\"value\"\n    (input)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched()\"\n  />\n  <div\n    *ngIf=\"isInvalid\"\n    class=\"app-input-field-error-icon\"\n  >\n    x\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/fields/input-field/input-field.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/fields/input-field/input-field.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-input-field {\n  border: none;\n  border-radius: 0;\n  color: #151515;\n  padding: 0;\n  min-height: 36px;\n  max-height: 36px;\n  width: auto;\n  position: relative; }\n  .app-input-field.app-input-field-table {\n    min-height: 24px;\n    max-height: 24px; }\n  .app-input-field.app-input-field-table input {\n      min-height: 24px;\n      padding: 0 10px;\n      font-size: 12px; }\n  .app-input-field.app-input-field-table input[type='number'] {\n      -moz-appearance: textfield; }\n  .app-input-field.app-input-field-table input::-webkit-outer-spin-button,\n    .app-input-field.app-input-field-table input::-webkit-inner-spin-button {\n      -webkit-appearance: none; }\n  .app-input-field .app-input-field-label {\n    position: absolute;\n    color: #909090;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    z-index: 1;\n    top: 9px;\n    left: 11px;\n    font-size: 12px; }\n  .app-input-field .app-input-field-label__value {\n    top: 1px; }\n  .app-input-field input {\n    border: 1px solid #b6b6b6;\n    border-radius: 3px;\n    width: 100%;\n    min-height: 36px;\n    padding: 0 10px;\n    font-size: 12px; }\n  .app-input-field input:focus {\n      border-color: #80bdff;\n      outline: 0;\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .app-input-field input.app-input-field__value {\n      padding-top: 14px; }\n  .app-input-field .app-input-field-error-icon {\n    color: #fff;\n    background: #e65757;\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    text-align: center;\n    line-height: 7px;\n    position: absolute;\n    right: 11px;\n    top: 11px;\n    padding: 4px 0; }\n  .app-input-field.app-input-field-has-error .app-input-field-label {\n    color: #e65757; }\n  .app-input-field.app-input-field-has-error input {\n    border-color: #e65757; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL2lucHV0LWZpZWxkL2lucHV0LWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBUnBCO0lBV0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBWnBCO01BZU0sZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixlQUFlLEVBQUE7RUFqQnJCO01BcUJNLDBCQUF5QixFQUFBO0VBckIvQjs7TUEwQk0sd0JBQXdCLEVBQUE7RUExQjlCO0lBK0JJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlLEVBQUE7RUFyQ25CO0lBeUNJLFFBQVEsRUFBQTtFQXpDWjtJQTZDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWUsRUFBQTtFQWxEbkI7TUFxRE0scUJBQXFCO01BQ3JCLFVBQVU7TUFDVixnREFBNEMsRUFBQTtFQXZEbEQ7TUEyRE0saUJBQWlCLEVBQUE7RUEzRHZCO0lBZ0VJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxjQUFjLEVBQUE7RUExRWxCO0lBK0VNLGNBQWMsRUFBQTtFQS9FcEI7SUFtRk0scUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZHMvaW5wdXQtZmllbGQvaW5wdXQtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWlucHV0LWZpZWxkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogIzE1MTUxNTtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgbWF4LWhlaWdodDogMzZweDtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmLmFwcC1pbnB1dC1maWVsZC10YWJsZSB7XG4gICAgbWluLWhlaWdodDogMjRweDtcbiAgICBtYXgtaGVpZ2h0OiAyNHB4O1xuXG4gICAgaW5wdXQge1xuICAgICAgbWluLWhlaWdodDogMjRweDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPSdudW1iZXInXSB7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xuICAgIH1cblxuICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuYXBwLWlucHV0LWZpZWxkLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM5MDkwOTA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiA5cHg7XG4gICAgbGVmdDogMTFweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuYXBwLWlucHV0LWZpZWxkLWxhYmVsX192YWx1ZSB7XG4gICAgdG9wOiAxcHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMzZweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICM4MGJkZmY7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwxMjMsMjU1LC4yNSk7XG4gICAgfVxuXG4gICAgJi5hcHAtaW5wdXQtZmllbGRfX3ZhbHVlIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5hcHAtaW5wdXQtZmllbGQtZXJyb3ItaWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogI2U2NTc1NztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTFweDtcbiAgICB0b3A6IDExcHg7XG4gICAgcGFkZGluZzogNHB4IDA7XG4gIH1cblxuICAmLmFwcC1pbnB1dC1maWVsZC1oYXMtZXJyb3Ige1xuICAgIC5hcHAtaW5wdXQtZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICNlNjU3NTc7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZTY1NzU3O1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/fields/input-field/input-field.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/fields/input-field/input-field.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InputFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFieldComponent", function() { return InputFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var InputFieldComponent = /** @class */ (function () {
    // value: any = '';
    function InputFieldComponent(ngControl) {
        this.ngControl = ngControl;
        this.fieldType = null;
        this.label = '';
        this.isInvalid = false;
        this.type = 'text';
        this.value = '';
        this.maxLength = null;
        this.max = null;
        this.onChangeField = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    InputFieldComponent.prototype.ngOnInit = function () { };
    InputFieldComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    InputFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    InputFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    InputFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    InputFieldComponent.prototype.onChange = function (value) {
        if (this.type === 'number' && this.max && (value > this.max)) {
            this.value = value = this.max;
        }
        this.onChangeField.emit({ fieldValue: value, id: this.id, type: 'input' });
        return value;
    };
    InputFieldComponent.prototype.onTouched = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputFieldComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputFieldComponent.prototype, "fieldType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputFieldComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFieldComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFieldComponent.prototype, "isInvalid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputFieldComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFieldComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputFieldComponent.prototype, "maxLength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputFieldComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFieldComponent.prototype, "onChangeField", void 0);
    InputFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-field',
            template: __webpack_require__(/*! ./input-field.component.html */ "./src/app/shared/components/fields/input-field/input-field.component.html"),
            styles: [__webpack_require__(/*! ./input-field.component.scss */ "./src/app/shared/components/fields/input-field/input-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
    ], InputFieldComponent);
    return InputFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/fields/search-field/search-field.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/fields/search-field/search-field.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-search-field\"\n  [ngClass]=\"{'app-search-field-has-error': isInvalid, 'app-search-field-gray': type === 'gray'}\"\n>\n  <input\n    class=\"form-control\"\n    type=\"search\"\n    [ngClass]=\"{'app-search-field__value': value}\"\n    [placeholder]=\"placeholder\"\n    [id]=\"id\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    [(ngModel)]=\"value\"\n    (input)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched()\"\n  />\n  <div class=\"app-search-field-icon\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/fields/search-field/search-field.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/fields/search-field/search-field.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-search-field {\n  border: none;\n  border-radius: 0;\n  color: #151515;\n  padding: 0;\n  height: 26px;\n  background: #fff;\n  width: auto;\n  position: relative; }\n  .app-search-field input {\n    border: 1px solid #b6b6b6;\n    border-radius: 3px;\n    width: 100%;\n    min-height: 26px;\n    padding: 0 30px 0 10px;\n    font-size: 12px; }\n  .app-search-field input:focus {\n      border-color: #80bdff;\n      outline: 0;\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .app-search-field .app-search-field-icon {\n    background: url('icon-search.svg') center no-repeat transparent;\n    background-size: 16px;\n    width: 18px;\n    height: 18px;\n    position: absolute;\n    top: 5px;\n    right: 8px; }\n  .app-search-field.app-search-field-has-error input {\n    border-color: #e65757; }\n  .app-search-field.app-search-field-gray {\n    height: 30px; }\n  .app-search-field.app-search-field-gray input {\n      border-color: #f2f2f2;\n      background: #f2f2f2;\n      min-height: 30px; }\n  .app-search-field.app-search-field-gray .app-search-field-icon {\n      top: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL3NlYXJjaC1maWVsZC9zZWFyY2gtZmllbGQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtFQVJwQjtJQVdJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZSxFQUFBO0VBaEJuQjtNQW1CTSxxQkFBcUI7TUFDckIsVUFBVTtNQUNWLGdEQUE0QyxFQUFBO0VBckJsRDtJQTBCSSwrREFBd0U7SUFDeEUscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVLEVBQUE7RUFoQ2Q7SUFxQ00scUJDUmUsRUFBQTtFRDdCckI7SUEwQ0ksWUFBWSxFQUFBO0VBMUNoQjtNQTZDTSxxQkNQbUI7TURRbkIsbUJDUm1CO01EU25CLGdCQUFnQixFQUFBO0VBL0N0QjtNQW1ETSxRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZHMvc2VhcmNoLWZpZWxkL3NlYXJjaC1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcblxuLmFwcC1zZWFyY2gtZmllbGQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjMTUxNTE1O1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XG4gICAgcGFkZGluZzogMCAzMHB4IDAgMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLDEyMywyNTUsLjI1KTtcbiAgICB9XG4gIH1cblxuICAuYXBwLXNlYXJjaC1maWVsZC1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ljb24tc2VhcmNoLnN2ZycpIGNlbnRlciBuby1yZXBlYXQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDhweDtcbiAgfVxuXG4gICYuYXBwLXNlYXJjaC1maWVsZC1oYXMtZXJyb3Ige1xuICAgIGlucHV0IHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGVycm9yLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICYuYXBwLXNlYXJjaC1maWVsZC1ncmF5IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICBpbnB1dCB7XG4gICAgICBib3JkZXItY29sb3I6ICRsaWdodGdyYXktY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kOiAkbGlnaHRncmF5LWNvbG9yO1xuICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAuYXBwLXNlYXJjaC1maWVsZC1pY29uIHtcbiAgICAgIHRvcDogNnB4O1xuICAgIH1cbiAgfVxufVxuIiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcbiRlbGVtZW50LXNlY29uZC1jb2xvcjogIzlmYTZjYjtcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XG4kZWxlbWVudC1kYW5nZXItY29sb3I6IHJlZDtcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcblxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcbiR3aGl0ZTogI2ZmZjtcbiRiYWNrZ3JvdW5kLWRpc2FibGVkLWNvbG9yOiAjY2VkNGRhO1xuXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcblxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XG5cbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcbiRyZWQtY29sb3I6ICNmYzY0Njc7XG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XG5cbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XG5cbiRpY29uLWRhcmstZ3JheS1jb2xvcjogI0E0QThCRTtcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xuXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7Il19 */"

/***/ }),

/***/ "./src/app/shared/components/fields/search-field/search-field.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/fields/search-field/search-field.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFieldComponent", function() { return SearchFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SearchFieldComponent = /** @class */ (function () {
    function SearchFieldComponent(ngControl) {
        this.ngControl = ngControl;
        this.isInvalid = false;
        this.placeholder = '';
        this.value = '';
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    SearchFieldComponent.prototype.ngOnInit = function () { };
    SearchFieldComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    SearchFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SearchFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SearchFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SearchFieldComponent.prototype.onChange = function (value) {
        return value;
    };
    SearchFieldComponent.prototype.onTouched = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SearchFieldComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SearchFieldComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFieldComponent.prototype, "isInvalid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFieldComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFieldComponent.prototype, "type", void 0);
    SearchFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-field',
            template: __webpack_require__(/*! ./search-field.component.html */ "./src/app/shared/components/fields/search-field/search-field.component.html"),
            styles: [__webpack_require__(/*! ./search-field.component.scss */ "./src/app/shared/components/fields/search-field/search-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
    ], SearchFieldComponent);
    return SearchFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/fields/select-field/select-field.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/fields/select-field/select-field.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-select-field\"\n  [ngClass]=\"{\n    'app-select-field-has-error': isInvalid,\n    'app-select-field-table': fieldType == 'table'\n  }\"\n  id={{id}}\n>\n  <ng-select\n    [ngClass]=\"{\n      'app-select-field-remove-clear-btn': !showClearBtn,\n      'app-select-field__no-label': value && !labelTitle\n    }\"\n    [items]=\"items\"\n    bindLabel={{bindLabel}}\n    bindValue={{bindValue}}\n    [(ngModel)]=\"value\"\n    [searchable]=\"searchable\"\n    (change)=\"onChange($event)\"\n    placeholder={{labelTitle}}\n    (blur)=\"onTouched()\"\n  >\n  </ng-select>\n  <div\n    *ngIf=\"isInvalid\"\n    class=\"app-select-field-error-icon\"\n  >\n    x\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/fields/select-field/select-field.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/fields/select-field/select-field.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-select-field {\n  position: relative; }\n  .app-select-field .ng-select::ng-deep .ng-select-container {\n    border: 1px solid #b6b6b6;\n    border-radius: 3px; }\n  .app-select-field .ng-select::ng-deep .ng-select-container .ng-value-container {\n      overflow: visible; }\n  .app-select-field .ng-select::ng-deep .ng-select-container .ng-value-container .ng-placeholder {\n        position: absolute;\n        color: #909090;\n        -webkit-transform-origin: 0 0;\n                transform-origin: 0 0;\n        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .app-select-field .ng-select::ng-deep .ng-select-container .ng-value-container .ng-value .ng-value-label {\n        font-family: 'NunitoSans-Regular';\n        font-size: 12px;\n        position: absolute;\n        bottom: 1px; }\n  .app-select-field .ng-select::ng-deep .ng-has-value .ng-placeholder {\n    display: block;\n    -webkit-transform: translateY(-7px) scale(0.85) perspective(100px) translateZ(0.001px);\n            transform: translateY(-7px) scale(0.85) perspective(100px) translateZ(0.001px); }\n  .app-select-field .ng-select.ng-select-opened::ng-deep .ng-select-container {\n    border-color: #4350A2; }\n  .app-select-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep {\n    border-color: #4350A2;\n    border-top: none; }\n  .app-select-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items {\n      font-size: 12px; }\n  .app-select-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected,\n      .app-select-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked {\n        color: #4350a2;\n        background: #ebeeff; }\n  .app-select-field .ng-select.ng-select-opened::ng-deep .ng-select-container .ng-arrow {\n    border-color: #4350a2 transparent transparent;\n    border-style: solid;\n    border-width: 5px 5px 2.5px;\n    top: 0; }\n  .app-select-field .app-select-field-remove-clear-btn.ng-select::ng-deep .ng-clear-wrapper {\n    display: none; }\n  .app-select-field .app-select-field__no-label.ng-select::ng-deep .ng-select-container .ng-value-container .ng-value .ng-value-label {\n    position: relative;\n    bottom: 0; }\n  .app-select-field.app-select-field-has-error .ng-select::ng-deep .ng-select-container {\n    border-color: #e65757; }\n  .app-select-field.app-select-field-has-error .ng-select::ng-deep .ng-select-container .ng-value-container .ng-placeholder {\n      color: #e65757; }\n  .app-select-field.app-select-field-has-error .ng-select.ng-select-opened::ng-deep .ng-select-container {\n    border-color: #4350A2; }\n  .app-select-field .app-select-field-error-icon {\n    color: #fff;\n    background: #e65757;\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    text-align: center;\n    line-height: 7px;\n    position: absolute;\n    right: 11px;\n    top: 11px;\n    padding: 4px 0; }\n  .app-select-field-table .ng-select::ng-deep .ng-select-container {\n  min-height: 29px;\n  max-height: 29px;\n  height: 29px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL3NlbGVjdC1maWVsZC9zZWxlY3QtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQU1NLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTtFQVB4QjtNQVVRLGlCQUFpQixFQUFBO0VBVnpCO1FBYVUsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCw2QkFBcUI7Z0JBQXJCLHFCQUFxQjtRQUNyQiw4TUFBMk0sRUFBQTtFQWhCck47UUFzQlksaUNBQWlDO1FBQ2pDLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVyxFQUFBO0VBekJ2QjtJQWtDUSxjQUFjO0lBQ2Qsc0ZBQThFO1lBQTlFLDhFQUE4RSxFQUFBO0VBbkN0RjtJQTJDTSxxQkFBcUIsRUFBQTtFQTNDM0I7SUErQ00scUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBO0VBaER0QjtNQW1EUSxlQUFlLEVBQUE7RUFuRHZCOztRQXVEVSxjQUFjO1FBQ2QsbUJBQW1CLEVBQUE7RUF4RDdCO0lBOERNLDZDQUE2QztJQUM3QyxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLE1BQU0sRUFBQTtFQWpFWjtJQXVFTSxhQUFhLEVBQUE7RUF2RW5CO0lBbUZZLGtCQUFrQjtJQUNsQixTQUFTLEVBQUE7RUFwRnJCO0lBK0ZRLHFCQUFxQixFQUFBO0VBL0Y3QjtNQW9HWSxjQUFjLEVBQUE7RUFwRzFCO0lBNkdRLHFCQUFxQixFQUFBO0VBN0c3QjtJQW1ISSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYyxFQUFBO0VBSWxCO0VBR00sZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZHMvc2VsZWN0LWZpZWxkL3NlbGVjdC1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc2VsZWN0LWZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5uZy1zZWxlY3Q6Om5nLWRlZXAge1xuXG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSxjb2xvciAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLHdpZHRoIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksLXdlYmtpdC10cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZy12YWx1ZSB7XG5cbiAgICAgICAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG9TYW5zLVJlZ3VsYXInO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5nLWhhcy12YWx1ZSB7XG5cbiAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCkgc2NhbGUoMC44NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDFweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkOjpuZy1kZWVwIHtcblxuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzQzNTBBMjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWw6Om5nLWRlZXAge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjNDM1MEEyO1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLFxuICAgICAgICAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2VkIHtcbiAgICAgICAgICBjb2xvcjogIzQzNTBhMjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlZWZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93IHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzQzNTBhMiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItd2lkdGg6IDVweCA1cHggMi41cHg7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICB9XG5cbiAgLmFwcC1zZWxlY3QtZmllbGQtcmVtb3ZlLWNsZWFyLWJ0bi5uZy1zZWxlY3Q6Om5nLWRlZXAge1xuICAgIC5uZy1jbGVhci13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmFwcC1zZWxlY3QtZmllbGRfX25vLWxhYmVsLm5nLXNlbGVjdDo6bmctZGVlcCB7XG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuXG4gICAgICAubmctdmFsdWUtY29udGFpbmVyIHtcblxuICAgICAgICAubmctdmFsdWUge1xuXG4gICAgICAgICAgLm5nLXZhbHVlLWxhYmVsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmFwcC1zZWxlY3QtZmllbGQtaGFzLWVycm9yIHtcbiAgICAubmctc2VsZWN0OjpuZy1kZWVwIHtcblxuICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNlNjU3NTc7XG5cbiAgICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG5cbiAgICAgICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNlNjU3NTc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkOjpuZy1kZWVwIHtcblxuICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICM0MzUwQTI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFwcC1zZWxlY3QtZmllbGQtZXJyb3ItaWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogI2U2NTc1NztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTFweDtcbiAgICB0b3A6IDExcHg7XG4gICAgcGFkZGluZzogNHB4IDA7XG4gIH1cbn1cblxuLmFwcC1zZWxlY3QtZmllbGQtdGFibGUge1xuICAubmctc2VsZWN0OjpuZy1kZWVwIHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBtaW4taGVpZ2h0OiAyOXB4O1xuICAgICAgbWF4LWhlaWdodDogMjlweDtcbiAgICAgIGhlaWdodDogMjlweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/fields/select-field/select-field.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/fields/select-field/select-field.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFieldComponent", function() { return SelectFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SelectFieldComponent = /** @class */ (function () {
    function SelectFieldComponent(ngControl) {
        this.ngControl = ngControl;
        this.isInvalid = false;
        this.bindLabel = 'label';
        this.bindValue = 'value';
        this.fieldType = null;
        this.searchable = false;
        this.showClearBtn = false;
        this.value = null;
        this.onChangeField = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    SelectFieldComponent.prototype.ngOnInit = function () { };
    SelectFieldComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    SelectFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SelectFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectFieldComponent.prototype.onChange = function (e) {
        this.onChangeField.emit({ fieldValue: e, id: this.id, type: 'select' });
        // здесь бага в консоли, потому что в e - это значение, а не event, закоменчу
        // e.preventDefault();
    };
    SelectFieldComponent.prototype.onTouched = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SelectFieldComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectFieldComponent.prototype, "labelTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectFieldComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectFieldComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectFieldComponent.prototype, "isInvalid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectFieldComponent.prototype, "idElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectFieldComponent.prototype, "bindLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectFieldComponent.prototype, "bindValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectFieldComponent.prototype, "fieldType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectFieldComponent.prototype, "searchable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectFieldComponent.prototype, "showClearBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectFieldComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectFieldComponent.prototype, "onChangeField", void 0);
    SelectFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-field',
            template: __webpack_require__(/*! ./select-field.component.html */ "./src/app/shared/components/fields/select-field/select-field.component.html"),
            styles: [__webpack_require__(/*! ./select-field.component.scss */ "./src/app/shared/components/fields/select-field/select-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
    ], SelectFieldComponent);
    return SelectFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/fields/select-multi-checkbox-field/select-multi-checkbox-field.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/fields/select-multi-checkbox-field/select-multi-checkbox-field.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-select-multi-checkbox-field\"\n  [ngClass]=\"{'app-select-multi-checkbox-field-has-error': isInvalid}\"\n  id={{id}}\n>\n  <ng-select\n    [ngClass]=\"{'app-select-multi-checkbox-field-remove-clear-btn': !showClearBtn}\"\n    [items]=\"items\"\n    bindLabel={{bindLabel}}\n    bindValue={{bindValue}}\n    [multiple]=\"true\"\n    [(ngModel)]=\"value\"\n    [searchable]=\"searchable\"\n    (change)=\"onChange($event)\"\n    placeholder={{labelTitle}}\n    (blur)=\"onTouched()\"\n  >\n    <ng-template\n      ng-option-tmp\n      let-item=\"item\"\n      let-item$=\"item$\"\n      let-index=\"index\"\n    >\n      <div class=\"app-select-multi-checkbox-field-option\">\n        <div>\n          <input\n            id=\"item-{{index}}\"\n            type=\"checkbox\"\n            [ngModel]=\"item$.selected\"\n          />\n          <span class=\"app-select-multi-checkbox-field-label\">\n            {{item[bindLabel]}}\n          </span>\n          <span class=\"app-select-multi-checkbox-field-checkmark\"></span>\n        </div>\n        <div\n          *ngIf=\"item.price\"\n          class=\"app-select-multi-checkbox-field-option__price\"\n        >\n          {{ item.price | currency:'USD':true:'.0' }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template ng-multi-label-tmp let-items=\"items\">\n      <div\n        class=\"ng-value\"\n        *ngFor=\"let item of items; let isLast=last\"\n      >\n        <span class=\"ng-value-label\">\n          {{item.name}}{{isLast ? '' : ','}}\n        </span>\n      </div>\n    </ng-template>\n  </ng-select>\n  <div\n    *ngIf=\"isInvalid\"\n    class=\"app-select-multi-checkbox-field-error-icon\"\n  >\n    x\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/fields/select-multi-checkbox-field/select-multi-checkbox-field.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/fields/select-multi-checkbox-field/select-multi-checkbox-field.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-select-multi-checkbox-field {\n  position: relative; }\n  .app-select-multi-checkbox-field .ng-select::ng-deep .ng-select-container .ng-value-container {\n    overflow: visible; }\n  .app-select-multi-checkbox-field .ng-select::ng-deep .ng-select-container .ng-value-container .ng-placeholder {\n      position: absolute;\n      color: #909090;\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      top: 9px; }\n  .app-select-multi-checkbox-field .ng-select::ng-deep .ng-select-container .ng-value-container .ng-value {\n      background: transparent;\n      position: relative;\n      top: 5px;\n      margin: 0 0 5px; }\n  .app-select-multi-checkbox-field .ng-select::ng-deep .ng-select-container .ng-value-container .ng-value .ng-value-label {\n        padding: 0 2px;\n        font: 12px 'NunitoSans-Bold'; }\n  .app-select-multi-checkbox-field .ng-select::ng-deep .ng-has-value .ng-placeholder {\n    display: block;\n    -webkit-transform: translateY(-7px) scale(0.85) perspective(100px) translateZ(0.001px);\n            transform: translateY(-7px) scale(0.85) perspective(100px) translateZ(0.001px); }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-select-container {\n    border-color: #4350a2; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep {\n    border-color: #4350a2;\n    border-top: none; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items {\n      font-size: 12px; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option {\n        color: #151515;\n        position: relative;\n        padding: 8px 0 8px 35px; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n          height: 0;\n          width: 0; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option .app-select-multi-checkbox-field-checkmark {\n          position: absolute;\n          top: 9px;\n          left: 8px;\n          height: 16px;\n          width: 16px;\n          background-color: #ebeeff;\n          border-radius: 4px; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option .app-select-multi-checkbox-field-checkmark:after {\n            content: '';\n            position: absolute;\n            display: none;\n            left: 5px;\n            top: 1px;\n            width: 5px;\n            height: 10px;\n            border: solid white;\n            border-width: 0 2px 2px 0;\n            -webkit-transform: rotate(45deg);\n                    transform: rotate(45deg); }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option .app-select-multi-checkbox-field-option {\n          display: flex;\n          justify-content: space-between;\n          align-items: center; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option .app-select-multi-checkbox-field-option__price {\n          padding: 0 25px 0 0; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected,\n      .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked {\n        color: #4350a2;\n        background: #ebeeff; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected .app-select-multi-checkbox-field-checkmark,\n        .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .app-select-multi-checkbox-field-checkmark {\n          background-color: #f8bc45; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected .app-select-multi-checkbox-field-checkmark:after,\n          .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .app-select-multi-checkbox-field-checkmark:after {\n            display: block; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected .app-select-multi-checkbox-field-label,\n        .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected .app-select-multi-checkbox-field-option__price,\n        .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .app-select-multi-checkbox-field-label,\n        .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .app-select-multi-checkbox-field-option__price {\n          font: 12px 'NunitoSans-Bold'; }\n  .app-select-multi-checkbox-field .ng-select.ng-select-opened::ng-deep .ng-select-container .ng-arrow {\n    border-color: #4350a2 transparent transparent;\n    border-style: solid;\n    border-width: 5px 5px 2.5px;\n    top: 0; }\n  .app-select-multi-checkbox-field .app-select-multi-checkbox-field-remove-clear-btn.ng-select::ng-deep .ng-clear-wrapper {\n    display: none; }\n  .app-select-multi-checkbox-field.app-select-multi-checkbox-field-has-error .ng-select::ng-deep .ng-select-container {\n    border-color: #e65757; }\n  .app-select-multi-checkbox-field.app-select-multi-checkbox-field-has-error .ng-select::ng-deep .ng-select-container .ng-value-container .ng-placeholder {\n      color: #e65757; }\n  .app-select-multi-checkbox-field.app-select-multi-checkbox-field-has-error .ng-select.ng-select-opened::ng-deep .ng-select-container {\n    border-color: #4350a2; }\n  .app-select-multi-checkbox-field .app-select-multi-checkbox-field-error-icon {\n    color: #fff;\n    background: #e65757;\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    text-align: center;\n    line-height: 7px;\n    position: absolute;\n    right: 11px;\n    top: 11px;\n    padding: 4px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL3NlbGVjdC1tdWx0aS1jaGVja2JveC1maWVsZC9zZWxlY3QtbXVsdGktY2hlY2tib3gtZmllbGQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBUVEsaUJBQWlCLEVBQUE7RUFSekI7TUFXVSxrQkFBa0I7TUFDbEIsY0N5QlU7TUR4QlYsNkJBQXFCO2NBQXJCLHFCQUFxQjtNQUNyQiw4TUFBMk07TUFDM00sUUFBUSxFQUFBO0VBZmxCO01BbUJVLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLGVBQWUsRUFBQTtFQXRCekI7UUF5QlksY0FBYztRQUNkLDRCQUE0QixFQUFBO0VBMUJ4QztJQW1DUSxjQUFjO0lBQ2Qsc0ZBQThFO1lBQTlFLDhFQUE4RSxFQUFBO0VBcEN0RjtJQTRDTSxxQkM5Q3NCLEVBQUE7RURFNUI7SUFnRE0scUJDbERzQjtJRG1EdEIsZ0JBQWdCLEVBQUE7RUFqRHRCO01Bb0RRLGVBQWUsRUFBQTtFQXBEdkI7UUF1RFUsY0NmYztRRGdCZCxrQkFBa0I7UUFDbEIsdUJBQXVCLEVBQUE7RUF6RGpDO1VBNERZLGtCQUFrQjtVQUNsQixVQUFVO1VBQ1YsZUFBZTtVQUNmLFNBQVM7VUFDVCxRQUFRLEVBQUE7RUFoRXBCO1VBb0VZLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1IsU0FBUztVQUNULFlBQVk7VUFDWixXQUFXO1VBQ1gseUJBQXlCO1VBQ3pCLGtCQUFrQixFQUFBO0VBMUU5QjtZQTZFYyxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixTQUFTO1lBQ1QsUUFBUTtZQUNSLFVBQVU7WUFDVixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6QixnQ0FBd0I7b0JBQXhCLHdCQUF3QixFQUFBO0VBdEZ0QztVQTJGWSxhQUFhO1VBQ2IsOEJBQThCO1VBQzlCLG1CQUFtQixFQUFBO0VBN0YvQjtVQWlHWSxtQkFBbUIsRUFBQTtFQWpHL0I7O1FBdUdVLGNDekdrQjtRRDBHbEIsbUJBQW1CLEVBQUE7RUF4RzdCOztVQTJHWSx5QkFBeUIsRUFBQTtFQTNHckM7O1lBOEdjLGNBQWMsRUFBQTtFQTlHNUI7Ozs7VUFvSFksNEJBQTRCLEVBQUE7RUFwSHhDO0lBMkhNLDZDQUF5RDtJQUN6RCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLE1BQU0sRUFBQTtFQTlIWjtJQW9JTSxhQUFhLEVBQUE7RUFwSW5CO0lBNElRLHFCQy9HYSxFQUFBO0VEN0JyQjtNQWlKWSxjQ3BIUyxFQUFBO0VEN0JyQjtJQTBKUSxxQkM1Sm9CLEVBQUE7RURFNUI7SUFnS0ksV0FBVztJQUNYLG1CQ3BJaUI7SURxSWpCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL3NlbGVjdC1tdWx0aS1jaGVja2JveC1maWVsZC9zZWxlY3QtbXVsdGktY2hlY2tib3gtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycyc7XG5cbi5hcHAtc2VsZWN0LW11bHRpLWNoZWNrYm94LWZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5uZy1zZWxlY3Q6Om5nLWRlZXAge1xuXG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuXG4gICAgICAubmctdmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgICAgICAgLm5nLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSxjb2xvciAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLHdpZHRoIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksLXdlYmtpdC10cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZy12YWx1ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDVweDtcblxuICAgICAgICAgIC5uZy12YWx1ZS1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgICAgICAgIGZvbnQ6IDEycHggJ051bml0b1NhbnMtQm9sZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5nLWhhcy12YWx1ZSB7XG5cbiAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCkgc2NhbGUoMC44NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDFweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkOjpuZy1kZWVwIHtcblxuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGVsZW1lbnQtYmFzZS1jb2xvcjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWw6Om5nLWRlZXAge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiAkZGFya2dyYXktY29sb3I7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAwIDhweCAzNXB4O1xuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hcHAtc2VsZWN0LW11bHRpLWNoZWNrYm94LWZpZWxkLWNoZWNrbWFyayB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWVmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hcHAtc2VsZWN0LW11bHRpLWNoZWNrYm94LWZpZWxkLW9wdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXBwLXNlbGVjdC1tdWx0aS1jaGVja2JveC1maWVsZC1vcHRpb25fX3ByaWNlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjVweCAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsXG4gICAgICAgIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmVlZmY7XG5cbiAgICAgICAgICAuYXBwLXNlbGVjdC1tdWx0aS1jaGVja2JveC1maWVsZC1jaGVja21hcmsge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YmM0NTtcblxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hcHAtc2VsZWN0LW11bHRpLWNoZWNrYm94LWZpZWxkLWxhYmVsLFxuICAgICAgICAgIC5hcHAtc2VsZWN0LW11bHRpLWNoZWNrYm94LWZpZWxkLW9wdGlvbl9fcHJpY2Uge1xuICAgICAgICAgICAgZm9udDogMTJweCAnTnVuaXRvU2Fucy1Cb2xkJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3cge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci13aWR0aDogNXB4IDVweCAyLjVweDtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH1cblxuICAuYXBwLXNlbGVjdC1tdWx0aS1jaGVja2JveC1maWVsZC1yZW1vdmUtY2xlYXItYnRuLm5nLXNlbGVjdDo6bmctZGVlcCB7XG4gICAgLm5nLWNsZWFyLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmLmFwcC1zZWxlY3QtbXVsdGktY2hlY2tib3gtZmllbGQtaGFzLWVycm9yIHtcbiAgICAubmctc2VsZWN0OjpuZy1kZWVwIHtcblxuICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRlcnJvci1jb2xvcjtcblxuICAgICAgICAubmctdmFsdWUtY29udGFpbmVyIHtcblxuICAgICAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogJGVycm9yLWNvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZDo6bmctZGVlcCB7XG5cbiAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hcHAtc2VsZWN0LW11bHRpLWNoZWNrYm94LWZpZWxkLWVycm9yLWljb24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICRlcnJvci1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTFweDtcbiAgICB0b3A6IDExcHg7XG4gICAgcGFkZGluZzogNHB4IDA7XG4gIH1cbn1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/fields/select-multi-checkbox-field/select-multi-checkbox-field.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/components/fields/select-multi-checkbox-field/select-multi-checkbox-field.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SelectMultiCheckboxFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultiCheckboxFieldComponent", function() { return SelectMultiCheckboxFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SelectMultiCheckboxFieldComponent = /** @class */ (function () {
    function SelectMultiCheckboxFieldComponent(ngControl) {
        this.ngControl = ngControl;
        this.isInvalid = false;
        this.bindLabel = 'label';
        this.bindValue = 'value';
        this.searchable = false;
        this.showClearBtn = false;
        this.selectedItems = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    SelectMultiCheckboxFieldComponent.prototype.ngOnInit = function () { };
    SelectMultiCheckboxFieldComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    SelectMultiCheckboxFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SelectMultiCheckboxFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectMultiCheckboxFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectMultiCheckboxFieldComponent.prototype.onChange = function (value) {
        this.selectedItems.emit(value);
        return value;
    };
    SelectMultiCheckboxFieldComponent.prototype.onTouched = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SelectMultiCheckboxFieldComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectMultiCheckboxFieldComponent.prototype, "labelTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectMultiCheckboxFieldComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectMultiCheckboxFieldComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectMultiCheckboxFieldComponent.prototype, "isInvalid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectMultiCheckboxFieldComponent.prototype, "idElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectMultiCheckboxFieldComponent.prototype, "bindLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectMultiCheckboxFieldComponent.prototype, "bindValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectMultiCheckboxFieldComponent.prototype, "searchable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectMultiCheckboxFieldComponent.prototype, "showClearBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SelectMultiCheckboxFieldComponent.prototype, "selectedItems", void 0);
    SelectMultiCheckboxFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-multi-checkbox-field',
            template: __webpack_require__(/*! ./select-multi-checkbox-field.component.html */ "./src/app/shared/components/fields/select-multi-checkbox-field/select-multi-checkbox-field.component.html"),
            styles: [__webpack_require__(/*! ./select-multi-checkbox-field.component.scss */ "./src/app/shared/components/fields/select-multi-checkbox-field/select-multi-checkbox-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
    ], SelectMultiCheckboxFieldComponent);
    return SelectMultiCheckboxFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/fields/select-multi-search-field/select-multi-search-field.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/shared/components/fields/select-multi-search-field/select-multi-search-field.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-select-multi-search-field\"\n  [ngClass]=\"{'app-select-multi-search-field-has-error': isInvalid}\"\n>\n  <label *ngIf=\"labelTitle\"\n    class=\"app-select-multi-search-field-label\"\n    [for]=\"idElement\"\n  >\n    {{labelTitle}}\n  </label>\n  <ng-select\n    [ngClass]=\"{'app-select-multi-search-clear-btn': !showClearBtn}\"\n    [items]=\"items\"\n    labelForId={{idElement}}\n    bindLabel={{bindLabel}}\n    bindValue={{bindValue}}\n    [(ngModel)]=\"value\"\n    (change)=\"onChange($event)\"\n    multiple=\"true\"\n    (blur)=\"onTouched()\"\n  >\n    <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\n      <div class=\"ng-value\" *ngFor=\"let item of items\">\n        <span class=\"ng-value-label\">\n          <div\n            class=\"ng-value-label-image-container\"\n            [ngStyle]=\"{'background-image': item.avatar ? 'url(' + item.avatar + ')' : '' }\"\n          >\n          </div>\n          {{item.name}}\n        </span>\n        <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\n      </div>\n    </ng-template>\n    <ng-template ng-multi-label-tmp>\n      add\n    </ng-template>\n  </ng-select>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/fields/select-multi-search-field/select-multi-search-field.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/shared/components/fields/select-multi-search-field/select-multi-search-field.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-select-multi-search-field .ng-select::ng-deep .ng-select-container {\n  border: none;\n  border-bottom: 1px solid #ccc;\n  border-radius: 0; }\n  .app-select-multi-search-field .ng-select::ng-deep .ng-select-container .ng-value-container .ng-value {\n    background-color: #e4e7ff;\n    border-radius: 3px;\n    color: #4350a2;\n    display: flex;\n    align-items: center; }\n  .app-select-multi-search-field .ng-select::ng-deep .ng-select-container .ng-value-container .ng-value .ng-value-label {\n      display: flex;\n      align-items: center;\n      font: 12px 'NunitoSans-Bold';\n      padding: 6px;\n      margin: 0; }\n  .app-select-multi-search-field .ng-select::ng-deep .ng-select-container .ng-value-container .ng-value .ng-value-label .ng-value-label-image-container {\n        width: 13px;\n        height: 13px;\n        border-radius: 50%;\n        position: relative;\n        overflow: hidden;\n        background: no-repeat center center #9c9d9d;\n        background-size: cover;\n        margin: 0 6px 0 0; }\n  .app-select-multi-search-field .ng-select::ng-deep .ng-select-container .ng-value-container .ng-value .ng-value-icon {\n      opacity: 0.5;\n      font-size: 18px;\n      border-left: 1px solid #4350a2;\n      padding: 1px 9px; }\n  .app-select-multi-search-field .ng-select::ng-deep .ng-select-container .ng-arrow-wrapper {\n    width: 0;\n    padding: 0; }\n  .app-select-multi-search-field .ng-select::ng-deep .ng-select-container .ng-arrow-wrapper .ng-arrow {\n      border: none;\n      width: 0;\n      padding: 0; }\n  .app-select-multi-search-field .ng-select::ng-deep .ng-select-container .ng-arrow-wrapper .ng-arrow:after {\n        content: '';\n        background: url('icon-search.svg') center no-repeat transparent;\n        background-size: 18px;\n        width: 20px;\n        height: 20px;\n        position: absolute;\n        top: -12px;\n        right: 8px; }\n  .app-select-multi-search-field .ng-select::ng-deep .ng-clear-wrapper {\n  display: none; }\n  .app-select-multi-search-field .ng-select.ng-select-opened::ng-deep .ng-select-container {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n  .app-select-multi-search-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep {\n  border-top: none; }\n  .app-select-multi-search-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items {\n    font-size: 12px; }\n  .app-select-multi-search-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected,\n    .app-select-multi-search-field .ng-select.ng-select-opened::ng-deep .ng-dropdown-panel::ng-deep .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked {\n      background: #ebeeff; }\n  .app-select-multi-search-field .ng-select.ng-select-opened::ng-deep .ng-clear-wrapper {\n  display: none; }\n  .app-select-multi-search-field .ng-select.ng-select-opened::ng-deep .ng-arrow-wrapper .ng-arrow {\n  top: 0; }\n  .app-select-multi-search-field .ng-select.ng-select-opened::ng-deep .ng-arrow-wrapper .ng-arrow:after {\n    right: 7px; }\n  .app-select-multi-search-field .ng-select.ng-select-single::ng-deep .ng-select-container .ng-value-container .ng-input {\n  padding-right: 35px; }\n  .app-select-multi-search-field.app-select-multi-search-field-has-error .ng-select::ng-deep .ng-select-container {\n  border-bottom: 1px solid #e65757; }\n  .app-select-multi-search-field-label {\n  color: #151515;\n  font: 800 12px/15px 'NunitoSans-Bold';\n  letter-spacing: 0.2px;\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL3NlbGVjdC1tdWx0aS1zZWFyY2gtZmllbGQvc2VsZWN0LW11bHRpLXNlYXJjaC1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtNLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCLEVBQUE7RUFQdEI7SUFZVSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUFoQjdCO01BbUJZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsNEJBQTRCO01BQzVCLFlBQVk7TUFDWixTQUFTLEVBQUE7RUF2QnJCO1FBMEJjLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsMkNBQTJDO1FBQzNDLHNCQUFzQjtRQUN0QixpQkFBaUIsRUFBQTtFQWpDL0I7TUFzQ1ksWUFBWTtNQUNaLGVBQWU7TUFDZiw4QkFBOEI7TUFDOUIsZ0JBQWdCLEVBQUE7RUF6QzVCO0lBK0NRLFFBQVE7SUFDUixVQUFVLEVBQUE7RUFoRGxCO01BbURVLFlBQVk7TUFDWixRQUFRO01BQ1IsVUFBVSxFQUFBO0VBckRwQjtRQXdEWSxXQUFXO1FBQ1gsK0RBQXNFO1FBQ3RFLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsVUFBVSxFQUFBO0VBL0R0QjtFQXNFTSxhQUFhLEVBQUE7RUF0RW5CO0VBNkVNLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBO0VBaEZuQztFQW9GTSxnQkFBZ0IsRUFBQTtFQXBGdEI7SUF1RlEsZUFBZSxFQUFBO0VBdkZ2Qjs7TUEyRlUsbUJBQW1CLEVBQUE7RUEzRjdCO0VBaUdNLGFBQWEsRUFBQTtFQWpHbkI7RUF1R1EsTUFBTSxFQUFBO0VBdkdkO0lBMEdVLFVBQVUsRUFBQTtFQTFHcEI7RUFpSEksbUJBQW1CLEVBQUE7RUFqSHZCO0VBd0hRLGdDQUFnQyxFQUFBO0VBTXhDO0VBQ0UsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZHMvc2VsZWN0LW11bHRpLXNlYXJjaC1maWVsZC9zZWxlY3QtbXVsdGktc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zZWxlY3QtbXVsdGktc2VhcmNoLWZpZWxkIHtcblxuICAubmctc2VsZWN0OjpuZy1kZWVwIHtcblxuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG5cbiAgICAgICAgLm5nLXZhbHVlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBjb2xvcjogIzQzNTBhMjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250OiAxMnB4ICdOdW5pdG9TYW5zLUJvbGQnO1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAubmctdmFsdWUtbGFiZWwtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEzcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICM5YzlkOWQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA2cHggMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uZy12YWx1ZS1pY29uIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzQzNTBhMjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCA5cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5uZy1hcnJvdy13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLm5nLWFycm93IHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pY29uLXNlYXJjaC5zdmcnKSBjZW50ZXIgbm8tcmVwZWF0IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctY2xlYXItd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZDo6bmctZGVlcCB7XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbDo6bmctZGVlcCB7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuXG4gICAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICAgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsXG4gICAgICAgIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmVlZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctY2xlYXItd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5uZy1hcnJvdy13cmFwcGVyIHtcblxuICAgICAgLm5nLWFycm93IHtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHJpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGU6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIH1cblxuICAmLmFwcC1zZWxlY3QtbXVsdGktc2VhcmNoLWZpZWxkLWhhcy1lcnJvciB7XG4gICAgLm5nLXNlbGVjdDo6bmctZGVlcCB7XG5cbiAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNjU3NTc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hcHAtc2VsZWN0LW11bHRpLXNlYXJjaC1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjMTUxNTE1O1xuICBmb250OiA4MDAgMTJweC8xNXB4ICdOdW5pdG9TYW5zLUJvbGQnO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/fields/select-multi-search-field/select-multi-search-field.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/components/fields/select-multi-search-field/select-multi-search-field.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SelectMultiSearchFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultiSearchFieldComponent", function() { return SelectMultiSearchFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SelectMultiSearchFieldComponent = /** @class */ (function () {
    function SelectMultiSearchFieldComponent(ngControl) {
        this.ngControl = ngControl;
        this.isInvalid = false;
        this.bindLabel = 'label';
        this.bindValue = 'value';
        this.showClearBtn = false;
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    SelectMultiSearchFieldComponent.prototype.ngOnInit = function () { };
    SelectMultiSearchFieldComponent.prototype.writeValue = function (value) {
        if (Array.isArray(value)) {
            this.value = value.map(function (item) { return item.id; });
        }
    };
    SelectMultiSearchFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SelectMultiSearchFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectMultiSearchFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectMultiSearchFieldComponent.prototype.onChange = function (e) {
        e.preventDefault();
    };
    SelectMultiSearchFieldComponent.prototype.onTouched = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SelectMultiSearchFieldComponent.prototype, "defaultItemIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SelectMultiSearchFieldComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectMultiSearchFieldComponent.prototype, "labelTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectMultiSearchFieldComponent.prototype, "idElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectMultiSearchFieldComponent.prototype, "isInvalid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectMultiSearchFieldComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectMultiSearchFieldComponent.prototype, "bindLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectMultiSearchFieldComponent.prototype, "bindValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectMultiSearchFieldComponent.prototype, "showClearBtn", void 0);
    SelectMultiSearchFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-multi-search-field',
            template: __webpack_require__(/*! ./select-multi-search-field.component.html */ "./src/app/shared/components/fields/select-multi-search-field/select-multi-search-field.component.html"),
            styles: [__webpack_require__(/*! ./select-multi-search-field.component.scss */ "./src/app/shared/components/fields/select-multi-search-field/select-multi-search-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
    ], SelectMultiSearchFieldComponent);
    return SelectMultiSearchFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/fields/toggle-checkbox-field/toggle-checkbox-field.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/fields/toggle-checkbox-field/toggle-checkbox-field.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'app-checkbox-field-has-error': isInvalid}\">\n  <label class=\"app-shared-switch\" ([for])=\"id\">\n    <span class=\"pl-5\">{{label}}</span>\n    <input type=\"checkbox\"\n           ([id])=\"id\"\n           [value]=\"isSelected\"\n           [checked]=\"isSelected\"\n           [disabled]=\"disabled\"\n           (click)=\"toggleCheckbox()\">\n    <span class=\"app-shared-slider app-shared-round\"></span>\n  </label>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/fields/toggle-checkbox-field/toggle-checkbox-field.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/fields/toggle-checkbox-field/toggle-checkbox-field.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-shared-switch {\n  position: relative;\n  display: inline-block;\n  top: 0.8em;\n  width: 30px;\n  height: 17px; }\n\n/* Hide default HTML checkbox */\n\n.app-shared-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n/* The slider */\n\n.app-shared-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.app-shared-slider:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .app-shared-slider {\n  background-color: #4350a2; }\n\ninput:focus + .app-shared-slider {\n  box-shadow: 0 0 1px #4350a2; }\n\ninput:checked + .app-shared-slider:before {\n  -webkit-transform: translateX(13px);\n  transform: translateX(13px); }\n\n/* Rounded sliders */\n\n.app-shared-slider.app-shared-round {\n  border-radius: 34px; }\n\n.app-shared-slider.app-shared-round:before {\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL3RvZ2dsZS1jaGVja2JveC1maWVsZC90b2dnbGUtY2hlY2tib3gtZmllbGQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2QsK0JBQUE7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWCxlQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBRXRCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFFdkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHlCQzFDMEIsRUFBQTs7QUQ2QzVCO0VBQ0UsMkJDOUMwQixFQUFBOztBRGlENUI7RUFDRSxtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7O0FBRzdCLG9CQUFBOztBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9maWVsZHMvdG9nZ2xlLWNoZWNrYm94LWZpZWxkL3RvZ2dsZS1jaGVja2JveC1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcbi5hcHAtc2hhcmVkLXN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0b3A6IDAuOGVtO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLmFwcC1zaGFyZWQtc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogVGhlIHNsaWRlciAqL1xuLmFwcC1zaGFyZWQtc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLmFwcC1zaGFyZWQtc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogMTNweDtcbiAgbGVmdDogMnB4O1xuICBib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuYXBwLXNoYXJlZC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xufVxuXG5pbnB1dDpmb2N1cyArIC5hcHAtc2hhcmVkLXNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggJGVsZW1lbnQtYmFzZS1jb2xvcjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5hcHAtc2hhcmVkLXNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxM3B4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxM3B4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzcHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5hcHAtc2hhcmVkLXNsaWRlci5hcHAtc2hhcmVkLXJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLmFwcC1zaGFyZWQtc2xpZGVyLmFwcC1zaGFyZWQtcm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/fields/toggle-checkbox-field/toggle-checkbox-field.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/fields/toggle-checkbox-field/toggle-checkbox-field.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ToggleCheckboxFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleCheckboxFieldComponent", function() { return ToggleCheckboxFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ToggleCheckboxFieldComponent = /** @class */ (function () {
    function ToggleCheckboxFieldComponent() {
        this.label = '';
        this.isInvalid = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    ToggleCheckboxFieldComponent_1 = ToggleCheckboxFieldComponent;
    ToggleCheckboxFieldComponent.prototype.ngOnInit = function () { };
    ToggleCheckboxFieldComponent.prototype.writeValue = function (obj) {
        this.isSelected = obj;
    };
    ToggleCheckboxFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ToggleCheckboxFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ToggleCheckboxFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    ToggleCheckboxFieldComponent.prototype.toggleCheckbox = function () {
        if (this.disabled) {
            return;
        }
        this.isSelected = !this.isSelected;
        this.onChange(this.isSelected);
    };
    var ToggleCheckboxFieldComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ToggleCheckboxFieldComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToggleCheckboxFieldComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleCheckboxFieldComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleCheckboxFieldComponent.prototype, "isInvalid", void 0);
    ToggleCheckboxFieldComponent = ToggleCheckboxFieldComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: './app-toggle-checkbox-field',
            template: __webpack_require__(/*! ./toggle-checkbox-field.component.html */ "./src/app/shared/components/fields/toggle-checkbox-field/toggle-checkbox-field.component.html"),
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ToggleCheckboxFieldComponent_1; }),
                    multi: true
                }],
            styles: [__webpack_require__(/*! ./toggle-checkbox-field.component.scss */ "./src/app/shared/components/fields/toggle-checkbox-field/toggle-checkbox-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleCheckboxFieldComponent);
    return ToggleCheckboxFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/fields/toggle-field/toggle-field.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/fields/toggle-field/toggle-field.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-toggle-field\"\n  [ngClass]=\"{'app-toggle-field-has-error': isInvalid}\"\n>\n  <label\n    class=\"app-toggle-field-label\"\n    ([for])=\"id\"\n  >\n    <input\n      type=\"checkbox\"\n      ([id])=\"id\"\n      [value]=\"isSelected\"\n      [checked]=\"isSelected\"\n      [disabled]=\"disabled\"\n      (click)=\"toggleCheckbox()\"\n    >\n    <span class=\"app-toggle-field-label-slider\"></span>\n  </label>\n  <span class=\"app-toggle-field-value\">\n    {{label}}\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/fields/toggle-field/toggle-field.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/fields/toggle-field/toggle-field.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-toggle-field {\n  display: flex;\n  align-items: center; }\n  .app-toggle-field .app-toggle-field-label {\n    position: relative;\n    display: inline-block;\n    top: 3px;\n    width: 30px;\n    height: 17px; }\n  .app-toggle-field .app-toggle-field-label input {\n    opacity: 0;\n    width: 0;\n    height: 0; }\n  .app-toggle-field .app-toggle-field-label-slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #ccc;\n    transition: .4s;\n    border-radius: 34px; }\n  .app-toggle-field .app-toggle-field-label-slider:before {\n    position: absolute;\n    content: \"\";\n    height: 13px;\n    width: 13px;\n    left: 2px;\n    bottom: 2px;\n    background-color: #fff;\n    transition: .4s;\n    border-radius: 50%; }\n  .app-toggle-field input:checked + .app-toggle-field-label-slider {\n    background-color: #4350a2; }\n  .app-toggle-field input:focus + .app-toggle-field-label-slider {\n    box-shadow: 0 0 1px #4350a2; }\n  .app-toggle-field input:checked + .app-toggle-field-label-slider:before {\n    -webkit-transform: translateX(13px);\n            transform: translateX(13px); }\n  .app-toggle-field .app-toggle-field-value {\n    padding: 0 5px; }\n  .app-toggle-field.app-toggle-field-has-error .app-toggle-field-value {\n    color: #e65757; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmllbGRzL3RvZ2dsZS1maWVsZC90b2dnbGUtZmllbGQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUZyQjtJQUtJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFUaEI7SUFhSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVMsRUFBQTtFQWZiO0lBbUJJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUEzQnZCO0lBK0JJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7RUF2Q3RCO0lBMkNJLHlCQzdDd0IsRUFBQTtFREU1QjtJQStDSSwyQkNqRHdCLEVBQUE7RURFNUI7SUFtREksbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0VBbkQvQjtJQXVESSxjQUFjLEVBQUE7RUF2RGxCO0lBNERNLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpZWxkcy90b2dnbGUtZmllbGQvdG9nZ2xlLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMnO1xuXG4uYXBwLXRvZ2dsZS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmFwcC10b2dnbGUtZmllbGQtbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdG9wOiAzcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICB9XG5cbiAgLmFwcC10b2dnbGUtZmllbGQtbGFiZWwgaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG5cbiAgLmFwcC10b2dnbGUtZmllbGQtbGFiZWwtc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB9XG5cbiAgLmFwcC10b2dnbGUtZmllbGQtbGFiZWwtc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGxlZnQ6IDJweDtcbiAgICBib3R0b206IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICBpbnB1dDpjaGVja2VkICsgLmFwcC10b2dnbGUtZmllbGQtbGFiZWwtc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xuICB9XG5cbiAgaW5wdXQ6Zm9jdXMgKyAuYXBwLXRvZ2dsZS1maWVsZC1sYWJlbC1zbGlkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggJGVsZW1lbnQtYmFzZS1jb2xvcjtcbiAgfVxuXG4gIGlucHV0OmNoZWNrZWQgKyAuYXBwLXRvZ2dsZS1maWVsZC1sYWJlbC1zbGlkZXI6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTNweCk7XG4gIH1cblxuICAuYXBwLXRvZ2dsZS1maWVsZC12YWx1ZSB7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gIH1cblxuICAmLmFwcC10b2dnbGUtZmllbGQtaGFzLWVycm9yIHtcbiAgICAuYXBwLXRvZ2dsZS1maWVsZC12YWx1ZSB7XG4gICAgICBjb2xvcjogI2U2NTc1NztcbiAgICB9XG4gIH1cbn1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/fields/toggle-field/toggle-field.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/fields/toggle-field/toggle-field.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ToggleFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFieldComponent", function() { return ToggleFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ToggleFieldComponent = /** @class */ (function () {
    function ToggleFieldComponent() {
        this.label = '';
        this.isInvalid = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    ToggleFieldComponent_1 = ToggleFieldComponent;
    ToggleFieldComponent.prototype.ngOnInit = function () { };
    ToggleFieldComponent.prototype.writeValue = function (obj) {
        this.isSelected = obj;
    };
    ToggleFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ToggleFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ToggleFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    ToggleFieldComponent.prototype.toggleCheckbox = function () {
        if (this.disabled) {
            return;
        }
        this.isSelected = !this.isSelected;
        this.onChange(this.isSelected);
    };
    var ToggleFieldComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ToggleFieldComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ToggleFieldComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleFieldComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleFieldComponent.prototype, "isInvalid", void 0);
    ToggleFieldComponent = ToggleFieldComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toggle-field',
            template: __webpack_require__(/*! ./toggle-field.component.html */ "./src/app/shared/components/fields/toggle-field/toggle-field.component.html"),
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ToggleFieldComponent_1; }),
                    multi: true
                }],
            styles: [__webpack_require__(/*! ./toggle-field.component.scss */ "./src/app/shared/components/fields/toggle-field/toggle-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleFieldComponent);
    return ToggleFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/main-spinner/main-spinner.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/main-spinner/main-spinner.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative w-100 h-50\">\n  <div class=\"main_spinner\">\n    <div class=\"main_spinner__box\">\n      <div class=\"main_spinner__logo\">i!</div>\n      <svg class=\"main_spinner__spinner\" viewBox=\"25 25 50 50\">\n        <circle class=\"main_spinner__path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n      </svg>\n      <h2 *ngIf=\"spinnerText !== ''\" class=\"main_spinner__additional_label\">{{spinnerText}}</h2>\n    </div>    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/main-spinner/main-spinner.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/main-spinner/main-spinner.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px; }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px; } }\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px; }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px; } }\n.main_spinner {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5rem;\n  top: 35%;\n  width: 100%; }\n.main_spinner__box {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-top: 5rem;\n    position: absolute;\n    top: 35%; }\n.main_spinner__logo {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 96px;\n    /** font-size: 8rem;  root font size change during loading page */\n    font-weight: 500;\n    color: grey;\n    position: absolute;\n    margin: auto; }\n.main_spinner__spinner {\n    height: 200px;\n    width: 200px;\n    -webkit-animation: rotate 2s linear infinite;\n            animation: rotate 2s linear infinite;\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n.main_spinner__path {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n    -webkit-animation: dash 1.5s ease-in-out infinite;\n            animation: dash 1.5s ease-in-out infinite;\n    stroke-linecap: round;\n    stroke: grey; }\n.main_spinner__additional_label {\n    bottom: -3rem;\n    color: #909090;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 2rem;\n    font-weight: 500;\n    position: absolute;\n    text-align: center;\n    word-wrap: break-word;\n    white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYWluLXNwaW5uZXIvbWFpbi1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYWluLXNwaW5uZXIvbWFpbi1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7Ozs7O0VDQUU7QUNIRjtFQUNFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7QUFGN0I7RUFDRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBO0FBRzdCO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsb0JBQW9CLEVBQUE7RUFFdEI7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCLEVBQUEsRUFBQTtBQVg3QjtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLG9CQUFvQixFQUFBO0VBRXRCO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QixFQUFBO0VBRTFCO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QixFQUFBLEVBQUE7QUFJN0I7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBRXZCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsV0FBVyxFQUFBO0FBRVg7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRLEVBQUE7QUFHVjtJQUNFLHdJQUF3STtJQUN4SSxlQUFlO0lBQUUsaUVBQUE7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0FBR2Q7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMsdUNBQStCO1lBQS9CLCtCQUErQixFQUFBO0FBR2pDO0lBQ0Usd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpREFBeUM7WUFBekMseUNBQXlDO0lBQ3pDLHFCQUFxQjtJQUNyQixZQUFZLEVBQUE7QUFHZDtJQUNFLGFBQWE7SUFDYixjQzlCZ0I7SUQrQmhCLHdJQUF3STtJQUN4SSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFpbi1zcGlubmVyL21haW4tc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7IH1cbiAgNTAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzVweDsgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0cHg7IH0gfVxuXG4ubWFpbl9zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgdG9wOiAzNSU7XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5tYWluX3NwaW5uZXJfX2JveCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7IH1cbiAgLm1haW5fc3Bpbm5lcl9fbG9nbyB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDk2cHg7XG4gICAgLyoqIGZvbnQtc2l6ZTogOHJlbTsgIHJvb3QgZm9udCBzaXplIGNoYW5nZSBkdXJpbmcgbG9hZGluZyBwYWdlICovXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvOyB9XG4gIC5tYWluX3NwaW5uZXJfX3NwaW5uZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyOyB9XG4gIC5tYWluX3NwaW5uZXJfX3BhdGgge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlOiBncmV5OyB9XG4gIC5tYWluX3NwaW5uZXJfX2FkZGl0aW9uYWxfbGFiZWwge1xuICAgIGJvdHRvbTogLTNyZW07XG4gICAgY29sb3I6ICM5MDkwOTA7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBkYXNoIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgfVxufVxuXG4ubWFpbl9zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cmVtOyBcbiAgdG9wOiAzNSU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICZfX2JveCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNXJlbTsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICB9XG5cbiAgJl9fbG9nbyB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDk2cHg7IC8qKiBmb250LXNpemU6IDhyZW07ICByb290IGZvbnQgc2l6ZSBjaGFuZ2UgZHVyaW5nIGxvYWRpbmcgcGFnZSAqL1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gICZfX3NwaW5uZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB9XG4gIFxuICAmX19wYXRoIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZTogZ3JleTtcbiAgfVxuXG4gICZfX2FkZGl0aW9uYWxfbGFiZWwge1xuICAgIGJvdHRvbTogLTNyZW07XG4gICAgY29sb3I6ICRncmF5LWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuIiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcbiRlbGVtZW50LXNlY29uZC1jb2xvcjogIzlmYTZjYjtcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XG4kZWxlbWVudC1kYW5nZXItY29sb3I6IHJlZDtcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcblxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcbiR3aGl0ZTogI2ZmZjtcbiRiYWNrZ3JvdW5kLWRpc2FibGVkLWNvbG9yOiAjY2VkNGRhO1xuXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcblxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XG5cbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcbiRyZWQtY29sb3I6ICNmYzY0Njc7XG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XG5cbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XG5cbiRpY29uLWRhcmstZ3JheS1jb2xvcjogI0E0QThCRTtcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xuXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7Il19 */"

/***/ }),

/***/ "./src/app/shared/components/main-spinner/main-spinner.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/main-spinner/main-spinner.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSpinnerComponent", function() { return MainSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainSpinnerComponent = /** @class */ (function () {
    function MainSpinnerComponent() {
        this.spinnerText = "";
    }
    MainSpinnerComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MainSpinnerComponent.prototype, "spinnerText", void 0);
    MainSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "main-spinner",
            template: __webpack_require__(/*! ./main-spinner.component.html */ "./src/app/shared/components/main-spinner/main-spinner.component.html"),
            styles: [__webpack_require__(/*! ./main-spinner.component.scss */ "./src/app/shared/components/main-spinner/main-spinner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainSpinnerComponent);
    return MainSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-modal-wrapper\"\n>\n  <div class=\"app-modal\" [ngStyle]=\"{'width': width}\">\n    <div\n      class=\"app-modal-close\"\n      (click)=\"onClose()\"\n    >\n      ×\n    </div>\n    <div class=\"app-modal-title\">\n      {{title}}\n    </div>\n    <div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-modal-wrapper {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 1;\n  z-index: 1000;\n  overflow-y: auto; }\n\n.app-modal {\n  margin: 70px auto;\n  padding: 15px;\n  background: #fff;\n  border-radius: 5px;\n  width: 60%;\n  position: relative; }\n\n.app-modal-close {\n  cursor: pointer;\n  font-size: 27px;\n  line-height: 16px;\n  color: #000;\n  position: absolute;\n  right: 15px;\n  top: 15px; }\n\n.app-modal-close:hover {\n    color: #6c757d; }\n\n.app-modal-title {\n  color: #151515;\n  font: 17px/20px 'NunitoSans-Bold';\n  text-align: center;\n  margin: 0 0 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQVBYO0lBVUksY0FBYyxFQUFBOztBQUlsQjtFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW1vZGFsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLW1vZGFsIHtcbiAgbWFyZ2luOiA3MHB4IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXBwLW1vZGFsLWNsb3NlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNXB4O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICB9XG59XG5cbi5hcHAtbW9kYWwtdGl0bGUge1xuICBjb2xvcjogIzE1MTUxNTtcbiAgZm9udDogMTdweC8yMHB4ICdOdW5pdG9TYW5zLUJvbGQnO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.onClose = function () {
        this.closeModal.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ModalComponent.prototype, "closeModal", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/shared/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/person-avatar-change/person-avatar-change.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/person-avatar-change/person-avatar-change.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-person-avatar-container\">\n  <div class=\"app-person-avatar-show\" (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\"\n       [ngStyle]=\"{\n       'background-image': avatarBase64 ? 'url(' + avatarBase64 + ')' :\n        avatar ? 'url(' + avatar + ')' : 'url(assets/images/temp/person-foto-placeholder.png)',\n        'min-width': size, 'min-height': size\n        }\">\n    <input type=\"file\" hidden #inputFile (change)=\"onFileChange($event)\" />\n    <button class=\"btn app-btn-primary app-person-avatar-btn\" *ngIf=\"hover && editable\"\n            (click)=\"inputFile.click(); $event.preventDefault()\">\n      Upload\n      <i class=\"fas fa-download ml-1\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/person-avatar-change/person-avatar-change.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/person-avatar-change/person-avatar-change.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-person-avatar-container {\n  display: inline-flex;\n  margin: 0; }\n  .app-person-avatar-container .app-person-avatar-show {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    position: relative;\n    overflow: hidden;\n    background: no-repeat center center #9c9d9d;\n    background-size: cover; }\n  .app-person-avatar-container .app-person-avatar-btn {\n    position: absolute;\n    opacity: 0.7;\n    filter: alpha(opacity=70); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGVyc29uLWF2YXRhci1jaGFuZ2UvcGVyc29uLWF2YXRhci1jaGFuZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUyxFQUFBO0VBRlg7SUFLSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0Msc0JBQXNCLEVBQUE7RUFaMUI7SUFlSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGVyc29uLWF2YXRhci1jaGFuZ2UvcGVyc29uLWF2YXRhci1jaGFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXBlcnNvbi1hdmF0YXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbjogMDtcblxuICAuYXBwLXBlcnNvbi1hdmF0YXItc2hvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgIzljOWQ5ZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIC5hcHAtcGVyc29uLWF2YXRhci1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/person-avatar-change/person-avatar-change.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/person-avatar-change/person-avatar-change.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PersonAvatarChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonAvatarChangeComponent", function() { return PersonAvatarChangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonAvatarChangeComponent = /** @class */ (function () {
    function PersonAvatarChangeComponent(cd) {
        this.cd = cd;
        this.changeAvatarEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editable = true;
        this.hover = false;
    }
    PersonAvatarChangeComponent.prototype.ngOnInit = function () {
    };
    PersonAvatarChangeComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.avatarBase64 = reader.result;
                _this.changeAvatarEmitter.emit(_this.avatarBase64);
                _this.cd.markForCheck();
            };
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PersonAvatarChangeComponent.prototype, "changeAvatarEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PersonAvatarChangeComponent.prototype, "avatar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PersonAvatarChangeComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PersonAvatarChangeComponent.prototype, "editable", void 0);
    PersonAvatarChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person-avatar-change',
            template: __webpack_require__(/*! ./person-avatar-change.component.html */ "./src/app/shared/components/person-avatar-change/person-avatar-change.component.html"),
            styles: [__webpack_require__(/*! ./person-avatar-change.component.scss */ "./src/app/shared/components/person-avatar-change/person-avatar-change.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PersonAvatarChangeComponent);
    return PersonAvatarChangeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/person-show/person-show.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/person-show/person-show.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-person-show\">\n  <div\n    *ngIf=\"showAvatar\"\n    class=\"app-person-show-avatar\"\n    [ngStyle]=\"{'background-image': avatar ? 'url(' + avatar + ')' : '' }\"\n  >\n  </div>\n  <div class=\"app-person-show-name\">\n    {{name}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/person-show/person-show.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/person-show/person-show.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-person-show {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px;\n  margin: 0; }\n  .app-person-show .app-person-show-avatar {\n    min-width: 13px;\n    min-height: 13px;\n    border-radius: 50%;\n    position: relative;\n    overflow: hidden;\n    background: no-repeat center center #9c9d9d;\n    background-size: cover;\n    margin: 0 6px 0 0; }\n  .app-person-show .app-person-show-name {\n    font: 12px 'NunitoSans-Bold'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGVyc29uLXNob3cvcGVyc29uLXNob3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixTQUFTLEVBQUE7RUFKWDtJQU9JLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLHNCQUFzQjtJQUN0QixpQkFBaUIsRUFBQTtFQWRyQjtJQWtCSSw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BlcnNvbi1zaG93L3BlcnNvbi1zaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1wZXJzb24tc2hvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogMDtcblxuICAuYXBwLXBlcnNvbi1zaG93LWF2YXRhciB7XG4gICAgbWluLXdpZHRoOiAxM3B4O1xuICAgIG1pbi1oZWlnaHQ6IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICM5YzlkOWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcbiAgfVxuXG4gIC5hcHAtcGVyc29uLXNob3ctbmFtZSB7XG4gICAgZm9udDogMTJweCAnTnVuaXRvU2Fucy1Cb2xkJztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/person-show/person-show.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/person-show/person-show.component.ts ***!
  \************************************************************************/
/*! exports provided: PersonShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonShowComponent", function() { return PersonShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonShowComponent = /** @class */ (function () {
    function PersonShowComponent() {
        this.showAvatar = true;
    }
    PersonShowComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PersonShowComponent.prototype, "avatar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PersonShowComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PersonShowComponent.prototype, "showAvatar", void 0);
    PersonShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person-show',
            template: __webpack_require__(/*! ./person-show.component.html */ "./src/app/shared/components/person-show/person-show.component.html"),
            styles: [__webpack_require__(/*! ./person-show.component.scss */ "./src/app/shared/components/person-show/person-show.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersonShowComponent);
    return PersonShowComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sharedRedComponents.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/sharedRedComponents.module.ts ***!
  \*****************************************************************/
/*! exports provided: SharedRedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRedComponentsModule", function() { return SharedRedComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _buttons_search_filter_btn_search_filter_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons/search-filter-btn/search-filter-btn.component */ "./src/app/shared/components/buttons/search-filter-btn/search-filter-btn.component.ts");
/* harmony import */ var _fields_checkbox_field_checkbox_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fields/checkbox-field/checkbox-field.component */ "./src/app/shared/components/fields/checkbox-field/checkbox-field.component.ts");
/* harmony import */ var _fields_input_field_input_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fields/input-field/input-field.component */ "./src/app/shared/components/fields/input-field/input-field.component.ts");
/* harmony import */ var _fields_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fields/search-field/search-field.component */ "./src/app/shared/components/fields/search-field/search-field.component.ts");
/* harmony import */ var _fields_select_field_select_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields/select-field/select-field.component */ "./src/app/shared/components/fields/select-field/select-field.component.ts");
/* harmony import */ var _fields_select_multi_checkbox_field_select_multi_checkbox_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/select-multi-checkbox-field/select-multi-checkbox-field.component */ "./src/app/shared/components/fields/select-multi-checkbox-field/select-multi-checkbox-field.component.ts");
/* harmony import */ var _fields_select_multi_search_field_select_multi_search_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fields/select-multi-search-field/select-multi-search-field.component */ "./src/app/shared/components/fields/select-multi-search-field/select-multi-search-field.component.ts");
/* harmony import */ var _fields_toggle_field_toggle_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fields/toggle-field/toggle-field.component */ "./src/app/shared/components/fields/toggle-field/toggle-field.component.ts");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./badge/badge.component */ "./src/app/shared/components/badge/badge.component.ts");
/* harmony import */ var _badge_dropdown_badge_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./badge-dropdown/badge-dropdown.component */ "./src/app/shared/components/badge-dropdown/badge-dropdown.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/shared/components/data-table/data-table.component.ts");
/* harmony import */ var _data_table_data_table_header_data_table_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data-table/data-table-header/data-table-header.component */ "./src/app/shared/components/data-table/data-table-header/data-table-header.component.ts");
/* harmony import */ var _data_table_data_table_header_data_table_header_title_data_table_header_title_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data-table/data-table-header/data-table-header-title/data-table-header-title.component */ "./src/app/shared/components/data-table/data-table-header/data-table-header-title/data-table-header-title.component.ts");
/* harmony import */ var _data_table_data_table_header_data_table_header_filter_text_data_table_header_filter_text_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component */ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-text/data-table-header-filter-text.component.ts");
/* harmony import */ var _data_table_data_table_header_data_table_header_filter_date_data_table_header_filter_date_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component */ "./src/app/shared/components/data-table/data-table-header/data-table-header-filter-date/data-table-header-filter-date.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _person_avatar_change_person_avatar_change_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./person-avatar-change/person-avatar-change.component */ "./src/app/shared/components/person-avatar-change/person-avatar-change.component.ts");
/* harmony import */ var _person_show_person_show_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./person-show/person-show.component */ "./src/app/shared/components/person-show/person-show.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");
/* harmony import */ var _main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main-spinner/main-spinner.component */ "./src/app/shared/components/main-spinner/main-spinner.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/shared/components/tag/tag.component.ts");
/* harmony import */ var _table_thead_table_thead_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./table-thead/table-thead.component */ "./src/app/shared/components/table-thead/table-thead.component.ts");
/* harmony import */ var _tip_question_tip_question_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tip-question/tip-question.component */ "./src/app/shared/components/tip-question/tip-question.component.ts");
/* harmony import */ var _fields_toggle_checkbox_field_toggle_checkbox_field_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fields/toggle-checkbox-field/toggle-checkbox-field.component */ "./src/app/shared/components/fields/toggle-checkbox-field/toggle-checkbox-field.component.ts");






// buttons

// fields







// components
















var SharedRedComponentsModule = /** @class */ (function () {
    function SharedRedComponentsModule() {
    }
    SharedRedComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // buttons
                _buttons_search_filter_btn_search_filter_btn_component__WEBPACK_IMPORTED_MODULE_6__["SearchFilterBtnComponent"],
                // fields
                _fields_checkbox_field_checkbox_field_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxFieldComponent"],
                _fields_input_field_input_field_component__WEBPACK_IMPORTED_MODULE_8__["InputFieldComponent"],
                _fields_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_9__["SearchFieldComponent"],
                _fields_select_field_select_field_component__WEBPACK_IMPORTED_MODULE_10__["SelectFieldComponent"],
                _fields_select_multi_checkbox_field_select_multi_checkbox_field_component__WEBPACK_IMPORTED_MODULE_11__["SelectMultiCheckboxFieldComponent"],
                _fields_select_multi_search_field_select_multi_search_field_component__WEBPACK_IMPORTED_MODULE_12__["SelectMultiSearchFieldComponent"],
                _fields_toggle_field_toggle_field_component__WEBPACK_IMPORTED_MODULE_13__["ToggleFieldComponent"],
                // components
                _badge_badge_component__WEBPACK_IMPORTED_MODULE_14__["BadgeComponent"],
                _badge_dropdown_badge_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["BadgeDropdownComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_16__["DataTableComponent"],
                _data_table_data_table_header_data_table_header_component__WEBPACK_IMPORTED_MODULE_17__["DataTableHeaderComponent"],
                _data_table_data_table_header_data_table_header_title_data_table_header_title_component__WEBPACK_IMPORTED_MODULE_18__["DataTableHeaderTitleComponent"],
                _data_table_data_table_header_data_table_header_filter_text_data_table_header_filter_text_component__WEBPACK_IMPORTED_MODULE_19__["DataTableHeaderFilterTextComponent"],
                _data_table_data_table_header_data_table_header_filter_date_data_table_header_filter_date_component__WEBPACK_IMPORTED_MODULE_20__["DataTableHeaderFilterDateComponent"],
                _main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_25__["MainSpinnerComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_21__["ModalComponent"],
                _person_avatar_change_person_avatar_change_component__WEBPACK_IMPORTED_MODULE_22__["PersonAvatarChangeComponent"],
                _person_show_person_show_component__WEBPACK_IMPORTED_MODULE_23__["PersonShowComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_24__["SpinnerComponent"],
                _table_thead_table_thead_component__WEBPACK_IMPORTED_MODULE_27__["TableTheadComponent"],
                _tag_tag_component__WEBPACK_IMPORTED_MODULE_26__["TagComponent"],
                _tip_question_tip_question_component__WEBPACK_IMPORTED_MODULE_28__["TipQuestionComponent"],
                _fields_toggle_checkbox_field_toggle_checkbox_field_component__WEBPACK_IMPORTED_MODULE_29__["ToggleCheckboxFieldComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // buttons
                _buttons_search_filter_btn_search_filter_btn_component__WEBPACK_IMPORTED_MODULE_6__["SearchFilterBtnComponent"],
                // fields
                _fields_checkbox_field_checkbox_field_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxFieldComponent"],
                _fields_input_field_input_field_component__WEBPACK_IMPORTED_MODULE_8__["InputFieldComponent"],
                _fields_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_9__["SearchFieldComponent"],
                _fields_select_field_select_field_component__WEBPACK_IMPORTED_MODULE_10__["SelectFieldComponent"],
                _fields_select_multi_checkbox_field_select_multi_checkbox_field_component__WEBPACK_IMPORTED_MODULE_11__["SelectMultiCheckboxFieldComponent"],
                _fields_select_multi_search_field_select_multi_search_field_component__WEBPACK_IMPORTED_MODULE_12__["SelectMultiSearchFieldComponent"],
                _fields_toggle_checkbox_field_toggle_checkbox_field_component__WEBPACK_IMPORTED_MODULE_29__["ToggleCheckboxFieldComponent"],
                _fields_toggle_field_toggle_field_component__WEBPACK_IMPORTED_MODULE_13__["ToggleFieldComponent"],
                // components
                _badge_badge_component__WEBPACK_IMPORTED_MODULE_14__["BadgeComponent"],
                _badge_dropdown_badge_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["BadgeDropdownComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_16__["DataTableComponent"],
                _main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_25__["MainSpinnerComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_21__["ModalComponent"],
                _person_avatar_change_person_avatar_change_component__WEBPACK_IMPORTED_MODULE_22__["PersonAvatarChangeComponent"],
                _person_show_person_show_component__WEBPACK_IMPORTED_MODULE_23__["PersonShowComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_24__["SpinnerComponent"],
                _table_thead_table_thead_component__WEBPACK_IMPORTED_MODULE_27__["TableTheadComponent"],
                _tag_tag_component__WEBPACK_IMPORTED_MODULE_26__["TagComponent"],
                _tip_question_tip_question_component__WEBPACK_IMPORTED_MODULE_28__["TipQuestionComponent"],
            ],
        })
    ], SharedRedComponentsModule);
    return SharedRedComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"app-spinner spinner-border\"\n  role=\"status\"\n>\n  <span class=\"sr-only\">\n    Loading...\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-spinner {\n  display: block;\n  margin: 5px auto;\n  color: #4350a2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNDTDBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycyc7XG5cbi5hcHAtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBjb2xvcjogJGVsZW1lbnQtYmFzZS1jb2xvcjtcbn1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/shared/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/shared/components/spinner/spinner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/table-thead/table-thead.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/table-thead/table-thead.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr\n  class=\"app-table-thead-tr\"\n  [ngStyle]=\"{'background': backround}\"\n>\n  <th\n    class=\"app-table-thead-th\"\n    *ngFor=\"let col of columns; let colIndex = index\"\n    [width]=\"col.width\"\n  >\n    <div\n      class=\"app-table-thead-th__title-block\"\n      [ngClass]=\"{\n        'app-table-thead-th__title-block--right': col.position === 'right',\n        'app-table-thead-th__title-block--center': col.position === 'center',\n        'app-table-thead-th__title-block--right-padding': col.longRightPadding=== true,\n        'app-table-thead-th__title-block--left-padding': col.longLeftPadding=== true\n      }\"\n    >\n      <div class=\"app-table-thead-th__title\">\n        {{col.title}}&nbsp;&nbsp;\n      </div>\n      <div\n        *ngIf=\"col.sort\"\n        class=\"app-table-thead-th__sort\"\n        (click)=\"onChangeSort(colIndex)\"\n      >\n        <i\n          class=\"fas fa-sort\"\n          *ngIf=\"!col.sortOrder\"\n        ></i>\n        <i\n          class=\"fas fa-sort-up app-table-thead-th__sort--up\"\n          title=\"ASC\"\n          *ngIf=\"col.sortOrder === 'ASC'\"\n        ></i>\n        <i\n          class=\"fas fa-sort-down app-table-thead-th__sort--down\"\n          title=\"DESC\"\n          *ngIf=\"col.sortOrder  === 'DESC'\"\n        ></i>\n      </div>\n    </div>\n    <app-search-field\n      *ngIf=\"col.search\"\n    >\n    </app-search-field>\n  </th>\n</tr>\n"

/***/ }),

/***/ "./src/app/shared/components/table-thead/table-thead.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/table-thead/table-thead.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-table-thead-tr {\n  background: #f3f3f3;\n  border-bottom: 1px solid #e7e7e7; }\n\n.app-table-thead-th {\n  font-size: 9px;\n  padding: 10px 5px 10px;\n  vertical-align: bottom; }\n\n.app-table-thead-th__title-block {\n  display: flex;\n  align-items: center; }\n\n.app-table-thead-th__title-block--right {\n  justify-content: flex-end; }\n\n.app-table-thead-th__title-block--center {\n  justify-content: center; }\n\n.app-table-thead-th__title {\n  font-size: 9px; }\n\n.app-table-thead-th__sort {\n  color: #a3a3a3;\n  position: relative;\n  cursor: pointer;\n  font-size: 9px; }\n\n.app-table-thead-th__title-block--right-padding {\n  padding: 0 129px 0 0; }\n\n.app-table-thead-th__title-block--left-padding {\n  padding: 0 0 0 57px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUtdGhlYWQvdGFibGUtdGhlYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFXaEI7RUFDRSxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlLXRoZWFkL3RhYmxlLXRoZWFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9AaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycyc7XG5cbi5hcHAtdGFibGUtdGhlYWQtdHIge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTdlNztcbn1cblxuLmFwcC10YWJsZS10aGVhZC10aCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uYXBwLXRhYmxlLXRoZWFkLXRoX190aXRsZS1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHAtdGFibGUtdGhlYWQtdGhfX3RpdGxlLWJsb2NrLS1yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5hcHAtdGFibGUtdGhlYWQtdGhfX3RpdGxlLWJsb2NrLS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFwcC10YWJsZS10aGVhZC10aF9fdGl0bGUge1xuICBmb250LXNpemU6IDlweDtcbn1cblxuLmFwcC10YWJsZS10aGVhZC10aF9fc29ydCB7XG4gIGNvbG9yOiAjYTNhM2EzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5hcHAtdGFibGUtdGhlYWQtdGhfX3NvcnQtLXVwIHtcblxufVxuXG4uYXBwLXRhYmxlLXRoZWFkLXRoX19zb3J0LS1kb3duIHtcblxufVxuXG4uYXBwLXRhYmxlLXRoZWFkLXRoX190aXRsZS1ibG9jay0tcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTI5cHggMCAwO1xufVxuXG4uYXBwLXRhYmxlLXRoZWFkLXRoX190aXRsZS1ibG9jay0tbGVmdC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAwIDAgNTdweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/table-thead/table-thead.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/table-thead/table-thead.component.ts ***!
  \************************************************************************/
/*! exports provided: TableTheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableTheadComponent", function() { return TableTheadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../enums/sort-order */ "./src/app/enums/sort-order.ts");



var TableTheadComponent = /** @class */ (function () {
    function TableTheadComponent() {
        this.sortFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TableTheadComponent.prototype.ngOnInit = function () { };
    TableTheadComponent.prototype.onChangeSort = function (index) {
        this.columns.forEach(function (column, columnIndex) {
            if (column.sortOrder && columnIndex !== index) {
                delete column.sortOrder;
            }
        });
        this.columns[index].sortOrder = this.columns[index].sortOrder === _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__["SORT_ORDER"].DESC ? _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__["SORT_ORDER"].ASC : _enums_sort_order__WEBPACK_IMPORTED_MODULE_2__["SORT_ORDER"].DESC;
        var sortFilter = {
            id: this.columns[index].id,
            order: this.columns[index].sortOrder,
        };
        this.sortFilter.emit(sortFilter);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TableTheadComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TableTheadComponent.prototype, "backround", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TableTheadComponent.prototype, "sortFilter", void 0);
    TableTheadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-table-thead]',
            template: __webpack_require__(/*! ./table-thead.component.html */ "./src/app/shared/components/table-thead/table-thead.component.html"),
            styles: [__webpack_require__(/*! ./table-thead.component.scss */ "./src/app/shared/components/table-thead/table-thead.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableTheadComponent);
    return TableTheadComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tag/tag.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tag/tag.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-tag\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/tag/tag.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tag/tag.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-tag {\n  background: #e4e7ff;\n  color: #4350a2;\n  padding: 2px 8px;\n  border-radius: 10px;\n  margin: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNDSjBCO0VESzFCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFnL3RhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcblxuLmFwcC10YWcge1xuICBiYWNrZ3JvdW5kOiAjZTRlN2ZmO1xuICBjb2xvcjogJGVsZW1lbnQtYmFzZS1jb2xvcjtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xuJGVsZW1lbnQtc2Vjb25kLWNvbG9yOiAjOWZhNmNiO1xuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcbiRlbGVtZW50LWRhbmdlci1jb2xvcjogcmVkO1xuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XG4kYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU6ICNGQkZCRkI7XG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xuJHdoaXRlOiAjZmZmO1xuJGJhY2tncm91bmQtZGlzYWJsZWQtY29sb3I6ICNjZWQ0ZGE7XG5cbiRib3JkZXItY29sb3I6ICNkNWRmZWM7XG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xuXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcbiRzdWJoZWFkZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzYyNjU2NztcblxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XG4kaGVhZGVyLXNwbGl0dGVyLWNvbG9yOiAjZWVlO1xuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcbiRpbnZhbGlkLWNvbG9yOiAjZTk0ZjQ3O1xuJHJlZC1jb2xvcjogI2ZjNjQ2NztcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcblxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xuJGZpbHRlci1jb2xvcjogI2MwY2FkODtcblxuJGljb24tZGFyay1ncmF5LWNvbG9yOiAjQTRBOEJFO1xuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcbiRncmF5LWNvbG9yOiAjOTA5MDkwO1xuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcbiRkYXJrZ3JheS1jb2xvcjogIzE1MTUxNTtcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XG5cbiR0YWJsZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsiXX0= */"

/***/ }),

/***/ "./src/app/shared/components/tag/tag.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/tag/tag.component.ts ***!
  \********************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TagComponent = /** @class */ (function () {
    function TagComponent() {
    }
    TagComponent.prototype.ngOnInit = function () {
    };
    TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag',
            template: __webpack_require__(/*! ./tag.component.html */ "./src/app/shared/components/tag/tag.component.html"),
            styles: [__webpack_require__(/*! ./tag.component.scss */ "./src/app/shared/components/tag/tag.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tip-question/tip-question.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/tip-question/tip-question.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-tip-question\">\n  <span class=\"app-tip-question-label\">\n   ?\n  </span>\n  <div class=\"app-tip-question-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/tip-question/tip-question.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/tip-question/tip-question.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-tip-question {\n  position: relative; }\n  .app-tip-question .app-tip-question-label {\n    display: inline-block;\n    background: #999;\n    color: #fff;\n    cursor: help;\n    border-radius: 50%;\n    width: 14px;\n    height: 14px;\n    text-align: center;\n    font: 11px/15px 'NunitoSans-Regular'; }\n  .app-tip-question .app-tip-question-content {\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 16px;\n    padding: 5px;\n    background: #b6b6b6;\n    border-radius: 4px; }\n  .app-tip-question:hover .app-tip-question-content {\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGlwLXF1ZXN0aW9uL3RpcC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBSUkscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0MsRUFBQTtFQVp4QztJQWdCSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtFQXRCdEI7SUEwQkksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGlwLXF1ZXN0aW9uL3RpcC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcblxuLmFwcC10aXAtcXVlc3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmFwcC10aXAtcXVlc3Rpb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogaGVscDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250OiAxMXB4LzE1cHggJ051bml0b1NhbnMtUmVndWxhcic7XG4gIH1cblxuICAuYXBwLXRpcC1xdWVzdGlvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMTZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2I2YjZiNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmOmhvdmVyIC5hcHAtdGlwLXF1ZXN0aW9uLWNvbnRlbnR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/tip-question/tip-question.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/tip-question/tip-question.component.ts ***!
  \**************************************************************************/
/*! exports provided: TipQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipQuestionComponent", function() { return TipQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TipQuestionComponent = /** @class */ (function () {
    function TipQuestionComponent() {
    }
    TipQuestionComponent.prototype.ngOnInit = function () {
    };
    TipQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tip-question',
            template: __webpack_require__(/*! ./tip-question.component.html */ "./src/app/shared/components/tip-question/tip-question.component.html"),
            styles: [__webpack_require__(/*! ./tip-question.component.scss */ "./src/app/shared/components/tip-question/tip-question.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TipQuestionComponent);
    return TipQuestionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~family-family-module~online-form-online-form-module~payer-accounts-payer-accounts-module~ver~c516be8a.js.map