(self.webpackChunkion_tk_social_network=self.webpackChunkion_tk_social_network||[]).push([[7801],{37801:function(n,i,t){"use strict";t.r(i),t.d(i,{AuthPinPageModule:function(){return _}});var o=t(61116),e=t(75425),a=t(39238),r=t(64762),s=t(19389),c=t(33316),l=t(74249),g=t(85649);function p(n,i){if(1&n&&c._UZ(0,"ion-icon",11),2&n){const n=i.index,t=c.oxw();c.Q6J("name",void 0!==t.pin[n]?"ellipse":"ellipse-outline")("color",void 0!==t.pin[n]?"primary":"dark")}}function f(n,i){1&n&&(c.TgZ(0,"ion-button",12),c._UZ(1,"ion-icon",13),c.qZA())}function d(n,i){1&n&&c.GkF(0)}function m(n,i){1&n&&(c.TgZ(0,"ion-button",19),c._UZ(1,"ion-icon",13),c.qZA())}function u(n,i){if(1&n&&(c.ynx(0),c.YNc(1,m,2,0,"ion-button",18),c.BQk()),2&n){const n=c.oxw(2);c.xp6(1),c.Q6J("ngIf",n.fingerPrintAvailable)}}function h(n,i){if(1&n){const n=c.EpF();c.ynx(0),c.TgZ(1,"ion-button",20),c.NdJ("click",function(){return c.CHM(n),c.oxw(2).passwordClear()}),c._UZ(2,"ion-icon",21),c.qZA(),c.BQk()}}function x(n,i){if(1&n){const n=c.EpF();c.ynx(0),c.TgZ(1,"ion-button",22),c.NdJ("click",function(){c.CHM(n);const i=c.oxw().$implicit;return c.oxw().passwordClick(i)}),c.TgZ(2,"ion-text",23),c._uU(3),c.qZA(),c.qZA(),c.BQk()}if(2&n){const n=c.oxw().$implicit;c.xp6(3),c.hij(" ",n.pin," ")}}function w(n,i){if(1&n&&(c.TgZ(0,"ion-col",14),c.ynx(1,15),c.YNc(2,d,1,0,"ng-container",16),c.YNc(3,u,2,1,"ng-container",16),c.YNc(4,h,3,0,"ng-container",16),c.YNc(5,x,4,1,"ng-container",17),c.BQk(),c.qZA()),2&n){const n=i.$implicit;c.xp6(1),c.Q6J("ngSwitch",n.area),c.xp6(1),c.Q6J("ngSwitchCase",!1),c.xp6(1),c.Q6J("ngSwitchCase","finger"),c.xp6(1),c.Q6J("ngSwitchCase","backspace")}}const b=function(){return{app_name:"Tk"}},Z=[{path:"",component:(()=>{class n{constructor(){this.pinLength=6,this.pinRange=Array(this.pinLength).fill(void 0),this.pin=[],this.fingerPrintAvailable=!0,this.digits=[{area:"number",pin:1},{area:"number",pin:2},{area:"number",pin:3},{area:"number",pin:4},{area:"number",pin:5},{area:"number",pin:6},{area:"number",pin:7},{area:"number",pin:8},{area:"number",pin:9},{area:!1},{area:"number",pin:0},{area:"backspace"},{area:!1},{area:"finger"},{area:!1}]}passwordClick(n){return(0,r.mG)(this,void 0,void 0,function*(){var i;this.pin.length>this.pinLength||(this.pin.push(n.pin),this.pin.length===this.pinLength&&(yield(i=document.getElementById("shake-animation"),(0,s.ih)().addElement(i).easing("ease-out").duration(800).keyframes([{offset:0,transform:"translate(0, 0)"},{offset:.1,transform:"translate(-25px, 0)"},{offset:.2,transform:"translate(25px, 0)"},{offset:.3,transform:"translate(-20px, 0)"},{offset:.4,transform:"translate(20px, 0)"},{offset:.5,transform:"translate(-10px, 0)"},{offset:.6,transform:"translate(10px, 0)"},{offset:.7,transform:"translate(-5px, 0)"},{offset:.8,transform:"translate(5px, 0)"},{offset:1,transform:"translate(0, 0)"}])).play(),this.pin=[]))})}passwordClear(){this.pin.pop()}fingerPrintActivate(){console.log("fingerPrintActivate")}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-auth-pin"]],decls:16,vars:8,consts:[[1,"ion-no-padding"],[1,"ion-justify-content-center"],["size","12","size-sm","6","size-lg","12",1,"ion-align-self-center","ion-text-center"],["name","lock-closed","color","dark","size","large"],["color","dark"],["id","shake-animation"],["class","ion-margin-end",3,"name","color",4,"ngFor","ngForOf"],["color","medium","fill","clear","class","finger-print-button showsm-hidelg",4,"ngIf"],["size","12","size-sm","6","size-lg","12",1,"ion-no-margin","ion-no-padding","digit-coll-position"],[1,"digit-max-width"],["size","4","class","ion-align-self-center ion-text-center",4,"ngFor","ngForOf"],[1,"ion-margin-end",3,"name","color"],["color","medium","fill","clear",1,"finger-print-button","showsm-hidelg"],["slot","icon-only","name","finger-print-outline"],["size","4",1,"ion-align-self-center","ion-text-center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["color","medium","fill","clear","class","finger-print-button hidesm-showlg",4,"ngIf"],["color","medium","fill","clear",1,"finger-print-button","hidesm-showlg"],["color","medium","fill","clear",1,"clear-button",3,"click"],["slot","icon-only","name","backspace-outline"],["color","light",1,"digit-button",3,"click"],[2,"font-size","22px"]],template:function(n,i){1&n&&(c.TgZ(0,"ion-content"),c.TgZ(1,"ion-grid",0),c.TgZ(2,"ion-row",1),c.TgZ(3,"ion-col",2),c.TgZ(4,"p"),c._UZ(5,"ion-icon",3),c.qZA(),c.TgZ(6,"p"),c.TgZ(7,"ion-text",4),c._uU(8),c.ALo(9,"translate"),c.qZA(),c.qZA(),c.TgZ(10,"div",5),c.YNc(11,p,1,2,"ion-icon",6),c.qZA(),c.YNc(12,f,2,0,"ion-button",7),c.qZA(),c.TgZ(13,"ion-col",8),c.TgZ(14,"ion-row",9),c.YNc(15,w,6,4,"ion-col",10),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(8),c.hij(" ",c.xi3(9,4,"authPin",c.DdM(7,b))," "),c.xp6(3),c.Q6J("ngForOf",i.pinRange),c.xp6(1),c.Q6J("ngIf",i.fingerPrintAvailable),c.xp6(3),c.Q6J("ngForOf",i.digits))},directives:[l.W2,l.jY,l.Nd,l.wI,l.gu,l.yW,o.sg,o.O5,l.YG,o.RF,o.n9,o.ED],pipes:[g.X$],styles:["ion-grid[_ngcontent-%COMP%]{width:100%}ion-grid[_ngcontent-%COMP%], ion-row[_ngcontent-%COMP%]{height:100%}.digit-max-width[_ngcontent-%COMP%]{max-width:320px;margin:auto}@media (min-width:992px){.digit-max-width[_ngcontent-%COMP%]{max-width:576px!important}}.digit-button[_ngcontent-%COMP%]{--box-shadow:none}.clear-button[_ngcontent-%COMP%], .digit-button[_ngcontent-%COMP%], .finger-print-button[_ngcontent-%COMP%]{width:70px;height:70px;--border-radius:64px}.digit-coll-position[_ngcontent-%COMP%]{align-self:flex-end}@media (min-width:576px){.digit-coll-position[_ngcontent-%COMP%]{align-self:center!important}}.hidesm-showlg[_ngcontent-%COMP%]{display:inline-block}@media (min-width:576px) and (max-width:992px){.hidesm-showlg[_ngcontent-%COMP%]{display:none!important}}.showsm-hidelg[_ngcontent-%COMP%]{display:none}@media (min-width:576px) and (max-width:992px){.showsm-hidelg[_ngcontent-%COMP%]{display:inline-block!important}}"]}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[a.Bz.forChild(Z)],a.Bz]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,k,e.m]]}),n})()}}]);