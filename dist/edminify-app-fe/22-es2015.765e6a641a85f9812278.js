(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{i6jB:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("iInd"),a=e("SVse"),r=e("RDvj");const s=[{route:"/",label:"Dashboard",icon:"fa-th"},{route:"/bus",label:"Bus",icon:"fa-bus"},{route:"/payer-accounts",label:"Payer Accounts",icon:"fa-wallet"},{route:"/persons",label:"Persons",icon:"fa-user"},{route:"/family",label:"Family",icon:"fa-cog"},{route:"/period",label:"Period",icon:"fa-calendar"},{route:"/data-collection",label:"Data Collection",icon:"fa-file"}];class c{constructor(l,n){this.store$=l,this.router=n,this.menu=!1,this.toggleSideMenu=new t.EventEmitter}ngOnInit(){this.menuItems=s}toggleMenu(){this.toggleSideMenu.emit(!0)}addClassStatus(l){return l===this.router.url?"main_menu__nav_link--active_page":""}logOut(){this.store$.dispatch(new r.b)}}var d=e("DQLy"),p=t["\u0275crt"]({encapsulation:0,styles:[['.main_menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100vh;min-width:55px}.main_menu__navbar_nav[_ngcontent-%COMP%]{align-items:center;background-color:#fbfbfb;border-right:1px solid rgba(182,182,182,.3);display:flex;flex-direction:column;justify-content:flex-start;min-height:100vh;min-width:55px;position:fixed}.main_menu__nav_item[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-size:14px}.main_menu__nav_link[_ngcontent-%COMP%]{align-items:center;border-radius:5px;box-sizing:content-box;color:#4350a2;display:flex;justify-content:center;margin:5px;padding:10px;position:relative}.main_menu__nav_link[_ngcontent-%COMP%]:focus{outline:transparent solid 0}.main_menu__nav_link[_ngcontent-%COMP%]:hover{color:#9fa6cb;text-decoration:none}.main_menu__nav_link--show_label[_ngcontent-%COMP%]:after{background:#424242d9;border-radius:3px;color:#eee;content:attr(name);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-size:13px;font-weight:500;left:55px;max-height:200px;opacity:0;padding:.4em;position:absolute;transition:.6s ease-in-out;top:5px;white-space:nowrap;z-index:-1}.main_menu__nav_link--show_label[_ngcontent-%COMP%]:hover:after{top:10px;opacity:1;left:57px;z-index:100}.main_menu__nav_link--active_page[_ngcontent-%COMP%]{background-color:#ddd}.main_menu__icon_box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;box-sizing:content-box;width:26px;height:26px;border-radius:50%;background:#f8bc45}.main_menu__icon_box[_ngcontent-%COMP%]:hover{background:#dda538}.main_menu__icon_text[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-weight:900;font-size:22px;line-height:22px;color:#fff;transform:translateY(-2px)}.main_menu__icon[_ngcontent-%COMP%]{font-size:18px}']],data:{}});function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"li",[["class","nav-item main_menu__nav_item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"a",[["rel","noopener"]],[[8,"className",0],[8,"name",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](2,671744,null,0,i.n,[i.k,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275eld"](3,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null))],function(l,n){l(n,2,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.route,""))},function(l,n){l(n,1,0,t["\u0275inlineInterpolate"](1,"nav-link main_menu__nav_link\n                    main_menu__nav_link--show_label\n                    ",n.component.addClassStatus(n.context.$implicit.route),""),t["\u0275inlineInterpolate"](1,"",n.context.$implicit.label,""),t["\u0275nov"](n,2).target,t["\u0275nov"](n,2).href),l(n,3,0,t["\u0275inlineInterpolate"](1,"fas ",n.context.$implicit.icon," main_menu__icon"))})}function f(l){return t["\u0275vid"](2,[(l()(),t["\u0275eld"](0,0,null,null,13,"div",[["class","main_menu d-none d-md-flex"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,12,"ul",[["class","navbar-nav flex-column main_menu__navbar_nav"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,5,"li",[["class","nav-item main_menu__nav_item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,4,"a",[["class","nav-link main_menu__nav_link"],["name","Logo"],["rel","noopener"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0,o=l.component;return"click"===n&&(u=!1!==t["\u0275nov"](l,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),"click"===n&&(u=!1!==o.toggleMenu()&&u),u},null,null)),t["\u0275did"](4,671744,null,0,i.n,[i.k,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275eld"](5,0,null,null,2,"div",[["class","main_menu__icon_box"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"span",[["class","main_menu__icon_text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["A"])),(l()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](9,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](10,0,null,null,3,"li",[["class","nav-item main_menu__nav_item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,2,"a",[["class","nav-link main_menu__nav_link main_menu__nav_link--show_label"],["name","Log Out"],["rel","noopener"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0,o=l.component;return"click"===n&&(u=!1!==t["\u0275nov"](l,12).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),"click"===n&&(u=!1!==o.logOut()&&u),u},null,null)),t["\u0275did"](12,671744,null,0,i.n,[i.k,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275eld"](13,0,null,null,0,"i",[["class","fas fa-sign-out-alt main_menu__icon"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,4,0,"/"),l(n,9,0,e.menuItems),l(n,12,0,"/")},function(l,n){l(n,3,0,t["\u0275nov"](n,4).target,t["\u0275nov"](n,4).href),l(n,11,0,t["\u0275nov"](n,12).target,t["\u0275nov"](n,12).href)})}class _{constructor(l){this.store$=l,this.menu=!1,this.toggleSideMenu=new t.EventEmitter}ngOnInit(){this.menuItems=s}toggleMenu(){this.toggleSideMenu.emit(!0)}logOut(){this.store$.dispatch(new r.b)}}var h=t["\u0275crt"]({encapsulation:0,styles:[['.top_menu[_ngcontent-%COMP%]{display:flex;flex-direction:row;min-height:40px;align-items:stretch;justify-content:space-between;background-color:#fbfbfb;box-shadow:inset 0 1px 0 0 #e8e8e8,0 40px 0 -21px rgba(0,0,0,.5)}.top_menu__nav_line[_ngcontent-%COMP%]{align-items:stretch;border-bottom:1px solid #eee;display:flex;flex-direction:row;justify-content:space-between;justify-content:flex-end;min-height:40px;width:inherit}.top_menu__navbar[_ngcontent-%COMP%]{align-items:stretch;justify-content:flex-end;padding:0 1rem;width:100%;width:-webkit-fill-available}.top_menu__navbar_nav[_ngcontent-%COMP%]{display:flex;flex-direction:column}.top_menu__navbar_button[_ngcontent-%COMP%]{align-items:center;color:#4350a2;border:none;border-radius:0;border-left:1px solid #eee;display:flex;justify-content:center;min-width:40px;position:relative}.top_menu__navbar_button[_ngcontent-%COMP%]:focus{outline:transparent solid 0}.top_menu__navbar_button[_ngcontent-%COMP%]:hover{color:#9fa6cb;text-decoration:none}.top_menu__navbar_button--show_label[_ngcontent-%COMP%]:after{background:#424242d9;border-radius:3px;color:#eee;content:attr(name);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-size:13px;font-weight:500;max-height:10em;max-width:10em;opacity:0;padding:.4em;position:absolute;right:5px;transition:.6s ease-in-out;top:40px;white-space:nowrap;z-index:-1}.top_menu__navbar_button--show_label[_ngcontent-%COMP%]:hover:after{opacity:1;top:45px;right:0;z-index:100}.top_menu__navbar_icon[_ngcontent-%COMP%]{font-size:17px;line-height:19px;min-height:17px;min-width:14px}.top_menu__navbar_user_image[_ngcontent-%COMP%]{align-items:center;color:#fff;background-color:#4350a2;border:2px solid #fff;border-radius:50%;display:flex;justify-content:center;height:30px;width:30px}.top_menu__nav_item[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-size:16px;font-weight:500;border-bottom:1px solid #eee}.top_menu__nav_link[_ngcontent-%COMP%]{padding:13px;box-sizing:content-box;display:flex;align-items:center;justify-content:center;position:relative}.top_menu__nav_link[_ngcontent-%COMP%]:focus{outline:transparent solid 0}.top_menu__nav_link_text[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-size:14px;font-weight:500}.top_menu__user_bar[_ngcontent-%COMP%]{display:flex}.top_bar[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:row;justify-content:space-between;height:40px}']],data:{}});function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"li",[["class","nav-item top_menu__nav_item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,3,"a",[["class","nav-link top_menu__nav_link"],["rel","noopener"]],[[8,"name",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](2,671744,null,0,i.n,[i.k,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275eld"](3,0,null,null,1,"span",[["class","top_menu__nav_link_text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""]))],function(l,n){l(n,2,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.route,""))},function(l,n){l(n,1,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.label,""),t["\u0275nov"](n,2).target,t["\u0275nov"](n,2).href),l(n,4,0,n.context.$implicit.label)})}function b(l){return t["\u0275vid"](2,[(l()(),t["\u0275eld"](0,0,null,null,22,"div",[["class","top_menu d-flex d-md-flex"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,21,"nav",[["class","navbar navbar-light top_menu__navbar"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,11,"div",[["class","top_menu__nav_line"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,4,"div",[["class","top_menu__control d-flex d-md-none"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"a",[["class","navbar-brand m-0"],["href","#"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,2,"button",[["aria-controls","navbarMainMenu"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler top_menu__navbar_button"],["data-target","#navbarMainMenu"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,0,"i",[["class","fas fa-bars fa-1x top_menu__navbar_icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,5,"div",[["class","top_menu__user_bar"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,1,"a",[["class","top_menu__navbar_button \n                    top_menu__navbar_button--show_label"],["name","Layer Group Button"],["tabindex","-2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,0,"i",[["class","fas fa-layer-group fa-1x top_menu__navbar_icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,2,"a",[["class","top_menu__navbar_button \n                    top_menu__navbar_button--show_label"],["name","User"],["tabindex","-1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,1,"div",[["class","top_menu__navbar_user_image"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,0,"i",[["class","fas fa-user-tie"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,8,"div",[["class","collapse d-md-none navbar-collapse"],["id","navbarMainMenu"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,7,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](17,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](18,0,null,null,4,"li",[["class","nav-item top_menu__nav_item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,3,"a",[["class","nav-link top_menu__nav_link"],["name","Log Out"],["rel","noopener"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0,o=l.component;return"click"===n&&(u=!1!==t["\u0275nov"](l,20).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),"click"===n&&(u=!1!==o.logOut()&&u),u},null,null)),t["\u0275did"](20,671744,null,0,i.n,[i.k,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275eld"](21,0,null,null,1,"span",[["class","top_menu__nav_link_text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Log Out"]))],function(l,n){l(n,17,0,n.component.menuItems),l(n,20,0,"/")},function(l,n){l(n,19,0,t["\u0275nov"](n,20).target,t["\u0275nov"](n,20).href)})}class v{constructor(){this.isMenuOpen=!1}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}var y=t["\u0275crt"]({encapsulation:0,styles:[[".app_layout_container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}@media (min-width:768px){.app_layout_container[_ngcontent-%COMP%]{flex-direction:row;justify-content:flex-start}}.main-container[_ngcontent-%COMP%]{position:relative;flex-grow:1}.main-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%]{align-items:stretch;z-index:1;padding:0;background-color:#f3f2f3;display:flex;flex-direction:column;justify-content:stretch;flex:1}"]],data:{}});function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","app_layout_container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-header",[],null,null,null,f,p)),t["\u0275did"](2,114688,null,0,c,[d.n,i.k],null,null),(l()(),t["\u0275eld"](3,0,null,null,5,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"app-header-top",[],null,null,null,b,h)),t["\u0275did"](5,114688,null,0,_,[d.n],null,null),(l()(),t["\u0275eld"](6,0,null,null,2,"div",[["class","content-area"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](8,212992,null,0,i.p,[i.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(l,n){l(n,2,0),l(n,5,0),l(n,8,0)},null)}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,x,y)),t["\u0275did"](1,49152,null,0,v,[],null,null)],null,null)}var k=t["\u0275ccf"]("app-layout",v,O,{},{},[]);class P{constructor(){}ngOnInit(){}}var C=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Dashboard"]))],null,null)}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-dashboard",[],null,null,null,M,C)),t["\u0275did"](1,114688,null,0,P,[],null,null)],function(l,n){l(n,1,0)},null)}var I=t["\u0275ccf"]("app-dashboard",P,w,{},{},[]),S=function(l){return l.LoadPersons="[Person] Load Persons",l.RequestPerson="[Person] RequestPerson",l.AddPerson="[Person] Add Person",l.UpsertPerson="[Person] Upsert Person",l.AddPersons="[Person] Add Persons",l.UpsertPersons="[Person] Upsert Persons",l.UpdatePerson="[Person] Update Person",l.UpdatePersons="[Person] Update Persons",l.DeletePerson="[Person] Delete Person",l.DeletePersons="[Person] Delete Persons",l.ClearPersons="[Person] Clear Persons",l}({});class j{constructor(){this.type=S.RequestPerson}}class L{constructor(l){this.payload=l,this.type=S.LoadPersons}}var N=function(){var l={EntitiesOnly:0,Both:1,None:2};return l[l.EntitiesOnly]="EntitiesOnly",l[l.Both]="Both",l[l.None]="None",l}();function F(l){return function(n,e){const t={ids:[...e.ids],entities:Object.assign({},e.entities)},u=l(n,t);return u===N.Both?Object.assign({},e,t):u===N.EntitiesOnly?Object.assign({},e,{entities:t.entities}):e}}function $(l,n){const e=n(l);return Object(t.isDevMode)()&&void 0===e&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",l,"The `selectId` implementation:",n.toString()),e}function R(l){function n(n,e){const t=$(n,l);return t in e.entities?N.None:(e.ids.push(t),e.entities[t]=n,N.Both)}function e(l,e){let t=!1;for(const u of l)t=n(u,e)!==N.None||t;return t?N.Both:N.None}function t(l,n){const e=(l instanceof Array?l:n.ids.filter(e=>l(n.entities[e]))).filter(l=>l in n.entities).map(l=>delete n.entities[l]).length>0;return e&&(n.ids=n.ids.filter(l=>l in n.entities)),e?N.Both:N.None}function u(n,e){const t={};return(n=n.filter(l=>l.id in e.entities)).length>0?n.filter(n=>(function(n,e,t){const u=Object.assign({},t.entities[e.id],e.changes),o=$(u,l),i=o!==e.id;return i&&(n[e.id]=o,delete t.entities[e.id]),t.entities[o]=u,i})(t,n,e)).length>0?(e.ids=e.ids.map(l=>t[l]||l),N.Both):N.EntitiesOnly:N.None}function o(n,t){const o=[],i=[];for(const e of n){const n=$(e,l);n in t.entities?i.push({id:n,changes:e}):o.push(e)}const a=u(i,t),r=e(o,t);switch(!0){case r===N.None&&a===N.None:return N.None;case r===N.Both||a===N.Both:return N.Both;default:return N.EntitiesOnly}}return{removeAll:function(l){return Object.assign({},l,{ids:[],entities:{}})},addOne:F(n),addMany:F(e),addAll:F(function(l,n){return n.ids=[],n.entities={},e(l,n),N.Both}),updateOne:F(function(l,n){return u([l],n)}),updateMany:F(u),upsertOne:F(function(l,n){return o([l],n)}),upsertMany:F(o),removeOne:F(function(l,n){return t([l],n)}),removeMany:F(t),map:F(function(l,n){return u(n.ids.reduce((e,t)=>{const u=l(n.entities[t]);return u!==n.entities[t]&&e.push({id:t,changes:u}),e},[]).filter(({id:l})=>l in n.entities),n)})}}const D=function(l={}){const{selectId:n,sortComparer:e}=Object.assign({sortComparer:!1,selectId:l=>l.id},l),t={getInitialState:function(l={}){return Object.assign({ids:[],entities:{}},l)}},u={getSelectors:function(l){const n=l=>l.ids,e=l=>l.entities,t=Object(d.D)(n,e,(l,n)=>l.map(l=>n[l])),u=Object(d.D)(n,l=>l.length);return l?{selectIds:Object(d.D)(l,n),selectEntities:Object(d.D)(l,e),selectAll:Object(d.D)(l,t),selectTotal:Object(d.D)(l,u)}:{selectIds:n,selectEntities:e,selectAll:t,selectTotal:u}}},o=e?function(l,n){const{removeOne:e,removeMany:t,removeAll:u}=R(l);function o(n,e){const t=n.filter(n=>!($(n,l)in e.entities));return 0===t.length?N.None:(r(t,e),N.Both)}function i(n,e){const t=[],u=n.filter(n=>(function(n,e,t){if(!(e.id in t.entities))return!1;const u=Object.assign({},t.entities[e.id],e.changes),o=$(u,l);return delete t.entities[e.id],n.push(u),o!==e.id})(t,n,e)).length>0;if(0===t.length)return N.None;{const l=e.ids,n=[];return e.ids=e.ids.filter((l,t)=>l in e.entities||(n.push(t),!1)),r(t,e),!u&&n.every(n=>e.ids[n]===l[n])?N.EntitiesOnly:N.Both}}function a(n,e){const t=[],u=[];for(const o of n){const n=$(o,l);n in e.entities?u.push({id:n,changes:o}):t.push(o)}const a=i(u,e),r=o(t,e);switch(!0){case r===N.None&&a===N.None:return N.None;case r===N.Both||a===N.Both:return N.Both;default:return N.EntitiesOnly}}function r(e,t){e.sort(n);const u=[];let o=0,i=0;for(;o<e.length&&i<t.ids.length;){const a=e[o],r=$(a,l),s=t.ids[i];n(a,t.entities[s])<=0?(u.push(r),o++):(u.push(s),i++)}t.ids=u.concat(o<e.length?e.slice(o).map(l):t.ids.slice(i)),e.forEach((n,e)=>{t.entities[l(n)]=n})}return{removeOne:e,removeMany:t,removeAll:u,addOne:F(function(l,n){return o([l],n)}),updateOne:F(function(l,n){return i([l],n)}),upsertOne:F(function(l,n){return a([l],n)}),addAll:F(function(l,n){return n.entities={},n.ids=[],o(l,n),N.Both}),addMany:F(o),updateMany:F(i),upsertMany:F(a),map:F(function(l,n){return i(n.ids.reduce((e,t)=>{const u=l(n.entities[t]);return u!==n.entities[t]&&e.push({id:t,changes:u}),e},[]),n)})}}(n,e):R(n);return Object.assign({selectId:n,sortComparer:e},t,u,o)}({selectId:l=>l.id}),A=D.getInitialState({});function B(l=A,n){switch(n.type){case S.AddPerson:return D.addOne(n.payload.person,l);case S.UpsertPerson:return D.upsertOne(n.payload.person,l);case S.AddPersons:return D.addMany(n.payload.persons,l);case S.UpsertPersons:return D.upsertMany(n.payload.persons,l);case S.UpdatePerson:return D.updateOne(n.payload.person,l);case S.UpdatePersons:return D.updateMany(n.payload.persons,l);case S.DeletePerson:return D.removeOne(n.payload.id,l);case S.DeletePersons:return D.removeMany(n.payload.ids,l);case S.LoadPersons:return D.addAll(n.payload.persons,l);case S.ClearPersons:return D.removeAll(l);default:return l}}const{selectAll:E}=D.getSelectors(),U=Object(d.B)("person"),K=Object(d.D)(U,E),z=l=>Object(d.D)(U,n=>n.entities[l]);class T{constructor(l,n){this.http=l,this.personStore$=n}ngOnInit(){this.personStore$.dispatch(new j),this.persons$=this.personStore$.pipe(Object(d.E)(K))}}var q=e("IheW"),G=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function H(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,27,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),(l()(),t["\u0275eld"](3,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""])),(l()(),t["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,["",""])),(l()(),t["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](10,null,["",""])),(l()(),t["\u0275eld"](11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](12,null,["",""])),(l()(),t["\u0275eld"](13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](14,null,["",""])),(l()(),t["\u0275eld"](15,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](16,null,["",""])),(l()(),t["\u0275eld"](17,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](18,null,["",""])),(l()(),t["\u0275eld"](19,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](20,null,["",""])),(l()(),t["\u0275eld"](21,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](22,null,["",""])),(l()(),t["\u0275eld"](23,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,null,3,"a",[["class","btn btn-primary"],["target","_blank"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,25).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](25,671744,null,0,i.n,[i.k,i.a,a.LocationStrategy],{target:[0,"target"],routerLink:[1,"routerLink"]},null),t["\u0275pad"](26,2),(l()(),t["\u0275ted"](-1,null,["View"]))],function(l,n){var e=l(n,26,0,"/persons/id",n.context.$implicit.id);l(n,25,0,"_blank",e)},function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.title||"No"),l(n,6,0,n.context.$implicit.first_name||"No"),l(n,8,0,n.context.$implicit.last_name||"No"),l(n,10,0,n.context.$implicit.gender||"No"),l(n,12,0,n.context.$implicit.dob||"No"),l(n,14,0,n.context.$implicit.contact_phone||"No"),l(n,16,0,n.context.$implicit.contact_email||"No"),l(n,18,0,n.context.$implicit.country||"No"),l(n,20,0,n.context.$implicit.city||"No"),l(n,22,0,n.context.$implicit.address||"No"),l(n,24,0,t["\u0275nov"](n,25).target,t["\u0275nov"](n,25).href)})}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,32,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"h4",[["class","text-left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Persons"])),(l()(),t["\u0275eld"](4,0,null,null,28,"table",[["class","table table-responsive"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,23,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,0,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Title"])),(l()(),t["\u0275eld"](10,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["First Name"])),(l()(),t["\u0275eld"](12,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Last Name"])),(l()(),t["\u0275eld"](14,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Gender"])),(l()(),t["\u0275eld"](16,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Date of birth"])),(l()(),t["\u0275eld"](18,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Contact Phone"])),(l()(),t["\u0275eld"](20,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Contact Email"])),(l()(),t["\u0275eld"](22,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Country"])),(l()(),t["\u0275eld"](24,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["City"])),(l()(),t["\u0275eld"](26,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Address"])),(l()(),t["\u0275eld"](28,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,2,null,H)),t["\u0275did"](31,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pid"](131072,a.AsyncPipe,[t.ChangeDetectorRef])],function(l,n){var e=n.component;l(n,31,0,t["\u0275unv"](n,31,0,t["\u0275nov"](n,32).transform(e.persons$)))},null)}function Y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-persons-list",[],null,null,null,V,G)),t["\u0275did"](1,114688,null,0,T,[q.c,d.n],null,null)],function(l,n){l(n,1,0)},null)}var J=t["\u0275ccf"]("app-persons-list",T,Y,{},{},[]),W=e("9AJC"),X=e("G0yt"),Z=e("lJxs");class Q{constructor(l){this.http=l}getPersons(){return this.http.get("/persons").pipe(Object(Z.a)(l=>l))}getFormsList(l){return this.http.get(`/proxy/forms/person/${l}`).pipe(Object(Z.a)(l=>(console.log(l.data),l.data)))}}class ll{constructor(l,n,e){this.route=l,this.personStore$=n,this.personService=e}ngOnInit(){this.personStore$.dispatch(new j),this.personId=this.route.snapshot.params.id,this.person$=this.personStore$.pipe(Object(d.E)(z(this.personId))),this.getFormList()}getFormList(){this.formList$=this.personService.getFormsList(this.personId)}}var nl=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function el(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,[""," ",""])),(l()(),t["\u0275ted"](4,null,[" ",""])),(l()(),t["\u0275eld"](5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,["",""])),(l()(),t["\u0275eld"](7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,[""," "," ",""])),(l()(),t["\u0275eld"](9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](10,null,["",""]))],null,function(l,n){l(n,3,0,n.context.ngIf.first_name,n.context.ngIf.last_name),l(n,4,0,n.context.ngIf.contact_phone),l(n,6,0,n.context.ngIf.address),l(n,8,0,n.context.ngIf.city,n.context.ngIf.state,n.context.ngIf.country),l(n,10,0,n.context.ngIf.contact_email)})}function tl(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,2,null,el)),t["\u0275did"](1,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275pid"](131072,a.AsyncPipe,[t.ChangeDetectorRef]),(l()(),t["\u0275and"](0,null,null,0))],function(l,n){var e=n.component;l(n,1,0,t["\u0275unv"](n,1,0,t["\u0275nov"](n,2).transform(e.person$)))},null)}function ul(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,13,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",""])),(l()(),t["\u0275eld"](4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](7,null,["",""])),(l()(),t["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Registrations"])),(l()(),t["\u0275eld"](10,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,2,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,12).onClick()&&u),u},null,null)),t["\u0275did"](12,16384,null,0,i.l,[i.k,i.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275ted"](-1,null,[" Link "]))],function(l,n){l(n,12,0,t["\u0275inlineInterpolate"](1,"/data-collection/online-form/",n.context.$implicit._id,""))},function(l,n){l(n,3,0,n.context.$implicit.name),l(n,5,0,n.context.$implicit.created_at),l(n,7,0,n.context.$implicit.updated_at)})}function ol(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"section",[["class","innerTab"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,15,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Form name"])),(l()(),t["\u0275eld"](6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Created"])),(l()(),t["\u0275eld"](8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Updated"])),(l()(),t["\u0275eld"](10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Type"])),(l()(),t["\u0275eld"](12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Link"])),(l()(),t["\u0275and"](16777216,null,null,2,null,ul)),t["\u0275did"](15,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pid"](131072,a.AsyncPipe,[t.ChangeDetectorRef])],function(l,n){var e=n.component;l(n,15,0,t["\u0275unv"](n,15,0,t["\u0275nov"](n,16).transform(e.formList$)))},null)}function il(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,15,"div",[["class","container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,14,"ngb-tabset",[],null,null,null,W.h,W.e)),t["\u0275did"](2,2146304,null,1,X.ab,[X.bb],null,null),t["\u0275qud"](603979776,1,{tabs:1}),(l()(),t["\u0275eld"](4,0,null,null,5,"ngb-tab",[["title","GENERAL"]],null,null,null,null,null)),t["\u0275did"](5,2113536,[[1,4]],2,X.Y,[],{title:[0,"title"]},null),t["\u0275qud"](603979776,2,{titleTpls:1}),t["\u0275qud"](603979776,3,{contentTpls:1}),(l()(),t["\u0275and"](0,null,null,1,null,tl)),t["\u0275did"](9,16384,[[3,4]],0,X.Z,[t.TemplateRef],null,null),(l()(),t["\u0275eld"](10,0,null,null,5,"ngb-tab",[["title","FORMS LINKS"]],null,null,null,null,null)),t["\u0275did"](11,2113536,[[1,4]],2,X.Y,[],{title:[0,"title"]},null),t["\u0275qud"](603979776,4,{titleTpls:1}),t["\u0275qud"](603979776,5,{contentTpls:1}),(l()(),t["\u0275and"](0,null,null,1,null,ol)),t["\u0275did"](15,16384,[[5,4]],0,X.Z,[t.TemplateRef],null,null)],function(l,n){l(n,5,0,"GENERAL"),l(n,11,0,"FORMS LINKS")},null)}function al(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-person-page",[],null,null,null,il,nl)),t["\u0275did"](1,114688,null,0,ll,[i.a,d.n,Q],null,null)],function(l,n){l(n,1,0)},null)}var rl=t["\u0275ccf"]("app-person-page",ll,al,{},{},[]),sl=e("s7LF");class cl{}class dl{}class pl{}class ml{}const fl=()=>e.e(16).then(e.bind(null,"wLWF")).then(l=>l.DataCollectionModuleNgFactory),_l=()=>Promise.all([e.e(0),e.e(4),e.e(7),e.e(23)]).then(e.bind(null,"PMaU")).then(l=>l.PayerAccountsModuleNgFactory),hl=()=>Promise.all([e.e(0),e.e(2),e.e(4),e.e(7),e.e(1),e.e(21)]).then(e.bind(null,"nHdY")).then(l=>l.FamilyModuleNgFactory),gl=()=>Promise.all([e.e(0),e.e(1),e.e(17)]).then(e.bind(null,"IhLC")).then(l=>l.PeriodModuleNgFactory);class bl{}var vl=e("mrSG"),yl=e("Yml6"),xl=e("eIep"),Ol=e("JIr8"),kl=e("z6cu");let Pl=(()=>{class l{constructor(l,n,e){this.actions$=l,this.personeSevice=n,this.personStore$=e,this.loadForms$=this.actions$.pipe(Object(yl.d)(S.RequestPerson),Object(xl.a)(()=>this.personeSevice.getPersons()),Object(Z.a)(l=>new L({persons:l})),Object(Ol.a)(l=>(console.log("error loading all person ",l),Object(kl.a)(l))))}}return vl.b([Object(yl.b)(),vl.c("design:type",Object)],l.prototype,"loadForms$",void 0),l})();e.d(n,"OrganizationModuleNgFactory",function(){return Cl});var Cl=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,k,I,J,rl,W.a,W.b,W.l,W.m,W.i,W.j,W.k]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,sl.E,sl.E,[]),t["\u0275mpd"](4608,X.E,X.E,[t.ComponentFactoryResolver,t.Injector,X.wb,X.F]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,i.o,i.o,[[2,i.t],[2,i.k]]),t["\u0275mpd"](1073742336,bl,bl,[]),t["\u0275mpd"](1073742336,ml,ml,[]),t["\u0275mpd"](1073742336,pl,pl,[]),t["\u0275mpd"](1073742336,dl,dl,[]),t["\u0275mpd"](1073742336,X.c,X.c,[]),t["\u0275mpd"](1073742336,X.f,X.f,[]),t["\u0275mpd"](1073742336,X.h,X.h,[]),t["\u0275mpd"](1073742336,X.m,X.m,[]),t["\u0275mpd"](1073742336,X.n,X.n,[]),t["\u0275mpd"](1073742336,sl.D,sl.D,[]),t["\u0275mpd"](1073742336,sl.m,sl.m,[]),t["\u0275mpd"](1073742336,X.u,X.u,[]),t["\u0275mpd"](1073742336,X.A,X.A,[]),t["\u0275mpd"](1073742336,X.G,X.G,[]),t["\u0275mpd"](1073742336,X.K,X.K,[]),t["\u0275mpd"](1073742336,X.P,X.P,[]),t["\u0275mpd"](1073742336,X.S,X.S,[]),t["\u0275mpd"](1073742336,X.X,X.X,[]),t["\u0275mpd"](1073742336,X.cb,X.cb,[]),t["\u0275mpd"](1073742336,X.gb,X.gb,[]),t["\u0275mpd"](1073742336,X.jb,X.jb,[]),t["\u0275mpd"](1073742336,X.kb,X.kb,[]),t["\u0275mpd"](1073742336,X.H,X.H,[]),t["\u0275mpd"](1073742336,cl,cl,[]),t["\u0275mpd"](1024,d.F,function(){return[{}]},[]),t["\u0275mpd"](1024,d.j,function(){return[{key:"person",reducerFactory:d.z,metaReducers:[],initialState:void 0}]},[]),t["\u0275mpd"](1024,d.G,d.H,[t.Injector,d.F,d.j]),t["\u0275mpd"](1024,d.q,function(){return[B]},[]),t["\u0275mpd"](1024,d.r,function(l){return[l]},[d.q]),t["\u0275mpd"](1024,d.b,function(l,n,e){return[d.w(l,n,e)]},[t.Injector,d.q,d.r]),t["\u0275mpd"](1073873408,d.o,d.o,[d.G,d.b,d.g,d.p]),t["\u0275mpd"](512,Q,Q,[q.c]),t["\u0275mpd"](512,Pl,Pl,[yl.a,Q,d.n]),t["\u0275mpd"](1024,yl.i,function(l){return[yl.e(l)]},[Pl]),t["\u0275mpd"](1073742336,yl.g,yl.g,[yl.f,yl.i,[2,d.p],[2,d.o]]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,i.i,function(){return[[{path:"",component:v,children:[{path:"",component:P}]},{path:"persons",component:v,children:[{path:"",component:T},{path:"id/:id",component:ll}]},{path:"data-collection",component:v,children:[{path:"",loadChildren:fl}]},{path:"payer-accounts",component:v,children:[{path:"",loadChildren:_l}]},{path:"family",component:v,children:[{path:"",loadChildren:hl}]},{path:"period",component:v,children:[{path:"",loadChildren:gl}]}],[{path:"",component:P}],[{path:"",component:T},{path:"id/:id",component:ll}]]},[])])})}}]);