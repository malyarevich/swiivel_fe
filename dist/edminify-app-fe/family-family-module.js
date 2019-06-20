(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["family-family-module"],{

/***/ "./src/app/enums/family-roles.ts":
/*!***************************************!*\
  !*** ./src/app/enums/family-roles.ts ***!
  \***************************************/
/*! exports provided: FamilyRoles, familyRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyRoles", function() { return FamilyRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "familyRoles", function() { return familyRoles; });
var FamilyRoles;
(function (FamilyRoles) {
    FamilyRoles["father"] = "father";
    FamilyRoles["mother"] = "mother";
    FamilyRoles["grandmother"] = "grandmother";
    FamilyRoles["grandfather"] = "grandfather";
    FamilyRoles["student"] = "student";
    FamilyRoles["child"] = "child";
    FamilyRoles["aunt"] = "aunt";
    FamilyRoles["uncle"] = "uncle";
})(FamilyRoles || (FamilyRoles = {}));
var familyRoles = [
    FamilyRoles.father,
    FamilyRoles.mother,
    FamilyRoles.grandmother,
    FamilyRoles.grandfather,
    FamilyRoles.student,
    FamilyRoles.child,
    FamilyRoles.aunt,
    FamilyRoles.uncle,
];


/***/ }),

/***/ "./src/app/enums/gender.ts":
/*!*********************************!*\
  !*** ./src/app/enums/gender.ts ***!
  \*********************************/
/*! exports provided: Gender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FEMALE"] = "Female";
})(Gender || (Gender = {}));


/***/ }),

/***/ "./src/app/models/family/family-view-general-tabs.ts":
/*!***********************************************************!*\
  !*** ./src/app/models/family/family-view-general-tabs.ts ***!
  \***********************************************************/
/*! exports provided: FAMILY_VIEW_GENERAL_TABS, familyViewGeneralTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAMILY_VIEW_GENERAL_TABS", function() { return FAMILY_VIEW_GENERAL_TABS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "familyViewGeneralTabs", function() { return familyViewGeneralTabs; });
var FAMILY_VIEW_GENERAL_TABS;
(function (FAMILY_VIEW_GENERAL_TABS) {
    FAMILY_VIEW_GENERAL_TABS["ALL"] = "all";
    FAMILY_VIEW_GENERAL_TABS["PARENTS"] = "parents";
    FAMILY_VIEW_GENERAL_TABS["STUDENTS"] = "students";
    FAMILY_VIEW_GENERAL_TABS["CHILDREN"] = "children";
    FAMILY_VIEW_GENERAL_TABS["GRANDPARENTS"] = "grandparents";
    FAMILY_VIEW_GENERAL_TABS["EXTENDED"] = "extended";
})(FAMILY_VIEW_GENERAL_TABS || (FAMILY_VIEW_GENERAL_TABS = {}));
var familyViewGeneralTabs = [
    { name: FAMILY_VIEW_GENERAL_TABS.ALL },
    { name: FAMILY_VIEW_GENERAL_TABS.PARENTS },
    { name: FAMILY_VIEW_GENERAL_TABS.STUDENTS },
    { name: FAMILY_VIEW_GENERAL_TABS.CHILDREN },
    { name: FAMILY_VIEW_GENERAL_TABS.GRANDPARENTS },
    { name: FAMILY_VIEW_GENERAL_TABS.EXTENDED },
];


/***/ }),

/***/ "./src/app/modules/family/families-list/families-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/family/families-list/families-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlsaWVzLWxpc3QvZmFtaWxpZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/family/families-list/families-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/family/families-list/families-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-family-page-header [titleHeader]=\"'FAMILIES LIST'\"></app-family-page-header>\n\n<div class=\"container\">\n  <div class=\"row mt-4\">\n    <div class=\"col-12 text-right\">\n      <button class=\"btn app-btn-primary\" (click)=\"showFamilyAddModal()\">Create New</button>\n      <app-family-create-modal *ngIf=\"showModal\"\n                               (closeFamilyModal)=onCloseFamilyAddModal($event)>\n      </app-family-create-modal>\n    </div>\n  </div>\n  <div class=\"row mt-3 app-of-wrap py-5\">\n    <div class=\"col-8 offset-2\">\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">Family Name</th>\n          <th></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of familyList$ | async; index as i\">\n          <th scope=\"row\">{{ i + 1 }}</th>\n          <td class=\"font-weight-bold\">{{ item.name }}</td>\n          <th class=\"text-right\">\n            <button class=\"btn app-btn-primary px-2 py-0 mr-2\" [routerLink]=\"'profile/'+ item.family_id\">Edit</button>\n            <button class=\"btn btn-danger px-2 py-0\" (click)=\"deleteFamily(item.family_id)\">Delete</button>\n          </th>\n        </tr>\n        </tbody>\n      </table>\n      <app-spinner *ngIf=\"loader$ | async\"></app-spinner>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/families-list/families-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/family/families-list/families-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: FamiliesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliesListComponent", function() { return FamiliesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/family/family.service */ "./src/app/services/family/family.service.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");




var FamiliesListComponent = /** @class */ (function () {
    function FamiliesListComponent(familyService, loaderService) {
        this.familyService = familyService;
        this.loaderService = loaderService;
        this.showModal = false;
    }
    FamiliesListComponent.prototype.ngOnInit = function () {
        this.loader$ = this.loaderService.loader;
        this.getFamilyList();
    };
    FamiliesListComponent.prototype.getFamilyList = function () {
        this.familyList$ = this.familyService.familyList;
        this.familyService.getAll();
    };
    FamiliesListComponent.prototype.deleteFamily = function (familyId) {
        this.familyService.delete(familyId);
    };
    FamiliesListComponent.prototype.showFamilyAddModal = function () {
        this.showModal = true;
    };
    FamiliesListComponent.prototype.onCloseFamilyAddModal = function () {
        this.showModal = false;
    };
    FamiliesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-families-list',
            template: __webpack_require__(/*! ./families-list.component.html */ "./src/app/modules/family/families-list/families-list.component.html"),
            styles: [__webpack_require__(/*! ./families-list.component.css */ "./src/app/modules/family/families-list/families-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"], _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], FamiliesListComponent);
    return FamiliesListComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/families-list/family-create-modal/family-create-modal.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/family/families-list/family-create-modal/family-create-modal.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlsaWVzLWxpc3QvZmFtaWx5LWNyZWF0ZS1tb2RhbC9mYW1pbHktY3JlYXRlLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/family/families-list/family-create-modal/family-create-modal.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/family/families-list/family-create-modal/family-create-modal.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal [title]=\"'Add Family'\" [width]=\"'30%'\"  (closeModal)=\"onCloseFamilyModal()\">\n  <div class=\"row\">\n    <div class=\"col-12 text-left\">\n      <app-input-field [(ngModel)]=\"familyName\" [label]=\"'Family Name'\"></app-input-field>\n    </div>\n  </div>\n  <div class=\"row text-right pt-4\">\n    <div class=\"col-12\">\n      <button class=\"btn app-btn-warning mr-2\" (click)=\"onCloseFamilyModal()\">Cancel</button>\n      <button [disabled]=\"!familyName\" class=\"btn app-btn-primary\" (click)=\"save()\">Save</button>\n    </div>\n  </div>\n</app-modal>"

/***/ }),

