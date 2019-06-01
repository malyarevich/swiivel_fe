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

module.exports = "<app-family-page-header [titleHeader]=\"'FAMILIES LIST'\"></app-family-page-header>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-12 text-right\">\r\n      <button class=\"btn app-btn-primary\" (click)=\"showFamilyAddModal()\">Create New</button>\r\n      <app-family-create-modal *ngIf=\"showModal\"\r\n                               (closeFamilyModal)=onCloseFamilyAddModal($event)>\r\n      </app-family-create-modal>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-3 app-of-wrap py-5\">\r\n    <div class=\"col-8 offset-2\">\r\n      <table class=\"table\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\"></th>\r\n          <th scope=\"col\">Family Name</th>\r\n          <th></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of familyList$ | async; index as i\">\r\n          <th scope=\"row\">{{ i + 1 }}</th>\r\n          <td class=\"font-weight-bold\">{{ item.name }}</td>\r\n          <th class=\"text-right\">\r\n            <button class=\"btn app-btn-primary px-2 py-0 mr-2\" [routerLink]=\"'profile/'+ item.family_id\">Edit</button>\r\n            <button class=\"btn btn-danger px-2 py-0\" (click)=\"deleteFamily(item.family_id)\">Delete</button>\r\n          </th>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n      <app-spinner *ngIf=\"loader$ | async\"></app-spinner>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<app-modal [title]=\"'Add Family'\" [width]=\"'30%'\"  (closeModal)=\"onCloseFamilyModal()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-left\">\r\n      <app-input-field [(ngModel)]=\"familyName\" [label]=\"'Family Name'\"></app-input-field>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-right pt-4\">\r\n    <div class=\"col-12\">\r\n      <button class=\"btn app-btn-warning mr-2\" (click)=\"onCloseFamilyModal()\">Cancel</button>\r\n      <button [disabled]=\"!familyName\" class=\"btn app-btn-primary\" (click)=\"save()\">Save</button>\r\n    </div>\r\n  </div>\r\n</app-modal>"

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

module.exports = "<div class=\"row no-gutters app-family-page-header pr-3\">\r\n  <div class=\"col-10\">\r\n    <div class=\"d-inline-block back p-3 mr-3 app-cursor-pointer\" routerLink=\"/vertical-data-collection\">\r\n      <i class=\"fas fa-chevron-left\"></i>\r\n    </div>\r\n    <span>{{titleHeader}}</span>\r\n  </div>\r\n  <div class=\"col-2 pt-2\">\r\n    <div class=\"app-input-search-container\">\r\n      <i class=\"fas fa-search app-input-search-icon\"></i>\r\n      <input type=\"text\" class=\"form-control app-input-search\" placeholder=\"Search\"\r\n             [(ngModel)]=\"searchValue\" (ngModelChange)=\"onSearchValue()\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<p class=\"app-text-extra-large font-weight-bold\">{{family?.name}}</p>\r\n\r\n<div class=\"row  no-gutters border-top border-bottom py-3 text-center\">\r\n  <div class=\"col-6 border-right px-4\">\r\n    <p class=\"app-text-large font-weight-bold mb-0\">{{family?.students_count}}</p>\r\n    <p class=\"app-text-small mb-0\">Students</p>\r\n  </div>\r\n  <div class=\"col-6 px-4\">\r\n    <p class=\"app-text-large font-weight-bold mb-0\">{{family?.children_count}}</p>\r\n    <p class=\"app-text-small mb-0\">Children living at home</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row  no-gutters border-bottom py-3\">\r\n  <div class=\"col-12\">\r\n    <p class=\"font-weight-bold mb-2\">CONTACTS</p>\r\n    <div class=\"d-flex justify-content-between\">\r\n      <p class=\"align-self-start app-text-second mb-2\">Address:</p>\r\n      <p class=\"align-self-end mb-2\">{{fullFamilyAddress}}</p>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between\">\r\n      <p class=\"align-self-start app-text-second mb-2\">Prefered Contact:</p>\r\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.preferred_contact}}</p>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between\">\r\n      <p class=\"align-self-start app-text-second mb-2\">Contact number:</p>\r\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.preferred_contact_method}}</p>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between\">\r\n      <p class=\"align-self-start app-text-second mb-2\">Home Phone Number:</p>\r\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.home_phone_number}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row  no-gutters border-bottom py-3\">\r\n  <div class=\"col-12\">\r\n    <p class=\"font-weight-bold mb-2\">ADDITIONAL INFORMATION</p>\r\n    <div class=\"d-flex justify-content-between\">\r\n      <p class=\"align-self-start app-text-second mb-2\">Language Spoken at Home:</p>\r\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.language_spoken_at_home}}</p>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between\">\r\n      <p class=\"align-self-start app-text-second mb-2\">Family Rabbi:</p>\r\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.family_rabbi}}</p>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between\">\r\n      <p class=\"align-self-start app-text-second mb-2\">Family Rabbi Phone:</p>\r\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.rabbi_phone_number}}</p>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between\">\r\n      <p class=\"align-self-start app-text-second mb-2\">Family Shul:</p>\r\n      <p class=\"align-self-end mb-2\">{{family?.family_info?.family_shul}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row text-right mt-4\">\r\n  <div class=\"col-12\">\r\n    <button class=\"btn app-btn-primary px-4\" (click)=\"onEdit()\">Edit</button>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<app-spinner *ngIf=\"loader$ | async\"></app-spinner>\r\n<ng-container *ngIf=\"family\">\r\n  <!--Show profile info-->\r\n  <app-family-profile-info-view *ngIf=\"!isEditProfile\" [family]=\"family\"\r\n                                (isEditEmitter)=\"onEdit($event)\"></app-family-profile-info-view>\r\n  <!--End Show profile info-->\r\n\r\n  <!--Edit profile info-->\r\n  <form *ngIf=\"isEditProfile\" [formGroup]=\"familyForm\" (ngSubmit)=\"submit()\">\r\n\r\n    <!--Family Name-->\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-10\">\r\n        <p [hidden]=\"isEditFamilyName\" class=\"app-text-extra-large font-weight-bold mb-0\">\r\n          {{familyForm.value.name}}</p>\r\n        <input type=\"text\"\r\n               class=\"form-control w-75\"\r\n               autofocus\r\n               formControlName=\"name\"\r\n               [hidden]=\"!isEditFamilyName\"\r\n               (blur)=\"isEditFamilyName = false\"\r\n               (keyup.enter)=\"isEditFamilyName = false\"\r\n               placeholder=\"Family Name\">\r\n      </div>\r\n\r\n      <div class=\"col-2 pt-1\">\r\n        <i class=\"fas fa-trash fa-sm app-text-second mr-4 app-cursor-pointer\"></i>\r\n        <i class=\"fas fa-pen fa-sm app-text-second app-cursor-pointer\" (click)=\"isEditFamilyName = true\"></i>\r\n      </div>\r\n    </div>\r\n    <!--End Family Name-->\r\n\r\n    <!--Address-->\r\n    <p class=\"font-weight-bold app-text-small mt-3 mb-1\">ADDRESS</p>\r\n    <div class=\"row no-gutters app-family-profile-section p-3\">\r\n\r\n      <div class=\"col-12 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">Home Address</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"address\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-4 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">City</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"city\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-4 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">State</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"state\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-4 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">Zip Code</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"zip\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!--End Address-->\r\n\r\n    <!--Contacts-->\r\n    <p class=\"font-weight-bold app-text-small mt-4 mb-1\">CONTACTS</p>\r\n    <div class=\"row no-gutters app-family-profile-section p-3\">\r\n\r\n      <div class=\"col-12 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">Preferred Contact</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"preferred_contact\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-12 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">Preferred Contact Method</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"preferred_contact_method\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-12 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">Home Phone Number</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"home_phone_number\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!--End Contacts-->\r\n\r\n    <!--Custom Fields-->\r\n    <p class=\"font-weight-bold app-text-small mt-4 mb-1\">CUSTOM FIELDS</p>\r\n    <div class=\"row no-gutters app-family-profile-section p-3\">\r\n\r\n      <div class=\"col-12 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">Language Spoken at Home</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"language_spoken_at_home\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-6 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">Family Rabbi</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"family_rabbi\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-6 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">Rabbi Phone number</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"rabbi_phone_number\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-12 p-2\">\r\n        <div class=\"app-input-fill\">\r\n          <label class=\"app-input-label app-family-profile-input\">Family Shul</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"app-input\"\r\n            formControlName=\"family_shul\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!--End Custom Fields-->\r\n\r\n    <div class=\"row text-right mt-4\">\r\n      <div class=\"col-12\">\r\n        <button class=\"btn app-btn-warning px-4 mr-2\" (click)=\"onEdit(false); $event.preventDefault()\">Cancel</button>\r\n        <button type=\"submit\" [disabled]=\"!familyForm.valid\" class=\"btn app-btn-primary px-4\">Save</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <!--End Edit profile info-->\r\n</ng-container>"

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





