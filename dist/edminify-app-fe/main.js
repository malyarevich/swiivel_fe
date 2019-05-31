(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../family/family.module": [
		"./src/app/modules/family/family.module.ts",
		"default~family-family-module~modules-organization-organization-module~online-form-online-form-module~d4ff36ab",
		"default~family-family-module~online-form-online-form-module~payer-accounts-payer-accounts-module~ver~c516be8a",
		"default~family-family-module~online-form-online-form-module~vertical-data-collection-vertical-data-c~7b38f21c",
		"common",
		"family-family-module"
	],
	"../online-form/online-form.module": [
		"./src/app/modules/online-form/online-form.module.ts",
		"default~family-family-module~modules-organization-organization-module~online-form-online-form-module~d4ff36ab",
		"default~family-family-module~online-form-online-form-module~payer-accounts-payer-accounts-module~ver~c516be8a",
		"default~family-family-module~online-form-online-form-module~vertical-data-collection-vertical-data-c~7b38f21c",
		"default~online-form-online-form-module~vertical-data-collection-vertical-data-collection-module",
		"common",
		"online-form-online-form-module"
	],
	"../payer-accounts/payer-accounts.module": [
		"./src/app/modules/payer-accounts/payer-accounts.module.ts",
		"default~family-family-module~modules-organization-organization-module~online-form-online-form-module~d4ff36ab",
		"default~family-family-module~online-form-online-form-module~payer-accounts-payer-accounts-module~ver~c516be8a",
		"common",
		"payer-accounts-payer-accounts-module"
	],
	"../vertical-data-collection/vertical-data-collection.module": [
		"./src/app/modules/vertical-data-collection/vertical-data-collection.module.ts",
		"default~family-family-module~modules-organization-organization-module~online-form-online-form-module~d4ff36ab",
		"default~family-family-module~online-form-online-form-module~payer-accounts-payer-accounts-module~ver~c516be8a",
		"default~family-family-module~online-form-online-form-module~vertical-data-collection-vertical-data-c~7b38f21c",
		"default~online-form-online-form-module~vertical-data-collection-vertical-data-collection-module",
		"common",
		"vertical-data-collection-vertical-data-collection-module"
	],
	"./modules/organization/organization.module": [
		"./src/app/modules/organization/organization.module.ts",
		"default~family-family-module~modules-organization-organization-module~online-form-online-form-module~d4ff36ab",
		"common",
		"modules-organization-organization-module"
	],
	"./online-form/online-form.module": [
		"./src/app/modules/vertical-data-collection/online-form/online-form.module.ts",
		"default~family-family-module~modules-organization-organization-module~online-form-online-form-module~d4ff36ab",
		"default~family-family-module~online-form-online-form-module~payer-accounts-payer-accounts-module~ver~c516be8a",
		"default~family-family-module~online-form-online-form-module~vertical-data-collection-vertical-data-c~7b38f21c",
		"default~online-form-online-form-module~vertical-data-collection-vertical-data-collection-module",
		"common",
		"online-form-online-form-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/login */ "./src/app/modules/login/index.ts");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth */ "./src/app/services/auth/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var routes = _modules_login__WEBPACK_IMPORTED_MODULE_3__["routes"].concat([
    {
        path: '',
        canActivate: [_services_auth__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: './modules/organization/organization.module#OrganizationModule'
    },
    {
        path: '**',
        redirectTo: '',
    }
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(router) {
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]; })).subscribe(function (event) {
            if (event.reason === _services_auth__WEBPACK_IMPORTED_MODULE_4__["ROUTE_NOT_AUTHENTICATED"]) {
                router.navigate(['/login']);
            }
        });
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Red';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: interceptorsConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptorsConfig", function() { return interceptorsConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/login */ "./src/app/modules/login/index.ts");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth */ "./src/app/services/auth/index.ts");
/* harmony import */ var _services_local_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/local-storage */ "./src/app/services/local-storage/index.ts");
/* harmony import */ var _utils_interceptors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/interceptors */ "./src/app/utils/interceptors/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_user_logged_user_logged_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/user-logged/user-logged.module */ "./src/app/modules/user-logged/user-logged.module.ts");
/* harmony import */ var _modules_user_logged_user_logged_init_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/user-logged/user-logged-init.service */ "./src/app/modules/user-logged/user-logged-init.service.ts");
/* harmony import */ var _modules_user_logged_store_user_logged_effect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/user-logged/store/user-logged.effect */ "./src/app/modules/user-logged/store/user-logged.effect.ts");
/* harmony import */ var _modules_user_logged_user_logged_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/user-logged/user-logged.service */ "./src/app/modules/user-logged/user-logged.service.ts");
/* harmony import */ var _services_permission_permission_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/permission/permission.service */ "./src/app/services/permission/permission.service.ts");



















var authConfig = {
    storageTokenKey: 'token',
    user: 'user'
};
var interceptorsConfig = {
    baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiCore,
    storageTokenKey: 'token'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _modules_login__WEBPACK_IMPORTED_MODULE_9__["LoginModule"],
                _modules_user_logged_user_logged_module__WEBPACK_IMPORTED_MODULE_14__["UserLoggedModule"],
                _services_auth__WEBPACK_IMPORTED_MODULE_10__["AuthModule"].forRoot(authConfig),
                _utils_interceptors__WEBPACK_IMPORTED_MODULE_12__["InterceptorsModule"].forRoot(interceptorsConfig),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_modules_user_logged_store_user_logged_effect__WEBPACK_IMPORTED_MODULE_16__["UserLoggedEffects"]]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [],
            ],
            providers: [
                _services_local_storage__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"],
                _modules_user_logged_user_logged_service__WEBPACK_IMPORTED_MODULE_17__["UserLoggedService"],
                _services_permission_permission_service__WEBPACK_IMPORTED_MODULE_18__["PermissionService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: _modules_user_logged_user_logged_init_service__WEBPACK_IMPORTED_MODULE_15__["UserLoggedInitFactory"],
                    multi: true,
                    deps: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _services_auth__WEBPACK_IMPORTED_MODULE_10__["AuthService"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/form-components/input-container/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-components/input-container/index.ts ***!
  \*********************************************************************/
/*! exports provided: InputContainerModule, InputContainerComponent, defaultInputErrorDisplayStrategy, INPUT_ERROR_DISPLAY_STRATEGY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_container_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-container.module */ "./src/app/components/form-components/input-container/input-container.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputContainerModule", function() { return _input_container_module__WEBPACK_IMPORTED_MODULE_0__["InputContainerModule"]; });

/* harmony import */ var _input_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-container.component */ "./src/app/components/form-components/input-container/input-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputContainerComponent", function() { return _input_container_component__WEBPACK_IMPORTED_MODULE_1__["InputContainerComponent"]; });

/* harmony import */ var _input_error_display_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-error-display-strategy */ "./src/app/components/form-components/input-container/input-error-display-strategy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultInputErrorDisplayStrategy", function() { return _input_error_display_strategy__WEBPACK_IMPORTED_MODULE_2__["defaultInputErrorDisplayStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INPUT_ERROR_DISPLAY_STRATEGY", function() { return _input_error_display_strategy__WEBPACK_IMPORTED_MODULE_2__["INPUT_ERROR_DISPLAY_STRATEGY"]; });






/***/ }),

/***/ "./src/app/components/form-components/input-container/input-container.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/form-components/input-container/input-container.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formControl\">\n    <section class=\"inputCtrl\">\n        <label class=\"controlLabel\" *ngIf=\"label\">{{label}}</label>\n        <ng-container *ngIf=\"isActivelyInvalid && showErrors\">\n          <span *ngFor=\"let error of errorKeys\" class=\"errorSubtext\">\n                {{error}}\n          </span>\n        </ng-container>\n    </section>\n    <img *ngIf=\"icon\" [src]=\"'/assets/images/icons/' + icon + '.svg'\" alt=\"icon\" class=\"icon\"\n         [ngClass]=\"{'last': !label}\">\n    <ng-content select=\"[formControlName]\"></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/components/form-components/input-container/input-container.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/form-components/input-container/input-container.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host, .inputCtrl {\n  display: flex; }\n\n/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n\n:host {\n  margin: 10px 0;\n  width: 100%; }\n\n.formControl {\n  width: 100%;\n  position: relative; }\n\n.formControl .controlLabel {\n    color: #4350a2;\n    font-size: 0.85em;\n    font-weight: bold;\n    letter-spacing: 0.31px;\n    line-height: 11px; }\n\n.formControl .icon {\n    position: absolute;\n    top: calc(50% + 10px);\n    left: 0;\n    z-index: 1;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\n.formControl .icon.last {\n      top: 50%;\n      left: 92%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n\n.inputCtrl {\n  justify-content: space-between; }\n\n.errorSubtext {\n  color: #e94f47;\n  font-size: 9px;\n  font-weight: bold;\n  letter-spacing: 0.31px;\n  line-height: 11px;\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtLWNvbXBvbmVudHMvaW5wdXQtY29udGFpbmVyL2lucHV0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvbWl4aW5zL2ZsZXguc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9pbnB1dC1jb250YWluZXIvaW5wdXQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNERyxhQUFhLEVBQUE7O0FDSWhCOzs7OztFQ0dFOztBSE5GO0VBRUksY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFGdEI7SUFLUSxjSWJvQjtJSmNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUIsRUFBQTs7QUFUekI7SUFhUSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLE9BQU87SUFDUCxVQUFVO0lBQ1YsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBOztBQWpCbkM7TUFvQlksUUFBUTtNQUNSLFNBQVM7TUFDVCx3Q0FBZ0M7Y0FBaEMsZ0NBQWdDLEVBQUE7O0FBSzVDO0VBR0ksOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksY0libUI7RUpjbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWNvbXBvbmVudHMvaW5wdXQtY29udGFpbmVyL2lucHV0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvaW5kZXhcIjtcblxuOmhvc3Qge1xuICAgIEBleHRlbmQgJWZsZXg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtQ29udHJvbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuY29udHJvbExhYmVse1xuICAgICAgICBjb2xvcjogJGVsZW1lbnQtYmFzZS1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSArIDEwcHgpO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cbiAgICAgICAgJi5sYXN0IHtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogOTIlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbnB1dEN0cmx7XG4gICAgQGV4dGVuZCAlZmxleDtcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmVycm9yU3VidGV4dHtcbiAgICBjb2xvcjogJGludmFsaWQtY29sb3I7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMzFweDtcbiAgICBsaW5lLWhlaWdodDogMTFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIiwiJWZsZXgge1xuICAgZGlzcGxheTogZmxleDtcbn1cblxuJWZsZXgtYWxsLWNlbnRlciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSIsIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCI6aG9zdCwgLmlucHV0Q3RybCB7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG46aG9zdCB7XG4gIG1hcmdpbjogMTBweCAwO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZm9ybUNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5mb3JtQ29udHJvbCAuY29udHJvbExhYmVsIHtcbiAgICBjb2xvcjogIzQzNTBhMjtcbiAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMXB4OyB9XG4gIC5mb3JtQ29udHJvbCAuaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgKyAxMHB4KTtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4gICAgLmZvcm1Db250cm9sIC5pY29uLmxhc3Qge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA5MiU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxuXG4uaW5wdXRDdHJsIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG5cbi5lcnJvclN1YnRleHQge1xuICBjb2xvcjogI2U5NGY0NztcbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4zMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuIiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcbiRlbGVtZW50LXNlY29uZC1jb2xvcjogIzlmYTZjYjtcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XG4kZWxlbWVudC1kYW5nZXItY29sb3I6IHJlZDtcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcblxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcbiR3aGl0ZTogI2ZmZjtcbiRiYWNrZ3JvdW5kLWRpc2FibGVkLWNvbG9yOiAjY2VkNGRhO1xuXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcblxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XG5cbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcbiRyZWQtY29sb3I6ICNmYzY0Njc7XG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XG5cbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XG5cbiRpY29uLWRhcmstZ3JheS1jb2xvcjogI0E0QThCRTtcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xuXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7Il19 */"

