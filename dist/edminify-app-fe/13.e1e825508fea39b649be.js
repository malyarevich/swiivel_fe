(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{i6jB:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),i=t("ZYCi"),r=t("Ip0R"),a=t("0IQn"),s=[{route:"/",label:"Dashboard",icon:"fa-th"},{route:"/",label:"Bus",icon:"fa-bus"},{route:"/payer-accounts",label:"Payer Accounts",icon:"fa-wallet"},{route:"/persons",label:"Persons",icon:"fa-user"},{route:"/family",label:"Family",icon:"fa-cog"},{route:"/vertical-data-collection",label:"Data Collection",icon:"fa-file"}],c=function(){function n(n){this.store=n,this.menu=!1,this.toggleSideMenu=new u.m}return n.prototype.ngOnInit=function(){this.menuItems=s},n.prototype.toggleMenu=function(){this.toggleSideMenu.emit(!0)},n.prototype.logOut=function(){this.store.dispatch(new a.b)},n}(),b=t("yGQT"),p=u.sb({encapsulation:0,styles:[[".main_menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:55px;align-items:center;justify-content:flex-start;border-right:1px solid rgba(182,182,182,.3);background-color:#fbfbfb}.main_menu__navbar_nav[_ngcontent-%COMP%]{display:flex;flex-direction:column}.main_menu__nav_item[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:14px}.main_menu__nav_link[_ngcontent-%COMP%]{color:#4350a2;padding:13px;box-sizing:content-box;display:flex;align-items:center;justify-content:center;position:relative}.main_menu__nav_link[_ngcontent-%COMP%]:hover{color:#9fa6cb}.main_menu__nav_link--show_label[_ngcontent-%COMP%]:after{background:rgba(66,66,66,.85);border-radius:3px;color:#eee;content:attr(name);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:13px;font-weight:500;max-height:0;opacity:0;top:10;left:0;position:absolute;transition:.6s ease-in-out;white-space:nowrap;z-index:-1}.main_menu__nav_link--show_label[_ngcontent-%COMP%]:hover:after{opacity:1;top:7px;left:55px;max-height:200px;padding:.4em;z-index:100}.main_menu__icon_box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;box-sizing:content-box;width:26px;height:26px;border-radius:50%;background:#f8bc45}.main_menu__icon_box[_ngcontent-%COMP%]:hover{background:#dda538}.main_menu__icon_text[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-weight:900;font-size:22px;line-height:22px;color:#fff;-webkit-transform:translateY(-2px);transform:translateY(-2px)}.main_menu__icon[_ngcontent-%COMP%]{font-size:18px}"]],data:{}});function f(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,3,"li",[["class","nav-item main_menu__nav_item"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,2,"a",[["class","nav-link main_menu__nav_link main_menu__nav_link--show_label"],["rel","noopener"]],[[8,"name",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Eb(n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(2,671744,null,0,i.o,[i.l,i.a,r.l],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(3,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null))],function(n,l){n(l,2,0,u.wb(1,"",l.context.$implicit.route,""))},function(n,l){n(l,1,0,u.wb(1,"",l.context.$implicit.label,""),u.Eb(l,2).target,u.Eb(l,2).href),n(l,3,0,u.wb(1,"fas ",l.context.$implicit.icon," main_menu__icon"))})}function d(n){return u.Ob(2,[(n()(),u.ub(0,0,null,null,13,"div",[["class","main_menu d-none d-md-flex"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,12,"ul",[["class","navbar-nav flex-column main_menu__navbar_nav"]],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,5,"li",[["class","nav-item main_menu__nav_item"]],null,null,null,null,null)),(n()(),u.ub(3,0,null,null,4,"a",[["class","nav-link main_menu__nav_link"],["name","Logo"],["rel","noopener"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Eb(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),"click"===l&&(e=!1!==o.toggleMenu()&&e),e},null,null)),u.tb(4,671744,null,0,i.o,[i.l,i.a,r.l],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(5,0,null,null,2,"div",[["class","main_menu__icon_box"]],null,null,null,null,null)),(n()(),u.ub(6,0,null,null,1,"span",[["class","main_menu__icon_text"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["A"])),(n()(),u.lb(16777216,null,null,1,null,f)),u.tb(9,278528,null,0,r.n,[u.T,u.Q,u.u],{ngForOf:[0,"ngForOf"]},null),(n()(),u.ub(10,0,null,null,3,"li",[["class","nav-item main_menu__nav_item"]],null,null,null,null,null)),(n()(),u.ub(11,0,null,null,2,"a",[["class","nav-link main_menu__nav_link main_menu__nav_link--show_label"],["name","Log Out"],["rel","noopener"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Eb(n,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),"click"===l&&(e=!1!==o.logOut()&&e),e},null,null)),u.tb(12,671744,null,0,i.o,[i.l,i.a,r.l],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(13,0,null,null,0,"i",[["class","fas fa-sign-out-alt main_menu__icon"]],null,null,null,null,null))],function(n,l){var t=l.component;n(l,4,0,"/"),n(l,9,0,t.menuItems),n(l,12,0,"/")},function(n,l){n(l,3,0,u.Eb(l,4).target,u.Eb(l,4).href),n(l,11,0,u.Eb(l,12).target,u.Eb(l,12).href)})}var m=function(){function n(n){this.store=n,this.menu=!1,this.toggleSideMenu=new u.m}return n.prototype.ngOnInit=function(){this.menuItems=s},n.prototype.toggleMenu=function(){this.toggleSideMenu.emit(!0)},n.prototype.logOut=function(){this.store.dispatch(new a.b)},n}(),h=u.sb({encapsulation:0,styles:[[".top_menu[_ngcontent-%COMP%]{display:flex;flex-direction:row;min-height:40px;align-items:stretch;justify-content:space-between;background-color:#fbfbfb;box-shadow:inset 0 1px 0 0 #e8e8e8,0 40px 0 -21px rgba(0,0,0,.5)}.top_menu__nav_line[_ngcontent-%COMP%]{align-items:stretch;border-bottom:1px solid #eee;display:flex;flex-direction:row;justify-content:space-between;justify-content:flex-end;min-height:40px;width:inherit}.top_menu__navbar[_ngcontent-%COMP%]{align-items:stretch;justify-content:flex-end;padding:0 1rem;width:100%;width:-webkit-fill-available}.top_menu__navbar_nav[_ngcontent-%COMP%]{display:flex;flex-direction:column}.top_menu__navbar_button[_ngcontent-%COMP%]{align-items:center;color:#4350a2;border:none;border-radius:0;border-left:1px solid #eee;justify-content:center;min-width:40px;position:relative}.top_menu__navbar_button[_ngcontent-%COMP%]:hover{color:#9fa6cb}.top_menu__navbar_button--show_label[_ngcontent-%COMP%]:after{background:rgba(66,66,66,.85);border-radius:3px;color:#eee;content:attr(name);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:13px;font-weight:500;max-height:0;opacity:0;top:40px;right:10px;position:absolute;transition:.4s ease-in-out;white-space:nowrap;z-index:-1}.top_menu__navbar_button--show_label[_ngcontent-%COMP%]:hover:after{opacity:1;top:40px;right:0;max-height:10em;padding:.4em;z-index:100}.top_menu__navbar_user_image[_ngcontent-%COMP%]{align-items:center;color:#fff;background-color:#4350a2;border:2px solid #fff;border-radius:50%;display:flex;justify-content:center;height:30px;width:30px}.top_menu__nav_item[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:16px;font-weight:500;border-bottom:1px solid #eee}.top_menu__nav_link[_ngcontent-%COMP%]{padding:13px;box-sizing:content-box;display:flex;align-items:center;justify-content:center;position:relative}.top_menu__nav_link_text[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:14px;font-weight:500}.top_menu__user_bar[_ngcontent-%COMP%]{display:flex}.top_bar[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:row;justify-content:space-between;height:40px}"]],data:{}});function _(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,4,"li",[["class","nav-item top_menu__nav_item"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,3,"a",[["class","nav-link top_menu__nav_link"],["rel","noopener"]],[[8,"name",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Eb(n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(2,671744,null,0,i.o,[i.l,i.a,r.l],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(3,0,null,null,1,"span",[["class","top_menu__nav_link_text"]],null,null,null,null,null)),(n()(),u.Mb(4,null,["",""]))],function(n,l){n(l,2,0,u.wb(1,"",l.context.$implicit.route,""))},function(n,l){n(l,1,0,u.wb(1,"",l.context.$implicit.label,""),u.Eb(l,2).target,u.Eb(l,2).href),n(l,4,0,l.context.$implicit.label)})}function g(n){return u.Ob(2,[(n()(),u.ub(0,0,null,null,23,"div",[["class","top_menu d-flex d-md-flex"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,22,"nav",[["class","navbar navbar-light top_menu__navbar"]],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,12,"div",[["class","top_menu__nav_line"]],null,null,null,null,null)),(n()(),u.ub(3,0,null,null,4,"div",[["class","top_menu__control d-flex d-md-none"]],null,null,null,null,null)),(n()(),u.ub(4,0,null,null,0,"a",[["class","navbar-brand m-0"],["href","#"]],null,null,null,null,null)),(n()(),u.ub(5,0,null,null,2,"button",[["aria-controls","navbarMainMenu"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler top_menu__navbar_button"],["data-target","#navbarMainMenu"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(n()(),u.ub(6,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.ub(7,0,null,null,0,"i",[["class","fas fa-bars fa-1x"]],null,null,null,null,null)),(n()(),u.ub(8,0,null,null,6,"div",[["class","top_menu__user_bar"]],null,null,null,null,null)),(n()(),u.ub(9,0,null,null,2,"button",[["class","navbar-toggler top_menu__navbar_button top_menu__navbar_button--show_label"],["name","Layer Group Button"],["type","button"]],null,null,null,null,null)),(n()(),u.ub(10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.ub(11,0,null,null,0,"i",[["class","fas fa-layer-group fa-1x"]],null,null,null,null,null)),(n()(),u.ub(12,0,null,null,2,"button",[["class","navbar-toggler top_menu__navbar_button top_menu__navbar_button--show_label"],["name","User"],["type","button"]],null,null,null,null,null)),(n()(),u.ub(13,0,null,null,1,"div",[["class","top_menu__navbar_user_image"]],null,null,null,null,null)),(n()(),u.ub(14,0,null,null,0,"i",[["class","fas fa-user-tie"]],null,null,null,null,null)),(n()(),u.ub(15,0,null,null,8,"div",[["class","collapse d-md-none navbar-collapse"],["id","navbarMainMenu"]],null,null,null,null,null)),(n()(),u.ub(16,0,null,null,7,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(n()(),u.lb(16777216,null,null,1,null,_)),u.tb(18,278528,null,0,r.n,[u.T,u.Q,u.u],{ngForOf:[0,"ngForOf"]},null),(n()(),u.ub(19,0,null,null,4,"li",[["class","nav-item top_menu__nav_item"]],null,null,null,null,null)),(n()(),u.ub(20,0,null,null,3,"a",[["class","nav-link top_menu__nav_link"],["name","Log Out"],["rel","noopener"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==u.Eb(n,21).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),"click"===l&&(e=!1!==o.logOut()&&e),e},null,null)),u.tb(21,671744,null,0,i.o,[i.l,i.a,r.l],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(22,0,null,null,1,"span",[["class","top_menu__nav_link_text"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Log Out"]))],function(n,l){n(l,18,0,l.component.menuItems),n(l,21,0,"/")},function(n,l){n(l,20,0,u.Eb(l,21).target,u.Eb(l,21).href)})}var v=function(){function n(){this.isMenuOpen=!1}return n.prototype.toggleMenu=function(){this.isMenuOpen=!this.isMenuOpen},n}(),y=u.sb({encapsulation:0,styles:[[".app_layout_container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}@media (min-width:768px){.app_layout_container[_ngcontent-%COMP%]{flex-direction:row;justify-content:flex-start}}.main-container[_ngcontent-%COMP%]{position:relative;flex-grow:1}.main-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%]{z-index:1;padding:0;background-color:#f3f2f3;display:flex;flex-direction:column;flex:1;min-height:calc(100vh - 40px);height:100%}"]],data:{}});function x(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,8,"div",[["class","app_layout_container"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,1,"app-header",[],null,null,null,d,p)),u.tb(2,114688,null,0,c,[b.n],null,null),(n()(),u.ub(3,0,null,null,5,"div",[["class","main-container"]],null,null,null,null,null)),(n()(),u.ub(4,0,null,null,1,"app-header-top",[],null,null,null,g,h)),u.tb(5,114688,null,0,m,[b.n],null,null),(n()(),u.ub(6,0,null,null,2,"div",[["class","content-area"]],null,null,null,null,null)),(n()(),u.ub(7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.tb(8,212992,null,0,i.q,[i.b,u.T,u.j,[8,null],u.h],null,null)],function(n,l){n(l,2,0),n(l,5,0),n(l,8,0)},null)}function O(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"app-layout",[],null,null,null,x,y)),u.tb(1,49152,null,0,v,[],null,null)],null,null)}var M=u.qb("app-layout",v,O,{},{},[]),C=t("mrSG"),P=function(){return(P=Object.assign||function(n){for(var l,t=1,u=arguments.length;t<u;t++)for(var e in l=arguments[t])Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e]);return n}).apply(this,arguments)},k=function(n,l){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var u,e,o=t.call(n),i=[];try{for(;(void 0===l||l-- >0)&&!(u=o.next()).done;)i.push(u.value)}catch(r){e={error:r}}finally{try{u&&!u.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return i},w=function(){for(var n=[],l=0;l<arguments.length;l++)n=n.concat(k(arguments[l]));return n},F=function(n){return n[n.EntitiesOnly=0]="EntitiesOnly",n[n.Both=1]="Both",n[n.None=2]="None",n}({});function S(n){return function(l,t){var u={ids:w(t.ids),entities:P({},t.entities)},e=n(l,u);return e===F.Both?Object.assign({},t,u):e===F.EntitiesOnly?P({},t,{entities:u.entities}):t}}function j(n,l){var t=l(n);return Object(u.cb)()&&void 0===t&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",n,"The `selectId` implementation:",l.toString()),t}var E=function(n){var l="function"==typeof Symbol&&n[Symbol.iterator],t=0;return l?l.call(n):{next:function(){return n&&t>=n.length&&(n=void 0),{value:n&&n[t++],done:!n}}}};function I(n){function l(l,t){var u=j(l,n);return u in t.entities?F.None:(t.ids.push(u),t.entities[u]=l,F.Both)}function t(n,t){var u,e,o=!1;try{for(var i=E(n),r=i.next();!r.done;r=i.next())o=l(r.value,t)!==F.None||o}catch(a){u={error:a}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(u)throw u.error}}return o?F.Both:F.None}function u(n,l){var t=(n instanceof Array?n:l.ids.filter(function(t){return n(l.entities[t])})).filter(function(n){return n in l.entities}).map(function(n){return delete l.entities[n]}).length>0;return t&&(l.ids=l.ids.filter(function(n){return n in l.entities})),t?F.Both:F.None}function e(l,t){var u={};return(l=l.filter(function(n){return n.id in t.entities})).length>0?l.filter(function(l){return function(l,t,u){var e=Object.assign({},u.entities[t.id],t.changes),o=j(e,n),i=o!==t.id;return i&&(l[t.id]=o,delete u.entities[t.id]),u.entities[o]=e,i}(u,l,t)}).length>0?(t.ids=t.ids.map(function(n){return u[n]||n}),F.Both):F.EntitiesOnly:F.None}function o(l,u){var o,i,r=[],a=[];try{for(var s=E(l),c=s.next();!c.done;c=s.next()){var b=c.value,p=j(b,n);p in u.entities?a.push({id:p,changes:b}):r.push(b)}}catch(m){o={error:m}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}var f=e(a,u),d=t(r,u);switch(!0){case d===F.None&&f===F.None:return F.None;case d===F.Both||f===F.Both:return F.Both;default:return F.EntitiesOnly}}return{removeAll:function(n){return Object.assign({},n,{ids:[],entities:{}})},addOne:S(l),addMany:S(t),addAll:S(function(n,l){return l.ids=[],l.entities={},t(n,l),F.Both}),updateOne:S(function(n,l){return e([n],l)}),updateMany:S(e),upsertOne:S(function(n,l){return o([n],l)}),upsertMany:S(o),removeOne:S(function(n,l){return u([n],l)}),removeMany:S(u),map:S(function(n,l){return e(l.ids.reduce(function(t,u){var e=n(l.entities[u]);return e!==l.entities[u]&&t.push({id:u,changes:e}),t},[]).filter(function(n){return n.id in l.entities}),l)})}}var N,L=function(n){var l="function"==typeof Symbol&&n[Symbol.iterator],t=0;return l?l.call(n):{next:function(){return n&&t>=n.length&&(n=void 0),{value:n&&n[t++],done:!n}}}},$=function(){return($=Object.assign||function(n){for(var l,t=1,u=arguments.length;t<u;t++)for(var e in l=arguments[t])Object.prototype.hasOwnProperty.call(l,e)&&(n[e]=l[e]);return n}).apply(this,arguments)};function B(n){void 0===n&&(n={});var l=$({sortComparer:!1,selectId:function(n){return n.id}},n),t=l.selectId,u=l.sortComparer,e={getInitialState:function(n){return void 0===n&&(n={}),Object.assign({ids:[],entities:{}},n)}},o={getSelectors:function(n){var l=function(n){return n.ids},t=function(n){return n.entities},u=Object(b.D)(l,t,function(n,l){return n.map(function(n){return l[n]})}),e=Object(b.D)(l,function(n){return n.length});return n?{selectIds:Object(b.D)(n,l),selectEntities:Object(b.D)(n,t),selectAll:Object(b.D)(n,u),selectTotal:Object(b.D)(n,e)}:{selectIds:l,selectEntities:t,selectAll:u,selectTotal:e}}},i=u?function(n,l){var t=I(n);function u(l,t){var u=l.filter(function(l){return!(j(l,n)in t.entities)});return 0===u.length?F.None:(i(u,t),F.Both)}function e(l,t){var u=[],e=l.filter(function(l){return function(l,t,u){if(!(t.id in u.entities))return!1;var e=Object.assign({},u.entities[t.id],t.changes),o=j(e,n);return delete u.entities[t.id],l.push(e),o!==t.id}(u,l,t)}).length>0;if(0===u.length)return F.None;var o=t.ids,r=[];return t.ids=t.ids.filter(function(n,l){return n in t.entities||(r.push(l),!1)}),i(u,t),!e&&r.every(function(n){return t.ids[n]===o[n]})?F.EntitiesOnly:F.Both}function o(l,t){var o,i,r=[],a=[];try{for(var s=L(l),c=s.next();!c.done;c=s.next()){var b=c.value,p=j(b,n);p in t.entities?a.push({id:p,changes:b}):r.push(b)}}catch(m){o={error:m}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}var f=e(a,t),d=u(r,t);switch(!0){case d===F.None&&f===F.None:return F.None;case d===F.Both||f===F.Both:return F.Both;default:return F.EntitiesOnly}}function i(t,u){t.sort(l);for(var e=[],o=0,i=0;o<t.length&&i<u.ids.length;){var r=t[o],a=j(r,n),s=u.ids[i];l(r,u.entities[s])<=0?(e.push(a),o++):(e.push(s),i++)}u.ids=e.concat(o<t.length?t.slice(o).map(n):u.ids.slice(i)),t.forEach(function(l,t){u.entities[n(l)]=l})}return{removeOne:t.removeOne,removeMany:t.removeMany,removeAll:t.removeAll,addOne:S(function(n,l){return u([n],l)}),updateOne:S(function(n,l){return e([n],l)}),upsertOne:S(function(n,l){return o([n],l)}),addAll:S(function(n,l){return l.entities={},l.ids=[],u(n,l),F.Both}),addMany:S(u),updateMany:S(e),upsertMany:S(o),map:S(function(n,l){return e(l.ids.reduce(function(t,u){var e=n(l.entities[u]);return e!==l.entities[u]&&t.push({id:u,changes:e}),t},[]),l)})}}(t,u):I(t);return $({selectId:t,sortComparer:u},e,o,i)}!function(n){n.RequestForm="[Form] Reques Form List",n.LoadForms="[Form] Load Forms",n.EditForm="[Form] Edit Form",n.ClearEditForm="[Form] Clear Edit Form",n.AddForm="[Form] Add Form",n.SendForm="[Form] Send Form",n.FillForm="[Form] Fill Form",n.UpdateForm="[Form] Update Form",n.DeleteForm="[Form] Delete Form"}(N||(N={}));var A=B({selectId:function(n){return n._id}});A.getInitialState({edited:""});var U=A.getSelectors().selectAll,K=Object(b.B)("form"),D=Object(b.D)(K,U),T=(Object(b.D)(K,function(n){return n.entities[n.edited]}),Object(b.D)(K,function(n){return n.edited}),function(){function n(n){this.formStore=n}return n.prototype.ngOnInit=function(){this.forms$=this.formStore.pipe(Object(b.E)(D))},n}()),R=u.sb({encapsulation:0,styles:[[""]],data:{}});function z(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Dashboard"]))],null,null)}function q(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"app-dashboard",[],null,null,null,z,R)),u.tb(1,114688,null,0,T,[b.n],null,null)],function(n,l){n(l,1,0)},null)}var G,H=u.qb("app-dashboard",T,q,{},{},[]);!function(n){n.LoadPersons="[Person] Load Persons",n.RequestPerson="[Person] RequestPerson",n.AddPerson="[Person] Add Person",n.UpsertPerson="[Person] Upsert Person",n.AddPersons="[Person] Add Persons",n.UpsertPersons="[Person] Upsert Persons",n.UpdatePerson="[Person] Update Person",n.UpdatePersons="[Person] Update Persons",n.DeletePerson="[Person] Delete Person",n.DeletePersons="[Person] Delete Persons",n.ClearPersons="[Person] Clear Persons"}(G||(G={}));var Q=function(){return function(){this.type=G.RequestPerson}}(),Y=function(){return function(n){this.payload=n,this.type=G.LoadPersons}}(),J=B({selectId:function(n){return n.id}}),Z=J.getInitialState({});function X(n,l){switch(void 0===n&&(n=Z),l.type){case G.AddPerson:return J.addOne(l.payload.person,n);case G.UpsertPerson:return J.upsertOne(l.payload.person,n);case G.AddPersons:return J.addMany(l.payload.persons,n);case G.UpsertPersons:return J.upsertMany(l.payload.persons,n);case G.UpdatePerson:return J.updateOne(l.payload.person,n);case G.UpdatePersons:return J.updateMany(l.payload.persons,n);case G.DeletePerson:return J.removeOne(l.payload.id,n);case G.DeletePersons:return J.removeMany(l.payload.ids,n);case G.LoadPersons:return J.addAll(l.payload.persons,n);case G.ClearPersons:return J.removeAll(n);default:return n}}var V=J.getSelectors().selectAll,W=Object(b.B)("person"),nn=Object(b.D)(W,V),ln=function(){function n(n,l){this.http=n,this.personStore$=l}return n.prototype.ngOnInit=function(){this.personStore$.dispatch(new Q),this.persons$=this.personStore$.pipe(Object(b.E)(nn))},n}(),tn=t("t/Na"),un=u.sb({encapsulation:0,styles:[[""]],data:{}});function en(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,27,"tr",[],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(2,null,["",""])),(n()(),u.ub(3,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(n()(),u.Mb(4,null,["",""])),(n()(),u.ub(5,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(6,null,["",""])),(n()(),u.ub(7,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(8,null,["",""])),(n()(),u.ub(9,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(10,null,["",""])),(n()(),u.ub(11,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(12,null,["",""])),(n()(),u.ub(13,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(14,null,["",""])),(n()(),u.ub(15,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(16,null,["",""])),(n()(),u.ub(17,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(18,null,["",""])),(n()(),u.ub(19,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(20,null,["",""])),(n()(),u.ub(21,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(22,null,["",""])),(n()(),u.ub(23,0,null,null,4,"td",[],null,null,null,null,null)),(n()(),u.ub(24,0,null,null,3,"a",[["class","btn btn-primary"],["target","_blank"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Eb(n,25).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(25,671744,null,0,i.o,[i.l,i.a,r.l],{target:[0,"target"],routerLink:[1,"routerLink"]},null),u.Fb(26,2),(n()(),u.Mb(-1,null,["View"]))],function(n,l){var t=n(l,26,0,"/persons/id",l.context.$implicit.id);n(l,25,0,"_blank",t)},function(n,l){n(l,2,0,l.context.index+1),n(l,4,0,l.context.$implicit.title||"No"),n(l,6,0,l.context.$implicit.first_name||"No"),n(l,8,0,l.context.$implicit.last_name||"No"),n(l,10,0,l.context.$implicit.gender||"No"),n(l,12,0,l.context.$implicit.dob||"No"),n(l,14,0,l.context.$implicit.contact_phone||"No"),n(l,16,0,l.context.$implicit.contact_email||"No"),n(l,18,0,l.context.$implicit.country||"No"),n(l,20,0,l.context.$implicit.city||"No"),n(l,22,0,l.context.$implicit.address||"No"),n(l,24,0,u.Eb(l,25).target,u.Eb(l,25).href)})}function on(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,32,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,2,"h4",[["class","text-left"]],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Persons"])),(n()(),u.ub(4,0,null,null,28,"table",[["class","table table-responsive"]],null,null,null,null,null)),(n()(),u.ub(5,0,null,null,23,"thead",[],null,null,null,null,null)),(n()(),u.ub(6,0,null,null,22,"tr",[],null,null,null,null,null)),(n()(),u.ub(7,0,null,null,0,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.ub(8,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Title"])),(n()(),u.ub(10,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["First Name"])),(n()(),u.ub(12,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Last Name"])),(n()(),u.ub(14,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Gender"])),(n()(),u.ub(16,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Date of birth"])),(n()(),u.ub(18,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Contact Phone"])),(n()(),u.ub(20,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Contact Email"])),(n()(),u.ub(22,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Country"])),(n()(),u.ub(24,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["City"])),(n()(),u.ub(26,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Address"])),(n()(),u.ub(28,0,null,null,0,"th",[],null,null,null,null,null)),(n()(),u.ub(29,0,null,null,3,"tbody",[],null,null,null,null,null)),(n()(),u.lb(16777216,null,null,2,null,en)),u.tb(31,278528,null,0,r.n,[u.T,u.Q,u.u],{ngForOf:[0,"ngForOf"]},null),u.Gb(131072,r.b,[u.h])],function(n,l){var t=l.component;n(l,31,0,u.Nb(l,31,0,u.Eb(l,32).transform(t.persons$)))},null)}function rn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"app-persons-list",[],null,null,null,on,un)),u.tb(1,114688,null,0,ln,[tn.c,b.n],null,null)],function(n,l){n(l,1,0)},null)}var an=u.qb("app-persons-list",ln,rn,{},{},[]),sn=t("9AJC"),cn=t("4GxJ"),bn=t("67Y/"),pn=function(){function n(n){this.http=n}return n.prototype.getPersons=function(){return this.http.get("/persons").pipe(Object(bn.a)(function(n){return n}))},n.prototype.getFormsList=function(n){return this.http.get("/proxy/forms/person/"+n).pipe(Object(bn.a)(function(n){return n}))},n}(),fn=function(){function n(n,l,t){this.route=n,this.personStore$=l,this.personService=t}return n.prototype.ngOnInit=function(){var n;this.personStore$.dispatch(new Q),this.personId=this.route.snapshot.params.id,this.person$=this.personStore$.pipe(Object(b.E)((n=this.personId,Object(b.D)(W,function(l){return l.entities[n]})))),this.getFormList()},n.prototype.getFormList=function(){this.formList$=this.personService.getFormsList(this.personId)},n}(),dn=u.sb({encapsulation:0,styles:[[""]],data:{}});function mn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),u.Mb(3,null,[""," ",""])),(n()(),u.Mb(4,null,[" ",""])),(n()(),u.ub(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Mb(6,null,["",""])),(n()(),u.ub(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Mb(8,null,[""," "," ",""])),(n()(),u.ub(9,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Mb(10,null,["",""]))],null,function(n,l){n(l,3,0,l.context.ngIf.first_name,l.context.ngIf.last_name),n(l,4,0,l.context.ngIf.contact_phone),n(l,6,0,l.context.ngIf.address),n(l,8,0,l.context.ngIf.city,l.context.ngIf.state,l.context.ngIf.country),n(l,10,0,l.context.ngIf.contact_email)})}function hn(n){return u.Ob(0,[(n()(),u.lb(16777216,null,null,2,null,mn)),u.tb(1,16384,null,0,r.o,[u.T,u.Q],{ngIf:[0,"ngIf"]},null),u.Gb(131072,r.b,[u.h]),(n()(),u.lb(0,null,null,0))],function(n,l){var t=l.component;n(l,1,0,u.Nb(l,1,0,u.Eb(l,2).transform(t.person$)))},null)}function _n(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,13,"tbody",[],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,12,"tr",[],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(3,null,["",""])),(n()(),u.ub(4,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(5,null,["",""])),(n()(),u.ub(6,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(7,null,["",""])),(n()(),u.ub(8,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Registrations"])),(n()(),u.ub(10,0,null,null,3,"td",[],null,null,null,null,null)),(n()(),u.ub(11,0,null,null,2,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Eb(n,12).onClick()&&e),e},null,null)),u.tb(12,16384,null,0,i.m,[i.l,i.a,[8,null],u.I,u.k],{routerLink:[0,"routerLink"]},null),(n()(),u.Mb(-1,null,[" Link "]))],function(n,l){n(l,12,0,u.wb(1,"/online-form/",l.context.$implicit._id,""))},function(n,l){n(l,3,0,l.context.$implicit.name),n(l,5,0,l.context.$implicit.created_at),n(l,7,0,l.context.$implicit.updated_at)})}function gn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,16,"section",[["class","innerTab"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,15,"table",[["class","table table-striped"]],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,11,"thead",[],null,null,null,null,null)),(n()(),u.ub(3,0,null,null,10,"tr",[],null,null,null,null,null)),(n()(),u.ub(4,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Form name"])),(n()(),u.ub(6,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Created"])),(n()(),u.ub(8,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Updated"])),(n()(),u.ub(10,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Type"])),(n()(),u.ub(12,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Mb(-1,null,["Link"])),(n()(),u.lb(16777216,null,null,2,null,_n)),u.tb(15,278528,null,0,r.n,[u.T,u.Q,u.u],{ngForOf:[0,"ngForOf"]},null),u.Gb(131072,r.b,[u.h])],function(n,l){var t=l.component;n(l,15,0,u.Nb(l,15,0,u.Eb(l,16).transform(t.formList$)))},null)}function vn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,15,"div",[["class","container"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,14,"ngb-tabset",[],null,null,null,sn.h,sn.e)),u.tb(2,2146304,null,1,cn.ab,[cn.bb],null,null),u.Kb(603979776,1,{tabs:1}),(n()(),u.ub(4,0,null,null,5,"ngb-tab",[["title","GENERAL"]],null,null,null,null,null)),u.tb(5,2113536,[[1,4]],2,cn.Y,[],{title:[0,"title"]},null),u.Kb(603979776,2,{titleTpls:1}),u.Kb(603979776,3,{contentTpls:1}),(n()(),u.lb(0,null,null,1,null,hn)),u.tb(9,16384,[[3,4]],0,cn.Z,[u.Q],null,null),(n()(),u.ub(10,0,null,null,5,"ngb-tab",[["title","FORMS LINKS"]],null,null,null,null,null)),u.tb(11,2113536,[[1,4]],2,cn.Y,[],{title:[0,"title"]},null),u.Kb(603979776,4,{titleTpls:1}),u.Kb(603979776,5,{contentTpls:1}),(n()(),u.lb(0,null,null,1,null,gn)),u.tb(15,16384,[[5,4]],0,cn.Z,[u.Q],null,null)],function(n,l){n(l,5,0,"GENERAL"),n(l,11,0,"FORMS LINKS")},null)}function yn(n){return u.Ob(0,[(n()(),u.ub(0,0,null,null,1,"app-person-page",[],null,null,null,vn,dn)),u.tb(1,114688,null,0,fn,[i.a,b.n,pn],null,null)],function(n,l){n(l,1,0)},null)}var xn=u.qb("app-person-page",fn,yn,{},{},[]),On=t("gIcY"),Mn=t("CFL1"),Cn=function(){return function(){}}(),Pn=function(){return function(){}}(),kn=function(){return function(){}}(),wn=function(){return function(){}}(),Fn=function(){return function(){}}(),Sn=t("jYNz"),jn=t("15JJ"),En=t("9Z1F"),In=t("XlPw"),Nn=function(){function n(n,l,t){var u=this;this.actions$=n,this.personeSevice=l,this.personStore$=t,this.loadForms$=this.actions$.pipe(Object(Sn.d)(G.RequestPerson),Object(jn.a)(function(){return u.personeSevice.getPersons()}),Object(bn.a)(function(n){return new Y({persons:n})}),Object(En.a)(function(n){return console.log("error loading all person ",n),Object(In.a)(n)}))}return C.b([Object(Sn.b)(),C.d("design:type",Object)],n.prototype,"loadForms$",void 0),n}();t.d(l,"OrganizationModuleNgFactory",function(){return Ln});var Ln=u.rb(e,[],function(n){return u.Bb([u.Cb(512,u.j,u.gb,[[8,[o.a,M,H,an,xn,sn.a,sn.b,sn.l,sn.m,sn.i,sn.j,sn.k]],[3,u.j],u.A]),u.Cb(4608,r.q,r.p,[u.w,[2,r.J]]),u.Cb(4608,On.E,On.E,[]),u.Cb(4608,cn.E,cn.E,[u.j,u.s,cn.ub,cn.F]),u.Cb(4608,Mn.a,Mn.a,[tn.c]),u.Cb(1073742336,r.c,r.c,[]),u.Cb(1073742336,i.p,i.p,[[2,i.v],[2,i.l]]),u.Cb(1073742336,Fn,Fn,[]),u.Cb(1073742336,wn,wn,[]),u.Cb(1073742336,kn,kn,[]),u.Cb(1073742336,Pn,Pn,[]),u.Cb(1073742336,cn.c,cn.c,[]),u.Cb(1073742336,cn.f,cn.f,[]),u.Cb(1073742336,cn.h,cn.h,[]),u.Cb(1073742336,cn.m,cn.m,[]),u.Cb(1073742336,cn.n,cn.n,[]),u.Cb(1073742336,On.B,On.B,[]),u.Cb(1073742336,On.l,On.l,[]),u.Cb(1073742336,cn.u,cn.u,[]),u.Cb(1073742336,cn.A,cn.A,[]),u.Cb(1073742336,cn.G,cn.G,[]),u.Cb(1073742336,cn.K,cn.K,[]),u.Cb(1073742336,cn.P,cn.P,[]),u.Cb(1073742336,cn.S,cn.S,[]),u.Cb(1073742336,cn.X,cn.X,[]),u.Cb(1073742336,cn.cb,cn.cb,[]),u.Cb(1073742336,cn.gb,cn.gb,[]),u.Cb(1073742336,cn.hb,cn.hb,[]),u.Cb(1073742336,cn.ib,cn.ib,[]),u.Cb(1073742336,cn.H,cn.H,[]),u.Cb(1073742336,Cn,Cn,[]),u.Cb(1024,b.F,function(){return[{}]},[]),u.Cb(1024,b.j,function(){return[{key:"person",reducerFactory:b.z,metaReducers:[],initialState:void 0}]},[]),u.Cb(1024,b.G,b.H,[u.s,b.F,b.j]),u.Cb(1024,b.q,function(){return[X]},[]),u.Cb(1024,b.r,function(n){return[n]},[b.q]),u.Cb(1024,b.b,function(n,l,t){return[b.w(n,l,t)]},[u.s,b.q,b.r]),u.Cb(1073873408,b.o,b.o,[b.G,b.b,b.g,b.p]),u.Cb(512,pn,pn,[tn.c]),u.Cb(512,Nn,Nn,[Sn.a,pn,b.n]),u.Cb(1024,Sn.i,function(n){return[Sn.e(n)]},[Nn]),u.Cb(1073742336,Sn.g,Sn.g,[Sn.f,Sn.i,[2,b.p],[2,b.o]]),u.Cb(1073742336,e,e,[]),u.Cb(1024,i.j,function(){return[[{path:"",component:v,children:[{path:"",component:T}]},{path:"persons",component:v,children:[{path:"",component:ln},{path:"id/:id",component:fn}]},{path:"vertical-data-collection",component:v,children:[{path:"",loadChildren:"../vertical-data-collection/vertical-data-collection.module#VerticalDataCollectionModule"}]},{path:"payer-accounts",component:v,children:[{path:"",loadChildren:"../payer-accounts/payer-accounts.module#PayerAccountsModule"}]},{path:"online-form/:id",children:[{path:"",loadChildren:"../online-form/online-form.module#OnlineFormModule"}]},{path:"family",component:v,children:[{path:"",loadChildren:"../family/family.module#FamilyModule"}]}],[{path:"",component:T}],[{path:"",component:ln},{path:"id/:id",component:fn}]]},[])])})}}]);