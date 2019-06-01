(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-organization-organization-module"],{

/***/ "./node_modules/@ngrx/entity/fesm5/entity.js":
/*!***************************************************!*\
  !*** ./node_modules/@ngrx/entity/fesm5/entity.js ***!
  \***************************************************/
/*! exports provided: createEntityAdapter, Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license NgRx 7.2.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */



function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}

function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities, function (ids, entities) {
            return ids.map(function (id) { return entities[id]; });
        });
        var selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
            };
        }
        return {
            selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
            selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
            selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
            selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal),
        };
    }
    return { getSelectors: getSelectors };
}

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var DidMutate;
(function (DidMutate) {
    DidMutate[DidMutate["EntitiesOnly"] = 0] = "EntitiesOnly";
    DidMutate[DidMutate["Both"] = 1] = "Both";
    DidMutate[DidMutate["None"] = 2] = "None";
})(DidMutate || (DidMutate = {}));
function createStateOperator(mutator) {
    return function operation(arg, state) {
        var clonedEntityState = {
            ids: __spread(state.ids),
            entities: __assign({}, state.entities),
        };
        var didMutate = mutator(arg, clonedEntityState);
        if (didMutate === DidMutate.Both) {
            return Object.assign({}, state, clonedEntityState);
        }
        if (didMutate === DidMutate.EntitiesOnly) {
            return __assign({}, state, { entities: clonedEntityState.entities });
        }
        return state;
    };
}

function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && key === undefined) {
        console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
    }
    return key;
}

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return DidMutate.None;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    function addManyMutably(entities, state) {
        var e_1, _a;
        var didMutate = false;
        try {
            for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    function addAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return DidMutate.Both;
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keysOrPredicate, state) {
        var keys = keysOrPredicate instanceof Array
            ? keysOrPredicate
            : state.ids.filter(function (key) { return keysOrPredicate(state.entities[key]); });
        var didMutate = keys
            .filter(function (key) { return key in state.entities; })
            .map(function (key) { return delete state.entities[key]; }).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
        });
    }
    function takeNewKey(keys, update, state) {
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        updates = updates.filter(function (update) { return update.id in state.entities; });
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map(function (id) { return newKeys[id] || id; });
                return DidMutate.Both;
            }
            else {
                return DidMutate.EntitiesOnly;
            }
        }
        return DidMutate.None;
    }
    function mapMutably(map, state) {
        var changes = state.ids.reduce(function (changes, id) {
            var change = map(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id: id, changes: change });
            }
            return changes;
        }, []);
        var updates = changes.filter(function (_a) {
            var id = _a.id;
            return id in state.entities;
        });
        return updateManyMutably(updates, state);
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var e_2, _a;
        var added = [];
        var updated = [];
        try {
            for (var entities_2 = __values(entities), entities_2_1 = entities_2.next(); !entities_2_1.done; entities_2_1 = entities_2.next()) {
                var entity = entities_2_1.value;
                var id = selectIdValue(entity, selectId);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (entities_2_1 && !entities_2_1.done && (_a = entities_2.return)) _a.call(entities_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    return {
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        addAll: createStateOperator(addAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
        map: createStateOperator(mapMutably),
    };
}

var __values$1 = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createSortedStateAdapter(selectId, sort) {
    var _a = createUnsortedStateAdapter(selectId), removeOne = _a.removeOne, removeMany = _a.removeMany, removeAll = _a.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newModels, state) {
        var models = newModels.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            merge(models, state);
            return DidMutate.Both;
        }
    }
    function addAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return DidMutate.Both;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        var models = [];
        var didMutateIds = updates.filter(function (update) { return takeUpdatedModel(models, update, state); }).length >
            0;
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            var originalIds_1 = state.ids;
            var updatedIndexes_1 = [];
            state.ids = state.ids.filter(function (id, index) {
                if (id in state.entities) {
                    return true;
                }
                else {
                    updatedIndexes_1.push(index);
                    return false;
                }
            });
            merge(models, state);
            if (!didMutateIds &&
                updatedIndexes_1.every(function (i) { return state.ids[i] === originalIds_1[i]; })) {
                return DidMutate.EntitiesOnly;
            }
            else {
                return DidMutate.Both;
            }
        }
    }
    function mapMutably(updatesOrMap, state) {
        var updates = state.ids.reduce(function (changes, id) {
            var change = updatesOrMap(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id: id, changes: change });
            }
            return changes;
        }, []);
        return updateManyMutably(updates, state);
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var e_1, _a;
        var added = [];
        var updated = [];
        try {
            for (var entities_1 = __values$1(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                var id = selectIdValue(entity, selectId);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    function merge(models, state) {
        models.sort(sort);
        var ids = [];
        var i = 0;
        var j = 0;
        while (i < models.length && j < state.ids.length) {
            var model = models[i];
            var modelId = selectIdValue(model, selectId);
            var entityId = state.ids[j];
            var entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach(function (model, i) {
            state.entities[selectId(model)] = model;
        });
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        addAll: createStateOperator(addAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        map: createStateOperator(mapMutably),
    };
}

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _a = __assign$1({ sortComparer: false, selectId: function (instance) { return instance.id; } }, options), selectId = _a.selectId, sortComparer = _a.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return __assign$1({ selectId: selectId,
        sortComparer: sortComparer }, stateFactory, selectorsFactory, stateAdapter);
}

var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    return Dictionary;
}());

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=entity.js.map


/***/ }),

/***/ "./src/app/modules/data-collection/reducers/forms/form.actions.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/data-collection/reducers/forms/form.actions.ts ***!
  \************************************************************************/
/*! exports provided: FormActionTypes, LoadForms, RequestForm, SendForm, AddForm, UpdateForm, EditForm, ClearEditForm, DeleteForm, FillForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActionTypes", function() { return FormActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadForms", function() { return LoadForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestForm", function() { return RequestForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendForm", function() { return SendForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddForm", function() { return AddForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateForm", function() { return UpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditForm", function() { return EditForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearEditForm", function() { return ClearEditForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteForm", function() { return DeleteForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillForm", function() { return FillForm; });
var FormActionTypes;
(function (FormActionTypes) {
    FormActionTypes["RequestForm"] = "[Form] Reques Form List";
    FormActionTypes["LoadForms"] = "[Form] Load Forms";
    FormActionTypes["EditForm"] = "[Form] Edit Form";
    FormActionTypes["ClearEditForm"] = "[Form] Clear Edit Form";
    FormActionTypes["AddForm"] = "[Form] Add Form";
    FormActionTypes["SendForm"] = "[Form] Send Form";
    FormActionTypes["FillForm"] = "[Form] Fill Form";
    FormActionTypes["UpdateForm"] = "[Form] Update Form";
    FormActionTypes["DeleteForm"] = "[Form] Delete Form";
})(FormActionTypes || (FormActionTypes = {}));
var LoadForms = /** @class */ (function () {
    function LoadForms(payload) {
        this.payload = payload;
        this.type = FormActionTypes.LoadForms;
    }
    return LoadForms;
}());

var RequestForm = /** @class */ (function () {
    function RequestForm() {
        this.type = FormActionTypes.RequestForm;
    }
    return RequestForm;
}());

var SendForm = /** @class */ (function () {
    function SendForm() {
        this.type = FormActionTypes.SendForm;
    }
    return SendForm;
}());

var AddForm = /** @class */ (function () {
    function AddForm() {
        this.type = FormActionTypes.AddForm;
    }
    return AddForm;
}());

var UpdateForm = /** @class */ (function () {
    function UpdateForm(payload) {
        this.payload = payload;
        this.type = FormActionTypes.UpdateForm;
    }
    return UpdateForm;
}());

var EditForm = /** @class */ (function () {
    function EditForm(payload) {
        this.payload = payload;
        this.type = FormActionTypes.EditForm;
    }
    return EditForm;
}());

var ClearEditForm = /** @class */ (function () {
    function ClearEditForm() {
        this.type = FormActionTypes.ClearEditForm;
    }
    return ClearEditForm;
}());

var DeleteForm = /** @class */ (function () {
    function DeleteForm(payload) {
        this.payload = payload;
        this.type = FormActionTypes.DeleteForm;
    }
    return DeleteForm;
}());

var FillForm = /** @class */ (function () {
    function FillForm(form) {
        this.form = form;
        this.type = FormActionTypes.FillForm;
    }
    return FillForm;
}());



/***/ }),

/***/ "./src/app/modules/data-collection/reducers/forms/form.reducer.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/data-collection/reducers/forms/form.reducer.ts ***!
  \************************************************************************/
/*! exports provided: startedForm, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal, getEdited */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startedForm", function() { return startedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEdited", function() { return getEdited; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _form_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.actions */ "./src/app/modules/data-collection/reducers/forms/form.actions.ts");

var _a;