var FamilyProfileInfoComponent = /** @class */ (function () {
    function FamilyProfileInfoComponent(familyService, loaderService, formBuilder) {
        this.familyService = familyService;
        this.loaderService = loaderService;
        this.formBuilder = formBuilder;
        this.isEditProfile = false;
        this.isEditFamilyName = false;
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
    };
    FamilyProfileInfoComponent.prototype.getFamily = function (familyId) {
        var _this = this;
        this.familyService.family.subscribe(function (family) {
            _this.family = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, family);
            var familyInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.family.family_info);
            _this.familyForm.patchValue(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ name: family.name }, familyInfo));
        });
        this.familyService.getOne(familyId);
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
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

module.exports = "<app-family-page-header [titleHeader]=\"'FAMILY PROFILE'\"></app-family-page-header>\r\n\r\n<div class=\"row no-gutters\">\r\n  <div class=\"col-3 app-family-info-wrap p-4\">\r\n    <app-family-profile-info [familyId]=\"familyId\"></app-family-profile-info>\r\n  </div>\r\n  <div class=\"col-9\">\r\n    <app-family-view [familyId]=\"familyId\"></app-family-view>\r\n  </div>\r\n</div>"

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

module.exports = "<div *ngIf=\"persons.length\">\r\n  <form [formGroup]=\"familyPersonForm\" (ngSubmit)=\"addFamilyPerson()\">\r\n\r\n    <div class=\"row pb-5\">\r\n      <div class=\"col-8\">\r\n        <app-select-multi-search-field\r\n          bindValue=\"id\"\r\n          bindLabel=\"name\"\r\n          [formControlName]=\"'members'\"\r\n          labelTitle=\"\"\r\n          [isInvalid]=\"familyPersonForm.get('members').invalid && familyPersonForm.get('members').touched\"\r\n          [items]=\"persons\"\r\n        >\r\n        </app-select-multi-search-field>\r\n        <div\r\n          class=\"field-has-error\"\r\n          *ngIf=\"familyPersonForm.get('members').invalid && familyPersonForm.get('members').touched && familyPersonForm.get('members')['errors']['required']\"\r\n        >\r\n          Members is required\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-4\">\r\n        <app-select-field\r\n\r\n          [formControlName]=\"'role'\"\r\n          labelTitle=\"Roles\"\r\n          [isInvalid]=\"familyPersonForm.get('role').invalid && familyPersonForm.get('role').touched\"\r\n          [items]=\"roles\"\r\n        >\r\n        </app-select-field>\r\n        <div\r\n          class=\"field-has-error\"\r\n          *ngIf=\"familyPersonForm.get('role').invalid && familyPersonForm.get('role').touched && familyPersonForm.get('role')['errors']['required']\"\r\n        >\r\n          Role is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-right\">\r\n        <button (click)=\"onCloseAddFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\r\n          Cancel\r\n        </button>\r\n\r\n        <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyPersonForm.invalid\">\r\n          Add Account\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

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