/***/ }),

/***/ "./src/app/components/form-components/input-container/input-container.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/form-components/input-container/input-container.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InputContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainerComponent", function() { return InputContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _input_error_display_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-error-display-strategy */ "./src/app/components/form-components/input-container/input-error-display-strategy.ts");





var InputContainerComponent = /** @class */ (function () {
    function InputContainerComponent(strategy) {
        this.strategy = strategy;
        this.showErrors = true;
    }
    Object.defineProperty(InputContainerComponent.prototype, "control", {
        get: function () {
            return this.formControlName && this.formControlName.control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputContainerComponent.prototype, "isActivelyInvalid", {
        get: function () {
            return this.control.errors && (!this.strategy || this.strategy.shouldDisplayError(this.control));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputContainerComponent.prototype, "errorKeys", {
        get: function () {
            var _this = this;
            if (this.control.errors) {
                var keys = Object.keys(this.control.errors);
                return keys.map(function (key) {
                    return _enums__WEBPACK_IMPORTED_MODULE_3__["COMMON_ERRORS"][key] ? _enums__WEBPACK_IMPORTED_MODULE_3__["COMMON_ERRORS"][key] : _this.control.errors[key];
                });
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputContainerComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputContainerComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputContainerComponent.prototype, "showErrors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"])
    ], InputContainerComponent.prototype, "formControlName", void 0);
    InputContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-container',
            template: __webpack_require__(/*! ./input-container.component.html */ "./src/app/components/form-components/input-container/input-container.component.html"),
            styles: [__webpack_require__(/*! ./input-container.component.scss */ "./src/app/components/form-components/input-container/input-container.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_input_error_display_strategy__WEBPACK_IMPORTED_MODULE_4__["INPUT_ERROR_DISPLAY_STRATEGY"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], InputContainerComponent);
    return InputContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/form-components/input-container/input-container.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/form-components/input-container/input-container.module.ts ***!
  \**************************************************************************************/
/*! exports provided: InputContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainerModule", function() { return InputContainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-container.component */ "./src/app/components/form-components/input-container/input-container.component.ts");
/* harmony import */ var _input_error_display_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-error-display-strategy */ "./src/app/components/form-components/input-container/input-error-display-strategy.ts");






var InputContainerModule = /** @class */ (function () {
    function InputContainerModule() {
    }
    InputContainerModule_1 = InputContainerModule;
    InputContainerModule.forRoot = function (strategy) {
        return {
            ngModule: InputContainerModule_1,
            providers: [
                {
                    provide: _input_error_display_strategy__WEBPACK_IMPORTED_MODULE_5__["INPUT_ERROR_DISPLAY_STRATEGY"],
                    useValue: strategy || _input_error_display_strategy__WEBPACK_IMPORTED_MODULE_5__["defaultInputErrorDisplayStrategy"]
                }
            ]
        };
    };
    var InputContainerModule_1;
    InputContainerModule = InputContainerModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            declarations: [_input_container_component__WEBPACK_IMPORTED_MODULE_4__["InputContainerComponent"]],
            exports: [_input_container_component__WEBPACK_IMPORTED_MODULE_4__["InputContainerComponent"]]
        })
    ], InputContainerModule);
    return InputContainerModule;
}());



/***/ }),

/***/ "./src/app/components/form-components/input-container/input-error-display-strategy.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/form-components/input-container/input-error-display-strategy.ts ***!
  \********************************************************************************************/
/*! exports provided: defaultInputErrorDisplayStrategy, INPUT_ERROR_DISPLAY_STRATEGY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultInputErrorDisplayStrategy", function() { return defaultInputErrorDisplayStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_ERROR_DISPLAY_STRATEGY", function() { return INPUT_ERROR_DISPLAY_STRATEGY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Default strategy display errors only for dirty controls
 */
var defaultInputErrorDisplayStrategy = {
    shouldDisplayError: function (control) {
        return control.dirty;
    }
};
var INPUT_ERROR_DISPLAY_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('INPUT_ERROR_DISPLAY_STRATEGY');


/***/ }),

/***/ "./src/app/enums/common-errors.ts":
/*!****************************************!*\
  !*** ./src/app/enums/common-errors.ts ***!
  \****************************************/
/*! exports provided: COMMON_ERRORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_ERRORS", function() { return COMMON_ERRORS; });
var COMMON_ERRORS;
(function (COMMON_ERRORS) {
    COMMON_ERRORS["pattern"] = "Field is invalid";
    COMMON_ERRORS["required"] = "Field is required";
})(COMMON_ERRORS || (COMMON_ERRORS = {}));


/***/ }),

/***/ "./src/app/enums/index.ts":
/*!********************************!*\
  !*** ./src/app/enums/index.ts ***!
  \********************************/
/*! exports provided: COMMON_ERRORS, SIGNATURE_TYPES, E_SIGNATURE_TYPES, TEMPLATE_STATUS, TUITION_CONTRACT_SPLIT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-errors */ "./src/app/enums/common-errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMON_ERRORS", function() { return _common_errors__WEBPACK_IMPORTED_MODULE_0__["COMMON_ERRORS"]; });

/* harmony import */ var _signature_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signature-type */ "./src/app/enums/signature-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGNATURE_TYPES", function() { return _signature_type__WEBPACK_IMPORTED_MODULE_1__["SIGNATURE_TYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "E_SIGNATURE_TYPES", function() { return _signature_type__WEBPACK_IMPORTED_MODULE_1__["E_SIGNATURE_TYPES"]; });

/* harmony import */ var _template_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-status */ "./src/app/enums/template-status.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_STATUS", function() { return _template_status__WEBPACK_IMPORTED_MODULE_2__["TEMPLATE_STATUS"]; });

/* harmony import */ var _tuition_contract_split_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tuition-contract-split-type */ "./src/app/enums/tuition-contract-split-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUITION_CONTRACT_SPLIT_TYPES", function() { return _tuition_contract_split_type__WEBPACK_IMPORTED_MODULE_3__["TUITION_CONTRACT_SPLIT_TYPES"]; });







/***/ }),

/***/ "./src/app/enums/signature-type.ts":
/*!*****************************************!*\
  !*** ./src/app/enums/signature-type.ts ***!
  \*****************************************/
/*! exports provided: SIGNATURE_TYPES, E_SIGNATURE_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNATURE_TYPES", function() { return SIGNATURE_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E_SIGNATURE_TYPES", function() { return E_SIGNATURE_TYPES; });
var SIGNATURE_TYPES;
(function (SIGNATURE_TYPES) {
    SIGNATURE_TYPES["ESIGN"] = "esign";
    SIGNATURE_TYPES["WET"] = "wet";
})(SIGNATURE_TYPES || (SIGNATURE_TYPES = {}));
var E_SIGNATURE_TYPES;
(function (E_SIGNATURE_TYPES) {
    E_SIGNATURE_TYPES["SYSTEM"] = "system";
    E_SIGNATURE_TYPES["EXTERNAL"] = "external";
})(E_SIGNATURE_TYPES || (E_SIGNATURE_TYPES = {}));


/***/ }),

/***/ "./src/app/enums/template-status.ts":
/*!******************************************!*\
  !*** ./src/app/enums/template-status.ts ***!
  \******************************************/
/*! exports provided: TEMPLATE_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_STATUS", function() { return TEMPLATE_STATUS; });
var TEMPLATE_STATUS;
(function (TEMPLATE_STATUS) {
    TEMPLATE_STATUS["STATUS_ACTIVE"] = "active";
    TEMPLATE_STATUS["STATUS_ARCHIVED"] = "archived";
    TEMPLATE_STATUS["STATUS_DRAFT"] = "draft";
    TEMPLATE_STATUS["STATUS_REVIEW"] = "review";
    TEMPLATE_STATUS["STATUS_ALL"] = "all";
    TEMPLATE_STATUS["STATUS_CLOSED"] = "closed";
})(TEMPLATE_STATUS || (TEMPLATE_STATUS = {}));


/***/ }),

/***/ "./src/app/enums/tuition-contract-split-type.ts":
/*!******************************************************!*\
  !*** ./src/app/enums/tuition-contract-split-type.ts ***!
  \******************************************************/
/*! exports provided: TUITION_CONTRACT_SPLIT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUITION_CONTRACT_SPLIT_TYPES", function() { return TUITION_CONTRACT_SPLIT_TYPES; });
var TUITION_CONTRACT_SPLIT_TYPES;
(function (TUITION_CONTRACT_SPLIT_TYPES) {
    TUITION_CONTRACT_SPLIT_TYPES["STUDENT"] = "student";
    TUITION_CONTRACT_SPLIT_TYPES["FEE"] = "fee";
})(TUITION_CONTRACT_SPLIT_TYPES || (TUITION_CONTRACT_SPLIT_TYPES = {}));


/***/ }),

/***/ "./src/app/modules/login/components/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/login/components/index.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent, LoginFormComponent, RestoreFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/login/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });

/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/modules/login/components/login-form/login-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"]; });

/* harmony import */ var _restore_form_restore_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restore-form/restore-form.component */ "./src/app/modules/login/components/restore-form/restore-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestoreFormComponent", function() { return _restore_form_restore_form_component__WEBPACK_IMPORTED_MODULE_2__["RestoreFormComponent"]; });






/***/ }),

