(function(e){function t(t){for(var o,c,s=t[0],u=t[1],i=t[2],f=0,m=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},2625:function(e,t,n){"use strict";n("b58e")},"2b62":function(e,t){var n={apiKey:"AIzaSyAWBwmQrm7j--gu4smUcxgdhxC0may5Oj0",authDomain:"tic-tac-toe-70f1a.firebaseapp.com",projectId:"tic-tac-toe-70f1a",storageBucket:"tic-tac-toe-70f1a.appspot.com",messagingSenderId:"704274868087",appId:"1:704274868087:web:d7d4e7b8f652378116a372",measurementId:"G-S72L2271GQ"},o={players:2};e.exports={defaultGameOptions:o,firebaseConfig:n}},"2bfb":function(e,t,n){},5265:function(e,t,n){"use strict";n("ed75")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Lobby")],1)},a=[],c=n("5530"),s=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("div",{staticClass:"content"},[n("Rooms"),n("RoomInfo")],1)],1)},i=[],l=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h1",[e._v(e._s(e.getUser.login))])])}),f=[],m={name:"Header",props:{},computed:Object(c["a"])({},Object(s["b"])(["getUser"])),data:function(){return{}},mounted:function(){},methods:{}},p=m,d=(n("8baf"),n("2877")),b=Object(d["a"])(p,l,f,!1,null,null,null),h=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room-info"})},v=[],w={name:"Header",props:{},data:function(){return{}},mounted:function(){},methods:{}},R=w,j=(n("5265"),Object(d["a"])(R,g,v,!1,null,null,null)),O=j.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rooms"},[n("button",{on:{click:e.createRoom}},[e._v("Создать комнату")]),e._l(e.getRooms,(function(e,t){return n("Room",{key:t,attrs:{data:e}})}))],2)},y=[],_=n("1da1"),k=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room"},[n("p",[e._v("name")]),n("b",[e._v(e._s(e.data.name))])])}),S=[],U={name:"Header",props:{data:{}},data:function(){return{}},mounted:function(){},methods:{}},I=U,A=(n("2625"),Object(d["a"])(I,k,S,!1,null,null,null)),D=A.exports,$={name:"Header",components:{Room:D},computed:Object(c["a"])({},Object(s["b"])(["getRooms"])),watch:{getRooms:function(e){console.log(e,"data"),this.rooms=e}},props:{},data:function(){return{rooms:[]}},beforeMount:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getAllRooms");case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.rooms,"rooms");case 1:case"end":return t.stop()}}),t)})))()},methods:{createRoom:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("join"),t.next=3,e.$store.dispatch("createUserRooms");case 3:return t.next=5,e.$store.dispatch("getAllRooms");case 5:case"end":return t.stop()}}),t)})))()}}},C=$,E=(n("e560"),Object(d["a"])(C,x,y,!1,null,null,null)),P=E.exports,H={name:"Lobby",components:{Header:h,RoomInfo:O,Rooms:P},props:{count:Number},data:function(){return{field:[],title:""}},mounted:function(){},methods:{}},L=H,M=(n("faf3"),Object(d["a"])(L,u,i,!1,null,null,null)),F=M.exports,q=n("ea7b"),G=n("747b");Object(G["initFirebase"])(),console.log("l kjln");var T=function(){var e=Object(q["a"])();console.log("createUser"),Object(q["c"])(e).then((function(){})).catch((function(e){e.code,e.message;console.log(e,"error")}))},z=function(e){console.log("checkAuthState");var t=Object(q["a"])();Object(q["b"])(t,(function(t){if(console.log("onAuthStateChanged"),t){var n=t.uid,o={user:e,id:n};Object(G["addDoc"])("users",o),localStorage.setItem("login",e),localStorage.setItem("id",n)}}))},B={name:"App",components:{Lobby:F},computed:Object(c["a"])({},Object(s["b"])(["getUser"])),methods:{getterUser:function(){var e=localStorage.getItem("login");null===e&&(T(),z("qwe"));var t={login:localStorage.getItem("login"),id:localStorage.getItem("id")};this.$store.commit("setUser",t)}},beforeMount:function(){this.getterUser()},mounted:function(){}},J=B,N=(n("034f"),Object(d["a"])(J,r,a,!1,null,null,null)),Q=N.exports,K=n("bc3a"),W=n.n(K),V=W.a.create({baseURL:"https://tic-tac-toe-1337.herokuapp.com/",timeout:1e3,headers:{"Access-Control-Allow-Origin":"*"}});V.interceptors.request.use((function(e){return e.headers.post["header1"]="value",e}));var X=V;o["a"].use(s["a"]);var Y=new s["a"].Store({state:{user:{name:"",id:""},rooms:[],userRoom:{}},getters:{getUser:function(e){return e.user},getRooms:function(e){return e.rooms}},mutations:{setUser:function(e,t){e.user=t},setRooms:function(e,t){e.rooms=t},setUserRoom:function(e,t){e.userRoom=t}},actions:{getAllRooms:function(e){var t=e.commit;X.get("https://tic-tac-toe-1337.herokuapp.com/rooms/list").then((function(e){t("setRooms",e.data)}))},createUserRooms:function(e){var t=e.commit;console.log(this.state.user.id,"axios id"),X.post("https://tic-tac-toe-1337.herokuapp.com/rooms/create",null,{headers:{userId:this.state.user.id||1}}).then((function(e){console.log(e,"response"),t("setUserRoom",e.data)}))}}}),Z=n("8c4f");o["a"].use(Z["a"]);var ee=[{path:"/lobby",name:"Lobby",component:F}],te=new Z["a"]({base:"/",routes:ee}),ne=te;o["a"].config.productionTip=!1,new o["a"]({router:ne,store:Y,render:function(e){return e(Q)}}).$mount("#app")},6860:function(e,t,n){},"747b":function(e,t,n){var o=n("c973").default;n("96cf");var r=n("4b38"),a=r.initializeApp,c=n("10b8"),s=c.getFirestore,u=c.collection,i=c.setDoc,l=c.addDoc,f=c.getDoc,m=(c.query,c.where,n("2b62")),p=m.firebaseConfig,d=function(){console.log("initFirebase");a(p);console.log("initFirebase 123")},b=function(){var e=o(regeneratorRuntime.mark((function e(t,n){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=s(),e.prev=1,e.next=4,l(u(o,t),n);case 4:r=e.sent,console.log("Document written with ID: ",r.id),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error("Error adding document: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=o(regeneratorRuntime.mark((function e(t,n){var o,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=s(),r=doc(o,u,n),e.next=4,f(r);case 4:if(a=e.sent,!a.exists()){e.next=10;break}return console.log("Document data:",a.data()),e.abrupt("return",a.data());case 10:console.log("No such document!");case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=o(regeneratorRuntime.mark((function e(t,n,o){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=s(),e.next=3,i(doc(r,t,n),o);case 3:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}();e.exports={getDoc:h,addDoc:b,setDoc:g,initFirebase:d}},"85ec":function(e,t,n){},"8baf":function(e,t,n){"use strict";n("6860")},b58e:function(e,t,n){},e304:function(e,t,n){},e560:function(e,t,n){"use strict";n("2bfb")},ed75:function(e,t,n){},faf3:function(e,t,n){"use strict";n("e304")}});
//# sourceMappingURL=app.69be76a3.js.map