module.exports = "<app-modal [width]=\"'40%'\" [title]=\"'Add ' + family?.name + ' Members'\" (closeModal)=\"onCloseAddFamilyMemberModal()\">\r\n  <div class=\"row pt-2 pb-3\">\r\n    <div class=\"col\">\r\n      <nav class=\"navbar navbar-expand navbar-light bg-white p-0\">\r\n        <div class=\"collapse justify-content-left navbar-collapse\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item mr-2\">\r\n              <a class=\"nav-link app-nav-link\"\r\n                 [ngClass]=\"{'app-nav-link-active' : activeTab==='exist'}\"\r\n                 (click)=\"setActiveTab('exist')\">\r\n                Add Exist\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link app-nav-link\"\r\n                 [ngClass]=\"{'app-nav-link-active' : activeTab==='new'}\"\r\n                 (click)=\"setActiveTab('new')\">\r\n                Create New\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n\r\n  <app-family-add-exist-person *ngIf=\"activeTab==='exist'\" [family]=\"family\"\r\n                               (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\">\r\n  </app-family-add-exist-person>\r\n  <app-family-add-new-person *ngIf=\"activeTab==='new'\"\r\n                             [family]=\"family\"\r\n                             (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\">\r\n  </app-family-add-new-person>\r\n</app-modal>\r\n"

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

module.exports = "<form [formGroup]=\"familyChildForm\" (ngSubmit)=\"addFamilyChild()\">\r\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{role | uppercase}} INFO</p>\r\n  <div class=\"row no-gutters app-family-card-body p-3\">\r\n    <div class=\"col-3\"><img src=\"assets/images/temp/person-foto-placeholder.png\" width=\"70%\"></div>\r\n    <div class=\"col-9 mt-3\">\r\n\r\n      <div class=\"row no-gutters px-1\">\r\n        <div class=\"col-12 text-right\" style=\"position: absolute\">\r\n          <app-checkbox-field\r\n            label=\"Adopted\"\r\n            id=\"adopted\"\r\n            formControlName=\"adopted\"\r\n            [isInvalid]=\"familyChildForm.get('adopted').invalid && familyChildForm.get('adopted').touched\"\r\n          >\r\n          </app-checkbox-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row no-gutters mt-3 px-1\" *ngIf=\"persons.length\">\r\n        <div class=\"col-12\">\r\n          <app-select-multi-search-field\r\n            bindValue=\"id\"\r\n            bindLabel=\"name\"\r\n            [formControlName]=\"'parents'\"\r\n            labelTitle=\"Parents\"\r\n            [isInvalid]=\"familyChildForm.get('parents').invalid && familyChildForm.get('parents').touched\"\r\n            [items]=\"persons\"\r\n          >\r\n          </app-select-multi-search-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row no-gutters mt-3\">\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'first_name'\" id='first_name' label=\"First Name\"></app-input-field>\r\n          <div class=\"field-has-error\"\r\n               *ngIf=\"familyChildForm.get('first_name').invalid && familyChildForm.get('first_name').touched && familyChildForm.get('first_name')['errors']['required']\"\r\n          >\r\n            First Name is required\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\r\n        </div>\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row no-gutters pt-2\">\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'legal_name'\" id='legal_name' label=\"Legal Name\"></app-input-field>\r\n        </div>\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'dob'\" id='dob' label=\"Date of Birth\"></app-input-field>\r\n        </div>\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'hebrew_dob'\" id='hebrew_dob'\r\n                           label=\"Hebrew Date of Birth\"></app-input-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row no-gutters pt-2\">\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'hebrew_full_name'\" id='hebrew_full_name'\r\n                           label=\"Full Hebrew Name\"></app-input-field>\r\n        </div>\r\n        <div class=\"col-4 d-flex justify-content-between align-items-center\">\r\n          <label class=\"app-radio-container ml-1 mb-0\">Son\r\n            <input type=\"radio\"\r\n                   [name]=\"'gender'\"\r\n                   [value]=\"GENDER.MALE\"\r\n                   [formControlName]=\"'gender'\">\r\n            <span class=\"app-radio-checkmark\"></span>\r\n          </label>\r\n          <label class=\"app-radio-container ml-1 mb-0\">Daughter\r\n            <input type=\"radio\"\r\n                   [name]=\"'gender'\"\r\n                   [value]=\"GENDER.FEMALE\"\r\n                   [formControlName]=\"'gender'\">\r\n            <span class=\"app-radio-checkmark\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--STUDENT INFO-->\r\n  <ng-container *ngIf=\"role === FAMILY_ROLES.student\" formGroupName=\"student_info\">\r\n    <!--EDUCATION-->\r\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">EDUCATION</p>\r\n    <div class=\"row no-gutters app-family-card-body p-3\">\r\n      <div class=\"col-12\">\r\n\r\n        <div class=\"row no-gutters\">\r\n          <div class=\"col-3 px-1\">\r\n            <app-input-field [formControlName]=\"'current_grade'\" id='current_grade'\r\n                             label=\"Current Grade\"></app-input-field>\r\n          </div>\r\n          <div class=\"col-3 px-1\">\r\n            <app-input-field [formControlName]=\"'start_grade'\" id='start_grade' label=\"Start Grade\"></app-input-field>\r\n          </div>\r\n          <div class=\"col-6 px-1\">\r\n            <app-input-field [formControlName]=\"'current_school'\" id='current_school'\r\n                             label=\"Current School\"></app-input-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters pt-2\">\r\n          <div class=\"col-12 px-1\">\r\n            <app-input-field [formControlName]=\"'previous_school'\" id='previous_school'\r\n                             label=\"Previous School Attended\"></app-input-field>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--MEDICAL-->\r\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">MEDICAL</p>\r\n    <div class=\"row no-gutters app-family-card-body p-3\">\r\n      <div class=\"col-12\">\r\n\r\n        <div class=\"row no-gutters\">\r\n          <div class=\"col-4 px-1\">\r\n            <app-input-field [formControlName]=\"'medical_conditions'\" id='medical_conditions'\r\n                             label=\"Medical Conditions\"></app-input-field>\r\n          </div>\r\n          <div class=\"col-4 px-1\">\r\n            <app-input-field [formControlName]=\"'allergies'\" id='allergies' label=\"Allergies\"></app-input-field>\r\n          </div>\r\n          <div class=\"col-4 px-1\">\r\n            <app-input-field [formControlName]=\"'medications'\" id='medications'\r\n                             label=\"Medications School\"></app-input-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters pt-2\">\r\n          <div class=\"col-12 px-1\">\r\n            <app-input-field [formControlName]=\"'physician'\" id='physician'\r\n                             label=\"Physician\"></app-input-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row no-gutters pt-2\">\r\n          <div class=\"col-2 px-1\">\r\n            <app-input-field [formControlName]=\"'country'\" id='country'\r\n                             label=\"Country\"></app-input-field>\r\n          </div>\r\n          <div class=\"col-6 px-1\">\r\n            <app-input-field [formControlName]=\"'address'\" id='address' label=\"Address\"></app-input-field>\r\n          </div>\r\n          <div class=\"col-4 px-1\">\r\n            <app-input-field [formControlName]=\"'phone'\" id='phone'\r\n                             label=\"Phone\"></app-input-field>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!--EMERGENCY CONTACT-->\r\n    <p class=\"app-text-small font-weight-bold mb-1 mt-3\">EMERGENCY CONTACT</p>\r\n    <div class=\"row no-gutters app-family-card-body p-3\">\r\n      <div class=\"col-12 px-1\">\r\n        <p class=\"app-text-small app-text-second mb-2\">FIRST EMERGENCY CONTACT</p>\r\n      </div>\r\n      <div class=\"col-4 px-1\">\r\n        <app-input-field [formControlName]=\"'first_emergency_contact'\" id='first_emergency_contact'\r\n                         label=\"Emergency Contact\"></app-input-field>\r\n      </div>\r\n      <div class=\"col-4 px-1\">\r\n        <app-input-field [formControlName]=\"'first_full_name'\" id='first_full_name' label=\"Full Name\"></app-input-field>\r\n      </div>\r\n      <div class=\"col-4 px-1\">\r\n        <app-input-field [formControlName]=\"'first_cell_phone'\" id='first_cell_phone'\r\n                         label=\"Cell Phone\"></app-input-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters app-family-card-body p-3 mt-2\">\r\n      <div class=\"col-12 px-1\">\r\n        <p class=\"app-text-small app-text-second mb-2\">SECOND EMERGENCY CONTACT</p>\r\n      </div>\r\n      <div class=\"col-4 px-1\">\r\n        <app-input-field [formControlName]=\"'second_full_name'\" id='second_full_name'\r\n                         label=\"Full name\"></app-input-field>\r\n      </div>\r\n      <div class=\"col-4 px-1\">\r\n        <app-input-field [formControlName]=\"'relationship_to_student'\" id='relationship_to_student' label=\"Relationship to student\"></app-input-field>\r\n      </div>\r\n      <div class=\"col-4 px-1\">\r\n        <app-input-field [formControlName]=\"'second_cell_phone'\" id='second_cell_phone'\r\n                         label=\"Cell Phone\"></app-input-field>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </ng-container>\r\n  <!--END STUDENT INFO-->\r\n\r\n  <div class=\"row pt-3\">\r\n    <div class=\"col-12 text-right\">\r\n      <button (click)=\"onCloseAddFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\r\n        Cancel\r\n      </button>\r\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyChildForm.invalid\">\r\n        Add Account\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n"

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