/***/ "./src/app/modules/login/components/login-form/login-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/login/components/login-form/login-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form clrForm class=\"customForm\" [formGroup]=\"form\" (submit)=\"logIn()\" novalidate autocomplete=\"new-password\">\n  <h2 class=\"text-center\">Login</h2>\n  <h5 class=\"text-center app-text-primary mt-5\">Welcome to the ABC School</h5>\n  <h6 class=\"text-center mb-5\">Please login for starting</h6>\n  <app-input-container label=\"Username\">\n    <input type=\"text\" placeholder=\"Username\" formControlName=\"username\" class=\"formInput\" autocomplete=\"new-password\">\n  </app-input-container>\n\n  <section class=\"passwordWrapper\">\n    <app-input-container label=\"Password\">\n      <input [type]=\"shape === 'eye' ? 'password' : 'text'\" placeholder=\"Password\" formControlName=\"password\"\n             class=\"formInput\" autocomplete=\"new-password\">\n    </app-input-container>\n    <img title=\"password_icon\"\n         [src]=\"shape === 'eye' ? '/assets/images/password/eye.svg' : '/assets/images/password/eye_off.svg'\"\n         (click)=\"changeField()\">\n  </section>\n\n  <span class=\"smallText\" (click)=\"changeView()\">\n    Forgot password?\n  </span>\n\n  <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn app-btn-warning mt-4\">\n    Log In\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/login/components/login-form/login-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/login/components/login-form/login-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customForm .formInput {\n  height: 30px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: #FFFFFF;\n  background-image: none;\n  border: .05rem solid #D5DFEC;\n  border-radius: 0;\n  display: block;\n  max-width: 100%;\n  outline: 0;\n  position: relative;\n  transition: all .2s ease;\n  width: 100%;\n  color: #263853;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 500;\n  text-indent: 7px; }\n  .customForm .formInput:focus {\n    border-color: #8fa9cc;\n    box-shadow: 0 0 0 0.1rem #b2c4dc; }\n  .customForm .ng-invalid.ng-dirty.formInput {\n    border-color: #f4a6a2;\n    box-shadow: 0 0 0 0.1rem #ee7b75; }\n  .customForm .formInput ::-webkit-input-placeholder {\n    color: #C0CAD8; }\n  .customForm .formInput ::-ms-input-placeholder {\n    color: #C0CAD8; }\n  .customForm .formInput ::placeholder {\n    color: #C0CAD8; }\n  /** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n  :host {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%; }\n  .customForm {\n  width: 100%;\n  padding: 30px 30px;\n  background-color: #fff;\n  box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.1);\n  text-align: start; }\n  @media (max-width: 500px) {\n    .customForm {\n      width: 100%; } }\n  .customForm h2 {\n    color: #263853;\n    font-size: 21px;\n    font-weight: bold;\n    line-height: 29px;\n    text-align: center;\n    margin-bottom: 32px; }\n  .customForm .formInput {\n    padding: .25rem .4rem; }\n  .customForm .smallText {\n    color: #626567;\n    font-size: 12px;\n    line-height: 14px;\n    margin-bottom: 50px;\n    cursor: pointer;\n    transition: all .2s ease; }\n  .customForm .smallText:hover {\n    color: #303233; }\n  .customForm button {\n    width: 100%;\n    border-radius: 0; }\n  .customForm .passwordWrapper {\n    position: relative;\n    margin-top: 20px; }\n  .customForm .passwordWrapper img {\n      position: absolute;\n      top: 50%;\n      right: 5%;\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvbW9kdWxlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvbWl4aW5zL2Zvcm0tY29tcG9uZW50cy5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvb3JnYW5pemF0aW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbG9naW4vY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQzhDRSxZQUFZO0VBQ1osd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFRDlEbEI7SUNpRUkscUJBQW9DO0lBQ3BDLGdDQUErQyxFQUFBO0VEbEVuRDtJQ3NFSSxxQkFBcUM7SUFDckMsZ0NBQWdELEVBQUE7RUR2RXBEO0lDMkVJLGNBQWMsRUFBQTtFRDNFbEI7SUN1RkksY0FBYyxFQUFBO0VEdkZsQjtJQzBGSSxjQUFjLEVBQUE7RUMvRmxCOzs7OztFQ3FDRTtFSHhDRjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXLEVBQUE7RUFHYjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JJRlU7RUpHViwyQ0FBd0M7RUFDeEMsaUJBQWlCLEVBQUE7RUFFakI7SUFQRjtNQVFJLFdBQVcsRUFBQSxFQStDZDtFQXZERDtJQVlJLGNJTnFCO0lKT3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQWpCdkI7SUFzQkkscUJBQXFCLEVBQUE7RUF0QnpCO0lBMEJJLGNJckJpQjtJSnNCakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHdCQUF3QixFQUFBO0VBL0I1QjtJQWtDSSxjQUFrQyxFQUFBO0VBbEN0QztJQXdDSSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7RUF6Q3BCO0lBNkNJLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQTlDcEI7TUFpRE0sa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsZUFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9pbmRleC5zY3NzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggMnB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBoMiB7XG4gICAgY29sb3I6ICRzdWItdGl0bGUtY29sb3I7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB9XG5cbiAgLmZvcm1JbnB1dHtcbiAgICBAZXh0ZW5kICVmb3JtLWlucHV0O1xuICAgIHBhZGRpbmc6IC4yNXJlbSAuNHJlbTtcbiAgfVxuXG4gIC5zbWFsbFRleHR7XG4gICAgY29sb3I6ICR0aXRsZS1jb2xvcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICB9XG4gIC5zbWFsbFRleHQ6aG92ZXIge1xuICAgIGNvbG9yOiBkYXJrZW4oKCR0aXRsZS1jb2xvciksIDIwJSk7XG4gIH1cblxuICBidXR0b24ge1xuICAgIC8vQGV4dGVuZCAlY29tbW9uLWJ0bjtcbiAgICAvL21hcmdpbjogMCAwIDQwcHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLnBhc3N3b3JkV3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIGltZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHJpZ2h0OiA1JTtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cbiAgfVxufVxuIiwiJWNvbW1vbi1idG4ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTY3Q0M7XG4gIGJvcmRlci1jb2xvcjogIzI1NjdDQztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCgjMjU2N0NDKSwgMjAlKTtcbiAgICBib3JkZXItY29sb3I6IGRhcmtlbigoIzI1NjdDQyksIDIwJSk7XG4gIH1cblxuICAmLmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgY29sb3I6ICM1NjU2NTY7XG4gIH1cblxuICAmLm91dGxpbmUge1xuICAgIGNvbG9yOiAjMjU2N0NDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2N0NDO1xuICB9XG5cbiAgJi5vdXRsaW5lOmhvdmVyIHtcbiAgICBjb2xvcjogZGFya2VuKCgjMjU2N0NDKSwgMjAlKTtcbiAgICBib3JkZXItY29sb3I6IGRhcmtlbigoIzI1NjdDQyksIDIwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigoIzI1NjdDQyksIDUwJSk7XG4gIH1cblxuICAmLm1haW4ge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTY3Q0M7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2N0NDO1xuICB9XG5cbiAgJi5tYWluOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oKCMyNTY3Q0MpLCAyMCUpO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCgjMjU2N0NDKSwgMjAlKTtcbiAgfVxufVxuXG4lZm9ybS1pbnB1dCB7XG4gIGhlaWdodDogMzBweDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAuMDVyZW0gc29saWQgI0Q1REZFQztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzI2Mzg1MztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1pbmRlbnQ6IDdweDtcblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IGRhcmtlbigoI0Q1REZFQyksIDIwJSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtIGRhcmtlbigoI0Q1REZFQyksIDEwJSk7XG4gIH1cblxuICAmLm5nLWludmFsaWQubmctZGlydHkge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigoI0U5NEY0NyksIDIwJSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtIGxpZ2h0ZW4oKCNFOTRGNDcpLCAxMCUpO1xuICB9XG5cbiAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODtcbiAgfVxuICA6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNDMENBRDg7XG4gIH1cbiAgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODtcbiAgfVxuICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODtcbiAgfVxuICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNDMENBRDg7XG4gIH1cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNDMENBRDg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuL2JzL2luZGV4LnNjc3MnO1xuXG4kbWFpbi1tZW51LXdpZHRoOiA1NXB4O1xuJHRvcC1tZW51LWhlaWdodDogNDBweDtcblxuLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG5cbi8vICBFeGFtcGxlOiBcbi8vICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykgeyBcbi8vICAgICAgICAgIFxuLy8gICAgICB9XG4gIiwiLmN1c3RvbUZvcm0gLmZvcm1JbnB1dCB7XG4gIGhlaWdodDogMzBweDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAuMDVyZW0gc29saWQgI0Q1REZFQztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzI2Mzg1MztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1pbmRlbnQ6IDdweDsgfVxuICAuY3VzdG9tRm9ybSAuZm9ybUlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM4ZmE5Y2M7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNiMmM0ZGM7IH1cbiAgLmN1c3RvbUZvcm0gLm5nLWludmFsaWQubmctZGlydHkuZm9ybUlucHV0IHtcbiAgICBib3JkZXItY29sb3I6ICNmNGE2YTI7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNlZTdiNzU7IH1cbiAgLmN1c3RvbUZvcm0gLmZvcm1JbnB1dCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQzBDQUQ4OyB9XG4gIC5jdXN0b21Gb3JtIC5mb3JtSW5wdXQgOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQzBDQUQ4OyB9XG4gIC5jdXN0b21Gb3JtIC5mb3JtSW5wdXQgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODsgfVxuICAuY3VzdG9tRm9ybSAuZm9ybUlucHV0IDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQzBDQUQ4OyB9XG4gIC5jdXN0b21Gb3JtIC5mb3JtSW5wdXQgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQzBDQUQ4OyB9XG4gIC5jdXN0b21Gb3JtIC5mb3JtSW5wdXQgOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNDMENBRDg7IH1cblxuLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmN1c3RvbUZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMzBweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0ZXh0LWFsaWduOiBzdGFydDsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuY3VzdG9tRm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTsgfSB9XG4gIC5jdXN0b21Gb3JtIGgyIHtcbiAgICBjb2xvcjogIzI2Mzg1MztcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7IH1cbiAgLmN1c3RvbUZvcm0gLmZvcm1JbnB1dCB7XG4gICAgcGFkZGluZzogLjI1cmVtIC40cmVtOyB9XG4gIC5jdXN0b21Gb3JtIC5zbWFsbFRleHQge1xuICAgIGNvbG9yOiAjNjI2NTY3O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7IH1cbiAgLmN1c3RvbUZvcm0gLnNtYWxsVGV4dDpob3ZlciB7XG4gICAgY29sb3I6ICMzMDMyMzM7IH1cbiAgLmN1c3RvbUZvcm0gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XG4gIC5jdXN0b21Gb3JtIC5wYXNzd29yZFdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XG4gICAgLmN1c3RvbUZvcm0gLnBhc3N3b3JkV3JhcHBlciBpbWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICByaWdodDogNSU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/modules/login/components/login-form/login-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/login/components/login-form/login-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/app/modules/login/store/index.ts");