/***/ "./src/app/modules/family/families-list/family-create-modal/family-create-modal.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/family/families-list/family-create-modal/family-create-modal.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FamilyCreateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyCreateModalComponent", function() { return FamilyCreateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/family/family.service */ "./src/app/services/family/family.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FamilyCreateModalComponent = /** @class */ (function () {
    function FamilyCreateModalComponent(familyService, router) {
        this.familyService = familyService;
        this.router = router;
        this.closeFamilyModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FamilyCreateModalComponent.prototype.ngOnInit = function () {
    };
    FamilyCreateModalComponent.prototype.save = function () {
        this.familyService.add(this.familyName);
        this.onCloseFamilyModal();
        // this.router.navigate([`/family/profile/${this.family._id}`]);
    };
    FamilyCreateModalComponent.prototype.onCloseFamilyModal = function () {
        this.closeFamilyModal.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyCreateModalComponent.prototype, "closeFamilyModal", void 0);
    FamilyCreateModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-create-modal',
            template: __webpack_require__(/*! ./family-create-modal.component.html */ "./src/app/modules/family/families-list/family-create-modal/family-create-modal.component.html"),
            styles: [__webpack_require__(/*! ./family-create-modal.component.css */ "./src/app/modules/family/families-list/family-create-modal/family-create-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FamilyCreateModalComponent);
    return FamilyCreateModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-page-header/family-page-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/family/family-page-header/family-page-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wYWdlLWhlYWRlci9mYW1pbHktcGFnZS1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-page-header/family-page-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/family/family-page-header/family-page-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters app-family-page-header pr-3\">\n  <div class=\"col-10\">\n    <div class=\"d-inline-block back p-3 mr-3 app-cursor-pointer\" routerLink=\"/vertical-data-collection\">\n      <i class=\"fas fa-chevron-left\"></i>\n    </div>\n    <span>{{titleHeader}}</span>\n  </div>\n  <div class=\"col-2 pt-2\">\n    <div class=\"app-input-search-container\">\n      <i class=\"fas fa-search app-input-search-icon\"></i>\n      <input type=\"text\" class=\"form-control app-input-search\" placeholder=\"Search\"\n             [(ngModel)]=\"searchValue\" (ngModelChange)=\"onSearchValue()\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/family-page-header/family-page-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/family/family-page-header/family-page-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FamilyPageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyPageHeaderComponent", function() { return FamilyPageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FamilyPageHeaderComponent = /** @class */ (function () {
    function FamilyPageHeaderComponent() {
        this.searchValueEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchValue = '';
    }
    FamilyPageHeaderComponent.prototype.ngOnInit = function () {
    };
    FamilyPageHeaderComponent.prototype.onSearchValue = function () {
        this.searchValueEmitter.emit(this.searchValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FamilyPageHeaderComponent.prototype, "titleHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyPageHeaderComponent.prototype, "searchValueEmitter", void 0);
    FamilyPageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-page-header',
            template: __webpack_require__(/*! ./family-page-header.component.html */ "./src/app/modules/family/family-page-header/family-page-header.component.html"),
            styles: [__webpack_require__(/*! ./family-page-header.component.css */ "./src/app/modules/family/family-page-header/family-page-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyPageHeaderComponent);
    return FamilyPageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component.css":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS1wcm9maWxlLWluZm8vZmFtaWx5LXByb2ZpbGUtaW5mby12aWV3L2ZhbWlseS1wcm9maWxlLWluZm8tdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"app-text-extra-large font-weight-bold\">{{family?.name}}</p>\n\n<div class=\"row  no-gutters border-top border-bottom py-3 text-center\">\n  <div class=\"col-6 border-right px-4\">\n    <p class=\"app-text-large font-weight-bold mb-0\">{{family?.students_count}}</p>\n    <p class=\"app-text-small mb-0\">Students</p>\n  </div>\n  <div class=\"col-6 px-4\">\n    <p class=\"app-text-large font-weight-bold mb-0\">{{family?.children_count}}</p>\n    <p class=\"app-text-small mb-0\">Children living at home</p>\n  </div>\n</div>\n\n<div class=\"row  no-gutters border-bottom py-3\">\n  <div class=\"col-12\">\n    <p class=\"font-weight-bold mb-2\">CONTACTS</p>\n    <div class=\"d-flex justify-content-between\">\n      <p class=\"align-self-start app-text-second mb-2\">Address:</p>\n      <p class=\"align-self-end mb-2\">{{fullFamilyAddress}}</p>\n    </div>\n    <div class=\"d-flex justify-content-between\">\n      <p class=\"align-self-start app-text-second mb-2\">Prefered Contact:</p>\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.preferred_contact}}</p>\n    </div>\n    <div class=\"d-flex justify-content-between\">\n      <p class=\"align-self-start app-text-second mb-2\">Contact method:</p>\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.preferred_contact_method | titlecase}}</p>\n    </div>\n    <div class=\"d-flex justify-content-between\">\n      <p class=\"align-self-start app-text-second mb-2\">Home Phone Number:</p>\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.home_phone_number}}</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"row  no-gutters border-bottom py-3\">\n  <div class=\"col-12\">\n    <p class=\"font-weight-bold mb-2\">ADDITIONAL INFORMATION</p>\n    <div class=\"d-flex justify-content-between\">\n      <p class=\"align-self-start app-text-second mb-2\">Language Spoken at Home:</p>\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.language_spoken_at_home | titlecase}}</p>\n    </div>\n    <div class=\"d-flex justify-content-between\">\n      <p class=\"align-self-start app-text-second mb-2\">Family Rabbi:</p>\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.family_rabbi}}</p>\n    </div>\n    <div class=\"d-flex justify-content-between\">\n      <p class=\"align-self-start app-text-second mb-2\">Family Rabbi Phone:</p>\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.rabbi_phone_number}}</p>\n    </div>\n    <div class=\"d-flex justify-content-between\">\n      <p class=\"align-self-start app-text-second mb-2\">Family Shul:</p>\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.family_shul}}</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"row text-right mt-4\">\n  <div class=\"col-12\">\n    <button class=\"btn app-btn-primary px-4\" (click)=\"onEdit()\">Edit</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: FamilyProfileInfoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyProfileInfoViewComponent", function() { return FamilyProfileInfoViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/family/helper-family.service */ "./src/app/services/family/helper-family.service.ts");



var FamilyProfileInfoViewComponent = /** @class */ (function () {
    function FamilyProfileInfoViewComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
        this.isEditEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(FamilyProfileInfoViewComponent.prototype, "fullFamilyAddress", {
        get: function () {
            return this.helperFamilyService.getFullFamilyAddress(this.family);
        },
        enumerable: true,
        configurable: true
    });
    FamilyProfileInfoViewComponent.prototype.ngOnInit = function () {
    };
    FamilyProfileInfoViewComponent.prototype.onEdit = function () {
        this.isEditEmitter.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyProfileInfoViewComponent.prototype, "family", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyProfileInfoViewComponent.prototype, "isEditEmitter", void 0);
    FamilyProfileInfoViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-profile-info-view',
            template: __webpack_require__(/*! ./family-profile-info-view.component.html */ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component.html"),
            styles: [__webpack_require__(/*! ./family-profile-info-view.component.css */ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__["HelperFamilyService"]])
    ], FamilyProfileInfoViewComponent);
    return FamilyProfileInfoViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-profile-info/family-profile-info.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS1wcm9maWxlLWluZm8vZmFtaWx5LXByb2ZpbGUtaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-profile-info/family-profile-info.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"loader$ | async\"></app-spinner>\n<ng-container *ngIf=\"family\">\n  <!--Show profile info-->\n  <app-family-profile-info-view *ngIf=\"!isEditProfile\" [family]=\"family\"\n                                (isEditEmitter)=\"onEdit($event)\"></app-family-profile-info-view>\n  <!--End Show profile info-->\n\n  <!--Edit profile info-->\n  <form *ngIf=\"isEditProfile\" [formGroup]=\"familyForm\" (ngSubmit)=\"submit()\">\n\n    <!--Family Name-->\n    <div class=\"row no-gutters\">\n      <div class=\"col-10\">\n        <p [hidden]=\"isEditFamilyName\" class=\"app-text-extra-large font-weight-bold mb-0\">\n          {{familyForm.value.name}}</p>\n        <input type=\"text\"\n               class=\"form-control w-75\"\n               autofocus\n               formControlName=\"name\"\n               [hidden]=\"!isEditFamilyName\"\n               (blur)=\"isEditFamilyName = false\"\n               (keyup.enter)=\"isEditFamilyName = false\"\n               placeholder=\"Family Name\">\n      </div>\n\n      <div class=\"col-2 pt-1\">\n        <i class=\"fas fa-trash fa-sm app-text-second mr-4 app-cursor-pointer\"></i>\n        <i class=\"fas fa-pen fa-sm app-text-second app-cursor-pointer\" (click)=\"isEditFamilyName = true\"></i>\n      </div>\n    </div>\n    <!--End Family Name-->\n\n    <!--Address-->\n    <p class=\"font-weight-bold app-text-small mt-3 mb-1\">ADDRESS</p>\n    <div class=\"row no-gutters app-family-profile-section p-3\">\n\n      <div class=\"col-12 p-2\">\n        <div class=\"app-input-fill\">\n          <label class=\"app-input-label app-family-profile-input\">Home Address</label>\n          <input\n            type=\"text\"\n            class=\"app-input\"\n            formControlName=\"address\">\n        </div>\n      </div>\n\n      <div class=\"col-4 p-2\">\n        <div class=\"app-input-fill\">\n          <label class=\"app-input-label app-family-profile-input\">City</label>\n          <input\n            type=\"text\"\n            class=\"app-input\"\n            formControlName=\"city\">\n        </div>\n      </div>\n\n      <div class=\"col-4 p-2\">\n        <div class=\"app-input-fill\">\n          <label class=\"app-input-label app-family-profile-input\">State</label>\n          <input\n            type=\"text\"\n            class=\"app-input\"\n            formControlName=\"state\">\n        </div>\n      </div>\n\n      <div class=\"col-4 p-2\">\n        <div class=\"app-input-fill\">\n          <label class=\"app-input-label app-family-profile-input\">Zip Code</label>\n          <input\n            type=\"text\"\n            appNumbersValidator=\"true\" regexStr=\"^[0-9]+$\"\n            class=\"app-input\"\n            formControlName=\"zip\">\n        </div>\n      </div>\n\n    </div>\n    <!--End Address-->\n\n    <!--Contacts-->\n    <p class=\"font-weight-bold app-text-small mt-4 mb-1\">CONTACTS</p>\n    <div class=\"row no-gutters app-family-profile-section p-3\">\n\n      <div class=\"col-12 p-2\">\n        <div class=\"app-input-fill\">\n          <app-select-field\n                            [formControlName]=\"'preferred_contact'\"\n                            id=\"preferred_contact\"\n                            labelTitle=\"Preferred Contact\"\n                            [items]=\"preferredContacts\">\n          </app-select-field>\n        </div>\n      </div>\n\n      <div class=\"col-12 p-2\">\n        <div class=\"app-input-fill\">\n          <app-select-field class=\"app-text-capitalize\"\n                            [formControlName]=\"'preferred_contact_method'\"\n                            id=\"preferred_contact_method\"\n                            labelTitle=\"Preferred Contact Method\"\n                            [items]=\"contactMethod\">\n          </app-select-field>\n        </div>\n      </div>\n\n      <div class=\"col-12 p-2\">\n        <div class=\"app-input-fill\">\n          <label class=\"app-input-label app-family-profile-input\">Home Phone Number</label>\n          <input\n            type=\"text\"\n            appNumbersValidator=\"true\" regexStr=\"^[0-9]+$\"\n            class=\"app-input\"\n            formControlName=\"home_phone_number\">\n        </div>\n      </div>\n\n    </div>\n    <!--End Contacts-->\n\n    <!--Custom Fields-->\n    <p class=\"font-weight-bold app-text-small mt-4 mb-1\">CUSTOM FIELDS</p>\n    <div class=\"row no-gutters app-family-profile-section p-3\">\n\n      <div class=\"col-12 p-2\">\n        <div class=\"app-input-fill\">\n          <app-select-field class=\"app-text-capitalize\"\n                            [formControlName]=\"'language_spoken_at_home'\"\n                            id=\"language_spoken_at_home\"\n                            labelTitle=\"Language Spoken at Home\"\n                            [items]=\"language\">\n          </app-select-field>\n        </div>\n      </div>\n\n      <div class=\"col-6 p-2\">\n        <div class=\"app-input-fill\">\n          <label class=\"app-input-label app-family-profile-input\">Family Rabbi</label>\n          <input\n            type=\"text\"\n            class=\"app-input\"\n            formControlName=\"family_rabbi\">\n        </div>\n      </div>\n\n      <div class=\"col-6 p-2\">\n        <div class=\"app-input-fill\">\n          <label class=\"app-input-label app-family-profile-input\">Rabbi Phone number</label>\n          <input\n            type=\"text\"\n            appNumbersValidator=\"true\" regexStr=\"^[0-9]+$\"\n            class=\"app-input\"\n            formControlName=\"rabbi_phone_number\">\n        </div>\n      </div>\n\n      <div class=\"col-12 p-2\">\n        <div class=\"app-input-fill\">\n          <label class=\"app-input-label app-family-profile-input\">Family Shul</label>\n          <input\n            type=\"text\"\n            class=\"app-input\"\n            formControlName=\"family_shul\">\n        </div>\n      </div>\n\n    </div>\n    <!--End Custom Fields-->\n\n    <div class=\"row text-right mt-4\">\n      <div class=\"col-12\">\n        <button class=\"btn app-btn-warning px-4 mr-2\" (click)=\"onEdit(false); $event.preventDefault()\">Cancel</button>\n        <button type=\"submit\" [disabled]=\"!familyForm.valid\" class=\"btn app-btn-primary px-4\">Save</button>\n      </div>\n    </div>\n  </form>\n  <!--End Edit profile info-->\n</ng-container>"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-profile-info/family-profile-info.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: FamilyProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyProfileInfoComponent", function() { return FamilyProfileInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _services_family_family_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/family/family.service */ "./src/app/services/family/family.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");






var FamilyProfileInfoComponent = /** @class */ (function () {
    function FamilyProfileInfoComponent(familyService, loaderService, formBuilder, familyPersonService) {
        this.familyService = familyService;
        this.loaderService = loaderService;
        this.formBuilder = formBuilder;
        this.familyPersonService = familyPersonService;
        this.isEditProfile = false;
        this.isEditFamilyName = false;
        this.preferredContacts = [];
        this.language = ['english', 'hebrew'];
        this.contactMethod = ['email', 'cell phone'];
    }
    FamilyProfileInfoComponent.prototype.ngOnInit = function () {
        this.loader$ = this.loaderService.loader;
        this.familyForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            preferred_contact: [null],
            preferred_contact_method: [null],
            home_phone_number: [null],
            address: [null],
            city: [null],
            state: [null],
            zip: [null],
            language_spoken_at_home: [null],
            family_rabbi: [null],
            rabbi_phone_number: [null],
            family_shul: [null],
        });
        this.getFamily(this.familyId);
        this.getPreferredContacts();
    };
    FamilyProfileInfoComponent.prototype.getFamily = function (familyId) {
        var _this = this;
        this.familyService.family.subscribe(function (family) {
            _this.family = family;
            var familyInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.family.family_info);
            _this.familyForm.patchValue(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ name: family.name }, familyInfo));
        });
        this.familyService.getOne(familyId);
    };
    FamilyProfileInfoComponent.prototype.getPreferredContacts = function () {
        var _this = this;
        this.familyPersonService.getByFamilyIdRequest(this.familyId).subscribe(function (res) {
            res.map(function (item) {
                _this.preferredContacts.push(item.person.first_name + (item.person.last_name ? ' ' + item.person.last_name : ''));
            });
        });
    };
    FamilyProfileInfoComponent.prototype.submit = function () {
        if (this.familyForm.valid) {
            this.isEditProfile = false;
            this.familyService.update({
                family_id: this.familyId,
                name: this.familyForm.value.name,
                family_info: {
                    preferred_contact: this.familyForm.value.preferred_contact,
                    preferred_contact_method: this.familyForm.value.preferred_contact_method,
                    home_phone_number: this.familyForm.value.home_phone_number,
                    address: this.familyForm.value.address,
                    city: this.familyForm.value.city,
                    state: this.familyForm.value.state,
                    zip: this.familyForm.value.zip,
                    language_spoken_at_home: this.familyForm.value.language_spoken_at_home,
                    family_rabbi: this.familyForm.value.family_rabbi,
                    rabbi_phone_number: this.familyForm.value.rabbi_phone_number,
                    family_shul: this.familyForm.value.family_shul,
                },
            });
        }
    };
    FamilyProfileInfoComponent.prototype.onEdit = function (value) {
        this.isEditProfile = value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyProfileInfoComponent.prototype, "familyId", void 0);
    FamilyProfileInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-profile-info',
            template: __webpack_require__(/*! ./family-profile-info.component.html */ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info.component.html"),
            styles: [__webpack_require__(/*! ./family-profile-info.component.css */ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_service__WEBPACK_IMPORTED_MODULE_3__["FamilyService"],
            _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__["FamilyPersonService"]])
    ], FamilyProfileInfoComponent);
    return FamilyProfileInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-profile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-profile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-profile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-profile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-family-page-header [titleHeader]=\"'FAMILY PROFILE'\"></app-family-page-header>\n\n<div class=\"row no-gutters\">\n  <div class=\"col-3 app-family-info-wrap border-left p-4\">\n    <app-family-profile-info [familyId]=\"familyId\"></app-family-profile-info>\n  </div>\n  <div class=\"col-9\">\n    <app-family-view [familyId]=\"familyId\"></app-family-view>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: FamilyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyProfileComponent", function() { return FamilyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FamilyProfileComponent = /** @class */ (function () {
    function FamilyProfileComponent(route) {
        this.route = route;
    }
    FamilyProfileComponent.prototype.ngOnInit = function () {
        this.getFamilyId();
    };
    FamilyProfileComponent.prototype.getFamilyId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.familyId = params['id'];
        });
    };
    FamilyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-profile',
            template: __webpack_require__(/*! ./family-profile.component.html */ "./src/app/modules/family/family-profile/family-profile.component.html"),
            styles: [__webpack_require__(/*! ./family-profile.component.css */ "./src/app/modules/family/family-profile/family-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FamilyProfileComponent);
    return FamilyProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWRvY3VtZW50cy9mYW1pbHktdmlldy1kb2N1bWVudHMtbmF2L2ZhbWlseS12aWV3LWRvY3VtZW50cy1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-bottom\">\n  <!--Title-->\n  <div class=\"col-6 d-flex align-items-end\">\n    <p class=\"font-weight-bold mb-0\">{{familyName | uppercase}} MEMBERS</p>\n  </div>\n  <!--Search Filter-->\n  <div class=\"col-sm-6\">\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-10 d-flex justify-content-end\">\n        <app-search-field [ngModel]=\"queryParams.query\" (ngModelChange)=\"setSearchQuery($event)\" type=\"gray\" class=\"mr-3\"></app-search-field>\n        <app-search-filter-btn class=\"mr-3\"></app-search-filter-btn>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: FamilyViewDocumentsNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyViewDocumentsNavComponent", function() { return FamilyViewDocumentsNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_family_query_params_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/family/family-query-params.service */ "./src/app/services/family/family-query-params.service.ts");



var FamilyViewDocumentsNavComponent = /** @class */ (function () {
    function FamilyViewDocumentsNavComponent(familyQueryParamsService) {
        this.familyQueryParamsService = familyQueryParamsService;
    }
    FamilyViewDocumentsNavComponent.prototype.ngOnInit = function () {
        this.initQueryParams();
    };
    FamilyViewDocumentsNavComponent.prototype.initQueryParams = function () {
        var _this = this;
        this.familyQueryParamsService.familyQueryParams.subscribe(function (params) {
            _this.queryParams = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params);
        });
    };
    FamilyViewDocumentsNavComponent.prototype.setSearchQuery = function (query) {
        this.familyQueryParamsService.setQueryParams(query);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FamilyViewDocumentsNavComponent.prototype, "familyName", void 0);
    FamilyViewDocumentsNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-view-documents-nav',
            template: __webpack_require__(/*! ./family-view-documents-nav.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component.html"),
            styles: [__webpack_require__(/*! ./family-view-documents-nav.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_query_params_service__WEBPACK_IMPORTED_MODULE_2__["FamilyQueryParamsService"]])
    ], FamilyViewDocumentsNavComponent);
    return FamilyViewDocumentsNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWRvY3VtZW50cy9mYW1pbHktdmlldy1kb2N1bWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-family-view-documents-nav [familyName]=\"familyName\"></app-family-view-documents-nav>\n<div class=\"mt-4\">\n  <app-data-table [cols]=\"cols\" tableType='table-striped'\n                  (searchQueryEmitter)=\"onSearchQuery($event)\">\n    <tbody>\n    <tr>\n      <td nowrap>Untitled Document</td>\n      <td nowrap>Registration Form</td>\n      <td>PDF</td>\n      <td>05-07-2019</td>\n      <td>Sara Fishman</td>\n      <td class=\"text-right\">\n        <i class=\"fas fa-download app-text-second app-cursor-pointer mr-4\"></i>\n        <i class=\"fas fa-pen app-text-second app-cursor-pointer mr-5\"></i>\n      </td>\n    </tr>\n    <tr>\n      <td nowrap>Fishman Docs</td>\n      <td nowrap>Birth Certificate</td>\n      <td>PNG</td>\n      <td>12-06-2019</td>\n      <td>Sara Fishman</td>\n      <td class=\"text-right\">\n        <i class=\"fas fa-download app-text-second app-cursor-pointer mr-4\"></i>\n        <i class=\"fas fa-pen app-text-second app-cursor-pointer mr-5\"></i>\n      </td>\n    </tr>\n    <tr>\n      <td nowrap>Final Doc</td>\n      <td nowrap>Immunization Records</td>\n      <td>Excel</td>\n      <td>05-29-2019</td>\n      <td>Sara Fishman</td>\n      <td class=\"text-right\">\n        <i class=\"fas fa-download app-text-second app-cursor-pointer mr-4\"></i>\n        <i class=\"fas fa-pen app-text-second app-cursor-pointer mr-5\"></i>\n      </td>\n    </tr>\n    </tbody>\n  </app-data-table>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: FamilyViewDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyViewDocumentsComponent", function() { return FamilyViewDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/family/family.service */ "./src/app/services/family/family.service.ts");



var FamilyViewDocumentsComponent = /** @class */ (function () {
    function FamilyViewDocumentsComponent(familyService) {
        this.familyService = familyService;
        this.cols = [
            {
                id: 'title',
                type: 'text',
                title: 'TITLE',
                sort: true,
                search: true,
            },
            {
                id: 'type',
                type: 'text',
                title: 'TYPE',
                sort: true,
                search: true,
            },
            {
                id: 'format',
                type: 'text',
                title: 'FORMAT',
                sort: true,
                search: true,
            },
            {
                id: 'uploaded_date',
                type: 'date',
                title: 'UPLOADED DATE',
                sort: true,
                search: true,
            },
            {
                id: 'student',
                type: 'text',
                title: 'STUDENT',
                sort: true,
                search: true,
            },
            {
                id: '',
                type: '',
                title: '',
                sort: false,
                search: false,
                width: '250px'
            },
        ];
    }
    FamilyViewDocumentsComponent.prototype.ngOnInit = function () {
        this.getFamilyName();
    };
    FamilyViewDocumentsComponent.prototype.getFamilyName = function () {
        var _this = this;
        this.familyService.family.subscribe(function (res) {
            _this.familyName = res.name;
        });
    };
    FamilyViewDocumentsComponent.prototype.onSearchQuery = function (event) {
        // console.log(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FamilyViewDocumentsComponent.prototype, "familyId", void 0);
    FamilyViewDocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-view-documents',
            template: __webpack_require__(/*! ./family-view-documents.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents.component.html"),
            styles: [__webpack_require__(/*! ./family-view-documents.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]])
    ], FamilyViewDocumentsComponent);
    return FamilyViewDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWFkZC1tZW1iZXItbW9kYWwvZmFtaWx5LWFkZC1leGlzdC1wZXJzb24vZmFtaWx5LWFkZC1leGlzdC1wZXJzb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"persons.length\">\n  <form [formGroup]=\"familyPersonForm\" (ngSubmit)=\"addFamilyPerson()\">\n\n    <div class=\"row pb-5\">\n      <div class=\"col-8\">\n        <app-select-multi-search-field\n          bindValue=\"id\"\n          bindLabel=\"name\"\n          [formControlName]=\"'members'\"\n          labelTitle=\"\"\n          [isInvalid]=\"familyPersonForm.get('members').invalid && familyPersonForm.get('members').touched\"\n          [items]=\"persons\"\n        >\n        </app-select-multi-search-field>\n        <div\n          class=\"field-has-error\"\n          *ngIf=\"familyPersonForm.get('members').invalid && familyPersonForm.get('members').touched && familyPersonForm.get('members')['errors']['required']\"\n        >\n          Members is required\n        </div>\n      </div>\n\n      <div class=\"col-4\">\n        <app-select-field class=\"app-text-capitalize\"\n\n          [formControlName]=\"'role'\"\n          labelTitle=\"Roles\"\n          [isInvalid]=\"familyPersonForm.get('role').invalid && familyPersonForm.get('role').touched\"\n          [items]=\"roles\"\n        >\n        </app-select-field>\n        <div\n          class=\"field-has-error\"\n          *ngIf=\"familyPersonForm.get('role').invalid && familyPersonForm.get('role').touched && familyPersonForm.get('role')['errors']['required']\"\n        >\n          Role is required\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12 text-right\">\n        <button (click)=\"onCloseAddFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n          Cancel\n        </button>\n\n        <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyPersonForm.invalid\">\n          Add Account\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: FamilyAddExistPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyAddExistPersonComponent", function() { return FamilyAddExistPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_person_person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/person/person.service */ "./src/app/services/person/person.service.ts");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");






var FamilyAddExistPersonComponent = /** @class */ (function () {
    function FamilyAddExistPersonComponent(personService, familyPersonService, fb) {
        this.personService = personService;
        this.familyPersonService = familyPersonService;
        this.fb = fb;
        this.closeModalAddFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.persons = [];
        this.roles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["familyRoles"];
        this.initFamilyPersonForm();
    }
    FamilyAddExistPersonComponent.prototype.ngOnInit = function () {
        this.getPersons();
    };
    FamilyAddExistPersonComponent.prototype.initFamilyPersonForm = function () {
        this.familyPersonForm = this.fb.group({
            members: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: [this.roles[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    FamilyAddExistPersonComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService.getPersons()
            .subscribe(function (res) {
            res.map(function (person) {
                _this.persons.push({
                    id: person.id,
                    name: person.first_name + " " + person.last_name,
                });
            });
        });
    };
    FamilyAddExistPersonComponent.prototype.addFamilyPerson = function () {
        var _this = this;
        var data = {
            family_id: this.family.family_id,
            family_name: this.family.name,
            id_person: 0,
            person_role: this.familyPersonForm.value.role,
        };
        this.familyPersonForm.value.members.map(function (member) {
            data.id_person = member.id;
            _this.familyPersonService.add(data);
        });
        this.onCloseAddFamilyMemberModal();
    };
    FamilyAddExistPersonComponent.prototype.onCloseAddFamilyMemberModal = function () {
        this.closeModalAddFamilyMember.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyAddExistPersonComponent.prototype, "closeModalAddFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyAddExistPersonComponent.prototype, "family", void 0);
    FamilyAddExistPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-add-exist-person',
            template: __webpack_require__(/*! ./family-add-exist-person.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component.html"),
            styles: [__webpack_require__(/*! ./family-add-exist-person.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_person_person_service__WEBPACK_IMPORTED_MODULE_4__["PersonService"],
            _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__["FamilyPersonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FamilyAddExistPersonComponent);
    return FamilyAddExistPersonComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWFkZC1tZW1iZXItbW9kYWwvZmFtaWx5LWFkZC1tZW1iZXItbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal [width]=\"'45%'\" [title]=\"'Add ' + family?.name + ' Members'\" (closeModal)=\"onCloseAddFamilyMemberModal()\">\n  <div class=\"row pt-2 pb-3\">\n    <div class=\"col\">\n      <nav class=\"navbar navbar-expand navbar-light bg-white p-0\">\n        <div class=\"collapse justify-content-left navbar-collapse\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item mr-2\">\n              <a class=\"nav-link app-nav-link\"\n                 [ngClass]=\"{'app-nav-link-active' : activeTab==='exist'}\"\n                 (click)=\"setActiveTab('exist')\">\n                Add Existing\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link app-nav-link\"\n                 [ngClass]=\"{'app-nav-link-active' : activeTab==='new'}\"\n                 (click)=\"setActiveTab('new')\">\n                Create New\n              </a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n\n  <app-family-add-exist-person *ngIf=\"activeTab==='exist'\" [family]=\"family\"\n                               (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\">\n  </app-family-add-exist-person>\n  <app-family-add-new-person *ngIf=\"activeTab==='new'\"\n                             [family]=\"family\"\n                             (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\">\n  </app-family-add-new-person>\n</app-modal>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: FamilyAddMemberModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyAddMemberModalComponent", function() { return FamilyAddMemberModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/family/family.service */ "./src/app/services/family/family.service.ts");



var FamilyAddMemberModalComponent = /** @class */ (function () {
    function FamilyAddMemberModalComponent(familyService) {
        this.familyService = familyService;
        this.closeModalAddFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeTab = 'exist';
    }
    FamilyAddMemberModalComponent.prototype.ngOnInit = function () {
        this.getFamily();
    };
    FamilyAddMemberModalComponent.prototype.getFamily = function () {
        var _this = this;
        this.familyService.family.subscribe(function (res) {
            _this.family = res;
        });
    };
    FamilyAddMemberModalComponent.prototype.onCloseAddFamilyMemberModal = function () {
        this.closeModalAddFamilyMember.emit(true);
    };
    FamilyAddMemberModalComponent.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyAddMemberModalComponent.prototype, "closeModalAddFamilyMember", void 0);
    FamilyAddMemberModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-add-member-modal',
            template: __webpack_require__(/*! ./family-add-member-modal.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component.html"),
            styles: [__webpack_require__(/*! ./family-add-member-modal.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_service__WEBPACK_IMPORTED_MODULE_2__["FamilyService"]])
    ], FamilyAddMemberModalComponent);
    return FamilyAddMemberModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWFkZC1tZW1iZXItbW9kYWwvZmFtaWx5LWFkZC1uZXctY2hpbGQvZmFtaWx5LWFkZC1uZXctY2hpbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"!familyPersons.length\"></app-spinner>\n<form [formGroup]=\"familyChildForm\" (ngSubmit)=\"addFamilyChild()\" *ngIf=\"familyPersons.length\">\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{role | uppercase}} INFO</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-3\"><img src=\"assets/images/temp/person-foto-placeholder.png\" width=\"70%\"></div>\n    <div class=\"col-9 mt-3\">\n\n      <div class=\"row no-gutters px-1\">\n        <div class=\"col-12 text-right\" style=\"position: absolute\">\n          <app-checkbox-field\n            label=\"Adopted\"\n            id=\"adopted\"\n            formControlName=\"adopted\"\n            [isInvalid]=\"familyChildForm.get('adopted').invalid && familyChildForm.get('adopted').touched\"\n          >\n          </app-checkbox-field>\n        </div>\n      </div>\n\n      <div class=\"row no-gutters mt-3 px-1\" *ngIf=\"familyPersons.length\">\n        <div class=\"col-12\">\n          <app-select-multi-search-field\n            bindValue=\"id\"\n            bindLabel=\"name\"\n            [formControlName]=\"'parents'\"\n            labelTitle=\"Parents\"\n            [isInvalid]=\"familyChildForm.get('parents').invalid && familyChildForm.get('parents').touched\"\n            [items]=\"familyPersons\"\n          >\n          </app-select-multi-search-field>\n        </div>\n      </div>\n\n      <div class=\"row no-gutters mt-3\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'first_name'\"\n                           id='first_name'\n                           label=\"First Name\"\n                           [isInvalid]=\"familyChildForm.get('first_name').invalid && familyChildForm.get('first_name').touched\">\n          </app-input-field>\n          <div class=\"field-has-error app-position-relative\"\n               *ngIf=\"familyChildForm.get('first_name').invalid && familyChildForm.get('first_name').touched && familyChildForm.get('first_name')['errors']['required']\"\n          >First Name is required\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\n        </div>\n      </div>\n      <div class=\"row no-gutters pt-2\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'legal_name'\" id='legal_name' label=\"Legal Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <div class=\"input-group app-input-container\" [ngClass]=\"{'app-input-fill': familyChildForm.value.dob}\">\n            <label for=\"d1\" class=\"app-input-label\">Date of Birth</label>\n            <input class=\"app-input app-family-input-datepicker form-control\"\n                   placeholder=\"Date of Birth\"\n                   name=\"dp1\"\n                   [formControlName]=\"'dob'\"\n                   [minDate]=\"minDate\"\n                   [maxDate]=\"maxDate\"\n                   ngbDatepicker\n                   id=\"d1\"\n                   #d1=\"ngbDatepicker\"\n            >\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                <i class=\"far fa-calendar\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'hebrew_dob'\" id='hebrew_dob'\n                           label=\"Hebrew Date of Birth\"></app-input-field>\n        </div>\n      </div>\n      <div class=\"row no-gutters pt-2\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'hebrew_full_name'\" id='hebrew_full_name'\n                           label=\"Full Hebrew Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 d-flex justify-content-between align-items-center\">\n          <label class=\"app-radio-container ml-1 mb-0\">Son\n            <input type=\"radio\"\n                   [name]=\"'gender'\"\n                   [value]=\"GENDER.MALE\"\n                   [formControlName]=\"'gender'\">\n            <span class=\"app-radio-checkmark\"></span>\n          </label>\n          <label class=\"app-radio-container ml-1 mb-0\">Daughter\n            <input type=\"radio\"\n                   [name]=\"'gender'\"\n                   [value]=\"GENDER.FEMALE\"\n                   [formControlName]=\"'gender'\">\n            <span class=\"app-radio-checkmark\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--STUDENT INFO-->\n  <ng-container *ngIf=\"role === FAMILY_ROLES.student\" formGroupName=\"person_info\">\n    <!--EDUCATION-->\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">EDUCATION</p>\n    <div class=\"row no-gutters app-family-card-body p-3\">\n      <div class=\"col-12\">\n\n        <div class=\"row no-gutters\">\n          <div class=\"col-3 px-1\">\n            <app-input-field [formControlName]=\"'student_current_grade'\" id='current_grade'\n                             label=\"Current Grade\"></app-input-field>\n          </div>\n          <div class=\"col-3 px-1\">\n            <app-input-field [formControlName]=\"'student_start_grade'\" id='start_grade' label=\"Start Grade\"></app-input-field>\n          </div>\n          <div class=\"col-6 px-1\">\n            <app-input-field [formControlName]=\"'student_current_school'\" id='current_school'\n                             label=\"Current School\"></app-input-field>\n          </div>\n        </div>\n\n        <div class=\"row no-gutters pt-2\">\n          <div class=\"col-12 px-1\">\n            <app-input-field [formControlName]=\"'student_previous_school'\" id='previous_school'\n                             label=\"Previous School Attended\"></app-input-field>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n    <!--MEDICAL-->\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">MEDICAL</p>\n    <div class=\"row no-gutters app-family-card-body p-3\">\n      <div class=\"col-12\">\n\n        <div class=\"row no-gutters\">\n          <div class=\"col-4 px-1\">\n            <app-input-field [formControlName]=\"'student_medical_conditions'\" id='medical_conditions'\n                             label=\"Medical Conditions\"></app-input-field>\n          </div>\n          <div class=\"col-4 px-1\">\n            <app-input-field [formControlName]=\"'student_allergies'\" id='allergies' label=\"Allergies\"></app-input-field>\n          </div>\n          <div class=\"col-4 px-1\">\n            <app-input-field [formControlName]=\"'student_medications'\" id='medications'\n                             label=\"Medications\"></app-input-field>\n          </div>\n        </div>\n\n        <div class=\"row no-gutters pt-2\">\n          <div class=\"col-12 px-1\">\n            <app-input-field [formControlName]=\"'student_physician'\" id='physician'\n                             label=\"Physician\"></app-input-field>\n          </div>\n        </div>\n\n        <div class=\"row no-gutters pt-2\">\n          <div class=\"col-2 px-1\">\n            <app-input-field [formControlName]=\"'student_physician_country'\" id='country'\n                             label=\"Country\"></app-input-field>\n          </div>\n          <div class=\"col-6 px-1\">\n            <app-input-field [formControlName]=\"'student_physician_address'\" id='address' label=\"Address\"></app-input-field>\n          </div>\n          <div class=\"col-4 px-1\">\n            <app-input-field [formControlName]=\"'student_physician_phone'\" id='phone'\n                             label=\"Phone\"></app-input-field>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!--EMERGENCY CONTACT-->\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">EMERGENCY CONTACT</p>\n    <div class=\"row no-gutters app-family-card-body p-3\">\n      <div class=\"col-12 px-1\">\n        <p class=\"app-text-small app-text-second mb-2\">FIRST EMERGENCY CONTACT</p>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'student_first_contact_relationship'\" id='first_emergency_contact'\n                         label=\"Emergency Contact\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'student_first_contact_full_name'\" id='first_full_name' label=\"Full Name\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'student_first_contact_cell_phone'\" id='first_cell_phone'\n                         label=\"Cell Phone\"></app-input-field>\n      </div>\n    </div>\n    <div class=\"row no-gutters app-family-card-body p-3 mt-2\">\n      <div class=\"col-12 px-1\">\n        <p class=\"app-text-small app-text-second mb-2\">SECOND EMERGENCY CONTACT</p>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'student_second_contact_full_name'\" id='second_full_name'\n                         label=\"Full name\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'student_second_contact_relationship'\" id='relationship_to_student' label=\"Relationship to student\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'student_second_contact_cell_phone'\" id='second_cell_phone'\n                         label=\"Cell Phone\"></app-input-field>\n      </div>\n    </div>\n\n\n  </ng-container>\n  <!--END STUDENT INFO-->\n\n  <div class=\"row pt-3\">\n    <div class=\"col-12 text-right\">\n      <button (click)=\"onCloseAddFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n        Cancel\n      </button>\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyChildForm.invalid\">\n        Add Account\n      </button>\n    </div>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: FamilyAddNewChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyAddNewChildComponent", function() { return FamilyAddNewChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_person_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/person/person.service */ "./src/app/services/person/person.service.ts");
/* harmony import */ var _enums_gender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../enums/gender */ "./src/app/enums/gender.ts");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var FamilyAddNewChildComponent = /** @class */ (function () {
    function FamilyAddNewChildComponent(fb, personService, familyPersonService, parserFormatter) {
        this.fb = fb;
        this.personService = personService;
        this.familyPersonService = familyPersonService;
        this.parserFormatter = parserFormatter;
        this.closeModalAddFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.date = new Date();
        this.familyPersons = [];
        this.GENDER = _enums_gender__WEBPACK_IMPORTED_MODULE_4__["Gender"];
        this.FAMILY_ROLES = _enums_family_roles__WEBPACK_IMPORTED_MODULE_6__["FamilyRoles"];
        this.initFamilyNewChildForm();
    }
    Object.defineProperty(FamilyAddNewChildComponent.prototype, "minDate", {
        get: function () {
            return { day: 1, month: 1, year: this.date.getFullYear() - 100 };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyAddNewChildComponent.prototype, "maxDate", {
        get: function () {
            return { day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear() };
        },
        enumerable: true,
        configurable: true
    });
    FamilyAddNewChildComponent.prototype.ngOnInit = function () {
        this.getFamilyPersons();
    };
    FamilyAddNewChildComponent.prototype.initFamilyNewChildForm = function () {
        var controlsConfig = {
            adopted: [null],
            parents: [null],
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middle_name: [null],
            last_name: [null],
            legal_name: [null],
            dob: [null],
            hebrew_dob: [null],
            hebrew_full_name: [null],
            gender: [null],
            person_info: this.fb.group({
                student_current_grade: [null],
                student_start_grade: [null],
                student_current_school: [null],
                student_previous_school: [null],
                student_medical_conditions: [null],
                student_allergies: [null],
                student_medications: [null],
                student_physician: [null],
                student_physician_country: [null],
                student_physician_address: [null],
                student_physician_phone: [null],
                student_first_contact_relationship: [null],
                student_first_contact_full_name: [null],
                student_first_contact_cell_phone: [null],
                student_second_contact_full_name: [null],
                student_second_contact_relationship: [null],
                student_second_contact_cell_phone: [null],
            })
        };
        this.familyChildForm = this.fb.group(controlsConfig);
    };
    FamilyAddNewChildComponent.prototype.getFamilyPersons = function () {
        var _this = this;
        this.familyPersonService.getAllRequest()
            .subscribe(function (res) {
            res.map(function (familyPerson) {
                _this.familyPersons.push({
                    id: familyPerson.person.id,
                    name: familyPerson.person.first_name + " " + familyPerson.person.last_name,
                });
            });
        });
    };
    FamilyAddNewChildComponent.prototype.addFamilyChild = function () {
        var _this = this;
        if (this.familyChildForm.invalid)
            return;
        var data = {
            first_name: this.familyChildForm.value.first_name,
            middle_name: this.familyChildForm.value.middle_name,
            last_name: this.familyChildForm.value.last_name,
            legal_name: this.familyChildForm.value.legal_name,
            dob: this.parserFormatter.format(this.familyChildForm.value.dob) || null,
            hebrew_dob: this.familyChildForm.value.hebrew_dob,
            hebrew_full_name: this.familyChildForm.value.hebrew_full_name,
            gender: this.familyChildForm.value.gender,
        };
        this.personService.addPerson(data).subscribe(function (res) {
            if (res.created) {
                _this.addFamilyPerson(res.data.id);
            }
        }, function (error) { return console.log(error); });
        this.onCloseAddFamilyMemberModal();
    };
    FamilyAddNewChildComponent.prototype.addFamilyPerson = function (personId) {
        var data = {
            parents: this.familyChildForm.value.parents ? this.familyChildForm.value.parents.map(function (item) { return item.id; }) : [],
            family_id: this.family.family_id,
            family_name: this.family.name,
            id_person: personId,
            person_role: this.role,
            adopted: this.familyChildForm.value.adopted ? 1 : 0,
        };
        if (this.role === this.FAMILY_ROLES.student) {
            data['person_info'] = this.familyChildForm.value.person_info;
        }
        this.familyPersonService.add(data);
    };
    FamilyAddNewChildComponent.prototype.onCloseAddFamilyMemberModal = function () {
        this.closeModalAddFamilyMember.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyAddNewChildComponent.prototype, "closeModalAddFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyAddNewChildComponent.prototype, "family", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FamilyAddNewChildComponent.prototype, "role", void 0);
    FamilyAddNewChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-add-new-child',
            template: __webpack_require__(/*! ./family-add-new-child.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component.html"),
            styles: [__webpack_require__(/*! ./family-add-new-child.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_person_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"],
            _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__["FamilyPersonService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateParserFormatter"]])
    ], FamilyAddNewChildComponent);
    return FamilyAddNewChildComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWFkZC1tZW1iZXItbW9kYWwvZmFtaWx5LWFkZC1uZXctZ3JhbmRwYXJlbnRzL2ZhbWlseS1hZGQtbmV3LWdyYW5kcGFyZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"familyGrandParentForm\" (ngSubmit)=\"addFamilyParent()\">\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{role | uppercase}} INFO</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-3\"><img src=\"assets/images/temp/person-foto-placeholder.png\" width=\"70%\"></div>\n    <div class=\"col-9 mt-3\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'first_name'\"\n                           id='first_name' label=\"First Name\"\n                           [isInvalid]=\"familyGrandParentForm.get('first_name').invalid && familyGrandParentForm.get('first_name').touched\">\n          </app-input-field>\n          <div class=\"field-has-error app-position-relative\"\n               *ngIf=\"familyGrandParentForm.get('first_name').invalid && familyGrandParentForm.get('first_name').touched && familyGrandParentForm.get('first_name')['errors']['required']\"\n          >\n            First Name is required\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"app-text-small font-weight-bold mb-1 mt-3\">ADDRESS</p>\n  <div class=\"app-family-card-body p-3\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'country'\" id='country' label=\"Country\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'state'\" id='state' label=\"State\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'city'\" id='city'\n                         label=\"City\"></app-input-field>\n      </div>\n    </div>\n    <div class=\"row no-gutters pt-2\">\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'address'\" id='address' label=\"Address\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'zip'\" id='zip' label=\"ZIP\"></app-input-field>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"app-text-small font-weight-bold mb-1 mt-3\">CONTACTS</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-6 px-1\">\n      <app-input-field [formControlName]=\"'contact_phone'\" id='contact_phone' label=\"Phone number\"></app-input-field>\n    </div>\n    <div class=\"col-6 px-1\">\n      <app-input-field [formControlName]=\"'contact_email'\" type='email' id='contact_email'\n                       label=\"Email\"></app-input-field>\n    </div>\n  </div>\n\n  <div class=\"row pt-3\">\n    <div class=\"col-12 text-right\">\n      <button (click)=\"onCloseAddFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n        Cancel\n      </button>\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyGrandParentForm.invalid\">\n        Add Account\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: FamilyAddNewGrandparentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyAddNewGrandparentsComponent", function() { return FamilyAddNewGrandparentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _services_person_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/person/person.service */ "./src/app/services/person/person.service.ts");
/* harmony import */ var _enums_gender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../enums/gender */ "./src/app/enums/gender.ts");







var FamilyAddNewGrandparentsComponent = /** @class */ (function () {
    function FamilyAddNewGrandparentsComponent(familyPersonService, personService, fb) {
        this.familyPersonService = familyPersonService;
        this.personService = personService;
        this.fb = fb;
        this.closeModalAddFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_4__["FamilyRoles"];
        this.gender = _enums_gender__WEBPACK_IMPORTED_MODULE_6__["Gender"];
        this.initFamilyNewPersonForm();
    }
    FamilyAddNewGrandparentsComponent.prototype.ngOnInit = function () {
    };
    FamilyAddNewGrandparentsComponent.prototype.initFamilyNewPersonForm = function () {
        this.familyGrandParentForm = this.fb.group({
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            middle_name: [null],
            last_name: [null],
            country: [null],
            state: [null],
            city: [null],
            address: [null],
            zip: [null],
            contact_phone: [null],
            contact_email: [null],
        });
    };
    FamilyAddNewGrandparentsComponent.prototype.addFamilyParent = function () {
        var _this = this;
        if (this.familyGrandParentForm.invalid)
            return;
        var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.familyGrandParentForm.value, { gender: this.getGenderByRole(this.role) });
        this.personService.addPerson(data).subscribe(function (res) {
            if (res.created) {
                _this.addFamilyPerson(res.data.id);
            }
        }, function (error) { return console.log(error); });
        this.onCloseAddFamilyMemberModal();
    };
    FamilyAddNewGrandparentsComponent.prototype.addFamilyPerson = function (personId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    family_id: this.family.family_id,
                    family_name: this.family.name,
                    id_person: personId,
                    person_role: this.role,
                };
                this.familyPersonService.add(data);
                return [2 /*return*/];
            });
        });
    };
    FamilyAddNewGrandparentsComponent.prototype.onCloseAddFamilyMemberModal = function () {
        this.closeModalAddFamilyMember.emit(true);
    };
    FamilyAddNewGrandparentsComponent.prototype.getGenderByRole = function (role) {
        switch (role) {
            case this.familyRoles.grandfather:
                return this.gender.MALE;
            case this.familyRoles.grandmother:
                return this.gender.FEMALE;
            default:
                return null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyAddNewGrandparentsComponent.prototype, "closeModalAddFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyAddNewGrandparentsComponent.prototype, "family", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FamilyAddNewGrandparentsComponent.prototype, "role", void 0);
    FamilyAddNewGrandparentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-add-new-grandparents',
            template: __webpack_require__(/*! ./family-add-new-grandparents.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component.html"),
            styles: [__webpack_require__(/*! ./family-add-new-grandparents.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_person_service__WEBPACK_IMPORTED_MODULE_2__["FamilyPersonService"],
            _services_person_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FamilyAddNewGrandparentsComponent);
    return FamilyAddNewGrandparentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component.css":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component.css ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWFkZC1tZW1iZXItbW9kYWwvZmFtaWx5LWFkZC1uZXctcGFyZW50LXNpYmxpbmcvZmFtaWx5LWFkZC1uZXctcGFyZW50LXNpYmxpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"familySiblingForm\" (ngSubmit)=\"addFamilySibling()\">\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{role | uppercase}} INFO</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-12\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'first_name'\"\n                           id='first_name' label=\"First Name\"\n                           [isInvalid]=\"familySiblingForm.get('first_name').invalid && familySiblingForm.get('first_name').touched\">\n          </app-input-field>\n          <div class=\"field-has-error app-position-relative\"\n               *ngIf=\"familySiblingForm.get('first_name').invalid && familySiblingForm.get('first_name').touched && familySiblingForm.get('first_name')['errors']['required']\"\n          >\n            First Name is required\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row pt-3\">\n    <div class=\"col-12 text-right\">\n      <button (click)=\"onCloseAddFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n        Cancel\n      </button>\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familySiblingForm.invalid\">\n        Add Account\n      </button>\n    </div>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: FamilyAddNewParentSiblingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyAddNewParentSiblingComponent", function() { return FamilyAddNewParentSiblingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _enums_gender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../enums/gender */ "./src/app/enums/gender.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");
/* harmony import */ var _services_person_person_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/person/person.service */ "./src/app/services/person/person.service.ts");







var FamilyAddNewParentSiblingComponent = /** @class */ (function () {
    function FamilyAddNewParentSiblingComponent(familyPersonService, personService, fb) {
        this.familyPersonService = familyPersonService;
        this.personService = personService;
        this.fb = fb;
        this.closeModalAddFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["FamilyRoles"];
        this.gender = _enums_gender__WEBPACK_IMPORTED_MODULE_3__["Gender"];
        this.initFamilyNewPersonForm();
    }
    FamilyAddNewParentSiblingComponent.prototype.ngOnInit = function () {
    };
    FamilyAddNewParentSiblingComponent.prototype.initFamilyNewPersonForm = function () {
        this.familySiblingForm = this.fb.group({
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            middle_name: [null],
            last_name: [null],
        });
    };
    FamilyAddNewParentSiblingComponent.prototype.addFamilySibling = function () {
        var _this = this;
        if (this.familySiblingForm.invalid)
            return;
        var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.familySiblingForm.value, { gender: this.getGenderByRole(this.role) });
        this.personService.addPerson(data).subscribe(function (res) {
            if (res.created) {
                _this.addFamilyPerson(res.data.id);
            }
        }, function (error) { return console.log(error); });
        this.onCloseAddFamilyMemberModal();
    };
    FamilyAddNewParentSiblingComponent.prototype.addFamilyPerson = function (personId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    family_id: this.family.family_id,
                    family_name: this.family.name,
                    id_person: personId,
                    person_role: this.role,
                };
                this.familyPersonService.add(data);
                return [2 /*return*/];
            });
        });
    };
    FamilyAddNewParentSiblingComponent.prototype.onCloseAddFamilyMemberModal = function () {
        this.closeModalAddFamilyMember.emit(true);
    };
    FamilyAddNewParentSiblingComponent.prototype.getGenderByRole = function (role) {
        switch (role) {
            case this.familyRoles.uncle:
                return this.gender.MALE;
            case this.familyRoles.aunt:
                return this.gender.FEMALE;
            default:
                return null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyAddNewParentSiblingComponent.prototype, "closeModalAddFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyAddNewParentSiblingComponent.prototype, "family", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FamilyAddNewParentSiblingComponent.prototype, "role", void 0);
    FamilyAddNewParentSiblingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-add-new-parent-sibling',
            template: __webpack_require__(/*! ./family-add-new-parent-sibling.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component.html"),
            styles: [__webpack_require__(/*! ./family-add-new-parent-sibling.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__["FamilyPersonService"],
            _services_person_person_service__WEBPACK_IMPORTED_MODULE_6__["PersonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], FamilyAddNewParentSiblingComponent);
    return FamilyAddNewParentSiblingComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWFkZC1tZW1iZXItbW9kYWwvZmFtaWx5LWFkZC1uZXctcGFyZW50L2ZhbWlseS1hZGQtbmV3LXBhcmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"familyParentForm\" (ngSubmit)=\"addFamilyParent()\">\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{role | uppercase}} INFO</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-3\"><img src=\"assets/images/temp/person-foto-placeholder.png\" width=\"70%\"></div>\n    <div class=\"col-9 mt-3\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'first_name'\"\n                           id='first_name' label=\"First Name\"\n                           [isInvalid]=\"familyParentForm.get('first_name').invalid && familyParentForm.get('first_name').touched\">\n          </app-input-field>\n          <div class=\"field-has-error app-position-relative\"\n               *ngIf=\"familyParentForm.get('first_name').invalid && familyParentForm.get('first_name').touched && familyParentForm.get('first_name')['errors']['required']\"\n          >\n            First Name is required\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\n        </div>\n      </div>\n      <div class=\"row no-gutters pt-2\">\n        <div class=\"col-6 px-1\">\n          <div class=\"input-group app-input-container\" [ngClass]=\"{'app-input-fill': familyParentForm.value.dob}\">\n            <label for=\"d1\" class=\"app-input-label\">Date of Birth</label>\n            <input class=\"app-input app-family-input-datepicker form-control\"\n                   placeholder=\"Date of Birth\"\n                   name=\"dp1\"\n                   [formControlName]=\"'dob'\"\n                   [minDate]=\"minDate\"\n                   [maxDate]=\"maxDate\"\n                   ngbDatepicker\n                   id=\"d1\"\n                   #d1=\"ngbDatepicker\"\n            >\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                <i class=\"far fa-calendar\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-6 px-1\">\n          <app-input-field [formControlName]=\"'hebrew_full_name'\" id='full_hebrew_name'\n                           label=\"Full Hebrew Name\"></app-input-field>\n        </div>\n      </div>\n      <div *ngIf=\"role === familyRoles.mother\" class=\"row no-gutters pt-2\">\n        <div class=\"col-6 px-1\">\n          <app-input-field [formControlName]=\"'maiden_name'\" id='maiden_name' label=\"Maiden Name\"></app-input-field>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"app-text-small font-weight-bold mb-1 mt-3\">JOB</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-3 px-1\">\n      <app-input-field [formControlName]=\"'occupation'\" id='occupation' label=\"Occupation\"></app-input-field>\n    </div>\n    <div class=\"col-3 px-1\">\n      <app-input-field [formControlName]=\"'address'\" id='address' label=\"Work Address\"></app-input-field>\n    </div>\n    <div class=\"col-6 px-1\">\n      <app-input-field [formControlName]=\"'corporate_phone'\" id='corporate_phone'\n                       label=\"Work Phone number\"></app-input-field>\n    </div>\n  </div>\n\n  <p class=\"app-text-small font-weight-bold mb-1 mt-3\">CONTACTS</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-6 px-1\">\n      <app-input-field [formControlName]=\"'contact_phone'\" id='contact_phone' label=\"Phone number\"></app-input-field>\n    </div>\n    <div class=\"col-6 px-1\">\n      <app-input-field [formControlName]=\"'contact_email'\" type='email' id='contact_email'\n                       label=\"Email\"></app-input-field>\n    </div>\n  </div>\n\n  <div class=\"row pt-3\">\n    <div class=\"col-12 text-right\">\n      <button (click)=\"onCloseAddFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n        Cancel\n      </button>\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyParentForm.invalid\">\n        Add Account\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: FamilyAddNewParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyAddNewParentComponent", function() { return FamilyAddNewParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _services_person_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/person/person.service */ "./src/app/services/person/person.service.ts");
/* harmony import */ var _enums_gender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../enums/gender */ "./src/app/enums/gender.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var FamilyAddNewParentComponent = /** @class */ (function () {
    function FamilyAddNewParentComponent(familyPersonService, personService, fb, parserFormatter) {
        this.familyPersonService = familyPersonService;
        this.personService = personService;
        this.fb = fb;
        this.parserFormatter = parserFormatter;
        this.closeModalAddFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.date = new Date();
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_4__["FamilyRoles"];
        this.gender = _enums_gender__WEBPACK_IMPORTED_MODULE_6__["Gender"];
        this.initFamilyNewPersonForm();
    }
    Object.defineProperty(FamilyAddNewParentComponent.prototype, "minDate", {
        get: function () {
            return { day: 1, month: 1, year: this.date.getFullYear() - 100 };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyAddNewParentComponent.prototype, "maxDate", {
        get: function () {
            return { day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear() };
        },
        enumerable: true,
        configurable: true
    });
    FamilyAddNewParentComponent.prototype.ngOnInit = function () {
    };
    FamilyAddNewParentComponent.prototype.initFamilyNewPersonForm = function () {
        this.familyParentForm = this.fb.group({
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            middle_name: [null],
            last_name: [null],
            dob: [null],
            hebrew_full_name: [null],
            maiden_name: [null],
            occupation: [null],
            address: [null],
            corporate_phone: [null],
            contact_phone: [null],
            contact_email: [null],
        });
    };
    FamilyAddNewParentComponent.prototype.addFamilyParent = function () {
        var _this = this;
        if (this.familyParentForm.invalid)
            return;
        var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.familyParentForm.value, { gender: this.getGenderByRole(this.role), dob: this.parserFormatter.format(this.familyParentForm.value.dob) || null });
        this.personService.addPerson(data).subscribe(function (res) {
            if (res.created) {
                _this.addFamilyPerson(res.data.id);
            }
        }, function (error) { return console.log(error); });
        this.onCloseAddFamilyMemberModal();
    };
    FamilyAddNewParentComponent.prototype.addFamilyPerson = function (personId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    family_id: this.family.family_id,
                    family_name: this.family.name,
                    id_person: personId,
                    person_role: this.role,
                };
                this.familyPersonService.add(data);
                return [2 /*return*/];
            });
        });
    };
    FamilyAddNewParentComponent.prototype.onCloseAddFamilyMemberModal = function () {
        this.closeModalAddFamilyMember.emit(true);
    };
    FamilyAddNewParentComponent.prototype.getGenderByRole = function (role) {
        switch (role) {
            case this.familyRoles.father:
                return this.gender.MALE;
            case this.familyRoles.mother:
                return this.gender.FEMALE;
            default:
                return null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyAddNewParentComponent.prototype, "closeModalAddFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyAddNewParentComponent.prototype, "family", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FamilyAddNewParentComponent.prototype, "role", void 0);
    FamilyAddNewParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-add-new-parent',
            template: __webpack_require__(/*! ./family-add-new-parent.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component.html"),
            styles: [__webpack_require__(/*! ./family-add-new-parent.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_person_service__WEBPACK_IMPORTED_MODULE_2__["FamilyPersonService"],
            _services_person_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateParserFormatter"]])
    ], FamilyAddNewParentComponent);
    return FamilyAddNewParentComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-new-person-role {\n    position: relative;\n    top: -3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHkvZmFtaWx5LXByb2ZpbGUvZmFtaWx5LXZpZXcvZmFtaWx5LXZpZXctZ2VuZXJhbC9mYW1pbHktYWRkLW1lbWJlci1tb2RhbC9mYW1pbHktYWRkLW5ldy1wZXJzb24vZmFtaWx5LWFkZC1uZXctcGVyc29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mYW1pbHkvZmFtaWx5LXByb2ZpbGUvZmFtaWx5LXZpZXcvZmFtaWx5LXZpZXctZ2VuZXJhbC9mYW1pbHktYWRkLW1lbWJlci1tb2RhbC9mYW1pbHktYWRkLW5ldy1wZXJzb24vZmFtaWx5LWFkZC1uZXctcGVyc29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW5ldy1wZXJzb24tcm9sZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTNlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-8\"></div>\n  <div class=\"col-4 app-new-person-role\">\n    <app-select-field class=\"app-text-capitalize\"\n                      [(ngModel)]=\"role\"\n                      labelTitle=\"Roles\"\n                      [isInvalid]=\"!role\"\n                      [items]=\"roles\">\n    </app-select-field>\n    <div class=\"field-has-error\" *ngIf=\"!role\">Role is required</div>\n  </div>\n</div>\n\n<app-family-add-new-parent *ngIf=\"role === FAMILY_ROLES.father || role === FAMILY_ROLES.mother\"\n                           [role]=\"role\"\n                           [family]=\"family\"\n                           (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\">\n</app-family-add-new-parent>\n\n<app-family-add-new-child *ngIf=\"role === FAMILY_ROLES.child || role === FAMILY_ROLES.student\"\n                           [role]=\"role\"\n                           [family]=\"family\"\n                           (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\">\n</app-family-add-new-child>\n\n<app-family-add-new-grandparents *ngIf=\"role === FAMILY_ROLES.grandfather || role === FAMILY_ROLES.grandmother\"\n                          [role]=\"role\"\n                          [family]=\"family\"\n                          (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\" >\n</app-family-add-new-grandparents>\n\n<app-family-add-new-parent-sibling *ngIf=\"role === FAMILY_ROLES.aunt || role === FAMILY_ROLES.uncle\"\n                                 [role]=\"role\"\n                                 [family]=\"family\"\n                                 (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\" >\n</app-family-add-new-parent-sibling>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: FamilyAddNewPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyAddNewPersonComponent", function() { return FamilyAddNewPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");



var FamilyAddNewPersonComponent = /** @class */ (function () {
    function FamilyAddNewPersonComponent() {
        this.closeModalAddFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.roles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["familyRoles"];
        this.FAMILY_ROLES = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["FamilyRoles"];
        this.role = this.FAMILY_ROLES.father;
    }
    FamilyAddNewPersonComponent.prototype.ngOnInit = function () {
    };
    FamilyAddNewPersonComponent.prototype.onCloseAddFamilyMemberModal = function () {
        this.closeModalAddFamilyMember.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyAddNewPersonComponent.prototype, "closeModalAddFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyAddNewPersonComponent.prototype, "family", void 0);
    FamilyAddNewPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-add-new-person',
            template: __webpack_require__(/*! ./family-add-new-person.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.html"),
            styles: [__webpack_require__(/*! ./family-add-new-person.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyAddNewPersonComponent);
    return FamilyAddNewPersonComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-children-card/family-children-card.component.css":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-children-card/family-children-card.component.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWNoaWxkcmVuLWNhcmQvZmFtaWx5LWNoaWxkcmVuLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-children-card/family-children-card.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-children-card/family-children-card.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n  <div class=\"row no-gutters border-bottom\">\n    <div class=\"col-3\">\n      <app-person-avatar-change [avatar]=\"familyPerson.person.avatar ? getAvatarUrl : ''\"\n                                [editable]=\"false\"\n                                [size]=\"'4em'\">\n      </app-person-avatar-change>\n    </div>\n    <div class=\"col-9\">\n      <div class=\"row\">\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Name:</span><span>{{fullNameWithMiddle | titlecase}}</span>\n        </div>\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Legal Name:</span><span>{{familyPerson.person.legal_name}}</span>\n        </div>\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Full Hebrew Name:</span><span>{{familyPerson.person.hebrew_full_name}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\n      PARENTS\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Father:</span><span>{{getFatherFullName}}</span>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Mother:</span><span>{{getMotherFullName}}</span>\n    </div>\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\n      DATE OF BIRTH\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Date of Birth:</span><span>{{familyPerson.person.dob}}</span>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Hebrew Date of Birth:</span><span>{{familyPerson.person.hebrew_dob}}</span>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-children-card/family-children-card.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-children-card/family-children-card.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: FamilyChildrenCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyChildrenCardComponent", function() { return FamilyChildrenCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/family/helper-family.service */ "./src/app/services/family/helper-family.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");




var FamilyChildrenCardComponent = /** @class */ (function () {
    function FamilyChildrenCardComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
    }
    Object.defineProperty(FamilyChildrenCardComponent.prototype, "fullNameWithMiddle", {
        get: function () {
            return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyChildrenCardComponent.prototype, "getFatherFullName", {
        get: function () {
            var father = this.familyPerson.parents.find(function (item) { return item.person_role === 'father'; });
            return this.helperFamilyService.getFullName(father);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyChildrenCardComponent.prototype, "getMotherFullName", {
        get: function () {
            var mother = this.familyPerson.parents.find(function (item) { return item.person_role === 'mother'; });
            return this.helperFamilyService.getFullName(mother);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyChildrenCardComponent.prototype, "getAvatarUrl", {
        get: function () {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].avatarUrl + this.familyPerson.person.avatar;
        },
        enumerable: true,
        configurable: true
    });
    FamilyChildrenCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyChildrenCardComponent.prototype, "familyPerson", void 0);
    FamilyChildrenCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-children-card',
            template: __webpack_require__(/*! ./family-children-card.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-children-card/family-children-card.component.html"),
            styles: [__webpack_require__(/*! ./family-children-card.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-children-card/family-children-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__["HelperFamilyService"]])
    ], FamilyChildrenCardComponent);
    return FamilyChildrenCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWVkaXQtbWVtYmVyLW1vZGFsL2ZhbWlseS1lZGl0LWNoaWxkL2ZhbWlseS1lZGl0LWNoaWxkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"!familyPerson || !familyPersons.length\"></app-spinner>\n<form [formGroup]=\"familyChildForm\" (ngSubmit)=\"updateFamilyChild()\" *ngIf=\"familyPerson && familyPersons.length\">\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{familyPerson.person_role | uppercase}} INFO</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-3 pl-2\">\n      <app-person-avatar-change (changeAvatarEmitter)=\"onChangeAvatar($event)\"\n                                [avatar]=\"familyPerson.person.avatar ? getAvatarUrl : ''\"\n                                [size]=\"'9em'\">\n      </app-person-avatar-change>\n      <app-toggle-checkbox-field [formControlName]=\"'student'\" label=\"Student\"></app-toggle-checkbox-field>\n    </div>\n    <div class=\"col-9 mt-3\">\n\n      <div class=\"row no-gutters px-1\">\n        <div class=\"col-12 text-right\" style=\"position: absolute\">\n          <app-checkbox-field\n            label=\"Adopted\"\n            id=\"adopted\"\n            formControlName=\"adopted\"\n            [isInvalid]=\"familyChildForm.get('adopted').invalid && familyChildForm.get('adopted').touched\"\n          >\n          </app-checkbox-field>\n        </div>\n      </div>\n\n      <div class=\"row no-gutters mt-3 px-1\">\n        <div class=\"col-12\">\n          <app-select-multi-search-field\n            bindValue=\"id\"\n            bindLabel=\"name\"\n            [formControlName]=\"'parents'\"\n            labelTitle=\"Parents\"\n            [isInvalid]=\"familyChildForm.get('parents').invalid && familyChildForm.get('parents').touched\"\n            [items]=\"familyPersons\"\n          >\n          </app-select-multi-search-field>\n        </div>\n      </div>\n\n      <div class=\"row no-gutters mt-3\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'first_name'\"\n                           id='first_name' label=\"First Name\"\n                           [isInvalid]=\"familyChildForm.get('first_name').invalid && familyChildForm.get('first_name').touched\"></app-input-field>\n          <div class=\"field-has-error app-position-relative\"\n               *ngIf=\"familyChildForm.get('first_name').invalid && familyChildForm.get('first_name').touched && familyChildForm.get('first_name')['errors']['required']\"\n          >\n            First Name is required\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\n        </div>\n      </div>\n      <div class=\"row no-gutters pt-2\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'legal_name'\" id='legal_name' label=\"Legal Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <div class=\"input-group app-input-container\" [ngClass]=\"{'app-input-fill': familyChildForm.value.dob}\">\n            <label for=\"d1\" class=\"app-input-label\">Date of Birth</label>\n            <input class=\"app-input app-family-input-datepicker form-control\"\n                   placeholder=\"Date of Birth\"\n                   name=\"dp1\"\n                   [formControlName]=\"'dob'\"\n                   [minDate]=\"minDate\"\n                   [maxDate]=\"maxDate\"\n                   ngbDatepicker\n                   id=\"d1\"\n                   #d1=\"ngbDatepicker\"\n            >\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                <i class=\"far fa-calendar\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'hebrew_dob'\" id='hebrew_dob'\n                           label=\"Hebrew Date of Birth\"></app-input-field>\n        </div>\n      </div>\n      <div class=\"row no-gutters pt-2\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'hebrew_full_name'\" id='hebrew_full_name'\n                           label=\"Full Hebrew Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 d-flex justify-content-between align-items-center\">\n          <label class=\"app-radio-container ml-1 mb-0\">Son\n            <input type=\"radio\"\n                   [name]=\"'gender'\"\n                   [value]=\"GENDER.MALE\"\n                   [formControlName]=\"'gender'\">\n            <span class=\"app-radio-checkmark\"></span>\n          </label>\n          <label class=\"app-radio-container ml-1 mb-0\">Daughter\n            <input type=\"radio\"\n                   [name]=\"'gender'\"\n                   [value]=\"GENDER.FEMALE\"\n                   [formControlName]=\"'gender'\">\n            <span class=\"app-radio-checkmark\"></span>\n          </label>\n        </div>\n        <div class=\"col-4 pl-4\">\n          <app-toggle-checkbox-field [formControlName]=\"'deceased'\" label=\"Deceased\"></app-toggle-checkbox-field>\n        </div>\n      </div>\n      <div *ngIf=\"familyChildForm.value.deceased\" class=\"row no-gutters pt-2\">\n        <div class=\"offset-8 col-4 px-1 text-right\">\n          <div class=\"input-group app-input-container\" [ngClass]=\"{'app-input-fill': familyChildForm.value.dod}\">\n            <label for=\"d2\" class=\"app-input-label\">Date of Death</label>\n            <input class=\"app-input app-family-input-datepicker form-control\"\n                   placeholder=\"Date of Death\"\n                   name=\"dp2\"\n                   [formControlName]=\"'dod'\"\n                   [minDate]=\"minDate\"\n                   [maxDate]=\"maxDate\"\n                   ngbDatepicker\n                   id=\"d2\"\n                   #d1=\"ngbDatepicker\"\n            >\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                <i class=\"far fa-calendar\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--STUDENT INFO-->\n  <div\n    [hidden]=\"!familyChildForm.value.student || familyChildForm.value.deceased\"\n    formGroupName=\"person_info\">\n    <!--EDUCATION-->\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">EDUCATION</p>\n    <div class=\"row no-gutters app-family-card-body p-3\">\n      <div class=\"col-12\">\n\n        <div class=\"row no-gutters\">\n          <div class=\"col-3 px-1\">\n            <app-input-field [formControlName]=\"'student_current_grade'\" id='current_grade'\n                             label=\"Current Grade\"></app-input-field>\n          </div>\n          <div class=\"col-3 px-1\">\n            <app-input-field [formControlName]=\"'student_start_grade'\" id='start_grade'\n                             label=\"Start Grade\"></app-input-field>\n          </div>\n          <div class=\"col-6 px-1\">\n            <app-input-field [formControlName]=\"'student_current_school'\" id='current_school'\n                             label=\"Current School\"></app-input-field>\n          </div>\n        </div>\n\n        <div class=\"row no-gutters pt-2\">\n          <div class=\"col-12 px-1\">\n            <app-input-field [formControlName]=\"'student_previous_school'\" id='previous_school'\n                             label=\"Previous School Attended\"></app-input-field>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n    <!--MEDICAL-->\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">MEDICAL</p>\n    <div class=\"row no-gutters app-family-card-body p-3\">\n      <div class=\"col-12\">\n\n        <div class=\"row no-gutters\">\n          <div class=\"col-4 px-1\">\n            <app-input-field [formControlName]=\"'student_medical_conditions'\" id='medical_conditions'\n                             label=\"Medical Conditions\"></app-input-field>\n          </div>\n          <div class=\"col-4 px-1\">\n            <app-input-field [formControlName]=\"'student_allergies'\" id='allergies' label=\"Allergies\"></app-input-field>\n          </div>\n          <div class=\"col-4 px-1\">\n            <app-input-field [formControlName]=\"'student_medications'\" id='medications'\n                             label=\"Medications\"></app-input-field>\n          </div>\n        </div>\n\n        <div class=\"row no-gutters pt-2\">\n          <div class=\"col-12 px-1\">\n            <app-input-field [formControlName]=\"'student_physician'\" id='physician'\n                             label=\"Physician\"></app-input-field>\n          </div>\n        </div>\n\n        <div class=\"row no-gutters pt-2\">\n          <div class=\"col-2 px-1\">\n            <app-input-field [formControlName]=\"'student_physician_country'\" id='country'\n                             label=\"Country\"></app-input-field>\n          </div>\n          <div class=\"col-6 px-1\">\n            <app-input-field [formControlName]=\"'student_physician_address'\" id='address'\n                             label=\"Address\"></app-input-field>\n          </div>\n          <div class=\"col-4 px-1\">\n            <app-input-field appNumbersValidator=\"true\" regexStr=\"^[0-9]+$\" [formControlName]=\"'student_physician_phone'\" id='phone'\n                             label=\"Phone\"></app-input-field>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!--EMERGENCY CONTACT-->\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">EMERGENCY CONTACT</p>\n    <div class=\"row no-gutters app-family-card-body p-3\">\n      <div class=\"col-12 px-1\">\n        <p class=\"app-text-small app-text-second mb-2\">FIRST EMERGENCY CONTACT</p>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'student_first_contact_relationship'\" id='first_emergency_contact'\n                         label=\"Emergency Contact\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'student_first_contact_full_name'\" id='first_full_name'\n                         label=\"Full Name\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field appNumbersValidator=\"true\" regexStr=\"^[0-9]+$\"\n                         [formControlName]=\"'student_first_contact_cell_phone'\" id='first_cell_phone'\n                         label=\"Cell Phone\"></app-input-field>\n      </div>\n    </div>\n    <div class=\"row no-gutters app-family-card-body p-3 mt-2\">\n      <div class=\"col-12 px-1\">\n        <p class=\"app-text-small app-text-second mb-2\">SECOND EMERGENCY CONTACT</p>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field [formControlName]=\"'student_second_contact_full_name'\" id='second_full_name'\n                         label=\"Full name\"></app-input-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-select-field class=\"app-text-capitalize\"\n                          [formControlName]=\"'student_second_contact_relationship'\"\n                          id='relationship_to_student'\n                          labelTitle=\"Relationship to student\"\n                          [items]=\"roles\">\n        </app-select-field>\n      </div>\n      <div class=\"col-4 px-1\">\n        <app-input-field appNumbersValidator=\"true\" regexStr=\"^[0-9]+$\"\n                         [formControlName]=\"'student_second_contact_cell_phone'\" id='second_cell_phone'\n                         label=\"Cell Phone\"></app-input-field>\n      </div>\n    </div>\n\n\n  </div>\n  <!--END STUDENT INFO-->\n\n  <div class=\"row pt-3\">\n    <div class=\"col-12 text-right\">\n      <button (click)=\"onCloseEditFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n        Cancel\n      </button>\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyChildForm.invalid\">\n        Update\n      </button>\n    </div>\n  </div>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: FamilyEditChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyEditChildComponent", function() { return FamilyEditChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _enums_gender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../enums/gender */ "./src/app/enums/gender.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_person_person_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/person/person.service */ "./src/app/services/person/person.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../environments/environment */ "./src/environments/environment.ts");









var FamilyEditChildComponent = /** @class */ (function () {
    function FamilyEditChildComponent(fb, personService, familyPersonService, parserFormatter) {
        this.fb = fb;
        this.personService = personService;
        this.familyPersonService = familyPersonService;
        this.parserFormatter = parserFormatter;
        this.closeModalEditFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyPersons = [];
        this.GENDER = _enums_gender__WEBPACK_IMPORTED_MODULE_3__["Gender"];
        this.FAMILY_ROLES = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["FamilyRoles"];
        this.date = new Date();
        this.roles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["familyRoles"];
    }
    Object.defineProperty(FamilyEditChildComponent.prototype, "minDate", {
        get: function () {
            return { day: 1, month: 1, year: this.date.getFullYear() - 100 };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyEditChildComponent.prototype, "maxDate", {
        get: function () {
            return { day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear() };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyEditChildComponent.prototype, "getAvatarUrl", {
        get: function () {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].avatarUrl + this.familyPerson.person.avatar;
        },
        enumerable: true,
        configurable: true
    });
    FamilyEditChildComponent.prototype.ngOnInit = function () {
        this.initFamilyChildForm();
        this.getFamilyPersons();
    };
    FamilyEditChildComponent.prototype.initFamilyChildForm = function () {
        var controlsConfig = {
            student: [this.familyPerson.person_role === this.FAMILY_ROLES.student ? 1 : 0],
            adopted: [this.familyPerson.adopted],
            parents: [this.familyPerson.parents.map(function (parent) {
                    return { id: parent.person.id, name: parent.person.first_name + parent.person.last_name };
                })],
            first_name: [this.familyPerson.person.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            middle_name: [this.familyPerson.person.middle_name],
            last_name: [this.familyPerson.person.last_name],
            legal_name: [this.familyPerson.person.legal_name],
            dob: [this.parserFormatter.parse(this.familyPerson.person.dob)],
            hebrew_dob: [this.familyPerson.person.hebrew_dob],
            hebrew_full_name: [this.familyPerson.person.hebrew_full_name],
            gender: [this.familyPerson.person.gender],
            deceased: [this.familyPerson.person.deceased || 0],
            dod: [this.parserFormatter.parse(this.familyPerson.person.dod) || null],
            person_info: this.fb.group({
                student_current_grade: [this.familyPerson.student_info ? this.familyPerson.student_info.student_current_grade : null],
                student_start_grade: [this.familyPerson.student_info ? this.familyPerson.student_info.student_start_grade : null],
                student_current_school: [this.familyPerson.student_info ? this.familyPerson.student_info.student_current_school : null],
                student_previous_school: [this.familyPerson.student_info ? this.familyPerson.student_info.student_previous_school : null],
                student_medical_conditions: [this.familyPerson.student_info ? this.familyPerson.student_info.student_medical_conditions : null],
                student_allergies: [this.familyPerson.student_info ? this.familyPerson.student_info.student_allergies : null],
                student_medications: [this.familyPerson.student_info ? this.familyPerson.student_info.student_medications : null],
                student_physician: [this.familyPerson.student_info ? this.familyPerson.student_info.student_physician : null],
                student_physician_country: [this.familyPerson.student_info ? this.familyPerson.student_info.student_physician_country : null],
                student_physician_address: [this.familyPerson.student_info ? this.familyPerson.student_info.student_physician_address : null],
                student_physician_phone: [this.familyPerson.student_info ? this.familyPerson.student_info.student_physician_phone : null],
                student_first_contact_relationship: [this.familyPerson.student_info ? this.familyPerson.student_info.student_first_contact_relationship : null],
                student_first_contact_full_name: [this.familyPerson.student_info ? this.familyPerson.student_info.student_first_contact_full_name : null],
                student_first_contact_cell_phone: [this.familyPerson.student_info ? this.familyPerson.student_info.student_first_contact_cell_phone : null],
                student_second_contact_full_name: [this.familyPerson.student_info ? this.familyPerson.student_info.student_second_contact_full_name : null],
                student_second_contact_relationship: [this.familyPerson.student_info ? this.familyPerson.student_info.student_second_contact_relationship : null],
                student_second_contact_cell_phone: [this.familyPerson.student_info ? this.familyPerson.student_info.student_second_contact_cell_phone : null],
            })
        };
        this.familyChildForm = this.fb.group(controlsConfig);
    };
    FamilyEditChildComponent.prototype.getFamilyPersons = function () {
        var _this = this;
        this.familyPersonService.getAllRequest()
            .subscribe(function (res) {
            res.map(function (familyPerson) {
                _this.familyPersons.push({
                    id: familyPerson.person.id,
                    name: familyPerson.person.first_name + " " + familyPerson.person.last_name,
                });
            });
        });
    };
    FamilyEditChildComponent.prototype.updateFamilyChild = function () {
        if (this.familyChildForm.invalid)
            return;
        var data = {
            person_role: this.familyChildForm.value.student ? this.FAMILY_ROLES.student : this.FAMILY_ROLES.child,
            adopted: this.familyChildForm.value.adopted ? 1 : 0,
            person: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.familyChildForm.value, { dob: this.parserFormatter.format(this.familyChildForm.value.dob) || null, deceased: this.familyChildForm.value.deceased ? 1 : 0, dod: this.parserFormatter.format(this.familyChildForm.value.dod) || null, avatar: this.avatar || null }),
            parents: this.familyChildForm.value.parents ? this.familyChildForm.value.parents.map(function (item) { return item.id; }) : [],
            person_info: null,
        };
        if (this.familyChildForm.value.student) {
            data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { person_info: this.familyChildForm.value.person_info || [] });
        }
        this.familyPersonService.update(data, this.familyPerson.id);
        this.onCloseEditFamilyMemberModal();
    };
    FamilyEditChildComponent.prototype.onCloseEditFamilyMemberModal = function () {
        this.closeModalEditFamilyMember.emit(true);
    };
    FamilyEditChildComponent.prototype.onChangeAvatar = function ($event) {
        this.avatar = $event;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyEditChildComponent.prototype, "closeModalEditFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyEditChildComponent.prototype, "familyPerson", void 0);
    FamilyEditChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-edit-child',
            template: __webpack_require__(/*! ./family-edit-child.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component.html"),
            styles: [__webpack_require__(/*! ./family-edit-child.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_person_person_service__WEBPACK_IMPORTED_MODULE_7__["PersonService"],
            _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__["FamilyPersonService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateParserFormatter"]])
    ], FamilyEditChildComponent);
    return FamilyEditChildComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWVkaXQtbWVtYmVyLW1vZGFsL2ZhbWlseS1lZGl0LWdyYW5kcGFyZW50L2ZhbWlseS1lZGl0LWdyYW5kcGFyZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"familyGrandParentForm\" (ngSubmit)=\"updateFamilyParent()\">\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{familyPerson.person_role | uppercase}} INFO</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-3 pl-3\">\n      <app-person-avatar-change (changeAvatarEmitter)=\"onChangeAvatar($event)\"\n                                [avatar]=\"familyPerson.person.avatar ? getAvatarUrl : ''\"\n                                [size]=\"'9em'\">\n      </app-person-avatar-change>\n    </div>\n    <div class=\"col-9 mt-3\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'first_name'\"\n                           id='first_name' label=\"First Name\"\n                           [isInvalid]=\"familyGrandParentForm.get('first_name').invalid && familyGrandParentForm.get('first_name').touched\">\n          </app-input-field>\n          <div class=\"field-has-error app-position-relative\"\n               *ngIf=\"familyGrandParentForm.get('first_name').invalid && familyGrandParentForm.get('first_name').touched && familyGrandParentForm.get('first_name')['errors']['required']\"\n          >\n            First Name is required\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\n        </div>\n      </div>\n      <div class=\"row no-gutters pt-2\">\n        <div class=\"offset-8 col-4 pl-4\">\n          <app-toggle-checkbox-field [formControlName]=\"'deceased'\" label=\"Deceased\"></app-toggle-checkbox-field>\n        </div>\n      </div>\n      <div *ngIf=\"familyGrandParentForm.value.deceased\" class=\"row no-gutters pt-2\">\n        <div class=\"offset-8 col-4 px-1 text-right\">\n          <div class=\"input-group app-input-container\" [ngClass]=\"{'app-input-fill': familyGrandParentForm.value.dod}\">\n            <label for=\"d2\" class=\"app-input-label\">Date of Death</label>\n            <input class=\"app-input app-family-input-datepicker form-control\"\n                   placeholder=\"Date of Death\"\n                   name=\"dp2\"\n                   [formControlName]=\"'dod'\"\n                   [minDate]=\"minDate\"\n                   [maxDate]=\"maxDate\"\n                   ngbDatepicker\n                   id=\"d2\"\n                   #d1=\"ngbDatepicker\"\n            >\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                <i class=\"far fa-calendar\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div [hidden]=\"familyGrandParentForm.value.deceased\">\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">ADDRESS</p>\n    <div class=\"app-family-card-body p-3\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'country'\" id='country' label=\"Country\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'state'\" id='state' label=\"State\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'city'\" id='city'\n                           label=\"City\"></app-input-field>\n        </div>\n      </div>\n      <div class=\"row no-gutters pt-2\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'address'\" id='address' label=\"Address\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'zip'\" id='zip' label=\"ZIP\"></app-input-field>\n        </div>\n      </div>\n    </div>\n\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">CONTACTS</p>\n    <div class=\"row no-gutters app-family-card-body p-3\">\n      <div class=\"col-6 px-1\">\n        <app-input-field appNumbersValidator=\"true\" regexStr=\"^[0-9]+$\"\n                         [formControlName]=\"'contact_phone'\" id='contact_phone' label=\"Phone number\"></app-input-field>\n      </div>\n      <div class=\"col-6 px-1\">\n        <app-input-field [formControlName]=\"'contact_email'\" type='email' id='contact_email'\n                         label=\"Email\"></app-input-field>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row pt-3\">\n    <div class=\"col-12 text-right\">\n      <button (click)=\"onCloseEditFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n        Cancel\n      </button>\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyGrandParentForm.invalid\">\n        Update\n      </button>\n    </div>\n  </div>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: FamilyEditGrandparentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyEditGrandparentComponent", function() { return FamilyEditGrandparentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _enums_gender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../enums/gender */ "./src/app/enums/gender.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../environments/environment */ "./src/environments/environment.ts");








var FamilyEditGrandparentComponent = /** @class */ (function () {
    function FamilyEditGrandparentComponent(familyPersonService, fb, parserFormatter) {
        this.familyPersonService = familyPersonService;
        this.fb = fb;
        this.parserFormatter = parserFormatter;
        this.closeModalEditFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["FamilyRoles"];
        this.gender = _enums_gender__WEBPACK_IMPORTED_MODULE_3__["Gender"];
        this.date = new Date();
    }
    Object.defineProperty(FamilyEditGrandparentComponent.prototype, "minDate", {
        get: function () {
            return { day: 1, month: 1, year: this.date.getFullYear() - 100 };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyEditGrandparentComponent.prototype, "maxDate", {
        get: function () {
            return { day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear() };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyEditGrandparentComponent.prototype, "getAvatarUrl", {
        get: function () {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].avatarUrl + this.familyPerson.person.avatar;
        },
        enumerable: true,
        configurable: true
    });
    FamilyEditGrandparentComponent.prototype.ngOnInit = function () {
        this.initFamilyNewPersonForm();
    };
    FamilyEditGrandparentComponent.prototype.initFamilyNewPersonForm = function () {
        this.familyGrandParentForm = this.fb.group({
            first_name: [this.familyPerson.person.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            middle_name: [this.familyPerson.person.middle_name],
            last_name: [this.familyPerson.person.last_name],
            country: [this.familyPerson.person.country],
            state: [this.familyPerson.person.state],
            city: [this.familyPerson.person.city],
            address: [this.familyPerson.person.address],
            zip: [this.familyPerson.person.zip],
            contact_phone: [this.familyPerson.person.contact_phone],
            contact_email: [this.familyPerson.person.contact_email],
            deceased: [this.familyPerson.person.deceased || 0],
            dod: [this.parserFormatter.parse(this.familyPerson.person.dod) || null]
        });
    };
    FamilyEditGrandparentComponent.prototype.updateFamilyParent = function () {
        if (this.familyGrandParentForm.invalid)
            return;
        var data = {
            person: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.familyGrandParentForm.value, { deceased: this.familyGrandParentForm.value.deceased ? 1 : 0, dod: this.parserFormatter.format(this.familyGrandParentForm.value.dod) || null, avatar: this.avatar || null }),
        };
        this.familyPersonService.update(data, this.familyPerson.id);
        this.onCloseEditFamilyMemberModal();
    };
    FamilyEditGrandparentComponent.prototype.onCloseEditFamilyMemberModal = function () {
        this.closeModalEditFamilyMember.emit(true);
    };
    FamilyEditGrandparentComponent.prototype.onChangeAvatar = function ($event) {
        this.avatar = $event;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyEditGrandparentComponent.prototype, "closeModalEditFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyEditGrandparentComponent.prototype, "familyPerson", void 0);
    FamilyEditGrandparentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-edit-grandparent',
            template: __webpack_require__(/*! ./family-edit-grandparent.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component.html"),
            styles: [__webpack_require__(/*! ./family-edit-grandparent.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__["FamilyPersonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateParserFormatter"]])
    ], FamilyEditGrandparentComponent);
    return FamilyEditGrandparentComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWVkaXQtbWVtYmVyLW1vZGFsL2ZhbWlseS1lZGl0LW1lbWJlci1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal [width]=\"'45%'\"\n           [title]=\"\"\n           (closeModal)=\"onCloseEditFamilyMemberModal()\">\n  <app-family-edit-parent\n    *ngIf=\"familyPerson.person_role === FAMILY_ROLES.father || familyPerson.person_role === FAMILY_ROLES.mother\"\n    [familyPerson]=\"familyPerson\"\n    (closeModalEditFamilyMember)=\"onCloseEditFamilyMemberModal()\">\n  </app-family-edit-parent>\n\n  <app-family-edit-child\n    *ngIf=\"familyPerson.person_role === FAMILY_ROLES.child || familyPerson.person_role === FAMILY_ROLES.student\"\n    [familyPerson]=\"familyPerson\"\n    (closeModalEditFamilyMember)=\"onCloseEditFamilyMemberModal()\">\n  </app-family-edit-child>\n\n  <app-family-edit-grandparent\n    *ngIf=\"familyPerson.person_role === FAMILY_ROLES.grandfather || familyPerson.person_role === FAMILY_ROLES.grandmother\"\n    [familyPerson]=\"familyPerson\"\n    (closeModalEditFamilyMember)=\"onCloseEditFamilyMemberModal()\">\n  </app-family-edit-grandparent>\n\n  <app-family-edit-parent-sibling\n    *ngIf=\"familyPerson.person_role === FAMILY_ROLES.uncle || familyPerson.person_role === FAMILY_ROLES.aunt\"\n    [familyPerson]=\"familyPerson\"\n    (closeModalEditFamilyMember)=\"onCloseEditFamilyMemberModal()\">\n  </app-family-edit-parent-sibling>\n</app-modal>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: FamilyEditMemberModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyEditMemberModalComponent", function() { return FamilyEditMemberModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");



var FamilyEditMemberModalComponent = /** @class */ (function () {
    function FamilyEditMemberModalComponent() {
        this.closeModalEditFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.FAMILY_ROLES = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["FamilyRoles"];
    }
    FamilyEditMemberModalComponent.prototype.ngOnInit = function () {
    };
    FamilyEditMemberModalComponent.prototype.onCloseEditFamilyMemberModal = function () {
        this.closeModalEditFamilyMember.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyEditMemberModalComponent.prototype, "familyPerson", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyEditMemberModalComponent.prototype, "closeModalEditFamilyMember", void 0);
    FamilyEditMemberModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-edit-member-modal',
            template: __webpack_require__(/*! ./family-edit-member-modal.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component.html"),
            styles: [__webpack_require__(/*! ./family-edit-member-modal.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyEditMemberModalComponent);
    return FamilyEditMemberModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWVkaXQtbWVtYmVyLW1vZGFsL2ZhbWlseS1lZGl0LXBhcmVudC1zaWJsaW5nL2ZhbWlseS1lZGl0LXBhcmVudC1zaWJsaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"familySiblingForm\" (ngSubmit)=\"updateFamilySibling()\">\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{familyPerson.person_role | uppercase}} INFO</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-12\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'first_name'\"\n                           id='first_name' label=\"First Name\"\n                           [isInvalid]=\"familySiblingForm.get('first_name').invalid && familySiblingForm.get('first_name').touched\">\n          </app-input-field>\n          <div class=\"field-has-error app-position-relative\"\n               *ngIf=\"familySiblingForm.get('first_name').invalid && familySiblingForm.get('first_name').touched && familySiblingForm.get('first_name')['errors']['required']\"\n          >\n            First Name is required\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row pt-3\">\n    <div class=\"col-12 text-right\">\n      <button (click)=\"onCloseEditFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n        Cancel\n      </button>\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familySiblingForm.invalid\">\n        Update\n      </button>\n    </div>\n  </div>\n</form>\n\n\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: FamilyEditParentSiblingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyEditParentSiblingComponent", function() { return FamilyEditParentSiblingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _enums_gender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../enums/gender */ "./src/app/enums/gender.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");






var FamilyEditParentSiblingComponent = /** @class */ (function () {
    function FamilyEditParentSiblingComponent(familyPersonService, fb) {
        this.familyPersonService = familyPersonService;
        this.fb = fb;
        this.closeModalEditFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["FamilyRoles"];
        this.gender = _enums_gender__WEBPACK_IMPORTED_MODULE_3__["Gender"];
        this.date = new Date();
    }
    Object.defineProperty(FamilyEditParentSiblingComponent.prototype, "minDate", {
        get: function () {
            return { day: 1, month: 1, year: this.date.getFullYear() - 100 };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyEditParentSiblingComponent.prototype, "maxDate", {
        get: function () {
            return { day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear() };
        },
        enumerable: true,
        configurable: true
    });
    FamilyEditParentSiblingComponent.prototype.ngOnInit = function () {
        this.initFamilyNewPersonForm();
    };
    FamilyEditParentSiblingComponent.prototype.initFamilyNewPersonForm = function () {
        this.familySiblingForm = this.fb.group({
            first_name: [this.familyPerson.person.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            middle_name: [this.familyPerson.person.middle_name],
            last_name: [this.familyPerson.person.last_name],
        });
    };
    FamilyEditParentSiblingComponent.prototype.updateFamilySibling = function () {
        if (this.familySiblingForm.invalid)
            return;
        var data = {
            person: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.familySiblingForm.value),
        };
        this.familyPersonService.update(data, this.familyPerson.id);
        this.onCloseEditFamilyMemberModal();
    };
    FamilyEditParentSiblingComponent.prototype.onCloseEditFamilyMemberModal = function () {
        this.closeModalEditFamilyMember.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyEditParentSiblingComponent.prototype, "closeModalEditFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyEditParentSiblingComponent.prototype, "familyPerson", void 0);
    FamilyEditParentSiblingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-edit-parent-sibling',
            template: __webpack_require__(/*! ./family-edit-parent-sibling.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component.html"),
            styles: [__webpack_require__(/*! ./family-edit-parent-sibling.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__["FamilyPersonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], FamilyEditParentSiblingComponent);
    return FamilyEditParentSiblingComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWVkaXQtbWVtYmVyLW1vZGFsL2ZhbWlseS1lZGl0LXBhcmVudC9mYW1pbHktZWRpdC1wYXJlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"familyParentForm\" (ngSubmit)=\"updateFamilyParent()\">\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{familyPerson.person_role | uppercase}} INFO</p>\n  <div class=\"row no-gutters app-family-card-body p-3\">\n    <div class=\"col-3 pl-3\">\n      <app-person-avatar-change (changeAvatarEmitter)=\"onChangeAvatar($event)\"\n                                [avatar]=\"familyPerson.person.avatar ? getAvatarUrl : ''\"\n                                [size]=\"'9em'\">\n      </app-person-avatar-change>\n    </div>\n    <div class=\"col-9 mt-3\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'first_name'\"\n                           id='first_name' label=\"First Name\"\n                           [isInvalid]=\"familyParentForm.get('first_name').invalid && familyParentForm.get('first_name').touched\">\n          </app-input-field>\n          <div class=\"field-has-error app-position-relative\"\n               *ngIf=\"familyParentForm.get('first_name').invalid && familyParentForm.get('first_name').touched && familyParentForm.get('first_name')['errors']['required']\"\n          >\n            First Name is required\n          </div>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\n        </div>\n        <div class=\"col-4 px-1\">\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\n        </div>\n      </div>\n      <div class=\"row no-gutters pt-2\">\n        <div class=\"col-6 px-1\">\n          <div class=\"input-group app-input-container\" [ngClass]=\"{'app-input-fill': familyParentForm.value.dob}\">\n            <label for=\"d1\" class=\"app-input-label\">Date of Birth</label>\n            <input class=\"app-input app-family-input-datepicker form-control\"\n                   placeholder=\"Date of Birth\"\n                   name=\"dp1\"\n                   [formControlName]=\"'dob'\"\n                   [minDate]=\"minDate\"\n                   [maxDate]=\"maxDate\"\n                   ngbDatepicker\n                   id=\"d1\"\n                   #d1=\"ngbDatepicker\"\n            >\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                <i class=\"far fa-calendar\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-6 px-1\">\n          <app-input-field [formControlName]=\"'hebrew_full_name'\" id='full_hebrew_name'\n                           label=\"Full Hebrew Name\"></app-input-field>\n        </div>\n      </div>\n      <div class=\"row no-gutters pt-2\">\n        <div *ngIf=\"familyPerson.person_role === familyRoles.mother\" class=\"col-6 px-1\">\n          <app-input-field [formControlName]=\"'maiden_name'\" id='maiden_name' label=\"Maiden Name\"></app-input-field>\n        </div>\n        <div *ngIf=\"familyPerson.person_role !== familyRoles.mother\" class=\"col-6 px-1\">\n        </div>\n        <div class=\"col-6 pl-4\">\n          <app-toggle-checkbox-field [formControlName]=\"'deceased'\" label=\"Deceased\"></app-toggle-checkbox-field>\n        </div>\n      </div>\n      <div *ngIf=\"familyParentForm.value.deceased\" class=\"row no-gutters pt-2\">\n        <div class=\"offset-6 col-6 px-1 text-right\">\n          <div class=\"input-group app-input-container\" [ngClass]=\"{'app-input-fill': familyParentForm.value.dod}\">\n            <label for=\"d2\" class=\"app-input-label\">Date of Death</label>\n            <input class=\"app-input app-family-input-datepicker form-control\"\n                   placeholder=\"Date of Death\"\n                   name=\"dp2\"\n                   [formControlName]=\"'dod'\"\n                   [minDate]=\"minDate\"\n                   [maxDate]=\"maxDate\"\n                   ngbDatepicker\n                   id=\"d2\"\n                   #d1=\"ngbDatepicker\"\n            >\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                <i class=\"far fa-calendar\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div [hidden]=\"familyParentForm.value.deceased\">\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">JOB</p>\n    <div class=\"row no-gutters app-family-card-body p-3\">\n      <div class=\"col-3 px-1\">\n        <app-input-field [formControlName]=\"'occupation'\" id='occupation' label=\"Occupation\"></app-input-field>\n      </div>\n      <div class=\"col-3 px-1\">\n        <app-input-field [formControlName]=\"'address'\" id='address' label=\"Work Address\"></app-input-field>\n      </div>\n      <div class=\"col-6 px-1\">\n        <app-input-field appNumbersValidator=\"true\" regexStr=\"^[0-9]+$\"\n                         [formControlName]=\"'corporate_phone'\" id='corporate_phone'\n                         label=\"Work Phone number\"></app-input-field>\n      </div>\n    </div>\n\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">CONTACTS</p>\n    <div class=\"row no-gutters app-family-card-body p-3\">\n      <div class=\"col-6 px-1\">\n        <app-input-field appNumbersValidator=\"true\" regexStr=\"^[0-9]+$\"\n                         [formControlName]=\"'contact_phone'\" id='contact_phone' label=\"Phone number\"></app-input-field>\n      </div>\n      <div class=\"col-6 px-1\">\n        <app-input-field [formControlName]=\"'contact_email'\" type='email' id='contact_email'\n                         label=\"Email\"></app-input-field>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row pt-3\">\n    <div class=\"col-12 text-right\">\n      <button (click)=\"onCloseEditFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n        Cancel\n      </button>\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyParentForm.invalid\">\n        Update\n      </button>\n    </div>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: FamilyEditParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyEditParentComponent", function() { return FamilyEditParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _enums_gender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../enums/gender */ "./src/app/enums/gender.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../environments/environment */ "./src/environments/environment.ts");








var FamilyEditParentComponent = /** @class */ (function () {
    function FamilyEditParentComponent(familyPersonService, fb, parserFormatter) {
        this.familyPersonService = familyPersonService;
        this.fb = fb;
        this.parserFormatter = parserFormatter;
        this.closeModalEditFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["FamilyRoles"];
        this.gender = _enums_gender__WEBPACK_IMPORTED_MODULE_3__["Gender"];
        this.date = new Date();
    }
    Object.defineProperty(FamilyEditParentComponent.prototype, "minDate", {
        get: function () {
            return { day: 1, month: 1, year: this.date.getFullYear() - 100 };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyEditParentComponent.prototype, "maxDate", {
        get: function () {
            return { day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear() };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyEditParentComponent.prototype, "getAvatarUrl", {
        get: function () {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].avatarUrl + this.familyPerson.person.avatar;
        },
        enumerable: true,
        configurable: true
    });
    FamilyEditParentComponent.prototype.ngOnInit = function () {
        this.initFamilyNewPersonForm();
    };
    FamilyEditParentComponent.prototype.initFamilyNewPersonForm = function () {
        this.familyParentForm = this.fb.group({
            first_name: [this.familyPerson.person.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            middle_name: [this.familyPerson.person.middle_name],
            last_name: [this.familyPerson.person.last_name],
            dob: [this.parserFormatter.parse(this.familyPerson.person.dob)],
            hebrew_full_name: [this.familyPerson.person.hebrew_full_name],
            maiden_name: [this.familyPerson.person.maiden_name],
            occupation: [this.familyPerson.person.occupation],
            address: [this.familyPerson.person.address],
            corporate_phone: [this.familyPerson.person.contact_phone],
            contact_phone: [this.familyPerson.person.contact_phone],
            contact_email: [this.familyPerson.person.contact_email],
            deceased: [this.familyPerson.person.deceased || 0],
            dod: [this.parserFormatter.parse(this.familyPerson.person.dod) || null]
        });
    };
    FamilyEditParentComponent.prototype.updateFamilyParent = function () {
        if (this.familyParentForm.invalid)
            return;
        var data = {
            person: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.familyParentForm.value, { dob: this.parserFormatter.format(this.familyParentForm.value.dob) || null, deceased: this.familyParentForm.value.deceased ? 1 : 0, dod: this.parserFormatter.format(this.familyParentForm.value.dod) || null, avatar: this.avatar || null }),
        };
        this.familyPersonService.update(data, this.familyPerson.id);
        this.onCloseEditFamilyMemberModal();
    };
    FamilyEditParentComponent.prototype.onCloseEditFamilyMemberModal = function () {
        this.closeModalEditFamilyMember.emit(true);
    };
    FamilyEditParentComponent.prototype.onChangeAvatar = function ($event) {
        this.avatar = $event;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyEditParentComponent.prototype, "closeModalEditFamilyMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyEditParentComponent.prototype, "familyPerson", void 0);
    FamilyEditParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-edit-parent',
            template: __webpack_require__(/*! ./family-edit-parent.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component.html"),
            styles: [__webpack_require__(/*! ./family-edit-parent.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__["FamilyPersonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateParserFormatter"]])
    ], FamilyEditParentComponent);
    return FamilyEditParentComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWdyYW5kcGFyZW50cy1jYXJkL2ZhbWlseS1ncmFuZHBhcmVudHMtY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n  <div class=\"row no-gutters border-bottom\">\n    <div class=\"col-3 pb-2\">\n      <app-person-avatar-change [avatar]=\"familyPerson.person.avatar ? getAvatarUrl : ''\"\n                                [editable]=\"false\"\n                                [size]=\"'4em'\">\n      </app-person-avatar-change>\n    </div>\n    <div class=\"col-9\">\n      <div class=\"row\">\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Name:</span><span>{{fullNameWithMiddle | titlecase}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\n      ADDRESS\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Address:</span><span>{{fullAddress}}</span>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">ZIP:</span><span>{{familyPerson.person.zip}}</span>\n    </div>\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\n      CONTACTS\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Phone Number:</span><span>{{familyPerson.person.contact_phone}}</span>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Email Address:</span><span>{{familyPerson.person.contact_email}}</span>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: FamilyGrandparentsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyGrandparentsCardComponent", function() { return FamilyGrandparentsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/family/helper-family.service */ "./src/app/services/family/helper-family.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");




var FamilyGrandparentsCardComponent = /** @class */ (function () {
    function FamilyGrandparentsCardComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
    }
    Object.defineProperty(FamilyGrandparentsCardComponent.prototype, "fullNameWithMiddle", {
        get: function () {
            return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyGrandparentsCardComponent.prototype, "fullAddress", {
        get: function () {
            return this.helperFamilyService.getFullPersonFamilyAddress(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyGrandparentsCardComponent.prototype, "getAvatarUrl", {
        get: function () {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].avatarUrl + this.familyPerson.person.avatar;
        },
        enumerable: true,
        configurable: true
    });
    FamilyGrandparentsCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyGrandparentsCardComponent.prototype, "familyPerson", void 0);
    FamilyGrandparentsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-grandparents-card',
            template: __webpack_require__(/*! ./family-grandparents-card.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component.html"),
            styles: [__webpack_require__(/*! ./family-grandparents-card.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__["HelperFamilyService"]])
    ], FamilyGrandparentsCardComponent);
    return FamilyGrandparentsCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LXBhcmVudC1zaWJsaW5nLWNhcmQvZmFtaWx5LXBhcmVudC1zaWJsaW5nLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-12\">\n      <div class=\"row\">\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Name:</span><span>{{fullNameWithMiddle | titlecase}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: FamilyParentSiblingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyParentSiblingCardComponent", function() { return FamilyParentSiblingCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/family/helper-family.service */ "./src/app/services/family/helper-family.service.ts");



var FamilyParentSiblingCardComponent = /** @class */ (function () {
    function FamilyParentSiblingCardComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
    }
    Object.defineProperty(FamilyParentSiblingCardComponent.prototype, "fullNameWithMiddle", {
        get: function () {
            return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    FamilyParentSiblingCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyParentSiblingCardComponent.prototype, "familyPerson", void 0);
    FamilyParentSiblingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-parent-sibling-card',
            template: __webpack_require__(/*! ./family-parent-sibling-card.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component.html"),
            styles: [__webpack_require__(/*! ./family-parent-sibling-card.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__["HelperFamilyService"]])
    ], FamilyParentSiblingCardComponent);
    return FamilyParentSiblingCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component.css":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LXBhcmVudHMtY2FyZC9mYW1pbHktcGFyZW50cy1jYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n  <div class=\"row no-gutters border-bottom\">\n    <div class=\"col-3\">\n      <app-person-avatar-change [avatar]=\"familyPerson.person.avatar ? getAvatarUrl : ''\"\n                                [editable]=\"false\"\n                                [size]=\"'4em'\">\n      </app-person-avatar-change>\n    </div>\n    <div class=\"col-9\">\n      <div class=\"row\">\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Name:</span>\n          <span>{{fullNameWithMiddle | titlecase}}</span>\n        </div>\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Hebrew Name:</span>\n          <span>{{familyPerson.person.hebrew_full_name}}</span>\n        </div>\n        <div *ngIf=\"familyPerson.person_role === familyRoles.mother\" class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Maiden name:</span>\n          <span>{{familyPerson.person.maiden_name}}</span>\n        </div>\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Number of children:</span>\n          <span>\n            {{familyPerson?.children?.length}}\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\n      JOB\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Occupation:</span>\n      <span>{{familyPerson.person.occupation}}</span>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Address:</span>\n      <span class=\"pl-5 text-right\">{{familyPerson.person.address}}</span>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Work number:</span>\n      <span>{{familyPerson.person.corporate_phone}}</span>\n    </div>\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\n      CONTACTS\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Phone Number:</span>\n      <span>{{familyPerson.person.contact_phone}}</span>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Email Address:</span>\n      <span>{{familyPerson.person.contact_email}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: FamilyParentsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyParentsCardComponent", function() { return FamilyParentsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/family/helper-family.service */ "./src/app/services/family/helper-family.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");





var FamilyParentsCardComponent = /** @class */ (function () {
    function FamilyParentsCardComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["FamilyRoles"];
    }
    Object.defineProperty(FamilyParentsCardComponent.prototype, "fullNameWithMiddle", {
        get: function () {
            return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyParentsCardComponent.prototype, "getAvatarUrl", {
        get: function () {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].avatarUrl + this.familyPerson.person.avatar;
        },
        enumerable: true,
        configurable: true
    });
    FamilyParentsCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyParentsCardComponent.prototype, "familyPerson", void 0);
    FamilyParentsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-parents-card',
            template: __webpack_require__(/*! ./family-parents-card.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component.html"),
            styles: [__webpack_require__(/*! ./family-parents-card.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_3__["HelperFamilyService"]])
    ], FamilyParentsCardComponent);
    return FamilyParentsCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LXBlcnNvbi1jYXJkLWNvbnRhaW5lci9mYW1pbHktcGVyc29uLWNhcmQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-family-remove-member-modal *ngIf=\"showRemoveModal\"\n                                [familyPerson]=\"familyPerson\"\n                                (closeModalRemoveFamilyMember)=\"onCloseRemoveModal($event)\">\n</app-family-remove-member-modal>\n<app-family-edit-member-modal *ngIf=\"showEditModal\"\n                                [familyPerson]=\"familyPerson\"\n                                (closeModalEditFamilyMember)=\"onCloseEditModal($event)\">\n</app-family-edit-member-modal>\n<div class=\"app-family-card-body h-100\">\n  <div class=\"row no-gutters app-family-card-header px-3 py-2 app-text-white\">\n    <div class=\"col-6 text-left app-text-large font-weight-bold\">\n      {{fullName | titlecase}}\n    </div>\n    <div class=\"col-6 text-right mt-1\">\n      <span class=\"mr-3\" *ngIf=\"familyPerson.person_role !== familyRoles.student\">{{familyPerson.person_role | titlecase}}</span>\n      <i *ngIf=\"familyPerson.person_role === familyRoles.student\" class=\"fas fa-graduation-cap mr-3\"></i>\n      <i  *ngIf=\"familyPerson.person.deceased\" class=\"fas fa-monument mr-3\"></i>\n      <i (click)=\"onCloseEditModal(false)\" class=\"fas fa-pen app-cursor-pointer mr-3\"></i>\n      <i (click)=\"onCloseRemoveModal(false)\" class=\"fas fa-trash-alt app-cursor-pointer\"></i>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: FamilyPersonCardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyPersonCardContainerComponent", function() { return FamilyPersonCardContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/family/helper-family.service */ "./src/app/services/family/helper-family.service.ts");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");




var FamilyPersonCardContainerComponent = /** @class */ (function () {
    function FamilyPersonCardContainerComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
        this.showRemoveModal = false;
        this.showEditModal = false;
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_3__["FamilyRoles"];
    }
    Object.defineProperty(FamilyPersonCardContainerComponent.prototype, "fullName", {
        get: function () {
            return this.helperFamilyService.getFullName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    FamilyPersonCardContainerComponent.prototype.ngOnInit = function () {
    };
    FamilyPersonCardContainerComponent.prototype.onCloseRemoveModal = function (value) {
        this.showRemoveModal = !value;
    };
    FamilyPersonCardContainerComponent.prototype.onCloseEditModal = function (value) {
        this.showEditModal = !value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyPersonCardContainerComponent.prototype, "familyPerson", void 0);
    FamilyPersonCardContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-person-card-container',
            template: __webpack_require__(/*! ./family-person-card-container.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component.html"),
            styles: [__webpack_require__(/*! ./family-person-card-container.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__["HelperFamilyService"]])
    ], FamilyPersonCardContainerComponent);
    return FamilyPersonCardContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LXJlbW92ZS1tZW1iZXItbW9kYWwvZmFtaWx5LXJlbW92ZS1tZW1iZXItbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal [width]=\"'30%'\"\n           [title]=\"'Remove ' + familyPerson?.person?.first_name + '' +\n           familyPerson?.person?.last_name + ' from ' + familyPerson?.family_name + '?'\"\n           (closeModal)=\"onCloseRemoveFamilyMemberModal()\">\n  <div class=\"row pt-2\">\n    <div class=\"col-12 text-center\">\n      <button (click)=\"onCloseRemoveFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\n        Cancel\n      </button>\n      <button (click)=\"delete()\" class=\"btn app-btn-danger\">\n        Delete\n      </button>\n    </div>\n  </div>\n</app-modal>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: FamilyRemoveMemberModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyRemoveMemberModalComponent", function() { return FamilyRemoveMemberModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");



var FamilyRemoveMemberModalComponent = /** @class */ (function () {
    function FamilyRemoveMemberModalComponent(familyPersonService) {
        this.familyPersonService = familyPersonService;
        this.closeModalRemoveFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FamilyRemoveMemberModalComponent.prototype.ngOnInit = function () {
    };
    FamilyRemoveMemberModalComponent.prototype.onCloseRemoveFamilyMemberModal = function () {
        this.closeModalRemoveFamilyMember.emit(true);
    };
    FamilyRemoveMemberModalComponent.prototype.delete = function () {
        this.familyPersonService.delete(this.familyPerson.id, this.familyPerson.person_role);
        this.onCloseRemoveFamilyMemberModal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyRemoveMemberModalComponent.prototype, "familyPerson", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FamilyRemoveMemberModalComponent.prototype, "closeModalRemoveFamilyMember", void 0);
    FamilyRemoveMemberModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-remove-member-modal',
            template: __webpack_require__(/*! ./family-remove-member-modal.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component.html"),
            styles: [__webpack_require__(/*! ./family-remove-member-modal.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_person_service__WEBPACK_IMPORTED_MODULE_2__["FamilyPersonService"]])
    ], FamilyRemoveMemberModalComponent);
    return FamilyRemoveMemberModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-card.component.css":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-card.component.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LXN0dWRlbnRzLWNhcmQvZmFtaWx5LXN0dWRlbnRzLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-card.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-card.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n  <div class=\"row no-gutters border-bottom\">\n    <div class=\"col-3\">\n      <app-person-avatar-change [avatar]=\"familyPerson.person.avatar ? getAvatarUrl : ''\"\n                                [editable]=\"false\"\n                                [size]=\"'4em'\">\n      </app-person-avatar-change>\n    </div>\n    <div class=\"col-9\">\n      <div class=\"row\">\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Name:</span>\n          <span>{{fullNameWithMiddle | titlecase}}</span>\n        </div>\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Legal Name:</span>\n          <span>{{familyPerson.person.legal_name}}</span>\n        </div>\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\n          <span class=\"app-text-second\">Full Hebrew Name:</span>\n          <span>{{familyPerson.person.hebrew_full_name}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters border-bottom pb-1\">\n\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\n      PARENTS\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Father:</span>\n      <span>{{getFatherFullName}}</span>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Mother:</span>\n      <span>{{getMotherFullName}}</span>\n    </div>\n\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\n      DATE OF BIRTH\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Date of Birth:</span>\n      <span>{{familyPerson.person.dob}}</span>\n    </div>\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\n      <span class=\"app-text-second\">Hebrew Date of Birth:</span>\n      <span>{{familyPerson.person.hebrew_dob}}</span>\n    </div>\n\n    <ng-container *ngIf=\"familyPerson.student_info\">\n      <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\n        CONTACTS\n      </div>\n      <div class=\"col-12 d-flex justify-content-between pb-1\">\n        <span class=\"app-text-second\">Emergency contact:</span>\n        <span>\n        <ng-container *ngIf=\"familyPerson?.student_info?.student_first_contact_relationship\">\n          {{familyPerson.student_info.student_first_contact_relationship}}\n        </ng-container>\n        <ng-container *ngIf=\"familyPerson?.student_info?.student_first_contact_full_name\">\n          {{\" | \" + familyPerson.student_info.student_first_contact_full_name}}\n        </ng-container>\n      </span>\n      </div>\n      <div class=\"col-12 d-flex justify-content-between pb-1\">\n        <span class=\"app-text-second\">Cell Phone:</span>\n        <span>{{familyPerson.student_info.student_first_contact_cell_phone}}</span>\n      </div>\n    </ng-container>\n\n  </div>\n\n  <ng-container *ngIf=\"familyPerson.student_info\">\n    <div class=\"row pt-2\">\n      <div class=\"col\">\n        <nav class=\"navbar navbar-expand-lg navbar-light p-0\">\n          <div class=\"justify-content-left\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link app-nav-link\"\n                   [ngClass]=\"{'app-nav-link-active' : activeTab==='education'}\"\n                   (click)=\"activeTab = 'education'\">\n                  Education\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link app-nav-link\"\n                   [ngClass]=\"{'app-nav-link-active' : activeTab==='medical'}\"\n                   (click)=\"activeTab = 'medical'\">\n                  Medical\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link app-nav-link\"\n                   [ngClass]=\"{'app-nav-link-active' : activeTab==='secondContact'}\"\n                   (click)=\"activeTab = 'secondContact'\">\n                  Second Contact\n                </a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    </div>\n    <app-family-students-education *ngIf=\"activeTab==='education'\"\n                                   [studentInfo]=\"familyPerson.student_info\"></app-family-students-education>\n    <app-family-students-medical *ngIf=\"activeTab==='medical'\"\n                                 [studentInfo]=\"familyPerson.student_info\"></app-family-students-medical>\n    <app-family-students-second-contact *ngIf=\"activeTab==='secondContact'\"\n                                        [studentInfo]=\"familyPerson.student_info\"></app-family-students-second-contact>\n  </ng-container>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-card.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-card.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: FamilyStudentsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyStudentsCardComponent", function() { return FamilyStudentsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/family/helper-family.service */ "./src/app/services/family/helper-family.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");




var FamilyStudentsCardComponent = /** @class */ (function () {
    function FamilyStudentsCardComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
        this.activeTab = 'education';
    }
    Object.defineProperty(FamilyStudentsCardComponent.prototype, "fullNameWithMiddle", {
        get: function () {
            return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyStudentsCardComponent.prototype, "getFatherFullName", {
        get: function () {
            var father = this.familyPerson.parents.find(function (item) { return item.person_role === 'father'; });
            return this.helperFamilyService.getFullName(father);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyStudentsCardComponent.prototype, "getMotherFullName", {
        get: function () {
            var mother = this.familyPerson.parents.find(function (item) { return item.person_role === 'mother'; });
            return this.helperFamilyService.getFullName(mother);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyStudentsCardComponent.prototype, "getAvatarUrl", {
        get: function () {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].avatarUrl + this.familyPerson.person.avatar;
        },
        enumerable: true,
        configurable: true
    });
    FamilyStudentsCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyStudentsCardComponent.prototype, "familyPerson", void 0);
    FamilyStudentsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-students-card',
            template: __webpack_require__(/*! ./family-students-card.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-card.component.html"),
            styles: [__webpack_require__(/*! ./family-students-card.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_2__["HelperFamilyService"]])
    ], FamilyStudentsCardComponent);
    return FamilyStudentsCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LXN0dWRlbnRzLWNhcmQvZmFtaWx5LXN0dWRlbnRzLWVkdWNhdGlvbi9mYW1pbHktc3R1ZGVudHMtZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters pt-3\">\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Current grade:</span>\n    <span>{{studentInfo.student_current_grade}}</span>\n  </div>\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Start Grade:</span>\n    <span>{{studentInfo.student_start_grade}}</span>\n  </div>\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Current School:</span>\n    <span>{{studentInfo.student_current_school}}</span>\n  </div>\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Previous School:</span>\n    <span>{{studentInfo.student_previous_school}}</span>\n  </div>\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Attended:</span>\n    <span>??</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: FamilyStudentsEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyStudentsEducationComponent", function() { return FamilyStudentsEducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FamilyStudentsEducationComponent = /** @class */ (function () {
    function FamilyStudentsEducationComponent() {
    }
    FamilyStudentsEducationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyStudentsEducationComponent.prototype, "studentInfo", void 0);
    FamilyStudentsEducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-students-education',
            template: __webpack_require__(/*! ./family-students-education.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component.html"),
            styles: [__webpack_require__(/*! ./family-students-education.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyStudentsEducationComponent);
    return FamilyStudentsEducationComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LXN0dWRlbnRzLWNhcmQvZmFtaWx5LXN0dWRlbnRzLW1lZGljYWwvZmFtaWx5LXN0dWRlbnRzLW1lZGljYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters pt-3\">\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Medical Conditions:</span>\n    <span>{{studentInfo.student_medical_conditions}}</span>\n  </div>\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Allergies:</span>\n    <span>{{studentInfo.student_allergies}}</span>\n  </div>\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Medications:</span>\n    <span>{{studentInfo.student_medications}}</span>\n  </div>\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Physician:</span>\n    <span>{{studentInfo.student_physician}} | {{studentInfo.student_physician_phone}}</span>\n  </div>\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Address:</span>\n    <span>{{studentInfo.student_physician_country}}, {{studentInfo.student_physician_address}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: FamilyStudentsMedicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyStudentsMedicalComponent", function() { return FamilyStudentsMedicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FamilyStudentsMedicalComponent = /** @class */ (function () {
    function FamilyStudentsMedicalComponent() {
    }
    FamilyStudentsMedicalComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyStudentsMedicalComponent.prototype, "studentInfo", void 0);
    FamilyStudentsMedicalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-students-medical',
            template: __webpack_require__(/*! ./family-students-medical.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component.html"),
            styles: [__webpack_require__(/*! ./family-students-medical.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyStudentsMedicalComponent);
    return FamilyStudentsMedicalComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LXN0dWRlbnRzLWNhcmQvZmFtaWx5LXN0dWRlbnRzLXNlY29uZC1jb250YWN0L2ZhbWlseS1zdHVkZW50cy1zZWNvbmQtY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters pt-3\">\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Emergency contact:</span>\n    <span>{{studentInfo.student_second_contact_relationship}} | {{studentInfo.student_second_contact_full_name}}</span>\n  </div>\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\n    <span class=\"app-text-second\">Cell Phone:</span>\n    <span>{{studentInfo.student_second_contact_cell_phone}}</span>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component.ts":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: FamilyStudentsSecondContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyStudentsSecondContactComponent", function() { return FamilyStudentsSecondContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FamilyStudentsSecondContactComponent = /** @class */ (function () {
    function FamilyStudentsSecondContactComponent() {
    }
    FamilyStudentsSecondContactComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyStudentsSecondContactComponent.prototype, "studentInfo", void 0);
    FamilyStudentsSecondContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-students-second-contact',
            template: __webpack_require__(/*! ./family-students-second-contact.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component.html"),
            styles: [__webpack_require__(/*! ./family-students-second-contact.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyStudentsSecondContactComponent);
    return FamilyStudentsSecondContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LXZpZXctZ2VuZXJhbC1uYXYvZmFtaWx5LXZpZXctZ2VuZXJhbC1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showModal\">\n  <app-family-add-member-modal (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal($event)\">\n  </app-family-add-member-modal>\n</div>\n\n<div class=\"row align-bottom\">\n  <!--Title-->\n  <div class=\"col-6 d-flex align-items-end\">\n    <p class=\"font-weight-bold mb-0\">{{familyName | uppercase}} MEMBERS</p>\n  </div>\n  <!--Search Filter-->\n  <div class=\"col-sm-6\">\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-10 d-flex justify-content-end\">\n        <app-search-field [ngModel]=\"queryParams.query\" (ngModelChange)=\"setSearchQuery($event)\" type=\"gray\" class=\"mr-3\"></app-search-field>\n        <app-search-filter-btn class=\"mr-3\"></app-search-filter-btn>\n        <button class=\"btn app-btn-primary\" (click)=\"onShowAddFamilyMemberModal()\">Add Member</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--Tabs-->\n<div class=\"row pt-2\">\n  <div class=\"col\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-white p-0\">\n      <div class=\"collapse justify-content-left navbar-collapse\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\" *ngFor=\"let item of familyViewGeneralTabs\">\n            <a class=\"nav-link app-nav-link\"\n               [ngClass]=\"{'app-nav-link-active' : queryParams.filter===item.name}\"\n               (click)=\"setActiveTab(item.name)\">\n              {{item.name | titlecase}}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: FamilyViewGeneralNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyViewGeneralNavComponent", function() { return FamilyViewGeneralNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_family_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../models/family/family-view-general-tabs */ "./src/app/models/family/family-view-general-tabs.ts");
/* harmony import */ var _services_family_family_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/family/family.service */ "./src/app/services/family/family.service.ts");
/* harmony import */ var _services_family_family_query_params_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/family/family-query-params.service */ "./src/app/services/family/family-query-params.service.ts");





var FamilyViewGeneralNavComponent = /** @class */ (function () {
    function FamilyViewGeneralNavComponent(familyService, familyQueryParamsService) {
        this.familyService = familyService;
        this.familyQueryParamsService = familyQueryParamsService;
        this.activeTabEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchQueryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyViewGeneralTabs = _models_family_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_2__["familyViewGeneralTabs"];
        this.showModal = false;
    }
    FamilyViewGeneralNavComponent.prototype.ngOnInit = function () {
        this.getFamilyName();
        this.getActiveTab();
    };
    FamilyViewGeneralNavComponent.prototype.getFamilyName = function () {
        var _this = this;
        this.familyService.family.subscribe(function (res) {
            _this.familyName = res.name;
        });
    };
    FamilyViewGeneralNavComponent.prototype.getActiveTab = function () {
        var _this = this;
        this.familyQueryParamsService.familyQueryParams.subscribe(function (params) {
            _this.queryParams = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params);
        });
    };
    FamilyViewGeneralNavComponent.prototype.setActiveTab = function (filter) {
        this.familyQueryParamsService.setFilterParams(filter);
    };
    FamilyViewGeneralNavComponent.prototype.setSearchQuery = function (query) {
        this.familyQueryParamsService.setQueryParams(query);
    };
    FamilyViewGeneralNavComponent.prototype.onShowAddFamilyMemberModal = function () {
        this.showModal = true;
    };
    FamilyViewGeneralNavComponent.prototype.onCloseAddFamilyMemberModal = function () {
        this.showModal = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyViewGeneralNavComponent.prototype, "familyId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyViewGeneralNavComponent.prototype, "activeTabEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyViewGeneralNavComponent.prototype, "searchQueryEmitter", void 0);
    FamilyViewGeneralNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-view-general-nav',
            template: __webpack_require__(/*! ./family-view-general-nav.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component.html"),
            styles: [__webpack_require__(/*! ./family-view-general-nav.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_service__WEBPACK_IMPORTED_MODULE_3__["FamilyService"], _services_family_family_query_params_service__WEBPACK_IMPORTED_MODULE_4__["FamilyQueryParamsService"]])
    ], FamilyViewGeneralNavComponent);
    return FamilyViewGeneralNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-person-card-container {\n    width: 33%;\n}\n\n.app-align-last-row::after {\n    content: \"\";\n    flex: 1 1 100%;\n    max-width: 33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHkvZmFtaWx5LXByb2ZpbGUvZmFtaWx5LXZpZXcvZmFtaWx5LXZpZXctZ2VuZXJhbC9mYW1pbHktdmlldy1nZW5lcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZhbWlseS9mYW1pbHktcHJvZmlsZS9mYW1pbHktdmlldy9mYW1pbHktdmlldy1nZW5lcmFsL2ZhbWlseS12aWV3LWdlbmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtcGVyc29uLWNhcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzMlO1xufVxuXG4uYXBwLWFsaWduLWxhc3Qtcm93OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMzJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-family-view-general-nav [familyId]=\"familyId\"></app-family-view-general-nav>\n<div class=\"d-flex justify-content-between align-items-stretch flex-wrap app-align-last-row\">\n  <div class=\"app-person-card-container mt-2\" *ngFor=\"let item of familyPersons | async\">\n    <app-family-person-card-container [familyPerson]=\"item\">\n      <app-family-parents-card [familyPerson]=\"item\"\n                               *ngIf=\"item.person_role === familyRoles.father || item.person_role === familyRoles.mother\">\n\n      </app-family-parents-card>\n      <app-family-students-card [familyPerson]=\"item\"\n                                *ngIf=\"item.person_role === familyRoles.student\"></app-family-students-card>\n      <app-family-children-card [familyPerson]=\"item\"\n                                *ngIf=\"item.person_role === familyRoles.child\"></app-family-children-card>\n      <app-family-grandparents-card [familyPerson]=\"item\"\n                                    *ngIf=\"item.person_role === familyRoles.grandfather || item.person_role === familyRoles.grandmother\">\n      </app-family-grandparents-card>\n      <app-family-parent-sibling-card [familyPerson]=\"item\"\n                                    *ngIf=\"item.person_role === familyRoles.uncle || item.person_role === familyRoles.aunt\">\n      </app-family-parent-sibling-card>\n    </app-family-person-card-container>\n  </div>\n</div>\n<app-spinner *ngIf=\"loader$ | async\"></app-spinner>"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: FamilyViewGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyViewGeneralComponent", function() { return FamilyViewGeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _models_family_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../models/family/family-view-general-tabs */ "./src/app/models/family/family-view-general-tabs.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _services_family_family_query_params_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/family/family-query-params.service */ "./src/app/services/family/family-query-params.service.ts");







var FamilyViewGeneralComponent = /** @class */ (function () {
    function FamilyViewGeneralComponent(familyPersonService, loaderService, familyQueryParamsService) {
        this.familyPersonService = familyPersonService;
        this.loaderService = loaderService;
        this.familyQueryParamsService = familyQueryParamsService;
        this.familySearchTab = _models_family_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_4__["FAMILY_VIEW_GENERAL_TABS"];
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_3__["FamilyRoles"];
    }
    FamilyViewGeneralComponent.prototype.ngOnInit = function () {
        this.loader$ = this.loaderService.loader;
        this.searchFamilyPerson();
    };
    FamilyViewGeneralComponent.prototype.searchFamilyPerson = function () {
        var _this = this;
        this.getQueryParams().subscribe(function (params) {
            _this.getFamilyPersons(params);
        });
    };
    FamilyViewGeneralComponent.prototype.getQueryParams = function () {
        return this.familyQueryParamsService.familyQueryParams;
    };
    FamilyViewGeneralComponent.prototype.getFamilyPersons = function (params) {
        this.familyPersons = this.familyPersonService.familyPersonList;
        this.familyPersonService.getByFamilyId(this.familyId, params);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FamilyViewGeneralComponent.prototype, "familyId", void 0);
    FamilyViewGeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-view-general',
            template: __webpack_require__(/*! ./family-view-general.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.html"),
            styles: [__webpack_require__(/*! ./family-view-general.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_person_service__WEBPACK_IMPORTED_MODULE_2__["FamilyPersonService"],
            _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _services_family_family_query_params_service__WEBPACK_IMPORTED_MODULE_6__["FamilyQueryParamsService"]])
    ], FamilyViewGeneralComponent);
    return FamilyViewGeneralComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-nav/family-view-nav.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-nav/family-view-nav.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LW5hdi9mYW1pbHktdmlldy1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-nav/family-view-nav.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-nav/family-view-nav.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col\">\n    <nav class=\"navbar navbar-expand-lg navbar-light p-0\">\n      <div class=\"justify-content-left\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item mr-4\" *ngFor=\"let item of familyViewSections\">\n            <a class=\"nav-link app-family-view-nav-link app-text-large font-weight-bold pl-0\"\n               [ngClass]=\"{'app-family-view-nav-link-active' : activeSection===item.name}\"\n               (click)=\"setActiveSection(item.name)\">\n              {{item.name | titlecase}}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n\n  <div class=\"col-sm-6 text-right\">\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-nav/family-view-nav.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-nav/family-view-nav.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FamilyViewNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyViewNavComponent", function() { return FamilyViewNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_family_view_sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/family-view-sections */ "./src/app/modules/family/family-profile/models/family-view-sections.ts");



var FamilyViewNavComponent = /** @class */ (function () {
    function FamilyViewNavComponent() {
        this.activeViewSectionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyViewSections = _models_family_view_sections__WEBPACK_IMPORTED_MODULE_2__["familyViewSections"];
    }
    FamilyViewNavComponent.prototype.ngOnInit = function () {
        this.setActiveSection(this.familyViewSections[0].name);
    };
    FamilyViewNavComponent.prototype.setActiveSection = function (sectionName) {
        this.activeSection = sectionName;
        this.activeViewSectionEmitter.emit(this.activeSection);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyViewNavComponent.prototype, "activeViewSectionEmitter", void 0);
    FamilyViewNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-view-nav',
            template: __webpack_require__(/*! ./family-view-nav.component.html */ "./src/app/modules/family/family-profile/family-view/family-view-nav/family-view-nav.component.html"),
            styles: [__webpack_require__(/*! ./family-view-nav.component.css */ "./src/app/modules/family/family-profile/family-view/family-view-nav/family-view-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyViewNavComponent);
    return FamilyViewNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4\">\n  <app-family-view-nav (activeViewSectionEmitter)=\"setActiveSection($event)\"></app-family-view-nav>\n  <div class=\"app-family-info-wrap p-4\">\n    <app-family-view-general [familyId]=\"familyId\" *ngIf=\"activeSection === FAMILY_VIEW_SECTIONS.GENERAL\"></app-family-view-general>\n    <app-family-view-documents [familyId]=\"familyId\" *ngIf=\"activeSection === FAMILY_VIEW_SECTIONS.DOCUMENTS\"></app-family-view-documents>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view.component.ts ***!
  \************************************************************************************/
/*! exports provided: FamilyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyViewComponent", function() { return FamilyViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_family_view_sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/family-view-sections */ "./src/app/modules/family/family-profile/models/family-view-sections.ts");



var FamilyViewComponent = /** @class */ (function () {
    function FamilyViewComponent() {
        this.FAMILY_VIEW_SECTIONS = _models_family_view_sections__WEBPACK_IMPORTED_MODULE_2__["FAMILY_VIEW_SECTIONS"];
    }
    FamilyViewComponent.prototype.ngOnInit = function () {
    };
    FamilyViewComponent.prototype.setActiveSection = function (sectionName) {
        this.activeSection = sectionName;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FamilyViewComponent.prototype, "familyId", void 0);
    FamilyViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-family-view',
            template: __webpack_require__(/*! ./family-view.component.html */ "./src/app/modules/family/family-profile/family-view/family-view.component.html"),
            styles: [__webpack_require__(/*! ./family-view.component.css */ "./src/app/modules/family/family-profile/family-view/family-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyViewComponent);
    return FamilyViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/family/family-profile/models/family-view-sections.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/models/family-view-sections.ts ***!
  \******************************************************************************/
/*! exports provided: FAMILY_VIEW_SECTIONS, familyViewSections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAMILY_VIEW_SECTIONS", function() { return FAMILY_VIEW_SECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "familyViewSections", function() { return familyViewSections; });
var FAMILY_VIEW_SECTIONS;
(function (FAMILY_VIEW_SECTIONS) {
    FAMILY_VIEW_SECTIONS["GENERAL"] = "general";
    FAMILY_VIEW_SECTIONS["FINANCIAL"] = "financial";
    FAMILY_VIEW_SECTIONS["ACADEMIC"] = "academic";
    FAMILY_VIEW_SECTIONS["BUSINESS"] = "business";
    FAMILY_VIEW_SECTIONS["DOCUMENTS"] = "documents";
})(FAMILY_VIEW_SECTIONS || (FAMILY_VIEW_SECTIONS = {}));
var familyViewSections = [
    { name: FAMILY_VIEW_SECTIONS.GENERAL },
    { name: FAMILY_VIEW_SECTIONS.FINANCIAL },
    { name: FAMILY_VIEW_SECTIONS.ACADEMIC },
    { name: FAMILY_VIEW_SECTIONS.BUSINESS },
    { name: FAMILY_VIEW_SECTIONS.DOCUMENTS },
];


/***/ }),

/***/ "./src/app/modules/family/family-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/family/family-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: routes, FamilyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyRoutingModule", function() { return FamilyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _families_list_families_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./families-list/families-list.component */ "./src/app/modules/family/families-list/families-list.component.ts");
/* harmony import */ var _family_profile_family_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./family-profile/family-profile.component */ "./src/app/modules/family/family-profile/family-profile.component.ts");





var routes = [
    {
        path: '',
        component: _families_list_families_list_component__WEBPACK_IMPORTED_MODULE_3__["FamiliesListComponent"]
    },
    {
        path: 'profile',
        component: _family_profile_family_profile_component__WEBPACK_IMPORTED_MODULE_4__["FamilyProfileComponent"]
    },
    {
        path: 'profile/:id',
        component: _family_profile_family_profile_component__WEBPACK_IMPORTED_MODULE_4__["FamilyProfileComponent"]
    }
];
var FamilyRoutingModule = /** @class */ (function () {
    function FamilyRoutingModule() {
    }
    FamilyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FamilyRoutingModule);
    return FamilyRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/family/family.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/family/family.module.ts ***!
  \*************************************************/
/*! exports provided: FamilyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyModule", function() { return FamilyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _family_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./family-routing.module */ "./src/app/modules/family/family-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _families_list_families_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./families-list/families-list.component */ "./src/app/modules/family/families-list/families-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _family_page_header_family_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./family-page-header/family-page-header.component */ "./src/app/modules/family/family-page-header/family-page-header.component.ts");
/* harmony import */ var _family_profile_family_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./family-profile/family-profile.component */ "./src/app/modules/family/family-profile/family-profile.component.ts");
/* harmony import */ var _family_profile_family_profile_info_family_profile_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./family-profile/family-profile-info/family-profile-info.component */ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./family-profile/family-view/family-view.component */ "./src/app/modules/family/family-profile/family-view/family-view.component.ts");
/* harmony import */ var _families_list_family_create_modal_family_create_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./families-list/family-create-modal/family-create-modal.component */ "./src/app/modules/family/families-list/family-create-modal/family-create-modal.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_nav_family_view_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./family-profile/family-view/family-view-nav/family-view-nav.component */ "./src/app/modules/family/family-profile/family-view/family-view-nav/family-view-nav.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_view_general_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-view-general.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_view_general_nav_family_view_general_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general-nav/family-view-general-nav.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_parents_card_family_parents_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parents-card/family-parents-card.component.ts");
/* harmony import */ var _services_family_family_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/family/family.service */ "./src/app/services/family/family.service.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_children_card_family_children_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-children-card/family-children-card.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-children-card/family-children-card.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_students_card_family_students_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-students-card/family-students-card.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-card.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_grandparents_card_family_grandparents_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-grandparents-card/family-grandparents-card.component.ts");
/* harmony import */ var _shared_components_sharedRedComponents_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/components/sharedRedComponents.module */ "./src/app/shared/components/sharedRedComponents.module.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_add_member_modal_family_add_member_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-member-modal.component.ts");
/* harmony import */ var _services_person_person_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/person/person.service */ "./src/app/services/person/person.service.ts");
/* harmony import */ var _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../services/family/family-person.service */ "./src/app/services/family/family-person.service.ts");
/* harmony import */ var _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/family/helper-family.service */ "./src/app/services/family/helper-family.service.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_students_card_family_students_education_family_students_education_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-education/family-students-education.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_students_card_family_students_medical_family_students_medical_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-medical/family-students-medical.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_students_card_family_students_second_contact_family_students_second_contact_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-students-card/family-students-second-contact/family-students-second-contact.component.ts");
/* harmony import */ var _family_profile_family_profile_info_family_profile_info_view_family_profile_info_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component */ "./src/app/modules/family/family-profile/family-profile-info/family-profile-info-view/family-profile-info-view.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_add_member_modal_family_add_exist_person_family_add_exist_person_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-exist-person/family-add-exist-person.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_person_family_add_new_person_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_parent_family_add_new_parent_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent/family-add-new-parent.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_child_family_add_new_child_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-child/family-add-new-child.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_person_card_container_family_person_card_container_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-person-card-container/family-person-card-container.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_remove_member_modal_family_remove_member_modal_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-remove-member-modal/family-remove-member-modal.component.ts");
/* harmony import */ var _services_family_family_query_params_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../services/family/family-query-params.service */ "./src/app/services/family/family-query-params.service.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_member_modal_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-member-modal.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_child_family_edit_child_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-child/family-edit-child.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_parent_family_edit_parent_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent/family-edit-parent.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_grandparents_family_add_new_grandparents_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-grandparents/family-add-new-grandparents.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_grandparent_family_edit_grandparent_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-grandparent/family-edit-grandparent.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_documents_family_view_documents_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./family-profile/family-view/family-view-documents/family-view-documents.component */ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_documents_family_view_documents_nav_family_view_documents_nav_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component */ "./src/app/modules/family/family-profile/family-view/family-view-documents/family-view-documents-nav/family-view-documents-nav.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_parent_sibling_family_add_new_parent_sibling_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-parent-sibling/family-add-new-parent-sibling.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_parent_sibling_card_family_parent_sibling_card_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-parent-sibling-card/family-parent-sibling-card.component.ts");
/* harmony import */ var _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_parent_sibling_family_edit_parent_sibling_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component */ "./src/app/modules/family/family-profile/family-view/family-view-general/family-edit-member-modal/family-edit-parent-sibling/family-edit-parent-sibling.component.ts");
/* harmony import */ var _utils_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../utils/directives/general-directives.module */ "./src/app/utils/directives/general-directives.module.ts");
















































var FamilyModule = /** @class */ (function () {
    function FamilyModule() {
    }
    FamilyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _families_list_families_list_component__WEBPACK_IMPORTED_MODULE_5__["FamiliesListComponent"],
                _family_page_header_family_page_header_component__WEBPACK_IMPORTED_MODULE_7__["FamilyPageHeaderComponent"],
                _family_profile_family_profile_component__WEBPACK_IMPORTED_MODULE_8__["FamilyProfileComponent"],
                _family_profile_family_profile_info_family_profile_info_component__WEBPACK_IMPORTED_MODULE_9__["FamilyProfileInfoComponent"],
                _family_profile_family_view_family_view_component__WEBPACK_IMPORTED_MODULE_10__["FamilyViewComponent"],
                _families_list_family_create_modal_family_create_modal_component__WEBPACK_IMPORTED_MODULE_11__["FamilyCreateModalComponent"],
                _family_profile_family_view_family_view_nav_family_view_nav_component__WEBPACK_IMPORTED_MODULE_12__["FamilyViewNavComponent"],
                _family_profile_family_view_family_view_general_family_view_general_component__WEBPACK_IMPORTED_MODULE_13__["FamilyViewGeneralComponent"],
                _family_profile_family_view_family_view_general_family_view_general_nav_family_view_general_nav_component__WEBPACK_IMPORTED_MODULE_14__["FamilyViewGeneralNavComponent"],
                _family_profile_family_view_family_view_general_family_parents_card_family_parents_card_component__WEBPACK_IMPORTED_MODULE_15__["FamilyParentsCardComponent"],
                _family_profile_family_view_family_view_general_family_children_card_family_children_card_component__WEBPACK_IMPORTED_MODULE_17__["FamilyChildrenCardComponent"],
                _family_profile_family_view_family_view_general_family_students_card_family_students_card_component__WEBPACK_IMPORTED_MODULE_18__["FamilyStudentsCardComponent"],
                _family_profile_family_view_family_view_general_family_grandparents_card_family_grandparents_card_component__WEBPACK_IMPORTED_MODULE_19__["FamilyGrandparentsCardComponent"],
                _family_profile_family_view_family_view_general_family_add_member_modal_family_add_member_modal_component__WEBPACK_IMPORTED_MODULE_21__["FamilyAddMemberModalComponent"],
                _family_profile_family_view_family_view_general_family_students_card_family_students_education_family_students_education_component__WEBPACK_IMPORTED_MODULE_26__["FamilyStudentsEducationComponent"],
                _family_profile_family_view_family_view_general_family_students_card_family_students_medical_family_students_medical_component__WEBPACK_IMPORTED_MODULE_27__["FamilyStudentsMedicalComponent"],
                _family_profile_family_view_family_view_general_family_students_card_family_students_second_contact_family_students_second_contact_component__WEBPACK_IMPORTED_MODULE_28__["FamilyStudentsSecondContactComponent"],
                _family_profile_family_profile_info_family_profile_info_view_family_profile_info_view_component__WEBPACK_IMPORTED_MODULE_29__["FamilyProfileInfoViewComponent"],
                _family_profile_family_view_family_view_general_family_add_member_modal_family_add_exist_person_family_add_exist_person_component__WEBPACK_IMPORTED_MODULE_30__["FamilyAddExistPersonComponent"],
                _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_person_family_add_new_person_component__WEBPACK_IMPORTED_MODULE_31__["FamilyAddNewPersonComponent"],
                _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_parent_family_add_new_parent_component__WEBPACK_IMPORTED_MODULE_32__["FamilyAddNewParentComponent"],
                _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_child_family_add_new_child_component__WEBPACK_IMPORTED_MODULE_33__["FamilyAddNewChildComponent"],
                _family_profile_family_view_family_view_general_family_person_card_container_family_person_card_container_component__WEBPACK_IMPORTED_MODULE_34__["FamilyPersonCardContainerComponent"],
                _family_profile_family_view_family_view_general_family_remove_member_modal_family_remove_member_modal_component__WEBPACK_IMPORTED_MODULE_35__["FamilyRemoveMemberModalComponent"],
                _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_member_modal_component__WEBPACK_IMPORTED_MODULE_37__["FamilyEditMemberModalComponent"],
                _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_child_family_edit_child_component__WEBPACK_IMPORTED_MODULE_38__["FamilyEditChildComponent"],
                _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_parent_family_edit_parent_component__WEBPACK_IMPORTED_MODULE_39__["FamilyEditParentComponent"],
                _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_grandparents_family_add_new_grandparents_component__WEBPACK_IMPORTED_MODULE_40__["FamilyAddNewGrandparentsComponent"],
                _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_grandparent_family_edit_grandparent_component__WEBPACK_IMPORTED_MODULE_41__["FamilyEditGrandparentComponent"],
                _family_profile_family_view_family_view_documents_family_view_documents_component__WEBPACK_IMPORTED_MODULE_42__["FamilyViewDocumentsComponent"],
                _family_profile_family_view_family_view_documents_family_view_documents_nav_family_view_documents_nav_component__WEBPACK_IMPORTED_MODULE_43__["FamilyViewDocumentsNavComponent"],
                _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_parent_sibling_family_add_new_parent_sibling_component__WEBPACK_IMPORTED_MODULE_44__["FamilyAddNewParentSiblingComponent"],
                _family_profile_family_view_family_view_general_family_parent_sibling_card_family_parent_sibling_card_component__WEBPACK_IMPORTED_MODULE_45__["FamilyParentSiblingCardComponent"],
                _family_profile_family_view_family_view_general_family_edit_member_modal_family_edit_parent_sibling_family_edit_parent_sibling_component__WEBPACK_IMPORTED_MODULE_46__["FamilyEditParentSiblingComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _family_routing_module__WEBPACK_IMPORTED_MODULE_3__["FamilyRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_components_sharedRedComponents_module__WEBPACK_IMPORTED_MODULE_20__["SharedRedComponentsModule"],
                _utils_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_47__["GeneralDirectivesModule"]
            ],
            providers: [
                _services_family_family_service__WEBPACK_IMPORTED_MODULE_16__["FamilyService"],
                _services_person_person_service__WEBPACK_IMPORTED_MODULE_22__["PersonService"],
                _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_23__["FamilyPersonService"],
                _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_24__["HelperFamilyService"],
                _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_25__["LoaderService"],
                _services_family_family_query_params_service__WEBPACK_IMPORTED_MODULE_36__["FamilyQueryParamsService"]
            ]
        })
    ], FamilyModule);
    return FamilyModule;
}());



/***/ }),

/***/ "./src/app/services/family/family-person.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/family/family-person.service.ts ***!
  \**********************************************************/
/*! exports provided: FamilyPersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyPersonService", function() { return FamilyPersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _family_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./family.service */ "./src/app/services/family/family.service.ts");
/* harmony import */ var _enums_family_roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enums/family-roles */ "./src/app/enums/family-roles.ts");
/* harmony import */ var _family_query_params_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./family-query-params.service */ "./src/app/services/family/family-query-params.service.ts");
/* harmony import */ var _models_family_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/family/family-view-general-tabs */ "./src/app/models/family/family-view-general-tabs.ts");









var FamilyPersonService = /** @class */ (function () {
    function FamilyPersonService(http, familyService, familyQueryParamsService) {
        this.http = http;
        this.familyService = familyService;
        this.familyQueryParamsService = familyQueryParamsService;
        this._familyPersonList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_6__["FamilyRoles"];
        this.FAMILY_VIEW_GENERAL_TABS = _models_family_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_8__["FAMILY_VIEW_GENERAL_TABS"];
        this.dataStore = {
            familyPersonList: [],
        };
    }
    Object.defineProperty(FamilyPersonService.prototype, "familyPersonList", {
        get: function () {
            return this._familyPersonList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    FamilyPersonService.prototype.getByFamilyId = function (familyId, params) {
        var _this = this;
        this.getByFamilyIdRequest(familyId, params).subscribe(function (data) {
            _this.dataStore.familyPersonList = data;
            _this._familyPersonList.next(Object.assign({}, _this.dataStore).familyPersonList);
        }, function (error) { return console.log('Could not load family persons. Error: ' + error.message); });
    };
    FamilyPersonService.prototype.add = function (data) {
        var _this = this;
        this.addOneRequest(data).subscribe(function (res) {
            // this.dataStore.familyPersonList.push(res);
            // this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
            if (res.person_role === _this.familyRoles.student)
                _this.familyService.incrementFieldCount('students_count');
            if (res.person_role === _this.familyRoles.child)
                _this.familyService.incrementFieldCount('children_count');
            _this.familyQueryParamsService.setFilterParams(_this.FAMILY_VIEW_GENERAL_TABS.ALL);
        }, function (error) { return console.log('Could not add families persons. Error: ' + error.message); });
    };
    FamilyPersonService.prototype.update = function (data, id) {
        var _this = this;
        this.updateOneRequest(data, id).subscribe(function (res) {
            // this.dataStore.familyPersonList.forEach((item, i) => {
            //   if (item.id == res.id) {
            //     this.dataStore.familyPersonList[i] = res;
            //   }
            //   this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
            //   });
            _this.familyQueryParamsService.setFilterParams(_this.FAMILY_VIEW_GENERAL_TABS.ALL);
        });
    };
    FamilyPersonService.prototype.delete = function (id, role) {
        var _this = this;
        this.deleteOneRequest(id).subscribe(function (id) {
            // this.dataStore.familyPersonList.forEach((item, i) => {
            // if (item.id == id) {
            //   this.dataStore.familyPersonList.splice(i, 1);
            // }
            // this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
            // });
            if (role === _this.familyRoles.student)
                _this.familyService.decrementFieldCount('students_count');
            if (role === _this.familyRoles.child)
                _this.familyService.decrementFieldCount('children_count');
            _this.familyQueryParamsService.setFilterParams(_this.FAMILY_VIEW_GENERAL_TABS.ALL);
        }, function (error) { return console.log('Could not delete family person. Error: ' + error.message); });
    };
    FamilyPersonService.prototype.getByFamilyIdRequest = function (familyId, params) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        if (params)
            options['params'] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('params', JSON.stringify(params));
        return this.http.get("/person/family/" + familyId, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res.errors);
            }
        }));
    };
    FamilyPersonService.prototype.addOneRequest = function (data) {
        return this.http.post("/person/family", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res.errors);
            }
        }));
    };
    FamilyPersonService.prototype.updateOneRequest = function (data, id) {
        return this.http.put("/person/family/" + id, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res.errors);
            }
        }));
    };
    FamilyPersonService.prototype.deleteOneRequest = function (id) {
        return this.http.delete("person/family/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res.errors);
            }
        }));
    };
    FamilyPersonService.prototype.getAllRequest = function () {
        return this.http.get('/person/family').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res.errors);
            }
        }));
    };
    FamilyPersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _family_service__WEBPACK_IMPORTED_MODULE_5__["FamilyService"],
            _family_query_params_service__WEBPACK_IMPORTED_MODULE_7__["FamilyQueryParamsService"]])
    ], FamilyPersonService);
    return FamilyPersonService;
}());



/***/ }),

/***/ "./src/app/services/family/family-query-params.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/family/family-query-params.service.ts ***!
  \****************************************************************/
/*! exports provided: FamilyQueryParamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyQueryParamsService", function() { return FamilyQueryParamsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_family_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/family/family-view-general-tabs */ "./src/app/models/family/family-view-general-tabs.ts");




var FamilyQueryParamsService = /** @class */ (function () {
    function FamilyQueryParamsService() {
        this._familyQueryParams = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.FAMILY_VIEW_GENERAL_TABS = _models_family_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_3__["FAMILY_VIEW_GENERAL_TABS"];
        this.dataStore = {
            familyQueryParams: {
                filter: _models_family_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_3__["FAMILY_VIEW_GENERAL_TABS"].ALL,
                query: '',
            }
        };
        this._familyQueryParams.next(Object.assign({}, this.dataStore).familyQueryParams);
    }
    Object.defineProperty(FamilyQueryParamsService.prototype, "familyQueryParams", {
        get: function () {
            return this._familyQueryParams.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    FamilyQueryParamsService.prototype.setQueryParams = function (query) {
        this.dataStore.familyQueryParams.query = query;
        this._familyQueryParams.next(Object.assign({}, this.dataStore).familyQueryParams);
    };
    FamilyQueryParamsService.prototype.setFilterParams = function (filter) {
        this.dataStore.familyQueryParams.filter = filter;
        this._familyQueryParams.next(Object.assign({}, this.dataStore).familyQueryParams);
    };
    FamilyQueryParamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FamilyQueryParamsService);
    return FamilyQueryParamsService;
}());



/***/ }),

/***/ "./src/app/services/family/family.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/family/family.service.ts ***!
  \***************************************************/
/*! exports provided: FamilyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyService", function() { return FamilyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/services/loader/loader.service.ts");






var FamilyService = /** @class */ (function () {
    function FamilyService(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
        this._familyList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._family = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.dataStore = {
            familyList: [],
            family: null,
        };
    }
    Object.defineProperty(FamilyService.prototype, "familyList", {
        get: function () {
            return this._familyList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyService.prototype, "family", {
        get: function () {
            return this._family.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    FamilyService.prototype.getAll = function () {
        var _this = this;
        this.loaderService.startLoader();
        this.getAllRequest().subscribe(function (res) {
            if (res.success) {
                _this.loaderService.stopLoader();
                _this.dataStore.familyList = res.data;
                _this._familyList.next(Object.assign({}, _this.dataStore).familyList);
            }
        }, function (error) { return console.log('Could not load families. Error: ' + error.message); });
    };
    FamilyService.prototype.getOne = function (family_id) {
        var _this = this;
        this.loaderService.startLoader();
        this.getOneRequest(family_id).subscribe(function (res) {
            if (res.success) {
                _this.loaderService.stopLoader();
                _this.dataStore.family = res.data[0];
                _this._family.next(Object.assign({}, _this.dataStore).family);
            }
        }, function (error) { return console.log('Could not load family. Error: ' + error.message); });
    };
    FamilyService.prototype.add = function (familyName) {
        var _this = this;
        this.loaderService.startLoader();
        this.createOneRequest(familyName).subscribe(function (res) {
            if (res.success) {
                _this.loaderService.stopLoader();
                _this.dataStore.familyList.push(res.data);
                _this._familyList.next(Object.assign({}, _this.dataStore).familyList);
            }
        }, function (error) { return console.log('Could not add family. Error: ' + error.message); });
    };
    FamilyService.prototype.update = function (family) {
        var _this = this;
        this.loaderService.startLoader();
        this.updateOneRequest(family).subscribe(function (res) {
            if (res.success) {
                _this.loaderService.stopLoader();
                _this.dataStore.family = res.data;
                _this._family.next(Object.assign({}, _this.dataStore).family);
                _this.dataStore.familyList.forEach(function (item, i) {
                    if (item.family_id === res.data.family_id) {
                        _this.dataStore.familyList[i] = res.data;
                    }
                });
                _this._familyList.next(Object.assign({}, _this.dataStore).familyList);
            }
        }, function (error) { return console.log('Could not update family. Error: ' + error.message); });
    };
    FamilyService.prototype.delete = function (familyId) {
        var _this = this;
        this.loaderService.startLoader();
        this.deleteOneRequest(familyId).subscribe(function (data) {
            if (data.success) {
                _this.loaderService.stopLoader();
                _this.dataStore.familyList.forEach(function (item, i) {
                    if (item.family_id === data.id) {
                        _this.dataStore.familyList.splice(i, 1);
                    }
                });
                _this._familyList.next(Object.assign({}, _this.dataStore).familyList);
            }
        }, function (error) { return console.log('Could not delete family. Error: ' + error.message); });
    };
    FamilyService.prototype.incrementFieldCount = function (fieldName) {
        this.dataStore.family[fieldName]++;
        this._family.next(Object.assign({}, this.dataStore).family);
    };
    FamilyService.prototype.decrementFieldCount = function (fieldName) {
        this.dataStore.family[fieldName]--;
        this._family.next(Object.assign({}, this.dataStore).family);
    };
    FamilyService.prototype.getAllRequest = function () {
        return this.http.get("/families").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    FamilyService.prototype.getOneRequest = function (family_id) {
        return this.http.get("/families/" + family_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    FamilyService.prototype.createOneRequest = function (name) {
        return this.http.post("/families", { name: name }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    FamilyService.prototype.updateOneRequest = function (family) {
        return this.http.put("/families/" + family.family_id, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, family)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    FamilyService.prototype.deleteOneRequest = function (familyId) {
        return this.http.delete("/families/" + familyId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    FamilyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], FamilyService);
    return FamilyService;
}());



/***/ }),

/***/ "./src/app/services/family/helper-family.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/family/helper-family.service.ts ***!
  \**********************************************************/
/*! exports provided: HelperFamilyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperFamilyService", function() { return HelperFamilyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var HelperFamilyService = /** @class */ (function () {
    function HelperFamilyService() {
    }
    HelperFamilyService.prototype.getFullName = function (familyPerson) {
        var fullName = '';
        if (!familyPerson || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(familyPerson))
            return;
        fullName += familyPerson.person.first_name ? familyPerson.person.first_name : '';
        fullName += familyPerson.person.last_name ? ' ' + familyPerson.person.last_name : '';
        return fullName;
    };
    HelperFamilyService.prototype.getFullWithMiddleName = function (familyPerson) {
        var fullName = '';
        if (!familyPerson || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(familyPerson))
            return;
        fullName += familyPerson.person.first_name ? familyPerson.person.first_name : '';
        fullName += familyPerson.person.middle_name ? ' ' + familyPerson.person.middle_name : '';
        fullName += familyPerson.person.last_name ? ' ' + familyPerson.person.last_name : '';
        return fullName;
    };
    HelperFamilyService.prototype.getFullFamilyAddress = function (family) {
        var fullAddress = '';
        if (!family || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(family))
            return;
        fullAddress += family.family_info.address ? family.family_info.address : '';
        fullAddress += family.family_info.state ? ', ' + family.family_info.state : '';
        fullAddress += family.family_info.city ? ', ' + family.family_info.city : '';
        fullAddress += family.family_info.zip ? ', ' + family.family_info.zip : '';
        return fullAddress;
    };
    HelperFamilyService.prototype.getFullPersonFamilyAddress = function (familyPeron) {
        var fullAddress = '';
        if (!familyPeron || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(familyPeron))
            return;
        fullAddress += familyPeron.person.country ? familyPeron.person.address : '';
        fullAddress += familyPeron.person.state ? ', ' + familyPeron.person.state : '';
        fullAddress += familyPeron.person.city ? ', ' + familyPeron.person.city : '';
        fullAddress += familyPeron.person.address ? ', ' + familyPeron.person.address : '';
        return fullAddress;
    };
    HelperFamilyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelperFamilyService);
    return HelperFamilyService;
}());



/***/ }),

/***/ "./src/app/services/loader/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/loader/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this._loader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    Object.defineProperty(LoaderService.prototype, "loader", {
        get: function () {
            return this._loader.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoaderService.prototype.startLoader = function () {
        this._loader.next(true);
    };
    LoaderService.prototype.stopLoader = function () {
        this._loader.next(false);
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ })

}]);
//# sourceMappingURL=family-family-module.js.map