var FamilyAddNewChildComponent = /** @class */ (function () {
    function FamilyAddNewChildComponent(fb, personService, familyPersonService) {
        this.fb = fb;
        this.personService = personService;
        this.familyPersonService = familyPersonService;
        this.closeModalAddFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.persons = [];
        this.GENDER = _enums_gender__WEBPACK_IMPORTED_MODULE_4__["Gender"];
        this.FAMILY_ROLES = _enums_family_roles__WEBPACK_IMPORTED_MODULE_6__["FamilyRoles"];
        this.initFamilyNewChildForm();
    }
    FamilyAddNewChildComponent.prototype.ngOnInit = function () {
        this.getPersons();
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
            student_info: this.fb.group({
                current_grade: [null],
                start_grade: [null],
                current_school: [null],
                previous_school: [null],
                medical_conditions: [null],
                allergies: [null],
                medications: [null],
                physician: [null],
                country: [null],
                address: [null],
                phone: [null],
                first_emergency_contact: [null],
                first_full_name: [null],
                first_cell_phone: [null],
                second_full_name: [null],
                relationship_to_student: [null],
                second_cell_phone: [null],
            })
        };
        this.familyChildForm = this.fb.group(controlsConfig);
    };
    FamilyAddNewChildComponent.prototype.getPersons = function () {
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
    FamilyAddNewChildComponent.prototype.addFamilyChild = function () {
        var _this = this;
        if (this.familyChildForm.invalid)
            return;
        var data = {
            parents: this.familyChildForm.value.parents.map(function (item) { return item.id; }),
            first_name: this.familyChildForm.value.first_name,
            middle_name: this.familyChildForm.value.middle_name,
            last_name: this.familyChildForm.value.last_name,
            legal_name: this.familyChildForm.value.legal_name,
            dob: this.familyChildForm.value.dob,
            hebrew_dob: this.familyChildForm.value.hebrew_dob,
            hebrew_full_name: this.familyChildForm.value.hebrew_full_name,
            gender: this.familyChildForm.value.gender,
        };
        if (this.role === this.FAMILY_ROLES.student) {
            data['student_info'] = this.familyChildForm.value.student_info;
        }
        this.personService.addPerson(data).subscribe(function (res) {
            if (res.created) {
                _this.addFamilyPerson(res.data.id);
            }
        }, function (error) { return console.log(error); });
        this.onCloseAddFamilyMemberModal();
    };
    FamilyAddNewChildComponent.prototype.addFamilyPerson = function (personId) {
        var data = {
            family_id: this.family.family_id,
            family_name: this.family.name,
            id_person: personId,
            person_role: this.role,
            adopted: this.familyChildForm.value.adopted ? 1 : null,
        };
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
            _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_5__["FamilyPersonService"]])
    ], FamilyAddNewChildComponent);
    return FamilyAddNewChildComponent;
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