var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(fb, store, effects, ch) {
        this.fb = fb;
        this.store = store;
        this.effects = effects;
        this.ch = ch;
        this.shape = 'eye';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.goToRestore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.effects.status$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (res) {
            var error = res.error;
            var keys = Object.keys(error);
            keys.forEach(function (key) {
                if (_this.form.controls[key]) {
                    _this.form.controls[key].setErrors({ 'server': error[key] });
                    _this.form.controls[key].markAsTouched();
                }
            });
            _this.ch.markForCheck();
        });
    };
    LoginFormComponent.prototype.changeField = function () {
        this.shape = this.shape === 'eye' ? 'eye-hide' : 'eye';
    };
    LoginFormComponent.prototype.changeView = function () {
        this.goToRestore.emit(false);
    };
    LoginFormComponent.prototype.logIn = function () {
        var _a = this.form, valid = _a.valid, value = _a.value;
        if (valid) {
            this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_6__["Login"](value));
        }
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginFormComponent.prototype, "goToRestore", void 0);
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/modules/login/components/login-form/login-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/modules/login/components/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _store__WEBPACK_IMPORTED_MODULE_6__["Effects"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/components/login/login.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/login/components/login/login.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"loginFormWrapper\">\n  <section class=\"formWrapper\">\n      <app-login-form (goToRestore)=\"openRestoreView($event)\" [@fadeInOut]=\"isOpen ? 'open' : 'close'\"></app-login-form>\n      <app-restore-form (goToLogin)=\"openRestoreView($event)\" [@fadeInOut]=\"isOpen ? 'close' : 'open'\"></app-restore-form>\n  </section>\n</section>"

/***/ }),

/***/ "./src/app/modules/login/components/login/login.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/login/components/login/login.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n\n:host {\n  width: 100vw;\n  height: 100vh;\n  position: relative; }\n\nh1 {\n  color: #626567;\n  font-size: 28px;\n  font-weight: bold;\n  line-height: 30px;\n  margin-bottom: 6vw;\n  text-align: center; }\n\n.loginFormWrapper {\n  z-index: 2;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 371px; }\n\n@media (max-width: 500px) {\n    .loginFormWrapper {\n      width: 90%; } }\n\n.loginFormWrapper .formWrapper {\n    position: relative;\n    width: 371px;\n    min-height: 390px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvbW9kdWxlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy9taXhpbnMvZmxleC5zY3NzIiwiL1VzZXJzL2FydGt1ei9TaXRlcy9hcHAtZmUvc3JjL3N0eWxlcy92YXJpYWJsZXMvb3JnYW5pemF0aW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbG9naW4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDR0csYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUNGMUI7Ozs7O0VDS0U7O0FIUkY7RUFHSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNJSWlCO0VKSGpCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxZQUFZLEVBQUE7O0FBRVo7SUFSSjtNQVNRLFVBQVUsRUFBQSxFQVFqQjs7QUFqQkQ7SUFhUSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG46aG9zdCB7XG4gICAgQGV4dGVuZCAlZmxleC1hbGwtY2VudGVyO1xuXG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oMXtcbiAgICBjb2xvcjogJHRpdGxlLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2dnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5Gb3JtV3JhcHBlciB7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAzNzFweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cblxuICAgIC5mb3JtV3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDM3MXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzOTBweDtcbiAgICB9XG59IiwiJWZsZXgge1xuICAgZGlzcGxheTogZmxleDtcbn1cblxuJWZsZXgtYWxsLWNlbnRlciB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSIsIkBpbXBvcnQgJy4vYnMvaW5kZXguc2Nzcyc7XG5cbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XG4kdG9wLW1lbnUtaGVpZ2h0OiA0MHB4O1xuXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcbiAqICBzdWZmaXhlczpcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXG4gKi9cblxuLy8gIEV4YW1wbGU6IFxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxuLy8gICAgICAgICAgXG4vLyAgICAgIH1cbiAiLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG5oMSB7XG4gIGNvbG9yOiAjNjI2NTY3O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNnZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmxvZ2luRm9ybVdyYXBwZXIge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMzcxcHg7IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLmxvZ2luRm9ybVdyYXBwZXIge1xuICAgICAgd2lkdGg6IDkwJTsgfSB9XG4gIC5sb2dpbkZvcm1XcmFwcGVyIC5mb3JtV3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzNzFweDtcbiAgICBtaW4taGVpZ2h0OiAzOTBweDsgfVxuIiwiJGVsZW1lbnQtYmFzZS1jb2xvcjogIzQzNTBhMjtcbiRlbGVtZW50LXNlY29uZC1jb2xvcjogIzlmYTZjYjtcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XG4kZWxlbWVudC1kYW5nZXItY29sb3I6IHJlZDtcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcbiRoZWFkZXItbG9nby1ob3Zlci1jb2xvcjogI2RkYTUzODtcblxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XG4kYmFja2dyb3VuZC1jb2xvci1jb250ZW50OiAjYTFhMWExO1xuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcbiR3aGl0ZTogI2ZmZjtcbiRiYWNrZ3JvdW5kLWRpc2FibGVkLWNvbG9yOiAjY2VkNGRhO1xuXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xuJHN1Yi10aXRsZS1jb2xvcjogIzI2Mzg1MztcblxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4kc3ViaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ7XG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XG5cbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjNDY1ODczO1xuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xuJGhlYWRlci1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcblxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4kbGFiZWwtY29sb3I6ICM3YjhhYTE7XG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcbiRyZWQtY29sb3I6ICNmYzY0Njc7XG4kZXJyb3ItY29sb3I6ICNlNjU3NTc7XG5cbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcbiRpbmFjdGl2ZS1pbnB1dC1jb2xvcjogI2QwZGJlYTtcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XG5cbiRpY29uLWRhcmstZ3JheS1jb2xvcjogI0E0QThCRTtcbiRpY29uLWdyZXktY29sb3I6ICM5YzlkOWQ7XG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XG4kc29mdGdyYXktY29sb3I6ICNiNmI2YjY7XG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xuXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7Il19 */"

/***/ }),

/***/ "./src/app/modules/login/components/login/login.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/login/components/login/login.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/app/utils/index.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.isOpen = true;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.openRestoreView = function (mode) {
        this.isOpen = mode;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/login/components/login/login.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                '[@fadeInFromVoid]': 'fadeIn',
                class: 'host-animate'
            },
            animations: [Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fadeInFromVoid"])(), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fadeInOutVoid"])()],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/components/restore-form/restore-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/login/components/restore-form/restore-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form clrForm class=\"customForm\" [formGroup]=\"form\" novalidate>\n  <h2>Reset Password</h2>\n\n  <section class=\"sectionWrapper\" [style.min-height]=\"isOpen ? '230px' : '300px'\">\n      <section [@fadeInOut]=\"isOpen ? 'open' : 'close'\" class=\"formBlock\">\n          <div class=\"midText\">\n              <span>Forgot your password?</span><br>\n              <span>Enter your email address below and we'll get you back on track</span>\n          </div>\n          \n            <app-input-container label=\"Email\">\n              <input type=\"text\" placeholder=\"Email\" formControlName=\"email\" class=\"formInput\" autocomplete=\"off\">\n            </app-input-container>\n          \n            <section class=\"btnWrapper\">\n              <button class=\"btn btn-outline outline\" (click)=\"cancel()\">Cancel</button>\n              <button class=\"btn btn-secondary main\" [disabled]=\"!form.valid\"\n                      (click)=\"restore()\">\n                  Reset password\n              </button>\n            </section>\n      </section>\n    \n      <section [@fadeInOut]=\"isOpen ? 'close' : 'open'\" class=\"formBlock\">\n        <h3>{{form.get('email').value}}</h3>\n\n        <div class=\"midText\">\n            <span>If this email address is associated with a login you will<br> receive an email with instructions to reset your password</span>\n        </div>\n\n        <div class=\"flex\">\n          <span class=\"smallText\">Send it again</span>\n          <span class=\"smallText\" (click)=\"returnToMail()\">Change email</span>\n        </div>\n\n        <section class=\"btnWrapper\">\n            <button type=\"submit\" class=\"btn btn-secondary main\" (click)=\"cancel()\">Back to Login</button>\n        </section>\n      </section>\n  </section>\n</form>"

/***/ }),

