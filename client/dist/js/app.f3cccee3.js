(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2b62":function(e,t){var n={apiKey:"AIzaSyAWBwmQrm7j--gu4smUcxgdhxC0may5Oj0",authDomain:"tic-tac-toe-70f1a.firebaseapp.com",projectId:"tic-tac-toe-70f1a",storageBucket:"tic-tac-toe-70f1a.appspot.com",messagingSenderId:"704274868087",appId:"1:704274868087:web:d7d4e7b8f652378116a372",measurementId:"G-S72L2271GQ"},r={players:2};e.exports={defaultGameOptions:r,firebaseConfig:n}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._v("123123")])},a=[],c=n("5530"),i=n("2f62"),u={name:"App",components:{},computed:Object(c["a"])({},Object(i["b"])(["getUser"])),mounted:function(){console.log(this.$router,"getUser")}},s=u,l=(n("034f"),n("2877")),f=Object(l["a"])(s,o,a,!1,null,null,null),p=f.exports;r["a"].use(i["a"]);var d=new i["a"].Store({state:{user:""},getters:{getUser:function(e){return e.user}},mutations:{},actions:{}}),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.title))]),n("div",{staticClass:"field"},e._l(e.field,(function(t){return n("div",{key:t.number,staticClass:"item",style:"width:calc((100% / "+e.count+") - 10px); \n      height:calc((100% / "+e.count+") - 10px)",on:{click:function(n){return e.selectItem(t)},mouseover:function(e){t.hover="w"},mouseleave:function(e){t.hover=""}}},[e._v(" "+e._s(t.value)+" "),""===t.value?n("p",[e._v(e._s(t.hover))]):e._e()])})),0)])},v=[],m=(n("a9e3"),{name:"Auth",props:{count:Number},data:function(){return{field:[],title:""}},mounted:function(){for(var e=0,t=0;t<this.count;t++)for(var n=0;n<this.count;n++)this.field.push({number:e,value:"",hover:"",cord:[t,n]}),e++},methods:{selectItem:function(e){""===this.title&&(e.value="†"),this.checkWin(e.value)},checkWin:function(e){var t=0;if(""===this.title)for(var n=0;n<=this.field.length;n++){if(3===t)return this.title="Победа ".concat(e);this.field[n].value===e&&t++}}}}),b=m,g=(n("aba9"),Object(l["a"])(b,h,v,!1,null,null,null)),w=g.exports,y=n("8c4f"),x=n("747b");r["a"].config.productionTip=!1;var O=[{path:"/auth",component:w}],_=new y["a"]({routes:O});Object(x["initFirebase"])(),Object(x["addDoc"])("users",{name:"Rostik"}),new r["a"]({store:d,router:_,render:function(e){return e(p)}}).$mount("#app")},"747b":function(e,t,n){var r=n("c973").default;n("96cf");var o=n("4b38"),a=o.initializeApp,c=n("10b8"),i=c.doc,u=c.getFirestore,s=c.collection,l=c.setDoc,f=c.addDoc,p=c.getDoc,d=(c.query,c.where,n("2b62")),h=d.firebaseConfig,v=function(){console.log("initFirebase");a(h)},m=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=u(),e.prev=1,e.next=4,f(s(r,t),n);case 4:o=e.sent,console.log("Document written with ID: ",o.id),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error("Error adding document: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=u(),o=i(r,t,n),e.next=4,p(o);case 4:if(a=e.sent,!a.exists()){e.next=10;break}return console.log("Document data:",a.data()),e.abrupt("return",a.data());case 10:console.log("No such document!");case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=r(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=u(),e.next=3,l(i(o,t,n),r);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();e.exports={getDoc:b,addDoc:m,setDoc:g,initFirebase:v}},"85ec":function(e,t,n){},ab4e:function(e,t,n){},aba9:function(e,t,n){"use strict";n("ab4e")}});
//# sourceMappingURL=app.f3cccee3.js.map