module.exports = "<form [formGroup]=\"familyParentForm\" (ngSubmit)=\"addFamilyParent()\">\r\n  <p class=\"app-text-small font-weight-bold mb-1\">PERSONAL {{role | uppercase}} INFO</p>\r\n  <div class=\"row no-gutters app-family-card-body p-3\">\r\n    <div class=\"col-3\"><img src=\"assets/images/temp/person-foto-placeholder.png\" width=\"70%\"></div>\r\n    <div class=\"col-9 mt-3\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'first_name'\" id='first_name' label=\"First Name\"></app-input-field>\r\n          <div class=\"field-has-error\"\r\n               *ngIf=\"familyParentForm.get('first_name').invalid && familyParentForm.get('first_name').touched && familyParentForm.get('first_name')['errors']['required']\"\r\n          >\r\n            First Name is required\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'middle_name'\" id='middle_name' label=\"Middle Name\"></app-input-field>\r\n        </div>\r\n        <div class=\"col-4 px-1\">\r\n          <app-input-field [formControlName]=\"'last_name'\" id='last_name' label=\"Last Name\"></app-input-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row no-gutters pt-2\">\r\n        <div class=\"col-6 px-1\">\r\n          <app-input-field [formControlName]=\"'dob'\" id='dob' label=\"Date of Birth\"></app-input-field>\r\n        </div>\r\n        <div class=\"col-6 px-1\">\r\n          <app-input-field [formControlName]=\"'hebrew_full_name'\" id='full_hebrew_name'\r\n                           label=\"Full Hebrew Name\"></app-input-field>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"role === familyRoles.mother\" class=\"row no-gutters pt-2\">\r\n        <div class=\"col-6 px-1\">\r\n          <app-input-field [formControlName]=\"'maiden_name'\" id='maiden_name' label=\"Maiden Name\"></app-input-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <p class=\"app-text-small font-weight-bold mb-1 mt-3\">JOB</p>\r\n  <div class=\"row no-gutters app-family-card-body p-3\">\r\n    <div class=\"col-3 px-1\">\r\n      <app-input-field [formControlName]=\"'occupation'\" id='occupation' label=\"Occupation\"></app-input-field>\r\n    </div>\r\n    <div class=\"col-3 px-1\">\r\n      <app-input-field [formControlName]=\"'address'\" id='address' label=\"Work Address\"></app-input-field>\r\n    </div>\r\n    <div class=\"col-6 px-1\">\r\n      <app-input-field [formControlName]=\"'corporate_phone'\" id='corporate_phone'\r\n                       label=\"Work Phone number\"></app-input-field>\r\n    </div>\r\n  </div>\r\n\r\n  <p class=\"app-text-small font-weight-bold mb-1 mt-3\">CONTACTS</p>\r\n  <div class=\"row no-gutters app-family-card-body p-3\">\r\n    <div class=\"col-6 px-1\">\r\n      <app-input-field [formControlName]=\"'contact_phone'\" id='contact_phone' label=\"Phone number\"></app-input-field>\r\n    </div>\r\n    <div class=\"col-6 px-1\">\r\n      <app-input-field [formControlName]=\"'contact_email'\" type='email' id='contact_email'\r\n                       label=\"Email\"></app-input-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row pt-3\">\r\n    <div class=\"col-12 text-right\">\r\n      <button (click)=\"onCloseAddFamilyMemberModal()\" class=\"btn app-btn-outline-primary mr-2\">\r\n        Cancel\r\n      </button>\r\n      <button type=\"submit\" class=\"btn app-btn-primary\" [disabled]=\"familyParentForm.invalid\">\r\n        Add Account\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

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