/***/ "./src/app/modules/login/components/restore-form/restore-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/login/components/restore-form/restore-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customForm .btnWrapper button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #FFFFFF;\n  font-size: 13px;\n  font-weight: 900;\n  line-height: 16px;\n  text-align: center;\n  height: 32px;\n  width: 100%;\n  max-width: none;\n  background-color: #2567CC;\n  border-color: #2567CC;\n  text-transform: none;\n  letter-spacing: 0.5px;\n  transition: all .2s ease;\n  border-radius: 4px; }\n  .customForm .btnWrapper button:hover {\n    background-color: #153b76;\n    border-color: #153b76; }\n  .customForm .btnWrapper button.disabled {\n    pointer-events: none;\n    opacity: 1;\n    width: 100% !important;\n    background-color: #ccc;\n    border-color: #ccc;\n    color: #565656; }\n  .customForm .btnWrapper button.outline {\n    color: #2567CC;\n    background-color: #FFFFFF;\n    border-color: #2567CC; }\n  .customForm .btnWrapper button.outline:hover {\n    color: #153b76;\n    border-color: #153b76;\n    background-color: #f3f7fd; }\n  .customForm .btnWrapper button.main {\n    color: #FFFFFF;\n    background-color: #2567CC;\n    border-color: #2567CC; }\n  .customForm .btnWrapper button.main:hover {\n    background-color: #153b76;\n    border-color: #153b76; }\n  .customForm .formInput {\n  height: 30px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: #FFFFFF;\n  background-image: none;\n  border: .05rem solid #D5DFEC;\n  border-radius: 0;\n  display: block;\n  max-width: 100%;\n  outline: 0;\n  position: relative;\n  transition: all .2s ease;\n  width: 100%;\n  color: #263853;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 500;\n  text-indent: 7px; }\n  .customForm .formInput:focus {\n    border-color: #8fa9cc;\n    box-shadow: 0 0 0 0.1rem #b2c4dc; }\n  .customForm .ng-invalid.ng-dirty.formInput {\n    border-color: #f4a6a2;\n    box-shadow: 0 0 0 0.1rem #ee7b75; }\n  .customForm .formInput ::-webkit-input-placeholder {\n    color: #C0CAD8; }\n  .customForm .formInput ::-ms-input-placeholder {\n    color: #C0CAD8; }\n  .customForm .formInput ::placeholder {\n    color: #C0CAD8; }\n  /** Breakpoints for devices\n *  suffixes:\n *      -only - for strict range pixels\n *      -between - for range devices\n *      -up - for device and above\n */\n  :host {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%; }\n  .customForm {\n  width: 100%;\n  padding: 30px 30px;\n  background-color: #fff;\n  box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.1);\n  text-align: center; }\n  @media (max-width: 500px) {\n    .customForm {\n      width: 90%; } }\n  .customForm h2 {\n    color: #263853;\n    font-size: 21px;\n    font-weight: bold;\n    line-height: 29px;\n    text-align: center;\n    margin-bottom: 32px; }\n  .customForm h3 {\n    color: #626567;\n    font-size: 15px;\n    font-weight: 900;\n    letter-spacing: 0.55px;\n    line-height: 17px;\n    text-align: center;\n    margin: 32px 0; }\n  .customForm .midText span {\n    color: #263853;\n    font-size: 12px;\n    letter-spacing: 0.09px;\n    line-height: 17px; }\n  .customForm .midText span:first-child {\n    padding-bottom: 6px; }\n  .customForm .midText span:last-child {\n    padding-bottom: 40px; }\n  .customForm .formInput {\n    padding: .25rem .4rem; }\n  .customForm .smallText {\n    color: #626567;\n    font-size: 12px;\n    line-height: 14px;\n    cursor: pointer;\n    transition: all .2s ease; }\n  .customForm .smallText:hover {\n    color: #303233; }\n  .customForm .btnWrapper {\n    display: flex;\n    margin-top: 40px; }\n  .customForm .btnWrapper button {\n      border-radius: 0; }\n  .customForm .btnWrapper .outline {\n      margin: 0;\n      margin-right: 8px; }\n  .customForm .btnWrapper .main {\n      margin: 0;\n      margin-left: 8px; }\n  .customForm .passwordWrapper {\n    position: relative;\n    margin-top: 20px; }\n  .customForm .passwordWrapper clr-icon {\n      position: absolute;\n      top: 55%;\n      right: 5%;\n      cursor: pointer; }\n  .sectionWrapper {\n  position: relative;\n  width: 100%; }\n  .sectionWrapper .formBlock {\n    position: absolute;\n    top: 0%;\n    left: 0%;\n    width: 100%; }\n  .flex {\n  padding-top: 13px;\n  display: flex;\n  justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9hcHAvbW9kdWxlcy9sb2dpbi9jb21wb25lbnRzL3Jlc3RvcmUtZm9ybS9yZXN0b3JlLWZvcm0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXJ0a3V6L1NpdGVzL2FwcC1mZS9zcmMvc3R5bGVzL21peGlucy9mb3JtLWNvbXBvbmVudHMuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL29yZ2FuaXphdGlvbi5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2xvZ2luL2NvbXBvbmVudHMvcmVzdG9yZS1mb3JtL3Jlc3RvcmUtZm9ybS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcnRrdXovU2l0ZXMvYXBwLWZlL3NyYy9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VDVEUsd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQixFQUFBO0VETHBCO0lDUUkseUJBQXdDO0lBQ3hDLHFCQUFvQyxFQUFBO0VEVHhDO0lDYUksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RURsQmxCO0lDc0JJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCLEVBQUE7RUR4QnpCO0lDNEJJLGNBQTZCO0lBQzdCLHFCQUFvQztJQUNwQyx5QkFBeUMsRUFBQTtFRDlCN0M7SUNrQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUIsRUFBQTtFRHBDekI7SUN3Q0kseUJBQXdDO0lBQ3hDLHFCQUFvQyxFQUFBO0VEekN4QztFQzhDRSxZQUFZO0VBQ1osd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFRDlEbEI7SUNpRUkscUJBQW9DO0lBQ3BDLGdDQUErQyxFQUFBO0VEbEVuRDtJQ3NFSSxxQkFBcUM7SUFDckMsZ0NBQWdELEVBQUE7RUR2RXBEO0lDMkVJLGNBQWMsRUFBQTtFRDNFbEI7SUN1RkksY0FBYyxFQUFBO0VEdkZsQjtJQzBGSSxjQUFjLEVBQUE7RUMvRmxCOzs7OztFQytFRTtFSGxGRjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXLEVBQUE7RUFHYjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JJRlU7RUpHViwyQ0FBd0M7RUFDeEMsa0JBQWtCLEVBQUE7RUFFbEI7SUFQRjtNQVFJLFVBQVUsRUFBQSxFQXNGYjtFQTlGRDtJQVlJLGNJTnFCO0lKT3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQWpCdkI7SUFxQkksY0loQmlCO0lKaUJqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtFQTNCbEI7SUFnQ1EsY0kxQmlCO0lKMkJqQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBO0VBbkN6QjtJQXVDUSxtQkFBbUIsRUFBQTtFQXZDM0I7SUEwQ1Esb0JBQW9CLEVBQUE7RUExQzVCO0lBaURJLHFCQUFxQixFQUFBO0VBakR6QjtJQXFESSxjSWhEaUI7SUppRGpCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHdCQUF3QixFQUFBO0VBekQ1QjtJQTRESSxjQUFrQyxFQUFBO0VBNUR0QztJQWdFSSxhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7RUFqRXBCO01BcUVNLGdCQUFnQixFQUFBO0VBckV0QjtNQXlFUSxTQUFTO01BQ1QsaUJBQWlCLEVBQUE7RUExRXpCO01BOEVRLFNBQVM7TUFDVCxnQkFBZ0IsRUFBQTtFQS9FeEI7SUFvRkksa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBckZwQjtNQXdGTSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFNBQVM7TUFDVCxlQUNGLEVBQUE7RUFJSjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFGYjtJQUtJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVcsRUFBQTtFQUlmO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vY29tcG9uZW50cy9yZXN0b3JlLWZvcm0vcmVzdG9yZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b21Gb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgMzBweCAycHggcmdiYSgwLDAsMCwwLjEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogJHN1Yi10aXRsZS1jb2xvcjtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIH1cblxuICBoMyB7XG4gICAgY29sb3I6ICR0aXRsZS1jb2xvcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDMycHggMDtcbiAgfVxuXG4gIC5taWRUZXh0IHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJHN1Yi10aXRsZS1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgIH1cblxuICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgICB9XG4gICAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgIH1cbiAgfVxuXG4gIC5mb3JtSW5wdXQge1xuICAgIEBleHRlbmQgJWZvcm0taW5wdXQ7XG5cbiAgICBwYWRkaW5nOiAuMjVyZW0gLjRyZW07XG4gIH1cblxuICAuc21hbGxUZXh0e1xuICAgIGNvbG9yOiAkdGl0bGUtY29sb3I7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gIH1cbiAgLnNtYWxsVGV4dDpob3ZlciB7XG4gICAgY29sb3I6IGRhcmtlbigoJHRpdGxlLWNvbG9yKSwgMjAlKTtcbiAgfVxuXG4gIC5idG5XcmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgIGJ1dHRvbntcbiAgICAgIEBleHRlbmQgJWNvbW1vbi1idG47XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC5vdXRsaW5lIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAubWFpbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG4gIH1cblxuICAucGFzc3dvcmRXcmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICBcbiAgICBjbHItaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDU1JTtcbiAgICAgIHJpZ2h0OiA1JTtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cbiAgfVxufVxuXG4uc2VjdGlvbldyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5mb3JtQmxvY2t7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMCU7XG4gICAgbGVmdDogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZsZXgge1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59IiwiJWNvbW1vbi1idG4ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTY3Q0M7XG4gIGJvcmRlci1jb2xvcjogIzI1NjdDQztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCgjMjU2N0NDKSwgMjAlKTtcbiAgICBib3JkZXItY29sb3I6IGRhcmtlbigoIzI1NjdDQyksIDIwJSk7XG4gIH1cblxuICAmLmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgY29sb3I6ICM1NjU2NTY7XG4gIH1cblxuICAmLm91dGxpbmUge1xuICAgIGNvbG9yOiAjMjU2N0NDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2N0NDO1xuICB9XG5cbiAgJi5vdXRsaW5lOmhvdmVyIHtcbiAgICBjb2xvcjogZGFya2VuKCgjMjU2N0NDKSwgMjAlKTtcbiAgICBib3JkZXItY29sb3I6IGRhcmtlbigoIzI1NjdDQyksIDIwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigoIzI1NjdDQyksIDUwJSk7XG4gIH1cblxuICAmLm1haW4ge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTY3Q0M7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2N0NDO1xuICB9XG5cbiAgJi5tYWluOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oKCMyNTY3Q0MpLCAyMCUpO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCgjMjU2N0NDKSwgMjAlKTtcbiAgfVxufVxuXG4lZm9ybS1pbnB1dCB7XG4gIGhlaWdodDogMzBweDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAuMDVyZW0gc29saWQgI0Q1REZFQztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzI2Mzg1MztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1pbmRlbnQ6IDdweDtcblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IGRhcmtlbigoI0Q1REZFQyksIDIwJSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtIGRhcmtlbigoI0Q1REZFQyksIDEwJSk7XG4gIH1cblxuICAmLm5nLWludmFsaWQubmctZGlydHkge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigoI0U5NEY0NyksIDIwJSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtIGxpZ2h0ZW4oKCNFOTRGNDcpLCAxMCUpO1xuICB9XG5cbiAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODtcbiAgfVxuICA6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNDMENBRDg7XG4gIH1cbiAgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODtcbiAgfVxuICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODtcbiAgfVxuICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNDMENBRDg7XG4gIH1cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNDMENBRDg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuL2JzL2luZGV4LnNjc3MnO1xuXG4kbWFpbi1tZW51LXdpZHRoOiA1NXB4O1xuJHRvcC1tZW51LWhlaWdodDogNDBweDtcblxuLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXG4gKiAgc3VmZml4ZXM6XG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxuICovXG5cbi8vICBFeGFtcGxlOiBcbi8vICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykgeyBcbi8vICAgICAgICAgIFxuLy8gICAgICB9XG4gIiwiLmN1c3RvbUZvcm0gLmJ0bldyYXBwZXIgYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2N0NDO1xuICBib3JkZXItY29sb3I6ICMyNTY3Q0M7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG4gIC5jdXN0b21Gb3JtIC5idG5XcmFwcGVyIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1M2I3NjtcbiAgICBib3JkZXItY29sb3I6ICMxNTNiNzY7IH1cbiAgLmN1c3RvbUZvcm0gLmJ0bldyYXBwZXIgYnV0dG9uLmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgY29sb3I6ICM1NjU2NTY7IH1cbiAgLmN1c3RvbUZvcm0gLmJ0bldyYXBwZXIgYnV0dG9uLm91dGxpbmUge1xuICAgIGNvbG9yOiAjMjU2N0NDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2N0NDOyB9XG4gIC5jdXN0b21Gb3JtIC5idG5XcmFwcGVyIGJ1dHRvbi5vdXRsaW5lOmhvdmVyIHtcbiAgICBjb2xvcjogIzE1M2I3NjtcbiAgICBib3JkZXItY29sb3I6ICMxNTNiNzY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjdmZDsgfVxuICAuY3VzdG9tRm9ybSAuYnRuV3JhcHBlciBidXR0b24ubWFpbiB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NjdDQztcbiAgICBib3JkZXItY29sb3I6ICMyNTY3Q0M7IH1cbiAgLmN1c3RvbUZvcm0gLmJ0bldyYXBwZXIgYnV0dG9uLm1haW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTNiNzY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTUzYjc2OyB9XG5cbi5jdXN0b21Gb3JtIC5mb3JtSW5wdXQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogLjA1cmVtIHNvbGlkICNENURGRUM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMyNjM4NTM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtaW5kZW50OiA3cHg7IH1cbiAgLmN1c3RvbUZvcm0gLmZvcm1JbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjOGZhOWNjO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjYjJjNGRjOyB9XG4gIC5jdXN0b21Gb3JtIC5uZy1pbnZhbGlkLm5nLWRpcnR5LmZvcm1JbnB1dCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjRhNmEyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjZWU3Yjc1OyB9XG4gIC5jdXN0b21Gb3JtIC5mb3JtSW5wdXQgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODsgfVxuICAuY3VzdG9tRm9ybSAuZm9ybUlucHV0IDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODsgfVxuICAuY3VzdG9tRm9ybSAuZm9ybUlucHV0IDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNDMENBRDg7IH1cbiAgLmN1c3RvbUZvcm0gLmZvcm1JbnB1dCA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODsgfVxuICAuY3VzdG9tRm9ybSAuZm9ybUlucHV0IDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI0MwQ0FEODsgfVxuICAuY3VzdG9tRm9ybSAuZm9ybUlucHV0IDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQzBDQUQ4OyB9XG5cbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xuICogIHN1ZmZpeGVzOlxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5jdXN0b21Gb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5jdXN0b21Gb3JtIHtcbiAgICAgIHdpZHRoOiA5MCU7IH0gfVxuICAuY3VzdG9tRm9ybSBoMiB7XG4gICAgY29sb3I6ICMyNjM4NTM7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XG4gIC5jdXN0b21Gb3JtIGgzIHtcbiAgICBjb2xvcjogIzYyNjU2NztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDMycHggMDsgfVxuICAuY3VzdG9tRm9ybSAubWlkVGV4dCBzcGFuIHtcbiAgICBjb2xvcjogIzI2Mzg1MztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDlweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDsgfVxuICAuY3VzdG9tRm9ybSAubWlkVGV4dCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4OyB9XG4gIC5jdXN0b21Gb3JtIC5taWRUZXh0IHNwYW46bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7IH1cbiAgLmN1c3RvbUZvcm0gLmZvcm1JbnB1dCB7XG4gICAgcGFkZGluZzogLjI1cmVtIC40cmVtOyB9XG4gIC5jdXN0b21Gb3JtIC5zbWFsbFRleHQge1xuICAgIGNvbG9yOiAjNjI2NTY3O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlOyB9XG4gIC5jdXN0b21Gb3JtIC5zbWFsbFRleHQ6aG92ZXIge1xuICAgIGNvbG9yOiAjMzAzMjMzOyB9XG4gIC5jdXN0b21Gb3JtIC5idG5XcmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7IH1cbiAgICAuY3VzdG9tRm9ybSAuYnRuV3JhcHBlciBidXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAgIC5jdXN0b21Gb3JtIC5idG5XcmFwcGVyIC5vdXRsaW5lIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XG4gICAgLmN1c3RvbUZvcm0gLmJ0bldyYXBwZXIgLm1haW4ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuICAuY3VzdG9tRm9ybSAucGFzc3dvcmRXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxuICAgIC5jdXN0b21Gb3JtIC5wYXNzd29yZFdyYXBwZXIgY2xyLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1NSU7XG4gICAgICByaWdodDogNSU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnNlY3Rpb25XcmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTsgfVxuICAuc2VjdGlvbldyYXBwZXIgLmZvcm1CbG9jayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMCU7XG4gICAgbGVmdDogMCU7XG4gICAgd2lkdGg6IDEwMCU7IH1cblxuLmZsZXgge1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XG4kZWxlbWVudC13YXJuaW5nLWNvbG9yOiAjZmZiOTE1O1xuJGVsZW1lbnQtZGFuZ2VyLWNvbG9yOiByZWQ7XG4kaGVhZGVyLWxvZ28tY29sb3I6ICNmOGJjNDU7XG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcbiRiYWNrZ3JvdW5kLWNvbG9yLW1lbnUtbGFiZWw6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4kd2hpdGU6ICNmZmY7XG4kYmFja2dyb3VuZC1kaXNhYmxlZC1jb2xvcjogI2NlZDRkYTtcblxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcbiR0aXRsZS1jb2xvcjogIzYyNjU2NztcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XG5cbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xuXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XG4kaGVhZGVyLXNoYWRvdy1pbnNldC1jb2xvcjogI0U4RThFODtcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XG4kcmVkLWNvbG9yOiAjZmM2NDY3O1xuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xuXG4kbW9kYWwtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNlZWYxZjY7XG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xuXG4kaWNvbi1kYXJrLWdyYXktY29sb3I6ICNBNEE4QkU7XG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xuJGdyYXktY29sb3I6ICM5MDkwOTA7XG4kbGlnaHRncmF5LWNvbG9yOiAjZjJmMmYyO1xuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xuJGxpZ2h0Ymx1ZS1jb2xvcjogI0U0RTdGRjtcblxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuJHRhYmxlLWhlYWRlci1pbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/modules/login/components/restore-form/restore-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/login/components/restore-form/restore-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RestoreFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreFormComponent", function() { return RestoreFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./src/app/utils/index.ts");




var RestoreFormComponent = /** @class */ (function () {
    function RestoreFormComponent(fb) {
        this.fb = fb;
        this.isOpen = true;
        this.goToLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RestoreFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    RestoreFormComponent.prototype.cancel = function () {
        this.isOpen = true;
        this.goToLogin.emit(true);
    };
    RestoreFormComponent.prototype.restore = function () {
        var valid = this.form.valid;
        if (valid) {
            this.isOpen = !this.isOpen;
        }
    };
    RestoreFormComponent.prototype.returnToMail = function () {
        this.isOpen = !this.isOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestoreFormComponent.prototype, "goToLogin", void 0);
    RestoreFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restore-form',
            template: __webpack_require__(/*! ./restore-form.component.html */ "./src/app/modules/login/components/restore-form/restore-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["fadeInOutVoid"])()],
            styles: [__webpack_require__(/*! ./restore-form.component.scss */ "./src/app/modules/login/components/restore-form/restore-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RestoreFormComponent);
    return RestoreFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/index.ts":
/*!****************************************!*\
  !*** ./src/app/modules/login/index.ts ***!
  \****************************************/
/*! exports provided: routes, LoginRoutingModule, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/modules/login/login-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return _login_routing_module__WEBPACK_IMPORTED_MODULE_0__["routes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return _login_routing_module__WEBPACK_IMPORTED_MODULE_0__["LoginRoutingModule"]; });

/* harmony import */ var _login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.module */ "./src/app/modules/login/login.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return _login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"]; });





/***/ }),

/***/ "./src/app/modules/login/login-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/login/login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/modules/login/components/index.ts");




var routes = [
    {
        path: 'login',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth */ "./src/app/services/auth/index.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/modules/login/login-routing.module.ts");
/* harmony import */ var _components_form_components_input_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form-components/input-container */ "./src/app/components/form-components/input-container/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./src/app/modules/login/store/index.ts");
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rest */ "./src/app/modules/login/rest/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components */ "./src/app/modules/login/components/index.ts");












var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _services_auth__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
                _components_form_components_input_container__WEBPACK_IMPORTED_MODULE_6__["InputContainerModule"].forRoot(),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('user', _store__WEBPACK_IMPORTED_MODULE_9__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store__WEBPACK_IMPORTED_MODULE_9__["Effects"]])
            ],
            declarations: [_components__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["RestoreFormComponent"]],
            providers: [_rest__WEBPACK_IMPORTED_MODULE_10__["LoginService"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/modules/login/rest/index.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/login/rest/index.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ "./src/app/modules/login/rest/login.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_service__WEBPACK_IMPORTED_MODULE_0__["LoginService"]; });




/***/ }),

