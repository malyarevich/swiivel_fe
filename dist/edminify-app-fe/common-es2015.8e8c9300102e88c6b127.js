(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{VzjM:function(n,e,l){"use strict";var t=l("8Y7J"),s=l("SVse");l("s7LF"),l("aevd"),l.d(e,"a",function(){return o}),l.d(e,"b",function(){return a});var o=t["\u0275crt"]({encapsulation:0,styles:[['.app-shared-switch[_ngcontent-%COMP%]{position:relative;display:inline-block;top:.8em;width:30px;height:17px}.app-shared-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.app-shared-slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.app-shared-slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:13px;width:13px;left:2px;bottom:2px;background-color:#fff;transition:.4s}input[_ngcontent-%COMP%]:checked + .app-shared-slider[_ngcontent-%COMP%]{background-color:#4350a2}input[_ngcontent-%COMP%]:focus + .app-shared-slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #4350a2}input[_ngcontent-%COMP%]:checked + .app-shared-slider[_ngcontent-%COMP%]:before{transform:translateX(13px)}.app-shared-slider.app-shared-round[_ngcontent-%COMP%]{border-radius:34px}.app-shared-slider.app-shared-round[_ngcontent-%COMP%]:before{border-radius:50%}.app-toggle-label[_ngcontent-%COMP%]{white-space:nowrap}']],data:{}});function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[],null,null,null,null,null)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](2,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](3,{"app-checkbox-field-has-error":0}),(n()(),t["\u0275eld"](4,0,null,null,4,"label",[["class","app-shared-switch"]],null,[[null,"[for]"]],function(n,e,l){var t=!0;return"[for]"===e&&(t=!1!==n.component.id&&t),t},null,null)),(n()(),t["\u0275eld"](5,0,null,null,1,"span",[["class","pl-5 app-toggle-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](6,null,["",""])),(n()(),t["\u0275eld"](7,0,null,null,0,"input",[["type","checkbox"]],[[8,"value",0],[8,"checked",0],[8,"disabled",0]],[[null,"[id]"],[null,"click"]],function(n,e,l){var t=!0,s=n.component;return"[id]"===e&&(t=!1!==s.id&&t),"click"===e&&(t=!1!==s.toggleCheckbox()&&t),t},null,null)),(n()(),t["\u0275eld"](8,0,null,null,0,"span",[["class","app-shared-slider app-shared-round"]],null,null,null,null,null))],function(n,e){var l=n(e,3,0,e.component.isInvalid);n(e,2,0,l)},function(n,e){var l=e.component;n(e,6,0,l.label),n(e,7,0,l.isSelected,l.isSelected,l.disabled)})}},aevd:function(n,e,l){"use strict";l.d(e,"a",function(){return t});class t{constructor(){this.label="",this.isInvalid=!1,this.onChange=n=>{},this.onTouched=()=>{}}ngOnInit(){}writeValue(n){this.isSelected=n}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n}toggleCheckbox(){this.disabled||(this.isSelected=!this.isSelected,this.onChange(this.isSelected))}}}}]);