var startedForm = {
    fields: [],
    _id: '0',
    name: '',
    updated_at: '',
    created_at: '',
    api_token: '123',
    link: '',
    template_sql_link: {}
};
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({ selectId: function (form) { return form._id; } });
var initialState = adapter.getInitialState({
    edited: ''
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _form_actions__WEBPACK_IMPORTED_MODULE_2__["FormActionTypes"].AddForm: {
            return adapter.addOne(startedForm, state);
        }
        case _form_actions__WEBPACK_IMPORTED_MODULE_2__["FormActionTypes"].UpdateForm: {
            return adapter.updateOne(action.payload.form, state);
        }
        case _form_actions__WEBPACK_IMPORTED_MODULE_2__["FormActionTypes"].DeleteForm: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _form_actions__WEBPACK_IMPORTED_MODULE_2__["FormActionTypes"].FillForm: {
            return state;
        }
        case _form_actions__WEBPACK_IMPORTED_MODULE_2__["FormActionTypes"].EditForm: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { edited: action.payload.id });
        }
        case _form_actions__WEBPACK_IMPORTED_MODULE_2__["FormActionTypes"].ClearEditForm: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { edited: '' });
        }
        case _form_actions__WEBPACK_IMPORTED_MODULE_2__["FormActionTypes"].SendForm: {
            return state;
        }
        case _form_actions__WEBPACK_IMPORTED_MODULE_2__["FormActionTypes"].LoadForms: {
            return adapter.addAll(action.payload.forms, state);
        }
        default: {
            return state;
        }
    }
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
var getEdited = function (state) { return state.edited; };


/***/ }),

/***/ "./src/app/modules/data-collection/reducers/forms/form.selectors.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/data-collection/reducers/forms/form.selectors.ts ***!
  \**************************************************************************/
/*! exports provided: selectFormsState, selectFormById, selectAllForms, selectEditedForm, selectEditedIdForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFormsState", function() { return selectFormsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFormById", function() { return selectFormById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllForms", function() { return selectAllForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEditedForm", function() { return selectEditedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEditedIdForm", function() { return selectEditedIdForm; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _form_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.reducer */ "./src/app/modules/data-collection/reducers/forms/form.reducer.ts");


var selectFormsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("form");
var selectFormById = function (formId) { return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormsState, function (formState) { return formState.entities[formId]; }); };
var selectAllForms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormsState, _form_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
var selectEditedForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormsState, function (formState) { return formState.entities[formState.edited]; });
var selectEditedIdForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFormsState, function (formState) { return formState.edited; });


/***/ }),

