(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Rao2:function(t,e,n){"use strict";n.d(e,"a",function(){return o});class o{constructor(){this.draftForm=new Map,this.getDraftForm=t=>{if(this.draftForm.has(t))return this.draftForm.get(t)},this.setDraftForm=(t,e)=>{this.draftForm.set(t,e)},this.deleteDraftForm=t=>{this.draftForm.delete(t)}}ngOnInit(){}ngOnDestroy(){}}},vbFT:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var o=n("IheW"),r=n("lJxs");class l{constructor(t){this.http=t}sendForm(t){return""!==t._id?this.http.put(`/proxy/forms/${t._id}`,t).pipe(Object(r.a)(t=>t)):this.http.post("/proxy/forms",t).pipe(Object(r.a)(t=>t))}getOneForm(t){return this.http.get(`/proxy/forms/${t}`).pipe(Object(r.a)(t=>t.data))}getOneFormSql(t){return this.http.get(`/proxy/templates/${t}`).pipe(Object(r.a)(t=>t))}getFormsList(t){const e={headers:new o.i({"Content-Type":"application/json"}),params:(new o.j).set("params",JSON.stringify(t))};return this.http.get("/proxy/forms",e).pipe(Object(r.a)(t=>t))}getFormWithPermissions(t){return this.http.get(`/forms/${t}/permissions`).pipe(Object(r.a)(t=>t.data[0]))}deleteForm(t){return this.http.delete(`/proxy/forms/${t}`).pipe(Object(r.a)(t=>t))}bulkDeleteForms(t){const e={headers:new o.i({"Content-Type":"application/json"}),body:{id:t}};return this.http.delete("/proxy/forms",e).pipe(Object(r.a)(t=>t))}changeStatus(t,e){return this.http.post("/proxy/forms/status",{id:t,status:e}).pipe(Object(r.a)(t=>t))}}},wLWF:function(t,e,n){"use strict";n.r(e);var o=n("8Y7J");class r{}var l=n("pMnS"),a=n("iInd"),i=n("Rao2"),s=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function p(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o["\u0275did"](1,212992,null,0,a.q,[a.b,o.ViewContainerRef,o.ComponentFactoryResolver,[8,null],o.ChangeDetectorRef],null,null)],function(t,e){t(e,1,0)},null)}function u(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-data-collection",[],null,null,null,p,s)),o["\u0275did"](1,245760,null,0,i.a,[],null,null)],function(t,e){t(e,1,0)},null)}var c=o["\u0275ccf"]("app-data-collection",i.a,u,{},{},[]),d=n("SVse"),h=n("vbFT"),m=n("IheW");const f=()=>Promise.all([n.e(0),n.e(5),n.e(9),n.e(17)]).then(n.bind(null,"H9BU")).then(t=>t.FormTableModuleNgFactory),F=()=>Promise.all([n.e(0),n.e(2),n.e(1),n.e(6),n.e(7),n.e(3),n.e(8)]).then(n.bind(null,"9Rxa")).then(t=>t.FormConstructorModuleNgFactory),g=()=>Promise.all([n.e(0),n.e(2),n.e(1),n.e(6),n.e(7),n.e(3),n.e(8)]).then(n.bind(null,"9Rxa")).then(t=>t.FormConstructorModuleNgFactory),y=()=>Promise.all([n.e(0),n.e(2),n.e(6),n.e(19)]).then(n.bind(null,"aVqw")).then(t=>t.OnlineFormModuleNgFactory),b=()=>Promise.all([n.e(5),n.e(9),n.e(18)]).then(n.bind(null,"FH2R")).then(t=>t.FormInfoModuleNgFactory);class C{}n.d(e,"DataCollectionModuleNgFactory",function(){return O});var O=o["\u0275cmf"](r,[],function(t){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[l.a,c]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[o.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,h.a,h.a,[m.c]),o["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),o["\u0275mpd"](1073742336,a.p,a.p,[[2,a.u],[2,a.l]]),o["\u0275mpd"](1073742336,C,C,[]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](1024,a.j,function(){return[[{path:"",component:i.a,children:[{path:"",children:[{path:"",loadChildren:f}]},{path:"v-form-constructor",children:[{path:"",loadChildren:F}]},{path:"v-form-constructor/:id",children:[{path:"",loadChildren:g}]},{path:"online-form/:id",children:[{path:"",loadChildren:y}]},{path:"form-info/:id",children:[{path:"",loadChildren:b}]}]}]]},[])])})}}]);