/***/ "./src/app/modules/login/rest/login.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/login/rest/login.service.ts ***!
  \*****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth */ "./src/app/services/auth/index.ts");



var LoginService = /** @class */ (function () {
    function LoginService(authService) {
        this.authService = authService;
    }
    LoginService.prototype.login = function (data) {
        var username = data.username, password = data.password;
        var obj = {
            username: username,
            password: password
        };
        return this.authService.login(obj);
    };
    LoginService.prototype.logout = function () {
        this.authService.logout();
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/modules/login/store/actions.ts":
/*!************************************************!*\
  !*** ./src/app/modules/login/store/actions.ts ***!
  \************************************************/
/*! exports provided: Login, LoginSuccess, LoginError, RestorePassword, RestorePasswordSuccess, RestorePasswordError, Logout, ClearState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginError", function() { return LoginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePassword", function() { return RestorePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePasswordSuccess", function() { return RestorePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePasswordError", function() { return RestorePasswordError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearState", function() { return ClearState; });
var Login = /** @class */ (function () {
    function Login(data) {
        this.data = data;
        this.type = Login.Type;
    }
    Login.Type = '[Login Page] Login';
    return Login;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(user) {
        this.user = user;
        this.type = LoginSuccess.Type;
    }
    LoginSuccess.Type = '[Login API] LoginSuccess';
    return LoginSuccess;
}());

var LoginError = /** @class */ (function () {
    function LoginError(error) {
        this.error = error;
        this.type = LoginError.Type;
    }
    LoginError.Type = '[Login API] LoginError';
    return LoginError;
}());

var RestorePassword = /** @class */ (function () {
    function RestorePassword(email) {
        this.email = email;
        this.type = RestorePassword.Type;
    }
    RestorePassword.Type = '[Login Page] RestorePassword';
    return RestorePassword;
}());

var RestorePasswordSuccess = /** @class */ (function () {
    function RestorePasswordSuccess(email) {
        this.email = email;
        this.type = RestorePasswordSuccess.Type;
    }
    RestorePasswordSuccess.Type = '[Login API] RestorePasswordSuccess';
    return RestorePasswordSuccess;
}());

var RestorePasswordError = /** @class */ (function () {
    function RestorePasswordError(error) {
        this.error = error;
        this.type = RestorePasswordError.Type;
    }
    RestorePasswordError.Type = '[Login API] RestorePasswordError';
    return RestorePasswordError;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = Logout.Type;
    }
    Logout.Type = '[Main Page] Logout';
    return Logout;
}());

var ClearState = /** @class */ (function () {
    function ClearState() {
        this.type = ClearState.Type;
    }
    ClearState.Type = '[App] Clear State';
    return ClearState;
}());



/***/ }),

/***/ "./src/app/modules/login/store/effects.ts":
/*!************************************************!*\
  !*** ./src/app/modules/login/store/effects.ts ***!
  \************************************************/
/*! exports provided: Effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return Effects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest */ "./src/app/modules/login/rest/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./src/app/modules/login/store/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _user_logged_store_user_logged_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../user-logged/store/user-logged.actions */ "./src/app/modules/user-logged/store/user-logged.actions.ts");