/***/ "./src/app/modules/organization/components/header-top/header-top.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/organization/components/header-top/header-top.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top_menu d-flex d-md-flex\">\r\n    <!--Navbar-->\r\n    <nav class=\"navbar navbar-light top_menu__navbar\">\r\n        <div class=\"top_menu__nav_line\">\r\n            <div class=\"top_menu__control d-flex d-md-none\">\r\n                <!-- Navbar brand -->\r\n                <a class=\"navbar-brand m-0\" href=\"#\"></a>\r\n\r\n                <!-- Collapse button -->\r\n                <button \r\n                    class=\"navbar-toggler top_menu__navbar_button\" \r\n                    type=\"button\" \r\n                    data-toggle=\"collapse\"\r\n                    data-target=\"#navbarMainMenu\" aria-controls=\"navbarMainMenu\" \r\n                    aria-expanded=\"false\"\r\n                    aria-label=\"Toggle navigation\">\r\n                    <span>\r\n                        <i class=\"fas fa-bars fa-1x top_menu__navbar_icon\"></i>\r\n                    </span>\r\n                </button>\r\n\r\n            </div>\r\n            <div class=\"top_menu__user_bar\">\r\n                <!-- Layer Group Button -->\r\n                <a\r\n                    tabindex=\"-2\"\r\n                    class=\"top_menu__navbar_button \r\n                    top_menu__navbar_button--show_label\"\r\n                    name=\"Layer Group Button\">\r\n                        <i class=\"fas fa-layer-group fa-1x top_menu__navbar_icon\"></i>\r\n                </a>\r\n                <!-- User Avatar -->\r\n                <a\r\n                    tabindex=\"-1\"\r\n                    class=\"top_menu__navbar_button \r\n                    top_menu__navbar_button--show_label\"\r\n                    name=\"User\">\r\n                    <div class=\"top_menu__navbar_user_image\">\r\n                        <i class=\"fas fa-user-tie\"></i>\r\n                    </div>\r\n                    <!-- <img src=\"\" alt=\"\" class=\"top_menu__navbar_user_image\"> -->\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Collapsible content -->\r\n        <div class=\"collapse d-md-none navbar-collapse\" id=\"navbarMainMenu\">\r\n\r\n            <!-- Links -->\r\n            <ul class=\"navbar-nav mr-auto\">\r\n\r\n                <li class=\"nav-item top_menu__nav_item\" *ngFor=\"let item of menuItems; let i = index;\">\r\n                    <a class=\"nav-link top_menu__nav_link\" routerLink={{item.route}} rel=\"noopener\" name={{item.label}}>\r\n                        <!-- <i class=\"fas {{item.icon}} top_menu__icon\"></i>  -->\r\n                        <span class=\"top_menu__nav_link_text\">{{item.label}}</span>\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"nav-item top_menu__nav_item\">\r\n                    <a class=\"nav-link top_menu__nav_link\" routerLink=\"/\" (click)=\"logOut()\" rel=\"noopener\" name=\"Log Out\">\r\n                        <!-- <i class=\"fas fa-sign-out-alt top_menu__icon\"></i>  -->\r\n                        <span class=\"top_menu__nav_link_text\">Log Out</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <!-- Links -->\r\n\r\n        </div>\r\n        <!-- Collapsible content -->\r\n\r\n    </nav>\r\n    <!--/.Navbar-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/organization/components/header-top/header-top.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/organization/components/header-top/header-top.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\r\n *  suffixes:\r\n *      -only - for strict range pixels\r\n *      -between - for range devices\r\n *      -up - for device and above\r\n */\n.top_menu {\n  display: flex;\n  flex-direction: row;\n  min-height: 40px;\n  align-items: stretch;\n  justify-content: space-between;\n  background-color: #FBFBFB;\n  box-shadow: inset 0 1px 0 0 #E8E8E8, 0 40px 0 -21px rgba(0, 0, 0, 0.5); }\n.top_menu__nav_line {\n    align-items: stretch;\n    border-bottom: 1px solid #eee;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    justify-content: flex-end;\n    min-height: 40px;\n    width: inherit; }\n.top_menu__navbar {\n    align-items: stretch;\n    justify-content: flex-end;\n    padding: 0 1rem;\n    width: 100%;\n    width: -webkit-fill-available; }\n.top_menu__navbar_nav {\n    display: flex;\n    flex-direction: column; }\n.top_menu__navbar_button {\n    align-items: center;\n    color: #4350a2;\n    border: none;\n    border-radius: 0;\n    border-left: 1px solid #eee;\n    display: flex;\n    justify-content: center;\n    min-width: 40px;\n    position: relative; }\n.top_menu__navbar_button:focus {\n      outline: 0 transparent solid; }\n.top_menu__navbar_button:hover {\n      color: #9fa6cb;\n      text-decoration: none; }\n.top_menu__navbar_button--show_label:after {\n      background: rgba(66, 66, 66, 0.85);\n      border-radius: 3px;\n      color: #eee;\n      content: attr(name);\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      font-size: 13px;\n      font-weight: 500;\n      max-height: 10em;\n      max-width: 10em;\n      opacity: 0;\n      padding: .4em;\n      position: absolute;\n      right: 5px;\n      transition: 600ms ease-in-out;\n      top: 40px;\n      white-space: nowrap;\n      z-index: -1; }\n.top_menu__navbar_button--show_label:hover:after {\n      opacity: 1;\n      top: 45px;\n      right: 0px;\n      z-index: 100; }\n.top_menu__navbar_icon {\n    font-size: 17px;\n    line-height: 19px;\n    min-height: 17px;\n    min-width: 14px; }\n.top_menu__navbar_user_image {\n    align-items: center;\n    color: #fff;\n    background-color: #4350a2;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    height: 30px;\n    width: 30px; }\n.top_menu__nav_item {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 16px;\n    font-weight: 500;\n    border-bottom: 1px #eee solid; }\n.top_menu__nav_link {\n    padding: 13px;\n    box-sizing: content-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative; }\n.top_menu__nav_link:focus {\n      outline: 0 transparent solid; }\n.top_menu__nav_link_text {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n    font-weight: 500; }\n.top_menu__user_bar {\n    display: flex; }\n.top_bar {\n  background-color: #fff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 40px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmdhbml6YXRpb24vY29tcG9uZW50cy9oZWFkZXItdG9wL0Q6XFxyZWQvc3JjXFxzdHlsZXNcXHZhcmlhYmxlc1xcb3JnYW5pemF0aW9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvb3JnYW5pemF0aW9uL2NvbXBvbmVudHMvaGVhZGVyLXRvcC9oZWFkZXItdG9wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29yZ2FuaXphdGlvbi9jb21wb25lbnRzL2hlYWRlci10b3AvRDpcXHJlZC9zcmNcXGFwcFxcbW9kdWxlc1xcb3JnYW5pemF0aW9uXFxjb21wb25lbnRzXFxoZWFkZXItdG9wXFxoZWFkZXItdG9wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29yZ2FuaXphdGlvbi9jb21wb25lbnRzL2hlYWRlci10b3AvRDpcXHJlZC9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7Ozs7RUNBRTtBQ0hGO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkZGa0I7RUVHbEIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5Qix5QkNBZ0M7RURDaEMsc0VDY2lDLEVBQUE7QURaakM7SUFDSSxvQkFBb0I7SUFDcEIsNkJDUW9CO0lEUHBCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixnQkZmYztJRWdCZCxjQUFjLEVBQUE7QUFHbEI7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsNkJBQTZCLEVBQUE7QUFHakM7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7QUFHMUI7SUFDSSxtQkFBbUI7SUFDbkIsY0NyQ29CO0lEc0NwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDJCQ25Cb0I7SURvQnBCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0FBVHJCO01BWU8sNEJBQTRCLEVBQUE7QUFabkM7TUFnQk8sY0NsRGtCO01EbURsQixxQkFBcUIsRUFBQTtBQUd4QjtNQUVPLGtDQ2hEb0M7TURpRHBDLGtCQUFrQjtNQUNsQixXQ3RDWTtNRHVDWixtQkFBbUI7TUFDbkIsd0lBQXdJO01BQ3hJLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixVQUFVO01BQ1YsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsNkJBQTZCO01BQzdCLFNGcEVNO01FcUVOLG1CQUFtQjtNQUNuQixXQUFXLEVBQUE7QUFsQmxCO01Bc0JPLFVBQVU7TUFDVixTQUE2QjtNQUM3QixVQUFVO01BQ1YsWUFBWSxFQUFBO0FBTXhCO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0FBR25CO0lBQ0ksbUJBQW1CO0lBQ25CLFdDckZJO0lEc0ZKLHlCQ2hHb0I7SURpR3BCLHNCQ3ZGSTtJRHdGSixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVyxFQUFBO0FBR2Y7SUFDSSx3SUFBd0k7SUFDeEksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw2QkFBK0MsRUFBQTtBQUduRDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCLEVBQUE7QUFOckI7TUFTTyw0QkFBNEIsRUFBQTtBQUlwQztJQUNJLHdJQUF3STtJQUN4SSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7QUFHcEI7SUFDSSxhQUFhLEVBQUE7QUFLckI7RUFDSSxzQkNoSVE7RURpSVIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcmdhbml6YXRpb24vY29tcG9uZW50cy9oZWFkZXItdG9wL2hlYWRlci10b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2JzL2luZGV4LnNjc3MnO1xyXG5cclxuJG1haW4tbWVudS13aWR0aDogNTVweDtcclxuJHRvcC1tZW51LWhlaWdodDogNDBweDtcclxuXHJcbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xyXG4gKiAgc3VmZml4ZXM6XHJcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xyXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcclxuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxyXG4gKi9cclxuXHJcbi8vICBFeGFtcGxlOiBcclxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxyXG4vLyAgICAgICAgICAuLi5cclxuLy8gICAgICB9XHJcbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcclxuICogIHN1ZmZpeGVzOlxyXG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcclxuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXHJcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcclxuICovXG4udG9wX21lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgI0U4RThFOCwgMCA0MHB4IDAgLTIxcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XG4gIC50b3BfbWVudV9fbmF2X2xpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiBpbmhlcml0OyB9XG4gIC50b3BfbWVudV9fbmF2YmFyIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgfVxuICAudG9wX21lbnVfX25hdmJhcl9uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAudG9wX21lbnVfX25hdmJhcl9idXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0MzUwYTI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC50b3BfbWVudV9fbmF2YmFyX2J1dHRvbjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkOyB9XG4gICAgLnRvcF9tZW51X19uYXZiYXJfYnV0dG9uOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjOWZhNmNiO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgLnRvcF9tZW51X19uYXZiYXJfYnV0dG9uLS1zaG93X2xhYmVsOmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjYsIDY2LCA2NiwgMC44NSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBjb2xvcjogI2VlZTtcbiAgICAgIGNvbnRlbnQ6IGF0dHIobmFtZSk7XG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1heC1oZWlnaHQ6IDEwZW07XG4gICAgICBtYXgtd2lkdGg6IDEwZW07XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgcGFkZGluZzogLjRlbTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICB0cmFuc2l0aW9uOiA2MDBtcyBlYXNlLWluLW91dDtcbiAgICAgIHRvcDogNDBweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB6LWluZGV4OiAtMTsgfVxuICAgIC50b3BfbWVudV9fbmF2YmFyX2J1dHRvbi0tc2hvd19sYWJlbDpob3ZlcjphZnRlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdG9wOiA0NXB4O1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIHotaW5kZXg6IDEwMDsgfVxuICAudG9wX21lbnVfX25hdmJhcl9pY29uIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbWluLWhlaWdodDogMTdweDtcbiAgICBtaW4td2lkdGg6IDE0cHg7IH1cbiAgLnRvcF9tZW51X19uYXZiYXJfdXNlcl9pbWFnZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM1MGEyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4OyB9XG4gIC50b3BfbWVudV9fbmF2X2l0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICNlZWUgc29saWQ7IH1cbiAgLnRvcF9tZW51X19uYXZfbGluayB7XG4gICAgcGFkZGluZzogMTNweDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLnRvcF9tZW51X19uYXZfbGluazpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkOyB9XG4gIC50b3BfbWVudV9fbmF2X2xpbmtfdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAudG9wX21lbnVfX3VzZXJfYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG5cbi50b3BfYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDQwcHg7IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9pbmRleCc7XHJcblxyXG4udG9wX21lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtaW4taGVpZ2h0OiAkdG9wLW1lbnUtaGVpZ2h0O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3IsIDAgJHRvcC1tZW51LWhlaWdodCAwIC0yMXB4ICRoZWFkZXItc2hhZG93LWNvbG9yO1xyXG5cclxuICAgICZfX25hdl9saW5lIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGhlYWRlci1zcGxpdHRlci1jb2xvcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogJHRvcC1tZW51LWhlaWdodDtcclxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiAgICAmX19uYXZiYXIge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgICZfX25hdmJhcl9uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAmX19uYXZiYXJfYnV0dG9uIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGhlYWRlci1zcGxpdHRlci1jb2xvcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRlbGVtZW50LXNlY29uZC1jb2xvcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi0tc2hvd19sYWJlbCB7XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkaGVhZGVyLXNwbGl0dGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogYXR0cihuYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTBlbTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTBlbTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNGVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDYwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAkdG9wLW1lbnUtaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRvcDogKCR0b3AtbWVudS1oZWlnaHQgKyA1cHgpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAmX19uYXZiYXJfaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX25hdmJhcl91c2VyX2ltYWdlIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVsZW1lbnQtYmFzZS1jb2xvcjtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX25hdl9pdGVtIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCAkaGVhZGVyLXNwbGl0dGVyLWNvbG9yIHNvbGlkO1xyXG4gICAgfVxyXG5cclxuICAgICZfX25hdl9saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwIHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19uYXZfbGlua190ZXh0IHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3VzZXJfYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi50b3BfYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiIsIiRlbGVtZW50LWJhc2UtY29sb3I6ICM0MzUwYTI7XHJcbiRlbGVtZW50LXNlY29uZC1jb2xvcjogIzlmYTZjYjtcclxuJGVsZW1lbnQtd2FybmluZy1jb2xvcjogI2ZmYjkxNTtcclxuJGhlYWRlci1sb2dvLWNvbG9yOiAjZjhiYzQ1O1xyXG4kaGVhZGVyLWxvZ28taG92ZXItY29sb3I6ICNkZGE1Mzg7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmMztcclxuJGJhY2tncm91bmQtY29sb3ItY29udGVudDogI2ExYTFhMTtcclxuJGJhY2tncm91bmQtY29sb3ItbWFpbi1tZW51OiAjRkJGQkZCO1xyXG4kYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsOiByZ2JhKDY2LCA2NiwgNjYsIDAuODUpO1xyXG4kd2hpdGU6ICNmZmY7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAjZDVkZmVjO1xyXG4kdGl0bGUtY29sb3I6ICM2MjY1Njc7XHJcbiRzdWItdGl0bGUtY29sb3I6ICMyNjM4NTM7XHJcblxyXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1jb250ZW50O1xyXG4kc3ViaGVhZGVyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6ICM2MjY1Njc7XHJcblxyXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogIzQ2NTg3MztcclxuJGhlYWRlci1zcGxpdHRlci1jb2xvcjogI2VlZTtcclxuJGhlYWRlci1zaGFkb3ctaW5zZXQtY29sb3I6ICNFOEU4RTg7XHJcbiRoZWFkZXItc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcblxyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuJGxhYmVsLWNvbG9yOiAjN2I4YWExO1xyXG4kaW52YWxpZC1jb2xvcjogI2U5NGY0NztcclxuJHJlZC1jb2xvcjogI2ZjNjQ2NztcclxuJGVycm9yLWNvbG9yOiAjZTY1NzU3O1xyXG5cclxuJG1vZGFsLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMWY2O1xyXG4kaW5hY3RpdmUtaW5wdXQtY29sb3I6ICNkMGRiZWE7XHJcbiRmaWx0ZXItY29sb3I6ICNjMGNhZDg7XHJcblxyXG4kaWNvbi1ncmV5LWNvbG9yOiAjOWM5ZDlkO1xyXG4kZ3JheS1jb2xvcjogIzkwOTA5MDtcclxuJGxpZ2h0Z3JheS1jb2xvcjogI2YyZjJmMjtcclxuJHNvZnRncmF5LWNvbG9yOiAjYjZiNmI2O1xyXG4kZGFya2dyYXktY29sb3I6ICMxNTE1MTU7XHJcbiRsaWdodGJsdWUtY29sb3I6ICNFNEU3RkY7XHJcblxyXG4kdGFibGUtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiR0YWJsZS1oZWFkZXItaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuJHRhYmxlLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiR0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7Il19 */"

