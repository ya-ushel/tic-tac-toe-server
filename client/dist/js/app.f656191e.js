(function(e){function t(t){for(var r,i,c=t[0],a=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);s&&s(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=a;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}})},u=[],i=n("5530"),c=n("2f62"),a={name:"App",components:{},computed:Object(i["a"])({},Object(c["b"])(["getUser"])),mounted:function(){console.log(this.$router,"getUser")}},l=a,s=(n("034f"),n("2877")),f=Object(s["a"])(l,o,u,!1,null,null,null),p=f.exports;r["a"].use(c["a"]);var h=new c["a"].Store({state:{user:""},getters:{getUser:function(e){return e.user}},mutations:{},actions:{}}),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.title))]),n("div",{staticClass:"field"},e._l(e.field,(function(t){return n("div",{key:t.number,staticClass:"item",style:"width:calc((100% / "+e.count+") - 10px); \n      height:calc((100% / "+e.count+") - 10px)",on:{click:function(n){return e.selectItem(t)},mouseover:function(e){t.hover="w"},mouseleave:function(e){t.hover=""}}},[e._v(" "+e._s(t.value)+" "),""===t.value?n("p",[e._v(e._s(t.hover))]):e._e()])})),0)])},d=[],b=(n("a9e3"),{name:"Auth",props:{count:Number},data:function(){return{field:[],title:""}},mounted:function(){for(var e=0,t=0;t<this.count;t++)for(var n=0;n<this.count;n++)this.field.push({number:e,value:"",hover:"",cord:[t,n]}),e++},methods:{selectItem:function(e){""===this.title&&(e.value="†"),this.checkWin(e.value)},checkWin:function(e){var t=0;if(""===this.title)for(var n=0;n<=this.field.length;n++){if(3===t)return this.title="Победа ".concat(e);this.field[n].value===e&&t++}}}}),m=b,g=(n("aba9"),Object(s["a"])(m,v,d,!1,null,null,null)),y=g.exports,_=n("8c4f");r["a"].config.productionTip=!1;var w=[{path:"/auth",component:y}],O=new _["a"]({routes:w});new r["a"]({store:h,router:O,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){},ab4e:function(e,t,n){},aba9:function(e,t,n){"use strict";n("ab4e")}});
//# sourceMappingURL=app.f656191e.js.map