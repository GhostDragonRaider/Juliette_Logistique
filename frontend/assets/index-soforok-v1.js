var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function he(e,t){fe++,de[fe]=e.current,e.current=t}var ge=pe(null),_e=pe(null),ve=pe(null),ye=pe(null);function be(e,t){switch(he(ve,t),he(_e,e),he(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(ge),he(ge,e)}function xe(){me(ge),me(_e),me(ve)}function Se(e){e.memoizedState!==null&&he(ye,e);var t=ge.current,n=Ud(t,e.type);t!==n&&(he(_e,e),he(ge,n))}function Ce(e){_e.current===e&&(me(ge),me(_e)),ye.current===e&&(me(ye),$f._currentValue=ue)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function ht(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[_t])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,Mt={};function Nt(e,t){Pt(e,t),Pt(e+`Capture`,t)}function Pt(e,t){for(Mt[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),It={},Lt={};function Rt(e){return je.call(Lt,e)?!0:je.call(It,e)?!1:Ft.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function zt(e,t,n){if(Rt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function qt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Jt=/[\n"\\]/g;function Yt(e){return e.replace(Jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Xt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Ht(n)):Zt(e,o,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function O(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Gt(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Gt(e)}function Zt(e,t,n){t===`number`&&qt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ht(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Gt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Yt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Xt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Kt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(xu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),Bn=kn(h({},Mn,{relatedTarget:0})),Vn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(h({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(h({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=kn(h({},An,{newState:0,oldState:0})),tr=[9,13,27,32],nr=yn&&`CompositionEvent`in window,rr=null;yn&&`documentMode`in document&&(rr=document.documentMode);var ir=yn&&`TextEvent`in window&&!rr,ar=yn&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=Tn(),wn=Cn=Sn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Dd(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){bd(e,0)}function yr(e){if(Kt(Ot(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(yn){var Sr;if(yn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,fn(e)),_n(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function k(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=yn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==qt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Nr(Vr,r)||(Vr=r,r=Dd(Br,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},A={};yn&&(A=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function qr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in A)return Kr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),Nt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=gi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=gi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=gi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Je(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),O(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Wd(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=df(e)}else t===27?(t=j,Qd(e.type)?(e=uf,uf=null,j=e):j=t):j=Vi?lf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&($l===null?$l=e:$l.push.apply($l,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=pe(null),$i=null,ea=null;function ta(e,t,n){he(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,me(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Mr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,ma={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new da,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var _a=null,va=0,N=0,P=null;function ya(e,t){if(_a===null){var n=_a=[];va=0,N=fd(),P={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(ba,ba),t}function ba(){if(--va===0&&_a!==null){P!==null&&(P.status=`fulfilled`);var e=_a;_a=null,N=0,P=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=E.S;E.S=function(e,t){tu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=pe(null);function wa(){var e=Ca.current;return e===null?Bl.pooledCache:e}function Ta(e,t){t===null?he(Ca,Ca.current):he(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:ma._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=Bl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var F=null,I=0;function La(e){var t=I;return I+=1,F===null&&(F=[]),Ma(F,e,t)}function L(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Na(i)===t.type)?(t=a(t,n.props),L(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),L(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),L(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case T:return t=Na(t),f(e,t,n)}if(le(t)||oe(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,la(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Na(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,la(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Na(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,la(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),L(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),L(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Na(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,la(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{I=0;var i=b(e,t,n,r);return F=null,i}catch(t){if(t===Da||t===ka)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=P;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===N&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ql|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=pe(null),to=pe(0);function R(e,t){e=Gl,he(to,e),he(eo,t),Gl=e|t.baseLanes}function no(){he(to,Gl),he(eo,eo.current)}function ro(){Gl=to.current,me(eo),me(to)}var io=pe(null),ao=null;function oo(e){var t=e.alternate;he(fo,fo.current&1),he(io,e),ao===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){he(fo,fo.current),he(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(he(fo,fo.current),he(io,e),ao===null&&(ao=e)):lo(e)}function lo(){he(fo,fo.current),he(io,io.current)}function uo(e){me(io),ao===e&&(ao=null),me(fo)}var fo=pe(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function Co(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Hs:Us,vo=!1,a=n(r,i),vo=!1,_o&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){E.H=Vs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||oc||(e=e.dependencies,e!==null&&oa(e)&&(oc=!0))}function Do(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Ws,o=t(n,r)}while(_o);return o}function Oo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function ko(){var e=yo!==0;return yo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function No(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=Ma(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===C)return ca(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(No(),B,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===N&&(d=!0);else if((mo&p)===p){u=u.next,p===N&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,ql|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Mr(o,e.memoizedState)&&(oc=!0,d&&(n=P,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=No(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Mr(o,t.memoizedState)||(oc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=z,a=No(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Mr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,oc=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),Bl===null)throw Error(i(349));o||mo&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Po(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function qo(e){var t=di(e,2);t!==null&&gu(t,e,2)}function Jo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),vo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,B,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(M){var n=Bl.formState;if(n!==null){a:{var r=z;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=lf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,z,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,z,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(No(),B,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=No();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=No(),n=B;if(n!==null)return as(t,n,e);No(),t=t.memoizedState,n=No();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Po(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return No().memoizedState}function us(e,t,n,r){var i=Mo();z.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=No();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&wo(r,B.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(z.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Po(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=No().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),vo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||mo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),z.lanes|=e,ql|=e,n)}function ws(e,t,n,r){return Mr(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(q&261930)?(oc=!0,e.memoizedState=n):(e=hu(),z.lanes|=e,ql|=e,t):(e=Cs(e,n,r),Mr(e,t)||(oc=!0),e)}function Ts(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ls(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),mu(e)):Is(e,t,r,mu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,ue,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},mu())}function As(){return ca($f)}function js(){return No().memoizedState}function Ms(){return No().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(gu(r,t,n),qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=ui(e,t,n,r),n!==null&&(gu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,mu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o))return li(e,t,i,0),Bl===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return gu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&gu(t,e,2)}function Rs(e){var t=e.alternate;return e===z||t!==null&&t===z}function zs(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Vs={readContext:ca,use:Io,useCallback:Co,useContext:Co,useEffect:Co,useImperativeHandle:Co,useLayoutEffect:Co,useInsertionEffect:Co,useMemo:Co,useReducer:Co,useRef:Co,useState:Co,useDebugValue:Co,useDeferredValue:Co,useTransition:Co,useSyncExternalStore:Co,useId:Co,useHostTransitionStatus:Co,useFormState:Co,useActionState:Co,useOptimistic:Co,useMemoCache:Co,useCacheRefresh:Co};Vs.useEffectEvent=Co;var Hs={readContext:ca,use:Io,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(vo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(vo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(Mo(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,z,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=Mo();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Bl===null)throw Error(i(349));q&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=Bl.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return Mo().memoizedState=Ns.bind(null,z)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:ca,use:Io,useCallback:xs,useContext:ca,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(No(),B.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(No(),B,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:ca,use:Io,useCallback:xs,useContext:ca,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=No();return B===null?Cs(n,e,t):ws(n,B.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=No();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,B,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(gu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(gu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(gu(t,e,n),qa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ii(e)}function Zs(e){console.error(e)}function Qs(e){ii(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ga(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Ou():n.alternate===null&&Kl===0&&(Kl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(M)return t=io.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=tc(e.stateNode,r,a),Ja(e,a),Kl!==4&&(Kl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Ql===null?Ql=[o]:Ql.push(o),Kl!==4&&(Kl=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),oc=!1;function sc(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref){if(oc=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(oc=!0);else return t.lanes=e.lanes,Mc(e,t,i)}}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?no():R(t,a),co(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),no(),lo(t)):(Ta(t,a.cachePool),R(t,a),lo(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:ma._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),no(),co(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Ba(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(so(t),(e=j)?(e=af(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a){if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(oc||aa(e,t,n,!1),a=(n&e.childLanes)!==0,oc||a){if(r=Bl,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),gu(r,e,s),ac;Ou(),t=hc(e,t,n)}else e=o.treeContext,j=lf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!oc?(Ao(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ha||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ha||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Ea()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Xl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(fo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(M){if(a?oo(t):lo(t),(e=j)?(e=af(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(oo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(oc||aa(e,t,n,!1),s=(n&e.childLanes)!==0,oc||s){if(s=Bl,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),gu(s,e,r),ac;of(c)||Ou(),t=Oc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=lf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Ea():(l=ma._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Ba(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=fo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,he(fo,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&oa(e)))}function Pc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,ma,e.memoizedState.cache),Yi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(fo,fo.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,ma,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)oc=!0;else{if(!Nc(e,n)&&!(t.flags&128))return oc=!1,Pc(e,t,n);oc=!!(e.flags&131072)}}else oc=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Ys(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=cc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,ma,r),r!==o.cache&&ia(t,[ma],n,!0),Xa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=lf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Vd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Fd(r,n,e),At(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&M&&(r=t.stateNode=pf(t.type,t.pendingProps,ve.current),Vi=t,Ui=!0,a=j,Qd(t.type)?(uf=a,j=lf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=nf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=lf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),$f._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=rf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(ma),e===null?(a=wa(),a===null&&(a=Bl,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),ta(t,ma,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,ma,r),r!==a.cache&&ia(t,[ma],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,ma,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Pa=Aa,Oa}}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t)){if(Tu())e.flags|=8192;else throw Pa=Aa,Oa}}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Zl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(ma),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=ge.current,Ji(t)?Ki(t,e):(e=pf(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=ge.current,Ji(t))Ki(t,o);else{var s=Vd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Gi(t,!0)}else e=Vd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return xe(),e===null&&Cd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(me(fo),r=t.memoizedState,r===null)return V(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Bc(r,!1);else{if(Kl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return he(fo,fo.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Ie()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=fo.current,he(fo,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(ma),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(ma),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(fo),null;case 4:return xe(),null;case 10:return na(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&me(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(ma),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(ma),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:me(fo);break;case 10:na(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&me(Ca);break;case 24:na(ma)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){X(e,e.return,t)}}}function qc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[vt]=t}catch(t){X(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[_t]=e,t[vt]=n}catch(t){X(e,e.return,t)}}var rl=!1,il=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,sl=null;function cl(e,t){if(e=e.containerInfo,zd=cp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,sl=t;sl!==null;)if(t=sl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,sl=e;else for(;sl!==null;){switch(t=sl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,sl=e;break}sl=t.return}}function ll(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Wc(5,n);break;case 1:if(Cl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&hl(e,n);break;case 13:Cl(e,n),r&4&&H(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||il,i=rl;var a=il;rl=r,(il=t)&&!a?Tl(e,n,!!(n.subtreeFlags&8772)):Cl(e,n),rl=i,il=a}break;case 30:break;default:Cl(e,n)}}function ul(e){var t=e.alternate;t!==null&&(e.alternate=null,ul(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var dl=null,fl=!1;function pl(e,t,n){for(n=n.child;n!==null;)ml(e,t,n),n=n.sibling}function ml(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:il||Yc(n,t),pl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:il||Yc(n,t);var r=dl,i=fl;Qd(n.type)&&(dl=n.stateNode,fl=!1),pl(e,t,n),mf(n.stateNode),dl=r,fl=i;break;case 5:il||Yc(n,t);case 6:if(r=dl,i=fl,dl=null,pl(e,t,n),dl=r,fl=i,dl!==null){if(fl)try{(dl.nodeType===9?dl.body:dl.nodeName===`HTML`?dl.ownerDocument.body:dl).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{dl.removeChild(n.stateNode)}catch(e){X(n,t,e)}}break;case 18:dl!==null&&(fl?(e=dl,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(dl,n.stateNode));break;case 4:r=dl,i=fl,dl=n.stateNode.containerInfo,fl=!0,pl(e,t,n),dl=r,fl=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),il||Gc(4,n,t),pl(e,t,n);break;case 1:il||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:il=(r=il)||n.memoizedState!==null,pl(e,t,n),il=r;break;default:pl(e,t,n)}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){X(t,t.return,e)}}}function H(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){X(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function _l(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function vl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){dl=c.stateNode,fl=!1;break a}break;case 5:dl=c.stateNode,fl=!1;break a;case 3:case 4:dl=c.stateNode.containerInfo,fl=!0;break a}c=c.return}if(dl===null)throw Error(i(160));ml(o,s,a),dl=null,fl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e),t=t.sibling}var yl=null;function bl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vl(t,e),xl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=yl;if(vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode)}else e.stateNode=Lf(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(vl(t,e),xl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Vf=null,a=yl,yl=_f(t.containerInfo),vl(t,e),yl=a,xl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){X(e,e.return,t)}al&&(al=!1,Sl(e));break;case 4:r=yl,yl=_f(e.stateNode.containerInfo),vl(t,e),xl(e),yl=r;break;case 12:vl(t,e),xl(e);break;case 31:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 13:vl(t,e),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Y=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=il;if(rl=u||a,il=d||l,vl(t,e),il=d,rl=u,xl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||il||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_l(e,n))));break;case 19:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 30:break;case 21:break;default:vl(t,e),xl(e)}}function xl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ll(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),wl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),wl(t);break;case 27:mf(t.stateNode);case 26:case 5:Yc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Wc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 13:Tl(i,a,n),n&&o&4&&H(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),Jc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&Kf(n,yl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=yl;yl=_f(e.stateNode.containerInfo),Nl(e,t,n),yl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,W(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,U(e)):Il(e);break;default:Il(e)}}function U(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,W(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),U(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,U(t));break;default:U(t)}e=e.sibling}}function W(e,t){for(;sl!==null;){var n=sl;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,sl=r;else a:for(n=e;sl!==null;){r=sl;var i=r.sibling,a=r.return;if(ul(r),r===n){sl=null;break a}if(i!==null){i.return=a,sl=i;break a}sl=a}}}var Rl={getCacheForType:function(e){var t=ca(ma),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(ma).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,Bl=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=null,$l=null,eu=!1,Y=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return G&2&&q!==0?q&-q:E.T===null?mt():fd()}function hu(){if(Xl===0){if(!(q&536870912)||M){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Xl=e}else Xl=536870912}return e=io.current,e!==null&&(e.flags|=32),Xl}function gu(e,t,n){(e===Bl&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,q,Xl,!1)),st(e,n),(!(G&2)||e!==Bl)&&(e===Bl&&(!(G&2)&&(Jl|=n),Kl===4&&bu(e,q,Xl,!1)),id(e))}function _u(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||rt(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Ul&&!r&&bu(e,t,0,!1);break}if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Ql;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,Jl|=o,a=4;break a}o=$l,$l=a,o!==null&&($l===null?$l=o:$l.push.apply($l,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Xl,!Hl);break a;case 2:$l=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Y+300-Ie(),10<a)){if(bu(r,t,Xl,!Hl),nt(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,$l,ru,eu,t,Xl,Jl,Zl,Hl,o,`Throttled`,-0,0),a);break a}vu(r,n,$l,ru,eu,t,Xl,Jl,Zl,Hl,o,null,-0,0)}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Pl(t,a,d);var m=(a&62914560)===a?Y-Ie():(a&4194048)===a?tu-Ie():0;if(m=Jf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Yl,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function xu(){return G&6?!0:(ad(0,!1),!1)}function Su(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,jo(e),F=null,I=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),Bl=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=rt(e,t),Wl=!1,Zl=Xl=Yl=Jl=ql=Kl=0,$l=Ql=null,eu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function wu(e,t){z=null,E.H=Vs,t===Da||t===ka?(t=Fa(),J=3):t===Oa?(t=Fa(),J=4):J=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Kl=1,$s(e,Ei(t,e.current)))}function Tu(){var e=io.current;return e===null?!0:(q&4194048)===q?ao===null:(q&62914560)===q||q&536870912?e===ao:!1}function Eu(){var e=E.H;return E.H=Vs,e===null?Vs:e}function Du(){var e=E.A;return E.A=Rl,e}function Ou(){Kl=4,Hl||(q&4194048)!==q&&io.current!==null||(Ul=!0),!(ql&134217727)&&!(Jl&134217727)||Bl===null||bu(Bl,q,Xl,!1)}function ku(e,t,n){var r=G;G|=2;var i=Eu(),a=Du();(Bl!==e||q!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Kl;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Fu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Fu(e,s,c,l)}}Au(),o=Kl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,G=r,E.H=i,E.A=a,K===null&&(Bl=null,q=0,ci()),o}function Au(){for(;K!==null;)Nu(K)}function ju(e,t){var n=G;G|=2;var r=Eu(),a=Du();Bl!==e||q!==t?(ru=null,nu=Ie()+500,Cu(e,t)):Ul=rt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Fu(e,t,o,1);break;case 2:case 9:if(ja(o)){J=0,Vl=null,Pu(t);break}t=function(){J!==2&&J!==9||Bl!==e||(J=7),id(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:ja(o)?(J=0,Vl=null,Pu(t)):(J=0,Vl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Gf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Iu(u))}break b}}J=0,Vl=null,Fu(e,t,o,5);break;case 6:J=0,Vl=null,Fu(e,t,o,6);break;case 8:Su(),Kl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return ea=$i=null,E.H=r,E.A=a,G=n,K===null?(Bl=null,q=0,ci(),Kl):0}function Mu(){for(;K!==null&&!Pe();)Nu(K)}function Nu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Iu(e):K=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:jo(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):K=t}function Fu(e,t,n,r){ea=$i=null,jo(t),F=null,I=0;var i=t.return;try{if(ic(e,i,t,n,q)){Kl=1,$s(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Kl=1,$s(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Kl===0&&(Kl=5)}function Lu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Kl=6,K=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,ct(e,n,o,s,c,l),e===Bl&&(K=Bl=null,q=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Be,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{cl(e,t,n)}finally{G=s,D.p=a,E.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{bl(t,e);var a=Bd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=k(s,h),v=k(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{ll(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,Fe();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=pt(cu),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,G&6)throw Error(i(331));var c=G;if(G|=4,Ll(o.current),kl(o,o.current,s,n),G=c,ad(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{D.p=a,E.T=r,Hu(e,t)}}function Gu(e,t,n){t=Ei(n,t),t=tc(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(st(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=nc(2),r=Ka(t,n,2),r!==null&&(rc(n,r,t,e),st(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Bl===e&&(q&n)===n&&(Kl===4||Kl===3&&(q&62914560)===q&&300>Ie()-Y?!(G&2)&&Cu(e,0):Yl|=n,Zl===q&&(Zl=0)),id(e)}function Ju(e,t){t===0&&(t=at()),e=di(e,t),e!==null&&(st(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Me(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=q,a=nt(r,r===Bl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ud(r,a))}r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Ie(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}au!==0&&au!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Bl,n=q,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=ld.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=q;return r=nt(e,e===Bl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){G&6?Me(Re,od):sd()})}function fd(){if(rd===0){var e=N;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<ni.length;gd++){var _d=ni[gd];ri(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Pt(`onMouseEnter`,[`mouseout`,`mouseover`]),Pt(`onMouseLeave`,[`mouseout`,`mouseover`]),Pt(`onPointerEnter`,[`pointerout`,`pointerover`]),Pt(`onPointerLeave`,[`pointerout`,`pointerover`]),Nt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Nt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Nt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Nt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,jt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Zn;break;case Jr:case Yr:case Xr:l=Vn;break;case ei:l=Qn;break;case`scroll`:case`scrollend`:l=Nn;break;case`wheel`:l=$n;break;case`copy`:case`cut`:case`paste`:l=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`toggle`:case`beforetoggle`:l=er}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=br;else if(mr(c)){if(xr)v=Ar;else{v=Or;var y=Dr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=br):v=kr;if(v&&=v(e,r)){hr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ur?cr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ar&&n.locale!==`ko`&&(ur||x!==`onCompositionStart`?x===`onCompositionEnd`&&ur&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,ur=!0)),y=Dd(r,x),0<y.length&&(x=new Un(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=lr(n),b!==null&&(x.data=b)))),(b=ir?dr(e,n):fr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=vn(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,zt(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Mt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}O(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}Xt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e!==Gd&&(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body)}n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=D.d;D.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Yt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Yt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Yt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Yt(n.imageSizes)+`"]`)):i+=`[href="`+Yt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Yt(r)+`"][href="`+Yt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),At(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=kt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);At(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=kt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),At(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=kt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),At(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=ve.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Yt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),At(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Yt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Yt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,At(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function np(e){return e?(e=mi,e):mi}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(gu(n,e,t),qa(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&gu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=mu();t=ft(t);var n=di(e,t);n!==null&&gu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,dp(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,dp(e,t,n,r)}finally{D.p=a,E.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Td(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}id(a),!(G&6)&&(nu=Ie()+500,ad(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&gu(s,a,2),xu(),ap(a,2)}if(a=fp(r),a===null&&Td(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function fp(e){return e=fn(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,mu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),xu(),t[yt]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.8`)throw Error(i(527,Rp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Ge=Bp.inject(zp),Ke=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[yt]=t.current,Cd(e),new Ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),S=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,C=/^[\\/]{2}/;function w(e,t){return t+e.replace(/\\/g,`/`)}var ee=`popstate`;function te(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ne(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return oe(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:se(t)}return le(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function re(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ie(){return Math.random().toString(36).substring(2,10)}function ae(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function oe(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ce(t):t,state:n,key:t&&t.key||r||ie(),mask:i}}function se({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ce(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function le(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=te(e)?e:oe(h.location,e,t);n&&n(r,e),l=u()+1;let d=ae(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=te(e)?e:oe(h.location,e,t);n&&n(r,e),l=u();let i=ae(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return E(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function E(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),T(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:se(t);return i=i.replace(/ $/,`%20`),!n&&C.test(i)&&(i=r+i),new URL(i,r)}function D(e,t,n=`/`){return ue(e,t,n,!1)}function ue(e,t,n,r,i){let a=ke((typeof t==`string`?ce(t):t).pathname||`/`,n);if(a==null)return null;let o=i??de(e),s=null,c=Oe(a);for(let e=0;s==null&&e<o.length;++e)s=we(o[e],c,r);return s}function de(e){let t=fe(e);return me(t),t}function fe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Le([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),fe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Se(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=De(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of pe(e.path))a(e,t,!0,n)}),t}function pe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=pe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function me(e){e.sort((e,t)=>e.score===t.score?Ce(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var he=/^:[\w-]+$/,ge=3,_e=2,ve=1,ye=10,be=-2,xe=e=>e===`*`;function Se(e,t){let n=e.split(`/`),r=n.length;return n.some(xe)&&(r+=be),t&&(r+=_e),n.filter(e=>!xe(e)).reduce((e,t)=>e+(he.test(t)?ge:t===``?ve:ye),r)}function Ce(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function we(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ee(u,l,s.matcher,s.compiledParams):Te(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Te({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Le([a,d.pathname]),pathnameBase:ze(Le([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Le([a,d.pathnameBase]))}return o}function Te(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=De(e.path,e.caseSensitive,e.end);return Ee(e,t,n,r)}function Ee(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=Re(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=Re(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function De(e,t=!1,n=!0){re(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Oe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return re(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ke(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ae(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ce(e):e,a;return n?(n=Ie(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?je(n.substring(1),`/`):je(n,t)):a=t,{pathname:a,search:Be(r),hash:Ve(i)}}function je(e,t){let n=Re(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Me(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ne(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pe(e){let t=Ne(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Fe(e,t,n,r=!1){let i;typeof e==`string`?i=ce(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Me(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Me(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Me(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ae(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ie=e=>e.replace(/[\\/]{2,}/g,`/`),Le=e=>Ie(e.join(`/`));function Re(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var ze=e=>Re(e).replace(/^\/*/,`/`),Be=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ve=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,He=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ue(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function We(e){return Le(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ge=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ke(e,t){let n=e;if(typeof n!=`string`||!S.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ge)try{let e=new URL(window.location.href),r=C.test(n)?new URL(w(n,e.protocol)):new URL(n),a=ke(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{re(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var qe=new URL(`http://localhost`);function Je(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),qe)}catch{return qe}}function Ye(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function Xe(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function Ze(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!Ye(i,n),s=!Ye(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!Xe(e,i)||!Ye(i,a)))throw Error(`External navigation is not allowed`)}var Qe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Qe);var $e=[`GET`,...Qe];new Set($e);var et=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function tt(e){try{return et.includes(new URL(e).protocol)}catch{return!1}}var nt=x.createContext(null);nt.displayName=`DataRouter`;var rt=x.createContext(null);rt.displayName=`DataRouterState`;var it=x.createContext(!1);function at(){return x.useContext(it)}var ot=x.createContext({isTransitioning:!1});ot.displayName=`ViewTransition`;var st=x.createContext(new Map);st.displayName=`Fetchers`;var ct=x.createContext(null);ct.displayName=`Await`;var lt=x.createContext(null);lt.displayName=`Navigation`;var ut=x.createContext(null);ut.displayName=`Location`;var dt=x.createContext({outlet:null,matches:[],isDataRoute:!1});dt.displayName=`Route`;var ft=x.createContext(null);ft.displayName=`RouteError`;var pt=`REACT_ROUTER_ERROR`,mt=`REDIRECT`,ht=`ROUTE_ERROR_RESPONSE`;function gt(e){if(e.startsWith(`${pt}:${mt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function _t(e){if(e.startsWith(`${pt}:${ht}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new He(t.status,t.statusText,t.data)}catch{}}function vt(e,{relative:t}={}){T(yt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(lt),{hash:i,pathname:a,search:o}=Ot(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Le([n,a])),r.createHref({pathname:s,search:o,hash:i})}function yt(){return x.useContext(ut)!=null}function bt(){return T(yt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(ut).location}var xt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function St(e){x.useContext(lt).static||x.useLayoutEffect(e)}function Ct(){let{isDataRoute:e}=x.useContext(dt);return e?Gt():wt()}function wt(){T(yt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(nt),{basename:t,navigator:n}=x.useContext(lt),{matches:r}=x.useContext(dt),{pathname:i}=bt(),a=JSON.stringify(Pe(r)),o=x.useRef(!1);return St(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(re(o.current,xt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Fe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Le([t,c.pathname])),Ze(typeof r==`string`?r:se(r),n.createHref(c),Je(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var Tt=x.createContext(null);function Et(e){let t=x.useContext(dt).outlet;return x.useMemo(()=>t&&x.createElement(Tt.Provider,{value:e},t),[t,e])}function Dt(){let{matches:e}=x.useContext(dt);return e[e.length-1]?.params??{}}function Ot(e,{relative:t}={}){let{matches:n}=x.useContext(dt),{pathname:r}=bt(),i=JSON.stringify(Pe(n));return x.useMemo(()=>Fe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function kt(e,t){return At(e,t)}function At(e,t,n){T(yt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(lt),{matches:i}=x.useContext(dt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;qt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=bt(),d;if(t){let e=typeof t==`string`?ce(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):D(e,{pathname:p});re(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),re(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Lt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Le([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Le([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(ut.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function jt(){let e=Wt(),t=Ue(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var Mt=x.createElement(jt,null),Nt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=_t(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(dt.Provider,{value:this.props.routeContext},x.createElement(ft.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Ft,{error:e},t):t}};Nt.contextType=it;var Pt=new WeakMap;function Ft({children:e,error:t}){let{basename:n,navigator:r}=x.useContext(lt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=gt(t.digest);if(e){let i=Pt.get(t);if(i)throw i;let a=Ke(e.location,n),o=a.absoluteURL||a.to;if(Ze(e.location,o,Je(r),`allow-explicit`),tt(o))throw Error(`Invalid redirect location`);if(Ge&&!Pt.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Pt.set(t,n),n}}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function It({routeContext:e,match:t,children:n}){let r=x.useContext(nt);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(dt.Provider,{value:e},n)}function Lt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:We(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Mt,o&&(s<0&&c===0?(qt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(It,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Nt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Rt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zt(e){let t=x.useContext(nt);return T(t,Rt(e)),t}function Bt(e){let t=x.useContext(rt);return T(t,Rt(e)),t}function Vt(e){let t=x.useContext(dt);return T(t,Rt(e)),t}function Ht(e){let t=Vt(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ut(){return Ht(`useRouteId`)}function Wt(){let e=x.useContext(ft),t=Bt(`useRouteError`),n=Ht(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Gt(){let{router:e}=zt(`useNavigate`),t=Ht(`useNavigate`),n=x.useRef(!1);return St(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{re(n.current,xt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Kt={};function qt(e,t,n){!t&&!Kt[e]&&(Kt[e]=!0,re(!1,n))}x.memo(Jt);function Jt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return At(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Yt({to:e,replace:t,state:n,relative:r}){T(yt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=x.useContext(lt);re(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=x.useContext(dt),{pathname:s}=bt(),c=Ct(),l=Fe(e,Pe(o),s,r===`path`);Ze(typeof e==`string`?e:se(e),a.createHref(l),Je(a),`reject`);let u=JSON.stringify(l);return x.useEffect(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}function Xt(e){return Et(e.context)}function O(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Zt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!yt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ce(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=ke(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return re(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(lt.Provider,{value:c},x.createElement(ut.Provider,{children:t,value:h}))}function Qt({children:e,location:t}){return kt($t(e),t)}x.Component;function $t(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,$t(e.props.children,i));return}T(e.type===O,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=$t(e.props.children,i)),n.push(a)}),n}var en=`get`,tn=`application/x-www-form-urlencoded`;function nn(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function rn(e){return nn(e)&&e.tagName.toLowerCase()===`button`}function an(e){return nn(e)&&e.tagName.toLowerCase()===`form`}function on(e){return nn(e)&&e.tagName.toLowerCase()===`input`}function sn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function cn(e,t){return e.button===0&&(!t||t===`_self`)&&!sn(e)}var ln=null;function un(){if(ln===null)try{new FormData(document.createElement(`form`),0),ln=!1}catch{ln=!0}return ln}var dn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function fn(e){return e!=null&&!dn.has(e)?(re(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tn}"`),null):e}function pn(e,t){let n,r,i,a,o;if(an(e)){let o=e.getAttribute(`action`);r=o?ke(o,t):null,n=e.getAttribute(`method`)||en,i=fn(e.getAttribute(`enctype`))||tn,a=new FormData(e)}else if(rn(e)||on(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?ke(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||en,i=fn(e.getAttribute(`formenctype`))||fn(o.getAttribute(`enctype`))||tn,a=new FormData(o,e),!un()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(nn(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=en,r=null,i=tn,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function mn(e,t){if(e===!1||e==null)throw Error(t)}function hn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&ke(i.pathname,t)===`/`?`${Re(t)}/_root.${r}`:`${Re(i.pathname)}.${r}`,i}async function gn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _n(e){return e!=null&&typeof e.page==`string`}function vn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function yn(e,t,n){return wn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await gn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(vn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function bn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function xn(e,t,{includeHydrateFallback:n}={}){return Sn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Sn(e){return[...new Set(e)]}function Cn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function wn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!_n(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Cn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Tn(){let e=x.useContext(nt);return mn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function En(){let e=x.useContext(rt);return mn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Dn=x.createContext(void 0);Dn.displayName=`FrameworkContext`;function On(){let e=x.useContext(Dn);return mn(e,`You must render this element inside a <HydratedRouter> element`),e}function kn(e,t){let n=x.useContext(Dn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:An(s,p),onBlur:An(c,m),onMouseEnter:An(l,p),onMouseLeave:An(u,m),onTouchStart:An(d,p)}]:[a,f,{}]:[!1,f,{}]}function An(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function jn({page:e,...t}){let n=at(),{nonce:r}=On(),{router:i}=Tn(),a=x.useMemo(()=>D(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(Nn,{page:e,matches:a,...t}):x.createElement(Pn,{page:e,matches:a,...t})):null}function Mn(e){let{manifest:t,routeModules:n}=On(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return yn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Nn({page:e,matches:t,...n}){let r=bt(),{future:i}=On(),{basename:a}=Tn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=hn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Pn({page:e,matches:t,...n}){let r=bt(),{future:i,manifest:a,routeModules:o}=On(),{basename:s}=Tn(),{loaderData:c,matches:l}=En(),u=x.useMemo(()=>bn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>bn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=hn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>xn(d,a),[d,a]),m=Mn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Fn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var In=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{In&&(window.__reactRouterVersion=`7.18.3`)}catch{}function Ln({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=ne({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Zt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Rn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(lt),v=typeof l==`string`&&S.test(l),y=Ke(l,h);l=y.to;let b=vt(l,{relative:r}),C=bt(),w=null;if(o){let e=Fe(o,[],C.mask?C.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Le([h,e.pathname])),w=g.createHref(e)}let[ee,te,ne]=kn(n,p),T=Un(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function re(t){e&&e(t),t.defaultPrevented||T(t)}let ie=!(y.isExternal||i),ae=x.createElement(`a`,{...p,...ne,href:(ie?w:void 0)||y.absoluteURL||b,onClick:ie?re:e,ref:Fn(m,te),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return ee&&!v?x.createElement(x.Fragment,null,ae,x.createElement(jn,{page:b})):ae});Rn.displayName=`Link`;var zn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Ot(a,{relative:c.relative}),d=bt(),f=x.useContext(rt),{navigator:p,basename:m}=x.useContext(lt),h=f!=null&&Jn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=ke(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,ee;ee=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return x.createElement(Rn,{...c,"aria-current":w,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});zn.displayName=`NavLink`;var Bn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=en,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(lt),g=Kn(),_=qn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&S.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Bn.displayName=`Form`;function Vn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hn(e){let t=x.useContext(nt);return T(t,Vn(e)),t}function Un(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=Ct(),d=bt(),f=Ot(e,{relative:o});return x.useCallback(p=>{if(cn(p,t)){p.preventDefault();let t=n===void 0?se(d)===se(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Wn=0,Gn=()=>`__${String(++Wn)}__`;function Kn(){let{router:e}=Hn(`useSubmit`),{basename:t}=x.useContext(lt),n=Ut(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=pn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Gn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function qn(e,{relative:t}={}){let{basename:n}=x.useContext(lt),r=x.useContext(dt);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Ot(e||`.`,{relative:t})},o=bt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Le([n,a.pathname])),se(a)}function Jn(e,{relative:t}={}){let n=x.useContext(ot);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Hn(`useViewTransitionState`),i=Ot(e,{relative:t});if(!n.isTransitioning)return!1;let a=ke(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ke(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Te(i.pathname,o)!=null||Te(i.pathname,a)!=null}var Yn=g(),Xn={rolunk:{seo:{cim:`Rólunk | Juliette Logistique`,leiras:`Ismerje meg a Juliette Logistique csapatát: premium járműszállítás, precíz folyamatok és személyes felelősség Németországban és Európában.`,kulcsszavak:`Juliette Logistique, rólunk, járműszállítás, premium logisztika, sofőrök`},cim:`RÓLUNK`,alcim:`Szenvedély a járművekért. Felelősség az Ön sikeréért.`,bekezdesek:[`A Juliette Logistique a premium járműszállítást és a személyre szabott logisztikát képviseli. Pontosságot, biztonságot és személyes szolgáltatást kapcsolunk össze — kereskedők, flották és igényes magánügyfelek számára.`,`Minden megbízást úgy kezelünk, mintha a saját járművünket vinnénk: gondos átvétel, dokumentált állapot, megbízható átadás. A célunk, hogy Önnek ne a szállítás legyen a gond, hanem a következő lépés.`],ertekekCim:`AMI MEGHATÁROZ MINKET`,ertekek:[{cim:`Biztonság mindenekelőtt`,leiras:`Állapotellenőrzés, fotódokumentáció és gondos járműkezelés minden szakaszban.`},{cim:`Pontosság`,leiras:`Átlátható ütemezés, tartott határidők és folyamatos státuszjelentés.`},{cim:`Személyes kapcsolat`,leiras:`Egyértelmű kommunikáció, elérhető kapcsolattartás és gyors döntések.`}],folyamatCim:`HOGYAN DOLGOZUNK`,folyamat:[{cim:`1. Megbízás`,leiras:`Átvételi pont, cél, időablak és járműadatok egyeztetése.`},{cim:`2. Átvétel`,leiras:`Állapotfelmérés, dokumentálás, kulcsok és iratok átvétele.`},{cim:`3. Szállítás`,leiras:`Biztonságos átvezetés saját keréken, folyamatos követhetőséggel.`},{cim:`4. Átadás`,leiras:`Pontos átadás, záró ellenőrzés és teljes dokumentáció.`}],cta:`KAPCSOLATFELVÉTEL`},szolgaltatasok:{seo:{cim:`Szolgáltatások | Juliette Logistique`,leiras:`Premium járműátvezetés, flottaszállítás, átvétel és kiszállítás Németországban és Európában — teljes dokumentációval.`,kulcsszavak:`járműszállítás, szolgáltatások, flotta, átvezetés, fotódokumentáció`},cim:`SZOLGÁLTATÁSAINK`,alcim:`Teljes körű premium járműlogisztika — egy kézből.`,bevezeto:`Akár egyetlen járműről, akár teljes flottáról van szó: rugalmas, átlátható és biztonságos megoldásokat kínálunk regionális és európai útvonalakon.`,tetelek:[{azonosito:`sajat-kerekeken`,cim:`SZÁLLÍTÁS SAJÁT KEREKEKEN`,leiras:`Tapasztalt sofőrökkel biztonságosan átvezetjük a járművet a megadott útvonalon.`,pontok:[`Premium és mindennapi személygépjárművek`,`Átvételkori és átadáskori állapotellenőrzés`,`Digitális státuszjelentés`]},{azonosito:`atvetel`,cim:`ÁTVÉTEL ÉS KISZÁLLÍTÁS`,leiras:`Rugalmas időpontok, pontos átadás — kereskedői telephelytől a végfelhasználóig.`,pontok:[`Egyeztetett időablakok`,`Kulcsok és dokumentumok gondos kezelése`,`Személyes átadás igény szerint`]},{azonosito:`flotta`,cim:`KERESKEDŐI ÉS FLOTTA SZÁLLÍTÁS`,leiras:`Hatékony, ismételhető folyamatok flották és kereskedők számára.`,pontok:[`Többjárműves megbízások`,`Átlátható ütemezés`,`Stabil partneri együttműködés`]},{azonosito:`tavolsag`,cim:`RÖVID ÉS HOSSZÚ TÁV`,leiras:`Regionális fuvaroktól az országos és európai útvonalakig megbízhatóan.`,pontok:[`Rövid távú átállások`,`Többnapos útvonalak`,`Rugalmas sofőrellátás`]},{azonosito:`europa`,cim:`ORSZÁGOS ÉS EURÓPAI LEFEDETTSÉG`,leiras:`Németország-szerte és határokon átívelő logisztika egy kapcsolattartóval.`,pontok:[`Nemzetközi célállomások`,`Határátlépéses szervezés`,`Egyablakos ügyintézés`]},{azonosito:`dokumentacio`,cim:`TELJES DOKUMENTÁCIÓ`,leiras:`Átlátható átadás fotókkal, km-óra állással és sérülésjegyzőkönyvvel.`,pontok:[`Fotódokumentáció`,`Állapotjegyzőkönyv`,`Átadás-átvételi igazolás`]}],cta:`SZÁLLÍTÁS IGÉNYLÉSE`},partnerek:{seo:{cim:`Partnereink | Juliette Logistique`,leiras:`Megbízható együttműködés flottákkal, kölcsönzőkkel és szakmai partnerekkel a premium járműlogisztikában.`,kulcsszavak:`partnerek, flotta, járműkölcsönzés, Juliette Logistique`},cim:`PARTNEREINK`,alcim:`Erős szakmai hálózat — közös minőségi elvárásokkal.`,bekezdesek:[`Partnereinkkel hosszú távú, átlátható együttműködésre törekszünk. A közös cél: biztonságos, pontos és jól dokumentált járműszállítás.`,`Akár flottamozgatásról, akár egyedi átvezetésről van szó, a folyamatainkat úgy alakítjuk, hogy illeszkedjenek a partner meglévő rendszereihez.`],elonyokCim:`MIÉRT ÉRDEMES VELÜNK DOLGOZNI?`,elonyok:[`Stabil, ismételhető szállítási folyamatok`,`Gyors visszajelzés és elérhető kapcsolattartás`,`Teljes dokumentáció minden átadásnál`,`Rugalmas kapacitás rövid és hosszabb távon`],cta:`LEGYEN A PARTNERÜNK`},kapcsolat:{seo:{cim:`Kapcsolat | Juliette Logistique`,leiras:`Vegye fel a kapcsolatot a Juliette Logistique csapatával járműszállítás és logisztikai megbízások ügyében.`,kulcsszavak:`kapcsolat, ajánlatkérés, járműszállítás, telefon`},cim:`KAPCSOLAT`,alcim:`Készen állunk a következő megbízásra.`,bekezdesek:[`Szállításigénylés, flottamegbízás vagy partnerségi megkeresés esetén hívjon minket. Rövid egyeztetés után pontos ajánlatot és ütemezést adunk.`,`Kérjük, készítse elő a jármű adatait, az átvételi és célcímet, valamint a kívánt időablakot — így gyorsabban tudunk segíteni.`],telefonCimke:`Telefon`,emailCimke:`E-mail`,cimCimke:`Cím`,teruletCimke:`Terület`,teruletErtek:`Németország és Európa`,idopontCimke:`Elérhetőség`,idopontErtek:`Hétfő–Péntek, 08:00–18:00 (CET)`,cta:`HÍVÁS INDÍTÁSA`}},Zn={rolunk:{seo:{cim:`About | Juliette Logistique`,leiras:`Meet Juliette Logistique: premium vehicle transport, precise processes and personal responsibility across Germany and Europe.`,kulcsszavak:`Juliette Logistique, about, vehicle transport, premium logistics, drivers`},cim:`ABOUT US`,alcim:`Passion for vehicles. Responsibility for your success.`,bekezdesek:[`Juliette Logistique stands for premium vehicle transport and tailored logistics. We combine precision, safety and personal service — for dealers, fleets and discerning private clients.`,`Every assignment is handled as if it were our own vehicle: careful handover, documented condition, reliable delivery. Our goal is that transport is never your worry — the next step is.`],ertekekCim:`WHAT DEFINES US`,ertekek:[{cim:`Safety first`,leiras:`Condition checks, photo documentation and careful handling at every stage.`},{cim:`Punctuality`,leiras:`Clear scheduling, kept deadlines and continuous status updates.`},{cim:`Personal contact`,leiras:`Clear communication, reachable contacts and fast decisions.`}],folyamatCim:`HOW WE WORK`,folyamat:[{cim:`1. Assignment`,leiras:`Pickup, destination, time window and vehicle details aligned.`},{cim:`2. Collection`,leiras:`Condition review, documentation, keys and papers collected.`},{cim:`3. Transport`,leiras:`Safe transfer on own wheels with continuous traceability.`},{cim:`4. Delivery`,leiras:`Punctual handover, final check and complete documentation.`}],cta:`CONTACT US`},szolgaltatasok:{seo:{cim:`Services | Juliette Logistique`,leiras:`Premium vehicle transfer, fleet transport, pickup and delivery across Germany and Europe — fully documented.`,kulcsszavak:`vehicle transport, services, fleet, transfer, photo documentation`},cim:`OUR SERVICES`,alcim:`End-to-end premium vehicle logistics — from one partner.`,bevezeto:`Whether a single car or a full fleet: we offer flexible, transparent and safe solutions on regional and Europe-wide routes.`,tetelek:[{azonosito:`sajat-kerekeken`,cim:`TRANSPORT ON OWN WHEELS`,leiras:`Experienced drivers safely transfer the vehicle along the agreed route.`,pontok:[`Premium and everyday passenger cars`,`Collection and delivery condition checks`,`Digital status reporting`]},{azonosito:`atvetel`,cim:`PICKUP & DELIVERY`,leiras:`Flexible schedules and punctual handover — from dealer sites to end customers.`,pontok:[`Agreed time windows`,`Careful handling of keys and documents`,`Personal handover on request`]},{azonosito:`flotta`,cim:`DEALER & FLEET TRANSPORT`,leiras:`Efficient, repeatable processes for fleets and dealers.`,pontok:[`Multi-vehicle assignments`,`Transparent scheduling`,`Stable partnership workflows`]},{azonosito:`tavolsag`,cim:`SHORT & LONG DISTANCE`,leiras:`Reliable service from regional trips to nationwide and European routes.`,pontok:[`Short-distance transfers`,`Multi-day routes`,`Flexible driver capacity`]},{azonosito:`europa`,cim:`NATIONWIDE & EUROPE-WIDE`,leiras:`Logistics across Germany and borders with a single point of contact.`,pontok:[`International destinations`,`Cross-border organisation`,`One-stop coordination`]},{azonosito:`dokumentacio`,cim:`FULL DOCUMENTATION`,leiras:`Transparent handover with photos, mileage and damage reports.`,pontok:[`Photo documentation`,`Condition reports`,`Handover confirmation`]}],cta:`REQUEST TRANSPORT`},partnerek:{seo:{cim:`Partners | Juliette Logistique`,leiras:`Reliable collaboration with fleets, rental brands and professional partners in premium vehicle logistics.`,kulcsszavak:`partners, fleet, car rental, Juliette Logistique`},cim:`OUR PARTNERS`,alcim:`A strong professional network — with shared quality standards.`,bekezdesek:[`We aim for long-term, transparent partnerships. The shared goal: safe, punctual and well-documented vehicle transport.`,`Whether fleet movements or individual transfers, our processes adapt to your existing systems.`],elonyokCim:`WHY WORK WITH US?`,elonyok:[`Stable, repeatable transport processes`,`Fast feedback and reachable contacts`,`Full documentation at every handover`,`Flexible capacity for short and longer runs`],cta:`BECOME A PARTNER`},kapcsolat:{seo:{cim:`Contact | Juliette Logistique`,leiras:`Contact the Juliette Logistique team for vehicle transport and logistics assignments.`,kulcsszavak:`contact, quote request, vehicle transport, phone`},cim:`CONTACT`,alcim:`Ready for your next assignment.`,bekezdesek:[`For transport requests, fleet assignments or partnership enquiries, call us. After a short briefing we provide a clear quote and schedule.`,`Please prepare vehicle details, pickup and destination addresses, and your preferred time window — so we can help faster.`],telefonCimke:`Phone`,emailCimke:`Email`,cimCimke:`Address`,teruletCimke:`Coverage`,teruletErtek:`Germany and Europe`,idopontCimke:`Availability`,idopontErtek:`Monday–Friday, 08:00–18:00 (CET)`,cta:`CALL NOW`}},Qn={rolunk:{seo:{cim:`Über uns | Juliette Logistique`,leiras:`Lernen Sie Juliette Logistique kennen: Premium-Fahrzeugüberführung, präzise Abläufe und persönliche Verantwortung in Deutschland und Europa.`,kulcsszavak:`Juliette Logistique, über uns, Fahrzeugüberführung, Premium Logistik, Fahrer`},cim:`ÜBER UNS`,alcim:`Leidenschaft für Fahrzeuge. Verantwortung für Ihren Erfolg.`,bekezdesek:[`Juliette Logistique steht für Premium-Fahrzeugüberführung und maßgeschneiderte Logistik. Wir verbinden Präzision, Sicherheit und persönlichen Service — für Händler, Flotten und anspruchsvolle Privatkunden.`,`Jeder Auftrag wird behandelt, als wäre es unser eigenes Fahrzeug: sorgfältige Übernahme, dokumentierter Zustand, zuverlässige Übergabe. Unser Ziel: Der Transport soll nie Ihre Sorge sein — sondern der nächste Schritt.`],ertekekCim:`WAS UNS AUSZEICHNET`,ertekek:[{cim:`Sicherheit zuerst`,leiras:`Zustandsprüfung, Fotodokumentation und sorgfältige Fahrzeugbehandlung in jeder Phase.`},{cim:`Pünktlichkeit`,leiras:`Klare Terminplanung, eingehaltene Fristen und laufende Statusmeldungen.`},{cim:`Persönlicher Kontakt`,leiras:`Klare Kommunikation, erreichbare Ansprechpartner und schnelle Entscheidungen.`}],folyamatCim:`SO ARBEITEN WIR`,folyamat:[{cim:`1. Auftrag`,leiras:`Abholung, Ziel, Zeitfenster und Fahrzeugdaten abstimmen.`},{cim:`2. Übernahme`,leiras:`Zustandsaufnahme, Dokumentation, Schlüssel und Papiere.`},{cim:`3. Transport`,leiras:`Sichere Überführung auf eigenen Rädern mit Nachverfolgbarkeit.`},{cim:`4. Übergabe`,leiras:`Pünktliche Übergabe, Abschlussprüfung und volle Dokumentation.`}],cta:`KONTAKT AUFNEHMEN`},szolgaltatasok:{seo:{cim:`Leistungen | Juliette Logistique`,leiras:`Premium-Fahrzeugüberführung, Flottentransporte, Abholung und Zustellung in Deutschland und Europa — vollständig dokumentiert.`,kulcsszavak:`Fahrzeugüberführung, Leistungen, Flotte, Transport, Fotodokumentation`},cim:`UNSERE LEISTUNGEN`,alcim:`Premium-Fahrzeuglogistik aus einer Hand.`,bevezeto:`Ob einzelnes Fahrzeug oder ganze Flotte: Wir bieten flexible, transparente und sichere Lösungen auf regionalen und europaweiten Strecken.`,tetelek:[{azonosito:`sajat-kerekeken`,cim:`ÜBERFÜHRUNG AUF EIGENEN RÄDERN`,leiras:`Erfahrene Fahrer überführen Ihr Fahrzeug sicher auf der vereinbarten Route.`,pontok:[`Premium- und Alltagspkw`,`Zustandsprüfung bei Abholung und Übergabe`,`Digitale Statusmeldungen`]},{azonosito:`atvetel`,cim:`ABHOLUNG & ZUSTELLUNG`,leiras:`Flexible Termine und pünktliche Übergabe — vom Händlerstandort bis zum Endkunden.`,pontok:[`Abgestimmte Zeitfenster`,`Sorgfältiger Umgang mit Schlüssel und Papieren`,`Persönliche Übergabe auf Wunsch`]},{azonosito:`flotta`,cim:`HÄNDLER- & FLOTTENTRANSPORTE`,leiras:`Effiziente, wiederholbare Prozesse für Flotten und Händler.`,pontok:[`Mehrmfahrzeug-Aufträge`,`Transparente Disposition`,`Stabile Partnerschaftsabläufe`]},{azonosito:`tavolsag`,cim:`KURZ- & LANGSTRECKEN`,leiras:`Von regionalen Fahrten bis hin zu europaweiten Routen.`,pontok:[`Kurzstreckenüberführungen`,`Mehrtägige Touren`,`Flexible Fahrerkapazität`]},{azonosito:`europa`,cim:`BUNDESWEIT & EUROPAWEIT`,leiras:`Logistik in Deutschland und über Grenzen hinweg — mit einem Ansprechpartner.`,pontok:[`Internationale Ziele`,`Grenzüberschreitende Organisation`,`Zentrale Koordination`]},{azonosito:`dokumentacio`,cim:`FOTODOKUMENTATION`,leiras:`Transparente Übergabe mit Fotos, Kilometerstand und Schadensprotokoll.`,pontok:[`Fotodokumentation`,`Zustandsprotokolle`,`Übergabebestätigung`]}],cta:`TRANSPORT ANFRAGEN`},partnerek:{seo:{cim:`Partner | Juliette Logistique`,leiras:`Zuverlässige Zusammenarbeit mit Flotten, Mietmarken und Fachpartnern in der Premium-Fahrzeuglogistik.`,kulcsszavak:`Partner, Flotte, Autovermietung, Juliette Logistique`},cim:`UNSERE PARTNER`,alcim:`Starkes Netzwerk — mit gemeinsamen Qualitätsansprüchen.`,bekezdesek:[`Wir streben langfristige, transparente Partnerschaften an. Gemeinsames Ziel: sichere, pünktliche und gut dokumentierte Fahrzeugüberführung.`,`Ob Flottenbewegungen oder Einzelüberführungen — unsere Abläufe fügen sich in Ihre bestehenden Systeme ein.`],elonyokCim:`WARUM MIT UNS ARBEITEN?`,elonyok:[`Stabile, wiederholbare Transportprozesse`,`Schnelles Feedback und erreichbare Kontakte`,`Volle Dokumentation bei jeder Übergabe`,`Flexible Kapazität für Kurz- und Langstrecken`],cta:`PARTNER WERDEN`},kapcsolat:{seo:{cim:`Kontakt | Juliette Logistique`,leiras:`Kontaktieren Sie das Team von Juliette Logistique für Fahrzeugüberführung und Logistikaufträge.`,kulcsszavak:`Kontakt, Angebot, Fahrzeugüberführung, Telefon`},cim:`KONTAKT`,alcim:`Bereit für Ihren nächsten Auftrag.`,bekezdesek:[`Für Transportanfragen, Flottenaufträge oder Partnerschaftsanfragen rufen Sie uns an. Nach kurzer Abstimmung erhalten Sie ein klares Angebot und einen Terminplan.`,`Bitte halten Sie Fahrzeugdaten, Abhol- und Zieladresse sowie Ihr Wunschzeitfenster bereit — so können wir schneller helfen.`],telefonCimke:`Telefon`,emailCimke:`E-Mail`,cimCimke:`Adresse`,teruletCimke:`Gebiet`,teruletErtek:`Deutschland und Europa`,idopontCimke:`Erreichbarkeit`,idopontErtek:`Montag–Freitag, 08:00–18:00 (CET)`,cta:`JETZT ANRUFEN`}},$n={seo:{cim:`Karrier | Juliette Logistique`,leiras:`Csatlakozzon a Juliette Logistique csapatához: professzionális járműátvezetés és prémium logisztika Németországban.`,kulcsszavak:`karrier, sofőr, járműátvezetés, Juliette Logistique, Németország`},animacioCim1:`Csatlakoznál hozzánk?`,animacioCim2:`Ismerd meg a munkánkat.`,allomasCim:`Járműátvezető / sofőr Juliette Logistique`,bevezeto:`A Juliette Logistique professzionális gépjármű-átvezetéssel és járműlogisztikával foglalkozik egész Németország területén. Ha megbízhatóan, pontosan és gondosan dolgozol, és fontos számodra a járművek biztonságos kezelése, nálunk a helyed.`,feladatokCim:`Mit fogsz csinálni?`,feladatok:[`Gépjárművek átvétele, átvezetése és átadása a megbízó által megadott feltételek szerint`,`Járművek saját keréken történő szállítása Németország-szerte`,`Átvételkori és átadáskori állapotellenőrzés, dokumentálás`,`Szükség esetén fotódokumentáció készítése`,`Kilométeróra-állás, járműadatok és meglévő sérülések rögzítése`,`Kulcsok és járműdokumentumok gondos kezelése`,`Megbízások határidőre történő teljesítése`,`Digitális megbízáskezelés és státuszjelentés támogatása`],elvarasokCim:`Kit keresünk?`,elvarasok:[`Érvényes B jogosítvány (BE előny)`,`Megbízható, precíz, ügyfélközpontú hozzáállás`,`Tiszta előélet és gondos járműkezelés`,`Rugalmasság regionális és országos útvonalakra`,`Alapszintű német és/vagy angol kommunikáció`],kinalunkCim:`Mit kínálunk?`,kinalunk:[`Változatos, felelősségteljes munka prémium járműlogisztikában`,`Átlátható folyamatok és digitális megbízáskezelés`,`Megbízható szakmai közeg: pontosság, biztonság, gondosság`],cta:`Csatlakoznál hozzánk?`},er={seo:{cim:`Careers | Juliette Logistique`,leiras:`Join the Juliette Logistique team: professional vehicle transfers and premium logistics across Germany.`,kulcsszavak:`careers, driver, vehicle transfer, Juliette Logistique, Germany`},animacioCim1:`Would you like to join us?`,animacioCim2:`Discover what we do.`,allomasCim:`Vehicle transfer driver — Juliette Logistique`,bevezeto:`Juliette Logistique provides professional vehicle transfers and automotive logistics throughout Germany. If you work reliably, precisely and carefully, and vehicle safety matters to you, we would like to hear from you.`,feladatokCim:`What will you do?`,feladatok:[`Pick up, transfer and hand over vehicles according to the client’s requirements`,`Transport vehicles on their own wheels across Germany`,`Condition checks and documentation at pickup and delivery`,`Photo documentation when required`,`Record mileage, vehicle data and existing damage`,`Handle keys and vehicle documents with care`,`Complete assignments on time`,`Support digital job management and status reporting`],elvarasokCim:`Who we are looking for`,elvarasok:[`Valid category B driving licence (BE is an advantage)`,`Reliable, precise, customer-focused attitude`,`Clean record and careful vehicle handling`,`Flexibility for regional and nationwide routes`,`Basic German and/or English communication`],kinalunkCim:`What we offer`,kinalunk:[`Varied, responsible work in premium vehicle logistics`,`Transparent processes and digital job management`,`A professional environment built on punctuality, safety and care`],cta:`Apply now`},tr={seo:{cim:`Karriere | Juliette Logistique`,leiras:`Werden Sie Teil von Juliette Logistique: professionelle Fahrzeugüberführungen und Premium-Logistik in ganz Deutschland.`,kulcsszavak:`Karriere, Fahrer, Fahrzeugüberführung, Juliette Logistique, Deutschland`},animacioCim1:`Möchten Sie zu uns kommen?`,animacioCim2:`Lernen Sie unsere Arbeit kennen.`,allomasCim:`Fahrzeugüberführer / Fahrer — Juliette Logistique`,bevezeto:`Juliette Logistique ist auf professionelle Fahrzeugüberführungen und Fahrzeuglogistik in ganz Deutschland spezialisiert. Wenn Sie zuverlässig, präzise und sorgfältig arbeiten und Ihnen der sichere Umgang mit Fahrzeugen wichtig ist, sind Sie bei uns richtig.`,feladatokCim:`Was werden Sie tun?`,feladatok:[`Fahrzeuge gemäß den Vorgaben des Auftraggebers übernehmen, überführen und übergeben`,`Fahrzeuge auf eigenen Rädern deutschlandweit transportieren`,`Zustandsprüfung und Dokumentation bei Übernahme und Übergabe`,`Fotodokumentation bei Bedarf`,`Kilometerstand, Fahrzeugdaten und bestehende Schäden erfassen`,`Schlüssel und Fahrzeugpapiere sorgfältig handhaben`,`Aufträge fristgerecht erledigen`,`Digitale Auftragsverwaltung und Statusmeldungen unterstützen`],elvarasokCim:`Wen wir suchen`,elvarasok:[`Gültiger Führerschein Klasse B (BE von Vorteil)`,`Zuverlässige, präzise und kundenorientierte Arbeitsweise`,`Einwandfreier Leumund und sorgfältiger Fahrzeugumgang`,`Flexibilität für regionale und bundesweite Strecken`,`Deutsch und/oder Englisch auf Grundniveau`],kinalunkCim:`Was wir bieten`,kinalunk:[`Abwechslungsreiche, verantwortungsvolle Tätigkeit in der Premium-Fahrzeuglogistik`,`Transparente Abläufe und digitale Auftragsverwaltung`,`Ein verlässliches Team: Pünktlichkeit, Sicherheit, Sorgfalt`],cta:`Jetzt bewerben`},nr=`Egyéb`,rr=[`Németország`,`Magyarország`,`Ausztria`,`Lengyelország`,`Csehország`,`Szlovákia`,`Románia`,`Hollandia`,`Belgium`,`Franciaország`,`Egyéb`],ir=[`Igen`,`Nem`],ar=[`Kevesebb mint 1 év`,`1–2 év`,`3–5 év`,`Több mint 5 év`],or=[`Nincs`,`1–2 év`,`3–5 év`,`Több mint 5 év`],sr=[`Személyszállítás`,`Fahrzeugüberführung / autóátadás`,`VIP- vagy luxus személyszállítás`,`Autókölcsönző`,`Taxi`,`Futár / kiszállítás`,nr],cr=[`BMW`,`Mercedes-Benz`,`Audi`,`Porsche`,`Bentley`,`Lamborghini`,`Ferrari`,`Range Rover`,nr],lr=[`Alkalmanként`,`Rendszeresen`,`Naponta`],ur=[`Azonnal`,`1 héten belül`,`2 héten belül`,`1 hónapon belül`,`Később`],dr=[`Csak a lakóhelyem közelében`,`Németországon belül rugalmas vagyok`,`Egész Németországban vállalok munkát`],fr=[`B`,`BE`,`C`,nr],pr=[`Igen`,`Nem`,`Beszerzés alatt`],mr=[`Egyáltalán nem`,`Alapszint`,`Kommunikációs szint`,`Jó`,`Anyanyelvi szint`],hr=[`Igen`,`Nem`,`Esetenként`],gr=[`2–3 nap`,`4 nap`,`5 nap`,`6 vagy több nap`];function _r(e,t){return e.map((e,n)=>({ertek:e,felirat:t[n]??e}))}function vr(e){let t=e.opciokFelirat;return{seo:e.seo,foCim:e.foCim,alcim:e.alcim,bevezeto:e.bevezeto,szekcio:e.szekcio,mezo:e.mezo,dokumentumokBevezeto:e.dokumentumokBevezeto,feltoltes:e.feltoltes,adatvedelemElotte:e.adatvedelemElotte,adatvedelemLink:e.adatvedelemLink,adatvedelemUtana:e.adatvedelemUtana,hozzajarulas:e.hozzajarulas,gombKuldes:e.gombKuldes,gombKuldesFut:e.gombKuldesFut,gombKepFeldolgozas:e.gombKepFeldolgozas,osszesitoHiba:e.osszesitoHiba,osszesitoHibaDarab:e.osszesitoHibaDarab,popupCim:e.popupCim,popupSzoveg:e.popupSzoveg,popupZar:e.popupZar,valasszon:e.valasszon,egyebPlaceholder:e.egyebPlaceholder,egyebAria:e.egyebAria,feltoltesGomb:e.feltoltesGomb,hibak:e.hibak,egyebErtek:nr,opciok:{orszagok:_r(rr,t.orszagok),igenNem:_r(ir,t.igenNem),bJogositvanyEve:_r(ar,t.bJogositvanyEve),professzionalisEv:_r(or,t.professzionalisEv),korabbiTerulet:_r(sr,t.korabbiTerulet),premiumMarkak:_r(cr,t.premiumMarkak),premiumGyakorisag:_r(lr,t.premiumGyakorisag),munkabaAllas:_r(ur,t.munkabaAllas),rugalmassag:_r(dr,t.rugalmassag),jogositvanyKategoria:_r(fr,t.jogositvanyKategoria),erkolesi:_r(pr,t.erkolesi),nyelvSzint:_r(mr,t.nyelvSzint),hetvege:_r(hr,t.hetvege),hetiNapok:_r(gr,t.hetiNapok)}}}var yr={seo:{cim:`Sofőr jelentkezés | Juliette Logistique`,leiras:`Jelentkezzen prémium járműátvezető pozícióra a Juliette Logistique csapatában Németországban.`,kulcsszavak:`sofőr jelentkezés, Juliette Logistique, karrier, Németország`},foCim:`Sofőr jelentkezési űrlap`,alcim:`Németországi prémium- és luxusautó-vezető`,bevezeto:`Kérjük, töltse ki az alábbi űrlapot a lehető legpontosabban. A jelentkezés során megadott adatokat és dokumentumokat a kiválasztási folyamat során ellenőrizhetjük.`,szekcio:{szemelyes:`1. Személyes adatok`,vezetes:`2. Vezetési tapasztalat`,premium:`3. Prémium- és luxusautó-tapasztalat`,nemetorszag:`4. Németországi munkavégzés`,jogositvany:`5. Jogosítvány és vezetési előélet`,nyelv:`6. Nyelvtudás`,keszsegek:`7. Munkavégzéshez szükséges készségek`,feltetelek:`8. Munkavállalási feltételek`,szurok:`9. Fontos szűrőkérdések`,dokumentumok:`10. Dokumentumok feltöltése`,motivacio:`11. Motiváció`,kuldes:`12. Jelentkezés elküldése`},mezo:{teljesNev:`Teljes név`,szuletesiDatum:`Születési dátum`,telefon:`Telefonszám`,email:`E-mail-cím`,lakhely:`Lakóhely / irányítószám`,orszag:`Melyik országban él jelenleg?`,bJogositvanyEve:`Hány éve rendelkezik B kategóriás jogosítvánnyal?`,professzionalisEv:`Hány év professzionális vezetési tapasztalattal rendelkezik?`,soforkentNemetorszag:`Dolgozott már professzionális sofőrként Németországban?`,korabbiTerulet:`Milyen területen dolgozott korábban?`,premiumTapasztalat:`Vezetett már prémium vagy luxus kategóriájú járműveket?`,premiumMarkak:`Milyen prémium/luxus márkákkal rendelkezik tapasztalattal?`,premiumGyakorisag:`Milyen gyakran vezetett prémium vagy luxus járműveket?`,automataValto:`Van tapasztalata automata váltós, nagy teljesítményű járművek vezetésében?`,munkavallalasiJog:`Rendelkezik érvényes munkavállalási jogosultsággal Németországban?`,nemetorszagiCim:`Rendelkezik németországi lakcímmel?`,munkabaAllas:`Mikor tud munkába állni?`,rugalmassag:`Mennyire rugalmas a munkavégzés helyét illetően?`,jogositvanyKategoria:`Milyen kategóriájú jogosítvánnyal rendelkezik?`,jogositvanyErvenyes:`Érvényes jelenleg a jogosítványa?`,eltiltas:`Volt az elmúlt 5 évben vezetéstől eltiltása vagy súlyos közlekedési szabálysértése?`,erkolesi:`Rendelkezik Führungszeugnisszel / erkölcsi bizonyítvánnyal?`,nemetNyelv:`Milyen szinten beszél németül?`,angolNyelv:`Milyen szinten beszél angolul?`,okostelefon:`Rendelkezik okostelefonnal és mobilinternettel?`,navigacio:`Tudja használni a Google Maps vagy más navigációs alkalmazásokat?`,gpsKovetes:`Vállalja GPS-alapú munkakövetés és digitális munkarendszer használatát?`,hosszuUt:`Hajlandó 200–500 km-es utakat is vállalni?`,hetvege:`Vállal hétvégi munkavégzést?`,tobbnapos:`Vállal többnapos munkát Németországon belül?`,hetiNapok:`Hány napot tud hetente dolgozni?`,haromEvAktiv:`Van legalább 3 év aktív vezetési tapasztalata?`,haromEvProf:`Van legalább 3 év professzionális vezetési tapasztalata?`,premiumSzuro:`Van tapasztalata prémium vagy luxus járművek vezetésében?`,biztonsagosVezetes:`Biztonságosan és felelősségteljesen vezet nagy értékű járműveket?`,gondosKezeles:`Vállalja, hogy a rábízott járműveket kiemelt gondossággal kezeli?`,ellenorzesElfogadas:`Elfogadja, hogy a jelentkezés során vezetési tapasztalatát és dokumentumait ellenőrizhetjük?`,motivacio:`Miért szeretne Németországban prémium és luxusautókat vezetni?`,tapasztalatLeiras:`Kérjük, röviden mutassa be korábbi vezetési és szakmai tapasztalatait.`},dokumentumokBevezeto:`Kérjük, töltse fel az alábbi dokumentumokat.`,feltoltes:{szemelyiElolap:{cim:`Személyazonosító okmány – előlap`,leiras:`Személyi igazolvány vagy útlevél előlapjának feltöltése`},szemelyiHatlap:{cim:`Személyazonosító okmány – hátlap`,leiras:`Személyi igazolvány hátlapjának feltöltése (útlevélnél a második releváns oldal)`},jogositvanyElolap:{cim:`Jogosítvány – előlap`,leiras:`Érvényes vezetői engedély előlapjának feltöltése`},jogositvanyHatlap:{cim:`Jogosítvány – hátlap`,leiras:`Érvényes vezetői engedély hátlapjának feltöltése`},fuehrungszeugnis:{cim:`Führungszeugnis / erkölcsi bizonyítvány`,leiras:`Führungszeugnis feltöltése`,seged:`Ha még nincs, a jelentkezés során jelezze.`},oneletrajz:{cim:`Önéletrajz`,leiras:`CV / Lebenslauf feltöltése`},profilkep:{cim:`Profilkép`,leiras:`Aktuális profilkép feltöltése`,seged:`Csak kép. Nagy fájl esetén igazolvány-méretre optimalizáljuk.`},referencia:{cim:`Referencia / munkáltatói igazolás`,leiras:`Korábbi munkáltatói referencia vagy munkaviszony igazolása`}},adatvedelemElotte:`Elolvastam és elfogadom az`,adatvedelemLink:`adatvédelmi tájékoztatót`,adatvedelemUtana:`.`,hozzajarulas:`Hozzájárulok ahhoz, hogy a jelentkezésemben megadott adatokat és feltöltött dokumentumokat a kiválasztási folyamat során ellenőrizzék.`,gombKuldes:`Jelentkezés elküldése`,gombKuldesFut:`Küldés…`,gombKepFeldolgozas:`Kép feldolgozása…`,osszesitoHiba:`Kérjük, töltse ki az összes kötelező mezőt és töltse fel a dokumentumokat a jelentkezés elküldéséhez.`,osszesitoHibaDarab:`({n} hiányzó adat)`,popupCim:`Köszönjük jelentkezését!`,popupSzoveg:`Sikeres előszűrés esetén felvesszük Önnel a kapcsolatot a további lépésekkel kapcsolatban.`,popupZar:`Bezárás`,valasszon:`Válasszon…`,egyebPlaceholder:`Kérjük, részletezze`,egyebAria:`Egyéb megnevezése`,feltoltesGomb:`Dokumentum feltöltése`,hibak:{kotelezo:`Ez a mező kötelező.`,valasztas:`Kérjük, válasszon egy lehetőséget.`,legalabbEgy:`Válasszon legalább egy lehetőséget.`,egyeb:`Kérjük, részletezze az „Egyéb” választ.`,fajl:`Dokumentum feltöltése kötelező.`,email:`Érvényes e-mail-címet adjon meg.`,tizennyolcEv:`A jelentkezéshez legalább 18 évesnek kell lennie (a 18. életév betöltése kötelező).`,adatvedelem:`Az adatvédelmi tájékoztató elfogadása kötelező.`,hozzajarulas:`A hozzájárulás megadása kötelező.`,fajlPdf:`Csak PDF formátum engedélyezett.`,fajlKep:`Csak képfájl (JPG, PNG, WebP) engedélyezett.`,fajlKepVagyPdf:`Csak kép (JPG, PNG, WebP) vagy PDF engedélyezett.`,profilkepFeldolgozas:`A profilkép feldolgozása sikertelen.`,kuldesSikertelen:`A jelentkezés elküldése sikertelen. Próbálja újra.`},opciokFelirat:{orszagok:[`Németország`,`Magyarország`,`Ausztria`,`Lengyelország`,`Csehország`,`Szlovákia`,`Románia`,`Hollandia`,`Belgium`,`Franciaország`,nr],igenNem:[`Igen`,`Nem`],bJogositvanyEve:[`Kevesebb mint 1 év`,`1–2 év`,`3–5 év`,`Több mint 5 év`],professzionalisEv:[`Nincs`,`1–2 év`,`3–5 év`,`Több mint 5 év`],korabbiTerulet:[`Személyszállítás`,`Fahrzeugüberführung / autóátadás`,`VIP- vagy luxus személyszállítás`,`Autókölcsönző`,`Taxi`,`Futár / kiszállítás`,nr],premiumMarkak:[`BMW`,`Mercedes-Benz`,`Audi`,`Porsche`,`Bentley`,`Lamborghini`,`Ferrari`,`Range Rover`,nr],premiumGyakorisag:[`Alkalmanként`,`Rendszeresen`,`Naponta`],munkabaAllas:[`Azonnal`,`1 héten belül`,`2 héten belül`,`1 hónapon belül`,`Később`],rugalmassag:[`Csak a lakóhelyem közelében`,`Németországon belül rugalmas vagyok`,`Egész Németországban vállalok munkát`],jogositvanyKategoria:[`B`,`BE`,`C`,nr],erkolesi:[`Igen`,`Nem`,`Beszerzés alatt`],nyelvSzint:[`Egyáltalán nem`,`Alapszint`,`Kommunikációs szint`,`Jó`,`Anyanyelvi szint`],hetvege:[`Igen`,`Nem`,`Esetenként`],hetiNapok:[`2–3 nap`,`4 nap`,`5 nap`,`6 vagy több nap`]}},br={hu:vr(yr),en:vr({seo:{cim:`Driver application | Juliette Logistique`,leiras:`Apply for a premium vehicle transfer driver role with Juliette Logistique in Germany.`,kulcsszavak:`driver application, Juliette Logistique, careers, Germany`},foCim:`Driver application form`,alcim:`Premium and luxury vehicle driver in Germany`,bevezeto:`Please complete this form as accurately as possible. We may verify the information and documents you provide during the selection process.`,szekcio:{szemelyes:`1. Personal details`,vezetes:`2. Driving experience`,premium:`3. Premium and luxury vehicle experience`,nemetorszag:`4. Working in Germany`,jogositvany:`5. Licence and driving history`,nyelv:`6. Languages`,keszsegek:`7. Skills required for the role`,feltetelek:`8. Employment conditions`,szurok:`9. Key screening questions`,dokumentumok:`10. Document upload`,motivacio:`11. Motivation`,kuldes:`12. Submit application`},mezo:{teljesNev:`Full name`,szuletesiDatum:`Date of birth`,telefon:`Phone number`,email:`Email address`,lakhely:`City / postal code`,orszag:`Which country do you currently live in?`,bJogositvanyEve:`How long have you held a category B licence?`,professzionalisEv:`Years of professional driving experience`,soforkentNemetorszag:`Have you worked as a professional driver in Germany?`,korabbiTerulet:`In which areas have you worked before?`,premiumTapasztalat:`Have you driven premium or luxury vehicles?`,premiumMarkak:`Which premium/luxury brands do you have experience with?`,premiumGyakorisag:`How often have you driven premium or luxury vehicles?`,automataValto:`Experience with automatic, high-performance vehicles?`,munkavallalasiJog:`Do you have valid work authorisation in Germany?`,nemetorszagiCim:`Do you have a registered address in Germany?`,munkabaAllas:`When can you start?`,rugalmassag:`How flexible are you regarding work locations?`,jogositvanyKategoria:`Which licence categories do you hold?`,jogositvanyErvenyes:`Is your licence currently valid?`,eltiltas:`Any driving ban or serious traffic offence in the last 5 years?`,erkolesi:`Do you have a police certificate of good conduct (Führungszeugnis)?`,nemetNyelv:`German language level`,angolNyelv:`English language level`,okostelefon:`Do you have a smartphone with mobile data?`,navigacio:`Can you use Google Maps or other navigation apps?`,gpsKovetes:`Will you use GPS tracking and our digital work system?`,hosszuUt:`Willing to take trips of 200–500 km?`,hetvege:`Available to work weekends?`,tobbnapos:`Available for multi-day assignments within Germany?`,hetiNapok:`How many days per week can you work?`,haromEvAktiv:`At least 3 years of active driving experience?`,haromEvProf:`At least 3 years of professional driving experience?`,premiumSzuro:`Experience driving premium or luxury vehicles?`,biztonsagosVezetes:`Do you drive high-value vehicles safely and responsibly?`,gondosKezeles:`Will you handle entrusted vehicles with exceptional care?`,ellenorzesElfogadas:`Do you agree that we may verify your experience and documents?`,motivacio:`Why do you want to drive premium and luxury cars in Germany?`,tapasztalatLeiras:`Briefly describe your driving and professional background.`},dokumentumokBevezeto:`Please upload the following documents.`,feltoltes:{szemelyiElolap:{cim:`ID document – front`,leiras:`Upload the front of your ID card or passport`},szemelyiHatlap:{cim:`ID document – back`,leiras:`Upload the back of your ID card (or the second relevant passport page)`},jogositvanyElolap:{cim:`Driving licence – front`,leiras:`Upload the front of your valid driving licence`},jogositvanyHatlap:{cim:`Driving licence – back`,leiras:`Upload the back of your valid driving licence`},fuehrungszeugnis:{cim:`Police certificate / Führungszeugnis`,leiras:`Upload your certificate`,seged:`If you do not have it yet, please indicate this in the form.`},oneletrajz:{cim:`CV / résumé`,leiras:`Upload CV / Lebenslauf`},profilkep:{cim:`Profile photo`,leiras:`Upload a current profile photo`,seged:`Image only. Large files are resized to ID photo dimensions.`},referencia:{cim:`Reference / employment certificate`,leiras:`Reference from a previous employer or proof of employment`}},adatvedelemElotte:`I have read and accept the`,adatvedelemLink:`privacy policy`,adatvedelemUtana:`.`,hozzajarulas:`I consent to verification of my data and uploaded documents during the selection process.`,gombKuldes:`Submit application`,gombKuldesFut:`Sending…`,gombKepFeldolgozas:`Processing image…`,osszesitoHiba:`Please complete all required fields and upload documents before submitting.`,osszesitoHibaDarab:`({n} missing items)`,popupCim:`Thank you for your application!`,popupSzoveg:`If you pass the initial screening, we will contact you about the next steps.`,popupZar:`Close`,valasszon:`Select…`,egyebPlaceholder:`Please specify`,egyebAria:`Other — please specify`,feltoltesGomb:`Upload document`,hibak:{kotelezo:`This field is required.`,valasztas:`Please select an option.`,legalabbEgy:`Please select at least one option.`,egyeb:`Please specify your “Other” answer.`,fajl:`Document upload is required.`,email:`Please enter a valid email address.`,tizennyolcEv:`You must be at least 18 years old to apply.`,adatvedelem:`You must accept the privacy policy.`,hozzajarulas:`Consent is required.`,fajlPdf:`Only PDF format is allowed.`,fajlKep:`Only image files (JPG, PNG, WebP) are allowed.`,fajlKepVagyPdf:`Only image (JPG, PNG, WebP) or PDF is allowed.`,profilkepFeldolgozas:`Profile photo processing failed.`,kuldesSikertelen:`Submission failed. Please try again.`},opciokFelirat:{orszagok:[`Germany`,`Hungary`,`Austria`,`Poland`,`Czech Republic`,`Slovakia`,`Romania`,`Netherlands`,`Belgium`,`France`,`Other`],igenNem:[`Yes`,`No`],bJogositvanyEve:[`Less than 1 year`,`1–2 years`,`3–5 years`,`More than 5 years`],professzionalisEv:[`None`,`1–2 years`,`3–5 years`,`More than 5 years`],korabbiTerulet:[`Passenger transport`,`Vehicle transfer / handover`,`VIP or luxury passenger transport`,`Car rental`,`Taxi`,`Courier / delivery`,`Other`],premiumMarkak:[`BMW`,`Mercedes-Benz`,`Audi`,`Porsche`,`Bentley`,`Lamborghini`,`Ferrari`,`Range Rover`,`Other`],premiumGyakorisag:[`Occasionally`,`Regularly`,`Daily`],munkabaAllas:[`Immediately`,`Within 1 week`,`Within 2 weeks`,`Within 1 month`,`Later`],rugalmassag:[`Near my home only`,`Flexible within Germany`,`Nationwide in Germany`],jogositvanyKategoria:[`B`,`BE`,`C`,`Other`],erkolesi:[`Yes`,`No`,`In progress`],nyelvSzint:[`None`,`Basic`,`Conversational`,`Good`,`Native`],hetvege:[`Yes`,`No`,`Occasionally`],hetiNapok:[`2–3 days`,`4 days`,`5 days`,`6 or more days`]}}),de:vr({seo:{cim:`Fahrerbewerbung | Juliette Logistique`,leiras:`Bewerben Sie sich als Premium-Fahrzeugüberführer bei Juliette Logistique in Deutschland.`,kulcsszavak:`Fahrerbewerbung, Juliette Logistique, Karriere, Deutschland`},foCim:`Bewerbungsformular für Fahrer`,alcim:`Premium- und Luxusfahrzeugführer in Deutschland`,bevezeto:`Bitte füllen Sie das Formular so genau wie möglich aus. Die angegebenen Daten und Dokumente können im Auswahlprozess überprüft werden.`,szekcio:{szemelyes:`1. Persönliche Daten`,vezetes:`2. Fahrerfahrung`,premium:`3. Premium- und Luxusfahrzeug-Erfahrung`,nemetorszag:`4. Arbeit in Deutschland`,jogositvany:`5. Führerschein und Fahrvorgeschichte`,nyelv:`6. Sprachkenntnisse`,keszsegek:`7. Erforderliche Fähigkeiten`,feltetelek:`8. Arbeitsbedingungen`,szurok:`9. Wichtige Auswahlfragen`,dokumentumok:`10. Dokumente hochladen`,motivacio:`11. Motivation`,kuldes:`12. Bewerbung absenden`},mezo:{teljesNev:`Vollständiger Name`,szuletesiDatum:`Geburtsdatum`,telefon:`Telefonnummer`,email:`E-Mail-Adresse`,lakhely:`Wohnort / Postleitzahl`,orszag:`In welchem Land leben Sie derzeit?`,bJogositvanyEve:`Seit wann besitzen Sie den Führerschein Klasse B?`,professzionalisEv:`Jahre professionelle Fahrerfahrung`,soforkentNemetorszag:`Haben Sie bereits als Profifahrer in Deutschland gearbeitet?`,korabbiTerulet:`In welchen Bereichen haben Sie zuvor gearbeitet?`,premiumTapasztalat:`Haben Sie Premium- oder Luxusfahrzeuge gefahren?`,premiumMarkak:`Mit welchen Premium-/Luxusmarken haben Sie Erfahrung?`,premiumGyakorisag:`Wie oft haben Sie Premium- oder Luxusfahrzeuge gefahren?`,automataValto:`Erfahrung mit Automatik und leistungsstarken Fahrzeugen?`,munkavallalasiJog:`Haben Sie eine gültige Arbeitserlaubnis in Deutschland?`,nemetorszagiCim:`Haben Sie eine Meldeadresse in Deutschland?`,munkabaAllas:`Wann können Sie anfangen?`,rugalmassag:`Wie flexibel sind Sie beim Einsatzort?`,jogositvanyKategoria:`Welche Führerscheinklassen besitzen Sie?`,jogositvanyErvenyes:`Ist Ihr Führerschein derzeit gültig?`,eltiltas:`Fahrverbot oder schwere Verkehrsverstöße in den letzten 5 Jahren?`,erkolesi:`Besitzen Sie ein Führungszeugnis?`,nemetNyelv:`Deutschkenntnisse`,angolNyelv:`Englischkenntnisse`,okostelefon:`Smartphone mit mobilem Internet?`,navigacio:`Können Sie Google Maps oder andere Navigations-Apps nutzen?`,gpsKovetes:`GPS-Arbeitsverfolgung und digitales System akzeptiert?`,hosszuUt:`Bereit für Fahrten von 200–500 km?`,hetvege:`Wochenendarbeit möglich?`,tobbnapos:`Mehrtägige Einsätze innerhalb Deutschlands?`,hetiNapok:`Wie viele Tage pro Woche können Sie arbeiten?`,haromEvAktiv:`Mindestens 3 Jahre aktive Fahrerfahrung?`,haromEvProf:`Mindestens 3 Jahre professionelle Fahrerfahrung?`,premiumSzuro:`Erfahrung mit Premium- oder Luxusfahrzeugen?`,biztonsagosVezetes:`Fahren Sie hochwertige Fahrzeuge sicher und verantwortungsvoll?`,gondosKezeles:`Behandeln Sie anvertraute Fahrzeuge mit besonderer Sorgfalt?`,ellenorzesElfogadas:`Stimmen Sie der Überprüfung Ihrer Angaben und Dokumente zu?`,motivacio:`Warum möchten Sie Premium- und Luxusfahrzeuge in Deutschland fahren?`,tapasztalatLeiras:`Kurze Darstellung Ihrer Fahr- und Berufserfahrung.`},dokumentumokBevezeto:`Bitte laden Sie die folgenden Dokumente hoch.`,feltoltes:{szemelyiElolap:{cim:`Ausweisdokument – Vorderseite`,leiras:`Vorderseite von Personalausweis oder Reisepass hochladen`},szemelyiHatlap:{cim:`Ausweisdokument – Rückseite`,leiras:`Rückseite des Personalausweises hochladen (beim Reisepass die zweite relevante Seite)`},jogositvanyElolap:{cim:`Führerschein – Vorderseite`,leiras:`Vorderseite des gültigen Führerscheins hochladen`},jogositvanyHatlap:{cim:`Führerschein – Rückseite`,leiras:`Rückseite des gültigen Führerscheins hochladen`},fuehrungszeugnis:{cim:`Führungszeugnis`,leiras:`Führungszeugnis hochladen`,seged:`Falls noch nicht vorhanden, bitte im Formular angeben.`},oneletrajz:{cim:`Lebenslauf`,leiras:`CV / Lebenslauf hochladen`},profilkep:{cim:`Profilfoto`,leiras:`Aktuelles Profilfoto hochladen`,seged:`Nur Bild. Große Dateien werden auf Ausweisgröße optimiert.`},referencia:{cim:`Referenz / Arbeitgeberbescheinigung`,leiras:`Referenz des vorherigen Arbeitgebers oder Beschäftigungsnachweis`}},adatvedelemElotte:`Ich habe die`,adatvedelemLink:`Datenschutzerklärung`,adatvedelemUtana:` gelesen und akzeptiere sie.`,hozzajarulas:`Ich willige ein, dass meine Daten und hochgeladenen Dokumente im Auswahlprozess überprüft werden.`,gombKuldes:`Bewerbung absenden`,gombKuldesFut:`Wird gesendet…`,gombKepFeldolgozas:`Bild wird verarbeitet…`,osszesitoHiba:`Bitte füllen Sie alle Pflichtfelder aus und laden Sie die Dokumente hoch.`,osszesitoHibaDarab:`({n} fehlende Angaben)`,popupCim:`Vielen Dank für Ihre Bewerbung!`,popupSzoveg:`Bei erfolgreicher Vorauswahl kontaktieren wir Sie zu den nächsten Schritten.`,popupZar:`Schließen`,valasszon:`Bitte wählen…`,egyebPlaceholder:`Bitte angeben`,egyebAria:`Sonstiges — bitte angeben`,feltoltesGomb:`Dokument hochladen`,hibak:{kotelezo:`Dieses Feld ist erforderlich.`,valasztas:`Bitte wählen Sie eine Option.`,legalabbEgy:`Bitte wählen Sie mindestens eine Option.`,egyeb:`Bitte beschreiben Sie Ihre Antwort „Sonstiges“.`,fajl:`Das Hochladen eines Dokuments ist erforderlich.`,email:`Bitte geben Sie eine gültige E-Mail-Adresse ein.`,tizennyolcEv:`Für die Bewerbung müssen Sie mindestens 18 Jahre alt sein.`,adatvedelem:`Die Datenschutzerklärung muss akzeptiert werden.`,hozzajarulas:`Die Einwilligung ist erforderlich.`,fajlPdf:`Nur PDF-Format ist erlaubt.`,fajlKep:`Nur Bilddateien (JPG, PNG, WebP) sind erlaubt.`,fajlKepVagyPdf:`Nur Bild (JPG, PNG, WebP) oder PDF ist erlaubt.`,profilkepFeldolgozas:`Die Profilbild-Verarbeitung ist fehlgeschlagen.`,kuldesSikertelen:`Die Bewerbung konnte nicht gesendet werden. Bitte erneut versuchen.`},opciokFelirat:{orszagok:[`Deutschland`,`Ungarn`,`Österreich`,`Polen`,`Tschechien`,`Slowakei`,`Rumänien`,`Niederlande`,`Belgien`,`Frankreich`,`Sonstiges`],igenNem:[`Ja`,`Nein`],bJogositvanyEve:[`Weniger als 1 Jahr`,`1–2 Jahre`,`3–5 Jahre`,`Mehr als 5 Jahre`],professzionalisEv:[`Keine`,`1–2 Jahre`,`3–5 Jahre`,`Mehr als 5 Jahre`],korabbiTerulet:[`Personenbeförderung`,`Fahrzeugüberführung / Fahrzeugübergabe`,`VIP- oder Luxusbeförderung`,`Autovermietung`,`Taxi`,`Kurier / Zustellung`,`Sonstiges`],premiumMarkak:[`BMW`,`Mercedes-Benz`,`Audi`,`Porsche`,`Bentley`,`Lamborghini`,`Ferrari`,`Range Rover`,`Sonstiges`],premiumGyakorisag:[`Gelegentlich`,`Regelmäßig`,`Täglich`],munkabaAllas:[`Sofort`,`Innerhalb 1 Woche`,`Innerhalb 2 Wochen`,`Innerhalb 1 Monat`,`Später`],rugalmassag:[`Nur in meiner Nähe`,`Flexibel in Deutschland`,`Bundesweit in Deutschland`],jogositvanyKategoria:[`B`,`BE`,`C`,`Sonstiges`],erkolesi:[`Ja`,`Nein`,`In Beschaffung`],nyelvSzint:[`Gar nicht`,`Grundkenntnisse`,`Kommunikationsniveau`,`Gut`,`Muttersprache`],hetvege:[`Ja`,`Nein`,`Gelegentlich`],hetiNapok:[`2–3 Tage`,`4 Tage`,`5 Tage`,`6 oder mehr Tage`]}})},xr={seo:{cim:`Adatvédelmi tájékoztató | Juliette Logistique`,leiras:`Adatvédelmi tájékoztató a Juliette Logistique sofőr jelentkezési folyamatához: személyes adatok kezelése a toborzás során.`,kulcsszavak:`adatvédelem, adatvédelmi tájékoztató, sofőr jelentkezés, Juliette Logistique, GDPR`},foCim:`Adatvédelmi tájékoztató`,frissites:``,szekciok:[{cim:`1. Az adatkezelő`,bekezdesek:[`Az adatkezelő a Juliette Logistique (a továbbiakban: „Társaság”, „mi”). A jelentkezési űrlapon megadott személyes adatokat a munkaerő-toborzás és kiválasztás céljából kezeljük.`]},{cim:`2. A kezelt adatok köre`,bekezdesek:[`A jelentkezés során különösen az alábbi adatokat kezelhetjük:`],lista:[`azonosító és elérhetőségi adatok (név, születési dátum, telefon, e-mail, lakóhely)`,`szakmai és vezetési tapasztalatra vonatkozó adatok`,`jogosítványra, előéletre és nyelvtudásra vonatkozó információk`,`feltöltött dokumentumok (pl. személyazonosító okmány, jogosítvány, CV, referencia)`,`motivációs és szakmai bemutatkozó szövegek`]},{cim:`3. Az adatkezelés célja`,lista:[`jelentkezések fogadása és előszűrése`,`kapcsolatfelvétel a kiválasztási folyamat során`,`a megadott adatok és dokumentumok ellenőrzése`,`alkalmas jelöltek azonosítása sofőr / járműátvezető pozíciókra`]},{cim:`4. Az adatkezelés jogalapja`,bekezdesek:[`Az adatkezelés jogalapja a jelentkező hozzájárulása, valamint a Társaság jogos érdeke a megfelelő munkaerő kiválasztásához. Egyes ellenőrzések a munkaviszony létesítését megelőző lépésekhez szükségesek lehetnek.`]},{cim:`5. Adattárolás időtartama`,bekezdesek:[`A jelentkezési adatokat a kiválasztási folyamat idejéig, illetve a vonatkozó jogszabályok által megengedett ideig őrizzük. Sikertelen jelentkezés esetén az adatokat ésszerű időn belül töröljük vagy anonimizáljuk, kivéve, ha a jelentkező hosszabb megőrzéshez hozzájárult.`]},{cim:`6. Adattovábbítás és adatfeldolgozók`,bekezdesek:[`Adatait kizárólag a toborzáshoz szükséges mértékben ismerhetik meg a Társaság erre feljogosított munkatársai, illetve megbízott adatfeldolgozói (például tárhely- vagy e-mail-szolgáltató). Harmadik félnek marketing célból nem adjuk át az adatokat.`]},{cim:`7. Adatbiztonság`,bekezdesek:[`Megfelelő technikai és szervezési intézkedésekkel védjük a személyes adatokat a jogosulatlan hozzáférés, elvesztés, megváltoztatás vagy nyilvánosságra hozatal ellen.`]},{cim:`8. Az érintett jogai`,bekezdesek:[`Ön jogosult:`],lista:[`tájékoztatást kérni a személyes adatai kezeléséről`,`hozzáférést kérni az Önről tárolt adatokhoz`,`a pontatlan adatok helyesbítését kérni`,`bizonyos esetekben az adatok törlését vagy az adatkezelés korlátozását kérni`,`hozzájárulását bármikor visszavonni`,`panaszt tenni a felügyeleti hatóságnál`]},{cim:`9. Kapcsolat`,bekezdesek:[`Adatvédelmi kérdéseivel forduljon a Juliette Logistique kapcsolattartójához a weboldalon megadott elérhetőségeken. Ez a tájékoztató általános jellegű; a konkrét jogviszonyra vonatkozó részletek a mindenkori szerződéses és jogszabályi feltételek szerint alakulhatnak.`]}]},Sr={seo:{cim:`Privacy Policy | Juliette Logistique`,leiras:`Privacy notice for driver applications at Juliette Logistique: how we process personal data during recruitment and selection.`,kulcsszavak:`privacy policy, data protection, driver application, Juliette Logistique, GDPR`},foCim:`Privacy Policy`,frissites:``,szekciok:[{cim:`1. Data controller`,bekezdesek:[`The data controller is Juliette Logistique (hereinafter the “Company”, “we”). Personal data submitted via the application form is processed for recruitment and selection purposes.`]},{cim:`2. Categories of data processed`,bekezdesek:[`In particular, we may process the following data when you apply:`],lista:[`identification and contact details (name, date of birth, phone, email, address)`,`professional and driving experience`,`information on driving licence, background and language skills`,`uploaded documents (e.g. ID, driving licence, CV, references)`,`motivation and professional introduction texts`]},{cim:`3. Purposes of processing`,lista:[`receiving and pre-screening applications`,`contacting applicants during the selection process`,`verifying the information and documents provided`,`identifying suitable candidates for driver / vehicle transfer positions`]},{cim:`4. Legal basis`,bekezdesek:[`Processing is based on the applicant’s consent and on the Company’s legitimate interest in selecting suitable staff. Certain checks may be necessary as pre-contractual steps before employment.`]},{cim:`5. Retention period`,bekezdesek:[`We retain application data for the duration of the selection process and for as long as permitted by applicable law. If your application is unsuccessful, we delete or anonymise the data within a reasonable period, unless you have consented to longer retention.`]},{cim:`6. Disclosure and processors`,bekezdesek:[`Your data is accessible only to authorised Company staff and appointed processors (e.g. hosting or email providers) to the extent required for recruitment. We do not share your data with third parties for marketing purposes.`]},{cim:`7. Data security`,bekezdesek:[`We protect personal data with appropriate technical and organisational measures against unauthorised access, loss, alteration or disclosure.`]},{cim:`8. Your rights`,bekezdesek:[`You have the right to:`],lista:[`request information about how your personal data is processed`,`obtain access to the data we hold about you`,`request correction of inaccurate data`,`in certain cases, request erasure or restriction of processing`,`withdraw your consent at any time`,`lodge a complaint with a supervisory authority`]},{cim:`9. Contact`,bekezdesek:[`For privacy-related questions, please contact Juliette Logistique using the contact details published on this website. This notice is of a general nature; details relating to a specific legal relationship may depend on the applicable contractual and statutory terms.`]}]},Cr={seo:{cim:`Datenschutzerklärung | Juliette Logistique`,leiras:`Datenschutzhinweis für Fahrerbewerbungen bei Juliette Logistique: Verarbeitung personenbezogener Daten im Recruiting.`,kulcsszavak:`Datenschutz, Datenschutzerklärung, Fahrerbewerbung, Juliette Logistique, DSGVO`},foCim:`Datenschutzerklärung`,frissites:``,szekciok:[{cim:`1. Verantwortlicher`,bekezdesek:[`Verantwortlicher ist Juliette Logistique (nachfolgend „Unternehmen“, „wir“). Die im Bewerbungsformular angegebenen personenbezogenen Daten verarbeiten wir zum Zweck der Personalgewinnung und -auswahl.`]},{cim:`2. Art der verarbeiteten Daten`,bekezdesek:[`Im Rahmen der Bewerbung können insbesondere folgende Daten verarbeitet werden:`],lista:[`Identitäts- und Kontaktdaten (Name, Geburtsdatum, Telefon, E-Mail, Wohnort)`,`Angaben zu beruflicher und Fahrerfahrung`,`Informationen zu Führerschein, Vorstrafenregister und Sprachkenntnissen`,`hochgeladene Unterlagen (z. B. Ausweis, Führerschein, Lebenslauf, Referenzen)`,`Motivations- und fachliche Vorstellungstexte`]},{cim:`3. Zwecke der Verarbeitung`,lista:[`Entgegennahme und Vorauswahl von Bewerbungen`,`Kontaktaufnahme im Auswahlprozess`,`Prüfung der angegebenen Daten und Unterlagen`,`Identifikation geeigneter Kandidaten für Fahrer- / Fahrzeugüberführungspositionen`]},{cim:`4. Rechtsgrundlage`,bekezdesek:[`Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung sowie des berechtigten Interesses des Unternehmens an der Auswahl geeigneten Personals. Einzelne Prüfungen können als vorvertragliche Maßnahmen vor Begründung eines Arbeitsverhältnisses erforderlich sein.`]},{cim:`5. Speicherdauer`,bekezdesek:[`Bewerbungsdaten speichern wir für die Dauer des Auswahlverfahrens und soweit gesetzlich zulässig. Bei einer Absage löschen oder anonymisieren wir die Daten innerhalb einer angemessenen Frist, sofern Sie nicht in eine längere Speicherung eingewilligt haben.`]},{cim:`6. Weitergabe und Auftragsverarbeiter`,bekezdesek:[`Ihre Daten sind nur befugten Mitarbeitern des Unternehmens sowie beauftragten Auftragsverarbeitern (z. B. Hosting- oder E-Mail-Dienstleister) im für die Personalgewinnung erforderlichen Umfang zugänglich. Eine Weitergabe zu Marketingzwecken an Dritte erfolgt nicht.`]},{cim:`7. Datensicherheit`,bekezdesek:[`Wir schützen personenbezogene Daten mit geeigneten technischen und organisatorischen Maßnahmen gegen unbefugten Zugriff, Verlust, Veränderung oder Offenlegung.`]},{cim:`8. Ihre Rechte`,bekezdesek:[`Sie haben das Recht:`],lista:[`Auskunft über die Verarbeitung Ihrer personenbezogenen Daten zu verlangen`,`Zugang zu den über Sie gespeicherten Daten zu erhalten`,`die Berichtigung unrichtiger Daten zu verlangen`,`in bestimmten Fällen die Löschung oder Einschränkung der Verarbeitung zu verlangen`,`Ihre Einwilligung jederzeit zu widerrufen`,`Beschwerde bei einer Aufsichtsbehörde einzureichen`]},{cim:`9. Kontakt`,bekezdesek:[`Bei datenschutzrechtlichen Fragen wenden Sie sich bitte an Juliette Logistique über die auf dieser Website angegebenen Kontaktdaten. Dieser Hinweis ist allgemein gehalten; Einzelheiten zu einem konkreten Rechtsverhältnis können sich nach den jeweils geltenden vertraglichen und gesetzlichen Vorgaben richten.`]}]},wr={hu:{bejelentkezes:`BEJELENTKEZÉS`,vezerlopult:`VEZÉRLŐPULT`,bejelentkezesAria:`Bejelentkezés a belső rendszerbe`,belepésCim:`BEJELENTKEZÉS`,belepesCim:`BEJELENTKEZÉS`,emailCimke:`E-mail-cím`,jelszoCimke:`Jelszó`,jelszoMutat:`Mutat`,jelszoElrejt:`Elrejt`,bejelentkezesGomb:`Bejelentkezés`,belepesGomb:`Bejelentkezés`,belepesFut:`Bejelentkezés…`,belepésHibaAlt:`Bejelentkezés sikertelen.`,belepesHibaAlt:`Bejelentkezés sikertelen.`,visszaNyilvanos:`Vissza a nyilvános oldalra`,vezerlopultCim:`VEZÉRLŐPULT`,menuNyit:`Menü`,menuBezar:`Bezárás`,navAria:`Belső navigáció`,aktualisMunka:`Aktuális munka`,aktualisMunkaCim:`Aktuális munka`,aktualisMunkaUres:`Itt jelenik meg a folyamatban lévő szállítás vagy feladat. A részletes nyilvántartás egy későbbi fejlesztési szakaszban érkezik.`,munkaKikuldve:`Kiküldve`,munkaKikuldes:`Kiküldés`,munkaAlapadatok:`Alapadatok`,munkaAlapadatokBezar:`Alapadatok elrejtése`,munkaAllapotKikuldve:`Kiküldve`,munkaAllapotFelveve:`Felvéve`,munkaAllapotUtban:`Úton`,munkaAllapotLeadva:`Leadva`,munkaAllapotKiszallitva:`Kiszállítva`,munkaKinek:`Kinek küldjem ki?`,munkaKliensValaszt:`Válasszon klienst`,munkaKikuldesMegse:`Mégse`,munkaKliensUres:`Nincs kiválasztható kliens.`,munkaKliensHiba:`A kliensek listája nem tölthető be.`,munkaReszletek:`Részletek`,munkaAutoFelvetele:`Autó felvétele`,fotoFekvo:`Forgassa a telefont fekvő helyzetbe. A rajz mutatja a szöget.`,fotoTeljes:`Csak a teljes, 22 képből álló sorozat számít dokumentáltnak.`,fotoKeszites:`Fotó készítése`,fotoVissza:`Vissza`,fotoHiba:`Csak képfájl fogadható el.`,fotoSerulesUjabb:`Újabb sérülés fotója`,fotoSerulesKesz:`Nincs több sérülés`,fotoSerulesVan:`A képen sérülés található.`,fotoSerulesKarika:`Húzza körbe a sérülést a képen.`,fotoSerulesTorles:`Utolsó karika törlése`,serulesekCim:`Sérülések`,serulesAtvetel:`Átvételkor`,serulesLeadas:`Leadáskor`,serulesNincs:`Nincs jelölt sérülés.`,fotoMegszakitas:`Megszakítás`,fotoUtiranyCim:`Útirány`,fotoUtiranyBevezeto:`A felvétel dokumentálva. Induljon a leadási állomásra.`,fotoLeadasFigyelmeztetes:`Leadáskor ugyanezt a 22 képet újra el kell készíteni.`,fotoLeadasCim:`Autóleadás fotózása`,fotoLeadasGomb:`Autó leadása`,fotoLeadasKeszCim:`Leadás dokumentálva`,fotoLeadasKeszSzoveg:`A leadási fotósorozat megvan. Adja át a kulcsot és a forgalmit a helyszíni munkatársnak.`,fotoUtiranyGomb:`Útirány`,fotoBezar:`Bezárás`,kerdoivCim:`Átvétel ellenőrzése`,kerdoivBevezeto:`A fotók előtt erősítse meg, hogy a kulcsokat, az okmányokat és minden egyebet hiánytalanul átvett.`,kerdoivKulcs:`A kulcsokat hiánytalanul átvettem.`,kerdoivOkmany:`A szükséges okmányokat hiánytalanul átvettem.`,kerdoivMinden:`Mindent hiánytalanul átvettem.`,kerdoivMegjegyzes:`Megjegyzés`,kerdoivMegjegyzesPlaceholder:`Írja le az észrevételeit.`,kerdoivTovabb:`Tovább a fotókhoz`,munkaMegbizo:`Megbízó`,munkaFelvétel:`Felvétel`,munkaLeadas:`Leadás`,munkaLegkesobb:`legkésőbb`,munkaTavolsag:`Távolság`,munkaMenetido:`Menetidő`,munkaDij:`Díj`,munkaDijMegjegyzes:`A díj a saját tengelyen végzett átvezetésre szól. A tankolást és az útdíjat bizonylattal térítjük.`,munkaJarmu:`Jármű`,munkaModell:`Modell`,munkaMarka:`Márka`,munkaTipus:`Típus`,munkaRendszam:`Rendszám`,munkaSzin:`Szín`,munkaGumiTipus:`Ismert gumi`,munkaIsmertSerulesek:`Ismert sérülések`,munkaHonnan:`Honnan`,munkaHova:`Hová`,munkaFelvetelTol:`Mikortól vehető fel`,munkaLeadasIg:`Mikor kell leadni`,munkaBovebbInfo:`Bővebb információ`,munkaBovebbBezar:`Kevesebb információ`,munkaUzemanyag:`Üzemanyag`,munkaValto:`Váltó`,munkaKategoria:`Kategória`,munkaCim:`Cím`,munkaNyitvatartas:`Nyitvatartás`,munkaTelefon:`Telefon`,munkaTerkepek:`Útvonal a térképen`,munkaTeendok:`Teendők`,munkaMegjegyzesek:`Megjegyzések`,munkaSajatTengely:`Saját tengelyen`,chat:`Chat`,chatCim:`Chat`,chatUres:`Még nincs üzenet. Írja meg az elsőt alul.`,chatOnlineCim:`Online`,chatOnlineAria:`Online felhasználók a chat szobában`,chatOn:`Ön`,chatUzenetPlaceholder:`Írjon üzenetet…`,chatKuldes:`Küldés`,chatAltalanos:`Általános`,chatSzobak:`Szobák`,chatPrivat:`Privát`,chatSzobaUj:`Új szoba`,chatSzobaNev:`Szoba neve`,chatSzobaTagok:`Tagok a szobában`,chatSzobaMent:`Szoba létrehozása`,chatSzobaTagMent:`Tagok mentése`,chatPrivatUj:`Új privát üzenet`,chatPrivatValaszt:`Válasszon felhasználót`,chatPrivatTorol:`Beszélgetés törlése`,chatPrivatTorolKerdes:`Törli ezt a privát beszélgetést?`,chatErtesitesUj:`Új privát üzenet érkezett`,chatMegse:`Mégse`,chatUzenetAria:`Üzenet`,sajatAdataim:`Saját adataim`,kijelentkezes:`Kijelentkezés`,udvozletCim:`Üdvözöljük`,udvozletSzoveg:`A vezérlőpult tartalma hamarosan bővül. Addig is kezelheti személyes adatait a bal oldali menüben.`,vezeteknev:`Vezetéknév`,keresztnev:`Keresztnév`,telefon:`Telefonszám`,szuletesiDatum:`Születési dátum (opcionális)`,orszag:`Ország`,iranyitoszam:`Irányítószám`,varos:`Város`,lakcim:`Lakcím (utca, házszám)`,mentesGomb:`Mentés`,mentesFut:`Mentés…`,mentesSiker:`Az adatok sikeresen mentve.`,mentesHiba:`A mentés sikertelen. Próbálja újra.`,tesztBelepesSegitseg:`Fejlesztői fiókok: kliens „teszt” / „teszt”, admin „admin” / „admin321”.`,szerepKliens:`Kliens`,szerepAdmin:`Admin`,adminJelentkezesek:`Jelentkezések`,adminTartalom:`Tartalom`,adminNaplo:`Napló`,adminSoforok:`Sofőrök`,fiokLetrehozas:`Fiók létrehozása`,fiokLetrehozva:`Fiók kész`,fiokJelszoCim:`Ideiglenes jelszó (csak most látható)`,fiokMasolas:`Másolás`,soforokCim:`Sofőrök`,soforokUres:`Még nincs sofőr fiók.`,soforReszletek:`Sofőr adatai`,soforAlapadatok:`Alapadatok`,soforSzallitasok:`Leszállított autók`,soforJelentes:`Jelentés`,soforVissza:`← Vissza a sofőrökhöz`,soforElvegzettDb:`Leszállított autók`,soforOsszKm:`Összes km`,munkaFulAktualis:`Aktuális munka`,munkaFulElvegzett:`Elvégzett munkák`,elvegzettUres:`Még nincs elvégzett munka.`,elvegzettNincsAktualis:`Jelenleg nincs folyamatban lévő munka.`,elvegzettSikerCim:`Feladat sikeresen teljesítve`,elvegzettSikerSzoveg:`Az autó leadása dokumentálva. A munka az elvégzett munkák közé került, az admin felületen is megjelenik.`,elvegzettSikerBezar:`Rendben`,elvegzettPdfGomb:`Teljes jelentés PDF`,elvegzettPdfFut:`PDF készítése…`,elvegzettPdfHiba:`A PDF letöltése sikertelen.`,elvegzettMentesHiba:`A munka mentése sikertelen. Próbálja újra.`,elvegzettSofor:`Sofőr`},en:{bejelentkezes:`SIGN IN`,vezerlopult:`DASHBOARD`,bejelentkezesAria:`Sign in to the internal portal`,belepésCim:`SIGN IN`,belepesCim:`SIGN IN`,emailCimke:`Email address`,jelszoCimke:`Password`,jelszoMutat:`Show`,jelszoElrejt:`Hide`,bejelentkezesGomb:`Sign in`,belepesGomb:`Sign in`,belepesFut:`Signing in…`,belepésHibaAlt:`Sign-in failed.`,belepesHibaAlt:`Sign-in failed.`,visszaNyilvanos:`Back to public site`,vezerlopultCim:`DASHBOARD`,menuNyit:`Menu`,menuBezar:`Close`,navAria:`Portal navigation`,aktualisMunka:`Current job`,aktualisMunkaCim:`Current job`,aktualisMunkaUres:`Your active transport or task will appear here. Detailed records will be added in a later release.`,munkaKikuldve:`Assigned`,munkaKikuldes:`Send`,munkaAlapadatok:`Basic data`,munkaAlapadatokBezar:`Hide basic data`,munkaAllapotKikuldve:`Dispatched`,munkaAllapotFelveve:`Picked up`,munkaAllapotUtban:`En route`,munkaAllapotLeadva:`Dropped off`,munkaAllapotKiszallitva:`Delivered`,munkaKinek:`Who should receive it?`,munkaKliensValaszt:`Choose a client`,munkaKikuldesMegse:`Cancel`,munkaKliensUres:`No client to choose.`,munkaKliensHiba:`The client list could not be loaded.`,munkaReszletek:`Details`,munkaAutoFelvetele:`Collect the car`,fotoFekvo:`Turn the phone to landscape. The drawing shows the angle.`,fotoTeljes:`Only the full series of 22 photos counts as documented.`,fotoKeszites:`Take photo`,fotoVissza:`Back`,fotoHiba:`Only an image file can be accepted.`,fotoSerulesUjabb:`Photo of another damage`,fotoSerulesKesz:`No more damage`,fotoSerulesVan:`This photo shows damage.`,fotoSerulesKarika:`Drag a circle around the damage on the photo.`,fotoSerulesTorles:`Remove the last circle`,serulesekCim:`Damage`,serulesAtvetel:`At collection`,serulesLeadas:`At delivery`,serulesNincs:`No damage marked.`,fotoMegszakitas:`Cancel`,fotoUtiranyCim:`Directions`,fotoUtiranyBevezeto:`Collection is documented. Drive to the delivery station.`,fotoLeadasFigyelmeztetes:`At delivery, the same 22 photos must be taken again.`,fotoLeadasCim:`Delivery photos`,fotoLeadasGomb:`Deliver the car`,fotoLeadasKeszCim:`Delivery documented`,fotoLeadasKeszSzoveg:`The delivery photo series is complete. Hand the key and registration to the station staff.`,fotoUtiranyGomb:`Directions`,fotoBezar:`Close`,kerdoivCim:`Collection check`,kerdoivBevezeto:`Before the photos, confirm that you received the keys, the documents and everything else in full.`,kerdoivKulcs:`I received the keys in full.`,kerdoivOkmany:`I received the required documents in full.`,kerdoivMinden:`I received everything in full.`,kerdoivMegjegyzes:`Note`,kerdoivMegjegyzesPlaceholder:`Write your observations.`,kerdoivTovabb:`Continue to the photos`,munkaMegbizo:`Client`,munkaFelvétel:`Collection`,munkaLeadas:`Delivery`,munkaLegkesobb:`by`,munkaTavolsag:`Distance`,munkaMenetido:`Drive time`,munkaDij:`Fee`,munkaDijMegjegyzes:`The fee covers driving the car on its own wheels. Fuel and tolls are reimbursed against receipts.`,munkaJarmu:`Vehicle`,munkaModell:`Model`,munkaMarka:`Brand`,munkaTipus:`Type`,munkaRendszam:`Registration`,munkaSzin:`Colour`,munkaGumiTipus:`Known tyres`,munkaIsmertSerulesek:`Known damage`,munkaHonnan:`From`,munkaHova:`To`,munkaFelvetelTol:`Available for pickup from`,munkaLeadasIg:`Must be delivered by`,munkaBovebbInfo:`More details`,munkaBovebbBezar:`Less details`,munkaUzemanyag:`Fuel`,munkaValto:`Gearbox`,munkaKategoria:`Category`,munkaCim:`Address`,munkaNyitvatartas:`Opening hours`,munkaTelefon:`Phone`,munkaTerkepek:`Route on the map`,munkaTeendok:`Tasks`,munkaMegjegyzesek:`Notes`,munkaSajatTengely:`Driven, not trailered`,chat:`Chat`,chatCim:`Chat`,chatUres:`No messages yet. Write the first one below.`,chatOnlineCim:`Online`,chatOnlineAria:`Users online in the chat room`,chatOn:`You`,chatUzenetPlaceholder:`Write a message…`,chatKuldes:`Send`,chatAltalanos:`General`,chatSzobak:`Rooms`,chatPrivat:`Private`,chatSzobaUj:`New room`,chatSzobaNev:`Room name`,chatSzobaTagok:`Members in the room`,chatSzobaMent:`Create room`,chatSzobaTagMent:`Save members`,chatPrivatUj:`New private message`,chatPrivatValaszt:`Choose a user`,chatPrivatTorol:`Delete conversation`,chatPrivatTorolKerdes:`Delete this private conversation?`,chatErtesitesUj:`New private message received`,chatMegse:`Cancel`,chatUzenetAria:`Message`,sajatAdataim:`My details`,kijelentkezes:`Sign out`,udvozletCim:`Welcome`,udvozletSzoveg:`More dashboard modules will appear here soon. You can manage your personal details from the side menu.`,vezeteknev:`Last name`,keresztnev:`First name`,telefon:`Phone number`,szuletesiDatum:`Date of birth (optional)`,orszag:`Country`,iranyitoszam:`Postal code`,varos:`City`,lakcim:`Street address`,mentesGomb:`Save`,mentesFut:`Saving…`,mentesSiker:`Your details were saved.`,mentesHiba:`Save failed. Please try again.`,tesztBelepesSegitseg:`Dev accounts: client „teszt” / „teszt”, admin „admin” / „admin321”.`,szerepKliens:`Client`,szerepAdmin:`Admin`,adminJelentkezesek:`Applications`,adminTartalom:`Content`,adminNaplo:`Log`,adminSoforok:`Drivers`,fiokLetrehozas:`Create account`,fiokLetrehozva:`Account ready`,fiokJelszoCim:`Temporary password (shown once)`,fiokMasolas:`Copy`,soforokCim:`Drivers`,soforokUres:`No driver accounts yet.`,soforReszletek:`Driver details`,soforAlapadatok:`Basic data`,soforSzallitasok:`Delivered cars`,soforJelentes:`Report`,soforVissza:`← Back to drivers`,soforElvegzettDb:`Delivered cars`,soforOsszKm:`Total km`,munkaFulAktualis:`Current job`,munkaFulElvegzett:`Completed jobs`,elvegzettUres:`No completed jobs yet.`,elvegzettNincsAktualis:`There is no job in progress.`,elvegzettSikerCim:`Task completed successfully`,elvegzettSikerSzoveg:`Delivery is documented. The job has moved to completed jobs and is visible on the admin side.`,elvegzettSikerBezar:`OK`,elvegzettPdfGomb:`Full report PDF`,elvegzettPdfFut:`Creating PDF…`,elvegzettPdfHiba:`PDF download failed.`,elvegzettMentesHiba:`Saving the job failed. Please try again.`,elvegzettSofor:`Driver`},de:{bejelentkezes:`ANMELDEN`,vezerlopult:`DASHBOARD`,bejelentkezesAria:`Im internen Portal anmelden`,belepésCim:`ANMELDEN`,belepesCim:`ANMELDEN`,emailCimke:`E-Mail-Adresse`,jelszoCimke:`Passwort`,jelszoMutat:`Anzeigen`,jelszoElrejt:`Ausblenden`,bejelentkezesGomb:`Anmelden`,belepesGomb:`Anmelden`,belepesFut:`Anmeldung…`,belepésHibaAlt:`Anmeldung fehlgeschlagen.`,belepesHibaAlt:`Anmeldung fehlgeschlagen.`,visszaNyilvanos:`Zurück zur Website`,vezerlopultCim:`DASHBOARD`,menuNyit:`Menü`,menuBezar:`Schließen`,navAria:`Interne Navigation`,aktualisMunka:`Aktuelle Arbeit`,aktualisMunkaCim:`Aktuelle Arbeit`,aktualisMunkaUres:`Hier erscheint Ihr laufender Transport oder Auftrag. Die detaillierte Verwaltung folgt in einer späteren Version.`,munkaKikuldve:`Zugewiesen`,munkaKikuldes:`Zuweisen`,munkaAlapadatok:`Basisdaten`,munkaAlapadatokBezar:`Basisdaten ausblenden`,munkaAllapotKikuldve:`Zugewiesen`,munkaAllapotFelveve:`Abgeholt`,munkaAllapotUtban:`Unterwegs`,munkaAllapotLeadva:`Abgegeben`,munkaAllapotKiszallitva:`Ausgeliefert`,munkaKinek:`An wen soll der Auftrag gehen?`,munkaKliensValaszt:`Kunden wählen`,munkaKikuldesMegse:`Abbrechen`,munkaKliensUres:`Kein auswählbarer Kunde.`,munkaKliensHiba:`Die Kundenliste konnte nicht geladen werden.`,munkaReszletek:`Details`,munkaAutoFelvetele:`Fahrzeug abholen`,fotoFekvo:`Drehen Sie das Telefon ins Querformat. Die Zeichnung zeigt den Winkel.`,fotoTeljes:`Nur die vollständige Serie aus 22 Fotos gilt als dokumentiert.`,fotoKeszites:`Foto aufnehmen`,fotoVissza:`Zurück`,fotoHiba:`Nur eine Bilddatei kann akzeptiert werden.`,fotoSerulesUjabb:`Foto eines weiteren Schadens`,fotoSerulesKesz:`Keine weiteren Schäden`,fotoSerulesVan:`Auf diesem Foto ist ein Schaden zu sehen.`,fotoSerulesKarika:`Ziehen Sie einen Kreis um den Schaden auf dem Foto.`,fotoSerulesTorles:`Letzten Kreis entfernen`,serulesekCim:`Schäden`,serulesAtvetel:`Bei der Abholung`,serulesLeadas:`Bei der Abgabe`,serulesNincs:`Kein Schaden markiert.`,fotoMegszakitas:`Abbrechen`,fotoUtiranyCim:`Wegbeschreibung`,fotoUtiranyBevezeto:`Die Abholung ist dokumentiert. Fahren Sie zur Abgabestation.`,fotoLeadasFigyelmeztetes:`Bei der Abgabe muss dieselbe Serie aus 22 Fotos erneut entstehen.`,fotoLeadasCim:`Fotos bei der Abgabe`,fotoLeadasGomb:`Fahrzeug abgeben`,fotoLeadasKeszCim:`Abgabe dokumentiert`,fotoLeadasKeszSzoveg:`Die Abgabeserie ist vollständig. Übergeben Sie Schlüssel und Zulassung an das Personal vor Ort.`,fotoUtiranyGomb:`Wegbeschreibung`,fotoBezar:`Schließen`,kerdoivCim:`Prüfung der Abholung`,kerdoivBevezeto:`Bestätigen Sie vor den Fotos, dass Sie Schlüssel, Unterlagen und alles Weitere vollständig übernommen haben.`,kerdoivKulcs:`Ich habe die Schlüssel vollständig übernommen.`,kerdoivOkmany:`Ich habe die nötigen Unterlagen vollständig übernommen.`,kerdoivMinden:`Ich habe alles vollständig übernommen.`,kerdoivMegjegyzes:`Bemerkung`,kerdoivMegjegyzesPlaceholder:`Schreiben Sie Ihre Anmerkungen.`,kerdoivTovabb:`Weiter zu den Fotos`,munkaMegbizo:`Auftraggeber`,munkaFelvétel:`Abholung`,munkaLeadas:`Abgabe`,munkaLegkesobb:`spätestens`,munkaTavolsag:`Strecke`,munkaMenetido:`Fahrzeit`,munkaDij:`Vergütung`,munkaDijMegjegyzes:`Die Vergütung gilt für die Überführung auf eigener Achse. Tanken und Maut werden gegen Beleg erstattet.`,munkaJarmu:`Fahrzeug`,munkaModell:`Modell`,munkaMarka:`Marke`,munkaTipus:`Typ`,munkaRendszam:`Kennzeichen`,munkaSzin:`Farbe`,munkaGumiTipus:`Bekannte Reifen`,munkaIsmertSerulesek:`Bekannte Schäden`,munkaHonnan:`Von`,munkaHova:`Nach`,munkaFelvetelTol:`Abholbar ab`,munkaLeadasIg:`Abgabe bis`,munkaBovebbInfo:`Weitere Informationen`,munkaBovebbBezar:`Weniger Informationen`,munkaUzemanyag:`Kraftstoff`,munkaValto:`Getriebe`,munkaKategoria:`Kategorie`,munkaCim:`Adresse`,munkaNyitvatartas:`Öffnungszeiten`,munkaTelefon:`Telefon`,munkaTerkepek:`Route auf der Karte`,munkaTeendok:`Aufgaben`,munkaMegjegyzesek:`Hinweise`,munkaSajatTengely:`Auf eigener Achse`,chat:`Chat`,chatCim:`Chat`,chatUres:`Noch keine Nachrichten. Schreiben Sie unten die erste.`,chatOnlineCim:`Online`,chatOnlineAria:`Benutzer online im Chatraum`,chatOn:`Sie`,chatUzenetPlaceholder:`Nachricht schreiben…`,chatKuldes:`Senden`,chatAltalanos:`Allgemein`,chatSzobak:`Räume`,chatPrivat:`Privat`,chatSzobaUj:`Neuer Raum`,chatSzobaNev:`Raumname`,chatSzobaTagok:`Mitglieder im Raum`,chatSzobaMent:`Raum erstellen`,chatSzobaTagMent:`Mitglieder speichern`,chatPrivatUj:`Neue Privatnachricht`,chatPrivatValaszt:`Benutzer wählen`,chatPrivatTorol:`Unterhaltung löschen`,chatPrivatTorolKerdes:`Diese private Unterhaltung löschen?`,chatErtesitesUj:`Neue Privatnachricht eingetroffen`,chatMegse:`Abbrechen`,chatUzenetAria:`Nachricht`,sajatAdataim:`Meine Daten`,kijelentkezes:`Abmelden`,udvozletCim:`Willkommen`,udvozletSzoveg:`Weitere Dashboard-Module folgen in Kürze. Ihre persönlichen Daten können Sie im Seitenmenü verwalten.`,vezeteknev:`Nachname`,keresztnev:`Vorname`,telefon:`Telefonnummer`,szuletesiDatum:`Geburtsdatum (optional)`,orszag:`Land`,iranyitoszam:`Postleitzahl`,varos:`Stadt`,lakcim:`Straße und Hausnummer`,mentesGomb:`Speichern`,mentesFut:`Speichern…`,mentesSiker:`Daten wurden gespeichert.`,mentesHiba:`Speichern fehlgeschlagen. Bitte erneut versuchen.`,tesztBelepesSegitseg:`Entwicklungskonten: Klient „teszt” / „teszt”, Admin „admin” / „admin321”.`,szerepKliens:`Klient`,szerepAdmin:`Admin`,adminJelentkezesek:`Bewerbungen`,adminTartalom:`Inhalt`,adminNaplo:`Protokoll`,adminSoforok:`Fahrer`,fiokLetrehozas:`Konto erstellen`,fiokLetrehozva:`Konto bereit`,fiokJelszoCim:`Temporäres Passwort (nur jetzt sichtbar)`,fiokMasolas:`Kopieren`,soforokCim:`Fahrer`,soforokUres:`Noch keine Fahrerkonten.`,soforReszletek:`Fahrerdetails`,soforAlapadatok:`Stammdaten`,soforSzallitasok:`Ausgelieferte Fahrzeuge`,soforJelentes:`Bericht`,soforVissza:`← Zurück zu den Fahrern`,soforElvegzettDb:`Ausgelieferte Fahrzeuge`,soforOsszKm:`Gesamt-km`,munkaFulAktualis:`Aktuelle Arbeit`,munkaFulElvegzett:`Erledigte Aufträge`,elvegzettUres:`Noch keine erledigten Aufträge.`,elvegzettNincsAktualis:`Derzeit läuft kein Auftrag.`,elvegzettSikerCim:`Auftrag erfolgreich abgeschlossen`,elvegzettSikerSzoveg:`Die Abgabe ist dokumentiert. Der Auftrag erscheint unter den erledigten Aufträgen auch in der Admin-Ansicht.`,elvegzettSikerBezar:`OK`,elvegzettPdfGomb:`Vollständiger Bericht als PDF`,elvegzettPdfFut:`PDF wird erstellt…`,elvegzettPdfHiba:`PDF-Download fehlgeschlagen.`,elvegzettMentesHiba:`Speichern des Auftrags fehlgeschlagen. Bitte erneut versuchen.`,elvegzettSofor:`Fahrer`}},Tr={hu:{htmlNyelv:`hu`,navigacioAria:`Fő navigáció`,nyelvAria:`Nyelv választása`,menuAria:`Menü megnyitása`,menuBezaroAria:`Menü bezárása`,ugrasATartalomra:`Ugrás a tartalomra`,seo:{cim:`Juliette Logistique | Premium járműszállítás és logisztika`,leiras:`Premium járműszállítás és személyre szabott logisztika Németországban és Európában. Megbízható, biztonságos és pontos szolgáltatás.`,kulcsszavak:`járműszállítás, premium logisztika, autószállítás, Németország, Európa, Juliette Logistique`},navigacio:[{azonosito:`kezdo`,felirat:`KEZDŐLAP`,cel:`/`},{azonosito:`rolunk`,felirat:`RÓLUNK`,cel:`/rolunk`},{azonosito:`szolgaltatasok`,felirat:`SZOLGÁLTATÁSOK`,cel:`/szolgaltatasok`},{azonosito:`partnerek`,felirat:`PARTNEREK`,cel:`/partnerek`},{azonosito:`karrier`,felirat:`KARRIER`,cel:`/karrier`},{azonosito:`kapcsolat`,felirat:`KAPCSOLAT`,cel:`/kapcsolat`}],hos:{markaNev:`JULIETTE LOGISTIQUE`,alcim:`PREMIUM JÁRMŰSZÁLLÍTÁS ÉS LOGISZTIKA`,motto:`MEGBÍZHATÓ. BIZTONSÁGOS. PONTOSSÁG.`,elsodlegesGomb:`SZÁLLÍTÁS IGÉNYLÉSE`,masodlagosGomb:`TUDJON MEG TÖBBET`},ertekekAria:`Erősségeink`,ertekek:[{azonosito:`biztonsag`,cim:`MAXIMÁLIS BIZTONSÁG`,leiras:`Minden szállításnál a legfontosabb`,ikon:`pajzs`},{azonosito:`tapasztalat`,cim:`5+ ÉV TAPASZTALAT`,leiras:`Professzionális járműlogisztika`,ikon:`csillag`},{azonosito:`lefedettseg`,cim:`NÉMETORSZÁG ÉS EURÓPA`,leiras:`Megbízható útvonaltervezés`,ikon:`terkep`},{azonosito:`premium`,cim:`PREMIUM SZOLGÁLTATÁS`,leiras:`Személyes ügyfélkapcsolat`,ikon:`gyemant`},{azonosito:`partnerek`,cim:`MEGBÍZHATÓ PARTNEREK`,leiras:`Erős szakmai hálózat`,ikon:`kezetfogas`}],szolgaltatasokCim:`SZOLGÁLTATÁSAINK`,szolgaltatasokGomb:`ÖSSZES SZOLGÁLTATÁS`,szolgaltatasok:[{azonosito:`sajat-kerekeken`,cim:`SZÁLLÍTÁS SAJÁT KEREKEKEN`,leiras:`Biztonságos járműátvitel tapasztalt sofőrökkel.`,kep:`/kepek/szolgaltatas-szallitas.png`,ikon:`auto`},{azonosito:`atvetel`,cim:`ÁTVÉTEL ÉS KISZÁLLÍTÁS`,leiras:`Rugalmas időpontok és pontos átadás.`,kep:`/kepek/szolgaltatas-atvetel.png`,ikon:`kulcs`},{azonosito:`flotta`,cim:`KERESKEDŐI ÉS FLOTTA SZÁLLÍTÁS`,leiras:`Hatékony megoldások kereskedőknek és flottáknak.`,kep:`/kepek/szolgaltatas-flotta.png`,ikon:`flotta`},{azonosito:`tavolsag`,cim:`RÖVID ÉS HOSSZÚ TÁV`,leiras:`Regionális utaktól az európai útvonalakig.`,kep:`/kepek/szolgaltatas-tavolsag.png`,ikon:`ut`},{azonosito:`europa`,cim:`ORSZÁGOS ÉS EURÓPAI LEFEDETTSÉG`,leiras:`Megbízható logisztika országhatárokon át.`,kep:`/kepek/szolgaltatas-europa.png`,ikon:`europa`},{azonosito:`dokumentacio`,cim:`TELJES DOKUMENTÁCIÓ`,leiras:`Átlátható átadás teljes fotódokumentációval.`,kep:`/kepek/szolgaltatas-dokumentacio.png`,ikon:`kamera`}],rolunk:{cim:`SZENVEDÉLY A JÁRMŰVEKÉRT. FELELŐSSÉG AZ ÖN SIKERÉÉRT.`,bekezdes:`A Juliette Logistique a premium járműszállítást és a személyre szabott logisztikát képviseli. Pontosságot, biztonságot és személyes szolgáltatást kapcsolunk össze — kereskedők, flották és igényes magánügyfelek számára.`,pontok:[`Tapasztalt sofőrök`,`Modern folyamatok`,`Átlátható ügyintézés`,`Személyes kapcsolattartás`],gomb:`TUDJON MEG TÖBBET`,kepAlt:`Juliette Logistique szállítójármű`},partnerekCim:`PARTNEREINK`,lablec:{kerdes:`KÉSZ AZ EGYÜTTMŰKÖDÉSRE?`,gomb:`KAPCSOLATFELVÉTEL`,markaLeiras:`— Premium járműszállítás`},oldalak:Xn,karrier:$n,jelentkezes:br.hu,adatvedelmi:xr,belso:wr.hu},en:{htmlNyelv:`en`,navigacioAria:`Main navigation`,nyelvAria:`Choose language`,menuAria:`Open menu`,menuBezaroAria:`Close menu`,ugrasATartalomra:`Skip to content`,seo:{cim:`Juliette Logistique | Premium vehicle transport & logistics`,leiras:`Premium vehicle transport and tailored logistics across Germany and Europe. Reliable, safe and on-time service.`,kulcsszavak:`vehicle transport, premium logistics, car transfer, Germany, Europe, Juliette Logistique`},navigacio:[{azonosito:`kezdo`,felirat:`HOME`,cel:`/`},{azonosito:`rolunk`,felirat:`ABOUT`,cel:`/rolunk`},{azonosito:`szolgaltatasok`,felirat:`SERVICES`,cel:`/szolgaltatasok`},{azonosito:`partnerek`,felirat:`PARTNERS`,cel:`/partnerek`},{azonosito:`karrier`,felirat:`CAREERS`,cel:`/karrier`},{azonosito:`kapcsolat`,felirat:`CONTACT`,cel:`/kapcsolat`}],hos:{markaNev:`JULIETTE LOGISTIQUE`,alcim:`PREMIUM VEHICLE TRANSPORT & LOGISTICS`,motto:`RELIABLE. SAFE. ON TIME.`,elsodlegesGomb:`REQUEST TRANSPORT`,masodlagosGomb:`LEARN MORE`},ertekekAria:`Our strengths`,ertekek:[{azonosito:`biztonsag`,cim:`MAXIMUM SECURITY`,leiras:`Highest priority on every transport`,ikon:`pajzs`},{azonosito:`tapasztalat`,cim:`5+ YEARS EXPERIENCE`,leiras:`Professional vehicle logistics`,ikon:`csillag`},{azonosito:`lefedettseg`,cim:`GERMANY & EUROPE`,leiras:`Reliable route planning`,ikon:`terkep`},{azonosito:`premium`,cim:`PREMIUM SERVICE`,leiras:`Personal customer care`,ikon:`gyemant`},{azonosito:`partnerek`,cim:`TRUSTED PARTNERS`,leiras:`A strong professional network`,ikon:`kezetfogas`}],szolgaltatasokCim:`OUR SERVICES`,szolgaltatasokGomb:`VIEW ALL SERVICES`,szolgaltatasok:[{azonosito:`sajat-kerekeken`,cim:`TRANSPORT ON OWN WHEELS`,leiras:`Safe vehicle transfer with experienced drivers.`,kep:`/kepek/szolgaltatas-szallitas.png`,ikon:`auto`},{azonosito:`atvetel`,cim:`PICKUP & DELIVERY`,leiras:`Flexible schedules and punctual handover.`,kep:`/kepek/szolgaltatas-atvetel.png`,ikon:`kulcs`},{azonosito:`flotta`,cim:`DEALER & FLEET TRANSPORT`,leiras:`Efficient solutions for dealers and fleets.`,kep:`/kepek/szolgaltatas-flotta.png`,ikon:`flotta`},{azonosito:`tavolsag`,cim:`SHORT & LONG DISTANCE`,leiras:`From regional trips to Europe-wide routes.`,kep:`/kepek/szolgaltatas-tavolsag.png`,ikon:`ut`},{azonosito:`europa`,cim:`NATIONWIDE & EUROPE-WIDE`,leiras:`Reliable logistics across borders.`,kep:`/kepek/szolgaltatas-europa.png`,ikon:`europa`},{azonosito:`dokumentacio`,cim:`FULL DOCUMENTATION`,leiras:`Transparent handover with complete photo records.`,kep:`/kepek/szolgaltatas-dokumentacio.png`,ikon:`kamera`}],rolunk:{cim:`PASSION FOR VEHICLES. RESPONSIBILITY FOR YOUR SUCCESS.`,bekezdes:`Juliette Logistique stands for premium vehicle transport and tailored logistics. We combine precision, safety and personal service — for dealers, fleets and discerning private clients.`,pontok:[`Experienced drivers`,`Modern processes`,`Transparent workflows`,`Personal contact`],gomb:`LEARN MORE`,kepAlt:`Juliette Logistique transport vehicle`},partnerekCim:`OUR PARTNERS`,lablec:{kerdes:`READY TO COLLABORATE?`,gomb:`CONTACT US`,markaLeiras:`— Premium vehicle transport`},oldalak:Zn,karrier:er,jelentkezes:br.en,adatvedelmi:Sr,belso:wr.en},de:{htmlNyelv:`de`,navigacioAria:`Hauptnavigation`,nyelvAria:`Sprache wählen`,menuAria:`Menü öffnen`,menuBezaroAria:`Menü schließen`,ugrasATartalomra:`Zum Inhalt springen`,seo:{cim:`Juliette Logistique | Premium Fahrzeugüberführung & Logistik`,leiras:`Premium Fahrzeugüberführung und maßgeschneiderte Logistik in Deutschland und Europa. Zuverlässig, sicher und pünktlich.`,kulcsszavak:`Fahrzeugüberführung, Premium Logistik, Autotransport, Deutschland, Europa, Juliette Logistique`},navigacio:[{azonosito:`kezdo`,felirat:`STARTSEITE`,cel:`/`},{azonosito:`rolunk`,felirat:`ÜBER UNS`,cel:`/rolunk`},{azonosito:`szolgaltatasok`,felirat:`LEISTUNGEN`,cel:`/szolgaltatasok`},{azonosito:`partnerek`,felirat:`PARTNER`,cel:`/partnerek`},{azonosito:`karrier`,felirat:`KARRIERE`,cel:`/karrier`},{azonosito:`kapcsolat`,felirat:`KONTAKT`,cel:`/kapcsolat`}],hos:{markaNev:`JULIETTE LOGISTIQUE`,alcim:`PREMIUM FAHRZEUGÜBERFÜHRUNG & LOGISTIK`,motto:`ZUVERLÄSSIG. SICHER. PÜNKTLICH.`,elsodlegesGomb:`TRANSPORT ANFRAGEN`,masodlagosGomb:`MEHR ÜBER UNS`},ertekekAria:`Unsere Stärken`,ertekek:[{azonosito:`biztonsag`,cim:`SICHERHEIT`,leiras:`Höchste Priorität bei jedem Transport`,ikon:`pajzs`},{azonosito:`tapasztalat`,cim:`5+ JAHRE ERFAHRUNG`,leiras:`Professionelle Fahrzeuglogistik`,ikon:`csillag`},{azonosito:`lefedettseg`,cim:`DEUTSCHLANDWEIT & EUROPAWEIT`,leiras:`Zuverlässige Streckenplanung`,ikon:`terkep`},{azonosito:`premium`,cim:`PREMIUM SERVICE`,leiras:`Persönliche Betreuung`,ikon:`gyemant`},{azonosito:`partnerek`,cim:`VERLÄSSLICHE PARTNER`,leiras:`Starke Netzwerke`,ikon:`kezetfogas`}],szolgaltatasokCim:`UNSERE LEISTUNGEN`,szolgaltatasokGomb:`ALLE LEISTUNGEN ANSEHEN`,szolgaltatasok:[{azonosito:`sajat-kerekeken`,cim:`ÜBERFÜHRUNG AUF EIGENEN RÄDERN`,leiras:`Sichere Fahrzeugüberführung mit erfahrenen Fahrern.`,kep:`/kepek/szolgaltatas-szallitas.png`,ikon:`auto`},{azonosito:`atvetel`,cim:`ABHOLUNG & ZUSTELLUNG`,leiras:`Flexible Termine und pünktliche Übergabe.`,kep:`/kepek/szolgaltatas-atvetel.png`,ikon:`kulcs`},{azonosito:`flotta`,cim:`HÄNDLER- & FLOTTENTRANSPORTE`,leiras:`Effiziente Lösungen für Händler und Flotten.`,kep:`/kepek/szolgaltatas-flotta.png`,ikon:`flotta`},{azonosito:`tavolsag`,cim:`KURZ- & LANGSTRECKEN`,leiras:`Von regionalen Fahrten bis hin zu europaweiten Routen.`,kep:`/kepek/szolgaltatas-tavolsag.png`,ikon:`ut`},{azonosito:`europa`,cim:`BUNDESWEIT & EUROPAWEIT`,leiras:`Zuverlässige Logistik über Ländergrenzen hinweg.`,kep:`/kepek/szolgaltatas-europa.png`,ikon:`europa`},{azonosito:`dokumentacio`,cim:`FOTODOKUMENTATION`,leiras:`Transparente Übergabe mit vollständiger Dokumentation.`,kep:`/kepek/szolgaltatas-dokumentacio.png`,ikon:`kamera`}],rolunk:{cim:`LEIDENSCHAFT FÜR FAHRZEUGE. VERANTWORTUNG FÜR IHREN ERFOLG.`,bekezdes:`Juliette Logistique steht für Premium-Fahrzeugüberführung und maßgeschneiderte Logistik. Wir verbinden Präzision, Sicherheit und persönlichen Service — für Händler, Flotten und anspruchsvolle Privatkunden.`,pontok:[`Erfahrene Fahrer`,`Moderne Prozesse`,`Transparente Abläufe`,`Persönlicher Kontakt`],gomb:`MEHR ÜBER UNS`,kepAlt:`Juliette Logistique Transportfahrzeug`},partnerekCim:`UNSERE PARTNER`,lablec:{kerdes:`BEREIT ZUR ZUSAMMENARBEIT?`,gomb:`KONTAKT AUFNEHMEN`,markaLeiras:`— Premium Fahrzeugüberführung`},oldalak:Qn,karrier:tr,jelentkezes:br.de,adatvedelmi:Cr,belso:wr.de}},Er=[{kod:`hu`,felirat:`HU`},{kod:`en`,felirat:`EN`},{kod:`de`,felirat:`DE`}],Dr=`juliette-nyelv`,Or=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),kr=c(o(((e,t)=>{t.exports=Or()}))());function Ar(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function jr(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var Mr=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(jr(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=Ar(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),Nr=`-ms-`,Pr=`-moz-`,k=`-webkit-`,Fr=`comm`,Ir=`rule`,Lr=`decl`,Rr=`@import`,zr=`@keyframes`,Br=`@layer`,Vr=Math.abs,Hr=String.fromCharCode,Ur=Object.assign;function Wr(e,t){return Jr(e,0)^45?(((t<<2^Jr(e,0))<<2^Jr(e,1))<<2^Jr(e,2))<<2^Jr(e,3):0}function Gr(e){return e.trim()}function Kr(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function qr(e,t){return e.indexOf(t)}function Jr(e,t){return e.charCodeAt(t)|0}function Yr(e,t,n){return e.slice(t,n)}function Xr(e){return e.length}function Zr(e){return e.length}function Qr(e,t){return t.push(e),e}function $r(e,t){return e.map(t).join(``)}var ei=1,ti=1,ni=0,ri=0,ii=0,ai=``;function oi(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ei,column:ti,length:o,return:``}}function si(e,t){return Ur(oi(``,null,null,``,null,null,0),e,{length:-e.length},t)}function ci(){return ii}function li(){return ii=ri>0?Jr(ai,--ri):0,ti--,ii===10&&(ti=1,ei--),ii}function ui(){return ii=ri<ni?Jr(ai,ri++):0,ti++,ii===10&&(ti=1,ei++),ii}function di(){return Jr(ai,ri)}function fi(){return ri}function pi(e,t){return Yr(ai,e,t)}function mi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hi(e){return ei=ti=1,ni=Xr(ai=e),ri=0,[]}function gi(e){return ai=``,e}function _i(e){return Gr(pi(ri-1,bi(e===91?e+2:e===40?e+1:e)))}function vi(e){for(;(ii=di())&&ii<33;)ui();return mi(e)>2||mi(ii)>3?``:` `}function yi(e,t){for(;--t&&ui()&&!(ii<48||ii>102||ii>57&&ii<65||ii>70&&ii<97););return pi(e,fi()+(t<6&&di()==32&&ui()==32))}function bi(e){for(;ui();)switch(ii){case e:return ri;case 34:case 39:e!==34&&e!==39&&bi(ii);break;case 40:e===41&&bi(e);break;case 92:ui()}return ri}function xi(e,t){for(;ui()&&e+ii!==57&&(e+ii!==84||di()!==47););return`/*`+pi(t,ri-1)+`*`+Hr(e===47?e:ui())}function Si(e){for(;!mi(di());)ui();return pi(e,ri)}function Ci(e){return gi(wi(``,null,null,null,[``],e=hi(e),0,[0],e))}function wi(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ui()){case 40:if(m!=108&&Jr(C,d-1)==58){qr(C+=A(_i(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=_i(v);break;case 9:case 10:case 13:case 32:C+=vi(m);break;case 92:C+=yi(fi()-1,7);continue;case 47:switch(di()){case 42:case 47:Qr(Ei(xi(ui(),fi()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=Xr(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=A(C,/\f/g,``)),p>0&&Xr(C)-d&&Qr(p>32?Di(C+`;`,r,n,d-1):Di(A(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Qr(S=Ti(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123){if(u===0)wi(C,t,S,S,b,a,d,s,x);else switch(f===99&&Jr(C,3)===110?100:f){case 100:case 108:case 109:case 115:wi(e,S,S,r&&Qr(Ti(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:wi(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Xr(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&li()==125)continue}switch(C+=Hr(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Xr(C)-1)*_,_=1;break;case 64:di()===45&&(C+=_i(ui())),f=di(),u=d=Xr(y=C+=Si(fi())),v++;break;case 45:m===45&&Xr(C)==2&&(h=0)}}return a}function Ti(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Zr(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Yr(e,d+1,d=Vr(h=o[m])),y=e;_<p;++_)(y=Gr(h>0?f[_]+` `+v:A(v,/&\f/g,f[_])))&&(c[g++]=y);return oi(e,t,n,i===0?Ir:s,c,l,u)}function Ei(e,t,n){return oi(e,t,n,Fr,Hr(ci()),Yr(e,2,-2),0)}function Di(e,t,n,r){return oi(e,t,n,Lr,Yr(e,0,r),Yr(e,r+1,-1),r)}function Oi(e,t){for(var n=``,r=Zr(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function ki(e,t,n,r){switch(e.type){case Br:if(e.children.length)break;case Rr:case Lr:return e.return=e.return||e.value;case Fr:return``;case zr:return e.return=e.value+`{`+Oi(e.children,r)+`}`;case Ir:e.value=e.props.join(`,`)}return Xr(n=Oi(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ai(e){var t=Zr(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function ji(e){return function(t){t.root||(t=t.return)&&e(t)}}function Mi(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ni=function(e,t,n){for(var r=0,i=0;r=i,i=di(),r===38&&i===12&&(t[n]=1),!mi(i);)ui();return pi(e,ri)},Pi=function(e,t){var n=-1,r=44;do switch(mi(r)){case 0:r===38&&di()===12&&(t[n]=1),e[n]+=Ni(ri-1,t,n);break;case 2:e[n]+=_i(r);break;case 4:if(r===44){e[++n]=di()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=Hr(r)}while(r=ui());return e},Fi=function(e,t){return gi(Pi(hi(e),t))},Ii=new WeakMap,Li=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Ii.get(n))&&!r){Ii.set(e,!0);for(var i=[],a=Fi(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},Ri=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function zi(e,t){switch(Wr(e,t)){case 5103:return k+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return k+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return k+e+Pr+e+Nr+e+e;case 6828:case 4268:return k+e+Nr+e+e;case 6165:return k+e+Nr+`flex-`+e+e;case 5187:return k+e+A(e,/(\w+).+(:[^]+)/,k+`box-$1$2`+Nr+`flex-$1$2`)+e;case 5443:return k+e+Nr+`flex-item-`+A(e,/flex-|-self/,``)+e;case 4675:return k+e+Nr+`flex-line-pack`+A(e,/align-content|flex-|-self/,``)+e;case 5548:return k+e+Nr+A(e,`shrink`,`negative`)+e;case 5292:return k+e+Nr+A(e,`basis`,`preferred-size`)+e;case 6060:return k+`box-`+A(e,`-grow`,``)+k+e+Nr+A(e,`grow`,`positive`)+e;case 4554:return k+A(e,/([^-])(transform)/g,`$1`+k+`$2`)+e;case 6187:return A(A(A(e,/(zoom-|grab)/,k+`$1`),/(image-set)/,k+`$1`),e,``)+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,k+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,k+`box-pack:$3`+Nr+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+k+e+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,k+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xr(e)-1-t>6)switch(Jr(e,t+1)){case 109:if(Jr(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,`$1`+k+`$2-$3$1`+Pr+(Jr(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~qr(e,`stretch`)?zi(A(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(Jr(e,t+1)!==115)break;case 6444:switch(Jr(e,Xr(e)-3-(~qr(e,`!important`)&&10))){case 107:return A(e,`:`,`:`+k)+e;case 101:return A(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+k+(Jr(e,14)===45?`inline-`:``)+`box$3$1`+k+`$2$3$1`+Nr+`$2box$3`)+e}break;case 5936:switch(Jr(e,t+11)){case 114:return k+e+Nr+A(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return k+e+Nr+A(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return k+e+Nr+A(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return k+e+Nr+e+e}return e}var Bi=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Lr:e.return=zi(e.value,e.length);break;case zr:return Oi([si(e,{value:A(e.value,`@`,`@`+k)})],r);case Ir:if(e.length)return $r(e.props,function(t){switch(Kr(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return Oi([si(e,{props:[A(t,/:(read-\w+)/,`:`+Pr+`$1`)]})],r);case`::placeholder`:return Oi([si(e,{props:[A(t,/:(plac\w+)/,`:`+k+`input-$1`)]}),si(e,{props:[A(t,/:(plac\w+)/,`:`+Pr+`$1`)]}),si(e,{props:[A(t,/:(plac\w+)/,Nr+`input-$1`)]})],r)}return``})}}],Vi=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||Bi,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[Li,Ri],l,u=[ki,ji(function(e){l.insert(e)})],d=Ai(c.concat(r,u)),f=function(e){return Oi(Ci(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new Mr({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p};function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(null,arguments)}var M=o((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),Hi=o(((e,t)=>{t.exports=M()})),Ui=o(((e,t)=>{var n=Hi(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}));function Wi(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var Gi=function(e,t,n){var r=e.key+`-`+t.name;n===!1&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Ki=function(e,t,n){Gi(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function qi(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Ji={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yi=/[A-Z]|^ms/g,Xi=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Zi=function(e){return e.charCodeAt(1)===45},Qi=function(e){return e!=null&&typeof e!=`boolean`},$i=Mi(function(e){return Zi(e)?e:e.replace(Yi,`-$&`).toLowerCase()}),ea=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Xi,function(e,t,n){return ia={name:t,styles:n,next:ia},t})}return Ji[e]!==1&&!Zi(e)&&typeof t==`number`&&t!==0?t+`px`:t};function ta(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return ia={name:i.name,styles:i.styles,next:ia},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)ia={name:o.name,styles:o.styles,next:ia},o=o.next;return a.styles+`;`}return na(e,t,n);case`function`:if(e!==void 0){var s=ia,c=n(e);return ia=s,ta(e,t,c)}}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function na(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ta(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Qi(s)&&(r+=$i(a)+`:`+ea(a,s)+`;`)}else if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Qi(o[c])&&(r+=$i(a)+`:`+ea(a,o[c])+`;`);else{var l=ta(e,t,o);switch(a){case`animation`:case`animationName`:r+=$i(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}return r}var ra=/label:\s*([^\s;{]+)\s*(;|$)/g,ia;function aa(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;ia=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=ta(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=ta(n,t,e[o]),r&&(i+=a[o]);ra.lastIndex=0;for(var s=``,c;(c=ra.exec(i))!==null;)s+=`-`+c[1];return{name:qi(i)+s,styles:i,next:ia}}var oa=function(e){return e()},sa=x.useInsertionEffect?x.useInsertionEffect:!1,ca=sa||oa,la=sa||x.useLayoutEffect,ua=x.createContext(typeof HTMLElement<`u`?Vi({key:`css`}):null);ua.Provider;var da=function(e){return(0,x.forwardRef)(function(t,n){return e(t,(0,x.useContext)(ua),n)})},fa=x.createContext({}),pa={}.hasOwnProperty,ma=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,ha=function(e,t){var n={};for(var r in t)pa.call(t,r)&&(n[r]=t[r]);return n[ma]=e,n},ga=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Gi(t,n,r),ca(function(){return Ki(t,n,r)}),null},_a=da(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[ma],a=[r],o=``;typeof e.className==`string`?o=Wi(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=aa(a,void 0,x.useContext(fa));o+=t.key+`-`+s.name;var c={};for(var l in e)pa.call(e,l)&&l!==`css`&&l!==ma&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),x.createElement(x.Fragment,null,x.createElement(ga,{cache:t,serialized:s,isStringTag:typeof i==`string`}),x.createElement(i,c))});Ui();var va=kr.Fragment,N=function(e,t,n){return pa.call(t,`css`)?kr.jsx(_a,ha(e,t),n):kr.jsx(e,t,n)},P=function(e,t,n){return pa.call(t,`css`)?kr.jsxs(_a,ha(e,t),n):kr.jsxs(e,t,n)},ya=(0,x.createContext)(null);function ba(e){return e===`hu`||e===`en`||e===`de`}function xa(){let e=window.localStorage.getItem(Dr);return ba(e)?e:`de`}function Sa(){return typeof window>`u`?`de`:xa()}function Ca(e){document.documentElement.lang=Tr[e].htmlNyelv}function wa({children:e}){let[t,n]=(0,x.useState)(Sa);(0,x.useEffect)(()=>{Ca(t)},[t]);function r(e){n(e),window.localStorage.setItem(Dr,e)}return N(ya.Provider,{value:{nyelv:t,szoveg:Tr[t],nyelvetValaszt:r},children:e})}var Ta=function(e,t){var n=arguments;if(t==null||!pa.call(t,`css`))return x.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=_a,i[1]=ha(e,t);for(var a=2;a<r;a++)i[a]=n[a];return x.createElement.apply(null,i)};(function(e){var t;t||=e.JSX||={}})(Ta||={});var Ea=da(function(e,t){var n=e.styles,r=aa([n],void 0,x.useContext(fa)),i=x.useRef();return la(function(){var e=t.key+`-global`,n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,o=document.querySelector(`style[data-emotion="`+e+` `+r.name+`"]`);return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),o!==null&&(a=!0,o.setAttribute(`data-emotion`,e),n.hydrate([o])),i.current=[n,a],function(){n.flush()}},[t]),la(function(){var e=i.current,n=e[0];if(e[1]){e[1]=!1;return}r.next!==void 0&&Ki(t,r.next,!0),n.tags.length&&(n.before=n.tags[n.tags.length-1].nextElementSibling,n.flush()),t.insert(``,r,n,!1)},[t,r.name]),null});function Da(){return aa([...arguments])}function Oa(){var e=Da.apply(void 0,arguments),t=`animation-`+e.name;return{name:t,styles:`@keyframes `+t+`{`+e.styles+`}`,anim:1,toString:function(){return`_EMO_`+this.name+`_`+this.styles+`_EMO_`}}}var ka=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Aa=Mi(function(e){return ka.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ja=function(e){return e!==`theme`},Ma=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Aa:ja},Na=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Pa=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Gi(t,n,r),ca(function(){return Ki(t,n,r)}),null},Fa=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Na(t,n,r),c=s||Ma(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=da(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=x.useContext(fa)}typeof e.className==`string`?a=Wi(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=aa(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Ma(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),x.createElement(x.Fragment,null,x.createElement(Pa,{cache:t,serialized:m,isStringTag:typeof r==`string`}),x.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return`.`+o}}),h.withComponent=function(t,r){return e(t,j({},n,r,{shouldForwardProp:Na(h,r,!0)})).apply(void 0,d)},h}},Ia=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),F=Fa.bind(null);Ia.forEach(function(e){F[e]=F(e)});var I={hatter:{fekete:`#141414`,sotet:`#1b1b1b`,emelt:`#252525`,kartya:`#2c2c2c`},szin:{arany:`#c5a572`,aranyVilagos:`#e8d7b5`,aranySotet:`#8f7349`,feher:`#f7f3ea`,szurke:`#cfc6b8`,szurkeSotet:`#9a9184`},betu:{cim:`Georgia, "Times New Roman", Times, serif`,torzs:`Georgia, "Times New Roman", Times, serif`,marka:`Georgia, "Times New Roman", Times, serif`,szam:`Georgia, "Times New Roman", Times, serif`},arnyek:{aranyFeny:`0 0 28px rgba(197, 165, 114, 0.18)`,kartya:`0 16px 40px rgba(0, 0, 0, 0.35)`},szelesseg:{kicsi:`480px`,mobil:`720px`,tablet:`980px`,asztali:`1200px`,nagy:`1440px`},maxTartalom:`1280px`,oldalsoPadding:`max(1rem, env(safe-area-inset-left, 0px), min(4vw, 3rem))`},La=`
  color: ${I.szin.aranyVilagos};
  background: linear-gradient(
    115deg,
    ${I.szin.aranySotet} 0%,
    ${I.szin.aranyVilagos} 42%,
    ${I.szin.arany} 68%,
    #f3ebdc 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`,L=`1px solid rgba(197, 165, 114, 0.45)`,Ra=`
  outline: 2px solid ${I.szin.aranyVilagos};
  outline-offset: 3px;
`,za=`
  font-family: ${I.betu.szam};
  font-style: italic;
  font-weight: 700;
  font-variant-numeric: lining-nums proportional-nums;
  letter-spacing: 0.06em;
  color: ${I.szin.aranyVilagos};
  background: linear-gradient(
    115deg,
    ${I.szin.aranySotet} 0%,
    ${I.szin.aranyVilagos} 45%,
    ${I.szin.arany} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`,Ba=`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Va=`
  ${Ba}
  position: relative;
  overflow: hidden;
  isolation: isolate;
  color: ${I.hatter.fekete};
  border: 1px solid rgba(232, 215, 181, 0.55);
  background: linear-gradient(
    135deg,
    #8f7349 0%,
    #c5a572 38%,
    #e8d7b5 52%,
    #c5a572 68%,
    #8f7349 100%
  );
  background-size: 200% 200%;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.35),
    0 10px 28px rgba(0, 0, 0, 0.35);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    transform: translateX(-105%);
    background: linear-gradient(
      105deg,
      transparent 0%,
      rgba(255, 255, 255, 0.28) 45%,
      transparent 70%
    );
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    background-position: 100% 50%;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.45),
      0 14px 34px rgba(197, 165, 114, 0.28);
  }

  &:hover::before {
    transform: translateX(105%);
  }
`,Ha=`
  opacity: 0;
  transform: translate3d(0, 28px, 0);
  transition:
    opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;

  &.lathato {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`,Ua=F.svg`
  display: block;
  flex-shrink: 0;
  stroke: ${I.szin.arany};
  fill: none;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
`;function Wa({tipus:e,meret:t=28,className:n}){let r={className:n,width:t,height:t,viewBox:`0 0 24 24`,"aria-hidden":!0};return e===`pajzs`?P(Ua,{...r,children:[N(`path`,{d:`M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z`}),N(`path`,{d:`M9 12l2 2 4-4`})]}):e===`csillag`?N(Ua,{...r,children:N(`path`,{d:`M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 14.8 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z`})}):e===`terkep`?P(Ua,{...r,children:[N(`path`,{d:`M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z`}),N(`circle`,{cx:`12`,cy:`11`,r:`2.2`})]}):e===`gyemant`?P(Ua,{...r,children:[N(`path`,{d:`M3 9l4-5h10l4 5-9 11L3 9z`}),N(`path`,{d:`M3 9h18M8 4l2 5M16 4l-2 5M10 9l2 11M14 9l-2 11`})]}):e===`kezetfogas`?P(Ua,{...r,children:[N(`path`,{d:`M8 13l2.5 2.5a2 2 0 002.8 0L17 12`}),N(`path`,{d:`M4 12l3-3 3 1 2-2 3 2 3-1 2 2`})]}):e===`auto`?P(Ua,{...r,children:[N(`path`,{d:`M4 14l2-5h12l2 5`}),N(`path`,{d:`M3 14h18v3H3z`}),N(`circle`,{cx:`7`,cy:`17`,r:`1.2`}),N(`circle`,{cx:`17`,cy:`17`,r:`1.2`})]}):e===`kulcs`?P(Ua,{...r,children:[N(`circle`,{cx:`8`,cy:`10`,r:`3`}),N(`path`,{d:`M11 10h9v2h-2v2h-2v-2h-2`})]}):e===`flotta`?P(Ua,{...r,children:[N(`path`,{d:`M3 16V9h8v7`}),N(`path`,{d:`M11 12h6l3 3v1h-9`}),N(`circle`,{cx:`6.5`,cy:`17`,r:`1.2`}),N(`circle`,{cx:`16.5`,cy:`17`,r:`1.2`})]}):e===`ut`?P(Ua,{...r,children:[N(`path`,{d:`M8 21l2-18h4l2 18`}),N(`path`,{d:`M12 7v2M12 12v2M12 17v2`})]}):e===`europa`?P(Ua,{...r,children:[N(`circle`,{cx:`12`,cy:`12`,r:`8`}),N(`path`,{d:`M4 12h16M12 4c2.5 2.8 2.5 13.2 0 16M12 4c-2.5 2.8-2.5 13.2 0 16`})]}):e===`kamera`?P(Ua,{...r,children:[N(`rect`,{x:`3`,y:`7`,width:`18`,height:`12`,rx:`2`}),N(`circle`,{cx:`12`,cy:`13`,r:`3.2`}),N(`path`,{d:`M8 7l1.5-2h5L16 7`})]}):e===`telefon`?N(Ua,{...r,children:N(`path`,{d:`M7 4h3l1 4-2 1a10 10 0 004 4l1-2 4 1v3a2 2 0 01-2 2A12 12 0 015 6a2 2 0 012-2z`})}):P(Ua,{...r,children:[N(`path`,{d:`M5 12h12`}),N(`path`,{d:`M13 6l6 6-6 6`})]})}var Ga=Da`
  background: linear-gradient(
    135deg,
    ${I.szin.aranySotet} 0%,
    ${I.szin.aranyVilagos} 48%,
    ${I.szin.arany} 100%
  );
  color: ${I.hatter.fekete};
  border: 1px solid ${I.szin.arany};

  &:hover {
    box-shadow: ${I.arnyek.aranyFeny};
    transform: translateY(-2px);
  }
`,Ka=Da`
  background: transparent;
  color: ${I.szin.aranyVilagos};
  border: ${L};

  &:hover {
    background: rgba(197, 165, 114, 0.08);
    box-shadow: ${I.arnyek.aranyFeny};
    transform: translateY(-2px);
  }
`,qa=Da`
  background: transparent;
  color: ${I.szin.aranyVilagos};
  border: ${L};
  flex-shrink: 0;
  min-width: 44px;
  min-height: 44px;
  padding: 0.55rem 0.7rem;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  font-style: italic;
  white-space: nowrap;

  @media (min-width: ${I.szelesseg.kicsi}) {
    padding: 0.55rem 0.95rem;
    font-size: 0.84rem;
  }

  &:hover {
    background: rgba(197, 165, 114, 0.1);
  }

  & > span {
    width: auto;
    flex: 0 0 auto;
  }

  & > span > span {
    flex: 0 0 auto;
    min-width: auto;
    white-space: nowrap;
  }
`,Ja=Da`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  min-height: 44px;
  padding: 0.85rem 1.25rem;
  font-family: ${I.betu.cim};
  font-size: clamp(0.72rem, 1.4vw, 0.84rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &:focus-visible {
    ${Ra}
  }
`,Ya=F.a`
  ${Ja}
  ${e=>e.valtozat===`telitett`&&Ga}
  ${e=>e.valtozat===`korvonal`&&Ka}
  ${e=>e.valtozat===`telefon`&&qa}
`,Xa=F(Rn)`
  ${Ja}
  ${e=>e.valtozat===`telitett`&&Ga}
  ${e=>e.valtozat===`korvonal`&&Ka}
  ${e=>e.valtozat===`telefon`&&qa}
`,Za=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: 100%;
`,Qa=F.span`
  flex: 1 1 auto;
  min-width: 0;
  text-align: center;
  white-space: nowrap;
`,$a=F.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;function eo(e){return e.startsWith(`/`)&&!e.startsWith(`//`)&&!e.startsWith(`/#`)}function to({children:e,href:t=`#`,valtozat:n=`telitett`,className:r,onClick:i,mutatNyilat:a=!1,mutatTelefont:o=!1,ariaLabel:s}){let c=P(Za,{children:[N($a,{"aria-hidden":!o,children:o?N(Wa,{tipus:`telefon`,meret:16}):null}),N(Qa,{children:e}),N($a,{"aria-hidden":!a,children:a?N(Wa,{tipus:`nyil`,meret:16}):null})]});return eo(t)?N(Xa,{className:r,to:t,valtozat:n,onClick:i,"aria-label":s,children:c}):N(Ya,{className:r,href:t,valtozat:n,onClick:i,"aria-label":s,children:c})}function R(){let e=(0,x.useContext)(ya);if(!e)throw Error(`A useNyelv csak a NyelvSzolgaltato belsejében használható.`);return e}var no=`/api`,ro=null;async function io(){let e=await fetch(`${no}/auth/csrf`,{credentials:`include`});if(!e.ok)throw Error(`A biztonsági token nem érhető el.`);let t=await e.json();return ro=t.csrfToken,t.csrfToken}async function ao(e,t={}){let n=new Headers(t.headers);if(t.csrf){let e=ro??await io();n.set(`X-CSRF-Token`,e)}return t.body&&!n.has(`Content-Type`)&&n.set(`Content-Type`,`application/json`),await fetch(`${no}${e}`,{...t,headers:n,credentials:`include`})}async function oo(){let e=await ao(`/auth/me`);if(e.status===401)return null;if(!e.ok)throw Error(`A munkamenet ellenőrzése sikertelen.`);return await e.json()}async function so(e,t){await io();let n=await ao(`/auth/login`,{method:`POST`,csrf:!0,body:JSON.stringify({email:e,password:t})}),r=await n.json().catch(()=>({}));if(!n.ok)throw Error(typeof r.hiba==`string`?r.hiba:`Bejelentkezés sikertelen.`);return await io(),r}async function co(){try{await io(),await ao(`/auth/logout`,{method:`POST`,csrf:!0})}finally{ro=null}}async function lo(e){await io();let t=await ao(`/profile/me`,{method:`PATCH`,csrf:!0,body:JSON.stringify(e)}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(typeof n.hiba==`string`?n.hiba:`Mentés sikertelen.`);return n}async function uo(e){let t=new URLSearchParams;e?.after&&t.set(`after`,e.after),e?.afterId&&t.set(`afterId`,e.afterId),e?.szobaId&&t.set(`szobaId`,e.szobaId);let n=await ao(t.size?`/chat/uzenetek?${t.toString()}`:`/chat/uzenetek`),r=await n.json().catch(()=>({}));if(!n.ok)throw Error(typeof r.hiba==`string`?r.hiba:`A chat nem érhető el.`);return{uzenetek:r.uzenetek??[],online:r.online??[]}}async function fo(e,t){await io();let n=await ao(`/chat/uzenetek`,{method:`POST`,csrf:!0,body:JSON.stringify({szoveg:e,szobaId:t||null})}),r=await n.json().catch(()=>({}));if(!n.ok||!r.uzenet)throw Error(typeof r.hiba==`string`?r.hiba:`Az üzenet küldése sikertelen.`);return{uzenet:r.uzenet,online:r.online??[]}}async function po(){await io();let e=await ao(`/chat/jelenlet`,{method:`POST`,csrf:!0,body:`{}`}),t=await e.json().catch(()=>({}));if(!e.ok)throw Error(typeof t.hiba==`string`?t.hiba:`A jelenlét frissítése sikertelen.`);return t.online??[]}async function chatFelhasznalokApi(){let e=await ao(`/chat/felhasznalok`),t=await e.json().catch(()=>({}));if(!e.ok)throw Error(typeof t.hiba==`string`?t.hiba:`A felhasználók nem tölthetők.`);return t.felhasznalok??[]}async function chatSzobakApi(){let e=await ao(`/chat/szobak`),t=await e.json().catch(()=>({}));if(!e.ok)throw Error(typeof t.hiba==`string`?t.hiba:`A szobák nem tölthetők.`);return t.szobak??[]}async function chatSzobaLetrehozApi(e,t){await io();let n=await ao(`/chat/szobak`,{method:`POST`,csrf:!0,body:JSON.stringify({nev:e,tagUserIds:t||[]})}),r=await n.json().catch(()=>({}));if(!n.ok||!r.szoba)throw Error(typeof r.hiba==`string`?r.hiba:`A szoba létrehozása sikertelen.`);return r.szoba}async function chatSzobaTagokApi(e,t){await io();let n=await ao(`/chat/szobak/${e}/tagok`,{method:`PUT`,csrf:!0,body:JSON.stringify({tagUserIds:t})}),r=await n.json().catch(()=>({}));if(!n.ok||!r.szoba)throw Error(typeof r.hiba==`string`?r.hiba:`A tagok mentése sikertelen.`);return r.szoba}async function chatPrivatListaApi(){let e=await ao(`/chat/privat`),t=await e.json().catch(()=>({}));if(!e.ok)throw Error(typeof t.hiba==`string`?t.hiba:`A privát chat nem érhető el.`);return t.beszelgetesek??[]}async function chatPrivatNyitApi(e){await io();let t=await ao(`/chat/privat`,{method:`POST`,csrf:!0,body:JSON.stringify({cimzettUserId:e})}),n=await t.json().catch(()=>({}));if(!t.ok||!n.beszelgetes)throw Error(typeof n.hiba==`string`?n.hiba:`A privát chat nem nyitható.`);return n.beszelgetes}async function chatPrivatUzenetekApi(e,t){let n=new URLSearchParams;t?.after&&n.set(`after`,t.after),t?.afterId&&n.set(`afterId`,t.afterId);let r=await ao(n.size?`/chat/privat/${e}/uzenetek?${n}`:`/chat/privat/${e}/uzenetek`),i=await r.json().catch(()=>({}));if(!r.ok)throw Error(typeof i.hiba==`string`?i.hiba:`A privát üzenetek nem tölthetők.`);return{uzenetek:i.uzenetek??[],beszelgetes:i.beszelgetes||null}}async function chatPrivatKuldesApi(e,t){await io();let n=await ao(`/chat/privat/${e}/uzenetek`,{method:`POST`,csrf:!0,body:JSON.stringify({szoveg:t})}),r=await n.json().catch(()=>({}));if(!n.ok||!r.uzenet)throw Error(typeof r.hiba==`string`?r.hiba:`A privát üzenet küldése sikertelen.`);return r}async function chatPrivatTorlesApi(e){await io();let t=await ao(`/chat/privat/${e}`,{method:`DELETE`,csrf:!0,body:`{}`}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(typeof n.hiba==`string`?n.hiba:`A beszélgetés törlése sikertelen.`);return n}async function chatPrivatErtesitesApi(){let e=await ao(`/chat/privat/ertesitesek`),t=await e.json().catch(()=>({}));if(!e.ok)throw Error(typeof t.hiba==`string`?t.hiba:`Az értesítések nem tölthetők.`);return{osszesOlvasatlan:t.osszesOlvasatlan||0,uj:t.uj??[]}}async function mo(){await io();let e=await ao(`/admin/session-token`,{method:`POST`,csrf:!0,body:`{}`}),t=await e.json().catch(()=>({}));if(!e.ok||!t.token)throw Error(typeof t.hiba==`string`?t.hiba:`Az admin jogosultság nem állítható elő.`);return{token:t.token,felhasznalo:t.felhasznalo??``}}async function z(e){await io();let t=await ao(`/munkak/elvegzett`,{method:`POST`,csrf:!0,body:JSON.stringify(e)}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(typeof n.hiba==`string`?n.hiba:`A munka mentése sikertelen.`);return n}async function B(){let e=await ao(`/munkak/elvegzett`),t=await e.json().catch(()=>({}));if(!e.ok)throw Error(typeof t.hiba==`string`?t.hiba:`Az elvégzett munkák nem tölthetők be.`);return t.munkak??[]}async function ho(e){let t=await ao(`/munkak/elvegzett/${e}/pdf`);if(!t.ok){let e=await t.json().catch(()=>({}));throw Error(typeof e.hiba==`string`?e.hiba:`A PDF letöltése sikertelen.`)}let n=await t.blob(),r=URL.createObjectURL(n),i=document.createElement(`a`),a=t.headers.get(`Content-Disposition`)||``,o=/filename="([^"]+)"/.exec(a);i.href=r,i.download=o?.[1]||`jelentes-${e}.pdf`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(r)}async function go(){let e=await ao(`/kliensek`),t=await e.json().catch(()=>({}));if(!e.ok)throw Error(typeof t.hiba==`string`?t.hiba:`A kliensek listája nem tölthető be.`);return t.kliensek??[]}async function aktualisLekerdez(){let e=await ao(`/munkak/aktualis`),t=await e.json().catch(()=>({}));if(!e.ok)throw Error(typeof t.hiba==`string`?t.hiba:`Az aktuális munka nem tölthető be.`);return t}async function aktualisKikuldesApi(e){await io();let t=await ao(`/munkak/aktualis/kikuldes`,{method:`POST`,csrf:!0,body:JSON.stringify({kliensUserId:e})}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(typeof n.hiba==`string`?n.hiba:`A kiküldés sikertelen.`);return n}async function hangLejatszvaJeloles(){await io();await ao(`/munkak/aktualis/hang-lejatszva`,{method:`POST`,csrf:!0,body:JSON.stringify({})})}async function aktualisAllapotApi(e){await io();let t=await ao(`/munkak/aktualis/allapot`,{method:`POST`,csrf:!0,body:JSON.stringify({allapot:e})}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(typeof n.hiba==`string`?n.hiba:`Az állapot nem frissíthető.`);return n}function munkaDatumok(e){if(!e||typeof e!=`object`)return null;let t=JSON.parse(JSON.stringify(e));return t.felvetel&&t.felvetel.idopont&&(t.felvetel.idopont=new Date(t.felvetel.idopont)),t.leadas&&t.leadas.idopont&&(t.leadas.idopont=new Date(t.leadas.idopont)),t}async function ujMunkaHangLejatszas(){try{let e=await ao(`/ertesites/hang`),t=await e.blob();if(!e.ok)return;let n=URL.createObjectURL(t),r=new Audio(n);r.playsInline=!0;try{await r.play()}catch{}r.addEventListener(`ended`,()=>URL.revokeObjectURL(n)),await hangLejatszvaJeloles()}catch{}}function _o(){ro=null}var vo=`juliette-admin-token`;function yo(){return window.localStorage.getItem(vo)?.trim()??``}function bo(e){window.localStorage.setItem(vo,e.trim())}function xo(){window.localStorage.removeItem(vo)}async function So(){if(wo())return yo();let{token:e}=await mo();return bo(e),e}function Co(e){let t=e.split(`.`);if(t.length!==2||!t[0])return null;try{let e=t[0].replace(/-/g,`+`).replace(/_/g,`/`),n=atob(e.padEnd(e.length+(4-e.length%4)%4,`=`)),r=JSON.parse(n);return typeof r.exp==`number`?r.exp:null}catch{return null}}function wo(){let e=yo();if(!e)return!1;let t=Co(e);return!(t==null||t<=Date.now())}function To(){xo();let e=`/login`;window.location.pathname!==e&&window.location.replace(e)}var Eo=`/api`;function Do(e){e.status===401&&To()}function Oo(e){return{Authorization:`Bearer ${e}`,"Content-Type":`application/json`}}async function ko(e){let t=await fetch(`${Eo}/admin/jelentkezesek`,{headers:{Authorization:`Bearer ${e}`}});Do(t);let n=await t.json();if(!t.ok)throw Error(n.hiba||`A lista betöltése sikertelen.`);return Array.isArray(n)?n:n.jelentkezesek??[]}async function Ao(e,t){let n=await fetch(`${Eo}/admin/jelentkezesek/${t}`,{headers:{Authorization:`Bearer ${e}`}});Do(n);let r=await n.json();if(!n.ok)throw Error(r.hiba||`A részletek betöltése sikertelen.`);return r}async function jo(e,t,n){let r=await fetch(`${Eo}/admin/jelentkezesek/${t}`,{method:`PATCH`,headers:Oo(e),body:JSON.stringify({statusz:n})});Do(r);let i=await r.json();if(!r.ok)throw Error(i.hiba||`Státusz mentése sikertelen.`);return i}async function fiokJelentkezesbol(e,t){let n=await fetch(`${Eo}/admin/jelentkezesek/${t}/fiok`,{method:`POST`,headers:Oo(e),body:`{}`});Do(n);let r=await n.json().catch(()=>({}));if(!n.ok)throw Error(r.hiba||`A fiók létrehozása sikertelen.`);return r}async function soforokLista(){let e=await ao(`/soforok`),t=await e.json().catch(()=>({}));if(!e.ok)throw Error(typeof t.hiba==`string`?t.hiba:`A sofőrök listája nem tölthető be.`);return t.soforok??[]}async function soforReszlet(e){let t=await ao(`/soforok/${e}`),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(typeof n.hiba==`string`?n.hiba:`A sofőr adatai nem tölthetők be.`);return n}async function Mo(e,t){let n=await fetch(`${Eo}/admin/fajl?path=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${e}`}});if(Do(n),!n.ok){let e=`A fájl nem érhető el.`;try{let t=await n.json();t.hiba&&(e=t.hiba)}catch{}throw Error(e)}return n.blob()}async function No(e,t){let n=new FormData;n.append(`adat`,JSON.stringify(e));for(let[e,r]of Object.entries(t))r&&n.append(e,r,r.name);let r=await fetch(`${Eo}/jelentkezesek`,{method:`POST`,body:n}),i=await r.json();if(!r.ok)throw Error(i.hiba||`Küldés sikertelen.`);return i}async function Po(){let e=await fetch(`${Eo}/content`,{cache:`no-store`}),t=await e.json();if(!e.ok)throw Error(t.hiba||`A tartalom betöltése sikertelen.`);return t}async function Fo(e){let t=await fetch(`${Eo}/admin/content`,{headers:{Authorization:`Bearer ${e}`}});Do(t);let n=await t.json();if(!t.ok)throw Error(n.hiba||`A tartalom betöltése sikertelen.`);return n}async function Io(e,t={}){let n=new URLSearchParams;t.limit!=null&&n.set(`limit`,String(t.limit)),t.offset!=null&&n.set(`offset`,String(t.offset)),t.kategoria&&n.set(`kategoria`,t.kategoria),t.esemeny&&n.set(`esemeny`,t.esemeny);let r=await fetch(`${Eo}/admin/naplo?${n.toString()}`,{headers:{Authorization:`Bearer ${e}`}});Do(r);let i=await r.json();if(!r.ok)throw Error(i.hiba||`A napló betöltése sikertelen.`);return i}async function Lo(e,t){let n=await fetch(`${Eo}/admin/content`,{method:`PUT`,headers:Oo(e),body:JSON.stringify(t)});Do(n);let r=await n.json();if(!n.ok)throw Error(r.hiba||`Mentés sikertelen.`);return r}var Ro={cegnev:`Juliette Logistique`,telefonszam:`+49 155 10 93 0734`,email:`info@juliettelogistique.de`,cim:``,terulet:`Deutschland und Europa`,elerhetoseg:`Montag–Freitag, 08:00–18:00 (CET)`},zo=(0,x.createContext)(null);function Bo(e){return{cegnev:e.cegnev?.trim()||Ro.cegnev,telefonszam:e.telefonszam?.trim()||Ro.telefonszam,email:e.email?.trim()||Ro.email,cim:e.cim?.trim()||Ro.cim,terulet:e.terulet?.trim()||Ro.terulet,elerhetoseg:e.elerhetoseg?.trim()||Ro.elerhetoseg}}function Vo({children:e}){let[t,n]=(0,x.useState)(Ro),[r,i]=(0,x.useState)(!1);(0,x.useEffect)(()=>{let e=!1;function t(){Po().then(t=>{e||(n(Bo(t)),i(!0))}).catch(()=>{e||i(!0)})}t();function r(){document.visibilityState===`visible`&&t()}return window.addEventListener(`focus`,t),document.addEventListener(`visibilitychange`,r),()=>{e=!0,window.removeEventListener(`focus`,t),document.removeEventListener(`visibilitychange`,r)}},[]);let a=(0,x.useMemo)(()=>({...t,betoltve:r}),[t,r]);return N(zo.Provider,{value:a,children:e})}function Ho(){return(0,x.useContext)(zo)||{...Ro,betoltve:!1}}function Uo(){return Ho().telefonszam}var Wo=Oa`
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Go=F.section`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: flex-end;
  padding:
    clamp(6rem, 14vh, 8rem)
    ${I.oldalsoPadding}
    clamp(3rem, 8vh, 5.5rem);
  overflow: hidden;

  @media (max-width: ${I.szelesseg.tablet}) {
    align-items: center;
    justify-content: center;
    padding-top: calc(env(safe-area-inset-top, 0px) + 4.75rem);
    padding-bottom: 1.75rem;
  }
`,Ko=F.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(20, 20, 20, 0.78) 0%, rgba(20, 20, 20, 0.42) 48%, rgba(20, 20, 20, 0.18) 100%),
    linear-gradient(0deg, rgba(20, 20, 20, 0.72) 0%, rgba(20, 20, 20, 0.18) 48%, rgba(20, 20, 20, 0.28) 100%),
    url('/kepek/hos-hatter.png') center / cover no-repeat;
  transform: scale(1.04);
  animation: ${Wo} 1.2s ease both;

  @media (max-width: ${I.szelesseg.tablet}) {
    background:
      radial-gradient(
        ellipse 110% 58% at 50% 48%,
        rgba(20, 20, 20, 0.78) 0%,
        rgba(20, 20, 20, 0.28) 72%
      ),
      linear-gradient(180deg, rgba(20, 20, 20, 0.42) 0%, rgba(20, 20, 20, 0.34) 100%),
      url('/kepek/hos-hatter.png') center 62% / cover no-repeat;
  }
`,qo=F.div`
  position: relative;
  z-index: 1;
  width: min(100%, 820px);
  animation: ${Wo} 0.9s ease 0.15s both;

  @media (max-width: ${I.szelesseg.tablet}) {
    width: 100%;
    text-align: center;
  }
`,Jo=F.h1`
  margin-bottom: 0.9rem;
  font-family: ${I.betu.marka};
  font-size: clamp(2rem, 7.5vw, 5rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.02;
  text-transform: uppercase;
  overflow-wrap: break-word;
  ${La}

  @media (max-width: ${I.szelesseg.tablet}) {
    margin-bottom: 0.7rem;
    font-size: clamp(1.9rem, 8.4vw, 3.1rem);
    letter-spacing: 0.035em;
    line-height: 1.06;
  }
`,Yo=F.p`
  margin-bottom: 0.75rem;
  max-width: 40rem;
  font-family: ${I.betu.cim};
  font-size: clamp(0.82rem, 2vw, 1.05rem);
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${I.szin.feher};

  @media (max-width: ${I.szelesseg.tablet}) {
    margin-bottom: 0.55rem;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    line-height: 1.45;
    text-wrap: balance;
  }
`,Xo=F.p`
  margin-bottom: 1.7rem;
  font-family: ${I.betu.marka};
  font-size: clamp(0.82rem, 1.8vw, 1rem);
  font-style: italic;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${I.szin.aranyVilagos};

  @media (max-width: ${I.szelesseg.tablet}) {
    margin-bottom: 1.35rem;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    line-height: 1.45;
    text-wrap: balance;
  }
`,Zo=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: ${I.szelesseg.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${I.szelesseg.mobil}) {
    flex-direction: column;
    align-items: stretch;

    a {
      width: 100%;
    }
  }
`;function Qo(){let{szoveg:e}=R(),{cegnev:t}=Ho(),n=t.trim()||e.hos.markaNev;return P(Go,{className:`hos-szekcio`,id:`kezdooldal`,"aria-labelledby":`hos-cim`,children:[N(Ko,{className:`hos-hatter`,"aria-hidden":`true`}),P(qo,{className:`hos-tartalom`,children:[N(Jo,{className:`marka-cim`,id:`hos-cim`,children:n}),N(Yo,{className:`hos-alcim`,children:e.hos.alcim}),N(Xo,{className:`hos-motto`,children:e.hos.motto}),P(Zo,{className:`hos-gomb-sor`,children:[N(to,{className:`hos-elsodleges-gomb`,href:`/kapcsolat`,valtozat:`telitett`,mutatNyilat:!0,children:e.hos.elsodlegesGomb}),N(to,{className:`hos-masodlagos-gomb`,href:`/rolunk`,valtozat:`korvonal`,mutatNyilat:!0,children:e.hos.masodlagosGomb})]})]})]})}var $o=F.span`
  ${za}
`;function es({children:e,className:t}){return N($o,{className:t,children:e})}function ts(e){return e.split(/(\+?\d[\d\s.+-]*)/g).map((e,t)=>/^\+?\d[\d\s.+-]*$/.test(e.trim())&&/\d/.test(e)?N(es,{className:`premium-szam`,children:e},`szam-${t}`):N(`span`,{children:e},`szoveg-${t}`))}var ns=F.section`
  background: ${I.hatter.sotet};
  border-top: 1px solid rgba(197, 165, 114, 0.16);
  border-bottom: 1px solid rgba(197, 165, 114, 0.16);
`,rs=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  width: min(100%, ${I.maxTartalom});
  margin: 0 auto;
  padding: 2rem ${I.oldalsoPadding};

  @media (min-width: ${I.szelesseg.kicsi}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${I.szelesseg.mobil}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
`,is=F.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.5rem 0.25rem;
  transition: transform 0.25s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`,as=F.h3`
  font-family: ${I.betu.cim};
  font-size: clamp(0.78rem, 1.5vw, 0.88rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${I.szin.aranyVilagos};
`,os=F.p`
  font-size: clamp(0.8rem, 1.5vw, 0.88rem);
  color: ${I.szin.szurke};
`;function ss(){let{szoveg:e}=R();return N(ns,{className:`ertekek-sav`,"aria-label":e.ertekekAria,children:N(rs,{className:`ertekek-keret`,children:e.ertekek.map(e=>P(is,{className:`ertek-kartya`,children:[N(Wa,{tipus:e.ikon,meret:30,className:`ertek-ikon`}),N(as,{className:`ertek-cim`,children:ts(e.cim)}),N(os,{className:`ertek-leiras`,children:e.leiras})]},e.azonosito))})})}var cs=F.section`
  padding: clamp(3rem, 7vw, 5rem) ${I.oldalsoPadding};
  background: ${I.hatter.fekete};
`,ls=F.div`
  width: min(100%, ${I.maxTartalom});
  margin: 0 auto;
`,us=F.h2`
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  font-family: ${I.betu.cim};
  font-size: clamp(1.35rem, 3.2vw, 2.1rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${La}
`,ds=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: ${I.szelesseg.kicsi}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;
  }
`,fs=F.article`
  position: relative;
  min-height: clamp(240px, 40vw, 300px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.55rem;
  padding: 1.25rem;
  overflow: hidden;
  border: 1px solid rgba(197, 165, 114, 0.22);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.9) 72%),
    url(${e=>e.kep}) center / cover no-repeat;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
      border-color: rgba(197, 165, 114, 0.55);
      box-shadow: ${I.arnyek.aranyFeny};
    }
  }

  &:focus-within {
    ${Ra}
  }
`,ps=F.h3`
  font-family: ${I.betu.cim};
  font-size: clamp(0.78rem, 1.8vw, 0.88rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${I.szin.aranyVilagos};
`,ms=F.p`
  font-size: clamp(0.84rem, 1.6vw, 0.92rem);
  color: ${I.szin.szurke};
`,hs=F.div`
  display: flex;
  justify-content: center;
`;function gs(){let{szoveg:e}=R();return N(cs,{className:`szolgaltatasok-szekcio`,id:`szolgaltatasok`,"aria-labelledby":`szolgaltatasok-cim`,children:P(ls,{children:[N(us,{className:`szolgaltatasok-cim`,id:`szolgaltatasok-cim`,children:e.szolgaltatasokCim}),N(ds,{className:`szolgaltatas-kartya-rac`,children:e.szolgaltatasok.map(e=>P(fs,{className:`szolgaltatas-kartya`,kep:e.kep,children:[N(Wa,{tipus:e.ikon,meret:28,className:`szolgaltatas-ikon`}),N(ps,{className:`szolgaltatas-cim`,children:e.cim}),N(ms,{className:`szolgaltatas-leiras`,children:e.leiras})]},e.azonosito))}),N(hs,{className:`szolgaltatasok-gomb-sor`,children:N(to,{className:`osszes-szolgaltatas-gomb`,href:`/szolgaltatasok`,valtozat:`korvonal`,mutatNyilat:!0,children:e.szolgaltatasokGomb})})]})})}var _s=`/brand/logo-arany.png`,vs=F(Rn)`
  display: inline-flex;
  align-items: center;
  align-self: center;
  height: 44px;
  min-width: 0;
  overflow: visible;
  color: ${I.szin.arany};

  &:focus-visible {
    ${Ra}
  }
`,ys=F.img`
  display: block;
  flex-shrink: 0;
  width: auto;
  height: 40px;
  object-fit: contain;
  object-position: left center;
  transform: scale(1.38);
  transform-origin: left center;

  @media (min-width: ${I.szelesseg.kicsi}) {
    height: 42px;
    transform: scale(1.42);
  }

  @media (min-width: ${I.szelesseg.tablet}) {
    height: 44px;
    transform: scale(1.45);
  }
`;function bs({className:e}){return N(vs,{className:e,to:`/`,"aria-label":`Juliette Logistique`,children:N(ys,{src:_s,alt:``,decoding:`async`})})}var xs=F.section`
  background: ${I.hatter.sotet};
`,Ss=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  width: min(100%, ${I.maxTartalom});
  margin: 0 auto;
  padding: clamp(3rem, 7vw, 5rem) ${I.oldalsoPadding};

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-template-columns: 1.05fr 1fr;
    align-items: center;
    gap: 3rem;
  }
`,Cs=F.div`
  position: relative;
  min-height: clamp(240px, 50vw, 420px);
  overflow: hidden;
  border: 1px solid rgba(197, 165, 114, 0.25);
`,ws=F.img`
  width: 100%;
  height: 100%;
  min-height: clamp(240px, 50vw, 420px);
  object-fit: cover;
`,Ts=F.div`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(78px, 16vw, 118px);
  padding: 0.45rem 0.55rem;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(197, 165, 114, 0.4);
  backdrop-filter: blur(2px);
`,Es=F.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
`,Ds=F.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  min-width: 0;
`,Os=F.h2`
  font-family: ${I.betu.cim};
  font-size: clamp(1.2rem, 3vw, 1.85rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.25;
  text-transform: uppercase;
  ${La}
`,ks=F.p`
  max-width: 34rem;
  color: ${I.szin.szurke};
  font-size: clamp(0.92rem, 1.8vw, 1rem);
`,As=F.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.7rem 1.2rem;

  @media (min-width: ${I.szelesseg.kicsi}) {
    grid-template-columns: 1fr 1fr;
  }
`,js=F.li`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: clamp(0.86rem, 1.6vw, 0.95rem);
  color: ${I.szin.feher};

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border: 1px solid ${I.szin.arany};
    transform: rotate(45deg);
    flex-shrink: 0;
  }
`;function Ms(){let{szoveg:e}=R();return N(xs,{className:`rolunk-szekcio`,id:`rolunk`,"aria-labelledby":`rolunk-cim`,children:P(Ss,{className:`rolunk-keret`,children:[P(Cs,{className:`rolunk-kep-oldal`,children:[N(ws,{className:`rolunk-kep`,src:`/kepek/kamion-rolunk.png`,alt:e.rolunk.kepAlt,loading:`lazy`,decoding:`async`}),N(Ts,{className:`rolunk-logo-jelveny`,children:N(Es,{className:`rolunk-logo-kep`,src:_s,alt:`Juliette Logistique`})})]}),P(Ds,{className:`rolunk-szoveg-oldal`,children:[N(Os,{className:`rolunk-cim`,id:`rolunk-cim`,children:e.rolunk.cim}),N(ks,{className:`rolunk-bekezdes`,children:e.rolunk.bekezdes}),N(As,{className:`rolunk-elony-lista`,children:e.rolunk.pontok.map(e=>N(js,{className:`rolunk-elony-pont`,children:e},e))}),N(`div`,{children:N(to,{className:`rolunk-gomb`,href:`/rolunk`,valtozat:`korvonal`,mutatNyilat:!0,children:e.rolunk.gomb})})]})]})})}Ro.telefonszam;var Ns=[{azonosito:`sixt`,nev:`SIXT`,kep:`/kepek/partnerek/sixt.png`},{azonosito:`europcar`,nev:`Europcar`,kep:`/kepek/partnerek/europcar.png`},{azonosito:`avis`,nev:`Avis`,kep:`/kepek/partnerek/avis.png`},{azonosito:`kroschke`,nev:`Kroschke`,kep:`/kepek/partnerek/kroschke.png`},{azonosito:`finn`,nev:`FINN`,kep:`/kepek/partnerek/finn.png`}],Ps=F.section`
  padding: clamp(3rem, 6vw, 4.5rem) ${I.oldalsoPadding};
  background: ${I.hatter.fekete};
  text-align: center;
`,Fs=F.div`
  width: min(100%, ${I.maxTartalom});
  margin: 0 auto;
`,Is=F.h2`
  margin-bottom: 2.2rem;
  font-family: ${I.betu.cim};
  font-size: clamp(1.25rem, 3vw, 1.9rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${La}
`,Ls=F.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.75rem 2.25rem;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  @media (min-width: ${I.szelesseg.mobil}) {
    gap: 2.25rem 3.25rem;
  }
`,Rs=F.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(120px, 18vw, 170px);
  height: clamp(56px, 9vw, 72px);
  margin: 0;
  padding: 0;
  background: transparent;
  opacity: 0.9;
  transition: opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
      transform: translateY(-3px);
      filter: drop-shadow(0 0 14px rgba(197, 165, 114, 0.2));
    }
  }
`,zs=F.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  object-fit: contain;
  object-position: center;
  background: transparent;
`;function Bs(){let{szoveg:e}=R();return N(Ps,{className:`partnerek-szekcio`,id:`partnerek`,"aria-labelledby":`partnerek-cim`,children:P(Fs,{children:[N(Is,{className:`partnerek-cim`,id:`partnerek-cim`,children:e.partnerekCim}),N(Ls,{className:`partner-logo-sor`,children:Ns.map(e=>N(Rs,{className:`partner-logo-doboz`,children:N(zs,{className:`partner-logo-kep`,src:e.kep,alt:`${e.nev} logo`,loading:`lazy`,decoding:`async`})},e.azonosito))})]})})}var Vs=F.section`
  background: ${I.hatter.emelt};
  border-top: 1px solid rgba(197, 165, 114, 0.22);
`,Hs=F.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 1.2rem;
  width: min(100%, ${I.maxTartalom});
  margin: 0 auto;
  padding: clamp(1.8rem, 4vw, 2.4rem) ${I.oldalsoPadding};

  @media (min-width: ${I.szelesseg.mobil}) {
    flex-direction: row;
    align-items: center;
  }
`,Us=F.h2`
  font-family: ${I.betu.cim};
  font-size: clamp(1.05rem, 2.8vw, 1.6rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${La}
`,Ws=F.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.6rem;
  padding:
    1.2rem
    ${I.oldalsoPadding}
    max(1.5rem, env(safe-area-inset-bottom, 0px));
  background: ${I.hatter.fekete};
  border-top: 1px solid rgba(197, 165, 114, 0.12);
  color: ${I.szin.szurke};
  font-size: clamp(0.78rem, 1.6vw, 0.86rem);

  @media (min-width: ${I.szelesseg.kicsi}) {
    flex-direction: row;
    align-items: center;
  }
`,Gs=F.span`
  color: ${I.szin.arany};
`,Ks=F.a`
  color: ${I.szin.aranyVilagos};

  &:hover {
    text-decoration: underline;
  }
`;function qs(){let e=Uo(),{cegnev:t}=Ho(),{szoveg:n}=R();return P(va,{children:[N(Vs,{className:`lablec-cta-szekcio`,id:`kapcsolat`,"aria-labelledby":`kapcsolat-cim`,children:P(Hs,{className:`lablec-cta-keret`,children:[N(Us,{className:`lablec-kerdes`,id:`kapcsolat-cim`,children:n.lablec.kerdes}),N(to,{className:`lablec-kapcsolat-gomb`,href:`/kapcsolat`,valtozat:`telitett`,mutatNyilat:!0,ariaLabel:`${n.lablec.gomb}: ${e}`,children:n.lablec.gomb})]})}),P(Ws,{className:`lablec-keret`,children:[P(`p`,{className:`lablec-marka`,children:[N(Gs,{children:t}),` `,n.lablec.markaLeiras]}),N(`p`,{className:`lablec-telefon`,children:N(Ks,{href:`tel:${e.replace(/\s/g,``)}`,children:N(es,{children:e})})})]})]})}function Js(e,t,n=`name`){let r=document.head.querySelector(`meta[${n}="${e}"]`);r||(r=document.createElement(`meta`),r.setAttribute(n,e),document.head.appendChild(r)),r.setAttribute(`content`,t)}function Ys(e,t){let n=document.head.querySelector(`link[rel="${e}"]`);n||(n=document.createElement(`link`),n.setAttribute(`rel`,e),document.head.appendChild(n)),n.setAttribute(`href`,t)}function Xs(e){let t=`juliette-jsonld`,n=document.getElementById(t);n||(n=document.createElement(`script`),n.id=t,n.type=`application/ld+json`,document.head.appendChild(n)),n.textContent=JSON.stringify(e)}function Zs({feluliras:e}){let{telefonszam:t,cegnev:n,email:r,cim:i}=Ho(),{nyelv:a,szoveg:o}=R(),s=e?.cim??o.seo.cim,c=e?.leiras??o.seo.leiras,l=e?.kulcsszavak??o.seo.kulcsszavak;return(0,x.useEffect)(()=>{let e=window.location.origin+window.location.pathname,o=`${window.location.origin}/favicon-192.png`,u=`${window.location.origin}/favicon-512.png`;document.title=s,Js(`description`,c),Js(`keywords`,l),Js(`robots`,`index, follow`),Js(`theme-color`,`#141414`),Js(`og:type`,`website`,`property`),Js(`og:site_name`,n,`property`),Js(`og:title`,s,`property`),Js(`og:description`,c,`property`),Js(`og:locale`,a===`hu`?`hu_HU`:a===`de`?`de_DE`:`en_US`,`property`),Js(`og:url`,e,`property`),Js(`og:image`,u,`property`),Js(`twitter:card`,`summary`),Js(`twitter:title`,s),Js(`twitter:description`,c),Js(`twitter:image`,u),Ys(`canonical`,e);let d={"@context":`https://schema.org`,"@type":`Organization`,name:n,url:window.location.origin,logo:o,image:o,description:c,telephone:t,areaServed:[`DE`,`EU`],sameAs:[],contactPoint:{"@type":`ContactPoint`,telephone:t,contactType:`customer service`,availableLanguage:[`hu`,`en`,`de`],...r?{email:r}:{}}};r&&(d.email=r),i&&(d.address={"@type":`PostalAddress`,streetAddress:i}),Xs(d)},[a,s,c,l,t,n,r,i]),null}var Qs=F.a`
  position: absolute;
  left: 1rem;
  top: -100px;
  z-index: 1000;
  padding: 0.75rem 1rem;
  background: ${I.szin.arany};
  color: ${I.hatter.fekete};
  font-family: ${I.betu.cim};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  &:focus {
    top: 1rem;
  }

  &:focus-visible {
    top: 1rem;
  }
`;function $s(){let{szoveg:e}=R();return N(Qs,{className:`ugras-a-tartalomra`,href:`#fo-tartalom`,children:e.ugrasATartalomra})}var ec=F.div`
  min-height: 100%;
  overflow-x: clip;
  background: ${I.hatter.fekete};
  color: ${I.szin.feher};
`,tc=F.main`
  display: block;
`;function nc(){return P(ec,{className:`fooldal-keret`,children:[N(Zs,{}),N($s,{}),P(tc,{className:`fo-tartalom`,id:`fo-tartalom`,children:[N(Qo,{}),N(ss,{}),N(gs,{}),N(Ms,{}),N(Bs,{}),N(qs,{})]})]})}var rc=F.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-height: 100svh;
  overflow-x: clip;
  background: ${I.hatter.fekete};
  color: ${I.szin.feher};
`,ic=F.main`
  display: block;
  flex: 1 0 auto;
  padding-top: clamp(5.5rem, 12vh, 7rem);
  padding-bottom: clamp(3rem, 8vh, 5rem);
`,ac=F.div`
  width: min(100%, ${I.maxTartalom});
  margin: 0 auto;
  padding: 0 ${I.oldalsoPadding};
`,oc=F.h1`
  margin: 0 0 0.85rem;
  font-family: ${I.betu.cim};
  font-size: clamp(1.45rem, 3.4vw, 2.35rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.22;
  text-transform: uppercase;
  text-wrap: balance;
  ${La}
`,sc=F.p`
  margin: 0 0 1.75rem;
  max-width: 42rem;
  font-family: ${I.betu.torzs};
  font-size: clamp(0.98rem, 1.8vw, 1.12rem);
  font-style: italic;
  letter-spacing: 0.03em;
  line-height: 1.6;
  color: ${I.szin.arany};
`,cc=F.p`
  margin: 0 0 1.15rem;
  max-width: 46rem;
  color: ${I.szin.szurke};
  font-size: clamp(0.94rem, 1.5vw, 1.05rem);
  line-height: 1.75;
`,lc=F.h2`
  margin: 2.75rem 0 1.25rem;
  font-family: ${I.betu.cim};
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${La}
`,uc=F.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 0 0 1.5rem;
  padding: 0;
  list-style: none;
  max-width: 46rem;
`,dc=F.li`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  color: ${I.szin.feher};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.55;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    margin-top: 0.45rem;
    flex-shrink: 0;
    border: 1px solid ${I.szin.arany};
    transform: rotate(45deg);
  }
`,fc=F.footer`
  flex-shrink: 0;
  margin-top: auto;
  border-top: 1px solid rgba(197, 165, 114, 0.22);
  padding: 1.75rem ${I.oldalsoPadding} 2.25rem;
  background: ${I.hatter.sotet};
`,pc=F.div`
  width: min(100%, ${I.maxTartalom});
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,mc=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  font-size: 0.95rem;
`;function hc({children:e,seo:t}){let n=Uo(),{szoveg:r}=R();return P(rc,{className:`tartalom-oldal-keret`,children:[N(Zs,{feluliras:t}),N($s,{}),N(ic,{className:`tartalom-fo`,id:`fo-tartalom`,children:e}),N(fc,{className:`tartalom-also-sav`,children:P(pc,{children:[N(mc,{children:r.lablec.markaLeiras}),N(to,{href:`tel:${n.replace(/\s/g,``)}`,valtozat:`telefon`,mutatTelefont:!0,ariaLabel:n,children:N(es,{children:n})})]})})]})}function gc(e=.18){let t=(0,x.useRef)(null),[n,r]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{let n=t.current;if(!n)return;let i=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(r(!0),i.unobserve(e.target))})},{threshold:e,rootMargin:`0px 0px -8% 0px`});return i.observe(n),()=>i.disconnect()},[e]),{referencia:t,lathato:n}}var _c=F.div`
  ${Ha}

  &:not(:last-child) {
    margin-bottom: 0.35rem;
  }
`;function vc({children:e,className:t,kuszob:n=.15}){let{referencia:r,lathato:i}=gc(n);return N(_c,{ref:r,className:[t,i?`lathato`:void 0].filter(Boolean).join(` `)||void 0,children:e})}var yc=F(ac)`
  text-align: center;

  h1,
  h2,
  h3 {
    text-align: center;
  }

  p {
    margin-left: auto;
    margin-right: auto;
  }

  ul {
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  li {
    justify-content: center;
    text-align: center;
  }
`,bc=F(vc)`
  width: 100%;
`,xc=F.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`,Sc=F(uc)`
  align-items: center;
`,Cc=F.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin: 1.5rem 0 2rem;

  @media (min-width: ${I.szelesseg.mobil}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,wc=F.article`
  padding: 1.35rem 1.25rem;
  border: 1px solid rgba(197, 165, 114, 0.22);
  background: rgba(255, 255, 255, 0.02);
  text-align: center;
`,Tc=F.h3`
  margin: 0 0 0.65rem;
  font-family: ${I.betu.cim};
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${I.szin.aranyVilagos};
`,Ec=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  font-size: 0.92rem;
  line-height: 1.6;
`;function Dc(){let{szoveg:e}=R(),t=e.oldalak.rolunk;return N(hc,{seo:t.seo,children:P(yc,{children:[P(bc,{children:[N(oc,{children:t.cim}),N(sc,{children:t.alcim})]}),N(bc,{children:t.bekezdesek.map(e=>N(cc,{children:e},e.slice(0,24)))}),P(bc,{children:[N(lc,{children:t.ertekekCim}),N(Cc,{children:t.ertekek.map(e=>P(wc,{children:[N(Tc,{children:e.cim}),N(Ec,{children:e.leiras})]},e.cim))})]}),P(bc,{children:[N(lc,{children:t.folyamatCim}),N(Cc,{children:t.folyamat.map(e=>P(wc,{children:[N(Tc,{children:e.cim}),N(Ec,{children:e.leiras})]},e.cim))})]}),N(bc,{children:N(xc,{children:N(to,{href:`/kapcsolat`,valtozat:`telitett`,mutatNyilat:!0,children:t.cta})})})]})})}var Oc=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  margin: 1.75rem 0 2rem;
`,kc=F.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${I.maxTartalom};
  margin: 0 auto;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(197, 165, 114, 0.22);
  text-align: center;

  @media (min-width: ${I.szelesseg.tablet}) {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: clamp(1.5rem, 3vw, 2.5rem);
    align-items: center;
    justify-items: center;
  }
`,Ac=F.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,jc=F.h2`
  margin: 0 0 0.75rem;
  font-family: ${I.betu.cim};
  font-size: clamp(0.98rem, 1.8vw, 1.15rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${La}
`,Mc=F.img`
  display: block;
  width: 100%;
  max-width: min(100%, 28rem);
  margin: 0 auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border: 1px solid rgba(197, 165, 114, 0.25);

  @media (min-width: ${I.szelesseg.tablet}) {
    max-width: 100%;
  }
`;function Nc(){let{szoveg:e}=R(),t=e.oldalak.szolgaltatasok,n=Object.fromEntries(e.szolgaltatasok.map(e=>[e.azonosito,e.kep]));return N(hc,{seo:t.seo,children:P(yc,{children:[P(bc,{children:[N(oc,{children:t.cim}),N(sc,{children:t.alcim}),N(cc,{children:t.bevezeto})]}),N(Oc,{children:t.tetelek.map(e=>N(bc,{children:P(kc,{children:[P(Ac,{children:[N(jc,{children:e.cim}),N(cc,{children:e.leiras}),N(Sc,{children:e.pontok.map(e=>N(dc,{children:e},e))})]}),n[e.azonosito]?N(Mc,{src:n[e.azonosito],alt:e.cim,loading:`lazy`,decoding:`async`}):null]})},e.azonosito))}),N(bc,{children:N(xc,{children:N(to,{href:`/kapcsolat`,valtozat:`telitett`,mutatNyilat:!0,children:t.cta})})})]})})}var Pc=F.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.75rem 2.5rem;
  width: 100%;
  margin: 1.75rem 0 2rem;
  padding: 0;
  list-style: none;
`,Fc=F.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(120px, 18vw, 170px);
  height: clamp(56px, 9vw, 72px);
`,Ic=F.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;function Lc(){let{szoveg:e}=R(),t=e.oldalak.partnerek;return N(hc,{seo:t.seo,children:P(yc,{children:[P(bc,{children:[N(oc,{children:t.cim}),N(sc,{children:t.alcim}),t.bekezdesek.map(e=>N(cc,{children:e},e.slice(0,24)))]}),N(bc,{children:N(Pc,{children:Ns.map(e=>N(Fc,{children:N(Ic,{src:e.kep,alt:e.nev,loading:`lazy`,decoding:`async`})},e.azonosito))})}),P(bc,{children:[N(lc,{children:t.elonyokCim}),N(Sc,{children:t.elonyok.map(e=>N(dc,{children:e},e))})]}),N(bc,{children:N(xc,{children:N(to,{href:`/kapcsolat`,valtozat:`telitett`,mutatNyilat:!0,children:t.cta})})})]})})}function Rc(e,t){return{terulet:e.terulet.trim()||t.teruletErtek,elerhetoseg:e.elerhetoseg.trim()||t.idopontErtek,email:e.email.trim(),cim:e.cim.trim()}}var zc=F.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.35rem 0;
  width: 100%;
  max-width: 28rem;
  margin: 2rem auto;
  text-align: center;
  justify-items: center;
`,Bc=F.dt`
  margin: 1rem 0 0.25rem;
  font-family: ${I.betu.cim};
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${La}
`,V=F.dd`
  margin: 0;
  color: ${I.szin.feher};
  font-size: 1.02rem;
  line-height: 1.5;
`,Vc=F.a`
  color: ${I.szin.aranyVilagos};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;function Hc(){let e=Uo(),t=Ho(),{szoveg:n}=R(),r=n.oldalak.kapcsolat,i=Rc(t,r);return N(hc,{seo:r.seo,children:P(yc,{children:[P(bc,{children:[N(oc,{children:r.cim}),N(sc,{children:r.alcim}),r.bekezdesek.map(e=>N(cc,{children:e},e.slice(0,24)))]}),N(bc,{children:P(zc,{children:[N(Bc,{children:r.telefonCimke}),N(V,{children:N(es,{children:e})}),i.email?P(va,{children:[N(Bc,{children:r.emailCimke}),N(V,{children:N(Vc,{href:`mailto:${i.email}`,children:i.email})})]}):null,i.cim?P(va,{children:[N(Bc,{children:r.cimCimke}),N(V,{children:i.cim})]}):null,N(Bc,{children:r.teruletCimke}),N(V,{children:i.terulet}),N(Bc,{children:r.idopontCimke}),N(V,{children:i.elerhetoseg})]})}),N(bc,{children:N(xc,{children:N(to,{href:`tel:${e.replace(/\s/g,``)}`,valtozat:`telitett`,mutatTelefont:!0,ariaLabel:e,children:r.cta})})})]})})}var Uc=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding:
    clamp(5.5rem, 12vh, 7rem)
    ${I.oldalsoPadding}
    clamp(3rem, 8vh, 5rem);
  color: ${I.szin.feher};
`,Wc=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 56rem);
`,Gc=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 55vh;
  max-width: 42rem;
  padding: 0 0.5rem;
  font-family: ${I.betu.cim};
  font-size: clamp(1.45rem, 3.4vw, 2.25rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.28;
  text-wrap: balance;
  opacity: ${e=>+!!e.lathato};
  transition: opacity 0.8s ease;
  ${La}
`,Kc=F.h1`
  position: relative;
  width: 100%;
  margin: 0 0 1.6rem;
  padding-bottom: 1.25rem;
  font-family: ${I.betu.cim};
  font-size: clamp(1.25rem, 2.8vw, 1.85rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.22;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  ${La}

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 3.2rem;
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent,
      ${I.szin.arany},
      transparent
    );
  }
`,qc=F.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 0.25rem 0 3rem;
  opacity: ${e=>+!!e.lathato};
  transition: opacity 0.8s ease;
`,Jc=F.p`
  width: 100%;
  max-width: 42rem;
  margin: 0 auto 2rem;
  font-family: ${I.betu.torzs};
  font-size: clamp(0.98rem, 1.7vw, 1.08rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.75;
  letter-spacing: 0.02em;
  text-align: center;
  text-wrap: pretty;
  color: ${I.szin.szurke};
`,Yc=F.h2`
  width: 100%;
  margin: 0 0 1.6rem;
  font-family: ${I.betu.cim};
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  ${La}
`,Xc=F.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  width: 100%;
  max-width: 52rem;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`,Zc=F.li`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.95rem 0;
  border-bottom: 1px solid rgba(197, 165, 114, 0.14);
  font-family: ${I.betu.torzs};
  font-size: clamp(0.86rem, 1.35vw, 0.96rem);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01em;
  text-align: left;
  text-wrap: pretty;
  white-space: nowrap;
  color: ${I.szin.szurke};

  &:first-of-type {
    border-top: 1px solid rgba(197, 165, 114, 0.14);
  }

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border: 1px solid ${I.szin.arany};
    transform: rotate(45deg);
  }

  @media (max-width: ${I.szelesseg.tablet}) {
    align-items: flex-start;
    white-space: normal;

    &::before {
      margin-top: 0.45rem;
    }
  }
`,Qc=F.div`
  /* Videó később — helykitöltő rejtve */
  display: none;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 0.25rem 0 2.75rem;
  overflow: hidden;
  background:
    radial-gradient(
      ellipse 55% 50% at 50% 45%,
      rgba(197, 165, 114, 0.1),
      transparent 70%
    ),
    linear-gradient(
      165deg,
      ${I.hatter.sotet} 0%,
      ${I.hatter.emelt} 48%,
      ${I.hatter.kartya} 100%
    );
  border: 1px solid rgba(197, 165, 114, 0.32);
  box-shadow:
    inset 0 1px 0 rgba(232, 215, 181, 0.08),
    0 18px 40px rgba(0, 0, 0, 0.28);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.25rem;
    height: 3.25rem;
    border: 1px solid rgba(197, 165, 114, 0.55);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.85;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(50% + 2px);
    transform: translate(-40%, -50%);
    border-style: solid;
    border-width: 0.55rem 0 0.55rem 0.9rem;
    border-color: transparent transparent transparent ${I.szin.arany};
    opacity: 0.8;
  }
`,$c=F.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-width: min(100%, 22rem);
  min-height: 48px;
  margin: 2.5rem auto 0;
  padding: 0.95rem 1.85rem;
  cursor: pointer;
  font-family: ${I.betu.cim};
  font-size: clamp(0.72rem, 1.4vw, 0.84rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  ${Va}
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    background-position 0.55s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    ${Ra}
  }
`,el=F.span`
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  color: ${I.hatter.fekete};
`,tl=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 0.5rem;
  ${Ha}
`;function nl({lathato:e,tartalom:t}){let n=Ct(),r=gc(.2),i=gc(.2),a=gc(.2),o=gc(.2);return P(qc,{lathato:e,children:[N(Kc,{children:t.allomasCim}),N(Jc,{children:t.bevezeto}),N(Qc,{className:`video-hely`,"aria-hidden":`true`}),P(tl,{ref:r.referencia,className:r.lathato?`lathato`:void 0,children:[N(Yc,{children:t.feladatokCim}),N(Xc,{children:t.feladatok.map(e=>N(Zc,{children:e},e.slice(0,32)))})]}),P(tl,{ref:i.referencia,className:i.lathato?`lathato`:void 0,children:[N(Yc,{children:t.elvarasokCim}),N(Xc,{children:t.elvarasok.map(e=>N(Zc,{children:e},e.slice(0,32)))})]}),P(tl,{ref:a.referencia,className:a.lathato?`lathato`:void 0,children:[N(Yc,{children:t.kinalunkCim}),N(Xc,{children:t.kinalunk.map(e=>N(Zc,{children:e},e.slice(0,32)))})]}),N(tl,{ref:o.referencia,className:o.lathato?`lathato`:void 0,children:N($c,{type:`button`,onClick:()=>n(`/karrier/jelentkezes`),children:N(el,{children:t.cta})})})]})}function rl(){let{szoveg:e}=R(),t=e.karrier,[n,r]=(0,x.useState)(0),[i,a]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{let e=window.setTimeout(()=>{a(!0)},200),t=window.setTimeout(()=>{a(!1)},2800),n=window.setTimeout(()=>{r(1),a(!0)},3600),i=window.setTimeout(()=>{a(!1)},6200),o=window.setTimeout(()=>{r(2),a(!0)},7e3);return()=>{window.clearTimeout(e),window.clearTimeout(t),window.clearTimeout(n),window.clearTimeout(i),window.clearTimeout(o)}},[]),P(va,{children:[N(Zs,{feluliras:t.seo}),N(Uc,{className:`karrier-oldal`,children:N(Wc,{children:n===0?N(Gc,{lathato:i,children:t.animacioCim1}):n===1?N(Gc,{lathato:i,children:t.animacioCim2}):n===2?N(nl,{lathato:i,tartalom:t}):null})})]})}var il=c(m(),1),al=yr.hibak,ol=1050,sl=660,cl=new Set([`image/jpeg`,`image/jpg`,`image/png`,`image/webp`]);function ll(e){return e.type===`application/pdf`||cl.has(e.type)||/\.(jpe?g|png|webp)$/i.test(e.name)}function ul(e){return e.type===`application/pdf`||e.name.toLowerCase().endsWith(`.pdf`)}function dl(e){return cl.has(e.type)||/\.(jpe?g|png|webp)$/i.test(e.name)}async function fl(e){if(!dl(e))throw Error(`A profilkép csak JPG, PNG vagy WebP lehet.`);let t=URL.createObjectURL(e);try{let n=await new Promise((e,n)=>{let r=new Image;r.onload=()=>e(r),r.onerror=()=>n(Error(`A kép nem olvasható.`)),r.src=t}),{width:r,height:i}=n,a=r/i,o=ol/sl;(r>ol||i>sl)&&(a>=o?(r=ol,i=Math.round(r/a)):(i=sl,r=Math.round(i*a)));let s=document.createElement(`canvas`);s.width=r,s.height=i;let c=s.getContext(`2d`);if(!c)throw Error(`A kép átméretezése nem sikerült.`);c.drawImage(n,0,0,r,i);let l=await new Promise((e,t)=>{s.toBlob(n=>n?e(n):t(Error(`A kép mentése nem sikerült.`)),`image/jpeg`,.88)}),u=e.name.replace(/\.[^.]+$/,``)||`profilkep`;return new File([l],`${u}-igazolvany.jpg`,{type:`image/jpeg`,lastModified:Date.now()})}finally{URL.revokeObjectURL(t)}}function pl(e,t=al){switch(e){case`oneletrajz`:case`referencia`:return t.fajlPdf;case`profilkep`:return t.fajlKep;default:return t.fajlKepVagyPdf}}function ml(e,t,n=al){switch(e){case`oneletrajz`:case`referencia`:return ul(t)?null:pl(e,n);case`profilkep`:return dl(t)?null:pl(e,n);default:return ll(t)?null:pl(e,n)}}var hl=yr.hibak;function H(e){return e.trim().length===0}function gl(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function _l(){let e=new Date,t=new Date(e.getFullYear()-18,e.getMonth(),e.getDate());return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}function vl(e){let t=e.trim().split(`-`);if(t.length!==3)return!1;let n=Number(t[0]),r=Number(t[1])-1,i=Number(t[2]);if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i))return!1;let a=new Date(n,r,i);if(Number.isNaN(a.getTime())||a.getFullYear()!==n||a.getMonth()!==r||a.getDate()!==i)return!1;let o=new Date,s=new Date(o.getFullYear()-18,o.getMonth(),o.getDate());return a.getTime()<=s.getTime()}function yl(e,t=hl){let n={};H(e.teljesNev)&&(n.teljesNev=t.kotelezo),H(e.szuletesiDatum)?n.szuletesiDatum=t.kotelezo:vl(e.szuletesiDatum)||(n.szuletesiDatum=t.tizennyolcEv),H(e.telefon)&&(n.telefon=t.kotelezo),H(e.email)?n.email=t.kotelezo:gl(e.email)||(n.email=t.email),H(e.lakhely)&&(n.lakhely=t.kotelezo),H(e.orszag)&&(n.orszag=t.valasztas),H(e.bJogositvanyEve)&&(n.bJogositvanyEve=t.valasztas),H(e.professzionalisEv)&&(n.professzionalisEv=t.valasztas),H(e.soforkentNemetorszag)&&(n.soforkentNemetorszag=t.valasztas),e.korabbiTerulet.length===0&&(n.korabbiTerulet=t.legalabbEgy),e.korabbiTerulet.includes(`Egyéb`)&&H(e.korabbiTeruletEgyeb)&&(n.korabbiTeruletEgyeb=t.egyeb),H(e.premiumTapasztalat)&&(n.premiumTapasztalat=t.valasztas),e.premiumMarkak.length===0&&(n.premiumMarkak=t.legalabbEgy),e.premiumMarkak.includes(`Egyéb`)&&H(e.premiumMarkaEgyeb)&&(n.premiumMarkaEgyeb=t.egyeb),H(e.premiumGyakorisag)&&(n.premiumGyakorisag=t.valasztas),H(e.automataValto)&&(n.automataValto=t.valasztas),H(e.munkavallalasiJog)&&(n.munkavallalasiJog=t.valasztas),H(e.nemetorszagiCim)&&(n.nemetorszagiCim=t.valasztas),H(e.munkabaAllas)&&(n.munkabaAllas=t.valasztas),H(e.rugalmassag)&&(n.rugalmassag=t.valasztas),e.jogositvanyKategoria.length===0&&(n.jogositvanyKategoria=t.legalabbEgy),e.jogositvanyKategoria.includes(`Egyéb`)&&H(e.jogositvanyEgyeb)&&(n.jogositvanyEgyeb=t.egyeb),H(e.jogositvanyErvenyes)&&(n.jogositvanyErvenyes=t.valasztas),H(e.eltiltas)&&(n.eltiltas=t.valasztas),H(e.erkolesi)&&(n.erkolesi=t.valasztas),H(e.nemetNyelv)&&(n.nemetNyelv=t.valasztas),H(e.angolNyelv)&&(n.angolNyelv=t.valasztas),H(e.okostelefon)&&(n.okostelefon=t.valasztas),H(e.navigacio)&&(n.navigacio=t.valasztas),H(e.gpsKovetes)&&(n.gpsKovetes=t.valasztas),H(e.hosszuUt)&&(n.hosszuUt=t.valasztas),H(e.hetvege)&&(n.hetvege=t.valasztas),H(e.tobbnapos)&&(n.tobbnapos=t.valasztas),H(e.hetiNapok)&&(n.hetiNapok=t.valasztas),H(e.haromEvAktiv)&&(n.haromEvAktiv=t.valasztas),H(e.haromEvProf)&&(n.haromEvProf=t.valasztas),H(e.premiumSzuro)&&(n.premiumSzuro=t.valasztas),H(e.biztonsagosVezetes)&&(n.biztonsagosVezetes=t.valasztas),H(e.gondosKezeles)&&(n.gondosKezeles=t.valasztas),H(e.ellenorzesElfogadas)&&(n.ellenorzesElfogadas=t.valasztas),H(e.motivacio)&&(n.motivacio=t.kotelezo),H(e.tapasztalatLeiras)&&(n.tapasztalatLeiras=t.kotelezo);for(let r of[`szemelyiElolap`,`szemelyiHatlap`,`jogositvanyElolap`,`jogositvanyHatlap`,`fuehrungszeugnis`,`oneletrajz`,`profilkep`,`referencia`]){if(r===`fuehrungszeugnis`&&(e.erkolesi===`Nem`||e.erkolesi===`Beszerzés alatt`))continue;let i=e.feltoltesek[r];if(!i){n[`feltoltes.${r}`]=t.fajl;continue}let a=ml(r,i,t);a&&(n[`feltoltes.${r}`]=a)}return e.adatvedelem||(n.adatvedelem=t.adatvedelem),e.hozzajarulas||(n.hozzajarulas=t.hozzajarulas),n}function bl(e,t=hl){return Object.keys(yl(e,t)).length===0}function xl(){let e=document.getElementById(`root`);if(!e)throw Error(`Nem található a #root görgetési konténer.`);return e}function Sl(e=`auto`){xl().scrollTo({top:0,left:0,behavior:e})}var Cl={teljesNev:``,szuletesiDatum:``,telefon:``,email:``,lakhely:``,orszag:``,bJogositvanyEve:``,professzionalisEv:``,soforkentNemetorszag:``,korabbiTerulet:[],korabbiTeruletEgyeb:``,premiumTapasztalat:``,premiumMarkak:[],premiumMarkaEgyeb:``,premiumGyakorisag:``,automataValto:``,munkavallalasiJog:``,nemetorszagiCim:``,munkabaAllas:``,rugalmassag:``,jogositvanyKategoria:[],jogositvanyEgyeb:``,jogositvanyErvenyes:``,eltiltas:``,erkolesi:``,nemetNyelv:``,angolNyelv:``,okostelefon:``,navigacio:``,gpsKovetes:``,hosszuUt:``,hetvege:``,tobbnapos:``,hetiNapok:``,haromEvAktiv:``,haromEvProf:``,premiumSzuro:``,biztonsagosVezetes:``,gondosKezeles:``,ellenorzesElfogadas:``,motivacio:``,tapasztalatLeiras:``,adatvedelem:!1,hozzajarulas:!1,feltoltesek:{szemelyiElolap:null,szemelyiHatlap:null,jogositvanyElolap:null,jogositvanyHatlap:null,fuehrungszeugnis:null,oneletrajz:null,profilkep:null,referencia:null}},wl=`
  width: 100%;
  padding: 0.85rem 1rem;
  color: ${I.szin.feher};
  font-family: ${I.betu.torzs};
  font-size: 0.98rem;
  line-height: 1.45;
  background: rgba(255, 255, 255, 0.035);
  border: ${L};
  border-radius: 0;
  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  &::placeholder {
    color: ${I.szin.szurkeSotet};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &:focus {
    outline: none;
    border-color: rgba(232, 215, 181, 0.75);
    background: rgba(197, 165, 114, 0.08);
    box-shadow: 0 0 0 1px rgba(197, 165, 114, 0.2);
  }

  &:focus-visible {
    ${Ra}
  }
`,Tl=`
  border-color: rgba(220, 120, 90, 0.85);
  box-shadow: 0 0 0 1px rgba(220, 120, 90, 0.25);

  &:focus {
    border-color: rgba(220, 120, 90, 0.95);
    box-shadow: 0 0 0 1px rgba(220, 120, 90, 0.35);
  }
`,El=F.span`
  display: block;
  margin-top: 0.2rem;
  font-size: 0.82rem;
  line-height: 1.45;
  color: #e2a08a;
`,Dl=F.p`
  width: 100%;
  max-width: 36rem;
  margin: 0;
  text-align: center;
  font-size: 0.88rem;
  line-height: 1.55;
  color: #e2a08a;
`,Ol=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding:
    clamp(5.5rem, 12vh, 7rem)
    ${I.oldalsoPadding}
    clamp(3.5rem, 9vh, 6rem);
  color: ${I.szin.feher};
`,kl=F.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 46rem);
`,Al=F.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2.75rem;
`,jl=F.h1`
  margin: 0 0 0.85rem;
  font-family: ${I.betu.cim};
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.25;
  text-transform: uppercase;
  text-wrap: balance;
  ${La}
`,Ml=F.p`
  margin: 0 0 1.25rem;
  font-family: ${I.betu.torzs};
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-style: italic;
  letter-spacing: 0.04em;
  color: ${I.szin.arany};
`,Nl=F.p`
  max-width: 40rem;
  margin: 0;
  font-family: ${I.betu.torzs};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.7;
  color: ${I.szin.szurke};
`,Pl=F.p`
  margin: 0;
  font-family: ${I.betu.torzs};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.7;
  color: ${I.szin.szurke};
`,Fl=F.form`
  display: flex;
  flex-direction: column;
  gap: 0;
`,Il=F.section`
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
  padding: 2.25rem 0;
  border-top: 1px solid rgba(197, 165, 114, 0.22);
`,Ll=F.h2`
  margin: 0;
  font-family: ${I.betu.cim};
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  ${La}
`,U=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`,W=F.label`
  font-family: ${I.betu.cim};
  font-size: 0.86rem;
  letter-spacing: 0.06em;
  color: ${I.szin.aranyVilagos};
`,Rl=F.span`
  display: block;
  margin-top: 0.35rem;
  font-size: 0.82rem;
  line-height: 1.5;
  color: ${I.szin.szurkeSotet};
`,zl=F.input`
  ${wl}
  ${e=>e.$hibas?Tl:``}
`,G=F.input`
  ${wl}
  color-scheme: dark;
  ${e=>e.$hibas?Tl:``}
`,Bl=F.select`
  ${wl}
  appearance: none;
  color: ${I.szin.feher};
  background-color: rgba(255, 255, 255, 0.035);
  color-scheme: dark;

  option {
    color: ${I.szin.feher};
    background-color: ${I.hatter.emelt};
  }

  option[value=''] {
    color: ${I.szin.szurke};
  }

  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${I.szin.arany} 50%
    ),
    linear-gradient(135deg, ${I.szin.arany} 50%, transparent 50%);
  background-position:
    calc(100% - 1.15rem) calc(50% - 0.18rem),
    calc(100% - 0.85rem) calc(50% - 0.18rem);
  background-size: 0.35rem 0.35rem;
  background-repeat: no-repeat;
  padding-right: 2.4rem;
  ${e=>e.$hibas?Tl:``}
`,K=F.textarea`
  ${wl}
  min-height: 8rem;
  resize: vertical;
  ${e=>e.$hibas?Tl:``}
`,q=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: ${e=>e.$hibas?`0.55rem 0.65rem`:`0`};
  border: ${e=>e.$hibas?`1px solid rgba(220, 120, 90, 0.55)`:`none`};
`,J=F.label`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.55rem 0.15rem;
  cursor: pointer;
  color: ${I.szin.szurke};
  font-size: 0.95rem;
  line-height: 1.45;
  transition: color 0.2s ease;

  &:hover {
    color: ${I.szin.feher};
  }

  input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    pointer-events: none;
  }
`,Vl=F.span`
  flex-shrink: 0;
  width: 1.05rem;
  height: 1.05rem;
  margin-top: 0.15rem;
  border: 1px solid
    ${e=>e.checked?I.szin.aranyVilagos:`rgba(197, 165, 114, 0.45)`};
  border-radius: ${e=>e.tipus===`radio`?`50%`:`0`};
  background: ${e=>e.checked?e.tipus===`radio`?`radial-gradient(circle at center, ${I.szin.aranyVilagos} 0 34%, transparent 37%)`:I.szin.arany:`transparent`};
  box-shadow: ${e=>e.checked&&e.tipus===`checkbox`?`inset 0 0 0 0.18rem ${I.hatter.sotet}`:`none`};
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
`,Hl=F(zl)`
  margin-top: 0.35rem;
  margin-left: 1.8rem;
  max-width: calc(100% - 1.8rem);
`,Ul=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 1.15rem 0.65rem 0.85rem;
  border: ${e=>e.$hibas?`1px solid rgba(220, 120, 90, 0.55)`:`1px solid transparent`};
`,Wl=F.h3`
  margin: 0;
  font-family: ${I.betu.cim};
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${I.szin.aranyVilagos};
`,Gl=F.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: fit-content;
  max-width: 100%;
  min-height: 44px;
  padding: 0.7rem 1.15rem;
  cursor: pointer;
  text-align: center;
  color: ${I.szin.aranyVilagos};
  font-family: ${I.betu.cim};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: ${e=>e.$hibas?`1px solid rgba(220, 120, 90, 0.85)`:L};
  background: transparent;
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(197, 165, 114, 0.1);
    box-shadow: ${I.arnyek.aranyFeny};
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    overflow: hidden;
  }
`,Kl=F.span`
  font-size: 0.84rem;
  color: ${I.szin.szurke};
  word-break: break-word;
`,ql=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.35rem;
  padding-top: 0.5rem;
`,Jl=F.a`
  color: ${I.szin.aranyVilagos};
  text-decoration: underline;
  text-underline-offset: 0.18em;
  text-decoration-thickness: 1px;
  transition: color 0.2s ease;

  &:hover {
    color: ${I.szin.arany};
  }

  &:focus-visible {
    ${Ra}
  }
`,Yl=F.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: fit-content;
  max-width: min(100%, 22rem);
  min-height: 50px;
  padding: 0.95rem 1.9rem;
  cursor: pointer;
  font-family: ${I.betu.cim};
  font-size: clamp(0.72rem, 1.4vw, 0.84rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${Va}
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    background-position 0.55s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  &:focus-visible {
    ${Ra}
  }
`,Xl=F.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${I.oldalsoPadding};
  background: rgba(10, 10, 10, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  animation: urlapPopupFade 0.28s ease;

  @keyframes urlapPopupFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Zl=F.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 28rem);
  padding: clamp(1.75rem, 4vw, 2.35rem) clamp(1.35rem, 3.5vw, 2rem);
  text-align: center;
  background:
    linear-gradient(
      165deg,
      rgba(44, 44, 44, 0.98) 0%,
      rgba(27, 27, 27, 0.98) 100%
    );
  border: 1px solid rgba(197, 165, 114, 0.35);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.55),
    inset 0 1px 0 rgba(232, 215, 181, 0.12);
  animation: urlapPopupFel 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes urlapPopupFel {
    from {
      opacity: 0;
      transform: translate3d(0, 16px, 0) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ql=F.h2`
  margin: 0;
  font-family: ${I.betu.cim};
  font-size: clamp(1.05rem, 2.4vw, 1.35rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.3;
  ${La}
`,$l=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  font-size: clamp(0.92rem, 1.5vw, 1rem);
  line-height: 1.7;
`,eu=F.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 0.65rem;
  min-height: 44px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-family: ${I.betu.cim};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${Va}
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    background-position 0.55s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    ${Ra}
  }
`;function Y({nev:e,ertek:t,opciok:n,onChange:r,hiba:i}){return P(`div`,{children:[N(q,{role:`radiogroup`,"aria-label":e,$hibas:!!i,children:n.map(n=>{let i=t===n.ertek;return P(J,{children:[N(`input`,{type:`radio`,name:e,value:n.ertek,checked:i,onChange:()=>r(n.ertek)}),N(Vl,{tipus:`radio`,checked:i,"aria-hidden":`true`}),N(`span`,{children:n.felirat})]},n.ertek)})}),i?N(El,{children:i}):null]})}function tu({ertekek:e,opciok:t,onChange:n,egyebErtek:r,onEgyebChange:i,egyebKulcs:a,egyebPlaceholder:o,egyebAria:s,hiba:c,egyebHiba:l}){function u(t){if(e.includes(t)){n(e.filter(e=>e!==t));return}n([...e,t])}return P(`div`,{children:[N(q,{$hibas:!!(c||l),children:t.map(t=>{let n=e.includes(t.ertek),c=t.ertek===a;return P(`div`,{children:[P(J,{children:[N(`input`,{type:`checkbox`,checked:n,onChange:()=>u(t.ertek)}),N(Vl,{tipus:`checkbox`,checked:n,"aria-hidden":`true`}),N(`span`,{children:t.felirat})]}),c&&n&&i?N(Hl,{type:`text`,value:r??``,$hibas:!!l,onChange:e=>i(e.target.value),placeholder:o,"aria-label":s}):null]},t.ertek)})}),c?N(El,{children:c}):null,l?N(El,{children:l}):null]})}function nu({cim:e,leiras:t,seged:n,fajl:r,accept:i=`.pdf,.jpg,.jpeg,.png,.webp`,onChange:a,hiba:o,kotelezo:s=!0,feltoltesGomb:c}){async function l(e){let t=e.target.files?.[0]??null;e.target.value=``,await a(t)}return P(Ul,{$hibas:!!o,children:[P(Wl,{children:[e,s?` *`:``]}),N(W,{as:`span`,children:t}),P(Gl,{$hibas:!!o,children:[N(`input`,{type:`file`,accept:i,onChange:l}),c]}),r?N(Kl,{children:r.name}):null,n?N(Rl,{children:n}):null,o?N(El,{children:o}):null]})}function ru(){let e=Ct(),{szoveg:t}=R(),n=t.jelentkezes,r=n.opciok,i=_l(),[a,o]=(0,x.useState)(Cl),[s,c]=(0,x.useState)({}),[l,u]=(0,x.useState)(!1),[d,f]=(0,x.useState)(!1),[p,m]=(0,x.useState)(``),[h,g]=(0,x.useState)(!1),_=(0,x.useMemo)(()=>bl(a,n.hibak),[a,n.hibak]);(0,x.useEffect)(()=>{Sl(`auto`)},[]);function v(){u(!1),e(`/`)}(0,x.useEffect)(()=>{if(!l)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;function t(e){e.key===`Escape`&&v()}return window.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,window.removeEventListener(`keydown`,t)}},[l,e]);function y(e){c(t=>{if(!t[e])return t;let n={...t};return delete n[e],n})}function b(e,t){o(n=>({...n,[e]:t})),y(String(e))}async function S(e,t){if(!t){o(t=>({...t,feltoltesek:{...t.feltoltesek,[e]:null}})),y(`feltoltes.${e}`);return}let r=ml(e,t,n.hibak);if(r){c(t=>({...t,[`feltoltes.${e}`]:r}));return}let i=t;if(e===`profilkep`){g(!0);try{i=await fl(t)}catch(t){c(r=>({...r,[`feltoltes.${e}`]:t instanceof Error?t.message:n.hibak.profilkepFeldolgozas}));return}finally{g(!1)}}o(t=>({...t,feltoltesek:{...t.feltoltesek,[e]:i}})),y(`feltoltes.${e}`)}async function C(e){e.preventDefault();let t=yl(a,n.hibak);if(c(t),Object.keys(t).length>0){window.setTimeout(()=>{document.querySelector(`[data-hiba="true"]`)?.scrollIntoView({behavior:`smooth`,block:`center`})},50);return}m(``),f(!0);try{let{feltoltesek:e,...t}=a;await No(t,e),u(!0)}catch(e){m(e instanceof Error?e.message:n.hibak.kuldesSikertelen)}finally{f(!1)}}let w=Object.keys(s).length;return P(va,{children:[N(Zs,{feluliras:n.seo}),P(Ol,{className:`urlap-oldal`,children:[P(kl,{children:[P(Al,{children:[N(jl,{children:n.foCim}),N(Ml,{children:n.alcim}),N(Nl,{children:n.bevezeto})]}),P(Fl,{onSubmit:C,noValidate:!0,children:[P(Il,{"aria-labelledby":`szemelyes-adatok`,children:[N(Ll,{id:`szemelyes-adatok`,children:n.szekcio.szemelyes}),P(U,{"data-hiba":s.teljesNev?`true`:void 0,children:[N(W,{htmlFor:`teljesNev`,children:n.mezo.teljesNev}),N(zl,{id:`teljesNev`,type:`text`,autoComplete:`name`,required:!0,value:a.teljesNev,$hibas:!!s.teljesNev,onChange:e=>b(`teljesNev`,e.target.value)}),s.teljesNev?N(El,{children:s.teljesNev}):null]}),P(U,{"data-hiba":s.szuletesiDatum?`true`:void 0,children:[N(W,{htmlFor:`szuletesiDatum`,children:n.mezo.szuletesiDatum}),N(G,{id:`szuletesiDatum`,type:`date`,required:!0,max:i,value:a.szuletesiDatum,$hibas:!!s.szuletesiDatum,onChange:e=>b(`szuletesiDatum`,e.target.value)}),s.szuletesiDatum?N(El,{children:s.szuletesiDatum}):null]}),P(U,{"data-hiba":s.telefon?`true`:void 0,children:[N(W,{htmlFor:`telefon`,children:n.mezo.telefon}),N(zl,{id:`telefon`,type:`tel`,autoComplete:`tel`,required:!0,value:a.telefon,$hibas:!!s.telefon,onChange:e=>b(`telefon`,e.target.value)}),s.telefon?N(El,{children:s.telefon}):null]}),P(U,{"data-hiba":s.email?`true`:void 0,children:[N(W,{htmlFor:`email`,children:n.mezo.email}),N(zl,{id:`email`,type:`email`,autoComplete:`email`,required:!0,value:a.email,$hibas:!!s.email,onChange:e=>b(`email`,e.target.value)}),s.email?N(El,{children:s.email}):null]}),P(U,{"data-hiba":s.lakhely?`true`:void 0,children:[N(W,{htmlFor:`lakhely`,children:n.mezo.lakhely}),N(zl,{id:`lakhely`,type:`text`,autoComplete:`postal-code`,required:!0,value:a.lakhely,$hibas:!!s.lakhely,onChange:e=>b(`lakhely`,e.target.value)}),s.lakhely?N(El,{children:s.lakhely}):null]}),P(U,{"data-hiba":s.orszag?`true`:void 0,children:[N(W,{htmlFor:`orszag`,children:n.mezo.orszag}),P(Bl,{id:`orszag`,required:!0,value:a.orszag,$hibas:!!s.orszag,onChange:e=>b(`orszag`,e.target.value),children:[N(`option`,{value:``,children:n.valasszon}),r.orszagok.map(e=>N(`option`,{value:e.ertek,children:e.felirat},e.ertek))]}),s.orszag?N(El,{children:s.orszag}):null]})]}),P(Il,{"aria-labelledby":`vezetesi-tapasztalat`,children:[N(Ll,{id:`vezetesi-tapasztalat`,children:n.szekcio.vezetes}),P(U,{"data-hiba":s.bJogositvanyEve?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.bJogositvanyEve}),N(Y,{nev:`bJogositvanyEve`,ertek:a.bJogositvanyEve,opciok:r.bJogositvanyEve,hiba:s.bJogositvanyEve,onChange:e=>b(`bJogositvanyEve`,e)})]}),P(U,{"data-hiba":s.professzionalisEv?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.professzionalisEv}),N(Y,{nev:`professzionalisEv`,ertek:a.professzionalisEv,opciok:r.professzionalisEv,hiba:s.professzionalisEv,onChange:e=>b(`professzionalisEv`,e)})]}),P(U,{"data-hiba":s.soforkentNemetorszag?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.soforkentNemetorszag}),N(Y,{nev:`soforkentNemetorszag`,ertek:a.soforkentNemetorszag,opciok:r.igenNem,hiba:s.soforkentNemetorszag,onChange:e=>b(`soforkentNemetorszag`,e)})]}),P(U,{"data-hiba":s.korabbiTerulet||s.korabbiTeruletEgyeb?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.korabbiTerulet}),N(tu,{ertekek:a.korabbiTerulet,opciok:r.korabbiTerulet,egyebKulcs:n.egyebErtek,egyebPlaceholder:n.egyebPlaceholder,egyebAria:n.egyebAria,egyebErtek:a.korabbiTeruletEgyeb,onEgyebChange:e=>b(`korabbiTeruletEgyeb`,e),hiba:s.korabbiTerulet,egyebHiba:s.korabbiTeruletEgyeb,onChange:e=>b(`korabbiTerulet`,e)})]})]}),P(Il,{"aria-labelledby":`premium-tapasztalat`,children:[N(Ll,{id:`premium-tapasztalat`,children:n.szekcio.premium}),P(U,{"data-hiba":s.premiumTapasztalat?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.premiumTapasztalat}),N(Y,{nev:`premiumTapasztalat`,ertek:a.premiumTapasztalat,opciok:r.igenNem,hiba:s.premiumTapasztalat,onChange:e=>b(`premiumTapasztalat`,e)})]}),P(U,{"data-hiba":s.premiumMarkak||s.premiumMarkaEgyeb?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.premiumMarkak}),N(tu,{ertekek:a.premiumMarkak,opciok:r.premiumMarkak,egyebKulcs:n.egyebErtek,egyebPlaceholder:n.egyebPlaceholder,egyebAria:n.egyebAria,egyebErtek:a.premiumMarkaEgyeb,onEgyebChange:e=>b(`premiumMarkaEgyeb`,e),hiba:s.premiumMarkak,egyebHiba:s.premiumMarkaEgyeb,onChange:e=>b(`premiumMarkak`,e)})]}),P(U,{"data-hiba":s.premiumGyakorisag?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.premiumGyakorisag}),N(Y,{nev:`premiumGyakorisag`,ertek:a.premiumGyakorisag,opciok:r.premiumGyakorisag,hiba:s.premiumGyakorisag,onChange:e=>b(`premiumGyakorisag`,e)})]}),P(U,{"data-hiba":s.automataValto?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.automataValto}),N(Y,{nev:`automataValto`,ertek:a.automataValto,opciok:r.igenNem,hiba:s.automataValto,onChange:e=>b(`automataValto`,e)})]})]}),P(Il,{"aria-labelledby":`nemetorszag`,children:[N(Ll,{id:`nemetorszag`,children:n.szekcio.nemetorszag}),P(U,{"data-hiba":s.munkavallalasiJog?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.munkavallalasiJog}),N(Y,{nev:`munkavallalasiJog`,ertek:a.munkavallalasiJog,opciok:r.igenNem,hiba:s.munkavallalasiJog,onChange:e=>b(`munkavallalasiJog`,e)})]}),P(U,{"data-hiba":s.nemetorszagiCim?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.nemetorszagiCim}),N(Y,{nev:`nemetorszagiCim`,ertek:a.nemetorszagiCim,opciok:r.igenNem,hiba:s.nemetorszagiCim,onChange:e=>b(`nemetorszagiCim`,e)})]}),P(U,{"data-hiba":s.munkabaAllas?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.munkabaAllas}),N(Y,{nev:`munkabaAllas`,ertek:a.munkabaAllas,opciok:r.munkabaAllas,hiba:s.munkabaAllas,onChange:e=>b(`munkabaAllas`,e)})]}),P(U,{"data-hiba":s.rugalmassag?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.rugalmassag}),N(Y,{nev:`rugalmassag`,ertek:a.rugalmassag,opciok:r.rugalmassag,hiba:s.rugalmassag,onChange:e=>b(`rugalmassag`,e)})]})]}),P(Il,{"aria-labelledby":`jogositvany`,children:[N(Ll,{id:`jogositvany`,children:n.szekcio.jogositvany}),P(U,{"data-hiba":s.jogositvanyKategoria||s.jogositvanyEgyeb?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.jogositvanyKategoria}),N(tu,{ertekek:a.jogositvanyKategoria,opciok:r.jogositvanyKategoria,egyebKulcs:n.egyebErtek,egyebPlaceholder:n.egyebPlaceholder,egyebAria:n.egyebAria,egyebErtek:a.jogositvanyEgyeb,onEgyebChange:e=>b(`jogositvanyEgyeb`,e),hiba:s.jogositvanyKategoria,egyebHiba:s.jogositvanyEgyeb,onChange:e=>b(`jogositvanyKategoria`,e)})]}),P(U,{"data-hiba":s.jogositvanyErvenyes?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.jogositvanyErvenyes}),N(Y,{nev:`jogositvanyErvenyes`,ertek:a.jogositvanyErvenyes,opciok:r.igenNem,hiba:s.jogositvanyErvenyes,onChange:e=>b(`jogositvanyErvenyes`,e)})]}),P(U,{"data-hiba":s.eltiltas?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.eltiltas}),N(Y,{nev:`eltiltas`,ertek:a.eltiltas,opciok:r.igenNem,hiba:s.eltiltas,onChange:e=>b(`eltiltas`,e)})]}),P(U,{"data-hiba":s.erkolesi?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.erkolesi}),N(Y,{nev:`erkolesi`,ertek:a.erkolesi,opciok:r.erkolesi,hiba:s.erkolesi,onChange:e=>b(`erkolesi`,e)})]})]}),P(Il,{"aria-labelledby":`nyelv`,children:[N(Ll,{id:`nyelv`,children:n.szekcio.nyelv}),P(U,{"data-hiba":s.nemetNyelv?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.nemetNyelv}),N(Y,{nev:`nemetNyelv`,ertek:a.nemetNyelv,opciok:r.nyelvSzint,hiba:s.nemetNyelv,onChange:e=>b(`nemetNyelv`,e)})]}),P(U,{"data-hiba":s.angolNyelv?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.angolNyelv}),N(Y,{nev:`angolNyelv`,ertek:a.angolNyelv,opciok:r.nyelvSzint,hiba:s.angolNyelv,onChange:e=>b(`angolNyelv`,e)})]})]}),P(Il,{"aria-labelledby":`keszsegek`,children:[N(Ll,{id:`keszsegek`,children:n.szekcio.keszsegek}),P(U,{"data-hiba":s.okostelefon?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.okostelefon}),N(Y,{nev:`okostelefon`,ertek:a.okostelefon,opciok:r.igenNem,hiba:s.okostelefon,onChange:e=>b(`okostelefon`,e)})]}),P(U,{"data-hiba":s.navigacio?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.navigacio}),N(Y,{nev:`navigacio`,ertek:a.navigacio,opciok:r.igenNem,hiba:s.navigacio,onChange:e=>b(`navigacio`,e)})]}),P(U,{"data-hiba":s.gpsKovetes?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.gpsKovetes}),N(Y,{nev:`gpsKovetes`,ertek:a.gpsKovetes,opciok:r.igenNem,hiba:s.gpsKovetes,onChange:e=>b(`gpsKovetes`,e)})]})]}),P(Il,{"aria-labelledby":`feltetelek`,children:[N(Ll,{id:`feltetelek`,children:n.szekcio.feltetelek}),P(U,{"data-hiba":s.hosszuUt?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.hosszuUt}),N(Y,{nev:`hosszuUt`,ertek:a.hosszuUt,opciok:r.igenNem,hiba:s.hosszuUt,onChange:e=>b(`hosszuUt`,e)})]}),P(U,{"data-hiba":s.hetvege?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.hetvege}),N(Y,{nev:`hetvege`,ertek:a.hetvege,opciok:r.hetvege,hiba:s.hetvege,onChange:e=>b(`hetvege`,e)})]}),P(U,{"data-hiba":s.tobbnapos?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.tobbnapos}),N(Y,{nev:`tobbnapos`,ertek:a.tobbnapos,opciok:r.igenNem,hiba:s.tobbnapos,onChange:e=>b(`tobbnapos`,e)})]}),P(U,{"data-hiba":s.hetiNapok?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.hetiNapok}),N(Y,{nev:`hetiNapok`,ertek:a.hetiNapok,opciok:r.hetiNapok,hiba:s.hetiNapok,onChange:e=>b(`hetiNapok`,e)})]})]}),P(Il,{"aria-labelledby":`szurok`,children:[N(Ll,{id:`szurok`,children:n.szekcio.szurok}),P(U,{"data-hiba":s.haromEvAktiv?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.haromEvAktiv}),N(Y,{nev:`haromEvAktiv`,ertek:a.haromEvAktiv,opciok:r.igenNem,hiba:s.haromEvAktiv,onChange:e=>b(`haromEvAktiv`,e)})]}),P(U,{"data-hiba":s.haromEvProf?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.haromEvProf}),N(Y,{nev:`haromEvProf`,ertek:a.haromEvProf,opciok:r.igenNem,hiba:s.haromEvProf,onChange:e=>b(`haromEvProf`,e)})]}),P(U,{"data-hiba":s.premiumSzuro?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.premiumSzuro}),N(Y,{nev:`premiumSzuro`,ertek:a.premiumSzuro,opciok:r.igenNem,hiba:s.premiumSzuro,onChange:e=>b(`premiumSzuro`,e)})]}),P(U,{"data-hiba":s.biztonsagosVezetes?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.biztonsagosVezetes}),N(Y,{nev:`biztonsagosVezetes`,ertek:a.biztonsagosVezetes,opciok:r.igenNem,hiba:s.biztonsagosVezetes,onChange:e=>b(`biztonsagosVezetes`,e)})]}),P(U,{"data-hiba":s.gondosKezeles?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.gondosKezeles}),N(Y,{nev:`gondosKezeles`,ertek:a.gondosKezeles,opciok:r.igenNem,hiba:s.gondosKezeles,onChange:e=>b(`gondosKezeles`,e)})]}),P(U,{"data-hiba":s.ellenorzesElfogadas?`true`:void 0,children:[N(W,{as:`span`,children:n.mezo.ellenorzesElfogadas}),N(Y,{nev:`ellenorzesElfogadas`,ertek:a.ellenorzesElfogadas,opciok:r.igenNem,hiba:s.ellenorzesElfogadas,onChange:e=>b(`ellenorzesElfogadas`,e)})]})]}),P(Il,{"aria-labelledby":`dokumentumok`,children:[N(Ll,{id:`dokumentumok`,children:n.szekcio.dokumentumok}),N(Pl,{children:n.dokumentumokBevezeto}),N(`div`,{"data-hiba":s[`feltoltes.szemelyiElolap`]?`true`:void 0,children:N(nu,{cim:n.feltoltes.szemelyiElolap.cim,leiras:n.feltoltes.szemelyiElolap.leiras,feltoltesGomb:n.feltoltesGomb,accept:`.pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf`,fajl:a.feltoltesek.szemelyiElolap,hiba:s[`feltoltes.szemelyiElolap`],onChange:e=>S(`szemelyiElolap`,e)})}),N(`div`,{"data-hiba":s[`feltoltes.szemelyiHatlap`]?`true`:void 0,children:N(nu,{cim:n.feltoltes.szemelyiHatlap.cim,leiras:n.feltoltes.szemelyiHatlap.leiras,feltoltesGomb:n.feltoltesGomb,accept:`.pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf`,fajl:a.feltoltesek.szemelyiHatlap,hiba:s[`feltoltes.szemelyiHatlap`],onChange:e=>S(`szemelyiHatlap`,e)})}),N(`div`,{"data-hiba":s[`feltoltes.jogositvanyElolap`]?`true`:void 0,children:N(nu,{cim:n.feltoltes.jogositvanyElolap.cim,leiras:n.feltoltes.jogositvanyElolap.leiras,feltoltesGomb:n.feltoltesGomb,accept:`.pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf`,fajl:a.feltoltesek.jogositvanyElolap,hiba:s[`feltoltes.jogositvanyElolap`],onChange:e=>S(`jogositvanyElolap`,e)})}),N(`div`,{"data-hiba":s[`feltoltes.jogositvanyHatlap`]?`true`:void 0,children:N(nu,{cim:n.feltoltes.jogositvanyHatlap.cim,leiras:n.feltoltes.jogositvanyHatlap.leiras,feltoltesGomb:n.feltoltesGomb,accept:`.pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf`,fajl:a.feltoltesek.jogositvanyHatlap,hiba:s[`feltoltes.jogositvanyHatlap`],onChange:e=>S(`jogositvanyHatlap`,e)})}),N(`div`,{"data-hiba":s[`feltoltes.fuehrungszeugnis`]?`true`:void 0,children:N(nu,{cim:n.feltoltes.fuehrungszeugnis.cim,leiras:n.feltoltes.fuehrungszeugnis.leiras,feltoltesGomb:n.feltoltesGomb,accept:`.pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf`,seged:n.feltoltes.fuehrungszeugnis.seged,fajl:a.feltoltesek.fuehrungszeugnis,hiba:s[`feltoltes.fuehrungszeugnis`],kotelezo:a.erkolesi!==`Nem`&&a.erkolesi!==`Beszerzés alatt`,onChange:e=>S(`fuehrungszeugnis`,e)})}),N(`div`,{"data-hiba":s[`feltoltes.oneletrajz`]?`true`:void 0,children:N(nu,{cim:n.feltoltes.oneletrajz.cim,leiras:n.feltoltes.oneletrajz.leiras,feltoltesGomb:n.feltoltesGomb,accept:`.pdf,application/pdf`,fajl:a.feltoltesek.oneletrajz,hiba:s[`feltoltes.oneletrajz`],onChange:e=>S(`oneletrajz`,e)})}),N(`div`,{"data-hiba":s[`feltoltes.profilkep`]?`true`:void 0,children:N(nu,{cim:n.feltoltes.profilkep.cim,leiras:n.feltoltes.profilkep.leiras,feltoltesGomb:n.feltoltesGomb,accept:`.jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp`,seged:n.feltoltes.profilkep.seged,fajl:a.feltoltesek.profilkep,hiba:s[`feltoltes.profilkep`],onChange:e=>S(`profilkep`,e)})}),N(`div`,{"data-hiba":s[`feltoltes.referencia`]?`true`:void 0,children:N(nu,{cim:n.feltoltes.referencia.cim,leiras:n.feltoltes.referencia.leiras,feltoltesGomb:n.feltoltesGomb,accept:`.pdf,application/pdf`,fajl:a.feltoltesek.referencia,hiba:s[`feltoltes.referencia`],onChange:e=>S(`referencia`,e)})})]}),P(Il,{"aria-labelledby":`motivacio`,children:[N(Ll,{id:`motivacio`,children:n.szekcio.motivacio}),P(U,{"data-hiba":s.motivacio?`true`:void 0,children:[N(W,{htmlFor:`motivacioSzoveg`,children:n.mezo.motivacio}),N(K,{id:`motivacioSzoveg`,value:a.motivacio,required:!0,$hibas:!!s.motivacio,onChange:e=>b(`motivacio`,e.target.value)}),s.motivacio?N(El,{children:s.motivacio}):null]}),P(U,{"data-hiba":s.tapasztalatLeiras?`true`:void 0,children:[N(W,{htmlFor:`tapasztalatLeiras`,children:n.mezo.tapasztalatLeiras}),N(K,{id:`tapasztalatLeiras`,value:a.tapasztalatLeiras,required:!0,$hibas:!!s.tapasztalatLeiras,onChange:e=>b(`tapasztalatLeiras`,e.target.value)}),s.tapasztalatLeiras?N(El,{children:s.tapasztalatLeiras}):null]})]}),P(Il,{"aria-labelledby":`kuldes`,children:[N(Ll,{id:`kuldes`,children:n.szekcio.kuldes}),P(q,{children:[P(`div`,{"data-hiba":s.adatvedelem?`true`:void 0,children:[P(J,{children:[N(`input`,{type:`checkbox`,checked:a.adatvedelem,onChange:e=>b(`adatvedelem`,e.target.checked),required:!0}),N(Vl,{tipus:`checkbox`,checked:a.adatvedelem,"aria-hidden":`true`}),P(`span`,{children:[n.adatvedelemElotte,` `,N(Jl,{href:`/adatvedelmi`,target:`_blank`,rel:`noopener noreferrer`,children:n.adatvedelemLink}),n.adatvedelemUtana]})]}),s.adatvedelem?N(El,{children:s.adatvedelem}):null]}),P(`div`,{"data-hiba":s.hozzajarulas?`true`:void 0,children:[P(J,{children:[N(`input`,{type:`checkbox`,checked:a.hozzajarulas,onChange:e=>b(`hozzajarulas`,e.target.checked),required:!0}),N(Vl,{tipus:`checkbox`,checked:a.hozzajarulas,"aria-hidden":`true`}),N(`span`,{children:n.hozzajarulas})]}),s.hozzajarulas?N(El,{children:s.hozzajarulas}):null]})]}),P(ql,{children:[N(Yl,{type:`submit`,disabled:d||h||!_,children:d?n.gombKuldesFut:h?n.gombKepFeldolgozas:n.gombKuldes}),p?N(Dl,{children:p}):null,w>0?P(Dl,{children:[n.osszesitoHiba,` `,n.osszesitoHibaDarab.replace(`{n}`,String(w))]}):null]})]})]})]}),l?(0,il.createPortal)(N(Xl,{role:`presentation`,onClick:v,children:P(Zl,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`urlap-koszonet-cim`,onClick:e=>e.stopPropagation(),children:[N(Ql,{id:`urlap-koszonet-cim`,children:n.popupCim}),N($l,{children:n.popupSzoveg}),N(eu,{type:`button`,onClick:v,children:n.popupZar})]})}),document.body):null]})]})}var iu=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding:
    clamp(5.5rem, 12vh, 7rem)
    ${I.oldalsoPadding}
    clamp(3.5rem, 9vh, 6rem);
  color: ${I.szin.feher};
`,au=F.article`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: min(100%, 46rem);
`,ou=F.h1`
  margin: 0;
  font-family: ${I.betu.cim};
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.25;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  ${La}
`,su=F.p`
  margin: -0.5rem 0 0.5rem;
  text-align: center;
  font-style: italic;
  letter-spacing: 0.04em;
  color: ${I.szin.arany};
`,cu=F.p`
  margin: 0;
  text-align: center;
  font-size: 0.86rem;
  color: ${I.szin.szurkeSotet};
`,lu=F.section`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(197, 165, 114, 0.22);
`,uu=F.h2`
  margin: 0;
  font-family: ${I.betu.cim};
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${La}
`,du=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  font-size: clamp(0.92rem, 1.5vw, 1rem);
  line-height: 1.75;
`,fu=F.ul`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding-left: 1.15rem;
  color: ${I.szin.szurke};
  line-height: 1.7;

  li {
    list-style: disc;
    padding-left: 0.2rem;
  }

  li::marker {
    color: ${I.szin.arany};
  }
`;function pu(){let{szoveg:e}=R(),{cegnev:t}=Ho(),n=e.adatvedelmi;return P(va,{children:[N(Zs,{feluliras:n.seo}),N(iu,{className:`adatvedelmi-oldal`,children:P(au,{children:[N(ou,{children:n.foCim}),N(su,{children:t}),n.szekciok.map(e=>P(lu,{children:[N(uu,{children:e.cim}),e.bekezdesek?.map(e=>N(du,{children:e},e)),e.lista?N(fu,{children:e.lista.map(e=>N(`li`,{children:e},e))}):null]},e.cim))]})})]})}function mu(){return Da`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      height: 100%;
      overflow: hidden;
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }

    #fejlec-portal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      width: 100%;
      pointer-events: none;
    }

    #fejlec-portal > * {
      pointer-events: auto;
    }

    body {
      height: 100%;
      overflow: hidden;
      background: ${I.hatter.fekete};
      color: ${I.szin.feher};
      font-family: ${I.betu.torzs};
      font-size: clamp(0.98rem, 0.94rem + 0.2vw, 1.08rem);
      line-height: 1.65;
      letter-spacing: 0.01em;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    #root {
      height: 100%;
      min-width: 0;
      overflow-x: clip;
      overflow-y: auto;
      overscroll-behavior-y: none;
      scroll-behavior: smooth;
      scroll-padding-top: clamp(5rem, 12vh, 6.5rem);
      -webkit-overflow-scrolling: touch;
    }

    .fejlec-sav {
      position: relative;
      width: 100%;
      max-width: 100vw;
      box-sizing: border-box;
      transform: none !important;
      transition: none !important;
      animation: none !important;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img,
    svg {
      display: block;
      max-width: 100%;
      height: auto;
    }

    button {
      font: inherit;
      cursor: pointer;
      border: none;
      background: none;
      text-align: center;
    }

    input[type='submit'],
    input[type='button'],
    input[type='reset'] {
      text-align: center;
    }

    ul {
      list-style: none;
    }

    :focus-visible {
      ${Ra}
    }

    @media (prefers-reduced-motion: reduce) {
      #root {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    @media (max-width: ${I.szelesseg.kicsi}) {
      body {
        line-height: 1.55;
      }
    }
  `}function hu(){return N(Ea,{styles:mu()})}function gu(){let e=bt();return(0,x.useEffect)(()=>{`scrollRestoration`in window.history&&(window.history.scrollRestoration=`manual`)},[]),(0,x.useEffect)(()=>{if(e.hash){let t=window.setTimeout(()=>{let t=document.querySelector(e.hash);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})},80);return()=>window.clearTimeout(t)}Sl(`auto`)},[e.pathname,e.hash,e.key]),null}var _u=F.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: ${I.betu.cim};
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: ${I.szin.szurke};
  flex-shrink: 0;
`,vu=F.button`
  text-align: center;
  min-width: 36px;
  min-height: 36px;
  color: ${e=>e.aktiv?I.szin.aranyVilagos:I.szin.szurke};
  font-weight: ${e=>e.aktiv?700:500};
  transition: color 0.2s ease;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${I.szin.arany};
  }

  &:focus-visible {
    ${Ra}
  }
`,yu=F.span`
  color: ${I.szin.szurkeSotet};
`,bu=F.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;function xu({className:e}){let{nyelv:t,szoveg:n,nyelvetValaszt:r}=R();function i(e){r(e)}return N(_u,{className:e,role:`group`,"aria-label":n.nyelvAria,children:Er.map((e,n)=>P(bu,{className:`nyelv-elem`,children:[n>0?N(yu,{"aria-hidden":`true`,children:`|`}):null,N(vu,{className:`nyelv-gomb`,type:`button`,aktiv:t===e.kod,"aria-pressed":t===e.kod,"aria-label":e.felirat,onClick:()=>i(e.kod),children:e.felirat})]},e.kod))})}var Su=(0,x.createContext)(null);function Cu({children:e}){let[t,n]=(0,x.useState)(null),[r,i]=(0,x.useState)(!0),a=(0,x.useCallback)(async()=>{try{let e=await oo();n(e);if(e)try{await po()}catch{}}catch{n(null)}},[]);(0,x.useEffect)(()=>{let e=!1;return(async()=>{try{let t=await oo();if(!e){n(t);if(t)try{await po()}catch{}}}catch{e||n(null)}finally{e||i(!1)}})(),()=>{e=!0}},[]);(0,x.useEffect)(()=>{if(!t)return;let e=window.setInterval(()=>{po().catch(()=>{})},12e3);return()=>window.clearInterval(e)},[t]);let o=(0,x.useCallback)(async(e,t)=>{let r=await so(e,t);n(r);try{await po()}catch{}},[]),s=(0,x.useCallback)(async()=>{await co(),_o(),xo(),n(null)},[]),c=(0,x.useMemo)(()=>({felhasznalo:t,betolt:r,bejelentkezve:!!t,bejelentkezes:o,kijelentkezes:s,frissites:a,felhasznaloBeallit:n}),[t,r,o,s,a]);return N(Su.Provider,{value:c,children:e})}function wu(){let e=(0,x.useContext)(Su);if(!e)throw Error(`useBelsoAuth csak BelsoAuthSzolgaltato alatt használható.`);return e}var Tu=F.header`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  box-sizing: border-box;
  padding-top: max(0.85rem, env(safe-area-inset-top, 0px));
  padding-bottom: 1.1rem;
  padding-left: ${I.oldalsoPadding};
  padding-right: max(1rem, env(safe-area-inset-right, 0px), min(4vw, 3rem));
  background: ${I.hatter.fekete};
  border-bottom: 1px solid rgba(197, 165, 114, 0.18);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
`,Eu=F.nav`
  display: none;
  align-items: center;
  gap: clamp(0.8rem, 1.5vw, 1.5rem);
  flex: 1 1 auto;
  min-width: 0;
  justify-content: center;

  @media (min-width: ${I.szelesseg.nagy}) {
    display: flex;
  }
`,Du=`
  position: relative;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  font-family: ${I.betu.cim};
  font-size: clamp(0.62rem, 0.85vw, 0.78rem);
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${I.szin.aranyVilagos};
  transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.45rem;
    height: 1px;
    background: ${I.szin.arany};
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    color: ${I.szin.feher};
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    ${Ra}
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 0.15s ease;

    &::after {
      transition: none;
    }
  }
`,Ou=F.a`${Du}`,ku=F(Rn)`${Du}`,Au=F.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex: 0 0 auto;

  @media (min-width: ${I.szelesseg.kicsi}) {
    gap: 0.85rem;
  }
`,ju=F.div`
  display: none;

  @media (min-width: ${I.szelesseg.nagy}) {
    display: contents;
  }
`,Ab=F.div`
  display: none;
  flex-shrink: 0;

  @media (min-width: ${I.szelesseg.kicsi}) {
    display: contents;
  }
`,Mu=F(to)`
  display: none;
  width: 100%;
  margin-top: 0.55rem;

  @media (max-width: 479px) {
    display: inline-flex;
  }
`,Nu=F.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  min-width: 44px;
  min-height: 44px;
  padding: 0.55rem;
  border: ${L};

  @media (min-width: ${I.szelesseg.nagy}) {
    display: none;
  }

  &:focus-visible {
    ${Ra}
  }

  span {
    display: block;
    width: 18px;
    height: 1.5px;
    background: ${I.szin.arany};
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  ${e=>e.nyitva&&`
    span:nth-of-type(1) {
      transform: translateY(6.5px) rotate(45deg);
    }
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:nth-of-type(3) {
      transform: translateY(-6.5px) rotate(-45deg);
    }
  `}
`,Pu=F.div`
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  padding: 1rem ${I.oldalsoPadding} 1.4rem;
  background: rgba(27, 27, 27, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: ${L};
  transform-origin: top center;
  transition:
    opacity 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0.34s;

  ${e=>e.nyitva?`
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  `:`
    opacity: 0;
    visibility: hidden;
    transform: translateY(-0.7rem);
    pointer-events: none;
  `}

  @media (min-width: ${I.szelesseg.nagy}) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.15s ease, visibility 0.15s;
    transform: none;
  }
`;function Fu(e){return e.startsWith(`/`)&&!e.startsWith(`/#`)}function Iu(e={}){let t=Uo(),{szoveg:n}=R(),r=bt(),i=Ct(),[a,o]=(0,x.useState)(!1),s=(0,x.useId)(),{bejelentkezve:c,betolt:l}=wu(),u=c?`/dashboard`:`/login`,d=c?n.belso.vezerlopult:n.belso.bejelentkezes;(0,x.useEffect)(()=>{function e(e){e.key===`Escape`&&o(!1)}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);function f(){o(e=>!e)}function p(){o(!1)}function m(e){p();let t=e.includes(`#`)?`#${e.split(`#`)[1]}`:e;if(r.pathname!==`/`){i({pathname:`/`,hash:t.replace(/^#/,``)});return}let n=document.querySelector(t);n&&n.scrollIntoView({behavior:`smooth`})}function h(e,t){return Fu(e.cel)?N(ku,{className:t,to:e.cel,onClick:p,children:e.felirat},e.azonosito):N(Ou,{className:t,href:e.cel.startsWith(`/#`)?e.cel.slice(1):e.cel,onClick:t=>{t.preventDefault(),m(e.cel)},children:e.felirat},e.azonosito)}let g=P(Tu,{className:`fejlec-sav`,children:[N(bs,{className:`fejlec-logo`}),N(Eu,{className:`navigacio-lista`,"aria-label":n.navigacioAria,children:n.navigacio.map(e=>h(e,`navigacio-link`))}),P(Au,{className:`fejlec-jobb-sav`,children:[N(ju,{children:N(ku,{className:`belso-bejelentkezes-link navigacio-link`,to:l?u:`/login`,onClick:p,"aria-label":n.belso.bejelentkezesAria,children:l?d:n.belso.bejelentkezes})}),N(xu,{className:`nyelv-valaszto`}),N(Ab,{children:N(to,{className:`telefon-gomb`,href:`tel:${t.replace(/\s/g,``)}`,valtozat:`telefon`,mutatTelefont:!0,ariaLabel:t,children:N(es,{children:t})})}),P(Nu,{className:`mobil-menu-gomb`,type:`button`,nyitva:a,"aria-label":a?n.menuBezaroAria:n.menuAria,"aria-expanded":a,"aria-controls":s,onClick:f,children:[N(`span`,{}),N(`span`,{}),N(`span`,{})]})]}),P(Pu,{id:s,className:`mobil-menu-panel`,nyitva:a,role:`navigation`,"aria-label":n.navigacioAria,children:[n.navigacio.map(e=>h(e,`mobil-navigacio-link`)),N(ku,{className:`mobil-navigacio-link`,to:u,onClick:p,children:d}),N(Mu,{className:`mobil-telefon-gomb`,href:`tel:${t.replace(/\s/g,``)}`,valtozat:`telefon`,mutatTelefont:!0,ariaLabel:t,onClick:p,children:N(es,{children:t})})]})]});if(typeof document>`u`)return g;let _=document.getElementById(`fejlec-portal`)??document.body;return(0,il.createPortal)(g,_)}function Lu(){return P(va,{children:[N(Iu,{}),N(Xt,{})]})}F.div`
  min-height: 100vh;
  padding:
    clamp(5.5rem, 12vh, 7rem)
    ${I.oldalsoPadding}
    clamp(3rem, 8vh, 5rem);
  color: ${I.szin.feher};
`,F.div`
  width: min(100%, ${I.maxTartalom});
  margin: 0 auto;
`,F.h1`
  font-family: ${I.betu.cim};
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${I.szin.aranyVilagos};
  margin-bottom: 1.5rem;
`,F.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
  margin-bottom: 2rem;
  font-size: 0.85rem;

  a {
    color: ${I.szin.aranyVilagos};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`;var Ru=F(Rn)`
  color: ${I.szin.aranyVilagos};
`,zu=F.p`
  padding: 0.75rem 1rem;
  margin: 0 0 1rem;
  border: 1px solid
    ${e=>e.hiba?`rgba(220, 100, 100, 0.5)`:`rgba(197, 165, 114, 0.35)`};
  background: ${e=>e.hiba?`rgba(120, 40, 40, 0.25)`:`rgba(255, 255, 255, 0.03)`};
  color: ${e=>e.hiba?`#f5c6c6`:I.szin.szurke};
  font-size: 0.9rem;
`,Bu=F(F.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.86rem;
  margin: 1rem 0 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(197, 165, 114, 0.22);

  th,
  td {
    padding: 0.55rem 0.75rem;
    border-bottom: 1px solid rgba(197, 165, 114, 0.12);
    vertical-align: top;
    text-align: left;
  }

  th {
    width: 34%;
    color: ${I.szin.aranyVilagos};
    font-weight: 600;
    background: rgba(0, 0, 0, 0.2);
  }

  td {
    color: ${I.szin.feher};
    line-height: 1.45;
    word-break: break-word;
  }

  tr:last-child th,
  tr:last-child td {
    border-bottom: none;
  }
`)`
  th {
    width: auto;
  }
`,Vu=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 1rem 0;
`,Hu=F(F.button`
  ${Ba}
  font-family: ${I.betu.torzs};
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.5rem 0.85rem;
  color: ${I.szin.aranyVilagos};
  background: rgba(197, 165, 114, 0.12);
  border: 1px solid rgba(197, 165, 114, 0.35);
  cursor: pointer;

  &:hover {
    background: rgba(197, 165, 114, 0.22);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`)`
  padding: 0.65rem 1.1rem;
`,Uu=F.label`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: ${I.szin.szurke};
`,Wu=F.input`
  padding: 0.55rem 0.65rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(197, 165, 114, 0.3);
  color: ${I.szin.feher};
`,Gu={cegnev:``,telefonszam:``,email:``,cim:``,terulet:``,elerhetoseg:``};function X(){let[e,t]=(0,x.useState)(Gu),[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)(``),[o,s]=(0,x.useState)(!1);(0,x.useEffect)(()=>{Fo(yo()).then(t).catch(e=>r(e instanceof Error?e.message:`Hiba`))},[]);function c(e){return n=>{t(t=>({...t,[e]:n.target.value}))}}async function l(t){t.preventDefault(),r(``),a(``),s(!0);try{await Lo(yo(),e),a(`Mentve.`)}catch(e){r(e instanceof Error?e.message:`Hiba`)}finally{s(!1)}}return P(`div`,{children:[N(`h2`,{style:{letterSpacing:`0.08em`,textTransform:`uppercase`},children:`Szerkeszthető tartalom`}),P(`form`,{onSubmit:l,children:[P(Uu,{children:[`Cégnév`,N(Wu,{value:e.cegnev,onChange:c(`cegnev`)})]}),P(Uu,{children:[`Telefonszám`,N(Wu,{value:e.telefonszam,onChange:c(`telefonszam`)})]}),P(Uu,{children:[`E-mail`,N(Wu,{type:`email`,value:e.email,onChange:c(`email`)})]}),P(Uu,{children:[`Kapcsolati cím`,N(Wu,{value:e.cim,onChange:c(`cim`),placeholder:`Utca, város…`})]}),P(Uu,{children:[`Terület / lefedettség`,N(Wu,{value:e.terulet,onChange:c(`terulet`)})]}),P(Uu,{children:[`Elérhetőség (időpont)`,N(Wu,{value:e.elerhetoseg,onChange:c(`elerhetoseg`)})]}),n?N(zu,{hiba:!0,children:n}):null,i?N(zu,{children:i}):null,N(Hu,{type:`submit`,disabled:o,children:o?`Mentés…`:`Mentés`})]})]})}var Ku={id:`Azonosító`,erkezett:`Beérkezés ideje`,statusz:`Státusz`,nev:`Név (lista)`,teljesNev:`Teljes név`,szuletesiDatum:`Születési dátum`,telefon:`Telefonszám`,email:`E-mail`,lakhely:`Lakhely`,orszag:`Ország`,bJogositvanyEve:`B jogosítvány éve`,professzionalisEv:`Professzionális tapasztalat`,soforkentNemetorszag:`Sofőrként Németországban`,korabbiTerulet:`Korábbi területek`,korabbiTeruletEgyeb:`Korábbi terület (egyéb)`,premiumTapasztalat:`Prémium tapasztalat`,premiumMarkak:`Prémium márkák`,premiumMarkaEgyeb:`Prémium márka (egyéb)`,premiumGyakorisag:`Prémium gyakoriság`,automataValto:`Automata váltó`,munkavallalasiJog:`Munkavállalási jog`,nemetorszagiCim:`Németországi cím`,munkabaAllas:`Munkába állás`,rugalmassag:`Rugalmasság`,jogositvanyKategoria:`Jogosítvány kategória`,jogositvanyEgyeb:`Jogosítvány (egyéb)`,jogositvanyErvenyes:`Érvényes jogosítvány`,eltiltas:`Eltiltás / szabálysértés`,erkolesi:`Erkölcsi bizonyítvány`,nemetNyelv:`Német nyelv`,angolNyelv:`Angol nyelv`,okostelefon:`Okostelefon`,navigacio:`Navigáció`,gpsKovetes:`GPS követés`,hosszuUt:`Hosszú út`,hetvege:`Hétvége`,tobbnapos:`Többnapos utak`,hetiNapok:`Heti napok`,utazasMod:`Utazás módja`,haromEvAktiv:`3 év aktív vezetés`,haromEvProf:`3 év profi tapasztalat`,premiumSzuro:`Prémium szűrő`,biztonsagosVezetes:`Biztonságos vezetés`,gondosKezeles:`Gondos kezelés`,ellenorzesElfogadas:`Ellenőrzés elfogadása`,motivacio:`Motiváció`,tapasztalatLeiras:`Tapasztalat leírása`,adatvedelem:`Adatvédelmi tájékoztató`,hozzajarulas:`Hozzájárulás`,szemelyi:`Személyazonosító okmány`,szemelyiElolap:`Személyazonosító okmány – előlap`,szemelyiHatlap:`Személyazonosító okmány – hátlap`,jogositvany:`Jogosítvány`,jogositvanyElolap:`Jogosítvány – előlap`,jogositvanyHatlap:`Jogosítvány – hátlap`,fuehrungszeugnis:`Erkölcsi / Führungszeugnis`,oneletrajz:`Önéletrajz`,profilkep:`Profilkép`,referencia:`Referencia`},qu=new Set([`id`,`erkezett`,`statusz`,`nev`,`telefon`,`email`,`adat`,`mezok`,`fajlok`,`feltoltesek`]);function Ju(e){return Ku[e]??e}function Yu(e){return e==null||e===``?`—`:typeof e==`boolean`?e?`Igen`:`Nem`:Array.isArray(e)?e.length?e.join(`, `):`—`:String(e)}function Xu(e){let t=[],n=[[`id`,e.id],[`erkezett`,e.erkezett],[`statusz`,e.statusz],[`nev`,e.nev],[`telefon`,e.telefon],[`email`,e.email]];for(let[e,r]of n)if(r!=null&&r!==``){let n=Yu(r);if(e===`erkezett`&&typeof r==`string`){let e=new Date(r);Number.isNaN(e.getTime())||(n=e.toLocaleString(`hu-HU`))}t.push({kulcs:e,cimke:Ju(e),ertek:n})}let r=e.mezok&&typeof e.mezok==`object`&&!Array.isArray(e.mezok)?e.mezok:e.adat&&typeof e.adat==`object`&&!Array.isArray(e.adat)?e.adat:null;if(r)for(let[e,n]of Object.entries(r))e!==`feltoltesek`&&t.push({kulcs:e,cimke:Ju(e),ertek:Yu(n)});else for(let[n,r]of Object.entries(e))qu.has(n)||t.push({kulcs:n,cimke:Ju(n),ertek:Yu(r)});return t}var Zu=[{id:`beerkezes`,cim:`Beérkezés`,mezok:[`id`,`erkezett`,`statusz`,`nev`,`telefon`,`email`]},{id:`szemelyes`,cim:`Személyes adatok`,mezok:[`teljesNev`,`szuletesiDatum`,`lakhely`,`orszag`]},{id:`vezetes`,cim:`Vezetési tapasztalat`,mezok:[`bJogositvanyEve`,`professzionalisEv`,`soforkentNemetorszag`,`korabbiTerulet`,`korabbiTeruletEgyeb`]},{id:`premium`,cim:`Prémium tapasztalat`,mezok:[`premiumTapasztalat`,`premiumMarkak`,`premiumMarkaEgyeb`,`premiumGyakorisag`,`automataValto`]},{id:`nemetorszag`,cim:`Németországi munkavégzés`,mezok:[`munkavallalasiJog`,`nemetorszagiCim`,`munkabaAllas`,`rugalmassag`]},{id:`jogositvany`,cim:`Jogosítvány és előélet`,mezok:[`jogositvanyKategoria`,`jogositvanyEgyeb`,`jogositvanyErvenyes`,`eltiltas`,`erkolesi`]},{id:`nyelv`,cim:`Nyelvtudás`,mezok:[`nemetNyelv`,`angolNyelv`]},{id:`keszsegek`,cim:`Munkavégzéshez szükséges készségek`,mezok:[`okostelefon`,`navigacio`,`gpsKovetes`]},{id:`feltetelek`,cim:`Munkavállalási feltételek`,mezok:[`hosszuUt`,`hetvege`,`tobbnapos`,`hetiNapok`,`utazasMod`]},{id:`szurok`,cim:`Fontos szűrőkérdések`,mezok:[`haromEvAktiv`,`haromEvProf`,`premiumSzuro`,`biztonsagosVezetes`,`gondosKezeles`,`ellenorzesElfogadas`]},{id:`motivacio`,cim:`Motiváció`,mezok:[`motivacio`,`tapasztalatLeiras`]},{id:`hozzajarulas`,cim:`Hozzájárulások`,mezok:[`adatvedelem`,`hozzajarulas`]}];function Qu(e){let t=Xu(e),n=new Map(t.map(e=>[e.kulcs,e])),r=new Set,i=[];for(let e of Zu){let t=[];for(let i of e.mezok){let e=n.get(i);e&&(t.push(e),r.add(i))}t.length>0&&i.push({id:e.id,cim:e.cim,sorok:t})}let a=t.filter(e=>!r.has(e.kulcs));return a.length>0&&i.push({id:`egyeb`,cim:`További adatok`,sorok:a}),i}function $u(e){return typeof e==`string`&&e!==``&&e!==`Egyáltalán nem`}function ed(e){return e===`Igen`}function td(e,t){return e.map(e=>({mezo:e,cimke:Ju(e),ertek:Yu(t[e])}))}var nd=[{id:`b_jogositvany`,cimke:`Érvényes B jogosítvány (BE előny)`,forras:`Kit keresünk? – karrier oldal`,mezok:[`jogositvanyKategoria`,`jogositvanyErvenyes`,`bJogositvanyEve`],ertekeles(e){let t=e.jogositvanyKategoria;return(Array.isArray(t)?t.map(String):[]).some(e=>e===`B`||e===`BE`||e===`C`)?e.jogositvanyErvenyes===`Igen`?e.bJogositvanyEve===`Nincs`?{allapot:`nem_megfelel`,indok:`Nincs B kategóriás jogosítvány tapasztalat.`}:{allapot:`megfelel`,indok:`Érvényes jogosítvány és tapasztalat rendben.`}:{allapot:`nem_megfelel`,indok:`A jogosítvány nincs érvényesnek jelölve.`}:{allapot:`nem_megfelel`,indok:`Nincs B / BE / C kategória a jelentkezésben.`}}},{id:`hozzaallas`,cimke:`Megbízható, precíz, ügyfélközpontú hozzáállás`,forras:`Kit keresünk? – karrier oldal (űrlap: biztonság, gondosság)`,mezok:[`biztonsagosVezetes`,`gondosKezeles`,`ellenorzesElfogadas`],ertekeles(e){let t=[`biztonsagosVezetes`,`gondosKezeles`,`ellenorzesElfogadas`];return t.filter(t=>e[t]===void 0||e[t]===``).length>0?{allapot:`nem_ellenorizheto`,indok:`Hiányzó űrlapmezők a hozzáállás értékeléséhez.`}:t.every(t=>ed(e[t]))?{allapot:`megfelel`,indok:`A kapcsolódó mezők mind „Igen” értékűek.`}:{allapot:`nem_megfelel`,indok:`A biztonságos vezetés / gondos kezelés / ellenőrzés elfogadása nincs mind „Igen”.`}}},{id:`tiszta_eloet`,cimke:`Tiszta előélet és gondos járműkezelés`,forras:`Kit keresünk? – karrier oldal`,mezok:[`eltiltas`,`erkolesi`,`gondosKezeles`],ertekeles(e){return e.eltiltas?e.eltiltas===`Nem`?ed(e.gondosKezeles)?{allapot:`megfelel`,indok:`Tiszta előélet és gondos kezelés a válaszok alapján rendben.`}:{allapot:`nem_megfelel`,indok:`A gondos járműkezelés nincs „Igen”-ként jelölve.`}:{allapot:`nem_megfelel`,indok:`Van eltiltás vagy súlyos szabálysértés jelölve.`}:{allapot:`nem_ellenorizheto`,indok:`Nincs kitöltve az eltiltás kérdés.`}}},{id:`rugalmassag`,cimke:`Rugalmasság regionális és országos útvonalakra`,forras:`Kit keresünk? – karrier oldal`,mezok:[`rugalmassag`,`hosszuUt`,`hetvege`,`tobbnapos`],ertekeles(e){let t=e.rugalmassag;return t?t===`Csak a lakóhelyem közelében`?{allapot:`nem_megfelel`,indok:`Csak helyi munkavégzés vállalása – nem elég rugalmas.`}:new Set([`Németországon belül rugalmas vagyok`,`Egész Németországban vállalok munkát`,`Országosan rugalmas`]).has(String(t))?{allapot:`megfelel`,indok:`Országos / regionális rugalmasság rendben.`}:{allapot:`nem_megfelel`,indok:`A rugalmasság válasza („${t}”) nem egyezik az elfogadott országos opciókkal.`}:{allapot:`nem_ellenorizheto`,indok:`Nincs kitöltve a rugalmasság mező.`}}},{id:`nyelv`,cimke:`Alapszintű német és/vagy angol kommunikáció`,forras:`Kit keresünk? – karrier oldal`,mezok:[`nemetNyelv`,`angolNyelv`],ertekeles(e){let t=$u(e.nemetNyelv),n=$u(e.angolNyelv);return!t&&!n?{allapot:`nem_megfelel`,indok:`Sem német, sem angol nyelv nem éri el az alapszintet.`}:{allapot:`megfelel`,indok:t&&n?`Német és angol is legalább alapszint.`:t?`Német legalább alapszint.`:`Angol legalább alapszint.`}}}];function rd(e){let t=e.mezok&&typeof e.mezok==`object`&&!Array.isArray(e.mezok)?e.mezok:null,n=e.adat&&typeof e.adat==`object`&&!Array.isArray(e.adat)?e.adat:null;return{...t??n??{},id:e.id,erkezett:e.erkezett,statusz:e.statusz}}function id(e){let t=rd(e),n=nd.map(e=>{let{allapot:n,indok:r}=e.ertekeles(t);return{id:e.id,cimke:e.cimke,forras:e.forras,allapot:n,mezok:e.mezok,indok:r,kitoltoValaszok:td(e.mezok,t)}}),r=n.some(e=>e.allapot===`nem_megfelel`);return{eredmenyek:n,teljesMegfeleles:n.every(e=>e.allapot===`megfelel`),vanHiba:r}}function ad(e,t){let n=rd(t),r=nd.filter(t=>t.mezok.includes(e));if(r.length===0)return null;let i=!1,a=!0;for(let e of r){let{allapot:t}=e.ertekeles(n);t===`nem_megfelel`&&(i=!0),t!==`megfelel`&&(a=!1)}return i?`nem_megfelel`:a?`megfelel`:null}function od(e,t){return e===`osszes`?!0:e===`megfelel`?t.teljesMegfeleles:e===`nem_megfelel`?t.vanHiba:e!==`reszben`||!t.teljesMegfeleles&&!t.vanHiba}var sd=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
  margin: 1rem 0 1.25rem;
  font-size: 0.85rem;
  color: ${I.szin.szurke};

  @media (max-width: ${I.szelesseg.tablet}) {
    align-items: stretch;

    label {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      width: 100%;
    }
  }
`,cd=F.select`
  max-width: 100%;
  padding: 0.45rem 0.6rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(197, 165, 114, 0.35);
  color: ${I.szin.feher};
  font-size: 0.85rem;

  @media (max-width: ${I.szelesseg.tablet}) {
    width: 100%;
    min-height: 44px;
  }
`,ld=F(Bu)`
  @media (max-width: ${I.szelesseg.tablet}) {
    display: none;
  }
`,ud=F.ul`
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${I.szelesseg.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`,dd=F.li`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.95rem;
  border: 1px solid rgba(197, 165, 114, 0.28);
  background: rgba(255, 255, 255, 0.02);
`,fd=F.p`
  margin: 0;
  font-family: ${I.betu.cim};
  font-size: 1rem;
  letter-spacing: 0.04em;
  color: ${I.szin.aranyVilagos};
  overflow-wrap: anywhere;
`,pd=F.dl`
  display: grid;
  grid-template-columns: minmax(6.5rem, auto) minmax(0, 1fr);
  gap: 0.35rem 0.75rem;
  margin: 0;
  font-size: 0.84rem;

  dt {
    color: ${I.szin.szurkeSotet};
  }

  dd {
    margin: 0;
    color: ${I.szin.feher};
    overflow-wrap: anywhere;
  }
`,md=F(Rn)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border: 1px solid rgba(197, 165, 114, 0.4);
  color: ${I.szin.aranyVilagos};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
`;function hd(e,t){if(e)return`rgba(40, 100, 55, 0.28)`;if(t)return`rgba(120, 35, 35, 0.32)`}function gd(e,t){return{datum:new Date(e.erkezett).toLocaleString(`hu-HU`,{dateStyle:`short`,timeStyle:`short`}),nev:e.nev||`—`,telefon:e.telefon||`—`,statusz:e.statusz,hatter:t?hd(t.teljesMegfeleles,t.vanHiba):void 0,rovid:t==null?`—`:t.teljesMegfeleles?`Megfelel`:t.vanHiba?`Nem felel meg`:`Részben`}}function fiokListaGomb({id:e,onKesz:t}){let{szoveg:n}=R(),r=n.belso,[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(``),[c,l]=(0,x.useState)(``);async function u(){if(i)return;a(!0),s(``);try{let n=await fiokJelentkezesbol(yo(),e);l(n.ideiglenesJelszo||``),t?.(e,{fiokUserId:n.fiokUserId,fiokEmail:n.email,fiokLetrehozva:(new Date).toISOString()})}catch(e){s(e instanceof Error?e.message:`Hiba`)}finally{a(!1)}}return P(`span`,{style:{display:`inline-flex`,flexDirection:`column`,gap:`.25rem`,alignItems:`flex-start`},children:[N(Qf,{type:`button`,disabled:!0,title:`Átmenetileg nem elérhető`,style:{padding:`.35rem .7rem`,fontSize:`.75rem`,opacity:.45,cursor:`not-allowed`},children:r.fiokLetrehozas}),o?N(`span`,{style:{color:`#c45`,fontSize:`.75rem`},children:o}):null,c?N(`code`,{style:{fontSize:`.75rem`,color:I.szin.aranyVilagos},children:c}):null]})}function _d(){let[e,t]=(0,x.useState)([]),[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)(`osszes`),[o,s]=(0,x.useState)({}),[c,l]=(0,x.useState)(!1);(0,x.useEffect)(()=>{ko(yo()).then(t).catch(e=>r(e instanceof Error?e.message:`Hiba`))},[]),(0,x.useEffect)(()=>{if(e.length===0)return;let t=yo();l(!0),Promise.all(e.map(async e=>{try{let n=await Ao(t,e.id);return[e.id,id(n)]}catch{return[e.id,null]}})).then(e=>{let t={};for(let[n,r]of e)r&&(t[n]=r);s(t)}).finally(()=>l(!1))},[e]);let u=(0,x.useMemo)(()=>i===`osszes`?e:e.filter(e=>{let t=o[e.id];return t?od(i,t):!1}),[e,i,o]);return P(`div`,{children:[N(`h2`,{style:{letterSpacing:`0.08em`,textTransform:`uppercase`},children:`Jelentkezések`}),N(`p`,{style:{fontSize:`0.85rem`,color:I.szin.szurke,margin:`0.5rem 0 0`},children:`Szűrés a karrier oldal „Kit keresünk?” követelményei alapján (zöld: megfelel, piros: nem felel meg).`}),P(sd,{children:[P(`label`,{children:[`Követelmény szűrő:`,` `,P(cd,{value:i,onChange:e=>a(e.target.value),children:[N(`option`,{value:`osszes`,children:`Összes jelentkezés`}),N(`option`,{value:`megfelel`,children:`Minden követelménynek megfelel`}),N(`option`,{value:`nem_megfelel`,children:`Van nem teljesített követelmény`}),N(`option`,{value:`reszben`,children:`Részben / nem egyértelmű`})]})]}),c?N(`span`,{children:`Követelmények számítása…`}):null]}),n?N(zu,{hiba:!0,children:n}):null,!n&&e.length===0?N(zu,{children:`Még nincs beérkezett jelentkezés.`}):null,!n&&e.length>0&&u.length===0?N(zu,{children:`Nincs a szűrőnek megfelelő jelentkezés.`}):null,u.length>0?P(va,{children:[P(ld,{children:[N(`thead`,{children:P(`tr`,{children:[N(`th`,{children:`Dátum`}),N(`th`,{children:`Név`}),N(`th`,{children:`Telefon`}),N(`th`,{children:`Státusz`}),N(`th`,{children:`Követelmény`}),N(`th`,{})]})}),N(`tbody`,{children:u.map(e=>{let t=gd(e,o[e.id]);return P(`tr`,{style:t.hatter?{background:t.hatter}:void 0,children:[N(`td`,{children:t.datum}),N(`td`,{children:t.nev}),N(`td`,{children:t.telefon}),N(`td`,{children:t.statusz}),N(`td`,{children:t.rovid}),N(`td`,{children:P(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`.4rem`,justifyContent:`flex-end`},children:[N(Rn,{to:`/dashboard/jelentkezesek/${e.id}`,children:`Megnyitás`})]})})]},e.id)})})]}),N(ud,{children:u.map(e=>{let t=gd(e,o[e.id]);return P(dd,{style:t.hatter?{background:t.hatter}:void 0,children:[N(fd,{children:t.nev}),P(pd,{children:[N(`dt`,{children:`Dátum`}),N(`dd`,{children:t.datum}),N(`dt`,{children:`Telefon`}),N(`dd`,{children:t.telefon}),N(`dt`,{children:`Státusz`}),N(`dd`,{children:t.statusz}),N(`dt`,{children:`Követelmény`}),N(`dd`,{children:t.rovid})]}),P(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`.5rem`,marginTop:`.75rem`},children:[N(md,{to:`/dashboard/jelentkezesek/${e.id}`,children:`Megnyitás`})]})]},e.id)})})]}):null]})}var vd=Da`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(ellipse 80% 60% at 100% 0%, rgba(197, 165, 114, 0.1), transparent 55%),
    radial-gradient(ellipse 50% 40% at 0% 100%, rgba(197, 165, 114, 0.06), transparent 50%),
    linear-gradient(168deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.008) 100%),
    ${I.hatter.emelt};
  border: 1px solid rgba(197, 165, 114, 0.32);
  box-shadow:
    inset 0 1px 0 rgba(232, 215, 181, 0.1),
    ${I.arnyek.kartya};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(232, 215, 181, 0.55) 45%,
      rgba(197, 165, 114, 0.35) 55%,
      transparent
    );
    pointer-events: none;
  }
`,yd=Da`
  margin: 0 0 1rem;
  padding-bottom: 0.65rem;
  font-family: ${I.betu.cim};
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  ${La}
  border-bottom: 1px solid rgba(197, 165, 114, 0.18);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 2.75rem;
    height: 1px;
    background: linear-gradient(90deg, ${I.szin.arany}, transparent);
  }
`,bd=Da`
  margin: 0 0 1.25rem;
  font-family: ${I.betu.cim};
  font-size: clamp(0.88rem, 1.8vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  ${La}
`,Z=F.div`
  margin-top: 0.5rem;
`,xd=F.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.35rem 1.4rem;

  @media (max-width: ${I.szelesseg.tablet}) {
    grid-template-columns: 1fr;
  }
`,Sd=F.section`
  ${vd}
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 1.15rem 1.2rem 1.25rem;
  grid-column: ${e=>e.teljesSzeles?`1 / -1`:`auto`};
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  @media (hover: hover) {
    &:hover {
      border-color: rgba(197, 165, 114, 0.45);
      box-shadow:
        inset 0 1px 0 rgba(232, 215, 181, 0.14),
        0 20px 48px rgba(0, 0, 0, 0.38);
      transform: translateY(-2px);
    }
  }
`,Cd=F.h3`
  ${yd}
  overflow-wrap: anywhere;

  @media (max-width: ${I.szelesseg.mobil}) {
    letter-spacing: 0.08em;
  }
`,wd=F.h2`
  ${bd}
  overflow-wrap: anywhere;

  @media (max-width: ${I.szelesseg.mobil}) {
    letter-spacing: 0.06em;
  }
`,Td=F.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem 0.9rem;

  @media (max-width: ${I.szelesseg.mobil}) {
    grid-template-columns: 1fr;
  }
`,Ed=F.div`
  grid-column: ${e=>e.teljesSzeles?`1 / -1`:`auto`};
  padding: 0.65rem 0.75rem;
  border-radius: 2px;
  border: 1px solid
    ${e=>e.kiemels===`nem_megfelel`?`rgba(210, 95, 95, 0.5)`:e.kiemels===`megfelel`?`rgba(88, 175, 110, 0.45)`:`rgba(197, 165, 114, 0.14)`};
  background: ${e=>e.kiemels===`nem_megfelel`?`linear-gradient(135deg, rgba(140, 45, 45, 0.38), rgba(80, 25, 25, 0.25))`:e.kiemels===`megfelel`?`linear-gradient(135deg, rgba(45, 110, 65, 0.32), rgba(25, 60, 40, 0.2))`:`linear-gradient(180deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.12))`};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
`,Dd=F.div`
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${I.szin.arany};
  margin-bottom: 0.35rem;
  opacity: 0.95;
`,Od=F.div`
  font-size: 0.88rem;
  line-height: 1.5;
  color: ${I.szin.feher};
  word-break: break-word;
  white-space: pre-wrap;
`,kd=new Set([`motivacio`,`tapasztalatLeiras`,`korabbiTerulet`,`korabbiTeruletEgyeb`,`premiumMarkak`,`jogositvanyKategoria`,`rugalmassag`,`hetiNapok`]),Ad=new Set([`motivacio`,`beerkezes`]);function jd(e,t){return ad(e.kulcs,t)}function Md({reszlet:e}){let t=e,n=Qu(t),r=rd(t);return P(Z,{children:[P(wd,{children:[typeof r.teljesNev==`string`&&r.teljesNev||e.nev||`Jelentkező`,` — beküldött adatlap`]}),N(xd,{children:n.map(e=>P(Sd,{teljesSzeles:Ad.has(e.id),"aria-labelledby":`szekcio-${e.id}`,children:[N(Cd,{id:`szekcio-${e.id}`,children:e.cim}),N(Td,{children:e.sorok.map(e=>{let n=jd(e,t),r=kd.has(e.kulcs)||e.ertek.length>72;return P(Ed,{kiemels:n??void 0,teljesSzeles:r,children:[N(Dd,{children:e.cimke}),N(Od,{children:e.ertek})]},e.kulcs)})})]},e.id))})]})}var Nd=F.header`
  ${vd}
  margin-top: 1.5rem;
  padding: 1.35rem 1.45rem 1.2rem;
`,Q=F.div`
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: 1.25rem 2rem;
  align-items: start;

  @media (max-width: ${I.szelesseg.tablet}) {
    grid-template-columns: 1fr;
  }
`,Pd=F.h2`
  margin: 0 0 0.4rem;
  font-family: ${I.betu.cim};
  font-size: clamp(1.2rem, 2.8vw, 1.65rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
  ${La}
`,Fd=F.p`
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${I.szin.szurkeSotet};
`,Id=F.p`
  margin: 0.35rem 0 0;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: ${I.szin.szurke};
  font-variant-numeric: tabular-nums;
`,Ld=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.6rem;
  margin-top: 1rem;
`,Rd=F.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  color: ${I.szin.feher};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.2));
  border: 1px solid rgba(197, 165, 114, 0.28);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);

  &::before {
    content: '';
    width: 4px;
    height: 4px;
    border: 1px solid ${I.szin.arany};
    transform: rotate(45deg);
    flex-shrink: 0;
  }
`,zd=F.div`
  ${vd}
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.82rem;
  color: ${I.szin.szurke};
  box-shadow: none;
`,Bd=F.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding-bottom: 0.45rem;
  border-bottom: 1px solid rgba(197, 165, 114, 0.1);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  span {
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-size: 0.68rem;
    color: ${I.szin.szurkeSotet};
  }

  strong {
    min-width: 0;
    color: ${I.szin.aranyVilagos};
    font-weight: 600;
    text-align: right;
    overflow-wrap: anywhere;
  }

  @media (max-width: ${I.szelesseg.kicsi}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;

    strong {
      text-align: left;
    }
  }
`,Vd=F.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${I.betu.torzs};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.55rem 0.95rem;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  ${e=>e.$aktiv?Va:`
    color: ${I.szin.aranyVilagos};
    background: rgba(197, 165, 114, 0.1);
    border: 1px solid rgba(197, 165, 114, 0.32);
  `}

  &:hover {
    transform: translateY(-1px);
  }
`;function Hd({reszlet:e,id:t,statuszAllit:n}){let r=rd(e),i=typeof r.teljesNev==`string`&&r.teljesNev||e.nev||`—`,a=e.erkezett?new Date(e.erkezett).toLocaleString(`hu-HU`):`—`,o=(e.statusz||``).toLowerCase();return P(Nd,{children:[P(Q,{children:[P(`div`,{children:[N(Fd,{children:`Jelentkező`}),N(Pd,{children:i}),N(Id,{children:t}),P(Ld,{children:[e.email?N(Rd,{children:e.email}):null,e.telefon?N(Rd,{children:e.telefon}):null,typeof r.orszag==`string`&&r.orszag?N(Rd,{children:r.orszag}):null,typeof r.lakhely==`string`&&r.lakhely?N(Rd,{children:r.lakhely}):null]})]}),P(zd,{children:[P(Bd,{children:[N(`span`,{children:`Beérkezés`}),N(`strong`,{children:a})]}),P(Bd,{children:[N(`span`,{children:`Státusz`}),N(`strong`,{children:e.statusz||`—`})]})]})]}),P(Vu,{style:{marginTop:`1.15rem`,marginBottom:0},children:[N(Vd,{type:`button`,$aktiv:o===`uj`,onClick:()=>n(`uj`),children:`Új`}),N(Vd,{type:`button`,$aktiv:o===`folyamatban`,onClick:()=>n(`folyamatban`),children:`Folyamatban`}),N(Vd,{type:`button`,$aktiv:o===`lezart`,onClick:()=>n(`lezart`),children:`Lezárt`})]})]})}var Ud=F.section`
  ${vd}
  margin-top: 2rem;
  padding: 1.2rem 1.25rem 1.35rem;
`,Wd=F.h3`
  ${yd}
`,Gd=F.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 0.85rem;
  margin-top: 0.25rem;

  @media (max-width: ${I.szelesseg.mobil}) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Kd=F.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding: 0.75rem 0.85rem;
  text-align: center;
  cursor: pointer;
  font-family: ${I.betu.torzs};
  color: ${I.szin.feher};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.15));
  border: 1px solid rgba(197, 165, 114, 0.22);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    background 0.25s ease;

  &:hover:not(:disabled) {
    border-color: rgba(197, 165, 114, 0.45);
    transform: translateY(-1px);
    background: linear-gradient(180deg, rgba(197, 165, 114, 0.12), rgba(0, 0, 0, 0.18));
  }

  &:disabled {
    opacity: 0.55;
    cursor: wait;
  }
`,qd=F.span`
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${I.szin.arany};
`,Jd=F.span`
  max-width: 100%;
  font-size: 0.84rem;
  line-height: 1.35;
  color: ${I.szin.aranyVilagos};
  overflow-wrap: anywhere;
`,Yd=F.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
  margin-top: 0.35rem;
`,Xd=F.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0.4rem 0.75rem;
  border: 1px solid rgba(197, 165, 114, 0.45);
  color: ${I.szin.aranyVilagos};
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${I.szin.aranyVilagos};
    outline-offset: 2px;
  }
`;function Zd(e){let n=e.toLowerCase();return n.endsWith(`.pdf`)||/\.(png|jpe?g|webp|gif)$/.test(n)}function Qd(e,t,n,r){let i=new URLSearchParams({path:t,access:e,nev:n});return r&&i.set(`letoltes`,`1`),`/api/admin/fajl?${i.toString()}`}var $d=F.div`
  margin-top: 1rem;
  border: 1px solid rgba(197, 165, 114, 0.3);
  background: rgba(0, 0, 0, 0.35);
  min-height: 0;
  max-width: 100%;
  overflow: hidden;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.25);
`,ef=F.iframe`
  width: 100%;
  min-height: 70vh;
  border: 0;
  background: #fff;
`,tf=F.img`
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: min(70vh, 720px);
  margin: 0 auto;
  object-fit: contain;
`,nf=F.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(6px);
`,rf=F.div`
  box-sizing: border-box;
  width: min(100%, 960px);
  max-width: calc(100vw - 2rem);
  max-height: min(92vh, 100dvh - 2rem);
  overflow: auto;
  padding: 1.15rem;
  ${vd}
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
`,af=F.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${I.betu.torzs};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 0.9rem;
  color: ${I.hatter.fekete};
  cursor: pointer;
  border: 1px solid rgba(232, 215, 181, 0.55);
  background: linear-gradient(135deg, #8f7349, #e8d7b5, #c5a572);
`;function of(e,t){let n=e.toLowerCase();return t.type===`application/pdf`||n.endsWith(`.pdf`)?`pdf`:t.type.startsWith(`image/`)||/\.(png|jpe?g|webp|gif)$/i.test(n)?`kep`:`egyeb`}function sf({fajlok:e}){let[t,n]=(0,x.useState)(``),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(null),[s,c]=(0,x.useState)(null),[l,u]=(0,x.useState)(``);(0,x.useEffect)(()=>()=>{a&&URL.revokeObjectURL(a)},[a]);async function d(e){n(``),i(!0);try{let t=await Mo(yo(),e.utvonal),n=of(e.nev,t);if(a&&URL.revokeObjectURL(a),n===`egyeb`){let n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=e.nev,r.click(),URL.revokeObjectURL(n);return}let r=URL.createObjectURL(t);o(r),c(n),u(e.nev)}catch(e){n(e instanceof Error?e.message:`A fájl betöltése sikertelen.`)}finally{i(!1)}}function f(){a&&URL.revokeObjectURL(a),o(null),c(null),u(``)}return e.length?P(Ud,{children:[N(Wd,{children:`Dokumentumok`}),t?N(zu,{hiba:!0,children:t}):null,N(Gd,{children:e.map(e=>Zd(e.nev)?P(Kd,{as:`div`,children:[N(qd,{children:Ju(e.mezo)}),N(Jd,{children:e.nev}),P(Yd,{children:[N(Xd,{href:Qd(yo(),e.utvonal,e.nev,!1),target:`_blank`,rel:`noopener noreferrer`,children:`Megnyitás`}),N(Xd,{href:Qd(yo(),e.utvonal,e.nev,!0),download:e.nev,target:`_blank`,rel:`noopener noreferrer`,children:`Letöltés`})]})]},e.utvonal):P(Kd,{type:`button`,disabled:r,onClick:()=>void d(e),children:[N(qd,{children:Ju(e.mezo)}),N(Jd,{children:e.nev})]},e.utvonal))}),a&&s?N(nf,{role:`dialog`,"aria-modal":`true`,"aria-label":l,onClick:f,children:P(rf,{onClick:e=>e.stopPropagation(),children:[P(Vu,{children:[N(af,{type:`button`,onClick:f,children:`Bezárás`}),N(`span`,{style:{color:I.szin.szurke,fontSize:`0.85rem`},children:l})]}),N($d,{children:s===`pdf`?N(ef,{src:a,title:l}):N(tf,{src:a,alt:l})})]})}):null]}):P(Ud,{children:[N(Wd,{children:`Dokumentumok`}),N(zu,{children:`Nincs feltöltött dokumentum.`})]})}var cf=F.section`
  ${vd}
  margin: 1.5rem 0;
  padding: 1.2rem 1.25rem 1.3rem;
`,lf=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  margin-bottom: 1rem;
`,uf=F.h3`
  ${yd}
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;

  &::after {
    display: none;
  }
`,df=F.span`
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.7rem;
  border: 1px solid
    ${e=>e.$tipus===`ok`?`rgba(88, 175, 110, 0.5)`:e.$tipus===`hiba`?`rgba(210, 95, 95, 0.5)`:`rgba(197, 165, 114, 0.35)`};
  background: ${e=>e.$tipus===`ok`?`rgba(45, 110, 65, 0.25)`:e.$tipus===`hiba`?`rgba(120, 40, 40, 0.28)`:`rgba(197, 165, 114, 0.08)`};
  color: ${I.szin.feher};
`,ff=F.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1rem 1.25rem;
  align-items: start;

  @media (max-width: ${I.szelesseg.tablet}) {
    grid-template-columns: 1fr;
  }
`,pf=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-width: 0;
`,mf=F.h4`
  margin: 0 0 0.15rem;
  padding-bottom: 0.45rem;
  font-family: ${I.betu.cim};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>e.$hang===`ok`?`#8fd4a8`:`#e8a0a0`};
  border-bottom: 1px solid
    ${e=>e.$hang===`ok`?`rgba(88, 175, 110, 0.35)`:`rgba(210, 95, 95, 0.35)`};
`,hf=F.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,gf=F.p`
  margin: 0;
  padding: 0.65rem 0.75rem;
  font-size: 0.78rem;
  font-style: italic;
  color: ${I.szin.szurke};
  border: 1px dashed rgba(197, 165, 114, 0.2);
  border-radius: 2px;
`,_f=F.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(197, 165, 114, 0.15);
`,vf=F.h4`
  margin: 0 0 0.5rem;
  font-family: ${I.betu.cim};
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${I.szin.aranyVilagos};
`,yf=F.li`
  padding: 0.7rem 0.8rem;
  border-radius: 2px;
  border: 1px solid
    ${e=>e.allapot===`megfelel`?`rgba(88, 175, 110, 0.45)`:e.allapot===`nem_megfelel`?`rgba(210, 95, 95, 0.48)`:`rgba(197, 165, 114, 0.18)`};
  background: ${e=>e.allapot===`megfelel`?`linear-gradient(145deg, rgba(45, 110, 65, 0.3), rgba(20, 50, 32, 0.15))`:e.allapot===`nem_megfelel`?`linear-gradient(145deg, rgba(130, 40, 40, 0.35), rgba(60, 20, 20, 0.12))`:`linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.12))`};
  font-size: 0.82rem;
  line-height: 1.48;
  color: ${I.szin.szurke};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`,bf=F.strong`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.35rem;
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  ${La}
`,xf=F.p`
  margin: 0 0 0.5rem;
`,Sf=F.div`
  margin-top: 0.55rem;
  padding-top: 0.55rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`,Cf=F.p`
  margin: 0 0 0.4rem;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${I.szin.aranyVilagos};
`,wf=F.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Tf=F.li`
  font-size: 0.78rem;
  line-height: 1.45;
  color: ${I.szin.feher};
`,Ef=F.span`
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${I.szin.szurke};
  margin-bottom: 0.1rem;
`,Df=F.span`
  display: block;
  word-break: break-word;
`,Of=F.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${e=>e.allapot===`megfelel`?`#6fcf97`:e.allapot===`nem_megfelel`?`#e07a7a`:I.szin.arany};
  box-shadow: 0 0 10px
    ${e=>e.allapot===`megfelel`?`rgba(111, 207, 151, 0.45)`:e.allapot===`nem_megfelel`?`rgba(224, 122, 122, 0.4)`:`rgba(197, 165, 114, 0.35)`};
`;function kf({elemek:e,mutatKitoltoValaszok:t=!1}){return e.length===0?N(gf,{children:`Nincs megjeleníthető pont ebben a csoportban.`}):N(hf,{children:e.map(e=>P(yf,{allapot:e.allapot,children:[P(bf,{children:[N(Of,{allapot:e.allapot,"aria-hidden":!0}),e.cimke]}),N(xf,{children:e.indok}),t&&e.kitoltoValaszok.length>0?P(Sf,{children:[N(Cf,{children:`Kitöltő válasza a kérdőívben`}),N(wf,{children:e.kitoltoValaszok.map(e=>P(Tf,{children:[N(Ef,{children:e.cimke}),N(Df,{children:e.ertek})]},e.mezo))})]}):null]},e.id))})}function Af({osszegzes:e}){let t=e.teljesMegfeleles?`ok`:e.vanHiba?`hiba`:`resz`,n=e.teljesMegfeleles?`Összesen megfelel`:e.vanHiba?`Van hiányosság`:`Részben / ellenőrizendő`,r=e.eredmenyek.filter(e=>e.allapot===`megfelel`),i=e.eredmenyek.filter(e=>e.allapot===`nem_megfelel`),a=e.eredmenyek.filter(e=>e.allapot===`nem_ellenorizheto`);return P(cf,{children:[P(lf,{children:[N(uf,{children:`Karrier követelmények`}),N(df,{$tipus:t,children:n})]}),P(ff,{children:[P(pf,{children:[N(mf,{$hang:`ok`,children:`Megfelel / előny`}),N(kf,{elemek:r})]}),P(pf,{children:[N(mf,{$hang:`hiba`,children:`Nem teljesített / hátrány`}),N(kf,{elemek:i,mutatKitoltoValaszok:!0})]})]}),a.length>0?P(_f,{children:[N(vf,{children:`Nem automatikusan ellenőrizhető`}),N(kf,{elemek:a})]}):null]})}var jf=F.div`
  width: min(100%, ${I.maxTartalom});
  margin: 0 auto;
  padding-bottom: 2.5rem;
`,Mf=F(Ru)`
  display: inline-flex;
  align-items: center;
  margin-top: 0.25rem;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.9;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;function Nf(){let{szoveg:w}=R(),b=w.belso,{id:e=``}=Dt(),[t,n]=(0,x.useState)(null),[r,i]=(0,x.useState)(``),[f,p]=(0,x.useState)(!1),[m,h]=(0,x.useState)(``),[g,_]=(0,x.useState)(``);(0,x.useEffect)(()=>{Ao(yo(),e).then(n).catch(e=>i(e instanceof Error?e.message:`Hiba`))},[e]);async function a(t){try{let r=await jo(yo(),e,t);n(r)}catch(e){i(e instanceof Error?e.message:`Hiba`)}}async function c(){if(f||t?.fiokUserId)return;p(!0),h(``);try{let r=await fiokJelentkezesbol(yo(),e);n(r.jelentkezes||{...t,fiokUserId:r.fiokUserId,fiokEmail:r.email,fiokLetrehozva:(new Date).toISOString()}),_(r.ideiglenesJelszo||``)}catch(e){h(e instanceof Error?e.message:`A fiók létrehozása sikertelen.`)}finally{p(!1)}}return P(jf,{children:[N(Mf,{to:`/dashboard/jelentkezesek`,children:`← Vissza a listához`}),r?N(zu,{hiba:!0,children:r}):null,t?P(va,{children:[N(Hd,{reszlet:t,id:e,statuszAllit:e=>void a(e)}),N(Af,{osszegzes:id(t)}),N(Md,{reszlet:t}),N(sf,{fajlok:t.fajlok??[]})]}):null]})}var Pf={auth:`Bejelentkezés`,tartalom:`Tartalom`,jelentkezes:`Jelentkezés`,fajl:`Fájl`,rendszer:`Rendszer`},Ff={bejelentkezes_siker:`Sikeres bejelentkezés`,bejelentkezes_sikertelen:`Sikertelen bejelentkezés`,tartalom_megtekintes:`Tartalom megtekintése`,tartalom_modositas:`Tartalom módosítása`,uj_jelentkezes:`Új jelentkezés`,jelentkezes_mentes_hiba:`Jelentkezés mentési hiba`,lista_megtekintes:`Lista megtekintése`,reszlet_megtekintes:`Részlet megtekintése`,statusz_modositas:`Státusz módosítása`,letoltes:`Fájl letöltés / megtekintés`,szerver_inditas:`Szerver indítás`},If=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
  margin: 1.25rem 0;
  font-size: 0.85rem;
  color: ${I.szin.szurke};
`,Lf=F.select`
  padding: 0.45rem 0.6rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(197, 165, 114, 0.35);
  color: ${I.szin.feher};
  font-size: 0.85rem;
`,Rf=F.section`
  ${vd}
  padding: 1rem 1.1rem 1.2rem;
  margin-top: 0.5rem;
`,zf=F.h2`
  ${yd}
  font-size: 0.95rem;
  margin-bottom: 0;
`,Bf=F.td`
  font-size: 0.8rem;
  color: ${I.szin.szurke};
  max-width: 14rem;
  word-break: break-word;
`,Vf=F.td`
  line-height: 1.45;
`,Hf=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  font-size: 0.82rem;
  color: ${I.szin.szurke};
`,Uf=F.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${I.szin.aranyVilagos};
  background: rgba(197, 165, 114, 0.12);
  border: 1px solid rgba(197, 165, 114, 0.32);
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,Wf=50;function Gf(e){return Pf[e]||e}function Kf(e){return Ff[e]||e}function qf(e){let t=e.adat||{};return t.jelentkezesId?N(Rn,{to:`/dashboard/jelentkezesek/${t.jelentkezesId}`,style:{color:I.szin.aranyVilagos},children:String(t.jelentkezesId)}):t.utvonal?String(t.utvonal):Array.isArray(t.valtozottMezok)&&t.valtozottMezok.length?`Mezők: ${t.valtozottMezok.join(`, `)}`:t.darab==null?t.nev?String(t.nev):`—`:`${t.darab} db`}function Jf(){let[e,t]=(0,x.useState)([]),[n,r]=(0,x.useState)(0),[i,a]=(0,x.useState)(0),[o,s]=(0,x.useState)(``),[c,l]=(0,x.useState)(``),[u,d]=(0,x.useState)(!1),f=(0,x.useCallback)(async()=>{d(!0),l(``);try{let e=await Io(yo(),{limit:Wf,offset:i,kategoria:o||void 0});t(e.naplo),r(e.osszesen)}catch(e){l(e instanceof Error?e.message:`A napló betöltése sikertelen.`)}finally{d(!1)}},[i,o]);return(0,x.useEffect)(()=>{f()},[f]),(0,x.useEffect)(()=>{a(0)},[o]),P(`div`,{children:[N(zf,{children:`Eseménynapló`}),N(`p`,{style:{fontSize:`0.85rem`,color:I.szin.szurke,margin:`0.5rem 0 0`},children:`Bejelentkezések, tartalom-módosítások, új jelentkezések, státuszváltások és fájlműveletek.`}),P(If,{children:[P(`label`,{children:[`Kategória:`,` `,P(Lf,{value:o,onChange:e=>s(e.target.value),children:[N(`option`,{value:``,children:`Összes`}),Object.entries(Pf).map(([e,t])=>N(`option`,{value:e,children:t},e))]})]}),N(Uf,{type:`button`,onClick:()=>void f(),disabled:u,children:u?`Frissítés…`:`Frissítés`})]}),c?N(zu,{hiba:!0,children:c}):null,P(Rf,{children:[e.length===0&&!u?N(zu,{children:`Még nincs naplóbejegyzés (az új események innentől jelennek meg).`}):P(Bu,{children:[N(`thead`,{children:P(`tr`,{children:[N(`th`,{children:`Időpont`}),N(`th`,{children:`Kategória`}),N(`th`,{children:`Esemény`}),N(`th`,{children:`Leírás`}),N(`th`,{children:`Kapcsolódó`}),N(`th`,{children:`Felhasználó`}),N(`th`,{children:`IP`})]})}),N(`tbody`,{children:e.map(e=>P(`tr`,{children:[N(`td`,{children:new Date(e.idopont).toLocaleString(`hu-HU`)}),N(`td`,{children:Gf(e.kategoria)}),N(`td`,{children:Kf(e.esemeny)}),N(Vf,{children:e.uzenet}),N(Bf,{children:qf(e)}),N(`td`,{children:e.felhasznalo||`—`}),N(`td`,{style:{fontSize:`0.75rem`,color:I.szin.szurkeSotet},children:e.ip||`—`})]},e.id))})]}),P(Hf,{children:[N(Uf,{type:`button`,onClick:()=>a(e=>Math.max(0,e-Wf)),disabled:i===0||u,children:`Előző`}),N(`span`,{children:n===0?`0 bejegyzés`:`${i+1}–${Math.min(i+Wf,n)} / ${n}`}),N(Uf,{type:`button`,onClick:()=>{i+Wf<n&&a(e=>e+Wf)},disabled:i+Wf>=n||u,children:`Következő`})]})]})]})}var Yf=F.div`
  min-height: 100dvh;
  height: 100dvh;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${I.hatter.fekete};
  color: ${I.szin.feher};
  font-family: ${I.betu.torzs};
`,Xf=F.input`
  width: 100%;
  min-height: 48px;
  padding: 0.65rem 0.85rem;
  border-radius: 4px;
  border: ${L};
  background: ${I.hatter.emelt};
  color: ${I.szin.feher};
  font-size: 1rem;

  &:focus-visible {
    ${Ra}
  }
`,Zf=F.label`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: ${I.szin.szurke};
`,Qf=F.button`
  min-height: 48px;
  padding: 0.65rem 1.25rem;
  border-radius: 4px;
  border: ${L};
  background: ${e=>e.prim?`rgba(197, 165, 114, 0.18)`:`transparent`};
  color: ${I.szin.aranyVilagos};
  font-family: ${I.betu.cim};
  letter-spacing: 0.08em;
  cursor: pointer;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:focus-visible {
    ${Ra}
  }
`,$f=F.section`
  border: ${L};
  background: ${I.hatter.sotet};
  border-radius: 6px;
  padding: 1.25rem;
  box-shadow: ${I.arnyek.kartya};
`,ep=F.p`
  margin: 0;
  padding: 0.65rem 0.85rem;
  border-radius: 4px;
  border: 1px solid rgba(220, 80, 80, 0.45);
  background: rgba(80, 20, 20, 0.35);
  color: #f5d0d0;
  font-size: 0.9rem;
`,tp=F.p`
  margin: 0;
  padding: 0.65rem 0.85rem;
  border-radius: 4px;
  border: 1px solid rgba(120, 180, 120, 0.45);
  background: rgba(20, 60, 30, 0.35);
  color: #d8f0d8;
  font-size: 0.9rem;
`,np=F.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: max(1.25rem, env(safe-area-inset-top))
    ${I.oldalsoPadding} max(1.25rem, env(safe-area-inset-bottom));
`,rp=F.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.85rem;
`,ip=F.h1`
  margin: 0 0 1.25rem;
  font-family: ${I.betu.cim};
  font-size: clamp(1.35rem, 4vw, 1.75rem);
  letter-spacing: 0.12em;
  text-align: center;
  ${La}
`,ap=F.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,op=F.div`
  display: flex;
  gap: 0.5rem;
  align-items: stretch;

  input {
    flex: 1;
  }
`;F.p`
  margin: 0 0 1rem;
  font-size: 0.8rem;
  color: ${I.szin.szurke};
  text-align: center;
  line-height: 1.45;
`;var sp=F(Rn)`
  display: inline-block;
  margin-top: 1.25rem;
  color: ${I.szin.szurke};
  font-size: 0.85rem;
  text-decoration: underline;
  text-underline-offset: 3px;
`;function cp(){let{szoveg:e}=R(),t=e.belso,n=Ct(),r=bt(),{bejelentkezve:i,bejelentkezes:a}=wu(),[o,s]=(0,x.useState)(``),[c,l]=(0,x.useState)(``),[u,d]=(0,x.useState)(!1),[f,p]=(0,x.useState)(``),[m,h]=(0,x.useState)(!1);(0,x.useEffect)(()=>{if(i){let e=r.state?.from||`/dashboard`;n(e,{replace:!0})}},[i,n,r.state]);async function g(e){e.preventDefault(),p(``),h(!0);try{await a(o.trim(),c);let e=r.state?.from||`/dashboard`;n(e,{replace:!0})}catch(e){p(e instanceof Error?e.message:t.belepesHibaAlt)}finally{h(!1)}}return N(Yf,{children:P(np,{children:[N(rp,{children:N(xu,{className:`belso-nyelv-valaszto`})}),P($f,{style:{width:`100%`,maxWidth:420},children:[N(ip,{children:t.belepesCim}),null,N(`form`,{onSubmit:g,children:P(ap,{children:[P(Zf,{children:[t.emailCimke,N(Xf,{type:`text`,name:`email`,autoComplete:`username`,inputMode:`email`,required:!0,value:o,onChange:e=>s(e.target.value)})]}),P(Zf,{children:[t.jelszoCimke,P(op,{children:[N(Xf,{type:u?`text`:`password`,name:`password`,autoComplete:`current-password`,required:!0,value:c,onChange:e=>l(e.target.value)}),N(Qf,{type:`button`,"aria-pressed":u,"aria-label":u?t.jelszoElrejt:t.jelszoMutat,onClick:()=>d(e=>!e),children:u?t.jelszoElrejt:t.jelszoMutat})]})]}),f?N(ep,{role:`alert`,children:f}):null,N(Qf,{prim:!0,type:`submit`,disabled:m,children:m?t.belepesFut:t.belepesGomb})]})}),N(sp,{to:`/`,children:t.visszaNyilvanos})]})]})})}function lp({children:e}){let{bejelentkezve:t,betolt:n}=wu(),r=bt();return n?N(`div`,{style:{minHeight:`40vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#cfc6b8`},role:`status`,"aria-live":`polite`,children:`Betöltés…`}):t?e:N(Yt,{to:`/login`,replace:!0,state:{from:r.pathname}})}function up(){let{felhasznalo:e,betolt:t}=wu(),n=bt(),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(``);return(0,x.useEffect)(()=>{if(t||e?.role!==`ADMIN`)return;let n=!1;return i(!1),o(``),(async()=>{try{await So(),n||i(!0)}catch(e){n||o(e instanceof Error?e.message:`Az admin modul nem indítható.`)}})(),()=>{n=!0}},[t,e?.role]),t?N(`div`,{role:`status`,"aria-live":`polite`,style:{color:`#cfc6b8`},children:`Betöltés…`}):e?.role===`ADMIN`?a?N(`p`,{role:`alert`,style:{color:`#f5c6c6`},children:a}):r?N(Xt,{}):N(`div`,{role:`status`,"aria-live":`polite`,style:{color:`#cfc6b8`},children:`Betöltés…`}):N(Yt,{to:`/dashboard/aktualis-munka`,replace:!0,state:{from:n.pathname}})}function dp(e){if(!e?.email)return``;let t=e.email.toLowerCase();return t===`teszt@teszt.local`?`teszt`:t===`admin@juliette.local`?`admin`:e.email}var fp=F.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background: ${I.hatter.fekete};
  overflow: hidden;
`,pp=F.header`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem ${I.oldalsoPadding};
  padding-top: max(0.75rem, env(safe-area-inset-top));
  border-bottom: ${L};
  background: ${I.hatter.sotet};
  flex-shrink: 0;
  z-index: 20;

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-template-columns: 1fr minmax(0, auto) 1fr;
  }
`,mp=F(Qf)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 4.75rem;
  min-height: 44px;
  padding: 0.5rem 0.65rem;
  flex-shrink: 0;
  line-height: 1.2;

  @media (min-width: ${I.szelesseg.tablet}) {
    display: none;
  }
`,hp=F.p`
  margin: 0;
  min-width: 0;
  text-align: center;

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-column: 2;
    justify-self: center;
  }
  font-family: ${I.betu.cim};
  font-size: clamp(0.72rem, 3.2vw, 0.85rem);
  letter-spacing: 0.06em;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${La}
`,gp=F.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-column: 3;
  }
`,_p=F.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: 100%;
  overflow: hidden;

  @media (min-width: ${I.szelesseg.tablet}) {
    flex-direction: row;
    overflow: hidden;
  }
`,vp=F.aside`
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 40;
  width: min(280px, 92vw);
  max-width: 100%;
  transform: translateX(${e=>e.nyitva?`0`:`-105%`});
  transition: transform 0.22s ease;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  gap: 0.35rem;
  background: rgba(27, 27, 27, 0.98);
  border-right: ${L};
  box-shadow: ${I.arnyek.kartya};
  overflow-y: auto;

  @media (min-width: ${I.szelesseg.tablet}) {
    position: sticky;
    top: 0;
    align-self: stretch;
    transform: none;
    width: min(240px, 28vw);
    flex-shrink: 0;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    box-shadow: none;
  }
`,yp=F.button`
  position: fixed;
  inset: 0;
  z-index: 35;
  border: none;
  background: rgba(0, 0, 0, 0.55);
  cursor: pointer;

  @media (min-width: ${I.szelesseg.tablet}) {
    display: none;
  }
`,bp=F(zn)`
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  color: ${I.szin.szurke};
  text-decoration: none;
  letter-spacing: 0.06em;
  font-size: 0.82rem;

  &.aktiv {
    color: ${I.szin.aranyVilagos};
    background: rgba(197, 165, 114, 0.12);
    border: ${L};
  }

  &:focus-visible {
    outline: 2px solid ${I.szin.aranyVilagos};
    outline-offset: 2px;
  }
`,xp=F.div`
  margin-top: auto;
  padding-top: 1rem;
`,Sp=F.main`
  flex: 1;
  min-width: 0;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.55rem ${I.oldalsoPadding} max(0.75rem, env(safe-area-inset-bottom));
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: ${I.szelesseg.tablet}) {
    height: 100%;
    padding: 1rem ${I.oldalsoPadding} max(2rem, env(safe-area-inset-bottom));
    overflow-y: auto;
    overscroll-behavior: contain;
  }
`;function Cp(){let{szoveg:e}=R(),t=e.belso,{felhasznalo:n,kijelentkezes:r}=wu(),i=Ct(),[a,o]=(0,x.useState)(!1),s=(0,x.useId)(),c=dp(n),l=n?.role===`ADMIN`,u=l?t.szerepAdmin:t.szerepKliens;(0,x.useEffect)(()=>{function e(e){e.key===`Escape`&&o(!1)}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,x.useEffect)(()=>(a?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[a]);async function d(){await r(),i(`/`,{replace:!0})}return N(Yf,{children:P(fp,{children:[P(pp,{children:[N(mp,{type:`button`,"aria-expanded":a,"aria-controls":s,onClick:()=>o(e=>!e),children:a?t.menuBezar:t.menuNyit}),P(hp,{title:`${c} · ${u}`,children:[c,c?` · ${u}`:``]}),N(gp,{children:N(xu,{className:`belso-nyelv-valaszto`})})]}),P(_p,{children:[a?N(yp,{type:`button`,"aria-label":t.menuBezar,onClick:()=>o(!1)}):null,P(vp,{id:s,nyitva:a,"aria-label":t.navAria,children:[N(bp,{to:`/dashboard/aktualis-munka`,className:({isActive:e})=>e?`aktiv`:``,onClick:()=>o(!1),children:t.aktualisMunka}),N(bp,{to:`/dashboard/chat`,className:({isActive:e})=>e?`aktiv`:``,onClick:()=>o(!1),children:t.chat}),N(bp,{to:`/dashboard/profile`,className:({isActive:e})=>e?`aktiv`:``,onClick:()=>o(!1),children:t.sajatAdataim}),l?P(va,{children:[N(bp,{to:`/dashboard/jelentkezesek`,className:({isActive:e})=>e?`aktiv`:``,onClick:()=>o(!1),children:t.adminJelentkezesek}),N(bp,{to:`/dashboard/soforok`,className:({isActive:e})=>e?`aktiv`:``,onClick:()=>o(!1),children:t.adminSoforok}),N(bp,{to:`/dashboard/tartalom`,className:({isActive:e})=>e?`aktiv`:``,onClick:()=>o(!1),children:t.adminTartalom}),N(bp,{to:`/dashboard/naplo`,className:({isActive:e})=>e?`aktiv`:``,onClick:()=>o(!1),children:t.adminNaplo})]}):null,N(xp,{children:N(Qf,{type:`button`,onClick:d,style:{width:`100%`},children:t.kijelentkezes})})]}),N(Sp,{children:N(Xt,{})})]})]})})}var wp=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  line-height: 1.6;
  font-size: 1rem;
`;function Tp(){let{szoveg:e}=R(),t=e.belso;return P($f,{children:[N(`h1`,{style:{margin:`0 0 0.75rem`,fontFamily:I.betu.cim,fontSize:`1.1rem`,letterSpacing:`0.1em`,color:I.szin.aranyVilagos},children:t.udvozletCim}),N(wp,{children:t.udvozletSzoveg})]})}var Ep=F.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 1fr);

  @media (min-width: ${I.szelesseg.kicsi}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Dp=F.div`
  grid-column: 1 / -1;
`;function Op(){let{szoveg:e}=R(),t=e.belso,{felhasznalo:n,felhasznaloBeallit:r}=wu(),i=n?.profile,[a,o]=(0,x.useState)(``),[s,c]=(0,x.useState)(``),[l,u]=(0,x.useState)(``),[d,f]=(0,x.useState)(``),[p,m]=(0,x.useState)(``),[h,g]=(0,x.useState)(``),[_,v]=(0,x.useState)(``),[y,b]=(0,x.useState)(``),[S,C]=(0,x.useState)(``),[w,ee]=(0,x.useState)(``),[te,ne]=(0,x.useState)(!1);(0,x.useEffect)(()=>{i&&(o(i.firstName),c(i.lastName),u(i.phone),f(i.birthDate??``),m(i.country),g(i.postalCode),v(i.city),b(i.streetAddress))},[i]);async function T(e){e.preventDefault(),C(``),ee(``),ne(!0);try{let e=await lo({firstName:a,lastName:s,phone:l,birthDate:d||null,country:p,postalCode:h,city:_,streetAddress:y});r(e),ee(t.mentesSiker)}catch(e){C(e instanceof Error?e.message:t.mentesHiba)}finally{ne(!1)}}return P($f,{children:[N(`h1`,{style:{margin:`0 0 1rem`,fontFamily:I.betu.cim,fontSize:`1.05rem`,letterSpacing:`0.1em`,color:I.szin.aranyVilagos},children:t.sajatAdataim}),P(`form`,{onSubmit:T,children:[P(Ep,{children:[P(Zf,{children:[t.vezeteknev,N(Xf,{name:`lastName`,autoComplete:`family-name`,value:s,onChange:e=>c(e.target.value)})]}),P(Zf,{children:[t.keresztnev,N(Xf,{name:`firstName`,autoComplete:`given-name`,value:a,onChange:e=>o(e.target.value)})]}),N(Dp,{children:P(Zf,{children:[t.emailCimke,N(Xf,{type:`email`,name:`email`,value:n?.email??``,readOnly:!0,"aria-readonly":`true`})]})}),P(Zf,{children:[t.telefon,N(Xf,{type:`tel`,name:`phone`,autoComplete:`tel`,inputMode:`tel`,value:l,onChange:e=>u(e.target.value)})]}),P(Zf,{children:[t.szuletesiDatum,N(Xf,{type:`date`,name:`birthDate`,value:d,onChange:e=>f(e.target.value)})]}),P(Zf,{children:[t.orszag,N(Xf,{name:`country`,autoComplete:`country-name`,value:p,onChange:e=>m(e.target.value)})]}),P(Zf,{children:[t.iranyitoszam,N(Xf,{name:`postalCode`,autoComplete:`postal-code`,value:h,onChange:e=>g(e.target.value)})]}),P(Zf,{children:[t.varos,N(Xf,{name:`city`,autoComplete:`address-level2`,value:_,onChange:e=>v(e.target.value)})]}),N(Dp,{children:P(Zf,{children:[t.lakcim,N(Xf,{name:`streetAddress`,autoComplete:`street-address`,value:y,onChange:e=>b(e.target.value)})]})})]}),P(`div`,{style:{marginTop:`1.25rem`,display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[S?N(ep,{role:`alert`,children:S}):null,w?N(tp,{role:`status`,children:w}):null,N(Qf,{prim:!0,type:`submit`,disabled:te,children:te?t.mentesFut:t.mentesGomb})]})]})]})}var kp={hu:`hu-HU`,en:`en-GB`,de:`de-DE`},Ap=F.ul`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
`,jp=F.li`
  border: ${L};
  border-radius: 6px;
  background: ${I.hatter.sotet};
  box-shadow: ${I.arnyek.kartya};
`,Mp=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.65rem;
`,Np=F.span`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
  flex: 1 1 14rem;
`,Pp=F.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.7rem;
  color: ${I.szin.feher};
  font-size: 0.98rem;

  strong {
    color: ${I.szin.aranyVilagos};
    font-weight: 600;
  }
`,Fp=F.span`
  color: ${I.szin.szurke};
  font-size: 0.86rem;
  line-height: 1.35;
`,Ip=F.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-left: auto;
`,Lp=F(Qf)`
  min-height: 40px;
  padding: 0.4rem 0.8rem;
  white-space: nowrap;
`,Rp=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  font-size: 0.95rem;
`,zp=F.div`
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.62);
`,Bp=F.div`
  width: min(100%, 26rem);
  padding: 1.25rem 1.35rem;
  border: ${L};
  border-radius: 8px;
  background: ${I.hatter.sotet};
  box-shadow: ${I.arnyek.kartya};

  h2 {
    margin: 0 0 0.55rem;
    font-family: ${I.betu.cim};
    font-size: 1.15rem;
    color: ${I.szin.aranyVilagos};
    letter-spacing: 0.04em;
  }

  p {
    margin: 0 0 1rem;
    color: ${I.szin.szurke};
    line-height: 1.45;
  }
`;function Vp(e){let t=e?.munka;return!t||typeof t!=`object`?null:t}function Hp(e,t){if(!t)return`—`;let n=t instanceof Date?t:new Date(t);return Number.isNaN(n.getTime())?String(t):new Intl.DateTimeFormat(kp[e],{dateStyle:`medium`,timeStyle:`short`}).format(n)}function Up({munkak:e,adminNezet:t}){let{nyelv:n,szoveg:r}=R(),i=r.belso,[a,o]=(0,x.useState)(null),[s,c]=(0,x.useState)(``);return e.length===0?N(Rp,{children:i.elvegzettUres}):P(va,{children:[s?N(Rp,{role:`alert`,children:s}):null,N(Ap,{children:e.map(e=>{let r=Vp(e.payload),s=r?new Intl.NumberFormat(kp[n],{style:`currency`,currency:`EUR`,currencyDisplay:`narrowSymbol`,maximumFractionDigits:0}).format(Number(r.dijEuro)||0):``,l=e.cimzettNev||(e.cimzettEmail===`teszt@teszt.local`?`teszt`:e.cimzettEmail);return N(jp,{children:P(Mp,{children:[P(Np,{children:[P(Pp,{children:[N(`strong`,{children:e.munkaAzonosito}),r?P(`span`,{children:[r.jarmu?.modell,` · `,r.jarmu?.rendszam]}):null,s?N(`span`,{children:s}):null]}),P(Fp,{children:[r?`${r.felvetel?.allomas} → ${r.leadas?.allomas} · `:null,Hp(n,e.completedAt),t?` · ${i.elvegzettSofor}: ${l}`:null]})]}),N(Ip,{children:N(Lp,{type:`button`,prim:!0,disabled:a===e.id,onClick:()=>{c(``),o(e.id),ho(e.id).catch(()=>c(i.elvegzettPdfHiba)).finally(()=>o(null))},children:a===e.id?i.elvegzettPdfFut:i.elvegzettPdfGomb})})]})},e.id)})})]})}function Wp({onBezar:e}){let{szoveg:t}=R(),n=t.belso;return N(zp,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`elvegzett-siker-cim`,onClick:t=>{t.target===t.currentTarget&&e()},children:P(Bp,{children:[N(`h2`,{id:`elvegzett-siker-cim`,children:n.elvegzettSikerCim}),N(`p`,{children:n.elvegzettSikerSzoveg}),N(Qf,{type:`button`,prim:!0,onClick:e,children:n.elvegzettSikerBezar})]})})}function Gp(e,t,n){let r=Array.isArray(t)?t:[],i=Array.isArray(n)?n:[],a=e=>e.map(e=>e).filter(e=>e.vanSerules).map(({lepesId:e,kep:t,korok:n})=>({lepesId:e,kep:t,korok:n}));return{munka:{...e,felvetel:{...e.felvetel,idopont:e.felvetel.idopont.toISOString()},leadas:{...e.leadas,idopont:e.leadas.idopont.toISOString()}},felvetelKepek:r,leadasKepek:i,felvetelSerules:a(r),leadasSerules:a(i)}}function Kp(e){return`jl.aktualis-elvegezve:${e}`}function $(e,t,n){return{hu:e,en:t,de:n}}var qp=[{id:`eleje`,cim:$(`Autó eleje`,`Front of the car`,`Fahrzeug von vorn`),hogyan:$(`Álljon középre, az autóval szemben. Fekvő képen a teljes eleje látszódjon.`,`Stand centred, facing the car. The whole front must be in a landscape photo.`,`Stellen Sie sich mittig vor das Fahrzeug. Die ganze Front im Querformat.`),kep:`/kepek/foto-eleje.jpg`},{id:`bal-eleje`,cim:$(`Bal eleje srégen`,`Front-left corner`,`Vorne links schräg`),hogyan:$(`Álljon a bal első sarokhoz. A lökhárító és a bal oldal együtt látszódjon.`,`Stand at the front-left corner so the bumper and the left side are both visible.`,`Stellen Sie sich an die vordere linke Ecke. Stoßfänger und linke Seite zusammen.`),kep:`/kepek/foto-bal-eleje.jpg`},{id:`bal-elso-kerek`,cim:$(`Bal első kerék`,`Front-left wheel`,`Vorderes linkes Rad`),hogyan:$(`Közelről a bal első kerék: a felni és a gumi oldala legyen éles.`,`Close-up of the front-left wheel: the rim and the tyre sidewall must be sharp.`,`Nahaufnahme des vorderen linken Rades: Felge und Reifenflanke scharf.`),kep:`/kepek/foto-bal-elso-kerek.jpg`},{id:`bal-tukor`,cim:$(`Bal oldal, tükör hátulról`,`Left side and mirror from the rear`,`Linke Seite mit Spiegel von hinten`),hogyan:$(`A bal oldalt hátulról fotózza. A tükör is legyen a képen.`,`Photograph the left side from behind. The mirror must be in the frame.`,`Fotografieren Sie die linke Seite von hinten. Der Spiegel muss im Bild sein.`),kep:`/kepek/foto-bal-tukor.jpg?v=2`},{id:`bal-oldal`,cim:$(`Bal oldal teljes nézet`,`Full left side`,`Linke Seite komplett`),hogyan:$(`A teljes bal oldal, az elejétől a végéig, fekvő képen.`,`The entire left side, from front to back, in landscape.`,`Die gesamte linke Seite, von vorn bis hinten, im Querformat.`),kep:`/kepek/foto-bal-oldal.jpg`},{id:`bal-hatso-kerek`,cim:$(`Bal hátsó kerék`,`Rear-left wheel`,`Hinteres linkes Rad`),hogyan:$(`Közelről a bal hátsó kerék, a felni és a gumi oldala.`,`Close-up of the rear-left wheel, rim and tyre sidewall.`,`Nahaufnahme des hinteren linken Rades, Felge und Reifenflanke.`),kep:`/kepek/foto-bal-hatso-kerek.jpg?v=2`},{id:`bal-hatul`,cim:$(`Bal hátulja srégen`,`Rear-left corner`,`Hinten links schräg`),hogyan:$(`A bal hátsó sarok: a lökhárító és az oldal együtt látszódjon.`,`The rear-left corner: bumper and side together.`,`Die hintere linke Ecke: Stoßfänger und Seite zusammen.`),kep:`/kepek/foto-bal-hatul.jpg?v=3`},{id:`hatul`,cim:$(`Hátulja`,`Rear of the car`,`Fahrzeug von hinten`),hogyan:$(`Álljon középre a kocsi mögé. A teljes hátulja látszódjon.`,`Stand centred behind the car. The whole rear must be visible.`,`Stellen Sie sich mittig hinter das Fahrzeug. Die ganze Heckansicht.`),kep:`/kepek/foto-hatul.jpg`},{id:`csomagtarto`,cim:$(`Hátulja nyitott csomagtartóval`,`Rear with the boot open`,`Heck mit offenem Kofferraum`),hogyan:$(`Nyissa ki a csomagtartót. A nyitott fedél és a raktér együtt látszódjon.`,`Open the boot. The open lid and the load area must both be visible.`,`Öffnen Sie den Kofferraum. Deckel und Laderaum zusammen im Bild.`),kep:`/kepek/foto-csomagtarto.jpg`},{id:`csomagtarto-alja`,cim:$(`Csomagtartó alja felemelve`,`Boot floor lifted`,`Kofferraumboden angehoben`),hogyan:$(`Emelje fel a csomagtartó padlóját. Az alatta lévő rész látszódjon.`,`Lift the boot floor. The space underneath must be visible.`,`Heben Sie den Kofferraumboden an. Der Raum darunter muss sichtbar sein.`),kep:`/kepek/foto-csomagtarto-alja.jpg`},{id:`jobb-hatul`,cim:$(`Jobb hátulja srégen`,`Rear-right corner`,`Hinten rechts schräg`),hogyan:$(`A jobb hátsó sarok: a lökhárító és az oldal együtt látszódjon.`,`The rear-right corner: bumper and side together.`,`Die hintere rechte Ecke: Stoßfänger und Seite zusammen.`),kep:`/kepek/foto-jobb-hatul.jpg?v=3`},{id:`jobb-hatso-kerek`,cim:$(`Jobb hátsó kerék`,`Rear-right wheel`,`Hinteres rechtes Rad`),hogyan:$(`Közelről a jobb hátsó kerék, a felni és a gumi oldala.`,`Close-up of the rear-right wheel, rim and tyre sidewall.`,`Nahaufnahme des hinteren rechten Rades, Felge und Reifenflanke.`),kep:`/kepek/foto-jobb-hatso-kerek.jpg`},{id:`jobb-oldal`,cim:$(`Jobb oldal`,`Full right side`,`Rechte Seite komplett`),hogyan:$(`A teljes jobb oldal, az elejétől a végéig, fekvő képen.`,`The entire right side, from front to back, in landscape.`,`Die gesamte rechte Seite, von vorn bis hinten, im Querformat.`),kep:`/kepek/foto-jobb-oldal.jpg`},{id:`jobb-tukor`,cim:$(`Jobb oldal, tükör hátulról`,`Right side and mirror from the rear`,`Rechte Seite mit Spiegel von hinten`),hogyan:$(`A jobb oldalt hátulról fotózza. A tükör is legyen a képen.`,`Photograph the right side from behind. The mirror must be in the frame.`,`Fotografieren Sie die rechte Seite von hinten. Der Spiegel muss im Bild sein.`),kep:`/kepek/foto-jobb-tukor.jpg?v=2`},{id:`jobb-elso-kerek`,cim:$(`Jobb első kerék`,`Front-right wheel`,`Vorderes rechtes Rad`),hogyan:$(`Közelről a jobb első kerék: a felni és a gumi oldala legyen éles.`,`Close-up of the front-right wheel: the rim and the tyre sidewall must be sharp.`,`Nahaufnahme des vorderen rechten Rades: Felge und Reifenflanke scharf.`),kep:`/kepek/foto-jobb-elso-kerek.jpg?v=2`},{id:`szelvedo`,cim:$(`Szélvédő`,`Windscreen`,`Frontscheibe`),hogyan:$(`Kívülről a teljes szélvédő, fekvő képen, tükröződés nélkül, ha lehet.`,`The whole windscreen from outside, in landscape, with as little glare as possible.`,`Die ganze Frontscheibe von außen, im Querformat, möglichst ohne Spiegelung.`),kep:`/kepek/foto-szelvedo.jpg`},{id:`teto`,cim:$(`Autó teteje`,`Roof`,`Dach`),hogyan:$(`Álljon az autó mellé, és emelje a telefont a feje fölé. A tető ferdén, felülről látszódjon.`,`Stand beside the car and hold the phone above your head. The roof should be seen at an angle from above.`,`Stellen Sie sich neben das Fahrzeug und halten Sie das Telefon über den Kopf. Das Dach schräg von oben.`),kep:`/kepek/foto-teto.jpg?v=2`},{id:`utaster-elol`,cim:$(`Utastér elölről, a kormány felől`,`Cabin from the front, towards the wheel`,`Innenraum von vorn, zum Lenkrad`),hogyan:$(`Nyitott első ajtónál az első ülések és a kormány látszódjon.`,`With a front door open, the front seats and the steering wheel must be visible.`,`Bei offener Vordertür: Vordersitze und Lenkrad im Bild.`),kep:`/kepek/foto-utaster-elol.jpg`},{id:`utaster-hatul`,cim:$(`Utastér hátulról`,`Cabin from the rear`,`Innenraum von hinten`),hogyan:$(`A hátsó üléssor, a fejtámlákkal együtt.`,`The rear seat row, including the headrests.`,`Die Rücksitzreihe, einschließlich der Kopfstützen.`),kep:`/kepek/foto-utaster-hatul.jpg`},{id:`muszerfal`,cim:$(`Műszerfal, kilométer és üzemanyag`,`Dashboard, mileage and fuel`,`Armaturenbrett, Kilometer und Tank`),hogyan:$(`Indítsa el a járművet. A kilométeróra és az üzemanyagszint olvasható legyen.`,`Switch the vehicle on. The odometer and the fuel level must be readable.`,`Starten Sie das Fahrzeug. Kilometerstand und Tankfüllung müssen lesbar sein.`),kep:`/kepek/foto-muszerfal.jpg`},{id:`kulcs`,cim:$(`Kulcs és forgalmi`,`Key and registration`,`Schlüssel und Zulassung`),hogyan:$(`A kulcs és a forgalmi egy képen. A rendszám a kulcson olvasható legyen.`,`Key and registration in one photo. The registration number on the key must be readable.`,`Schlüssel und Zulassung auf einem Foto. Das Kennzeichen am Schlüssel muss lesbar sein.`),kep:`/kepek/foto-kulcs.jpg`},{id:`serules`,cim:$(`Sérülések`,`Damage`,`Schäden`),hogyan:$(`Minden karcolásról, horpadásról és egyéb sérülésről készítsen közeli képet. Ha több van, mindegyik külön fotó.`,`Take a close photo of every scratch, dent and other damage. One photo per mark if there are several.`,`Jedes Kratzer, jede Delle und jeder weitere Schaden als Nahaufnahme. Bei mehreren je ein Foto.`),kep:`/kepek/foto-serules.jpg`,tobbFoto:!0}],Jp=14,Yp=F.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  touch-action: none;
  cursor: ${e=>e.$aktiv?`crosshair`:`default`};
  pointer-events: ${e=>e.$aktiv?`auto`:`none`};
`;function Xp(e){let t=e.currentTarget.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width,y:(e.clientY-t.top)/t.height,szelesseg:t.width,magassag:t.height}}function Zp(e,t,n){let r=Math.hypot((n.x-e)*n.szelesseg,(n.y-t)*n.magassag);return{x:e,y:t,rx:r/n.szelesseg,ry:r/n.magassag}}function Qp({kor:e}){return N(`ellipse`,{cx:e.x,cy:e.y,rx:e.rx,ry:e.ry,fill:`rgba(180, 35, 24, 0.16)`,stroke:`#b42318`,strokeWidth:2.5,vectorEffect:`non-scaling-stroke`})}function $p({korok:e,aktiv:t,ariaCimke:n,onUjKor:r}){let i=(0,x.useRef)(null),[a,o]=(0,x.useState)(null);function s(e){if(!t||!r)return;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}let n=Xp(e);i.current={x:n.x,y:n.y},o({x:n.x,y:n.y,rx:0,ry:0})}function c(e){i.current&&o(Zp(i.current.x,i.current.y,Xp(e)))}function l(e){if(!i.current||!r)return;let t=Xp(e),n=Zp(i.current.x,i.current.y,t);n.rx*t.szelesseg>=Jp&&r(n),i.current=null,o(null)}return P(Yp,{$aktiv:t,viewBox:`0 0 1 1`,preserveAspectRatio:`none`,role:`img`,"aria-label":n,onPointerDown:s,onPointerMove:c,onPointerUp:l,onPointerCancel:()=>{i.current=null,o(null)},children:[e.map((e,t)=>N(Qp,{kor:e},`${e.x}-${e.y}-${e.rx}-${t}`)),a&&a.rx>0?N(Qp,{kor:a}):null]})}var em={hu:`hu-HU`,en:`en-GB`,de:`de-DE`},tm=F.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.72);
  padding: 0;

  @media (min-width: ${I.szelesseg.tablet}) {
    align-items: center;
    padding: 1.25rem;
  }
`,nm=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: min(100%, 920px);
  max-height: 100dvh;
  overflow: auto;
  box-sizing: border-box;
  padding: max(0.85rem, env(safe-area-inset-top)) 1rem
    max(1rem, env(safe-area-inset-bottom));
  background: ${I.hatter.sotet};
  color: ${I.szin.feher};

  @media (min-width: ${I.szelesseg.tablet}) {
    max-height: min(92dvh, 860px);
    border: ${L};
    border-radius: 8px;
  }
`,rm=F.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;

  h2 {
    margin: 0.15rem 0 0;
    font-family: ${I.betu.cim};
    font-size: clamp(1.05rem, 2.4vw, 1.35rem);
    letter-spacing: 0.06em;
    color: ${I.szin.aranyVilagos};
  }

  p {
    margin: 0;
    color: ${I.szin.arany};
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`,im=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  font-size: 0.9rem;
  line-height: 1.45;
`,am=F.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin: 0;
  padding: 0;
  border: none;
`,om=F.label`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  min-height: 44px;
  padding: 0.7rem 0.8rem;
  border: ${L};
  border-radius: 6px;
  cursor: pointer;
  line-height: 1.4;

  input {
    width: 1.15rem;
    height: 1.15rem;
    margin-top: 0.15rem;
    flex-shrink: 0;
    accent-color: ${I.szin.arany};
  }
`,sm=F.label`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  color: ${I.szin.szurke};
  font-size: 0.85rem;
  letter-spacing: 0.04em;
`,cm=F.textarea`
  width: 100%;
  min-height: 7.5rem;
  box-sizing: border-box;
  padding: 0.75rem 0.85rem;
  border-radius: 4px;
  border: ${L};
  background: ${I.hatter.emelt};
  color: ${I.szin.feher};
  font: inherit;
  font-size: 1rem;
  line-height: 1.45;
  resize: vertical;

  &:focus-visible {
    outline: 2px solid ${I.szin.aranyVilagos};
    outline-offset: 3px;
  }
`,lm=F.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 6px;
  border: ${L};
  background: #f4f1ea;
  display: grid;
  place-items: center;
`,um=F.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
`,dm=F.span`
  position: absolute;
  left: 0.6rem;
  bottom: 0.6rem;
  max-width: calc(100% - 1.2rem);
  padding: 0.3rem 0.55rem;
  border-radius: 4px;
  background: rgba(20, 20, 20, 0.82);
  color: ${I.szin.aranyVilagos};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  pointer-events: none;
`,fm=F.p`
  margin: 0;
  color: ${I.szin.feher};
  line-height: 1.5;
  font-size: 1rem;
`,pm=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,mm=F.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.65rem 1.25rem;
  border-radius: 4px;
  border: ${L};
  background: rgba(197, 165, 114, 0.18);
  color: ${I.szin.aranyVilagos};
  font-family: ${I.betu.cim};
  letter-spacing: 0.08em;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${I.szin.aranyVilagos};
    outline-offset: 3px;
  }
`,hm=F.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 0.28rem;
  margin: 0;
  padding: 0;
  list-style: none;
`,gm=F.li`
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: ${e=>e.$kesz?I.szin.arany:`transparent`};
  border: 1px solid
    ${e=>e.$aktualis?I.szin.aranyVilagos:`rgba(197, 165, 114, 0.45)`};
`,_m=F.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.4;
`,vm=F.dl`
  display: grid;
  gap: 0.35rem;
  margin: 0;

  dt {
    color: ${I.szin.szurkeSotet};
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    margin: 0 0 0.35rem;
    line-height: 1.45;
  }

  a {
    color: ${I.szin.aranyVilagos};
  }
`,ym={van:!1,korok:[]};function bm(e,t){return new Intl.DateTimeFormat(em[e],{dateStyle:`medium`,timeStyle:`short`}).format(t)}function xm(e){return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`}function Sm({cel:e,munka:t,keszNezet:n=!1,onBezar:r,onFelvetelKesz:i,onLeadasKesz:a}){let{nyelv:o,szoveg:s}=R(),c=s.belso,l=(0,x.useId)(),[u,d]=(0,x.useState)(0),[f,p]=(0,x.useState)(()=>qp.map(()=>!1)),[m,h]=(0,x.useState)(n),[g,_]=(0,x.useState)(n||e!==`felvetel`),[v,y]=(0,x.useState)(!1),[b,S]=(0,x.useState)(!1),[C,w]=(0,x.useState)(!1),[ee,te]=(0,x.useState)(``),[ne,T]=(0,x.useState)({}),re=(0,x.useRef)({}),ie=v&&b&&C,ae=qp[u],oe=ne[ae.id]??ym,se=u===qp.length-1;(0,x.useEffect)(()=>{let e=document.getElementById(`root`),t=e?.style.overflow??``;return e&&(e.style.overflow=`hidden`),()=>{e&&(e.style.overflow=t)}},[]),(0,x.useEffect)(()=>{function e(e){e.key===`Escape`&&r()}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[r]);function ce(e,t){let n=re.current[e]??ym,r={...re.current,[e]:t(n)};re.current=r,T(r)}function le(){return qp.map(e=>{let t=re.current[e.id],n=!!t?.van;return{lepesId:e.id,kep:e.kep,cim:e.cim,korok:n?t.korok:[],vanSerules:n}})}function E(){d(e=>Math.max(0,e-1))}function D(){if(p(e=>e.map((e,t)=>t===u||e)),se){let t=le();h(!0),e===`felvetel`?i(t):a(t);return}d(e=>e+1)}let ue=m?e===`felvetel`?c.fotoUtiranyCim:c.fotoLeadasKeszCim:e===`felvetel`?c.munkaAutoFelvetele:c.fotoLeadasCim;return(0,il.createPortal)(N(tm,{onClick:e=>{e.target===e.currentTarget&&r()},children:P(nm,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":l,children:[P(rm,{children:[P(`div`,{children:[N(`p`,{children:g?m?`${qp.length} / ${qp.length}`:`${u+1} / ${qp.length}`:c.munkaFelvétel}),N(`h2`,{id:l,tabIndex:-1,children:g?m?ue:ae.cim[o]:c.kerdoivCim})]}),N(Qf,{type:`button`,onClick:r,children:m?c.fotoBezar:c.fotoMegszakitas})]}),m&&e===`felvetel`?P(va,{children:[N(_m,{children:c.fotoUtiranyBevezeto}),P(vm,{children:[N(`dt`,{children:c.munkaLeadas}),N(`dd`,{children:t.leadas.allomas}),N(`dt`,{children:c.munkaCim}),N(`dd`,{children:t.leadas.cim}),N(`dt`,{children:c.munkaLegkesobb}),N(`dd`,{children:bm(o,t.leadas.idopont)}),N(`dt`,{children:c.munkaTelefon}),N(`dd`,{children:N(`a`,{href:`tel:${t.leadas.telefon.replace(/\s/g,``)}`,children:t.leadas.telefon})}),ee.trim()?P(va,{children:[N(`dt`,{children:c.kerdoivMegjegyzes}),N(`dd`,{children:ee.trim()})]}):null]}),N(fm,{children:t.leadas.utasitas[o]}),N(im,{children:c.fotoLeadasFigyelmeztetes}),N(pm,{children:N(mm,{href:xm(t.leadas.cim),target:`_blank`,rel:`noreferrer`,children:c.munkaTerkepek})})]}):null,m&&e===`leadas`?P(va,{children:[N(_m,{children:c.fotoLeadasKeszSzoveg}),N(fm,{children:t.leadas.utasitas[o]})]}):null,g?null:P(va,{children:[N(im,{children:c.kerdoivBevezeto}),P(am,{children:[P(om,{children:[N(`input`,{type:`checkbox`,checked:v,onChange:e=>y(e.target.checked)}),N(`span`,{children:c.kerdoivKulcs})]}),P(om,{children:[N(`input`,{type:`checkbox`,checked:b,onChange:e=>S(e.target.checked)}),N(`span`,{children:c.kerdoivOkmany})]}),P(om,{children:[N(`input`,{type:`checkbox`,checked:C,onChange:e=>w(e.target.checked)}),N(`span`,{children:c.kerdoivMinden})]})]}),P(sm,{children:[c.kerdoivMegjegyzes,N(cm,{value:ee,placeholder:c.kerdoivMegjegyzesPlaceholder,onChange:e=>te(e.target.value)})]}),N(pm,{children:N(Qf,{prim:!0,type:`button`,disabled:!ie,onClick:()=>_(!0),children:c.kerdoivTovabb})})]}),m||!g?null:P(va,{children:[P(im,{children:[c.fotoFekvo,` `,c.fotoTeljes]}),P(lm,{children:[N(um,{src:ae.kep,alt:``}),P(dm,{children:[u+1,`. `,ae.cim[o]]}),oe.van?N($p,{korok:oe.korok,aktiv:!0,ariaCimke:c.fotoSerulesKarika,onUjKor:e=>ce(ae.id,t=>({...t,korok:[...t.korok,e]}))}):null]}),P(om,{children:[N(`input`,{type:`checkbox`,checked:oe.van,onChange:e=>ce(ae.id,t=>({...t,van:e.target.checked}))}),N(`span`,{children:c.fotoSerulesVan})]}),oe.van?N(im,{children:c.fotoSerulesKarika}):null,N(fm,{children:ae.hogyan[o]}),ae.tobbFoto&&t.megjegyzesek[o][0]?N(im,{children:t.megjegyzesek[o][0]}):null,N(hm,{"aria-hidden":`true`,children:qp.map((e,t)=>N(gm,{$kesz:f[t],$aktualis:t===u},e.id))}),P(pm,{children:[u>0?N(Qf,{type:`button`,onClick:E,children:c.fotoVissza}):null,oe.van&&oe.korok.length>0?N(Qf,{type:`button`,onClick:()=>ce(ae.id,e=>({...e,korok:e.korok.slice(0,-1)})),children:c.fotoSerulesTorles}):null,N(Qf,{prim:!0,type:`button`,onClick:D,children:c.fotoKeszites})]})]})]})}),document.body)}var Cm={azonosito:`JL-SX-2026-1048`,megbizo:`SIXT`,jarmu:{marka:`BMW`,tipus:`520d`,modell:`BMW 520d`,rendszam:`M-JL 2401`,kategoria:{hu:`Premium, BMW 5-ös vagy hasonló`,en:`Premium, BMW 5 Series or similar`,de:`Premium, BMW 5er oder ähnlich`},szin:{hu:`Zafírfekete`,en:`Sapphire black`,de:`Saphireschwarz`},gumiTipus:{hu:`Téli`,en:`Winter`,de:`Winter`},uzemanyag:{hu:`Dízel`,en:`Diesel`,de:`Diesel`},valto:{hu:`Automata`,en:`Automatic`,de:`Automatik`},ismertSerulesek:{hu:[`Karcolás a jobb hátsó lökhárítón (már rögzítve).`],en:[`Scratch on the rear right bumper (already recorded).`],de:[`Kratzer am hinteren rechten Stoßfänger (bereits erfasst).`]}},felvetel:{allomas:`SIXT München Flughafen (MUC)`,cim:`Terminalstr. Mitte/MWZ, Mietwagenzentrum, 85356 München`,nyitvatartas:{hu:`Minden nap 05:00–00:00`,en:`Daily 05:00–00:00`,de:`Täglich 05:00–00:00`},telefon:`+49 89 66060060`,idopont:new Date(2026,9,24,8,0),utasitas:{hu:`A jármű a reptéri Mietwagenzentrum 3. szintjén áll. A kulcsot a pulton veszik át. Indulás előtt a kilométerórát, az üzemanyagszintet és a sérüléseket a helyszíni munkatárssal együtt rögzítik.`,en:`The car is on level 3 of the airport rental centre. Collect the key at the counter. Before leaving, record the mileage, fuel level and any damage together with the station staff.`,de:`Das Fahrzeug steht auf Ebene 3 im Mietwagenzentrum. Den Schlüssel gibt es am Schalter. Vor der Abfahrt werden Kilometerstand, Tankfüllung und Schäden gemeinsam mit dem Personal vor Ort erfasst.`}},leadas:{allomas:`SIXT Frankfurt Flughafen (FRA)`,cim:`Hugo-Eckener-Ring/Mietwagenzentrum, 60549 Frankfurt am Main`,nyitvatartas:{hu:`Minden nap 05:00–00:30`,en:`Daily 05:00–00:30`,de:`Täglich 05:00–00:30`},telefon:`+49 69 98939340`,idopont:new Date(2026,9,24,18,30),utasitas:{hu:`A „Mietwagenrückgabe” táblákat kövesse a Terminal 1, Halle A melletti visszavételig. A kulcsot és a forgalmit a munkatársnak adja át, az állapotjegyzőkönyvet ott írják alá.`,en:`Follow the “Mietwagenrückgabe” signs to the return area beside Terminal 1, hall A. Hand the key and registration to the staff and sign the condition report there.`,de:`Folgen Sie den Schildern „Mietwagenrückgabe“ zur Rückgabe neben Terminal 1, Halle A. Schlüssel und Zulassung gehen an das Personal, das Übergabeprotokoll wird dort unterschrieben.`}},tavolsagKm:392,menetidoPerc:250,dijEuro:210,teendok:{hu:[`Átvételkor rögzítse a kilométerórát, az üzemanyagszintet és a látható sérüléseket.`,`Útközben csak a szükséges tankolás és az útdíj merül fel; a bizonylatot őrizze meg.`,`A járműben dohányozni nem szabad, és személyes holmi nem maradhat benne.`,`Leadáskor az üzemanyagszint legyen legalább annyi, mint átvételkor.`],en:[`At collection, record the mileage, fuel level and any visible damage.`,`On the road, only necessary fuel and tolls apply; keep the receipts.`,`No smoking in the vehicle, and no personal items may be left inside.`,`On delivery, the fuel level must be at least what it was at collection.`],de:[`Bei der Abholung Kilometerstand, Tankfüllung und sichtbare Schäden erfassen.`,`Unterwegs fallen nur nötiges Tanken und Maut an; Belege aufbewahren.`,`Im Fahrzeug darf nicht geraucht werden, persönliche Gegenstände bleiben nicht darin.`,`Bei der Abgabe muss der Tank mindestens den Stand der Abholung haben.`]},megjegyzesek:{hu:[`Ismert sérülés: karcolás a jobb hátsó lökhárítón, már rögzítve van.`,`Téli gumi van felszerelve.`,`A jármű saját navigációja használható.`,`Az állomásra utazást és a hazaútját a sofőr szervezi; az nem része a díjnak.`],en:[`Known damage: a scratch on the rear right bumper, already recorded.`,`Winter tyres are fitted.`,`The car’s own navigation may be used.`,`Travel to the station and the journey home are arranged by the driver and are not part of the fee.`],de:[`Bekannter Schaden: Kratzer an der hinteren rechten Stoßstange, bereits erfasst.`,`Winterreifen sind montiert.`,`Die fahrzeugeigene Navigation darf genutzt werden.`,`An- und Abreise organisiert der Fahrer selbst; sie sind nicht Teil der Vergütung.`]}},wm={hu:`hu-HU`,en:`en-GB`,de:`de-DE`},Tm=F.article`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  min-width: 0;
`,Em=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  min-width: 0;
`,Dm=F.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
`,Om=F.div`
  min-width: 0;

  p {
    margin: 0 0 0.3rem;
    color: ${I.szin.szurke};
    font-size: 0.78rem;
    letter-spacing: 0.08em;
  }

  h1 {
    margin: 0;
    font-family: ${I.betu.cim};
    font-size: clamp(1.15rem, 2.4vw, 1.45rem);
    letter-spacing: 0.08em;
    color: ${I.szin.aranyVilagos};
  }
`,km=F.span`
  flex-shrink: 0;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: ${L};
  background: rgba(197, 165, 114, 0.16);
  color: ${I.szin.aranyVilagos};
  font-size: 0.75rem;
  letter-spacing: 0.08em;
`,Am=F(Qf)`
  flex-shrink: 0;
  min-height: 44px;
  padding: 0.5rem 0.85rem;
  white-space: nowrap;
`,jm=F.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.4rem;
`,Mm=F.ul`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
`,Nm=F.li`
  border: ${L};
  border-radius: 6px;
  background: ${I.hatter.sotet};
  box-shadow: ${I.arnyek.kartya};
`,Pm=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.5rem 0.4rem 0.3rem;

  & > span:first-of-type {
    flex: 1 1 100%;
    text-align: center;
  }
`,Fm=F.button`
  display: flex;
  flex: 1 1 16rem;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
  padding: 0.4rem 0.35rem;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${I.szin.aranyVilagos};
    outline-offset: 2px;
  }
`,Im=F.span`
  flex-shrink: 0;
  width: 0.45rem;
  height: 0.45rem;
  margin-left: 0.25rem;
  border-right: 2px solid ${I.szin.arany};
  border-bottom: 2px solid ${I.szin.arany};
  transform: rotate(${e=>e.nyitva?`45deg`:`-45deg`});
`,Lm=F.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  text-align: center;
  width: 100%;

  strong {
    color: ${I.szin.aranyVilagos};
    font-weight: 600;
    letter-spacing: 0.03em;
    font-size: 1rem;
  }

  > span {
    color: ${I.szin.feher};
    font-size: 0.9rem;
    line-height: 1.35;
  }
`,Rm=F.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.7rem;
  color: ${I.szin.feher};
  font-size: 0.98rem;

  strong {
    color: ${I.szin.aranyVilagos};
    font-weight: 600;
    letter-spacing: 0.03em;
  }
`,zm=F.span`
  color: ${I.szin.szurke};
  font-size: 0.86rem;
  line-height: 1.35;
`,Bm=F.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  width: 100%;
  margin-left: 0;
  padding: 0.15rem 0.25rem 0.35rem;

  & h2:first-of-type {
    text-align: center;
  }
`,Vm=F(Qf)`
  min-height: 40px;
  padding: 0.4rem 0.8rem;
  white-space: nowrap;
`,Hm=F.form`
  display: grid;
  gap: 0.55rem;
  margin: 0 0.7rem 0.7rem;
  padding: 0.8rem;
  border: ${L};
  border-radius: 6px;
  background: ${I.hatter.emelt};

  label {
    color: ${I.szin.arany};
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  select {
    width: 100%;
    min-height: 44px;
    padding: 0.45rem 0.65rem;
    border: ${L};
    border-radius: 4px;
    background: ${I.hatter.sotet};
    color: ${I.szin.feher};
    font: inherit;
    font-size: 0.95rem;
  }

  select:focus-visible {
    outline: 2px solid ${I.szin.aranyVilagos};
    outline-offset: 2px;
  }
`,Um=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,Wm=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  font-size: 0.9rem;
`,Gm=F.div`
  padding: 0.2rem 0.15rem 0.35rem;
  border-top: none;
`,Km=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0.85rem;
`,qm=F.button`
  min-height: 40px;
  padding: 0.4rem 0.85rem;
  border-radius: 4px;
  border: ${L};
  background: ${e=>e.aktiv?`rgba(197, 165, 114, 0.2)`:`transparent`};
  color: ${e=>e.aktiv?I.szin.aranyVilagos:I.szin.szurke};
  font-family: ${I.betu.cim};
  letter-spacing: 0.06em;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${I.szin.aranyVilagos};
    outline-offset: 2px;
  }
`,Jm=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  font-size: 0.95rem;
  line-height: 1.45;
`,Ym=F.section`
  display: grid;
  gap: 0.65rem;
  padding: 1rem;
  border: ${L};
  border-radius: 6px;
  background: ${I.hatter.sotet};
  box-shadow: ${I.arnyek.kartya};

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: stretch;
    gap: 1rem;
  }
`,Xm=F.div`
  min-width: 0;

  span {
    display: block;
    margin-bottom: 0.25rem;
    color: ${I.szin.arany};
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    color: ${I.szin.feher};
    font-size: 1.02rem;
    font-weight: 600;
    line-height: 1.35;
    overflow-wrap: anywhere;
  }

  time {
    display: block;
    margin-top: 0.35rem;
    color: ${I.szin.szurke};
    font-size: 0.92rem;
  }
`,Zm=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding-left: 0.75rem;
  border-left: 2px solid rgba(197, 165, 114, 0.55);
  color: ${I.szin.aranyVilagos};
  font-size: 0.85rem;

  @media (min-width: ${I.szelesseg.tablet}) {
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 8.5rem;
    padding: 0.55rem 0 0;
    border-left: none;
    border-top: 2px solid rgba(197, 165, 114, 0.55);
    text-align: center;
  }
`,Qm=F.section`
  display: grid;
  gap: 0.35rem 1.25rem;
  padding: 0.9rem 1rem;
  border: ${L};
  border-radius: 6px;
  background: ${I.hatter.emelt};

  @media (min-width: ${I.szelesseg.mobil}) {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
  }

  strong {
    font-family: ${I.betu.cim};
    font-size: 1.7rem;
    color: ${I.szin.aranyVilagos};
    letter-spacing: 0.04em;
  }

  p {
    margin: 0;
    color: ${I.szin.szurke};
    font-size: 0.92rem;
    line-height: 1.45;
  }
`,$m=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  span {
    color: ${I.szin.arany};
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`,eh=F.div`
  display: grid;
  gap: 0.85rem;

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }
`,th=F.section`
  min-width: 0;
  padding: 1rem;
  border: ${L};
  border-radius: 6px;
  background: ${I.hatter.sotet};

  h2 {
    margin: 0 0 0.75rem;
    font-family: ${I.betu.cim};
    font-size: 0.95rem;
    letter-spacing: 0.1em;
    color: ${I.szin.aranyVilagos};
  }
`,nh=F.dl`
  display: grid;
  grid-template-columns: minmax(6.5rem, 38%) minmax(0, 1fr);
  gap: 0.45rem 0.75rem;
  margin: 0;

  dt {
    color: ${I.szin.szurkeSotet};
    font-size: 0.82rem;
  }

  dd {
    margin: 0;
    color: ${I.szin.feher};
    font-size: 0.95rem;
    overflow-wrap: anywhere;
  }
`,rh=F.section`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  & + & {
    margin-top: 1.1rem;
  }

  h3 {
    margin: 0;
    color: ${I.szin.arany};
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`,ih=F.div`
  display: grid;
  gap: 0.85rem;

  @media (min-width: ${I.szelesseg.mobil}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,ah=F.figure`
  margin: 0;

  figcaption {
    margin-top: 0.4rem;
    color: ${I.szin.szurke};
    font-size: 0.88rem;
    line-height: 1.4;
  }
`,oh=F.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 6px;
  border: ${L};
  background: #f4f1ea;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,sh=F.p`
  margin: 0;
  color: ${I.szin.szurke};
  line-height: 1.45;
`,ch=F.ul`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 0.9rem;
    color: ${I.szin.szurke};
    line-height: 1.45;
    font-size: 0.95rem;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background: ${I.szin.arany};
  }
`,lh=F.p`
  margin: 0 0 0.85rem;
  color: ${I.szin.feher};
  line-height: 1.45;
  overflow-wrap: anywhere;
`,uh=F.p`
  margin: 0.85rem 0 0;
  color: ${I.szin.szurke};
  line-height: 1.5;
  font-size: 0.95rem;
`,dh=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,fh=F.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.35rem 0.15rem;
  color: ${I.szin.aranyVilagos};
  text-underline-offset: 0.18em;

  &:focus-visible {
    outline: 2px solid ${I.szin.aranyVilagos};
    outline-offset: 3px;
  }
`;function ph(e,t,n){let r=new Intl.DateTimeFormat(wm[e],{dateStyle:`medium`,timeStyle:`short`}).format(t);return n?`${n} ${r}`:r}function mh(e,t){let n=Math.floor(t/60),r=t%60;return e===`hu`?r>0?`${n} óra ${r} perc`:`${n} óra`:e===`de`?r>0?`${n} Std. ${r} Min.`:`${n} Std.`:r>0?`${n} h ${r} min`:`${n} h`}function hh(e){return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`}function gh({cimke:e,pont:t,legkesobb:n}){let{nyelv:r}=R();return P(Xm,{children:[N(`span`,{children:e}),N(`strong`,{children:t.allomas}),N(`time`,{dateTime:t.idopont.toISOString(),children:ph(r,t.idopont,n)})]})}function _h({cimke:e,pont:t}){let{nyelv:n,szoveg:r}=R(),i=r.belso;return P(th,{children:[N(`h2`,{children:e}),N(lh,{children:t.cim}),P(nh,{children:[N(`dt`,{children:i.munkaNyitvatartas}),N(`dd`,{children:t.nyitvatartas[n]}),N(`dt`,{children:i.munkaTelefon}),N(`dd`,{children:N(fh,{href:`tel:${t.telefon.replace(/\s/g,``)}`,children:t.telefon})})]}),N(dh,{children:N(fh,{href:hh(t.cim),target:`_blank`,rel:`noreferrer`,children:i.munkaTerkepek})}),N(uh,{children:t.utasitas[n]})]})}function vh({cim:e,kepek:t,ures:n}){let{nyelv:r}=R();return P(rh,{children:[N(`h3`,{children:e}),t.length===0?N(sh,{children:n}):N(ih,{children:t.map(e=>{let t=qp.find(t=>t.id===e.lepesId)?.cim[r]??e.lepesId;return P(ah,{children:[P(oh,{children:[N(`img`,{src:e.kep,alt:t}),N($p,{korok:e.korok,aktiv:!1,ariaCimke:t})]}),N(`figcaption`,{children:t})]},e.lepesId)})})]})}function kliensJarmuMezok(e,t,n){let r=e.jarmu||{},i=Array.isArray(r.ismertSerulesek?.[t])?r.ismertSerulesek[t]:[];return P(nh,{children:[N("dt",{children:n.munkaMarka}),N("dd",{children:r.marka||r.modell||"—"}),N("dt",{children:n.munkaTipus}),N("dd",{children:r.tipus||r.modell||"—"}),N("dt",{children:n.munkaRendszam}),N("dd",{children:r.rendszam||"—"}),N("dt",{children:n.munkaSzin}),N("dd",{children:r.szin?.[t]||"—"}),N("dt",{children:n.munkaGumiTipus}),N("dd",{children:r.gumiTipus?.[t]||"—"}),N("dt",{children:n.munkaIsmertSerulesek}),N("dd",{children:i.length?i.join(" · "):"—"})]})}function kliensUtMezok(e,t,n){return P(nh,{children:[N("dt",{children:n.munkaHonnan}),N("dd",{children:[e.felvetel?.allomas,e.felvetel?.cim].filter(Boolean).join(" — ")||"—"}),N("dt",{children:n.munkaHova}),N("dd",{children:[e.leadas?.allomas,e.leadas?.cim].filter(Boolean).join(" — ")||"—"}),N("dt",{children:n.munkaFelvetelTol}),N("dd",{children:ph(t,e.felvetel?.idopont)}),N("dt",{children:n.munkaLeadasIg}),N("dd",{children:ph(t,e.leadas?.idopont)})]})}function kliensAutoMezok(e,t,n){return P(va,{children:[P(th,{children:[N("h2",{children:n.munkaJarmu}),kliensJarmuMezok(e,t,n)]}),P(th,{children:[N("h2",{children:n.munkaHonnan+" / "+n.munkaHova}),kliensUtMezok(e,t,n)]})]})}function yh({munka:e,fejNelkul:t=!1,onLeadasLezarva:n}){let{nyelv:r,szoveg:i}=R(),{felhasznalo:a}=wu(),o=i.belso,s=a?.role!==`ADMIN`,[c,l]=(0,x.useState)(null),[u,d]=(0,x.useState)(!1),[f,p]=(0,x.useState)(!1),[m,h]=(0,x.useState)([]),[g,_]=(0,x.useState)([]),[v,y]=(0,x.useState)(``),[b,S]=(0,x.useState)(!1),C=m.filter(e=>e.vanSerules).map(({lepesId:e,kep:t,korok:n})=>({lepesId:e,kep:t,korok:n})),w=g.filter(e=>e.vanSerules).map(({lepesId:e,kep:t,korok:n})=>({lepesId:e,kep:t,korok:n})),ee=new Intl.NumberFormat(wm[r],{style:`currency`,currency:`EUR`,currencyDisplay:`narrowSymbol`,maximumFractionDigits:0}).format(e.dijEuro),te=new Intl.NumberFormat(wm[r]).format(e.tavolsagKm),ne=mh(r,e.menetidoPerc);async function T(t){if(p(!0),_(t),!(!s||!n)){y(``),S(!0);try{try{await aktualisAllapotApi(`leadva`)}catch{}await z(Gp(e,m,t)),sessionStorage.setItem(Kp(e.azonosito),`1`),l(null),n()}catch{y(o.elvegzettMentesHiba)}finally{S(!1)}}}return P(Em,{children:[t?null:P(Dm,{children:[N(Om,{children:P(`p`,{children:[o.munkaMegbizo,`: `,e.megbizo,` · `,e.azonosito]})}),s?P(jm,{children:[u?N(Am,{type:`button`,onClick:()=>l(`felvetel`),children:o.fotoUtiranyGomb}):null,f?null:N(Am,{type:`button`,prim:!0,disabled:b,onClick:()=>l(u?`leadas`:`felvetel`),children:u?o.fotoLeadasGomb:o.munkaAutoFelvetele})]}):null]}),v?N(Jm,{role:`alert`,children:v}):null,c?N(Sm,{cel:c,munka:e,keszNezet:c===`felvetel`&&u,onBezar:()=>l(null),onFelvetelKesz:e=>{d(!0),h(e);aktualisAllapotApi(`felveve`).then(()=>aktualisAllapotApi(`utban`)).catch(()=>{})},onLeadasKesz:e=>{T(e)}}):null,s?kliensAutoMezok(e,r,o):P(va,{children:[P(Ym,{"aria-label":`${o.munkaFelvétel} – ${o.munkaLeadas}`,children:[N(gh,{cimke:o.munkaFelvétel,pont:e.felvetel}),P(Zm,{children:[P(`span`,{children:[o.munkaTavolsag,`: `,te,` km`]}),P(`span`,{children:[o.munkaMenetido,`: `,ne]})]}),N(gh,{cimke:o.munkaLeadas,pont:e.leadas,legkesobb:o.munkaLegkesobb})]}),P(Qm,{children:[P($m,{children:[P(`span`,{children:[o.munkaDij,` · `,o.munkaSajatTengely]}),N(`strong`,{children:ee})]}),N(`p`,{children:o.munkaDijMegjegyzes})]}),P(eh,{children:[P(th,{children:[N(`h2`,{children:o.munkaJarmu}),P(nh,{children:[N(`dt`,{children:o.munkaMarka}),N(`dd`,{children:e.jarmu.marka||e.jarmu.modell}),N(`dt`,{children:o.munkaTipus}),N(`dd`,{children:e.jarmu.tipus||e.jarmu.modell}),N(`dt`,{children:o.munkaRendszam}),N(`dd`,{children:e.jarmu.rendszam}),N(`dt`,{children:o.munkaKategoria}),N(`dd`,{children:e.jarmu.kategoria[r]}),N(`dt`,{children:o.munkaSzin}),N(`dd`,{children:e.jarmu.szin[r]}),N(`dt`,{children:o.munkaGumiTipus}),N(`dd`,{children:(e.jarmu.gumiTipus&&e.jarmu.gumiTipus[r])||"—"}),N(`dt`,{children:o.munkaUzemanyag}),N(`dd`,{children:e.jarmu.uzemanyag[r]}),N(`dt`,{children:o.munkaValto}),N(`dd`,{children:e.jarmu.valto[r]}),N(`dt`,{children:o.munkaIsmertSerulesek}),N(`dd`,{children:((e.jarmu.ismertSerulesek&&e.jarmu.ismertSerulesek[r])||[]).join(" · ")||"—"})]})]}),P(th,{children:[N(`h2`,{children:o.munkaTeendok}),N(ch,{children:e.teendok[r].map(e=>N(`li`,{children:e},e))})]})]}),P(eh,{children:[N(_h,{cimke:o.munkaFelvétel,pont:e.felvetel}),N(_h,{cimke:o.munkaLeadas,pont:e.leadas})]}),P(th,{children:[N(`h2`,{children:o.munkaMegjegyzesek}),N(ch,{children:e.megjegyzesek[r].map(e=>N(`li`,{children:e},e))})]}),u?P(th,{children:[N(`h2`,{children:o.serulesekCim}),N(vh,{cim:o.serulesAtvetel,kepek:C,ures:o.serulesNincs}),f?N(vh,{cim:o.serulesLeadas,kepek:w,ures:o.serulesNincs}):null]}):null]})]})}function bh(e){let t=[e.firstName,e.lastName].filter(Boolean).join(` `),n=e.email.toLowerCase()===`teszt@teszt.local`?`teszt`:e.email;return t?t.toLowerCase()===n?t:`${t} (${n})`:n}function xh({munka:e}){let{nyelv:t,szoveg:n}=R(),r=n.belso,[i,a]=(0,x.useState)(!1),[A,j]=(0,x.useState)(!1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(null),[u,d]=(0,x.useState)(""),[f,p]=(0,x.useState)(""),[m,h]=(0,x.useState)(""),[v,V]=(0,x.useState)(""),[w,T]=(0,x.useState)(!0),g="kikuldes-"+e.azonosito,_="munka-"+e.azonosito,q="alap-"+e.azonosito,J=e.jarmu||{},K=J.tipus||J.modell||"—",Q=J.szin?.[t]||"—",X=e.felvetel?.allomas||"—",Y=e.leadas?.allomas||"—",Z={kikuldve:r.munkaAllapotKikuldve,felveve:r.munkaAllapotFelveve,utban:r.munkaAllapotUtban,leadva:r.munkaAllapotLeadva,kiszallitva:r.munkaAllapotKiszallitva};async function ee(){try{let t=await aktualisLekerdez(),n=(t.munkak||[]).find(t=>t.munkaAzonosito===e.azonosito);if(n){h(n.cimzettNev||n.cimzettEmail||"kliens"),V(n.allapot||"kikuldve")}else{h(""),V("")}}catch{}}(0,x.useEffect)(()=>{(async()=>{T(!0);try{await ee()}catch{}finally{T(!1)}})()},[e.azonosito]);(0,x.useEffect)(()=>{if(!m)return;let e=setInterval(ee,3e3);return()=>clearInterval(e)},[m,e.azonosito]);async function y(){if(m||w)return;if(s(!0),!c){d("");try{let e=await go();l(e),e.length===1&&p(e[0].id)}catch{d(r.munkaKliensHiba),l([])}}}async function b(e){e.preventDefault();if(m)return;let t=c?.find(e=>e.id===f);if(!t)return;d("");try{await aktualisKikuldesApi(t.id),h(bh(t)),V("kikuldve"),s(!1)}catch(e){d(e?.message||r.munkaKliensHiba)}}return P(Nm,{children:[P(Pm,{children:[P(Lm,{children:[N("strong",{children:K+" · "+Q}),N("span",{children:X+" → "+Y}),m?N(km,{children:(Z[v]||Z.kikuldve)+(m&&m!=="kliens"?" · "+m:"")}):null]}),P(Bm,{children:[P("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"0.45rem"},children:[N(Vm,{type:"button","aria-expanded":A,"aria-controls":q,onClick:()=>j(e=>!e),children:A?r.munkaAlapadatokBezar:r.munkaAlapadatok}),N(Vm,{type:"button","aria-expanded":i,"aria-controls":_,onClick:()=>{a(e=>{let n=!e;if(n)j(!0);return n})},children:i?r.munkaBovebbBezar:r.munkaBovebbInfo}),m?N(Vm,{type:"button",prim:!0,disabled:!0,children:r.munkaKikuldve}):w?N(Vm,{type:"button",prim:!0,disabled:!0,children:r.munkaKikuldes}):N(Vm,{type:"button",prim:!0,"aria-expanded":o,"aria-controls":g,onClick:()=>{if(o){s(!1);return}y()},children:r.munkaKikuldes})]}),A?N(Gm,{id:q,children:kliensAutoMezok(e,t,r)}):null]})]}),o&&!m?P(Hm,{id:g,onSubmit:b,children:[N("label",{htmlFor:g+"-kliens",children:r.munkaKinek}),u?N(Wm,{children:u}):null,c&&c.length===0&&!u?N(Wm,{children:r.munkaKliensUres}):null,P("select",{id:g+"-kliens",value:f,onChange:e=>p(e.target.value),disabled:!c||c.length===0,children:[N("option",{value:"",children:r.munkaKliensValaszt}),(c??[]).map(e=>N("option",{value:e.id,children:bh(e)},e.id))]}),P(Um,{children:[N(Vm,{type:"submit",prim:!0,disabled:!f,children:r.munkaKikuldes}),N(Vm,{type:"button",onClick:()=>s(!1),children:r.munkaKikuldesMegse})]})]}):null,i?N(Gm,{id:_,children:N(yh,{munka:e,fejNelkul:!0})}):null]})}function Sh(){return N(Mm,{children:N(xh,{munka:Cm})})}function Ch(){let{felhasznalo:e}=wu(),{szoveg:t}=R(),n=t.belso,r=e?.role===`ADMIN`,[i,a]=(0,x.useState)(`aktualis`),[o,s]=(0,x.useState)([]),[c,l]=(0,x.useState)(!1),[u,d]=(0,x.useState)(null),[f,p]=(0,x.useState)(!0),[m,h]=(0,x.useState)(null);async function g(){try{s(await B())}catch{s([])}}async function _(){try{let e=await aktualisLekerdez(),t=e.munka?munkaDatumok(e.munka.munka):null,n=e.munka||null,r=m;d(t),h(n?n.id:null);if(t&&n&&!n.hangLejatszva&&n.id!==r)await ujMunkaHangLejatszas()}catch{d(null)}finally{p(!1)}}return(0,x.useEffect)(()=>{g(),_()},[]),(0,x.useEffect)(()=>{if(r)return;let e=setInterval(_,3e3);return()=>clearInterval(e)},[r,m]),P(Tm,{children:[N(Dm,{children:N(Om,{children:N(`h1`,{children:n.aktualisMunkaCim})})}),P(Km,{role:`tablist`,"aria-label":n.aktualisMunkaCim,children:[N(qm,{type:`button`,role:`tab`,"aria-selected":i===`aktualis`,aktiv:i===`aktualis`,onClick:()=>a(`aktualis`),children:n.munkaFulAktualis}),N(qm,{type:`button`,role:`tab`,"aria-selected":i===`elvegzett`,aktiv:i===`elvegzett`,onClick:()=>{a(`elvegzett`),g()},children:n.munkaFulElvegzett})]}),i===`aktualis`?r?N(Sh,{}):f?N(Jm,{children:`Betöltés…`}):u?N(yh,{munka:u,onLeadasLezarva:()=>{d(null),h(null),l(!0),g(),a(`elvegzett`)}}):N(Jm,{children:n.aktualisMunkaUres}):N(Up,{munkak:o,adminNezet:r}),c?N(Wp,{onBezar:()=>l(!1)}):null]})}var wh={hu:`hu-HU`,en:`en-GB`,de:`de-DE`},Th=2500,Eh=12e3,Dh=F.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  height: calc(100dvh - 8.5rem);
  min-height: 26rem;
  border: ${L};
  border-radius: 6px;
  background: ${I.hatter.sotet};
  box-shadow: ${I.arnyek.kartya};
  overflow: hidden;

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-template-columns: minmax(0, 1fr) 240px;
    grid-template-rows: auto minmax(0, 1fr) auto;
    height: calc(100dvh - 7.75rem);
  }
`,Oh=F.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  grid-row: 1;
  padding: 0.85rem 1rem;
  border-bottom: ${L};

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-column: 1 / -1;
  }

  h1 {
    margin: 0;
    font-family: ${I.betu.cim};
    font-size: 1.05rem;
    letter-spacing: 0.12em;
    color: ${I.szin.aranyVilagos};
  }
`,kh=F.aside`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  grid-row: 2;
  min-width: 0;
  padding: 0.75rem 1rem;
  border-bottom: ${L};
  background: ${I.hatter.fekete};

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-column: 2;
    grid-row: 2;
    border-bottom: none;
    border-left: ${L};
    padding: 0.9rem 0.85rem;
  }
`,Ah=F.h2`
  margin: 0;
  font-family: ${I.betu.cim};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${I.szin.arany};
`,jh=F.ul`
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: auto;

  @media (min-width: ${I.szelesseg.tablet}) {
    flex-direction: column;
    overflow: auto;
  }
`,Mh=F.li`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex: 0 0 auto;
  min-height: 44px;
  padding: 0.35rem 0.55rem;
  border-radius: 4px;
  background: rgba(197, 165, 114, 0.08);
`,Nh=F.span`
  width: 0.55rem;
  height: 0.55rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: #7dcea0;
  box-shadow: 0 0 0 3px rgba(125, 206, 160, 0.18);
`,Ph=F.span`
  display: flex;
  flex-direction: column;
  min-width: 0;
  line-height: 1.25;

  strong {
    font-size: 0.86rem;
    font-weight: 600;
    color: ${I.szin.feher};
  }

  small {
    color: ${I.szin.szurkeSotet};
    font-size: 0.72rem;
    letter-spacing: 0.04em;
  }
`,Fh=F.div`
  grid-row: 3;
  min-height: 0;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-column: 1;
    grid-row: 2;
  }
`,Ih=F.p`
  margin: auto;
  max-width: 28rem;
  text-align: center;
  color: ${I.szin.szurke};
  line-height: 1.6;
`,Lh=F.article`
  align-self: ${e=>e.sajat?`flex-end`:`flex-start`};
  max-width: min(100%, 34rem);
  padding: 0.65rem 0.8rem;
  border-radius: ${e=>e.sajat?`6px 6px 2px 6px`:`6px 6px 6px 2px`};
  border: ${L};
  background: ${e=>e.sajat?`rgba(197, 165, 114, 0.14)`:`rgba(255, 255, 255, 0.04)`};

  header {
    margin: 0 0 0.25rem;
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    color: ${I.szin.arany};
  }

  p {
    margin: 0;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    line-height: 1.45;
  }

  time {
    display: block;
    margin-top: 0.35rem;
    text-align: right;
    font-size: 0.72rem;
    letter-spacing: 0.04em;
    color: ${I.szin.szurkeSotet};
  }
`,Rh=F.form`
  display: flex;
  align-items: flex-end;
  gap: 0.6rem;
  grid-row: 4;
  padding: 0.75rem;
  border-top: ${L};
  background: ${I.hatter.fekete};

  @media (min-width: ${I.szelesseg.tablet}) {
    grid-column: 1 / -1;
    grid-row: 3;
  }
`,zh=F.textarea`
  flex: 1;
  min-width: 0;
  min-height: 48px;
  max-height: 8rem;
  resize: none;
  padding: 0.7rem 0.85rem;
  border-radius: 4px;
  border: ${L};
  background: ${I.hatter.emelt};
  color: ${I.szin.feher};
  font: inherit;
  line-height: 1.4;

  &:focus-visible {
    outline: 2px solid ${I.szin.aranyVilagos};
    outline-offset: 2px;
  }
`,Bh=F(Qf)`
  flex-shrink: 0;
`,Vh=F.p`
  margin: 0;
  padding: 0 1rem 0.35rem;
  color: #f5c6c6;
  font-size: 0.85rem;
`;function Hh(e){return`${e.createdAt}:${e.id}`}function Uh(e,t){if(t.length===0)return e;let n=new Map(e.map(e=>[e.id,e]));for(let e of t)n.set(e.id,e);return[...n.values()].sort((e,t)=>e.createdAt===t.createdAt?e.id.localeCompare(t.id):e.createdAt.localeCompare(t.createdAt))}function Wh(){let{szoveg:e,nyelv:t}=R(),n=e.belso,{felhasznalo:r}=wu(),[i,a]=(0,x.useState)(``),[o,s]=(0,x.useState)([]),[c,l]=(0,x.useState)([]),[u,d]=(0,x.useState)(``),[f,p]=(0,x.useState)(!1),[m,h]=(0,x.useState)({tipus:`global`,id:null}),[g,_]=(0,x.useState)([]),[v,y]=(0,x.useState)([]),[b,S]=(0,x.useState)([]),[C,w]=(0,x.useState)(!1),[T,E]=(0,x.useState)(!1),[D,O]=(0,x.useState)(``),[k,A]=(0,x.useState)([]),[j,M]=(0,x.useState)(``),[q,G]=(0,x.useState)(null),[I,L]=(0,x.useState)(``),ee=(0,x.useRef)(null),te=(0,x.useRef)({}),ne=(0,x.useRef)(null),re=(0,x.useId)(),ie=(0,x.useId)(),ae=wh[t]??`hu-HU`,oe=r?.id,[Z,Y]=(0,x.useState)(()=>typeof window<`u`?window.matchMedia(`(max-width: 900px)`).matches:!1);(0,x.useEffect)(()=>{let e=window.matchMedia(`(max-width: 900px)`),t=()=>Y(e.matches);return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);(0,x.useEffect)(()=>{let e=ee.current;e&&(e.scrollTop=e.scrollHeight)},[o]),(0,x.useEffect)(()=>{let e=!1;async function t(){try{let[t,n,r]=await Promise.all([chatSzobakApi(),chatPrivatListaApi(),chatFelhasznalokApi()]);e||(_(t),y(n),S(r))}catch{}}t();let n=window.setInterval(()=>void t(),12e3);return()=>{e=!0,window.clearInterval(n)}},[]),(0,x.useEffect)(()=>{let e=!1;te.current={};s([]);async function t(){try{d(``);if(m.tipus===`privat`){let t=await chatPrivatUzenetekApi(m.id);if(e)return;s(t.uzenetek);let n=t.uzenetek.at(-1);te.current=n?{after:n.createdAt,afterId:n.id}:{};y(e=>e.map(e=>e.id===m.id&&t.beszelgetes?{...t.beszelgetes,olvasatlan:0}:{...e,olvasatlan:e.id===m.id?0:e.olvasatlan}))}else{let t=await uo(m.tipus===`szoba`?{szobaId:m.id}:{});if(e)return;s(t.uzenetek),l(t.online);let n=t.uzenetek.at(-1);te.current=n?{after:n.createdAt,afterId:n.id}:{}}}catch(t){e||d(t instanceof Error?t.message:n.chatUres)}}async function r(){try{if(m.tipus===`privat`){let t=await chatPrivatUzenetekApi(m.id,te.current);if(e)return;if(t.uzenetek.length>0){s(e=>Uh(e,t.uzenetek));let e=t.uzenetek.at(-1);e&&(te.current={after:e.createdAt,afterId:e.id})}d(``)}else{let t=await uo({...te.current,...(m.tipus===`szoba`?{szobaId:m.id}:{})});if(e)return;if(l(t.online),t.uzenetek.length>0){s(e=>Uh(e,t.uzenetek));let e=t.uzenetek.at(-1);e&&(te.current={after:e.createdAt,afterId:e.id})}d(``)}}catch{}}async function i(){try{let t=await po();e||l(t)}catch{}}async function a(){try{let t=await chatPrivatErtesitesApi();if(e)return;y(e=>{let n=new Map(e.map(e=>[e.id,e]));for(let e of t.uj)n.set(e.id,{...e});return[...n.values()]});let r=t.uj.find(e=>!(m.tipus===`privat`&&m.id===e.id)&&e.olvasatlan>0);if(r&&ne.current!==r.utolsoUzenet?.id){ne.current=r.utolsoUzenet?.id||null,L(`${n.chatErtesitesUj}: ${r.partner?.nev||``}`),setTimeout(()=>L(``),6e3)}}catch{}}t();let o=window.setInterval(()=>void r(),Th),c=window.setInterval(()=>void i(),Eh),u=window.setInterval(()=>void a(),5e3);return()=>{e=!0,window.clearInterval(o),window.clearInterval(c),window.clearInterval(u)}},[m.tipus,m.id,n.chatUres,n.chatErtesitesUj]);async function se(e){e.preventDefault();let t=i.trim();if(!(!t||f)){p(!0),d(``);try{if(m.tipus===`privat`){let{uzenet:e}=await chatPrivatKuldesApi(m.id,t);s(t=>Uh(t,[e])),te.current={after:e.createdAt,afterId:e.id},a(``)}else{let{uzenet:e,online:n}=await fo(t,m.tipus===`szoba`?m.id:null);s(t=>Uh(t,[e])),l(n),te.current={after:e.createdAt,afterId:e.id},a(``)}}catch(e){d(e instanceof Error?e.message:n.chatUres)}finally{p(!1)}}}async function ce(){if(!D.trim())return;try{let e=await chatSzobaLetrehozApi(D.trim(),k);_(t=>[...t.filter(t=>t.id!==e.id),e].sort((e,t)=>e.nev.localeCompare(t.nev))),w(!1),O(``),A([]),h({tipus:`szoba`,id:e.id})}catch(e){d(e instanceof Error?e.message:n.chatUres)}}async function le(){if(!j)return;try{let e=await chatPrivatNyitApi(j);y(t=>[e,...t.filter(t=>t.id!==e.id)]),M(``),E(!1),h({tipus:`privat`,id:e.id})}catch(e){d(e instanceof Error?e.message:n.chatUres)}}async function ue(){if(!(m.tipus!==`privat`||!m.id||!window.confirm(n.chatPrivatTorolKerdes)))try{await chatPrivatTorlesApi(m.id),y(e=>e.filter(e=>e.id!==m.id)),h({tipus:`global`,id:null})}catch(e){d(e instanceof Error?e.message:n.chatUres)}}async function de(){if(!(m.tipus!==`szoba`||!q))try{let e=await chatSzobaTagokApi(m.id,k);_(t=>t.map(t=>t.id===e.id?e:t)),G(null)}catch(e){d(e instanceof Error?e.message:n.chatUres)}}let pe=(()=>{if(m.tipus===`szoba`){let e=g.find(e=>e.id===m.id);return(e?.tagok||[]).map(e=>{let t=c.find(t=>t.userId===e.id);return{userId:e.id,nev:e.nev,email:e.email,role:e.role,online:!!t}}).sort((e,t)=>t.online-e.online||e.nev.localeCompare(t.nev))}if(m.tipus===`privat`){let e=v.find(e=>e.id===m.id)?.partner;if(!e)return c.map(e=>({...e,online:!0}));let t=c.some(t=>t.userId===e.id);let n=[{userId:e.id,nev:e.nev,email:e.email,role:e.role,online:t}];if(oe){let e=c.find(e=>e.userId===oe);e&&n.push({...e,online:!0})}return n}return c.map(e=>({...e,online:!0}))})(),fe=m.tipus===`global`?n.chatAltalanos:m.tipus===`szoba`?(g.find(e=>e.id===m.id)?.nev||n.chatSzobak):(v.find(e=>e.id===m.id)?.partner?.nev||n.chatPrivat),ge=e=>({display:Z?`inline-flex`:`block`,flex:`0 0 auto`,alignItems:`center`,width:Z?`auto`:`100%`,textAlign:`left`,whiteSpace:Z?`nowrap`:`normal`,background:e?`rgba(197,165,114,0.18)`:`transparent`,border:Z?`1px solid rgba(197,165,114,0.28)`:`none`,color:`inherit`,padding:Z?`0.4rem 0.7rem`:`0.4rem 0.5rem`,cursor:`pointer`,borderRadius:4,gap:`0.35rem`}),_e=Z?{display:`flex`,flexDirection:`column`,flex:`1 1 auto`,minHeight:0,height:`100%`,maxHeight:`100%`,border:`1px solid rgba(197,165,114,0.28)`,borderRadius:6,overflow:`hidden`,background:`#141414`}:{display:`grid`,gridTemplateColumns:`minmax(8rem,10.5rem) minmax(0,1fr) minmax(12rem,15rem)`,gridTemplateRows:`auto auto minmax(0,1fr) auto`,height:`calc(100dvh - 8.5rem)`,minHeight:`26rem`,border:`1px solid rgba(197,165,114,0.28)`,borderRadius:6,overflow:`hidden`,background:`#141414`};return P(`section`,{className:`chat-keret`,"aria-labelledby":re,style:{..._e,width:`100%`,boxSizing:`border-box`},children:[N(`header`,{style:{flexShrink:0,gridColumn:Z?void 0:`1 / -1`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`,flexWrap:`wrap`,padding:Z?`0.65rem 0.75rem`:`0.85rem 1rem`,borderBottom:`1px solid rgba(197,165,114,0.28)`},children:P(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`,flexWrap:`wrap`,width:`100%`},children:[N(`h1`,{id:re,style:{margin:0,fontSize:Z?`0.95rem`:`1.05rem`,letterSpacing:`0.08em`,color:`#e0c58a`},children:fe}),P(`div`,{style:{display:`flex`,gap:`0.35rem`,flexWrap:`wrap`},children:[N(Bh,{type:`button`,onClick:()=>w(!0),children:n.chatSzobaUj}),N(Bh,{type:`button`,onClick:()=>E(!0),children:n.chatPrivatUj}),m.tipus===`privat`?N(Bh,{type:`button`,onClick:()=>void ue(),children:n.chatPrivatTorol}):null,m.tipus===`szoba`?N(Bh,{type:`button`,onClick:()=>{let e=g.find(e=>e.id===m.id);e&&(G(e),A(e.tagok.map(e=>e.id)))},children:n.chatSzobaTagok}):null]})]})}),I?N(Vh,{role:`status`,style:{flexShrink:0,gridColumn:Z?void 0:`1 / -1`},children:I}):null,u?N(Vh,{role:`alert`,style:{flexShrink:0,gridColumn:Z?void 0:`1 / -1`},children:u}):null,P(`nav`,{"aria-label":n.chatSzobak,style:Z?{order:1,flexShrink:0,display:`flex`,flexDirection:`row`,alignItems:`center`,gap:`0.35rem`,overflowX:`auto`,padding:`0.45rem 0.55rem`,borderBottom:`1px solid rgba(197,165,114,0.25)`,WebkitOverflowScrolling:`touch`}:{gridColumn:1,gridRow:3,borderRight:`1px solid rgba(197,165,114,0.25)`,overflow:`auto`,padding:`0.55rem`},children:[N(`button`,{type:`button`,onClick:()=>h({tipus:`global`,id:null}),style:ge(m.tipus===`global`),children:n.chatAltalanos}),Z?null:N(`p`,{style:{margin:`0.7rem 0 0.25rem`,fontSize:`0.72rem`,letterSpacing:`0.08em`,textTransform:`uppercase`,opacity:.7},children:n.chatSzobak}),...g.map(e=>N(`button`,{type:`button`,onClick:()=>h({tipus:`szoba`,id:e.id}),style:ge(m.tipus===`szoba`&&m.id===e.id),children:e.nev},e.id)),Z?null:N(`p`,{style:{margin:`0.7rem 0 0.25rem`,fontSize:`0.72rem`,letterSpacing:`0.08em`,textTransform:`uppercase`,opacity:.7},children:n.chatPrivat}),...v.map(e=>P(`button`,{type:`button`,onClick:()=>h({tipus:`privat`,id:e.id}),style:ge(m.tipus===`privat`&&m.id===e.id),children:[N(`span`,{children:e.partner?.nev||`?`}),e.olvasatlan>0?N(`span`,{style:{color:`#e0c58a`,fontSize:`0.75rem`},children:e.olvasatlan}):null]},e.id))]}),N(`div`,{ref:ee,role:`log`,"aria-live":`polite`,"aria-relevant":`additions`,style:Z?{order:3,flex:`1 1 auto`,minHeight:0,overflowY:`auto`,padding:`0.75rem`,display:`flex`,flexDirection:`column`,gap:`0.65rem`,WebkitOverflowScrolling:`touch`}:{gridColumn:2,gridRow:3,minHeight:0,overflowY:`auto`,padding:`1rem`,display:`flex`,flexDirection:`column`,gap:`0.65rem`},children:o.length===0?N(Ih,{children:n.chatUres}):o.map(e=>{let t=!!(oe&&e.userId===oe);return P(Lh,{sajat:t,children:[t?null:N(`header`,{children:e.nev}),N(`p`,{children:e.szoveg}),N(`time`,{dateTime:e.createdAt,children:new Date(e.createdAt).toLocaleTimeString(ae,{hour:`2-digit`,minute:`2-digit`})})]},Hh(e))})}),P(`aside`,{"aria-label":n.chatOnlineAria,style:Z?{order:2,flexShrink:0,display:`flex`,flexDirection:`row`,alignItems:`center`,gap:`0.45rem`,overflowX:`auto`,padding:`0.4rem 0.65rem`,borderBottom:`1px solid rgba(197,165,114,0.28)`,background:`#0a0a0a`,WebkitOverflowScrolling:`touch`}:{gridColumn:3,gridRow:3,display:`flex`,flexDirection:`column`,gap:`0.55rem`,minWidth:`12rem`,overflow:`auto`,padding:`0.9rem 0.85rem`,borderLeft:`1px solid rgba(197,165,114,0.28)`,background:`#0a0a0a`},children:[P(`h2`,{id:ie,style:{margin:0,flexShrink:0,fontSize:`0.72rem`,letterSpacing:`0.14em`,textTransform:`uppercase`,color:`#c5a572`,whiteSpace:`nowrap`},children:[n.chatOnlineCim,` · `,pe.filter(e=>e.online).length]}),N(`ul`,{"aria-labelledby":ie,style:Z?{display:`flex`,flexDirection:`row`,gap:`0.45rem`,margin:0,padding:0,listStyle:`none`}:{display:`flex`,flexDirection:`column`,gap:`0.5rem`,margin:0,padding:0,listStyle:`none`,overflow:`auto`},children:pe.map(e=>{let t=!!(oe&&e.userId===oe);return P(`li`,{style:{display:`flex`,alignItems:`center`,gap:`0.45rem`,flex:`0 0 auto`,minHeight:Z?36:44,padding:Z?`0.3rem 0.5rem`:`0.35rem 0.55rem`,borderRadius:4,background:`rgba(197,165,114,0.08)`,opacity:e.online?1:0.45},children:[N(`span`,{"aria-hidden":`true`,style:{width:`0.55rem`,height:`0.55rem`,flexShrink:0,borderRadius:`50%`,background:e.online?`#7dcea0`:`#666`,boxShadow:e.online?`0 0 0 3px rgba(125,206,160,0.18)`:`none`}}),P(`span`,{style:{display:`flex`,flexDirection:`column`,minWidth:0},children:[N(`strong`,{style:{fontSize:Z?`0.82rem`:`inherit`,whiteSpace:`nowrap`},children:e.nev}),Z?null:N(`small`,{style:{opacity:0.75},children:t?n.chatOn:e.online?e.email:`Offline`})]})]},e.userId)})})]}),P(`form`,{onSubmit:e=>void se(e),style:Z?{order:4,flexShrink:0,display:`flex`,alignItems:`flex-end`,gap:`0.5rem`,padding:`0.65rem`,borderTop:`1px solid rgba(197,165,114,0.28)`,background:`#0a0a0a`}:{gridColumn:`1 / -1`,gridRow:4,display:`flex`,alignItems:`flex-end`,gap:`0.6rem`,padding:`0.75rem`,borderTop:`1px solid rgba(197,165,114,0.28)`,background:`#0a0a0a`},children:[N(zh,{value:i,"aria-label":n.chatUzenetAria,placeholder:n.chatUzenetPlaceholder,rows:Z?1:2,disabled:f,onChange:e=>a(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),e.currentTarget.form?.requestSubmit())}}),N(Bh,{prim:!0,type:`submit`,disabled:!i.trim()||f,children:n.chatKuldes})]}),C?P(`div`,{style:{position:`fixed`,inset:0,zIndex:80,background:`rgba(0,0,0,0.55)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`1rem`},onClick:e=>{e.target===e.currentTarget&&w(!1)},children:P(`div`,{style:{width:`min(28rem,100%)`,maxHeight:`90dvh`,overflow:`auto`,background:`#1c1c1c`,border:`1px solid rgba(197,165,114,0.35)`,borderRadius:8,padding:`1rem`},children:[N(`h2`,{style:{marginTop:0},children:n.chatSzobaUj}),N(`label`,{children:n.chatSzobaNev}),N(`input`,{value:D,onChange:e=>O(e.target.value),style:{width:`100%`,margin:`0.35rem 0 0.8rem`,padding:`0.5rem`}}),N(`p`,{children:n.chatSzobaTagok}),P(`div`,{style:{maxHeight:`12rem`,overflow:`auto`,marginBottom:`0.8rem`},children:b.map(e=>P(`label`,{style:{display:`flex`,gap:`0.4rem`,alignItems:`center`,margin:`0.25rem 0`},children:[N(`input`,{type:`checkbox`,checked:k.includes(e.id),onChange:()=>A(t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id])}),e.nev||e.email]},e.id))}),P(`div`,{style:{display:`flex`,gap:`0.45rem`,flexWrap:`wrap`},children:[N(Bh,{type:`button`,prim:!0,onClick:()=>void ce(),children:n.chatSzobaMent}),N(Bh,{type:`button`,onClick:()=>w(!1),children:n.chatMegse})]})]})}):null,T?P(`div`,{style:{position:`fixed`,inset:0,zIndex:80,background:`rgba(0,0,0,0.55)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`1rem`},onClick:e=>{e.target===e.currentTarget&&E(!1)},children:P(`div`,{style:{width:`min(28rem,100%)`,background:`#1c1c1c`,border:`1px solid rgba(197,165,114,0.35)`,borderRadius:8,padding:`1rem`},children:[N(`h2`,{style:{marginTop:0},children:n.chatPrivatUj}),N(`label`,{children:n.chatPrivatValaszt}),N(`select`,{value:j,onChange:e=>M(e.target.value),style:{width:`100%`,margin:`0.35rem 0 0.8rem`,padding:`0.5rem`},children:[N(`option`,{value:``,children:n.chatPrivatValaszt}),...b.map(e=>N(`option`,{value:e.id,children:e.nev||e.email},e.id))]}),P(`div`,{style:{display:`flex`,gap:`0.45rem`,flexWrap:`wrap`},children:[N(Bh,{type:`button`,prim:!0,disabled:!j,onClick:()=>void le(),children:n.chatPrivatUj}),N(Bh,{type:`button`,onClick:()=>E(!1),children:n.chatMegse})]})]})}):null,q?P(`div`,{style:{position:`fixed`,inset:0,zIndex:80,background:`rgba(0,0,0,0.55)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`1rem`},onClick:e=>{e.target===e.currentTarget&&G(null)},children:P(`div`,{style:{width:`min(28rem,100%)`,maxHeight:`90dvh`,overflow:`auto`,background:`#1c1c1c`,border:`1px solid rgba(197,165,114,0.35)`,borderRadius:8,padding:`1rem`},children:[N(`h2`,{style:{marginTop:0},children:n.chatSzobaTagok}),P(`div`,{style:{maxHeight:`14rem`,overflow:`auto`,marginBottom:`0.8rem`},children:b.map(e=>P(`label`,{style:{display:`flex`,gap:`0.4rem`,alignItems:`center`,margin:`0.25rem 0`},children:[N(`input`,{type:`checkbox`,checked:k.includes(e.id),onChange:()=>A(t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id])}),e.nev||e.email]},e.id))}),P(`div`,{style:{display:`flex`,gap:`0.45rem`,flexWrap:`wrap`},children:[N(Bh,{type:`button`,prim:!0,onClick:()=>void de(),children:n.chatSzobaTagMent}),N(Bh,{type:`button`,onClick:()=>G(null),children:n.chatMegse})]})]})}):null]})}
function SoforokLista(){let{szoveg:e}=R(),t=e.belso,[n,r]=(0,x.useState)([]),[i,a]=(0,x.useState)(``),[o,s]=(0,x.useState)(!0);(0,x.useEffect)(()=>{s(!0),soforokLista().then(r).catch(e=>a(e instanceof Error?e.message:`Hiba`)).finally(()=>s(!1))},[]);return P(`div`,{children:[N(`h1`,{style:{margin:`0 0 .75rem`,fontFamily:I.betu.cim,fontSize:`1.1rem`,letterSpacing:`.1em`,color:I.szin.aranyVilagos},children:t.soforokCim}),o?N(`p`,{style:{color:I.szin.szurke},children:`Betöltés…`}):null,i?N(zu,{hiba:!0,children:i}):null,!o&&!i&&n.length===0?N(zu,{children:t.soforokUres}):null,n.length>0?P(va,{style:{display:`grid`,gap:`.75rem`},children:n.map(e=>N(Rn,{key:e.id,to:`/dashboard/soforok/`+e.id,style:{display:`block`,textDecoration:`none`,color:`inherit`},children:P($f,{children:[N(`div`,{style:{fontFamily:I.betu.cim,color:I.szin.aranyVilagos,letterSpacing:`.06em`},children:e.megjelenitoNev}),N(`div`,{style:{fontSize:`.85rem`,color:I.szin.szurke,marginTop:`.35rem`},children:e.email}),N(`div`,{style:{fontSize:`.85rem`,marginTop:`.45rem`,color:I.szin.feher},children:t.soforElvegzettDb+`: `+e.elvegzettDb+` · `+t.soforOsszKm+`: `+e.osszKm})]})}))}):null]})}function SoforReszlet(){let{szoveg:e}=R(),t=e.belso,{id:n=``}=Dt(),[r,i]=(0,x.useState)(null),[a,o]=(0,x.useState)(``),[s,c]=(0,x.useState)(!0),[l,u]=(0,x.useState)(``);(0,x.useEffect)(()=>{c(!0),soforReszlet(n).then(i).catch(e=>o(e instanceof Error?e.message:`Hiba`)).finally(()=>c(!1))},[n]);async function d(e){u(``);try{await ho(e)}catch(e){u(e instanceof Error?e.message:`PDF hiba`)}}if(s)return N(`p`,{style:{color:I.szin.szurke},children:`Betöltés…`});if(a)return P(va,{children:[N(Mf,{to:`/dashboard/soforok`,children:t.soforVissza}),N(zu,{hiba:!0,children:a})]});let f=r?.sofor,p=r?.statisztika,m=r?.munkak||[];return P(va,{children:[N(Mf,{to:`/dashboard/soforok`,children:t.soforVissza}),N(`h1`,{style:{margin:`0 0 .75rem`,fontFamily:I.betu.cim,fontSize:`1.1rem`,letterSpacing:`.1em`,color:I.szin.aranyVilagos},children:f?.megjelenitoNev||t.soforReszletek}),P($f,{children:[N(`h2`,{style:{margin:`0 0 .75rem`,fontSize:`.95rem`,color:I.szin.arany},children:t.soforAlapadatok}),P(`dl`,{style:{display:`grid`,gridTemplateColumns:`minmax(8rem,auto) 1fr`,gap:`.35rem .85rem`,margin:0,fontSize:`.9rem`},children:[N(`dt`,{style:{color:I.szin.szurke},children:`E-mail`}),N(`dd`,{style:{margin:0},children:f?.email||`—`}),N(`dt`,{style:{color:I.szin.szurke},children:`Telefon`}),N(`dd`,{style:{margin:0},children:f?.profile?.phone||`—`}),N(`dt`,{style:{color:I.szin.szurke},children:`Ország`}),N(`dd`,{style:{margin:0},children:f?.profile?.country||`—`}),N(`dt`,{style:{color:I.szin.szurke},children:`Irányítószám`}),N(`dd`,{style:{margin:0},children:f?.profile?.postalCode||`—`}),N(`dt`,{style:{color:I.szin.szurke},children:`Születés`}),N(`dd`,{style:{margin:0},children:f?.profile?.birthDate||`—`}),N(`dt`,{style:{color:I.szin.szurke},children:t.soforElvegzettDb}),N(`dd`,{style:{margin:0},children:String(p?.elvegzettDb??0)}),N(`dt`,{style:{color:I.szin.szurke},children:t.soforOsszKm}),N(`dd`,{style:{margin:0},children:String(p?.osszKm??0)})]})]}),N(`h2`,{style:{margin:`1.25rem 0 .75rem`,fontSize:`.95rem`,color:I.szin.arany},children:t.soforSzallitasok}),l?N(zu,{hiba:!0,children:l}):null,m.length===0?N(zu,{children:t.elvegzettUres}):P(va,{style:{display:`grid`,gap:`.65rem`},children:m.map(e=>P($f,{key:e.id,children:[N(`div`,{style:{fontFamily:I.betu.cim,color:I.szin.aranyVilagos},children:e.munkaAzonosito+` · `+e.jarmuModell+` · `+e.rendszam}),N(`div`,{style:{fontSize:`.85rem`,marginTop:`.35rem`,color:I.szin.szurke},children:e.completedAt?new Date(e.completedAt).toLocaleString(`hu-HU`):`—`}),N(`div`,{style:{fontSize:`.9rem`,marginTop:`.35rem`},children:e.felvetelAllomas+` → `+e.leadasAllomas}),N(`div`,{style:{fontSize:`.85rem`,marginTop:`.25rem`,color:I.szin.szurke},children:e.tavolsagKm+` km`}),N(Qf,{type:`button`,style:{marginTop:`.65rem`},onClick:()=>void d(e.id),children:t.soforJelentes})]}))})]})}function Gh(){let{id:e}=Dt();return N(Yt,{to:`/dashboard/jelentkezesek/`+ (e??``),replace:!0})}function Kh(){return P(wa,{children:[N(hu,{}),N(Ln,{children:N(Cu,{children:P(Vo,{children:[N(gu,{}),P(Qt,{children:[P(O,{element:N(Lu,{}),children:[N(O,{path:`/`,element:N(nc,{})}),N(O,{path:`/rolunk`,element:N(Dc,{})}),N(O,{path:`/szolgaltatasok`,element:N(Nc,{})}),N(O,{path:`/partnerek`,element:N(Lc,{})}),N(O,{path:`/kapcsolat`,element:N(Hc,{})}),N(O,{path:`/karrier`,element:N(rl,{})}),N(O,{path:`/karrier/jelentkezes`,element:N(ru,{})}),N(O,{path:`/adatvedelmi`,element:N(pu,{})})]}),N(O,{path:`/login`,element:N(cp,{})}),P(O,{path:`/dashboard`,element:N(lp,{children:N(Cp,{})}),children:[N(O,{index:!0,element:N(Tp,{})}),N(O,{path:`aktualis-munka`,element:N(Ch,{})}),N(O,{path:`chat`,element:N(Wh,{})}),N(O,{path:`profile`,element:N(Op,{})}),P(O,{element:N(up,{}),children:[N(O,{path:`tartalom`,element:N(X,{})}),N(O,{path:`jelentkezesek`,element:N(_d,{})}),N(O,{path:`jelentkezesek/:id`,element:N(Nf,{})}),N(O,{path:`soforok`,element:N(SoforokLista,{})}),N(O,{path:`soforok/:id`,element:N(SoforReszlet,{})}),N(O,{path:`naplo`,element:N(Jf,{})})]})]}),N(O,{path:`/admin/belepes`,element:N(Yt,{to:`/login`,replace:!0})}),N(O,{path:`/admin`,element:N(Yt,{to:`/dashboard/jelentkezesek`,replace:!0})}),N(O,{path:`/admin/tartalom`,element:N(Yt,{to:`/dashboard/tartalom`,replace:!0})}),N(O,{path:`/admin/jelentkezesek`,element:N(Yt,{to:`/dashboard/jelentkezesek`,replace:!0})}),N(O,{path:`/admin/jelentkezesek/:id`,element:N(Gh,{})}),N(O,{path:`/admin/naplo`,element:N(Yt,{to:`/dashboard/naplo`,replace:!0})})]})]})})})]})}function qh(){let e=document.getElementById(`root`);if(!e)throw Error(`Nem található a #root elem az index.html-ben.`);(0,Yn.createRoot)(e).render(N(x.StrictMode,{children:N(Kh,{})}))}qh();