/***/ }),

/***/ "./src/app/modules/organization/components/header-top/header-top.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/organization/components/header-top/header-top.component.ts ***!
  \************************************************************************************/
/*! exports provided: HeaderTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTopComponent", function() { return HeaderTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _login_store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../login/store/index */ "./src/app/modules/login/store/index.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/modules/organization/components/header/header.component.ts");



// import { Go } from '../../utils/store/router-store';


var HeaderTopComponent = /** @class */ (function () {
    function HeaderTopComponent(store) {
        this.store = store;
        this.menu = false;
        this.toggleSideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderTopComponent.prototype.ngOnInit = function () {
        // this.user = this.store.pipe(select('users'));
        this.menuItems = _header_header_component__WEBPACK_IMPORTED_MODULE_4__["menuItems"];
    };
    HeaderTopComponent.prototype.toggleMenu = function () {
        this.toggleSideMenu.emit(true);
    };
    // goToIndex (): void {
    //     // this.store.dispatch(new Go(['/']));
    // }
    // goToProfile (data: any): void {
    //     const {user} = data;
    //     // this.store.dispatch(new Go(['/users/id/', user.id]));
    // }
    HeaderTopComponent.prototype.logOut = function () {
        this.store.dispatch(new _login_store_index__WEBPACK_IMPORTED_MODULE_3__["Logout"]());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderTopComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderTopComponent.prototype, "toggleSideMenu", void 0);
    HeaderTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-top',
            template: __webpack_require__(/*! ./header-top.component.html */ "./src/app/modules/organization/components/header-top/header-top.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./header-top.component.scss */ "./src/app/modules/organization/components/header-top/header-top.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HeaderTopComponent);
    return HeaderTopComponent;
}());



/***/ }),

/***/ "./src/app/modules/organization/components/header-top/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/organization/components/header-top/index.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-top.component */ "./src/app/modules/organization/components/header-top/header-top.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderTopComponent", function() { return _header_top_component__WEBPACK_IMPORTED_MODULE_0__["HeaderTopComponent"]; });




/***/ }),

/***/ "./src/app/modules/organization/components/header/header.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/organization/components/header/header.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_menu d-none d-md-flex\">\r\n    <ul class=\"navbar-nav flex-column main_menu__navbar_nav\">\r\n            \r\n        <li class=\"nav-item main_menu__nav_item\">\r\n            <a class=\"nav-link main_menu__nav_link\" routerLink=\"/\" (click)=\"toggleMenu()\" rel=\"noopener\" name=\"Logo\">\r\n                <div class=\"main_menu__icon_box\">\r\n                    <span class=\"main_menu__icon_text\">A</span>\r\n                </div>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item main_menu__nav_item\" \r\n            *ngFor=\"let item of menuItems; let i = index;\">\r\n            <a \r\n                class=\"nav-link main_menu__nav_link\r\n                    main_menu__nav_link--show_label\r\n                    {{ addClassStatus(item.route) }}\"\r\n                routerLink={{item.route}} \r\n                rel=\"noopener\" \r\n                name={{item.label}}>\r\n                <i class=\"fas {{item.icon}} main_menu__icon\"></i>\r\n            </a>\r\n        </li>\r\n        \r\n        <li class=\"nav-item main_menu__nav_item\">\r\n            <a\r\n                class=\"nav-link main_menu__nav_link main_menu__nav_link--show_label\" \r\n                routerLink=\"/\" \r\n                (click)=\"logOut()\" \r\n                rel=\"noopener\" \r\n                name=\"Log Out\">\r\n                <i class=\"fas fa-sign-out-alt main_menu__icon\"></i>\r\n            </a>\r\n        </li>\r\n\r\n    </ul>\r\n</div> <!-- .main_menu -->"

/***/ }),