var Effects = /** @class */ (function () {
    function Effects(actions$, userService, router, store) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.router = router;
        this.store = store;
        this.status$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_7__["LoginError"].Type)));
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_7__["Login"].Type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var data = _a.data;
            return _this.userService.login(data).then(function (res) { return new _actions__WEBPACK_IMPORTED_MODULE_7__["LoginSuccess"](res); }, function (err) { return new _actions__WEBPACK_IMPORTED_MODULE_7__["LoginError"](err); });
        }));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_7__["LoginSuccess"].Type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.store.dispatch(new _user_logged_store_user_logged_actions__WEBPACK_IMPORTED_MODULE_9__["RequestUserLogged"]());
            _this.router.navigate(['/']);
        }));
        this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_7__["Logout"].Type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_7__["ClearState"]());
            _this.userService.logout();
            _this.router.navigate(['/login']);
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Effects.prototype, "login$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Effects.prototype, "loginSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Effects.prototype, "logout$", void 0);
    Effects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _rest__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]])
    ], Effects);
    return Effects;
}());



/***/ }),

/***/ "./src/app/modules/login/store/index.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/login/store/index.ts ***!
  \**********************************************/
/*! exports provided: initialState, reducer, Login, LoginSuccess, LoginError, RestorePassword, RestorePasswordSuccess, RestorePasswordError, Logout, ClearState, Effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/app/modules/login/store/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/modules/login/store/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginError", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoginError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestorePassword", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["RestorePassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestorePasswordSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["RestorePasswordSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestorePasswordError", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["RestorePasswordError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearState", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["ClearState"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ "./src/app/modules/login/store/effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["Effects"]; });






/***/ }),

/***/ "./src/app/modules/login/store/reducer.ts":
/*!************************************************!*\
  !*** ./src/app/modules/login/store/reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/modules/login/store/actions.ts");


var initialState = {
    user: null,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action instanceof _actions__WEBPACK_IMPORTED_MODULE_1__["LoginSuccess"]) {
        var user = action.user;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: user });
    }
    if (action instanceof _actions__WEBPACK_IMPORTED_MODULE_1__["Logout"]) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: null });
    }
    if (action instanceof _actions__WEBPACK_IMPORTED_MODULE_1__["ClearState"]) {
        state = undefined;
    }
    return state;
}


/***/ }),

/***/ "./src/app/modules/user-logged/store/user-logged.actions.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/user-logged/store/user-logged.actions.ts ***!
  \******************************************************************/
/*! exports provided: UserLoggedActionTypes, RequestUserLogged, AddUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoggedActionTypes", function() { return UserLoggedActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestUserLogged", function() { return RequestUserLogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUser", function() { return AddUser; });
var UserLoggedActionTypes;
(function (UserLoggedActionTypes) {
    UserLoggedActionTypes["RequestUserLogged"] = "[User] Request Logged User";
    UserLoggedActionTypes["AddUser"] = "[User] Add Logged User";
})(UserLoggedActionTypes || (UserLoggedActionTypes = {}));
var RequestUserLogged = /** @class */ (function () {
    function RequestUserLogged() {
        this.type = UserLoggedActionTypes.RequestUserLogged;
    }
    return RequestUserLogged;
}());

var AddUser = /** @class */ (function () {
    function AddUser(payload) {
        this.payload = payload;
        this.type = UserLoggedActionTypes.AddUser;
    }
    return AddUser;
}());



/***/ }),

/***/ "./src/app/modules/user-logged/store/user-logged.effect.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/user-logged/store/user-logged.effect.ts ***!
  \*****************************************************************/
/*! exports provided: UserLoggedEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoggedEffects", function() { return UserLoggedEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_logged_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-logged.actions */ "./src/app/modules/user-logged/store/user-logged.actions.ts");
/* harmony import */ var _user_logged_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-logged.service */ "./src/app/modules/user-logged/user-logged.service.ts");







var UserLoggedEffects = /** @class */ (function () {
    function UserLoggedEffects(actions$, userLoggedService) {
        var _this = this;
        this.actions$ = actions$;
        this.userLoggedService = userLoggedService;
        this.loadUserLogged$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_user_logged_actions__WEBPACK_IMPORTED_MODULE_5__["UserLoggedActionTypes"].RequestUserLogged), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.userLoggedService.getUserLogged(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return new _user_logged_actions__WEBPACK_IMPORTED_MODULE_5__["AddUser"]({ user: user }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log('error loading logged user ', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserLoggedEffects.prototype, "loadUserLogged$", void 0);
    UserLoggedEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _user_logged_service__WEBPACK_IMPORTED_MODULE_6__["UserLoggedService"]])
    ], UserLoggedEffects);
    return UserLoggedEffects;
}());



/***/ }),

/***/ "./src/app/modules/user-logged/store/user-logged.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/user-logged/store/user-logged.reducer.ts ***!
  \******************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_logged_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-logged.actions */ "./src/app/modules/user-logged/store/user-logged.actions.ts");


// export const adapter: EntityAdapter<UserLogged> = createEntityAdapter<UserLogged>();
var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _user_logged_actions__WEBPACK_IMPORTED_MODULE_1__["UserLoggedActionTypes"].AddUser: {
            var user = action.payload.user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: user });
        }
        default: {
            return state;
        }
    }
}
// export const {
//     selectIds,
//     selectEntities,
//     selectAll,
//     selectTotal,
// } = adapter.getSelectors();
// export const getUserLogged = (state: UserLoggedState) => state.ids;
// export const selectUserLoggedState = createFeatureSelector<UserLoggedState>("user-logged");
// export const selectUserLogged = createSelector(
//     'user-logged',
//     selectIds
// );


/***/ }),

/***/ "./src/app/modules/user-logged/user-logged-init.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/user-logged/user-logged-init.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserLoggedInitFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoggedInitFactory", function() { return UserLoggedInitFactory; });
/* harmony import */ var _store_user_logged_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/user-logged.actions */ "./src/app/modules/user-logged/store/user-logged.actions.ts");

function UserLoggedInitFactory(store, auth) {
    return function () {
        return new Promise(function (resolve) {
            if (auth.token) {
                store.dispatch(new _store_user_logged_actions__WEBPACK_IMPORTED_MODULE_0__["RequestUserLogged"]());
            }
            resolve();
        });
    };
}


/***/ }),

/***/ "./src/app/modules/user-logged/user-logged.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/user-logged/user-logged.module.ts ***!
  \***********************************************************/
/*! exports provided: UserLoggedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoggedModule", function() { return UserLoggedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_user_logged_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/user-logged.reducer */ "./src/app/modules/user-logged/store/user-logged.reducer.ts");





var UserLoggedModule = /** @class */ (function () {
    function UserLoggedModule() {
    }
    UserLoggedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('user-logged', _store_user_logged_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"])
            ]
        })
    ], UserLoggedModule);
    return UserLoggedModule;
}());



/***/ }),

/***/ "./src/app/modules/user-logged/user-logged.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/user-logged/user-logged.service.ts ***!
  \************************************************************/
/*! exports provided: UserLoggedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoggedService", function() { return UserLoggedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UserLoggedService = /** @class */ (function () {
    function UserLoggedService(http) {
        this.http = http;
    }
    UserLoggedService.prototype.getUserLogged = function () {
        return this.http.get('/me').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response.status)
                return response.data;
        }));
    };
    UserLoggedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserLoggedService);
    return UserLoggedService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: ROUTE_NOT_AUTHENTICATED, AuthGuard, NAVIGATION_CANCELING_ERROR, makeCancelingError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_NOT_AUTHENTICATED", function() { return ROUTE_NOT_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_CANCELING_ERROR", function() { return NAVIGATION_CANCELING_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCancelingError", function() { return makeCancelingError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");



var ROUTE_NOT_AUTHENTICATED = 'ROUTE_NOT_AUTHENTICATED';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, routerState) {
        if (!this.authService.token) {
            throw makeCancelingError(new Error(ROUTE_NOT_AUTHENTICATED));
        }
        else {
            return true;
        }
    };
    AuthGuard.prototype.canLoad = function (route) {
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());

/**
 * Copied over from Angular Router
 * @see https://goo.gl/8qUsNa
 */
var NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';
/**
 * Similar to navigationCancelingError
 * @see https://goo.gl/nNd9TX
 */
function makeCancelingError(error) {
    error[NAVIGATION_CANCELING_ERROR] = true;
    return error;
}


/***/ }),

/***/ "./src/app/services/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth/auth.module.ts ***!
  \**********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ "./src/app/services/auth/auth.guard.ts");





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function (config) {
        return {
            ngModule: AuthModule_1,
            providers: [
                {
                    provide: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AUTH_SERVICE_CONFIG"],
                    useValue: config
                }
            ]
        };
    };
    var AuthModule_1;
    AuthModule = AuthModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AUTH_SERVICE_CONFIG, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SERVICE_CONFIG", function() { return AUTH_SERVICE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-storage */ "./src/app/services/local-storage/index.ts");




var AUTH_SERVICE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('AUTH_SERVICE_CONFIG');
var AuthService = /** @class */ (function () {
    function AuthService(config, http, localStoreService) {
        this.config = config;
        this.http = http;
        this.localStoreService = localStoreService;
    }
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return this.localStoreService.getItem(this.config.storageTokenKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this.localStoreService.getItem(this.config.user);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (log) {
        var _this = this;
        if (this.token)
            this.logout();
        return this.http.post('/login', log).toPromise().then(function (res) {
            if (!res.status) {
                throw res.error;
            }
            else {
                var _a = res.data, username = _a.username, email = _a.email, full_name = _a.full_name, role = _a.role, access_token = _a.access_token;
                _this.localStoreService.setItem(_this.config.storageTokenKey, access_token);
                _this.localStoreService.setItem(_this.config.user, { username: username, email: email, full_name: full_name, role: role });
                return {
                    username: username,
                    email: email,
                    full_name: full_name,
                    role: role,
                };
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.http.get('/logout').toPromise().then(function (res) {
        });
        this.localStoreService.removeItem(this.config.storageTokenKey);
        this.localStoreService.removeItem(this.config.user);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(AUTH_SERVICE_CONFIG)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth/index.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth/index.ts ***!
  \****************************************/
/*! exports provided: AUTH_SERVICE_CONFIG, AuthService, AuthModule, ROUTE_NOT_AUTHENTICATED, AuthGuard, NAVIGATION_CANCELING_ERROR, makeCancelingError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTH_SERVICE_CONFIG", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AUTH_SERVICE_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.module */ "./src/app/services/auth/auth.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTE_NOT_AUTHENTICATED", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_2__["ROUTE_NOT_AUTHENTICATED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_CANCELING_ERROR", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_2__["NAVIGATION_CANCELING_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeCancelingError", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_2__["makeCancelingError"]; });






/***/ }),

/***/ "./src/app/services/local-storage/index.ts":
/*!*************************************************!*\
  !*** ./src/app/services/local-storage/index.ts ***!
  \*************************************************/
/*! exports provided: KEY, LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return _local_storage_service__WEBPACK_IMPORTED_MODULE_0__["KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]; });




/***/ }),

/***/ "./src/app/services/local-storage/local-storage.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/local-storage/local-storage.service.ts ***!
  \*****************************************************************/
/*! exports provided: KEY, LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KEY = 'Edminify';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(KEY + ": " + key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem(KEY + ": " + key));
    };
    LocalStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(KEY + ": " + key);
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/permission/permission.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/permission/permission.service.ts ***!
  \***********************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var PermissionService = /** @class */ (function () {
    function PermissionService(http, userLoggedStore$) {
        var _this = this;
        this.http = http;
        this.userLoggedStore$ = userLoggedStore$;
        this.userLoggedStore$.select('user-logged')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) { return item.user; }))
            .subscribe(function (res) {
            _this.userLogged = res;
        });
    }
    PermissionService.prototype.hasAccess = function (permission, entityType, entityId) {
        //TODO delete below
        if (this.userLogged.username == 'admin')
            return true;
        //
        if (!this.userLogged.permissions)
            return false;
        var permissions = this.getUserLoggedPermissions(entityType, entityId);
        if (!permissions)
            return false;
        if (permissions.full || permissions[permission])
            return true;
        return false;
    };
    PermissionService.prototype.getUserLoggedPermissions = function (entityType, entityId) {
        return this.userLogged.permissions[entityType][entityId];
    };
    PermissionService.prototype.savePermissions = function (permissions) {
        return this.http.post('/permissions', { permissions: permissions });
    };
    PermissionService.prototype.deletePermissions = function (id) {
        return this.http.delete("/permissions/" + id);
    };
    PermissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PermissionService);
    return PermissionService;
}());



