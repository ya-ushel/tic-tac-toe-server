(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"0044":function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("59ed");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"0560":function(t,e){try{t.exports="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("1a2d"),u=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=s(t),e=a(e),u)try{return h(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0a06":function(t,e,n){"use strict";var r=n("c532"),i=n("30b5"),o=n("f6b4"),s=n("5270"),a=n("4a7b"),c=n("848b"),u=c.validators;function h(t){this.defaults=t,this.interceptors={request:new o,response:new o}}h.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&c.assertOptions(e,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,o=[];if(this.interceptors.response.forEach((function(t){o.push(t.fulfilled,t.rejected)})),!r){var h=[s,void 0];Array.prototype.unshift.apply(h,n),h=h.concat(o),i=Promise.resolve(t);while(h.length)i=i.then(h.shift(),h.shift());return i}var l=t;while(n.length){var f=n.shift(),d=n.shift();try{l=f(l)}catch(p){d(p);break}}try{i=s(l)}catch(p){return Promise.reject(p)}while(o.length)i=i.then(o.shift(),o.shift());return i},h.prototype.getUri=function(t){return t=a(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){h.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){h.prototype[t]=function(e,n,r){return this.request(a(r||{},{method:t,url:e,data:n}))}})),t.exports=h},"0b42":function(t,e,n){var r=n("e8b5"),i=n("68ee"),o=n("861d"),s=n("b622"),a=s("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===Array||r(e.prototype))?e=void 0:o(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e){t.exports=function(t){try{return String(t)}catch(e){return"Object"}}},"0d74":function(t,e,n){var r=n("312d"),i=n("635e"),o=Object.prototype.toString,s="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===o.call(Blob),a="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===o.call(File);function c(t,e){if(!t)return t;if(i(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(r(t)){for(var o=new Array(t.length),s=0;s<t.length;s++)o[s]=c(t[s],e);return o}if("object"===typeof t&&!(t instanceof Date)){o={};for(var a in t)o[a]=c(t[a],e);return o}return t}function u(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(r(t))for(var n=0;n<t.length;n++)t[n]=u(t[n],e);else if("object"===typeof t)for(var i in t)t[i]=u(t[i],e);return t}e.deconstructPacket=function(t){var e=[],n=t.data,r=t;return r.data=c(n,e),r.attachments=e.length,{packet:r,buffers:e}},e.reconstructPacket=function(t,e){return t.data=u(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,u,h){if(!t)return t;if(s&&t instanceof Blob||a&&t instanceof File){o++;var l=new FileReader;l.onload=function(){h?h[u]=this.result:c=this.result,--o||e(c)},l.readAsArrayBuffer(t)}else if(r(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if("object"===typeof t&&!i(t))for(var d in t)n(t[d],d,t)}var o=0,c=t;n(c),o||e(c)}},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"10b8":function(t,e,n){"use strict";n.r(e);var r=n("cda2");n.d(e,"AbstractUserDataWriter",(function(){return r["a"]})),n.d(e,"Bytes",(function(){return r["b"]})),n.d(e,"CACHE_SIZE_UNLIMITED",(function(){return r["c"]})),n.d(e,"CollectionReference",(function(){return r["d"]})),n.d(e,"DocumentReference",(function(){return r["e"]})),n.d(e,"DocumentSnapshot",(function(){return r["f"]})),n.d(e,"FieldPath",(function(){return r["g"]})),n.d(e,"FieldValue",(function(){return r["h"]})),n.d(e,"Firestore",(function(){return r["i"]})),n.d(e,"FirestoreError",(function(){return r["j"]})),n.d(e,"GeoPoint",(function(){return r["k"]})),n.d(e,"LoadBundleTask",(function(){return r["l"]})),n.d(e,"Query",(function(){return r["m"]})),n.d(e,"QueryConstraint",(function(){return r["n"]})),n.d(e,"QueryDocumentSnapshot",(function(){return r["o"]})),n.d(e,"QuerySnapshot",(function(){return r["p"]})),n.d(e,"SnapshotMetadata",(function(){return r["q"]})),n.d(e,"Timestamp",(function(){return r["r"]})),n.d(e,"Transaction",(function(){return r["s"]})),n.d(e,"WriteBatch",(function(){return r["t"]})),n.d(e,"_DatabaseId",(function(){return r["u"]})),n.d(e,"_DocumentKey",(function(){return r["v"]})),n.d(e,"_EmptyCredentialsProvider",(function(){return r["w"]})),n.d(e,"_FieldPath",(function(){return r["x"]})),n.d(e,"_cast",(function(){return r["y"]})),n.d(e,"_debugAssert",(function(){return r["z"]})),n.d(e,"_isBase64Available",(function(){return r["A"]})),n.d(e,"_logWarn",(function(){return r["B"]})),n.d(e,"_validateIsNotUsedTogether",(function(){return r["C"]})),n.d(e,"addDoc",(function(){return r["D"]})),n.d(e,"arrayRemove",(function(){return r["E"]})),n.d(e,"arrayUnion",(function(){return r["F"]})),n.d(e,"clearIndexedDbPersistence",(function(){return r["G"]})),n.d(e,"collection",(function(){return r["H"]})),n.d(e,"collectionGroup",(function(){return r["I"]})),n.d(e,"connectFirestoreEmulator",(function(){return r["J"]})),n.d(e,"deleteDoc",(function(){return r["K"]})),n.d(e,"deleteField",(function(){return r["L"]})),n.d(e,"disableNetwork",(function(){return r["M"]})),n.d(e,"doc",(function(){return r["N"]})),n.d(e,"documentId",(function(){return r["O"]})),n.d(e,"enableIndexedDbPersistence",(function(){return r["P"]})),n.d(e,"enableMultiTabIndexedDbPersistence",(function(){return r["Q"]})),n.d(e,"enableNetwork",(function(){return r["R"]})),n.d(e,"endAt",(function(){return r["S"]})),n.d(e,"endBefore",(function(){return r["T"]})),n.d(e,"ensureFirestoreConfigured",(function(){return r["U"]})),n.d(e,"executeWrite",(function(){return r["V"]})),n.d(e,"getDoc",(function(){return r["W"]})),n.d(e,"getDocFromCache",(function(){return r["X"]})),n.d(e,"getDocFromServer",(function(){return r["Y"]})),n.d(e,"getDocs",(function(){return r["Z"]})),n.d(e,"getDocsFromCache",(function(){return r["ab"]})),n.d(e,"getDocsFromServer",(function(){return r["bb"]})),n.d(e,"getFirestore",(function(){return r["cb"]})),n.d(e,"increment",(function(){return r["db"]})),n.d(e,"initializeFirestore",(function(){return r["eb"]})),n.d(e,"limit",(function(){return r["fb"]})),n.d(e,"limitToLast",(function(){return r["gb"]})),n.d(e,"loadBundle",(function(){return r["hb"]})),n.d(e,"namedQuery",(function(){return r["ib"]})),n.d(e,"onSnapshot",(function(){return r["jb"]})),n.d(e,"onSnapshotsInSync",(function(){return r["kb"]})),n.d(e,"orderBy",(function(){return r["lb"]})),n.d(e,"query",(function(){return r["mb"]})),n.d(e,"queryEqual",(function(){return r["nb"]})),n.d(e,"refEqual",(function(){return r["ob"]})),n.d(e,"runTransaction",(function(){return r["pb"]})),n.d(e,"serverTimestamp",(function(){return r["qb"]})),n.d(e,"setDoc",(function(){return r["rb"]})),n.d(e,"setLogLevel",(function(){return r["sb"]})),n.d(e,"snapshotEqual",(function(){return r["tb"]})),n.d(e,"startAfter",(function(){return r["ub"]})),n.d(e,"startAt",(function(){return r["vb"]})),n.d(e,"terminate",(function(){return r["wb"]})),n.d(e,"updateDoc",(function(){return r["xb"]})),n.d(e,"waitForPendingWrites",(function(){return r["yb"]})),n.d(e,"where",(function(){return r["zb"]})),n.d(e,"writeBatch",(function(){return r["Ab"]}))},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(t,e){t.exports=function(t){return"function"===typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(t instanceof e)return t;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1a2d":function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fb5":function(t,e,n){"use strict";e.byteLength=h,e.toByteArray=f,e.fromByteArray=m;for(var r=[],i=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,c=s.length;a<c;++a)r[a]=s[a],i[s.charCodeAt(a)]=a;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");-1===n&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function h(t){var e=u(t),n=e[0],r=e[1];return 3*(n+r)/4-r}function l(t,e,n){return 3*(e+n)/4-n}function f(t){var e,n,r=u(t),s=r[0],a=r[1],c=new o(l(t,s,a)),h=0,f=a>0?s-4:s;for(n=0;n<f;n+=4)e=i[t.charCodeAt(n)]<<18|i[t.charCodeAt(n+1)]<<12|i[t.charCodeAt(n+2)]<<6|i[t.charCodeAt(n+3)],c[h++]=e>>16&255,c[h++]=e>>8&255,c[h++]=255&e;return 2===a&&(e=i[t.charCodeAt(n)]<<2|i[t.charCodeAt(n+1)]>>4,c[h++]=255&e),1===a&&(e=i[t.charCodeAt(n)]<<10|i[t.charCodeAt(n+1)]<<4|i[t.charCodeAt(n+2)]>>2,c[h++]=e>>8&255,c[h++]=255&e),c}function d(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function p(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(d(r));return i.join("")}function m(t){for(var e,n=t.length,i=n%3,o=[],s=16383,a=0,c=n-i;a<c;a+=s)o.push(p(t,a,a+s>c?c:a+s));return 1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),o.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return I})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return A})),n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return v})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return u})),n.d(e,"n",(function(){return l})),n.d(e,"o",(function(){return _})),n.d(e,"p",(function(){return E}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,h=(3&e)<<4|s>>4;let l=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(l=64)),r.push(n[u],n[h],n[l],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,h=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==h)throw Error();const l=e<<2|s>>4;if(r.push(l),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function h(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function l(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){const t=c();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const d="FirebaseError";class p extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=d,Object.setPrototypeOf(this,p.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,m.prototype.create)}}class m{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?g(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new p(r,s,n);return a}}function g(t,e){return t.replace(y,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function b(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(w(n)&&w(o)){if(!b(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function w(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function E(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function T(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){const n=new k(t,e);return n.subscribe.bind(n)}class k{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=S(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=C),void 0===r.error&&(r.error=C),void 0===r.complete&&(r.complete=C);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function C(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),o=n("07fa"),s=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),h=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var l,f,d,p,m,g,y,v=n&&n.that,b=!(!n||!n.AS_ENTRIES),w=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),E=s(e,v,1+b+_),T=function(t){return l&&u(l,"normal",t),new h(!0,t)},I=function(t){return b?(r(t),_?E(t[0],t[1],T):E(t[0],t[1])):_?E(t,T):E(t)};if(w)l=t;else{if(f=c(t),!f)throw TypeError(String(t)+" is not iterable");if(i(f)){for(d=0,p=o(t);p>d;d++)if(m=I(t[d]),m&&m instanceof h)return m;return new h(!1)}l=a(t,f)}g=l.next;while(!(y=g.call(l)).done){try{m=I(y.value)}catch(k){u(l,"throw",k)}if("object"==typeof m&&m&&m instanceof h)return m}return new h(!1)}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,h,l,f,d,p,m=t.target,g=t.global,y=t.stat;if(h=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,h)for(l in e){if(d=e[l],t.noTargetGet?(p=i(h,l),f=p&&p.value):f=h[l],n=u(g?l:m+(y?".":"#")+l,t.forced),!n&&void 0!==f){if(typeof d===typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(h,l,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),i=n("c8af"),o=n("387f"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function c(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=n("b50d")),t}function u(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(t)}var h={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:c(),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)||e&&"application/json"===e["Content-Type"]?(a(e,"application/json"),u(t)):t}],transformResponse:[function(t){var e=this.transitional||h.transitional,n=e&&e.silentJSONParsing,i=e&&e.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(s){if("SyntaxError"===a.name)throw o(a,this,"E_JSON_PARSE");throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){h.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){h.headers[t]=r.merge(s)})),t.exports=h}).call(this,n("4362"))},"24c7":function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},"25f5":function(t,e,n){var r=n("c9bb")("socket.io-parser"),i=n("cd4c"),o=n("0d74"),s=n("312d"),a=n("635e");function c(){}e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=c,e.Decoder=d;var u=e.ERROR+'"encode error"';function h(t){var n=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data){var i=l(t.data);if(!1===i)return u;n+=i}return r("encoded %j as %s",t,n),n}function l(t){try{return JSON.stringify(t)}catch(e){return!1}}function f(t,e){function n(t){var n=o.deconstructPacket(t),r=h(n.packet),i=n.buffers;i.unshift(r),e(i)}o.removeBlobs(t,n)}function d(){this.reconstructor=null}function p(t){var n=0,i={type:Number(t.charAt(0))};if(null==e.types[i.type])return y("unknown packet type "+i.type);if(e.BINARY_EVENT===i.type||e.BINARY_ACK===i.type){var o=n+1;while("-"!==t.charAt(++n)&&n!=t.length);var a=t.substring(o,n);if(a!=Number(a)||"-"!==t.charAt(n))throw new Error("Illegal attachments");i.attachments=Number(a)}if("/"===t.charAt(n+1)){o=n+1;while(++n){var c=t.charAt(n);if(","===c)break;if(n===t.length)break}i.nsp=t.substring(o,n)}else i.nsp="/";var u=t.charAt(n+1);if(""!==u&&Number(u)==u){o=n+1;while(++n){c=t.charAt(n);if(null==c||Number(c)!=c){--n;break}if(n===t.length)break}i.id=Number(t.substring(o,n+1))}if(t.charAt(++n)){var h=m(t.substr(n)),l=!1!==h&&(i.type===e.ERROR||s(h));if(!l)return y("invalid payload");i.data=h}return r("decoded %s as %j",t,i),i}function m(t){try{return JSON.parse(t)}catch(e){return!1}}function g(t){this.reconPack=t,this.buffers=[]}function y(t){return{type:e.ERROR,data:"parser error: "+t}}c.prototype.encode=function(t,n){if(r("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)f(t,n);else{var i=h(t);n([i])}},i(d.prototype),d.prototype.add=function(t){var n;if("string"===typeof t)n=p(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new g(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!a(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},d.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},g.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=o.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},g.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2770:function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},2786:function(t,e,n){var r=n("0560"),i=n("a18b");t.exports=function(t){var e=t.xdomain,n=t.xscheme,o=t.enablesXDR;try{if("undefined"!==typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(s){}try{if("undefined"!==typeof XDomainRequest&&!n&&o)return new XDomainRequest}catch(s){}if(!e)try{return new(i[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(s){}}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var h=u.render;u.render=function(t,e){return c.call(e),h(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"29e1":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ar})),n.d(e,"b",(function(){return xr})),n.d(e,"c",(function(){return Or})),n.d(e,"d",(function(){return Rr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return Pr})),n.d(e,"g",(function(){return Dr})),n.d(e,"h",(function(){return Sr})),n.d(e,"i",(function(){return Cr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},o={},s=s||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function m(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=l(this);delete _[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function I(t){t:{var e=qn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function k(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t){return/^[\s\xa0]*$/.test(t)}var A,O=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function N(t,e){return t<e?-1:t>e?1:0}t:{var R=a.navigator;if(R){var P=R.userAgent;if(P){A=P;break t}}A=""}function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function U(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var B,V=x(A,"Opera"),q=x(A,"Trident")||x(A,"MSIE"),$=x(A,"Edge"),z=$||q,H=x(A,"Gecko")&&!(x(A.toLowerCase(),"webkit")&&!x(A,"Edge"))&&!(x(A,"Trident")||x(A,"MSIE"))&&!x(A,"Edge"),K=x(A.toLowerCase(),"webkit")&&!x(A,"Edge");function W(){var t=a.document;return t?t.documentMode:void 0}t:{var G="",Y=function(){var t=A;return H?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):V?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Y&&(G=Y?Y[1]:""),q){var J=W();if(null!=J&&J>parseFloat(G)){B=String(J);break t}}B=G}var X,Q={};function Z(){return U((function(){let t=0;const e=O(String(B)).split("."),n=O("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||N(0==i[2].length,0==o[2].length)||N(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=W();X=tt||(parseInt(B,10)||void 0)}else X=void 0;var et=X,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{F(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ot[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(it,rt);var ot={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=E(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}ht.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=ft(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new ct(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function mt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)mt(t,e[o],n,r,i);return null}return n=kt(n),t&&t[st]?t.N(e,n,h(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=h(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[dt]=a=new ht(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)vt(t,e[o],n,r,i);return null}return n=kt(n),t&&t[st]?t.O(e,n,h(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)bt(t,e[o],n,r,i);else r=h(r)?!!r.capture:!!r,n=kt(n),t&&t[st]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=ft(o,n,r,i),-1<n&&(ut(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[st])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(lt(n,t),0==n.h&&(n.src=null,e[dt]=null)):ut(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[dt],t instanceof ht?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function kt(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function St(){b.call(this),this.i=new ht(this),this.P=this,this.I=null}function Ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),j(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=At(s,r,!0,e)&&i}if(s=e.g=t,i=At(s,r,!0,e)&&i,i=At(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=At(s,r,!1,e)&&i}function At(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&lt(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(St,b),St.prototype[st]=!0,St.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ot=a.JSON.stringify;function xt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=Pt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Pt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Dt,t=>t.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){a.setTimeout(()=>{throw t},0)}function Mt(t,e){Rt||jt(),Ft||(Rt(),Ft=!0),Ut.add(t,e)}function jt(){var t=a.Promise.resolve(void 0);Rt=function(){t.then(Bt)}}var Ft=!1,Ut=new Nt;function Bt(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Pt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Vt(t,e){St.call(this),this.h=t||1,this.g=e||a,this.j=g(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function zt(t){t.g=$t(()=>{t.g=null,t.i&&(t.i=!1,zt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Vt,St),r=Vt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ct(this,"tick"),this.da&&(qt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Vt.Z.M.call(this),qt(this),delete this.g};class Ht extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(t){b.call(this),this.h=t,this.g={}}v(Kt,b);var Wt=[];function Gt(t,e,n,r){Array.isArray(n)||(n&&(Wt[0]=n.toString()),n=Wt);for(var i=0;i<n.length;i++){var o=mt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Yt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Jt(){this.g=!0}function Xt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");s=2<=l.length&&"type"==l[1]?s+(h+"=")+u+"&":s+(h+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Qt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ot(n)}catch(a){return e}}Kt.prototype.M=function(){Kt.Z.M.call(this),Yt(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Jt.prototype.Aa=function(){this.g=!1},Jt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new St}function oe(t){rt.call(this,ne.Ma,t)}function se(t){const e=ie();Ct(e,new oe(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();Ct(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(oe,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function me(){}de.prototype.h=null;var ge,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Kt(this),this.P=Te,t=z?125:void 0,this.W=new Vt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(be,rt),v(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},ge=new we;var Te=45e3,Ie={},ke={};function Se(t,e,n){t.K=1,t.v=Xe(He(e)),t.s=n,t.U=!0,Ce(t,null)}function Ce(t,e){t.F=Date.now(),Ne(t),t.A=He(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ht(g(t.Ia,t,t.g),t.O)),Gt(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),se(1),Xt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ae(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Oe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==ke){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ie){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}Ae(t)&&r!=ke&&r!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),De(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ke:(n=Number(e.substring(n,r)),isNaN(n)?Ie:(r+=1,r+n>e.length?ke:(e=e.substr(r,n),t.C=r+n,e)))}function Ne(t){t.Y=Date.now()+t.P,Re(t,t.P)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(g(t.eb,t),e)}function Pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||pr(t.l,t)}function Le(t){Pe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Yt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||_n(n.i,t)))if(n.I=t.N,!t.J&&_n(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;dr(n),er(n)}hr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=he(g(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((t.J||n.g==t)&&dr(n),!C(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;!o.g&&(x(t,"spdy")||x(t,"quic")||x(t,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(En(o,o.h),o.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Je(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=t;if(r.oa=vr(r,r.H?r.la:null,r.W),s.J){Tn(r.i,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(Pe(a),Ne(a)),r.g=s}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}se(4)}catch(u){}}function je(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=je(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ue)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Be(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ve(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ve(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Ve(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=_e.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Gn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Gn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>l)&&(3!=l||z||this.g&&(this.h.h||this.g.ga()||Yn(this.g)))){this.I||4!=l||7==e||se(8==e||0>=f?3:2),Pe(this);var n=this.g.ba();this.N=n;e:if(Ae(this)){var r=Yn(this.g);t="";var i=r.length,o=4==Gn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),De(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=200==n,Qt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,ce(12),Le(this),De(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.U?(Oe(this,l,s),z&&this.i&&3==l&&(Gt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,s,null),Me(this,s)),4==l&&Le(this),this.i&&!this.I&&(4==l?pr(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),De(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Gn(this.g),e=this.g.ga();this.C<e.length&&(Pe(this),Oe(this,t,e),this.i&&4!=t&&Ne(this))}},r.cancel=function(){this.I=!0,Le(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(se(3),ce(17)),Le(this),this.o=2,De(this)):Re(this,this.Y-t)},r=Ue.prototype,r.R=function(){Be(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Be(this),this.g.concat()},r.get=function(t,e){return Ve(this.h,t)?this.h[t]:e},r.set=function(t,e){Ve(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ze(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ze){this.g=void 0!==e?e:t.g,Ke(this,t.j),this.s=t.s,We(this,t.i),Ge(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Ye(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,Ke(this,n[1]||"",!0),this.s=tn(n[2]||""),We(this,n[3]||"",!0),Ge(this,n[4]),this.l=tn(n[5]||"",!0),Ye(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function He(t){return new ze(t)}function Ke(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function We(t,e,n){t.i=n?tn(e,!0):e}function Ge(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ye(t,e,n){e instanceof un?(t.h=e,mn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Je(t,e,n){t.h.set(e,n)}function Xe(t){return Je(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qe(t){return t instanceof ze?He(t):new ze(t,void 0)}function Ze(t,e,n,r){var i=new ze(null,void 0);return t&&Ke(i,t),e&&We(i,e),n&&Ge(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?sn:on,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,on=/[#\?:]/g,sn=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Ue,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){hn(t),e=pn(t,e),Ve(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ve(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Be(t)))}function fn(t,e){return hn(t),e=pn(t,e),Ve(t.g.h,e)}function dn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),S(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mn(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),dn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){hn(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){hn(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},r.R=function(t){hn(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=k(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=k(e,t[n])}return e},r.set=function(t,e){return hn(this),this.i=null,t=pn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var gn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function _n(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function kn(){}function Sn(){this.g=new kn}function Cn(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;h(t)&&(i=Ot(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function An(t,e){const n=new Jt;if(a.Image){const r=new Image;r.onload=y(On,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(On,n,r,"TestLoadImage: error",!1,e),r.onabort=y(On,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(On,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function On(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}function Nn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},kn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},kn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(xn,de),xn.prototype.g=function(){return new Nn(this.l,this.j)},xn.prototype.i=function(t){return function(){return t}}({}),v(Nn,St);var Rn=0;function Pn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ln(t)}function Ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Nn.prototype,r.open=function(t,e){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ln(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Rn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Ln(this),3==this.readyState&&Pn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},r.Ta=function(t){this.g&&(this.response=t,Dn(this))},r.ha=function(){this.g&&Dn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Mn=a.JSON.parse;function jn(t){St.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}v(jn,St);var Fn="",Un=/^https?$/i,Bn=["POST","PUT"];function Vn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function $n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zn(t),Kn(t)}function zn(t){t.D||(t.D=!0,Ct(t,"complete"),Ct(t,"error"))}function Hn(t){if(t.h&&"undefined"!=typeof s&&(!t.C[1]||4!=Gn(t)||2!=t.ba()))if(t.v&&4==Gn(t))$t(t.Fa,0,t);else if(Ct(t,"readystatechange"),4==Gn(t)){t.h=!1;try{const s=t.ba();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.H).match(qe)[1]||null;if(!i&&a.self&&a.self.location){var o=a.self.location.protocol;i=o.substr(0,o.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var c=2<Gn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",zn(t)}}finally{Kn(t)}}}function Kn(t,e){if(t.g){Wn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||Ct(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Wn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}function Yn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Jn(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Xn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Jn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Je(t,e,n))}function Qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Jt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Qn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Qn("baseRetryDelayMs",5e3,t),this.$a=Qn("retryDelaySeedMs",1e4,t),this.Ya=Qn("forwardChannelMaxRetries",2,t),this.ra=Qn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new Sn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=He(t.F);Je(n,"SID",t.J),Je(n,"RID",e),Je(n,"TYPE","terminate"),ar(t,n),e=new _e(t,t.h,e,void 0),e.K=2,e.v=Xe(He(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}yr(t)}function er(t){t.g&&(lr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),dr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new gn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Mt(t.Ha,t),t.C=0)}function or(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=he(g(t.Ha,t,e),mr(t,t.C)),t.C++,!0))}function sr(t,e){var n;n=e?e.m:t.V++;const r=He(t.F);Je(r,"SID",t.J),Je(r,"RID",n),Je(r,"AID",t.U),ar(t,r),t.o&&t.s&&Xn(r,t.o,t.s),n=new _e(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),Se(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Je(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?g(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),s=!1;else try{Cn(c,t,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Mt(t.Ga,t),t.A=0)}function hr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=he(g(t.Ga,t),mr(t,t.A)),t.A++,!0)}function lr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new _e(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Je(e,"RID","rpc"),Je(e,"SID",t.J),Je(e,"CI",t.N?"0":"1"),Je(e,"AID",t.U),ar(t,e),Je(e,"TYPE","xmlhttp"),t.o&&t.s&&Xn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xe(He(e)),n.s=null,n.U=!0,Ce(n,t)}function dr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){dr(t),lr(t),t.g=null;var r=2}else{if(!_n(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),Ct(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&or(t,e)||2==r&&hr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:gr(t,5);break;case 4:gr(t,10);break;case 3:gr(t,6);break;default:gr(t,2)}}function mr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function gr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=g(t.jb,t);n||(n=new ze("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ke(n,"https"),Xe(n)),An(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Qe(n);if(""!=r.i)e&&We(r,e+"."+r.i),Ge(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,(function(t,e){Je(r,e,t)})),e=t.D,n=t.sa,e&&n&&Je(r,e,n),Je(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new jn(new xn({ib:!0})):new jn(t.qa),e.L=t.H,e}function wr(){}function _r(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Er(t,e){St.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new kr(this)}function Tr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ir(){be.call(this),this.status=1}function kr(t){this.g=t}r=jn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?pe(this.u):pe(ge),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void $n(this,o)}t=n||"";const i=new Ue(this.headers);r&&Fe(r,(function(t,e){i.set(e,t)})),r=I(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=E(Bn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wn(this),0<this.B&&((this.K=Vn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=$t(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){$n(this,o)}},r.pa=function(){"undefined"!=typeof s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Kn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),jn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},r.cb=function(){Hn(this)},r.ba=function(){try{return 2<Gn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new _e(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?(o=L(o),j(o,this.P)):o=this.P),null===this.o&&(i.H=o),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=He(this.F),Je(n,"RID",t),Je(n,"CVER",22),this.D&&Je(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&o&&Xn(n,this.o,o),En(this.i,i),this.Ra&&Je(n,"TYPE","init"),this.ja?(Je(n,"$req",e),Je(n,"SID","null"),i.$=!0,Se(i,n,null)):Se(i,n,e),this.G=2}}else 3==this.G&&(t?sr(this,t):0==this.l.length||bn(this.i)||sr(this))},r.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=he(g(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),fr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),hr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(t,e){return new Er(t,e)},v(Er,St),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mt(g(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),ir(t)},Er.prototype.close=function(){tr(this.g)},Er.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=Ot(t),rr(this.g,e)):rr(this.g,t)},Er.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Er.Z.M.call(this)},v(Tr,ve),v(Ir,be),v(kr,wr),kr.prototype.xa=function(){Ct(this.g,"a")},kr.prototype.wa=function(t){Ct(this.g,new Tr(t))},kr.prototype.va=function(t){Ct(this.g,new Ir(t))},kr.prototype.ua=function(){Ct(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,fe.COMPLETE="complete",me.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",St.prototype.listen=St.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Sr=o.createWebChannelTransport=function(){return new _r},Cr=o.getStatEventTarget=function(){return ie()},Ar=o.ErrorCode=le,Or=o.EventType=fe,xr=o.Event=ne,Nr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Rr=o.FetchXmlHttpFactory=xn,Pr=o.WebChannel=me,Dr=o.XhrIo=jn}).call(this,n("c8ba"))},"2a62":function(t,e,n){var r=n("825a"),i=n("dc4a");t.exports=function(t,e,n){var o,s;r(t);try{if(o=i(t,"return"),!o){if("throw"===e)throw n;return n}o=o.call(t)}catch(a){s=!0,o=a}if("throw"===e)throw n;if(s)throw o;return r(o),n}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function h(t){return"[object Object]"===u.call(t)}function l(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function v(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var E=/-(\w)/g,T=_((function(t){return t.replace(E,(function(t,e){return e?e.toUpperCase():""}))})),I=_((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),k=/\B([A-Z])/g,S=_((function(t){return t.replace(k,"-$1").toLowerCase()}));function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){return t.bind(e)}var O=Function.prototype.bind?A:C;function x(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function N(t,e){for(var n in e)t[n]=e[n];return t}function R(t){for(var e={},n=0;n<t.length;n++)t[n]&&N(e,t[n]);return e}function P(t,e,n){}var D=function(t,e,n){return!1},L=function(t){return t};function M(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return M(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return M(t[n],e[n])}))}catch(u){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U="data-server-rendered",B=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:P,parsePlatformTagName:L,mustUseProp:D,async:!0,_lifecycleHooks:V},$=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^"+$.source+".$_\\d]");function W(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,Y="__proto__"in{},J="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=X&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Q),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),ot={}.watch,st=!1;if(J)try{var at={};Object.defineProperty(at,"passive",{get:function(){st=!0}}),window.addEventListener("test-passive",null,at)}catch(Is){}var ct=function(){return void 0===G&&(G=!J&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},ut=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var lt,ft="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);lt="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var dt=P,pt=0,mt=function(){this.id=pt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){v(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var gt=[];function yt(t){gt.push(t),mt.target=t}function vt(){gt.pop(),mt.target=gt[gt.length-1]}var bt=function(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var _t=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Et(t){return new bt(void 0,void 0,void 0,String(t))}function Tt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var It=Array.prototype,kt=Object.create(It),St=["push","pop","shift","unshift","splice","sort","reverse"];St.forEach((function(t){var e=It[t];H(kt,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Ct=Object.getOwnPropertyNames(kt),At=!0;function Ot(t){At=t}var xt=function(t){this.value=t,this.dep=new mt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(Y?Nt(t,kt):Rt(t,kt,Ct),this.observeArray(t)):this.walk(t)};function Nt(t,e){t.__proto__=e}function Rt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];H(t,o,e[o])}}function Pt(t,e){var n;if(c(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof xt?n=t.__ob__:At&&!ct()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new xt(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,r,i){var o=new mt,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Pt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return mt.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&jt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Pt(e),o.notify())}})}}function Lt(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Dt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function jt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&jt(e)}xt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},xt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Pt(t[e])};var Ft=q.optionMergeStrategies;function Ut(t,e){if(!e)return t;for(var n,r,i,o=ft?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],w(t,n)?r!==i&&h(r)&&h(i)&&Ut(r,i):Lt(t,n,i));return t}function Bt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Ut(r,i):i}:e?t?function(){return Ut("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Vt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?qt(n):n}function qt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function $t(t,e,n,r){var i=Object.create(t||null);return e?N(i,e):i}Ft.data=function(t,e,n){return n?Bt(t,e,n):e&&"function"!==typeof e?t:Bt(t,e)},V.forEach((function(t){Ft[t]=Vt})),B.forEach((function(t){Ft[t+"s"]=$t})),Ft.watch=function(t,e,n,r){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in N(i,t),e){var s=i[o],a=e[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return N(i,t),e&&N(i,e),i},Ft.provide=Bt;var zt=function(t,e){return void 0===e?t:e};function Ht(t,e){var n=t.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=T(i),s[o]={type:null})}else if(h(n))for(var a in n)i=n[a],o=T(a),s[o]=h(i)?i:{type:i};else 0;t.props=s}}function Kt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(h(n))for(var o in n){var s=n[o];r[o]=h(s)?N({from:o},s):{from:s}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Gt(t,e,n){if("function"===typeof e&&(e=e.options),Ht(e,n),Kt(e,n),Wt(e),!e._base&&(e.extends&&(t=Gt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Gt(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)w(t,o)||a(o);function a(r){var i=Ft[r]||zt;s[r]=i(t[r],e[r],n,r)}return s}function Yt(t,e,n,r){if("string"===typeof n){var i=t[e];if(w(i,n))return i[n];var o=T(n);if(w(i,o))return i[o];var s=I(o);if(w(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Jt(t,e,n,r){var i=e[t],o=!w(n,t),s=n[t],a=ee(Boolean,i.type);if(a>-1)if(o&&!w(i,"default"))s=!1;else if(""===s||s===S(t)){var c=ee(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Xt(r,i,t);var u=At;Ot(!0),Pt(s),Ot(u)}return s}function Xt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Qt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Qt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){yt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Is){ie(Is,r,"errorCaptured hook")}}}ie(t,e,n)}finally{vt()}}function re(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&d(o)&&!o._handled&&(o.catch((function(t){return ne(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Is){ne(Is,r,i)}return o}function ie(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(Is){Is!==t&&oe(Is,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!J&&!X||"undefined"===typeof console)throw t;console.error(t)}var se,ae=!1,ce=[],ue=!1;function he(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var le=Promise.resolve();se=function(){le.then(he),rt&&setTimeout(P)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())se="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var fe=1,de=new MutationObserver(he),pe=document.createTextNode(String(fe));de.observe(pe,{characterData:!0}),se=function(){fe=(fe+1)%2,pe.data=String(fe)},ae=!0}function me(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Is){ne(Is,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,se()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ge=new lt;function ye(t){ve(t,ge),ge.clear()}function ve(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)ve(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ve(t[r[n]],e)}}}var be=_((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function we(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)re(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function _e(t,e,n,i,s,a){var c,u,h,l;for(c in t)u=t[c],h=e[c],l=be(c),r(u)||(r(h)?(r(u.fns)&&(u=t[c]=we(u,a)),o(l.once)&&(u=t[c]=s(l.name,u,l.capture)),n(l.name,u,l.capture,l.passive,l.params)):u!==h&&(h.fns=u,t[c]=h));for(c in e)r(t[c])&&(l=be(c),i(l.name,e[c],l.capture))}function Ee(t,e,n){var s;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),v(s.fns,c)}r(a)?s=we([c]):i(a.fns)&&o(a.merged)?(s=a,s.fns.push(c)):s=we([a,c]),s.merged=!0,t[e]=s}function Te(t,e,n){var o=e.options.props;if(!r(o)){var s={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in o){var h=S(u);Ie(s,c,u,h,!0)||Ie(s,a,u,h,!1)}return s}}function Ie(t,e,n,r,o){if(i(e)){if(w(e,n))return t[n]=e[n],o||delete e[n],!0;if(w(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function ke(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Se(t){return a(t)?[Et(t)]:Array.isArray(t)?Ae(t):void 0}function Ce(t){return i(t)&&i(t.text)&&s(t.isComment)}function Ae(t,e){var n,s,c,u,h=[];for(n=0;n<t.length;n++)s=t[n],r(s)||"boolean"===typeof s||(c=h.length-1,u=h[c],Array.isArray(s)?s.length>0&&(s=Ae(s,(e||"")+"_"+n),Ce(s[0])&&Ce(u)&&(h[c]=Et(u.text+s[0].text),s.shift()),h.push.apply(h,s)):a(s)?Ce(u)?h[c]=Et(u.text+s):""!==s&&h.push(Et(s)):Ce(s)&&Ce(u)?h[c]=Et(u.text+s.text):(o(t._isVList)&&i(s.tag)&&r(s.key)&&i(e)&&(s.key="__vlist"+e+"_"+n+"__"),h.push(s)));return h}function Oe(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function xe(t){var e=Ne(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach((function(n){Dt(t,n,e[n])})),Ot(!0))}function Ne(t,e){if(t){for(var n=Object.create(null),r=ft?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from,a=e;while(a){if(a._provided&&w(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Re(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Pe)&&delete n[u];return n}function Pe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function De(t){return t.isComment&&t.asyncFactory}function Le(t,e,r){var i,o=Object.keys(e).length>0,s=t?!!t.$stable:!o,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==n&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Me(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=je(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),H(i,"$stable",s),H(i,"$key",a),H(i,"$hasNormal",o),i}function Me(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Se(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!De(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function je(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,o,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ft&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),h=u.next();while(!h.done)n.push(e(h.value,n.length)),h=u.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,o=s.length;r<o;r++)a=s[r],n[r]=e(t[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Ue(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=N(N({},r),n)),i=o(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Be(t){return Yt(this.$options,"filters",t,!0)||L}function Ve(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function qe(t,e,n,r,i){var o=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?Ve(i,r):o?Ve(o,t):r?S(r)!==e:void 0===t}function $e(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=R(n));var s=function(s){if("class"===s||"style"===s||y(s))o=t;else{var a=t.attrs&&t.attrs.type;o=r||q.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=T(s),u=S(s);if(!(c in o)&&!(u in o)&&(o[s]=n[s],i)){var h=t.on||(t.on={});h["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ke(r,"__static__"+t,!1)),r}function He(t,e,n){return Ke(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ke(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&We(t[r],e+"_"+r,n);else We(t,e,n)}function We(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ge(t,e){if(e)if(h(e)){var n=t.on=t.on?N({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Ye(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Ye(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Je(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Xe(t,e){return"string"===typeof t?e+t:t}function Qe(t){t._o=He,t._n=m,t._s=p,t._l=Fe,t._t=Ue,t._q=M,t._i=j,t._m=ze,t._f=Be,t._k=qe,t._b=$e,t._v=Et,t._e=_t,t._u=Ye,t._g=Ge,t._d=Je,t._p=Xe}function Ze(t,e,r,i,s){var a,c=this,u=s.options;w(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var h=o(u._compiled),l=!h;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Ne(u.inject,i),this.slots=function(){return c.$slots||Le(t.scopedSlots,c.$slots=Re(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Le(t.scopedSlots,this.slots())}}),h&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Le(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=dn(a,t,e,n,r,l);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return dn(a,t,e,n,r,l)}}function tn(t,e,r,o,s){var a=t.options,c={},u=a.props;if(i(u))for(var h in u)c[h]=Jt(h,u,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var l=new Ze(r,c,s,o,t),f=a.render.call(null,l._c,l);if(f instanceof bt)return en(f,r,l.parent,a,l);if(Array.isArray(f)){for(var d=Se(f)||[],p=new Array(d.length),m=0;m<d.length;m++)p[m]=en(d[m],r,l.parent,a,l);return p}}function en(t,e,n,r,i){var o=Tt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function nn(t,e){for(var n in e)t[T(n)]=e[n]}Qe(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=an(t,Nn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Mn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Bn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Un(e,!0):e.$destroy())}},on=Object.keys(rn);function sn(t,e,n,s,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var h;if(r(t.cid)&&(h=t,t=Tn(h,u),void 0===t))return En(h,e,n,s,a);e=e||{},Er(t),i(e.model)&&hn(t.options,e);var l=Te(e,t,a);if(o(t.options.functional))return tn(t,l,e,n,s);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}cn(e);var p=t.options.name||a,m=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:f,tag:a,children:s},h);return m}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var r=on[n],i=e[r],o=rn[r];i===o||i&&i._merged||(e[r]=i?un(o,i):o)}}function un(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function hn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),s=o[r],a=e.model.callback;i(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[r]=[a].concat(s)):o[r]=a}var ln=1,fn=2;function dn(t,e,n,r,i,s){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o(s)&&(i=fn),pn(t,e,n,r,i)}function pn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return _t();if(i(n)&&i(n.is)&&(e=n.is),!e)return _t();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===fn?r=Se(r):o===ln&&(r=ke(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),s=q.isReservedTag(e)?new bt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Yt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):sn(c,n,t,r,e)):s=sn(e,n,t,r);return Array.isArray(s)?s:i(s)?(i(a)&&mn(s,a),i(n)&&gn(n),s):_t()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&mn(c,e,n)}}function gn(t){c(t.style)&&ye(t.style),c(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Re(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return dn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return dn(t,e,n,r,i,!0)};var o=r&&r.data;Dt(t,"$attrs",o&&o.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var vn,bn=null;function wn(t){Qe(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Le(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Is){ne(Is,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=_t()),t.parent=i,t}}function _n(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function En(t,e,n,r,i){var o=_t();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Tn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=bn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var s=t.owners=[n],a=!0,u=null,h=null;n.$on("hook:destroyed",(function(){return v(s,n)}));var l=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==h&&(clearTimeout(h),h=null))},f=F((function(n){t.resolved=_n(n,e),a?s.length=0:l(!0)})),p=F((function(e){i(t.errorComp)&&(t.error=!0,l(!0))})),m=t(f,p);return c(m)&&(d(m)?r(t.resolved)&&m.then(f,p):d(m.component)&&(m.component.then(f,p),i(m.error)&&(t.errorComp=_n(m.error,e)),i(m.loading)&&(t.loadingComp=_n(m.loading,e),0===m.delay?t.loading=!0:u=setTimeout((function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))}),m.delay||200)),i(m.timeout)&&(h=setTimeout((function(){h=null,r(t.resolved)&&p(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function In(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||De(n)))return n}}function kn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&On(t,e)}function Sn(t,e){vn.$on(t,e)}function Cn(t,e){vn.$off(t,e)}function An(t,e){var n=vn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function On(t,e,n){vn=t,_e(e,n||{},Sn,Cn,An,t),vn=void 0}function xn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(o=s[a],o===e||o.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?x(n):n;for(var r=x(arguments,1),i='event handler for "'+t+'"',o=0,s=n.length;o<s;o++)re(n[o],e,r,e,i)}return e}}var Nn=null;function Rn(t){var e=Nn;return Nn=t,function(){Nn=e}}function Pn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Dn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Rn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Bn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||v(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Bn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Ln(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=_t),Bn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,P,{before:function(){t._isMounted&&!t._isDestroyed&&Bn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Bn(t,"mounted")),t}function Mn(t,e,r,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ot(!1);for(var h=t._props,l=t.$options._propKeys||[],f=0;f<l.length;f++){var d=l[f],p=t.$options.props;h[d]=Jt(d,p,e,t)}Ot(!0),t.$options.propsData=e}r=r||n;var m=t.$options._parentListeners;t.$options._parentListeners=r,On(t,r,m),u&&(t.$slots=Re(o,i.context),t.$forceUpdate())}function jn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,jn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Bn(t,"activated")}}function Un(t,e){if((!e||(t._directInactive=!0,!jn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Un(t.$children[n]);Bn(t,"deactivated")}}function Bn(t,e){yt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),vt()}var Vn=[],qn=[],$n={},zn=!1,Hn=!1,Kn=0;function Wn(){Kn=Vn.length=qn.length=0,$n={},zn=Hn=!1}var Gn=0,Yn=Date.now;if(J&&!tt){var Jn=window.performance;Jn&&"function"===typeof Jn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Jn.now()})}function Xn(){var t,e;for(Gn=Yn(),Hn=!0,Vn.sort((function(t,e){return t.id-e.id})),Kn=0;Kn<Vn.length;Kn++)t=Vn[Kn],t.before&&t.before(),e=t.id,$n[e]=null,t.run();var n=qn.slice(),r=Vn.slice();Wn(),tr(n),Qn(r),ut&&q.devtools&&ut.emit("flush")}function Qn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Bn(r,"updated")}}function Zn(t){t._inactive=!1,qn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function er(t){var e=t.id;if(null==$n[e]){if($n[e]=!0,Hn){var n=Vn.length-1;while(n>Kn&&Vn[n].id>t.id)n--;Vn.splice(n+1,0,t)}else Vn.push(t);zn||(zn=!0,me(Xn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new lt,this.newDepIds=new lt,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Is){if(!this.user)throw Is;ne(Is,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),vt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:P,set:P};function or(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function sr(t){t._watchers=[];var e=t.$options;e.props&&ar(t,e.props),e.methods&&mr(t,e.methods),e.data?cr(t):Pt(t._data={},!0),e.computed&&lr(t,e.computed),e.watch&&e.watch!==ot&&gr(t,e.watch)}function ar(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||Ot(!1);var s=function(o){i.push(o);var s=Jt(o,e,n,t);Dt(r,o,s),o in t||or(t,"_props",o)};for(var a in e)s(a);Ot(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?ur(e,t):e||{},h(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&w(r,o)||z(o)||or(t,"_data",o)}Pt(e,!0)}function ur(t,e){yt();try{return t.call(e,e)}catch(Is){return ne(Is,e,"data()"),{}}finally{vt()}}var hr={lazy:!0};function lr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var o=e[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new rr(t,s||P,P,hr)),i in t||fr(t,i,o)}}function fr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?dr(e):pr(n),ir.set=P):(ir.get=n.get?r&&!1!==n.cache?dr(e):pr(n.get):P,ir.set=n.set||P),Object.defineProperty(t,e,ir)}function dr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function mr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:O(e[n],t)}function gr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(t,n,r[i]);else yr(t,n,r)}}function yr(t,e,n,r){return h(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function vr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(h(e))return yr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';yt(),re(e,r,[i.value],r,o),vt()}return function(){i.teardown()}}}var br=0;function wr(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?_r(e,t):e.$options=Gt(Er(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Pn(e),kn(e),yn(e),Bn(e,"beforeCreate"),xe(e),sr(e),Oe(e),Bn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function _r(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Er(t){var e=t.options;if(t.super){var n=Er(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Tr(t);i&&N(t.extendOptions,i),e=t.options=Gt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Tr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Ir(t){this._init(t)}function kr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Sr(t){t.mixin=function(t){return this.options=Gt(this.options,t),this}}function Cr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Gt(n.options,t),s["super"]=n,s.options.props&&Ar(s),s.options.computed&&Or(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,B.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=N({},s.options),i[r]=s,s}}function Ar(t){var e=t.options.props;for(var n in e)or(t.prototype,"_props",n)}function Or(t){var e=t.options.computed;for(var n in e)fr(t.prototype,n,e[n])}function xr(t){B.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Nr(t){return t&&(t.Ctor.options.name||t.tag)}function Rr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Pr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&Dr(n,o,r,i)}}}function Dr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,v(n,e)}wr(Ir),vr(Ir),xn(Ir),Dn(Ir),wn(Ir);var Lr=[String,RegExp,Array],Mr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:Nr(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&Dr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Dr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Pr(t,(function(t){return Rr(e,t)}))})),this.$watch("exclude",(function(e){Pr(t,(function(t){return!Rr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=In(t),n=e&&e.componentOptions;if(n){var r=Nr(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Rr(o,r))||s&&r&&Rr(s,r))return e;var a=this,c=a.cache,u=a.keys,h=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[h]?(e.componentInstance=c[h].componentInstance,v(u,h),u.push(h)):(this.vnodeToCache=e,this.keyToCache=h),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:Mr};function Fr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:dt,extend:N,mergeOptions:Gt,defineReactive:Dt},t.set=Lt,t.delete=Mt,t.nextTick=me,t.observable=function(t){return Pt(t),t},t.options=Object.create(null),B.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,N(t.options.components,jr),kr(t),Sr(t),Cr(t),xr(t)}Fr(Ir),Object.defineProperty(Ir.prototype,"$isServer",{get:ct}),Object.defineProperty(Ir.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ir,"FunctionalRenderContext",{value:Ze}),Ir.version="2.6.14";var Ur=g("style,class"),Br=g("input,textarea,option,select,progress"),Vr=function(t,e,n){return"value"===n&&Br(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},qr=g("contenteditable,draggable,spellcheck"),$r=g("events,caret,typing,plaintext-only"),zr=function(t,e){return Yr(e)||"false"===e?"false":"contenteditable"===t&&$r(e)?e:"true"},Hr=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Kr="http://www.w3.org/1999/xlink",Wr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Gr=function(t){return Wr(t)?t.slice(6,t.length):""},Yr=function(t){return null==t||!1===t};function Jr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Xr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Xr(e,n.data));return Qr(e.staticClass,e.class)}function Xr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Qr(t,e){return i(t)||i(e)?Zr(t,ti(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),si=function(t){return ii(t)||oi(t)};function ai(t){return oi(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function ui(t){if(!J)return!0;if(si(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var hi=g("text,number,password,search,email,tel,url");function li(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function fi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function di(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function mi(t){return document.createComment(t)}function gi(t,e,n){t.insertBefore(e,n)}function yi(t,e){t.removeChild(e)}function vi(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function wi(t){return t.nextSibling}function _i(t){return t.tagName}function Ei(t,e){t.textContent=e}function Ti(t,e){t.setAttribute(e,"")}var Ii=Object.freeze({createElement:fi,createElementNS:di,createTextNode:pi,createComment:mi,insertBefore:gi,removeChild:yi,appendChild:vi,parentNode:bi,nextSibling:wi,tagName:_i,setTextContent:Ei,setStyleScope:Ti}),ki={create:function(t,e){Si(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Si(t,!0),Si(e))},destroy:function(t){Si(t,!0)}};function Si(t,e){var n=t.data.ref;if(i(n)){var r=t.context,o=t.componentInstance||t.elm,s=r.$refs;e?Array.isArray(s[n])?v(s[n],o):s[n]===o&&(s[n]=void 0):t.data.refInFor?Array.isArray(s[n])?s[n].indexOf(o)<0&&s[n].push(o):s[n]=[o]:s[n]=o}}var Ci=new bt("",{},[]),Ai=["create","activate","update","remove","destroy"];function Oi(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xi(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function xi(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o||hi(r)&&hi(o)}function Ni(t,e,n){var r,o,s={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(s[o]=r);return s}function Ri(t){var e,n,s={},c=t.modules,u=t.nodeOps;for(e=0;e<Ai.length;++e)for(s[Ai[e]]=[],n=0;n<c.length;++n)i(c[n][Ai[e]])&&s[Ai[e]].push(c[n][Ai[e]]);function h(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function l(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,s,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=Tt(t)),t.isRootInsert=!s,!p(t,e,n,r)){var h=t.data,l=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),E(t),b(t,l,e),i(h)&&_(t,e),v(n,t.elm,r)):o(t.isComment)?(t.elm=u.createComment(t.text),v(n,t.elm,r)):(t.elm=u.createTextNode(t.text),v(n,t.elm,r))}}function p(t,e,n,r){var s=t.data;if(i(s)){var a=i(t.componentInstance)&&s.keepAlive;if(i(s=s.hook)&&i(s=s.init)&&s(t,!1),i(t.componentInstance))return m(t,e),v(n,t.elm,r),o(a)&&y(t,e,n,r),!0}}function m(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(_(t,e),E(t)):(Si(t),e.push(t))}function y(t,e,n,r){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](Ci,a);e.push(a);break}v(n,t.elm,r)}function v(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0,e,r)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function _(t,n){for(var r=0;r<s.create.length;++r)s.create[r](Ci,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(Ci,t),i(e.insert)&&n.push(t))}function E(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}i(e=Nn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function T(t,e,n,r,i,o){for(;r<=i;++r)d(n[r],o,t,e,!1,n,r)}function I(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)I(t.children[n])}function k(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(S(r),I(r)):f(r.elm))}}function S(t,e){if(i(e)||i(t.data)){var n,r=s.remove.length+1;for(i(e)?e.listeners+=r:e=l(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&S(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else f(t.elm)}function C(t,e,n,o,s){var a,c,h,l,f=0,p=0,m=e.length-1,g=e[0],y=e[m],v=n.length-1,b=n[0],w=n[v],_=!s;while(f<=m&&p<=v)r(g)?g=e[++f]:r(y)?y=e[--m]:Oi(g,b)?(O(g,b,o,n,p),g=e[++f],b=n[++p]):Oi(y,w)?(O(y,w,o,n,v),y=e[--m],w=n[--v]):Oi(g,w)?(O(g,w,o,n,v),_&&u.insertBefore(t,g.elm,u.nextSibling(y.elm)),g=e[++f],w=n[--v]):Oi(y,b)?(O(y,b,o,n,p),_&&u.insertBefore(t,y.elm,g.elm),y=e[--m],b=n[++p]):(r(a)&&(a=Ni(e,f,m)),c=i(b.key)?a[b.key]:A(b,e,f,m),r(c)?d(b,o,t,g.elm,!1,n,p):(h=e[c],Oi(h,b)?(O(h,b,o,n,p),e[c]=void 0,_&&u.insertBefore(t,h.elm,g.elm)):d(b,o,t,g.elm,!1,n,p)),b=n[++p]);f>m?(l=r(n[v+1])?null:n[v+1].elm,T(t,l,n,p,v,o)):p>v&&k(e,f,m)}function A(t,e,n,r){for(var o=n;o<r;o++){var s=e[o];if(i(s)&&Oi(t,s))return o}}function O(t,e,n,a,c,h){if(t!==e){i(e.elm)&&i(a)&&(e=a[c]=Tt(e));var l=e.elm=t.elm;if(o(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?R(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;i(d)&&i(f=d.hook)&&i(f=f.prepatch)&&f(t,e);var p=t.children,m=e.children;if(i(d)&&w(e)){for(f=0;f<s.update.length;++f)s.update[f](t,e);i(f=d.hook)&&i(f=f.update)&&f(t,e)}r(e.text)?i(p)&&i(m)?p!==m&&C(l,p,m,n,h):i(m)?(i(t.text)&&u.setTextContent(l,""),T(l,null,m,0,m.length-1,n)):i(p)?k(p,0,p.length-1):i(t.text)&&u.setTextContent(l,""):t.text!==e.text&&u.setTextContent(l,e.text),i(d)&&i(f=d.hook)&&i(f=f.postpatch)&&f(t,e)}}}function x(t,e,n){if(o(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=g("attrs,class,staticClass,staticStyle,key");function R(t,e,n,r){var s,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(s=c.hook)&&i(s=s.init)&&s(e,!0),i(s=e.componentInstance)))return m(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(s=c)&&i(s=s.domProps)&&i(s=s.innerHTML)){if(s!==t.innerHTML)return!1}else{for(var h=!0,l=t.firstChild,f=0;f<u.length;f++){if(!l||!R(l,u[f],n,r)){h=!1;break}l=l.nextSibling}if(!h||l)return!1}else b(e,u,n);if(i(c)){var d=!1;for(var p in c)if(!N(p)){d=!0,_(e,n);break}!d&&c["class"]&&ye(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,l=[];if(r(t))c=!0,d(e,l);else{var f=i(t.nodeType);if(!f&&Oi(t,e))O(t,e,l,null,null,a);else{if(f){if(1===t.nodeType&&t.hasAttribute(U)&&(t.removeAttribute(U),n=!0),o(n)&&R(t,e,l))return x(e,l,!0),t;t=h(t)}var p=t.elm,m=u.parentNode(p);if(d(e,l,p._leaveCb?null:m,u.nextSibling(p)),i(e.parent)){var g=e.parent,y=w(e);while(g){for(var v=0;v<s.destroy.length;++v)s.destroy[v](g);if(g.elm=e.elm,y){for(var b=0;b<s.create.length;++b)s.create[b](Ci,g);var _=g.data.hook.insert;if(_.merged)for(var E=1;E<_.fns.length;E++)_.fns[E]()}else Si(g);g=g.parent}}i(m)?k([t],0,0):i(t.tag)&&I(t)}}return x(e,l,c),e.elm}i(t)&&I(t)}}var Pi={create:Di,update:Di,destroy:function(t){Di(t,Ci)}};function Di(t,e){(t.data.directives||e.data.directives)&&Li(t,e)}function Li(t,e){var n,r,i,o=t===Ci,s=e===Ci,a=ji(t.data.directives,t.context),c=ji(e.data.directives,e.context),u=[],h=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Ui(i,"update",e,t),i.def&&i.def.componentUpdated&&h.push(i)):(Ui(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var l=function(){for(var n=0;n<u.length;n++)Ui(u[n],"inserted",e,t)};o?Ee(e,"insert",l):l()}if(h.length&&Ee(e,"postpatch",(function(){for(var n=0;n<h.length;n++)Ui(h[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||Ui(a[n],"unbind",t,t,s)}var Mi=Object.create(null);function ji(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Mi),i[Fi(r)]=r,r.def=Yt(e.$options,"directives",r.name,!0);return i}function Fi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Ui(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Is){ne(Is,n.context,"directive "+t.name+" "+e+" hook")}}var Bi=[ki,Pi];function Vi(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var o,s,a,c=e.elm,u=t.data.attrs||{},h=e.data.attrs||{};for(o in i(h.__ob__)&&(h=e.data.attrs=N({},h)),h)s=h[o],a=u[o],a!==s&&qi(c,o,s,e.data.pre);for(o in(tt||nt)&&h.value!==u.value&&qi(c,"value",h.value),u)r(h[o])&&(Wr(o)?c.removeAttributeNS(Kr,Gr(o)):qr(o)||c.removeAttribute(o))}}function qi(t,e,n,r){r||t.tagName.indexOf("-")>-1?$i(t,e,n):Hr(e)?Yr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):qr(e)?t.setAttribute(e,zr(e,n)):Wr(e)?Yr(n)?t.removeAttributeNS(Kr,Gr(e)):t.setAttributeNS(Kr,e,n):$i(t,e,n)}function $i(t,e,n){if(Yr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var zi={create:Vi,update:Vi};function Hi(t,e){var n=e.elm,o=e.data,s=t.data;if(!(r(o.staticClass)&&r(o.class)&&(r(s)||r(s.staticClass)&&r(s.class)))){var a=Jr(e),c=n._transitionClasses;i(c)&&(a=Zr(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Ki,Wi={create:Hi,update:Hi},Gi="__r",Yi="__c";function Ji(t){if(i(t[Gi])){var e=tt?"change":"input";t[e]=[].concat(t[Gi],t[e]||[]),delete t[Gi]}i(t[Yi])&&(t.change=[].concat(t[Yi],t.change||[]),delete t[Yi])}function Xi(t,e,n){var r=Ki;return function i(){var o=e.apply(null,arguments);null!==o&&to(t,i,n,r)}}var Qi=ae&&!(it&&Number(it[1])<=53);function Zi(t,e,n,r){if(Qi){var i=Gn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Ki.addEventListener(t,e,st?{capture:n,passive:r}:n)}function to(t,e,n,r){(r||Ki).removeEventListener(t,e._wrapper||e,n)}function eo(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Ki=e.elm,Ji(n),_e(n,i,Zi,to,Xi,e.context),Ki=void 0}}var no,ro={create:eo,update:eo};function io(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,o,s=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=N({},c)),a)n in c||(s[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),o===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=o;var u=r(o)?"":String(o);oo(s,u)&&(s.value=u)}else if("innerHTML"===n&&oi(s.tagName)&&r(s.innerHTML)){no=no||document.createElement("div"),no.innerHTML="<svg>"+o+"</svg>";var h=no.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(h.firstChild)s.appendChild(h.firstChild)}else if(o!==a[n])try{s[n]=o}catch(Is){}}}}function oo(t,e){return!t.composing&&("OPTION"===t.tagName||so(t,e)||ao(t,e))}function so(t,e){var n=!0;try{n=document.activeElement!==t}catch(Is){}return n&&t.value!==e}function ao(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return m(n)!==m(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var co={create:io,update:io},uo=_((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ho(t){var e=lo(t.style);return t.staticStyle?N(t.staticStyle,e):e}function lo(t){return Array.isArray(t)?R(t):"string"===typeof t?uo(t):t}function fo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=ho(i.data))&&N(r,n)}(n=ho(t.data))&&N(r,n);var o=t;while(o=o.parent)o.data&&(n=ho(o.data))&&N(r,n);return r}var po,mo=/^--/,go=/\s*!important$/,yo=function(t,e,n){if(mo.test(e))t.style.setProperty(e,n);else if(go.test(n))t.style.setProperty(S(e),n.replace(go,""),"important");else{var r=bo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},vo=["Webkit","Moz","ms"],bo=_((function(t){if(po=po||document.createElement("div").style,t=T(t),"filter"!==t&&t in po)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<vo.length;n++){var r=vo[n]+e;if(r in po)return r}}));function wo(t,e){var n=e.data,o=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var s,a,c=e.elm,u=o.staticStyle,h=o.normalizedStyle||o.style||{},l=u||h,f=lo(e.data.style)||{};e.data.normalizedStyle=i(f.__ob__)?N({},f):f;var d=fo(e,!0);for(a in l)r(d[a])&&yo(c,a,"");for(a in d)s=d[a],s!==l[a]&&yo(c,a,null==s?"":s)}}var _o={create:wo,update:wo},Eo=/\s+/;function To(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Eo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Io(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Eo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function ko(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&N(e,So(t.name||"v")),N(e,t),e}return"string"===typeof t?So(t):void 0}}var So=_((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Co=J&&!et,Ao="transition",Oo="animation",xo="transition",No="transitionend",Ro="animation",Po="animationend";Co&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(xo="WebkitTransition",No="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ro="WebkitAnimation",Po="webkitAnimationEnd"));var Do=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Lo(t){Do((function(){Do(t)}))}function Mo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),To(t,e))}function jo(t,e){t._transitionClasses&&v(t._transitionClasses,e),Io(t,e)}function Fo(t,e,n){var r=Bo(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===Ao?No:Po,c=0,u=function(){t.removeEventListener(a,h),n()},h=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,h)}var Uo=/\b(transform|all)(,|$)/;function Bo(t,e){var n,r=window.getComputedStyle(t),i=(r[xo+"Delay"]||"").split(", "),o=(r[xo+"Duration"]||"").split(", "),s=Vo(i,o),a=(r[Ro+"Delay"]||"").split(", "),c=(r[Ro+"Duration"]||"").split(", "),u=Vo(a,c),h=0,l=0;e===Ao?s>0&&(n=Ao,h=s,l=o.length):e===Oo?u>0&&(n=Oo,h=u,l=c.length):(h=Math.max(s,u),n=h>0?s>u?Ao:Oo:null,l=n?n===Ao?o.length:c.length:0);var f=n===Ao&&Uo.test(r[xo+"Property"]);return{type:n,timeout:h,propCount:l,hasTransform:f}}function Vo(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return qo(e)+qo(t[n])})))}function qo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function $o(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=ko(t.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){var s=o.css,a=o.type,u=o.enterClass,h=o.enterToClass,l=o.enterActiveClass,f=o.appearClass,d=o.appearToClass,p=o.appearActiveClass,g=o.beforeEnter,y=o.enter,v=o.afterEnter,b=o.enterCancelled,w=o.beforeAppear,_=o.appear,E=o.afterAppear,T=o.appearCancelled,I=o.duration,k=Nn,S=Nn.$vnode;while(S&&S.parent)k=S.context,S=S.parent;var C=!k._isMounted||!t.isRootInsert;if(!C||_||""===_){var A=C&&f?f:u,O=C&&p?p:l,x=C&&d?d:h,N=C&&w||g,R=C&&"function"===typeof _?_:y,P=C&&E||v,D=C&&T||b,L=m(c(I)?I.enter:I);0;var M=!1!==s&&!et,j=Ko(R),U=n._enterCb=F((function(){M&&(jo(n,x),jo(n,O)),U.cancelled?(M&&jo(n,A),D&&D(n)):P&&P(n),n._enterCb=null}));t.data.show||Ee(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,U)})),N&&N(n),M&&(Mo(n,A),Mo(n,O),Lo((function(){jo(n,A),U.cancelled||(Mo(n,x),j||(Ho(L)?setTimeout(U,L):Fo(n,a,U)))}))),t.data.show&&(e&&e(),R&&R(n,U)),M||j||U()}}}function zo(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var o=ko(t.data.transition);if(r(o)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var s=o.css,a=o.type,u=o.leaveClass,h=o.leaveToClass,l=o.leaveActiveClass,f=o.beforeLeave,d=o.leave,p=o.afterLeave,g=o.leaveCancelled,y=o.delayLeave,v=o.duration,b=!1!==s&&!et,w=Ko(d),_=m(c(v)?v.leave:v);0;var E=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(jo(n,h),jo(n,l)),E.cancelled?(b&&jo(n,u),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));y?y(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),b&&(Mo(n,u),Mo(n,l),Lo((function(){jo(n,u),E.cancelled||(Mo(n,h),w||(Ho(_)?setTimeout(E,_):Fo(n,a,E)))}))),d&&d(n,E),b||w||E())}}function Ho(t){return"number"===typeof t&&!isNaN(t)}function Ko(t){if(r(t))return!1;var e=t.fns;return i(e)?Ko(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Wo(t,e){!0!==e.data.show&&$o(e)}var Go=J?{create:Wo,activate:Wo,remove:function(t,e){!0!==t.data.show?zo(t,e):e()}}:{},Yo=[zi,Wi,ro,co,_o,Go],Jo=Yo.concat(Bi),Xo=Ri({nodeOps:Ii,modules:Jo});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&os(t,"input")}));var Qo={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Ee(n,"postpatch",(function(){Qo.componentUpdated(t,e,n)})):Zo(t,e,n.context),t._vOptions=[].map.call(t.options,ns)):("textarea"===n.tag||hi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",rs),t.addEventListener("compositionend",is),t.addEventListener("change",is),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Zo(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ns);if(i.some((function(t,e){return!M(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return es(t,i)})):e.value!==e.oldValue&&es(e.value,i);o&&os(t,"change")}}}};function Zo(t,e,n){ts(t,e,n),(tt||nt)&&setTimeout((function(){ts(t,e,n)}),0)}function ts(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=j(r,ns(s))>-1,s.selected!==o&&(s.selected=o);else if(M(ns(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function es(t,e){return e.every((function(e){return!M(e,t)}))}function ns(t){return"_value"in t?t._value:t.value}function rs(t){t.target.composing=!0}function is(t){t.target.composing&&(t.target.composing=!1,os(t.target,"input"))}function os(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function ss(t){return!t.componentInstance||t.data&&t.data.transition?t:ss(t.componentInstance._vnode)}var as={bind:function(t,e,n){var r=e.value;n=ss(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,$o(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=ss(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?$o(n,(function(){t.style.display=t.__vOriginalDisplay})):zo(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},cs={model:Qo,show:as},us={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function hs(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?hs(In(e.children)):t}function ls(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[T(o)]=i[o];return e}function fs(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function ds(t){while(t=t.parent)if(t.data.transition)return!0}function ps(t,e){return e.key===t.key&&e.tag===t.tag}var ms=function(t){return t.tag||De(t)},gs=function(t){return"show"===t.name},ys={name:"transition",props:us,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(ms),n.length)){0;var r=this.mode;0;var i=n[0];if(ds(this.$vnode))return i;var o=hs(i);if(!o)return i;if(this._leaving)return fs(t,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=ls(this),u=this._vnode,h=hs(u);if(o.data.directives&&o.data.directives.some(gs)&&(o.data.show=!0),h&&h.data&&!ps(o,h)&&!De(h)&&(!h.componentInstance||!h.componentInstance._vnode.isComment)){var l=h.data.transition=N({},c);if("out-in"===r)return this._leaving=!0,Ee(l,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),fs(t,i);if("in-out"===r){if(De(o))return u;var f,d=function(){f()};Ee(c,"afterEnter",d),Ee(c,"enterCancelled",d),Ee(l,"delayLeave",(function(t){f=t}))}}return i}}},vs=N({tag:String,moveClass:String},us);delete vs.mode;var bs={props:vs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Rn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=ls(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],h=[],l=0;l<r.length;l++){var f=r[l];f.data.transition=s,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?u.push(f):h.push(f)}this.kept=t(e,null,u),this.removed=h}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(ws),t.forEach(_s),t.forEach(Es),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Mo(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(No,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(No,t),n._moveCb=null,jo(n,e))})}})))},methods:{hasMove:function(t,e){if(!Co)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Io(n,t)})),To(n,e),n.style.display="none",this.$el.appendChild(n);var r=Bo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function ws(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function _s(t){t.data.newPos=t.elm.getBoundingClientRect()}function Es(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Ts={Transition:ys,TransitionGroup:bs};Ir.config.mustUseProp=Vr,Ir.config.isReservedTag=si,Ir.config.isReservedAttr=Ur,Ir.config.getTagNamespace=ai,Ir.config.isUnknownElement=ui,N(Ir.options.directives,cs),N(Ir.options.components,Ts),Ir.prototype.__patch__=J?Xo:P,Ir.prototype.$mount=function(t,e){return t=t&&J?li(t):void 0,Ln(this,t,e)},J&&setTimeout((function(){q.devtools&&ut&&ut.emit("init",Ir)}),0),e["a"]=Ir}).call(this,n("c8ba"))},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("1626"),u=n("d039"),h=n("0366"),l=n("1be4"),f=n("cc12"),d=n("1cdc"),p=n("605d"),m=a.setImmediate,g=a.clearImmediate,y=a.process,v=a.MessageChannel,b=a.Dispatch,w=0,_={},E="onreadystatechange";try{r=a.location}catch(C){}var T=function(t){if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},I=function(t){return function(){T(t)}},k=function(t){T(t.data)},S=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};m&&g||(m=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return _[++w]=function(){(c(t)?t:Function(t)).apply(void 0,e)},i(w),w},g=function(t){delete _[t]},p?i=function(t){y.nextTick(I(t))}:b&&b.now?i=function(t){b.now(I(t))}:v&&!d?(o=new v,s=o.port2,o.port1.onmessage=k,i=h(s.postMessage,s,1)):a.addEventListener&&c(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!u(S)?(i=S,a.addEventListener("message",k,!1)):i=E in f("script")?function(t){l.appendChild(f("script"))[E]=function(){l.removeChild(this),T(t)}}:function(t){setTimeout(I(t),0)}),t.exports={set:m,clear:g}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,h=u&&u.v8;h?(r=h.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,i,o){var s=new Error(t);return r(s,e,n,i,o)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,"b",(function(){return L}));var i="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function h(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){u(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var m=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;g(t.concat(r),e.getChild(r),n.modules[r])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){g([],this.root,t)},m.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var y;var v=function(t){var e=this;void 0===t&&(t={}),!y&&"undefined"!==typeof window&&window.Vue&&R(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new y,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}));var h=void 0!==t.devtools?t.devtools:y.config.devtools;h&&s(this)},b={state:{configurable:!0}};function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};u(i,(function(e,n){o[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=y.config.silent;y.config.silent=!0,t._vm=new y({data:{$$state:e},computed:o}),y.config.silent=s,t.strict&&O(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),y.nextTick((function(){return r.$destroy()})))}function T(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=x(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){y.set(a,c,r.state)}))}var u=r.context=I(t,s,n);r.forEachMutation((function(e,n){var r=s+n;S(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;C(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;A(t,r,e,u)})),r.forEachChild((function(r,o){T(t,e,n.concat(o),r,i)}))}function I(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=N(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=N(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return k(t,e)}},state:{get:function(){return x(t.state,n)}}}),i}function k(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function S(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function C(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return l(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function x(t,e){return e.reduce((function(t,e){return t[e]}),t)}function N(t,e,n){return h(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function R(t){y&&t===y||(y=t,r(y))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(t){0},v.prototype.commit=function(t,e,n){var r=this,i=N(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},v.prototype.dispatch=function(t,e){var n=this,r=N(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},v.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},v.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},v.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},v.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},v.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},v.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=x(e.state,t.slice(0,-1));y.delete(n,t[t.length-1])})),_(this)},v.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},v.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},v.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(v.prototype,b);var P=B((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=V(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),D=B((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=V(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),L=B((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||V(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=B((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=V(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),j=function(t){return{mapState:P.bind(null,t),mapGetters:L.bind(null,t),mapMutations:D.bind(null,t),mapActions:M.bind(null,t)}};function F(t){return U(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function U(t){return Array.isArray(t)||h(t)}function B(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function V(t,e,n){var r=t._modulesNamespaceMap[n];return r}function q(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var h=t.logger;return void 0===h&&(h=console),function(t){var l=c(t.state);"undefined"!==typeof h&&(a&&t.subscribe((function(t,o){var s=c(o);if(n(t,l,s)){var a=H(),u=i(t),f="mutation "+t.type+a;$(h,f,e),h.log("%c prev state","color: #9E9E9E; font-weight: bold",r(l)),h.log("%c mutation","color: #03A9F4; font-weight: bold",u),h.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),z(h)}l=s})),u&&t.subscribeAction((function(t,n){if(o(t,n)){var r=H(),i=s(t),a="action "+t.type+r;$(h,a,e),h.log("%c action","color: #03A9F4; font-weight: bold",i),z(h)}})))}}function $(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function z(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function H(){var t=new Date;return" @ "+W(t.getHours(),2)+":"+W(t.getMinutes(),2)+":"+W(t.getSeconds(),2)+"."+W(t.getMilliseconds(),3)}function K(t,e){return new Array(e+1).join(t)}function W(t,e){return K("0",e-t.toString().length)+t}var G={Store:v,install:R,version:"3.6.2",mapState:P,mapMutations:D,mapGetters:L,mapActions:M,createNamespacedHelpers:j,createLogger:q};e["a"]=G}).call(this,n("c8ba"))},"30b5":function(t,e,n){"use strict";var r=n("c532");function i(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(r.isURLSearchParams(e))o=e.toString();else{var s=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(i(e)+"="+i(t))})))})),o=s.join("&")}if(o){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}},"312d":function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||o[r(t)]}},3605:function(t,e,n){var r=n("a6b8"),i=n("3bb0"),o=n("cd4c"),s=n("25f5"),a=n("4a05"),c=n("6881"),u=n("c9bb")("socket.io-client:manager"),h=n("aac1"),l=n("9507"),f=Object.prototype.hasOwnProperty;function d(t,e){if(!(this instanceof d))return new d(t,e);t&&"object"===typeof t&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||s;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=!1!==e.autoConnect,this.autoConnect&&this.open()}t.exports=d,d.prototype.emitAll=function(){for(var t in this.emit.apply(this,arguments),this.nsps)f.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},d.prototype.updateSocketIds=function(){for(var t in this.nsps)f.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},d.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},o(d.prototype),d.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},d.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},d.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},d.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},d.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},d.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},d.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},d.prototype.open=d.prototype.connect=function(t,e){if(u("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;u("opening %s",this.uri),this.engine=r(this.uri,this.opts);var n=this.engine,i=this;this.readyState="opening",this.skipReconnect=!1;var o=a(n,"open",(function(){i.onopen(),t&&t()})),s=a(n,"error",(function(e){if(u("connect_error"),i.cleanup(),i.readyState="closed",i.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else i.maybeReconnectOnOpen()}));if(!1!==this._timeout){var c=this._timeout;u("connect attempt will timeout after %d",c),0===c&&o.destroy();var h=setTimeout((function(){u("connect attempt timed out after %d",c),o.destroy(),n.close(),n.emit("error","timeout"),i.emitAll("connect_timeout",c)}),c);this.subs.push({destroy:function(){clearTimeout(h)}})}return this.subs.push(o),this.subs.push(s),this},d.prototype.onopen=function(){u("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(a(t,"data",c(this,"ondata"))),this.subs.push(a(t,"ping",c(this,"onping"))),this.subs.push(a(t,"pong",c(this,"onpong"))),this.subs.push(a(t,"error",c(this,"onerror"))),this.subs.push(a(t,"close",c(this,"onclose"))),this.subs.push(a(this.decoder,"decoded",c(this,"ondecoded")))},d.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},d.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},d.prototype.ondata=function(t){this.decoder.add(t)},d.prototype.ondecoded=function(t){this.emit("packet",t)},d.prototype.onerror=function(t){u("error",t),this.emitAll("error",t)},d.prototype.socket=function(t,e){var n=this.nsps[t];if(!n){n=new i(this,t,e),this.nsps[t]=n;var r=this;n.on("connecting",o),n.on("connect",(function(){n.id=r.generateId(t)})),this.autoConnect&&o()}function o(){~h(r.connecting,n)||r.connecting.push(n)}return n},d.prototype.destroy=function(t){var e=h(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},d.prototype.packet=function(t){u("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,(function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()})))},d.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},d.prototype.cleanup=function(){u("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},d.prototype.close=d.prototype.disconnect=function(){u("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},d.prototype.onclose=function(t){u("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},d.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)u("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();u("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout((function(){t.skipReconnect||(u("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open((function(e){e?(u("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(u("reconnect success"),t.onreconnect())})))}),e);this.subs.push({destroy:function(){clearTimeout(n)}})}},d.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"3bb0":function(t,e,n){var r=n("25f5"),i=n("cd4c"),o=n("0044"),s=n("4a05"),a=n("6881"),c=n("c9bb")("socket.io-client:socket"),u=n("6811"),h=n("65ab");t.exports=d;var l={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},f=i.prototype.emit;function d(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}i(d.prototype),d.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[s(t,"open",a(this,"onopen")),s(t,"packet",a(this,"onpacket")),s(t,"close",a(this,"onclose"))]}},d.prototype.open=d.prototype.connect=function(){return this.connected||(this.subEvents(),this.io.reconnecting||this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting")),this},d.prototype.send=function(){var t=o(arguments);return t.unshift("message"),this.emit.apply(this,t),this},d.prototype.emit=function(t){if(l.hasOwnProperty(t))return f.apply(this,arguments),this;var e=o(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:h(e))?r.BINARY_EVENT:r.EVENT,data:e,options:{}};return n.options.compress=!this.flags||!1!==this.flags.compress,"function"===typeof e[e.length-1]&&(c("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},d.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},d.prototype.onopen=function(){if(c("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"===typeof this.query?u.encode(this.query):this.query;c("sending connect packet with query %s",t),this.packet({type:r.CONNECT,query:t})}else this.packet({type:r.CONNECT})},d.prototype.onclose=function(t){c("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},d.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===r.ERROR&&"/"===t.nsp;if(e||n)switch(t.type){case r.CONNECT:this.onconnect();break;case r.EVENT:this.onevent(t);break;case r.BINARY_EVENT:this.onevent(t);break;case r.ACK:this.onack(t);break;case r.BINARY_ACK:this.onack(t);break;case r.DISCONNECT:this.ondisconnect();break;case r.ERROR:this.emit("error",t.data);break}},d.prototype.onevent=function(t){var e=t.data||[];c("emitting event %j",e),null!=t.id&&(c("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?f.apply(this,e):this.receiveBuffer.push(e)},d.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var i=o(arguments);c("sending ack %j",i),e.packet({type:h(i)?r.BINARY_ACK:r.ACK,id:t,data:i})}}},d.prototype.onack=function(t){var e=this.acks[t.id];"function"===typeof e?(c("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):c("bad ack %s",t.id)},d.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},d.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)f.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},d.prototype.ondisconnect=function(){c("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},d.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},d.prototype.close=d.prototype.disconnect=function(){return this.connected&&(c("performing disconnect (%s)",this.nsp),this.packet({type:r.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},d.prototype.compress=function(t){return this.flags.compress=t,this},d.prototype.binary=function(t){return this.flags.binary=t,this}},"3bbe":function(t,e,n){var r=n("1626");t.exports=function(t){if("object"===typeof t||r(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}},"3c7b":function(t,e,n){var r=n("af37"),i=n("2770"),o=n("a18b");t.exports=h;var s,a=/\n/g,c=/\\n/g;function u(){}function h(t){r.call(this,t),this.query=this.query||{},s||(s=o.___eio=o.___eio||[]),this.index=s.length;var e=this;s.push((function(t){e.onData(t)})),this.query.j=this.index,"function"===typeof addEventListener&&addEventListener("beforeunload",(function(){e.script&&(e.script.onerror=u)}),!1)}i(h,r),h.prototype.supportsBinary=!1,h.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),r.prototype.doClose.call(this)},h.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!==typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout((function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)}),100)},h.prototype.doWrite=function(t,e){var n=this;if(!this.form){var r,i=document.createElement("form"),o=document.createElement("textarea"),s=this.iframeId="eio_iframe_"+this.index;i.className="socketio",i.style.position="absolute",i.style.top="-1000px",i.style.left="-1000px",i.target=s,i.method="POST",i.setAttribute("accept-charset","utf-8"),o.name="d",i.appendChild(o),document.body.appendChild(i),this.form=i,this.area=o}function u(){h(),e()}function h(){if(n.iframe)try{n.form.removeChild(n.iframe)}catch(e){n.onError("jsonp polling iframe removal error",e)}try{var t='<iframe src="javascript:0" name="'+n.iframeId+'">';r=document.createElement(t)}catch(e){r=document.createElement("iframe"),r.name=n.iframeId,r.src="javascript:0"}r.id=n.iframeId,n.form.appendChild(r),n.iframe=r}this.form.action=this.uri(),h(),t=t.replace(c,"\\\n"),this.area.value=t.replace(a,"\\n");try{this.form.submit()}catch(l){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===n.iframe.readyState&&u()}:this.iframe.onload=u}},"3f8c":function(t,e){t.exports={}},"408a":function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("1626"),i=n("861d");t.exports=function(t,e){var n,o;if("string"===e&&r(n=t.toString)&&!i(o=n.call(t)))return o;if(r(n=t.valueOf)&&!i(o=n.call(t)))return o;if("string"!==e&&r(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4a05":function(t,e){function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},"4a7b":function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){e=e||{};var n={};function i(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function o(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:i(void 0,t[n]):i(t[n],e[n])}function s(t){if(!r.isUndefined(e[t]))return i(void 0,e[t])}function a(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:i(void 0,t[n]):i(void 0,e[n])}function c(n){return n in e?i(t[n],e[n]):n in t?i(void 0,t[n]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||o,i=e(t);r.isUndefined(i)&&e!==c||(n[t]=i)})),n}},"4b38":function(t,e,n){"use strict";n.r(e);var r=n("de6f");n.d(e,"FirebaseError",(function(){return r["a"]})),n.d(e,"SDK_VERSION",(function(){return r["b"]})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return r["c"]})),n.d(e,"_addComponent",(function(){return r["d"]})),n.d(e,"_addOrOverwriteComponent",(function(){return r["e"]})),n.d(e,"_apps",(function(){return r["f"]})),n.d(e,"_clearComponents",(function(){return r["g"]})),n.d(e,"_components",(function(){return r["h"]})),n.d(e,"_getProvider",(function(){return r["i"]})),n.d(e,"_registerComponent",(function(){return r["j"]})),n.d(e,"_removeServiceInstance",(function(){return r["k"]})),n.d(e,"deleteApp",(function(){return r["l"]})),n.d(e,"getApp",(function(){return r["m"]})),n.d(e,"getApps",(function(){return r["n"]})),n.d(e,"initializeApp",(function(){return r["o"]})),n.d(e,"onLog",(function(){return r["p"]})),n.d(e,"registerVersion",(function(){return r["q"]})),n.d(e,"setLogLevel",(function(){return r["r"]}));var i="firebase",o="9.1.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["q"])(i,o,"app")},"4bea":function(t,e,n){var r=n("db02"),i=n("25f5"),o=n("3605"),s=n("c9bb")("socket.io-client");t.exports=e=c;var a=e.managers={};function c(t,e){"object"===typeof t&&(e=t,t=void 0),e=e||{};var n,i=r(t),c=i.source,u=i.id,h=i.path,l=a[u]&&h in a[u].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||l;return f?(s("ignoring socket cache for %s",c),n=o(c,e)):(a[u]||(s("new io instance for %s",c),a[u]=o(c,e)),n=a[u]),i.query&&!e.query&&(e.query=i.query),n.socket(i.path,e)}e.protocol=i.protocol,e.connect=c,e.Manager=n("3605"),e.Socket=n("3bb0")},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),h=i(s,u);if(t&&n!=n){while(u>h)if(a=c[h++],a!=a)return!0}else for(;u>h;h++)if((t||h in c)&&c[h]===n)return t||h||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5087:function(t,e,n){var r=n("68ee"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5270:function(t,e,n){"use strict";var r=n("c532"),i=n("c401"),o=n("2e67"),s=n("2444"),a=n("7a77");function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a("canceled")}t.exports=function(t){c(t),t.headers=t.headers||{},t.data=i.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||s.adapter;return e(t).then((function(e){return c(t),e.data=i.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return o(e)||(c(t),e&&e.response&&(e.response.data=i.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},5705:function(t,e,n){"use strict";var r=n("f075"),i=n("de6f"),o=n("6dbe"),s=n("bcea"),a=n("dec5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new r["b"]("auth","Firebase",c()),l=new s["b"]("@firebase/auth");function f(t,...e){l.logLevel<=s["a"].ERROR&&l.error(`Auth (${i["b"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),o=new r["b"]("auth","Firebase",i);return o.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h.create(t,...e)}function y(t,e,...n){if(!t)throw g(e,...n)}function v(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function b(t,e){t||v(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(t){b(t instanceof Function,"Expected a class definition");let e=w.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["p"])()||Object(r["q"])()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,o={}){return D(t,o,()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=Object(r["t"])(Object.assign({key:t.config.apiKey},s)).slice(1),c=new(O.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),O.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function D(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},x),e);try{const e=new j(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw F(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(t,a,s);d(t,a)}}catch(o){if(o instanceof r["c"])throw o;d(t,"network-request-failed")}}async function L(t,e,n,r,i={}){const o=await P(t,e,n,r,i);return"mfaPendingCredential"in o&&d(t,"multi-factor-auth-required",{serverResponse:o}),o}function M(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?A(t.config,i):`${t.config.apiScheme}://${i}`}class j{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"timeout")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function B(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e=!1){const n=Object(r["i"])(t),i=await n.getIdToken(e),o=z(i);y(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:V($(o.auth_time)),issuedAtTime:V($(o.iat)),expirationTime:V($(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function $(t){return 1e3*Number(t)}function z(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",o),null}}function H(t){const e=z(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&W(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function W({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t){var e;const n=t.auth,r=await t.getIdToken(),i=await K(t,B(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?Z(o.providerUserInfo):[],a=Q(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),h=!!c&&u,l={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Y(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,l)}async function X(t){const e=Object(r["i"])(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Q(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function Z(t){return t.map(t=>{var{providerId:e}=t,n=Object(o["d"])(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t,e){const n=await D(t,{},()=>{const n=Object(r["t"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=M(t,i,"/v1/token","key="+o);return O.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):H(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await tt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new et;return n&&(y("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new et,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class rt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Object(o["d"])(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return q(this,t)}reload(){return X(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:T}=e;y(b&&T,t,"internal-error");const I=et.fromJSON(this.name,T);y("string"===typeof b,t,"internal-error"),nt(h,t.name),nt(l,t.name),y("boolean"===typeof w,t,"internal-error"),y("boolean"===typeof _,t,"internal-error"),nt(f,t.name),nt(d,t.name),nt(p,t.name),nt(m,t.name),nt(g,t.name),nt(v,t.name);const k=new rt({uid:b,auth:t,email:l,emailVerified:w,displayName:h,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(k.providerData=E.map(t=>Object.assign({},t))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const r=new et;r.updateFromServerResponse(e);const i=new rt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}it.type="NONE";const ot=it;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e,n){return`firebase:${t}:${e}:${n}`}class at{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=st(this.userKey,r.apiKey,i),this.fullPersistenceKey=st("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new at(_(ot),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||_(ot);const o=st(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=rt._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(c){}})),new at(i,t,n)):new at(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ut(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pt(e))return"Blackberry";if(mt(e))return"Webos";if(ht(e))return"Safari";if((e.includes("chrome/")||lt(e))&&!e.includes("edge/"))return"Chrome";if(dt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ut(t=Object(r["j"])()){return/firefox\//i.test(t)}function ht(t=Object(r["j"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lt(t=Object(r["j"])()){return/crios\//i.test(t)}function ft(t=Object(r["j"])()){return/iemobile/i.test(t)}function dt(t=Object(r["j"])()){return/android/i.test(t)}function pt(t=Object(r["j"])()){return/blackberry/i.test(t)}function mt(t=Object(r["j"])()){return/webos/i.test(t)}function gt(t=Object(r["j"])()){return/iphone|ipad|ipod/i.test(t)}function yt(){return Object(r["n"])()&&10===document.documentMode}function vt(t=Object(r["j"])()){return gt(t)||dt(t)||mt(t)||pt(t)||/windows phone/i.test(t)||ft(t)}function bt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e=[]){let n;switch(t){case"Browser":n=ct(Object(r["j"])());break;case"Worker":n=`${ct(Object(r["j"])())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["b"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tt(this),this.idTokenSubscription=new Tt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await at.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await J(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["i"])(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await at.create(this,[_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Et(t){return Object(r["i"])(t)}class Tt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["f"])(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return v("not implemented")}_getIdTokenResponse(t){return v("not implemented")}_linkToIdToken(t,e){return v("not implemented")}_getReauthenticationResolver(t){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}async function At(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends It{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Ot(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Ot(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return St(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ct(t,{email:this._email,oobCode:this._password});default:d(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return kt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return At(t,{idToken:e,email:this._email,oobCode:this._password});default:d(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="http://localhost";class Rt extends It{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Rt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):d("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Object(o["d"])(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Rt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return xt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,xt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,xt(t,e)}buildRequest(){const t={requestUri:Nt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["t"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",R(t,e))}async function Dt(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e))}async function Lt(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const Mt={["USER_NOT_FOUND"]:"user-not-found"};async function jt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return L(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,n),Mt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends It{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ft({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ft({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Dt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Lt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return jt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Ft({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bt(t){const e=Object(r["u"])(Object(r["h"])(t))["link"],n=e?Object(r["u"])(Object(r["h"])(e))["deep_link_id"]:null,i=Object(r["u"])(Object(r["h"])(t))["deep_link_id"],o=i?Object(r["u"])(Object(r["h"])(i))["link"]:null;return o||i||n||e||t}class Vt{constructor(t){var e,n,i,o,s,a;const c=Object(r["u"])(Object(r["h"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,h=null!==(n=c["oobCode"])&&void 0!==n?n:null,l=Ut(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&h&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=h,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Bt(t);try{return new Vt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(){this.providerId=qt.PROVIDER_ID}static credential(t,e){return Ot._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Vt.parseLink(e);return y(n,"argument-error"),Ot._fromEmailAndCode(t,n.code,n.tenantId)}}qt.PROVIDER_ID="password",qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends $t{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht extends zt{constructor(){super("facebook.com")}static credential(t){return Rt._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch(e){return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ht.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends zt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Rt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Kt.credential(e,n)}catch(r){return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com",Kt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends zt{constructor(){super("github.com")}static credential(t){return Rt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch(e){return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com",Wt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt extends zt{constructor(){super("twitter.com")}static credential(t,e){return Rt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Gt.credential(e,n)}catch(r){return null}}}Gt.TWITTER_SIGN_IN_METHOD="twitter.com",Gt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await rt._fromIdTokenResponse(t,n,r),o=Jt(n),s=new Yt({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Jt(n);return new Yt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Jt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Xt.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new Xt(t,e,n,r)}}function Qt(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Xt._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(t,e,n=!1){const r=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function te(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await K(t,Qt(r,i,e,t),n);y(o.idToken,r,"internal-error");const s=z(o.idToken);y(s,r,"internal-error");const{sub:a}=s;return y(t.uid===a,r,"user-mismatch"),Yt._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&d(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t,e,n=!1){const r="signIn",i=await Qt(t,r,e),o=await Yt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",R(t,e))}function re(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",R(t,e))}new WeakMap;const ie="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ie,"1"),this.storage.removeItem(ie),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){const t=Object(r["j"])();return ht(t)||gt(t)}const ae=1e3,ce=10;class ue extends oe{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=se()&&bt(),this.fallbackToPolling=vt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);yt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ce):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},ae)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ue.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he extends oe{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}he.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new fe(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await le(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe.receivers=[];class pe{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=de("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ge(){return"undefined"!==typeof me()["WorkerGlobalScope"]&&"function"===typeof me()["importScripts"]}async function ye(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function ve(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function be(){return ge()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="firebaseLocalStorageDb",_e=1,Ee="firebaseLocalStorage",Te="fbase_key";class Ie{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ke(t,e){return t.transaction([Ee],e?"readwrite":"readonly").objectStore(Ee)}function Se(){const t=indexedDB.deleteDatabase(we);return new Ie(t).toPromise()}function Ce(){const t=indexedDB.open(we,_e);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Ee,{keyPath:Te})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Ee)?e(n):(n.close(),await Se(),e(await Ce()))})})}async function Ae(t,e,n){const r=ke(t,!0).put({[Te]:e,value:n});return new Ie(r).toPromise()}async function Oe(t,e){const n=ke(t,!1).get(e),r=await new Ie(n).toPromise();return void 0===r?null:r.value}function xe(t,e){const n=ke(t,!0).delete(e);return new Ie(n).toPromise()}const Ne=800,Re=3;class Pe{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ce()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Re)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ge()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fe._getInstance(be()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await ye(),!this.activeServiceWorker)return;this.sender=new pe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&ve()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ce();return await Ae(t,ie,"1"),await xe(t,ie),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ae(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Oe(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>xe(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=ke(t,!1).getAll();return new Ie(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ne)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Pe.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",R(t,e))}function Le(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Me("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const je="recaptcha";async function Fe(t,e,n){var r;const i=await n.verify();try{let o;if(y("string"===typeof i,t,"argument-error"),y(n.type===je,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){y("enroll"===e.type,t,"internal-error");const n=await ne(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;y(n,t,"missing-multi-factor-info");const s=await De(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Pt(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(t){this.providerId=Ue.PROVIDER_ID,this.auth=Et(t)}verifyPhoneNumber(t,e){return Fe(this.auth,t,Object(r["i"])(e))}static credential(t,e){return Ft._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ue.credentialFromTaggedObject(e)}static credentialFromError(t){return Ue.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ft._fromTokenResponse(e,n):null}}Ue.PROVIDER_ID="phone",Ue.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be extends It{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return xt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return xt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ve(t){return ee(t.auth,new Be(t),t.bypassAuthState)}function qe(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),te(n,new Be(t),t.bypassAuthState)}async function $e(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Zt(n,new Be(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ve;case"linkViaPopup":case"linkViaRedirect":return $e;case"reauthViaPopup":case"reauthViaRedirect":return qe;default:d(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new C(2e3,1e4);class Ke extends ze{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ke.currentPopupAction&&Ke.currentPopupAction.cancel(),Ke.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=de();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ke.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,He.get())};t()}}Ke.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Map;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new C(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);class We{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return v("unexpected MultiFactorSessionType")}}}class Ge extends We{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Ge(t)}_finalizeEnroll(t,e,n){return re(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Le(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ye{constructor(){}static assertion(t){return Ge._fromCredential(t)}}Ye.FACTOR_ID="phone";var Je="@firebase/auth",Xe="0.18.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tn(t){Object(i["j"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(e=>{y(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wt(t)},s=new _t(e,r);return E(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["j"])(new a["a"]("auth-internal",t=>{const e=Et(t.getProvider("auth").getImmediate());return(t=>new Qe(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["q"])(Je,Xe,Ze(t)),Object(i["q"])(Je,Xe,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn("Browser")},"577e":function(t,e,n){var r=n("f5df");t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},5857:function(t,e,n){"use strict";var r,i="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),o=64,s={},a=0,c=0;function u(t){var e="";do{e=i[t%o]+e,t=Math.floor(t/o)}while(t>0);return e}function h(t){var e=0;for(c=0;c<t.length;c++)e=e*o+s[t.charAt(c)];return e}function l(){var t=u(+new Date);return t!==r?(a=0,r=t):t+"."+u(a++)}for(;c<o;c++)s[i[c]]=c;l.encode=u,l.decode=h,t.exports=l},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("577e"),o=n("5899"),s="["+o+"]",a=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t){return function(e){var n=i(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("1626"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5cce":function(t,e){t.exports={version:"0.23.0"}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5f02":function(t,e,n){"use strict";t.exports=function(t){return"object"===typeof t&&!0===t.isAxiosError}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),h=Object.assign,l=Object.defineProperty;t.exports=!h||i((function(){if(r&&1!==h({b:1},h(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=h({},t)[n]||o(h({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,h=1,l=s.f,f=a.f;while(i>h){var d,p=u(arguments[h++]),m=l?o(p).concat(l(p)):o(p),g=m.length,y=0;while(g>y)d=m[y++],r&&!f.call(p,d)||(n[d]=p[d])}return n}:h},"635e":function(t,e,n){(function(e){t.exports=o;var n="function"===typeof e&&"function"===typeof e.isBuffer,r="function"===typeof ArrayBuffer,i=function(t){return"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer};function o(t){return n&&e.isBuffer(t)||r&&(t instanceof ArrayBuffer||i(t))}}).call(this,n("b639").Buffer)},6502:function(t,e,n){var r=n("2786"),i=n("b8bc"),o=n("3c7b"),s=n("dd3f");function a(t){var e,n=!1,s=!1,a=!1!==t.jsonp;if("undefined"!==typeof location){var c="https:"===location.protocol,u=location.port;u||(u=c?443:80),n=t.hostname!==location.hostname||u!==t.port,s=t.secure!==c}if(t.xdomain=n,t.xscheme=s,e=new r(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new o(t)}e.polling=a,e.websocket=s},"65ab":function(t,e,n){(function(e){var r=n("24c7"),i=Object.prototype.toString,o="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===i.call(Blob),s="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===i.call(File);function a(t){if(!t||"object"!==typeof t)return!1;if(r(t)){for(var n=0,i=t.length;n<i;n++)if(a(t[n]))return!0;return!1}if("function"===typeof e&&e.isBuffer&&e.isBuffer(t)||"function"===typeof ArrayBuffer&&t instanceof ArrayBuffer||o&&t instanceof Blob||s&&t instanceof File)return!0;if(t.toJSON&&"function"===typeof t.toJSON&&1===arguments.length)return a(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&a(t[c]))return!0;return!1}t.exports=a}).call(this,n("b639").Buffer)},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},6811:function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,i=n.length;r<i;r++){var o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}},6881:function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},6890:function(t,e,n){(function(r){function i(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type)||("undefined"===typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function o(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var i=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(i++,"%c"===t&&(o=i))})),t.splice(o,0,r)}}function s(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!==typeof r&&"env"in r&&(t=Object({NODE_ENV:"production",BASE_URL:"/"}).DEBUG),t}function u(){try{return window.localStorage}catch(t){}}e=t.exports=n("aecf"),e.log=s,e.formatArgs=o,e.save=a,e.load=c,e.useColors=i,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(this,n("4362"))},"68ee":function(t,e,n){var r=n("d039"),i=n("1626"),o=n("f5df"),s=n("d066"),a=n("8925"),c=[],u=s("Reflect","construct"),h=/^\s*(?:class|function)\b/,l=h.exec,f=!h.exec((function(){})),d=function(t){if(!i(t))return!1;try{return u(Object,c,t),!0}catch(e){return!1}},p=function(t){if(!i(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return f||!!l.call(h,a(t))};t.exports=!u||r((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?p:d},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),h=n("1a2d"),l=n("c6cd"),f=n("f772"),d=n("d012"),p="Object already initialized",m=a.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s||l.state){var v=l.state||(l.state=new m),b=v.get,w=v.has,_=v.set;r=function(t,e){if(w.call(v,t))throw new TypeError(p);return e.facade=t,_.call(v,t,e),e},i=function(t){return b.call(v,t)||{}},o=function(t){return w.call(v,t)}}else{var E=f("state");d[E]=!0,r=function(t,e){if(h(t,E))throw new TypeError(p);return e.facade=t,u(t,E,e),e},i=function(t){return h(t,E)?t[E]:{}},o=function(t){return h(t,E)}}t.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},"6dbe":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return c}));function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function i(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function o(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function s(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function c(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},"6e7f":function(t,e){
/*! https://mths.be/utf8js v2.1.2 by @mathias */
var n,r,i,o=String.fromCharCode;function s(t){var e,n,r=[],i=0,o=t.length;while(i<o)e=t.charCodeAt(i++),e>=55296&&e<=56319&&i<o?(n=t.charCodeAt(i++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--)):r.push(e);return r}function a(t){var e,n=t.length,r=-1,i="";while(++r<n)e=t[r],e>65535&&(e-=65536,i+=o(e>>>10&1023|55296),e=56320|1023&e),i+=o(e);return i}function c(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function u(t,e){return o(t>>e&63|128)}function h(t,e){if(0==(4294967168&t))return o(t);var n="";return 0==(4294965248&t)?n=o(t>>6&31|192):0==(4294901760&t)?(c(t,e)||(t=65533),n=o(t>>12&15|224),n+=u(t,6)):0==(4292870144&t)&&(n=o(t>>18&7|240),n+=u(t,12),n+=u(t,6)),n+=o(63&t|128),n}function l(t,e){e=e||{};var n,r=!1!==e.strict,i=s(t),o=i.length,a=-1,c="";while(++a<o)n=i[a],c+=h(n,r);return c}function f(){if(i>=r)throw Error("Invalid byte index");var t=255&n[i];if(i++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function d(t){var e,o,s,a,u;if(i>r)throw Error("Invalid byte index");if(i==r)return!1;if(e=255&n[i],i++,0==(128&e))return e;if(192==(224&e)){if(o=f(),u=(31&e)<<6|o,u>=128)return u;throw Error("Invalid continuation byte")}if(224==(240&e)){if(o=f(),s=f(),u=(15&e)<<12|o<<6|s,u>=2048)return c(u,t)?u:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(o=f(),s=f(),a=f(),u=(7&e)<<18|o<<12|s<<6|a,u>=65536&&u<=1114111))return u;throw Error("Invalid UTF-8 detected")}function p(t,e){e=e||{};var o=!1!==e.strict;n=s(t),r=n.length,i=0;var c,u=[];while(!1!==(c=d(o)))u.push(c);return a(u)}t.exports={version:"2.1.2",encode:l,decode:p}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),h=n("5e77").CONFIGURABLE,l=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,l=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||h&&n.name!==g)&&s(n,"name",g),u=f(n),u.source||(u.source=d.join("string"==typeof g?g:""))),t!==r?(l?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:s(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&l(this).source||c(this)}))},7156:function(t,e,n){var r=n("1626"),i=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7797:function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=23)}([function(t,e,n){(function(r){function i(){var t;try{t=e.storage.debug}catch(t){}return!t&&void 0!==r&&"env"in r&&(t=r.env.DEBUG),t}(e=t.exports=n(26)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var i=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(i++,"%c"===t&&(o=i))})),t.splice(o,0,r)}},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}},e.load=i,e.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(i())}).call(this,n(25))},function(t,e,n){function r(t){if(t)return function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t)}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i=0;i<r.length;i++)if((n=r[i])===e||n.fn===e){r.splice(i,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var r=0,i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,e);return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){var r,i=n(36),o=n(16),s=n(37),a=n(38),c=n(39);"undefined"!=typeof ArrayBuffer&&(r=n(40));var u="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),h="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),l=u||h;e.protocol=3;var f=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},d=i(f),p={type:"error",data:"parser error"},m=n(41);function g(t,e,n){for(var r=new Array(t.length),i=a(t.length,n),o=function(t,n,i){e(n,(function(e,n){r[t]=n,i(e,r)}))},s=0;s<t.length;s++)o(s,t[s],i)}e.encodePacket=function(t,n,r,i){"function"==typeof n&&(i=n,n=!1),"function"==typeof r&&(i=r,r=null);var o=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&o instanceof ArrayBuffer)return function(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var i=t.data,o=new Uint8Array(i),s=new Uint8Array(1+i.byteLength);s[0]=f[t.type];for(var a=0;a<o.length;a++)s[a+1]=o[a];return r(s.buffer)}(t,n,i);if(void 0!==m&&o instanceof m)return function(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(l)return function(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var i=new FileReader;return i.onload=function(){e.encodePacket({type:t.type,data:i.result},n,!0,r)},i.readAsArrayBuffer(t.data)}(t,n,r);var i=new Uint8Array(1);i[0]=f[t.type];var o=new m([i.buffer,t.data]);return r(o)}(t,n,i);if(o&&o.base64)return function(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}(t,i);var s=f[t.type];return void 0!==t.data&&(s+=r?c.encode(String(t.data),{strict:!1}):String(t.data)),i(""+s)},e.encodeBase64Packet=function(t,n){var r,i="b"+e.packets[t.type];if(void 0!==m&&t.data instanceof m){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];n(i+t)},o.readAsDataURL(t.data)}try{r=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(e){for(var s=new Uint8Array(t.data),a=new Array(s.length),c=0;c<s.length;c++)a[c]=s[c];r=String.fromCharCode.apply(null,a)}return i+=btoa(r),n(i)},e.decodePacket=function(t,n,r){if(void 0===t)return p;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&!1===(t=function(t){try{t=c.decode(t,{strict:!1})}catch(t){return!1}return t}(t)))return p;var i=t.charAt(0);return Number(i)==i&&d[i]?t.length>1?{type:d[i],data:t.substring(1)}:{type:d[i]}:p}i=new Uint8Array(t)[0];var o=s(t,1);return m&&"blob"===n&&(o=new m([o])),{type:d[i],data:o}},e.decodeBase64Packet=function(t,e){var n=d[t.charAt(0)];if(!r)return{type:n,data:{base64:!0,data:t.substr(1)}};var i=r.decode(t.substr(1));return"blob"===e&&m&&(i=new m([i])),{type:n,data:i}},e.encodePayload=function(t,n,r){"function"==typeof n&&(r=n,n=null);var i=o(t);return n&&i?m&&!l?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void g(t,(function(t,r){e.encodePacket(t,!!i&&n,!1,(function(t){r(null,function(t){return t.length+":"+t}(t))}))}),(function(t,e){return r(e.join(""))})):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);var i;if("function"==typeof n&&(r=n,n=null),""===t)return r(p,0,1);for(var o,s,a="",c=0,u=t.length;c<u;c++){var h=t.charAt(c);if(":"===h){if(""===a||a!=(o=Number(a)))return r(p,0,1);if(a!=(s=t.substr(c+1,o)).length)return r(p,0,1);if(s.length){if(i=e.decodePacket(s,n,!1),p.type===i.type&&p.data===i.data)return r(p,0,1);if(!1===r(i,c+o,u))return}c+=o,a=""}else a+=h}return""!==a?r(p,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){if(!t.length)return n(new ArrayBuffer(0));g(t,(function(t,n){e.encodePacket(t,!0,!0,(function(t){return n(null,t)}))}),(function(t,e){var r=e.reduce((function(t,e){var n;return t+(n="string"==typeof e?e.length:e.byteLength).toString().length+n+2}),0),i=new Uint8Array(r),o=0;return e.forEach((function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}i[o++]=e?0:1;var a=n.byteLength.toString();for(s=0;s<a.length;s++)i[o++]=parseInt(a[s]);for(i[o++]=255,r=new Uint8Array(n),s=0;s<r.length;s++)i[o++]=r[s]})),n(i.buffer)}))},e.encodePayloadAsBlob=function(t,n){g(t,(function(t,n){e.encodePacket(t,!0,!0,(function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);t=r.buffer,e[0]=0}var o=(t instanceof ArrayBuffer?t.byteLength:t.size).toString(),s=new Uint8Array(o.length+1);for(i=0;i<o.length;i++)s[i]=parseInt(o[i]);if(s[o.length]=255,m){var a=new m([e.buffer,s.buffer,t]);n(null,a)}}))}),(function(t,e){return n(new m(e))}))},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var i=t,o=[];i.byteLength>0;){for(var a=new Uint8Array(i),c=0===a[0],u="",h=1;255!==a[h];h++){if(u.length>310)return r(p,0,1);u+=a[h]}i=s(i,2+u.length),u=parseInt(u);var l=s(i,0,u);if(c)try{l=String.fromCharCode.apply(null,new Uint8Array(l))}catch(t){var f=new Uint8Array(l);for(l="",h=0;h<f.length;h++)l+=String.fromCharCode(f[h])}o.push(l),i=s(i,u)}var d=o.length;o.forEach((function(t,i){r(e.decodePacket(t,n,!0),i,d)}))}},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,i=n.length;r<i;r++){var o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){var r=n(0)("socket.io-parser"),i=n(1),o=n(28),s=n(6),a=n(11);function c(){}e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=c,e.Decoder=l;var u=e.ERROR+'"encode error"';function h(t){var n=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data){var i=function(t){try{return JSON.stringify(t)}catch(t){return!1}}(t.data);if(!1===i)return u;n+=i}return r("encoded %j as %s",t,n),n}function l(){this.reconstructor=null}function f(t){this.reconPack=t,this.buffers=[]}function d(t){return{type:e.ERROR,data:"parser error: "+t}}c.prototype.encode=function(t,n){r("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type?function(t,e){o.removeBlobs(t,(function(t){var n=o.deconstructPacket(t),r=h(n.packet),i=n.buffers;i.unshift(r),e(i)}))}(t,n):n([h(t)])},i(l.prototype),l.prototype.add=function(t){var n;if("string"==typeof t)n=function(t){var n=0,i={type:Number(t.charAt(0))};if(null==e.types[i.type])return d("unknown packet type "+i.type);if(e.BINARY_EVENT===i.type||e.BINARY_ACK===i.type){for(var o="";"-"!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!==t.charAt(n))throw new Error("Illegal attachments");i.attachments=Number(o)}if("/"===t.charAt(n+1))for(i.nsp="";++n;){var a=t.charAt(n);if(","===a)break;if(i.nsp+=a,n===t.length)break}else i.nsp="/";var c=t.charAt(n+1);if(""!==c&&Number(c)==c){for(i.id="";++n;){a=t.charAt(n);if(null==a||Number(a)!=a){--n;break}if(i.id+=t.charAt(n),n===t.length)break}i.id=Number(i.id)}if(t.charAt(++n)){var u=function(t){try{return JSON.parse(t)}catch(t){return!1}}(t.substr(n)),h=!1!==u&&(i.type===e.ERROR||s(u));if(!h)return d("invalid payload");i.data=u}return r("decoded %s as %j",t,i),i}(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new f(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!a(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(n=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,this.emit("decoded",n))}},l.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},f.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=o.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},f.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var r=n(29),i=n(30),o=n(31);function s(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=c.prototype:(null===t&&(t=new c(e)),t.length=e),t}function c(t,e,n){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return u(this,t,e,n)}function u(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),c.TYPED_ARRAY_SUPPORT?(t=e).__proto__=c.prototype:t=f(t,e),t}(t,e,n,r):"string"==typeof e?function(t,e,n){if("string"==typeof n&&""!==n||(n="utf8"),!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|p(e,n),i=(t=a(t,r)).write(e,n);return i!==r&&(t=t.slice(0,i)),t}(t,e,n):function(t,e){if(c.isBuffer(e)){var n=0|d(e.length);return 0===(t=a(t,n)).length||e.copy(t,0,0,n),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?a(t,0):f(t,e);if("Buffer"===e.type&&o(e.data))return f(t,e.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function l(t,e){if(h(e),t=a(t,e<0?0:0|d(e)),!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function f(t,e){var n=e.length<0?0:0|d(e.length);t=a(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function d(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function p(t,e){if(c.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return B(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return V(t).length;default:if(r)return B(t).length;e=(""+e).toLowerCase(),r=!0}}function m(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function g(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=c.from(e,r)),c.isBuffer(e))return 0===e.length?-1:y(t,e,n,r,i);if("number"==typeof e)return e&=255,c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):y(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function y(t,e,n,r,i){var o,s=1,a=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,c/=2,n/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var h=-1;for(o=n;o<a;o++)if(u(t,o)===u(e,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===c)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(n+c>a&&(n=a-c),o=n;o>=0;o--){for(var l=!0,f=0;f<c;f++)if(u(t,o+f)!==u(e,f)){l=!1;break}if(l)return o}return-1}function v(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function b(t,e,n,r){return q(B(e,t.length-n),t,n,r)}function w(t,e,n,r){return q(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function _(t,e,n,r){return w(t,e,n,r)}function E(t,e,n,r){return q(V(e),t,n,r)}function T(t,e,n,r){return q(function(t,e){for(var n,r,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(e,t.length-n),t,n,r)}function I(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function k(t,e,n){n=Math.min(t.length,n);for(var r=[],i=e;i<n;){var o,s,a,c,u=t[i],h=null,l=u>239?4:u>223?3:u>191?2:1;if(i+l<=n)switch(l){case 1:u<128&&(h=u);break;case 2:128==(192&(o=t[i+1]))&&(c=(31&u)<<6|63&o)>127&&(h=c);break;case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(c=(15&u)<<12|(63&o)<<6|63&s)>2047&&(c<55296||c>57343)&&(h=c);break;case 4:o=t[i+1],s=t[i+2],a=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(c=(15&u)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&c<1114112&&(h=c)}null===h?(h=65533,l=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|1023&h),r.push(h),i+=l}return function(t){var e=t.length;if(e<=S)return String.fromCharCode.apply(String,t);for(var n="",r=0;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=S));return n}(r)}e.Buffer=c,e.SlowBuffer=function(t){return+t!=t&&(t=0),c.alloc(+t)},e.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),c.poolSize=8192,c._augment=function(t){return t.__proto__=c.prototype,t},c.from=function(t,e,n){return u(null,t,e,n)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(t,e,n){return function(t,e,n,r){return h(e),e<=0?a(t,e):void 0!==n?"string"==typeof r?a(t,e).fill(n,r):a(t,e).fill(n):a(t,e)}(null,t,e,n)},c.allocUnsafe=function(t){return l(null,t)},c.allocUnsafeSlow=function(t){return l(null,t)},c.isBuffer=function(t){return!(null==t||!t._isBuffer)},c.compare=function(t,e){if(!c.isBuffer(t)||!c.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=c.allocUnsafe(e),i=0;for(n=0;n<t.length;++n){var s=t[n];if(!c.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,i),i+=s.length}return r},c.byteLength=p,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},c.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},c.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},c.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?k(this,0,t):function(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,n);case"utf8":case"utf-8":return k(this,e,n);case"ascii":return C(this,e,n);case"latin1":case"binary":return A(this,e,n);case"base64":return I(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}.apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},c.prototype.compare=function(t,e,n,r,i){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(e>>>=0),a=Math.min(o,s),u=this.slice(r,i),h=t.slice(e,n),l=0;l<a;++l)if(u[l]!==h[l]){o=u[l],s=h[l];break}return o<s?-1:s<o?1:0},c.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},c.prototype.indexOf=function(t,e,n){return g(this,t,e,n,!0)},c.prototype.lastIndexOf=function(t,e,n){return g(this,t,e,n,!1)},c.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return v(this,t,e,n);case"utf8":case"utf-8":return b(this,t,e,n);case"ascii":return w(this,t,e,n);case"latin1":case"binary":return _(this,t,e,n);case"base64":return E(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var S=4096;function C(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function A(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function O(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=e;o<n;++o)i+=U(t[o]);return i}function x(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function N(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function R(t,e,n,r,i,o){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function P(t,e,n,r){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function D(t,e,n,r){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function L(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function M(t,e,n,r,o){return o||L(t,0,n,4),i.write(t,e,n,r,23,4),n+4}function j(t,e,n,r,o){return o||L(t,0,n,8),i.write(t,e,n,r,52,8),n+8}c.prototype.slice=function(t,e){var n,r=this.length;if((t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),c.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=c.prototype;else{var i=e-t;n=new c(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},c.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return r},c.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i;return r},c.prototype.readUInt8=function(t,e){return e||N(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,e){return e||N(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,e){return e||N(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,e){return e||N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,e){return e||N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*e)),r},c.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},c.prototype.readInt8=function(t,e){return e||N(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,e){e||N(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(t,e){e||N(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(t,e){return e||N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return e||N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,e){return e||N(t,4,this.length),i.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return e||N(t,4,this.length),i.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return e||N(t,8,this.length),i.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return e||N(t,8,this.length),i.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,e,n,r){t=+t,e|=0,n|=0,r||R(this,t,e,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255;return e+n},c.prototype.writeUIntBE=function(t,e,n,r){t=+t,e|=0,n|=0,r||R(this,t,e,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+n},c.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,1,255,0),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},c.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},c.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},c.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):D(this,t,e,!0),e+4},c.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},c.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);R(this,t,e,n,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<n&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},c.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);R(this,t,e,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},c.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,1,127,-128),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},c.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},c.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},c.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):D(this,t,e,!0),e+4},c.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},c.prototype.writeFloatLE=function(t,e,n){return M(this,t,e,!0,n)},c.prototype.writeFloatBE=function(t,e,n){return M(this,t,e,!1,n)},c.prototype.writeDoubleLE=function(t,e,n){return j(this,t,e,!0,n)},c.prototype.writeDoubleBE=function(t,e,n){return j(this,t,e,!1,n)},c.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var i,o=r-n;if(this===t&&n<e&&e<r)for(i=o-1;i>=0;--i)t[i+e]=this[i+n];else if(o<1e3||!c.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e);return o},c.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{var s=c.isBuffer(t)?t:B(new c(t,r).toString()),a=s.length;for(o=0;o<n-e;++o)this[o+e]=s[o%a]}return this};var F=/[^+\/0-9A-Za-z-_]/g;function U(t){return t<16?"0"+t.toString(16):t.toString(16)}function B(t,e){var n;e=e||1/0;for(var r=t.length,i=null,o=[],s=0;s<r;++s){if((n=t.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function V(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(F,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function q(t,e,n,r){for(var i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}}).call(this,n(12))},function(t,e,n){var r=n(34);t.exports=function(t){var e=t.xdomain,n=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!n&&i)return new XDomainRequest}catch(t){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}},function(t,e,n){var r=n(2),i=n(1);function o(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}t.exports=o,i(o.prototype),o.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},o.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},o.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},o.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},o.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},o.prototype.onData=function(t){var e=r.decodePacket(t,this.socket.binaryType);this.onPacket(e)},o.prototype.onPacket=function(t){this.emit("packet",t)},o.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,i=t.indexOf("["),o=t.indexOf("]");-1!=i&&-1!=o&&(t=t.substring(0,i)+t.substring(i,o).replace(/:/g,";")+t.substring(o,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return-1!=i&&-1!=o&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,n){(function(e){t.exports=function(t){return n&&e.isBuffer(t)||r&&(t instanceof ArrayBuffer||i(t))};var n="function"==typeof e&&"function"==typeof e.isBuffer,r="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}}).call(this,n(7).Buffer)},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(32),i=n(19),o=n(1),s=n(5),a=n(20),c=n(21),u=n(0)("socket.io-client:manager"),h=n(18),l=n(46),f=Object.prototype.hasOwnProperty;function d(t,e){if(!(this instanceof d))return new d(t,e);t&&"object"==typeof t&&(e=t,t=void 0),(e=e||{}).path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||s;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=!1!==e.autoConnect,this.autoConnect&&this.open()}t.exports=d,d.prototype.emitAll=function(){for(var t in this.emit.apply(this,arguments),this.nsps)f.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},d.prototype.updateSocketIds=function(){for(var t in this.nsps)f.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},d.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},o(d.prototype),d.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},d.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},d.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},d.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},d.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},d.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},d.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},d.prototype.open=d.prototype.connect=function(t,e){if(u("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;u("opening %s",this.uri),this.engine=r(this.uri,this.opts);var n=this.engine,i=this;this.readyState="opening",this.skipReconnect=!1;var o=a(n,"open",(function(){i.onopen(),t&&t()})),s=a(n,"error",(function(e){if(u("connect_error"),i.cleanup(),i.readyState="closed",i.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else i.maybeReconnectOnOpen()}));if(!1!==this._timeout){var c=this._timeout;u("connect attempt will timeout after %d",c);var h=setTimeout((function(){u("connect attempt timed out after %d",c),o.destroy(),n.close(),n.emit("error","timeout"),i.emitAll("connect_timeout",c)}),c);this.subs.push({destroy:function(){clearTimeout(h)}})}return this.subs.push(o),this.subs.push(s),this},d.prototype.onopen=function(){u("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(a(t,"data",c(this,"ondata"))),this.subs.push(a(t,"ping",c(this,"onping"))),this.subs.push(a(t,"pong",c(this,"onpong"))),this.subs.push(a(t,"error",c(this,"onerror"))),this.subs.push(a(t,"close",c(this,"onclose"))),this.subs.push(a(this.decoder,"decoded",c(this,"ondecoded")))},d.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},d.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},d.prototype.ondata=function(t){this.decoder.add(t)},d.prototype.ondecoded=function(t){this.emit("packet",t)},d.prototype.onerror=function(t){u("error",t),this.emitAll("error",t)},d.prototype.socket=function(t,e){var n=this.nsps[t];if(!n){n=new i(this,t,e),this.nsps[t]=n;var r=this;n.on("connecting",o),n.on("connect",(function(){n.id=r.generateId(t)})),this.autoConnect&&o()}function o(){~h(r.connecting,n)||r.connecting.push(n)}return n},d.prototype.destroy=function(t){var e=h(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},d.prototype.packet=function(t){u("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,(function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()})))},d.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},d.prototype.cleanup=function(){u("cleanup");for(var t=this.subs.length,e=0;e<t;e++)this.subs.shift().destroy();this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},d.prototype.close=d.prototype.disconnect=function(){u("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},d.prototype.onclose=function(t){u("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},d.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)u("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();u("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout((function(){t.skipReconnect||(u("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open((function(e){e?(u("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(u("reconnect success"),t.onreconnect())})))}),e);this.subs.push({destroy:function(){clearTimeout(n)}})}},d.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){var r=n(8),i=n(35),o=n(42),s=n(43);e.polling=function(t){var e=!1,n=!1,s=!1!==t.jsonp;if("undefined"!=typeof location){var a="https:"===location.protocol,c=location.port;c||(c=a?443:80),e=t.hostname!==location.hostname||c!==t.port,n=t.secure!==a}if(t.xdomain=e,t.xscheme=n,"open"in new r(t)&&!t.forceJSONP)return new i(t);if(!s)throw new Error("JSONP disabled");return new o(t)},e.websocket=s},function(t,e,n){var r=n(9),i=n(3),o=n(2),s=n(4),a=n(17),c=n(0)("engine.io-client:polling");t.exports=h;var u=null!=new(n(8))({xdomain:!1}).responseType;function h(t){var e=t&&t.forceBase64;u&&!e||(this.supportsBinary=!1),r.call(this,t)}s(h,r),h.prototype.name="polling",h.prototype.doOpen=function(){this.poll()},h.prototype.pause=function(t){var e=this;function n(){c("paused"),e.readyState="paused",t()}if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(c("we are currently polling - waiting to pause"),r++,this.once("pollComplete",(function(){c("pre-pause polling complete"),--r||n()}))),this.writable||(c("we are currently writing - waiting to pause"),r++,this.once("drain",(function(){c("pre-pause writing complete"),--r||n()})))}else n()},h.prototype.poll=function(){c("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},h.prototype.onData=function(t){var e=this;c("polling got data %s",t),o.decodePayload(t,this.socket.binaryType,(function(t,n,r){if("opening"===e.readyState&&e.onOpen(),"close"===t.type)return e.onClose(),!1;e.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():c('ignoring poll - transport state "%s"',this.readyState))},h.prototype.doClose=function(){var t=this;function e(){c("writing close packet"),t.write([{type:"close"}])}"open"===this.readyState?(c("transport open - closing"),e()):(c("transport not open - deferring close"),this.once("open",e))},h.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};o.encodePayload(t,this.supportsBinary,(function(t){e.doWrite(t,n)}))},h.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";return!1!==this.timestampRequests&&(t[this.timestampParam]=a()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t),e+"://"+(-1!==this.hostname.indexOf(":")?"["+this.hostname+"]":this.hostname)+n+this.path+t}},function(t,e,n){(function(e){var r=n(6),i=Object.prototype.toString,o="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),s="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=function t(n){if(!n||"object"!=typeof n)return!1;if(r(n)){for(var i=0,a=n.length;i<a;i++)if(t(n[i]))return!0;return!1}if("function"==typeof e&&e.isBuffer&&e.isBuffer(n)||"function"==typeof ArrayBuffer&&n instanceof ArrayBuffer||o&&n instanceof Blob||s&&n instanceof File)return!0;if(n.toJSON&&"function"==typeof n.toJSON&&1===arguments.length)return t(n.toJSON(),!0);for(var c in n)if(Object.prototype.hasOwnProperty.call(n,c)&&t(n[c]))return!0;return!1}}).call(this,n(7).Buffer)},function(t,e,n){"use strict";var r,i="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),o=64,s={},a=0,c=0;function u(t){var e="";do{e=i[t%o]+e,t=Math.floor(t/o)}while(t>0);return e}function h(){var t=u(+new Date);return t!==r?(a=0,r=t):t+"."+u(a++)}for(;c<o;c++)s[i[c]]=c;h.encode=u,h.decode=function(t){var e=0;for(c=0;c<t.length;c++)e=e*o+s[t.charAt(c)];return e},t.exports=h},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){var r=n(5),i=n(1),o=n(45),s=n(20),a=n(21),c=n(0)("socket.io-client:socket"),u=n(3),h=n(16);t.exports=d;var l={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},f=i.prototype.emit;function d(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}i(d.prototype),d.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[s(t,"open",a(this,"onopen")),s(t,"packet",a(this,"onpacket")),s(t,"close",a(this,"onclose"))]}},d.prototype.open=d.prototype.connect=function(){return this.connected||(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting")),this},d.prototype.send=function(){var t=o(arguments);return t.unshift("message"),this.emit.apply(this,t),this},d.prototype.emit=function(t){if(l.hasOwnProperty(t))return f.apply(this,arguments),this;var e=o(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:h(e))?r.BINARY_EVENT:r.EVENT,data:e,options:{}};return n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(c("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},d.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},d.prototype.onopen=function(){if(c("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"==typeof this.query?u.encode(this.query):this.query;c("sending connect packet with query %s",t),this.packet({type:r.CONNECT,query:t})}else this.packet({type:r.CONNECT})},d.prototype.onclose=function(t){c("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},d.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===r.ERROR&&"/"===t.nsp;if(e||n)switch(t.type){case r.CONNECT:this.onconnect();break;case r.EVENT:case r.BINARY_EVENT:this.onevent(t);break;case r.ACK:case r.BINARY_ACK:this.onack(t);break;case r.DISCONNECT:this.ondisconnect();break;case r.ERROR:this.emit("error",t.data)}},d.prototype.onevent=function(t){var e=t.data||[];c("emitting event %j",e),null!=t.id&&(c("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?f.apply(this,e):this.receiveBuffer.push(e)},d.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var i=o(arguments);c("sending ack %j",i),e.packet({type:h(i)?r.BINARY_ACK:r.ACK,id:t,data:i})}}},d.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(c("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):c("bad ack %s",t.id)},d.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},d.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)f.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},d.prototype.ondisconnect=function(){c("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},d.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},d.prototype.close=d.prototype.disconnect=function(){return this.connected&&(c("performing disconnect (%s)",this.nsp),this.packet({type:r.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},d.prototype.compress=function(t){return this.flags.compress=t,this},d.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){t.exports=function(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e,n){var r=n(24),i=n(5),o=n(13),s=n(0)("socket.io-client");t.exports=e=c;var a=e.managers={};function c(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,i=r(t),c=i.source,u=i.id,h=i.path,l=a[u]&&h in a[u].nsps;return e.forceNew||e["force new connection"]||!1===e.multiplex||l?(s("ignoring socket cache for %s",c),n=o(c,e)):(a[u]||(s("new io instance for %s",c),a[u]=o(c,e)),n=a[u]),i.query&&!e.query&&(e.query=i.query),n.socket(i.path,e)}e.protocol=i.protocol,e.connect=c,e.Manager=n(13),e.Socket=n(19)},function(t,e,n){t.exports=n(47)},function(t,e,n){var r=n(10),i=n(0)("socket.io-client:url");t.exports=function(t,e){var n=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t=void 0!==e?e.protocol+"//"+t:"https://"+t),i("parse %s",t),n=r(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var o=-1!==n.host.indexOf(":")?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port,n.href=n.protocol+"://"+o+(e&&e.port===n.port?"":":"+n.port),n}},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],h=!1,l=-1;function f(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&d())}function d(){if(!h){var t=a(f);h=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,h=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||h||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){function r(t){var n;function r(){if(r.enabled){var t=r,i=+new Date,o=i-(n||i);t.diff=o,t.prev=n,t.curr=i,n=i;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var i=e.formatters[r];if("function"==typeof i){var o=s[c];n=i.call(t,o),s.splice(c,1),c--}return n})),e.formatArgs.call(t,s),(r.log||e.log||console.log.bind(console)).apply(t,s)}}return r.namespace=t,r.enabled=e.enabled(t),r.useColors=e.useColors(),r.color=function(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}(t),r.destroy=i,"function"==typeof e.init&&e.init(r),e.instances.push(r),r}function i(){var t=e.instances.indexOf(this);return-1!==t&&(e.instances.splice(t,1),!0)}(e=t.exports=r.debug=r.default=r).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){var n;e.save(t),e.names=[],e.skips=[];var r=("string"==typeof t?t:"").split(/[\s,]+/),i=r.length;for(n=0;n<i;n++)r[n]&&("-"===(t=r[n].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var o=e.instances[n];o.enabled=e.enabled(o.namespace)}},e.enabled=function(t){if("*"===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1},e.humanize=n(27),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e){var n=1e3,r=60*n,i=60*r,o=24*i,s=365.25*o;function a(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}t.exports=function(t,e){e=e||{};var c,u=typeof t;if("string"===u&&t.length>0)return function(t){if(!((t=String(t)).length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var a=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*s;case"days":case"day":case"d":return a*o;case"hours":case"hour":case"hrs":case"hr":case"h":return a*i;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}(t);if("number"===u&&!1===isNaN(t))return e.long?a(c=t,o,"day")||a(c,i,"hour")||a(c,r,"minute")||a(c,n,"second")||c+" ms":function(t){return t>=o?Math.round(t/o)+"d":t>=i?Math.round(t/i)+"h":t>=r?Math.round(t/r)+"m":t>=n?Math.round(t/n)+"s":t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){var r=n(6),i=n(11),o=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===o.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===o.call(File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=function t(e,n){if(!e)return e;if(i(e)){var o={_placeholder:!0,num:n.length};return n.push(e),o}if(r(e)){for(var s=new Array(e.length),a=0;a<e.length;a++)s[a]=t(e[a],n);return s}if("object"==typeof e&&!(e instanceof Date)){s={};for(var c in e)s[c]=t(e[c],n);return s}return e}(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=function t(e,n){if(!e)return e;if(e&&e._placeholder)return n[e.num];if(r(e))for(var i=0;i<e.length;i++)e[i]=t(e[i],n);else if("object"==typeof e)for(var o in e)e[o]=t(e[o],n);return e}(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){var n=0,o=t;!function t(c,u,h){if(!c)return c;if(s&&c instanceof Blob||a&&c instanceof File){n++;var l=new FileReader;l.onload=function(){h?h[u]=this.result:o=this.result,--n||e(o)},l.readAsArrayBuffer(c)}else if(r(c))for(var f=0;f<c.length;f++)t(c[f],f,c);else if("object"==typeof c&&!i(c))for(var d in c)t(c[d],d,c)}(o),n||e(o)}},function(t,e,n){"use strict";e.byteLength=function(t){var e=u(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){for(var e,n=u(t),r=n[0],s=n[1],a=new o(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),c=0,h=s>0?r-4:r,l=0;l<h;l+=4)e=i[t.charCodeAt(l)]<<18|i[t.charCodeAt(l+1)]<<12|i[t.charCodeAt(l+2)]<<6|i[t.charCodeAt(l+3)],a[c++]=e>>16&255,a[c++]=e>>8&255,a[c++]=255&e;return 2===s&&(e=i[t.charCodeAt(l)]<<2|i[t.charCodeAt(l+1)]>>4,a[c++]=255&e),1===s&&(e=i[t.charCodeAt(l)]<<10|i[t.charCodeAt(l+1)]<<4|i[t.charCodeAt(l+2)]>>2,a[c++]=e>>8&255,a[c++]=255&e),a},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],s=0,a=n-i;s<a;s+=16383)o.push(h(t,s,s+16383>a?a:s+16383));return 1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),o.join("")};for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,c=s.length;a<c;++a)r[a]=s[a],i[s.charCodeAt(a)]=a;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function h(t,e,n){for(var i,o,s=[],a=e;a<n;a+=3)i=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,i){var o,s,a=8*i-r-1,c=(1<<a)-1,u=c>>1,h=-7,l=n?i-1:0,f=n?-1:1,d=t[e+l];for(l+=f,o=d&(1<<-h)-1,d>>=-h,h+=a;h>0;o=256*o+t[e+l],l+=f,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=r;h>0;s=256*s+t[e+l],l+=f,h-=8);if(0===o)o=1-u;else{if(o===c)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,r),o-=u}return(d?-1:1)*s*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var s,a,c,u=8*o-i-1,h=(1<<u)-1,l=h>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),(e+=s+l>=1?f/c:f*Math.pow(2,1-l))*c>=2&&(s++,c/=2),s+l>=h?(a=0,s=h):s+l>=1?(a=(e*c-1)*Math.pow(2,i),s+=l):(a=e*Math.pow(2,l-1)*Math.pow(2,i),s=0));i>=8;t[n+d]=255&a,d+=p,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;t[n+d]=255&s,d+=p,s/=256,u-=8);t[n+d-p]|=128*m}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){t.exports=n(33),t.exports.parser=n(2)},function(t,e,n){var r=n(14),i=n(1),o=n(0)("engine.io-client:socket"),s=n(18),a=n(2),c=n(10),u=n(3);function h(t,e){if(!(this instanceof h))return new h(t,e);e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=c(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=c(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=u.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}t.exports=h,h.priorWebsocketSuccess=!1,i(h.prototype),h.protocol=a.protocol,h.Socket=h,h.Transport=n(9),h.transports=n(14),h.parser=n(2),h.prototype.createTransport=function(t){o('creating transport "%s"',t);var e=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(this.query);e.EIO=a.protocol,e.transport=t;var n=this.transportOptions[t]||{};return this.id&&(e.sid=this.id),new r[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,isReactNative:this.isReactNative})},h.prototype.open=function(){var t;if(this.rememberUpgrade&&h.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout((function(){e.emit("error","No transports available")}),0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},h.prototype.setTransport=function(t){o("setting transport %s",t.name);var e=this;this.transport&&(o("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",(function(){e.onDrain()})).on("packet",(function(t){e.onPacket(t)})).on("error",(function(t){e.onError(t)})).on("close",(function(){e.onClose("transport close")}))},h.prototype.probe=function(t){o('probing transport "%s"',t);var e=this.createTransport(t,{probe:1}),n=!1,r=this;function i(){if(r.onlyBinaryUpgrades){var i=!this.supportsBinary&&r.transport.supportsBinary;n=n||i}n||(o('probe transport "%s" opened',t),e.send([{type:"ping",data:"probe"}]),e.once("packet",(function(i){if(!n)if("pong"===i.type&&"probe"===i.data){if(o('probe transport "%s" pong',t),r.upgrading=!0,r.emit("upgrading",e),!e)return;h.priorWebsocketSuccess="websocket"===e.name,o('pausing current transport "%s"',r.transport.name),r.transport.pause((function(){n||"closed"!==r.readyState&&(o("changing transport and sending upgrade packet"),f(),r.setTransport(e),e.send([{type:"upgrade"}]),r.emit("upgrade",e),e=null,r.upgrading=!1,r.flush())}))}else{o('probe transport "%s" failed',t);var s=new Error("probe error");s.transport=e.name,r.emit("upgradeError",s)}})))}function s(){n||(n=!0,f(),e.close(),e=null)}function a(n){var i=new Error("probe error: "+n);i.transport=e.name,s(),o('probe transport "%s" failed because of error: %s',t,n),r.emit("upgradeError",i)}function c(){a("transport closed")}function u(){a("socket closed")}function l(t){e&&t.name!==e.name&&(o('"%s" works - aborting "%s"',t.name,e.name),s())}function f(){e.removeListener("open",i),e.removeListener("error",a),e.removeListener("close",c),r.removeListener("close",u),r.removeListener("upgrading",l)}h.priorWebsocketSuccess=!1,e.once("open",i),e.once("error",a),e.once("close",c),this.once("close",u),this.once("upgrading",l),e.open()},h.prototype.onOpen=function(){if(o("socket open"),this.readyState="open",h.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){o("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},h.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(o('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else o('packet received with socket readyState "%s"',this.readyState)},h.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},h.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout((function(){"closed"!==e.readyState&&e.onClose("ping timeout")}),t||e.pingInterval+e.pingTimeout)},h.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout((function(){o("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)}),t.pingInterval)},h.prototype.ping=function(){var t=this;this.sendPacket("ping",(function(){t.emit("ping")}))},h.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},h.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(o("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},h.prototype.write=h.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},h.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){(n=n||{}).compress=!1!==n.compress;var i={type:t,data:e,options:n};this.emit("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}},h.prototype.close=function(){if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var t=this;this.writeBuffer.length?this.once("drain",(function(){this.upgrading?r():e()})):this.upgrading?r():e()}function e(){t.onClose("forced close"),o("socket closing - telling transport to close"),t.transport.close()}function n(){t.removeListener("upgrade",n),t.removeListener("upgradeError",n),e()}function r(){t.once("upgrade",n),t.once("upgradeError",n)}return this},h.prototype.onError=function(t){o("socket error %j",t),h.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},h.prototype.onClose=function(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(o('socket close with reason: "%s"',t),clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)},h.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~s(this.transports,t[n])&&e.push(t[n]);return e}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,n){var r=n(8),i=n(15),o=n(1),s=n(4),a=n(0)("engine.io-client:polling-xhr");function c(){}function u(t){if(i.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,n=location.port;n||(n=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}}function h(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}if(t.exports=u,t.exports.Request=h,s(u,i),u.prototype.supportsBinary=!0,u.prototype.request=function(t){return(t=t||{}).uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new h(t)},u.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),i=this;r.on("success",e),r.on("error",(function(t){i.onError("xhr post error",t)})),this.sendXhr=r},u.prototype.doPoll=function(){a("xhr poll");var t=this.request(),e=this;t.on("data",(function(t){e.onData(t)})),t.on("error",(function(t){e.onError("xhr poll error",t)})),this.pollXhr=t},o(h.prototype),h.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new r(t),n=this;try{a("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders)for(var i in e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0),this.extraHeaders)this.extraHeaders.hasOwnProperty(i)&&e.setRequestHeader(i,this.extraHeaders[i])}catch(t){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=!0),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){n.onLoad()},e.onerror=function(){n.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");n.supportsBinary&&"application/octet-stream"===t&&(e.responseType="arraybuffer")}catch(t){}4===e.readyState&&(200===e.status||1223===e.status?n.onLoad():setTimeout((function(){n.onError(e.status)}),0))},a("xhr data %s",this.data),e.send(this.data)}catch(t){return void setTimeout((function(){n.onError(t)}),0)}"undefined"!=typeof document&&(this.index=h.requestsCount++,h.requests[this.index]=this)},h.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},h.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},h.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},h.prototype.cleanup=function(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=c:this.xhr.onreadystatechange=c,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete h.requests[this.index],this.xhr=null}},h.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(t){}t="application/octet-stream"===e&&this.xhr.response||this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},h.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},h.prototype.abort=function(){this.cleanup()},h.requestsCount=0,h.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",f);else if("function"==typeof addEventListener){var l="onpagehide"in self?"pagehide":"unload";addEventListener(l,f,!1)}function f(){for(var t in h.requests)h.requests.hasOwnProperty(t)&&h.requests[t].abort()}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var i=new Uint8Array(t),o=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)o[a]=i[s];return o.buffer}},function(t,e){function n(){}t.exports=function(t,e,r){var i=!1;return r=r||n,o.count=t,0===t?e():o;function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}}},function(t,e){
/*! https://mths.be/utf8js v2.1.2 by @mathias */
var n,r,i,o=String.fromCharCode;function s(t){for(var e,n,r=[],i=0,o=t.length;i<o;)(e=t.charCodeAt(i++))>=55296&&e<=56319&&i<o?56320==(64512&(n=t.charCodeAt(i++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--):r.push(e);return r}function a(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function c(t,e){return o(t>>e&63|128)}function u(t,e){if(0==(4294967168&t))return o(t);var n="";return 0==(4294965248&t)?n=o(t>>6&31|192):0==(4294901760&t)?(a(t,e)||(t=65533),n=o(t>>12&15|224),n+=c(t,6)):0==(4292870144&t)&&(n=o(t>>18&7|240),n+=c(t,12),n+=c(t,6)),n+o(63&t|128)}function h(){if(i>=r)throw Error("Invalid byte index");var t=255&n[i];if(i++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function l(t){var e,o;if(i>r)throw Error("Invalid byte index");if(i==r)return!1;if(e=255&n[i],i++,0==(128&e))return e;if(192==(224&e)){if((o=(31&e)<<6|h())>=128)return o;throw Error("Invalid continuation byte")}if(224==(240&e)){if((o=(15&e)<<12|h()<<6|h())>=2048)return a(o,t)?o:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(o=(7&e)<<18|h()<<12|h()<<6|h())>=65536&&o<=1114111)return o;throw Error("Invalid UTF-8 detected")}t.exports={version:"2.1.2",encode:function(t,e){for(var n=!1!==(e=e||{}).strict,r=s(t),i=r.length,o=-1,a="";++o<i;)a+=u(r[o],n);return a},decode:function(t,e){var a=!1!==(e=e||{}).strict;n=s(t),r=n.length,i=0;for(var c,u=[];!1!==(c=l(a));)u.push(c);return function(t){for(var e,n=t.length,r=-1,i="";++r<n;)(e=t[r])>65535&&(i+=o((e-=65536)>>>10&1023|55296),e=56320|1023&e),i+=o(e);return i}(u)}}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),i=r.length,o="";for(n=0;n<i;n+=3)o+=t[r[n]>>2],o+=t[(3&r[n])<<4|r[n+1]>>4],o+=t[(15&r[n+1])<<2|r[n+2]>>6],o+=t[63&r[n+2]];return i%3==2?o=o.substring(0,o.length-1)+"=":i%3==1&&(o=o.substring(0,o.length-2)+"=="),o},e.decode=function(t){var e,r,i,o,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),l=new Uint8Array(h);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],i=n[t.charCodeAt(e+1)],o=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],l[u++]=r<<2|i>>4,l[u++]=(15&i)<<4|o>>2,l[u++]=(3&o)<<6|63&s;return h}}()},function(t,e){var n=void 0!==n?n:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,r=function(){try{return 2===new Blob(["hi"]).size}catch(t){return!1}}(),i=r&&function(){try{return 2===new Blob([new Uint8Array([1,2])]).size}catch(t){return!1}}(),o=n&&n.prototype.append&&n.prototype.getBlob;function s(t){return t.map((function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t}))}function a(t,e){e=e||{};var r=new n;return s(t).forEach((function(t){r.append(t)})),e.type?r.getBlob(e.type):r.getBlob()}function c(t,e){return new Blob(s(t),e||{})}"undefined"!=typeof Blob&&(a.prototype=Blob.prototype,c.prototype=Blob.prototype),t.exports=r?i?Blob:c:o?a:void 0},function(t,e,n){(function(e){var r=n(15),i=n(4);t.exports=h;var o,s=/\n/g,a=/\\n/g;function c(){}function u(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{}}function h(t){if(r.call(this,t),this.query=this.query||{},!o){var e=u();o=e.___eio=e.___eio||[]}this.index=o.length;var n=this;o.push((function(t){n.onData(t)})),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",(function(){n.script&&(n.script.onerror=c)}),!1)}i(h,r),h.prototype.supportsBinary=!1,h.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),r.prototype.doClose.call(this)},h.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e,"undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent)&&setTimeout((function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)}),100)},h.prototype.doWrite=function(t,e){var n=this;if(!this.form){var r,i=document.createElement("form"),o=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;i.className="socketio",i.style.position="absolute",i.style.top="-1000px",i.style.left="-1000px",i.target=c,i.method="POST",i.setAttribute("accept-charset","utf-8"),o.name="d",i.appendChild(o),document.body.appendChild(i),this.form=i,this.area=o}function u(){h(),e()}function h(){if(n.iframe)try{n.form.removeChild(n.iframe)}catch(t){n.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+n.iframeId+'">';r=document.createElement(t)}catch(t){(r=document.createElement("iframe")).name=n.iframeId,r.src="javascript:0"}r.id=n.iframeId,n.form.appendChild(r),n.iframe=r}this.form.action=this.uri(),h(),t=t.replace(a,"\\\n"),this.area.value=t.replace(s,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===n.iframe.readyState&&u()}:this.iframe.onload=u}}).call(this,n(12))},function(t,e,n){(function(e){var r,i,o=n(9),s=n(2),a=n(3),c=n(4),u=n(17),h=n(0)("engine.io-client:websocket");if("undefined"!=typeof WebSocket)r=WebSocket;else if("undefined"!=typeof self)r=self.WebSocket||self.MozWebSocket;else try{i=n(44)}catch(t){}var l=r||i;function f(t){t&&t.forceBase64&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=r&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=i),o.call(this,t)}t.exports=f,c(f,o),f.prototype.name="websocket",f.prototype.supportsBinary=!0,f.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new l(t,e):new l(t):new l(t,e,n)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},f.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},f.prototype.write=function(t){var n=this;this.writable=!1;for(var r=t.length,i=0,o=r;i<o;i++)!function(t){s.encodePacket(t,n.supportsBinary,(function(i){if(!n.usingBrowserWebSocket){var o={};t.options&&(o.compress=t.options.compress),n.perMessageDeflate&&("string"==typeof i?e.byteLength(i):i.length)<n.perMessageDeflate.threshold&&(o.compress=!1)}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,o)}catch(t){h("websocket closed before onclose event")}--r||a()}))}(t[i]);function a(){n.emit("flush"),setTimeout((function(){n.writable=!0,n.emit("drain")}),0)}},f.prototype.onClose=function(){o.prototype.onClose.call(this)},f.prototype.doClose=function(){void 0!==this.ws&&this.ws.close()},f.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";return this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),(t=a.encode(t)).length&&(t="?"+t),e+"://"+(-1!==this.hostname.indexOf(":")?"["+this.hostname+"]":this.hostname)+n+this.path+t},f.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===f.prototype.name)}}).call(this,n(7).Buffer)},function(t,e){},function(t,e){t.exports=function(t,e){for(var n=[],r=(e=e||0)||0;r<t.length;r++)n[r-e]=t[r];return n}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}},function(t,e,n){"use strict";n.r(e);var r={beforeCreate(){this.sockets||(this.sockets={}),this.sockets.subscribe=(t,e)=>{this.$vueSocketIo.emitter.addListener(t,e,this)},this.sockets.unsubscribe=t=>{this.$vueSocketIo.emitter.removeListener(t,this)}},mounted(){this.$options.sockets&&Object.keys(this.$options.sockets).forEach(t=>{"subscribe"!==t&&"unsubscribe"!==t&&this.$vueSocketIo.emitter.addListener(t,this.$options.sockets[t],this)})},beforeDestroy(){this.$options.sockets&&Object.keys(this.$options.sockets).forEach(t=>{this.$vueSocketIo.emitter.removeListener(t,this)})}};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.debug=!1,this.prefix="%cVue-Socket.io: "}var e,n,r;return e=t,(n=[{key:"info",value:function(t,e=""){this.debug&&window.console.info(this.prefix+"%c"+t,"color: blue; font-weight: 600","color: #333333",e)}},{key:"error",value:function(){this.debug&&window.console.error(this.prefix,...arguments)}},{key:"warn",value:function(){this.debug&&window.console.warn(this.prefix,...arguments)}},{key:"event",value:function(t,e=""){this.debug&&window.console.info(this.prefix+"%c"+t,"color: blue; font-weight: 600","color: #333333",e)}}])&&i(e.prototype,n),r&&i(e,r),t}());function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}let a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.io=e,this.register(),this.emitter=n}var e,n,r;return e=t,(n=[{key:"register",value:function(){this.io.onevent=t=>{let[e,...n]=t.data;1===n.length&&(n=n[0]),this.onEvent(e,n)},t.staticEvents.forEach(t=>this.io.on(t,e=>this.onEvent(t,e)))}},{key:"onEvent",value:function(t,e){this.emitter.emit(t,e)}}])&&s(e.prototype,n),r&&s(e,r),t}();var c,u,h;function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}h=["connect","error","disconnect","reconnect","reconnect_attempt","reconnecting","reconnect_error","reconnect_failed","connect_error","connect_timeout","connecting","ping","pong"],(u="staticEvents")in(c=a)?Object.defineProperty(c,u,{value:h,enumerable:!0,configurable:!0,writable:!0}):c[u]=h;let f=function(){function t(e={}){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.info(e?"Vuex adapter enabled":"Vuex adapter disabled"),o.info(e.mutationPrefix?"Vuex socket mutations enabled":"Vuex socket mutations disabled"),o.info(e?"Vuex socket actions enabled":"Vuex socket actions disabled"),this.store=e.store,this.actionPrefix=e.actionPrefix?e.actionPrefix:"SOCKET_",this.mutationPrefix=e.mutationPrefix,this.listeners=new Map}var e,n,r;return e=t,(n=[{key:"addListener",value:function(t,e,n){if("function"!=typeof e)throw new Error("callback must be a function");this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push({callback:e,component:n}),o.info(`#${t} subscribe, component: ${n.$options.name}`)}},{key:"removeListener",value:function(t,e){if(this.listeners.has(t)){const n=this.listeners.get(t).filter(t=>t.component!==e);n.length>0?this.listeners.set(t,n):this.listeners.delete(t),o.info(`#${t} unsubscribe, component: ${e.$options.name}`)}}},{key:"emit",value:function(t,e){this.listeners.has(t)&&(o.info(`Broadcasting: #${t}, Data:`,e),this.listeners.get(t).forEach(t=>{t.callback.call(t.component,e)})),"ping"!==t&&"pong"!==t&&this.dispatchStore(t,e)}},{key:"dispatchStore",value:function(t,e){if(this.store&&this.store._actions){let n=this.actionPrefix+t;for(let t in this.store._actions)t.split("/").pop()===n&&(o.info(`Dispatching Action: ${t}, Data:`,e),this.store.dispatch(t,e));if(this.mutationPrefix){let n=this.mutationPrefix+t;for(let t in this.store._mutations)t.split("/").pop()===n&&(o.info(`Commiting Mutation: ${t}, Data:`,e),this.store.commit(t,e))}}}}])&&l(e.prototype,n),r&&l(e,r),t}();var d=n(22),p=n.n(d);function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"default",(function(){return g}));let g=function(){function t({connection:e,vuex:n,debug:r,options:i}){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.debug=r,this.io=this.connect(e,i),this.emitter=new f(n),this.listener=new a(this.io,this.emitter)}var e,n,i;return e=t,(n=[{key:"install",value:function(t){t.prototype.$socket=this.io,t.prototype.$vueSocketIo=this,t.mixin(r),o.info("Vue-Socket.io plugin enabled")}},{key:"connect",value:function(t,e){if(t&&"object"==typeof t)return o.info("Received socket.io-client instance"),t;if("string"==typeof t)return o.info("Received connection string"),this.io=p()(t,e);throw new Error("Unsupported connection type")}}])&&m(e.prototype,n),i&&m(e,i),t}()}]).default}))},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;t.exports=o===Object.prototype?void 0:o},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),h=n("f772"),l=">",f="<",d="prototype",p="script",m=h("IE_PROTO"),g=function(){},y=function(t){return f+p+l+t+f+"/"+p+l},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?v(r):b():v(r);var t=s.length;while(t--)delete w[d][s[t]];return w()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[d]=i(t),n=new g,g[d]=null,n[m]=t):n=w(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("5e77"),s=n("1626"),a=n("9ed3"),c=n("e163"),u=n("d2bb"),h=n("d44e"),l=n("9112"),f=n("6eeb"),d=n("b622"),p=n("3f8c"),m=n("ae93"),g=o.PROPER,y=o.CONFIGURABLE,v=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,w=d("iterator"),_="keys",E="values",T="entries",I=function(){return this};t.exports=function(t,e,n,o,d,m,k){a(n,e,o);var S,C,A,O=function(t){if(t===d&&D)return D;if(!b&&t in R)return R[t];switch(t){case _:return function(){return new n(this,t)};case E:return function(){return new n(this,t)};case T:return function(){return new n(this,t)}}return function(){return new n(this)}},x=e+" Iterator",N=!1,R=t.prototype,P=R[w]||R["@@iterator"]||d&&R[d],D=!b&&P||O(d),L="Array"==e&&R.entries||P;if(L&&(S=c(L.call(new t)),S!==Object.prototype&&S.next&&(i||c(S)===v||(u?u(S,v):s(S[w])||f(S,w,I)),h(S,x,!0,!0),i&&(p[x]=I))),g&&d==E&&P&&P.name!==E&&(!i&&y?l(R,"name",E):(N=!0,D=function(){return P.call(this)})),d)if(C={values:O(E),keys:m?D:O(_),entries:O(T)},k)for(A in C)(b||N||!(A in R))&&f(R,A,C[A]);else r({target:e,proto:!0,forced:b||N},C);return i&&!k||R[w]===D||f(R,w,D,{name:d}),p[e]=D,C}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;t.exports=i(s)&&/native code/.test(o(s))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"83b9":function(t,e,n){"use strict";var r=n("d925"),i=n("e683");t.exports=function(t,e){return t&&!r(e)?i(t,e):e}},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"848b":function(t,e,n){"use strict";var r=n("5cce").version,i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var o={};function s(t,e,n){if("object"!==typeof t)throw new TypeError("options must be an object");var r=Object.keys(t),i=r.length;while(i-- >0){var o=r[i],s=e[o];if(s){var a=t[o],c=void 0===a||s(a,o,t);if(!0!==c)throw new TypeError("option "+o+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+o)}}i.transitional=function(t,e,n){function i(t,e){return"[Axios v"+r+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,s){if(!1===t)throw new Error(i(r," has been removed"+(e?" in "+e:"")));return e&&!o[r]&&(o[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}},t.exports={assertOptions:s,validators:i}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"===typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("1626"),i=n("c6cd"),o=Function.toString;r(i.inspectSource)||(i.inspectSource=function(t){return o.call(t)}),t.exports=i.inspectSource},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){0}function i(t,e){for(var n in e)t[n]=e[n];return t}var o=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,c=function(t){return encodeURIComponent(t).replace(o,s).replace(a,",")};function u(t){try{return decodeURIComponent(t)}catch(e){0}return t}function h(t,e,n){void 0===e&&(e={});var r,i=n||f;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function f(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=u(n.shift()),i=n.length>0?u(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return c(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(c(e)):r.push(c(e)+"="+c(t)))})),r.join("&")}return c(e)+"="+c(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function m(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=g(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:b(e,i),matched:t?v(t):[]};return n&&(s.redirectedFrom=b(n,i)),Object.freeze(s)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var y=m(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function b(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||d;return(n||"/")+o(r)+i}function w(t,e,n){return e===y?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?_(o,a):String(o)===String(a)}))}function E(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&T(t.query,e.query)}function T(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var k={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,h=o._routerViewCache||(o._routerViewCache={}),l=0,f=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&l++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=l,f){var p=h[c],m=p&&p.component;return m?(p.configProps&&S(m,s,p.route,p.configProps),a(m,s,r)):a()}var g=u.matched[l],y=g&&g.components[c];if(!g||!y)return h[c]=null,a();h[c]={component:y},s.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),I(u)};var v=g.props&&g.props[c];return v&&(i(h[c],{route:u,configProps:v}),S(y,s,u,v)),a(y,s,r)}};function S(t,e,n,r){var o=e.props=C(n,r);if(o){o=e.props=i({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function C(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function A(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function O(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/\//g,"/")}var N=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},R=X,P=F,D=U,L=q,M=J,j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function F(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=j.exec(t))){var c=n[0],u=n[1],h=n.index;if(s+=t.slice(o,h),o=h+c.length,u)s+=u[1];else{var l=t[o],f=n[2],d=n[3],p=n[4],m=n[5],g=n[6],y=n[7];s&&(r.push(s),s="");var v=null!=f&&null!=l&&l!==f,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,E=p||m;r.push({name:d||i++,prefix:f||"",delimiter:_,optional:w,repeat:b,partial:v,asterisk:!!y,pattern:E?z(E):y?".*":"[^"+$(_)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function U(t,e){return q(F(t,e),e)}function B(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function q(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",K(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?B:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var h,l=o[u.name];if(null==l){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(N(l)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(h=a(l[f]),!n[c].test(h))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(h)+"`");i+=(0===f?u.prefix:u.delimiter)+h}}else{if(h=u.asterisk?V(l):a(l),!n[c].test(h))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+h+'"');i+=u.prefix+h}}else i+=u}return i}}function $(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function K(t){return t&&t.sensitive?"":"i"}function W(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(X(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",K(n));return H(o,e)}function Y(t,e,n){return J(F(t,n),e,n)}function J(t,e,n){N(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=$(a);else{var c=$(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var h=$(n.delimiter||"/"),l=o.slice(-h.length)===h;return r||(o=(l?o.slice(0,-h.length):o)+"(?:"+h+"(?=$))?"),o+=i?"$":r&&l?"":"(?="+h+"|$)",H(new RegExp("^"+o,K(n)),e)}function X(t,e,n){return N(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?W(t,e):N(t)?G(t,e,n):Y(t,e,n)}R.parse=P,R.compile=D,R.tokensToFunction=L,R.tokensToRegExp=M;var Q=Object.create(null);function Z(t,e,n){e=e||{};try{var r=Q[t]||(Q[t]=R.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function tt(t,e,n,r){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=i({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=i({},s)),o}if(!o.path&&o.params&&e){o=i({},o),o._normalized=!0;var a=i(i({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=Z(c,a,"path "+e.path)}else 0;return o}var u=O(o.path||""),l=e&&e.path||"/",f=u.path?A(u.path,l,n||o.append):l,d=h(u.query,o.query,r&&r.options.parseQuery),p=o.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var et,nt=[String,Object],rt=[String,Array],it=function(){},ot={name:"RouterLink",props:{to:{type:nt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),s=o.location,a=o.route,c=o.href,u={},h=n.options.linkActiveClass,l=n.options.linkExactActiveClass,f=null==h?"router-link-active":h,d=null==l?"router-link-exact-active":l,p=null==this.activeClass?f:this.activeClass,g=null==this.exactActiveClass?d:this.exactActiveClass,y=a.redirectedFrom?m(null,tt(a.redirectedFrom),null,n):a;u[g]=w(r,y,this.exactPath),u[p]=this.exact||this.exactPath?u[g]:E(r,y);var v=u[g]?this.ariaCurrentValue:null,b=function(t){st(t)&&(e.replace?n.replace(s,it):n.push(s,it))},_={click:st};Array.isArray(this.event)?this.event.forEach((function(t){_[t]=b})):_[this.event]=b;var T={class:u},I=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[p],isExactActive:u[g]});if(I){if(1===I.length)return I[0];if(I.length>1||!I.length)return 0===I.length?t():t("span",{},I)}if("a"===this.tag)T.on=_,T.attrs={href:c,"aria-current":v};else{var k=at(this.$slots.default);if(k){k.isStatic=!1;var S=k.data=i({},k.data);for(var C in S.on=S.on||{},S.on){var A=S.on[C];C in _&&(S.on[C]=Array.isArray(A)?A:[A])}for(var O in _)O in S.on?S.on[O].push(_[O]):S.on[O]=b;var x=k.data.attrs=i({},k.data.attrs);x.href=c,x["aria-current"]=v}else T.on=_}return t(this.tag,T,this.$slots.default)}};function st(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ct(t){if(!ct.installed||et!==t){ct.installed=!0,et=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",k),t.component("RouterLink",ot);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ut="undefined"!==typeof window;function ht(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(o,s,a,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function lt(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=dt(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var h={path:u,regex:ft(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?x(o+"/"+r.path):void 0;lt(t,e,n,r,h,i)})),e[h.path]||(t.push(h.path),e[h.path]=h),void 0!==r.alias)for(var l=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<l.length;++f){var d=l[f];0;var p={path:d,children:r.children};lt(t,e,n,p,i,h.path||"/")}a&&(n[a]||(n[a]=h))}function ft(t,e){var n=R(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function pt(t,e){var n=ht(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){ht(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;ht([e||t],r,i,o,n),n&&n.alias.length&&ht(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,s){var a=tt(t,n,!1,e),c=a.name;if(c){var u=o[c];if(!u)return f(null,a);var h=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var l in n.params)!(l in a.params)&&h.indexOf(l)>-1&&(a.params[l]=n.params[l]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),f(u,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],m=i[p];if(mt(m.regex,a.path,a.params))return f(m,a,s)}}return f(null,a)}function h(t,n){var r=t.redirect,i="function"===typeof r?r(m(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var s=i,a=s.name,c=s.path,h=n.query,l=n.hash,d=n.params;if(h=s.hasOwnProperty("query")?s.query:h,l=s.hasOwnProperty("hash")?s.hash:l,d=s.hasOwnProperty("params")?s.params:d,a){o[a];return u({_normalized:!0,name:a,query:h,hash:l,params:d},void 0,n)}if(c){var p=gt(c,t),g=Z(p,d,'redirect route with path "'+p+'"');return u({_normalized:!0,path:g,query:h,hash:l},void 0,n)}return f(null,n)}function l(t,e,n){var r=Z(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,f(s,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?h(t,r||n):t&&t.matchAs?l(t,n,t.matchAs):m(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function mt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?u(r[i]):r[i])}return!0}function gt(t,e){return A(t,e.parent?e.parent.path:"/",!0)}var yt=ut&&window.performance&&window.performance.now?window.performance:Date;function vt(){return yt.now().toFixed(3)}var bt=vt();function wt(){return bt}function _t(t){return bt=t}var Et=Object.create(null);function Tt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",St),function(){window.removeEventListener("popstate",St)}}function It(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=Ct(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Dt(t,o)})).catch((function(t){0})):Dt(s,o))}))}}function kt(){var t=wt();t&&(Et[t]={x:window.pageXOffset,y:window.pageYOffset})}function St(t){kt(),t.state&&t.state.key&&_t(t.state.key)}function Ct(){var t=wt();if(t)return Et[t]}function At(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function Ot(t){return Rt(t.x)||Rt(t.y)}function xt(t){return{x:Rt(t.x)?t.x:window.pageXOffset,y:Rt(t.y)?t.y:window.pageYOffset}}function Nt(t){return{x:Rt(t.x)?t.x:0,y:Rt(t.y)?t.y:0}}function Rt(t){return"number"===typeof t}var Pt=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Nt(i),e=At(r,i)}else Ot(t)&&(e=xt(t))}else n&&Ot(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=ut&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Mt(t,e){kt();var n=window.history;try{if(e){var r=i({},n.state);r.key=wt(),n.replaceState(r,"",t)}else n.pushState({key:_t(vt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function jt(t){Mt(t,!0)}function Ft(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ut={redirected:2,aborted:4,cancelled:8,duplicated:16};function Bt(t,e){return zt(t,e,Ut.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Kt(e)+'" via a navigation guard.')}function Vt(t,e){var n=zt(t,e,Ut.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function qt(t,e){return zt(t,e,Ut.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function $t(t,e){return zt(t,e,Ut.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function zt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Ht=["params","query","hash"];function Kt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ht.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Wt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Gt(t,e){return Wt(t)&&t._isRouter&&(null==e||t.type===e)}function Yt(t){return function(e,n,r){var i=!1,o=0,s=null;Jt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=te((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:et.extend(e),n.components[a]=e,o--,o<=0&&r()})),h=te((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=Wt(t)?t:new Error(e),r(s))}));try{c=t(u,h)}catch(f){h(f)}if(c)if("function"===typeof c.then)c.then(u,h);else{var l=c.component;l&&"function"===typeof l.then&&l.then(u,h)}}})),i||r()}}function Jt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Qt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Qt&&"Module"===t[Symbol.toStringTag]}function te(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var ee=function(t,e){this.router=t,this.base=ne(e),this.current=y,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ne(t){if(!t)if(ut){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ie(t,e,n,r){var i=Jt(t,(function(t,r,i,o){var s=oe(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Xt(r?i.reverse():i)}function oe(t,e){return"function"!==typeof t&&(t=et.extend(t)),t.options[e]}function se(t){return ie(t,"beforeRouteLeave",ce,!0)}function ae(t){return ie(t,"beforeRouteUpdate",ce)}function ce(t,e){if(e)return function(){return t.apply(e,arguments)}}function ue(t){return ie(t,"beforeRouteEnter",(function(t,e,n,r){return he(t,n,r)}))}function he(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Gt(t,Ut.redirected)&&o===y||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},ee.prototype.confirmTransition=function(t,e,n){var i=this,o=this.current;this.pending=t;var s=function(t){!Gt(t)&&Wt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)},a=t.matched.length-1,c=o.matched.length-1;if(w(t,o)&&a===c&&t.matched[a]===o.matched[c])return this.ensureURL(),s(Vt(o,t));var u=re(this.current.matched,t.matched),h=u.updated,l=u.deactivated,f=u.activated,d=[].concat(se(l),this.router.beforeHooks,ae(h),f.map((function(t){return t.beforeEnter})),Yt(f)),p=function(e,n){if(i.pending!==t)return s(qt(o,t));try{e(t,o,(function(e){!1===e?(i.ensureURL(!0),s($t(o,t))):Wt(e)?(i.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Bt(o,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(r){s(r)}};Ft(d,p,(function(){var n=ue(f),r=n.concat(i.router.resolveHooks);Ft(r,p,(function(){if(i.pending!==t)return s(qt(o,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){I(t)}))}))}))},ee.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ee.prototype.setupListeners=function(){},ee.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=y,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=fe(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Tt());var i=function(){var n=t.current,i=fe(t.base);t.current===y&&i===t._startLocation||t.transitionTo(i,(function(t){r&&It(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Mt(x(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){jt(x(r.base+t.fullPath)),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(fe(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Mt(e):jt(e)}},e.prototype.getCurrentLocation=function(){return fe(this.base)},e}(ee);function fe(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(x(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,r){t.call(this,e,n),r&&pe(this.base)||me()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Tt());var i=function(){var e=t.current;me()&&t.transitionTo(ge(),(function(n){r&&It(t.router,n,e,!0),Lt||be(n.fullPath)}))},o=Lt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){be(t.fullPath),It(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ge()!==e&&(t?ve(e):be(e))},e.prototype.getCurrentLocation=function(){return ge()},e}(ee);function pe(t){var e=fe(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function me(){var t=ge();return"/"===t.charAt(0)||(be("/"+t),!1)}function ge(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ye(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Lt?Mt(ye(t)):window.location.hash=t}function be(t){Lt?jt(ye(t)):window.location.replace(ye(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Gt(t,Ut.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),ut||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},Ee={currentRoute:{configurable:!0}};function Te(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var r="hash"===n?"#"+e:e;return t?x(t+"/"+r):r}_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},Ee.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof de){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Lt&&i;o&&"fullPath"in t&&It(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return Te(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return Te(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return Te(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=tt(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Ie(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,Ee),_e.install=ct,_e.version="3.5.2",_e.isNavigationFailure=Gt,_e.NavigationFailureType=Ut,_e.START_LOCATION=y,ut&&window.Vue&&window.Vue.use(_e),e["a"]=_e},"8df4":function(t,e,n){"use strict";var r=n("7a77");function i(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},i.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},i.source=function(){var t,e=new i((function(e){t=e}));return{token:e,cancel:t}},t.exports=i},"90aa":function(t,e){var n=1e3,r=60*n,i=60*r,o=24*i,s=365.25*o;function a(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var a=parseFloat(e[1]),c=(e[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return a*s;case"days":case"day":case"d":return a*o;case"hours":case"hour":case"hrs":case"hr":case"h":return a*i;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function c(t){return t>=o?Math.round(t/o)+"d":t>=i?Math.round(t/i)+"h":t>=r?Math.round(t/r)+"m":t>=n?Math.round(t/n)+"s":t+"ms"}function u(t){return h(t,o,"day")||h(t,i,"hour")||h(t,r,"minute")||h(t,n,"second")||t+" ms"}function h(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}t.exports=function(t,e){e=e||{};var n=typeof t;if("string"===n&&t.length>0)return a(t);if("number"===n&&!1===isNaN(t))return e.long?u(t):c(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9152:function(t,e){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
e.read=function(t,e,n,r,i){var o,s,a=8*i-r-1,c=(1<<a)-1,u=c>>1,h=-7,l=n?i-1:0,f=n?-1:1,d=t[e+l];for(l+=f,o=d&(1<<-h)-1,d>>=-h,h+=a;h>0;o=256*o+t[e+l],l+=f,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=r;h>0;s=256*s+t[e+l],l+=f,h-=8);if(0===o)o=1-u;else{if(o===c)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,r),o-=u}return(d?-1:1)*s*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var s,a,c,u=8*o-i-1,h=(1<<u)-1,l=h>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),e+=s+l>=1?f/c:f*Math.pow(2,1-l),e*c>=2&&(s++,c/=2),s+l>=h?(a=0,s=h):s+l>=1?(a=(e*c-1)*Math.pow(2,i),s+=l):(a=e*Math.pow(2,l-1)*Math.pow(2,i),s=0));i>=8;t[n+d]=255&a,d+=p,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;t[n+d]=255&s,d+=p,s/=256,u-=8);t[n+d-p]|=128*m}},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==h||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",h=s.POLYFILL="P";t.exports=s},9507:function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),s=new O(r||[]);return o._invoke=k(t,n,s),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function g(){}function y(){}function v(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(x([])));_&&_!==n&&r.call(_,o)&&(b=_);var E=v.prototype=g.prototype=Object.create(b);function T(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function n(i,o,s,a){var c=h(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(l).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function k(t,e,n){var r=l;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return N()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=S(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=h(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function x(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=v,c(E,"constructor",v),c(v,"constructor",y),y.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},T(I.prototype),c(I.prototype,s,(function(){return this})),t.AsyncIterator=I,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new I(u(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},T(E),c(E,a,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(t,e,n){var r=n("59ed"),i=n("825a"),o=n("35a1");t.exports=function(t,e){var n=arguments.length<2?o(t):e;if(r(n))return i(n.call(t));throw TypeError(String(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=s(e),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),s(t,u,!1,!0),a[u]=c,t}},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a18b:function(t,e){t.exports=function(){return"undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")()}()},a31f:function(t,e){(function(t){"use strict";e.encode=function(e){var n,r=new Uint8Array(e),i=r.length,o="";for(n=0;n<i;n+=3)o+=t[r[n]>>2],o+=t[(3&r[n])<<4|r[n+1]>>4],o+=t[(15&r[n+1])<<2|r[n+2]>>6],o+=t[63&r[n+2]];return i%3===2?o=o.substring(0,o.length-1)+"=":i%3===1&&(o=o.substring(0,o.length-2)+"=="),o},e.decode=function(e){var n,r,i,o,s,a=.75*e.length,c=e.length,u=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var h=new ArrayBuffer(a),l=new Uint8Array(h);for(n=0;n<c;n+=4)r=t.indexOf(e[n]),i=t.indexOf(e[n+1]),o=t.indexOf(e[n+2]),s=t.indexOf(e[n+3]),l[u++]=r<<2|i>>4,l[u++]=(15&i)<<4|o>>2,l[u++]=(3&o)<<6|63&s;return h}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("d039"),h=n("1a2d"),l=n("e8b5"),f=n("1626"),d=n("861d"),p=n("d9b5"),m=n("825a"),g=n("7b0b"),y=n("fc6a"),v=n("a04b"),b=n("577e"),w=n("5c6c"),_=n("7c73"),E=n("df75"),T=n("241c"),I=n("057f"),k=n("7418"),S=n("06cf"),C=n("9bf2"),A=n("d1e7"),O=n("6eeb"),x=n("5692"),N=n("f772"),R=n("d012"),P=n("90e3"),D=n("b622"),L=n("e538"),M=n("746f"),j=n("d44e"),F=n("69f3"),U=n("b727").forEach,B=N("hidden"),V="Symbol",q="prototype",$=D("toPrimitive"),z=F.set,H=F.getterFor(V),K=Object[q],W=i.Symbol,G=o("JSON","stringify"),Y=S.f,J=C.f,X=I.f,Q=A.f,Z=x("symbols"),tt=x("op-symbols"),et=x("string-to-symbol-registry"),nt=x("symbol-to-string-registry"),rt=x("wks"),it=i.QObject,ot=!it||!it[q]||!it[q].findChild,st=a&&u((function(){return 7!=_(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Y(K,e);r&&delete K[e],J(t,e,n),r&&t!==K&&J(K,e,r)}:J,at=function(t,e){var n=Z[t]=_(W[q]);return z(n,{type:V,tag:t,description:e}),a||(n.description=e),n},ct=function(t,e,n){t===K&&ct(tt,e,n),m(t);var r=v(e);return m(n),h(Z,r)?(n.enumerable?(h(t,B)&&t[B][r]&&(t[B][r]=!1),n=_(n,{enumerable:w(0,!1)})):(h(t,B)||J(t,B,w(1,{})),t[B][r]=!0),st(t,r,n)):J(t,r,n)},ut=function(t,e){m(t);var n=y(e),r=E(n).concat(pt(n));return U(r,(function(e){a&&!lt.call(n,e)||ct(t,e,n[e])})),t},ht=function(t,e){return void 0===e?_(t):ut(_(t),e)},lt=function(t){var e=v(t),n=Q.call(this,e);return!(this===K&&h(Z,e)&&!h(tt,e))&&(!(n||!h(this,e)||!h(Z,e)||h(this,B)&&this[B][e])||n)},ft=function(t,e){var n=y(t),r=v(e);if(n!==K||!h(Z,r)||h(tt,r)){var i=Y(n,r);return!i||!h(Z,r)||h(n,B)&&n[B][r]||(i.enumerable=!0),i}},dt=function(t){var e=X(y(t)),n=[];return U(e,(function(t){h(Z,t)||h(R,t)||n.push(t)})),n},pt=function(t){var e=t===K,n=X(e?tt:y(t)),r=[];return U(n,(function(t){!h(Z,t)||e&&!h(K,t)||r.push(Z[t])})),r};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,e=P(t),n=function(t){this===K&&n.call(tt,t),h(this,B)&&h(this[B],e)&&(this[B][e]=!1),st(this,e,w(1,t))};return a&&ot&&st(K,e,{configurable:!0,set:n}),at(e,t)},O(W[q],"toString",(function(){return H(this).tag})),O(W,"withoutSetter",(function(t){return at(P(t),t)})),A.f=lt,C.f=ct,S.f=ft,T.f=I.f=dt,k.f=pt,L.f=function(t){return at(D(t),t)},a&&(J(W[q],"description",{configurable:!0,get:function(){return H(this).description}}),s||O(K,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),U(E(rt),(function(t){M(t)})),r({target:V,stat:!0,forced:!c},{for:function(t){var e=b(t);if(h(et,e))return et[e];var n=W(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!p(t))throw TypeError(t+" is not a symbol");if(h(nt,t))return nt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:ht,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(g(t))}}),G){var mt=!c||u((function(){var t=W();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));r({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(d(e)||void 0!==t)&&!p(t))return l(e)||(e=function(t,e){if(f(r)&&(e=r.call(this,t,e)),!p(e))return e}),i[1]=e,G.apply(null,i)}})}if(!W[q][$]){var gt=W[q].valueOf;O(W[q],$,(function(){return gt.apply(this,arguments)}))}j(W,V),R[B]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a6b8:function(t,e,n){t.exports=n("c948"),t.exports.parser=n("e6f9")},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),h=n("cdf9"),l=n("6eeb"),f=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return h(e,t()).then((function(){return n}))}:t,n?function(n){return h(e,t()).then((function(){throw n}))}:t)}}),!i&&c(o)){var d=a("Promise").prototype["finally"];o.prototype["finally"]!==d&&l(o.prototype,"finally",d,{unsafe:!0})}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("1a2d"),c=n("7156"),u=n("d9b5"),h=n("c04e"),l=n("d039"),f=n("241c").f,d=n("06cf").f,p=n("9bf2").f,m=n("408a"),g=n("58a8").trim,y="Number",v=i[y],b=v.prototype,w=function(t){var e=h(t,"number");return"bigint"===typeof e?e:_(e)},_=function(t){var e,n,r,i,o,s,a,c,l=h(t,"number");if(u(l))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(o=l.slice(2),s=o.length,a=0;a<s;a++)if(c=o.charCodeAt(a),c<48||c>i)return NaN;return parseInt(o,r)}return+l};if(o(y,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var E,T=function(t){var e=arguments.length<1?0:v(w(t)),n=this;return n instanceof T&&l((function(){m(n)}))?c(Object(e),n,T):e},I=r?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;I.length>k;k++)a(v,E=I[k])&&!a(T,E)&&p(T,E,d(v,E));T.prototype=b,b.constructor=T,s(i,y,T)}},aac1:function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),h=n("6eeb"),l=n("b622"),f=n("c430"),d=l("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||s((function(){var t={};return r[d].call(t)!==t}));m?r={}:f&&(r=c(r)),a(r[d])||h(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aecf:function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function i(t){var n;function i(){if(i.enabled){var t=i,r=+new Date,o=r-(n||r);t.diff=o,t.prev=n,t.curr=r,n=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!==typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var i=e.formatters[r];if("function"===typeof i){var o=s[c];n=i.call(t,o),s.splice(c,1),c--}return n})),e.formatArgs.call(t,s);var u=i.log||e.log||console.log.bind(console);u.apply(t,s)}}return i.namespace=t,i.enabled=e.enabled(t),i.useColors=e.useColors(),i.color=r(t),i.destroy=o,"function"===typeof e.init&&e.init(i),e.instances.push(i),i}function o(){var t=e.instances.indexOf(this);return-1!==t&&(e.instances.splice(t,1),!0)}function s(t){var n;e.save(t),e.names=[],e.skips=[];var r=("string"===typeof t?t:"").split(/[\s,]+/),i=r.length;for(n=0;n<i;n++)r[n]&&(t=r[n].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var o=e.instances[n];o.enabled=e.enabled(o.namespace)}}function a(){e.enable("")}function c(t){if("*"===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function u(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=i.debug=i["default"]=i,e.coerce=u,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n("90aa"),e.instances=[],e.names=[],e.skips=[],e.formatters={}},af37:function(t,e,n){var r=n("bd0a"),i=n("6811"),o=n("e6f9"),s=n("2770"),a=n("5857"),c=n("6890")("engine.io-client:polling");t.exports=h;var u=function(){var t=n("2786"),e=new t({xdomain:!1});return null!=e.responseType}();function h(t){var e=t&&t.forceBase64;u&&!e||(this.supportsBinary=!1),r.call(this,t)}s(h,r),h.prototype.name="polling",h.prototype.doOpen=function(){this.poll()},h.prototype.pause=function(t){var e=this;function n(){c("paused"),e.readyState="paused",t()}if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(c("we are currently polling - waiting to pause"),r++,this.once("pollComplete",(function(){c("pre-pause polling complete"),--r||n()}))),this.writable||(c("we are currently writing - waiting to pause"),r++,this.once("drain",(function(){c("pre-pause writing complete"),--r||n()})))}else n()},h.prototype.poll=function(){c("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},h.prototype.onData=function(t){var e=this;c("polling got data %s",t);var n=function(t,n,r){if("opening"===e.readyState&&"open"===t.type&&e.onOpen(),"close"===t.type)return e.onClose(),!1;e.onPacket(t)};o.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():c('ignoring poll - transport state "%s"',this.readyState))},h.prototype.doClose=function(){var t=this;function e(){c("writing close packet"),t.write([{type:"close"}])}"open"===this.readyState?(c("transport open - closing"),e()):(c("transport not open - deferring close"),this.once("open",e))},h.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};o.encodePayload(t,this.supportsBinary,(function(t){e.doWrite(t,n)}))},h.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=a()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b50d:function(t,e,n){"use strict";var r=n("c532"),i=n("467f"),o=n("7aac"),s=n("30b5"),a=n("83b9"),c=n("c345"),u=n("3934"),h=n("2d83"),l=n("2444"),f=n("7a77");t.exports=function(t){return new Promise((function(e,n){var d,p=t.data,m=t.headers,g=t.responseType;function y(){t.cancelToken&&t.cancelToken.unsubscribe(d),t.signal&&t.signal.removeEventListener("abort",d)}r.isFormData(p)&&delete m["Content-Type"];var v=new XMLHttpRequest;if(t.auth){var b=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+w)}var _=a(t.baseURL,t.url);function E(){if(v){var r="getAllResponseHeaders"in v?c(v.getAllResponseHeaders()):null,o=g&&"text"!==g&&"json"!==g?v.response:v.responseText,s={data:o,status:v.status,statusText:v.statusText,headers:r,config:t,request:v};i((function(t){e(t),y()}),(function(t){n(t),y()}),s),v=null}}if(v.open(t.method.toUpperCase(),s(_,t.params,t.paramsSerializer),!0),v.timeout=t.timeout,"onloadend"in v?v.onloadend=E:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(E)},v.onabort=function(){v&&(n(h("Request aborted",t,"ECONNABORTED",v)),v=null)},v.onerror=function(){n(h("Network Error",t,null,v)),v=null},v.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||l.transitional;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(h(e,t,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},r.isStandardBrowserEnv()){var T=(t.withCredentials||u(_))&&t.xsrfCookieName?o.read(t.xsrfCookieName):void 0;T&&(m[t.xsrfHeaderName]=T)}"setRequestHeader"in v&&r.forEach(m,(function(t,e){"undefined"===typeof p&&"content-type"===e.toLowerCase()?delete m[e]:v.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(v.withCredentials=!!t.withCredentials),g&&"json"!==g&&(v.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&v.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(d=function(t){v&&(n(!t||t&&t.type?new f("canceled"):t),v.abort(),v=null)},t.cancelToken&&t.cancelToken.subscribe(d),t.signal&&(t.signal.aborted?d():t.signal.addEventListener("abort",d))),p||(p=null),v.send(p)}))}},b575:function(t,e,n){var r,i,o,s,a,c,u,h,l=n("da84"),f=n("06cf").f,d=n("2cf4").set,p=n("1cdc"),m=n("d4c3"),g=n("a4b4"),y=n("605d"),v=l.MutationObserver||l.WebKitMutationObserver,b=l.document,w=l.process,_=l.Promise,E=f(l,"queueMicrotask"),T=E&&E.value;T||(r=function(){var t,e;y&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},p||y||g||!v||!b?!m&&_&&_.resolve?(u=_.resolve(void 0),u.constructor=_,h=u.then,s=function(){h.call(u,r)}):s=y?function(){w.nextTick(r)}:function(){d.call(l,r)}:(a=!0,c=b.createTextNode(""),new v(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=T||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),h=r.Symbol,l=c?h:h&&h.withoutSetter||s;t.exports=function(t){return o(u,t)&&(a||"string"==typeof u[t])||(a&&o(h,t)?u[t]=h[t]:u[t]=l("Symbol."+t)),u[t]}},b639:function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var r=n("1fb5"),i=n("9152"),o=n("e3db");function s(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}function a(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function c(t,e){if(a()<e)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=u.prototype):(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,n){if(!u.TYPED_ARRAY_SUPPORT&&!(this instanceof u))return new u(t,e,n);if("number"===typeof t){if("string"===typeof e)throw new Error("If encoding is specified then the first argument must be a string");return d(this,t)}return h(this,t,e,n)}function h(t,e,n,r){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?g(t,e,n,r):"string"===typeof e?p(t,e,n):y(t,e)}function l(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e,n,r){return l(e),e<=0?c(t,e):void 0!==n?"string"===typeof r?c(t,e).fill(n,r):c(t,e).fill(n):c(t,e)}function d(t,e){if(l(e),t=c(t,e<0?0:0|v(e)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function p(t,e,n){if("string"===typeof n&&""!==n||(n="utf8"),!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|w(e,n);t=c(t,r);var i=t.write(e,n);return i!==r&&(t=t.slice(0,i)),t}function m(t,e){var n=e.length<0?0:0|v(e.length);t=c(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function g(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),u.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=u.prototype):t=m(t,e),t}function y(t,e){if(u.isBuffer(e)){var n=0|v(e.length);return t=c(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||et(e.length)?c(t,0):m(t,e);if("Buffer"===e.type&&o(e.data))return m(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function v(t){if(t>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|t}function b(t){return+t!=t&&(t=0),u.alloc(+t)}function w(t,e){if(u.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return J(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Z(t).length;default:if(r)return J(t).length;e=(""+e).toLowerCase(),r=!0}}function _(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";t||(t="utf8");while(1)switch(t){case"hex":return j(this,e,n);case"utf8":case"utf-8":return R(this,e,n);case"ascii":return L(this,e,n);case"latin1":case"binary":return M(this,e,n);case"base64":return N(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return F(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function E(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function T(t,e,n,r,i){if(0===t.length)return-1;if("string"===typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"===typeof e&&(e=u.from(e,r)),u.isBuffer(e))return 0===e.length?-1:I(t,e,n,r,i);if("number"===typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):I(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function I(t,e,n,r,i){var o,s=1,a=t.length,c=e.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,c/=2,n/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var h=-1;for(o=n;o<a;o++)if(u(t,o)===u(e,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===c)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(n+c>a&&(n=a-c),o=n;o>=0;o--){for(var l=!0,f=0;f<c;f++)if(u(t,o+f)!==u(e,f)){l=!1;break}if(l)return o}return-1}function k(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var o=e.length;if(o%2!==0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function S(t,e,n,r){return tt(J(e,t.length-n),t,n,r)}function C(t,e,n,r){return tt(X(e),t,n,r)}function A(t,e,n,r){return C(t,e,n,r)}function O(t,e,n,r){return tt(Z(e),t,n,r)}function x(t,e,n,r){return tt(Q(e,t.length-n),t,n,r)}function N(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function R(t,e,n){n=Math.min(t.length,n);var r=[],i=e;while(i<n){var o,s,a,c,u=t[i],h=null,l=u>239?4:u>223?3:u>191?2:1;if(i+l<=n)switch(l){case 1:u<128&&(h=u);break;case 2:o=t[i+1],128===(192&o)&&(c=(31&u)<<6|63&o,c>127&&(h=c));break;case 3:o=t[i+1],s=t[i+2],128===(192&o)&&128===(192&s)&&(c=(15&u)<<12|(63&o)<<6|63&s,c>2047&&(c<55296||c>57343)&&(h=c));break;case 4:o=t[i+1],s=t[i+2],a=t[i+3],128===(192&o)&&128===(192&s)&&128===(192&a)&&(c=(15&u)<<18|(63&o)<<12|(63&s)<<6|63&a,c>65535&&c<1114112&&(h=c))}null===h?(h=65533,l=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|1023&h),r.push(h),i+=l}return D(r)}e.Buffer=u,e.SlowBuffer=b,e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:s(),e.kMaxLength=a(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,n){return h(null,t,e,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,n){return f(null,t,e,n)},u.allocUnsafe=function(t){return d(null,t)},u.allocUnsafeSlow=function(t){return d(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=u.allocUnsafe(e),i=0;for(n=0;n<t.length;++n){var s=t[n];if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,i),i+=s.length}return r},u.byteLength=w,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)E(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)E(this,e,e+3),E(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)E(this,e,e+7),E(this,e+1,e+6),E(this,e+2,e+5),E(this,e+3,e+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?R(this,0,t):_.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,n,r,i){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0;for(var o=i-r,s=n-e,a=Math.min(o,s),c=this.slice(r,i),h=t.slice(e,n),l=0;l<a;++l)if(c[l]!==h[l]){o=c[l],s=h[l];break}return o<s?-1:s<o?1:0},u.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},u.prototype.indexOf=function(t,e,n){return T(this,t,e,n,!0)},u.prototype.lastIndexOf=function(t,e,n){return T(this,t,e,n,!1)},u.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"===typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return k(this,t,e,n);case"utf8":case"utf-8":return S(this,t,e,n);case"ascii":return C(this,t,e,n);case"latin1":case"binary":return A(this,t,e,n);case"base64":return O(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var P=4096;function D(t){var e=t.length;if(e<=P)return String.fromCharCode.apply(String,t);var n="",r=0;while(r<e)n+=String.fromCharCode.apply(String,t.slice(r,r+=P));return n}function L(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function M(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function j(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=e;o<n;++o)i+=Y(t[o]);return i}function F(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function U(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function B(t,e,n,r,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function V(t,e,n,r){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function q(t,e,n,r){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function $(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function z(t,e,n,r,o){return o||$(t,e,n,4,34028234663852886e22,-34028234663852886e22),i.write(t,e,n,r,23,4),n+4}function H(t,e,n,r,o){return o||$(t,e,n,8,17976931348623157e292,-17976931348623157e292),i.write(t,e,n,r,52,8),n+8}u.prototype.slice=function(t,e){var n,r=this.length;if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=u.prototype;else{var i=e-t;n=new u(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},u.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||U(t,e,this.length);var r=this[t],i=1,o=0;while(++o<e&&(i*=256))r+=this[t+o]*i;return r},u.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||U(t,e,this.length);var r=this[t+--e],i=1;while(e>0&&(i*=256))r+=this[t+--e]*i;return r},u.prototype.readUInt8=function(t,e){return e||U(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||U(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||U(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||U(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||U(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||U(t,e,this.length);var r=this[t],i=1,o=0;while(++o<e&&(i*=256))r+=this[t+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},u.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||U(t,e,this.length);var r=e,i=1,o=this[t+--r];while(r>0&&(i*=256))o+=this[t+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return e||U(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||U(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(t,e){e||U(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(t,e){return e||U(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||U(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||U(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||U(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||U(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||U(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;B(this,t,e,n,i,0)}var o=1,s=0;this[e]=255&t;while(++s<n&&(o*=256))this[e+s]=t/o&255;return e+n},u.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;B(this,t,e,n,i,0)}var o=n-1,s=1;this[e+o]=255&t;while(--o>=0&&(s*=256))this[e+o]=t/s&255;return e+n},u.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):V(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):V(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):q(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):q(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);B(this,t,e,n,i-1,-i)}var o=0,s=1,a=0;this[e]=255&t;while(++o<n&&(s*=256))t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},u.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);B(this,t,e,n,i-1,-i)}var o=n-1,s=1,a=0;this[e+o]=255&t;while(--o>=0&&(s*=256))t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},u.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):V(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):V(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):q(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||B(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):q(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,n){return z(this,t,e,!0,n)},u.prototype.writeFloatBE=function(t,e,n){return z(this,t,e,!1,n)},u.prototype.writeDoubleLE=function(t,e,n){return H(this,t,e,!0,n)},u.prototype.writeDoubleBE=function(t,e,n){return H(this,t,e,!1,n)},u.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var i,o=r-n;if(this===t&&n<e&&e<r)for(i=o-1;i>=0;--i)t[i+e]=this[i+n];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e);return o},u.prototype.fill=function(t,e,n,r){if("string"===typeof t){if("string"===typeof e?(r=e,e=0,n=this.length):"string"===typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==r&&"string"!==typeof r)throw new TypeError("encoding must be a string");if("string"===typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"===typeof t)for(o=e;o<n;++o)this[o]=t;else{var s=u.isBuffer(t)?t:J(new u(t,r).toString()),a=s.length;for(o=0;o<n-e;++o)this[o+e]=s[o%a]}return this};var K=/[^+\/0-9A-Za-z-_]/g;function W(t){if(t=G(t).replace(K,""),t.length<2)return"";while(t.length%4!==0)t+="=";return t}function G(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Y(t){return t<16?"0"+t.toString(16):t.toString(16)}function J(t,e){var n;e=e||1/0;for(var r=t.length,i=null,o=[],s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function X(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function Q(t,e){for(var n,r,i,o=[],s=0;s<t.length;++s){if((e-=2)<0)break;n=t.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r)}return o}function Z(t){return r.toByteArray(W(t))}function tt(t,e,n,r){for(var i=0;i<r;++i){if(i+n>=e.length||i>=t.length)break;e[i+n]=t[i]}return i}function et(t){return t!==t}}).call(this,n("c8ba"))},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("07fa"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,h=4==t,l=6==t,f=7==t,d=5==t||l;return function(p,m,g,y){for(var v,b,w=o(p),_=i(w),E=r(m,g,3),T=s(_),I=0,k=y||a,S=e?k(p,T):n||f?k(p,0):void 0;T>I;I++)if((d||I in _)&&(v=_[I],b=E(v,I,w),t))if(e)S[I]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return I;case 2:c.call(S,v)}else switch(t){case 4:return!1;case 7:c.call(S,v)}return l?-1:u||h?h:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b88a:function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function i(t,e){var n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return"/"!=e.substr(0,1)&&0!==e.length||r.splice(0,1),"/"==e.substr(e.length-1,1)&&r.splice(r.length-1,1),r}function o(t,e){var n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,r){e&&(n[e]=r)})),n}t.exports=function(t){var e=t,s=t.indexOf("["),a=t.indexOf("]");-1!=s&&-1!=a&&(t=t.substring(0,s)+t.substring(s,a).replace(/:/g,";")+t.substring(a,t.length));var c=n.exec(t||""),u={},h=14;while(h--)u[r[h]]=c[h]||"";return-1!=s&&-1!=a&&(u.source=e,u.host=u.host.substring(1,u.host.length-1).replace(/;/g,":"),u.authority=u.authority.replace("[","").replace("]","").replace(/;/g,":"),u.ipv6uri=!0),u.pathNames=i(u,u["path"]),u.queryKey=o(u,u["query"]),u}},b8bc:function(t,e,n){var r=n("2786"),i=n("af37"),o=n("cd4c"),s=n("2770"),a=n("6890")("engine.io-client:polling-xhr"),c=n("a18b");function u(){}function h(t){if(i.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!==typeof location){var e="https:"===location.protocol,n=location.port;n||(n=e?443:80),this.xd="undefined"!==typeof location&&t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}}function l(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}if(t.exports=h,t.exports.Request=l,s(h,i),h.prototype.supportsBinary=!0,h.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new l(t)},h.prototype.doWrite=function(t,e){var n="string"!==typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),i=this;r.on("success",e),r.on("error",(function(t){i.onError("xhr post error",t)})),this.sendXhr=r},h.prototype.doPoll=function(){a("xhr poll");var t=this.request(),e=this;t.on("data",(function(t){e.onData(t)})),t.on("error",(function(t){e.onError("xhr poll error",t)})),this.pollXhr=t},o(l.prototype),l.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new r(t),n=this;try{a("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders)for(var i in e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0),this.extraHeaders)this.extraHeaders.hasOwnProperty(i)&&e.setRequestHeader(i,this.extraHeaders[i])}catch(o){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(o){}try{e.setRequestHeader("Accept","*/*")}catch(o){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){n.onLoad()},e.onerror=function(){n.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(n.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(o){}4===e.readyState&&(200===e.status||1223===e.status?n.onLoad():setTimeout((function(){n.onError("number"===typeof e.status?e.status:0)}),0))},a("xhr data %s",this.data),e.send(this.data)}catch(o){return void setTimeout((function(){n.onError(o)}),0)}"undefined"!==typeof document&&(this.index=l.requestsCount++,l.requests[this.index]=this)},l.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},l.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},l.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},l.prototype.cleanup=function(t){if("undefined"!==typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=u:this.xhr.onreadystatechange=u,t)try{this.xhr.abort()}catch(e){}"undefined"!==typeof document&&delete l.requests[this.index],this.xhr=null}},l.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t=("application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e)&&this.xhr.response||this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},l.prototype.hasXDR=function(){return"undefined"!==typeof XDomainRequest&&!this.xs&&this.enablesXDR},l.prototype.abort=function(){this.cleanup()},l.requestsCount=0,l.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",d);else if("function"===typeof addEventListener){var f="onpagehide"in c?"pagehide":"unload";addEventListener(f,d,!1)}function d(){for(var t in l.requests)l.requests.hasOwnProperty(t)&&l.requests[t].abort()}},bc3a:function(t,e,n){t.exports=n("cee4")},bcea:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return l}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function h(t){r.forEach(e=>{e.setLogLevel(t)})}function l(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const s=o.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:s,args:o,type:e.name})}}}},bd0a:function(t,e,n){var r=n("e6f9"),i=n("cd4c");function o(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}t.exports=o,i(o.prototype),o.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},o.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},o.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},o.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},o.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},o.prototype.onData=function(t){var e=r.decodePacket(t,this.socket.binaryType);this.onPacket(e)},o.prototype.onPacket=function(t){this.emit("packet",t)},o.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),o=n("dc4a"),s=n("485a"),a=n("b622"),c=a("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,a=o(t,c);if(a){if(void 0===e&&(e="default"),n=a.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},c345:function(t,e,n){"use strict";var r=n("c532"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,s={};return t?(r.forEach(t.split("\n"),(function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(s[e]&&i.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}})),s):s}},c401:function(t,e,n){"use strict";var r=n("c532"),i=n("2444");t.exports=function(t,e,n){var o=this||i;return r.forEach(n,(function(n){t=n.call(o,t,e)})),t}},c430:function(t,e){t.exports=!1},c532:function(t,e,n){"use strict";var r=n("1d2b"),i=Object.prototype.toString;function o(t){return"[object Array]"===i.call(t)}function s(t){return"undefined"===typeof t}function a(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function c(t){return"[object ArrayBuffer]"===i.call(t)}function u(t){return"undefined"!==typeof FormData&&t instanceof FormData}function h(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function l(t){return"string"===typeof t}function f(t){return"number"===typeof t}function d(t){return null!==t&&"object"===typeof t}function p(t){if("[object Object]"!==i.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Date]"===i.call(t)}function g(t){return"[object File]"===i.call(t)}function y(t){return"[object Blob]"===i.call(t)}function v(t){return"[object Function]"===i.call(t)}function b(t){return d(t)&&v(t.pipe)}function w(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function _(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function E(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function T(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),o(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function I(){var t={};function e(e,n){p(t[n])&&p(e)?t[n]=I(t[n],e):p(e)?t[n]=I({},e):o(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)T(arguments[n],e);return t}function k(t,e,n){return T(e,(function(e,i){t[i]=n&&"function"===typeof e?r(e,n):e})),t}function S(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:o,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:h,isString:l,isNumber:f,isObject:d,isPlainObject:p,isUndefined:s,isDate:m,isFile:g,isBlob:y,isFunction:v,isStream:b,isURLSearchParams:w,isStandardBrowserEnv:E,forEach:T,merge:I,extend:k,trim:_,stripBOM:S}},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},c948:function(t,e,n){var r=n("6502"),i=n("cd4c"),o=n("6890")("engine.io-client:socket"),s=n("aac1"),a=n("e6f9"),c=n("b88a"),u=n("6811");function h(t,e){if(!(this instanceof h))return new h(t,e);e=e||{},t&&"object"===typeof t&&(e=t,t=null),t?(t=c(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=c(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!==typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!==typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"===typeof this.query&&(this.query=u.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||void 0,this.key=e.key||void 0,this.passphrase=e.passphrase||void 0,this.cert=e.cert||void 0,this.ca=e.ca||void 0,this.ciphers=e.ciphers||void 0,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"===typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function l(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}t.exports=h,h.priorWebsocketSuccess=!1,i(h.prototype),h.protocol=a.protocol,h.Socket=h,h.Transport=n("bd0a"),h.transports=n("6502"),h.parser=n("e6f9"),h.prototype.createTransport=function(t){o('creating transport "%s"',t);var e=l(this.query);e.EIO=a.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var i=new r[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,withCredentials:n.withCredentials||this.withCredentials,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,isReactNative:this.isReactNative});return i},h.prototype.open=function(){var t;if(this.rememberUpgrade&&h.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout((function(){e.emit("error","No transports available")}),0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},h.prototype.setTransport=function(t){o("setting transport %s",t.name);var e=this;this.transport&&(o("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",(function(){e.onDrain()})).on("packet",(function(t){e.onPacket(t)})).on("error",(function(t){e.onError(t)})).on("close",(function(){e.onClose("transport close")}))},h.prototype.probe=function(t){o('probing transport "%s"',t);var e=this.createTransport(t,{probe:1}),n=!1,r=this;function i(){if(r.onlyBinaryUpgrades){var i=!this.supportsBinary&&r.transport.supportsBinary;n=n||i}n||(o('probe transport "%s" opened',t),e.send([{type:"ping",data:"probe"}]),e.once("packet",(function(i){if(!n)if("pong"===i.type&&"probe"===i.data){if(o('probe transport "%s" pong',t),r.upgrading=!0,r.emit("upgrading",e),!e)return;h.priorWebsocketSuccess="websocket"===e.name,o('pausing current transport "%s"',r.transport.name),r.transport.pause((function(){n||"closed"!==r.readyState&&(o("changing transport and sending upgrade packet"),f(),r.setTransport(e),e.send([{type:"upgrade"}]),r.emit("upgrade",e),e=null,r.upgrading=!1,r.flush())}))}else{o('probe transport "%s" failed',t);var s=new Error("probe error");s.transport=e.name,r.emit("upgradeError",s)}})))}function s(){n||(n=!0,f(),e.close(),e=null)}function a(n){var i=new Error("probe error: "+n);i.transport=e.name,s(),o('probe transport "%s" failed because of error: %s',t,n),r.emit("upgradeError",i)}function c(){a("transport closed")}function u(){a("socket closed")}function l(t){e&&t.name!==e.name&&(o('"%s" works - aborting "%s"',t.name,e.name),s())}function f(){e.removeListener("open",i),e.removeListener("error",a),e.removeListener("close",c),r.removeListener("close",u),r.removeListener("upgrading",l)}h.priorWebsocketSuccess=!1,e.once("open",i),e.once("error",a),e.once("close",c),this.once("close",u),this.once("upgrading",l),e.open()},h.prototype.onOpen=function(){if(o("socket open"),this.readyState="open",h.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){o("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},h.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(o('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data);break}else o('packet received with socket readyState "%s"',this.readyState)},h.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},h.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout((function(){"closed"!==e.readyState&&e.onClose("ping timeout")}),t||e.pingInterval+e.pingTimeout)},h.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout((function(){o("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)}),t.pingInterval)},h.prototype.ping=function(){var t=this;this.sendPacket("ping",(function(){t.emit("ping")}))},h.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},h.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(o("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},h.prototype.write=h.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},h.prototype.sendPacket=function(t,e,n,r){if("function"===typeof e&&(r=e,e=void 0),"function"===typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var i={type:t,data:e,options:n};this.emit("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}},h.prototype.close=function(){if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var t=this;this.writeBuffer.length?this.once("drain",(function(){this.upgrading?r():e()})):this.upgrading?r():e()}function e(){t.onClose("forced close"),o("socket closing - telling transport to close"),t.transport.close()}function n(){t.removeListener("upgrade",n),t.removeListener("upgradeError",n),e()}function r(){t.once("upgrade",n),t.once("upgradeError",n)}return this},h.prototype.onError=function(t){o("socket error %j",t),h.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},h.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){o('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},h.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~s(this.transports,t[n])&&e.push(t[n]);return e}},c9bb:function(t,e,n){(function(r){function i(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type)||("undefined"===typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function o(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var i=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(i++,"%c"===t&&(o=i))})),t.splice(o,0,r)}}function s(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!==typeof r&&"env"in r&&(t=Object({NODE_ENV:"production",BASE_URL:"/"}).DEBUG),t}function u(){try{return window.localStorage}catch(t){}}e=t.exports=n("cd48"),e.log=s,e.formatArgs=o,e.save=a,e.load=c,e.useColors=i,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(this,n("4362"))},ca84:function(t,e,n){var r=n("1a2d"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cd48:function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function i(t){var n;function i(){if(i.enabled){var t=i,r=+new Date,o=r-(n||r);t.diff=o,t.prev=n,t.curr=r,n=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!==typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var i=e.formatters[r];if("function"===typeof i){var o=s[c];n=i.call(t,o),s.splice(c,1),c--}return n})),e.formatArgs.call(t,s);var u=i.log||e.log||console.log.bind(console);u.apply(t,s)}}return i.namespace=t,i.enabled=e.enabled(t),i.useColors=e.useColors(),i.color=r(t),i.destroy=o,"function"===typeof e.init&&e.init(i),e.instances.push(i),i}function o(){var t=e.instances.indexOf(this);return-1!==t&&(e.instances.splice(t,1),!0)}function s(t){var n;e.save(t),e.names=[],e.skips=[];var r=("string"===typeof t?t:"").split(/[\s,]+/),i=r.length;for(n=0;n<i;n++)r[n]&&(t=r[n].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var o=e.instances[n];o.enabled=e.enabled(o.namespace)}}function a(){e.enable("")}function c(t){if("*"===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function u(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=i.debug=i["default"]=i,e.coerce=u,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n("90aa"),e.instances=[],e.names=[],e.skips=[],e.formatters={}},cd4c:function(t,e,n){function r(t){if(t)return i(t)}function i(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);r=0;for(var i=n.length;r<i;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},cda2:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Lu})),n.d(e,"b",(function(){return Nc})),n.d(e,"c",(function(){return fc})),n.d(e,"d",(function(){return rc})),n.d(e,"e",(function(){return ec})),n.d(e,"f",(function(){return hu})),n.d(e,"g",(function(){return Oc})),n.d(e,"h",(function(){return Rc})),n.d(e,"i",(function(){return dc})),n.d(e,"j",(function(){return T})),n.d(e,"k",(function(){return Pc})),n.d(e,"l",(function(){return lc})),n.d(e,"m",(function(){return nc})),n.d(e,"n",(function(){return gu})),n.d(e,"o",(function(){return lu})),n.d(e,"p",(function(){return fu})),n.d(e,"q",(function(){return uu})),n.d(e,"r",(function(){return j})),n.d(e,"s",(function(){return eh})),n.d(e,"t",(function(){return Fu})),n.d(e,"u",(function(){return $a})),n.d(e,"v",(function(){return ot})),n.d(e,"w",(function(){return S})),n.d(e,"x",(function(){return H})),n.d(e,"y",(function(){return Ja})),n.d(e,"z",(function(){return w})),n.d(e,"A",(function(){return W})),n.d(e,"B",(function(){return g})),n.d(e,"C",(function(){return Ka})),n.d(e,"D",(function(){return Ju})),n.d(e,"E",(function(){return sh})),n.d(e,"F",(function(){return oh})),n.d(e,"G",(function(){return _c})),n.d(e,"H",(function(){return ic})),n.d(e,"I",(function(){return oc})),n.d(e,"J",(function(){return tc})),n.d(e,"K",(function(){return Yu})),n.d(e,"L",(function(){return rh})),n.d(e,"M",(function(){return Ic})),n.d(e,"N",(function(){return sc})),n.d(e,"O",(function(){return xc})),n.d(e,"P",(function(){return vc})),n.d(e,"Q",(function(){return bc})),n.d(e,"R",(function(){return Tc})),n.d(e,"S",(function(){return xu})),n.d(e,"T",(function(){return Ou})),n.d(e,"U",(function(){return gc})),n.d(e,"V",(function(){return Zu})),n.d(e,"W",(function(){return Bu})),n.d(e,"X",(function(){return qu})),n.d(e,"Y",(function(){return $u})),n.d(e,"Z",(function(){return zu})),n.d(e,"ab",(function(){return Hu})),n.d(e,"bb",(function(){return Ku})),n.d(e,"cb",(function(){return mc})),n.d(e,"db",(function(){return ah})),n.d(e,"eb",(function(){return pc})),n.d(e,"fb",(function(){return Tu})),n.d(e,"gb",(function(){return Iu})),n.d(e,"hb",(function(){return Sc})),n.d(e,"ib",(function(){return Cc})),n.d(e,"jb",(function(){return Xu})),n.d(e,"kb",(function(){return Qu})),n.d(e,"lb",(function(){return _u})),n.d(e,"mb",(function(){return yu})),n.d(e,"nb",(function(){return cc})),n.d(e,"ob",(function(){return ac})),n.d(e,"pb",(function(){return nh})),n.d(e,"qb",(function(){return ih})),n.d(e,"rb",(function(){return Wu})),n.d(e,"sb",(function(){return d})),n.d(e,"tb",(function(){return pu})),n.d(e,"ub",(function(){return Cu})),n.d(e,"vb",(function(){return Su})),n.d(e,"wb",(function(){return kc})),n.d(e,"xb",(function(){return Gu})),n.d(e,"yb",(function(){return Ec})),n.d(e,"zb",(function(){return bu})),n.d(e,"Ab",(function(){return ch}));var r=n("de6f"),i=n("dec5"),o=n("bcea"),s=n("f075"),a=n("29e1");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.1.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new o["b"]("@firebase/firestore");function f(){return l.logLevel}function d(t){l.setLogLevel(t)}function p(t,...e){if(l.logLevel<=o["a"].DEBUG){const n=e.map(y);l.debug(`Firestore (${h}): ${t}`,...n)}}function m(t,...e){if(l.logLevel<=o["a"].ERROR){const n=e.map(y);l.error(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=o["a"].WARN){const n=e.map(y);l.warn(`Firestore (${h}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw m(e),new Error(e)}function b(t,e){t||v()}function w(t,e){t||v()}function _(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class C{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},s=t=>{p("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(p("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(b("string"==typeof e.accessToken),new k(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(null===t||"string"==typeof t),new u(t)}}class O{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class x{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new O(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */N.T=-1;class P{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=R(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function D(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}function M(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new j(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new j(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function B(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class $ extends q{construct(t,e,n){return new $(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new $(e)}static emptyPath(){return new $([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends q{construct(t,e,n){return new H(t,e,n)}static isValidIdentifier(t){return z.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(e)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.fields=t,t.sort(H.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new G(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new G(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}G.EMPTY_BYTE_STRING=new G("");const Y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function J(t){if(b(!!t),"string"==typeof t){let e=0;const n=Y.exec(t);if(b(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:X(t.seconds),nanos:X(t.nanos)}}function X(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Q(t){return"string"==typeof t?G.fromBase64String(t):G.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function tt(t){const e=t.mapValue.fields.__previous_value__;return Z(e)?tt(e):e}function et(t){const e=J(t.mapValue.fields.__local_write_time__.timestampValue);return new j(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return null==t}function rt(t){return 0===t&&1/t==-1/0}function it(t){return"number"==typeof t&&Number.isInteger(t)&&!rt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.path=t}static fromPath(t){return new ot($.fromString(t))}static fromName(t){return new ot($.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===$.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return $.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ot(new $(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Z(t)?4:10:v()}function at(t,e){const n=st(t);if(n!==st(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return et(t).isEqual(et(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=J(t.timestampValue),r=J(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Q(t.bytesValue).isEqual(Q(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return X(t.geoPointValue.latitude)===X(e.geoPointValue.latitude)&&X(t.geoPointValue.longitude)===X(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return X(t.integerValue)===X(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=X(t.doubleValue),r=X(e.doubleValue);return n===r?rt(n)===rt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(U(n)!==U(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!at(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function ct(t,e){return void 0!==(t.values||[]).find(t=>at(t,e))}function ut(t,e){const n=st(t),r=st(e);if(n!==r)return D(n,r);switch(n){case 0:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=X(t.integerValue||t.doubleValue),r=X(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ht(t.timestampValue,e.timestampValue);case 4:return ht(et(t),et(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Q(t),r=Q(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=D(n[i],r[i]);if(0!==t)return t}return D(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=D(X(t.latitude),X(e.latitude));return 0!==n?n:D(X(t.longitude),X(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ut(n[i],r[i]);if(t)return t}return D(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=D(r[s],o[s]);if(0!==t)return t;const e=ut(n[r[s]],i[o[s]]);if(0!==e)return e}return D(r.length,o.length)}(t.mapValue,e.mapValue);default:throw v()}}function ht(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return D(t,e);const n=J(t),r=J(e),i=D(n.seconds,r.seconds);return 0!==i?i:D(n.nanos,r.nanos)}function lt(t){return ft(t)}function ft(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=J(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Q(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ot.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ft(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ft(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function dt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pt(t){return!!t&&"integerValue"in t}function mt(t){return!!t&&"arrayValue"in t}function gt(t){return!!t&&"nullValue"in t}function yt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vt(t){return!!t&&"mapValue"in t}function bt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return B(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=bt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!vt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bt(e)}setAll(t){let e=H.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=bt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());vt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];vt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){B(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new wt(bt(this.value))}}function _t(t){const e=[];return B(t.fields,(t,n)=>{const r=new H([t]);if(vt(n)){const t=_t(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new K(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Et{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Et(t,0,F.min(),wt.empty(),0)}static newFoundDocument(t,e,n){return new Et(t,1,e,n,0)}static newNoDocument(t,e){return new Et(t,2,e,wt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,wt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Et(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.A=null}}function It(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Tt(t,e,n,r,i,o,s)}function kt(t){const e=_(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>xt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),nt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Bt(e.startAt)),e.endAt&&(t+="|ub:",t+=Bt(e.endAt)),e.A=t}return e.A}function St(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${lt(e.value)}`;var e}).join(", ")}]`),nt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Bt(t.startAt)),t.endAt&&(e+=", endAt: "+Bt(t.endAt)),`Target(${e})`}function Ct(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!qt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!at(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zt(t.startAt,e.startAt)&&zt(t.endAt,e.endAt)}function At(t){return ot.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Ot extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Nt(t,e,n):"array-contains"===e?new Lt(t,n):"in"===e?new Mt(t,n):"not-in"===e?new jt(t,n):"array-contains-any"===e?new Ft(t,n):new Ot(t,e,n)}static R(t,e,n){return"in"===e?new Rt(t,n):new Pt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(ut(e,this.value)):null!==e&&st(this.value)===st(e)&&this.P(ut(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function xt(t){return t.field.canonicalString()+t.op.toString()+lt(t.value)}class Nt extends Ot{constructor(t,e,n){super(t,e,n),this.key=ot.fromName(n.referenceValue)}matches(t){const e=ot.comparator(t.key,this.key);return this.P(e)}}class Rt extends Ot{constructor(t,e){super(t,"in",e),this.keys=Dt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Pt extends Ot{constructor(t,e){super(t,"not-in",e),this.keys=Dt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Dt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>ot.fromName(t.referenceValue))}class Lt extends Ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return mt(e)&&ct(e.arrayValue,this.value)}}class Mt extends Ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ct(this.value.arrayValue,e)}}class jt extends Ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ct(this.value.arrayValue,e)}}class Ft extends Ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!mt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ct(this.value.arrayValue,t))}}class Ut{constructor(t,e){this.position=t,this.before=e}}function Bt(t){return`${t.before?"b":"a"}:${t.position.map(t=>lt(t)).join(",")}`}class Vt{constructor(t,e="asc"){this.field=t,this.dir=e}}function qt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function $t(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?ot.comparator(ot.fromName(s.referenceValue),n.key):ut(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function zt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!at(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Kt(t,e,n,r,i,o,s,a){return new Ht(t,e,n,r,i,o,s,a)}function Wt(t){return new Ht(t)}function Gt(t){return!nt(t.limit)&&"F"===t.limitType}function Yt(t){return!nt(t.limit)&&"L"===t.limitType}function Jt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Xt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Qt(t){return null!==t.collectionGroup}function Zt(t){const e=_(t);if(null===e.V){e.V=[];const t=Xt(e),n=Jt(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Vt(t)),e.V.push(new Vt(H.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Vt(H.keyField(),t))}}}return e.V}function te(t){const e=_(t);if(!e.S)if("F"===e.limitType)e.S=It(e.path,e.collectionGroup,Zt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Zt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Vt(i.field,e))}const n=e.endAt?new Ut(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Ut(e.startAt.position,!e.startAt.before):null;e.S=It(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function ee(t,e,n){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ne(t,e){return Ct(te(t),te(e))&&t.limitType===e.limitType}function re(t){return`${kt(te(t))}|lt:${t.limitType}`}function ie(t){return`Query(target=${St(te(t))}; limitType=${t.limitType})`}function oe(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ot.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!$t(t.startAt,Zt(t),e))&&(!t.endAt||!$t(t.endAt,Zt(t),e))}(t,e)}function se(t){return(e,n)=>{let r=!1;for(const i of Zt(t)){const t=ae(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ae(t,e,n){const r=t.field.isKeyField()?ot.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ut(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rt(e)?"-0":e}}function ue(t){return{integerValue:""+t}}function he(t,e){return it(e)?ue(e):ce(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this._=void 0}}function fe(t,e,n){return t instanceof me?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ge?ye(t,e):t instanceof ve?be(t,e):function(t,e){const n=pe(t,e),r=_e(n)+_e(t.C);return pt(n)&&pt(t.C)?ue(r):ce(t.N,r)}(t,e)}function de(t,e,n){return t instanceof ge?ye(t,e):t instanceof ve?be(t,e):n}function pe(t,e){return t instanceof we?pt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class me extends le{}class ge extends le{constructor(t){super(),this.elements=t}}function ye(t,e){const n=Ee(e);for(const r of t.elements)n.some(t=>at(t,r))||n.push(r);return{arrayValue:{values:n}}}class ve extends le{constructor(t){super(),this.elements=t}}function be(t,e){let n=Ee(e);for(const r of t.elements)n=n.filter(t=>!at(t,r));return{arrayValue:{values:n}}}class we extends le{constructor(t,e){super(),this.N=t,this.C=e}}function _e(t){return X(t.integerValue||t.doubleValue)}function Ee(t){return mt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.field=t,this.transform=e}}function Ie(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ge&&e instanceof ge||t instanceof ve&&e instanceof ve?L(t.elements,e.elements,at):t instanceof we&&e instanceof we?at(t.C,e.C):t instanceof me&&e instanceof me}(t.transform,e.transform)}class ke{constructor(t,e){this.version=t,this.transformResults=e}}class Se{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Se}static exists(t){return new Se(void 0,t)}static updateTime(t){return new Se(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ce(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ae{}function Oe(t,e,n){t instanceof De?function(t,e,n){const r=t.value.clone(),i=je(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Ce(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=je(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Me(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function xe(t,e,n){t instanceof De?function(t,e,n){if(!Ce(t.precondition,e))return;const r=t.value.clone(),i=Fe(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Pe(e),r).setHasLocalMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Ce(t.precondition,e))return;const r=Fe(t.fieldTransforms,n,e),i=e.data;i.setAll(Me(t)),i.setAll(r),e.convertToFoundDocument(Pe(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Ce(t.precondition,e)&&e.convertToNoDocument(F.min())}(t,e)}function Ne(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=pe(r.transform,t||null);null!=i&&(null==n&&(n=wt.empty()),n.set(r.field,i))}return n||null}function Re(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>Ie(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Pe(t){return t.isFoundDocument()?t.version:F.min()}class De extends Ae{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Le extends Ae{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Me(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function je(t,e,n){const r=new Map;b(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,de(s,a,n[i]))}return r}function Fe(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,fe(t,o,e))}return r}class Ue extends Ae{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Be extends Ae{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,$e;function ze(t){switch(t){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function He(t){if(void 0===t)return m("GRPC error has no .code"),E.UNKNOWN;switch(t){case qe.OK:return E.OK;case qe.CANCELLED:return E.CANCELLED;case qe.UNKNOWN:return E.UNKNOWN;case qe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case qe.INTERNAL:return E.INTERNAL;case qe.UNAVAILABLE:return E.UNAVAILABLE;case qe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case qe.NOT_FOUND:return E.NOT_FOUND;case qe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case qe.ABORTED:return E.ABORTED;case qe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case qe.DATA_LOSS:return E.DATA_LOSS;default:return v()}}($e=qe||(qe={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(t,e){this.comparator=t,this.root=e||Ge.EMPTY}insert(t,e){return new Ke(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(t){return new Ke(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new We(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new We(this.root,t,this.comparator,!1)}getReverseIterator(){return new We(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new We(this.root,t,this.comparator,!0)}}class We{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ge{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ge.RED,this.left=null!=r?r:Ge.EMPTY,this.right=null!=i?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ge(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ge.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1,Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(t){this.comparator=t,this.data=new Ke(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Je(this.data.getIterator())}getIteratorFrom(t){return new Je(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ye))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ye(this.comparator);return e.data=t,e}}class Je{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Ke(ot.comparator);function Qe(){return Xe}const Ze=new Ke(ot.comparator);function tn(){return Ze}const en=new Ke(ot.comparator);function nn(){return en}const rn=new Ye(ot.comparator);function on(...t){let e=rn;for(const n of t)e=e.add(n);return e}const sn=new Ye(D);function an(){return sn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,un.createSynthesizedTargetChangeForCurrentChange(t,e)),new cn(F.min(),n,an(),Qe(),on())}}class un{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new un(G.EMPTY_BYTE_STRING,e,on(),on(),on())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class ln{constructor(t,e){this.targetId=t,this.O=e}}class fn{constructor(t,e,n=G.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class dn{constructor(){this.F=0,this.M=gn(),this.L=G.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=on(),e=on(),n=on();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new un(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=gn()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class pn{constructor(t){this.tt=t,this.et=new Map,this.nt=Qe(),this.st=mn(),this.it=new Ye(D)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(At(t))if(0===n){const n=new ot(t.path);this.at(e,n,Et.newNoDocument(n,F.min()))}else b(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&At(i.target)){const e=new ot(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,Et.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=on();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new cn(t,e,this.it,this.nt,n);return this.nt=Qe(),this.st=mn(),this.it=new Ye(D),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new dn,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Ye(D),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new dn),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function mn(){return new Ke(ot.comparator)}function gn(){return new Ke(ot.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),vn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class bn{constructor(t,e){this.databaseId=t,this.D=e}}function wn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _n(t,e){return t.D?e.toBase64():e.toUint8Array()}function En(t,e){return wn(t,e.toTimestamp())}function Tn(t){return b(!!t),F.fromTimestamp(function(t){const e=J(t);return new j(e.seconds,e.nanos)}(t))}function In(t,e){return function(t){return new $(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function kn(t){const e=$.fromString(t);return b(Zn(e)),e}function Sn(t,e){return In(t.databaseId,e.path)}function Cn(t,e){const n=kn(e);if(n.get(1)!==t.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ot(Nn(n))}function An(t,e){return In(t.databaseId,e)}function On(t){const e=kn(t);return 4===e.length?$.emptyPath():Nn(e)}function xn(t){return new $(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nn(t){return b(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Rn(t,e,n){return{name:Sn(t,e),fields:n.value.mapValue.fields}}function Pn(t,e,n){const r=Cn(t,e.name),i=Tn(e.updateTime),o=new wt({mapValue:{fields:e.fields}}),s=Et.newFoundDocument(r,i,o);return n&&s.setHasCommittedMutations(),n?s.setHasCommittedMutations():s}function Dn(t,e){return"found"in e?function(t,e){b(!!e.found),e.found.name,e.found.updateTime;const n=Cn(t,e.found.name),r=Tn(e.found.updateTime),i=new wt({mapValue:{fields:e.found.fields}});return Et.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){b(!!e.missing),b(!!e.readTime);const n=Cn(t,e.missing),r=Tn(e.readTime);return Et.newNoDocument(n,r)}(t,e):v()}function Ln(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.D?(b(void 0===e||"string"==typeof e),G.fromBase64String(e||"")):(b(void 0===e||e instanceof Uint8Array),G.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?E.UNKNOWN:He(t.code);return new T(e,t.message||"")}(s);n=new fn(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cn(t,r.document.name),o=Tn(r.document.updateTime),s=new wt({mapValue:{fields:r.document.fields}}),a=Et.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new hn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cn(t,r.document),o=r.readTime?Tn(r.readTime):F.min(),s=Et.newNoDocument(i,o),a=r.removedTargetIds||[];n=new hn([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cn(t,r.document),o=r.removedTargetIds||[];n=new hn([],o,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ve(r),o=t.targetId;n=new ln(o,i)}}return n}function Mn(t,e){let n;if(e instanceof De)n={update:Rn(t,e.key,e.value)};else if(e instanceof Ue)n={delete:Sn(t,e.key)};else if(e instanceof Le)n={update:Rn(t,e.key,e.data),updateMask:Qn(e.fieldMask)};else{if(!(e instanceof Be))return v();n={verify:Sn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof me)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ge)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ve)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof we)return{fieldPath:e.field.canonicalString(),increment:n.C};throw v()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:En(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function jn(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Se.updateTime(Tn(t.updateTime)):void 0!==t.exists?Se.exists(t.exists):Se.none()}(e.currentDocument):Se.none(),r=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)b("REQUEST_TIME"===e.setToServerValue),n=new me;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new ge(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new ve(t)}else"increment"in e?n=new we(t,e.increment):v();const r=H.fromServerFormat(e.fieldPath);return new Te(r,n)}(t,e)):[];if(e.update){e.update.name;const i=Cn(t,e.update.name),o=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new K(e.map(t=>H.fromServerFormat(t)))}(e.updateMask);return new Le(i,o,t,n,r)}return new De(i,o,n,r)}if(e.delete){const r=Cn(t,e.delete);return new Ue(r,n)}if(e.verify){const r=Cn(t,e.verify);return new Be(r,n)}return v()}function Fn(t,e){return t&&t.length>0?(b(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Tn(t.updateTime):Tn(e);return n.isEqual(F.min())&&(n=Tn(e)),new ke(n,t.transformResults||[])}(t,e))):[]}function Un(t,e){return{documents:[An(t,e.path)]}}function Bn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=An(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=An(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(yt(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NAN"}};if(gt(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(yt(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NOT_NAN"}};if(gt(t.value))return{unaryFilter:{field:Gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gn(t.field),op:Wn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Gn(t.field),direction:Kn(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.D||nt(e)?e:{value:e}}(t,e.limit);return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=zn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=zn(e.endAt)),n}function Vn(t){let e=On(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=$n(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(t=>function(t){return new Vt(Yn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,nt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Hn(n.startAt));let u=null;return n.endAt&&(u=Hn(n.endAt)),Kt(e,i,s,o,a,"F",c,u)}function qn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function $n(t){return t?void 0!==t.unaryFilter?[Xn(t)]:void 0!==t.fieldFilter?[Jn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>$n(t)).reduce((t,e)=>t.concat(e)):v():[]}function zn(t){return{before:t.before,values:t.position}}function Hn(t){const e=!!t.before,n=t.values||[];return new Ut(n,e)}function Kn(t){return yn[t]}function Wn(t){return vn[t]}function Gn(t){return{fieldPath:t.canonicalString()}}function Yn(t){return H.fromServerFormat(t.fieldPath)}function Jn(t){return Ot.create(Yn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}function Xn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Yn(t.unaryFilter.field);return Ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Yn(t.unaryFilter.field);return Ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yn(t.unaryFilter.field);return Ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yn(t.unaryFilter.field);return Ot.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Qn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=nr(e)),e=er(t.get(n),e);return nr(e)}function er(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function nr(t){return t+""}function rr(t){const e=t.length;if(b(e>=2),2===e)return b(""===t.charAt(0)&&""===t.charAt(1)),$.emptyPath();const n=e-2,r=[];let i="";for(let o=0;o<e;){const e=t.indexOf("",o);switch((e<0||e>n)&&v(),t.charAt(e+1)){case"":const n=t.substring(o,e);let s;0===i.length?s=n:(i+=n,s=i,i=""),r.push(s);break;case"":i+=t.substring(o,e),i+="\0";break;case"":i+=t.substring(o,e+1);break;default:v()}o=e+2}return new $(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class or{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}or.store="owner",or.key="owner";class sr{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}sr.store="mutationQueues",sr.keyPath="userId";class ar{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ar.store="mutations",ar.keyPath="batchId",ar.userMutationsIndex="userMutationsIndex",ar.userMutationsKeyPath=["userId","batchId"];class cr{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,tr(e)]}static key(t,e,n){return[t,tr(e),n]}}cr.store="documentMutations",cr.PLACEHOLDER=new cr;class ur{constructor(t,e){this.path=t,this.readTime=e}}class hr{constructor(t,e){this.path=t,this.version=e}}class lr{constructor(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}lr.store="remoteDocuments",lr.readTimeIndex="readTimeIndex",lr.readTimeIndexPath="readTime",lr.collectionReadTimeIndex="collectionReadTimeIndex",lr.collectionReadTimeIndexPath=["parentPath","readTime"];class fr{constructor(t){this.byteSize=t}}fr.store="remoteDocumentGlobal",fr.key="remoteDocumentGlobalKey";class dr{constructor(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}dr.store="targets",dr.keyPath="targetId",dr.queryTargetsIndexName="queryTargetsIndex",dr.queryTargetsKeyPath=["canonicalId","targetId"];class pr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}pr.store="targetDocuments",pr.keyPath=["targetId","path"],pr.documentTargetsIndex="documentTargetsIndex",pr.documentTargetsKeyPath=["path","targetId"];class mr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}mr.key="targetGlobalKey",mr.store="targetGlobal";class gr{constructor(t,e){this.collectionId=t,this.parent=e}}gr.store="collectionParents",gr.keyPath=["collectionId","parent"];class yr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}yr.store="clientMetadata",yr.keyPath="clientId";class vr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}vr.store="bundles",vr.keyPath="bundleId";class br{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}br.store="namedQueries",br.keyPath="name";const wr=[sr.store,ar.store,cr.store,lr.store,dr.store,or.store,mr.store,pr.store,yr.store,fr.store,gr.store,vr.store,br.store],_r="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Tr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Tr?e:Tr.resolve(e)}catch(t){return Tr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Tr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Tr.reject(e)}static resolve(t){return new Tr((e,n)=>{e(t)})}static reject(t){return new Tr((e,n)=>{n(t)})}static waitFor(t){return new Tr((e,n)=>{let r=0,i=0,o=!1;t.forEach(t=>{++r,t.next(()=>{++i,o&&i===r&&e()},t=>n(t))}),o=!0,i===r&&e()})}static or(t){let e=Tr.resolve(!1);for(const n of t)e=e.next(t=>t?Tr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.Et=new I,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{e.error?this.Et.reject(new Cr(t,e.error)):this.Et.resolve()},this.transaction.onerror=e=>{const n=Rr(e.target.error);this.Et.reject(new Cr(t,n))}}static open(t,e,n,r){try{return new Ir(e,t.transaction(r,n))}catch(t){throw new Cr(e,t)}}get It(){return this.Et.promise}abort(t){t&&this.Et.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new Or(e)}}class kr{constructor(t,e,n){this.name=t,this.version=e,this.At=n,12.2===kr.Rt(Object(s["j"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),xr(window.indexedDB.deleteDatabase(t)).toPromise()}static bt(){if(!Object(s["o"])())return!1;if(kr.Pt())return!0;const t=Object(s["j"])(),e=kr.Rt(t),n=0<e&&e<10,r=kr.vt(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static Pt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===e?void 0:e.Vt)}static St(t,e){return t.store(e)}static Rt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Cr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new T(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Cr(t,r))},r.onupgradeneeded=t=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.At.Ct(e,r.transaction,t.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=t=>this.Nt(t)),this.db}xt(t){this.Nt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const i="readonly"===e;let o=0;for(;;){++o;try{this.db=await this.Dt(t);const e=Ir.open(this.db,t,i?"readonly":"readwrite",n),o=r(e).catch(t=>(e.abort(t),Tr.reject(t))).toPromise();return o.catch(()=>{}),await e.It,o}catch(t){const e="FirebaseError"!==t.name&&o<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Sr{constructor(t){this.kt=t,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(t){this.kt=t}done(){this.$t=!0}Mt(t){this.Ot=t}delete(){return xr(this.kt.delete())}}class Cr extends T{constructor(t,e){super(E.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ar(t){return"IndexedDbTransactionError"===t.name}class Or{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(p("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),xr(n)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),xr(this.store.add(t))}get(t){return xr(this.store.get(t)).next(e=>(void 0===e&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),xr(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),xr(this.store.count())}Lt(t,e){const n=this.cursor(this.options(t,e)),r=[];return this.Bt(n,(t,e)=>{r.push(e)}).next(()=>r)}Ut(t,e){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.qt=!1;const r=this.cursor(n);return this.Bt(r,(t,e,n)=>n.delete())}Kt(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.Bt(r,e)}jt(t){const e=this.cursor({});return new Tr((n,r)=>{e.onerror=t=>{const e=Rr(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next(t=>{t?r.continue():n()}):n()}})}Bt(t,e){const n=[];return new Tr((r,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{const i=t.target.result;if(!i)return void r();const o=new Sr(i),s=e(i.primaryKey,i.value,o);if(s instanceof Tr){const t=s.catch(t=>(o.done(),Tr.reject(t)));n.push(t)}o.isDone?r():null===o.Ft?i.continue():i.continue(o.Ft)}}).next(()=>Tr.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.qt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function xr(t){return new Tr((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Rr(t.target.error);n(e)}})}let Nr=!1;function Rr(t){const e=kr.Rt(Object(s["j"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Nr||(Nr=!0,setTimeout(()=>{throw t},0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Er{constructor(t,e){super(),this.Qt=t,this.currentSequenceNumber=e}}function Dr(t,e){const n=_(t);return kr.St(n.Qt,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Oe(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&xe(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&xe(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(F.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),on())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>Re(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>Re(t,e))}}class Mr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){b(t.mutations.length===n.length);let r=nn();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Mr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e,n,r,i=F.min(),o=F.min(),s=G.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new jr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t){this.Wt=t}}function Ur(t,e){if(e.document)return Pn(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=ot.fromSegments(e.noDocument.path),n=zr(e.noDocument.readTime),r=Et.newNoDocument(t,n);return e.hasCommittedMutations?r.setHasCommittedMutations():r}if(e.unknownDocument){const t=ot.fromSegments(e.unknownDocument.path),n=zr(e.unknownDocument.version);return Et.newUnknownDocument(t,n)}return v()}function Br(t,e,n){const r=Vr(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:Sn(t,e.key),fields:e.data.value.mapValue.fields,updateTime:wn(t,e.version.toTimestamp())}}(t.Wt,e),o=e.hasCommittedMutations;return new lr(null,null,n,o,r,i)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=$r(e.version),o=e.hasCommittedMutations;return new lr(null,new ur(t,n),null,o,r,i)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=$r(e.version);return new lr(new hr(t,n),null,null,!0,r,i)}return v()}function Vr(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function qr(t){const e=new j(t[0],t[1]);return F.fromTimestamp(e)}function $r(t){const e=t.toTimestamp();return new ir(e.seconds,e.nanoseconds)}function zr(t){const e=new j(t.seconds,t.nanoseconds);return F.fromTimestamp(e)}function Hr(t,e){const n=(e.baseMutations||[]).map(e=>jn(t.Wt,e));for(let o=0;o<e.mutations.length-1;++o){const t=e.mutations[o];if(o+1<e.mutations.length&&void 0!==e.mutations[o+1].transform){const n=e.mutations[o+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(e=>jn(t.Wt,e)),i=j.fromMillis(e.localWriteTimeMs);return new Lr(e.batchId,i,n,r)}function Kr(t){const e=zr(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?zr(t.lastLimboFreeSnapshotVersion):F.min();let r;var i;return void 0!==t.query.documents?(b(1===(i=t.query).documents.length),r=te(Wt(On(i.documents[0])))):r=function(t){return te(Vn(t))}(t.query),new jr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,G.fromBase64String(t.resumeToken))}function Wr(t,e){const n=$r(e.snapshotVersion),r=$r(e.lastLimboFreeSnapshotVersion);let i;i=At(e.target)?Un(t.Wt,e.target):Bn(t.Wt,e.target);const o=e.resumeToken.toBase64();return new dr(e.targetId,kt(e.target),n,o,e.sequenceNumber,r,i)}function Gr(t){const e=Vn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ee(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{getBundleMetadata(t,e){return Jr(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:zr(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Jr(t).put({bundleId:(n=e).id,createTime:$r(Tn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Xr(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Gr(e.bundledQuery),readTime:zr(e.readTime)};var e})}saveNamedQuery(t,e){return Xr(t).put(function(t){return{name:t.name,readTime:$r(Tn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Jr(t){return Dr(t,vr.store)}function Xr(t){return Dr(t,br.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.Gt=new Zr}addToCollectionParentIndex(t,e){return this.Gt.add(e),Tr.resolve()}getCollectionParents(t,e){return Tr.resolve(this.Gt.getEntries(e))}}class Zr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ye($.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ye($.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.zt=new Zr}addToCollectionParentIndex(t,e){if(!this.zt.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.zt.add(e)});const i={collectionId:n,parent:tr(r)};return ei(t).put(i)}return Tr.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[M(e),""],!1,!0);return ei(t).Lt(r).next(t=>{for(const r of t){if(r.collectionId!==e)break;n.push(rr(r.parent))}return n})}}function ei(t){return Dr(t,gr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ri{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ri(t,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e,n){const r=t.store(ar.store),i=t.store(cr.store),o=[],s=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:s},(t,e,n)=>(a++,n.delete()));o.push(c.next(()=>{b(1===a)}));const u=[];for(const h of n.mutations){const t=cr.key(e,h.key.path,n.batchId);o.push(i.delete(t)),u.push(h.key)}return Tr.waitFor(o).next(()=>u)}function oi(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw v();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri.DEFAULT_COLLECTION_PERCENTILE=10,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ri.DEFAULT=new ri(41943040,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ri.DISABLED=new ri(-1,0,0);class si{constructor(t,e,n,r){this.userId=t,this.N=e,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(t,e,n,r){b(""!==t.uid);const i=t.isAuthenticated()?t.uid:"";return new si(i,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ci(t).Kt({index:ar.userMutationsIndex,range:n},(t,n,r)=>{e=!1,r.done()}).next(()=>e)}addMutationBatch(t,e,n,r){const i=ui(t),o=ci(t);return o.add({}).next(s=>{b("number"==typeof s);const a=new Lr(s,e,n,r),c=function(t,e,n){const r=n.baseMutations.map(e=>Mn(t.Wt,e)),i=n.mutations.map(e=>Mn(t.Wt,e));return new ar(e,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.N,this.userId,a),u=[];let h=new Ye((t,e)=>D(t.canonicalString(),e.canonicalString()));for(const t of r){const e=cr.key(this.userId,t.key.path,s);h=h.add(t.key.path.popLast()),u.push(o.put(c)),u.push(i.put(e,cr.PLACEHOLDER))}return h.forEach(e=>{u.push(this.Ht.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Jt[s]=a.keys()}),Tr.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return ci(t).get(e).next(t=>t?(b(t.userId===this.userId),Hr(this.N,t)):null)}Xt(t,e){return this.Jt[e]?Tr.resolve(this.Jt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Jt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ci(t).Kt({index:ar.userMutationsIndex,range:r},(t,e,r)=>{e.userId===this.userId&&(b(e.batchId>=n),i=Hr(this.N,e)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ci(t).Kt({index:ar.userMutationsIndex,range:e,reverse:!0},(t,e,r)=>{n=e.batchId,r.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ci(t).Lt(ar.userMutationsIndex,e).next(t=>t.map(t=>Hr(this.N,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=cr.prefixForPath(this.userId,e.path),r=IDBKeyRange.lowerBound(n),i=[];return ui(t).Kt({range:r},(n,r,o)=>{const[s,a,c]=n,u=rr(a);if(s===this.userId&&e.path.isEqual(u))return ci(t).get(c).next(t=>{if(!t)throw v();b(t.userId===this.userId),i.push(Hr(this.N,t))});o.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ye(D);const r=[];return e.forEach(e=>{const i=cr.prefixForPath(this.userId,e.path),o=IDBKeyRange.lowerBound(i),s=ui(t).Kt({range:o},(t,r,i)=>{const[o,s,a]=t,c=rr(s);o===this.userId&&e.path.isEqual(c)?n=n.add(a):i.done()});r.push(s)}),Tr.waitFor(r).next(()=>this.Zt(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,i=cr.prefixForPath(this.userId,n),o=IDBKeyRange.lowerBound(i);let s=new Ye(D);return ui(t).Kt({range:o},(t,e,i)=>{const[o,a,c]=t,u=rr(a);o===this.userId&&n.isPrefixOf(u)?u.length===r&&(s=s.add(c)):i.done()}).next(()=>this.Zt(t,s))}Zt(t,e){const n=[],r=[];return e.forEach(e=>{r.push(ci(t).get(e).next(t=>{if(null===t)throw v();b(t.userId===this.userId),n.push(Hr(this.N,t))}))}),Tr.waitFor(r).next(()=>n)}removeMutationBatch(t,e){return ii(t.Qt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.te(e.batchId)}),Tr.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}te(t){delete this.Jt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return Tr.resolve();const n=IDBKeyRange.lowerBound(cr.prefixForUser(this.userId)),r=[];return ui(t).Kt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=rr(t[1]);r.push(e)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(t,e){return ai(t,this.userId,e)}ee(t){return hi(t).get(this.userId).next(t=>t||new sr(this.userId,-1,""))}}function ai(t,e,n){const r=cr.prefixForPath(e,n.path),i=r[1],o=IDBKeyRange.lowerBound(r);let s=!1;return ui(t).Kt({range:o,qt:!0},(t,n,r)=>{const[o,a,c]=t;o===e&&a===i&&(s=!0),r.done()}).next(()=>s)}function ci(t){return Dr(t,ar.store)}function ui(t){return Dr(t,cr.store)}function hi(t){return Dr(t,sr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new li(0)}static ie(){return new li(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e){this.referenceDelegate=t,this.N=e}allocateTargetId(t){return this.re(t).next(e=>{const n=new li(e.highestTargetId);return e.highestTargetId=n.next(),this.oe(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.re(t).next(t=>F.fromTimestamp(new j(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.re(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.re(t).next(r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.oe(t,r)))}addTargetData(t,e){return this.ae(t,e).next(()=>this.re(t).next(n=>(n.targetCount+=1,this.ce(e,n),this.oe(t,n))))}updateTargetData(t,e){return this.ae(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>di(t).delete(e.targetId)).next(()=>this.re(t)).next(e=>(b(e.targetCount>0),e.targetCount-=1,this.oe(t,e)))}removeTargets(t,e,n){let r=0;const i=[];return di(t).Kt((o,s)=>{const a=Kr(s);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(t,a)))}).next(()=>Tr.waitFor(i)).next(()=>r)}forEachTarget(t,e){return di(t).Kt((t,n)=>{const r=Kr(n);e(r)})}re(t){return pi(t).get(mr.key).next(t=>(b(null!==t),t))}oe(t,e){return pi(t).put(mr.key,e)}ae(t,e){return di(t).put(Wr(this.N,e))}ce(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.re(t).next(t=>t.targetCount)}getTargetData(t,e){const n=kt(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return di(t).Kt({range:r,index:dr.queryTargetsIndexName},(t,n,r)=>{const o=Kr(n);Ct(e,o.target)&&(i=o,r.done())}).next(()=>i)}addMatchingKeys(t,e,n){const r=[],i=mi(t);return e.forEach(e=>{const o=tr(e.path);r.push(i.put(new pr(n,o))),r.push(this.referenceDelegate.addReference(t,n,e))}),Tr.waitFor(r)}removeMatchingKeys(t,e,n){const r=mi(t);return Tr.forEach(e,e=>{const i=tr(e.path);return Tr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=mi(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=mi(t);let i=on();return r.Kt({range:n,qt:!0},(t,e,n)=>{const r=rr(t[1]),o=new ot(r);i=i.add(o)}).next(()=>i)}containsKey(t,e){const n=tr(e.path),r=IDBKeyRange.bound([n],[M(n)],!1,!0);let i=0;return mi(t).Kt({index:pr.documentTargetsIndex,qt:!0,range:r},([t,e],n,r)=>{0!==t&&(i++,r.done())}).next(()=>i>0)}Tt(t,e){return di(t).get(e).next(t=>t?Kr(t):null)}}function di(t){return Dr(t,dr.store)}function pi(t){return Dr(t,mr.store)}function mi(t){return Dr(t,pr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==_r)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi([t,e],[n,r]){const i=D(t,n);return 0===i?D(e,r):i}class vi{constructor(t){this.ue=t,this.buffer=new Ye(yi),this.he=0}le(){return++this.he}fe(t){const e=[t,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();yi(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bi{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.de=!1,this.we=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(t)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(t){const e=this.de?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.we=null,this.de=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Ar(t)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await gi(t)}await this._e(t)})}}class wi{constructor(t,e){this.me=t,this.params=e}calculateTargetCount(t,e){return this.me.ge(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Tr.resolve(N.T);const n=new vi(e);return this.me.forEachTarget(t,t=>n.fe(t.sequenceNumber)).next(()=>this.me.ye(t,t=>n.fe(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.me.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.me.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Tr.resolve(ni)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ni):this.pe(t,e))}getCacheSize(t){return this.me.getCacheSize(t)}pe(t,e){let n,r,i,s,a,c,u;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(u=Date.now(),f()<=o["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-h}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-h}ms`),Tr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new wi(t,e)}(this,e)}ge(t){const e=this.Te(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Te(t){let e=0;return this.ye(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}ye(t,e){return this.Ee(t,(t,n)=>e(n))}addReference(t,e,n){return Ei(t,n)}removeReference(t,e,n){return Ei(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Ei(t,e)}Ie(t,e){return function(t,e){let n=!1;return hi(t).jt(r=>ai(t,r,e).next(t=>(t&&(n=!0),Tr.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ee(t,(o,s)=>{if(s<=e){const e=this.Ie(t,o).next(e=>{if(!e)return i++,n.getEntry(t,o).next(()=>(n.removeEntry(o),mi(t).delete([0,tr(o.path)])))});r.push(e)}}).next(()=>Tr.waitFor(r)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Ei(t,e)}Ee(t,e){const n=mi(t);let r,i=N.T;return n.Kt({index:pr.documentTargetsIndex},([t,n],{path:o,sequenceNumber:s})=>{0===t?(i!==N.T&&e(new ot(rr(r)),i),i=s,r=o):i=N.T}).next(()=>{i!==N.T&&e(new ot(rr(r)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ei(t,e){return mi(t).put(function(t,e){return new pr(0,tr(t.path),e)}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){B(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return V(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.changes=new Ti(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:F.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Et.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Tr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e){this.N=t,this.Ht=e}addEntry(t,e,n){return Ai(t).put(Oi(e),n)}removeEntry(t,e){const n=Ai(t),r=Oi(e);return n.delete(r)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Ae(t,n)))}getEntry(t,e){return Ai(t).get(Oi(e)).next(t=>this.Re(e,t))}be(t,e){return Ai(t).get(Oi(e)).next(t=>({document:this.Re(e,t),size:oi(t)}))}getEntries(t,e){let n=Qe();return this.Pe(t,e,(t,e)=>{const r=this.Re(t,e);n=n.insert(t,r)}).next(()=>n)}ve(t,e){let n=Qe(),r=new Ke(ot.comparator);return this.Pe(t,e,(t,e)=>{const i=this.Re(t,e);n=n.insert(t,i),r=r.insert(t,oi(e))}).next(()=>({documents:n,Ve:r}))}Pe(t,e,n){if(e.isEmpty())return Tr.resolve();const r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),i=e.getIterator();let o=i.getNext();return Ai(t).Kt({range:r},(t,e,r)=>{const s=ot.fromSegments(t);for(;o&&ot.comparator(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?r.Mt(o.path.toArray()):r.done()}).next(()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(t,e,n){let r=Qe();const i=e.path.length+1,o={};if(n.isEqual(F.min())){const t=e.path.toArray();o.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),r=Vr(n);o.range=IDBKeyRange.lowerBound([t,r],!0),o.index=lr.collectionReadTimeIndex}return Ai(t).Kt(o,(t,n,o)=>{if(t.length!==i)return;const s=Ur(this.N,n);e.path.isPrefixOf(s.key.path)?oe(e,s)&&(r=r.insert(s.key,s)):o.done()}).next(()=>r)}newChangeBuffer(t){return new Si(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return Ci(t).get(fr.key).next(t=>(b(!!t),t))}Ae(t,e){return Ci(t).put(fr.key,e)}Re(t,e){if(e){const t=Ur(this.N,e);if(!t.isNoDocument()||!t.version.isEqual(F.min()))return t}return Et.newInvalidDocument(t)}}class Si extends Ii{constructor(t,e){super(),this.Se=t,this.trackRemovals=e,this.De=new Ti(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,r=new Ye((t,e)=>D(t.canonicalString(),e.canonicalString()));return this.changes.forEach((i,o)=>{const s=this.De.get(i);if(o.document.isValidDocument()){const a=Br(this.Se.N,o.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=oi(a);n+=c-s,e.push(this.Se.addEntry(t,i,a))}else if(n-=s,this.trackRemovals){const n=Br(this.Se.N,Et.newNoDocument(i,F.min()),this.getReadTime(i));e.push(this.Se.addEntry(t,i,n))}else e.push(this.Se.removeEntry(t,i))}),r.forEach(n=>{e.push(this.Se.Ht.addToCollectionParentIndex(t,n))}),e.push(this.Se.updateMetadata(t,n)),Tr.waitFor(e)}getFromCache(t,e){return this.Se.be(t,e).next(t=>(this.De.set(e,t.size),t.document))}getAllFromCache(t,e){return this.Se.ve(t,e).next(({documents:t,Ve:e})=>(e.forEach((t,e)=>{this.De.set(t,e)}),t))}}function Ci(t){return Dr(t,fr.store)}function Ai(t){return Dr(t,lr.store)}function Oi(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t){this.N=t}Ct(t,e,n,r){b(n<r&&n>=0&&r<=11);const i=new Ir("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore(or.store)}(t),function(t){t.createObjectStore(sr.store,{keyPath:sr.keyPath}),t.createObjectStore(ar.store,{keyPath:ar.keyPath,autoIncrement:!0}).createIndex(ar.userMutationsIndex,ar.userMutationsKeyPath,{unique:!0}),t.createObjectStore(cr.store)}(t),Ni(t),function(t){t.createObjectStore(lr.store)}(t));let o=Tr.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(pr.store),t.deleteObjectStore(dr.store),t.deleteObjectStore(mr.store)}(t),Ni(t)),o=o.next(()=>function(t){const e=t.store(mr.store),n=new mr(0,0,F.min().toTimestamp(),0);return e.put(mr.key,n)}(i))),n<4&&r>=4&&(0!==n&&(o=o.next(()=>function(t,e){return e.store(ar.store).Lt().next(n=>{t.deleteObjectStore(ar.store),t.createObjectStore(ar.store,{keyPath:ar.keyPath,autoIncrement:!0}).createIndex(ar.userMutationsIndex,ar.userMutationsKeyPath,{unique:!0});const r=e.store(ar.store),i=n.map(t=>r.put(t));return Tr.waitFor(i)})}(t,i))),o=o.next(()=>{!function(t){t.createObjectStore(yr.store,{keyPath:yr.keyPath})}(t)})),n<5&&r>=5&&(o=o.next(()=>this.Ce(i))),n<6&&r>=6&&(o=o.next(()=>(function(t){t.createObjectStore(fr.store)}(t),this.Ne(i)))),n<7&&r>=7&&(o=o.next(()=>this.xe(i))),n<8&&r>=8&&(o=o.next(()=>this.ke(t,i))),n<9&&r>=9&&(o=o.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(lr.store);e.createIndex(lr.readTimeIndex,lr.readTimeIndexPath,{unique:!1}),e.createIndex(lr.collectionReadTimeIndex,lr.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&r>=10&&(o=o.next(()=>this.$e(i))),n<11&&r>=11&&(o=o.next(()=>{!function(t){t.createObjectStore(vr.store,{keyPath:vr.keyPath})}(t),function(t){t.createObjectStore(br.store,{keyPath:br.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)})),o}Ne(t){let e=0;return t.store(lr.store).Kt((t,n)=>{e+=oi(n)}).next(()=>{const n=new fr(e);return t.store(fr.store).put(fr.key,n)})}Ce(t){const e=t.store(sr.store),n=t.store(ar.store);return e.Lt().next(e=>Tr.forEach(e,e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Lt(ar.userMutationsIndex,r).next(n=>Tr.forEach(n,n=>{b(n.userId===e.userId);const r=Hr(this.N,n);return ii(t,e.userId,r).next(()=>{})}))}))}xe(t){const e=t.store(pr.store),n=t.store(lr.store);return t.store(mr.store).get(mr.key).next(t=>{const r=[];return n.Kt((n,i)=>{const o=new $(n),s=function(t){return[0,tr(t)]}(o);r.push(e.get(s).next(n=>n?Tr.resolve():(n=>e.put(new pr(0,tr(n),t.highestListenSequenceNumber)))(o)))}).next(()=>Tr.waitFor(r))})}ke(t,e){t.createObjectStore(gr.store,{keyPath:gr.keyPath});const n=e.store(gr.store),r=new Zr,i=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:tr(r)})}};return e.store(lr.store).Kt({qt:!0},(t,e)=>{const n=new $(t);return i(n.popLast())}).next(()=>e.store(cr.store).Kt({qt:!0},([t,e,n],r)=>{const o=rr(e);return i(o.popLast())}))}$e(t){const e=t.store(dr.store);return e.Kt((t,n)=>{const r=Kr(n),i=Wr(this.N,r);return e.put(i)})}}function Ni(t){t.createObjectStore(pr.store,{keyPath:pr.keyPath}).createIndex(pr.documentTargetsIndex,pr.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(dr.store,{keyPath:dr.keyPath}).createIndex(dr.queryTargetsIndexName,dr.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(mr.store)}const Ri="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Pi{constructor(t,e,n,r,i,o,s,a,c,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Oe=i,this.window=o,this.document=s,this.Fe=c,this.Me=u,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=t=>Promise.resolve(),!Pi.bt())throw new T(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _i(this,r),this.We=e+"main",this.N=new Fr(a),this.Ge=new kr(this.We,11,new xi(this.N)),this.ze=new fi(this.referenceDelegate,this.N),this.Ht=new ti,this.He=function(t,e){return new ki(t,e)}(this.N,this.Ht),this.Je=new Yr,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,Ri);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.ze.getHighestSequenceNumber(t))}).then(t=>{this.Le=new N(t,this.Fe)}).then(()=>{this.Be=!0}).catch(t=>(this.Ge&&this.Ge.close(),Promise.reject(t)))}nn(t){return this.Qe=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ge.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Li(t).put(new yr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(t).next(t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(t)).next(e=>this.isPrimary&&!e?this.on(t).next(()=>!1):!!e&&this.an(t).next(()=>!0))).catch(t=>{if(Ar(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Oe.enqueueRetryable(()=>this.Qe(t)),this.isPrimary=t})}sn(t){return Di(t).get(or.key).next(t=>Tr.resolve(this.cn(t)))}un(t){return Li(t).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Dr(t,yr.store);return e.Lt().next(t=>{const n=this.fn(t,18e5),r=t.filter(t=>-1===n.indexOf(t));return Tr.forEach(r,t=>e.delete(t.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ye)for(const e of t)this.Ye.removeItem(this.dn(e.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(t){return!!t&&t.ownerId===this.clientId}rn(t){return this.Me?Tr.resolve(!0):Di(t).get(or.key).next(e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)){if(this.cn(e)&&this.networkEnabled)return!0;if(!this.cn(e)){if(!e.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,Ri);return!1}}return!(!this.networkEnabled||!this.inForeground)||Li(t).Lt().next(t=>void 0===this.fn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&p("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[or.store,yr.store],t=>{const e=new Pr(t,N.T);return this.on(e).next(()=>this.un(e))}),this.Ge.close(),this.yn()}fn(t,e){return t.filter(t=>this.ln(t.updateTimeMs,e)&&!this.wn(t.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",t=>Li(t).Lt().next(t=>this.fn(t,18e5).map(t=>t.clientId)))}get started(){return this.Be}getMutationQueue(t){return si.Yt(t,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(t,e,n){p("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite";let i;return this.Ge.runTransaction(t,r,wr,r=>(i=new Pr(r,this.Le?this.Le.next():N.T),"readwrite-primary"===e?this.sn(i).next(t=>!!t||this.rn(i)).next(e=>{if(!e)throw m(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new T(E.FAILED_PRECONDITION,_r);return n(i)}).next(t=>this.an(i).next(()=>t)):this.Tn(i).next(()=>n(i)))).then(t=>(i.raiseOnCommittedEvent(),t))}Tn(t){return Di(t).get(or.key).next(t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)&&!this.cn(t)&&!(this.Me||this.allowTabSynchronization&&t.allowTabSynchronization))throw new T(E.FAILED_PRECONDITION,Ri)})}an(t){const e=new or(this.clientId,this.allowTabSynchronization,Date.now());return Di(t).put(or.key,e)}static bt(){return kr.bt()}on(t){const e=Di(t);return e.get(or.key).next(t=>this.cn(t)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete(or.key)):Tr.resolve())}ln(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(m(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Ue=()=>{this._n(),Object(s["r"])()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(t){var e;try{const n=null!==(null===(e=this.Ye)||void 0===e?void 0:e.getItem(this.dn(t)));return p("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return m("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(t){}}dn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Di(t){return Dr(t,or.store)}function Li(t){return Dr(t,yr.store)}function Mi(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ji{constructor(t,e){this.progress=t,this.En=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return ot.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Qt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new ot(e)).next(t=>{let e=tn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=tn();return this.Ht.getCollectionParents(t,r).next(o=>Tr.forEach(o,o=>{const s=function(t,e){return new Ht(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.Dn(t,s,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Et.newInvalidDocument(n),r=r.insert(n,i)),xe(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{oe(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=on();for(const o of e)for(const t of o.mutations)t instanceof Le&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=on(),r=on();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ui(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(F.min())?this.Fn(t,e):this.On.Pn(t,r).next(i=>{const s=this.Mn(e,i);return(Gt(e)||Yt(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(f()<=o["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ie(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(s.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Ye(se(t));return e.forEach((e,r)=>{oe(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return f()<=o["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ie(e)),this.On.getDocumentsMatchingQuery(t,e,F.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Ke(D),this.qn=new Ti(t=>kt(t),Ct),this.Kn=F.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Fi(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function qi(t,e,n,r){return new Vi(t,e,n,r)}async function $i(t,e){const n=_(t);let r=n.In,i=n.Qn;const o=await n.persistence.runTransaction("Handle user change","readonly",t=>{let o;return n.In.getAllMutationBatches(t).next(s=>(o=s,r=n.persistence.getMutationQueue(e),i=new Fi(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let s=on();for(const t of o){n.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return i.Pn(t,s).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),o}function zi(t,e){const n=_(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=Tr.resolve();return o.forEach(t=>{s=s.next(()=>r.getEntry(e,t)).next(e=>{const o=n.docVersions.get(t);b(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),s.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function Hi(t){const e=_(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Ki(t,e){const n=_(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const s=[];e.targetChanges.forEach((e,o)=>{const a=i.get(o);if(!a)return;s.push(n.ze.removeMatchingKeys(t,e.removedDocuments,o).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,o)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(o,u),function(t,e,n){return b(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&s.push(n.ze.updateTargetData(t,u))}});let a=Qe();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),s.push(Wi(t,o,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(F.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));s.push(e)}return Tr.waitFor(s).next(()=>o.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}function Wi(t,e,n,r,i){let o=on();return n.forEach(t=>o=o.add(t)),e.getEntries(t,o).next(t=>{let o=Qe();return n.forEach((n,s)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;s.isNoDocument()&&s.version.isEqual(F.min())?(e.removeEntry(n,c),o=o.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(s,c),o=o.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),o})}function Gi(t,e){const n=_(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Yi(t,e){const n=_(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,Tr.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new jr(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Ji(t,e,n){const r=_(t),i=r.Un.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Ar(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Xi(t,e,n){const r=_(t);let i=F.min(),o=on();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=_(t),i=r.qn.get(n);return void 0!==i?Tr.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,te(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{o=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:F.min(),n?o:on())).next(t=>({documents:t,Gn:o})))}function Qi(t,e){const n=_(t),r=_(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",t=>r.Tt(t,e).next(t=>t?t.target:null))}function Zi(t){const e=_(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,n){const r=_(t);let i=Qe(),o=Vr(n);const s=Ai(e),a=IDBKeyRange.lowerBound(o,!0);return s.Kt({index:lr.readTimeIndex,range:a},(t,e)=>{const n=Ur(r.N,e);i=i.insert(n.key,n),o=e.readTime}).next(()=>({En:i,readTime:qr(o)}))}(e.jn,t,e.Kn)).then(({En:t,readTime:n})=>(e.Kn=n,t))}async function to(t){const e=_(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=Ai(t);let n=F.min();return e.Kt({index:lr.readTimeIndex,reverse:!0},(t,e,r)=>{e.readTime&&(n=qr(e.readTime)),r.done()}).next(()=>n)}(t)).then(t=>{e.Kn=t})}async function eo(t,e,n,r){const i=_(t);let o=on(),s=Qe(),a=nn();for(const h of n){const t=e.zn(h.metadata.name);h.document&&(o=o.add(t)),s=s.insert(t,e.Hn(h)),a=a.insert(t,e.Jn(h.metadata.readTime))}const c=i.jn.newChangeBuffer({trackRemovals:!0}),u=await Yi(i,function(t){return te(Wt($.fromString("__bundle__/docs/"+t)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",t=>Wi(t,c,s,F.min(),a).next(e=>(c.apply(t),e)).next(e=>i.ze.removeMatchingKeysForTargetId(t,u.targetId).next(()=>i.ze.addMatchingKeys(t,o,u.targetId)).next(()=>i.Qn.vn(t,e)).next(()=>e)))}async function no(t,e,n=on()){const r=await Yi(t,te(Gr(e.bundledQuery))),i=_(t);return i.persistence.runTransaction("Save named query","readwrite",t=>{const o=Tn(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(t,e);const s=r.withResumeToken(G.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(s.targetId,s),i.ze.updateTargetData(t,s).next(()=>i.ze.removeMatchingKeysForTargetId(t,r.targetId)).next(()=>i.ze.addMatchingKeys(t,n,r.targetId)).next(()=>i.Je.saveNamedQuery(t,e))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Tr.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:Tn(n.createTime)}),Tr.resolve()}getNamedQuery(t,e){return Tr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Gr(t.bundledQuery),readTime:Tn(t.readTime)}}(e)),Tr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.Zn=new Ye(oo.ts),this.es=new Ye(oo.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new oo(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new oo(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new ot(new $([])),n=new oo(e,t),r=new oo(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new ot(new $([])),n=new oo(e,t),r=new oo(e,t+1);let i=on();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new oo(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class oo{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return ot.comparator(t.key,e.key)||D(t.ls,e.ls)}static ns(t,e){return D(t.ls,e.ls)||ot.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Ye(oo.ts)}checkEmpty(t){return Tr.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Lr(i,e,n,r);this.In.push(o);for(const s of r)this.ds=this.ds.add(new oo(s.key,i)),this.Ht.addToCollectionParentIndex(t,s.key.path.popLast());return Tr.resolve(o)}lookupMutationBatch(t,e){return Tr.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return Tr.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Tr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Tr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new oo(e,0),r=new oo(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),Tr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ye(D);return e.forEach(t=>{const e=new oo(t,0),r=new oo(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),Tr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;ot.isDocumentKey(i)||(i=i.child(""));const o=new oo(new ot(i),0);let s=new Ye(D);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.ls)),!0)},o),Tr.resolve(this.gs(s))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){b(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Tr.forEach(e.mutations,r=>{const i=new oo(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new oo(e,0),r=this.ds.firstAfterOrEqual(n);return Tr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Tr.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Ke(ot.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),o=i?i.size:0,s=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:s,readTime:n}),this.size+=s-o,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Tr.resolve(n?n.document.clone():Et.newInvalidDocument(e))}getEntries(t,e){let n=Qe();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Et.newInvalidDocument(t))}),Tr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Qe();const i=new ot(e.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i,readTime:s}}=o.getNext();if(!e.path.isPrefixOf(t.path))break;s.compareTo(n)<=0||oe(e,i)&&(r=r.insert(i.key,i.clone()))}return Tr.resolve(r)}Ts(t,e){return Tr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new co(this)}getSize(t){return Tr.resolve(this.size)}}class co extends Ii{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),Tr.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t){this.persistence=t,this.Es=new Ti(t=>kt(t),Ct),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Is=0,this.As=new io,this.targetCount=0,this.Rs=li.se()}forEachTarget(t,e){return this.Es.forEach((t,n)=>e(n)),Tr.resolve()}getLastRemoteSnapshotVersion(t){return Tr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Tr.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Tr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Tr.resolve()}ae(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new li(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Tr.resolve()}updateTargetData(t,e){return this.ae(e),Tr.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Tr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Es.forEach((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)}),Tr.waitFor(i).next(()=>r)}getTargetCount(t){return Tr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return Tr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Tr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Tr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Tr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Tr.resolve(n)}containsKey(t,e){return Tr.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,e){this.bs={},this.Le=new N(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new uo(this),this.Ht=new Qr,this.He=function(t,e){return new ao(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new Fr(e),this.Je=new ro(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new so(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new lo(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return Tr.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class lo extends Er{constructor(t){super(),this.currentSequenceNumber=t}}class fo{constructor(t){this.persistence=t,this.Ds=new io,this.Cs=null}static Ns(t){return new fo(t)}get xs(){if(this.Cs)return this.Cs;throw v()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Tr.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Tr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Tr.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Tr.forEach(this.xs,n=>{const r=ot.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return Tr.or([()=>Tr.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e){return`firestore_clients_${t}_${e}`}function mo(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+="_"+e.uid),r}function go(t,e){return`firestore_targets_${t}_${e}`}class yo{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static $s(t,e,n){const r=JSON.parse(n);let i,o="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return o&&r.error&&(o="string"==typeof r.error.message&&"string"==typeof r.error.code,o&&(i=new T(r.error.code,r.error.message))),o?new yo(t,e,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class vo{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static $s(t,e){const n=JSON.parse(e);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new T(n.error.code,n.error.message))),i?new vo(t,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class bo{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static $s(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=an();for(let o=0;r&&o<n.activeTargetIds.length;++o)r=it(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return r?new bo(t,i):(m("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class wo{constructor(t,e){this.clientId=t,this.onlineState=e}static $s(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new wo(e.clientId,e.onlineState):(m("SharedClientState","Failed to parse online state: "+t),null)}}class _o{constructor(){this.activeTargetIds=an()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Eo{constructor(t,e,n,r,i){this.window=t,this.Oe=e,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Ke(D),this.started=!1,this.Ks=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.js=po(this.persistenceKey,this.Ls),this.Qs=function(t){return"firestore_sequence_number_"+t}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new _o),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Js=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.pn();for(const n of t){if(n===this.Ls)continue;const t=this.getItem(po(this.persistenceKey,n));if(t){const e=bo.$s(n,t);e&&(this.qs=this.qs.insert(e.clientId,e))}}this.Ys();const e=this.storage.getItem(this.Hs);if(e){const t=this.Xs(e);t&&this.Zs(t)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Qs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(t){let e=!1;return this.qs.forEach((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ei(t,"pending")}updateMutationState(t,e,n){this.ei(t,e,n),this.ni(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(go(this.persistenceKey,t));if(n){const r=vo.$s(t,n);r&&(e=r.state)}}return this.si.Fs(t),this.Ys(),e}removeLocalQueryTarget(t){this.si.Ms(t),this.Ys()}isLocalQueryTarget(t){return this.si.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(go(this.persistenceKey,t))}updateQueryState(t,e,n){this.ii(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.ni(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.ri(t)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}Us(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.js)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Ws.test(e.key)){if(null==e.newValue){const t=this.ai(e.key);return this.ci(t,null)}{const t=this.ui(e.key,e.newValue);if(t)return this.ci(t.clientId,t)}}else if(this.Gs.test(e.key)){if(null!==e.newValue){const t=this.hi(e.key,e.newValue);if(t)return this.li(t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.fi(e.key,e.newValue);if(t)return this.di(t)}}else if(e.key===this.Hs){if(null!==e.newValue){const t=this.Xs(e.newValue);if(t)return this.Zs(t)}}else if(e.key===this.Qs){const t=function(t){let e=N.T;if(null!=t)try{const n=JSON.parse(t);b("number"==typeof n),e=n}catch(t){m("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==N.T&&this.sequenceNumberHandler(t)}else if(e.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(e)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(t,e,n){const r=new yo(this.currentUser,t,e,n),i=mo(this.persistenceKey,this.currentUser,t);this.setItem(i,r.Os())}ni(t){const e=mo(this.persistenceKey,this.currentUser,t);this.removeItem(e)}ri(t){const e={clientId:this.Ls,onlineState:t};this.storage.setItem(this.Hs,JSON.stringify(e))}ii(t,e,n){const r=go(this.persistenceKey,t),i=new vo(t,e,n);this.setItem(r,i.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(t){const e=this.Ws.exec(t);return e?e[1]:null}ui(t,e){const n=this.ai(t);return bo.$s(n,e)}hi(t,e){const n=this.Gs.exec(t),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return yo.$s(new u(i),r,e)}fi(t,e){const n=this.zs.exec(t),r=Number(n[1]);return vo.$s(r,e)}Xs(t){return wo.$s(t)}async li(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine._i(t.batchId,t.state,t.error);p("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}di(t){return this.syncEngine.mi(t.targetId,t.state,t.error)}ci(t,e){const n=e?this.qs.insert(t,e):this.qs.remove(t),r=this.ti(this.qs),i=this.ti(n),o=[],s=[];return i.forEach(t=>{r.has(t)||o.push(t)}),r.forEach(t=>{i.has(t)||s.push(t)}),this.syncEngine.gi(o,s).then(()=>{this.qs=n})}Zs(t){this.qs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ti(t){let e=an();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class To{constructor(){this.yi=new _o,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new _o,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{Ti(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);p("RestConnection","Sending: ",i,n);const o={};return this.Ui(o,r),this.qi(t,i,o,n).then(t=>(p("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=So[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,o)=>{const s=new a["g"];s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const e=s.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),o(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(t.status);o(new T(e,t.message))}else o(new T(E.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new T(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);s.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a["d"]({})),this.Ui(o.initMessageHeaders,e),Object(s["p"])()||Object(s["q"])()||Object(s["l"])()||Object(s["n"])()||Object(s["s"])()||Object(s["k"])()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");p("Connection","Creating WebChannel: "+c,o);const u=r.createWebChannel(c,o);let h=!1,l=!1;const f=new Co({vi:t=>{l?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),u.open(),h=!0),p("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),d=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return d(u,a["f"].EventType.OPEN,()=>{l||p("Connection","WebChannel transport opened.")}),d(u,a["f"].EventType.CLOSE,()=>{l||(l=!0,p("Connection","WebChannel transport closed"),f.$i())}),d(u,a["f"].EventType.ERROR,t=>{l||(l=!0,g("Connection","WebChannel transport errored:",t),f.$i(new T(E.UNAVAILABLE,"The operation could not be completed")))}),d(u,a["f"].EventType.MESSAGE,t=>{var e;if(!l){const n=t.data[0];b(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=qe[t];if(void 0!==e)return He(e)}(t),n=i.message;void 0===e&&(e=E.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,f.$i(new T(e,n)),u.close()}else p("Connection","WebChannel received:",n),f.Oi(n)}}),d(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ki()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(){return"undefined"!=typeof window?window:null}function xo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){return new bn(t,!0)}class Ro{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,e,n,r,i,o){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Ro(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===E.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new T(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Tr(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return p("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Do extends Po{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Tr(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=Ln(this.N,t),n=function(t){if(!("targetChange"in t))return F.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?F.min():e.readTime?Tn(e.readTime):F.min()}(t);return this.listener.Er(e,n)}Ir(t){const e={};e.database=xn(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=At(r)?{documents:Un(t,r)}:{query:Bn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=_n(t,e.resumeToken):e.snapshotVersion.compareTo(F.min())>0&&(n.readTime=wn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=qn(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=xn(this.N),e.removeTarget=t,this.wr(e)}}class Lo extends Po{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(t){return this.nr.ji("Write",t)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=Fn(t.writeResults,t.commitTime),n=Tn(t.commitTime);return this.listener.vr(n,e)}return b(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=xn(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Mn(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(E.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(E.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class jo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(m(e),this.$r=!1):p("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ti(t=>{n.enqueueAndForget(async()=>{Wo(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_(t);e.Kr.add(4),await Bo(e),e.Wr.set("Unknown"),e.Kr.delete(4),await Uo(e)}(this))})}),this.Wr=new jo(n,r)}}async function Uo(t){if(Wo(t))for(const e of t.jr)await e(!0)}async function Bo(t){for(const e of t.jr)await e(!1)}function Vo(t,e){const n=_(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Ko(n)?Ho(n):hs(n).cr()&&$o(n,e))}function qo(t,e){const n=_(t),r=hs(n);n.qr.delete(e),r.cr()&&zo(n,e),0===n.qr.size&&(r.cr()?r.lr():Wo(n)&&n.Wr.set("Unknown"))}function $o(t,e){t.Gr.Y(e.targetId),hs(t).Ir(e)}function zo(t,e){t.Gr.Y(e),hs(t).Ar(e)}function Ho(t){t.Gr=new pn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),hs(t).start(),t.Wr.Or()}function Ko(t){return Wo(t)&&!hs(t).ar()&&t.qr.size>0}function Wo(t){return 0===_(t).Kr.size}function Go(t){t.Gr=void 0}async function Yo(t){t.qr.forEach((e,n)=>{$o(t,e)})}async function Jo(t,e){Go(t),Ko(t)?(t.Wr.Lr(e),Ho(t)):t.Wr.set("Unknown")}async function Xo(t,e,n){if(t.Wr.set("Online"),e instanceof fn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Qo(t,n)}else if(e instanceof hn?t.Gr.rt(e):e instanceof ln?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(F.min()))try{const e=await Hi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(G.EMPTY_BYTE_STRING,n.snapshotVersion)),zo(t,e);const r=new jr(n.target,e,1,n.sequenceNumber);$o(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await Qo(t,e)}}async function Qo(t,e,n){if(!Ar(e))throw e;t.Kr.add(1),await Bo(t),t.Wr.set("Offline"),n||(n=()=>Hi(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Uo(t)})}function Zo(t,e){return e().catch(n=>Qo(t,n,e))}async function ts(t){const e=_(t),n=ls(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;es(e);)try{const t=await Gi(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,ns(e,t)}catch(t){await Qo(e,t)}rs(e)&&is(e)}function es(t){return Wo(t)&&t.Ur.length<10}function ns(t,e){t.Ur.push(e);const n=ls(t);n.cr()&&n.br&&n.Pr(e.mutations)}function rs(t){return Wo(t)&&!ls(t).ar()&&t.Ur.length>0}function is(t){ls(t).start()}async function os(t){ls(t).Sr()}async function ss(t){const e=ls(t);for(const n of t.Ur)e.Pr(n.mutations)}async function as(t,e,n){const r=t.Ur.shift(),i=Mr.from(r,e,n);await Zo(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ts(t)}async function cs(t,e){e&&ls(t).br&&await async function(t,e){if(n=e.code,ze(n)&&n!==E.ABORTED){const n=t.Ur.shift();ls(t).hr(),await Zo(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await ts(t)}var n}(t,e),rs(t)&&is(t)}async function us(t,e){const n=_(t);e?(n.Kr.delete(2),await Uo(n)):e||(n.Kr.add(2),await Bo(n),n.Wr.set("Unknown"))}function hs(t){return t.zr||(t.zr=function(t,e,n){const r=_(t);return r.Cr(),new Do(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:Yo.bind(null,t),Ci:Jo.bind(null,t),Er:Xo.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Ko(t)?Ho(t):t.Wr.set("Unknown")):(await t.zr.stop(),Go(t))})),t.zr}function ls(t){return t.Hr||(t.Hr=function(t,e,n){const r=_(t);return r.Cr(),new Lo(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:os.bind(null,t),Ci:cs.bind(null,t),Vr:ss.bind(null,t),vr:as.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await ts(t)):(await t.Hr.stop(),t.Ur.length>0&&(p("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fs{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new fs(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ds(t,e){if(m("AsyncQueue",`${e}: ${t}`),Ar(t))return new T(E.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ot.comparator(e.key,n.key):(t,e)=>ot.comparator(t.key,e.key),this.keyedMap=tn(),this.sortedSet=new Ke(this.comparator)}static emptySet(t){return new ps(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ps))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ps;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.Jr=new Ke(ot.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):v():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class gs{constructor(t,e,n,r,i,o,s,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new gs(t,e,ps.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ne(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.Xr=void 0,this.listeners=[]}}class vs{constructor(){this.queries=new Ti(t=>re(t),ne),this.onlineState="Unknown",this.Zr=new Set}}async function bs(t,e){const n=_(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new ys),i)try{o.Xr=await n.onListen(r)}catch(t){const n=ds(t,`Initialization of query '${ie(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.eo(n.onlineState),o.Xr&&e.no(o.Xr)&&Ts(n)}async function ws(t,e){const n=_(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _s(t,e){const n=_(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(i)&&(r=!0);e.Xr=i}}r&&Ts(n)}function Es(t,e,n){const r=_(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function Ts(t){t.Zr.forEach(t=>{t.next()})}class Is{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new gs(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=gs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e){this.payload=t,this.byteLength=e}ho(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t){this.N=t}zn(t){return Cn(this.N,t)}Hn(t){return t.metadata.exists?Pn(this.N,t.document,!1):Et.newNoDocument(this.zn(t.metadata.name),this.Jn(t.metadata.readTime))}Jn(t){return Tn(t)}}class Cs{constructor(t,e,n){this.lo=t,this.localStore=e,this.N=n,this.queries=[],this.documents=[],this.progress=As(t)}fo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}wo(t){const e=new Map,n=new Ss(this.N);for(const r of t)if(r.metadata.queries){const t=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||on()).add(t);e.set(n,r)}}return e}async complete(){const t=await eo(this.localStore,new Ss(this.N),this.documents,this.lo.id),e=this.wo(this.documents);for(const n of this.queries)await no(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new ji(Object.assign({},this.progress),t)}}function As(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t){this.key=t}}class xs{constructor(t){this.key=t}}class Ns{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=on(),this.mutatedKeys=on(),this.po=se(t),this.To=new ps(this.po)}get Eo(){return this._o}Io(t,e){const n=e?e.Ao:new ms,r=e?e.To:this.To;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=Gt(this.query)&&r.size===this.query.limit?r.last():null,c=Yt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=oe(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let d=!1;u&&h?u.data.isEqual(h.data)?l!==f&&(n.track({type:3,doc:h}),d=!0):this.Ro(u,h)||(n.track({type:2,doc:h}),d=!0,(a&&this.po(h,a)>0||c&&this.po(h,c)<0)&&(s=!0)):!u&&h?(n.track({type:0,doc:h}),d=!0):u&&!h&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(h?(o=o.add(h),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))}),Gt(this.query)||Yt(this.query))for(;o.size>this.query.limit;){const t=Gt(this.query)?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{To:o,Ao:n,Ln:s,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.To;this.To=t.To,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const o=e?this.Po():[],s=0===this.yo.size&&this.current?1:0,a=s!==this.mo;return this.mo=s,0!==i.length||a?{snapshot:new gs(this.query,t.To,r,i,t.mutatedKeys,0===s,a,!1),vo:o}:{vo:o}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({To:this.To,Ao:new ms,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.To.has(t)&&!this.To.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=on(),this.To.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new xs(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Os(n))}),e}So(t){this._o=t.Gn,this.yo=on();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return gs.fromInitialDocuments(this.query,this.To,this.mutatedKeys,0===this.mo)}}class Rs{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ps{constructor(t){this.key=t,this.Co=!1}}class Ds{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new Ti(t=>re(t),ne),this.ko=new Map,this.$o=new Set,this.Oo=new Ke(ot.comparator),this.Fo=new Map,this.Mo=new io,this.Lo={},this.Bo=new Map,this.Uo=li.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Ls(t,e){const n=ha(t);let r,i;const o=n.xo.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Do();else{const t=await Yi(n.localStore,te(e)),o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Ms(n,e,r,"current"===o),n.isPrimaryClient&&Vo(n.remoteStore,t)}return i}async function Ms(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await Xi(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,i)));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return Ys(t,e.targetId,s.vo),s.snapshot}(t,e,n,r);const i=await Xi(t.localStore,e,!0),o=new Ns(e,i.Gn),s=o.Io(i.documents),a=un.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=o.applyChanges(s,t.isPrimaryClient,a);Ys(t,n,c.vo);const u=new Rs(e,n,o);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function js(t,e){const n=_(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(t=>!ne(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ji(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qo(n.remoteStore,r.targetId),Ws(n,r.targetId)}).catch(gi)):(Ws(n,r.targetId),await Ji(n.localStore,r.targetId,!0))}async function Fs(t,e,n){const r=la(t);try{const t=await function(t,e){const n=_(t),r=j.now(),i=e.reduce((t,e)=>t.add(e.key),on());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,i).next(i=>{o=i;const s=[];for(const t of e){const e=Ne(t,o.get(t.key));null!=e&&s.push(new Le(t.key,e,_t(e.value.mapValue),Se.exists(!0)))}return n.In.addMutationBatch(t,r,s,e)})).then(t=>(t.applyToLocalDocumentSet(o),{batchId:t.batchId,changes:o}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new Ke(D)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await Qs(r,t.changes),await ts(r.remoteStore)}catch(t){const e=ds(t,"Failed to persist write");n.reject(e)}}async function Us(t,e){const n=_(t);try{const t=await Ki(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Fo.get(e);r&&(b(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?b(r.Co):t.removedDocuments.size>0&&(b(r.Co),r.Co=!1))}),await Qs(n,t,e)}catch(t){await gi(t)}}function Bs(t,e,n){const r=_(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=_(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.eo(e)&&(r=!0)}),r&&Ts(n)}(r.eventManager,e),t.length&&r.No.Er(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vs(t,e,n){const r=_(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),o=i&&i.key;if(o){let t=new Ke(ot.comparator);t=t.insert(o,Et.newNoDocument(o,F.min()));const n=on().add(o),i=new cn(F.min(),new Map,new Ye(D),t,n);await Us(r,i),r.Oo=r.Oo.remove(o),r.Fo.delete(e),Xs(r)}else await Ji(r.localStore,e,!1).then(()=>Ws(r,e,n)).catch(gi)}async function qs(t,e){const n=_(t),r=e.batch.batchId;try{const t=await zi(n.localStore,e);Ks(n,r,null),Hs(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qs(n,t)}catch(t){await gi(t)}}async function $s(t,e,n){const r=_(t);try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(b(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);Ks(r,e,n),Hs(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qs(r,t)}catch(n){await gi(n)}}async function zs(t,e){const n=_(t);Wo(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=_(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.In.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const r=n.Bo.get(t)||[];r.push(e),n.Bo.set(t,r)}catch(t){const n=ds(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Hs(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function Ks(t,e,n){const r=_(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function Ws(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||Gs(t,e)})}function Gs(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(qo(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Xs(t))}function Ys(t,e,n){for(const r of n)r instanceof Os?(t.Mo.addReference(r.key,e),Js(t,r)):r instanceof xs?(p("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||Gs(t,r.key)):v()}function Js(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(p("SyncEngine","New document in limbo: "+n),t.$o.add(r),Xs(t))}function Xs(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new ot($.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Ps(n)),t.Oo=t.Oo.insert(n,r),Vo(t.remoteStore,new jr(te(Wt(n.path)),r,2,N.T))}}async function Qs(t,e,n){const r=_(t),i=[],o=[],s=[];r.xo.isEmpty()||(r.xo.forEach((t,a)=>{s.push(r.Ko(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ui.kn(a.targetId,t);o.push(e)}}))}),await Promise.all(s),r.No.Er(i),await async function(t,e){const n=_(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Tr.forEach(e,e=>Tr.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Tr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Ar(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,o))}async function Zs(t,e){const n=_(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await $i(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new T(E.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Qs(n,t.Wn)}}function ta(t,e){const n=_(t),r=n.Fo.get(e);if(r&&r.Co)return on().add(r.key);{let t=on();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.Eo)}return t}}async function ea(t,e){const n=_(t),r=await Xi(n.localStore,e.query,!0),i=e.view.So(r);return n.isPrimaryClient&&Ys(n,e.targetId,i.vo),i}async function na(t){const e=_(t);return Zi(e.localStore).then(t=>Qs(e,t))}async function ra(t,e,n,r){const i=_(t),o=await function(t,e){const n=_(t),r=_(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>r.Xt(t,e).next(e=>e?n.Qn.Pn(t,e):Tr.resolve(null)))}(i.localStore,e);null!==o?("pending"===n?await ts(i.remoteStore):"acknowledged"===n||"rejected"===n?(Ks(i,e,r||null),Hs(i,e),function(t,e){_(_(t).In).te(e)}(i.localStore,e)):v(),await Qs(i,o)):p("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ia(t,e){const n=_(t);if(ha(n),la(n),!0===e&&!0!==n.qo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await oa(n,t.toArray());n.qo=!0,await us(n.remoteStore,!0);for(const r of e)Vo(n.remoteStore,r)}else if(!1===e&&!1!==n.qo){const t=[];let e=Promise.resolve();n.ko.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?t.push(i):e=e.then(()=>(Ws(n,i),Ji(n.localStore,i,!0))),qo(n.remoteStore,i)}),await e,await oa(n,t),function(t){const e=_(t);e.Fo.forEach((t,n)=>{qo(e.remoteStore,n)}),e.Mo.us(),e.Fo=new Map,e.Oo=new Ke(ot.comparator)}(n),n.qo=!1,await us(n.remoteStore,!1)}}async function oa(t,e,n){const r=_(t),i=[],o=[];for(const s of e){let t;const e=r.ko.get(s);if(e&&0!==e.length){t=await Yi(r.localStore,te(e[0]));for(const t of e){const e=r.xo.get(t),n=await ea(r,e);n.snapshot&&o.push(n.snapshot)}}else{const e=await Qi(r.localStore,s);t=await Yi(r.localStore,e),await Ms(r,sa(e),s,!1)}i.push(t)}return r.No.Er(o),i}function sa(t){return Kt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function aa(t){const e=_(t);return _(_(e.localStore).persistence).pn()}async function ca(t,e,n,r){const i=_(t);if(i.qo)p("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(e))switch(n){case"current":case"not-current":{const t=await Zi(i.localStore),r=cn.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await Qs(i,t,r);break}case"rejected":await Ji(i.localStore,e,!0),Ws(i,e,r);break;default:v()}}async function ua(t,e,n){const r=ha(t);if(r.qo){for(const t of e){if(r.ko.has(t)){p("SyncEngine","Adding an already active target "+t);continue}const e=await Qi(r.localStore,t),n=await Yi(r.localStore,e);await Ms(r,sa(e),n.targetId,!1),Vo(r.remoteStore,n)}for(const t of n)r.ko.has(t)&&await Ji(r.localStore,t,!1).then(()=>{qo(r.remoteStore,t),Ws(r,t)}).catch(gi)}}function ha(t){const e=_(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Us.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ta.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vs.bind(null,e),e.No.Er=_s.bind(null,e.eventManager),e.No.jo=Es.bind(null,e.eventManager),e}function la(t){const e=_(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qs.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$s.bind(null,e),e}function fa(t,e,n){const r=_(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=_(t),r=Tn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Je.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(r)>=0)}(t.localStore,r))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r));n._updateProgress(As(r));const i=new Cs(r,t.localStore,e.N);let o=await e.Qo();for(;o;){const t=await i.fo(o);t&&n._updateProgress(t),o=await e.Qo()}const s=await i.complete();await Qs(t,s.En,void 0),await function(t,e){const n=_(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Je.saveBundleMetadata(t,e))}(t.localStore,r),n._completeWith(s.progress)}catch(t){g("SyncEngine","Loading bundle failed with "+t),n._failWith(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class da{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=No(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return qi(this.persistence,new Bi,t.initialUser,this.N)}Go(t){return new ho(fo.Ns,this.N)}Wo(t){return new To}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pa extends da{constructor(t,e,n){super(),this.Jo=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await to(this.localStore),await this.Jo.initialize(this,t),await la(this.Jo.syncEngine),await ts(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(t){return qi(this.persistence,new Bi,t.initialUser,this.N)}zo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new bi(e,t.asyncQueue)}Go(t){const e=Mi(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ri.withCacheSize(this.cacheSizeBytes):ri.DEFAULT;return new Pi(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Oo(),xo(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(t){return new To}}class ma extends pa{constructor(t,e){super(t,e,!1),this.Jo=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Jo.syncEngine;this.sharedClientState instanceof Eo&&(this.sharedClientState.syncEngine={_i:ra.bind(null,e),mi:ca.bind(null,e),gi:ua.bind(null,e),pn:aa.bind(null,e),wi:na.bind(null,e)},await this.sharedClientState.start()),await this.persistence.nn(async t=>{await ia(this.Jo.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Wo(t){const e=Oo();if(!Eo.bt(e))throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Mi(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Eo(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class ga{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Bs(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zs.bind(null,this.syncEngine),await us(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new vs}createDatastore(t){const e=No(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ao(r));var r;return function(t,e,n){return new Mo(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Bs(this.syncEngine,t,0),o=ko.bt()?new ko:new Io,new Fo(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Ds(t,e,n,r,i,o);return s&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_(t);p("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await Bo(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e){this.Zo=t,this.N=e,this.metadata=new I,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(t=>{t&&t.ho()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const t=await this.na();if(null===t)return null;const e=this.ta.decode(t),n=Number(e);isNaN(n)&&this.sa(`length string (${e}) is not valid number`);const r=await this.ia(n);return new ks(JSON.parse(r),t.length+n)}ra(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async na(){for(;this.ra()<0;)if(await this.oa())break;if(0===this.buffer.length)return null;const t=this.ra();t<0&&this.sa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ia(t){for(;this.buffer.length<t;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const e=this.ta.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}sa(t){throw this.Zo.cancel(),new Error("Invalid bundle format: "+t)}async oa(){const t=await this.Zo.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=_(t),r=xn(n.N)+"/documents",i={documents:e.map(t=>Sn(n.N,t))},o=await n.Ki("BatchGetDocuments",r,i),s=new Map;o.forEach(t=>{const e=Dn(n.N,t);s.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=s.get(t.toString());b(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ue(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=ot.fromPath(e);this.mutations.push(new Be(n,this.precondition(n)))}),await async function(t,e){const n=_(t),r=xn(n.N)+"/documents",i={writes:e.map(t=>Mn(n.N,t))};await n.Li("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw v();e=F.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Se.updateTime(e):Se.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(F.min()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Se.updateTime(e)}return Se.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.aa=5,this.rr=new Ro(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const t=new wa(this.datastore),e=this.ua(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.ha(t)}))}).catch(t=>{this.ha(t)})})}ua(t){try{const e=this.updateFunction(t);return!nt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ha(t){this.aa>0&&this.la(t)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(t)}la(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!ze(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=P.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{p("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=ds(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ta(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await $i(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ia(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ka(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=_(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Wo(n);n.Kr.add(3),await Bo(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await Uo(n)}(e.remoteStore,t)),t.onlineComponents=e}async function ka(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Ta(t,new da)),t.offlineComponents}async function Sa(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Ia(t,new ga)),t.onlineComponents}function Ca(t){return ka(t).then(t=>t.persistence)}function Aa(t){return ka(t).then(t=>t.localStore)}function Oa(t){return Sa(t).then(t=>t.remoteStore)}function xa(t){return Sa(t).then(t=>t.syncEngine)}async function Na(t){const e=await Sa(t),n=e.eventManager;return n.onListen=Ls.bind(null,e.syncEngine),n.onUnlisten=js.bind(null,e.syncEngine),n}function Ra(t){return t.asyncQueue.enqueue(async()=>{const e=await Ca(t),n=await Oa(t);return e.setNetworkEnabled(!0),function(t){const e=_(t);return e.Kr.delete(0),Uo(e)}(n)})}function Pa(t){return t.asyncQueue.enqueue(async()=>{const e=await Ca(t),n=await Oa(t);return e.setNetworkEnabled(!1),async function(t){const e=_(t);e.Kr.add(0),await Bo(e),e.Wr.set("Offline")}(n)})}function Da(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await function(t,e){const n=_(t);return n.persistence.runTransaction("read document","readonly",t=>n.Qn.An(t,e))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=ds(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await Aa(t),e,n)),n.promise}function La(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new va({next:o=>{e.enqueueAndForget(()=>ws(t,s));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new Is(Wt(n.path),o,{includeMetadataChanges:!0,uo:!0});return bs(t,s)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}function Ma(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await Xi(t,e,!0),i=new Ns(e,r.Gn),o=i.Io(r.documents),s=i.applyChanges(o,!1);n.resolve(s.snapshot)}catch(t){const r=ds(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await Aa(t),e,n)),n.promise}function ja(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new va({next:n=>{e.enqueueAndForget(()=>ws(t,s)),n.fromCache&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new Is(n,o,{includeMetadataChanges:!0,uo:!0});return bs(t,s)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}function Fa(t,e){const n=new va(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).Zr.add(e),e.next()}(await Na(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).Zr.delete(e)}(await Na(t),n))}}function Ua(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(t){return Sa(t).then(t=>t.datastore)}(t);new _a(t.asyncQueue,r,e,n).run()}),n.promise}function Ba(t,e,n,r){const i=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new ba(t,e)}(function(t,e){if(t instanceof Uint8Array)return ya(t,e);if(t instanceof ArrayBuffer)return ya(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,No(e));t.asyncQueue.enqueueAndForget(async()=>{fa(await xa(t),i,r)})}function Va(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=_(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Je.getNamedQuery(t,e))}(await Aa(t),e))}class qa{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class $a{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $a&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t,e,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ka(t,e,n,r){if(!0===e&&!0===r)throw new T(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wa(t){if(!ot.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ga(t){if(ot.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ya(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function Ja(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(t);throw new T(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Xa(t,e){if(e<=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ka("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qa({}),this._settingsFrozen=!1,t instanceof $a?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $a(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qa(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new S;switch(t.type){case"gapi":const e=t.client;return b(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new x(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(E.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=za.get(t);e&&(p("ComponentProvider","Removing Datastore"),za.delete(t),e.terminate())}(this),Promise.resolve()}}function tc(t,e,n,r={}){var i;const o=(t=Ja(t,Za))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(s["e"])(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(o)}t._credentials=new C(new k(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ec(this.firestore,t,this._key)}}class nc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new nc(this.firestore,t,this._query)}}class rc extends nc{constructor(t,e,n){super(t,e,Wt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ec(this.firestore,null,new ot(t))}withConverter(t){return new rc(this.firestore,t,this._path)}}function ic(t,e,...n){if(t=Object(s["i"])(t),Ha("collection","path",e),t instanceof Za){const r=$.fromString(e,...n);return Ga(r),new rc(t,null,r)}{if(!(t instanceof ec||t instanceof rc))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($.fromString(e,...n));return Ga(r),new rc(t.firestore,null,r)}}function oc(t,e){if(t=Ja(t,Za),Ha("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nc(t,null,function(t){return new Ht($.emptyPath(),t)}(e))}function sc(t,e,...n){if(t=Object(s["i"])(t),1===arguments.length&&(e=P.I()),Ha("doc","path",e),t instanceof Za){const r=$.fromString(e,...n);return Wa(r),new ec(t,null,new ot(r))}{if(!(t instanceof ec||t instanceof rc))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($.fromString(e,...n));return Wa(r),new ec(t.firestore,t instanceof rc?t.converter:null,new ot(r))}}function ac(t,e){return t=Object(s["i"])(t),e=Object(s["i"])(e),(t instanceof ec||t instanceof rc)&&(e instanceof ec||e instanceof rc)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function cc(t,e){return t=Object(s["i"])(t),e=Object(s["i"])(e),t instanceof nc&&e instanceof nc&&t.firestore===e.firestore&&ne(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uc{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Ro(this,"async_queue_retry"),this.Ta=()=>{const t=xo();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=xo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ea(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=xo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ta)}}enqueue(t){if(this.Ea(),this.wa)return new Promise(()=>{});const e=new I;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!Ar(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{this.ma=t,this.ga=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw m("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ea(),this.pa.indexOf(t)>-1&&(e=0);const r=fs.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ea(){this.ma&&v()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}function hc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class lc{constructor(){this._progressObserver={},this._taskCompletionResolver=new I,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=-1;class dc extends Za{constructor(t,e){super(t,e),this.type="firestore",this._queue=new uc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yc(this),this._firestoreClient.terminate()}}function pc(t,e){const n=Object(r["i"])(t,"firestore");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if(Object(s["g"])(r,e))return t;throw new T(E.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==e.cacheSizeBytes&&-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e})}function mc(t=Object(r["m"])()){return Object(r["i"])(t,"firestore").getImmediate()}function gc(t){return t._firestoreClient||yc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yc(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new qa(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ea(t._credentials,t._queue,r)}function vc(t,e){Ac(t=Ja(t,dc));const n=gc(t),r=t._freezeSettings(),i=new ga;return wc(n,i,new pa(i,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function bc(t){Ac(t=Ja(t,dc));const e=gc(t),n=t._freezeSettings(),r=new ga;return wc(e,r,new ma(r,n.cacheSizeBytes))}function wc(t,e,n){const r=new I;return t.asyncQueue.enqueue(async()=>{try{await Ta(t,n),await Ia(t,e),r.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}}).then(()=>r.promise)}function _c(t){if(t._initialized&&!t._terminated)throw new T(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new I;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!kr.bt())return Promise.resolve();const e=t+"main";await kr.delete(e)}(Mi(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Ec(t){return function(t){const e=new I;return t.asyncQueue.enqueueAndForget(async()=>zs(await xa(t),e)),e.promise}(gc(t=Ja(t,dc)))}function Tc(t){return Ra(gc(t=Ja(t,dc)))}function Ic(t){return Pa(gc(t=Ja(t,dc)))}function kc(t){return Object(r["k"])(t.app,"firestore"),t._delete()}function Sc(t,e){const n=gc(t=Ja(t,dc)),r=new lc;return Ba(n,t._databaseId,e,r),r}function Cc(t,e){return Va(gc(t=Ja(t,dc)),e).then(e=>e?new nc(t,null,e.query):null)}function Ac(t){if(t._initialized||t._terminated)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function xc(){return new Oc("__name__")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nc(G.fromBase64String(t))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Nc(G.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=/^__.*__$/;class Lc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Le(t,this.data,this.fieldMask,e,this.fieldTransforms):new De(t,this.data,e,this.fieldTransforms)}}class Mc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function jc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Fc{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new Fc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return iu(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(jc(this.Da)&&Dc.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Uc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||No(t)}Ba(t,e,n,r=!1){return new Fc({Da:t,methodName:e,La:n,path:H.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Bc(t){const e=t._freezeSettings(),n=No(t._databaseId);return new Uc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vc(t,e,n,r,i,o={}){const s=t.Ba(o.merge||o.mergeFields?2:0,e,n,i);tu("Data must be an object, but it was:",s,r);const a=Qc(r,s);let c,u;if(o.merge)c=new K(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=eu(e,r,n);if(!s.contains(i))throw new T(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ou(t,i)||t.push(i)}c=new K(t),u=s.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=s.fieldTransforms;return new Lc(new wt(a),c,u)}class qc extends Rc{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(this._methodName+"() can only appear at the top level of your update data"):t.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof qc}}function $c(t,e,n){return new Fc({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class zc extends Rc{_toFieldTransform(t){return new Te(t.path,new me)}isEqual(t){return t instanceof zc}}class Hc extends Rc{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=$c(this,t,!0),n=this.Ua.map(t=>Xc(t,e)),r=new ge(n);return new Te(t.path,r)}isEqual(t){return this===t}}class Kc extends Rc{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=$c(this,t,!0),n=this.Ua.map(t=>Xc(t,e)),r=new ve(n);return new Te(t.path,r)}isEqual(t){return this===t}}class Wc extends Rc{constructor(t,e){super(t),this.qa=e}_toFieldTransform(t){const e=new we(t.N,he(t.N,this.qa));return new Te(t.path,e)}isEqual(t){return this===t}}function Gc(t,e,n,r){const i=t.Ba(1,e,n);tu("Data must be an object, but it was:",i,r);const o=[],a=wt.empty();B(r,(t,r)=>{const c=ru(e,t,n);r=Object(s["i"])(r);const u=i.$a(c);if(r instanceof qc)o.push(c);else{const t=Xc(r,u);null!=t&&(o.push(c),a.set(c,t))}});const c=new K(o);return new Mc(a,c,i.fieldTransforms)}function Yc(t,e,n,r,i,o){const a=t.Ba(1,e,n),c=[eu(e,r,n)],u=[i];if(o.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<o.length;s+=2)c.push(eu(e,o[s])),u.push(o[s+1]);const h=[],l=wt.empty();for(let d=c.length-1;d>=0;--d)if(!ou(h,c[d])){const t=c[d];let e=u[d];e=Object(s["i"])(e);const n=a.$a(t);if(e instanceof qc)h.push(t);else{const r=Xc(e,n);null!=r&&(h.push(t),l.set(t,r))}}const f=new K(h);return new Mc(l,f,a.fieldTransforms)}function Jc(t,e,n,r=!1){return Xc(n,t.Ba(r?4:3,e))}function Xc(t,e){if(Zc(t=Object(s["i"])(t)))return tu("Unsupported field value:",e,t),Qc(t,e);if(t instanceof Rc)return function(t,e){if(!jc(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Xc(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(s["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return he(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=j.fromDate(t);return{timestampValue:wn(e.N,n)}}if(t instanceof j){const n=new j(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:wn(e.N,n)}}if(t instanceof Pc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Nc)return{bytesValue:_n(e.N,t._byteString)};if(t instanceof ec){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:In(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+Ya(t))}(t,e)}function Qc(t,e){const n={};return V(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):B(t,(t,r)=>{const i=Xc(r,e.Na(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Zc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof j||t instanceof Pc||t instanceof Nc||t instanceof ec||t instanceof Rc)}function tu(t,e,n){if(!Zc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ya(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function eu(t,e,n){if((e=Object(s["i"])(e))instanceof Oc)return e._internalPath;if("string"==typeof e)return ru(t,e);throw iu("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const nu=new RegExp("[~\\*/\\[\\]]");function ru(t,e,n){if(e.search(nu)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oc(...e.split("."))._internalPath}catch(r){throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new T(E.INVALID_ARGUMENT,a+t+c)}function ou(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ec(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new au(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(cu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class au extends su{data(){return super.data()}}function cu(t,e){return"string"==typeof e?ru(t,e):e instanceof Oc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hu extends su{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(cu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class lu extends hu{data(t={}){return super.data(t)}}class fu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new uu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new lu(this._firestore,this._userDataWriter,n.key,n,new uu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new lu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new uu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new lu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new uu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:du(e.type),doc:r,oldIndex:i,newIndex:o}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function du(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}function pu(t,e){return t instanceof hu&&e instanceof hu?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof fu&&e instanceof fu&&t._firestore===e._firestore&&cc(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t){if(Yt(t)&&0===t.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gu{}function yu(t,...e){for(const n of e)t=n._apply(t);return t}class vu extends gu{constructor(t,e,n){super(),this.Ka=t,this.ja=e,this.Qa=n,this.type="where"}_apply(t){const e=Bc(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on FieldPath.documentId().`);if("in"===o||"not-in"===o){Pu(s,o);const e=[];for(const n of s)e.push(Ru(r,t,n));a={arrayValue:{values:e}}}else a=Ru(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Pu(s,o),a=Jc(n,e,s,"in"===o||"not-in"===o);const c=Ot.create(i,o,a);return function(t,e){if(e.v()){const n=Xt(t);if(null!==n&&!n.isEqual(e.field))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Jt(t);null!==r&&Du(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new nc(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function bu(t,e,n){const r=e,i=cu("where",t);return new vu(i,r,n)}class wu extends gu{constructor(t,e){super(),this.Ka=t,this.Wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Vt(e,n);return function(t,e){if(null===Jt(t)){const n=Xt(t);null!==n&&Du(t,n,e.field)}}(t,r),r}(t._query,this.Ka,this.Wa);return new nc(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ht(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function _u(t,e="asc"){const n=e,r=cu("orderBy",t);return new wu(r,n)}class Eu extends gu{constructor(t,e,n){super(),this.type=t,this.Ga=e,this.za=n}_apply(t){return new nc(t.firestore,t.converter,ee(t._query,this.Ga,this.za))}}function Tu(t){return Xa("limit",t),new Eu("limit",t,"F")}function Iu(t){return Xa("limitToLast",t),new Eu("limitToLast",t,"L")}class ku extends gu{constructor(t,e,n){super(),this.type=t,this.Ha=e,this.Ja=n}_apply(t){const e=Nu(t,this.type,this.Ha,this.Ja);return new nc(t.firestore,t.converter,function(t,e){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Su(...t){return new ku("startAt",t,!0)}function Cu(...t){return new ku("startAfter",t,!1)}class Au extends gu{constructor(t,e,n){super(),this.type=t,this.Ha=e,this.Ja=n}_apply(t){const e=Nu(t,this.type,this.Ha,this.Ja);return new nc(t.firestore,t.converter,function(t,e){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Ou(...t){return new Au("endBefore",t,!0)}function xu(...t){return new Au("endAt",t,!1)}function Nu(t,e,n,r){if(n[0]=Object(s["i"])(n[0]),n[0]instanceof su)return function(t,e,n,r,i){if(!r)throw new T(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const o=[];for(const s of Zt(t))if(s.field.isKeyField())o.push(dt(e,r.key));else{const t=r.data.field(s.field);if(Z(t))throw new T(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+s.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=s.field.canonicalString();throw new T(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}o.push(t)}return new Ut(o,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Bc(t.firestore);return function(t,e,n,r,i,o){const s=t.explicitOrderBy;if(i.length>s.length)throw new T(E.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const o=i[c];if(s[c].field.isKeyField()){if("string"!=typeof o)throw new T(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof o}`);if(!Qt(t)&&-1!==o.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${o}' contains a slash.`);const n=t.path.child($.fromString(o));if(!ot.isDocumentKey(n))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ot(n);a.push(dt(e,i))}else{const t=Jc(n,r,o);a.push(t)}}return new Ut(a,o)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Ru(t,e,n){if("string"==typeof(n=Object(s["i"])(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qt(e)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($.fromString(n));if(!ot.isDocumentKey(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dt(t,new ot(r))}if(n instanceof ec)return dt(t,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ya(n)}.`)}function Pu(t,e){if(!Array.isArray(t)||0===t.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Du(t,e,n){if(!n.isEqual(e))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{convertValue(t,e="none"){switch(st(t)){case 0:return null;case 1:return t.booleanValue;case 2:return X(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Q(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return B(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Pc(X(t.latitude),X(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=tt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(et(t));default:return null}}convertTimestamp(t){const e=J(t);return new j(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=$.fromString(t);b(Zn(n));const r=new $a(n.get(1),n.get(3)),i=new ot(n.popFirst(5));return r.isEqual(e)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ju extends Lu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ec(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Bc(t)}set(t,e,n){this._verifyNotCommitted();const r=Uu(t,this._firestore),i=Mu(r.converter,e,n),o=Vc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(o.toMutation(r._key,Se.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=Uu(t,this._firestore);let o;return o="string"==typeof(e=Object(s["i"])(e))||e instanceof Oc?Yc(this._dataReader,"WriteBatch.update",i._key,e,n,r):Gc(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(o.toMutation(i._key,Se.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Uu(t,this._firestore);return this._mutations=this._mutations.concat(new Ue(e._key,Se.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Uu(t,e){if((t=Object(s["i"])(t)).firestore!==e)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){t=Ja(t,ec);const e=Ja(t.firestore,dc);return La(gc(e),t._key).then(n=>th(e,t,n))}class Vu extends Lu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ec(this.firestore,null,e)}}function qu(t){t=Ja(t,ec);const e=Ja(t.firestore,dc),n=gc(e),r=new Vu(e);return Da(n,t._key).then(n=>new hu(e,r,t._key,n,new uu(null!==n&&n.hasLocalMutations,!0),t.converter))}function $u(t){t=Ja(t,ec);const e=Ja(t.firestore,dc);return La(gc(e),t._key,{source:"server"}).then(n=>th(e,t,n))}function zu(t){t=Ja(t,nc);const e=Ja(t.firestore,dc),n=gc(e),r=new Vu(e);return mu(t._query),ja(n,t._query).then(n=>new fu(e,r,t,n))}function Hu(t){t=Ja(t,nc);const e=Ja(t.firestore,dc),n=gc(e),r=new Vu(e);return Ma(n,t._query).then(n=>new fu(e,r,t,n))}function Ku(t){t=Ja(t,nc);const e=Ja(t.firestore,dc),n=gc(e),r=new Vu(e);return ja(n,t._query,{source:"server"}).then(n=>new fu(e,r,t,n))}function Wu(t,e,n){t=Ja(t,ec);const r=Ja(t.firestore,dc),i=Mu(t.converter,e,n);return Zu(r,[Vc(Bc(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Se.none())])}function Gu(t,e,n,...r){t=Ja(t,ec);const i=Ja(t.firestore,dc),o=Bc(i);let a;return a="string"==typeof(e=Object(s["i"])(e))||e instanceof Oc?Yc(o,"updateDoc",t._key,e,n,r):Gc(o,"updateDoc",t._key,e),Zu(i,[a.toMutation(t._key,Se.exists(!0))])}function Yu(t){return Zu(Ja(t.firestore,dc),[new Ue(t._key,Se.none())])}function Ju(t,e){const n=Ja(t.firestore,dc),r=sc(t),i=Mu(t.converter,e);return Zu(n,[Vc(Bc(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Se.exists(!1))]).then(()=>r)}function Xu(t,...e){var n,r,i;t=Object(s["i"])(t);let o={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||hc(e[a])||(o=e[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges};if(hc(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,h,l;if(t instanceof ec)h=Ja(t.firestore,dc),l=Wt(t._key.path),u={next:n=>{e[a]&&e[a](th(h,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Ja(t,nc);h=Ja(n.firestore,dc),l=n._query;const r=new Vu(h);u={next:t=>{e[a]&&e[a](new fu(h,r,n,t))},error:e[a+1],complete:e[a+2]},mu(t._query)}return function(t,e,n,r){const i=new va(r),o=new Is(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>bs(await Na(t),o)),()=>{i.Xo(),t.asyncQueue.enqueueAndForget(async()=>ws(await Na(t),o))}}(gc(h),l,c,u)}function Qu(t,e){return Fa(gc(t=Ja(t,dc)),hc(e)?e:{next:e})}function Zu(t,e){return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>Fs(await xa(t),e,n)),n.promise}(gc(t),e)}function th(t,e,n){const r=n.docs.get(e._key),i=new Vu(t);return new hu(t,i,e._key,r,new uu(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Bc(t)}get(t){const e=Uu(t,this._firestore),n=new ju(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return v();const r=t[0];if(r.isFoundDocument())return new su(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new su(this._firestore,n,e._key,null,e.converter);throw v()})}set(t,e,n){const r=Uu(t,this._firestore),i=Mu(r.converter,e,n),o=Vc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,o),this}update(t,e,n,...r){const i=Uu(t,this._firestore);let o;return o="string"==typeof(e=Object(s["i"])(e))||e instanceof Oc?Yc(this._dataReader,"Transaction.update",i._key,e,n,r):Gc(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,o),this}delete(t){const e=Uu(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Uu(t,this._firestore),n=new Vu(this._firestore);return super.get(t).then(t=>new hu(this._firestore,n,e._key,t._document,new uu(!1,!1),e.converter))}}function nh(t,e){return Ua(gc(t),n=>e(new eh(t,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){return new qc("deleteField")}function ih(){return new zc("serverTimestamp")}function oh(...t){return new Hc("arrayUnion",t)}function sh(...t){return new Kc("arrayRemove",t)}function ah(t){return new Wc("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){return gc(t=Ja(t,dc)),new Fu(t,e=>Zu(t,e))}var uh;!function(t){h=t}(r["b"]),Object(r["j"])(new i["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new dc(n,new A(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r["q"])(c,"3.1.1",uh),Object(r["q"])(c,"3.1.1","esm2017")}).call(this,n("4362"))},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},cee4:function(t,e,n){"use strict";var r=n("c532"),i=n("1d2b"),o=n("0a06"),s=n("4a7b"),a=n("2444");function c(t){var e=new o(t),n=i(o.prototype.request,e);return r.extend(n,o.prototype,e),r.extend(n,e),n.create=function(e){return c(s(t,e))},n}var u=c(a);u.Axios=o,u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.VERSION=n("5cce").version,u.all=function(t){return Promise.all(t)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),t.exports=u,t.exports.default=u},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},d1b4:function(t,e){function n(t,e,n){var i=!1;return n=n||r,o.count=t,0===t?e():o;function o(t,r){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}}function r(){}t.exports=n},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d682:function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},d9b5:function(t,e,n){var r=n("1626"),i=n("d066"),o=n("fdbf");t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},db02:function(t,e,n){var r=n("b88a"),i=n("c9bb")("socket.io-client:url");function o(t,e){var n=t;e=e||"undefined"!==typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"===typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!==typeof e?e.protocol+"//"+t:"https://"+t),i("parse %s",t),n=r(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var o=-1!==n.host.indexOf(":"),s=o?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}t.exports=o},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=a.f,u=o(r),h={},l=0;while(u.length>l)n=i(r,e=u[l++]),void 0!==n&&c(h,e,n);return h}})},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},dd3f:function(t,e,n){(function(e){var r,i,o=n("bd0a"),s=n("e6f9"),a=n("6811"),c=n("2770"),u=n("5857"),h=n("6890")("engine.io-client:websocket");if("undefined"!==typeof WebSocket?r=WebSocket:"undefined"!==typeof self&&(r=self.WebSocket||self.MozWebSocket),"undefined"===typeof window)try{i=n(1)}catch(d){}var l=r||i;function f(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=r&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=i),o.call(this,t)}t.exports=f,c(f,o),f.prototype.name="websocket",f.prototype.supportsBinary=!0,f.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={};this.isReactNative||(n.agent=this.agent,n.perMessageDeflate=this.perMessageDeflate,n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized),this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},f.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},f.prototype.write=function(t){var n=this;this.writable=!1;for(var r=t.length,i=0,o=r;i<o;i++)(function(t){s.encodePacket(t,n.supportsBinary,(function(i){if(!n.usingBrowserWebSocket){var o={};if(t.options&&(o.compress=t.options.compress),n.perMessageDeflate){var s="string"===typeof i?e.byteLength(i):i.length;s<n.perMessageDeflate.threshold&&(o.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,o)}catch(d){h("websocket closed before onclose event")}--r||a()}))})(t[i]);function a(){n.emit("flush"),setTimeout((function(){n.writable=!0,n.emit("drain")}),0)}},f.prototype.onClose=function(){o.prototype.onClose.call(this)},f.prototype.doClose=function(){"undefined"!==typeof this.ws&&this.ws.close()},f.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},f.prototype.check=function(){return!!l&&!("__initialize"in l&&this.name===f.prototype.name)}}).call(this,n("b639").Buffer)},de2f:function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var i=new Uint8Array(t),o=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)o[a]=i[s];return o.buffer}},de4c:function(t,e){var n="undefined"!==typeof n?n:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!==typeof MSBlobBuilder?MSBlobBuilder:"undefined"!==typeof MozBlobBuilder&&MozBlobBuilder,r=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),i=r&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),o=n&&n.prototype.append&&n.prototype.getBlob;function s(t){return t.map((function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t}))}function a(t,e){e=e||{};var r=new n;return s(t).forEach((function(t){r.append(t)})),e.type?r.getBlob(e.type):r.getBlob()}function c(t,e){return new Blob(s(t),e||{})}"undefined"!==typeof Blob&&(a.prototype=Blob.prototype,c.prototype=Blob.prototype),t.exports=function(){return r?i?Blob:c:o?a:void 0}()},de6f:function(t,e,n){"use strict";n.d(e,"b",(function(){return Y})),n.d(e,"c",(function(){return M})),n.d(e,"d",(function(){return B})),n.d(e,"e",(function(){return V})),n.d(e,"f",(function(){return F})),n.d(e,"g",(function(){return H})),n.d(e,"h",(function(){return U})),n.d(e,"i",(function(){return $})),n.d(e,"j",(function(){return q})),n.d(e,"k",(function(){return z})),n.d(e,"l",(function(){return Z})),n.d(e,"m",(function(){return X})),n.d(e,"n",(function(){return Q})),n.d(e,"o",(function(){return J})),n.d(e,"p",(function(){return et})),n.d(e,"q",(function(){return tt})),n.d(e,"r",(function(){return nt}));var r=n("dec5"),i=n("bcea"),o=n("f075");n.d(e,"a",(function(){return o["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.4",h=new i["b"]("@firebase/app"),l="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",I="@firebase/messaging",k="@firebase/messaging-compat",S="@firebase/performance",C="@firebase/performance-compat",A="@firebase/remote-config",O="@firebase/remote-config-compat",x="@firebase/storage",N="@firebase/storage-compat",R="@firebase/firestore",P="@firebase/firestore-compat",D="firebase",L="9.1.3",M="[DEFAULT]",j={[c]:"fire-core",[l]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[I]:"fire-fcm",[k]:"fire-fcm-compat",[S]:"fire-perf",[C]:"fire-perf-compat",[A]:"fire-rc",[O]:"fire-rc-compat",[x]:"fire-gcs",[N]:"fire-gcs-compat",[R]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,U=new Map;function B(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function V(t,e){t.container.addOrOverwriteComponent(e)}function q(t){const e=t.name;if(U.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())B(n,t);return!0}function $(t,e){return t.container.getProvider(e)}function z(t,e,n=M){$(t,e).clearInstance(n)}function H(){U.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},W=new o["b"]("app","Firebase",K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=L;function J(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw W.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["g"])(t,s.options)&&Object(o["g"])(n,s.config))return s;throw W.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new G(t,n,a);return F.set(i,c),c}function X(t=M){const e=F.get(t);if(!e)throw W.create("no-app",{appName:t});return e}function Q(){return Array.from(F.values())}async function Z(t){const e=t.name;F.has(e)&&(F.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function tt(t,e,n){var i;let o=null!==(i=j[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}q(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw W.create("invalid-log-argument");Object(i["d"])(t,e)}function nt(t){Object(i["c"])(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){q(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),tt(c,u,t),tt(c,u,"esm2017"),tt("fire-js","")}rt("")},dec5:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return h}));var r=n("6dbe"),i=n("f075"),o=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),s="[DEFAULT]",a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(d){}try{for(var i=Object(r["f"])(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r["c"])(o.value,2),c=a[0],h=a[1],l=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:l});h.resolve(f)}catch(d){}}}catch(p){e={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=s),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t;return Object(r["b"])(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r["e"])(Object(r["e"])([],Object(r["c"])(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Object(r["c"])(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=s),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=s),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var c=Object(r["f"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var h=Object(r["c"])(u.value,2),l=h[0],f=h[1],d=this.normalizeInstanceIdentifier(l);s===d&&f.resolve(a)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,o=this.onInitCallbacks.get(e);if(o)try{for(var s=Object(r["f"])(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=s),this.component?this.component.multipleInstances?t:s:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function c(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("1a2d"),i=n("1626"),o=n("7b0b"),s=n("f772"),a=n("e177"),c=s("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof Object?u:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,h=s.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=h(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e3db:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),h=n("d066"),l=n("fea9"),f=n("6eeb"),d=n("e2cc"),p=n("d2bb"),m=n("d44e"),g=n("2626"),y=n("59ed"),v=n("1626"),b=n("861d"),w=n("19aa"),_=n("8925"),E=n("2266"),T=n("1c7e"),I=n("4840"),k=n("2cf4").set,S=n("b575"),C=n("cdf9"),A=n("44de"),O=n("f069"),x=n("e667"),N=n("69f3"),R=n("94ca"),P=n("b622"),D=n("6069"),L=n("605d"),M=n("2d00"),j=P("species"),F="Promise",U=N.get,B=N.set,V=N.getterFor(F),q=l&&l.prototype,$=l,z=q,H=u.TypeError,K=u.document,W=u.process,G=O.f,Y=G,J=!!(K&&K.createEvent&&u.dispatchEvent),X=v(u.PromiseRejectionEvent),Q="unhandledrejection",Z="rejectionhandled",tt=0,et=1,nt=2,rt=1,it=2,ot=!1,st=R(F,(function(){var t=_($),e=t!==String($);if(!e&&66===M)return!0;if(c&&!z["finally"])return!0;if(M>=51&&/native code/.test(t))return!1;var n=new $((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[j]=r,ot=n.then((function(){}))instanceof r,!ot||!e&&D&&!X})),at=st||!T((function(t){$.all(t)["catch"]((function(){}))})),ct=function(t){var e;return!(!b(t)||!v(e=t.then))&&e},ut=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;S((function(){var r=t.value,i=t.state==et,o=0;while(n.length>o){var s,a,c,u=n[o++],h=i?u.ok:u.fail,l=u.resolve,f=u.reject,d=u.domain;try{h?(i||(t.rejection===it&&dt(t),t.rejection=rt),!0===h?s=r:(d&&d.enter(),s=h(r),d&&(d.exit(),c=!0)),s===u.promise?f(H("Promise-chain cycle")):(a=ct(s))?a.call(s,l,f):l(s)):f(r)}catch(p){d&&!c&&d.exit(),f(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&lt(t)}))}},ht=function(t,e,n){var r,i;J?(r=K.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!X&&(i=u["on"+t])?i(r):t===Q&&A("Unhandled promise rejection",n)},lt=function(t){k.call(u,(function(){var e,n=t.facade,r=t.value,i=ft(t);if(i&&(e=x((function(){L?W.emit("unhandledRejection",r,n):ht(Q,n,r)})),t.rejection=L||ft(t)?it:rt,e.error))throw e.value}))},ft=function(t){return t.rejection!==rt&&!t.parent},dt=function(t){k.call(u,(function(){var e=t.facade;L?W.emit("rejectionHandled",e):ht(Z,e,t.value)}))},pt=function(t,e,n){return function(r){t(e,r,n)}},mt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=nt,ut(t,!0))},gt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw H("Promise can't be resolved itself");var r=ct(e);r?S((function(){var n={done:!1};try{r.call(e,pt(gt,n,t),pt(mt,n,t))}catch(i){mt(n,i,t)}})):(t.value=e,t.state=et,ut(t,!1))}catch(i){mt({done:!1},i,t)}}};if(st&&($=function(t){w(this,$,F),y(t),r.call(this);var e=U(this);try{t(pt(gt,e),pt(mt,e))}catch(n){mt(e,n)}},z=$.prototype,r=function(t){B(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:tt,value:void 0})},r.prototype=d(z,{then:function(t,e){var n=V(this),r=G(I(this,$));return r.ok=!v(t)||t,r.fail=v(e)&&e,r.domain=L?W.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=tt&&ut(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=U(t);this.promise=t,this.resolve=pt(gt,e),this.reject=pt(mt,e)},O.f=G=function(t){return t===$||t===o?new i(t):Y(t)},!c&&v(l)&&q!==Object.prototype)){s=q.then,ot||(f(q,"then",(function(t,e){var n=this;return new $((function(t,e){s.call(n,t,e)})).then(t,e)}),{unsafe:!0}),f(q,"catch",z["catch"],{unsafe:!0}));try{delete q.constructor}catch(yt){}p&&p(q,z)}a({global:!0,wrap:!0,forced:st},{Promise:$}),m($,F,!1,!0),g(F),o=h(F),a({target:F,stat:!0,forced:st},{reject:function(t){var e=G(this);return e.reject.call(void 0,t),e.promise}}),a({target:F,stat:!0,forced:c||st},{resolve:function(t){return C(c&&this===o?$:this,t)}}),a({target:F,stat:!0,forced:at},{all:function(t){var e=this,n=G(e),r=n.resolve,i=n.reject,o=x((function(){var n=y(e.resolve),o=[],s=0,a=1;E(t,(function(t){var c=s++,u=!1;o.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=G(e),r=n.reject,i=x((function(){var i=y(e.resolve);E(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e6f9:function(t,e,n){var r,i=n("d682"),o=n("65ab"),s=n("de2f"),a=n("d1b4"),c=n("6e7f");"undefined"!==typeof ArrayBuffer&&(r=n("a31f"));var u="undefined"!==typeof navigator&&/Android/i.test(navigator.userAgent),h="undefined"!==typeof navigator&&/PhantomJS/i.test(navigator.userAgent),l=u||h;e.protocol=3;var f=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},d=i(f),p={type:"error",data:"parser error"},m=n("de4c");function g(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function y(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var i=t.data,o=new Uint8Array(i),s=new Uint8Array(1+i.byteLength);s[0]=f[t.type];for(var a=0;a<o.length;a++)s[a+1]=o[a];return r(s.buffer)}function v(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var i=new FileReader;return i.onload=function(){e.encodePacket({type:t.type,data:i.result},n,!0,r)},i.readAsArrayBuffer(t.data)}function b(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(l)return v(t,n,r);var i=new Uint8Array(1);i[0]=f[t.type];var o=new m([i.buffer,t.data]);return r(o)}function w(t){try{t=c.decode(t,{strict:!1})}catch(e){return!1}return t}function _(t,e,n){for(var r=new Array(t.length),i=a(t.length,n),o=function(t,n,i){e(n,(function(e,n){r[t]=n,i(e,r)}))},s=0;s<t.length;s++)o(s,t[s],i)}e.encodePacket=function(t,e,n,r){"function"===typeof e&&(r=e,e=!1),"function"===typeof n&&(r=n,n=null);var i=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!==typeof ArrayBuffer&&i instanceof ArrayBuffer)return y(t,e,r);if("undefined"!==typeof m&&i instanceof m)return b(t,e,r);if(i&&i.base64)return g(t,r);var o=f[t.type];return void 0!==t.data&&(o+=n?c.encode(String(t.data),{strict:!1}):String(t.data)),r(""+o)},e.encodeBase64Packet=function(t,n){var r,i="b"+e.packets[t.type];if("undefined"!==typeof m&&t.data instanceof m){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];n(i+t)},o.readAsDataURL(t.data)}try{r=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(u){for(var s=new Uint8Array(t.data),a=new Array(s.length),c=0;c<s.length;c++)a[c]=s[c];r=String.fromCharCode.apply(null,a)}return i+=btoa(r),n(i)},e.decodePacket=function(t,n,r){if(void 0===t)return p;if("string"===typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=w(t),!1===t))return p;var i=t.charAt(0);return Number(i)==i&&d[i]?t.length>1?{type:d[i],data:t.substring(1)}:{type:d[i]}:p}var o=new Uint8Array(t),a=(i=o[0],s(t,1));return m&&"blob"===n&&(a=new m([a])),{type:d[i],data:a}},e.decodeBase64Packet=function(t,e){var n=d[t.charAt(0)];if(!r)return{type:n,data:{base64:!0,data:t.substr(1)}};var i=r.decode(t.substr(1));return"blob"===e&&m&&(i=new m([i])),{type:n,data:i}},e.encodePayload=function(t,n,r){"function"===typeof n&&(r=n,n=null);var i=o(t);if(n&&i)return m&&!l?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r);if(!t.length)return r("0:");function s(t){return t.length+":"+t}function a(t,r){e.encodePacket(t,!!i&&n,!1,(function(t){r(null,s(t))}))}_(t,a,(function(t,e){return r(e.join(""))}))},e.decodePayload=function(t,n,r){if("string"!==typeof t)return e.decodePayloadAsBinary(t,n,r);var i;if("function"===typeof n&&(r=n,n=null),""===t)return r(p,0,1);for(var o,s,a="",c=0,u=t.length;c<u;c++){var h=t.charAt(c);if(":"===h){if(""===a||a!=(o=Number(a)))return r(p,0,1);if(s=t.substr(c+1,o),a!=s.length)return r(p,0,1);if(s.length){if(i=e.decodePacket(s,n,!1),p.type===i.type&&p.data===i.data)return r(p,0,1);var l=r(i,c+o,u);if(!1===l)return}c+=o,a=""}else a+=h}return""!==a?r(p,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){if(!t.length)return n(new ArrayBuffer(0));function r(t,n){e.encodePacket(t,!0,!0,(function(t){return n(null,t)}))}_(t,r,(function(t,e){var r=e.reduce((function(t,e){var n;return n="string"===typeof e?e.length:e.byteLength,t+n.toString().length+n+2}),0),i=new Uint8Array(r),o=0;return e.forEach((function(t){var e="string"===typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}i[o++]=e?0:1;var a=n.byteLength.toString();for(s=0;s<a.length;s++)i[o++]=parseInt(a[s]);i[o++]=255;for(r=new Uint8Array(n),s=0;s<r.length;s++)i[o++]=r[s]})),n(i.buffer)}))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,(function(t){var e=new Uint8Array(1);if(e[0]=1,"string"===typeof t){for(var r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);t=r.buffer,e[0]=0}var o=t instanceof ArrayBuffer?t.byteLength:t.size,s=o.toString(),a=new Uint8Array(s.length+1);for(i=0;i<s.length;i++)a[i]=parseInt(s[i]);if(a[s.length]=255,m){var c=new m([e.buffer,a.buffer,t]);n(null,c)}}))}_(t,r,(function(t,e){return n(new m(e))}))},e.decodePayloadAsBinary=function(t,n,r){"function"===typeof n&&(r=n,n=null);var i=t,o=[];while(i.byteLength>0){for(var a=new Uint8Array(i),c=0===a[0],u="",h=1;;h++){if(255===a[h])break;if(u.length>310)return r(p,0,1);u+=a[h]}i=s(i,2+u.length),u=parseInt(u);var l=s(i,0,u);if(c)try{l=String.fromCharCode.apply(null,new Uint8Array(l))}catch(m){var f=new Uint8Array(l);l="";for(h=0;h<f.length;h++)l+=String.fromCharCode(f[h])}o.push(l),i=s(i,u)}var d=o.length;o.forEach((function(t,i){r(e.decodePacket(t,n,!0),i,d)}))}},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,u=0;u<n.length;u++){var h=n[u];r(t,h)||a(t,h,c(e,h))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return ci})),n.d(e,"b",(function(){return ln})),n.d(e,"c",(function(){return on}));var r=n("1fd5");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function i(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function o(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function s(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function c(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create;var u=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),h="[DEFAULT]",l=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new r["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch(o){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(d(t))try{this.getOrInitializeService({instanceIdentifier:h})}catch(p){}try{for(var r=s(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=a(i.value,2),c=o[0],u=o[1],l=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:l});u.resolve(f)}catch(p){}}}catch(m){e={error:m}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=h),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return i(this,void 0,void 0,(function(){var t;return o(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(c(c([],a(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),a(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=h),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=h),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var u=s(this.instancesDeferred.entries()),h=u.next();!h.done;h=u.next()){var l=a(h.value,2),f=l[0],d=l[1],p=this.normalizeInstanceIdentifier(f);o===p&&d.resolve(c)}}catch(m){e={error:m}}finally{try{h&&!h.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}return c},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var o=s(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(h){n={error:h}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:f(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=h),this.component?this.component.multipleInstances?t:h:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t){return t===h?void 0:t}function d(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){function t(t){this.name=t,this.providers=new Map}t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new l(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())}})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=[];var m;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(m||(m={}));const g={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},y=m.INFO,v={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},b=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=v[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class w{constructor(t){this.name=t,this._logLevel=y,this._logHandler=b,this._userLogHandler=null,p.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in m))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?g[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...t),this._logHandler(this,m.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...t),this._logHandler(this,m.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,m.INFO,...t),this._logHandler(this,m.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,m.WARN,...t),this._logHandler(this,m.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...t),this._logHandler(this,m.ERROR,...t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(E(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function E(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const T="@firebase/app",I="0.7.4",k=new w("@firebase/app"),S="@firebase/app-compat",C="@firebase/analytics-compat",A="@firebase/analytics",O="@firebase/app-check-compat",x="@firebase/app-check",N="@firebase/auth",R="@firebase/auth-compat",P="@firebase/database",D="@firebase/database-compat",L="@firebase/functions",M="@firebase/functions-compat",j="@firebase/installations",F="@firebase/installations-compat",U="@firebase/messaging",B="@firebase/messaging-compat",V="@firebase/performance",q="@firebase/performance-compat",$="@firebase/remote-config",z="@firebase/remote-config-compat",H="@firebase/storage",K="@firebase/storage-compat",W="@firebase/firestore",G="@firebase/firestore-compat",Y="firebase",J="9.1.3",X="[DEFAULT]",Q={[T]:"fire-core",[S]:"fire-core-compat",[A]:"fire-analytics",[C]:"fire-analytics-compat",[x]:"fire-app-check",[O]:"fire-app-check-compat",[N]:"fire-auth",[R]:"fire-auth-compat",[P]:"fire-rtdb",[D]:"fire-rtdb-compat",[L]:"fire-fn",[M]:"fire-fn-compat",[j]:"fire-iid",[F]:"fire-iid-compat",[U]:"fire-fcm",[B]:"fire-fcm-compat",[V]:"fire-perf",[q]:"fire-perf-compat",[$]:"fire-rc",[z]:"fire-rc-compat",[H]:"fire-gcs",[K]:"fire-gcs-compat",[W]:"fire-fst",[G]:"fire-fst-compat","fire-js":"fire-js",[Y]:"fire-js-all"},Z=new Map,tt=new Map;function et(t,e){try{t.container.addComponent(e)}catch(n){k.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nt(t){const e=t.name;if(tt.has(e))return k.debug(`There were multiple attempts to register component ${e}.`),!1;tt.set(e,t);for(const n of Z.values())et(n,t);return!0}function rt(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const it={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ot=new r["b"]("app","Firebase",it);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const st=J;function at(t=X){const e=Z.get(t);if(!e)throw ot.create("no-app",{appName:t});return e}function ct(t,e,n){var r;let i=null!==(r=Q[t])&&void 0!==r?r:t;n&&(i+="-"+n);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void k.warn(t.join(" "))}nt(new u(i+"-version",()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ut(t){nt(new u("platform-logger",t=>new _(t),"PRIVATE")),ct(T,I,t),ct(T,I,"esm2017"),ct("fire-js","")}ut("");function ht(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;function lt(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ft=lt,dt=new r["b"]("auth","Firebase",lt()),pt=new w("@firebase/auth");function mt(t,...e){pt.logLevel<=m.ERROR&&pt.error(`Auth (${st}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,...e){throw bt(t,...e)}function yt(t,...e){return bt(t,...e)}function vt(t,e,n){const i=Object.assign(Object.assign({},ft()),{[e]:n}),o=new r["b"]("auth","Firebase",i);return o.create(e,{appName:t.name})}function bt(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dt.create(t,...e)}function wt(t,e,...n){if(!t)throw bt(e,...n)}function _t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mt(e),new Error(e)}function Et(t,e){t||_t(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Map;function It(t){Et(t instanceof Function,"Expected a class definition");let e=Tt.get(t);return e?(Et(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tt.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e){const n=rt(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["f"])(i,null!==e&&void 0!==e?e:{}))return t;gt(t,"already-initialized")}const i=n.initialize({options:e});return i}function St(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(It);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function At(){return"http:"===Ot()||"https:"===Ot()}function Ot(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(At()||Object(r["j"])()||"connection"in navigator))||navigator.onLine}function Nt(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e){this.shortDelay=t,this.longDelay=e,Et(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["m"])()||Object(r["n"])()}get(){return xt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e){Et(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},Mt=new Rt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ft(t,e,n,i,o={}){return Ut(t,o,()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=Object(r["o"])(Object.assign({key:t.config.apiKey},s)).slice(1),c=new(Dt.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),Dt.fetch()(Vt(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function Ut(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Lt),e);try{const e=new qt(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $t(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $t(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw $t(t,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw vt(t,a,s);gt(t,a)}}catch(o){if(o instanceof r["c"])throw o;gt(t,"network-request-failed")}}async function Bt(t,e,n,r,i={}){const o=await Ft(t,e,n,r,i);return"mfaPendingCredential"in o&&gt(t,"multi-factor-auth-required",{serverResponse:o}),o}function Vt(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pt(t.config,i):`${t.config.apiScheme}://${i}`}class qt{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(yt(this.auth,"timeout")),Mt.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $t(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(t,e){return Ft(t,"POST","/v1/accounts:delete",e)}async function Ht(t,e){return Ft(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e=!1){const n=Object(r["h"])(t),i=await n.getIdToken(e),o=Yt(i);wt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:Kt(Gt(o.auth_time)),issuedAtTime:Kt(Gt(o.iat)),expirationTime:Kt(Gt(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Gt(t){return 1e3*Number(t)}function Yt(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return mt("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(mt("Failed to decode base64 JWT payload"),null)}catch(o){return mt("Caught error parsing JWT payload as JSON",o),null}}function Jt(t){const e=Yt(t);return wt(e,"internal-error"),wt("undefined"!==typeof e.exp,"internal-error"),wt("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&Qt(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Qt({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kt(this.lastLoginAt),this.creationTime=Kt(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xt(t,Ht(n,{idToken:r}));wt(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?ie(o.providerUserInfo):[],a=re(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),h=!!c&&u,l={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new te(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,l)}async function ne(t){const e=Object(r["h"])(t);await ee(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function re(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function ie(t){return t.map(t=>{var{providerId:e}=t,n=ht(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e){const n=await Ut(t,{},()=>{const n=Object(r["o"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Vt(t,i,"/v1/token","key="+o);return Dt.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){wt(t.idToken,"internal-error"),wt("undefined"!==typeof t.idToken,"internal-error"),wt("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Jt(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return wt(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await oe(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new se;return n&&(wt("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(wt("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(wt("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return _t("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e){wt("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ce{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=ht(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Zt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new te(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Xt(this,this.stsTokenManager.getToken(this.auth,t));return wt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Wt(this,t)}reload(){return ne(this)}_assign(t){this!==t&&(wt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ce(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){wt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Xt(this,zt(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:E}=e;wt(v&&E,t,"internal-error");const T=se.fromJSON(this.name,E);wt("string"===typeof v,t,"internal-error"),ae(h,t.name),ae(l,t.name),wt("boolean"===typeof b,t,"internal-error"),wt("boolean"===typeof w,t,"internal-error"),ae(f,t.name),ae(d,t.name),ae(p,t.name),ae(m,t.name),ae(g,t.name),ae(y,t.name);const I=new ce({uid:v,auth:t,email:l,emailVerified:b,displayName:h,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(I.providerData=_.map(t=>Object.assign({},t))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new se;r.updateFromServerResponse(e);const i=new ce({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await ee(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ue.type="NONE";const he=ue;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){return`firebase:${t}:${e}:${n}`}class fe{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,i),this.fullPersistenceKey=le("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ce._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new fe(It(he),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||It(he);const o=le(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=ce._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(c){}})),new fe(i,t,n)):new fe(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ye(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pe(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(be(e))return"Blackberry";if(we(e))return"Webos";if(me(e))return"Safari";if((e.includes("chrome/")||ge(e))&&!e.includes("edge/"))return"Chrome";if(ve(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function pe(t=Object(r["i"])()){return/firefox\//i.test(t)}function me(t=Object(r["i"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ge(t=Object(r["i"])()){return/crios\//i.test(t)}function ye(t=Object(r["i"])()){return/iemobile/i.test(t)}function ve(t=Object(r["i"])()){return/android/i.test(t)}function be(t=Object(r["i"])()){return/blackberry/i.test(t)}function we(t=Object(r["i"])()){return/webos/i.test(t)}function _e(t=Object(r["i"])()){return/iphone|ipad|ipod/i.test(t)}function Ee(t=Object(r["i"])()){var e;return _e(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Te(){return Object(r["l"])()&&10===document.documentMode}function Ie(t=Object(r["i"])()){return _e(t)||ve(t)||we(t)||be(t)||/windows phone/i.test(t)||ye(t)}function ke(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t,e=[]){let n;switch(t){case"Browser":n=de(Object(r["i"])());break;case"Worker":n=`${de(Object(r["i"])())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${st}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oe(this),this.idTokenSubscription=new Oe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=It(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await fe.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(wt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ee(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Nt()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["h"])(t):null;return e&&wt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&wt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&It(t)||this._popupRedirectResolver;wt(e,this,"argument-error"),this.redirectPersistenceManager=await fe.create(this,[It(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return wt(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return wt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ae(t){return Object(r["h"])(t)}class Oe{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["e"])(t=>this.observer=t)}get next(){return wt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return _t("not implemented")}_getIdTokenResponse(t){return _t("not implemented")}_linkToIdToken(t,e){return _t("not implemented")}_getReauthenticationResolver(t){return _t("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(t,e){return Ft(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(t,e){return Bt(t,"POST","/v1/accounts:signInWithPassword",jt(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(t,e){return Bt(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}async function De(t,e){return Bt(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends xe{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Le(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Le(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Re(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(t,{email:this._email,oobCode:this._password});default:gt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ne(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return De(t,{idToken:e,email:this._email,oobCode:this._password});default:gt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(t,e){return Bt(t,"POST","/v1/accounts:signInWithIdp",jt(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="http://localhost";class Fe extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Fe(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):gt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=ht(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Fe(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Me(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Me(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Me(t,e)}buildRequest(){const t={requestUri:je,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["o"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(t,e){return Ft(t,"POST","/v1/accounts:sendVerificationCode",jt(t,e))}async function Be(t,e){return Bt(t,"POST","/v1/accounts:signInWithPhoneNumber",jt(t,e))}async function Ve(t,e){const n=await Bt(t,"POST","/v1/accounts:signInWithPhoneNumber",jt(t,e));if(n.temporaryProof)throw $t(t,"account-exists-with-different-credential",n);return n}const qe={["USER_NOT_FOUND"]:"user-not-found"};async function $e(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Bt(t,"POST","/v1/accounts:signInWithPhoneNumber",jt(t,n),qe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends xe{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ze({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ze({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Be(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ve(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return $e(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ze({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ke(t){const e=Object(r["p"])(Object(r["g"])(t))["link"],n=e?Object(r["p"])(Object(r["g"])(e))["deep_link_id"]:null,i=Object(r["p"])(Object(r["g"])(t))["deep_link_id"],o=i?Object(r["p"])(Object(r["g"])(i))["link"]:null;return o||i||n||e||t}class We{constructor(t){var e,n,i,o,s,a;const c=Object(r["p"])(Object(r["g"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,h=null!==(n=c["oobCode"])&&void 0!==n?n:null,l=He(null!==(i=c["mode"])&&void 0!==i?i:null);wt(u&&h&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=h,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Ke(t);try{return new We(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(t,e){return Le._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=We.parseLink(e);return wt(n,"argument-error"),Le._fromEmailAndCode(t,n.code,n.tenantId)}}Ge.PROVIDER_ID="password",Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Je{constructor(){super("facebook.com")}static credential(t){return Fe._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xe.credentialFromTaggedObject(t)}static credentialFromError(t){return Xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xe.credential(t.oauthAccessToken)}catch(e){return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Xe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Je{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Fe._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Qe.credentialFromTaggedObject(t)}static credentialFromError(t){return Qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Qe.credential(e,n)}catch(r){return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com",Qe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends Je{constructor(){super("github.com")}static credential(t){return Fe._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ze.credentialFromTaggedObject(t)}static credentialFromError(t){return Ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ze.credential(t.oauthAccessToken)}catch(e){return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com",Ze.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn extends Je{constructor(){super("twitter.com")}static credential(t,e){return Fe._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return tn.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function en(t,e){return Bt(t,"POST","/v1/accounts:signUp",jt(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.TWITTER_SIGN_IN_METHOD="twitter.com",tn.PROVIDER_ID="twitter.com";class nn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ce._fromIdTokenResponse(t,n,r),o=rn(n),s=new nn({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=rn(n);return new nn({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function rn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(t){var e;const n=Ae(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new nn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await en(n,{returnSecureToken:!0}),i=await nn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,sn.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new sn(t,e,n,r)}}function an(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw sn._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e,n=!1){const r=await Xt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function un(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Xt(t,an(r,i,e,t),n);wt(o.idToken,r,"internal-error");const s=Yt(o.idToken);wt(s,r,"internal-error");const{sub:a}=s;return wt(t.uid===a,r,"user-mismatch"),nn._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&gt(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(t,e,n=!1){const r="signIn",i=await an(t,r,e),o=await nn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function ln(t,e,n,i){return Object(r["h"])(t).onAuthStateChanged(e,n,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(t,e){return Ft(t,"POST","/v2/accounts/mfaEnrollment:start",jt(t,e))}function dn(t,e){return Ft(t,"POST","/v2/accounts/mfaEnrollment:finalize",jt(t,e))}new WeakMap;const pn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(pn,"1"),this.storage.removeItem(pn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){const t=Object(r["i"])();return me(t)||_e(t)}const yn=1e3,vn=10;class bn extends mn{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gn()&&ke(),this.fallbackToPolling=Ie(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Te()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,vn):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},yn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}bn.type="LOCAL";const wn=bn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends mn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}_n.type="SESSION";const En=_n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new In(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await Tn(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.receivers=[];class Sn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=kn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function An(t){Cn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return"undefined"!==typeof Cn()["WorkerGlobalScope"]&&"function"===typeof Cn()["importScripts"]}async function xn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Nn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Rn(){return On()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="firebaseLocalStorageDb",Dn=1,Ln="firebaseLocalStorage",Mn="fbase_key";class jn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Fn(t,e){return t.transaction([Ln],e?"readwrite":"readonly").objectStore(Ln)}function Un(){const t=indexedDB.deleteDatabase(Pn);return new jn(t).toPromise()}function Bn(){const t=indexedDB.open(Pn,Dn);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Ln,{keyPath:Mn})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Ln)?e(n):(n.close(),await Un(),e(await Bn()))})})}async function Vn(t,e,n){const r=Fn(t,!0).put({[Mn]:e,value:n});return new jn(r).toPromise()}async function qn(t,e){const n=Fn(t,!1).get(e),r=await new jn(n).toPromise();return void 0===r?null:r.value}function $n(t,e){const n=Fn(t,!0).delete(e);return new jn(n).toPromise()}const zn=800,Hn=3;class Kn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Bn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Hn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return On()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=In._getInstance(Rn()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await xn(),!this.activeServiceWorker)return;this.sender=new Sn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Nn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Bn();return await Vn(t,pn,"1"),await $n(t,pn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vn(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>qn(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>$n(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Fn(t,!1).getAll();return new jn(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Kn.type="LOCAL";const Wn=Kn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){return Ft(t,"POST","/v2/accounts/mfaSignIn:start",jt(t,e))}function Yn(t,e){return Ft(t,"POST","/v2/accounts/mfaSignIn:finalize",jt(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Xn(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=yt("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Jn().appendChild(r)})}function Qn(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qn("rcb"),new Rt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zn="recaptcha";async function tr(t,e,n){var r;const i=await n.verify();try{let o;if(wt("string"===typeof i,t,"argument-error"),wt(n.type===Zn,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){wt("enroll"===e.type,t,"internal-error");const n=await fn(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{wt("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;wt(n,t,"missing-multi-factor-info");const s=await Gn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Ue(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(t){this.providerId=er.PROVIDER_ID,this.auth=Ae(t)}verifyPhoneNumber(t,e){return tr(this.auth,t,Object(r["h"])(e))}static credential(t,e){return ze._fromVerification(t,e)}static credentialFromResult(t){const e=t;return er.credentialFromTaggedObject(e)}static credentialFromError(t){return er.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ze._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nr(t,e){return e?It(e):(wt(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er.PROVIDER_ID="phone",er.PHONE_SIGN_IN_METHOD="phone";class rr extends xe{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Me(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Me(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Me(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function ir(t){return hn(t.auth,new rr(t),t.bypassAuthState)}function or(t){const{auth:e,user:n}=t;return wt(n,e,"internal-error"),un(n,new rr(t),t.bypassAuthState)}async function sr(t){const{auth:e,user:n}=t;return wt(n,e,"internal-error"),cn(n,new rr(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ir;case"linkViaPopup":case"linkViaRedirect":return sr;case"reauthViaPopup":case"reauthViaRedirect":return or;default:gt(this.auth,"internal-error")}}resolve(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Rt(2e3,1e4);class ur extends ar{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return wt(t,this.auth,"internal-error"),t}async onExecution(){Et(1===this.filter.length,"Popup operations only handle one event");const t=kn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,cr.get())};t()}}ur.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hr="pendingRedirect",lr=new Map;class fr extends ar{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=lr.get(this.auth._key());if(!t){try{const e=await dr(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}lr.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function dr(t,e){const n=mr(e),r="true"===await pr(t)._get(n);return await pr(t)._remove(n),r}function pr(t){return It(t._redirectPersistence)}function mr(t){return le(hr,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t,e,n=!1){const r=Ae(t),i=nr(r,e),o=new fr(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yr=6e5;class vr{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_r(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!wr(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(yt(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yr&&this.cachedEventUids.clear(),this.cachedEventUids.has(br(t))}saveEventToCache(t){this.cachedEventUids.add(br(t)),this.lastProcessedEventTime=Date.now()}}function br(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function wr({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function _r(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wr(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(t,e={}){return Ft(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ir=/^https?/;async function kr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Er(t);for(const r of e)try{if(Sr(r))return}catch(n){}gt(t,"unauthorized-domain")}function Sr(t){const e=Ct(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ir.test(n))return!1;if(Tr.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Rt(3e4,6e4);function Ar(){const t=Cn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Or(t){return new Promise((e,n)=>{var r,i,o;function s(){Ar(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ar(),n(yt(t,"network-request-failed"))},timeout:Cr.get()})}if(null===(i=null===(r=Cn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Cn().gapi)||void 0===o?void 0:o.load)){const e=Qn("iframefcb");return Cn()[e]=()=>{gapi.load?s():n(yt(t,"network-request-failed"))},Xn("https://apis.google.com/js/api.js?onload="+e)}s()}}).catch(t=>{throw xr=null,t})}let xr=null;function Nr(t){return xr=xr||Or(t),xr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Rt(5e3,15e3),Pr="__/auth/iframe",Dr="emulator/auth/iframe",Lr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Mr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jr(t){const e=t.config;wt(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pt(e,Dr):`https://${t.config.authDomain}/${Pr}`,i={apiKey:e.apiKey,appName:t.name,v:st},o=Mr.get(t.config.apiHost);o&&(i.eid=o);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Object(r["o"])(i).slice(1)}`}async function Fr(t){const e=await Nr(t),n=Cn().gapi;return wt(n,t,"internal-error"),e.open({where:document.body,url:jr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lr,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=yt(t,"network-request-failed"),o=Cn().setTimeout(()=>{r(i)},Rr.get());function s(){Cn().clearTimeout(o),n(e)}e.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Br=500,Vr=600,qr="_blank",$r="http://localhost";class zr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Hr(t,e,n,i=Br,o=Vr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ur),{width:i.toString(),height:o.toString(),top:s,left:a}),h=Object(r["i"])().toLowerCase();n&&(c=ge(h)?qr:n),pe(h)&&(e=e||$r,u.scrollbars="yes");const l=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(Ee(h)&&"_self"!==c)return Kr(e||"",c),new zr(null);const f=window.open(e||"",c,l);wt(f,t,"popup-blocked");try{f.focus()}catch(d){}return new zr(f)}function Kr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="__/auth/handler",Gr="emulator/auth/handler";function Yr(t,e,n,i,o,s){wt(t.config.authDomain,t,"auth-domain-config-required"),wt(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:st,eventId:o};if(e instanceof Ye){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Object(r["k"])(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))a[t]=e}if(e instanceof Je){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(a.scopes=t.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];return`${Jr(t)}?${Object(r["o"])(c).slice(1)}`}function Jr({config:t}){return t.emulator?Pt(t,Gr):`https://${t.authDomain}/${Wr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="webStorageSupport";class Qr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=En,this._completeRedirectFn=gr}async _openPopup(t,e,n,r){var i;Et(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Yr(t,e,n,Ct(),r);return Hr(t,o,kn())}async _openRedirect(t,e,n,r){return await this._originValidation(t),An(Yr(t,e,n,Ct(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Et(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Fr(t),n=new vr(t);return e.register("authEvent",e=>{wt(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Xr,{type:Xr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Xr];void 0!==i&&e(!!i),gt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=kr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ie()||me()||_e()}}const Zr=Qr;class ti{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return _t("unexpected MultiFactorSessionType")}}}class ei extends ti{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ei(t)}_finalizeEnroll(t,e,n){return dn(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Yn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ni{constructor(){}static assertion(t){return ei._fromCredential(t)}}ni.FACTOR_ID="phone";var ri="@firebase/auth",ii="0.18.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){wt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ai(t){nt(new u("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(e=>{wt(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),wt(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(t)},s=new Ce(e,r);return St(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),nt(new u("auth-internal",t=>{const e=Ae(t.getProvider("auth").getImmediate());return(t=>new oi(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(ri,ii,si(t)),ct(ri,ii,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t=at()){const e=rt(t,"auth");return e.isInitialized()?e.getImmediate():kt(t,{popupRedirectResolver:Zr,persistence:[Wn,wn,En]})}ai("Browser")},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f075:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return E})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return R})),n.d(e,"g",(function(){return C})),n.d(e,"h",(function(){return N})),n.d(e,"i",(function(){return M})),n.d(e,"j",(function(){return l})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return g})),n.d(e,"m",(function(){return S})),n.d(e,"n",(function(){return y})),n.d(e,"o",(function(){return w})),n.d(e,"p",(function(){return f})),n.d(e,"q",(function(){return m})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return v})),n.d(e,"t",(function(){return O})),n.d(e,"u",(function(){return x}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,h=(3&e)<<4|s>>4;let l=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(l=64)),r.push(n[u],n[h],n[l],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,h=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==h)throw Error();const l=e<<2|s>>4;if(r.push(l),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)},a=function(t){return s(t).replace(/\./g,"")},c=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function d(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return l().indexOf("Electron/")>=0}function y(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function v(){return l().indexOf("MSAppHost/")>=0}function b(){return!d()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _="FirebaseError";class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=_,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?I(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new E(r,s,n);return a}}function I(t,e){return t.replace(k,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function C(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(A(n)&&A(o)){if(!C(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function x(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function N(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){const n=new P(t,e);return n.subscribe.bind(n)}class P{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=D(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function L(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},f5df:function(t,e,n){var r=n("00ee"),i=n("1626"),o=n("c6b6"),s=n("b622"),a=s("toStringTag"),c="Arguments"==o(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),a))?n:c?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},f6b4:function(t,e,n){"use strict";var r=n("c532");function i(){this.handlers=[]}i.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=i},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.e1c1bfc7.js.map