/***/ "./src/app/modules/organization/components/header/header.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/organization/components/header/header.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\r\n *  suffixes:\r\n *      -only - for strict range pixels\r\n *      -between - for range devices\r\n *      -up - for device and above\r\n */\n.main_menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100vh;\n  min-width: 55px; }\n.main_menu__navbar_nav {\n    align-items: center;\n    background-color: #FBFBFB;\n    border-right: 1px solid rgba(182, 182, 182, 0.3);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    min-height: 100vh;\n    min-width: 55px;\n    position: fixed; }\n.main_menu__nav_item {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px; }\n.main_menu__nav_link {\n    align-items: center;\n    border-radius: 5px;\n    box-sizing: content-box;\n    color: #4350a2;\n    display: flex;\n    justify-content: center;\n    margin: 5px;\n    padding: 10px;\n    position: relative; }\n.main_menu__nav_link:focus {\n      outline: 0 transparent solid; }\n.main_menu__nav_link:hover {\n      color: #9fa6cb;\n      text-decoration: none; }\n.main_menu__nav_link--show_label:after {\n      background: rgba(66, 66, 66, 0.85);\n      border-radius: 3px;\n      color: #eee;\n      content: attr(name);\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      font-size: 13px;\n      font-weight: 500;\n      left: 55px;\n      max-height: 200px;\n      opacity: 0;\n      padding: .4em;\n      position: absolute;\n      transition: 600ms ease-in-out;\n      top: 5px;\n      white-space: nowrap;\n      z-index: -1; }\n.main_menu__nav_link--show_label:hover:after {\n      top: 10px;\n      opacity: 1;\n      left: 57px;\n      z-index: 100; }\n.main_menu__nav_link--active_page {\n      background-color: #ddd; }\n.main_menu__icon_box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: content-box;\n    width: 26px;\n    height: 26px;\n    border-radius: 50%;\n    background: #f8bc45; }\n.main_menu__icon_box:hover {\n      background: #dda538; }\n.main_menu__icon_text {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 900;\n    font-size: 22px;\n    line-height: 22px;\n    color: #fff;\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px); }\n.main_menu__icon {\n    font-size: 18px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmdhbml6YXRpb24vY29tcG9uZW50cy9oZWFkZXIvRDpcXHJlZC9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxvcmdhbml6YXRpb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9vcmdhbml6YXRpb24vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29yZ2FuaXphdGlvbi9jb21wb25lbnRzL2hlYWRlci9EOlxccmVkL3NyY1xcYXBwXFxtb2R1bGVzXFxvcmdhbml6YXRpb25cXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29yZ2FuaXphdGlvbi9jb21wb25lbnRzL2hlYWRlci9EOlxccmVkL3NyY1xcc3R5bGVzXFx2YXJpYWJsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7OztFQ0FFO0FDSEY7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGVGTmtCLEVBQUE7QUVRbEI7SUFDSSxtQkFBbUI7SUFDbkIseUJDSjRCO0lESzVCLGdEQUE2QztJQUM3QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZUZoQmM7SUVpQmQsZUFBZSxFQUFBO0FBR25CO0lBQ0ksd0lBQXdJO0lBQ3hJLGVBQWUsRUFBQTtBQUduQjtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNDL0JvQjtJRGdDcEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQixFQUFBO0FBVHJCO01BWU8sNEJBQTRCLEVBQUE7QUFabkM7TUFnQk8sY0MxQ2tCO01EMkNsQixxQkFBcUIsRUFBQTtBQUd4QjtNQUVPLGtDQ3hDb0M7TUR5Q3BDLGtCQUFrQjtNQUNsQixXQzlCWTtNRCtCWixtQkFBbUI7TUFDbkIsd0lBQXdJO01BQ3hJLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsVUZ0RE07TUV1RE4saUJBQWlCO01BQ2pCLFVBQVU7TUFDVixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLDZCQUE2QjtNQUM3QixRQUFRO01BQ1IsbUJBQW1CO01BQ25CLFdBQVcsRUFBQTtBQWpCbEI7TUFxQk8sU0FBUztNQUNULFVBQVU7TUFDVixVQUE4QjtNQUM5QixZQUFZLEVBQUE7QUFJcEI7TUFDSSxzQkFBc0IsRUFBQTtBQUs5QjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkN0Rm1CLEVBQUE7QUQ4RXRCO01BV08sbUJDeEZxQixFQUFBO0FENEY3QjtJQUNJLHdJQUF3STtJQUN4SSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQzNGSTtJRDRGSixtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7QUFHL0I7SUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29yZ2FuaXphdGlvbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2JzL2luZGV4LnNjc3MnO1xyXG5cclxuJG1haW4tbWVudS13aWR0aDogNTVweDtcclxuJHRvcC1tZW51LWhlaWdodDogNDBweDtcclxuXHJcbi8qKiBCcmVha3BvaW50cyBmb3IgZGV2aWNlc1xyXG4gKiAgc3VmZml4ZXM6XHJcbiAqICAgICAgLW9ubHkgLSBmb3Igc3RyaWN0IHJhbmdlIHBpeGVsc1xyXG4gKiAgICAgIC1iZXR3ZWVuIC0gZm9yIHJhbmdlIGRldmljZXNcclxuICogICAgICAtdXAgLSBmb3IgZGV2aWNlIGFuZCBhYm92ZVxyXG4gKi9cclxuXHJcbi8vICBFeGFtcGxlOiBcclxuLy8gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7IFxyXG4vLyAgICAgICAgICAuLi5cclxuLy8gICAgICB9XHJcbiAiLCIvKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcclxuICogIHN1ZmZpeGVzOlxyXG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcclxuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXHJcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcclxuICovXG4ubWFpbl9tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDU1cHg7IH1cbiAgLm1haW5fbWVudV9fbmF2YmFyX25hdiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTgyLCAxODIsIDE4MiwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogNTVweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cbiAgLm1haW5fbWVudV9fbmF2X2l0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4OyB9XG4gIC5tYWluX21lbnVfX25hdl9saW5rIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBjb2xvcjogIzQzNTBhMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLm1haW5fbWVudV9fbmF2X2xpbms6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDsgfVxuICAgIC5tYWluX21lbnVfX25hdl9saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjOWZhNmNiO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgLm1haW5fbWVudV9fbmF2X2xpbmstLXNob3dfbGFiZWw6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgY29udGVudDogYXR0cihuYW1lKTtcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGVmdDogNTVweDtcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBhZGRpbmc6IC40ZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2l0aW9uOiA2MDBtcyBlYXNlLWluLW91dDtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHotaW5kZXg6IC0xOyB9XG4gICAgLm1haW5fbWVudV9fbmF2X2xpbmstLXNob3dfbGFiZWw6aG92ZXI6YWZ0ZXIge1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGxlZnQ6IDU3cHg7XG4gICAgICB6LWluZGV4OiAxMDA7IH1cbiAgICAubWFpbl9tZW51X19uYXZfbGluay0tYWN0aXZlX3BhZ2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAubWFpbl9tZW51X19pY29uX2JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2Y4YmM0NTsgfVxuICAgIC5tYWluX21lbnVfX2ljb25fYm94OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkZGE1Mzg7IH1cbiAgLm1haW5fbWVudV9faWNvbl90ZXh0IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgfVxuICAubWFpbl9tZW51X19pY29uIHtcbiAgICBmb250LXNpemU6IDE4cHg7IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9pbmRleCc7XHJcblxyXG4ubWFpbl9tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6ICRtYWluLW1lbnUtd2lkdGg7XHJcblxyXG4gICAgJl9fbmF2YmFyX25hdiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLW1lbnU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxODIsMTgyLDE4MiwwLjMpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAkbWFpbi1tZW51LXdpZHRoO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuXHJcbiAgICAmX19uYXZfaXRlbSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbmF2X2xpbmsge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIGNvbG9yOiAkZWxlbWVudC1iYXNlLWNvbG9yO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDAgdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRlbGVtZW50LXNlY29uZC1jb2xvcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS1zaG93X2xhYmVsIHtcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tZW51LWxhYmVsO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRoZWFkZXItc3BsaXR0ZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAkbWFpbi1tZW51LXdpZHRoO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjRlbTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDYwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogKCRtYWluLW1lbnUtd2lkdGggKyAycHgpO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLS1hY3RpdmVfcGFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICZfX2ljb25fYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkaGVhZGVyLWxvZ28tY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkaGVhZGVyLWxvZ28taG92ZXItY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2ljb25fdGV4dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIH1cclxuXHJcbiAgICAmX19pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xyXG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XHJcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XHJcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcclxuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcclxuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcclxuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xyXG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xyXG5cclxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcclxuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xyXG5cclxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XHJcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XHJcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xyXG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG5cclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcclxuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XHJcbiRyZWQtY29sb3I6ICNmYzY0Njc7XHJcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcclxuXHJcbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcclxuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xyXG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xyXG5cclxuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcclxuJGdyYXktY29sb3I6ICM5MDkwOTA7XHJcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XHJcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcclxuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xyXG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xyXG5cclxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/modules/organization/components/header/header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/organization/components/header/header.component.ts ***!
  \****************************************************************************/
/*! exports provided: menuItems, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _login_store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../login/store/index */ "./src/app/modules/login/store/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// import { Go } from '../../utils/store/router-store';


var menuItems = [
    { route: '/', label: 'Dashboard', icon: 'fa-th' },
    { route: '/bus', label: 'Bus', icon: 'fa-bus' },
    { route: '/payer-accounts', label: 'Payer Accounts', icon: 'fa-wallet' },
    { route: '/persons', label: 'Persons', icon: 'fa-user' },
    { route: '/family', label: 'Family', icon: 'fa-cog' },
    { route: '/vertical-data-collection', label: 'Data Collection', icon: 'fa-file' },
];
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, router) {
        this.store = store;
        this.router = router;
        this.menu = false;
        this.toggleSideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.user = this.store.pipe(select('users'));
        this.menuItems = menuItems;
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.toggleSideMenu.emit(true);
    };
    HeaderComponent.prototype.addClassStatus = function (route) {
        if (route === this.router.url) {
            return "main_menu__nav_link--active_page";
        }
        return "";
    };
    // goToIndex (): void {
    //     // this.store.dispatch(new Go(['/']));
    // }
    // goToProfile (data: any): void {
    //     const {user} = data;
    //     // this.store.dispatch(new Go(['/users/id/', user.id]));
    // }
    HeaderComponent.prototype.logOut = function () {
        this.store.dispatch(new _login_store_index__WEBPACK_IMPORTED_MODULE_3__["Logout"]());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "toggleSideMenu", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/organization/components/header/header.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/organization/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/organization/components/header/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/organization/components/header/index.ts ***!
  \*****************************************************************/
/*! exports provided: menuItems, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ "./src/app/modules/organization/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return _header_component__WEBPACK_IMPORTED_MODULE_0__["menuItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });




/***/ }),

