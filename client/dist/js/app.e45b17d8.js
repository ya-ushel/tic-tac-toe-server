(function(e){function t(t){for(var r,a,c=t[0],i=t[1],u=t[2],m=0,d=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01bc":function(e,t,n){"use strict";n("02a0")},"02a0":function(e,t,n){},"034f":function(e,t,n){"use strict";n("85ec")},"0f0c":function(e,t,n){},1:function(e,t){},1282:function(e,t,n){},2743:function(e,t,n){},"2b62":function(e,t){var n={apiKey:"AIzaSyAWBwmQrm7j--gu4smUcxgdhxC0may5Oj0",authDomain:"tic-tac-toe-70f1a.firebaseapp.com",projectId:"tic-tac-toe-70f1a",storageBucket:"tic-tac-toe-70f1a.appspot.com",messagingSenderId:"704274868087",appId:"1:704274868087:web:d7d4e7b8f652378116a372",measurementId:"G-S72L2271GQ"},r={players:2};e.exports={defaultGameOptions:r,firebaseConfig:n}},"39f4":function(e,t,n){},"3dc7":function(e,t,n){},5450:function(e,t,n){},5624:function(e,t,n){"use strict";n("79a5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a=n("5530"),c=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("div",{staticClass:"content"},[n("UserList"),n("Rooms"),n("RoomInfo")],1)],1)},u=[],l=(n("a9e3"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:n("aca7"),alt:""}})])])}],d={name:"Header",props:{},computed:Object(a["a"])({},Object(c["b"])(["getUser"])),data:function(){return{}},mounted:function(){console.log(this.getUser,"getUser")},methods:{}},f=d,p=(n("8baf"),n("2877")),v=Object(p["a"])(f,l,m,!1,null,null,null),h=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room-info"},[n("h3",[e._v("Select room")]),e.getUserRoom?n("div",{staticClass:"select-room"},[n("div",{staticClass:"select-room-header"},[e._v(e._s(e.getUserRoom.name))]),n("div",{staticClass:"select-room-content"},[n("h5",[e._v(e._s(e.getUserRoom.id))]),n("h3",[e._v("Player list")]),e._l(e.getUserRoom.playerList,(function(t,r){return n("div",{key:r,staticClass:"player-list"},[n("b",[e._v(e._s(r+1))]),n("p",[e._v(e._s(t))])])})),n("div",{staticClass:"button-wrap"},[e.userInRoom?n("button",{staticClass:"leave-btn",on:{click:e.leaveRoom}},[e._v("Leave")]):n("button",{staticClass:"join-btn",on:{click:e.joinRoom}},[e._v(" Join ")]),n("button",{staticClass:"start-btn",on:{click:e.startGame}},[e._v("Start")])])],2)]):e._e(),n("ActiveRoom")],1)},b=[],R=n("1da1"),_=(n("96cf"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room-active"},[n("h3",[e._v("Wait players")]),e.getUserRoom?n("div",{staticClass:"active-room"},[n("div",{staticClass:"active-room-header"},[e._v(e._s(e.getUserRoom.name))]),n("div",{staticClass:"active-room-content"},e._l(10,(function(t,r){return n("div",{key:r,staticClass:"circle",class:{is:r<e.getUserRoom.playerList.length}})})),0)]):e._e()])}),w=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rooms"},[n("h3",[e._v("Rooms list")]),e._m(0),n("div",{staticClass:"rooms-container"},[n("div",{staticClass:"scroll"},e._l(e.getRooms,(function(e,t){return n("Room",{key:t,attrs:{index:t,data:e}})})),1)]),n("CreateRoom")],1)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-string"},[n("div",{staticClass:"header-string-number"}),n("div",{staticClass:"header-string-name"},[e._v("Name")]),n("div",{staticClass:"header-string-players"},[e._v("Count players")]),n("div",{staticClass:"header-string-size"},[e._v("Size field")]),n("div",{staticClass:"header-string-lock"})])}],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"room-wrap"},[n("div",{staticClass:"room",on:{click:e.selectRoom}},[n("div",{staticClass:"room-number"},[e._v(e._s(e.index))]),n("div",{staticClass:"room-name"},[e._v(e._s(e.data.name))]),n("div",{staticClass:"room-players"},[e._v(e._s(e.data.playerList.length))]),n("div",{staticClass:"room-size"},[e._v(e._s(e.data.index))]),n("div",{staticClass:"room-lock"},[e._v(e._s(e.data.index))])]),e.getUserRoom.id===e.data.id?n("div",{staticClass:"right-arrow"}):e._e()])},C=[],x={computed:Object(a["a"])({},Object(c["b"])(["getUserRoom"])),name:"Room",props:{data:{},index:0},data:function(){return{}},mounted:function(){},methods:{selectRoom:function(e){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("setUserRoom",t.data);case 2:case"end":return e.stop()}}),e)})))()}}},U=x,k=(n("6880"),Object(p["a"])(U,y,C,!1,null,null,null)),S=k.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"create-room"},[n("h3",[e._v("Create room")]),n("label",{attrs:{for:"room-name"}}),n("input",{staticClass:"room-name-input",attrs:{placeholder:"Room name",name:"room-name",type:"text"}}),n("div",{staticClass:"select-wrap"},[n("div",{staticClass:"select-count"},[n("label",{attrs:{for:"select-count"}},[e._v("Count player")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectCoun,expression:"selectCoun"}],attrs:{name:"select-count"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectCoun=t.target.multiple?n:n[0]}}},e._l(e.countPlayers,(function(t,r){return n("option",{key:r},[e._v(e._s(t))])})),0)]),n("div",{staticClass:"select-size"},[n("label",{attrs:{for:"select-size"}},[e._v("Size field")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectSize,expression:"selectSize"}],attrs:{name:"select-size"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectSize=t.target.multiple?n:n[0]}}},e._l(e.sizeField,(function(t,r){return n("option",{key:r},[e._v(e._s(t+"x"+t))])})),0)]),n("div",{staticClass:"select-time"},[n("label",{attrs:{for:"select-time"}},[e._v("Time round")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectTime,expression:"selectTime"}],attrs:{name:"select-time"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectTime=t.target.multiple?n:n[0]}}},e._l(e.timeRound,(function(t,r){return n("option",{key:r},[e._v(e._s(t+"sec"))])})),0)])]),n("button",[e._v("Create room")])])},I=[],E={name:"CreateRoom",props:{},computed:Object(a["a"])({},Object(c["b"])(["getUser"])),data:function(){return{selectCoun:null,countPlayers:[5,6,7,8,9],selectSize:null,sizeField:[5,6,7,8,9],selectTime:null,timeRound:[5,10,20,30,60]}},mounted:function(){console.log(this.getUser,"getUser")},methods:{}},A=E,L=(n("5624"),Object(p["a"])(A,$,I,!1,null,null,null)),z=L.exports,G={name:"Rooms",components:{Room:S,CreateRoom:z},computed:Object(a["a"])({},Object(c["b"])(["getRooms"])),props:{},data:function(){return{}},beforeMount:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getAllRooms");case 2:case"end":return t.stop()}}),t)})))()},methods:{createRoom:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("createUserRooms");case 2:return t.next=4,e.$store.dispatch("getAllRooms");case 4:case"end":return t.stop()}}),t)})))()}}},P=G,B=(n("5ffb"),Object(p["a"])(P,j,O,!1,null,null,null)),T=B.exports,F={name:"RoomInfo",props:{},components:{ActiveRoom:T},computed:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["getUserRoom","getUser"])),{},{isUser:function(){}}),watch:{getUserRoom:function(e){var t,n=this;null===e||void 0===e||null===(t=e.playerList)||void 0===t||t.forEach((function(e){e!==n.getUser.id?n.userInRoom=!1:n.userInRoom=!0}))}},data:function(){return{userInRoom:!1}},mounted:function(){},methods:{joinRoom:function(){return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},leaveRoom:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userInRoom=!0,t.next=3,e.$store.dispatch("leaveUserRooms");case 3:return t.next=5,e.$store.dispatch("getAllRooms");case 5:case"end":return t.stop()}}),t)})))()}}},D=F,M=(n("01bc"),Object(p["a"])(D,_,w,!1,null,null,null)),N=M.exports,H={name:"RoomInfo",props:{},components:{ActiveRoom:N},computed:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["getUserRoom","getUser"])),{},{isUser:function(){}}),watch:{getUserRoom:function(e){var t,n=this;null===e||void 0===e||null===(t=e.playerList)||void 0===t||t.forEach((function(e){e!==n.getUser.id?n.userInRoom=!1:n.userInRoom=!0}))}},data:function(){return{userInRoom:!1}},mounted:function(){},methods:{joinRoom:function(){return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},startGame:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.commit("setGameState",!0);case 2:e.$router.push({name:"Board"}).catch((function(e){}));case 3:case"end":return t.stop()}}),t)})))()},leaveRoom:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userInRoom=!0,t.next=3,e.$store.dispatch("leaveUserRooms");case 3:return t.next=5,e.$store.dispatch("getAllRooms");case 5:case"end":return t.stop()}}),t)})))()}}},K=H,q=(n("ed7a"),Object(p["a"])(K,g,b,!1,null,null,null)),J=q.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-list"},[n("h3",[e._v("User list")]),n("div",{staticClass:"user-list-wrap"},[n("div",{staticClass:"scroll"},e._l(100,(function(t,r){return n("div",{key:r,staticClass:"user"},[e._v(e._s(r))])})),0)]),n("Settings")],1)},V=[],W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settings"},[n("h3",[e._v("Settings")])])}],Y={name:"Settings",computed:Object(a["a"])({},Object(c["b"])(["getRooms"])),props:{},data:function(){return{}},beforeMount:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getAllRooms");case 2:case"end":return t.stop()}}),t)})))()},methods:{createRoom:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("createUserRooms");case 2:return t.next=4,e.$store.dispatch("getAllRooms");case 4:case"end":return t.stop()}}),t)})))()}}},Z=Y,ee=(n("bf94"),Object(p["a"])(Z,W,X,!1,null,null,null)),te=ee.exports,ne={name:"UserList",props:{},components:{Settings:te},computed:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["getUsers"])),{},{isUser:function(){}}),watch:{},data:function(){return{userInRoom:!1}},beforeMount:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getAllUsers");case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{joinRoom:function(){return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},leaveRoom:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userInRoom=!0,t.next=3,e.$store.dispatch("leaveUserRooms");case 3:return t.next=5,e.$store.dispatch("getAllRooms");case 5:case"end":return t.stop()}}),t)})))()}}},re=ne,oe=(n("775d"),Object(p["a"])(re,Q,V,!1,null,null,null)),se=oe.exports,ae={name:"Lobby",components:{Header:h,RoomInfo:J,Rooms:T,UserList:se},props:{count:Number},data:function(){return{field:[],title:""}},mounted:function(){},methods:{}},ce=ae,ie=(n("faf3"),Object(p["a"])(ce,i,u,!1,null,null,null)),ue=ie.exports,le=n("ea7b"),me=(n("5705"),n("10b8"),n("4b38")),de=me.initializeApp,fe=n("10b8"),pe=fe.getFirestore,ve=fe.collection,he=(fe.setDoc,fe.addDoc),ge=(fe.getDoc,fe.query,fe.where,fe.doc,n("2b62")),be=ge.firebaseConfig,Re=null,_e=function(){console.log("initFirebase"),Re=de(be)},we=function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=pe(),e.prev=1,e.next=4,he(ve(r,t),n);case 4:return o=e.sent,console.log("Document written with ID: ",o.id),e.abrupt("return",o.id);case 9:e.prev=9,e.t0=e["catch"](1),console.error("Error adding document: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),je=function(){var e=Object(le["a"])(Re);Object(le["c"])(e).then((function(){})).catch((function(e){e.code,e.message;console.log(e,"error")}))},Oe=function(e){console.log("checkAuthState");var t=Object(le["a"])(Re);Object(le["b"])(t,(function(t){if(console.log("onAuthStateChanged"),t){var n=t.uid,r={user:e,id:n};we("users",r),localStorage.setItem("login",e),localStorage.setItem("id",n)}}))},ye={name:"App",components:{Lobby:ue},computed:Object(a["a"])({},Object(c["b"])(["getUser","getStateGame"])),methods:{getterUser:function(){var e=localStorage.getItem("login");null===e&&(je(),Oe("qwe"));var t={login:localStorage.getItem("login"),id:localStorage.getItem("id")};this.$store.commit("setUser",t)}},sockets:{connect:function(){console.log("socket connected")},customEmit:function(e){console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')}},mounted:function(){this.getterUser(),this.getStateGame?this.$router.push({name:"Board"}).catch((function(e){})):this.$router.push({name:"Lobby"}).catch((function(e){}))}},Ce=ye,xe=(n("034f"),Object(p["a"])(Ce,o,s,!1,null,null,null)),Ue=xe.exports,ke=n("bc3a"),Se=n.n(ke),$e=Se.a.create({baseURL:"https://tic-tac-toe-1337.herokuapp.com/",timeout:1e3,headers:{"Access-Control-Allow-Origin":"*"}});$e.interceptors.request.use((function(e){return e.headers.post["header1"]="value",e}));var Ie=$e;r["a"].use(c["a"]);var Ee={state:{user:{name:"",id:""},users:[]},getters:{getUser:function(e){return console.log(e,"dljnashkjdhbajln"),e.user},getUsers:function(e){return e.users}},mutations:{setUser:function(e,t){e.user=t},setUsers:function(e,t){e.users=t}},actions:{getAllUsers:function(e){e.commit}}};r["a"].use(c["a"]);var Ae={state:{rooms:[],userRoom:null},getters:{getRooms:function(e){return e.rooms},getUserRoom:function(e){return e.userRoom}},mutations:{setRooms:function(e,t){e.rooms=t},setUserRoom:function(e,t){e.userRoom=t}},actions:{getAllRooms:function(e){var t=this,n=e.commit;Ie.get("https://tic-tac-toe-1337.herokuapp.com/rooms/list").then((function(e){n("setRooms",e.data),e.data.forEach((function(e){e.playerList.forEach((function(r){r===t.state.user.user.id&&n("setUserRoom",e)}))}))}))},createUserRooms:function(e){e.commit;Ie.post("https://tic-tac-toe-1337.herokuapp.com/rooms/create",null,{headers:{userId:this.state.user.user.id}}).then((function(e){}))},leaveUserRooms:function(e){var t=e.commit;Ie.post("https://tic-tac-toe-1337.herokuapp.com/rooms/leave",{},{params:{roomId:this.state.rooms.userRoom.id},headers:{userId:this.state.user.user.id}}).then((function(e){console.log(e,"response dell"),t("setUserRoom",{})}))}}};r["a"].use(c["a"]);var Le={state:{isGame:!1,board:{size:10,players:[{name:"Tolik",icon:"®",score:0},{name:"Volodya",icon:"∑",score:0},{name:"Pavluha",icon:"≤",score:0},{name:"Diablo228",icon:"˚",score:0},{name:"Patricio",icon:"¬",score:0},{name:"Valentina",icon:"√",score:0},{name:"Oxana",icon:"å",score:0},{name:"Kizaru",icon:"ß",score:0}]}},getters:{getStateGame:function(e){return e.isGame},getBoard:function(e){return e.board}},mutations:{setStateGame:function(e,t){e.isGame=t},setBoard:function(e,t){e.board=t}},actions:{}};r["a"].use(c["a"]);var ze=new c["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{user:Ee,rooms:Ae,game:Le}}),Ge=n("8c4f"),Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[n("Header"),n("button",{on:{click:e.toLobby}},[e._v("go to lobby")]),n("div",{staticClass:"container"},[n("Field"),n("Score")],1)],1)},Be=[],Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},e._l(e.getBoard.size,(function(t,r){return n("div",{key:r,staticClass:"string"},e._l(e.getBoard.size,(function(t,o){return n("div",{key:r+" "+o,staticClass:"cell"},[e._v(" "+e._s(r+" "+o)+" ")])})),0)})),0)},Fe=[],De={name:"Field",props:{},computed:Object(a["a"])({},Object(c["b"])(["getBoard"])),watch:{getUserRoom:function(e){var t,n=this;null===e||void 0===e||null===(t=e.playerList)||void 0===t||t.forEach((function(e){e!==n.getUser.id?n.userInRoom=!1:n.userInRoom=!0}))}},data:function(){return{userInRoom:!1}},mounted:function(){},methods:{}},Me=De,Ne=(n("cb75"),Object(p["a"])(Me,Te,Fe,!1,null,null,null)),He=Ne.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"score"},[n("h3",[e._v("Score")]),e._l(e.getBoard.players,(function(t,r){return n("div",{key:r,staticClass:"player"},[e._v(" "+e._s(t.name+" - "+t.score)+" ")])}))],2)},qe=[],Je={name:"Field",props:{},computed:Object(a["a"])({},Object(c["b"])(["getBoard"])),watch:{getUserRoom:function(e){var t,n=this;null===e||void 0===e||null===(t=e.playerList)||void 0===t||t.forEach((function(e){e!==n.getUser.id?n.userInRoom=!1:n.userInRoom=!0}))}},data:function(){return{userInRoom:!1}},mounted:function(){},methods:{}},Qe=Je,Ve=(n("cc09"),Object(p["a"])(Qe,Ke,qe,!1,null,null,null)),We=Ve.exports,Xe={name:"Board",components:{Header:h,Field:He,Score:We},props:{count:Number},data:function(){return{}},mounted:function(){},methods:{toLobby:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.commit("setGameState",!1);case 2:e.$router.push({name:"Lobby"}).catch((function(e){}));case 3:case"end":return t.stop()}}),t)})))()}}},Ye=Xe,Ze=(n("ca09"),Object(p["a"])(Ye,Pe,Be,!1,null,null,null)),et=Ze.exports;r["a"].use(Ge["a"]);var tt=[{path:"/lobby",name:"Lobby",component:ue},{path:"/board",name:"Board",component:et}],nt=new Ge["a"]({base:"/",routes:tt}),rt=nt,ot=n("7797"),st=n.n(ot),at=n("4bea"),ct=n.n(at);r["a"].config.productionTip=!1,_e(),r["a"].use(new st.a({debug:!0,connection:ct()("https://tic-tac-toe-1337.herokuapp.com/"),vuex:{store:ze,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),new r["a"]({router:rt,store:ze,render:function(e){return e(Ue)}}).$mount("#app")},"58d0":function(e,t,n){},"5b8a":function(e,t,n){},"5ffb":function(e,t,n){"use strict";n("58d0")},6860:function(e,t,n){},6880:function(e,t,n){"use strict";n("3dc7")},"775d":function(e,t,n){"use strict";n("0f0c")},"79a5":function(e,t,n){},"85ec":function(e,t,n){},"8baf":function(e,t,n){"use strict";n("6860")},aca7:function(e,t,n){e.exports=n.p+"img/logo.ed013acb.jpg"},bf94:function(e,t,n){"use strict";n("39f4")},ca09:function(e,t,n){"use strict";n("1282")},cb75:function(e,t,n){"use strict";n("2743")},cc09:function(e,t,n){"use strict";n("5b8a")},e304:function(e,t,n){},ed7a:function(e,t,n){"use strict";n("5450")},faf3:function(e,t,n){"use strict";n("e304")}});
//# sourceMappingURL=app.e45b17d8.js.map