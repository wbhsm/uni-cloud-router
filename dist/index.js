"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("fs"),t=require("path"),r=require("events"),n=require("querystring");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e),s=i(t);function a(e,t){return e(t={exports:{}},t.exports),t.exports}var c=a((function(e,t){!function(r){const n=Function.prototype.toString;function i(e){if("function"!=typeof e)return!1;if(/^class[\s{]/.test(n.call(e)))return!0;const t=function(e){return n.call(e).replace(/^[^{]*{\s*/,"").replace(/\s*}[^}]*$/,"")}(e);return/classCallCheck\(/.test(t)||/TypeError\("Cannot call a class as a function"\)/.test(t)}e.exports&&(t=e.exports=i),t.isClass=i}()})),u=(c.isClass,a((function(e){const t={};e.exports=function(r="./",...n){const i=new Map,a={};return i.set(a,{path:s.default.isAbsolute(r)?s.default.join(r,"./"):s.default.join(s.default.dirname(e.parent.filename),r,"./"),is_class:!1}),function e(r){return new Proxy(r,{get:(r,s)=>{if(s in r||"symbol"==typeof s||"inspect"==s)return r[s];const a=i.get(r);if(a.is_class)return a.instance||(a.instance=new r(...n)),a.instance[s]?a.instance[s]:"$map"==s?a:a.instance[s];if("$map"==s)return a;let u={};const f=a.path+s+"/",l=a.path+s+".js";if(t[f]||((e=>o.default.existsSync(e)&&o.default.statSync(e).isFile())(l)?t[f]="file":(e=>o.default.existsSync(e)&&o.default.statSync(e).isDirectory())(f)?t[f]="dir":t[f]="none"),"file"==t[f])u=require(l);else if("dir"!=t[f])return;return i.set(u,{path:f,is_class:c(u)}),r[s]=e(u),r[s]},set:(e,t,r)=>{if(t in e)return e[t]=r,!0;const o=i.get(e);return o.is_class?(o.instance||(o.instance=new e(...n)),o.instance[t]=r,!0):(e[t]=r,!0)}})}(a)}})));function f(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var i=1,o="";if("?"===e[a=r+1])throw new TypeError('Pattern cannot start with "?" at '+a);for(;a<e.length;)if("\\"!==e[a]){if(")"===e[a]){if(0==--i){a++;break}}else if("("===e[a]&&(i++,"?"!==e[a+1]))throw new TypeError("Capturing groups are not allowed at "+a);o+=e[a++]}else o+=e[a++]+e[a++];if(i)throw new TypeError("Unbalanced pattern at "+r);if(!o)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:o}),r=a}else{for(var s="",a=r+1;a<e.length;){var c=e.charCodeAt(a);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;s+=e[a++]}if(!s)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:s}),r=a}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,o="[^"+l(t.delimiter||"/#?")+"]+?",s=[],a=0,c=0,u="",f=function(e){if(c<r.length&&r[c].type===e)return r[c++].value},p=function(e){var t=f(e);if(void 0!==t)return t;var n=r[c],i=n.type,o=n.index;throw new TypeError("Unexpected "+i+" at "+o+", expected "+e)},d=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};c<r.length;){var h=f("CHAR"),y=f("NAME"),v=f("PATTERN");if(y||v){var m=h||"";-1===i.indexOf(m)&&(u+=m,m=""),u&&(s.push(u),u=""),s.push({name:y||a++,prefix:m,suffix:"",pattern:v||o,modifier:f("MODIFIER")||""})}else{var g=h||f("ESCAPED_CHAR");if(g)u+=g;else if(u&&(s.push(u),u=""),f("OPEN")){m=d();var w=f("NAME")||"",E=f("PATTERN")||"",x=d();p("CLOSE"),s.push({name:w||(E?a++:""),pattern:w&&!E?o:E,prefix:m,suffix:x,modifier:f("MODIFIER")||""})}else p("END")}}return s}function l(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function p(e){return e&&e.sensitive?"":"i"}function d(e,t,r){return function(e,t,r){void 0===r&&(r={});for(var n=r.strict,i=void 0!==n&&n,o=r.start,s=void 0===o||o,a=r.end,c=void 0===a||a,u=r.encode,f=void 0===u?function(e){return e}:u,d="["+l(r.endsWith||"")+"]|$",h="["+l(r.delimiter||"/#?")+"]",y=s?"^":"",v=0,m=e;v<m.length;v++){var g=m[v];if("string"==typeof g)y+=l(f(g));else{var w=l(f(g.prefix)),E=l(f(g.suffix));if(g.pattern)if(t&&t.push(g),w||E)if("+"===g.modifier||"*"===g.modifier){var x="*"===g.modifier?"?":"";y+="(?:"+w+"((?:"+g.pattern+")(?:"+E+w+"(?:"+g.pattern+"))*)"+E+")"+x}else y+="(?:"+w+"("+g.pattern+")"+E+")"+g.modifier;else y+="("+g.pattern+")"+g.modifier;else y+="(?:"+w+E+")"+g.modifier}}if(c)i||(y+=h+"?"),y+=r.endsWith?"(?="+d+")":"$";else{var b=e[e.length-1],C="string"==typeof b?h.indexOf(b[b.length-1])>-1:void 0===b;i||(y+="(?:"+h+"(?="+d+"))?"),C||(y+="(?="+h+"|"+d+")")}return new RegExp(y,p(r))}(f(e,r),t,r)}function h(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?function(e,t,r){var n=e.map((function(e){return h(e,t,r).source}));return new RegExp("(?:"+n.join("|")+")",p(r))}(e,t,r):d(e,t,r)}const y="undefined"!=typeof uniCloud,v=()=>!1,m=()=>!0;function g(e){if("string"==typeof e){const t=h(e,[],{end:!1});return t.global&&(t.lastIndex=0),e=>t.test(e.event.action)}if(e instanceof RegExp)return t=>(e.global&&(e.lastIndex=0),e.test(t.event.action));if("function"==typeof e)return e;if(Array.isArray(e)){const t=e.map(e=>g(e));return e=>t.some(t=>t(e))}throw new Error("match/ignore pattern must be RegExp, Array or String, but got "+e)}class w{constructor(e){this.ctx=e,this.config=e.config,this.service=e.service,this.controller=e.controller,this.db=e.db,this.curl=e.curl,this.httpclient=e.httpclient}}var E=function(e){if(!Array.isArray(e))throw new TypeError("Middleware stack must be an array!");for(const t of e)if("function"!=typeof t)throw new TypeError("Middleware must be composed of functions!");return function(t,r){let n=-1;return function i(o){if(o<=n)return Promise.reject(new Error("next() called multiple times"));n=o;let s=e[o];o===e.length&&(s=r);if(!s)return Promise.resolve();try{return Promise.resolve(s(t,i.bind(null,o+1)))}catch(e){return Promise.reject(e)}}(0)}};const x=e=>"string"!=typeof e,b="application/json";function C(e,t){if(t){const{headers:t,httpMethod:r,body:i,queryStringParameters:o}=e.event;if(function(e){const t=Object.keys(e).find(e=>"content-type"===e.toLowerCase());t?(e["content-type"]=e[t].toLowerCase(),"content-type"!==t&&delete e[t]):e["content-type"]=b}(t),e.query=o,"GET"===r)e.data=e.query;else if(e.data=Object.create(null),i){const r=t["content-type"];if(r===b)try{e.data=JSON.parse(i)}catch(e){}else"application/x-www-form-urlencoded"===r&&(e.data=n.parse(i))}}e.set=function(t,r){if(2===arguments.length)Array.isArray(r)?r=r.map(e=>"string"==typeof e?e:String(e)):"string"!=typeof r&&(r=String(r)),e.headers[t]=r;else if(x(t))for(const r in t)e.set(r,t[r])}}async function A(e,t){const r=function(e,t){const r=t.env;return!(!r||"http"!==r.MP_SOURCE)||!(!e.httpMethod||!e.headers)}(e.event,e.context);if(C(e,r),r){const r={"content-type":b};try{await t()}catch(t){return e.body={mpserverlessComposedResponse:!0,statusCode:400,headers:r,body:JSON.stringify({code:t.code||"INVOKE_FUNCTION_FAILED",message:t.message})}}const n=e.headers["content-type"]||b;e.body={mpserverlessComposedResponse:!0,isBase64Encoded:!!e.isBase64Encoded,statusCode:e.status,headers:Object.assign(e.headers,{"content-type":n}),body:n===b?JSON.stringify(e.body):e.body}}else await t()}function O(e){const t=async function(){throw new Error(e)};return t._name="error",t}class R extends r.EventEmitter{constructor(e){super(),this.middleware=[],this.config=e||{};const{baseDir:t=process.cwd(),middleware:r}=this.config;this.serviceDir=s.default.resolve(t,"service"),this.controllerDir=s.default.resolve(t,"controller"),this.initMiddleware(r)}use(e,t){if("function"!=typeof e)throw new TypeError("middleware must be a function");return this.middleware.push(this.wrapMiddleware(e,t)),this}async serve(e,t){const r=function(e,t,r,n,i){const o={state:{},event:t,context:r};return o.config=e,o.service=u(n,o),o.controller=u(i,o),o.query=Object.create(null),o.data=t.data||Object.create(null),o.status=200,o.headers=Object.create(null),y&&(o.db=uniCloud.database(),o.curl=uniCloud.httpclient.request,o.httpclient=uniCloud.httpclient),o}(this.config,e||y&&uniCloud.$args,t||y&&uniCloud.$ctx,this.serviceDir,this.controllerDir),n=this.controller(r);let i;return i="error"===n._name?E([A,n]):E(this.middleware.concat(n)),new Promise(e=>{i(r).then(()=>{e(this.respond(r))}).catch(t=>{e(this.failed(t))})})}initMiddleware(e){this.use(A),Array.isArray(e)&&e.forEach(([e,t])=>{this.use(e,t)})}wrapMiddleware(e,t){const r=function(e){if(!e)return m;const{enable:t,match:r,ignore:n}=e;if(!1===t)return v;if(!r&&!n)return m;if(r&&n)throw new Error("options.match and options.ignore can not both present");const i=g(r||n);return function(e){const t=i(e);return r?t:!t}}(t),n=(t,n)=>r(t)?e(t,n):n();return n._name=e._name||e.name,n}controller(e){const t=(!(r=e.event).action&&r.path&&(r.action=r.path.substr(1)),r.action);var r;if(!t)return O("action is required");const n=t.split("/").filter(Boolean),i=n.length;if(1===i)return O('action must contain "/"');const o=n[i-1];let s=e.controller;for(let e=0;e<i-1;e++)s=s[n[e]];if(!s)return O(`controller/${t.replace(new RegExp("/"+o+"$"),"")} not found`);const a=s[o];if("function"!=typeof a)return O(`controller/${t.replace(new RegExp("/"+o+"$"),"."+o)} is not a function`);const c=async function(e){const t=await a.call(s,e);void 0!==t&&(e.body=t)};return c._name=o,c}failed(e){return{code:e.code||"INVOKE_FUNCTION_FAILED",message:e.message||e}}respond(e){return e.body}}const M=w,N=w;exports.Controller=N,exports.Router=R,exports.Service=M;