/***/ "./src/app/modules/organization/components/layout/app-layout.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/organization/components/layout/app-layout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app_layout_container\">\r\n    \r\n    <app-header></app-header>\r\n    \r\n    <div class=\"main-container\">\r\n        <app-header-top></app-header-top>\r\n        <div class=\"content-area\">\r\n            <router-outlet></router-outlet>\r\n        </div> <!-- .content-area -->\r\n    </div> <!-- .main-container -->\r\n</div> <!-- .app_layout_container -->\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/organization/components/layout/app-layout.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/organization/components/layout/app-layout.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** Breakpoints for devices\r\n *  suffixes:\r\n *      -only - for strict range pixels\r\n *      -between - for range devices\r\n *      -up - for device and above\r\n */\n.app_layout_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n@media (min-width: 768px) {\n  .app_layout_container {\n    flex-direction: row;\n    justify-content: flex-start; } }\n.main-container {\n  position: relative;\n  flex-grow: 1; }\n.main-container .content-area {\n  z-index: 1;\n  padding: 0;\n  background-color: #f3f2f3;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: calc(100vh - 40px); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmdhbml6YXRpb24vY29tcG9uZW50cy9sYXlvdXQvRDpcXHJlZC9zcmNcXHN0eWxlc1xcdmFyaWFibGVzXFxvcmdhbml6YXRpb24uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9vcmdhbml6YXRpb24vY29tcG9uZW50cy9sYXlvdXQvYXBwLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9vcmdhbml6YXRpb24vY29tcG9uZW50cy9sYXlvdXQvRDpcXHJlZC9zcmNcXGFwcFxcbW9kdWxlc1xcb3JnYW5pemF0aW9uXFxjb21wb25lbnRzXFxsYXlvdXRcXGFwcC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvb3JnYW5pemF0aW9uL2NvbXBvbmVudHMvbGF5b3V0L0Q6XFxyZWQvc3JjXFxzdHlsZXNcXHZhcmlhYmxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7Ozs7O0VDQUU7QUNKRjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7QUFHL0I7RUFDSTtJQUNJLG1CQUFtQjtJQUNuQiwyQkFBMkIsRUFBQSxFQUU5QjtBQUdMO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtBQUdoQjtFQUNJLFVBQVU7RUFDVixVQUFVO0VBQ1YseUJDakJzQjtFRGtCdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29yZ2FuaXphdGlvbi9jb21wb25lbnRzL2xheW91dC9hcHAtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9icy9pbmRleC5zY3NzJztcclxuXHJcbiRtYWluLW1lbnUtd2lkdGg6IDU1cHg7XHJcbiR0b3AtbWVudS1oZWlnaHQ6IDQwcHg7XHJcblxyXG4vKiogQnJlYWtwb2ludHMgZm9yIGRldmljZXNcclxuICogIHN1ZmZpeGVzOlxyXG4gKiAgICAgIC1vbmx5IC0gZm9yIHN0cmljdCByYW5nZSBwaXhlbHNcclxuICogICAgICAtYmV0d2VlbiAtIGZvciByYW5nZSBkZXZpY2VzXHJcbiAqICAgICAgLXVwIC0gZm9yIGRldmljZSBhbmQgYWJvdmVcclxuICovXHJcblxyXG4vLyAgRXhhbXBsZTogXHJcbi8vICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykgeyBcclxuLy8gICAgICAgICAgLi4uXHJcbi8vICAgICAgfVxyXG4gIiwiLyoqIEJyZWFrcG9pbnRzIGZvciBkZXZpY2VzXHJcbiAqICBzdWZmaXhlczpcclxuICogICAgICAtb25seSAtIGZvciBzdHJpY3QgcmFuZ2UgcGl4ZWxzXHJcbiAqICAgICAgLWJldHdlZW4gLSBmb3IgcmFuZ2UgZGV2aWNlc1xyXG4gKiAgICAgIC11cCAtIGZvciBkZXZpY2UgYW5kIGFib3ZlXHJcbiAqL1xuLmFwcF9sYXlvdXRfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYXBwX2xheW91dF9jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9IH1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWdyb3c6IDE7IH1cblxuLm1haW4tY29udGFpbmVyIC5jb250ZW50LWFyZWEge1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmYzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvaW5kZXgnO1xyXG4uYXBwX2xheW91dF9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmFwcF9sYXlvdXRfY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIC5jb250ZW50LWFyZWEge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcclxufVxyXG4iLCIkZWxlbWVudC1iYXNlLWNvbG9yOiAjNDM1MGEyO1xyXG4kZWxlbWVudC1zZWNvbmQtY29sb3I6ICM5ZmE2Y2I7XHJcbiRlbGVtZW50LXdhcm5pbmctY29sb3I6ICNmZmI5MTU7XHJcbiRoZWFkZXItbG9nby1jb2xvcjogI2Y4YmM0NTtcclxuJGhlYWRlci1sb2dvLWhvdmVyLWNvbG9yOiAjZGRhNTM4O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmM2YyZjM7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWNvbnRlbnQ6ICNhMWExYTE7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW4tbWVudTogI0ZCRkJGQjtcclxuJGJhY2tncm91bmQtY29sb3ItbWVudS1sYWJlbDogcmdiYSg2NiwgNjYsIDY2LCAwLjg1KTtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGJvcmRlci1jb2xvcjogI2Q1ZGZlYztcclxuJHRpdGxlLWNvbG9yOiAjNjI2NTY3O1xyXG4kc3ViLXRpdGxlLWNvbG9yOiAjMjYzODUzO1xyXG5cclxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiRzdWJoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItY29udGVudDtcclxuJHN1YmhlYWRlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI2NTY3O1xyXG5cclxuJGhlYWRlci1ib3JkZXItY29sb3I6ICM0NjU4NzM7XHJcbiRoZWFkZXItc3BsaXR0ZXItY29sb3I6ICNlZWU7XHJcbiRoZWFkZXItc2hhZG93LWluc2V0LWNvbG9yOiAjRThFOEU4O1xyXG4kaGVhZGVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG5cclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiRsYWJlbC1jb2xvcjogIzdiOGFhMTtcclxuJGludmFsaWQtY29sb3I6ICNlOTRmNDc7XHJcbiRyZWQtY29sb3I6ICNmYzY0Njc7XHJcbiRlcnJvci1jb2xvcjogI2U2NTc1NztcclxuXHJcbiRtb2RhbC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNjtcclxuJGluYWN0aXZlLWlucHV0LWNvbG9yOiAjZDBkYmVhO1xyXG4kZmlsdGVyLWNvbG9yOiAjYzBjYWQ4O1xyXG5cclxuJGljb24tZ3JleS1jb2xvcjogIzljOWQ5ZDtcclxuJGdyYXktY29sb3I6ICM5MDkwOTA7XHJcbiRsaWdodGdyYXktY29sb3I6ICNmMmYyZjI7XHJcbiRzb2Z0Z3JheS1jb2xvcjogI2I2YjZiNjtcclxuJGRhcmtncmF5LWNvbG9yOiAjMTUxNTE1O1xyXG4kbGlnaHRibHVlLWNvbG9yOiAjRTRFN0ZGO1xyXG5cclxuJHRhYmxlLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG4kdGFibGUtaGVhZGVyLWlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiR0YWJsZS1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4kdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyJdfQ== */"

/***/ }),

/***/ "./src/app/modules/organization/components/layout/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/organization/components/layout/index.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-layout.component */ "./src/app/modules/organization/components/layout/main-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _main_layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"]; });




/***/ }),

/***/ "./src/app/modules/organization/components/layout/main-layout.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/organization/components/layout/main-layout.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.isMenuOpen = false;
    }
    LayoutComponent.prototype.toggleMenu = function () {
        this.isMenuOpen = !this.isMenuOpen;
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./app-layout.component.html */ "./src/app/modules/organization/components/layout/app-layout.component.html"),
            styles: [__webpack_require__(/*! ./app-layout.component.scss */ "./src/app/modules/organization/components/layout/app-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/dashboard/components/dashboard.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/dashboard/components/dashboard.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Dashboard</h3>\r\n"

/***/ }),

/***/ "./src/app/modules/organization/modules/dashboard/components/dashboard.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/dashboard/components/dashboard.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JnYW5pemF0aW9uL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/organization/modules/dashboard/components/dashboard.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/dashboard/components/dashboard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _data_collection_reducers_forms_form_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data-collection/reducers/forms/form.selectors */ "./src/app/modules/data-collection/reducers/forms/form.selectors.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(formStore) {
        this.formStore = formStore;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.forms$ = this.formStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_data_collection_reducers_forms_form_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllForms"]));
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/organization/modules/dashboard/components/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/organization/modules/dashboard/components/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/dashboard/dashboard-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/dashboard/dashboard-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: routes, DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard.component */ "./src/app/modules/organization/modules/dashboard/components/dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _components_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/dashboard/dashboard.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/organization/modules/dashboard/dashboard.module.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard.component */ "./src/app/modules/organization/modules/dashboard/components/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/organization/modules/dashboard/dashboard-routing.module.ts");





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/dashboard/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/organization/modules/dashboard/index.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardModule, routes, DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.module */ "./src/app/modules/organization/modules/dashboard/dashboard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return _dashboard_module__WEBPACK_IMPORTED_MODULE_0__["DashboardModule"]; });

/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/organization/modules/dashboard/dashboard-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["routes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["DashboardRoutingModule"]; });





/***/ }),