/***/ }),

/***/ "./src/app/utils/animations.ts":
/*!*************************************!*\
  !*** ./src/app/utils/animations.ts ***!
  \*************************************/
/*! exports provided: fadeInFromVoid, fadeInFromRight, fadeInOutVoid, slideInOutVoid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInFromVoid", function() { return fadeInFromVoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInFromRight", function() { return fadeInFromRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOutVoid", function() { return fadeInOutVoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutVoid", function() { return slideInOutVoid; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function fadeInFromVoid() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInFromVoid', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: '0',
                transform: 'translateY(60px)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms')
        ])
    ]);
}
function fadeInFromRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInFromRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: '0',
                transform: 'translateX(60px)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms')
        ])
    ]);
}
function fadeInOutVoid() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'none',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'block',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]);
}
function slideInOutVoid() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(0, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0 })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(0, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))])
        ])
    ]);
}


/***/ }),

/***/ "./src/app/utils/index.ts":
/*!********************************!*\
  !*** ./src/app/utils/index.ts ***!
  \********************************/
/*! exports provided: fadeInFromVoid, fadeInFromRight, fadeInOutVoid, slideInOutVoid, HTTP_BASE_URL, BaseUrlInterceptor, InterceptorsModule, NoopInterceptor, HTTP_STORAGE_TOKEN_KEY, StorageTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/app/utils/animations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInFromVoid", function() { return _animations__WEBPACK_IMPORTED_MODULE_0__["fadeInFromVoid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInFromRight", function() { return _animations__WEBPACK_IMPORTED_MODULE_0__["fadeInFromRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInOutVoid", function() { return _animations__WEBPACK_IMPORTED_MODULE_0__["fadeInOutVoid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInOutVoid", function() { return _animations__WEBPACK_IMPORTED_MODULE_0__["slideInOutVoid"]; });

/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors */ "./src/app/utils/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_BASE_URL", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["HTTP_BASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseUrlInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["BaseUrlInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InterceptorsModule", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["InterceptorsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["NoopInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_STORAGE_TOKEN_KEY", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["HTTP_STORAGE_TOKEN_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageTokenInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_1__["StorageTokenInterceptor"]; });





/***/ }),

/***/ "./src/app/utils/interceptors/base-url.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/utils/interceptors/base-url.interceptor.ts ***!
  \************************************************************/
/*! exports provided: HTTP_BASE_URL, BaseUrlInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_BASE_URL", function() { return HTTP_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUrlInterceptor", function() { return BaseUrlInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var HTTP_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_BASE_URL');
var urlHasSchema = function (url) { return url && (url.startsWith('http://') || url.startsWith('https://')); };
/**
 * Add base url to any relative requests url
 * HTTP_BASE_URL token must be provided.
 */
var BaseUrlInterceptor = /** @class */ (function () {
    function BaseUrlInterceptor(httpBaseUrl) {
        this.httpBaseUrl = httpBaseUrl;
    }
    BaseUrlInterceptor.prototype.intercept = function (request, next) {
        if (!urlHasSchema(request.url)) {
            request = request.clone({
                url: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"].joinWithSlash(this.httpBaseUrl, request.url)
            });
        }
        return next.handle(request);
    };
    BaseUrlInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(HTTP_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], BaseUrlInterceptor);
    return BaseUrlInterceptor;
}());



/***/ }),

/***/ "./src/app/utils/interceptors/index.ts":
/*!*********************************************!*\
  !*** ./src/app/utils/interceptors/index.ts ***!
  \*********************************************/
/*! exports provided: HTTP_BASE_URL, BaseUrlInterceptor, InterceptorsModule, NoopInterceptor, HTTP_STORAGE_TOKEN_KEY, StorageTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_url_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-url.interceptor */ "./src/app/utils/interceptors/base-url.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_BASE_URL", function() { return _base_url_interceptor__WEBPACK_IMPORTED_MODULE_0__["HTTP_BASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseUrlInterceptor", function() { return _base_url_interceptor__WEBPACK_IMPORTED_MODULE_0__["BaseUrlInterceptor"]; });

/* harmony import */ var _interceptors_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors.module */ "./src/app/utils/interceptors/interceptors.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InterceptorsModule", function() { return _interceptors_module__WEBPACK_IMPORTED_MODULE_1__["InterceptorsModule"]; });

/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noop.interceptor */ "./src/app/utils/interceptors/noop.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return _noop_interceptor__WEBPACK_IMPORTED_MODULE_2__["NoopInterceptor"]; });

/* harmony import */ var _storage_token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage-token.interceptor */ "./src/app/utils/interceptors/storage-token.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_STORAGE_TOKEN_KEY", function() { return _storage_token_interceptor__WEBPACK_IMPORTED_MODULE_3__["HTTP_STORAGE_TOKEN_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageTokenInterceptor", function() { return _storage_token_interceptor__WEBPACK_IMPORTED_MODULE_3__["StorageTokenInterceptor"]; });







/***/ }),

/***/ "./src/app/utils/interceptors/interceptors.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/utils/interceptors/interceptors.module.ts ***!
  \***********************************************************/
/*! exports provided: InterceptorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorsModule", function() { return InterceptorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_url_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-url.interceptor */ "./src/app/utils/interceptors/base-url.interceptor.ts");
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noop.interceptor */ "./src/app/utils/interceptors/noop.interceptor.ts");
/* harmony import */ var _storage_token_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage-token.interceptor */ "./src/app/utils/interceptors/storage-token.interceptor.ts");






var InterceptorsModule = /** @class */ (function () {
    function InterceptorsModule() {
    }
    InterceptorsModule_1 = InterceptorsModule;
    InterceptorsModule.forRoot = function (config) {
        return {
            ngModule: InterceptorsModule_1,
            providers: [
                {
                    provide: _base_url_interceptor__WEBPACK_IMPORTED_MODULE_3__["HTTP_BASE_URL"],
                    useValue: config.baseUrl
                },
                {
                    provide: _storage_token_interceptor__WEBPACK_IMPORTED_MODULE_5__["HTTP_STORAGE_TOKEN_KEY"],
                    useValue: config.storageTokenKey
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: config.baseUrl ? _base_url_interceptor__WEBPACK_IMPORTED_MODULE_3__["BaseUrlInterceptor"] : _noop_interceptor__WEBPACK_IMPORTED_MODULE_4__["NoopInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: config.storageTokenKey ? _storage_token_interceptor__WEBPACK_IMPORTED_MODULE_5__["StorageTokenInterceptor"] : _noop_interceptor__WEBPACK_IMPORTED_MODULE_4__["NoopInterceptor"],
                    multi: true
                },
            ]
        };
    };
    var InterceptorsModule_1;
    InterceptorsModule = InterceptorsModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: []
        })
    ], InterceptorsModule);
    return InterceptorsModule;
}());



/***/ }),

/***/ "./src/app/utils/interceptors/noop.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/utils/interceptors/noop.interceptor.ts ***!
  \********************************************************/
/*! exports provided: NoopInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return NoopInterceptor; });
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request);
    };
    return NoopInterceptor;
}());



/***/ }),

/***/ "./src/app/utils/interceptors/storage-token.interceptor.ts":
/*!*****************************************************************!*\
  !*** ./src/app/utils/interceptors/storage-token.interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: HTTP_STORAGE_TOKEN_KEY, StorageTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_STORAGE_TOKEN_KEY", function() { return HTTP_STORAGE_TOKEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTokenInterceptor", function() { return StorageTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage */ "./src/app/services/local-storage/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth */ "./src/app/services/auth/index.ts");







var HTTP_STORAGE_TOKEN_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('HTTP_STORAGE_TOKEN_KEY');
var StorageTokenInterceptor = /** @class */ (function () {
    function StorageTokenInterceptor(tokenKey, config, localStoreService, router) {
        this.tokenKey = tokenKey;
        this.config = config;
        this.localStoreService = localStoreService;
        this.router = router;
    }
    Object.defineProperty(StorageTokenInterceptor.prototype, "token", {
        get: function () {
            return JSON.parse(localStorage.getItem(_services_local_storage__WEBPACK_IMPORTED_MODULE_3__["KEY"] + ": " + this.tokenKey));
        },
        enumerable: true,
        configurable: true
    });
    StorageTokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (this.token) {
            request = request.clone({
                setHeaders: {
                    'x-access-token': "" + this.token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.localStoreService.removeItem(_this.config.storageTokenKey);
                    _this.localStoreService.removeItem(_this.config.user);
                    _this.router.navigate(['login']);
                }
            }
        }));
    };
    StorageTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(HTTP_STORAGE_TOKEN_KEY)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_services_auth__WEBPACK_IMPORTED_MODULE_6__["AUTH_SERVICE_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, Object, _services_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StorageTokenInterceptor);
    return StorageTokenInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiCore: 'http://red.dev.codeblue.ventures/api/v1',
    avatarUrl: 'http://red.dev.codeblue.ventures/avatar/',
    apiFB: 'http://form-builder.red.dev.codeblue.ventures/api/v1',
    uploadApi: 'http://upload.red.dev.codeblue.ventures/api/v1',
    api_token: '123',
    apiFinanceCore: 'http://fin.red.dev.codeblue.ventures/api/v1',
    apiFinanceToken: 'Bearer 123',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/artkuz/Sites/app-fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map