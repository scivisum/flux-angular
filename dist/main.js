!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.flux=e()}}(function(){var e;return function t(e,n,r){function s(o,a){if(!n[o]){if(!e[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(i)return i(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[o]={exports:{}};e[o][0].call(c.exports,function(t){var n=e[o][1][t];return s(n?n:t)},c,c.exports,t,e,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({"./src/main.js":[function(e){(function(t){var n=t.angular||e("angular")&&t.angular,r=e("./safeDeepClone.js"),s=e("dispatchr")(),i=e("eventemitter2").EventEmitter2,o=e("util"),a=function(){var e=function(){s.apply(this,arguments)};return Object.keys(s).forEach(function(t){e[t]=s[t]}),o.inherits(e,s),e.prototype.createStore=function(t,n){function s(e){this.dispatcher=e,i.call(this,{wildcard:!0}),this.initialize&&this.initialize()}n=n||{},o.inherits(s,i),s.handlers=n.handlers,s.storeName=t,Object.keys(n).forEach(function(e){"function"!=typeof n[e]||n.handlers&&n.handlers[e]&&"string"!=typeof n.handlers[e]?"function"!=typeof n[e]&&(s.prototype[e]=n[e]):s.prototype[e]=function(){return r("[Circular]",[],n[e].apply(this,arguments))}}),e.registerStore(s)},e}(),u=n.module;n.module=function(){var e=u.apply(n,arguments);return e.store=function(e,t){return this.factory(e,["$injector","flux",function(n,r){var s=n.invoke(t);return r.createStore(e,s),r.getStore(e)}]),this},e};n.module("flux",[]).service("flux",a).run(["$rootScope","$timeout",function(e){e.constructor.prototype.$listenTo=function(e,t,n){n=n.bind(this);var r="*"===t?"onAny":"on",s="*"===t?"offAny":"off",i="*"===t?[n]:[t,n];e[r].apply(e,i),this.$on("$destroy",function(){e[s].apply(e,i)})}}])}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./safeDeepClone.js":"/Users/christianalfoni/Documents/dev/flux-angular/src/safeDeepClone.js",angular:"angular",dispatchr:"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/index.js",eventemitter2:"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/eventemitter2/lib/eventemitter2.js",util:"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/browserify/node_modules/util/util.js"}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/browserify/node_modules/inherits/inherits_browser.js":[function(e,t){t.exports="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/browserify/node_modules/process/browser.js":[function(e,t){function n(){}var r=t.exports={};r.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=n,r.addListener=n,r.once=n,r.off=n,r.removeListener=n,r.removeAllListeners=n,r.emit=n,r.binding=function(){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(){throw new Error("process.chdir is not supported")}},{}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/browserify/node_modules/util/support/isBufferBrowser.js":[function(e,t){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/browserify/node_modules/util/util.js":[function(e,t,n){(function(t,r){function s(e,t){var r={seen:[],stylize:o};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(t)?r.showHidden=t:t&&n._extend(r,t),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=i),u(r,e,r.depth)}function i(e,t){var n=s.styles[t];return n?"["+s.colors[n][0]+"m"+e+"["+s.colors[n][1]+"m":e}function o(e){return e}function a(e){var t={};return e.forEach(function(e){t[e]=!0}),t}function u(e,t,r){if(e.customInspect&&t&&A(t.inspect)&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var s=t.inspect(r,e);return _(s)||(s=u(e,s,r)),s}var i=l(e,t);if(i)return i;var o=Object.keys(t),g=a(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(t)),D(t)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return c(t);if(0===o.length){if(A(t)){var m=t.name?": "+t.name:"";return e.stylize("[Function"+m+"]","special")}if(x(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(E(t))return e.stylize(Date.prototype.toString.call(t),"date");if(D(t))return c(t)}var y="",v=!1,w=["{","}"];if(p(t)&&(v=!0,w=["[","]"]),A(t)){var b=t.name?": "+t.name:"";y=" [Function"+b+"]"}if(x(t)&&(y=" "+RegExp.prototype.toString.call(t)),E(t)&&(y=" "+Date.prototype.toUTCString.call(t)),D(t)&&(y=" "+c(t)),0===o.length&&(!v||0==t.length))return w[0]+y+w[1];if(0>r)return x(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var j;return j=v?f(e,t,r,g,o):o.map(function(n){return d(e,t,r,g,n,v)}),e.seen.pop(),h(j,y,w)}function l(e,t){if(b(t))return e.stylize("undefined","undefined");if(_(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return v(t)?e.stylize(""+t,"number"):g(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}function c(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,s){for(var i=[],o=0,a=t.length;a>o;++o)k(t,String(o))?i.push(d(e,t,n,r,String(o),!0)):i.push("");return s.forEach(function(s){s.match(/^\d+$/)||i.push(d(e,t,n,r,s,!0))}),i}function d(e,t,n,r,s,i){var o,a,l;if(l=Object.getOwnPropertyDescriptor(t,s)||{value:t[s]},l.get?a=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(a=e.stylize("[Setter]","special")),k(r,s)||(o="["+s+"]"),a||(e.seen.indexOf(l.value)<0?(a=m(n)?u(e,l.value,null):u(e,l.value,n-1),a.indexOf("\n")>-1&&(a=i?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n"))):a=e.stylize("[Circular]","special")),b(o)){if(i&&s.match(/^\d+$/))return a;o=JSON.stringify(""+s),o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+a}function h(e,t,n){var r=0,s=e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return s>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function p(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function m(e){return null===e}function y(e){return null==e}function v(e){return"number"==typeof e}function _(e){return"string"==typeof e}function w(e){return"symbol"==typeof e}function b(e){return void 0===e}function x(e){return j(e)&&"[object RegExp]"===O(e)}function j(e){return"object"==typeof e&&null!==e}function E(e){return j(e)&&"[object Date]"===O(e)}function D(e){return j(e)&&("[object Error]"===O(e)||e instanceof Error)}function A(e){return"function"==typeof e}function S(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function O(e){return Object.prototype.toString.call(e)}function U(e){return 10>e?"0"+e.toString(10):e.toString(10)}function L(){var e=new Date,t=[U(e.getHours()),U(e.getMinutes()),U(e.getSeconds())].join(":");return[e.getDate(),F[e.getMonth()],t].join(" ")}function k(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var z=/%[sdj%]/g;n.format=function(e){if(!_(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(s(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,i=r.length,o=String(e).replace(z,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}}),a=r[n];i>n;a=r[++n])o+=m(a)||!j(a)?" "+a:" "+s(a);return o},n.deprecate=function(e,s){function i(){if(!o){if(t.throwDeprecation)throw new Error(s);t.traceDeprecation?console.trace(s):console.error(s),o=!0}return e.apply(this,arguments)}if(b(r.process))return function(){return n.deprecate(e,s).apply(this,arguments)};if(t.noDeprecation===!0)return e;var o=!1;return i};var C,N={};n.debuglog=function(e){if(b(C)&&(C=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!N[e])if(new RegExp("\\b"+e+"\\b","i").test(C)){var r=t.pid;N[e]=function(){var t=n.format.apply(n,arguments);console.error("%s %d: %s",e,r,t)}}else N[e]=function(){};return N[e]},n.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=p,n.isBoolean=g,n.isNull=m,n.isNullOrUndefined=y,n.isNumber=v,n.isString=_,n.isSymbol=w,n.isUndefined=b,n.isRegExp=x,n.isObject=j,n.isDate=E,n.isError=D,n.isFunction=A,n.isPrimitive=S,n.isBuffer=e("./support/isBuffer");var F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];n.log=function(){console.log("%s - %s",L(),n.format.apply(n,arguments))},n.inherits=e("inherits"),n._extend=function(e,t){if(!t||!j(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/browserify/node_modules/util/support/isBufferBrowser.js",_process:"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/browserify/node_modules/process/browser.js",inherits:"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/browserify/node_modules/inherits/inherits_browser.js"}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/index.js":[function(e,t){t.exports=e("./lib/Dispatcher")},{"./lib/Dispatcher":"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/lib/Dispatcher.js"}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/lib/Action.js":[function(e,t){"use strict";function n(e,t){this.name=e,this.payload=t,this._handlers=null,this._isExecuting=!1,this._isCompleted=null}var r=e("debug")("Dispatchr:Action");n.prototype.getStoreName=function(e){return"string"==typeof e?e:e.storeName},n.prototype.execute=function(e){if(this._isExecuting)throw new Error("Action is already dispatched");var t=this;this._handlers=e,this._isExecuting=!0,this._isCompleted={},Object.keys(e).forEach(function(e){t._callHandler(e)})},n.prototype._callHandler=function(e){var t=this,n=t._handlers[e];if(!n)throw new Error(e+" does not have a handler for action "+t.name);t._isCompleted[e]||(t._isCompleted[e]=!1,r("executing handler for "+e),n(t.payload,t.name),t._isCompleted[e]=!0)},n.prototype.waitFor=function(e,t){var n=this;if(!n._isExecuting)throw new Error("waitFor called even though there is no action being executed!");Array.isArray(e)||(e=[e]),r("waiting on "+e.join(", ")),e.forEach(function(e){e=n.getStoreName(e),n._callHandler(e)}),t()},t.exports=n},{debug:"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/node_modules/debug/browser.js"}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/lib/Dispatcher.js":[function(e,t){"use strict";var n=e("./Action"),r="default";t.exports=function(){function t(e){this.storeInstances={},this.currentAction=null,this.dispatcherInterface={getContext:function(){return e},getStore:this.getStore.bind(this),waitFor:this.waitFor.bind(this)}}var s=e("debug")("Dispatchr:dispatcher");return t.stores={},t.handlers={"default":[]},t.registerStore=function(e){if("function"!=typeof e)throw new Error("registerStore requires a constructor as first parameter");var n=t.getStoreName(e);if(!n)throw new Error("Store is required to have a `storeName` property.");if(t.stores[n]){if(t.stores[n]===e)return;throw new Error("Store with name `"+n+"` has already been registered.")}t.stores[n]=e,e.handlers&&Object.keys(e.handlers).forEach(function(r){var s=e.handlers[r];t._registerHandler(r,n,s)})},t.isRegistered=function(e){var n=t.getStoreName(e),r=t.stores[n];return r?"function"==typeof e&&e!==r?!1:!0:!1},t.getStoreName=function(e){return"string"==typeof e?e:e.storeName},t._registerHandler=function(e,n,r){return t.handlers[e]=t.handlers[e]||[],t.handlers[e].push({name:t.getStoreName(n),handler:r}),t.handlers.length-1},t.prototype.getStore=function(e){var n=t.getStoreName(e);if(!this.storeInstances[n]){var r=t.stores[n];if(!r)throw new Error("Store "+n+" was not registered.");this.storeInstances[n]=new t.stores[n](this.dispatcherInterface)}return this.storeInstances[n]},t.prototype.dispatch=function(e,i){if(this.currentAction)throw new Error("Cannot call dispatch while another dispatch is executing. Attempted to execute '"+e+"' but '"+this.currentAction.name+"' is already executing.");var o=t.handlers[e]||[],a=t.handlers[r]||[];if(!o.length&&!a.length)return s(e+" does not have any registered handlers"),void 0;s("dispatching "+e,i),this.currentAction=new n(e,i);var u=this,l=o.concat(a),c={};l.forEach(function(e){if(!c[e.name]){var t=u.getStore(e.name);if("function"==typeof e.handler)c[e.name]=e.handler.bind(t);else{if(!t[e.handler])throw new Error(e.name+" does not have a method called "+e.handler);c[e.name]=t[e.handler].bind(t)}}}),this.currentAction.execute(c),s("finished "+this.currentAction.name),this.currentAction=null},t.prototype.dehydrate=function(){var e=this,t={};return Object.keys(e.storeInstances).forEach(function(n){var r=e.storeInstances[n];r.dehydrate&&(t[n]=r.dehydrate())}),{stores:t}},t.prototype.rehydrate=function(e){var t=this;e.stores&&Object.keys(e.stores).forEach(function(n){var r=e.stores[n],s=t.getStore(n);s.rehydrate&&s.rehydrate(r)})},t.prototype.waitFor=function(e,t){if(!this.currentAction)throw new Error("waitFor called even though there is no action dispatching");this.currentAction.waitFor(e,t)},t}},{"./Action":"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/lib/Action.js",debug:"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/node_modules/debug/browser.js"}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/node_modules/debug/browser.js":[function(e,t,n){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function s(){var e=arguments,t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return e;var r="color: "+this.color;e=[e[0],r,"color: inherit"].concat(Array.prototype.slice.call(e,1));var s=0,i=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(s++,"%c"===e&&(i=s))}),e.splice(i,0,r),e}function i(){return"object"==typeof console&&"function"==typeof console.log&&Function.prototype.apply.call(console.log,console,arguments)}function o(e){try{null==e?localStorage.removeItem("debug"):localStorage.debug=e}catch(t){}}function a(){var e;try{e=localStorage.debug}catch(t){}return e}n=t.exports=e("./debug"),n.log=i,n.formatArgs=s,n.save=o,n.load=a,n.useColors=r,n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){return JSON.stringify(e)},n.enable(a())},{"./debug":"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/node_modules/debug/debug.js"}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/node_modules/debug/debug.js":[function(e,t,n){function r(){return n.colors[c++%n.colors.length]}function s(e){function t(){}function s(){var e=s,t=+new Date,i=t-(l||t);e.diff=i,e.prev=l,e.curr=t,l=t,null==e.useColors&&(e.useColors=n.useColors()),null==e.color&&e.useColors&&(e.color=r());var o=Array.prototype.slice.call(arguments);o[0]=n.coerce(o[0]),"string"!=typeof o[0]&&(o=["%o"].concat(o));var a=0;o[0]=o[0].replace(/%([a-z%])/g,function(t,r){if("%%"===t)return t;a++;var s=n.formatters[r];if("function"==typeof s){var i=o[a];t=s.call(e,i),o.splice(a,1),a--}return t}),"function"==typeof n.formatArgs&&(o=n.formatArgs.apply(e,o));var u=s.log||n.log||console.log.bind(console);u.apply(e,o)}t.enabled=!1,s.enabled=!0;var i=n.enabled(e)?s:t;return i.namespace=e,i}function i(e){n.save(e);for(var t=(e||"").split(/[\s,]+/),r=t.length,s=0;r>s;s++)t[s]&&(e=t[s].replace(/\*/g,".*?"),"-"===e[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))}function o(){n.enable("")}function a(e){var t,r;for(t=0,r=n.skips.length;r>t;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;r>t;t++)if(n.names[t].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}n=t.exports=s,n.coerce=u,n.disable=o,n.enable=i,n.enabled=a,n.humanize=e("ms"),n.names=[],n.skips=[],n.formatters={};var l,c=0},{ms:"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/node_modules/debug/node_modules/ms/index.js"}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/dispatchr/node_modules/debug/node_modules/ms/index.js":[function(e,t){function n(e){var t=/^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"y":return n*c;case"days":case"day":case"d":return n*l;case"hours":case"hour":case"h":return n*u;case"minutes":case"minute":case"m":return n*a;case"seconds":case"second":case"s":return n*o;case"ms":return n}}}function r(e){return e>=l?Math.round(e/l)+"d":e>=u?Math.round(e/u)+"h":e>=a?Math.round(e/a)+"m":e>=o?Math.round(e/o)+"s":e+"ms"}function s(e){return i(e,l,"day")||i(e,u,"hour")||i(e,a,"minute")||i(e,o,"second")||e+" ms"}function i(e,t,n){return t>e?void 0:1.5*t>e?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var o=1e3,a=60*o,u=60*a,l=24*u,c=365.25*l;t.exports=function(e,t){return t=t||{},"string"==typeof e?n(e):t.long?s(e):r(e)}},{}],"/Users/christianalfoni/Documents/dev/flux-angular/node_modules/eventemitter2/lib/eventemitter2.js":[function(t,n,r){!function(){function t(){this._events={},this._conf&&n.call(this,this._conf)}function n(e){e&&(this._conf=e,e.delimiter&&(this.delimiter=e.delimiter),e.maxListeners&&(this._events.maxListeners=e.maxListeners),e.wildcard&&(this.wildcard=e.wildcard),e.newListener&&(this.newListener=e.newListener),this.wildcard&&(this.listenerTree={}))}function s(e){this._events={},this.newListener=!1,n.call(this,e)}function i(e,t,n,r){if(!n)return[];var s,o,a,u,l,c,f,d=[],h=t.length,p=t[r],g=t[r+1];if(r===h&&n._listeners){if("function"==typeof n._listeners)return e&&e.push(n._listeners),[n];for(s=0,o=n._listeners.length;o>s;s++)e&&e.push(n._listeners[s]);return[n]}if("*"===p||"**"===p||n[p]){if("*"===p){for(a in n)"_listeners"!==a&&n.hasOwnProperty(a)&&(d=d.concat(i(e,t,n[a],r+1)));return d}if("**"===p){f=r+1===h||r+2===h&&"*"===g,f&&n._listeners&&(d=d.concat(i(e,t,n,h)));for(a in n)"_listeners"!==a&&n.hasOwnProperty(a)&&("*"===a||"**"===a?(n[a]._listeners&&!f&&(d=d.concat(i(e,t,n[a],h))),d=d.concat(i(e,t,n[a],r))):d=a===g?d.concat(i(e,t,n[a],r+2)):d.concat(i(e,t,n[a],r)));return d}d=d.concat(i(e,t,n[p],r+1))}if(u=n["*"],u&&i(e,t,u,r+1),l=n["**"])if(h>r){l._listeners&&i(e,t,l,h);for(a in l)"_listeners"!==a&&l.hasOwnProperty(a)&&(a===g?i(e,t,l[a],r+2):a===p?i(e,t,l[a],r+1):(c={},c[a]=l[a],i(e,t,{"**":c},r+1)))}else l._listeners?i(e,t,l,h):l["*"]&&l["*"]._listeners&&i(e,t,l["*"],h);return d}function o(e,t){e="string"==typeof e?e.split(this.delimiter):e.slice();for(var n=0,r=e.length;r>n+1;n++)if("**"===e[n]&&"**"===e[n+1])return;for(var s=this.listenerTree,i=e.shift();i;){if(s[i]||(s[i]={}),s=s[i],0===e.length){if(s._listeners){if("function"==typeof s._listeners)s._listeners=[s._listeners,t];else if(a(s._listeners)&&(s._listeners.push(t),!s._listeners.warned)){var o=u;"undefined"!=typeof this._events.maxListeners&&(o=this._events.maxListeners),o>0&&s._listeners.length>o&&(s._listeners.warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",s._listeners.length),console.trace())}}else s._listeners=t;return!0}i=e.shift()}return!0}var a=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},u=10;s.prototype.delimiter=".",s.prototype.setMaxListeners=function(e){this._events||t.call(this),this._events.maxListeners=e,this._conf||(this._conf={}),this._conf.maxListeners=e},s.prototype.event="",s.prototype.once=function(e,t){return this.many(e,1,t),this},s.prototype.many=function(e,t,n){function r(){0===--t&&s.off(e,r),n.apply(this,arguments)}var s=this;if("function"!=typeof n)throw new Error("many only accepts instances of Function");return r._origin=n,this.on(e,r),s},s.prototype.emit=function(){this._events||t.call(this);var e=arguments[0];if("newListener"===e&&!this.newListener&&!this._events.newListener)return!1;if(this._all){for(var n=arguments.length,r=new Array(n-1),s=1;n>s;s++)r[s-1]=arguments[s];for(s=0,n=this._all.length;n>s;s++)this.event=e,this._all[s].apply(this,r)}if("error"===e&&!(this._all||this._events.error||this.wildcard&&this.listenerTree.error))throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");var o;if(this.wildcard){o=[];var a="string"==typeof e?e.split(this.delimiter):e.slice();i.call(this,o,a,this.listenerTree,0)}else o=this._events[e];if("function"==typeof o){if(this.event=e,1===arguments.length)o.call(this);else if(arguments.length>1)switch(arguments.length){case 2:o.call(this,arguments[1]);break;case 3:o.call(this,arguments[1],arguments[2]);break;default:for(var n=arguments.length,r=new Array(n-1),s=1;n>s;s++)r[s-1]=arguments[s];o.apply(this,r)}return!0}if(o){for(var n=arguments.length,r=new Array(n-1),s=1;n>s;s++)r[s-1]=arguments[s];for(var u=o.slice(),s=0,n=u.length;n>s;s++)this.event=e,u[s].apply(this,r);return u.length>0||!!this._all}return!!this._all},s.prototype.on=function(e,n){if("function"==typeof e)return this.onAny(e),this;if("function"!=typeof n)throw new Error("on only accepts instances of Function");if(this._events||t.call(this),this.emit("newListener",e,n),this.wildcard)return o.call(this,e,n),this;if(this._events[e]){if("function"==typeof this._events[e])this._events[e]=[this._events[e],n];else if(a(this._events[e])&&(this._events[e].push(n),!this._events[e].warned)){var r=u;"undefined"!=typeof this._events.maxListeners&&(r=this._events.maxListeners),r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),console.trace())}}else this._events[e]=n;return this},s.prototype.onAny=function(e){if("function"!=typeof e)throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),this._all.push(e),this},s.prototype.addListener=s.prototype.on,s.prototype.off=function(e,t){if("function"!=typeof t)throw new Error("removeListener only takes instances of Function");var n,r=[];if(this.wildcard){var s="string"==typeof e?e.split(this.delimiter):e.slice();r=i.call(this,null,s,this.listenerTree,0)}else{if(!this._events[e])return this;n=this._events[e],r.push({_listeners:n})}for(var o=0;o<r.length;o++){var u=r[o];if(n=u._listeners,a(n)){for(var l=-1,c=0,f=n.length;f>c;c++)if(n[c]===t||n[c].listener&&n[c].listener===t||n[c]._origin&&n[c]._origin===t){l=c;break}if(0>l)continue;return this.wildcard?u._listeners.splice(l,1):this._events[e].splice(l,1),0===n.length&&(this.wildcard?delete u._listeners:delete this._events[e]),this}(n===t||n.listener&&n.listener===t||n._origin&&n._origin===t)&&(this.wildcard?delete u._listeners:delete this._events[e])}return this},s.prototype.offAny=function(e){var t,n=0,r=0;if(e&&this._all&&this._all.length>0){for(t=this._all,n=0,r=t.length;r>n;n++)if(e===t[n])return t.splice(n,1),this}else this._all=[];return this},s.prototype.removeListener=s.prototype.off,s.prototype.removeAllListeners=function(e){if(0===arguments.length)return!this._events||t.call(this),this;if(this.wildcard)for(var n="string"==typeof e?e.split(this.delimiter):e.slice(),r=i.call(this,null,n,this.listenerTree,0),s=0;s<r.length;s++){var o=r[s];o._listeners=null}else{if(!this._events[e])return this;this._events[e]=null}return this},s.prototype.listeners=function(e){if(this.wildcard){var n=[],r="string"==typeof e?e.split(this.delimiter):e.slice();return i.call(this,n,r,this.listenerTree,0),n}return this._events||t.call(this),this._events[e]||(this._events[e]=[]),a(this._events[e])||(this._events[e]=[this._events[e]]),this._events[e]},s.prototype.listenersAny=function(){return this._all?this._all:[]},"function"==typeof e&&e.amd?e(function(){return s}):"object"==typeof r?r.EventEmitter2=s:window.EventEmitter2=s}()},{}],"/Users/christianalfoni/Documents/dev/flux-angular/src/safeDeepClone.js":[function(e,t){function n(e,t,r){var s;if(!r||"object"!=typeof r||r instanceof ArrayBuffer||r instanceof Blob||r instanceof File)return r;if(r instanceof Date)return s=new Date,s.setTime(r.getTime()),s;if(r instanceof Array||r.length){t.push(r),s=[];for(var i=0,o=r.length;o>i;i++)s[i]=t.indexOf(r[i])>=0?e:n(e,t,r[i]);return t.pop(),s}t.push(r),s={},r instanceof Error&&(s.name=r.name,s.message=r.message,s.stack=r.stack);for(var a in r)r.hasOwnProperty(a)&&"$$hashKey"!==a&&(s[a]=t.indexOf(r[a])>=0?e:n(e,t,r[a]));return t.pop(),s}t.exports=n},{}]},{},["./src/main.js"])("./src/main.js")});