/***/ "./src/app/modules/organization/modules/person/components/person-page/person-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/components/person-page/person-page.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ngb-tabset>\r\n    <ngb-tab title=\"GENERAL\">\r\n      <ng-template ngbTabContent>\r\n        <div *ngIf=\"(person$ | async) as data\">\r\n          <p><b>{{data.first_name}} {{ data.last_name}}</b> {{data.contact_phone}}</p>\r\n          <p>{{data.address}}</p>\r\n          <p>{{data.city}} {{data.state}} {{data.country}}</p>\r\n          <p>{{data.contact_email}}</p>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"FORMS LINKS\">\r\n      <ng-template ngbTabContent>\r\n        <section class=\"innerTab\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n              <th>Form name</th>\r\n              <th>Created</th>\r\n              <th>Updated</th>\r\n              <th>Type</th>\r\n              <th>Link</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let item of formList$ | async\">\r\n            <tr>\r\n              <td>{{item.name}}</td>\r\n              <td>{{item.created_at}}</td>\r\n              <td>{{item.updated_at}}</td>\r\n              <td>Registrations</td>\r\n              <td>\r\n                <button type=\"button\" routerLink=\"/online-form/{{item._id}}\" class=\"btn btn-default\">\r\n                  Link\r\n                </button>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </section>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/organization/modules/person/components/person-page/person-page.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/components/person-page/person-page.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JnYW5pemF0aW9uL21vZHVsZXMvcGVyc29uL2NvbXBvbmVudHMvcGVyc29uLXBhZ2UvcGVyc29uLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/organization/modules/person/components/person-page/person-page.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/components/person-page/person-page.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PersonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonPageComponent", function() { return PersonPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_person_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/person.selector */ "./src/app/modules/organization/modules/person/store/person.selector.ts");
/* harmony import */ var _store_person_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/person.actions */ "./src/app/modules/organization/modules/person/store/person.actions.ts");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/modules/organization/modules/person/services/person.service.ts");







var PersonPageComponent = /** @class */ (function () {
    function PersonPageComponent(route, personStore$, personService) {
        this.route = route;
        this.personStore$ = personStore$;
        this.personService = personService;
    }
    PersonPageComponent.prototype.ngOnInit = function () {
        this.personStore$.dispatch(new _store_person_actions__WEBPACK_IMPORTED_MODULE_5__["RequestPerson"]());
        this.personId = this.route.snapshot.params['id'];
        this.person$ = this.personStore$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(Object(_store_person_selector__WEBPACK_IMPORTED_MODULE_4__["selectPersonById"])(this.personId)));
        this.getFormList();
    };
    PersonPageComponent.prototype.getFormList = function () {
        this.formList$ = this.personService.getFormsList(this.personId);
    };
    PersonPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person-page',
            template: __webpack_require__(/*! ./person-page.component.html */ "./src/app/modules/organization/modules/person/components/person-page/person-page.component.html"),
            styles: [__webpack_require__(/*! ./person-page.component.scss */ "./src/app/modules/organization/modules/person/components/person-page/person-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _services_person_service__WEBPACK_IMPORTED_MODULE_6__["PersonService"]])
    ], PersonPageComponent);
    return PersonPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<h4 class=\"text-left\"><b>Persons</b></h4>\r\n<table class=\"table table-responsive\">\r\n    <thead>\r\n    <tr>\r\n        <th scope=\"col\"></th>\r\n        <th scope=\"col\">Title</th>\r\n        <th scope=\"col\">First Name</th>\r\n        <th scope=\"col\">Last Name</th>\r\n        <th scope=\"col\">Gender</th>\r\n        <th scope=\"col\">Date of birth</th>\r\n        <th scope=\"col\">Contact Phone</th>\r\n        <th scope=\"col\">Contact Email</th>\r\n        <th scope=\"col\">Country</th>\r\n        <th scope=\"col\">City</th>\r\n        <th scope=\"col\">Address</th>\r\n        <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let data of persons$ | async; let i = index\">\r\n        <th>{{ i + 1 }}</th>\r\n        <th scope=\"row\">{{data.title || \"No\"}}</th>\r\n        <td>{{data.first_name || \"No\"}}</td>\r\n        <td>{{data.last_name || \"No\"}}</td>\r\n        <td>{{data.gender || \"No\"}}</td>\r\n        <td>{{data.dob || \"No\"}}</td>\r\n        <td>{{data.contact_phone || \"No\"}}</td>\r\n        <td>{{data.contact_email || \"No\"}}</td>\r\n        <td>{{data.country || \"No\"}}</td>\r\n        <td>{{data.city || \"No\"}}</td>\r\n        <td>{{data.address || \"No\"}}</td>\r\n        <td><a class=\"btn btn-primary\" target=\"_blank\" [routerLink]=\"['/persons/id', data.id]\">View</a></td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JnYW5pemF0aW9uL21vZHVsZXMvcGVyc29uL2NvbXBvbmVudHMvcGVyc29ucy1saXN0L3BlcnNvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PersonsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsListComponent", function() { return PersonsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_person_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/person.actions */ "./src/app/modules/organization/modules/person/store/person.actions.ts");
/* harmony import */ var _store_person_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/person.selector */ "./src/app/modules/organization/modules/person/store/person.selector.ts");






var PersonsListComponent = /** @class */ (function () {
    function PersonsListComponent(http, personStore$) {
        this.http = http;
        this.personStore$ = personStore$;
    }
    PersonsListComponent.prototype.ngOnInit = function () {
        this.personStore$.dispatch(new _store_person_actions__WEBPACK_IMPORTED_MODULE_4__["RequestPerson"]());
        this.persons$ = this.personStore$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_person_selector__WEBPACK_IMPORTED_MODULE_5__["selectAllPersons"]));
    };
    PersonsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-persons-list',
            template: __webpack_require__(/*! ./persons-list.component.html */ "./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.html"),
            styles: [__webpack_require__(/*! ./persons-list.component.scss */ "./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], PersonsListComponent);
    return PersonsListComponent;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/person/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/index.ts ***!
  \**************************************************************/
/*! exports provided: PersonModule, routes, PersonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _person_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person.module */ "./src/app/modules/organization/modules/person/person.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function() { return _person_module__WEBPACK_IMPORTED_MODULE_0__["PersonModule"]; });

/* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person-routing.module */ "./src/app/modules/organization/modules/person/person-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return _person_routing_module__WEBPACK_IMPORTED_MODULE_1__["routes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonRoutingModule", function() { return _person_routing_module__WEBPACK_IMPORTED_MODULE_1__["PersonRoutingModule"]; });





/***/ }),

/***/ "./src/app/modules/organization/modules/person/person-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/person-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: routes, PersonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonRoutingModule", function() { return PersonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/persons-list/persons-list.component */ "./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.ts");
/* harmony import */ var _components_person_page_person_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/person-page/person-page.component */ "./src/app/modules/organization/modules/person/components/person-page/person-page.component.ts");