var FamilyAddNewParentComponent = /** @class */ (function () {
    function FamilyAddNewParentComponent(familyPersonService, personService, fb) {
        this.familyPersonService = familyPersonService;
        this.personService = personService;
        this.fb = fb;
        this.closeModalAddFamilyMember = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_4__["FamilyRoles"];
        this.gender = _enums_gender__WEBPACK_IMPORTED_MODULE_6__["Gender"];
        this.initFamilyNewPersonForm();
    }
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
        var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.familyParentForm.value, { gender: this.getGenderByRole(this.role) });
        this.personService.addPerson(data).subscribe(function (res) {
            if (res.created) {
                _this.addFamilyPerson(res.data.id);
            }
        }, function (error) { return console.log(error); });
        this.onCloseAddFamilyMemberModal();
    };
    FamilyAddNewParentComponent.prototype.addFamilyPerson = function (personId) {
        var data = {
            family_id: this.family.family_id,
            family_name: this.family.name,
            id_person: personId,
            person_role: this.role,
        };
        this.familyPersonService.add(data);
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmFtaWx5L2ZhbWlseS1wcm9maWxlL2ZhbWlseS12aWV3L2ZhbWlseS12aWV3LWdlbmVyYWwvZmFtaWx5LWFkZC1tZW1iZXItbW9kYWwvZmFtaWx5LWFkZC1uZXctcGVyc29uL2ZhbWlseS1hZGQtbmV3LXBlcnNvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-add-member-modal/family-add-new-person/family-add-new-person.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-5\">\r\n  <div class=\"col-8\"></div>\r\n  <div class=\"col-4\">\r\n    <app-select-field [(ngModel)]=\"role\"\r\n                      labelTitle=\"Roles\"\r\n                      [isInvalid]=\"!role\"\r\n                      [items]=\"roles\">\r\n    </app-select-field>\r\n    <div class=\"field-has-error\" *ngIf=\"!role\">Role is required</div>\r\n  </div>\r\n</div>\r\n\r\n<app-family-add-new-parent *ngIf=\"role === FAMILY_ROLES.father || role === FAMILY_ROLES.mother\"\r\n                           [role]=\"role\"\r\n                           [family]=\"family\"\r\n                           (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\">\r\n</app-family-add-new-parent>\r\n\r\n<app-family-add-new-child *ngIf=\"role === FAMILY_ROLES.child || role === FAMILY_ROLES.student\"\r\n                          [role]=\"role\"\r\n                          [family]=\"family\"\r\n                          (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal()\" >\r\n</app-family-add-new-child>\r\n"

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

module.exports = "<div class=\"row no-gutters app-family-card-header px-4 py-2 app-text-white\">\r\n  <div class=\"col-6 text-left app-text-large font-weight-bold\">\r\n    {{fullName | titlecase}}\r\n  </div>\r\n  <div class=\"col-6 text-right\">\r\n    Child\r\n  </div>\r\n</div>\r\n\r\n<div class=\"p-3\">\r\n  <div class=\"row no-gutters border-bottom\">\r\n    <div class=\"col-3\">\r\n      <img src=\"assets/images/temp/person-foto-placeholder.png\" width=\"70%\">\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Name:</span><span>{{fullNameWithMiddle | titlecase}}</span>\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Legal Name:</span><span>{{familyPerson.person.legal_name}}</span>\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Full Hebrew Name:</span><span>{{familyPerson.person.hebrew_full_name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\r\n      PARENTS\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Father:</span><span>??</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Mother:</span><span>??</span>\r\n    </div>\r\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\r\n      DATE OF BIRTH\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Date of Birth:</span><span>{{familyPerson.person.dob}}</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Hebrew Date of Birth:</span><span>{{familyPerson.person.hebrew_dob}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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



var FamilyChildrenCardComponent = /** @class */ (function () {
    function FamilyChildrenCardComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
    }
    Object.defineProperty(FamilyChildrenCardComponent.prototype, "fullName", {
        get: function () {
            return this.helperFamilyService.getFullName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyChildrenCardComponent.prototype, "fullNameWithMiddle", {
        get: function () {
            return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
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

module.exports = "<div class=\"row no-gutters app-family-card-header px-4 py-2 app-text-white\">\r\n  <div class=\"col-6 text-left app-text-large font-weight-bold\">\r\n   {{fullName | titlecase}}\r\n  </div>\r\n  <div class=\"col-6 text-right\">\r\n    Paternal Grandfather\r\n  </div>\r\n</div>\r\n\r\n<div class=\"p-3\">\r\n  <div class=\"row no-gutters border-bottom\">\r\n    <div class=\"col-3 pb-2\">\r\n      <img src=\"assets/images/temp/person-foto-placeholder.png\" width=\"70%\">\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Name:</span><span>{{fullNameWithMiddle | titlecase}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\r\n      ADDRESS\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Address:</span><span>{{familyPerson.person.address}}</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">ZIP:</span><span>{{familyPerson.person.zip}}</span>\r\n    </div>\r\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\r\n      CONTACTS\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Phone Number:</span><span>{{familyPerson.person.contact_phone}}</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Email Address:</span><span>{{familyPerson.person.contact_email}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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



var FamilyGrandparentsCardComponent = /** @class */ (function () {
    function FamilyGrandparentsCardComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
    }
    Object.defineProperty(FamilyGrandparentsCardComponent.prototype, "fullName", {
        get: function () {
            return this.helperFamilyService.getFullName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyGrandparentsCardComponent.prototype, "fullNameWithMiddle", {
        get: function () {
            return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
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

module.exports = "<div class=\"row no-gutters app-family-card-header px-4 py-2 app-text-white\">\r\n  <div class=\"col-6 text-left app-text-large font-weight-bold\">\r\n    {{fullName | titlecase}}\r\n  </div>\r\n  <div class=\"col-6 text-right\">\r\n    {{familyPerson.person_role | titlecase}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"p-3\">\r\n  <div class=\"row no-gutters border-bottom\">\r\n    <div class=\"col-3\">\r\n      <img src=\"assets/images/temp/person-foto-placeholder.png\" width=\"70%\">\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Name:</span>\r\n          <span>{{fullNameWithMiddle | titlecase}}</span>\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Hebrew Name:</span>\r\n          <span>{{familyPerson.person.hebrew_full_name}}</span>\r\n        </div>\r\n        <div *ngIf=\"familyPerson.person_role === familyRoles.mother\" class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Maiden name:</span>\r\n          <span>{{familyPerson.person.maiden_name}}</span>\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Number of children:</span>\r\n          <span>\r\n            {{familyPerson?.person?.children?.length}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\r\n      JOB\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Occupation:</span>\r\n      <span>{{familyPerson.person.occupation}}</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Address:</span>\r\n      <span class=\"pl-5 text-right\">{{familyPerson.person.address}}</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Work number:</span>\r\n      <span>{{familyPerson.person.corporate_phone}}</span>\r\n    </div>\r\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\r\n      CONTACTS\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Phone Number:</span>\r\n      <span>{{familyPerson.person.contact_phone}}</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Email Address:</span>\r\n      <span>{{familyPerson.person.contact_email}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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




var FamilyParentsCardComponent = /** @class */ (function () {
    function FamilyParentsCardComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_2__["FamilyRoles"];
    }
    Object.defineProperty(FamilyParentsCardComponent.prototype, "fullName", {
        get: function () {
            return this.helperFamilyService.getFullName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyParentsCardComponent.prototype, "fullNameWithMiddle", {
        get: function () {
            return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
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

module.exports = "<div class=\"row no-gutters app-family-card-header px-4 py-2 app-text-white\">\r\n  <div class=\"col-6 text-left app-text-large font-weight-bold\">\r\n    {{fullName | titlecase}}\r\n  </div>\r\n  <div class=\"col-6 text-right\">\r\n    <i class=\"fas fa-graduation-cap\"></i>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"p-3\">\r\n  <div class=\"row no-gutters border-bottom\">\r\n    <div class=\"col-3\">\r\n      <img src=\"assets/images/temp/person-foto-placeholder.png\" width=\"70%\">\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Name:</span>\r\n          <span>{{fullNameWithMiddle | titlecase}}</span>\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Legal Name:</span>\r\n          <span>{{familyPerson.person.legal_name}}</span>\r\n        </div>\r\n        <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n          <span class=\"app-text-second\">Full Hebrew Name:</span>\r\n          <span>{{familyPerson.person.hebrew_full_name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row no-gutters border-bottom pb-1\">\r\n\r\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\r\n      PARENTS\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Father:</span>\r\n      <span>??</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Mother:</span>\r\n      <span>??</span>\r\n    </div>\r\n\r\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\r\n      DATE OF BIRTH\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Date of Birth:</span>\r\n      <span>{{familyPerson.person.dob}}</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Hebrew Date of Birth:</span>\r\n      <span>{{familyPerson.person.hebrew_dob}}</span>\r\n    </div>\r\n\r\n    <div class=\"col-12 text-left app-text-small font-weight-bold pt-3 pb-1\">\r\n      CONTACTS\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Emergency contact:</span><span>?? (Mother | Atara Fishman)</span>\r\n    </div>\r\n    <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n      <span class=\"app-text-second\">Cell Phone:</span>\r\n      <span>{{familyPerson.person.contact_phone}}</span>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row pt-2\">\r\n    <div class=\"col\">\r\n      <nav class=\"navbar navbar-expand-lg navbar-light p-0\">\r\n        <div class=\"justify-content-left\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link app-nav-link\"\r\n                 [ngClass]=\"{'app-nav-link-active' : activeTab==='education'}\"\r\n                 (click)=\"activeTab = 'education'\">\r\n                Education\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link app-nav-link\"\r\n                 [ngClass]=\"{'app-nav-link-active' : activeTab==='medical'}\"\r\n                 (click)=\"activeTab = 'medical'\">\r\n                Medical\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link app-nav-link\"\r\n                 [ngClass]=\"{'app-nav-link-active' : activeTab==='secondContact'}\"\r\n                 (click)=\"activeTab = 'secondContact'\">\r\n                Second Contact\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <app-family-students-education *ngIf=\"activeTab==='education'\"></app-family-students-education>\r\n  <app-family-students-medical *ngIf=\"activeTab==='medical'\"></app-family-students-medical>\r\n  <app-family-students-second-contact *ngIf=\"activeTab==='secondContact'\"></app-family-students-second-contact>\r\n</div>\r\n\r\n"

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



var FamilyStudentsCardComponent = /** @class */ (function () {
    function FamilyStudentsCardComponent(helperFamilyService) {
        this.helperFamilyService = helperFamilyService;
        this.activeTab = 'education';
    }
    Object.defineProperty(FamilyStudentsCardComponent.prototype, "fullName", {
        get: function () {
            return this.helperFamilyService.getFullName(this.familyPerson);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FamilyStudentsCardComponent.prototype, "fullNameWithMiddle", {
        get: function () {
            return this.helperFamilyService.getFullWithMiddleName(this.familyPerson);
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

module.exports = "<div class=\"row no-gutters pt-3\">\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Current grade:</span>\r\n    <span>??</span>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Start Grade:</span>\r\n    <span>??</span>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Current School:</span>\r\n    <span>??</span>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Previous School:</span>\r\n    <span>??</span>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Attended:</span>\r\n    <span>??</span>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"row no-gutters pt-3\">\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Medical Conditions:</span>\r\n    <span>??</span>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Allergies:</span>\r\n    <span>??</span>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Medications:</span>\r\n    <span>??</span>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Physician:</span>\r\n    <span>??</span>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Address:</span>\r\n    <span>??</span>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"row no-gutters pt-3\">\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Emergency contact:</span>\r\n    <span>??</span>\r\n  </div>\r\n  <div class=\"col-12 d-flex justify-content-between pb-1\">\r\n    <span class=\"app-text-second\">Cell Phone:</span>\r\n    <span>??</span>\r\n  </div>\r\n</div>\r\n\r\n"

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

module.exports = "<div *ngIf=\"showModal\">\r\n  <app-family-add-member-modal (closeModalAddFamilyMember)=\"onCloseAddFamilyMemberModal($event)\">\r\n  </app-family-add-member-modal>\r\n</div>\r\n\r\n<div class=\"row align-bottom\">\r\n  <!--Title-->\r\n  <div class=\"col-6 d-flex align-items-end\">\r\n    <p class=\"font-weight-bold mb-0\">{{familyName | uppercase}} MEMBERS</p>\r\n  </div>\r\n  <!--Search Filter-->\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\"></div>\r\n      <div class=\"col-sm-10 d-flex justify-content-end\">\r\n        <app-search-field [ngModel]=\"searchQuery\" (ngModelChange)=\"setSearchQuery($event)\" type=\"gray\" class=\"mr-3\"></app-search-field>\r\n        <app-search-filter-btn class=\"mr-3\"></app-search-filter-btn>\r\n        <button class=\"btn app-btn-primary\" (click)=\"onShowAddFamilyMemberModal()\">Add Member</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Tabs-->\r\n<div class=\"row pt-2\">\r\n  <div class=\"col\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-white p-0\">\r\n      <div class=\"collapse justify-content-left navbar-collapse\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\" *ngFor=\"let item of familyViewGeneralTabs\">\r\n            <a class=\"nav-link app-nav-link\"\r\n               [ngClass]=\"{'app-nav-link-active' : activeTab===item.name}\"\r\n               (click)=\"setActiveTab(item.name)\">\r\n              {{item.name | titlecase}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _models_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/family-view-general-tabs */ "./src/app/modules/family/family-profile/models/family-view-general-tabs.ts");
/* harmony import */ var _services_family_family_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/family/family.service */ "./src/app/services/family/family.service.ts");




var FamilyViewGeneralNavComponent = /** @class */ (function () {
    function FamilyViewGeneralNavComponent(familyService) {
        this.familyService = familyService;
        this.activeTabEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchQueryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.familyViewGeneralTabs = _models_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_2__["familyViewGeneralTabs"];
        this.showModal = false;
    }
    FamilyViewGeneralNavComponent.prototype.ngOnInit = function () {
        this.getFamilyName();
        this.setActiveTab(this.familyViewGeneralTabs[0].name);
    };
    FamilyViewGeneralNavComponent.prototype.getFamilyName = function () {
        var _this = this;
        this.familyService.family.subscribe(function (res) {
            _this.familyName = res.name;
        });
    };
    FamilyViewGeneralNavComponent.prototype.setActiveTab = function (tabName) {
        this.activeTab = tabName;
        this.activeTabEmitter.emit(this.activeTab);
    };
    FamilyViewGeneralNavComponent.prototype.onShowAddFamilyMemberModal = function () {
        this.showModal = true;
    };
    FamilyViewGeneralNavComponent.prototype.onCloseAddFamilyMemberModal = function () {
        this.showModal = false;
    };
    FamilyViewGeneralNavComponent.prototype.setSearchQuery = function (query) {
        this.searchQueryEmitter.emit(query);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_service__WEBPACK_IMPORTED_MODULE_3__["FamilyService"]])
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

module.exports = ".app-person-card-container {\r\n    width: 33%;\r\n}\r\n\r\n.app-align-last-row::after {\r\n    content: \"\";\r\n    flex: 1 1 100%;\r\n    max-width: 33%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mYW1pbHkvZmFtaWx5LXByb2ZpbGUvZmFtaWx5LXZpZXcvZmFtaWx5LXZpZXctZ2VuZXJhbC9mYW1pbHktdmlldy1nZW5lcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZhbWlseS9mYW1pbHktcHJvZmlsZS9mYW1pbHktdmlldy9mYW1pbHktdmlldy1nZW5lcmFsL2ZhbWlseS12aWV3LWdlbmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtcGVyc29uLWNhcmQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbn1cclxuXHJcbi5hcHAtYWxpZ24tbGFzdC1yb3c6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgIG1heC13aWR0aDogMzMlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/family-view/family-view-general/family-view-general.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-family-view-general-nav [familyId]=\"familyId\"\r\n  (searchQueryEmitter)=\"onSetSearchQuery($event)\"\r\n  (activeTabEmitter)=\"onSetFilterTab($event)\"></app-family-view-general-nav>\r\n<div class=\"d-flex justify-content-between align-items-stretch flex-wrap app-align-last-row\">\r\n  <div class=\"app-person-card-container mt-2\" *ngFor=\"let item of familyPersons | async\">\r\n    <div class=\"app-family-card-body h-100\">\r\n      <app-family-parents-card [familyPerson]=\"item\"\r\n                               *ngIf=\"item.person_role === familyRoles.father || item.person_role === familyRoles.mother\">\r\n      </app-family-parents-card>\r\n      <app-family-students-card [familyPerson]=\"item\"\r\n                                *ngIf=\"item.person_role === familyRoles.student\"></app-family-students-card>\r\n      <app-family-children-card [familyPerson]=\"item\"\r\n                                *ngIf=\"item.person_role === familyRoles.child\"></app-family-children-card>\r\n      <app-family-grandparents-card [familyPerson]=\"item\"\r\n                                    *ngIf=\"item.person_role === familyRoles.grandfather || item.person_role === familyRoles.grandmother\">\r\n      </app-family-grandparents-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-spinner *ngIf=\"loader$ | async\"></app-spinner>"

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
/* harmony import */ var _models_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/family-view-general-tabs */ "./src/app/modules/family/family-profile/models/family-view-general-tabs.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");






var FamilyViewGeneralComponent = /** @class */ (function () {
    function FamilyViewGeneralComponent(familyPersonService, loaderService) {
        this.familyPersonService = familyPersonService;
        this.loaderService = loaderService;
        this.familySearchTab = _models_family_view_general_tabs__WEBPACK_IMPORTED_MODULE_4__["FAMILY_VIEW_GENERAL_TABS"];
        this.familyRoles = _enums_family_roles__WEBPACK_IMPORTED_MODULE_3__["FamilyRoles"];
        this.params = {
            filter: '',
            query: '',
        };
    }
    FamilyViewGeneralComponent.prototype.ngOnInit = function () {
        this.loader$ = this.loaderService.loader;
        this.getFamilyPersons(this.params);
    };
    FamilyViewGeneralComponent.prototype.getFamilyPersons = function (params) {
        this.familyPersons = this.familyPersonService.familyPersonList;
        this.familyPersonService.getByFamilyId(this.familyId, params);
    };
    FamilyViewGeneralComponent.prototype.onSetFilterTab = function (filter) {
        this.params.filter = filter;
        this.getFamilyPersons(this.params);
    };
    FamilyViewGeneralComponent.prototype.onSetSearchQuery = function (query) {
        this.params.query = query;
        this.getFamilyPersons(this.params);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_family_family_person_service__WEBPACK_IMPORTED_MODULE_2__["FamilyPersonService"], _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
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

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light p-0\">\r\n      <div class=\"justify-content-left\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item mr-4\" *ngFor=\"let item of familyViewSections\">\r\n            <a class=\"nav-link app-family-view-nav-link app-text-large font-weight-bold pl-0\"\r\n               [ngClass]=\"{'app-family-view-nav-link-active' : activeSection===item.name}\"\r\n               (click)=\"setActiveSection(item.name)\">\r\n              {{item.name | titlecase}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 text-right\">\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

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

module.exports = "<div class=\"p-4\">\r\n  <app-family-view-nav (activeViewSectionEmitter)=\"setActiveSection($event)\"></app-family-view-nav>\r\n  <div class=\"app-family-info-wrap p-4\">\r\n    <app-family-view-general [familyId]=\"familyId\" *ngIf=\"activeSection === FAMILY_VIEW_SECTIONS.GENERAL\"></app-family-view-general>\r\n  </div>\r\n</div>\r\n\r\n"

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

/***/ "./src/app/modules/family/family-profile/models/family-view-general-tabs.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/family/family-profile/models/family-view-general-tabs.ts ***!
  \**********************************************************************************/
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
                _family_profile_family_view_family_view_general_family_add_member_modal_family_add_new_child_family_add_new_child_component__WEBPACK_IMPORTED_MODULE_33__["FamilyAddNewChildComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _family_routing_module__WEBPACK_IMPORTED_MODULE_3__["FamilyRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_components_sharedRedComponents_module__WEBPACK_IMPORTED_MODULE_20__["SharedRedComponentsModule"],
            ],
            providers: [
                _services_family_family_service__WEBPACK_IMPORTED_MODULE_16__["FamilyService"],
                _services_person_person_service__WEBPACK_IMPORTED_MODULE_22__["PersonService"],
                _services_family_family_person_service__WEBPACK_IMPORTED_MODULE_23__["FamilyPersonService"],
                _services_family_helper_family_service__WEBPACK_IMPORTED_MODULE_24__["HelperFamilyService"],
                _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_25__["LoaderService"]
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






var FamilyPersonService = /** @class */ (function () {
    function FamilyPersonService(http, familyService) {
        this.http = http;
        this.familyService = familyService;
        this._familyPersonList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
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
            var familyPerson = res.data;
            _this.dataStore.familyPersonList.push(familyPerson);
            _this._familyPersonList.next(Object.assign({}, _this.dataStore).familyPersonList);
            if (familyPerson.person_role === 'student')
                _this.familyService.incrementFieldCount('students_count');
            if (familyPerson.person_role === 'child')
                _this.familyService.incrementFieldCount('children_count');
        }, function (error) { return console.log('Could not add families persons. Error: ' + error.message); });
    };
    FamilyPersonService.prototype.getByFamilyIdRequest = function (familyId, params) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('params', JSON.stringify(params)),
        };
        return this.http.get("/person/family/" + familyId, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    FamilyPersonService.prototype.addOneRequest = function (data) {
        return this.http.post("/person/family", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    FamilyPersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _family_service__WEBPACK_IMPORTED_MODULE_5__["FamilyService"]])
    ], FamilyPersonService);
    return FamilyPersonService;
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