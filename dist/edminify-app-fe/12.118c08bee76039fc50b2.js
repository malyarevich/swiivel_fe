(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{i6jB:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),r=t("0IQn"),i=function(){function n(n){this.store=n,this.menu=!1,this.toggleSideMenu=new u.m}return n.prototype.ngOnInit=function(){},n.prototype.toggleMenu=function(){this.toggleSideMenu.emit(!0)},n.prototype.logOut=function(){this.store.dispatch(new r.b)},n}(),c=t("yGQT"),s=u.sb({encapsulation:0,styles:[["[_nghost-%COMP%]{flex:none!important}.flex[_ngcontent-%COMP%]{display:flex}header[_ngcontent-%COMP%]{width:100%;height:auto;flex:none!important;background-color:#fff;border-bottom:1px solid #a1a1a1;display:flex}@media (max-width:1170px){header[_ngcontent-%COMP%]{flex-wrap:wrap}header[_ngcontent-%COMP%]   .secondBlock[_ngcontent-%COMP%]{width:100%}}header[_ngcontent-%COMP%]   .firstBlock[_ngcontent-%COMP%]{min-height:60px;width:100%}header[_ngcontent-%COMP%]   .firstBlock[_ngcontent-%COMP%]   .menuSection[_ngcontent-%COMP%]{display:flex}header[_ngcontent-%COMP%]   .firstBlock[_ngcontent-%COMP%]   .menuSection[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;width:60px;height:60px;background-color:#f8bc45;transition:all .2s ease;cursor:pointer}header[_ngcontent-%COMP%]   .firstBlock[_ngcontent-%COMP%]   .menuSection[_ngcontent-%COMP%]   .burger.isActive[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .firstBlock[_ngcontent-%COMP%]   .menuSection[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]:hover{background-color:#dda538}header[_ngcontent-%COMP%]   .secondBlock[_ngcontent-%COMP%]{display:flex;align-items:center;min-height:60px}"]],data:{}});function a(n){return u.Ob(2,[(n()(),u.ub(0,0,null,null,7,"header",[["class","header"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,3,"section",[["class","firstBlock flex"]],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,2,"section",[["class","menuSection"]],null,null,null,null,null)),(n()(),u.ub(3,0,null,null,1,"div",[["class","burger"]],[[2,"isActive",null]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.toggleMenu()&&u),u},null,null)),(n()(),u.ub(4,0,null,null,0,"img",[["alt","menu"],["src","/assets/images/header/burger-menu.svg"],["title","burger_menu"]],null,null,null,null,null)),(n()(),u.ub(5,0,null,null,2,"section",[["class","secondBlock flex"]],null,null,null,null,null)),(n()(),u.ub(6,0,null,null,1,"button",[["class","btn app-btn-warning mr-3"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.logOut()&&u),u},null,null)),(n()(),u.Mb(-1,null,["Logout"]))],null,function(n,l){n(l,3,0,l.component.menu)})}var b=t("ZYCi"),d=function(){function n(){this.isMenuOpen=!1}return n.prototype.toggleMenu=function(){this.isMenuOpen=!this.isMenuOpen},n}(),p=u.sb({encapsulation:0,styles:[[".content-container[_ngcontent-%COMP%]{position:relative}.main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%]{z-index:1;padding:0;background-color:#f3f2f3;display:flex;flex-direction:column;flex:1}.content-area[_ngcontent-%COMP%]{min-height:100vh;height:100%}.content[_ngcontent-%COMP%]{padding:20px;background-color:#a1a1a1;margin-top:5%;border-radius:5px}.sideNav[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:calc(100vh - 60px);width:290px;background-color:#fff;z-index:3;overflow:auto;transition-timing-function:ease-in;transition:.4s;-webkit-transform:translateX(-290px);transform:translateX(-290px)}.sideNav[_ngcontent-%COMP%]::-webkit-scrollbar{width:3px;height:3px}.sideNav[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 10px #c0cad8;border-radius:6px}.sideNav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:6px;background:#c0cad8;box-shadow:inset 0 0 6px rgba(0,0,0,.5)}.sideNav.isOpen[_ngcontent-%COMP%]{transition-timing-function:ease-out;transition:.5s;-webkit-transform:translateX(0);transform:translateX(0)}.menuItem[_ngcontent-%COMP%]{padding:2vh;display:flex;cursor:pointer;color:#263853}.menuItem[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:20px;transition:all .2s ease}.menuItem[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px;font-weight:700;letter-spacing:.54px;line-height:18px;display:flex;align-items:center;transition:all .2s ease}.menuItem[_ngcontent-%COMP%]:hover{color:#626567}.menuItem[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   ellipse[_ngcontent-%COMP%], .menuItem[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#626567}.background[_ngcontent-%COMP%]{pointer-events:none;transition-timing-function:ease-in;transition:.4s;background-color:rgba(0,0,0,0);z-index:2;position:absolute;top:0;left:0;width:100%;height:100%}.background.isFade[_ngcontent-%COMP%]{pointer-events:auto;transition-timing-function:ease-out;transition:.5s;background-color:rgba(0,0,0,.4)}"]],data:{}});function f(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,28,"div",[["class","main-container"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,1,"app-header",[],null,[[null,"toggleSideMenu"]],function(n,l,t){var u=!0;return"toggleSideMenu"===l&&(u=!1!==n.component.toggleMenu()&&u),u},a,s)),u.tb(2,114688,null,0,i,[c.n],{menu:[0,"menu"]},{toggleSideMenu:"toggleSideMenu"}),(n()(),u.ub(3,0,null,null,25,"div",[["class","content-container"]],null,null,null,null,null)),(n()(),u.ub(4,0,null,null,20,"section",[["class","sideNav"]],[[2,"isOpen",null]],null,null,null,null)),(n()(),u.ub(5,0,null,null,3,"div",[["class","menuItem"],["routerLink","/"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Eb(n,6).onClick()&&e),"click"===l&&(e=!1!==o.toggleMenu()&&e),e},null,null)),u.tb(6,16384,null,0,b.m,[b.l,b.a,[8,null],u.I,u.k],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(7,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["DASHBOARD"])),(n()(),u.ub(9,0,null,null,3,"div",[["class","menuItem"],["routerLink","/vertical-data-collection"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Eb(n,10).onClick()&&e),"click"===l&&(e=!1!==o.toggleMenu()&&e),e},null,null)),u.tb(10,16384,null,0,b.m,[b.l,b.a,[8,null],u.I,u.k],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(11,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["DATA COLLECTIONS"])),(n()(),u.ub(13,0,null,null,3,"div",[["class","menuItem"],["routerLink","/persons"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Eb(n,14).onClick()&&e),"click"===l&&(e=!1!==o.toggleMenu()&&e),e},null,null)),u.tb(14,16384,null,0,b.m,[b.l,b.a,[8,null],u.I,u.k],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(15,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["PERSONS"])),(n()(),u.ub(17,0,null,null,3,"div",[["class","menuItem"],["routerLink","/payer-accounts"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Eb(n,18).onClick()&&e),"click"===l&&(e=!1!==o.toggleMenu()&&e),e},null,null)),u.tb(18,16384,null,0,b.m,[b.l,b.a,[8,null],u.I,u.k],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(19,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["PAYER ACCOUNTS"])),(n()(),u.ub(21,0,null,null,3,"div",[["class","menuItem"],["routerLink","/family"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Eb(n,22).onClick()&&e),"click"===l&&(e=!1!==o.toggleMenu()&&e),e},null,null)),u.tb(22,16384,null,0,b.m,[b.l,b.a,[8,null],u.I,u.k],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(23,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["FAMILY"])),(n()(),u.ub(25,0,null,null,0,"div",[["class","background"]],[[2,"isFade",null]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.toggleMenu()&&u),u},null,null)),(n()(),u.ub(26,0,null,null,2,"div",[["class","content-area"]],null,null,null,null,null)),(n()(),u.ub(27,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.tb(28,212992,null,0,b.q,[b.b,u.T,u.j,[8,null],u.h],null,null)],function(n,l){n(l,2,0,l.component.isMenuOpen),n(l,6,0,"/"),n(l,10,0,"/vertical-data-collection"),n(l,14,0,"/persons"),n(l,18,0,"/payer-accounts"),n(l,22,0,"/family"),n(l,28,0)},function(n,l){var t=l.component;n(l,4,0,t.isMenuOpen),n(l,25,0,t.isMenuOpen)})}function h(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"app-layout",[],null,null,null,f,p)),u.tb(1,49152,null,0,d,[],null,null)],null,null)}var g=u.qb("app-layout",d,h,{},{},[]),m=t("mrSG"),O=function(){return(O=Object.assign||function(n){for(var l,t=1,u=arguments.length;t<u;t++)for(var e in l=arguments[t])Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e]);return n}).apply(this,arguments)},v=function(n,l){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var u,e,o=t.call(n),r=[];try{for(;(void 0===l||l-- >0)&&!(u=o.next()).done;)r.push(u.value)}catch(i){e={error:i}}finally{try{u&&!u.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return r},M=function(){for(var n=[],l=0;l<arguments.length;l++)n=n.concat(v(arguments[l]));return n},y=function(n){return n[n.EntitiesOnly=0]="EntitiesOnly",n[n.Both=1]="Both",n[n.None=2]="None",n}({});function C(n){return function(l,t){var u={ids:M(t.ids),entities:O({},t.entities)},e=n(l,u);return e===y.Both?Object.assign({},t,u):e===y.EntitiesOnly?O({},t,{entities:u.entities}):t}}function P(n,l){var t=l(n);return Object(u.cb)()&&void 0===t&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",n,"The `selectId` implementation:",l.toString()),t}var k=function(n){var l="function"==typeof Symbol&&n[Symbol.iterator],t=0;return l?l.call(n):{next:function(){return n&&t>=n.length&&(n=void 0),{value:n&&n[t++],done:!n}}}};function x(n){function l(l,t){var u=P(l,n);return u in t.entities?y.None:(t.ids.push(u),t.entities[u]=l,y.Both)}function t(n,t){var u,e,o=!1;try{for(var r=k(n),i=r.next();!i.done;i=r.next())o=l(i.value,t)!==y.None||o}catch(c){u={error:c}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(u)throw u.error}}return o?y.Both:y.None}function u(n,l){var t=(n instanceof Array?n:l.ids.filter(function(t){return n(l.entities[t])})).filter(function(n){return n in l.entities}).map(function(n){return delete l.entities[n]}).length>0;return t&&(l.ids=l.ids.filter(function(n){return n in l.entities})),t?y.Both:y.None}function e(l,t){var u={};return(l=l.filter(function(n){return n.id in t.entities})).length>0?l.filter(function(l){return function(l,t,u){var e=Object.assign({},u.entities[t.id],t.changes),o=P(e,n),r=o!==t.id;return r&&(l[t.id]=o,delete u.entities[t.id]),u.entities[o]=e,r}(u,l,t)}).length>0?(t.ids=t.ids.map(function(n){return u[n]||n}),y.Both):y.EntitiesOnly:y.None}function o(l,u){var o,r,i=[],c=[];try{for(var s=k(l),a=s.next();!a.done;a=s.next()){var b=a.value,d=P(b,n);d in u.entities?c.push({id:d,changes:b}):i.push(b)}}catch(h){o={error:h}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}var p=e(c,u),f=t(i,u);switch(!0){case f===y.None&&p===y.None:return y.None;case f===y.Both||p===y.Both:return y.Both;default:return y.EntitiesOnly}}return{removeAll:function(n){return Object.assign({},n,{ids:[],entities:{}})},addOne:C(l),addMany:C(t),addAll:C(function(n,l){return l.ids=[],l.entities={},t(n,l),y.Both}),updateOne:C(function(n,l){return e([n],l)}),updateMany:C(e),upsertOne:C(function(n,l){return o([n],l)}),upsertMany:C(o),removeOne:C(function(n,l){return u([n],l)}),removeMany:C(u),map:C(function(n,l){return e(l.ids.reduce(function(t,u){var e=n(l.entities[u]);return e!==l.entities[u]&&t.push({id:u,changes:e}),t},[]).filter(function(n){return n.id in l.entities}),l)})}}var _,F=function(n){var l="function"==typeof Symbol&&n[Symbol.iterator],t=0;return l?l.call(n):{next:function(){return n&&t>=n.length&&(n=void 0),{value:n&&n[t++],done:!n}}}},I=function(){return(I=Object.assign||function(n){for(var l,t=1,u=arguments.length;t<u;t++)for(var e in l=arguments[t])Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e]);return n}).apply(this,arguments)};function S(n){void 0===n&&(n={});var l=I({sortComparer:!1,selectId:function(n){return n.id}},n),t=l.selectId,u=l.sortComparer,e={getInitialState:function(n){return void 0===n&&(n={}),Object.assign({ids:[],entities:{}},n)}},o={getSelectors:function(n){var l=function(n){return n.ids},t=function(n){return n.entities},u=Object(c.D)(l,t,function(n,l){return n.map(function(n){return l[n]})}),e=Object(c.D)(l,function(n){return n.length});return n?{selectIds:Object(c.D)(n,l),selectEntities:Object(c.D)(n,t),selectAll:Object(c.D)(n,u),selectTotal:Object(c.D)(n,e)}:{selectIds:l,selectEntities:t,selectAll:u,selectTotal:e}}},r=u?function(n,l){var t=x(n);function u(l,t){var u=l.filter(function(l){return!(P(l,n)in t.entities)});return 0===u.length?y.None:(r(u,t),y.Both)}function e(l,t){var u=[],e=l.filter(function(l){return function(l,t,u){if(!(t.id in u.entities))return!1;var e=Object.assign({},u.entities[t.id],t.changes),o=P(e,n);return delete u.entities[t.id],l.push(e),o!==t.id}(u,l,t)}).length>0;if(0===u.length)return y.None;var o=t.ids,i=[];return t.ids=t.ids.filter(function(n,l){return n in t.entities||(i.push(l),!1)}),r(u,t),!e&&i.every(function(n){return t.ids[n]===o[n]})?y.EntitiesOnly:y.Both}function o(l,t){var o,r,i=[],c=[];try{for(var s=F(l),a=s.next();!a.done;a=s.next()){var b=a.value,d=P(b,n);d in t.entities?c.push({id:d,changes:b}):i.push(b)}}catch(h){o={error:h}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}var p=e(c,t),f=u(i,t);switch(!0){case f===y.None&&p===y.None:return y.None;case f===y.Both||p===y.Both:return y.Both;default:return y.EntitiesOnly}}function r(t,u){t.sort(l);for(var e=[],o=0,r=0;o<t.length&&r<u.ids.length;){var i=t[o],c=P(i,n),s=u.ids[r];l(i,u.entities[s])<=0?(e.push(c),o++):(e.push(s),r++)}u.ids=e.concat(o<t.length?t.slice(o).map(n):u.ids.slice(r)),t.forEach(function(l,t){u.entities[n(l)]=l})}return{removeOne:t.removeOne,removeMany:t.removeMany,removeAll:t.removeAll,addOne:C(function(n,l){return u([n],l)}),updateOne:C(function(n,l){return e([n],l)}),upsertOne:C(function(n,l){return o([n],l)}),addAll:C(function(n,l){return l.entities={},l.ids=[],u(n,l),y.Both}),addMany:C(u),updateMany:C(e),upsertMany:C(o),map:C(function(n,l){return e(l.ids.reduce(function(t,u){var e=n(l.entities[u]);return e!==l.entities[u]&&t.push({id:u,changes:e}),t},[]),l)})}}(t,u):x(t);return I({selectId:t,sortComparer:u},e,o,r)}!function(n){n.RequestForm="[Form] Reques Form List",n.LoadForms="[Form] Load Forms",n.EditForm="[Form] Edit Form",n.ClearEditForm="[Form] Clear Edit Form",n.AddForm="[Form] Add Form",n.SendForm="[Form] Send Form",n.FillForm="[Form] Fill Form",n.UpdateForm="[Form] Update Form",n.DeleteForm="[Form] Delete Form"}(_||(_={}));var w=S({selectId:function(n){return n._id}});w.getInitialState({edited:""});var N=w.getSelectors().selectAll,j=Object(c.B)("form"),L=Object(c.D)(j,N),E=(Object(c.D)(j,function(n){return n.entities[n.edited]}),Object(c.D)(j,function(n){return n.edited}),function(){function n(n){this.formStore=n}return n.prototype.ngOnInit=function(){this.forms$=this.formStore.pipe(Object(c.E)(L))},n}()),A=u.sb({encapsulation:0,styles:[[""]],data:{}});function B(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Dashboard"]))],null,null)}function $(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"app-dashboard",[],null,null,null,B,A)),u.tb(1,114688,null,0,E,[c.n],null,null)],function(n,l){n(l,1,0)},null)}var D,T=u.qb("app-dashboard",E,$,{},{},[]),R=t("Ip0R");!function(n){n.LoadPersons="[Person] Load Persons",n.RequestPerson="[Person] RequestPerson",n.AddPerson="[Person] Add Person",n.UpsertPerson="[Person] Upsert Person",n.AddPersons="[Person] Add Persons",n.UpsertPersons="[Person] Upsert Persons",n.UpdatePerson="[Person] Update Person",n.UpdatePersons="[Person] Update Persons",n.DeletePerson="[Person] Delete Person",n.DeletePersons="[Person] Delete Persons",n.ClearPersons="[Person] Clear Persons"}(D||(D={}));var U=function(){return function(){this.type=D.RequestPerson}}(),q=function(){return function(n){this.payload=n,this.type=D.LoadPersons}}(),G=S({selectId:function(n){return n.id}}),K=G.getInitialState({});function Q(n,l){switch(void 0===n&&(n=K),l.type){case D.AddPerson:return G.addOne(l.payload.person,n);case D.UpsertPerson:return G.upsertOne(l.payload.person,n);case D.AddPersons:return G.addMany(l.payload.persons,n);case D.UpsertPersons:return G.upsertMany(l.payload.persons,n);case D.UpdatePerson:return G.updateOne(l.payload.person,n);case D.UpdatePersons:return G.updateMany(l.payload.persons,n);case D.DeletePerson:return G.removeOne(l.payload.id,n);case D.DeletePersons:return G.removeMany(l.payload.ids,n);case D.LoadPersons:return G.addAll(l.payload.persons,n);case D.ClearPersons:return G.removeAll(n);default:return n}}var Y=G.getSelectors().selectAll,z=Object(c.B)("person"),J=Object(c.D)(z,Y),X=function(){function n(n,l){this.http=n,this.personStore$=l}return n.prototype.ngOnInit=function(){this.personStore$.dispatch(new U),this.persons$=this.personStore$.pipe(Object(c.E)(J))},n}(),H=t("t/Na"),V=u.sb({encapsulation:0,styles:[[""]],data:{}});function Z(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,27,"tr",[],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(2,null,["",""])),(n()(),u.ub(3,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(n()(),u.Mb(4,null,["",""])),(n()(),u.ub(5,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(6,null,["",""])),(n()(),u.ub(7,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(8,null,["",""])),(n()(),u.ub(9,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(10,null,["",""])),(n()(),u.ub(11,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(12,null,["",""])),(n()(),u.ub(13,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(14,null,["",""])),(n()(),u.ub(15,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(16,null,["",""])),(n()(),u.ub(17,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(18,null,["",""])),(n()(),u.ub(19,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(20,null,["",""])),(n()(),u.ub(21,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(22,null,["",""])),(n()(),u.ub(23,0,null,null,4,"td",[],null,null,null,null,null)),(n()(),u.ub(24,0,null,null,3,"a",[["class","btn btn-primary"],["target","_blank"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Eb(n,25).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(25,671744,null,0,b.o,[b.l,b.a,R.l],{target:[0,"target"],routerLink:[1,"routerLink"]},null),u.Fb(26,2),(n()(),u.Mb(-1,null,["View"]))],function(n,l){var t=n(l,26,0,"/persons/id",l.context.$implicit.id);n(l,25,0,"_blank",t)},function(n,l){n(l,2,0,l.context.index+1),n(l,4,0,l.context.$implicit.title||"No"),n(l,6,0,l.context.$implicit.first_name||"No"),n(l,8,0,l.context.$implicit.last_name||"No"),n(l,10,0,l.context.$implicit.gender||"No"),n(l,12,0,l.context.$implicit.dob||"No"),n(l,14,0,l.context.$implicit.contact_phone||"No"),n(l,16,0,l.context.$implicit.contact_email||"No"),n(l,18,0,l.context.$implicit.country||"No"),n(l,20,0,l.context.$implicit.city||"No"),n(l,22,0,l.context.$implicit.address||"No"),n(l,24,0,u.Eb(l,25).target,u.Eb(l,25).href)})}function W(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,32,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,2,"h4",[["class","text-left"]],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Persons"])),(n()(),u.ub(4,0,null,null,28,"table",[["class","table table-responsive"]],null,null,null,null,null)),(n()(),u.ub(5,0,null,null,23,"thead",[],null,null,null,null,null)),(n()(),u.ub(6,0,null,null,22,"tr",[],null,null,null,null,null)),(n()(),u.ub(7,0,null,null,0,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.ub(8,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Title"])),(n()(),u.ub(10,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["First Name"])),(n()(),u.ub(12,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Last Name"])),(n()(),u.ub(14,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Gender"])),(n()(),u.ub(16,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Date of birth"])),(n()(),u.ub(18,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Contact Phone"])),(n()(),u.ub(20,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Contact Email"])),(n()(),u.ub(22,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Country"])),(n()(),u.ub(24,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["City"])),(n()(),u.ub(26,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Address"])),(n()(),u.ub(28,0,null,null,0,"th",[],null,null,null,null,null)),(n()(),u.ub(29,0,null,null,3,"tbody",[],null,null,null,null,null)),(n()(),u.lb(16777216,null,null,2,null,Z)),u.tb(31,278528,null,0,R.n,[u.T,u.Q,u.u],{ngForOf:[0,"ngForOf"]},null),u.Gb(131072,R.b,[u.h])],function(n,l){var t=l.component;n(l,31,0,u.Nb(l,31,0,u.Eb(l,32).transform(t.persons$)))},null)}function nn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"app-persons-list",[],null,null,null,W,V)),u.tb(1,114688,null,0,X,[H.c,c.n],null,null)],function(n,l){n(l,1,0)},null)}var ln=u.qb("app-persons-list",X,nn,{},{},[]),tn=t("9AJC"),un=t("4GxJ"),en=t("67Y/"),on=function(){function n(n){this.http=n}return n.prototype.getPersons=function(){return this.http.get("/persons").pipe(Object(en.a)(function(n){return n}))},n.prototype.getFormsList=function(n){return this.http.get("/proxy/forms/person/"+n).pipe(Object(en.a)(function(n){return n}))},n}(),rn=function(){function n(n,l,t){this.route=n,this.personStore$=l,this.personService=t}return n.prototype.ngOnInit=function(){var n;this.personStore$.dispatch(new U),this.personId=this.route.snapshot.params.id,this.person$=this.personStore$.pipe(Object(c.E)((n=this.personId,Object(c.D)(z,function(l){return l.entities[n]})))),this.getFormList()},n.prototype.getFormList=function(){this.formList$=this.personService.getFormsList(this.personId)},n}(),cn=u.sb({encapsulation:0,styles:[[""]],data:{}});function sn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),u.Mb(3,null,[""," ",""])),(n()(),u.Mb(4,null,[" ",""])),(n()(),u.ub(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Mb(6,null,["",""])),(n()(),u.ub(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Mb(8,null,[""," "," ",""])),(n()(),u.ub(9,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Mb(10,null,["",""]))],null,function(n,l){n(l,3,0,l.context.ngIf.first_name,l.context.ngIf.last_name),n(l,4,0,l.context.ngIf.contact_phone),n(l,6,0,l.context.ngIf.address),n(l,8,0,l.context.ngIf.city,l.context.ngIf.state,l.context.ngIf.country),n(l,10,0,l.context.ngIf.contact_email)})}function an(n){return u.Ob(0,[(n()(),u.lb(16777216,null,null,2,null,sn)),u.tb(1,16384,null,0,R.o,[u.T,u.Q],{ngIf:[0,"ngIf"]},null),u.Gb(131072,R.b,[u.h]),(n()(),u.lb(0,null,null,0))],function(n,l){var t=l.component;n(l,1,0,u.Nb(l,1,0,u.Eb(l,2).transform(t.person$)))},null)}function bn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,13,"tbody",[],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,12,"tr",[],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(3,null,["",""])),(n()(),u.ub(4,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(5,null,["",""])),(n()(),u.ub(6,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(7,null,["",""])),(n()(),u.ub(8,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Registrations"])),(n()(),u.ub(10,0,null,null,3,"td",[],null,null,null,null,null)),(n()(),u.ub(11,0,null,null,2,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Eb(n,12).onClick()&&e),e},null,null)),u.tb(12,16384,null,0,b.m,[b.l,b.a,[8,null],u.I,u.k],{routerLink:[0,"routerLink"]},null),(n()(),u.Mb(-1,null,[" Link "]))],function(n,l){n(l,12,0,u.wb(1,"/online-form/",l.context.$implicit._id,""))},function(n,l){n(l,3,0,l.context.$implicit.name),n(l,5,0,l.context.$implicit.created_at),n(l,7,0,l.context.$implicit.updated_at)})}function dn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,16,"section",[["class","innerTab"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,15,"table",[["class","table table-striped"]],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,11,"thead",[],null,null,null,null,null)),(n()(),u.ub(3,0,null,null,10,"tr",[],null,null,null,null,null)),(n()(),u.ub(4,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Form name"])),(n()(),u.ub(6,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Created"])),(n()(),u.ub(8,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Updated"])),(n()(),u.ub(10,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Type"])),(n()(),u.ub(12,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Link"])),(n()(),u.lb(16777216,null,null,2,null,bn)),u.tb(15,278528,null,0,R.n,[u.T,u.Q,u.u],{ngForOf:[0,"ngForOf"]},null),u.Gb(131072,R.b,[u.h])],function(n,l){var t=l.component;n(l,15,0,u.Nb(l,15,0,u.Eb(l,16).transform(t.formList$)))},null)}function pn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,15,"div",[["class","container"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,14,"ngb-tabset",[],null,null,null,tn.h,tn.e)),u.tb(2,2146304,null,1,un.Y,[un.Z],null,null),u.Kb(603979776,1,{tabs:1}),(n()(),u.ub(4,0,null,null,5,"ngb-tab",[["title","GENERAL"]],null,null,null,null,null)),u.tb(5,2113536,[[1,4]],2,un.W,[],{title:[0,"title"]},null),u.Kb(603979776,2,{titleTpls:1}),u.Kb(603979776,3,{contentTpls:1}),(n()(),u.lb(0,null,null,1,null,an)),u.tb(9,16384,[[3,4]],0,un.X,[u.Q],null,null),(n()(),u.ub(10,0,null,null,5,"ngb-tab",[["title","FORMS LINKS"]],null,null,null,null,null)),u.tb(11,2113536,[[1,4]],2,un.W,[],{title:[0,"title"]},null),u.Kb(603979776,4,{titleTpls:1}),u.Kb(603979776,5,{contentTpls:1}),(n()(),u.lb(0,null,null,1,null,dn)),u.tb(15,16384,[[5,4]],0,un.X,[u.Q],null,null)],function(n,l){n(l,5,0,"GENERAL"),n(l,11,0,"FORMS LINKS")},null)}function fn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"app-person-page",[],null,null,null,pn,cn)),u.tb(1,114688,null,0,rn,[b.a,c.n,on],null,null)],function(n,l){n(l,1,0)},null)}var hn=u.qb("app-person-page",rn,fn,{},{},[]),gn=t("gIcY"),mn=t("CFL1"),On=t("G2P1"),vn=function(){return function(){}}(),Mn=function(){return function(){}}(),yn=function(){return function(){}}(),Cn=function(){return function(){}}(),Pn=function(){return function(){}}(),kn=t("jYNz"),xn=t("15JJ"),_n=t("9Z1F"),Fn=t("XlPw"),In=function(){function n(n,l,t){var u=this;this.actions$=n,this.personeSevice=l,this.personStore$=t,this.loadForms$=this.actions$.pipe(Object(kn.d)(D.RequestPerson),Object(xn.a)(function(){return u.personeSevice.getPersons()}),Object(en.a)(function(n){return new q({persons:n})}),Object(_n.a)(function(n){return console.log("error loading all person ",n),Object(Fn.a)(n)}))}return m.b([Object(kn.b)(),m.d("design:type",Object)],n.prototype,"loadForms$",void 0),n}();t.d(l,"OrganizationModuleNgFactory",function(){return Sn});var Sn=u.rb(e,[],function(n){return u.Bb([u.Cb(512,u.j,u.gb,[[8,[o.a,g,T,ln,hn,tn.a,tn.b,tn.l,tn.m,tn.i,tn.j,tn.k]],[3,u.j],u.A]),u.Cb(4608,R.q,R.p,[u.w,[2,R.J]]),u.Cb(4608,gn.E,gn.E,[]),u.Cb(4608,un.E,un.E,[u.j,u.s,un.sb,un.F]),u.Cb(4608,mn.a,mn.a,[H.c]),u.Cb(4608,On.a,On.a,[H.c]),u.Cb(1073742336,R.c,R.c,[]),u.Cb(1073742336,b.p,b.p,[[2,b.v],[2,b.l]]),u.Cb(1073742336,Pn,Pn,[]),u.Cb(1073742336,Cn,Cn,[]),u.Cb(1073742336,yn,yn,[]),u.Cb(1073742336,Mn,Mn,[]),u.Cb(1073742336,un.c,un.c,[]),u.Cb(1073742336,un.f,un.f,[]),u.Cb(1073742336,un.h,un.h,[]),u.Cb(1073742336,un.m,un.m,[]),u.Cb(1073742336,un.n,un.n,[]),u.Cb(1073742336,gn.B,gn.B,[]),u.Cb(1073742336,gn.l,gn.l,[]),u.Cb(1073742336,un.u,un.u,[]),u.Cb(1073742336,un.A,un.A,[]),u.Cb(1073742336,un.G,un.G,[]),u.Cb(1073742336,un.K,un.K,[]),u.Cb(1073742336,un.N,un.N,[]),u.Cb(1073742336,un.Q,un.Q,[]),u.Cb(1073742336,un.V,un.V,[]),u.Cb(1073742336,un.ab,un.ab,[]),u.Cb(1073742336,un.eb,un.eb,[]),u.Cb(1073742336,un.fb,un.fb,[]),u.Cb(1073742336,un.gb,un.gb,[]),u.Cb(1073742336,un.H,un.H,[]),u.Cb(1073742336,vn,vn,[]),u.Cb(1024,c.F,function(){return[{}]},[]),u.Cb(1024,c.j,function(){return[{key:"person",reducerFactory:c.z,metaReducers:[],initialState:void 0}]},[]),u.Cb(1024,c.G,c.H,[u.s,c.F,c.j]),u.Cb(1024,c.q,function(){return[Q]},[]),u.Cb(1024,c.r,function(n){return[n]},[c.q]),u.Cb(1024,c.b,function(n,l,t){return[c.w(n,l,t)]},[u.s,c.q,c.r]),u.Cb(1073873408,c.o,c.o,[c.G,c.b,c.g,c.p]),u.Cb(512,on,on,[H.c]),u.Cb(512,In,In,[kn.a,on,c.n]),u.Cb(1024,kn.i,function(n){return[kn.e(n)]},[In]),u.Cb(1073742336,kn.g,kn.g,[kn.f,kn.i,[2,c.p],[2,c.o]]),u.Cb(1073742336,e,e,[]),u.Cb(1024,b.j,function(){return[[{path:"",component:d,children:[{path:"",component:E}]},{path:"persons",component:d,children:[{path:"",component:X},{path:"id/:id",component:rn}]},{path:"vertical-data-collection",component:d,children:[{path:"",loadChildren:"../vertical-data-collection/vertical-data-collection.module#VerticalDataCollectionModule"}]},{path:"payer-accounts",component:d,children:[{path:"",loadChildren:"../payer-accounts/payer-accounts.module#PayerAccountsModule"}]},{path:"online-form/:id",children:[{path:"",loadChildren:"../online-form/online-form.module#OnlineFormModule"}]},{path:"family",component:d,children:[{path:"",loadChildren:"../family/family.module#FamilyModule"}]}],[{path:"",component:E}],[{path:"",component:X},{path:"id/:id",component:rn}]]},[])])})}}]);