var routes = [
    {
        path: '',
        component: _components_persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonsListComponent"]
    },
    {
        path: 'id/:id',
        component: _components_person_page_person_page_component__WEBPACK_IMPORTED_MODULE_4__["PersonPageComponent"]
    }
];
var PersonRoutingModule = /** @class */ (function () {
    function PersonRoutingModule() {
    }
    PersonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PersonRoutingModule);
    return PersonRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/person/person.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/person.module.ts ***!
  \**********************************************************************/
/*! exports provided: PersonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function() { return PersonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-routing.module */ "./src/app/modules/organization/modules/person/person-routing.module.ts");
/* harmony import */ var _components_persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/persons-list/persons-list.component */ "./src/app/modules/organization/modules/person/components/persons-list/persons-list.component.ts");
/* harmony import */ var _components_person_page_person_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/person-page/person-page.component */ "./src/app/modules/organization/modules/person/components/person-page/person-page.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var PersonModule = /** @class */ (function () {
    function PersonModule() {
    }
    PersonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_persons_list_persons_list_component__WEBPACK_IMPORTED_MODULE_4__["PersonsListComponent"],
                _components_person_page_person_page_component__WEBPACK_IMPORTED_MODULE_5__["PersonPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _person_routing_module__WEBPACK_IMPORTED_MODULE_3__["PersonRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ]
        })
    ], PersonModule);
    return PersonModule;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/person/services/person.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/services/person.service.ts ***!
  \********************************************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.getPersons = function () {
        return this.http.get('/persons').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    PersonService.prototype.getFormsList = function (personId) {
        return this.http.get("/proxy/forms/person/" + personId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/person/store/person.actions.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/store/person.actions.ts ***!
  \*****************************************************************************/
/*! exports provided: PersonActionTypes, RequestPerson, LoadPersons, AddPerson, UpsertPerson, AddPersons, UpsertPersons, UpdatePerson, UpdatePersons, DeletePerson, DeletePersons, ClearPersons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonActionTypes", function() { return PersonActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPerson", function() { return RequestPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPersons", function() { return LoadPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPerson", function() { return AddPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertPerson", function() { return UpsertPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersons", function() { return AddPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertPersons", function() { return UpsertPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePerson", function() { return UpdatePerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePersons", function() { return UpdatePersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePerson", function() { return DeletePerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePersons", function() { return DeletePersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearPersons", function() { return ClearPersons; });
var PersonActionTypes;
(function (PersonActionTypes) {
    PersonActionTypes["LoadPersons"] = "[Person] Load Persons";
    PersonActionTypes["RequestPerson"] = "[Person] RequestPerson";
    PersonActionTypes["AddPerson"] = "[Person] Add Person";
    PersonActionTypes["UpsertPerson"] = "[Person] Upsert Person";
    PersonActionTypes["AddPersons"] = "[Person] Add Persons";
    PersonActionTypes["UpsertPersons"] = "[Person] Upsert Persons";
    PersonActionTypes["UpdatePerson"] = "[Person] Update Person";
    PersonActionTypes["UpdatePersons"] = "[Person] Update Persons";
    PersonActionTypes["DeletePerson"] = "[Person] Delete Person";
    PersonActionTypes["DeletePersons"] = "[Person] Delete Persons";
    PersonActionTypes["ClearPersons"] = "[Person] Clear Persons";
})(PersonActionTypes || (PersonActionTypes = {}));
var RequestPerson = /** @class */ (function () {
    function RequestPerson() {
        this.type = PersonActionTypes.RequestPerson;
    }
    return RequestPerson;
}());

var LoadPersons = /** @class */ (function () {
    function LoadPersons(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.LoadPersons;
    }
    return LoadPersons;
}());

var AddPerson = /** @class */ (function () {
    function AddPerson(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.AddPerson;
    }
    return AddPerson;
}());

var UpsertPerson = /** @class */ (function () {
    function UpsertPerson(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.UpsertPerson;
    }
    return UpsertPerson;
}());

var AddPersons = /** @class */ (function () {
    function AddPersons(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.AddPersons;
    }
    return AddPersons;
}());

var UpsertPersons = /** @class */ (function () {
    function UpsertPersons(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.UpsertPersons;
    }
    return UpsertPersons;
}());

var UpdatePerson = /** @class */ (function () {
    function UpdatePerson(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.UpdatePerson;
    }
    return UpdatePerson;
}());

var UpdatePersons = /** @class */ (function () {
    function UpdatePersons(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.UpdatePersons;
    }
    return UpdatePersons;
}());

var DeletePerson = /** @class */ (function () {
    function DeletePerson(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.DeletePerson;
    }
    return DeletePerson;
}());

var DeletePersons = /** @class */ (function () {
    function DeletePersons(payload) {
        this.payload = payload;
        this.type = PersonActionTypes.DeletePersons;
    }
    return DeletePersons;
}());

var ClearPersons = /** @class */ (function () {
    function ClearPersons() {
        this.type = PersonActionTypes.ClearPersons;
    }
    return ClearPersons;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/person/store/person.effect.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/store/person.effect.ts ***!
  \****************************************************************************/
/*! exports provided: PersonEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonEffects", function() { return PersonEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _person_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person.actions */ "./src/app/modules/organization/modules/person/store/person.actions.ts");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/person.service */ "./src/app/modules/organization/modules/person/services/person.service.ts");








var PersonEffects = /** @class */ (function () {
    function PersonEffects(actions$, personeSevice, personStore$) {
        var _this = this;
        this.actions$ = actions$;
        this.personeSevice = personeSevice;
        this.personStore$ = personStore$;
        this.loadForms$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_person_actions__WEBPACK_IMPORTED_MODULE_6__["PersonActionTypes"].RequestPerson), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.personeSevice.getPersons(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (persons) { return new _person_actions__WEBPACK_IMPORTED_MODULE_6__["LoadPersons"]({ persons: persons }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log('error loading all person ', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PersonEffects.prototype, "loadForms$", void 0);
    PersonEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services_person_service__WEBPACK_IMPORTED_MODULE_7__["PersonService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], PersonEffects);
    return PersonEffects;
}());



/***/ }),

/***/ "./src/app/modules/organization/modules/person/store/person.reducer.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/store/person.reducer.ts ***!
  \*****************************************************************************/
/*! exports provided: adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _person_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person.actions */ "./src/app/modules/organization/modules/person/store/person.actions.ts");
var _a;


var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({ selectId: function (person) { return person.id; } });
var initialState = adapter.getInitialState({
// additional entity state properties
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].AddPerson: {
            return adapter.addOne(action.payload.person, state);
        }
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].UpsertPerson: {
            return adapter.upsertOne(action.payload.person, state);
        }
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].AddPersons: {
            return adapter.addMany(action.payload.persons, state);
        }
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].UpsertPersons: {
            return adapter.upsertMany(action.payload.persons, state);
        }
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].UpdatePerson: {
            return adapter.updateOne(action.payload.person, state);
        }
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].UpdatePersons: {
            return adapter.updateMany(action.payload.persons, state);
        }
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].DeletePerson: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].DeletePersons: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].LoadPersons: {
            return adapter.addAll(action.payload.persons, state);
        }
        case _person_actions__WEBPACK_IMPORTED_MODULE_1__["PersonActionTypes"].ClearPersons: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/modules/organization/modules/person/store/person.selector.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/organization/modules/person/store/person.selector.ts ***!
  \******************************************************************************/
/*! exports provided: selectPersonState, selectAllPersons, selectPersonById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPersonState", function() { return selectPersonState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllPersons", function() { return selectAllPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPersonById", function() { return selectPersonById; });
/* harmony import */ var _person_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person.reducer */ "./src/app/modules/organization/modules/person/store/person.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


var selectPersonState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("person");
var selectAllPersons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectPersonState, _person_reducer__WEBPACK_IMPORTED_MODULE_0__["selectAll"]);
var selectPersonById = function (personId) { return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectPersonState, function (personState) { return personState.entities[personId]; }); };


/***/ }),

/***/ "./src/app/modules/organization/organisation-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/organization/organisation-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: routes, OrganisationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationRoutingModule", function() { return OrganisationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout */ "./src/app/modules/organization/components/layout/index.ts");
/* harmony import */ var _modules_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/person */ "./src/app/modules/organization/modules/person/index.ts");
/* harmony import */ var _modules_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dashboard */ "./src/app/modules/organization/modules/dashboard/index.ts");






var routes = [
    {
        path: '',
        component: _components_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: _modules_dashboard__WEBPACK_IMPORTED_MODULE_5__["routes"],
    },
    {
        path: 'persons',
        component: _components_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: _modules_person__WEBPACK_IMPORTED_MODULE_4__["routes"],
    },
    // Depreciated
    // {
    //     path: 'data-collection',
    //     component: LayoutComponent,
    //     children: [
    //         {
    //             path: '',
    //             loadChildren: '../data-collection/data-collection.module#DataCollectionModule',
    //
    //         }
    //     ],
    // },
    {
        path: 'vertical-data-collection',
        component: _components_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: '../vertical-data-collection/vertical-data-collection.module#VerticalDataCollectionModule',
            }
        ],
    },
    {
        path: 'payer-accounts',
        component: _components_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: '../payer-accounts/payer-accounts.module#PayerAccountsModule',
            }
        ],
    },
    {
        path: 'online-form/:id',
        children: [
            {
                path: '',
                loadChildren: '../online-form/online-form.module#OnlineFormModule',
            }
        ],
    },
    {
        path: 'family',
        component: _components_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: '../family/family.module#FamilyModule',
            }
        ],
    },
];
var OrganisationRoutingModule = /** @class */ (function () {
    function OrganisationRoutingModule() {
    }
    OrganisationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OrganisationRoutingModule);
    return OrganisationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/organization/organization.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/organization/organization.module.ts ***!
  \*************************************************************/
/*! exports provided: OrganizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModule", function() { return OrganizationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _organisation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisation-routing.module */ "./src/app/modules/organization/organisation-routing.module.ts");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout */ "./src/app/modules/organization/components/layout/index.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header */ "./src/app/modules/organization/components/header/index.ts");
/* harmony import */ var _components_header_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header-top */ "./src/app/modules/organization/components/header-top/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _modules_person_services_person_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/person/services/person.service */ "./src/app/modules/organization/modules/person/services/person.service.ts");
/* harmony import */ var _modules_dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/dashboard */ "./src/app/modules/organization/modules/dashboard/index.ts");
/* harmony import */ var _modules_person__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/person */ "./src/app/modules/organization/modules/person/index.ts");
/* harmony import */ var _modules_person_store_person_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/person/store/person.reducer */ "./src/app/modules/organization/modules/person/store/person.reducer.ts");
/* harmony import */ var _modules_person_store_person_effect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/person/store/person.effect */ "./src/app/modules/organization/modules/person/store/person.effect.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");















var OrganizationModule = /** @class */ (function () {
    function OrganizationModule() {
    }
    OrganizationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _components_header__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_header_top__WEBPACK_IMPORTED_MODULE_6__["HeaderTopComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _organisation_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrganisationRoutingModule"],
                _modules_dashboard__WEBPACK_IMPORTED_MODULE_10__["DashboardModule"],
                _modules_person__WEBPACK_IMPORTED_MODULE_11__["PersonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('person', _modules_person_store_person_reducer__WEBPACK_IMPORTED_MODULE_12__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_modules_person_store_person_effect__WEBPACK_IMPORTED_MODULE_13__["PersonEffects"]]),
            ],
            providers: [_modules_person_services_person_service__WEBPACK_IMPORTED_MODULE_9__["PersonService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]]
        })
    ], OrganizationModule);
    return OrganizationModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-organization-organization-module.js.map