var Ox=Object.defineProperty;var Bx=(s,e,t)=>e in s?Ox(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Vu=(s,e,t)=>Bx(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function mg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Hu={exports:{}},Va={},Gu={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function zx(){if(tm)return St;tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function v(L,ae,ve){this.props=L,this.context=ae,this.refs=R,this.updater=ve||M}v.prototype.isReactComponent={},v.prototype.setState=function(L,ae){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ae,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function x(){}x.prototype=v.prototype;function b(L,ae,ve){this.props=L,this.context=ae,this.refs=R,this.updater=ve||M}var O=b.prototype=new x;O.constructor=b,A(O,v.prototype),O.isPureReactComponent=!0;var C=Array.isArray,N=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(L,ae,ve){var ce,Se={},Re=null,J=null;if(ae!=null)for(ce in ae.ref!==void 0&&(J=ae.ref),ae.key!==void 0&&(Re=""+ae.key),ae)N.call(ae,ce)&&!F.hasOwnProperty(ce)&&(Se[ce]=ae[ce]);var de=arguments.length-2;if(de===1)Se.children=ve;else if(1<de){for(var Te=Array(de),Ke=0;Ke<de;Ke++)Te[Ke]=arguments[Ke+2];Se.children=Te}if(L&&L.defaultProps)for(ce in de=L.defaultProps,de)Se[ce]===void 0&&(Se[ce]=de[ce]);return{$$typeof:s,type:L,key:Re,ref:J,props:Se,_owner:P.current}}function D(L,ae){return{$$typeof:s,type:L.type,key:ae,ref:L.ref,props:L.props,_owner:L._owner}}function B(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function q(L){var ae={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ve){return ae[ve]})}var Q=/\/+/g;function oe(L,ae){return typeof L=="object"&&L!==null&&L.key!=null?q(""+L.key):ae.toString(36)}function W(L,ae,ve,ce,Se){var Re=typeof L;(Re==="undefined"||Re==="boolean")&&(L=null);var J=!1;if(L===null)J=!0;else switch(Re){case"string":case"number":J=!0;break;case"object":switch(L.$$typeof){case s:case e:J=!0}}if(J)return J=L,Se=Se(J),L=ce===""?"."+oe(J,0):ce,C(Se)?(ve="",L!=null&&(ve=L.replace(Q,"$&/")+"/"),W(Se,ae,ve,"",function(Ke){return Ke})):Se!=null&&(B(Se)&&(Se=D(Se,ve+(!Se.key||J&&J.key===Se.key?"":(""+Se.key).replace(Q,"$&/")+"/")+L)),ae.push(Se)),1;if(J=0,ce=ce===""?".":ce+":",C(L))for(var de=0;de<L.length;de++){Re=L[de];var Te=ce+oe(Re,de);J+=W(Re,ae,ve,Te,Se)}else if(Te=g(L),typeof Te=="function")for(L=Te.call(L),de=0;!(Re=L.next()).done;)Re=Re.value,Te=ce+oe(Re,de++),J+=W(Re,ae,ve,Te,Se);else if(Re==="object")throw ae=String(L),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return J}function Z(L,ae,ve){if(L==null)return L;var ce=[],Se=0;return W(L,ce,"","",function(Re){return ae.call(ve,Re,Se++)}),ce}function pe(L){if(L._status===-1){var ae=L._result;ae=ae(),ae.then(function(ve){(L._status===0||L._status===-1)&&(L._status=1,L._result=ve)},function(ve){(L._status===0||L._status===-1)&&(L._status=2,L._result=ve)}),L._status===-1&&(L._status=0,L._result=ae)}if(L._status===1)return L._result.default;throw L._result}var ne={current:null},K={transition:null},Y={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:K,ReactCurrentOwner:P};function j(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Z,forEach:function(L,ae,ve){Z(L,function(){ae.apply(this,arguments)},ve)},count:function(L){var ae=0;return Z(L,function(){ae++}),ae},toArray:function(L){return Z(L,function(ae){return ae})||[]},only:function(L){if(!B(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},St.Component=v,St.Fragment=t,St.Profiler=o,St.PureComponent=b,St.StrictMode=r,St.Suspense=p,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,St.act=j,St.cloneElement=function(L,ae,ve){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var ce=A({},L.props),Se=L.key,Re=L.ref,J=L._owner;if(ae!=null){if(ae.ref!==void 0&&(Re=ae.ref,J=P.current),ae.key!==void 0&&(Se=""+ae.key),L.type&&L.type.defaultProps)var de=L.type.defaultProps;for(Te in ae)N.call(ae,Te)&&!F.hasOwnProperty(Te)&&(ce[Te]=ae[Te]===void 0&&de!==void 0?de[Te]:ae[Te])}var Te=arguments.length-2;if(Te===1)ce.children=ve;else if(1<Te){de=Array(Te);for(var Ke=0;Ke<Te;Ke++)de[Ke]=arguments[Ke+2];ce.children=de}return{$$typeof:s,type:L.type,key:Se,ref:Re,props:ce,_owner:J}},St.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},St.createElement=E,St.createFactory=function(L){var ae=E.bind(null,L);return ae.type=L,ae},St.createRef=function(){return{current:null}},St.forwardRef=function(L){return{$$typeof:f,render:L}},St.isValidElement=B,St.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:pe}},St.memo=function(L,ae){return{$$typeof:m,type:L,compare:ae===void 0?null:ae}},St.startTransition=function(L){var ae=K.transition;K.transition={};try{L()}finally{K.transition=ae}},St.unstable_act=j,St.useCallback=function(L,ae){return ne.current.useCallback(L,ae)},St.useContext=function(L){return ne.current.useContext(L)},St.useDebugValue=function(){},St.useDeferredValue=function(L){return ne.current.useDeferredValue(L)},St.useEffect=function(L,ae){return ne.current.useEffect(L,ae)},St.useId=function(){return ne.current.useId()},St.useImperativeHandle=function(L,ae,ve){return ne.current.useImperativeHandle(L,ae,ve)},St.useInsertionEffect=function(L,ae){return ne.current.useInsertionEffect(L,ae)},St.useLayoutEffect=function(L,ae){return ne.current.useLayoutEffect(L,ae)},St.useMemo=function(L,ae){return ne.current.useMemo(L,ae)},St.useReducer=function(L,ae,ve){return ne.current.useReducer(L,ae,ve)},St.useRef=function(L){return ne.current.useRef(L)},St.useState=function(L){return ne.current.useState(L)},St.useSyncExternalStore=function(L,ae,ve){return ne.current.useSyncExternalStore(L,ae,ve)},St.useTransition=function(){return ne.current.useTransition()},St.version="18.3.1",St}var nm;function _f(){return nm||(nm=1,Gu.exports=zx()),Gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Vx(){if(im)return Va;im=1;var s=_f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var _,y={},g=null,M=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(_ in p)r.call(p,_)&&!l.hasOwnProperty(_)&&(y[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:f,key:g,ref:M,props:y,_owner:o.current}}return Va.Fragment=t,Va.jsx=u,Va.jsxs=u,Va}var rm;function Hx(){return rm||(rm=1,Hu.exports=Vx()),Hu.exports}var k=Hx(),Ot=_f();const Gx=mg(Ot);var hl={},Wu={exports:{}},Vn={},Xu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Wx(){return sm||(sm=1,(function(s){function e(K,Y){var j=K.length;K.push(Y);e:for(;0<j;){var L=j-1>>>1,ae=K[L];if(0<o(ae,Y))K[L]=Y,K[j]=ae,j=L;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Y=K[0],j=K.pop();if(j!==Y){K[0]=j;e:for(var L=0,ae=K.length,ve=ae>>>1;L<ve;){var ce=2*(L+1)-1,Se=K[ce],Re=ce+1,J=K[Re];if(0>o(Se,j))Re<ae&&0>o(J,Se)?(K[L]=J,K[Re]=j,L=Re):(K[L]=Se,K[ce]=j,L=ce);else if(Re<ae&&0>o(J,j))K[L]=J,K[Re]=j,L=Re;else break e}}return Y}function o(K,Y){var j=K.sortIndex-Y.sortIndex;return j!==0?j:K.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],m=[],_=1,y=null,g=3,M=!1,A=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(K){for(var Y=t(m);Y!==null;){if(Y.callback===null)r(m);else if(Y.startTime<=K)r(m),Y.sortIndex=Y.expirationTime,e(p,Y);else break;Y=t(m)}}function C(K){if(R=!1,O(K),!A)if(t(p)!==null)A=!0,pe(N);else{var Y=t(m);Y!==null&&ne(C,Y.startTime-K)}}function N(K,Y){A=!1,R&&(R=!1,x(E),E=-1),M=!0;var j=g;try{for(O(Y),y=t(p);y!==null&&(!(y.expirationTime>Y)||K&&!q());){var L=y.callback;if(typeof L=="function"){y.callback=null,g=y.priorityLevel;var ae=L(y.expirationTime<=Y);Y=s.unstable_now(),typeof ae=="function"?y.callback=ae:y===t(p)&&r(p),O(Y)}else r(p);y=t(p)}if(y!==null)var ve=!0;else{var ce=t(m);ce!==null&&ne(C,ce.startTime-Y),ve=!1}return ve}finally{y=null,g=j,M=!1}}var P=!1,F=null,E=-1,D=5,B=-1;function q(){return!(s.unstable_now()-B<D)}function Q(){if(F!==null){var K=s.unstable_now();B=K;var Y=!0;try{Y=F(!0,K)}finally{Y?oe():(P=!1,F=null)}}else P=!1}var oe;if(typeof b=="function")oe=function(){b(Q)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Z=W.port2;W.port1.onmessage=Q,oe=function(){Z.postMessage(null)}}else oe=function(){v(Q,0)};function pe(K){F=K,P||(P=!0,oe())}function ne(K,Y){E=v(function(){K(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,pe(N))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(K){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var j=g;g=Y;try{return K()}finally{g=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,Y){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var j=g;g=K;try{return Y()}finally{g=j}},s.unstable_scheduleCallback=function(K,Y,j){var L=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?L+j:L):j=L,K){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=j+ae,K={id:_++,callback:Y,priorityLevel:K,startTime:j,expirationTime:ae,sortIndex:-1},j>L?(K.sortIndex=j,e(m,K),t(p)===null&&K===t(m)&&(R?(x(E),E=-1):R=!0,ne(C,j-L))):(K.sortIndex=ae,e(p,K),A||M||(A=!0,pe(N))),K},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(K){var Y=g;return function(){var j=g;g=Y;try{return K.apply(this,arguments)}finally{g=j}}}})(qu)),qu}var am;function Xx(){return am||(am=1,Xu.exports=Wx()),Xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function qx(){if(om)return Vn;om=1;var s=_f(),e=Xx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function g(n){return p.call(y,n)?!0:p.call(_,n)?!1:m.test(n)?y[n]=!0:(_[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,h,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,b);v[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,b);v[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,b);v[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,a,c){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),q=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),K=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,L;function ae(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var ve=!1;function ce(n,i){if(!n||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var c=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){c=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var d=fe.stack.split(`
`),h=c.stack.split(`
`),T=d.length-1,U=h.length-1;1<=T&&0<=U&&d[T]!==h[U];)U--;for(;1<=T&&0<=U;T--,U--)if(d[T]!==h[U]){if(T!==1||U!==1)do if(T--,U--,0>U||d[T]!==h[U]){var V=`
`+d[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=U);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ae(n):""}function Se(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=ce(n.type,!1),n;case 11:return n=ce(n.type.render,!1),n;case 1:return n=ce(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case P:return"Portal";case D:return"Profiler";case E:return"StrictMode";case oe:return"Suspense";case W:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case q:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:Re(n.type)||"Memo";case pe:i=n._payload,n=n._init;try{return Re(n(i))}catch{}}return null}function J(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Te(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,h.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Be(n){n._valueTracker||(n._valueTracker=Ke(n))}function Ce(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function yt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,i){var a=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ut(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Mt(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function lt(n,i){Mt(n,i);var a=de(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Bt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Bt(n,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function gt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Bt(n,i,a){(i!=="number"||yt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ht=Array.isArray;function nt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ht(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function z(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ht(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:de(a)}}function Ut(n,i){var a=de(i.value),c=de(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function xt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function S(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?I(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $,re=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function xe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=me(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var De=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(n,i){if(i){if(De[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function Qe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var it=null,at=null,H=null;function Ne(n){if(n=Aa(n)){if(typeof it!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ro(i),it(n.stateNode,n.type,i))}}function ge(n){at?H?H.push(n):H=[n]:at=n}function Le(){if(at){var n=at,i=H;if(H=at=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function ze(n,i){return n(i)}function _e(){}var et=!1;function je(n,i,a){if(et)return n(i,a);et=!0;try{return ze(n,i,a)}finally{et=!1,(at!==null||H!==null)&&(_e(),Le())}}function Nt(n,i){var a=n.stateNode;if(a===null)return null;var c=Ro(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ct=!1;if(f)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{Ct=!1}function Zn(n,i,a,c,d,h,T,U,V){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(Me){this.onError(Me)}}var Dr=!1,cs=null,Ir=!1,Ur=null,uc={onError:function(n){Dr=!0,cs=n}};function co(n,i,a,c,d,h,T,U,V){Dr=!1,cs=null,Zn.apply(uc,arguments)}function uo(n,i,a,c,d,h,T,U,V){if(co.apply(this,arguments),Dr){if(Dr){var fe=cs;Dr=!1,cs=null}else throw Error(t(198));Ir||(Ir=!0,Ur=fe)}}function Pn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function us(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function sa(n){if(Pn(n)!==n)throw Error(t(188))}function fo(n){var i=n.alternate;if(!i){if(i=Pn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return sa(d),n;if(h===c)return sa(d),i;h=h.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=h;else{for(var T=!1,U=d.child;U;){if(U===a){T=!0,a=d,c=h;break}if(U===c){T=!0,c=d,a=h;break}U=U.sibling}if(!T){for(U=h.child;U;){if(U===a){T=!0,a=h,c=d;break}if(U===c){T=!0,c=h,a=d;break}U=U.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Fr(n){return n=fo(n),n!==null?aa(n):null}function aa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=aa(n);if(i!==null)return i;n=n.sibling}return null}var kr=e.unstable_scheduleCallback,oa=e.unstable_cancelCallback,ho=e.unstable_shouldYield,dc=e.unstable_requestPaint,jt=e.unstable_now,fc=e.unstable_getCurrentPriorityLevel,la=e.unstable_ImmediatePriority,ca=e.unstable_UserBlockingPriority,w=e.unstable_NormalPriority,G=e.unstable_LowPriority,ue=e.unstable_IdlePriority,ie=null,ee=null;function ke(n){if(ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(ie,n,void 0,(n.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Je,Fe=Math.log,qe=Math.LN2;function Je(n){return n>>>=0,n===0?32:31-(Fe(n)/qe|0)|0}var dt=64,pt=4194304;function Ge(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Et(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,h=n.pingedLanes,T=a&268435455;if(T!==0){var U=T&~d;U!==0?c=Ge(U):(h&=T,h!==0&&(c=Ge(h)))}else T=a&~d,T!==0?c=Ge(T):h!==0&&(c=Ge(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ue(i),d=1<<a,c|=n[a],i&=~d;return c}function Qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,h=n.pendingLanes;0<h;){var T=31-Ue(h),U=1<<T,V=d[T];V===-1?((U&a)===0||(U&c)!==0)&&(d[T]=Qt(U,i)):V<=i&&(n.expiredLanes|=U),h&=~U}}function It(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function on(){var n=dt;return dt<<=1,(dt&4194240)===0&&(dt=64),n}function Ve(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function tn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ue(i),n[i]=a}function Tt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ue(a),h=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~h}}function Sn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ue(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var _t=0;function di(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Hi,Lt,qt,fi,Ft,Qn=!1,hi=[],pi=null,or=null,lr=null,ua=new Map,da=new Map,cr=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Of(n,i){switch(n){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":ua.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(i.pointerId)}}function fa(n,i,a,c,d,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Aa(i),i!==null&&Lt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function o0(n,i,a,c,d){switch(i){case"focusin":return pi=fa(pi,n,i,a,c,d),!0;case"dragenter":return or=fa(or,n,i,a,c,d),!0;case"mouseover":return lr=fa(lr,n,i,a,c,d),!0;case"pointerover":var h=d.pointerId;return ua.set(h,fa(ua.get(h)||null,n,i,a,c,d)),!0;case"gotpointercapture":return h=d.pointerId,da.set(h,fa(da.get(h)||null,n,i,a,c,d)),!0}return!1}function Bf(n){var i=Or(n.target);if(i!==null){var a=Pn(i);if(a!==null){if(i=a.tag,i===13){if(i=us(a),i!==null){n.blockedOn=i,Ft(n.priority,function(){qt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function po(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=pc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pe=c,a.target.dispatchEvent(c),Pe=null}else return i=Aa(a),i!==null&&Lt(i),n.blockedOn=a,!1;i.shift()}return!0}function zf(n,i,a){po(n)&&a.delete(i)}function l0(){Qn=!1,pi!==null&&po(pi)&&(pi=null),or!==null&&po(or)&&(or=null),lr!==null&&po(lr)&&(lr=null),ua.forEach(zf),da.forEach(zf)}function ha(n,i){n.blockedOn===i&&(n.blockedOn=null,Qn||(Qn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,l0)))}function pa(n){function i(d){return ha(d,n)}if(0<hi.length){ha(hi[0],n);for(var a=1;a<hi.length;a++){var c=hi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(pi!==null&&ha(pi,n),or!==null&&ha(or,n),lr!==null&&ha(lr,n),ua.forEach(i),da.forEach(i),a=0;a<cr.length;a++)c=cr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)Bf(a),a.blockedOn===null&&cr.shift()}var ds=C.ReactCurrentBatchConfig,mo=!0;function c0(n,i,a,c){var d=_t,h=ds.transition;ds.transition=null;try{_t=1,hc(n,i,a,c)}finally{_t=d,ds.transition=h}}function u0(n,i,a,c){var d=_t,h=ds.transition;ds.transition=null;try{_t=4,hc(n,i,a,c)}finally{_t=d,ds.transition=h}}function hc(n,i,a,c){if(mo){var d=pc(n,i,a,c);if(d===null)Nc(n,i,c,go,a),Of(n,c);else if(o0(d,n,i,a,c))c.stopPropagation();else if(Of(n,c),i&4&&-1<a0.indexOf(n)){for(;d!==null;){var h=Aa(d);if(h!==null&&Hi(h),h=pc(n,i,a,c),h===null&&Nc(n,i,c,go,a),h===d)break;d=h}d!==null&&c.stopPropagation()}else Nc(n,i,c,null,a)}}var go=null;function pc(n,i,a,c){if(go=null,n=Qe(c),n=Or(n),n!==null)if(i=Pn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=us(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return go=n,null}function Vf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case la:return 1;case ca:return 4;case w:case G:return 16;case ue:return 536870912;default:return 16}default:return 16}}var ur=null,mc=null,xo=null;function Hf(){if(xo)return xo;var n,i=mc,a=i.length,c,d="value"in ur?ur.value:ur.textContent,h=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[h-c];c++);return xo=d.slice(n,1<c?1-c:void 0)}function _o(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function vo(){return!0}function Gf(){return!1}function Wn(n){function i(a,c,d,h,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?vo:Gf,this.isPropagationStopped=Gf,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=Wn(fs),ma=j({},fs,{view:0,detail:0}),d0=Wn(ma),xc,_c,ga,So=j({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ga&&(ga&&n.type==="mousemove"?(xc=n.screenX-ga.screenX,_c=n.screenY-ga.screenY):_c=xc=0,ga=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:_c}}),Wf=Wn(So),f0=j({},So,{dataTransfer:0}),h0=Wn(f0),p0=j({},ma,{relatedTarget:0}),vc=Wn(p0),m0=j({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=Wn(m0),x0=j({},fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_0=Wn(x0),v0=j({},fs,{data:0}),Xf=Wn(v0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=M0[n])?!!i[n]:!1}function Sc(){return E0}var T0=j({},ma,{key:function(n){if(n.key){var i=S0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_o(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?y0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(n){return n.type==="keypress"?_o(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_o(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),w0=Wn(T0),A0=j({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=Wn(A0),C0=j({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),R0=Wn(C0),b0=j({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=Wn(b0),N0=j({},So,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=Wn(N0),D0=[9,13,27,32],yc=f&&"CompositionEvent"in window,xa=null;f&&"documentMode"in document&&(xa=document.documentMode);var I0=f&&"TextEvent"in window&&!xa,Yf=f&&(!yc||xa&&8<xa&&11>=xa),jf=" ",$f=!1;function Kf(n,i){switch(n){case"keyup":return D0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var hs=!1;function U0(n,i){switch(n){case"compositionend":return Zf(i);case"keypress":return i.which!==32?null:($f=!0,jf);case"textInput":return n=i.data,n===jf&&$f?null:n;default:return null}}function F0(n,i){if(hs)return n==="compositionend"||!yc&&Kf(n,i)?(n=Hf(),xo=mc=ur=null,hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yf&&i.locale!=="ko"?null:i.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!k0[n.type]:i==="textarea"}function Jf(n,i,a,c){ge(c),i=wo(i,"onChange"),0<i.length&&(a=new gc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var _a=null,va=null;function O0(n){xh(n,0)}function yo(n){var i=_s(n);if(Ce(i))return n}function B0(n,i){if(n==="change")return i}var eh=!1;if(f){var Mc;if(f){var Ec="oninput"in document;if(!Ec){var th=document.createElement("div");th.setAttribute("oninput","return;"),Ec=typeof th.oninput=="function"}Mc=Ec}else Mc=!1;eh=Mc&&(!document.documentMode||9<document.documentMode)}function nh(){_a&&(_a.detachEvent("onpropertychange",ih),va=_a=null)}function ih(n){if(n.propertyName==="value"&&yo(va)){var i=[];Jf(i,va,n,Qe(n)),je(O0,i)}}function z0(n,i,a){n==="focusin"?(nh(),_a=i,va=a,_a.attachEvent("onpropertychange",ih)):n==="focusout"&&nh()}function V0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yo(va)}function H0(n,i){if(n==="click")return yo(i)}function G0(n,i){if(n==="input"||n==="change")return yo(i)}function W0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:W0;function Sa(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!mi(n[d],i[d]))return!1}return!0}function rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sh(n,i){var a=rh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rh(a)}}function ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=yt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=yt(n.document)}return i}function Tc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function X0(n){var i=oh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ah(a.ownerDocument.documentElement,a)){if(c!==null&&Tc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!n.extend&&h>c&&(d=c,c=h,h=d),d=sh(a,h);var T=sh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),h>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var q0=f&&"documentMode"in document&&11>=document.documentMode,ps=null,wc=null,ya=null,Ac=!1;function lh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ac||ps==null||ps!==yt(c)||(c=ps,"selectionStart"in c&&Tc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ya&&Sa(ya,c)||(ya=c,c=wo(wc,"onSelect"),0<c.length&&(i=new gc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ps)))}function Mo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ms={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Cc={},ch={};f&&(ch=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Eo(n){if(Cc[n])return Cc[n];if(!ms[n])return n;var i=ms[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ch)return Cc[n]=i[a];return n}var uh=Eo("animationend"),dh=Eo("animationiteration"),fh=Eo("animationstart"),hh=Eo("transitionend"),ph=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,i){ph.set(n,i),l(i,[n])}for(var Rc=0;Rc<mh.length;Rc++){var bc=mh[Rc],Y0=bc.toLowerCase(),j0=bc[0].toUpperCase()+bc.slice(1);dr(Y0,"on"+j0)}dr(uh,"onAnimationEnd"),dr(dh,"onAnimationIteration"),dr(fh,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(hh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function gh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,uo(c,i,void 0,n),n.currentTarget=null}function xh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var T=c.length-1;0<=T;T--){var U=c[T],V=U.instance,fe=U.currentTarget;if(U=U.listener,V!==h&&d.isPropagationStopped())break e;gh(d,U,fe),h=V}else for(T=0;T<c.length;T++){if(U=c[T],V=U.instance,fe=U.currentTarget,U=U.listener,V!==h&&d.isPropagationStopped())break e;gh(d,U,fe),h=V}}}if(Ir)throw n=Ur,Ir=!1,Ur=null,n}function Wt(n,i){var a=i[kc];a===void 0&&(a=i[kc]=new Set);var c=n+"__bubble";a.has(c)||(_h(i,n,2,!1),a.add(c))}function Pc(n,i,a){var c=0;i&&(c|=4),_h(a,n,c,i)}var To="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[To]){n[To]=!0,r.forEach(function(a){a!=="selectionchange"&&($0.has(a)||Pc(a,!1,n),Pc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[To]||(i[To]=!0,Pc("selectionchange",!1,i))}}function _h(n,i,a,c){switch(Vf(i)){case 1:var d=c0;break;case 4:d=u0;break;default:d=hc}a=d.bind(null,i,a,n),d=void 0,!Ct||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Nc(n,i,a,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;T=T.return}for(;U!==null;){if(T=Or(U),T===null)return;if(V=T.tag,V===5||V===6){c=h=T;continue e}U=U.parentNode}}c=c.return}je(function(){var fe=h,Me=Qe(a),Ee=[];e:{var ye=ph.get(n);if(ye!==void 0){var He=gc,Ye=n;switch(n){case"keypress":if(_o(a)===0)break e;case"keydown":case"keyup":He=w0;break;case"focusin":Ye="focus",He=vc;break;case"focusout":Ye="blur",He=vc;break;case"beforeblur":case"afterblur":He=vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=h0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=R0;break;case uh:case dh:case fh:He=g0;break;case hh:He=P0;break;case"scroll":He=d0;break;case"wheel":He=L0;break;case"copy":case"cut":case"paste":He=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=qf}var $e=(i&4)!==0,nn=!$e&&n==="scroll",se=$e?ye!==null?ye+"Capture":null:ye;$e=[];for(var X=fe,le;X!==null;){le=X;var Ae=le.stateNode;if(le.tag===5&&Ae!==null&&(le=Ae,se!==null&&(Ae=Nt(X,se),Ae!=null&&$e.push(Ta(X,Ae,le)))),nn)break;X=X.return}0<$e.length&&(ye=new He(ye,Ye,null,a,Me),Ee.push({event:ye,listeners:$e}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",ye&&a!==Pe&&(Ye=a.relatedTarget||a.fromElement)&&(Or(Ye)||Ye[Gi]))break e;if((He||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,He?(Ye=a.relatedTarget||a.toElement,He=fe,Ye=Ye?Or(Ye):null,Ye!==null&&(nn=Pn(Ye),Ye!==nn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(He=null,Ye=fe),He!==Ye)){if($e=Wf,Ae="onMouseLeave",se="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&($e=qf,Ae="onPointerLeave",se="onPointerEnter",X="pointer"),nn=He==null?ye:_s(He),le=Ye==null?ye:_s(Ye),ye=new $e(Ae,X+"leave",He,a,Me),ye.target=nn,ye.relatedTarget=le,Ae=null,Or(Me)===fe&&($e=new $e(se,X+"enter",Ye,a,Me),$e.target=le,$e.relatedTarget=nn,Ae=$e),nn=Ae,He&&Ye)t:{for($e=He,se=Ye,X=0,le=$e;le;le=gs(le))X++;for(le=0,Ae=se;Ae;Ae=gs(Ae))le++;for(;0<X-le;)$e=gs($e),X--;for(;0<le-X;)se=gs(se),le--;for(;X--;){if($e===se||se!==null&&$e===se.alternate)break t;$e=gs($e),se=gs(se)}$e=null}else $e=null;He!==null&&vh(Ee,ye,He,$e,!1),Ye!==null&&nn!==null&&vh(Ee,nn,Ye,$e,!0)}}e:{if(ye=fe?_s(fe):window,He=ye.nodeName&&ye.nodeName.toLowerCase(),He==="select"||He==="input"&&ye.type==="file")var tt=B0;else if(Qf(ye))if(eh)tt=G0;else{tt=V0;var rt=z0}else(He=ye.nodeName)&&He.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(tt=H0);if(tt&&(tt=tt(n,fe))){Jf(Ee,tt,a,Me);break e}rt&&rt(n,ye,fe),n==="focusout"&&(rt=ye._wrapperState)&&rt.controlled&&ye.type==="number"&&Bt(ye,"number",ye.value)}switch(rt=fe?_s(fe):window,n){case"focusin":(Qf(rt)||rt.contentEditable==="true")&&(ps=rt,wc=fe,ya=null);break;case"focusout":ya=wc=ps=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,lh(Ee,a,Me);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":lh(Ee,a,Me)}var st;if(yc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else hs?Kf(n,a)&&(ct="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(Yf&&a.locale!=="ko"&&(hs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&hs&&(st=Hf()):(ur=Me,mc="value"in ur?ur.value:ur.textContent,hs=!0)),rt=wo(fe,ct),0<rt.length&&(ct=new Xf(ct,n,null,a,Me),Ee.push({event:ct,listeners:rt}),st?ct.data=st:(st=Zf(a),st!==null&&(ct.data=st)))),(st=I0?U0(n,a):F0(n,a))&&(fe=wo(fe,"onBeforeInput"),0<fe.length&&(Me=new Xf("onBeforeInput","beforeinput",null,a,Me),Ee.push({event:Me,listeners:fe}),Me.data=st))}xh(Ee,i)})}function Ta(n,i,a){return{instance:n,listener:i,currentTarget:a}}function wo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Nt(n,a),h!=null&&c.unshift(Ta(n,h,d)),h=Nt(n,i),h!=null&&c.push(Ta(n,h,d))),n=n.return}return c}function gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vh(n,i,a,c,d){for(var h=i._reactName,T=[];a!==null&&a!==c;){var U=a,V=U.alternate,fe=U.stateNode;if(V!==null&&V===c)break;U.tag===5&&fe!==null&&(U=fe,d?(V=Nt(a,h),V!=null&&T.unshift(Ta(a,V,U))):d||(V=Nt(a,h),V!=null&&T.push(Ta(a,V,U)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var K0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function Sh(n){return(typeof n=="string"?n:""+n).replace(K0,`
`).replace(Z0,"")}function Ao(n,i,a){if(i=Sh(i),Sh(n)!==i&&a)throw Error(t(425))}function Co(){}var Lc=null,Dc=null;function Ic(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,Q0=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(n){return yh.resolve(null).then(n).catch(ex)}:Uc;function ex(n){setTimeout(function(){throw n})}function Fc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),pa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);pa(i)}function fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Ci="__reactFiber$"+xs,wa="__reactProps$"+xs,Gi="__reactContainer$"+xs,kc="__reactEvents$"+xs,tx="__reactListeners$"+xs,nx="__reactHandles$"+xs;function Or(n){var i=n[Ci];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Gi]||a[Ci]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Mh(n);n!==null;){if(a=n[Ci])return a;n=Mh(n)}return i}n=a,a=n.parentNode}return null}function Aa(n){return n=n[Ci]||n[Gi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ro(n){return n[wa]||null}var Oc=[],vs=-1;function hr(n){return{current:n}}function Xt(n){0>vs||(n.current=Oc[vs],Oc[vs]=null,vs--)}function Gt(n,i){vs++,Oc[vs]=n.current,n.current=i}var pr={},yn=hr(pr),Fn=hr(!1),Br=pr;function Ss(n,i){var a=n.type.contextTypes;if(!a)return pr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function kn(n){return n=n.childContextTypes,n!=null}function bo(){Xt(Fn),Xt(yn)}function Eh(n,i,a){if(yn.current!==pr)throw Error(t(168));Gt(yn,i),Gt(Fn,a)}function Th(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,J(n)||"Unknown",d));return j({},a,c)}function Po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Br=yn.current,Gt(yn,n),Gt(Fn,Fn.current),!0}function wh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Th(n,i,Br),c.__reactInternalMemoizedMergedChildContext=n,Xt(Fn),Xt(yn),Gt(yn,n)):Xt(Fn),Gt(Fn,a)}var Wi=null,No=!1,Bc=!1;function Ah(n){Wi===null?Wi=[n]:Wi.push(n)}function ix(n){No=!0,Ah(n)}function mr(){if(!Bc&&Wi!==null){Bc=!0;var n=0,i=_t;try{var a=Wi;for(_t=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Wi=null,No=!1}catch(d){throw Wi!==null&&(Wi=Wi.slice(n+1)),kr(la,mr),d}finally{_t=i,Bc=!1}}return null}var ys=[],Ms=0,Lo=null,Do=0,Jn=[],ei=0,zr=null,Xi=1,qi="";function Vr(n,i){ys[Ms++]=Do,ys[Ms++]=Lo,Lo=n,Do=i}function Ch(n,i,a){Jn[ei++]=Xi,Jn[ei++]=qi,Jn[ei++]=zr,zr=n;var c=Xi;n=qi;var d=32-Ue(c)-1;c&=~(1<<d),a+=1;var h=32-Ue(i)+d;if(30<h){var T=d-d%5;h=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Xi=1<<32-Ue(i)+d|a<<d|c,qi=h+n}else Xi=1<<h|a<<d|c,qi=n}function zc(n){n.return!==null&&(Vr(n,1),Ch(n,1,0))}function Vc(n){for(;n===Lo;)Lo=ys[--Ms],ys[Ms]=null,Do=ys[--Ms],ys[Ms]=null;for(;n===zr;)zr=Jn[--ei],Jn[ei]=null,qi=Jn[--ei],Jn[ei]=null,Xi=Jn[--ei],Jn[ei]=null}var Xn=null,qn=null,Yt=!1,gi=null;function Rh(n,i){var a=ri(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function bh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,qn=fr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=zr!==null?{id:Xi,overflow:qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ri(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Xn=n,qn=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gc(n){if(Yt){var i=qn;if(i){var a=i;if(!bh(n,i)){if(Hc(n))throw Error(t(418));i=fr(a.nextSibling);var c=Xn;i&&bh(n,i)?Rh(c,a):(n.flags=n.flags&-4097|2,Yt=!1,Xn=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Xn=n}}}function Ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Io(n){if(n!==Xn)return!1;if(!Yt)return Ph(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ic(n.type,n.memoizedProps)),i&&(i=qn)){if(Hc(n))throw Nh(),Error(t(418));for(;i;)Rh(n,i),i=fr(i.nextSibling)}if(Ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){qn=fr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=Xn?fr(n.stateNode.nextSibling):null;return!0}function Nh(){for(var n=qn;n;)n=fr(n.nextSibling)}function Es(){qn=Xn=null,Yt=!1}function Wc(n){gi===null?gi=[n]:gi.push(n)}var rx=C.ReactCurrentBatchConfig;function Ca(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(T){var U=d.refs;T===null?delete U[h]:U[h]=T},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Uo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Lh(n){var i=n._init;return i(n._payload)}function Dh(n){function i(se,X){if(n){var le=se.deletions;le===null?(se.deletions=[X],se.flags|=16):le.push(X)}}function a(se,X){if(!n)return null;for(;X!==null;)i(se,X),X=X.sibling;return null}function c(se,X){for(se=new Map;X!==null;)X.key!==null?se.set(X.key,X):se.set(X.index,X),X=X.sibling;return se}function d(se,X){return se=Er(se,X),se.index=0,se.sibling=null,se}function h(se,X,le){return se.index=le,n?(le=se.alternate,le!==null?(le=le.index,le<X?(se.flags|=2,X):le):(se.flags|=2,X)):(se.flags|=1048576,X)}function T(se){return n&&se.alternate===null&&(se.flags|=2),se}function U(se,X,le,Ae){return X===null||X.tag!==6?(X=Uu(le,se.mode,Ae),X.return=se,X):(X=d(X,le),X.return=se,X)}function V(se,X,le,Ae){var tt=le.type;return tt===F?Me(se,X,le.props.children,Ae,le.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===pe&&Lh(tt)===X.type)?(Ae=d(X,le.props),Ae.ref=Ca(se,X,le),Ae.return=se,Ae):(Ae=sl(le.type,le.key,le.props,null,se.mode,Ae),Ae.ref=Ca(se,X,le),Ae.return=se,Ae)}function fe(se,X,le,Ae){return X===null||X.tag!==4||X.stateNode.containerInfo!==le.containerInfo||X.stateNode.implementation!==le.implementation?(X=Fu(le,se.mode,Ae),X.return=se,X):(X=d(X,le.children||[]),X.return=se,X)}function Me(se,X,le,Ae,tt){return X===null||X.tag!==7?(X=$r(le,se.mode,Ae,tt),X.return=se,X):(X=d(X,le),X.return=se,X)}function Ee(se,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Uu(""+X,se.mode,le),X.return=se,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return le=sl(X.type,X.key,X.props,null,se.mode,le),le.ref=Ca(se,null,X),le.return=se,le;case P:return X=Fu(X,se.mode,le),X.return=se,X;case pe:var Ae=X._init;return Ee(se,Ae(X._payload),le)}if(Ht(X)||Y(X))return X=$r(X,se.mode,le,null),X.return=se,X;Uo(se,X)}return null}function ye(se,X,le,Ae){var tt=X!==null?X.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return tt!==null?null:U(se,X,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case N:return le.key===tt?V(se,X,le,Ae):null;case P:return le.key===tt?fe(se,X,le,Ae):null;case pe:return tt=le._init,ye(se,X,tt(le._payload),Ae)}if(Ht(le)||Y(le))return tt!==null?null:Me(se,X,le,Ae,null);Uo(se,le)}return null}function He(se,X,le,Ae,tt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return se=se.get(le)||null,U(X,se,""+Ae,tt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case N:return se=se.get(Ae.key===null?le:Ae.key)||null,V(X,se,Ae,tt);case P:return se=se.get(Ae.key===null?le:Ae.key)||null,fe(X,se,Ae,tt);case pe:var rt=Ae._init;return He(se,X,le,rt(Ae._payload),tt)}if(Ht(Ae)||Y(Ae))return se=se.get(le)||null,Me(X,se,Ae,tt,null);Uo(X,Ae)}return null}function Ye(se,X,le,Ae){for(var tt=null,rt=null,st=X,ct=X=0,pn=null;st!==null&&ct<le.length;ct++){st.index>ct?(pn=st,st=null):pn=st.sibling;var Dt=ye(se,st,le[ct],Ae);if(Dt===null){st===null&&(st=pn);break}n&&st&&Dt.alternate===null&&i(se,st),X=h(Dt,X,ct),rt===null?tt=Dt:rt.sibling=Dt,rt=Dt,st=pn}if(ct===le.length)return a(se,st),Yt&&Vr(se,ct),tt;if(st===null){for(;ct<le.length;ct++)st=Ee(se,le[ct],Ae),st!==null&&(X=h(st,X,ct),rt===null?tt=st:rt.sibling=st,rt=st);return Yt&&Vr(se,ct),tt}for(st=c(se,st);ct<le.length;ct++)pn=He(st,se,ct,le[ct],Ae),pn!==null&&(n&&pn.alternate!==null&&st.delete(pn.key===null?ct:pn.key),X=h(pn,X,ct),rt===null?tt=pn:rt.sibling=pn,rt=pn);return n&&st.forEach(function(Tr){return i(se,Tr)}),Yt&&Vr(se,ct),tt}function $e(se,X,le,Ae){var tt=Y(le);if(typeof tt!="function")throw Error(t(150));if(le=tt.call(le),le==null)throw Error(t(151));for(var rt=tt=null,st=X,ct=X=0,pn=null,Dt=le.next();st!==null&&!Dt.done;ct++,Dt=le.next()){st.index>ct?(pn=st,st=null):pn=st.sibling;var Tr=ye(se,st,Dt.value,Ae);if(Tr===null){st===null&&(st=pn);break}n&&st&&Tr.alternate===null&&i(se,st),X=h(Tr,X,ct),rt===null?tt=Tr:rt.sibling=Tr,rt=Tr,st=pn}if(Dt.done)return a(se,st),Yt&&Vr(se,ct),tt;if(st===null){for(;!Dt.done;ct++,Dt=le.next())Dt=Ee(se,Dt.value,Ae),Dt!==null&&(X=h(Dt,X,ct),rt===null?tt=Dt:rt.sibling=Dt,rt=Dt);return Yt&&Vr(se,ct),tt}for(st=c(se,st);!Dt.done;ct++,Dt=le.next())Dt=He(st,se,ct,Dt.value,Ae),Dt!==null&&(n&&Dt.alternate!==null&&st.delete(Dt.key===null?ct:Dt.key),X=h(Dt,X,ct),rt===null?tt=Dt:rt.sibling=Dt,rt=Dt);return n&&st.forEach(function(kx){return i(se,kx)}),Yt&&Vr(se,ct),tt}function nn(se,X,le,Ae){if(typeof le=="object"&&le!==null&&le.type===F&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case N:e:{for(var tt=le.key,rt=X;rt!==null;){if(rt.key===tt){if(tt=le.type,tt===F){if(rt.tag===7){a(se,rt.sibling),X=d(rt,le.props.children),X.return=se,se=X;break e}}else if(rt.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===pe&&Lh(tt)===rt.type){a(se,rt.sibling),X=d(rt,le.props),X.ref=Ca(se,rt,le),X.return=se,se=X;break e}a(se,rt);break}else i(se,rt);rt=rt.sibling}le.type===F?(X=$r(le.props.children,se.mode,Ae,le.key),X.return=se,se=X):(Ae=sl(le.type,le.key,le.props,null,se.mode,Ae),Ae.ref=Ca(se,X,le),Ae.return=se,se=Ae)}return T(se);case P:e:{for(rt=le.key;X!==null;){if(X.key===rt)if(X.tag===4&&X.stateNode.containerInfo===le.containerInfo&&X.stateNode.implementation===le.implementation){a(se,X.sibling),X=d(X,le.children||[]),X.return=se,se=X;break e}else{a(se,X);break}else i(se,X);X=X.sibling}X=Fu(le,se.mode,Ae),X.return=se,se=X}return T(se);case pe:return rt=le._init,nn(se,X,rt(le._payload),Ae)}if(Ht(le))return Ye(se,X,le,Ae);if(Y(le))return $e(se,X,le,Ae);Uo(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,X!==null&&X.tag===6?(a(se,X.sibling),X=d(X,le),X.return=se,se=X):(a(se,X),X=Uu(le,se.mode,Ae),X.return=se,se=X),T(se)):a(se,X)}return nn}var Ts=Dh(!0),Ih=Dh(!1),Fo=hr(null),ko=null,ws=null,Xc=null;function qc(){Xc=ws=ko=null}function Yc(n){var i=Fo.current;Xt(Fo),n._currentValue=i}function jc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function As(n,i){ko=n,Xc=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(On=!0),n.firstContext=null)}function ti(n){var i=n._currentValue;if(Xc!==n)if(n={context:n,memoizedValue:i,next:null},ws===null){if(ko===null)throw Error(t(308));ws=n,ko.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return i}var Hr=null;function $c(n){Hr===null?Hr=[n]:Hr.push(n)}function Uh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,$c(i)):(a.next=d.next,d.next=a),i.interleaved=a,Yi(n,c)}function Yi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var gr=!1;function Kc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function xr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Rt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Yi(n,a)}return d=c.interleaved,d===null?(i.next=i,$c(c)):(i.next=d.next,d.next=i),c.interleaved=i,Yi(n,a)}function Oo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Sn(n,a)}}function kh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=T:h=h.next=T,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Bo(n,i,a,c){var d=n.updateQueue;gr=!1;var h=d.firstBaseUpdate,T=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var V=U,fe=V.next;V.next=null,T===null?h=fe:T.next=fe,T=V;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,U=Me.lastBaseUpdate,U!==T&&(U===null?Me.firstBaseUpdate=fe:U.next=fe,Me.lastBaseUpdate=V))}if(h!==null){var Ee=d.baseState;T=0,Me=fe=V=null,U=h;do{var ye=U.lane,He=U.eventTime;if((c&ye)===ye){Me!==null&&(Me=Me.next={eventTime:He,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ye=n,$e=U;switch(ye=i,He=a,$e.tag){case 1:if(Ye=$e.payload,typeof Ye=="function"){Ee=Ye.call(He,Ee,ye);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=$e.payload,ye=typeof Ye=="function"?Ye.call(He,Ee,ye):Ye,ye==null)break e;Ee=j({},Ee,ye);break e;case 2:gr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ye=d.effects,ye===null?d.effects=[U]:ye.push(U))}else He={eventTime:He,lane:ye,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Me===null?(fe=Me=He,V=Ee):Me=Me.next=He,T|=ye;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ye=U,U=ye.next,ye.next=null,d.lastBaseUpdate=ye,d.shared.pending=null}}while(!0);if(Me===null&&(V=Ee),d.baseState=V,d.firstBaseUpdate=fe,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Xr|=T,n.lanes=T,n.memoizedState=Ee}}function Oh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ra={},Ri=hr(Ra),ba=hr(Ra),Pa=hr(Ra);function Gr(n){if(n===Ra)throw Error(t(174));return n}function Zc(n,i){switch(Gt(Pa,i),Gt(ba,n),Gt(Ri,Ra),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:S(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=S(i,n)}Xt(Ri),Gt(Ri,i)}function Cs(){Xt(Ri),Xt(ba),Xt(Pa)}function Bh(n){Gr(Pa.current);var i=Gr(Ri.current),a=S(i,n.type);i!==a&&(Gt(ba,n),Gt(Ri,a))}function Qc(n){ba.current===n&&(Xt(Ri),Xt(ba))}var $t=hr(0);function zo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jc=[];function eu(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var Vo=C.ReactCurrentDispatcher,tu=C.ReactCurrentBatchConfig,Wr=0,Kt=null,ln=null,fn=null,Ho=!1,Na=!1,La=0,sx=0;function Mn(){throw Error(t(321))}function nu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function iu(n,i,a,c,d,h){if(Wr=h,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Vo.current=n===null||n.memoizedState===null?cx:ux,n=a(c,d),Na){h=0;do{if(Na=!1,La=0,25<=h)throw Error(t(301));h+=1,fn=ln=null,i.updateQueue=null,Vo.current=dx,n=a(c,d)}while(Na)}if(Vo.current=Xo,i=ln!==null&&ln.next!==null,Wr=0,fn=ln=Kt=null,Ho=!1,i)throw Error(t(300));return n}function ru(){var n=La!==0;return La=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Kt.memoizedState=fn=n:fn=fn.next=n,fn}function ni(){if(ln===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var i=fn===null?Kt.memoizedState:fn.next;if(i!==null)fn=i,ln=n;else{if(n===null)throw Error(t(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},fn===null?Kt.memoizedState=fn=n:fn=fn.next=n}return fn}function Da(n,i){return typeof i=="function"?i(n):i}function su(n){var i=ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ln,d=c.baseQueue,h=a.pending;if(h!==null){if(d!==null){var T=d.next;d.next=h.next,h.next=T}c.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,c=c.baseState;var U=T=null,V=null,fe=h;do{var Me=fe.lane;if((Wr&Me)===Me)V!==null&&(V=V.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var Ee={lane:Me,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};V===null?(U=V=Ee,T=c):V=V.next=Ee,Kt.lanes|=Me,Xr|=Me}fe=fe.next}while(fe!==null&&fe!==h);V===null?T=c:V.next=U,mi(c,i.memoizedState)||(On=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do h=d.lane,Kt.lanes|=h,Xr|=h,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function au(n){var i=ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do h=n(h,T.action),T=T.next;while(T!==d);mi(h,i.memoizedState)||(On=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,c]}function zh(){}function Vh(n,i){var a=Kt,c=ni(),d=i(),h=!mi(c.memoizedState,d);if(h&&(c.memoizedState=d,On=!0),c=c.queue,ou(Wh.bind(null,a,c,n),[n]),c.getSnapshot!==i||h||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,Ia(9,Gh.bind(null,a,c,d,i),void 0,null),hn===null)throw Error(t(349));(Wr&30)!==0||Hh(a,i,d)}return d}function Hh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gh(n,i,a,c){i.value=a,i.getSnapshot=c,Xh(i)&&qh(n)}function Wh(n,i,a){return a(function(){Xh(i)&&qh(n)})}function Xh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function qh(n){var i=Yi(n,1);i!==null&&Si(i,n,1,-1)}function Yh(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},i.queue=n,n=n.dispatch=lx.bind(null,Kt,n),[i.memoizedState,n]}function Ia(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function jh(){return ni().memoizedState}function Go(n,i,a,c){var d=bi();Kt.flags|=n,d.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function Wo(n,i,a,c){var d=ni();c=c===void 0?null:c;var h=void 0;if(ln!==null){var T=ln.memoizedState;if(h=T.destroy,c!==null&&nu(c,T.deps)){d.memoizedState=Ia(i,a,h,c);return}}Kt.flags|=n,d.memoizedState=Ia(1|i,a,h,c)}function $h(n,i){return Go(8390656,8,n,i)}function ou(n,i){return Wo(2048,8,n,i)}function Kh(n,i){return Wo(4,2,n,i)}function Zh(n,i){return Wo(4,4,n,i)}function Qh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Jh(n,i,a){return a=a!=null?a.concat([n]):null,Wo(4,4,Qh.bind(null,i,n),a)}function lu(){}function ep(n,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&nu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function tp(n,i){var a=ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&nu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function np(n,i,a){return(Wr&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=a):(mi(a,i)||(a=on(),Kt.lanes|=a,Xr|=a,n.baseState=!0),i)}function ax(n,i){var a=_t;_t=a!==0&&4>a?a:4,n(!0);var c=tu.transition;tu.transition={};try{n(!1),i()}finally{_t=a,tu.transition=c}}function ip(){return ni().memoizedState}function ox(n,i,a){var c=yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rp(n))sp(i,a);else if(a=Uh(n,i,a,c),a!==null){var d=Ln();Si(a,n,c,d),ap(a,i,c)}}function lx(n,i,a){var c=yr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rp(n))sp(i,d);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var T=i.lastRenderedState,U=h(T,a);if(d.hasEagerState=!0,d.eagerState=U,mi(U,T)){var V=i.interleaved;V===null?(d.next=d,$c(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}a=Uh(n,i,d,c),a!==null&&(d=Ln(),Si(a,n,c,d),ap(a,i,c))}}function rp(n){var i=n.alternate;return n===Kt||i!==null&&i===Kt}function sp(n,i){Na=Ho=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ap(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Sn(n,a)}}var Xo={readContext:ti,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},cx={readContext:ti,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:ti,useEffect:$h,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Go(4194308,4,Qh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Go(4194308,4,n,i)},useInsertionEffect:function(n,i){return Go(4,2,n,i)},useMemo:function(n,i){var a=bi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=bi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ox.bind(null,Kt,n),[c.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:Yh,useDebugValue:lu,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=Yh(!1),i=n[0];return n=ax.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Kt,d=bi();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),hn===null)throw Error(t(349));(Wr&30)!==0||Hh(c,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,$h(Wh.bind(null,c,h,n),[n]),c.flags|=2048,Ia(9,Gh.bind(null,c,h,a,i),void 0,null),a},useId:function(){var n=bi(),i=hn.identifierPrefix;if(Yt){var a=qi,c=Xi;a=(c&~(1<<32-Ue(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=La++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=sx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ux={readContext:ti,useCallback:ep,useContext:ti,useEffect:ou,useImperativeHandle:Jh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:tp,useReducer:su,useRef:jh,useState:function(){return su(Da)},useDebugValue:lu,useDeferredValue:function(n){var i=ni();return np(i,ln.memoizedState,n)},useTransition:function(){var n=su(Da)[0],i=ni().memoizedState;return[n,i]},useMutableSource:zh,useSyncExternalStore:Vh,useId:ip,unstable_isNewReconciler:!1},dx={readContext:ti,useCallback:ep,useContext:ti,useEffect:ou,useImperativeHandle:Jh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:tp,useReducer:au,useRef:jh,useState:function(){return au(Da)},useDebugValue:lu,useDeferredValue:function(n){var i=ni();return ln===null?i.memoizedState=n:np(i,ln.memoizedState,n)},useTransition:function(){var n=au(Da)[0],i=ni().memoizedState;return[n,i]},useMutableSource:zh,useSyncExternalStore:Vh,useId:ip,unstable_isNewReconciler:!1};function xi(n,i){if(n&&n.defaultProps){i=j({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function cu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:j({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var qo={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=yr(n),h=ji(c,d);h.payload=i,a!=null&&(h.callback=a),i=xr(n,h,d),i!==null&&(Si(i,n,d,c),Oo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ln(),d=yr(n),h=ji(c,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=xr(n,h,d),i!==null&&(Si(i,n,d,c),Oo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ln(),c=yr(n),d=ji(a,c);d.tag=2,i!=null&&(d.callback=i),i=xr(n,d,c),i!==null&&(Si(i,n,c,a),Oo(i,n,c))}};function op(n,i,a,c,d,h,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,h,T):i.prototype&&i.prototype.isPureReactComponent?!Sa(a,c)||!Sa(d,h):!0}function lp(n,i,a){var c=!1,d=pr,h=i.contextType;return typeof h=="object"&&h!==null?h=ti(h):(d=kn(i)?Br:yn.current,c=i.contextTypes,h=(c=c!=null)?Ss(n,d):pr),i=new i(a,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=h),i}function cp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&qo.enqueueReplaceState(i,i.state,null)}function uu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Kc(n);var h=i.contextType;typeof h=="object"&&h!==null?d.context=ti(h):(h=kn(i)?Br:yn.current,d.context=Ss(n,h)),d.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(cu(n,i,h,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&qo.enqueueReplaceState(d,d.state,null),Bo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Rs(n,i){try{var a="",c=i;do a+=Se(c),c=c.return;while(c);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:d,digest:null}}function du(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function fu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var fx=typeof WeakMap=="function"?WeakMap:Map;function up(n,i,a){a=ji(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Jo||(Jo=!0,Cu=c),fu(n,i)},a}function dp(n,i,a){a=ji(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){fu(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){fu(n,i),typeof c!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function fp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new fx;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Ax.bind(null,n,i,a),i.then(n,n))}function hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function pp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ji(-1,1),i.tag=2,xr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var hx=C.ReactCurrentOwner,On=!1;function Nn(n,i,a,c){i.child=n===null?Ih(i,null,a,c):Ts(i,n.child,a,c)}function mp(n,i,a,c,d){a=a.render;var h=i.ref;return As(i,d),c=iu(n,i,a,c,h,d),a=ru(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,$i(n,i,d)):(Yt&&a&&zc(i),i.flags|=1,Nn(n,i,c,d),i.child)}function gp(n,i,a,c,d){if(n===null){var h=a.type;return typeof h=="function"&&!Iu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,xp(n,i,h,c,d)):(n=sl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,(n.lanes&d)===0){var T=h.memoizedProps;if(a=a.compare,a=a!==null?a:Sa,a(T,c)&&n.ref===i.ref)return $i(n,i,d)}return i.flags|=1,n=Er(h,c),n.ref=i.ref,n.return=i,i.child=n}function xp(n,i,a,c,d){if(n!==null){var h=n.memoizedProps;if(Sa(h,c)&&n.ref===i.ref)if(On=!1,i.pendingProps=c=h,(n.lanes&d)!==0)(n.flags&131072)!==0&&(On=!0);else return i.lanes=n.lanes,$i(n,i,d)}return hu(n,i,a,c,d)}function _p(n,i,a){var c=i.pendingProps,d=c.children,h=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ps,Yn),Yn|=a;else{if((a&1073741824)===0)return n=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(Ps,Yn),Yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,Gt(Ps,Yn),Yn|=c}else h!==null?(c=h.baseLanes|a,i.memoizedState=null):c=a,Gt(Ps,Yn),Yn|=c;return Nn(n,i,d,a),i.child}function vp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function hu(n,i,a,c,d){var h=kn(a)?Br:yn.current;return h=Ss(i,h),As(i,d),a=iu(n,i,a,c,h,d),c=ru(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,$i(n,i,d)):(Yt&&c&&zc(i),i.flags|=1,Nn(n,i,a,d),i.child)}function Sp(n,i,a,c,d){if(kn(a)){var h=!0;Po(i)}else h=!1;if(As(i,d),i.stateNode===null)jo(n,i),lp(i,a,c),uu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,U=i.memoizedProps;T.props=U;var V=T.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=ti(fe):(fe=kn(a)?Br:yn.current,fe=Ss(i,fe));var Me=a.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==c||V!==fe)&&cp(i,T,c,fe),gr=!1;var ye=i.memoizedState;T.state=ye,Bo(i,c,T,d),V=i.memoizedState,U!==c||ye!==V||Fn.current||gr?(typeof Me=="function"&&(cu(i,a,Me,c),V=i.memoizedState),(U=gr||op(i,a,U,c,ye,V,fe))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),T.props=c,T.state=V,T.context=fe,c=U):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Fh(n,i),U=i.memoizedProps,fe=i.type===i.elementType?U:xi(i.type,U),T.props=fe,Ee=i.pendingProps,ye=T.context,V=a.contextType,typeof V=="object"&&V!==null?V=ti(V):(V=kn(a)?Br:yn.current,V=Ss(i,V));var He=a.getDerivedStateFromProps;(Me=typeof He=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Ee||ye!==V)&&cp(i,T,c,V),gr=!1,ye=i.memoizedState,T.state=ye,Bo(i,c,T,d);var Ye=i.memoizedState;U!==Ee||ye!==Ye||Fn.current||gr?(typeof He=="function"&&(cu(i,a,He,c),Ye=i.memoizedState),(fe=gr||op(i,a,fe,c,ye,Ye,V)||!1)?(Me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ye,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ye,V)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ye),T.props=c,T.state=Ye,T.context=V,c=fe):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return pu(n,i,a,c,h,d)}function pu(n,i,a,c,d,h){vp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&wh(i,a,!1),$i(n,i,h);c=i.stateNode,hx.current=i;var U=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ts(i,n.child,null,h),i.child=Ts(i,null,U,h)):Nn(n,i,U,h),i.memoizedState=c.state,d&&wh(i,a,!0),i.child}function yp(n){var i=n.stateNode;i.pendingContext?Eh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Eh(n,i.context,!1),Zc(n,i.containerInfo)}function Mp(n,i,a,c,d){return Es(),Wc(d),i.flags|=256,Nn(n,i,a,c),i.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function gu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ep(n,i,a){var c=i.pendingProps,d=$t.current,h=!1,T=(i.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Gt($t,d&1),n===null)return Gc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,h?(c=i.mode,h=i.child,T={mode:"hidden",children:T},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=T):h=al(T,c,0,null),n=$r(n,c,a,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=gu(a),i.memoizedState=mu,n):xu(i,T));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return px(n,i,T,c,U,d,a);if(h){h=c.fallback,T=i.mode,d=n.child,U=d.sibling;var V={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=Er(d,V),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?h=Er(U,h):(h=$r(h,T,a,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,T=n.child.memoizedState,T=T===null?gu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},h.memoizedState=T,h.childLanes=n.childLanes&~a,i.memoizedState=mu,c}return h=n.child,n=h.sibling,c=Er(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function xu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Yo(n,i,a,c){return c!==null&&Wc(c),Ts(i,n.child,null,a),n=xu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function px(n,i,a,c,d,h,T){if(a)return i.flags&256?(i.flags&=-257,c=du(Error(t(422))),Yo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=al({mode:"visible",children:c.children},d,0,null),h=$r(h,d,T,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&Ts(i,n.child,null,T),i.child.memoizedState=gu(T),i.memoizedState=mu,h);if((i.mode&1)===0)return Yo(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,h=Error(t(419)),c=du(h,c,void 0),Yo(n,i,T,c)}if(U=(T&n.childLanes)!==0,On||U){if(c=hn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Yi(n,d),Si(c,n,d,-1))}return Du(),c=du(Error(t(421))),Yo(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Cx.bind(null,n),d._reactRetry=i,null):(n=h.treeContext,qn=fr(d.nextSibling),Xn=i,Yt=!0,gi=null,n!==null&&(Jn[ei++]=Xi,Jn[ei++]=qi,Jn[ei++]=zr,Xi=n.id,qi=n.overflow,zr=i),i=xu(i,c.children),i.flags|=4096,i)}function Tp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),jc(n.return,i,a)}function _u(n,i,a,c,d){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=d)}function wp(n,i,a){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(Nn(n,i,c.children,a),c=$t.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tp(n,a,i);else if(n.tag===19)Tp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt($t,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&zo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),_u(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&zo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}_u(i,!0,a,null,h);break;case"together":_u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function $i(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Er(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Er(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function mx(n,i,a){switch(i.tag){case 3:yp(i),Es();break;case 5:Bh(i);break;case 1:kn(i.type)&&Po(i);break;case 4:Zc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Gt(Fo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt($t,$t.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ep(n,i,a):(Gt($t,$t.current&1),n=$i(n,i,a),n!==null?n.sibling:null);Gt($t,$t.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return wp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Gt($t,$t.current),c)break;return null;case 22:case 23:return i.lanes=0,_p(n,i,a)}return $i(n,i,a)}var Ap,vu,Cp,Rp;Ap=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vu=function(){},Cp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Gr(Ri.current);var h=null;switch(a){case"input":d=Xe(n,d),c=Xe(n,c),h=[];break;case"select":d=j({},d,{value:void 0}),c=j({},c,{value:void 0}),h=[];break;case"textarea":d=ht(n,d),c=ht(n,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Co)}Ze(a,c);var T;a=null;for(fe in d)if(!c.hasOwnProperty(fe)&&d.hasOwnProperty(fe)&&d[fe]!=null)if(fe==="style"){var U=d[fe];for(T in U)U.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?h||(h=[]):(h=h||[]).push(fe,null));for(fe in c){var V=c[fe];if(U=d!=null?d[fe]:void 0,c.hasOwnProperty(fe)&&V!==U&&(V!=null||U!=null))if(fe==="style")if(U){for(T in U)!U.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in V)V.hasOwnProperty(T)&&U[T]!==V[T]&&(a||(a={}),a[T]=V[T])}else a||(h||(h=[]),h.push(fe,a)),a=V;else fe==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(h=h||[]).push(fe,V)):fe==="children"?typeof V!="string"&&typeof V!="number"||(h=h||[]).push(fe,""+V):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(V!=null&&fe==="onScroll"&&Wt("scroll",n),h||U===V||(h=[])):(h=h||[]).push(fe,V))}a&&(h=h||[]).push("style",a);var fe=h;(i.updateQueue=fe)&&(i.flags|=4)}},Rp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ua(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function En(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function gx(n,i,a){var c=i.pendingProps;switch(Vc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return kn(i.type)&&bo(),En(i),null;case 3:return c=i.stateNode,Cs(),Xt(Fn),Xt(yn),eu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Io(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Pu(gi),gi=null))),vu(n,i),En(i),null;case 5:Qc(i);var d=Gr(Pa.current);if(a=i.type,n!==null&&i.stateNode!=null)Cp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return En(i),null}if(n=Gr(Ri.current),Io(i)){c=i.stateNode,a=i.type;var h=i.memoizedProps;switch(c[Ci]=i,c[wa]=h,n=(i.mode&1)!==0,a){case"dialog":Wt("cancel",c),Wt("close",c);break;case"iframe":case"object":case"embed":Wt("load",c);break;case"video":case"audio":for(d=0;d<Ma.length;d++)Wt(Ma[d],c);break;case"source":Wt("error",c);break;case"img":case"image":case"link":Wt("error",c),Wt("load",c);break;case"details":Wt("toggle",c);break;case"input":ut(c,h),Wt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Wt("invalid",c);break;case"textarea":z(c,h),Wt("invalid",c)}Ze(a,h),d=null;for(var T in h)if(h.hasOwnProperty(T)){var U=h[T];T==="children"?typeof U=="string"?c.textContent!==U&&(h.suppressHydrationWarning!==!0&&Ao(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&Ao(c.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Wt("scroll",c)}switch(a){case"input":Be(c),gt(c,h,!0);break;case"textarea":Be(c),xt(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=Co)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Ci]=i,n[wa]=c,Ap(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ie(a,c),a){case"dialog":Wt("cancel",n),Wt("close",n),d=c;break;case"iframe":case"object":case"embed":Wt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ma.length;d++)Wt(Ma[d],n);d=c;break;case"source":Wt("error",n),d=c;break;case"img":case"image":case"link":Wt("error",n),Wt("load",n),d=c;break;case"details":Wt("toggle",n),d=c;break;case"input":ut(n,c),d=Xe(n,c),Wt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=j({},c,{value:void 0}),Wt("invalid",n);break;case"textarea":z(n,c),d=ht(n,c),Wt("invalid",n);break;default:d=c}Ze(a,d),U=d;for(h in U)if(U.hasOwnProperty(h)){var V=U[h];h==="style"?xe(n,V):h==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&re(n,V)):h==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&he(n,V):typeof V=="number"&&he(n,""+V):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?V!=null&&h==="onScroll"&&Wt("scroll",n):V!=null&&O(n,h,V,T))}switch(a){case"input":Be(n),gt(n,c,!1);break;case"textarea":Be(n),xt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+de(c.value));break;case"select":n.multiple=!!c.multiple,h=c.value,h!=null?nt(n,!!c.multiple,h,!1):c.defaultValue!=null&&nt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Co)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(n&&i.stateNode!=null)Rp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Gr(Pa.current),Gr(Ri.current),Io(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ci]=i,(h=c.nodeValue!==a)&&(n=Xn,n!==null))switch(n.tag){case 3:Ao(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ao(c.nodeValue,a,(n.mode&1)!==0)}h&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ci]=i,i.stateNode=c}return En(i),null;case 13:if(Xt($t),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Nh(),Es(),i.flags|=98560,h=!1;else if(h=Io(i),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[Ci]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),h=!1}else gi!==null&&(Pu(gi),gi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||($t.current&1)!==0?cn===0&&(cn=3):Du())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return Cs(),vu(n,i),n===null&&Ea(i.stateNode.containerInfo),En(i),null;case 10:return Yc(i.type._context),En(i),null;case 17:return kn(i.type)&&bo(),En(i),null;case 19:if(Xt($t),h=i.memoizedState,h===null)return En(i),null;if(c=(i.flags&128)!==0,T=h.rendering,T===null)if(c)Ua(h,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=zo(n),T!==null){for(i.flags|=128,Ua(h,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)h=a,n=c,h.flags&=14680066,T=h.alternate,T===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=T.childLanes,h.lanes=T.lanes,h.child=T.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=T.memoizedProps,h.memoizedState=T.memoizedState,h.updateQueue=T.updateQueue,h.type=T.type,n=T.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Gt($t,$t.current&1|2),i.child}n=n.sibling}h.tail!==null&&jt()>Ns&&(i.flags|=128,c=!0,Ua(h,!1),i.lanes=4194304)}else{if(!c)if(n=zo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ua(h,!0),h.tail===null&&h.tailMode==="hidden"&&!T.alternate&&!Yt)return En(i),null}else 2*jt()-h.renderingStartTime>Ns&&a!==1073741824&&(i.flags|=128,c=!0,Ua(h,!1),i.lanes=4194304);h.isBackwards?(T.sibling=i.child,i.child=T):(a=h.last,a!==null?a.sibling=T:i.child=T,h.last=T)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=jt(),i.sibling=null,a=$t.current,Gt($t,c?a&1|2:a&1),i):(En(i),null);case 22:case 23:return Lu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function xx(n,i){switch(Vc(i),i.tag){case 1:return kn(i.type)&&bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),Xt(Fn),Xt(yn),eu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Qc(i),null;case 13:if(Xt($t),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt($t),null;case 4:return Cs(),null;case 10:return Yc(i.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var $o=!1,Tn=!1,_x=typeof WeakSet=="function"?WeakSet:Set,We=null;function bs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Jt(n,i,c)}else a.current=null}function Su(n,i,a){try{a()}catch(c){Jt(n,i,c)}}var bp=!1;function vx(n,i){if(Lc=mo,n=oh(),Tc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var T=0,U=-1,V=-1,fe=0,Me=0,Ee=n,ye=null;t:for(;;){for(var He;Ee!==a||d!==0&&Ee.nodeType!==3||(U=T+d),Ee!==h||c!==0&&Ee.nodeType!==3||(V=T+c),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(He=Ee.firstChild)!==null;)ye=Ee,Ee=He;for(;;){if(Ee===n)break t;if(ye===a&&++fe===d&&(U=T),ye===h&&++Me===c&&(V=T),(He=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=He}a=U===-1||V===-1?null:{start:U,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dc={focusedElem:n,selectionRange:a},mo=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var $e=Ye.memoizedProps,nn=Ye.memoizedState,se=i.stateNode,X=se.getSnapshotBeforeUpdate(i.elementType===i.type?$e:xi(i.type,$e),nn);se.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Jt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return Ye=bp,bp=!1,Ye}function Fa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var h=d.destroy;d.destroy=void 0,h!==void 0&&Su(i,a,h)}d=d.next}while(d!==c)}}function Ko(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function yu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Pp(n){var i=n.alternate;i!==null&&(n.alternate=null,Pp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ci],delete i[wa],delete i[kc],delete i[tx],delete i[nx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Np(n){return n.tag===5||n.tag===3||n.tag===4}function Lp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Np(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Co));else if(c!==4&&(n=n.child,n!==null))for(Mu(n,i,a),n=n.sibling;n!==null;)Mu(n,i,a),n=n.sibling}function Eu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Eu(n,i,a),n=n.sibling;n!==null;)Eu(n,i,a),n=n.sibling}var xn=null,_i=!1;function _r(n,i,a){for(a=a.child;a!==null;)Dp(n,i,a),a=a.sibling}function Dp(n,i,a){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(ie,a)}catch{}switch(a.tag){case 5:Tn||bs(a,i);case 6:var c=xn,d=_i;xn=null,_r(n,i,a),xn=c,_i=d,xn!==null&&(_i?(n=xn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):xn.removeChild(a.stateNode));break;case 18:xn!==null&&(_i?(n=xn,a=a.stateNode,n.nodeType===8?Fc(n.parentNode,a):n.nodeType===1&&Fc(n,a),pa(n)):Fc(xn,a.stateNode));break;case 4:c=xn,d=_i,xn=a.stateNode.containerInfo,_i=!0,_r(n,i,a),xn=c,_i=d;break;case 0:case 11:case 14:case 15:if(!Tn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,T=h.destroy;h=h.tag,T!==void 0&&((h&2)!==0||(h&4)!==0)&&Su(a,i,T),d=d.next}while(d!==c)}_r(n,i,a);break;case 1:if(!Tn&&(bs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Jt(a,i,U)}_r(n,i,a);break;case 21:_r(n,i,a);break;case 22:a.mode&1?(Tn=(c=Tn)||a.memoizedState!==null,_r(n,i,a),Tn=c):_r(n,i,a);break;default:_r(n,i,a)}}function Ip(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new _x),i.forEach(function(c){var d=Rx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function vi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var h=n,T=i,U=T;e:for(;U!==null;){switch(U.tag){case 5:xn=U.stateNode,_i=!1;break e;case 3:xn=U.stateNode.containerInfo,_i=!0;break e;case 4:xn=U.stateNode.containerInfo,_i=!0;break e}U=U.return}if(xn===null)throw Error(t(160));Dp(h,T,d),xn=null,_i=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(fe){Jt(d,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Up(i,n),i=i.sibling}function Up(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(i,n),Pi(n),c&4){try{Fa(3,n,n.return),Ko(3,n)}catch($e){Jt(n,n.return,$e)}try{Fa(5,n,n.return)}catch($e){Jt(n,n.return,$e)}}break;case 1:vi(i,n),Pi(n),c&512&&a!==null&&bs(a,a.return);break;case 5:if(vi(i,n),Pi(n),c&512&&a!==null&&bs(a,a.return),n.flags&32){var d=n.stateNode;try{he(d,"")}catch($e){Jt(n,n.return,$e)}}if(c&4&&(d=n.stateNode,d!=null)){var h=n.memoizedProps,T=a!==null?a.memoizedProps:h,U=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&Mt(d,h),Ie(U,T);var fe=Ie(U,h);for(T=0;T<V.length;T+=2){var Me=V[T],Ee=V[T+1];Me==="style"?xe(d,Ee):Me==="dangerouslySetInnerHTML"?re(d,Ee):Me==="children"?he(d,Ee):O(d,Me,Ee,fe)}switch(U){case"input":lt(d,h);break;case"textarea":Ut(d,h);break;case"select":var ye=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var He=h.value;He!=null?nt(d,!!h.multiple,He,!1):ye!==!!h.multiple&&(h.defaultValue!=null?nt(d,!!h.multiple,h.defaultValue,!0):nt(d,!!h.multiple,h.multiple?[]:"",!1))}d[wa]=h}catch($e){Jt(n,n.return,$e)}}break;case 6:if(vi(i,n),Pi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,h=n.memoizedProps;try{d.nodeValue=h}catch($e){Jt(n,n.return,$e)}}break;case 3:if(vi(i,n),Pi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{pa(i.containerInfo)}catch($e){Jt(n,n.return,$e)}break;case 4:vi(i,n),Pi(n);break;case 13:vi(i,n),Pi(n),d=n.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Au=jt())),c&4&&Ip(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Tn=(fe=Tn)||Me,vi(i,n),Tn=fe):vi(i,n),Pi(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Me&&(n.mode&1)!==0)for(We=n,Me=n.child;Me!==null;){for(Ee=We=Me;We!==null;){switch(ye=We,He=ye.child,ye.tag){case 0:case 11:case 14:case 15:Fa(4,ye,ye.return);break;case 1:bs(ye,ye.return);var Ye=ye.stateNode;if(typeof Ye.componentWillUnmount=="function"){c=ye,a=ye.return;try{i=c,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch($e){Jt(c,a,$e)}}break;case 5:bs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Op(Ee);continue}}He!==null?(He.return=ye,We=He):Op(Ee)}Me=Me.sibling}e:for(Me=null,Ee=n;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{d=Ee.stateNode,fe?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Ee.stateNode,V=Ee.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=me("display",T))}catch($e){Jt(n,n.return,$e)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=fe?"":Ee.memoizedProps}catch($e){Jt(n,n.return,$e)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:vi(i,n),Pi(n),c&4&&Ip(n);break;case 21:break;default:vi(i,n),Pi(n)}}function Pi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Np(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var h=Lp(n);Eu(n,h,d);break;case 3:case 4:var T=c.stateNode.containerInfo,U=Lp(n);Mu(n,U,T);break;default:throw Error(t(161))}}catch(V){Jt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Sx(n,i,a){We=n,Fp(n)}function Fp(n,i,a){for(var c=(n.mode&1)!==0;We!==null;){var d=We,h=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||$o;if(!T){var U=d.alternate,V=U!==null&&U.memoizedState!==null||Tn;U=$o;var fe=Tn;if($o=T,(Tn=V)&&!fe)for(We=d;We!==null;)T=We,V=T.child,T.tag===22&&T.memoizedState!==null?Bp(d):V!==null?(V.return=T,We=V):Bp(d);for(;h!==null;)We=h,Fp(h),h=h.sibling;We=d,$o=U,Tn=fe}kp(n)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,We=h):kp(n)}}function kp(n){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Tn||Ko(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Tn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:xi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Oh(i,h,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Oh(i,T,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Me=fe.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&pa(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||i.flags&512&&yu(i)}catch(ye){Jt(i,i.return,ye)}}if(i===n){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function Op(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function Bp(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ko(4,i)}catch(V){Jt(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(V){Jt(i,d,V)}}var h=i.return;try{yu(i)}catch(V){Jt(i,h,V)}break;case 5:var T=i.return;try{yu(i)}catch(V){Jt(i,T,V)}}}catch(V){Jt(i,i.return,V)}if(i===n){We=null;break}var U=i.sibling;if(U!==null){U.return=i.return,We=U;break}We=i.return}}var yx=Math.ceil,Zo=C.ReactCurrentDispatcher,Tu=C.ReactCurrentOwner,ii=C.ReactCurrentBatchConfig,Rt=0,hn=null,sn=null,_n=0,Yn=0,Ps=hr(0),cn=0,ka=null,Xr=0,Qo=0,wu=0,Oa=null,Bn=null,Au=0,Ns=1/0,Ki=null,Jo=!1,Cu=null,vr=null,el=!1,Sr=null,tl=0,Ba=0,Ru=null,nl=-1,il=0;function Ln(){return(Rt&6)!==0?jt():nl!==-1?nl:nl=jt()}function yr(n){return(n.mode&1)===0?1:(Rt&2)!==0&&_n!==0?_n&-_n:rx.transition!==null?(il===0&&(il=on()),il):(n=_t,n!==0||(n=window.event,n=n===void 0?16:Vf(n.type)),n)}function Si(n,i,a,c){if(50<Ba)throw Ba=0,Ru=null,Error(t(185));tn(n,a,c),((Rt&2)===0||n!==hn)&&(n===hn&&((Rt&2)===0&&(Qo|=a),cn===4&&Mr(n,_n)),zn(n,c),a===1&&Rt===0&&(i.mode&1)===0&&(Ns=jt()+500,No&&mr()))}function zn(n,i){var a=n.callbackNode;Vt(n,i);var c=Et(n,n===hn?_n:0);if(c===0)a!==null&&oa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&oa(a),i===1)n.tag===0?ix(Vp.bind(null,n)):Ah(Vp.bind(null,n)),J0(function(){(Rt&6)===0&&mr()}),a=null;else{switch(di(c)){case 1:a=la;break;case 4:a=ca;break;case 16:a=w;break;case 536870912:a=ue;break;default:a=w}a=$p(a,zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function zp(n,i){if(nl=-1,il=0,(Rt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ls()&&n.callbackNode!==a)return null;var c=Et(n,n===hn?_n:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=rl(n,c);else{i=c;var d=Rt;Rt|=2;var h=Gp();(hn!==n||_n!==i)&&(Ki=null,Ns=jt()+500,Yr(n,i));do try{Tx();break}catch(U){Hp(n,U)}while(!0);qc(),Zo.current=h,Rt=d,sn!==null?i=0:(hn=null,_n=0,i=cn)}if(i!==0){if(i===2&&(d=It(n),d!==0&&(c=d,i=bu(n,d))),i===1)throw a=ka,Yr(n,0),Mr(n,c),zn(n,jt()),a;if(i===6)Mr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Mx(d)&&(i=rl(n,c),i===2&&(h=It(n),h!==0&&(c=h,i=bu(n,h))),i===1))throw a=ka,Yr(n,0),Mr(n,c),zn(n,jt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:jr(n,Bn,Ki);break;case 3:if(Mr(n,c),(c&130023424)===c&&(i=Au+500-jt(),10<i)){if(Et(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Uc(jr.bind(null,n,Bn,Ki),i);break}jr(n,Bn,Ki);break;case 4:if(Mr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Ue(c);h=1<<T,T=i[T],T>d&&(d=T),c&=~h}if(c=d,c=jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*yx(c/1960))-c,10<c){n.timeoutHandle=Uc(jr.bind(null,n,Bn,Ki),c);break}jr(n,Bn,Ki);break;case 5:jr(n,Bn,Ki);break;default:throw Error(t(329))}}}return zn(n,jt()),n.callbackNode===a?zp.bind(null,n):null}function bu(n,i){var a=Oa;return n.current.memoizedState.isDehydrated&&(Yr(n,i).flags|=256),n=rl(n,i),n!==2&&(i=Bn,Bn=a,i!==null&&Pu(i)),n}function Pu(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function Mx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],h=d.getSnapshot;d=d.value;try{if(!mi(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Mr(n,i){for(i&=~wu,i&=~Qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ue(i),c=1<<a;n[a]=-1,i&=~c}}function Vp(n){if((Rt&6)!==0)throw Error(t(327));Ls();var i=Et(n,0);if((i&1)===0)return zn(n,jt()),null;var a=rl(n,i);if(n.tag!==0&&a===2){var c=It(n);c!==0&&(i=c,a=bu(n,c))}if(a===1)throw a=ka,Yr(n,0),Mr(n,i),zn(n,jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,jr(n,Bn,Ki),zn(n,jt()),null}function Nu(n,i){var a=Rt;Rt|=1;try{return n(i)}finally{Rt=a,Rt===0&&(Ns=jt()+500,No&&mr())}}function qr(n){Sr!==null&&Sr.tag===0&&(Rt&6)===0&&Ls();var i=Rt;Rt|=1;var a=ii.transition,c=_t;try{if(ii.transition=null,_t=1,n)return n()}finally{_t=c,ii.transition=a,Rt=i,(Rt&6)===0&&mr()}}function Lu(){Yn=Ps.current,Xt(Ps)}function Yr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Q0(a)),sn!==null)for(a=sn.return;a!==null;){var c=a;switch(Vc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bo();break;case 3:Cs(),Xt(Fn),Xt(yn),eu();break;case 5:Qc(c);break;case 4:Cs();break;case 13:Xt($t);break;case 19:Xt($t);break;case 10:Yc(c.type._context);break;case 22:case 23:Lu()}a=a.return}if(hn=n,sn=n=Er(n.current,null),_n=Yn=i,cn=0,ka=null,wu=Qo=Xr=0,Bn=Oa=null,Hr!==null){for(i=0;i<Hr.length;i++)if(a=Hr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,h=a.pending;if(h!==null){var T=h.next;h.next=d,c.next=T}a.pending=c}Hr=null}return n}function Hp(n,i){do{var a=sn;try{if(qc(),Vo.current=Xo,Ho){for(var c=Kt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ho=!1}if(Wr=0,fn=ln=Kt=null,Na=!1,La=0,Tu.current=null,a===null||a.return===null){cn=1,ka=i,sn=null;break}e:{var h=n,T=a.return,U=a,V=i;if(i=_n,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var fe=V,Me=U,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var He=hp(T);if(He!==null){He.flags&=-257,pp(He,T,U,h,i),He.mode&1&&fp(h,fe,i),i=He,V=fe;var Ye=i.updateQueue;if(Ye===null){var $e=new Set;$e.add(V),i.updateQueue=$e}else Ye.add(V);break e}else{if((i&1)===0){fp(h,fe,i),Du();break e}V=Error(t(426))}}else if(Yt&&U.mode&1){var nn=hp(T);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),pp(nn,T,U,h,i),Wc(Rs(V,U));break e}}h=V=Rs(V,U),cn!==4&&(cn=2),Oa===null?Oa=[h]:Oa.push(h),h=T;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var se=up(h,V,i);kh(h,se);break e;case 1:U=V;var X=h.type,le=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(vr===null||!vr.has(le)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ae=dp(h,U,i);kh(h,Ae);break e}}h=h.return}while(h!==null)}Xp(a)}catch(tt){i=tt,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Gp(){var n=Zo.current;return Zo.current=Xo,n===null?Xo:n}function Du(){(cn===0||cn===3||cn===2)&&(cn=4),hn===null||(Xr&268435455)===0&&(Qo&268435455)===0||Mr(hn,_n)}function rl(n,i){var a=Rt;Rt|=2;var c=Gp();(hn!==n||_n!==i)&&(Ki=null,Yr(n,i));do try{Ex();break}catch(d){Hp(n,d)}while(!0);if(qc(),Rt=a,Zo.current=c,sn!==null)throw Error(t(261));return hn=null,_n=0,cn}function Ex(){for(;sn!==null;)Wp(sn)}function Tx(){for(;sn!==null&&!ho();)Wp(sn)}function Wp(n){var i=jp(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,i===null?Xp(n):sn=i,Tu.current=null}function Xp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=gx(a,i,Yn),a!==null){sn=a;return}}else{if(a=xx(a,i),a!==null){a.flags&=32767,sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=n}while(i!==null);cn===0&&(cn=5)}function jr(n,i,a){var c=_t,d=ii.transition;try{ii.transition=null,_t=1,wx(n,i,a,c)}finally{ii.transition=d,_t=c}return null}function wx(n,i,a,c){do Ls();while(Sr!==null);if((Rt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=a.lanes|a.childLanes;if(Tt(n,h),n===hn&&(sn=hn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,$p(w,function(){return Ls(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=ii.transition,ii.transition=null;var T=_t;_t=1;var U=Rt;Rt|=4,Tu.current=null,vx(n,a),Up(a,n),X0(Dc),mo=!!Lc,Dc=Lc=null,n.current=a,Sx(a),dc(),Rt=U,_t=T,ii.transition=h}else n.current=a;if(el&&(el=!1,Sr=n,tl=d),h=n.pendingLanes,h===0&&(vr=null),ke(a.stateNode),zn(n,jt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Jo)throw Jo=!1,n=Cu,Cu=null,n;return(tl&1)!==0&&n.tag!==0&&Ls(),h=n.pendingLanes,(h&1)!==0?n===Ru?Ba++:(Ba=0,Ru=n):Ba=0,mr(),null}function Ls(){if(Sr!==null){var n=di(tl),i=ii.transition,a=_t;try{if(ii.transition=null,_t=16>n?16:n,Sr===null)var c=!1;else{if(n=Sr,Sr=null,tl=0,(Rt&6)!==0)throw Error(t(331));var d=Rt;for(Rt|=4,We=n.current;We!==null;){var h=We,T=h.child;if((We.flags&16)!==0){var U=h.deletions;if(U!==null){for(var V=0;V<U.length;V++){var fe=U[V];for(We=fe;We!==null;){var Me=We;switch(Me.tag){case 0:case 11:case 15:Fa(8,Me,h)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,We=Ee;else for(;We!==null;){Me=We;var ye=Me.sibling,He=Me.return;if(Pp(Me),Me===fe){We=null;break}if(ye!==null){ye.return=He,We=ye;break}We=He}}}var Ye=h.alternate;if(Ye!==null){var $e=Ye.child;if($e!==null){Ye.child=null;do{var nn=$e.sibling;$e.sibling=null,$e=nn}while($e!==null)}}We=h}}if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,We=T;else e:for(;We!==null;){if(h=We,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Fa(9,h,h.return)}var se=h.sibling;if(se!==null){se.return=h.return,We=se;break e}We=h.return}}var X=n.current;for(We=X;We!==null;){T=We;var le=T.child;if((T.subtreeFlags&2064)!==0&&le!==null)le.return=T,We=le;else e:for(T=X;We!==null;){if(U=We,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ko(9,U)}}catch(tt){Jt(U,U.return,tt)}if(U===T){We=null;break e}var Ae=U.sibling;if(Ae!==null){Ae.return=U.return,We=Ae;break e}We=U.return}}if(Rt=d,mr(),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(ie,n)}catch{}c=!0}return c}finally{_t=a,ii.transition=i}}return!1}function qp(n,i,a){i=Rs(a,i),i=up(n,i,1),n=xr(n,i,1),i=Ln(),n!==null&&(tn(n,1,i),zn(n,i))}function Jt(n,i,a){if(n.tag===3)qp(n,n,a);else for(;i!==null;){if(i.tag===3){qp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(vr===null||!vr.has(c))){n=Rs(a,n),n=dp(i,n,1),i=xr(i,n,1),n=Ln(),i!==null&&(tn(i,1,n),zn(i,n));break}}i=i.return}}function Ax(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&a,hn===n&&(_n&a)===a&&(cn===4||cn===3&&(_n&130023424)===_n&&500>jt()-Au?Yr(n,0):wu|=a),zn(n,i)}function Yp(n,i){i===0&&((n.mode&1)===0?i=1:(i=pt,pt<<=1,(pt&130023424)===0&&(pt=4194304)));var a=Ln();n=Yi(n,i),n!==null&&(tn(n,i,a),zn(n,a))}function Cx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Yp(n,a)}function Rx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Yp(n,a)}var jp;jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Fn.current)On=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return On=!1,mx(n,i,a);On=(n.flags&131072)!==0}else On=!1,Yt&&(i.flags&1048576)!==0&&Ch(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;jo(n,i),n=i.pendingProps;var d=Ss(i,yn.current);As(i,a),d=iu(null,i,c,n,d,a);var h=ru();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(h=!0,Po(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Kc(i),d.updater=qo,i.stateNode=d,d._reactInternals=i,uu(i,c,n,a),i=pu(null,i,c,!0,h,a)):(i.tag=0,Yt&&h&&zc(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(jo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Px(c),n=xi(c,n),d){case 0:i=hu(null,i,c,n,a);break e;case 1:i=Sp(null,i,c,n,a);break e;case 11:i=mp(null,i,c,n,a);break e;case 14:i=gp(null,i,c,xi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),hu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),Sp(n,i,c,d,a);case 3:e:{if(yp(i),n===null)throw Error(t(387));c=i.pendingProps,h=i.memoizedState,d=h.element,Fh(n,i),Bo(i,c,null,a);var T=i.memoizedState;if(c=T.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Rs(Error(t(423)),i),i=Mp(n,i,c,a,d);break e}else if(c!==d){d=Rs(Error(t(424)),i),i=Mp(n,i,c,a,d);break e}else for(qn=fr(i.stateNode.containerInfo.firstChild),Xn=i,Yt=!0,gi=null,a=Ih(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Es(),c===d){i=$i(n,i,a);break e}Nn(n,i,c,a)}i=i.child}return i;case 5:return Bh(i),n===null&&Gc(i),c=i.type,d=i.pendingProps,h=n!==null?n.memoizedProps:null,T=d.children,Ic(c,d)?T=null:h!==null&&Ic(c,h)&&(i.flags|=32),vp(n,i),Nn(n,i,T,a),i.child;case 6:return n===null&&Gc(i),null;case 13:return Ep(n,i,a);case 4:return Zc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ts(i,null,c,a):Nn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),mp(n,i,c,d,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,T=d.value,Gt(Fo,c._currentValue),c._currentValue=T,h!==null)if(mi(h.value,T)){if(h.children===d.children&&!Fn.current){i=$i(n,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){T=h.child;for(var V=U.firstContext;V!==null;){if(V.context===c){if(h.tag===1){V=ji(-1,a&-a),V.tag=2;var fe=h.updateQueue;if(fe!==null){fe=fe.shared;var Me=fe.pending;Me===null?V.next=V:(V.next=Me.next,Me.next=V),fe.pending=V}}h.lanes|=a,V=h.alternate,V!==null&&(V.lanes|=a),jc(h.return,a,i),U.lanes|=a;break}V=V.next}}else if(h.tag===10)T=h.type===i.type?null:h.child;else if(h.tag===18){if(T=h.return,T===null)throw Error(t(341));T.lanes|=a,U=T.alternate,U!==null&&(U.lanes|=a),jc(T,a,i),T=h.sibling}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===i){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}Nn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,As(i,a),d=ti(d),c=c(d),i.flags|=1,Nn(n,i,c,a),i.child;case 14:return c=i.type,d=xi(c,i.pendingProps),d=xi(c.type,d),gp(n,i,c,d,a);case 15:return xp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),jo(n,i),i.tag=1,kn(c)?(n=!0,Po(i)):n=!1,As(i,a),lp(i,c,d),uu(i,c,d,a),pu(null,i,c,!0,n,a);case 19:return wp(n,i,a);case 22:return _p(n,i,a)}throw Error(t(156,i.tag))};function $p(n,i){return kr(n,i)}function bx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,i,a,c){return new bx(n,i,a,c)}function Iu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Px(n){if(typeof n=="function")return Iu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===Z)return 14}return 2}function Er(n,i){var a=n.alternate;return a===null?(a=ri(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function sl(n,i,a,c,d,h){var T=2;if(c=n,typeof n=="function")Iu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return $r(a.children,d,h,i);case E:T=8,d|=8;break;case D:return n=ri(12,a,i,d|2),n.elementType=D,n.lanes=h,n;case oe:return n=ri(13,a,i,d),n.elementType=oe,n.lanes=h,n;case W:return n=ri(19,a,i,d),n.elementType=W,n.lanes=h,n;case ne:return al(a,d,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:T=10;break e;case q:T=9;break e;case Q:T=11;break e;case Z:T=14;break e;case pe:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ri(T,a,i,d),i.elementType=n,i.type=c,i.lanes=h,i}function $r(n,i,a,c){return n=ri(7,n,c,i),n.lanes=a,n}function al(n,i,a,c){return n=ri(22,n,c,i),n.elementType=ne,n.lanes=a,n.stateNode={isHidden:!1},n}function Uu(n,i,a){return n=ri(6,n,null,i),n.lanes=a,n}function Fu(n,i,a){return i=ri(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Nx(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ve(0),this.expirationTimes=Ve(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ku(n,i,a,c,d,h,T,U,V){return n=new Nx(n,i,a,U,V),i===1?(i=1,h===!0&&(i|=8)):i=0,h=ri(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kc(h),n}function Lx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Kp(n){if(!n)return pr;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(kn(a))return Th(n,a,i)}return i}function Zp(n,i,a,c,d,h,T,U,V){return n=ku(a,c,!0,n,d,h,T,U,V),n.context=Kp(null),a=n.current,c=Ln(),d=yr(a),h=ji(c,d),h.callback=i??null,xr(a,h,d),n.current.lanes=d,tn(n,d,c),zn(n,c),n}function ol(n,i,a,c){var d=i.current,h=Ln(),T=yr(d);return a=Kp(a),i.context===null?i.context=a:i.pendingContext=a,i=ji(h,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=xr(d,i,T),n!==null&&(Si(n,d,T,h),Oo(n,d,T)),T}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Qp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ou(n,i){Qp(n,i),(n=n.alternate)&&Qp(n,i)}function Dx(){return null}var Jp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bu(n){this._internalRoot=n}cl.prototype.render=Bu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},cl.prototype.unmount=Bu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){ol(null,n,null,null)}),i[Gi]=null}};function cl(n){this._internalRoot=n}cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=fi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<cr.length&&i!==0&&i<cr[a].priority;a++);cr.splice(a,0,n),a===0&&Bf(n)}};function zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function em(){}function Ix(n,i,a,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var fe=ll(T);h.call(fe)}}var T=Zp(i,c,n,0,null,!1,!1,"",em);return n._reactRootContainer=T,n[Gi]=T.current,Ea(n.nodeType===8?n.parentNode:n),qr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var fe=ll(V);U.call(fe)}}var V=ku(n,0,!1,null,null,!1,!1,"",em);return n._reactRootContainer=V,n[Gi]=V.current,Ea(n.nodeType===8?n.parentNode:n),qr(function(){ol(i,V,a,c)}),V}function dl(n,i,a,c,d){var h=a._reactRootContainer;if(h){var T=h;if(typeof d=="function"){var U=d;d=function(){var V=ll(T);U.call(V)}}ol(i,T,n,d)}else T=Ix(a,i,n,d,c);return ll(T)}Hi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ge(i.pendingLanes);a!==0&&(Sn(i,a|1),zn(i,jt()),(Rt&6)===0&&(Ns=jt()+500,mr()))}break;case 13:qr(function(){var c=Yi(n,1);if(c!==null){var d=Ln();Si(c,n,1,d)}}),Ou(n,1)}},Lt=function(n){if(n.tag===13){var i=Yi(n,134217728);if(i!==null){var a=Ln();Si(i,n,134217728,a)}Ou(n,134217728)}},qt=function(n){if(n.tag===13){var i=yr(n),a=Yi(n,i);if(a!==null){var c=Ln();Si(a,n,i,c)}Ou(n,i)}},fi=function(){return _t},Ft=function(n,i){var a=_t;try{return _t=n,i()}finally{_t=a}},it=function(n,i,a){switch(i){case"input":if(lt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ro(c);if(!d)throw Error(t(90));Ce(c),lt(c,d)}}}break;case"textarea":Ut(n,a);break;case"select":i=a.value,i!=null&&nt(n,!!a.multiple,i,!1)}},ze=Nu,_e=qr;var Ux={usingClientEntryPoint:!1,Events:[Aa,_s,Ro,ge,Le,Nu]},za={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fx={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fr(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||Dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{ie=fl.inject(Fx),ee=fl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ux,Vn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(i))throw Error(t(200));return Lx(n,i,null,a)},Vn.createRoot=function(n,i){if(!zu(n))throw Error(t(299));var a=!1,c="",d=Jp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ku(n,1,!1,null,null,a,!1,c,d),n[Gi]=i.current,Ea(n.nodeType===8?n.parentNode:n),new Bu(i)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Fr(i),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return qr(n)},Vn.hydrate=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!0,a)},Vn.hydrateRoot=function(n,i,a){if(!zu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,h="",T=Jp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Zp(i,null,n,1,a??null,d,!1,h,T),n[Gi]=i.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new cl(i)},Vn.render=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!1,a)},Vn.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){dl(null,null,n,!1,function(){n._reactRootContainer=null,n[Gi]=null})}),!0):!1},Vn.unstable_batchedUpdates=Nu,Vn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ul(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return dl(n,i,a,!1,c)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var lm;function Yx(){if(lm)return Wu.exports;lm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wu.exports=qx(),Wu.exports}var cm;function jx(){if(cm)return hl;cm=1;var s=Yx();return hl.createRoot=s.createRoot,hl.hydrateRoot=s.hydrateRoot,hl}var $x=jx();const Kx=mg($x);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Ot.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},p)=>Ot.createElement("svg",{ref:p,...Qx,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:gg("lucide",o),...f},[...u.map(([m,_])=>Ot.createElement(m,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=(s,e)=>{const t=Ot.forwardRef(({className:r,...o},l)=>Ot.createElement(Jx,{ref:l,iconNode:e,className:gg(`lucide-${Zx(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=rn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=rn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=rn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=rn("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=rn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=rn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=rn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=rn("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=rn("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=rn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=rn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=rn("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=rn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=rn("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=rn("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=rn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=rn("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=rn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=rn("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=rn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=rn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]),jn={profile:{role:"Full-Stack Developer",email:"biamtiero.kalman@gmail.com",github:"https://github.com/biamtiero",linkedin:"https://linkedin.com/in/biamtiero",instagram:"https://instagram.com/biamtiero"},skills:[{id:"frontend",title:"Frontend & Interactive 3D",subtitle:"Antarmuka Responsif, Cepat & Mengesankan",accentHex:"#38BDF8",badgeClass:"text-sky-400 border-sky-500/30 bg-sky-500/10",description:"Merancang antarmuka modern dengan komponen modular, state terprediksi, serta integrasi grafis WebGL / Three.js yang tetap ringan di berbagai perangkat.",items:[{name:"React & Next.js",role:"UI Architecture & SSR",exp:"Advanced"},{name:"TypeScript & ES6+",role:"Type-Safe Logic",exp:"Advanced"},{name:"Tailwind CSS & Motion",role:"Modern Styling & Animation",exp:"Advanced"},{name:"Three.js / WebGL",role:"Interactive 3D Assets",exp:"Intermediate-Adv"}]},{id:"backend",title:"Backend & API Architecture",subtitle:"Logika Server Andal, Aman & Mudah Diskalakan",accentHex:"#34D399",badgeClass:"text-emerald-400 border-emerald-500/30 bg-emerald-500/10",description:"Membangun layanan backend, REST/GraphQL API, autentikasi berlapis, dan integrasi AI yang cepat serta mudah dipelihara.",items:[{name:"Node.js & Express",role:"REST API & Microservices",exp:"Advanced"},{name:"Python & FastAPI",role:"Backend & AI Integration",exp:"Advanced"},{name:"Authentication & Security",role:"JWT, OAuth2 & RBAC",exp:"Advanced"},{name:"Real-Time WebSockets",role:"Live Sync & Notifications",exp:"Intermediate-Adv"}]},{id:"database",title:"Database, Cloud & DevOps",subtitle:"Penyimpanan Data Terstruktur & Deployment Modern",accentHex:"#818CF8",badgeClass:"text-indigo-400 border-indigo-500/30 bg-indigo-500/10",description:"Memodelkan basis data relasional maupun vektor, mengoptimalkan performa kueri, serta mengotomatisasi proses deployment ke cloud.",items:[{name:"PostgreSQL & MySQL",role:"Relational Database Design",exp:"Advanced"},{name:"Prisma ORM & Redis",role:"Type-Safe Query & Caching",exp:"Advanced"},{name:"Git, GitHub & Docker",role:"Version Control & Containers",exp:"Advanced"},{name:"Vercel / Cloud Hosting",role:"CI/CD & Production Deploy",exp:"Advanced"}]}],projects:[{id:"proj-1",code:"PROJECT 01",title:"NexaFlow — Workspace Manajemen Proyek & Kolaborasi Tim",category:"Full-Stack Web App",year:"2026",accentHex:"#38BDF8",summary:"Platform kolaborasi tim modern dengan papan Kanban interaktif, pelacakan progres real-time, analitik sprint, dan manajemen dokumen terpusat.",highlights:["Interaksi drag-and-drop mulus dengan pembaruan status real-time","Arsitektur full-stack TypeScript dengan waktu respons API < 35ms"],techStack:["Next.js","TypeScript","Tailwind CSS","Node.js","PostgreSQL"],demoUrl:"https://github.com/biamtiero",repoUrl:"https://github.com/biamtiero"},{id:"proj-2",code:"PROJECT 02",title:"Lumina Commerce — Platform E-Commerce & Dashboard Inventaris",category:"E-Commerce Platform",year:"2025",accentHex:"#34D399",summary:"Aplikasi toko online berkecepatan tinggi dengan fitur pencarian instan, keranjang belanja persisten, integrasi payment gateway, dan panel admin lengkap.",highlights:["Skor performa Google Lighthouse 99/100 di perangkat mobile & desktop","Manajemen stok otomatis dan laporan penjualan visual real-time"],techStack:["React","TypeScript","Prisma ORM","PostgreSQL","Midtrans API"],demoUrl:"https://github.com/biamtiero",repoUrl:"https://github.com/biamtiero"},{id:"proj-3",code:"PROJECT 03",title:"AskDoc AI — Asisten Riset & Analisis Dokumen Pintar",category:"AI & Backend Application",year:"2025",accentHex:"#818CF8",summary:"Aplikasi berbasis AI yang memungkinkan pengguna mengunggah dokumen PDF dan melakukan tanya-jawab instan lengkap dengan rujukan halaman kutipan.",highlights:["Pencarian semantik berbasis vektor untuk akurasi jawaban tinggi","Antarmuka pembaca dokumen berdampingan dengan asisten chat AI"],techStack:["Python","FastAPI","React","TypeScript","Vector Search"],demoUrl:"https://github.com/biamtiero",repoUrl:"https://github.com/biamtiero"}],experience:[{id:"exp-1",period:"2024 — Sekarang",role:"Full-Stack Developer",company:"Pengembangan Produk Digital & Freelance",location:"Indonesia (Remote)",description:"Merancang dan membangun aplikasi web full-stack dari tahap perancangan database, pembuatan REST API, hingga antarmuka frontend modern yang responsif.",tags:["React","Next.js","TypeScript","Node.js","PostgreSQL"]},{id:"exp-2",period:"2023 — 2024",role:"Frontend Web Developer",company:"Kolaborasi Studio & Proyek Teknologi",location:"Jakarta / Bandung",description:"Mengembangkan sistem komponen UI yang dapat digunakan kembali, mengoptimalkan performa halaman web, dan mengintegrasikan antarmuka dengan API backend.",tags:["React","TypeScript","Tailwind CSS","REST API","Git"]},{id:"exp-3",period:"2020 — 2024",role:"Sarjana Teknik Informatika / Ilmu Komputer",company:"Pendidikan Tinggi & Riset Rekayasa Perangkat Lunak",location:"Indonesia",description:"Fokus pada Rekayasa Perangkat Lunak, Algoritma & Struktur Data, Basis Data, dan Pengembangan Sistem Web Modern.",tags:["Software Engineering","Web Architecture","Database Systems"]}]};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vf="186",x_=0,pm=1,__=2,Gl=1,v_=2,Qa=3,is=0,Hn=1,nr=2,rr=0,to=1,Zs=2,mm=3,gm=4,S_=5,Ks=100,y_=101,M_=102,E_=103,T_=104,w_=200,A_=201,C_=202,R_=203,xg=204,_g=205,b_=206,P_=207,N_=208,L_=209,D_=210,I_=211,U_=212,F_=213,k_=214,Rd=0,bd=1,Pd=2,no=3,Nd=4,Ld=5,Dd=6,Id=7,vg=0,O_=1,B_=2,ki=0,Sg=1,yg=2,Mg=3,Eg=4,Tg=5,wg=6,Ag=7,Cg=300,rs=301,ta=302,Yu=303,ju=304,ac=306,Ud=1e3,ir=1001,Fd=1002,vn=1003,z_=1004,pl=1005,Cn=1006,$u=1007,ts=1008,li=1009,Rg=1010,bg=1011,io=1012,Sf=1013,Oi=1014,Ui=1015,Bi=1016,yf=1017,Mf=1018,ro=1020,Pg=35902,Ng=35899,Lg=1021,Dg=1022,wi=1023,ar=1026,ns=1027,Ig=1028,Ef=1029,ss=1030,Tf=1031,wf=1033,Wl=33776,Xl=33777,ql=33778,Yl=33779,kd=35840,Od=35841,Bd=35842,zd=35843,Vd=36196,Hd=37492,Gd=37496,Wd=37488,Xd=37489,$l=37490,qd=37491,Yd=37808,jd=37809,$d=37810,Kd=37811,Zd=37812,Qd=37813,Jd=37814,ef=37815,tf=37816,nf=37817,rf=37818,sf=37819,af=37820,of=37821,lf=36492,cf=36494,uf=36495,df=36283,ff=36284,Kl=36285,hf=36286,V_=3200,xm=0,H_=1,Nr="",ai="srgb",Zl="srgb-linear",Ql="linear",kt="srgb",Ku=7680,G_=519,W_=512,X_=513,q_=514,Af=515,Y_=516,j_=517,Cf=518,$_=519,Ug=35044,_m="300 es",Fi=2e3,Jl=2001;function K_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ec(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Z_(){const s=ec("canvas");return s.style.display="block",s}const vm={};function tc(...s){const e="THREE."+s.shift();console.log(e,...s)}function Fg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=Fg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function bt(...s){s=Fg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Js(...s){const e=s.join(" ");e in vm||(vm[e]=!0,ot(...s))}function Q_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const J_={[Rd]:bd,[Pd]:Dd,[Nd]:Id,[no]:Ld,[bd]:Rd,[Dd]:Pd,[Id]:Nd,[Ld]:no};class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=Math.PI/180,pf=180/Math.PI;function Lr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function ev(s,e){return(s%e+e)%e}function Qu(s,e,t){return(1-t)*s+t*e}function Ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Df=class Df{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Df.prototype.isVector2=!0;let mt=Df;class ia{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let p=r[o+0],m=r[o+1],_=r[o+2],y=r[o+3],g=l[u+0],M=l[u+1],A=l[u+2],R=l[u+3];if(y!==R||p!==g||m!==M||_!==A){let v=p*g+m*M+_*A+y*R;v<0&&(g=-g,M=-M,A=-A,R=-R,v=-v);let x=1-f;if(v<.9995){const b=Math.acos(v),O=Math.sin(b);x=Math.sin(x*b)/O,f=Math.sin(f*b)/O,p=p*x+g*f,m=m*x+M*f,_=_*x+A*f,y=y*x+R*f}else{p=p*x+g*f,m=m*x+M*f,_=_*x+A*f,y=y*x+R*f;const b=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=b,m*=b,_*=b,y*=b}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],p=r[o+1],m=r[o+2],_=r[o+3],y=l[u],g=l[u+1],M=l[u+2],A=l[u+3];return e[t]=f*A+_*y+p*M-m*g,e[t+1]=p*A+_*g+m*y-f*M,e[t+2]=m*A+_*M+f*g-p*y,e[t+3]=_*A-f*y-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(r/2),_=f(o/2),y=f(l/2),g=p(r/2),M=p(o/2),A=p(l/2);switch(u){case"XYZ":this._x=g*_*y+m*M*A,this._y=m*M*y-g*_*A,this._z=m*_*A+g*M*y,this._w=m*_*y-g*M*A;break;case"YXZ":this._x=g*_*y+m*M*A,this._y=m*M*y-g*_*A,this._z=m*_*A-g*M*y,this._w=m*_*y+g*M*A;break;case"ZXY":this._x=g*_*y-m*M*A,this._y=m*M*y+g*_*A,this._z=m*_*A+g*M*y,this._w=m*_*y-g*M*A;break;case"ZYX":this._x=g*_*y-m*M*A,this._y=m*M*y+g*_*A,this._z=m*_*A-g*M*y,this._w=m*_*y+g*M*A;break;case"YZX":this._x=g*_*y+m*M*A,this._y=m*M*y+g*_*A,this._z=m*_*A-g*M*y,this._w=m*_*y-g*M*A;break;case"XZY":this._x=g*_*y-m*M*A,this._y=m*M*y-g*_*A,this._z=m*_*A+g*M*y,this._w=m*_*y+g*M*A;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],p=t[9],m=t[2],_=t[6],y=t[10],g=r+f+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-p)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>f&&r>y){const M=2*Math.sqrt(1+r-f-y);this._w=(_-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(f>y){const M=2*Math.sqrt(1+f-r-y);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+y-r-f);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,p=t._y,m=t._z,_=t._w;return this._x=r*_+u*f+o*m-l*p,this._y=o*_+u*p+l*f-r*m,this._z=l*_+u*m+r*p-o*f,this._w=u*_-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),_=Math.sin(m);p=Math.sin(p*m)/_,t=Math.sin(t*m)/_,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const If=class If{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*o-f*r),_=2*(f*t-l*o),y=2*(l*r-u*t);return this.x=t+p*m+u*y-f*_,this.y=r+p*_+f*m-l*y,this.z=o+p*y+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};If.prototype.isVector3=!0;let te=If;const Ju=new te,Sm=new ia,Uf=class Uf{constructor(e,t,r,o,l,u,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,m)}set(e,t,r,o,l,u,f,p,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=p,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],p=r[6],m=r[1],_=r[4],y=r[7],g=r[2],M=r[5],A=r[8],R=o[0],v=o[3],x=o[6],b=o[1],O=o[4],C=o[7],N=o[2],P=o[5],F=o[8];return l[0]=u*R+f*b+p*N,l[3]=u*v+f*O+p*P,l[6]=u*x+f*C+p*F,l[1]=m*R+_*b+y*N,l[4]=m*v+_*O+y*P,l[7]=m*x+_*C+y*F,l[2]=g*R+M*b+A*N,l[5]=g*v+M*O+A*P,l[8]=g*x+M*C+A*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8];return t*u*_-t*f*m-r*l*_+r*f*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8],y=_*u-f*m,g=f*p-_*l,M=m*l-u*p,A=t*y+r*g+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(o*m-_*r)*R,e[2]=(f*r-o*u)*R,e[3]=g*R,e[4]=(_*t-o*p)*R,e[5]=(o*l-f*t)*R,e[6]=M*R,e[7]=(r*p-m*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*f)+u+e,-o*m,o*p,-o*(-m*u+p*f)+f+t,0,0,1),this}scale(e,t){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ed.makeScale(e,t)),this}rotate(e){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ed.makeRotation(-e)),this}translate(e,t){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uf.prototype.isMatrix3=!0;let ft=Uf;const ed=new ft,ym=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tv(){const s={enabled:!0,workingColorSpace:Zl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=sr(o.r),o.g=sr(o.g),o.b=sr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=ea(o.r),o.g=ea(o.g),o.b=ea(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:ym,fromXYZ:Mm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:ym,fromXYZ:Mm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const wt=tv();function sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ea(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class nv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ds===void 0&&(Ds=ec("canvas")),Ds.width=e.width,Ds.height=e.height;const o=Ds.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ds}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ec("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=sr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(sr(t[r]/255)*255):t[r]=sr(t[r]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iv=0;class Rf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(td(o[u].image)):l.push(td(o[u]))}else l=td(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function td(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let rv=0;const nd=new te;class Rn extends os{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,r=ir,o=ir,l=Cn,u=ts,f=wi,p=li,m=Rn.DEFAULT_ANISOTROPY,_=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=Lr(),this.name="",this.source=new Rf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nd).x}get height(){return this.source.getSize(nd).y}get depth(){return this.source.getSize(nd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Cg;Rn.DEFAULT_ANISOTROPY=1;const Ff=class Ff{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],_=p[4],y=p[8],g=p[1],M=p[5],A=p[9],R=p[2],v=p[6],x=p[10];if(Math.abs(_-g)<.01&&Math.abs(y-R)<.01&&Math.abs(A-v)<.01){if(Math.abs(_+g)<.1&&Math.abs(y+R)<.1&&Math.abs(A+v)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(m+1)/2,C=(M+1)/2,N=(x+1)/2,P=(_+g)/4,F=(y+R)/4,E=(A+v)/4;return O>C&&O>N?O<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(O),o=P/r,l=F/r):C>N?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=P/o,l=E/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=F/l,o=E/l),this.set(r,o,l,t),this}let b=Math.sqrt((v-A)*(v-A)+(y-R)*(y-R)+(g-_)*(g-_));return Math.abs(b)<.001&&(b=1),this.x=(v-A)/b,this.y=(y-R)/b,this.z=(g-_)/b,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ff.prototype.isVector4=!0;let en=Ff;class sv extends os{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Rn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Rf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends sv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class kg extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class av extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sc=class sc{constructor(e,t,r,o,l,u,f,p,m,_,y,g,M,A,R,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,m,_,y,g,M,A,R,v)}set(e,t,r,o,l,u,f,p,m,_,y,g,M,A,R,v){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=p,x[2]=m,x[6]=_,x[10]=y,x[14]=g,x[3]=M,x[7]=A,x[11]=R,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),u=1/Is.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),_=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*_,M=u*y,A=f*_,R=f*y;t[0]=p*_,t[4]=-p*y,t[8]=m,t[1]=M+A*m,t[5]=g-R*m,t[9]=-f*p,t[2]=R-g*m,t[6]=A+M*m,t[10]=u*p}else if(e.order==="YXZ"){const g=p*_,M=p*y,A=m*_,R=m*y;t[0]=g+R*f,t[4]=A*f-M,t[8]=u*m,t[1]=u*y,t[5]=u*_,t[9]=-f,t[2]=M*f-A,t[6]=R+g*f,t[10]=u*p}else if(e.order==="ZXY"){const g=p*_,M=p*y,A=m*_,R=m*y;t[0]=g-R*f,t[4]=-u*y,t[8]=A+M*f,t[1]=M+A*f,t[5]=u*_,t[9]=R-g*f,t[2]=-u*m,t[6]=f,t[10]=u*p}else if(e.order==="ZYX"){const g=u*_,M=u*y,A=f*_,R=f*y;t[0]=p*_,t[4]=A*m-M,t[8]=g*m+R,t[1]=p*y,t[5]=R*m+g,t[9]=M*m-A,t[2]=-m,t[6]=f*p,t[10]=u*p}else if(e.order==="YZX"){const g=u*p,M=u*m,A=f*p,R=f*m;t[0]=p*_,t[4]=R-g*y,t[8]=A*y+M,t[1]=y,t[5]=u*_,t[9]=-f*_,t[2]=-m*_,t[6]=M*y+A,t[10]=g-R*y}else if(e.order==="XZY"){const g=u*p,M=u*m,A=f*p,R=f*m;t[0]=p*_,t[4]=-y,t[8]=m*_,t[1]=g*y+R,t[5]=u*_,t[9]=M*y-A,t[2]=A*y-M,t[6]=f*_,t[10]=R*y+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ov,e,lv)}lookAt(e,t,r){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),wr.crossVectors(r,$n),wr.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),wr.crossVectors(r,$n)),wr.normalize(),ml.crossVectors($n,wr),o[0]=wr.x,o[4]=ml.x,o[8]=$n.x,o[1]=wr.y,o[5]=ml.y,o[9]=$n.y,o[2]=wr.z,o[6]=ml.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],p=r[8],m=r[12],_=r[1],y=r[5],g=r[9],M=r[13],A=r[2],R=r[6],v=r[10],x=r[14],b=r[3],O=r[7],C=r[11],N=r[15],P=o[0],F=o[4],E=o[8],D=o[12],B=o[1],q=o[5],Q=o[9],oe=o[13],W=o[2],Z=o[6],pe=o[10],ne=o[14],K=o[3],Y=o[7],j=o[11],L=o[15];return l[0]=u*P+f*B+p*W+m*K,l[4]=u*F+f*q+p*Z+m*Y,l[8]=u*E+f*Q+p*pe+m*j,l[12]=u*D+f*oe+p*ne+m*L,l[1]=_*P+y*B+g*W+M*K,l[5]=_*F+y*q+g*Z+M*Y,l[9]=_*E+y*Q+g*pe+M*j,l[13]=_*D+y*oe+g*ne+M*L,l[2]=A*P+R*B+v*W+x*K,l[6]=A*F+R*q+v*Z+x*Y,l[10]=A*E+R*Q+v*pe+x*j,l[14]=A*D+R*oe+v*ne+x*L,l[3]=b*P+O*B+C*W+N*K,l[7]=b*F+O*q+C*Z+N*Y,l[11]=b*E+O*Q+C*pe+N*j,l[15]=b*D+O*oe+C*ne+N*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],p=e[9],m=e[13],_=e[2],y=e[6],g=e[10],M=e[14],A=e[3],R=e[7],v=e[11],x=e[15],b=p*M-m*g,O=f*M-m*y,C=f*g-p*y,N=u*M-m*_,P=u*g-p*_,F=u*y-f*_;return t*(R*b-v*O+x*C)-r*(A*b-v*N+x*P)+o*(A*O-R*N+x*F)-l*(A*C-R*P+v*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],p=e[2],m=e[6],_=e[10];return t*(u*_-f*m)-r*(l*_-f*p)+o*(l*m-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8],y=e[9],g=e[10],M=e[11],A=e[12],R=e[13],v=e[14],x=e[15],b=t*f-r*u,O=t*p-o*u,C=t*m-l*u,N=r*p-o*f,P=r*m-l*f,F=o*m-l*p,E=_*R-y*A,D=_*v-g*A,B=_*x-M*A,q=y*v-g*R,Q=y*x-M*R,oe=g*x-M*v,W=b*oe-O*Q+C*q+N*B-P*D+F*E;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/W;return e[0]=(f*oe-p*Q+m*q)*Z,e[1]=(o*Q-r*oe-l*q)*Z,e[2]=(R*F-v*P+x*N)*Z,e[3]=(g*P-y*F-M*N)*Z,e[4]=(p*B-u*oe-m*D)*Z,e[5]=(t*oe-o*B+l*D)*Z,e[6]=(v*C-A*F-x*O)*Z,e[7]=(_*F-g*C+M*O)*Z,e[8]=(u*Q-f*B+m*E)*Z,e[9]=(r*B-t*Q-l*E)*Z,e[10]=(A*P-R*C+x*b)*Z,e[11]=(y*C-_*P-M*b)*Z,e[12]=(f*D-u*q-p*E)*Z,e[13]=(t*q-r*D+o*E)*Z,e[14]=(R*O-A*N-v*b)*Z,e[15]=(_*N-y*O+g*b)*Z,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,p=e.z,m=l*u,_=l*f;return this.set(m*u+r,m*f-o*p,m*p+o*f,0,m*f+o*p,_*f+r,_*p-o*u,0,m*p-o*f,_*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,p=t._w,m=l+l,_=u+u,y=f+f,g=l*m,M=l*_,A=l*y,R=u*_,v=u*y,x=f*y,b=p*m,O=p*_,C=p*y,N=r.x,P=r.y,F=r.z;return o[0]=(1-(R+x))*N,o[1]=(M+C)*N,o[2]=(A-O)*N,o[3]=0,o[4]=(M-C)*P,o[5]=(1-(g+x))*P,o[6]=(v+b)*P,o[7]=0,o[8]=(A+O)*F,o[9]=(v-b)*F,o[10]=(1-(g+R))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Is.set(o[0],o[1],o[2]).length();const f=Is.set(o[4],o[5],o[6]).length(),p=Is.set(o[8],o[9],o[10]).length();l<0&&(u=-u),yi.copy(this);const m=1/u,_=1/f,y=1/p;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=_,yi.elements[5]*=_,yi.elements[6]*=_,yi.elements[8]*=y,yi.elements[9]*=y,yi.elements[10]*=y,t.setFromRotationMatrix(yi),r.x=u,r.y=f,r.z=p,this}makePerspective(e,t,r,o,l,u,f=Fi,p=!1){const m=this.elements,_=2*l/(t-e),y=2*l/(r-o),g=(t+e)/(t-e),M=(r+o)/(r-o);let A,R;if(p)A=l/(u-l),R=u*l/(u-l);else if(f===Fi)A=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===Jl)A=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=y,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Fi,p=!1){const m=this.elements,_=2/(t-e),y=2/(r-o),g=-(t+e)/(t-e),M=-(r+o)/(r-o);let A,R;if(p)A=1/(u-l),R=u/(u-l);else if(f===Fi)A=-2/(u-l),R=-(u+l)/(u-l);else if(f===Jl)A=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=y,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=A,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let Zt=sc;const Is=new te,yi=new Zt,ov=new te(0,0,0),lv=new te(1,1,1),wr=new te,ml=new te,$n=new te,Em=new Zt,Tm=new ia;class as{constructor(e=0,t=0,r=0,o=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],p=o[1],m=o[5],_=o[9],y=o[2],g=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-At(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cv=0;const wm=new te,Us=new ia,Zi=new Zt,gl=new te,Ha=new te,uv=new te,dv=new ia,Am=new te(1,0,0),Cm=new te(0,1,0),Rm=new te(0,0,1),bm={type:"added"},fv={type:"removed"},Fs={type:"childadded",child:null},id={type:"childremoved",child:null};class bn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new te,t=new as,r=new ia,o=new te(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ft}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Cm,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,t){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Cm,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?gl.copy(e):gl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Ha,gl,this.up):Zi.lookAt(gl,Ha,this.up),this.quaternion.setFromRotationMatrix(Zi),o&&(Zi.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(Zi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fv),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];l(e.shapes,y)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),y=u(e.shapes),g=u(e.skeletons),M=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new te(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ja extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hv={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const v=t.getJointPose(R,r),x=this._getHandJoint(m,R);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],g=_.position.distanceTo(y.position),M=.02,A=.005;m.inputState.pinching&&g>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ja;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},xl={h:0,s:0,l:0};function sd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=ev(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=sd(u,l,e+1/3),this.g=sd(u,l,e),this.b=sd(u,l,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=ai){function r(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const r=Bg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return wt.workingToColorSpace(An.copy(this),e),Math.round(At(An.r*255,0,255))*65536+Math.round(At(An.g*255,0,255))*256+Math.round(At(An.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(An.copy(this),t);const r=An.r,o=An.g,l=An.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const _=(f+u)/2;if(f===u)p=0,m=0;else{const y=u-f;switch(m=_<=.5?y/(u+f):y/(2-u-f),u){case r:p=(o-l)/y+(o<l?6:0);break;case o:p=(l-r)/y+2;break;case l:p=(r-o)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ai){wt.workingToColorSpace(An.copy(this),e);const t=An.r,r=An.g,o=An.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(xl);const r=Qu(Ar.h,xl.h,t),o=Qu(Ar.s,xl.s,t),l=Qu(Ar.l,xl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Pt;Pt.NAMES=Bg;class pv extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new te,Qi=new te,ad=new te,Ji=new te,ks=new te,Os=new te,Pm=new te,od=new te,ld=new te,cd=new te,ud=new en,dd=new en,fd=new en;class ci{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),Qi.subVectors(r,t),ad.subVectors(e,t);const u=Mi.dot(Mi),f=Mi.dot(Qi),p=Mi.dot(ad),m=Qi.dot(Qi),_=Qi.dot(ad),y=u*m-f*f;if(y===0)return l.set(0,0,0),null;const g=1/y,M=(m*p-f*_)*g,A=(u*_-f*p)*g;return l.set(1-M-A,A,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,r,o,l,u,f,p){return this.getBarycoord(e,t,r,o,Ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ji.x),p.addScaledVector(u,Ji.y),p.addScaledVector(f,Ji.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return ud.setScalar(0),dd.setScalar(0),fd.setScalar(0),ud.fromBufferAttribute(e,t),dd.fromBufferAttribute(e,r),fd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ud,l.x),u.addScaledVector(dd,l.y),u.addScaledVector(fd,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),Qi.subVectors(e,t),Mi.cross(Qi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Mi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ci.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ks.subVectors(o,r),Os.subVectors(l,r),od.subVectors(e,r);const p=ks.dot(od),m=Os.dot(od);if(p<=0&&m<=0)return t.copy(r);ld.subVectors(e,o);const _=ks.dot(ld),y=Os.dot(ld);if(_>=0&&y<=_)return t.copy(o);const g=p*y-_*m;if(g<=0&&p>=0&&_<=0)return u=p/(p-_),t.copy(r).addScaledVector(ks,u);cd.subVectors(e,l);const M=ks.dot(cd),A=Os.dot(cd);if(A>=0&&M<=A)return t.copy(l);const R=M*m-p*A;if(R<=0&&m>=0&&A<=0)return f=m/(m-A),t.copy(r).addScaledVector(Os,f);const v=_*A-M*y;if(v<=0&&y-_>=0&&M-A>=0)return Pm.subVectors(l,o),f=(y-_)/(y-_+(M-A)),t.copy(o).addScaledVector(Pm,f);const x=1/(v+R+g);return u=R*x,f=g*x,t.copy(r).addScaledVector(ks,u).addScaledVector(Os,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_l.copy(r.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),vl.subVectors(this.max,Ga),Bs.subVectors(e.a,Ga),zs.subVectors(e.b,Ga),Vs.subVectors(e.c,Ga),Cr.subVectors(zs,Bs),Rr.subVectors(Vs,zs),Kr.subVectors(Bs,Vs);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-Kr.z,Kr.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,Kr.z,0,-Kr.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-Kr.y,Kr.x,0];return!hd(t,Bs,zs,Vs,vl)||(t=[1,0,0,0,1,0,0,0,1],!hd(t,Bs,zs,Vs,vl))?!1:(Sl.crossVectors(Cr,Rr),t=[Sl.x,Sl.y,Sl.z],hd(t,Bs,zs,Vs,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new te,new te,new te,new te,new te,new te,new te,new te],Ei=new te,_l=new ao,Bs=new te,zs=new te,Vs=new te,Cr=new te,Rr=new te,Kr=new te,Ga=new te,vl=new te,Sl=new te,Zr=new te;function hd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Zr.fromArray(s,l);const f=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),p=e.dot(Zr),m=t.dot(Zr),_=r.dot(Zr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>f)return!1}return!0}const an=new te,yl=new mt;let mv=0;class ui extends os{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ug,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),o=zt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),o=zt(o,this.array),l=zt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zg extends ui{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Vg extends ui{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gn extends ui{constructor(e,t,r){super(new Float32Array(e),t,r)}}const gv=new ao,Wa=new te,pd=new te;class oo{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):gv.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Wa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(pd)),this.expandByPoint(Wa.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xv=0;const si=new Zt,md=new bn,Hs=new te,Kn=new ao,Xa=new ao,mn=new te;class Un extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K_(e)?Vg:zg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,r){return si.makeTranslation(e,t,r),this.applyMatrix4(si),this}scale(e,t,r){return si.makeScale(e,t,r),this.applyMatrix4(si),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Xa.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Kn.min,Xa.min),Kn.expandByPoint(mn),mn.addVectors(Kn.max,Xa.max),Kn.expandByPoint(mn)):(Kn.expandByPoint(Xa.min),Kn.expandByPoint(Xa.max))}Kn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(mn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],p=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)mn.fromBufferAttribute(f,m),p&&(Hs.fromBufferAttribute(e,m),mn.add(Hs)),o=Math.max(o,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ui(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],p=[];for(let E=0;E<r.count;E++)f[E]=new te,p[E]=new te;const m=new te,_=new te,y=new te,g=new mt,M=new mt,A=new mt,R=new te,v=new te;function x(E,D,B){m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,D),y.fromBufferAttribute(r,B),g.fromBufferAttribute(l,E),M.fromBufferAttribute(l,D),A.fromBufferAttribute(l,B),_.sub(m),y.sub(m),M.sub(g),A.sub(g);const q=1/(M.x*A.y-A.x*M.y);isFinite(q)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(y,-M.y).multiplyScalar(q),v.copy(y).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(q),f[E].add(R),f[D].add(R),f[B].add(R),p[E].add(v),p[D].add(v),p[B].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let E=0,D=b.length;E<D;++E){const B=b[E],q=B.start,Q=B.count;for(let oe=q,W=q+Q;oe<W;oe+=3)x(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const O=new te,C=new te,N=new te,P=new te;function F(E){N.fromBufferAttribute(o,E),P.copy(N);const D=f[E];O.copy(D),O.sub(N.multiplyScalar(N.dot(D))).normalize(),C.crossVectors(P,D);const q=C.dot(p[E])<0?-1:1;u.setXYZW(E,O.x,O.y,O.z,q)}for(let E=0,D=b.length;E<D;++E){const B=b[E],q=B.start,Q=B.count;for(let oe=q,W=q+Q;oe<W;oe+=3)F(e.getX(oe+0)),F(e.getX(oe+1)),F(e.getX(oe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new te,l=new te,u=new te,f=new te,p=new te,m=new te,_=new te,y=new te;if(e)for(let g=0,M=e.count;g<M;g+=3){const A=e.getX(g+0),R=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,v),_.subVectors(u,l),y.subVectors(o,l),_.cross(y),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),f.add(_),p.add(_),m.add(_),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let g=0,M=t.count;g<M;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),_.subVectors(u,l),y.subVectors(o,l),_.cross(y),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,p){const m=f.array,_=f.itemSize,y=f.normalized,g=new m.constructor(p.length*_);let M=0,A=0;for(let R=0,v=p.length;R<v;R++){f.isInterleavedBufferAttribute?M=p[R]*f.data.stride+f.offset:M=p[R]*_;for(let x=0;x<_;x++)g[A++]=m[M++]}return new ui(g,_,y)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let _=0,y=m.length;_<y;_++){const g=m[_],M=e(g,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,g=m.length;y<g;y++){const M=m[y];_.push(M.toJSON(e.data))}_.length>0&&(o[p]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(t))}const l=e.morphAttributes;for(const m in l){const _=[],y=l[m];for(let g=0,M=y.length;g<M;g++)_.push(y[g].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _v{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ug,this.updateRanges=[],this.version=0,this.uuid=Lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Dn=new te;class nc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),o=zt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),r=zt(r,this.array),o=zt(o,this.array),l=zt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){tc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gd=new te,vv=new te,Sv=new ft;class Pr{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gd.subVectors(r,t).cross(vv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(gd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Sv.getNormalMatrix(e),o=this.coplanarPoint(gd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let yv=0;class ls extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=to,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xg,this.blendDst=_g,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ku,this.stencilZFail=Ku,this.stencilZPass=Ku,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Pr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new mt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hg extends ls{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gs;const qa=new te,Ws=new te,Xs=new te,qs=new mt,Ya=new mt,Gg=new Zt,Ml=new te,ja=new te,El=new te,Nm=new mt,xd=new mt,Lm=new mt;class Mv extends bn{constructor(e=new Hg){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Un;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new _v(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new nc(r,3,0,!1)),Gs.setAttribute("uv",new nc(r,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Gg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Tl(Ml.set(-.5,-.5,0),Xs,u,Ws,o,l),Tl(ja.set(.5,-.5,0),Xs,u,Ws,o,l),Tl(El.set(.5,.5,0),Xs,u,Ws,o,l),Nm.set(0,0),xd.set(1,0),Lm.set(1,1);let f=e.ray.intersectTriangle(Ml,ja,El,!1,qa);if(f===null&&(Tl(ja.set(-.5,.5,0),Xs,u,Ws,o,l),xd.set(0,1),f=e.ray.intersectTriangle(Ml,El,ja,!1,qa),f===null))return;const p=e.ray.origin.distanceTo(qa);p<e.near||p>e.far||t.push({distance:p,point:qa.clone(),uv:ci.getInterpolation(qa,Ml,ja,El,Nm,xd,Lm,new mt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tl(s,e,t,r,o,l){qs.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(Ya.x=l*qs.x-o*qs.y,Ya.y=o*qs.x+l*qs.y):Ya.copy(qs),s.copy(e),s.x+=Ya.x,s.y+=Ya.y,s.applyMatrix4(Gg)}const tr=new te,_d=new te,wl=new te,Al=new te;class bf{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){_d.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),Al.copy(this.origin).sub(_d);const l=e.distanceTo(t)*.5,u=-this.direction.dot(wl),f=Al.dot(this.direction),p=-Al.dot(wl),m=Al.lengthSq(),_=Math.abs(1-u*u);let y,g,M,A;if(_>0)if(y=u*p-f,g=u*f-p,A=l*_,y>=0)if(g>=-A)if(g<=A){const R=1/_;y*=R,g*=R,M=y*(y+u*g+2*f)+g*(u*y+g+2*p)+m}else g=l,y=Math.max(0,-(u*g+f)),M=-y*y+g*(g+2*p)+m;else g=-l,y=Math.max(0,-(u*g+f)),M=-y*y+g*(g+2*p)+m;else g<=-A?(y=Math.max(0,-(-u*l+f)),g=y>0?-l:Math.min(Math.max(-l,-p),l),M=-y*y+g*(g+2*p)+m):g<=A?(y=0,g=Math.min(Math.max(-l,-p),l),M=g*(g+2*p)+m):(y=Math.max(0,-(u*l+f)),g=y>0?l:Math.min(Math.max(-l,-p),l),M=-y*y+g*(g+2*p)+m);else g=u>0?-l:l,y=Math.max(0,-(u*g+f)),M=-y*y+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(_d).addScaledVector(wl,g),M}intersectSphere(e,t){if(e.radius<0)return null;tr.subVectors(e.center,this.origin);const r=tr.dot(this.direction),o=tr.dot(tr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-g.z)*y,p=(e.max.z-g.z)*y):(f=(e.max.z-g.z)*y,p=(e.min.z-g.z)*y),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,p=f.x,m=f.y,_=f.z,y=e.x-u.x,g=e.y-u.y,M=e.z-u.z,A=t.x-u.x,R=t.y-u.y,v=t.z-u.z,x=r.x-u.x,b=r.y-u.y,O=r.z-u.z,C=Math.abs(p),N=Math.abs(m),P=Math.abs(_);let F,E,D,B,q,Q,oe,W,Z,pe,ne,K;if(C>=N&&C>=P?(D=p,Q=y,Z=A,K=x,p>=0?(F=m,E=_,B=g,q=M,oe=R,W=v,pe=b,ne=O):(F=_,E=m,B=M,q=g,oe=v,W=R,pe=O,ne=b)):N>=P?(D=m,Q=g,Z=R,K=b,m>=0?(F=_,E=p,B=M,q=y,oe=v,W=A,pe=O,ne=x):(F=p,E=_,B=y,q=M,oe=A,W=v,pe=x,ne=O)):(D=_,Q=M,Z=v,K=O,_>=0?(F=p,E=m,B=y,q=g,oe=A,W=R,pe=x,ne=b):(F=m,E=p,B=g,q=y,oe=R,W=A,pe=b,ne=x)),D===0)return null;const Y=F/D,j=E/D,L=1/D,ae=B-Y*Q,ve=q-j*Q,ce=oe-Y*Z,Se=W-j*Z,Re=pe-Y*K,J=ne-j*K,de=Re*Se-J*ce,Te=ae*J-ve*Re,Ke=ce*ve-Se*ae;if(o){if(de<0||Te<0||Ke<0)return null}else if((de<0||Te<0||Ke<0)&&(de>0||Te>0||Ke>0))return null;const Be=de+Te+Ke;if(Be===0)return null;const Ce=L*(de*Q+Te*Z+Ke*K);return(Be>0?Ce<0:Ce>0)?null:this.at(Ce/Be,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pf extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dm=new Zt,Qr=new bf,Cl=new oo,Im=new te,Rl=new te,bl=new te,Pl=new te,vd=new te,Nl=new te,Um=new te,Ll=new te;class zi extends bn{constructor(e=new Un,t=new Pf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Nl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const _=f[p],y=l[p];_!==0&&(vd.fromBufferAttribute(y,e),u?Nl.addScaledVector(vd,_):Nl.addScaledVector(vd.sub(t),_))}t.add(Nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(l),Qr.copy(e.ray).recast(e.near),!(Cl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Cl,Im)===null||Qr.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Dm.copy(l).invert(),Qr.copy(e.ray).applyMatrix4(Dm),!(r.boundingBox!==null&&Qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,y=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,R=g.length;A<R;A++){const v=g[A],x=u[v.materialIndex],b=Math.max(v.start,M.start),O=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let C=b,N=O;C<N;C+=3){const P=f.getX(C),F=f.getX(C+1),E=f.getX(C+2);o=Dl(this,x,e,r,m,_,y,P,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),R=Math.min(f.count,M.start+M.count);for(let v=A,x=R;v<x;v+=3){const b=f.getX(v),O=f.getX(v+1),C=f.getX(v+2);o=Dl(this,u,e,r,m,_,y,b,O,C),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let A=0,R=g.length;A<R;A++){const v=g[A],x=u[v.materialIndex],b=Math.max(v.start,M.start),O=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let C=b,N=O;C<N;C+=3){const P=C,F=C+1,E=C+2;o=Dl(this,x,e,r,m,_,y,P,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const A=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=A,x=R;v<x;v+=3){const b=v,O=v+1,C=v+2;o=Dl(this,u,e,r,m,_,y,b,O,C),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Ev(s,e,t,r,o,l,u,f){let p;if(e.side===Hn?p=r.intersectTriangle(u,l,o,!0,f):p=r.intersectTriangle(o,l,u,e.side===is,f),p===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Ll);return m<t.near||m>t.far?null:{distance:m,point:Ll.clone(),object:s}}function Dl(s,e,t,r,o,l,u,f,p,m){s.getVertexPosition(f,Rl),s.getVertexPosition(p,bl),s.getVertexPosition(m,Pl);const _=Ev(s,e,t,r,Rl,bl,Pl,Um);if(_){const y=new te;ci.getBarycoord(Um,Rl,bl,Pl,y),o&&(_.uv=ci.getInterpolatedAttribute(o,f,p,m,y,new mt)),l&&(_.uv1=ci.getInterpolatedAttribute(l,f,p,m,y,new mt)),u&&(_.normal=ci.getInterpolatedAttribute(u,f,p,m,y,new te),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:m,normal:new te,materialIndex:0};ci.getNormal(Rl,bl,Pl,g.normal),_.face=g,_.barycoord=y}return _}class Tv extends Rn{constructor(e=null,t=1,r=1,o,l,u,f,p,m=vn,_=vn,y,g){super(null,u,f,p,m,_,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jr=new oo,wv=new mt(.5,.5),Il=new te;class Wg{constructor(e=new Pr,t=new Pr,r=new Pr,o=new Pr,l=new Pr,u=new Pr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Fi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],m=l[3],_=l[4],y=l[5],g=l[6],M=l[7],A=l[8],R=l[9],v=l[10],x=l[11],b=l[12],O=l[13],C=l[14],N=l[15];if(o[0].setComponents(m-u,M-_,x-A,N-b).normalize(),o[1].setComponents(m+u,M+_,x+A,N+b).normalize(),o[2].setComponents(m+f,M+y,x+R,N+O).normalize(),o[3].setComponents(m-f,M-y,x-R,N-O).normalize(),r)o[4].setComponents(p,g,v,C).normalize(),o[5].setComponents(m-p,M-g,x-v,N-C).normalize();else if(o[4].setComponents(m-p,M-g,x-v,N-C).normalize(),t===Fi)o[5].setComponents(m+p,M+g,x+v,N+C).normalize();else if(t===Jl)o[5].setComponents(p,g,v,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const t=wv.distanceTo(e.center);return Jr.radius=.7071067811865476+t,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Il.x=o.normal.x>0?e.max.x:e.min.x,Il.y=o.normal.y>0?e.max.y:e.min.y,Il.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xg extends ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new te,rc=new te,Fm=new Zt,$a=new bf,Ul=new oo,Sd=new te,km=new te;class Av extends bn{constructor(e=new Un,t=new Xg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)ic.fromBufferAttribute(t,o-1),rc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new Gn(r,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(o),Ul.radius+=l,e.ray.intersectsSphere(Ul)===!1)return;Fm.copy(o).invert(),$a.copy(e.ray).applyMatrix4(Fm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const M=Math.max(0,u.start),A=Math.min(_.count,u.start+u.count);for(let R=M,v=A-1;R<v;R+=m){const x=_.getX(R),b=_.getX(R+1),O=Fl(this,e,$a,p,x,b,R);O&&t.push(O)}if(this.isLineLoop){const R=_.getX(A-1),v=_.getX(M),x=Fl(this,e,$a,p,R,v,A-1);x&&t.push(x)}}else{const M=Math.max(0,u.start),A=Math.min(g.count,u.start+u.count);for(let R=M,v=A-1;R<v;R+=m){const x=Fl(this,e,$a,p,R,R+1,R);x&&t.push(x)}if(this.isLineLoop){const R=Fl(this,e,$a,p,A-1,M,A-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Fl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(ic.fromBufferAttribute(f,o),rc.fromBufferAttribute(f,l),t.distanceSqToSegment(ic,rc,Sd,km)>r)return;Sd.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Sd);if(!(m<e.near||m>e.far))return{distance:m,point:km.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Om=new te,Bm=new te;class Cv extends Av{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Om.fromBufferAttribute(t,o),Bm.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Om.distanceTo(Bm);e.setAttribute("lineDistance",new Gn(r,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qg extends ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zm=new Zt,mf=new bf,kl=new oo,Ol=new te;class Rv extends bn{constructor(e=new Un,t=new qg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(o),kl.radius+=l,e.ray.intersectsSphere(kl)===!1)return;zm.copy(o).invert(),mf.copy(e.ray).applyMatrix4(zm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,y=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let A=g,R=M;A<R;A++){const v=m.getX(A);Ol.fromBufferAttribute(y,v),Vm(Ol,v,p,o,e,t,this)}}else{const g=Math.max(0,u.start),M=Math.min(y.count,u.start+u.count);for(let A=g,R=M;A<R;A++)Ol.fromBufferAttribute(y,A),Vm(Ol,A,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Vm(s,e,t,r,o,l,u){const f=mf.distanceSqToPoint(s);if(f<t){const p=new te;mf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Yg extends Rn{constructor(e=[],t=rs,r,o,l,u,f,p,m,_){super(e,t,r,o,l,u,f,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bv extends Rn{constructor(e,t,r,o,l,u,f,p,m){super(e,t,r,o,l,u,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class so extends Rn{constructor(e,t,r=Oi,o,l,u,f=vn,p=vn,m,_=ar,y=1){if(_!==ar&&_!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:y};super(g,o,l,u,f,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Pv extends so{constructor(e,t=Oi,r=rs,o,l,u=vn,f=vn,p,m=ar){const _={width:e,height:e,depth:1},y=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,f,p,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jg extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lo extends Un{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],_=[],y=[];let g=0,M=0;A("z","y","x",-1,-1,r,t,e,u,l,0),A("z","y","x",1,-1,r,t,-e,u,l,1),A("x","z","y",1,1,e,r,t,o,u,2),A("x","z","y",1,-1,e,r,-t,o,u,3),A("x","y","z",1,-1,e,t,r,o,l,4),A("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new Gn(m,3)),this.setAttribute("normal",new Gn(_,3)),this.setAttribute("uv",new Gn(y,2));function A(R,v,x,b,O,C,N,P,F,E,D){const B=C/F,q=N/E,Q=C/2,oe=N/2,W=P/2,Z=F+1,pe=E+1;let ne=0,K=0;const Y=new te;for(let j=0;j<pe;j++){const L=j*q-oe;for(let ae=0;ae<Z;ae++){const ve=ae*B-Q;Y[R]=ve*b,Y[v]=L*O,Y[x]=W,m.push(Y.x,Y.y,Y.z),Y[R]=0,Y[v]=0,Y[x]=P>0?1:-1,_.push(Y.x,Y.y,Y.z),y.push(ae/F),y.push(1-j/E),ne+=1}}for(let j=0;j<E;j++)for(let L=0;L<F;L++){const ae=g+L+Z*j,ve=g+L+Z*(j+1),ce=g+(L+1)+Z*(j+1),Se=g+(L+1)+Z*j;p.push(ae,ve,Se),p.push(ve,ce,Se),K+=6}f.addGroup(M,K,D),M+=K,g+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nf extends Un{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];f(o),m(r),_(),this.setAttribute("position",new Gn(l,3)),this.setAttribute("normal",new Gn(l.slice(),3)),this.setAttribute("uv",new Gn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const O=new te,C=new te,N=new te;for(let P=0;P<t.length;P+=3)M(t[P+0],O),M(t[P+1],C),M(t[P+2],N),p(O,C,N,b)}function p(b,O,C,N){const P=N+1,F=[];for(let E=0;E<=P;E++){F[E]=[];const D=b.clone().lerp(C,E/P),B=O.clone().lerp(C,E/P),q=P-E;for(let Q=0;Q<=q;Q++)Q===0&&E===P?F[E][Q]=D:F[E][Q]=D.clone().lerp(B,Q/q)}for(let E=0;E<P;E++)for(let D=0;D<2*(P-E)-1;D++){const B=Math.floor(D/2);D%2===0?(g(F[E][B+1]),g(F[E+1][B]),g(F[E][B])):(g(F[E][B+1]),g(F[E+1][B+1]),g(F[E+1][B]))}}function m(b){const O=new te;for(let C=0;C<l.length;C+=3)O.x=l[C+0],O.y=l[C+1],O.z=l[C+2],O.normalize().multiplyScalar(b),l[C+0]=O.x,l[C+1]=O.y,l[C+2]=O.z}function _(){const b=new te;for(let O=0;O<l.length;O+=3){b.x=l[O+0],b.y=l[O+1],b.z=l[O+2];const C=v(b)/2/Math.PI+.5,N=x(b)/Math.PI+.5;u.push(C,1-N)}A(),y()}function y(){for(let b=0;b<u.length;b+=6){const O=u[b+0],C=u[b+2],N=u[b+4],P=Math.max(O,C,N),F=Math.min(O,C,N);P>.9&&F<.1&&(O<.2&&(u[b+0]+=1),C<.2&&(u[b+2]+=1),N<.2&&(u[b+4]+=1))}}function g(b){l.push(b.x,b.y,b.z)}function M(b,O){const C=b*3;O.x=e[C+0],O.y=e[C+1],O.z=e[C+2]}function A(){const b=new te,O=new te,C=new te,N=new te,P=new mt,F=new mt,E=new mt;for(let D=0,B=0;D<l.length;D+=9,B+=6){b.set(l[D+0],l[D+1],l[D+2]),O.set(l[D+3],l[D+4],l[D+5]),C.set(l[D+6],l[D+7],l[D+8]),P.set(u[B+0],u[B+1]),F.set(u[B+2],u[B+3]),E.set(u[B+4],u[B+5]),N.copy(b).add(O).add(C).divideScalar(3);const q=v(N);R(P,B+0,b,q),R(F,B+2,O,q),R(E,B+4,C,q)}}function R(b,O,C,N){N<0&&b.x===1&&(u[O]=b.x-1),C.x===0&&C.z===0&&(u[O]=N/2/Math.PI+.5)}function v(b){return Math.atan2(b.z,-b.x)}function x(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nf(e.vertices,e.indices,e.radius,e.detail)}}class Lf extends Nf{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lf(e.radius,e.detail)}}class oc extends Un{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),p=Math.floor(o),m=f+1,_=p+1,y=e/f,g=t/p,M=[],A=[],R=[],v=[];for(let x=0;x<_;x++){const b=x*g-u;for(let O=0;O<m;O++){const C=O*y-l;A.push(C,-b,0),R.push(0,0,1),v.push(O/f),v.push(1-x/p)}}for(let x=0;x<p;x++)for(let b=0;b<f;b++){const O=b+m*x,C=b+m*(x+1),N=b+1+m*(x+1),P=b+1+m*x;M.push(O,C,P),M.push(C,N,P)}this.setIndex(M),this.setAttribute("position",new Gn(A,3)),this.setAttribute("normal",new Gn(R,3)),this.setAttribute("uv",new Gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.widthSegments,e.heightSegments)}}function na(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Hm(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Hm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const r=na(s[t]);for(const o in r)e[o]=r[o]}return e}function Hm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Nv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $g(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Lv={clone:na,merge:In};var Dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dv,this.fragmentShader=Iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=Nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Pt().setHex(o.value);break;case"v2":this.uniforms[r].value=new mt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new en().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Zt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Uv extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fv extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kv extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bl=new te,zl=new ia,Ni=new te;class Kg extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,zl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Bl,zl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new te,Gm=new mt,Wm=new mt;class oi extends Kg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(Zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,Gm,Wm),t.subVectors(Wm,Gm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zg extends Kg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ys=-90,js=1;class Ov extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new oi(Ys,js,e,t);o.layers=this.layers,this.add(o);const l=new oi(Ys,js,e,t);l.layers=this.layers,this.add(l);const u=new oi(Ys,js,e,t);u.layers=this.layers,this.add(u);const f=new oi(Ys,js,e,t);f.layers=this.layers,this.add(f);const p=new oi(Ys,js,e,t);p.layers=this.layers,this.add(p);const m=new oi(Ys,js,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,p]=t;for(const m of t)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,m,_]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(y,g,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Bv extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const kf=class kf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};kf.prototype.isMatrix2=!0;let Xm=kf;function qm(s,e,t,r){const o=Vv(r);switch(t){case Lg:return s*e;case Ig:return s*e/o.components*o.byteLength;case Ef:return s*e/o.components*o.byteLength;case ss:return s*e*2/o.components*o.byteLength;case Tf:return s*e*2/o.components*o.byteLength;case Dg:return s*e*3/o.components*o.byteLength;case wi:return s*e*4/o.components*o.byteLength;case wf:return s*e*4/o.components*o.byteLength;case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ql:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:case zd:return Math.max(s,16)*Math.max(e,8)/4;case kd:case Bd:return Math.max(s,8)*Math.max(e,8)/2;case Vd:case Hd:case Wd:case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gd:case $l:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case af:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case of:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lf:case cf:case uf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kl:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vv(s){switch(s){case li:case Rg:return{byteLength:1,components:1};case io:case bg:case Bi:return{byteLength:2,components:1};case yf:case Mf:return{byteLength:2,components:4};case Oi:case Sf:case Ui:return{byteLength:4,components:1};case Pg:case Ng:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vf}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Hv(s){const e=new WeakMap;function t(f,p){const m=f.array,_=f.usage,y=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,_),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,p,m){const _=p.array,y=p.updateRanges;if(s.bindBuffer(m,f),y.length===0)s.bufferSubData(m,0,_);else{y.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<y.length;M++){const A=y[g],R=y[M];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++g,y[g]=R)}y.length=g+1;for(let M=0,A=y.length;M<A;M++){const R=y[M];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:u}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$v=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,US=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,FS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ry=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,by=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ky=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Oy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ky=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:Gv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:qv,alphatest_fragment:Yv,alphatest_pars_fragment:jv,aomap_fragment:$v,aomap_pars_fragment:Kv,batching_pars_vertex:Zv,batching_vertex:Qv,begin_vertex:Jv,beginnormal_vertex:eS,bsdfs:tS,iridescence_fragment:nS,bumpmap_pars_fragment:iS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:sS,clipping_planes_pars_vertex:aS,clipping_planes_vertex:oS,color_fragment:lS,color_pars_fragment:cS,color_pars_vertex:uS,color_vertex:dS,common:fS,cube_uv_reflection_fragment:hS,defaultnormal_vertex:pS,displacementmap_pars_vertex:mS,displacementmap_vertex:gS,emissivemap_fragment:xS,emissivemap_pars_fragment:_S,colorspace_fragment:vS,colorspace_pars_fragment:SS,envmap_fragment:yS,envmap_common_pars_fragment:MS,envmap_pars_fragment:ES,envmap_pars_vertex:TS,envmap_physical_pars_fragment:US,envmap_vertex:wS,fog_vertex:AS,fog_pars_vertex:CS,fog_fragment:RS,fog_pars_fragment:bS,gradientmap_pars_fragment:PS,lightmap_pars_fragment:NS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:DS,lights_pars_begin:IS,lights_toon_fragment:FS,lights_toon_pars_fragment:kS,lights_phong_fragment:OS,lights_phong_pars_fragment:BS,lights_physical_fragment:zS,lights_physical_pars_fragment:VS,lights_fragment_begin:HS,lights_fragment_maps:GS,lights_fragment_end:WS,lightprobes_pars_fragment:XS,logdepthbuf_fragment:qS,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:jS,logdepthbuf_vertex:$S,map_fragment:KS,map_pars_fragment:ZS,map_particle_fragment:QS,map_particle_pars_fragment:JS,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ty,morphinstance_vertex:ny,morphcolor_vertex:iy,morphnormal_vertex:ry,morphtarget_pars_vertex:sy,morphtarget_vertex:ay,normal_fragment_begin:oy,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:uy,normal_vertex:dy,normalmap_pars_fragment:fy,clearcoat_normal_fragment_begin:hy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:gy,opaque_fragment:xy,packing:_y,premultiplied_alpha_fragment:vy,project_vertex:Sy,dithering_fragment:yy,dithering_pars_fragment:My,roughnessmap_fragment:Ey,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ay,shadowmap_vertex:Cy,shadowmask_pars_fragment:Ry,skinbase_vertex:by,skinning_pars_vertex:Py,skinning_vertex:Ny,skinnormal_vertex:Ly,specularmap_fragment:Dy,specularmap_pars_fragment:Iy,tonemapping_fragment:Uy,tonemapping_pars_fragment:Fy,transmission_fragment:ky,transmission_pars_fragment:Oy,uv_pars_fragment:By,uv_pars_vertex:zy,uv_vertex:Vy,worldpos_vertex:Hy,background_vert:Gy,background_frag:Wy,backgroundCube_vert:Xy,backgroundCube_frag:qy,cube_vert:Yy,cube_frag:jy,depth_vert:$y,depth_frag:Ky,distance_vert:Zy,distance_frag:Qy,equirect_vert:Jy,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:aM,meshmatcap_vert:oM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:dM,meshphong_frag:fM,meshphysical_vert:hM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:xM,points_frag:_M,shadow_vert:vM,shadow_frag:SM,sprite_vert:yM,sprite_frag:MM},Oe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Di={basic:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:In([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:In([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:In([Oe.points,Oe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:In([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:In([Oe.common,Oe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:In([Oe.sprite,Oe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:In([Oe.common,Oe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:In([Oe.lights,Oe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Di.physical={uniforms:In([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Vl={r:0,b:0,g:0},EM=new Zt,Jg=new ft;Jg.set(-1,0,0,0,1,0,0,0,1);function TM(s,e,t,r,o,l){const u=new Pt(0);let f=o===!0?0:1,p,m,_=null,y=0,g=null;function M(b){let O=b.isScene===!0?b.background:null;if(O&&O.isTexture){const C=b.backgroundBlurriness>0;O=e.get(O,C)}return O}function A(b){let O=!1;const C=M(b);C===null?v(u,f):C&&C.isColor&&(v(C,1),O=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(b,O){const C=M(O);C&&(C.isCubeTexture||C.mapping===ac)?(m===void 0&&(m=new zi(new lo(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:na(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(EM.makeRotationFromEuler(O.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Jg),m.material.toneMapped=wt.getTransfer(C.colorSpace)!==kt,(_!==C||y!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=C,y=C.version,g=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new zi(new oc(2,2),new Vi({name:"BackgroundMaterial",uniforms:na(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=wt.getTransfer(C.colorSpace)!==kt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||y!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=C,y=C.version,g=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function v(b,O){b.getRGB(Vl,$g(s)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,O,l)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,O=1){u.set(b),f=O,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,v(u,f)},render:A,addToRenderList:R,dispose:x}}function wM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(q,Q,oe,W,Z){let pe=!1;const ne=y(q,W,oe,Q);l!==ne&&(l=ne,m(l.object)),pe=M(q,W,oe,Z),pe&&A(q,W,oe,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,C(q,Q,oe,W),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return s.createVertexArray()}function m(q){return s.bindVertexArray(q)}function _(q){return s.deleteVertexArray(q)}function y(q,Q,oe,W){const Z=W.wireframe===!0;let pe=r[Q.id];pe===void 0&&(pe={},r[Q.id]=pe);const ne=q.isInstancedMesh===!0?q.id:0;let K=pe[ne];K===void 0&&(K={},pe[ne]=K);let Y=K[oe.id];Y===void 0&&(Y={},K[oe.id]=Y);let j=Y[Z];return j===void 0&&(j=g(p()),Y[Z]=j),j}function g(q){const Q=[],oe=[],W=[];for(let Z=0;Z<t;Z++)Q[Z]=0,oe[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:oe,attributeDivisors:W,object:q,attributes:{},index:null}}function M(q,Q,oe,W){const Z=l.attributes,pe=Q.attributes;let ne=0;const K=oe.getAttributes();for(const Y in K)if(K[Y].location>=0){const L=Z[Y];let ae=pe[Y];if(ae===void 0&&(Y==="instanceMatrix"&&q.instanceMatrix&&(ae=q.instanceMatrix),Y==="instanceColor"&&q.instanceColor&&(ae=q.instanceColor)),L===void 0||L.attribute!==ae||ae&&L.data!==ae.data)return!0;ne++}return l.attributesNum!==ne||l.index!==W}function A(q,Q,oe,W){const Z={},pe=Q.attributes;let ne=0;const K=oe.getAttributes();for(const Y in K)if(K[Y].location>=0){let L=pe[Y];L===void 0&&(Y==="instanceMatrix"&&q.instanceMatrix&&(L=q.instanceMatrix),Y==="instanceColor"&&q.instanceColor&&(L=q.instanceColor));const ae={};ae.attribute=L,L&&L.data&&(ae.data=L.data),Z[Y]=ae,ne++}l.attributes=Z,l.attributesNum=ne,l.index=W}function R(){const q=l.newAttributes;for(let Q=0,oe=q.length;Q<oe;Q++)q[Q]=0}function v(q){x(q,0)}function x(q,Q){const oe=l.newAttributes,W=l.enabledAttributes,Z=l.attributeDivisors;oe[q]=1,W[q]===0&&(s.enableVertexAttribArray(q),W[q]=1),Z[q]!==Q&&(s.vertexAttribDivisor(q,Q),Z[q]=Q)}function b(){const q=l.newAttributes,Q=l.enabledAttributes;for(let oe=0,W=Q.length;oe<W;oe++)Q[oe]!==q[oe]&&(s.disableVertexAttribArray(oe),Q[oe]=0)}function O(q,Q,oe,W,Z,pe,ne){ne===!0?s.vertexAttribIPointer(q,Q,oe,Z,pe):s.vertexAttribPointer(q,Q,oe,W,Z,pe)}function C(q,Q,oe,W){R();const Z=W.attributes,pe=oe.getAttributes(),ne=Q.defaultAttributeValues;for(const K in pe){const Y=pe[K];if(Y.location>=0){let j=Z[K];if(j===void 0&&(K==="instanceMatrix"&&q.instanceMatrix&&(j=q.instanceMatrix),K==="instanceColor"&&q.instanceColor&&(j=q.instanceColor)),j!==void 0){const L=j.normalized,ae=j.itemSize,ve=e.get(j);if(ve===void 0)continue;const ce=ve.buffer,Se=ve.type,Re=ve.bytesPerElement,J=Se===s.INT||Se===s.UNSIGNED_INT||j.gpuType===Sf;if(j.isInterleavedBufferAttribute){const de=j.data,Te=de.stride,Ke=j.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<Y.locationSize;Be++)x(Y.location+Be,de.meshPerAttribute);q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<Y.locationSize;Be++)v(Y.location+Be);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let Be=0;Be<Y.locationSize;Be++)O(Y.location+Be,ae/Y.locationSize,Se,L,Te*Re,(Ke+ae/Y.locationSize*Be)*Re,J)}else{if(j.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)x(Y.location+de,j.meshPerAttribute);q.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let de=0;de<Y.locationSize;de++)v(Y.location+de);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let de=0;de<Y.locationSize;de++)O(Y.location+de,ae/Y.locationSize,Se,L,ae*Re,ae/Y.locationSize*de*Re,J)}}else if(ne!==void 0){const L=ne[K];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(Y.location,L);break;case 3:s.vertexAttrib3fv(Y.location,L);break;case 4:s.vertexAttrib4fv(Y.location,L);break;default:s.vertexAttrib1fv(Y.location,L)}}}}b()}function N(){D();for(const q in r){const Q=r[q];for(const oe in Q){const W=Q[oe];for(const Z in W){const pe=W[Z];for(const ne in pe)_(pe[ne].object),delete pe[ne];delete W[Z]}}delete r[q]}}function P(q){if(r[q.id]===void 0)return;const Q=r[q.id];for(const oe in Q){const W=Q[oe];for(const Z in W){const pe=W[Z];for(const ne in pe)_(pe[ne].object),delete pe[ne];delete W[Z]}}delete r[q.id]}function F(q){for(const Q in r){const oe=r[Q];for(const W in oe){const Z=oe[W];if(Z[q.id]===void 0)continue;const pe=Z[q.id];for(const ne in pe)_(pe[ne].object),delete pe[ne];delete Z[q.id]}}}function E(q){for(const Q in r){const oe=r[Q],W=q.isInstancedMesh===!0?q.id:0,Z=oe[W];if(Z!==void 0){for(const pe in Z){const ne=Z[pe];for(const K in ne)_(ne[K].object),delete ne[K];delete Z[pe]}delete oe[W],Object.keys(oe).length===0&&delete r[Q]}}}function D(){B(),u=!0,l!==o&&(l=o,m(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:B,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:v,disableUnusedAttributes:b}}function AM(s,e,t){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,_){_!==0&&(s.drawArraysInstanced(r,p,m,_),t.update(m,r,_))}function f(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let g=0;for(let M=0;M<_;M++)g+=m[M];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function CM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==wi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const E=F===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==li&&F!==Ui&&!E&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(ot("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:b,maxVaryings:O,maxFragmentUniforms:C,maxSamples:N,samples:P}}function RM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Pr,f=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||r!==0||o;return o=g,r=y.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){t=_(y,g,0)},this.setState=function(y,g,M){const A=y.clippingPlanes,R=y.clipIntersection,v=y.clipShadows,x=s.get(y);if(!o||A===null||A.length===0||l&&!v)l?_(null):m();else{const b=l?0:r,O=b*4;let C=x.clippingState||null;p.value=C,C=_(A,g,O,M);for(let N=0;N!==O;++N)C[N]=t[N];x.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,g,M,A){const R=y!==null?y.length:0;let v=null;if(R!==0){if(v=p.value,A!==!0||v===null){const x=M+R*4,b=g.matrixWorldInverse;f.getNormalMatrix(b),(v===null||v.length<x)&&(v=new Float32Array(x));for(let O=0,C=M;O!==R;++O,C+=4)u.copy(y[O]).applyMatrix4(b,f),u.normal.toArray(v,C),v[C+3]=u.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}const Qs=4,bM=6,PM=20,NM=256,Ka=new Zg,Ym=new Pt;let yd=null,Md=0,Ed=0,Td=!1;const LM=new te,es=new te;class jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=LM}=l;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=Td,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Bi,format:wi,colorSpace:Zl,depthBuffer:!1},o=$m(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=DM(l)),this._blurMaterial=UM(l,e,t),this._ggxMaterial=IM(l,e,t)}return o}_compileMaterial(e){const t=new zi(new Un,e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,r,o,l){const p=new oi(90,1,t,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor(Ym),y.toneMapping=ki,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zi(new lo,new Pf({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,v=R.material;let x=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,x=!0):(v.color.copy(Ym),x=!0);for(let O=0;O<6;O++){const C=O%3;C===0?(p.up.set(0,m[O],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[O],l.y,l.z)):C===1?(p.up.set(0,0,m[O]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[O],l.z)):(p.up.set(0,m[O],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[O]));const N=this._cubeSize;$s(o,C*N,O>2?N:0,N,N),y.setRenderTarget(o),x&&y.render(R,p),y.render(e,p)}y.toneMapping=M,y.autoClear=g,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===rs||e.mapping===ta;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;$s(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,Ka)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),y=Math.sqrt(m*m-_*_),g=m*1.25,M=y*g,{_lodMax:A}=this,R=this._sizeLods[r],v=3*R*(r>A-Qs?r-A+Qs:0),x=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=A-t,$s(l,v,x,3*R,2*R),o.setRenderTarget(l),o.render(f,Ka),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=A-r,$s(e,v,x,3*R,2*R),o.setRenderTarget(e),o.render(f,Ka)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,f=this._blurMaterial,p=this._lodMeshes[o];p.material=f;const m=f.uniforms;m.envMap.value=e.texture,m.sigma.value=l,m.mipInt.value=this._lodMax-r;const _=this._sizeLods[o],y=3*_*(o>this._lodMax-Qs?o-this._lodMax+Qs:0),g=4*(this._cubeSize-_);$s(t,y,g,3*_,2*_),u.setRenderTarget(t),u.render(p,Ka)}}function DM(s){const e=[],t=[];let r=s;const o=s-Qs+1+bM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),p=-f,m=1+f,_=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,g=6,M=3,A=new Float32Array(M*g*y),R=new Float32Array(M*g*y);for(let x=0;x<y;x++){const b=x%3*2/3-1,O=x>2?0:-1,C=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];A.set(C,M*g*x);for(let N=0;N<g;N++){const P=_[N*2]*2-1,F=_[N*2+1]*2-1;x===0?es.set(1,F,P):x===1?es.set(-P,1,-F):x===2?es.set(-P,F,1):x===3?es.set(-1,F,-P):x===4?es.set(-P,-1,F):es.set(P,F,-1),es.toArray(R,(x*g+N)*M)}}const v=new Un;v.setAttribute("position",new ui(A,M)),v.setAttribute("outputDirection",new ui(R,M)),t.push(new zi(v,null)),r>Qs&&r--}return{lodMeshes:t,sizeLods:e}}function $m(s,e,t){const r=new Ai(s,e,t);return r.texture.mapping=ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function $s(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function IM(s,e,t){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function UM(s,e,t){return new Vi({name:"SphericalGaussianBlur",defines:{SAMPLES:PM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Km(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Zm(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class e0 extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Yg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new lo(5,5,5),l=new Vi({name:"CubemapFromEquirect",uniforms:na(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:rr});l.uniforms.tEquirect.value=t;const u=new zi(o,l),f=t.minFilter;return t.minFilter===ts&&(t.minFilter=Cn),new Ov(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function FM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Yu||M===ju)if(e.has(g)){const A=e.get(g).texture;return f(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const R=new e0(A.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",m),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,A=M===Yu||M===ju,R=M===rs||M===ta;if(A||R){let v=t.get(g);const x=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new jm(s)),v=A?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),v.texture;if(v!==void 0)return v.texture;{const b=g.image;return A&&b&&b.height>0||R&&b&&p(b)?(r===null&&(r=new jm(s)),v=A?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),g.addEventListener("dispose",_),v.texture):null}}}return g}function f(g,M){return M===Yu?g.mapping=rs:M===ju&&(g.mapping=ta),g}function p(g){let M=0;const A=6;for(let R=0;R<A;R++)g[R]!==void 0&&M++;return M===A}function m(g){const M=g.target;M.removeEventListener("dispose",m);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const A=t.get(M);A!==void 0&&(t.delete(M),A.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function kM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Js("WebGLRenderer: "+r+" extension not supported."),o}}}function OM(s,e,t,r){const o={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",u),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function p(y){const g=y.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(y){const g=[],M=y.index,A=y.attributes.position;let R=0;if(A===void 0)return;if(M!==null){const b=M.array;R=M.version;for(let O=0,C=b.length;O<C;O+=3){const N=b[O+0],P=b[O+1],F=b[O+2];g.push(N,P,P,F,F,N)}}else{const b=A.array;R=A.version;for(let O=0,C=b.length/3-1;O<C;O+=3){const N=O+0,P=O+1,F=O+2;g.push(N,P,P,F,F,N)}}const v=new(A.count>=65535?Vg:zg)(g,1);v.version=R;const x=l.get(y);x&&e.remove(x),l.set(y,v)}function _(y){const g=l.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&m(y)}else m(y);return l.get(y)}return{get:f,update:p,getWireframeAttribute:_}}function BM(s,e,t){let r;function o(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function p(y,g){s.drawElements(r,g,l,y*u),t.update(g,r,1)}function m(y,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,y*u,M),t.update(g,r,M))}function _(y,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,y,0,M);let R=0;for(let v=0;v<M;v++)R+=g[v];t.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function zM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:bt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function VM(s,e,t){const r=new WeakMap,o=new en;function l(u,f,p){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let g=r.get(f);if(g===void 0||g.count!==y){let B=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",B)};var M=B;g!==void 0&&g.texture.dispose();const A=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],O=f.morphAttributes.color||[];let C=0;A===!0&&(C=1),R===!0&&(C=2),v===!0&&(C=3);let N=f.attributes.position.count*C,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*P*4*y),E=new kg(F,N,P,y);E.type=Ui,E.needsUpdate=!0;const D=C*4;for(let q=0;q<y;q++){const Q=x[q],oe=b[q],W=O[q],Z=N*P*4*q;for(let pe=0;pe<Q.count;pe++){const ne=pe*D;A===!0&&(o.fromBufferAttribute(Q,pe),F[Z+ne+0]=o.x,F[Z+ne+1]=o.y,F[Z+ne+2]=o.z,F[Z+ne+3]=0),R===!0&&(o.fromBufferAttribute(oe,pe),F[Z+ne+4]=o.x,F[Z+ne+5]=o.y,F[Z+ne+6]=o.z,F[Z+ne+7]=0),v===!0&&(o.fromBufferAttribute(W,pe),F[Z+ne+8]=o.x,F[Z+ne+9]=o.y,F[Z+ne+10]=o.z,F[Z+ne+11]=W.itemSize===4?o.w:1)}}g={count:y,texture:E,size:new mt(N,P)},r.set(f,g),f.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let A=0;for(let v=0;v<m.length;v++)A+=m[v];const R=f.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function HM(s,e,t,r,o){let l=new WeakMap;function u(m){const _=o.render.frame,y=m.geometry,g=e.get(m,y);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==_&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==_&&(M.update(),l.set(M,_))}return g}function f(){l=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const GM={[Sg]:"LINEAR_TONE_MAPPING",[yg]:"REINHARD_TONE_MAPPING",[Mg]:"CINEON_TONE_MAPPING",[Eg]:"ACES_FILMIC_TONE_MAPPING",[wg]:"AGX_TONE_MAPPING",[Ag]:"NEUTRAL_TONE_MAPPING",[Tg]:"CUSTOM_TONE_MAPPING"};function WM(s,e,t,r,o,l){const u=new Ai(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,p=null;const m=new Un;m.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const _=new Uv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new zi(m,_),g=new Zg(-1,1,1,-1,0,1);let M=null,A=null,R=!1,v,x=null,b=[],O=!1;this.setSize=function(C,N){u.setSize(C,N),f!==null&&f.setSize(C,N),p!==null&&p.setSize(C,N);for(let P=0;P<b.length;P++){const F=b[P];F.setSize&&F.setSize(C,N)}},this.setEffects=function(C){b=C,O=b.length>0&&b[0].isRenderPass===!0;const N=u.width,P=u.height;b.length>0&&f===null&&(f=new Ai(N,P,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),p=new Ai(N,P,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<b.length;F++){const E=b[F];E.setSize&&E.setSize(N,P)}},this.begin=function(C,N){if(R||C.toneMapping===ki&&b.length===0)return!1;if(x=N,N!==null){const P=N.width,F=N.height;(u.width!==P||u.height!==F)&&this.setSize(P,F)}return O===!1&&C.setRenderTarget(u),v=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return O},this.end=function(C,N){C.toneMapping=v,R=!0;let P=u,F=f;for(let E=0;E<b.length;E++){const D=b[E];D.enabled!==!1&&(D.render(C,F,P,N),D.needsSwap!==!1&&(P=F,F=F===f?p:f))}if(M!==C.outputColorSpace||A!==C.toneMapping){M=C.outputColorSpace,A=C.toneMapping,_.defines={},wt.getTransfer(M)===kt&&(_.defines.SRGB_TRANSFER="");const E=GM[A];E&&(_.defines[E]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(x),C.render(y,g),x=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),p!==null&&p.dispose(),m.dispose(),_.dispose()}}const t0=new Rn,gf=new so(1,1),n0=new kg,i0=new av,r0=new Yg,Qm=[],Jm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function ra(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Qm[o];if(l===void 0&&(l=new Float32Array(o),Qm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function cc(s,e){let t=Jm[e];t===void 0&&(t=new Int32Array(e),Jm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function XM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function $M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(un(t,r))return;ng.set(r),s.uniformMatrix2fv(this.addr,!1,ng),dn(t,r)}}function KM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(un(t,r))return;tg.set(r),s.uniformMatrix3fv(this.addr,!1,tg),dn(t,r)}}function ZM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(un(t,r))return;eg.set(r),s.uniformMatrix4fv(this.addr,!1,eg),dn(t,r)}}function QM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function nE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function rE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function sE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function aE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(gf.compareFunction=t.isReversedDepthBuffer()?Cf:Af,l=gf):l=t0,t.setTexture2D(e||l,o)}function oE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||i0,o)}function lE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||r0,o)}function cE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||n0,o)}function uE(s){switch(s){case 5126:return XM;case 35664:return qM;case 35665:return YM;case 35666:return jM;case 35674:return $M;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return QM;case 35667:case 35671:return JM;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}function dE(s,e){s.uniform1fv(this.addr,e)}function fE(s,e){const t=ra(e,this.size,2);s.uniform2fv(this.addr,t)}function hE(s,e){const t=ra(e,this.size,3);s.uniform3fv(this.addr,t)}function pE(s,e){const t=ra(e,this.size,4);s.uniform4fv(this.addr,t)}function mE(s,e){const t=ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gE(s,e){const t=ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xE(s,e){const t=ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _E(s,e){s.uniform1iv(this.addr,e)}function vE(s,e){s.uniform2iv(this.addr,e)}function SE(s,e){s.uniform3iv(this.addr,e)}function yE(s,e){s.uniform4iv(this.addr,e)}function ME(s,e){s.uniform1uiv(this.addr,e)}function EE(s,e){s.uniform2uiv(this.addr,e)}function TE(s,e){s.uniform3uiv(this.addr,e)}function wE(s,e){s.uniform4uiv(this.addr,e)}function AE(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=gf:u=t0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function CE(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||i0,l[u])}function RE(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||r0,l[u])}function bE(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);un(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||n0,l[u])}function PE(s){switch(s){case 5126:return dE;case 35664:return fE;case 35665:return hE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return xE;case 5124:case 35670:return _E;case 35667:case 35671:return vE;case 35668:case 35672:return SE;case 35669:case 35673:return yE;case 5125:return ME;case 36294:return EE;case 36295:return TE;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return CE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return bE}}class NE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=uE(t.type)}}class LE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PE(t.type)}}class DE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function ig(s,e){s.seq.push(e),s.map[e.id]=e}function IE(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===o){ig(t,m===void 0?new NE(f,s,e):new LE(f,s,e));break}else{let y=t.map[f];y===void 0&&(y=new DE(f),ig(t,y)),t=y}}}class jl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),p=e.getUniformLocation(t,f.name);IE(f,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function rg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const UE=37297;let FE=0;function kE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const sg=new ft;function OE(s){wt._getMatrix(sg,wt.workingColorSpace,s);const e=`mat3( ${sg.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ag(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+kE(s.getShaderSource(e),f)}else return l}function BE(s,e){const t=OE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zE={[Sg]:"Linear",[yg]:"Reinhard",[Mg]:"Cineon",[Eg]:"ACESFilmic",[wg]:"AgX",[Ag]:"Neutral",[Tg]:"Custom"};function VE(s,e){const t=zE[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new te;function HE(){wt.getLuminanceCoefficients(Hl);const s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function WE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function XE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function eo(s){return s!==""}function og(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qE=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(s){return s.replace(qE,jE)}const YE=new Map;function jE(s,e){let t=vt[e];if(t===void 0){const r=YE.get(e);if(r!==void 0)t=vt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xf(t)}const $E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(s){return s.replace($E,KE)}function KE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ug(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZE={[Gl]:"SHADOWMAP_TYPE_PCF",[Qa]:"SHADOWMAP_TYPE_VSM"};function QE(s){return ZE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JE={[rs]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function e1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":JE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const t1={[ta]:"ENVMAP_MODE_REFRACTION"};function n1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":t1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i1={[vg]:"ENVMAP_BLENDING_MULTIPLY",[O_]:"ENVMAP_BLENDING_MIX",[B_]:"ENVMAP_BLENDING_ADD"};function r1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":i1[s.combine]||"ENVMAP_BLENDING_NONE"}function s1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function a1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const p=QE(t),m=e1(t),_=n1(t),y=r1(t),g=s1(t),M=GE(t),A=WE(l),R=o.createProgram();let v,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(eo).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(eo).join(`
`),x.length>0&&(x+=`
`)):(v=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),x=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?vt.tonemapping_pars_fragment:"",t.toneMapping!==ki?VE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,BE("linearToOutputTexel",t.outputColorSpace),HE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),u=xf(u),u=og(u,t),u=lg(u,t),f=xf(f),f=og(f,t),f=lg(f,t),u=cg(u),f=cg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=b+v+u,C=b+x+f,N=rg(o,o.VERTEX_SHADER,O),P=rg(o,o.FRAGMENT_SHADER,C);o.attachShader(R,N),o.attachShader(R,P),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function F(q){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(R)||"",oe=o.getShaderInfoLog(N)||"",W=o.getShaderInfoLog(P)||"",Z=Q.trim(),pe=oe.trim(),ne=W.trim();let K=!0,Y=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,N,P);else{const j=ag(o,N,"vertex"),L=ag(o,P,"fragment");bt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Z+`
`+j+`
`+L)}else Z!==""?ot("WebGLProgram: Program Info Log:",Z):(pe===""||ne==="")&&(Y=!1);Y&&(q.diagnostics={runnable:K,programLog:Z,vertexShader:{log:pe,prefix:v},fragmentShader:{log:ne,prefix:x}})}o.deleteShader(N),o.deleteShader(P),E=new jl(o,R),D=XE(o,R)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(R,UE)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=N,this.fragmentShader=P,this}let o1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new c1(e),t.set(e,r)),r}}class c1{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}}function u1(s){return s===ss||s===$l||s===Kl}function d1(s,e,t,r,o,l){const u=new Og,f=new l1,p=new Set,m=[],_=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return p.add(E),E===0?"uv":`uv${E}`}function R(E,D,B,q,Q,oe){const W=q.fog,Z=Q.geometry,pe=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?q.environment:null,ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,K=e.get(E.envMap||pe,ne),Y=K&&K.mapping===ac?K.image.height:null,j=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const L=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ae=L!==void 0?L.length:0;let ve=0;Z.morphAttributes.position!==void 0&&(ve=1),Z.morphAttributes.normal!==void 0&&(ve=2),Z.morphAttributes.color!==void 0&&(ve=3);let ce,Se,Re,J;if(j){const Nt=Di[j];ce=Nt.vertexShader,Se=Nt.fragmentShader}else{ce=E.vertexShader,Se=E.fragmentShader;const Nt=f.getVertexShaderStage(E),Ct=f.getFragmentShaderStage(E);f.update(E,Nt,Ct),Re=Nt.id,J=Ct.id}const de=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ke=Q.isInstancedMesh===!0,Be=Q.isBatchedMesh===!0,Ce=!!E.map,yt=!!E.matcap,Xe=!!K,ut=!!E.aoMap,Mt=!!E.lightMap,lt=!!E.bumpMap&&E.wireframe===!1,gt=!!E.normalMap,Bt=!!E.displacementMap,Ht=!!E.emissiveMap,nt=!!E.metalnessMap,ht=!!E.roughnessMap,z=E.anisotropy>0,Ut=E.clearcoat>0,xt=E.dispersion>0,I=E.retroreflectivity>0,S=E.iridescence>0,$=E.sheen>0,re=E.transmission>0,he=z&&!!E.anisotropyMap,we=Ut&&!!E.clearcoatMap,be=Ut&&!!E.clearcoatNormalMap,me=Ut&&!!E.clearcoatRoughnessMap,xe=S&&!!E.iridescenceMap,De=S&&!!E.iridescenceThicknessMap,Ze=$&&!!E.sheenColorMap,Ie=$&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Qe=!!E.specularColorMap,it=!!E.specularIntensityMap,at=re&&!!E.transmissionMap,H=re&&!!E.thicknessMap,Ne=!!E.gradientMap,ge=!!E.alphaMap,Le=E.alphaTest>0,ze=!!E.alphaHash,_e=!!E.extensions;let et=ki;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(et=s.toneMapping);const je={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:ce,fragmentShader:Se,defines:E.defines,customVertexShaderID:Re,customFragmentShaderID:J,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Be,batchingColor:Be&&Q._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&Q.instanceColor!==null,instancingMorph:Ke&&Q.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ce,matcap:yt,envMap:Xe,envMapMode:Xe&&K.mapping,envMapCubeUVHeight:Y,aoMap:ut,lightMap:Mt,bumpMap:lt,normalMap:gt,displacementMap:Bt,emissiveMap:Ht,normalMapObjectSpace:gt&&E.normalMapType===H_,normalMapTangentSpace:gt&&E.normalMapType===xm,packedNormalMap:gt&&E.normalMapType===xm&&u1(E.normalMap.format),metalnessMap:nt,roughnessMap:ht,anisotropy:z,anisotropyMap:he,clearcoat:Ut,clearcoatMap:we,clearcoatNormalMap:be,clearcoatRoughnessMap:me,dispersion:xt,retroreflection:I,iridescence:S,iridescenceMap:xe,iridescenceThicknessMap:De,sheen:$,sheenColorMap:Ze,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:Qe,specularIntensityMap:it,transmission:re,transmissionMap:at,thicknessMap:H,gradientMap:Ne,opaque:E.transparent===!1&&E.blending===to&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:Le,alphaHash:ze,combine:E.combine,mapUv:Ce&&A(E.map.channel),aoMapUv:ut&&A(E.aoMap.channel),lightMapUv:Mt&&A(E.lightMap.channel),bumpMapUv:lt&&A(E.bumpMap.channel),normalMapUv:gt&&A(E.normalMap.channel),displacementMapUv:Bt&&A(E.displacementMap.channel),emissiveMapUv:Ht&&A(E.emissiveMap.channel),metalnessMapUv:nt&&A(E.metalnessMap.channel),roughnessMapUv:ht&&A(E.roughnessMap.channel),anisotropyMapUv:he&&A(E.anisotropyMap.channel),clearcoatMapUv:we&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:be&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&A(E.sheenRoughnessMap.channel),specularMapUv:Pe&&A(E.specularMap.channel),specularColorMapUv:Qe&&A(E.specularColorMap.channel),specularIntensityMapUv:it&&A(E.specularIntensityMap.channel),transmissionMapUv:at&&A(E.transmissionMap.channel),thicknessMapUv:H&&A(E.thicknessMap.channel),alphaMapUv:ge&&A(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(gt||z),vertexNormals:!!Z.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Z.attributes.uv&&(Ce||ge),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Z.attributes.normal===void 0&&gt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Te,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ve,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:Ce&&E.map.isVideoTexture===!0&&wt.getTransfer(E.map.colorSpace)===kt,decodeVideoTextureEmissive:Ht&&E.emissiveMap.isVideoTexture===!0&&wt.getTransfer(E.emissiveMap.colorSpace)===kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===nr,flipSided:E.side===Hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_e&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&E.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return je.vertexUv1s=p.has(1),je.vertexUv2s=p.has(2),je.vertexUv3s=p.has(3),p.clear(),je}function v(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)D.push(B),D.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(x(D,E),b(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function x(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function b(E,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.retroreflection&&u.enable(24),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function O(E){const D=M[E.type];let B;if(D){const q=Di[D];B=Lv.clone(q.uniforms)}else B=E.uniforms;return B}function C(E,D){let B=_.get(D);return B!==void 0?++B.usedTimes:(B=new a1(s,D,E,o),m.push(B),_.set(D,B)),B}function N(E){if(--E.usedTimes===0){const D=m.indexOf(E);m[D]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function P(E){f.remove(E)}function F(){f.dispose()}return{getParameters:R,getProgramCacheKey:v,getUniforms:O,acquireProgram:C,releaseProgram:N,releaseShaderCache:P,programs:m,dispose:F}}function f1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function h1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function dg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,A,R,v,x){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:M,material:A,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:x},s[e]=b):(b.id=g.id,b.object=g,b.geometry=M,b.material=A,b.materialVariant=u(g),b.groupOrder=R,b.renderOrder=g.renderOrder,b.z=v,b.group=x),e++,b}function p(g,M,A,R,v,x,b){b.reversedDepth===!0&&(v=-v);const O=f(g,M,A,R,v,x);A.transmission>0?r.push(O):A.transparent===!0?o.push(O):t.push(O)}function m(g,M,A,R,v,x){const b=f(g,M,A,R,v,x);A.transmission>0?r.unshift(b):A.transparent===!0?o.unshift(b):t.unshift(b)}function _(g,M){t.length>1&&t.sort(g||h1),r.length>1&&r.sort(M||dg),o.length>1&&o.sort(M||dg)}function y(){for(let g=e,M=s.length;g<M;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:y,sort:_}}function p1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new fg,s.set(r,[u])):o>=l.length?(u=new fg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function m1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new te,color:new Pt};break;case"SpotLight":t={position:new te,direction:new te,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=t,t}}}function g1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let x1=0;function _1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function v1(s){const e=new m1,t=g1(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const o=new te,l=new Zt,u=new Zt;function f(m){let _=0,y=0,g=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let M=0,A=0,R=0,v=0,x=0,b=0,O=0,C=0,N=0,P=0,F=0,E=0,D=0,B=0;m.sort(_1);for(let Q=0,oe=m.length;Q<oe;Q++){const W=m[Q],Z=W.color,pe=W.intensity,ne=W.distance;let K=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===ss?K=W.shadow.map.texture:K=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)_+=Z.r*pe,y+=Z.g*pe,g+=Z.b*pe;else if(W.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(W.sh.coefficients[Y],pe);B++}else if(W.isSunLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const j=W.shadow,L=t.get(W);L.shadowIntensity=j.intensity,L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),r.sunShadow[A]=L,r.sunShadowMap[A]=K;const ae=j.getViewportCount();for(let ve=0;ve<ae;ve++)r.sunShadowMatrix[R+ve]=j.getMatrix(ve),r.sunShadowCascade[R+ve]=j._cascadeData[ve];R+=ae,A++}r.sun[M]=Y,M++}else if(W.isDirectionalLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const j=W.shadow,L=t.get(W);L.shadowIntensity=j.intensity,L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,r.directionalShadow[v]=L,r.directionalShadowMap[v]=K,r.directionalShadowMatrix[v]=W.shadow.matrix,N++}r.directional[v]=Y,v++}else if(W.isSpotLight){const Y=e.get(W);Y.position.setFromMatrixPosition(W.matrixWorld),Y.color.copy(Z).multiplyScalar(pe),Y.distance=ne,Y.coneCos=Math.cos(W.angle),Y.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),Y.decay=W.decay,r.spot[b]=Y;const j=W.shadow;if(W.map&&(r.spotLightMap[E]=W.map,E++,j.updateMatrices(W),W.castShadow&&D++),r.spotLightMatrix[b]=j.matrix,W.castShadow){const L=t.get(W);L.shadowIntensity=j.intensity,L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,r.spotShadow[b]=L,r.spotShadowMap[b]=K,F++}b++}else if(W.isRectAreaLight){const Y=e.get(W);Y.color.copy(Z).multiplyScalar(pe),Y.halfWidth.set(W.width*.5,0,0),Y.halfHeight.set(0,W.height*.5,0),r.rectArea[O]=Y,O++}else if(W.isPointLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),Y.distance=W.distance,Y.decay=W.decay,W.castShadow){const j=W.shadow,L=t.get(W);L.shadowIntensity=j.intensity,L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,L.shadowCameraNear=j.camera.near,L.shadowCameraFar=j.camera.far,r.pointShadow[x]=L,r.pointShadowMap[x]=K,r.pointShadowMatrix[x]=W.shadow.matrix,P++}r.point[x]=Y,x++}else if(W.isHemisphereLight){const Y=e.get(W);Y.skyColor.copy(W.color).multiplyScalar(pe),Y.groundColor.copy(W.groundColor).multiplyScalar(pe),r.hemi[C]=Y,C++}}O>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=g;const q=r.hash;(q.sunLength!==M||q.directionalLength!==v||q.pointLength!==x||q.spotLength!==b||q.rectAreaLength!==O||q.hemiLength!==C||q.numSunShadows!==A||q.numDirectionalShadows!==N||q.numPointShadows!==P||q.numSpotShadows!==F||q.numSpotMaps!==E||q.numLightProbes!==B)&&(r.sun.length=M,r.directional.length=v,r.spot.length=b,r.rectArea.length=O,r.point.length=x,r.hemi.length=C,r.sunShadow.length=A,r.sunShadowMap.length=A,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.directionalShadowMatrix.length=N,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+E-D,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=B,q.sunLength=M,q.directionalLength=v,q.pointLength=x,q.spotLength=b,q.rectAreaLength=O,q.hemiLength=C,q.numSunShadows=A,q.numDirectionalShadows=N,q.numPointShadows=P,q.numSpotShadows=F,q.numSpotMaps=E,q.numLightProbes=B,r.version=x1++)}function p(m,_){let y=0,g=0,M=0,A=0,R=0,v=0;const x=_.matrixWorldInverse;for(let b=0,O=m.length;b<O;b++){const C=m[b];if(C.isSunLight){const N=r.sun[y];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),y++}else if(C.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(x),g++}else if(C.isSpotLight){const N=r.spot[A];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(x),A++}else if(C.isRectAreaLight){const N=r.rectArea[R];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),u.identity(),l.copy(C.matrixWorld),l.premultiply(x),u.extractRotation(l),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),R++}else if(C.isPointLight){const N=r.point[M];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),M++}else if(C.isHemisphereLight){const N=r.hemi[v];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),v++}}}return{setup:f,setupView:p,state:r}}function hg(s){const e=new v1(s),t=[],r=[],o=[];function l(g){y.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function p(g){o.push(g)}function m(){e.setup(t)}function _(g){e.setupView(t,g)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:m,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function S1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new hg(s),e.set(o,[f])):l>=u.length?(f=new hg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,E1=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],T1=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],pg=new Zt,Za=new te,Ad=new te;function w1(s,e,t){let r=new Wg;const o=new mt,l=new mt,u=new en,f=new Fv,p=new kv,m={},_=t.maxTextureSize,y={[is]:Hn,[Hn]:is,[nr]:nr},g=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:y1,fragmentShader:M1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new Un;A.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new zi(A,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let x=this.type;this.render=function(P,F,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;this.type===v_&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gl);const D=s.getRenderTarget(),B=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(rr),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const oe=x!==this.type;oe&&F.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Z=>Z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Z=P.length;W<Z;W++){const pe=P[W],ne=pe.shadow;if(ne===void 0){ot("WebGLShadowMap:",pe,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;o.copy(ne.mapSize);const K=ne.getFrameExtents();o.multiply(K),l.copy(ne.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/K.x),o.x=l.x*K.x,ne.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/K.y),o.y=l.y*K.y,ne.mapSize.y=l.y));const Y=s.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=Y,ne.map===null||oe===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===Qa){if(pe.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new Ai(o.x,o.y,{format:ss,type:Bi,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),ne.map.texture.name=pe.name+".shadowMap",ne.map.depthTexture=new so(o.x,o.y,Ui),ne.map.depthTexture.name=pe.name+".shadowMapDepth",ne.map.depthTexture.format=ar,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=vn,ne.map.depthTexture.magFilter=vn}else pe.isPointLight?(ne.map=new e0(o.x),ne.map.depthTexture=new Pv(o.x,Oi)):(ne.map=new Ai(o.x,o.y),ne.map.depthTexture=new so(o.x,o.y,Oi)),ne.map.depthTexture.name=pe.name+".shadowMap",ne.map.depthTexture.format=ar,this.type===Gl?(ne.map.depthTexture.compareFunction=Y?Cf:Af,ne.map.depthTexture.minFilter=Cn,ne.map.depthTexture.magFilter=Cn):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=vn,ne.map.depthTexture.magFilter=vn);ne.camera.updateProjectionMatrix()}ne.map.isWebGLCubeRenderTarget!==!0&&(ne.map.width!==o.x||ne.map.height!==o.y)&&ne.map.setSize(o.x,o.y);const j=ne.map.isWebGLCubeRenderTarget?6:ne.getViewportCount();pe.isPointLight!==!0&&ne.updateMatrices(pe,E);for(let L=0;L<j;L++){const ae=ne.getCamera(L);if(pe.isPointLight){const ve=ne.camera,ce=ne.matrix,Se=pe.distance||ve.far;Se!==ve.far&&(ve.far=Se,ve.updateProjectionMatrix()),Za.setFromMatrixPosition(pe.matrixWorld),ve.position.copy(Za),Ad.copy(ve.position),Ad.add(E1[L]),ve.up.copy(T1[L]),ve.lookAt(Ad),ve.updateMatrixWorld(),ce.makeTranslation(-Za.x,-Za.y,-Za.z),pg.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(pg,ve.coordinateSystem,ve.reversedDepth)}if(ne.map.isWebGLCubeRenderTarget)s.setRenderTarget(ne.map,L),s.clear();else{L===0&&(s.setRenderTarget(ne.map),s.clear());const ve=ne.getViewport(L);u.set(l.x*ve.x,l.y*ve.y,l.x*ve.z,l.y*ve.w),Q.viewport(u)}r=ne.getFrustum(L),C(F,E,ae,pe,this.type)}ne.isPointLightShadow!==!0&&this.type===Qa&&b(ne,E),ne.needsUpdate=!1}x=this.type,v.needsUpdate=!1,s.setRenderTarget(D,B,q)};function b(P,F){const E=e.update(R);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ai(o.x,o.y,{format:ss,type:Bi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value.set(P.map.width,P.map.height),g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,E,g,R,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value.set(P.map.width,P.map.height),M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,E,M,R,null)}function O(P,F,E,D){let B=null;const q=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)B=q;else if(B=E.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=B.uuid,oe=F.uuid;let W=m[Q];W===void 0&&(W={},m[Q]=W);let Z=W[oe];Z===void 0&&(Z=B.clone(),W[oe]=Z,F.addEventListener("dispose",N)),B=Z}if(B.visible=F.visible,B.wireframe=F.wireframe,D===Qa?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:y[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const Q=s.properties.get(B);Q.light=E}return B}function C(P,F,E,D,B){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===Qa)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const oe=e.update(P),W=P.material;if(Array.isArray(W)){const Z=oe.groups;for(let pe=0,ne=Z.length;pe<ne;pe++){const K=Z[pe],Y=W[K.materialIndex];if(Y&&Y.visible){const j=O(P,Y,D,B);P.onBeforeShadow(s,P,F,E,oe,j,K),s.renderBufferDirect(E,null,oe,j,P,K),P.onAfterShadow(s,P,F,E,oe,j,K)}}}else if(W.visible){const Z=O(P,W,D,B);P.onBeforeShadow(s,P,F,E,oe,Z,null),s.renderBufferDirect(E,null,oe,Z,P,null),P.onAfterShadow(s,P,F,E,oe,Z,null)}}const Q=P.children;for(let oe=0,W=Q.length;oe<W;oe++)C(Q[oe],F,E,D,B)}function N(P){P.target.removeEventListener("dispose",N);for(const E in m){const D=m[E],B=P.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}}function A1(s,e){function t(){let H=!1;const Ne=new en;let ge=null;const Le=new en(0,0,0,0);return{setMask:function(ze){ge!==ze&&!H&&(s.colorMask(ze,ze,ze,ze),ge=ze)},setLocked:function(ze){H=ze},setClear:function(ze,_e,et,je,Nt){Nt===!0&&(ze*=je,_e*=je,et*=je),Ne.set(ze,_e,et,je),Le.equals(Ne)===!1&&(s.clearColor(ze,_e,et,je),Le.copy(Ne))},reset:function(){H=!1,ge=null,Le.set(-1,0,0,0)}}}function r(){let H=!1,Ne=!1,ge=null,Le=null,ze=null;return{setReversed:function(_e){if(Ne!==_e){const et=e.get("EXT_clip_control");_e?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Ne=_e;const je=ze;ze=null,this.setClear(je)}},getReversed:function(){return Ne},setTest:function(_e){_e?de(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(_e){ge!==_e&&!H&&(s.depthMask(_e),ge=_e)},setFunc:function(_e){if(Ne&&(_e=J_[_e]),Le!==_e){switch(_e){case Rd:s.depthFunc(s.NEVER);break;case bd:s.depthFunc(s.ALWAYS);break;case Pd:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Nd:s.depthFunc(s.EQUAL);break;case Ld:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case Id:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=_e}},setLocked:function(_e){H=_e},setClear:function(_e){ze!==_e&&(ze=_e,Ne&&(_e=1-_e),s.clearDepth(_e))},reset:function(){H=!1,ge=null,Le=null,ze=null,Ne=!1}}}function o(){let H=!1,Ne=null,ge=null,Le=null,ze=null,_e=null,et=null,je=null,Nt=null;return{setTest:function(Ct){H||(Ct?de(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Ct){Ne!==Ct&&!H&&(s.stencilMask(Ct),Ne=Ct)},setFunc:function(Ct,gn,Zn){(ge!==Ct||Le!==gn||ze!==Zn)&&(s.stencilFunc(Ct,gn,Zn),ge=Ct,Le=gn,ze=Zn)},setOp:function(Ct,gn,Zn){(_e!==Ct||et!==gn||je!==Zn)&&(s.stencilOp(Ct,gn,Zn),_e=Ct,et=gn,je=Zn)},setLocked:function(Ct){H=Ct},setClear:function(Ct){Nt!==Ct&&(s.clearStencil(Ct),Nt=Ct)},reset:function(){H=!1,Ne=null,ge=null,Le=null,ze=null,_e=null,et=null,je=null,Nt=null}}}const l=new t,u=new r,f=new o,p=new WeakMap,m=new WeakMap;let _={},y={},g={},M=new WeakMap,A=[],R=null,v=!1,x=null,b=null,O=null,C=null,N=null,P=null,F=null,E=new Pt(0,0,0),D=0,B=!1,q=null,Q=null,oe=null,W=null,Z=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ne=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ne=K>=2);let j=null,L={};const ae=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),ce=new en().fromArray(ae),Se=new en().fromArray(ve);function Re(H,Ne,ge,Le){const ze=new Uint8Array(4),_e=s.createTexture();s.bindTexture(H,_e),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ge;et++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Ne+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return _e}const J={};J[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(s.DEPTH_TEST),u.setFunc(no),lt(!1),gt(pm),de(s.CULL_FACE),ut(rr);function de(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Te(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ke(H,Ne){return g[H]!==Ne?(s.bindFramebuffer(H,Ne),g[H]=Ne,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Be(H,Ne){let ge=A,Le=!1;if(H){ge=M.get(Ne),ge===void 0&&(ge=[],M.set(Ne,ge));const ze=H.textures;if(ge.length!==ze.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,et=ze.length;_e<et;_e++)ge[_e]=s.COLOR_ATTACHMENT0+_e;ge.length=ze.length,Le=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Le=!0);Le&&s.drawBuffers(ge)}function Ce(H){return R!==H?(s.useProgram(H),R=H,!0):!1}const yt={[Ks]:s.FUNC_ADD,[y_]:s.FUNC_SUBTRACT,[M_]:s.FUNC_REVERSE_SUBTRACT};yt[E_]=s.MIN,yt[T_]=s.MAX;const Xe={[w_]:s.ZERO,[A_]:s.ONE,[C_]:s.SRC_COLOR,[xg]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[N_]:s.DST_COLOR,[b_]:s.DST_ALPHA,[R_]:s.ONE_MINUS_SRC_COLOR,[_g]:s.ONE_MINUS_SRC_ALPHA,[L_]:s.ONE_MINUS_DST_COLOR,[P_]:s.ONE_MINUS_DST_ALPHA,[I_]:s.CONSTANT_COLOR,[U_]:s.ONE_MINUS_CONSTANT_COLOR,[F_]:s.CONSTANT_ALPHA,[k_]:s.ONE_MINUS_CONSTANT_ALPHA};function ut(H,Ne,ge,Le,ze,_e,et,je,Nt,Ct){if(H===rr){v===!0&&(Te(s.BLEND),v=!1);return}if(v===!1&&(de(s.BLEND),v=!0),H!==S_){if(H!==x||Ct!==B){if((b!==Ks||N!==Ks)&&(s.blendEquation(s.FUNC_ADD),b=Ks,N=Ks),Ct)switch(H){case to:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zs:s.blendFunc(s.ONE,s.ONE);break;case mm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:bt("WebGLState: Invalid blending: ",H);break}else switch(H){case to:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case mm:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gm:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",H);break}O=null,C=null,P=null,F=null,E.set(0,0,0),D=0,x=H,B=Ct}return}ze=ze||Ne,_e=_e||ge,et=et||Le,(Ne!==b||ze!==N)&&(s.blendEquationSeparate(yt[Ne],yt[ze]),b=Ne,N=ze),(ge!==O||Le!==C||_e!==P||et!==F)&&(s.blendFuncSeparate(Xe[ge],Xe[Le],Xe[_e],Xe[et]),O=ge,C=Le,P=_e,F=et),(je.equals(E)===!1||Nt!==D)&&(s.blendColor(je.r,je.g,je.b,Nt),E.copy(je),D=Nt),x=H,B=!1}function Mt(H,Ne){H.side===nr?Te(s.CULL_FACE):de(s.CULL_FACE);let ge=H.side===Hn;Ne&&(ge=!ge),lt(ge),H.blending===to&&H.transparent===!1?ut(rr):ut(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Le=H.stencilWrite;f.setTest(Le),Le&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(H){q!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),q=H)}function gt(H){H!==x_?(de(s.CULL_FACE),H!==Q&&(H===pm?s.cullFace(s.BACK):H===__?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),Q=H}function Bt(H){H!==oe&&(ne&&s.lineWidth(H),oe=H)}function Ht(H,Ne,ge){H?(de(s.POLYGON_OFFSET_FILL),(W!==Ne||Z!==ge)&&(W=Ne,Z=ge,u.getReversed()&&(Ne=-Ne),s.polygonOffset(Ne,ge))):Te(s.POLYGON_OFFSET_FILL)}function nt(H){H?de(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function ht(H){H===void 0&&(H=s.TEXTURE0+pe-1),j!==H&&(s.activeTexture(H),j=H)}function z(H,Ne,ge){ge===void 0&&(j===null?ge=s.TEXTURE0+pe-1:ge=j);let Le=L[ge];Le===void 0&&(Le={type:void 0,texture:void 0},L[ge]=Le),(Le.type!==H||Le.texture!==Ne)&&(j!==ge&&(s.activeTexture(ge),j=ge),s.bindTexture(H,Ne||J[H]),Le.type=H,Le.texture=Ne)}function Ut(){const H=L[j];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function xt(){try{s.compressedTexImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function S(){try{s.texSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function $(){try{s.texSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function we(){try{s.texStorage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function be(){try{s.texStorage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function me(){try{s.texImage2D(...arguments)}catch(H){bt("WebGLState:",H)}}function xe(){try{s.texImage3D(...arguments)}catch(H){bt("WebGLState:",H)}}function De(H){return y[H]!==void 0?y[H]:s.getParameter(H)}function Ze(H,Ne){y[H]!==Ne&&(s.pixelStorei(H,Ne),y[H]=Ne)}function Ie(H){ce.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ce.copy(H))}function Pe(H){Se.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Se.copy(H))}function Qe(H,Ne){let ge=m.get(Ne);ge===void 0&&(ge=new WeakMap,m.set(Ne,ge));let Le=ge.get(H);Le===void 0&&(Le=s.getUniformBlockIndex(Ne,H.name),ge.set(H,Le))}function it(H,Ne){const Le=m.get(Ne).get(H);p.get(Ne)!==Le&&(s.uniformBlockBinding(Ne,Le,H.__bindingPointIndex),p.set(Ne,Le))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},y={},j=null,L={},g={},M=new WeakMap,A=[],R=null,v=!1,x=null,b=null,O=null,C=null,N=null,P=null,F=null,E=new Pt(0,0,0),D=0,B=!1,q=null,Q=null,oe=null,W=null,Z=null,ce.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:de,disable:Te,bindFramebuffer:Ke,drawBuffers:Be,useProgram:Ce,setBlending:ut,setMaterial:Mt,setFlipSided:lt,setCullFace:gt,setLineWidth:Bt,setPolygonOffset:Ht,setScissorTest:nt,activeTexture:ht,bindTexture:z,unbindTexture:Ut,compressedTexImage2D:xt,compressedTexImage3D:I,texImage2D:me,texImage3D:xe,pixelStorei:Ze,getParameter:De,updateUBOMapping:Qe,uniformBlockBinding:it,texStorage2D:we,texStorage3D:be,texSubImage2D:S,texSubImage3D:$,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Ie,viewport:Pe,reset:at}}function C1(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new mt,_=new WeakMap,y=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,S){return A?new OffscreenCanvas(I,S):ec("canvas")}function v(I,S,$){let re=1;const he=xt(I);if((he.width>$||he.height>$)&&(re=$/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const we=Math.floor(re*he.width),be=Math.floor(re*he.height);g===void 0&&(g=R(we,be));const me=S?R(we,be):g;return me.width=we,me.height=be,me.getContext("2d").drawImage(I,0,0,we,be),ot("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+we+"x"+be+")."),me}else return"data"in I&&ot("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function x(I){return I.generateMipmaps}function b(I){s.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(I,S,$,re,he,we=!1){if(I!==null){if(s[I]!==void 0)return s[I];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let be;re&&(be=e.get("EXT_texture_norm16"),be||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=S;if(S===s.RED&&($===s.FLOAT&&(me=s.R32F),$===s.HALF_FLOAT&&(me=s.R16F),$===s.UNSIGNED_BYTE&&(me=s.R8),$===s.UNSIGNED_SHORT&&be&&(me=be.R16_EXT),$===s.SHORT&&be&&(me=be.R16_SNORM_EXT)),S===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.R8UI),$===s.UNSIGNED_SHORT&&(me=s.R16UI),$===s.UNSIGNED_INT&&(me=s.R32UI),$===s.BYTE&&(me=s.R8I),$===s.SHORT&&(me=s.R16I),$===s.INT&&(me=s.R32I)),S===s.RG&&($===s.FLOAT&&(me=s.RG32F),$===s.HALF_FLOAT&&(me=s.RG16F),$===s.UNSIGNED_BYTE&&(me=s.RG8),$===s.UNSIGNED_SHORT&&be&&(me=be.RG16_EXT),$===s.SHORT&&be&&(me=be.RG16_SNORM_EXT)),S===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RG8UI),$===s.UNSIGNED_SHORT&&(me=s.RG16UI),$===s.UNSIGNED_INT&&(me=s.RG32UI),$===s.BYTE&&(me=s.RG8I),$===s.SHORT&&(me=s.RG16I),$===s.INT&&(me=s.RG32I)),S===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RGB8UI),$===s.UNSIGNED_SHORT&&(me=s.RGB16UI),$===s.UNSIGNED_INT&&(me=s.RGB32UI),$===s.BYTE&&(me=s.RGB8I),$===s.SHORT&&(me=s.RGB16I),$===s.INT&&(me=s.RGB32I)),S===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),$===s.UNSIGNED_INT&&(me=s.RGBA32UI),$===s.BYTE&&(me=s.RGBA8I),$===s.SHORT&&(me=s.RGBA16I),$===s.INT&&(me=s.RGBA32I)),S===s.RGB&&($===s.UNSIGNED_SHORT&&be&&(me=be.RGB16_EXT),$===s.SHORT&&be&&(me=be.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),S===s.RGBA){const xe=we?Ql:wt.getTransfer(he);$===s.FLOAT&&(me=s.RGBA32F),$===s.HALF_FLOAT&&(me=s.RGBA16F),$===s.UNSIGNED_BYTE&&(me=xe===kt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&be&&(me=be.RGBA16_EXT),$===s.SHORT&&be&&(me=be.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function N(I,S){let $;return I?S===null||S===Oi||S===ro?$=s.DEPTH24_STENCIL8:S===Ui?$=s.DEPTH32F_STENCIL8:S===io&&($=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Oi||S===ro?$=s.DEPTH_COMPONENT24:S===Ui?$=s.DEPTH_COMPONENT32F:S===io&&($=s.DEPTH_COMPONENT16),$}function P(I,S){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function F(I){const S=I.target;S.removeEventListener("dispose",F),D(S),S.isVideoTexture&&_.delete(S),S.isHTMLTexture&&y.delete(S)}function E(I){const S=I.target;S.removeEventListener("dispose",E),q(S)}function D(I){const S=r.get(I);if(S.__webglInit===void 0)return;const $=I.source,re=M.get($);if(re){const he=re[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&B(I),Object.keys(re).length===0&&M.delete($)}r.remove(I)}function B(I){const S=r.get(I);s.deleteTexture(S.__webglTexture);const $=I.source,re=M.get($);delete re[S.__cacheKey],u.memory.textures--}function q(I){const S=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let he=0;he<S.__webglFramebuffer[re].length;he++)s.deleteFramebuffer(S.__webglFramebuffer[re][he]);else s.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)s.deleteFramebuffer(S.__webglFramebuffer[re]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const $=I.textures;for(let re=0,he=$.length;re<he;re++){const we=r.get($[re]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),u.memory.textures--),r.remove($[re])}r.remove(I)}let Q=0;function oe(){Q=0}function W(){return Q}function Z(I){Q=I}function pe(){const I=Q;return I>=o.maxTextures&&ot("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),Q+=1,I}function ne(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function K(I,S){const $=r.get(I);if(I.isVideoTexture&&z(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const re=I.image;if(re===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Te($,I,S);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+S)}function Y(I,S){const $=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Te($,I,S);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+S)}function j(I,S){const $=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Te($,I,S);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+S)}function L(I,S){const $=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){Ke($,I,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+S)}const ae={[Ud]:s.REPEAT,[ir]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},ve={[vn]:s.NEAREST,[z_]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[$u]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},ce={[W_]:s.NEVER,[$_]:s.ALWAYS,[X_]:s.LESS,[Af]:s.LEQUAL,[q_]:s.EQUAL,[Cf]:s.GEQUAL,[Y_]:s.GREATER,[j_]:s.NOTEQUAL};function Se(I,S){if(S.type===Ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Cn||S.magFilter===$u||S.magFilter===pl||S.magFilter===ts||S.minFilter===Cn||S.minFilter===$u||S.minFilter===pl||S.minFilter===ts)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ae[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ae[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ae[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ve[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ve[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===vn||S.minFilter!==pl&&S.minFilter!==ts||S.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Re(I,S){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",F));const re=S.source;let he=M.get(re);he===void 0&&(he={},M.set(re,he));const we=ne(S);if(we!==I.__cacheKey){he[we]===void 0&&(he[we]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),he[we].usedTimes++;const be=he[I.__cacheKey];be!==void 0&&(he[I.__cacheKey].usedTimes--,be.usedTimes===0&&B(S)),I.__cacheKey=we,I.__webglTexture=he[we].texture}return $}function J(I,S,$){return Math.floor(Math.floor(I/$)/S)}function de(I,S,$,re){const we=I.updateRanges;if(we.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,$,re,S.data);else{we.sort((Ze,Ie)=>Ze.start-Ie.start);let be=0;for(let Ze=1;Ze<we.length;Ze++){const Ie=we[be],Pe=we[Ze],Qe=Ie.start+Ie.count,it=J(Pe.start,S.width,4),at=J(Ie.start,S.width,4);Pe.start<=Qe+1&&it===at&&J(Pe.start+Pe.count-1,S.width,4)===it?Ie.count=Math.max(Ie.count,Pe.start+Pe.count-Ie.start):(++be,we[be]=Pe)}we.length=be+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),De=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Ze=0,Ie=we.length;Ze<Ie;Ze++){const Pe=we[Ze],Qe=Math.floor(Pe.start/4),it=Math.ceil(Pe.count/4),at=Qe%S.width,H=Math.floor(Qe/S.width),Ne=it,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,at),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,at,H,Ne,ge,$,re,S.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function Te(I,S,$){let re=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=s.TEXTURE_3D);const he=Re(I,S),we=S.source;t.bindTexture(re,I.__webglTexture,s.TEXTURE0+$);const be=r.get(we);if(we.version!==be.__version||he===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ge=wt.getPrimaries(wt.workingColorSpace),Le=S.colorSpace===Nr?null:wt.getPrimaries(S.colorSpace),ze=S.colorSpace===Nr||ge===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let xe=v(S.image,!1,o.maxTextureSize);xe=Ut(S,xe);const De=l.convert(S.format,S.colorSpace),Ze=l.convert(S.type);let Ie=C(S.internalFormat,De,Ze,S.normalized,S.colorSpace,S.isVideoTexture);Se(re,S);let Pe;const Qe=S.mipmaps,it=S.isVideoTexture!==!0,at=be.__version===void 0||he===!0,H=we.dataReady,Ne=P(S,xe);if(S.isDepthTexture)Ie=N(S.format===ns,S.type),at&&(it?t.texStorage2D(s.TEXTURE_2D,1,Ie,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Ie,xe.width,xe.height,0,De,Ze,null));else if(S.isDataTexture)if(Qe.length>0){it&&at&&t.texStorage2D(s.TEXTURE_2D,Ne,Ie,Qe[0].width,Qe[0].height);for(let ge=0,Le=Qe.length;ge<Le;ge++)Pe=Qe[ge],it?H&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,De,Ze,Pe.data):t.texImage2D(s.TEXTURE_2D,ge,Ie,Pe.width,Pe.height,0,De,Ze,Pe.data);S.generateMipmaps=!1}else it?(at&&t.texStorage2D(s.TEXTURE_2D,Ne,Ie,xe.width,xe.height),H&&de(S,xe,De,Ze)):t.texImage2D(s.TEXTURE_2D,0,Ie,xe.width,xe.height,0,De,Ze,xe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){it&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Ie,Qe[0].width,Qe[0].height,xe.depth);for(let ge=0,Le=Qe.length;ge<Le;ge++)if(Pe=Qe[ge],S.format!==wi)if(De!==null)if(it){if(H)if(S.layerUpdates.size>0){const ze=qm(Pe.width,Pe.height,S.format,S.type);for(const _e of S.layerUpdates){const et=Pe.data.subarray(_e*ze/Pe.data.BYTES_PER_ELEMENT,(_e+1)*ze/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,_e,Pe.width,Pe.height,1,De,et)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,xe.depth,De,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,xe.depth,De,Ze,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Pe.width,Pe.height,xe.depth,0,De,Ze,Pe.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{it&&at&&t.texStorage2D(s.TEXTURE_2D,Ne,Ie,Qe[0].width,Qe[0].height);for(let ge=0,Le=Qe.length;ge<Le;ge++)Pe=Qe[ge],S.format!==wi?De!==null?it?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,De,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Ie,Pe.width,Pe.height,0,Pe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,De,Ze,Pe.data):t.texImage2D(s.TEXTURE_2D,ge,Ie,Pe.width,Pe.height,0,De,Ze,Pe.data)}else if(S.isDataArrayTexture)if(it){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Ie,xe.width,xe.height,xe.depth),H)if(S.layerUpdates.size>0){const ge=qm(xe.width,xe.height,S.format,S.type);for(const Le of S.layerUpdates){const ze=xe.data.subarray(Le*ge/xe.data.BYTES_PER_ELEMENT,(Le+1)*ge/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,xe.width,xe.height,1,De,Ze,ze)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,De,Ze,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,xe.width,xe.height,xe.depth,0,De,Ze,xe.data);else if(S.isData3DTexture)it?(at&&t.texStorage3D(s.TEXTURE_3D,Ne,Ie,xe.width,xe.height,xe.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,De,Ze,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,xe.width,xe.height,xe.depth,0,De,Ze,xe.data);else if(S.isFramebufferTexture){if(at)if(it)t.texStorage2D(s.TEXTURE_2D,Ne,Ie,xe.width,xe.height);else{let ge=xe.width,Le=xe.height;for(let ze=0;ze<Ne;ze++)t.texImage2D(s.TEXTURE_2D,ze,Ie,ge,Le,0,De,Ze,null),ge>>=1,Le>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),xe.parentNode!==ge){ge.appendChild(xe),y.add(S),ge.onpaint=Le=>{const ze=Le.changedElements;for(const _e of y)ze.includes(_e.image)&&(_e.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const ze=s.RGBA,_e=s.RGBA,et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ze,_e,et,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(it&&at){const ge=xt(Qe[0]);t.texStorage2D(s.TEXTURE_2D,Ne,Ie,ge.width,ge.height)}for(let ge=0,Le=Qe.length;ge<Le;ge++)Pe=Qe[ge],it?H&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,De,Ze,Pe):t.texImage2D(s.TEXTURE_2D,ge,Ie,De,Ze,Pe);S.generateMipmaps=!1}else if(it){if(at){const ge=xt(xe);t.texStorage2D(s.TEXTURE_2D,Ne,Ie,ge.width,ge.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ze,xe)}else t.texImage2D(s.TEXTURE_2D,0,Ie,De,Ze,xe);x(S)&&b(re),be.__version=we.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ke(I,S,$){if(S.image.length!==6)return;const re=Re(I,S),he=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+$);const we=r.get(he);if(he.version!==we.__version||re===!0){t.activeTexture(s.TEXTURE0+$);const be=wt.getPrimaries(wt.workingColorSpace),me=S.colorSpace===Nr?null:wt.getPrimaries(S.colorSpace),xe=S.colorSpace===Nr||be===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const De=S.isCompressedTexture||S.image[0].isCompressedTexture,Ze=S.image[0]&&S.image[0].isDataTexture,Ie=[];for(let _e=0;_e<6;_e++)!De&&!Ze?Ie[_e]=v(S.image[_e],!0,o.maxCubemapSize):Ie[_e]=Ze?S.image[_e].image:S.image[_e],Ie[_e]=Ut(S,Ie[_e]);const Pe=Ie[0],Qe=l.convert(S.format,S.colorSpace),it=l.convert(S.type),at=C(S.internalFormat,Qe,it,S.normalized,S.colorSpace),H=S.isVideoTexture!==!0,Ne=we.__version===void 0||re===!0,ge=he.dataReady;let Le=P(S,Pe);Se(s.TEXTURE_CUBE_MAP,S);let ze;if(De){H&&Ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,at,Pe.width,Pe.height);for(let _e=0;_e<6;_e++){ze=Ie[_e].mipmaps;for(let et=0;et<ze.length;et++){const je=ze[et];S.format!==wi?Qe!==null?H?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,je.width,je.height,Qe,je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,at,je.width,je.height,0,je.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,je.width,je.height,Qe,it,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,at,je.width,je.height,0,Qe,it,je.data)}}}else{if(ze=S.mipmaps,H&&Ne){ze.length>0&&Le++;const _e=xt(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ze){H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ie[_e].width,Ie[_e].height,Qe,it,Ie[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Ie[_e].width,Ie[_e].height,0,Qe,it,Ie[_e].data);for(let et=0;et<ze.length;et++){const Nt=ze[et].image[_e].image;H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,Nt.width,Nt.height,Qe,it,Nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,at,Nt.width,Nt.height,0,Qe,it,Nt.data)}}else{H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,it,Ie[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Qe,it,Ie[_e]);for(let et=0;et<ze.length;et++){const je=ze[et];H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,Qe,it,je.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,at,Qe,it,je.image[_e])}}}x(S)&&b(s.TEXTURE_CUBE_MAP),we.__version=he.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Be(I,S,$,re,he,we){const be=l.convert($.format,$.colorSpace),me=l.convert($.type),xe=C($.internalFormat,be,me,$.normalized,$.colorSpace),De=r.get(S),Ze=r.get($);if(Ze.__renderTarget=S,!De.__hasExternalTextures){const Ie=Math.max(1,S.width>>we),Pe=Math.max(1,S.height>>we);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,we,xe,Ie,Pe,S.depth,0,be,me,null):t.texImage2D(he,we,xe,Ie,Pe,0,be,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ht(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,he,Ze.__webglTexture,0,nt(S)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,he,Ze.__webglTexture,we),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(I,S,$){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){const re=S.depthTexture,he=re&&re.isDepthTexture?re.type:null,we=N(S.stencilBuffer,he),be=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ht(S)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt(S),we,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt(S),we,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,we,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,I)}else{const re=S.textures;for(let he=0;he<re.length;he++){const we=re[he],be=l.convert(we.format,we.colorSpace),me=l.convert(we.type),xe=C(we.internalFormat,be,me,we.normalized,we.colorSpace);ht(S)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt(S),xe,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt(S),xe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function yt(I,S,$){const re=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(S.depthTexture);if(he.__renderTarget=S,(!he.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),re){if(he.__webglInit===void 0&&(he.__webglInit=!0,S.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Se(s.TEXTURE_CUBE_MAP,S.depthTexture);const De=l.convert(S.depthTexture.format),Ze=l.convert(S.depthTexture.type);let Ie;S.depthTexture.format===ar?Ie=s.DEPTH_COMPONENT24:S.depthTexture.format===ns&&(Ie=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ie,S.width,S.height,0,De,Ze,null)}}else K(S.depthTexture,0);const we=he.__webglTexture,be=nt(S),me=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,xe=S.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ar)ht(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,me,we,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,xe,me,we,0);else if(S.depthTexture.format===ns)ht(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,me,we,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,xe,me,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(I){const S=r.get(I),$=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const re=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=re}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let re=0;re<6;re++)yt(S.__webglFramebuffer[re],I,re);else{const re=I.texture.mipmaps;re&&re.length>0?yt(S.__webglFramebuffer[0],I,0):yt(S.__webglFramebuffer,I,0)}else if($){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=s.createRenderbuffer(),Ce(S.__webglDepthbuffer[re],I,!1);else{const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=S.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,we)}}else{const re=I.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ce(S.__webglDepthbuffer,I,!1);else{const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,we)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(I,S,$){const re=r.get(I);S!==void 0&&Be(re.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Xe(I)}function Mt(I){const S=I.texture,$=r.get(I),re=r.get(S);I.addEventListener("dispose",E);const he=I.textures,we=I.isWebGLCubeRenderTarget===!0,be=he.length>1;if(be||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=S.version,u.memory.textures++),we){$.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[me]=[];for(let xe=0;xe<S.mipmaps.length;xe++)$.__webglFramebuffer[me][xe]=s.createFramebuffer()}else $.__webglFramebuffer[me]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)$.__webglFramebuffer[me]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(be)for(let me=0,xe=he.length;me<xe;me++){const De=r.get(he[me]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&ht(I)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const xe=he[me];$.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[me]);const De=l.convert(xe.format,xe.colorSpace),Ze=l.convert(xe.type),Ie=C(xe.internalFormat,De,Ze,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),Pe=nt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Ie,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,$.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Se(s.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Be($.__webglFramebuffer[me][xe],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else Be($.__webglFramebuffer[me],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(S)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let me=0,xe=he.length;me<xe;me++){const De=he[me],Ze=r.get(De);let Ie=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ie=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ze.__webglTexture),Se(Ie,De),Be($.__webglFramebuffer,I,De,s.COLOR_ATTACHMENT0+me,Ie,0),x(De)&&b(Ie)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,re.__webglTexture),Se(me,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Be($.__webglFramebuffer[xe],I,S,s.COLOR_ATTACHMENT0,me,xe);else Be($.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,me,0);x(S)&&b(me),t.unbindTexture()}I.depthBuffer&&Xe(I)}function lt(I){const S=I.textures;for(let $=0,re=S.length;$<re;$++){const he=S[$];if(x(he)){const we=O(I),be=r.get(he).__webglTexture;t.bindTexture(we,be),b(we),t.unbindTexture()}}}const gt=[],Bt=[];function Ht(I){if(I.samples>0){if(ht(I)===!1){const S=I.textures,$=I.width,re=I.height;let he=s.COLOR_BUFFER_BIT;const we=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=r.get(I),me=S.length>1;if(me)for(let De=0;De<S.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const xe=I.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let De=0;De<S.length;De++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const Ze=r.get(S[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,$,re,0,0,$,re,he,s.NEAREST),p===!0&&(gt.length=0,Bt.length=0,gt.push(s.COLOR_ATTACHMENT0+De),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(gt.push(we),Bt.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let De=0;De<S.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const Ze=r.get(S[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){const S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function nt(I){return Math.min(o.maxSamples,I.samples)}function ht(I){const S=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(I){const S=u.render.frame;_.get(I)!==S&&(_.set(I,S),I.update())}function Ut(I,S){const $=I.colorSpace,re=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Zl&&$!==Nr&&(wt.getTransfer($)===kt?(re!==wi||he!==li)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",$)),S}function xt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=pe,this.resetTextureUnits=oe,this.getTextureUnits=W,this.setTextureUnits=Z,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=L,this.rebindTextures=ut,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function R1(s,e){function t(r,o=Nr){let l;const u=wt.getTransfer(o);if(r===li)return s.UNSIGNED_BYTE;if(r===yf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Mf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ng)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Rg)return s.BYTE;if(r===bg)return s.SHORT;if(r===io)return s.UNSIGNED_SHORT;if(r===Sf)return s.INT;if(r===Oi)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===Bi)return s.HALF_FLOAT;if(r===Lg)return s.ALPHA;if(r===Dg)return s.RGB;if(r===wi)return s.RGBA;if(r===ar)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===Ig)return s.RED;if(r===Ef)return s.RED_INTEGER;if(r===ss)return s.RG;if(r===Tf)return s.RG_INTEGER;if(r===wf)return s.RGBA_INTEGER;if(r===Wl||r===Xl||r===ql||r===Yl)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kd||r===Od||r===Bd||r===zd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===kd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Od)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===Hd||r===Gd||r===Wd||r===Xd||r===$l||r===qd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vd||r===Hd)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Gd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Wd)return l.COMPRESSED_R11_EAC;if(r===Xd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===$l)return l.COMPRESSED_RG11_EAC;if(r===qd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Yd||r===jd||r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Yd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$d)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ef)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===af)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===of)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lf||r===cf||r===uf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===lf)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===df||r===ff||r===Kl||r===hf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===df)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ro?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new jg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Vi({vertexShader:b1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zi(new oc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L1 extends os{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",p=1,m=null,_=null,y=null,g=null,M=null,A=null;const R=typeof XRWebGLBinding<"u",v=new N1,x={},b=t.getContextAttributes();let O=null,C=null;const N=[],P=[],F=new mt;let E=null,D=null;const B=new oi;B.viewport=new en;const q=new oi;q.viewport=new en;const Q=[B,q],oe=new Bv;let W=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=N[J];return de===void 0&&(de=new rd,N[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=N[J];return de===void 0&&(de=new rd,N[J]=de),de.getGripSpace()},this.getHand=function(J){let de=N[J];return de===void 0&&(de=new rd,N[J]=de),de.getHandSpace()};function pe(J){const de=P.indexOf(J.inputSource);if(de===-1)return;const Te=N[de];Te!==void 0&&(Te.update(J.inputSource,J.frame,m||u),Te.dispatchEvent({type:J.type,data:J.inputSource}))}function ne(){o.removeEventListener("select",pe),o.removeEventListener("selectstart",pe),o.removeEventListener("selectend",pe),o.removeEventListener("squeeze",pe),o.removeEventListener("squeezestart",pe),o.removeEventListener("squeezeend",pe),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",K);for(let J=0;J<N.length;J++){const de=P[J];de!==null&&(P[J]=null,N[J].disconnect(de))}W=null,Z=null,v.reset();for(const J in x)delete x[J];if(e.setRenderTarget(O),M=null,g=null,y=null,o=null,C=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),D!==null){const J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&R&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",pe),o.addEventListener("selectstart",pe),o.addEventListener("selectend",pe),o.addEventListener("squeeze",pe),o.addEventListener("squeezestart",pe),o.addEventListener("squeezeend",pe),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ke=null,Be=null;b.depth&&(Be=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=b.stencil?ns:ar,Ke=b.stencil?ro:Oi);const Ce={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(Ce),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Ai(g.textureWidth,g.textureHeight,{format:wi,type:li,depthTexture:new so(g.textureWidth,g.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Te),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Ai(M.framebufferWidth,M.framebufferHeight,{format:wi,type:li,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(f),Re.setContext(o),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(J){for(let de=0;de<J.removed.length;de++){const Te=J.removed[de],Ke=P.indexOf(Te);Ke>=0&&(P[Ke]=null,N[Ke].disconnect(Te))}for(let de=0;de<J.added.length;de++){const Te=J.added[de];let Ke=P.indexOf(Te);if(Ke===-1){for(let Ce=0;Ce<N.length;Ce++)if(Ce>=P.length){P.push(Te),Ke=Ce;break}else if(P[Ce]===null){P[Ce]=Te,Ke=Ce;break}if(Ke===-1)break}const Be=N[Ke];Be&&Be.connect(Te)}}const Y=new te,j=new te;function L(J,de,Te){Y.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(Te.matrixWorld);const Ke=Y.distanceTo(j),Be=de.projectionMatrix.elements,Ce=Te.projectionMatrix.elements,yt=Be[14]/(Be[10]-1),Xe=Be[14]/(Be[10]+1),ut=(Be[9]+1)/Be[5],Mt=(Be[9]-1)/Be[5],lt=(Be[8]-1)/Be[0],gt=(Ce[8]+1)/Ce[0],Bt=yt*lt,Ht=yt*gt,nt=Ke/(-lt+gt),ht=nt*-lt;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ht),J.translateZ(nt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Be[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const z=yt+nt,Ut=Xe+nt,xt=Bt-ht,I=Ht+(Ke-ht),S=ut*Xe/Ut*z,$=Mt*Xe/Ut*z;J.projectionMatrix.makePerspective(xt,I,S,$,z,Ut),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let de=J.near,Te=J.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),oe.near=q.near=B.near=de,oe.far=q.far=B.far=Te,(W!==oe.near||Z!==oe.far)&&(o.updateRenderState({depthNear:oe.near,depthFar:oe.far}),W=oe.near,Z=oe.far),oe.layers.mask=J.layers.mask|6,B.layers.mask=oe.layers.mask&-5,q.layers.mask=oe.layers.mask&-3;const Ke=J.parent,Be=oe.cameras;ae(oe,Ke);for(let Ce=0;Ce<Be.length;Ce++)ae(Be[Ce],Ke);Be.length===2?L(oe,B,q):oe.projectionMatrix.copy(B.projectionMatrix),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),ve(J,oe,Ke)};function ve(J,de,Te){Te===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=pf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(J){p=J,g!==null&&(g.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(oe)},this.getCameraTexture=function(J){return x[J]};let ce=null;function Se(J,de){if(_=de.getViewerPose(m||u),A=de,_!==null){const Te=_.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let Ke=!1;Te.length!==oe.cameras.length&&(oe.cameras.length=0,Ke=!0);for(let Xe=0;Xe<Te.length;Xe++){const ut=Te[Xe];let Mt=null;if(M!==null)Mt=M.getViewport(ut);else{const gt=y.getViewSubImage(g,ut);Mt=gt.viewport,Xe===0&&(e.setRenderTargetTextures(C,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(C))}let lt=Q[Xe];lt===void 0&&(lt=new oi,lt.layers.enable(Xe),lt.viewport=new en,Q[Xe]=lt),lt.matrix.fromArray(ut.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ut.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Xe===0&&(oe.matrix.copy(lt.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),Ke===!0&&oe.cameras.push(lt)}const Be=o.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){y=r.getBinding();const Xe=y.getDepthInformation(Te[0]);Xe&&Xe.isValid&&Xe.texture&&v.init(Xe,o.renderState)}if(Be&&Be.includes("camera-access")&&R){e.state.unbindTexture(),y=r.getBinding();for(let Xe=0;Xe<Te.length;Xe++){const ut=Te[Xe].camera;if(ut){let Mt=x[ut];Mt||(Mt=new jg,x[ut]=Mt);const lt=y.getCameraImage(ut);Mt.sourceTexture=lt}}}}for(let Te=0;Te<N.length;Te++){const Ke=P[Te],Be=N[Te];Ke!==null&&Be!==void 0&&Be.update(Ke,de,m||u)}ce&&ce(J,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),A=null}const Re=new Qg;Re.setAnimationLoop(Se),this.setAnimationLoop=function(J){ce=J},this.dispose=function(){}}}const D1=new Zt,s0=new ft;s0.set(-1,0,0,0,1,0,0,0,1);function I1(s,e){function t(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function r(v,x){x.color.getRGB(v.fogColor.value,$g(s)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function o(v,x,b,O,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(v,x):x.isMeshLambertMaterial?(l(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(v,x),y(v,x)):x.isMeshPhongMaterial?(l(v,x),_(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(v,x),g(v,x),x.isMeshPhysicalMaterial&&M(v,x,C)):x.isMeshMatcapMaterial?(l(v,x),A(v,x)):x.isMeshDepthMaterial?l(v,x):x.isMeshDistanceMaterial?(l(v,x),R(v,x)):x.isMeshNormalMaterial?l(v,x):x.isLineBasicMaterial?(u(v,x),x.isLineDashedMaterial&&f(v,x)):x.isPointsMaterial?p(v,x,b,O):x.isSpriteMaterial?m(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,t(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Hn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,t(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Hn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,t(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,t(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const b=e.get(x),O=b.envMap,C=b.envMapRotation;O&&(v.envMap.value=O,v.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(C)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(s0),v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,v.aoMapTransform))}function u(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform))}function f(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function p(v,x,b,O){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*b,v.scale.value=O*.5,x.map&&(v.map.value=x.map,t(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function m(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function _(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function y(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function g(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function M(v,x,b){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.retroreflectivity>0&&(v.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,v.specularIntensityMapTransform))}function A(v,x){x.matcap&&(v.matcap.value=x.matcap)}function R(v,x){const b=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function U1(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,N){const P=N.program;r.uniformBlockBinding(C,P)}function m(C,N){let P=o[C.id];P===void 0&&(v(C),P=_(C),o[C.id]=P,C.addEventListener("dispose",b));const F=N.program;r.updateUBOMapping(C,F);const E=e.render.frame;l[C.id]!==E&&(g(C),l[C.id]=E)}function _(C){const N=y();C.__bindingPointIndex=N;const P=s.createBuffer(),F=C.__size,E=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function y(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=o[C.id],P=C.uniforms,F=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let E=0,D=P.length;E<D;E++){const B=P[E];if(Array.isArray(B))for(let q=0,Q=B.length;q<Q;q++)M(B[q],E,q,F);else M(B,E,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,N,P,F){if(R(C,N,P,F)===!0){const E=C.__offset,D=C.value;if(Array.isArray(D)){let B=0;for(let q=0;q<D.length;q++){const Q=D[q],oe=x(Q);A(Q,C.__data,B),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(B+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(D,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}function A(C,N,P){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,P)}function R(C,N,P,F){const E=C.value,D=N+"_"+P;if(F[D]===void 0)return typeof E=="number"||typeof E=="boolean"?F[D]=E:ArrayBuffer.isView(E)?F[D]=E.slice():F[D]=E.clone(),!0;{const B=F[D];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return F[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function v(C){const N=C.uniforms;let P=0;const F=16;for(let D=0,B=N.length;D<B;D++){const q=Array.isArray(N[D])?N[D]:[N[D]];for(let Q=0,oe=q.length;Q<oe;Q++){const W=q[Q],Z=Array.isArray(W.value)?W.value:[W.value];for(let pe=0,ne=Z.length;pe<ne;pe++){const K=Z[pe],Y=x(K),j=P%F,L=j%Y.boundary,ae=j+L;P+=L,ae!==0&&F-ae<Y.storage&&(P+=F-ae),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=P,P+=Y.storage}}}const E=P%F;return E>0&&(P+=F-E),C.__size=P,C.__cache={},this}function x(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",C),N}function b(C){const N=C.target;N.removeEventListener("dispose",b);const P=u.indexOf(N.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function O(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:p,update:m,dispose:O}}const F1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function k1(){return Li===null&&(Li=new Tv(F1,16,16,ss,Bi),Li.name="DFG_LUT",Li.minFilter=Cn,Li.magFilter=Cn,Li.wrapS=ir,Li.wrapT=ir,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class O1{constructor(e={}){const{canvas:t=Z_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=li}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const R=M,v=new Set([wf,Tf,Ef]),x=new Set([li,Oi,io,ro,yf,Mf]),b=new Uint32Array(4),O=new Int32Array(4),C=new te;let N=null,P=null;const F=[],E=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let q=!1,Q=null,oe=null,W=null,Z=null;this._outputColorSpace=ai;let pe=0,ne=0,K=null,Y=-1,j=null;const L=new en,ae=new en;let ve=null;const ce=new Pt(0);let Se=0,Re=t.width,J=t.height,de=1,Te=null,Ke=null;const Be=new en(0,0,Re,J),Ce=new en(0,0,Re,J);let yt=!1;const Xe=new Wg;let ut=!1,Mt=!1;const lt=new Zt,gt=new te,Bt=new en,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ht(){return K===null?de:1}let z=r;function Ut(w,G){return t.getContext(w,G)}let xt,I,S,$,re,he,we,be,me,xe,De,Ze,Ie,Pe,Qe,it,at,H,Ne,ge,Le,ze,_e;try{const w={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vf}`),t.addEventListener("webglcontextlost",Nt,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",gn,!1),z===null){const G="webgl2";if(z=Ut(G,w),z===null)throw Ut(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(w){throw t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),bt("WebGLRenderer: "+w.message),w}function et(){xt=new kM(z),xt.init(),Le=new R1(z,xt),I=new CM(z,xt,e,Le),S=new A1(z,xt),I.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),oe=z.createFramebuffer(),W=z.createFramebuffer(),Z=z.createFramebuffer(),$=new zM(z),re=new f1,he=new C1(z,xt,S,re,I,Le,$),we=new FM(B),be=new Hv(z),ze=new wM(z,be),me=new OM(z,be,$,ze),xe=new HM(z,me,be,ze,$),H=new VM(z,I,he),Qe=new RM(re),De=new d1(B,we,xt,I,ze,Qe),Ze=new I1(B,re),Ie=new p1,Pe=new S1(xt),at=new TM(B,we,S,xe,A,p),it=new w1(B,xe,I),_e=new U1(z,$,I,S),Ne=new AM(z,xt,$),ge=new BM(z,xt,$),$.programs=De.programs,B.capabilities=I,B.extensions=xt,B.properties=re,B.renderLists=Ie,B.shadowMap=it,B.state=S,B.info=$}R!==li&&(D=new WM(R,t.width,t.height,f,o,l));const je=new L1(B,z);this.xr=je,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(w){w!==void 0&&(de=w,this.setSize(Re,J,!1))},this.getSize=function(w){return w.set(Re,J)},this.setSize=function(w,G,ue=!0){if(je.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=w,J=G,t.width=Math.floor(w*de),t.height=Math.floor(G*de),ue===!0&&(t.style.width=w+"px",t.style.height=G+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Re*de,J*de).floor()},this.setDrawingBufferSize=function(w,G,ue){Re=w,J=G,de=ue,t.width=Math.floor(w*ue),t.height=Math.floor(G*ue),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(R===li){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Be)},this.setViewport=function(w,G,ue,ie){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,G,ue,ie),S.viewport(L.copy(Be).multiplyScalar(de).round())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,G,ue,ie){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,G,ue,ie),S.scissor(ae.copy(Ce).multiplyScalar(de).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){S.setScissorTest(yt=w)},this.setOpaqueSort=function(w){Te=w},this.setTransparentSort=function(w){Ke=w},this.getClearColor=function(w){return w.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,ue=!0){let ie=0;if(w){let ee=!1;if(K!==null){const ke=K.texture.format;ee=v.has(ke)}if(ee){const ke=K.texture.type,Ue=x.has(ke),Fe=at.getClearColor(),qe=at.getClearAlpha(),Je=Fe.r,dt=Fe.g,pt=Fe.b;Ue?(b[0]=Je,b[1]=dt,b[2]=pt,b[3]=qe,z.clearBufferuiv(z.COLOR,0,b)):(O[0]=Je,O[1]=dt,O[2]=pt,O[3]=qe,z.clearBufferiv(z.COLOR,0,O))}else ie|=z.COLOR_BUFFER_BIT}G&&(ie|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ie|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Q=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),at.dispose(),Ie.dispose(),Pe.dispose(),re.dispose(),we.dispose(),xe.dispose(),ze.dispose(),_e.dispose(),De.dispose(),je.dispose(),je.removeEventListener("sessionstart",co),je.removeEventListener("sessionend",uo),Pn.stop()};function Nt(w){w.preventDefault(),tc("WebGLRenderer: Context Lost."),q=!0}function Ct(){tc("WebGLRenderer: Context Restored."),q=!1;const w=$.autoReset,G=it.enabled,ue=it.autoUpdate,ie=it.needsUpdate,ee=it.type;et(),$.autoReset=w,it.enabled=G,it.autoUpdate=ue,it.needsUpdate=ie,it.type=ee}function gn(w){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zn(w){const G=w.target;G.removeEventListener("dispose",Zn),Dr(G)}function Dr(w){cs(w),re.remove(w)}function cs(w){const G=re.get(w).programs;G!==void 0&&(G.forEach(function(ue){De.releaseProgram(ue)}),w.isShaderMaterial&&De.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,ue,ie,ee,ke){G===null&&(G=Ht);const Ue=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Fe=jt(w,G,ue,ie,ee);S.setMaterial(ie,Ue);let qe=ue.index,Je=1;if(ie.wireframe===!0){if(qe=me.getWireframeAttribute(ue),qe===void 0)return;Je=2}const dt=ue.drawRange,pt=ue.attributes.position;let Ge=dt.start*Je,Et=(dt.start+dt.count)*Je;ke!==null&&(Ge=Math.max(Ge,ke.start*Je),Et=Math.min(Et,(ke.start+ke.count)*Je)),qe!==null?(Ge=Math.max(Ge,0),Et=Math.min(Et,qe.count)):pt!=null&&(Ge=Math.max(Ge,0),Et=Math.min(Et,pt.count));const Qt=Et-Ge;if(Qt<0||Qt===1/0)return;ze.setup(ee,ie,Fe,ue,qe);let Vt,It=Ne;if(qe!==null&&(Vt=be.get(qe),It=ge,It.setIndex(Vt)),ee.isMesh)ie.wireframe===!0?(S.setLineWidth(ie.wireframeLinewidth*ht()),It.setMode(z.LINES)):It.setMode(z.TRIANGLES);else if(ee.isLine){let on=ie.linewidth;on===void 0&&(on=1),S.setLineWidth(on*ht()),ee.isLineSegments?It.setMode(z.LINES):ee.isLineLoop?It.setMode(z.LINE_LOOP):It.setMode(z.LINE_STRIP)}else ee.isPoints?It.setMode(z.POINTS):ee.isSprite&&It.setMode(z.TRIANGLES);if(ee.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))It.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const on=ee._multiDrawStarts,Ve=ee._multiDrawCounts,tn=ee._multiDrawCount,Tt=qe?be.get(qe).bytesPerElement:1,Sn=re.get(ie).currentProgram.getUniforms();for(let _t=0;_t<tn;_t++)Sn.setValue(z,"_gl_DrawID",_t),It.render(on[_t]/Tt,Ve[_t])}else if(ee.isInstancedMesh)It.renderInstances(Ge,Qt,ee.count);else if(ue.isInstancedBufferGeometry){const on=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ve=Math.min(ue.instanceCount,on);It.renderInstances(Ge,Qt,Ve)}else It.render(Ge,Qt)};function Ir(w,G,ue,ie){Q!==null&&w.isNodeMaterial&&Q.setObject(ie,w),ut===!0&&Qe.setState(w,ue,!1),w.transparent===!0&&w.side===nr&&w.forceSinglePass===!1?(w.side=Hn,w.needsUpdate=!0,kr(w,G,ie),w.side=is,w.needsUpdate=!0,kr(w,G,ie),w.side=nr):kr(w,G,ie)}this.compile=function(w,G,ue=null){ue===null&&(ue=w),Q!==null&&Q.renderStart(w,G,ue),P=Pe.get(ue),P.init(G),E.push(P),ue.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),w!==ue&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),P.setupLights(),Q!==null&&Q.updateLights(P.state.lightsArray),Mt=this.localClippingEnabled,ut=Qe.init(this.clippingPlanes,Mt),ut===!0&&Qe.setGlobalState(this.clippingPlanes,G),Q!==null&&it.render(P.state.shadowsArray,ue,G);const ie=new Set;return w.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const ke=ee.material;if(ke)if(Array.isArray(ke))for(let Ue=0;Ue<ke.length;Ue++){const Fe=ke[Ue];Ir(Fe,ue,G,ee),ie.add(Fe)}else Ir(ke,ue,G,ee),ie.add(ke)}),P=E.pop(),Q!==null&&Q.renderEnd(),ie},this.compileAsync=function(w,G,ue=null){const ie=this.compile(w,G,ue);return new Promise(ee=>{function ke(){if(ie.forEach(function(Ue){const qe=re.get(Ue).currentProgram;(qe===void 0||qe.isReady())&&ie.delete(Ue)}),ie.size===0){ee(w);return}setTimeout(ke,10)}xt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Ur=null;function uc(w){Ur&&Ur(w)}function co(){Pn.stop()}function uo(){Pn.start()}const Pn=new Qg;Pn.setAnimationLoop(uc),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(w){Ur=w,je.setAnimationLoop(w),w===null?Pn.stop():Pn.start()},je.addEventListener("sessionstart",co),je.addEventListener("sessionend",uo),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;Q!==null&&Q.renderStart(w,G);const ue=je.enabled===!0&&je.isPresenting===!0,ie=D!==null&&(K===null||ue)&&D.begin(B,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(G),G=je.getCamera()),w.isScene===!0&&w.onBeforeRender(B,w,G,K),P=Pe.get(w,E.length),P.init(G),P.state.textureUnits=he.getTextureUnits(),E.push(P),lt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Xe.setFromProjectionMatrix(lt,Fi,G.reversedDepth),Mt=this.localClippingEnabled,ut=Qe.init(this.clippingPlanes,Mt),N=Ie.get(w,F.length),N.init(),F.push(N),je.enabled===!0&&je.isPresenting===!0){const Ue=B.xr.getDepthSensingMesh();Ue!==null&&us(Ue,G,-1/0,B.sortObjects)}us(w,G,0,B.sortObjects),N.finish(),Q!==null&&Q.updateLights(P.state.lightsArray),B.sortObjects===!0&&N.sort(Te,Ke),nt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,nt&&at.addToRenderList(N,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Qe.beginShadows();const ee=P.state.shadowsArray;if(it.render(ee,w,G),ut===!0&&Qe.endShadows(),(ie&&D.hasRenderPass())===!1){const Ue=N.opaque,Fe=N.transmissive;if(P.setupLights(),G.isArrayCamera){const qe=G.cameras;if(Fe.length>0)for(let Je=0,dt=qe.length;Je<dt;Je++){const pt=qe[Je];fo(Ue,Fe,w,pt)}nt&&at.render(w);for(let Je=0,dt=qe.length;Je<dt;Je++){const pt=qe[Je];sa(N,w,pt,pt.viewport)}}else Fe.length>0&&fo(Ue,Fe,w,G),nt&&at.render(w),sa(N,w,G)}K!==null&&ne===0&&(he.updateMultisampleRenderTarget(K),he.updateRenderTargetMipmap(K)),ie&&D.end(B),w.isScene===!0&&w.onAfterRender(B,w,G),ze.resetDefaultState(),Y=-1,j=null,E.pop(),E.length>0?(P=E[E.length-1],he.setTextureUnits(P.state.textureUnits),ut===!0&&Qe.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?N=F[F.length-1]:N=null,Q!==null&&Q.renderEnd()};function us(w,G,ue,ie){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)ue=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Xe)){ie&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);const Ue=xe.update(w),Fe=w.material;Fe.visible&&N.push(w,Ue,Fe,ue,Bt.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Xe))){const Ue=xe.update(w),Fe=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Bt.copy(Ue.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(Fe)){const qe=Ue.groups;for(let Je=0,dt=qe.length;Je<dt;Je++){const pt=qe[Je],Ge=Fe[pt.materialIndex];Ge&&Ge.visible&&N.push(w,Ue,Ge,ue,Bt.z,pt,G)}}else Fe.visible&&N.push(w,Ue,Fe,ue,Bt.z,null,G)}}const ke=w.children;for(let Ue=0,Fe=ke.length;Ue<Fe;Ue++)us(ke[Ue],G,ue,ie)}function sa(w,G,ue,ie){const{opaque:ee,transmissive:ke,transparent:Ue}=w;P.setupLightsView(ue),ut===!0&&Qe.setGlobalState(B.clippingPlanes,ue),ie&&S.viewport(L.copy(ie)),ee.length>0&&Fr(ee,G,ue),ke.length>0&&Fr(ke,G,ue),Ue.length>0&&Fr(Ue,G,ue),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function fo(w,G,ue,ie){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ie.id]===void 0){const Ge=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ie.id]=new Ai(1,1,{generateMipmaps:!0,type:Ge?Bi:li,minFilter:ts,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const ke=P.state.transmissionRenderTarget[ie.id],Ue=ie.viewport||L;ke.setSize(Ue.z*B.transmissionResolutionScale,Ue.w*B.transmissionResolutionScale);const Fe=B.getRenderTarget(),qe=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(ke),B.getClearColor(ce),Se=B.getClearAlpha(),Se<1&&B.setClearColor(16777215,.5),B.clear(),nt&&at.render(ue);const dt=B.toneMapping;B.toneMapping=ki;const pt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),P.setupLightsView(ie),ut===!0&&Qe.setGlobalState(B.clippingPlanes,ie),Fr(w,ue,ie),he.updateMultisampleRenderTarget(ke),he.updateRenderTargetMipmap(ke),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Et=0,Qt=G.length;Et<Qt;Et++){const Vt=G[Et],{object:It,geometry:on,material:Ve,group:tn}=Vt;if(Ve.side===nr&&It.layers.test(ie.layers)){const Tt=Ve.side;Ve.side=Hn,Ve.needsUpdate=!0,aa(It,ue,ie,on,Ve,tn),Ve.side=Tt,Ve.needsUpdate=!0,Ge=!0}}Ge===!0&&(he.updateMultisampleRenderTarget(ke),he.updateRenderTargetMipmap(ke))}B.setRenderTarget(Fe,qe,Je),B.setClearColor(ce,Se),pt!==void 0&&(ie.viewport=pt),B.toneMapping=dt}function Fr(w,G,ue){const ie=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,ke=w.length;ee<ke;ee++){const Ue=w[ee],{object:Fe,geometry:qe,group:Je}=Ue;let dt=Ue.material;dt.allowOverride===!0&&ie!==null&&(dt=ie),Fe.layers.test(ue.layers)&&aa(Fe,G,ue,qe,dt,Je)}}function aa(w,G,ue,ie,ee,ke){Q!==null&&ee.isNodeMaterial&&Q.setObject(w,ee),w.onBeforeRender(B,G,ue,ie,ee,ke),w.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(B,G,ue,ie,w,ke),ee.transparent===!0&&ee.side===nr&&ee.forceSinglePass===!1?(ee.side=Hn,ee.needsUpdate=!0,B.renderBufferDirect(ue,G,ie,ee,w,ke),ee.side=is,ee.needsUpdate=!0,B.renderBufferDirect(ue,G,ie,ee,w,ke),ee.side=nr):B.renderBufferDirect(ue,G,ie,ee,w,ke),w.onAfterRender(B,G,ue,ie,ee,ke)}function kr(w,G,ue){G.isScene!==!0&&(G=Ht);const ie=re.get(w),ee=P.state.lights,ke=P.state.shadowsArray,Ue=ee.state.version,Fe=De.getParameters(w,ee.state,ke,G,ue,P.state.lightProbeGridArray),qe=De.getProgramCacheKey(Fe);let Je=ie.programs;ie.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,ie.fog=G.fog;const dt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ie.envMap=we.get(w.envMap||ie.environment,dt),ie.envMapRotation=ie.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",Zn),Je=new Map,ie.programs=Je);let pt=Je.get(qe);if(pt!==void 0){if(ie.currentProgram===pt&&ie.lightsStateVersion===Ue)return ho(w,Fe),pt}else Fe.uniforms=De.getUniforms(w),Q!==null&&w.isNodeMaterial&&Q.build(w,ue,Fe),w.onBeforeCompile(Fe,B),pt=De.acquireProgram(Fe,qe),Je.set(qe,pt),ie.uniforms=Fe.uniforms;const Ge=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=Qe.uniform),ho(w,Fe),ie.needsLights=la(w),ie.lightsStateVersion=Ue,ie.needsLights&&(Ge.ambientLightColor.value=ee.state.ambient,Ge.lightProbe.value=ee.state.probe,Ge.sunLights.value=ee.state.sun,Ge.sunLightShadows.value=ee.state.sunShadow,Ge.directionalLights.value=ee.state.directional,Ge.directionalLightShadows.value=ee.state.directionalShadow,Ge.spotLights.value=ee.state.spot,Ge.spotLightShadows.value=ee.state.spotShadow,Ge.rectAreaLights.value=ee.state.rectArea,Ge.ltc_1.value=ee.state.rectAreaLTC1,Ge.ltc_2.value=ee.state.rectAreaLTC2,Ge.pointLights.value=ee.state.point,Ge.pointLightShadows.value=ee.state.pointShadow,Ge.hemisphereLights.value=ee.state.hemi,Ge.sunShadowMatrix.value=ee.state.sunShadowMatrix,Ge.sunShadowCascade.value=ee.state.sunShadowCascade,Ge.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ge.spotLightMatrix.value=ee.state.spotLightMatrix,Ge.spotLightMap.value=ee.state.spotLightMap,Ge.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.lightProbeGrid=P.state.lightProbeGridArray.length>0,ie.currentProgram=pt,ie.uniformsList=null,pt}function oa(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=jl.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function ho(w,G){const ue=re.get(w);ue.outputColorSpace=G.outputColorSpace,ue.batching=G.batching,ue.batchingColor=G.batchingColor,ue.instancing=G.instancing,ue.instancingColor=G.instancingColor,ue.instancingMorph=G.instancingMorph,ue.skinning=G.skinning,ue.morphTargets=G.morphTargets,ue.morphNormals=G.morphNormals,ue.morphColors=G.morphColors,ue.morphTargetsCount=G.morphTargetsCount,ue.numClippingPlanes=G.numClippingPlanes,ue.numIntersection=G.numClipIntersection,ue.vertexAlphas=G.vertexAlphas,ue.vertexTangents=G.vertexTangents,ue.toneMapping=G.toneMapping}function dc(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;C.setFromMatrixPosition(G.matrixWorld);for(let ue=0,ie=w.length;ue<ie;ue++){const ee=w[ue];if(ee.texture!==null&&ee.boundingBox.containsPoint(C))return ee}return null}function jt(w,G,ue,ie,ee){G.isScene!==!0&&(G=Ht),he.resetTextureUnits();const ke=G.fog,Ue=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?G.environment:null,Fe=K===null?B.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:wt.workingColorSpace,qe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Je=we.get(ie.envMap||Ue,qe),dt=ie.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pt=!!ue.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ge=!!ue.morphAttributes.position,Et=!!ue.morphAttributes.normal,Qt=!!ue.morphAttributes.color;let Vt=ki;ie.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Vt=B.toneMapping);const It=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,on=It!==void 0?It.length:0,Ve=re.get(ie),tn=P.state.lights;if(ut===!0&&(Mt===!0||w!==j)){const Ft=w===j&&ie.id===Y;Qe.setState(ie,w,Ft)}let Tt=!1;ie.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==tn.state.version||Ve.outputColorSpace!==Fe||ee.isBatchedMesh&&Ve.batching===!1||!ee.isBatchedMesh&&Ve.batching===!0||ee.isBatchedMesh&&Ve.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Ve.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Ve.instancing===!1||!ee.isInstancedMesh&&Ve.instancing===!0||ee.isSkinnedMesh&&Ve.skinning===!1||!ee.isSkinnedMesh&&Ve.skinning===!0||ee.isInstancedMesh&&Ve.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ve.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ve.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ve.instancingMorph===!1&&ee.morphTexture!==null||Ve.envMap!==Je||ie.fog===!0&&Ve.fog!==ke||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Qe.numPlanes||Ve.numIntersection!==Qe.numIntersection)||Ve.vertexAlphas!==dt||Ve.vertexTangents!==pt||Ve.morphTargets!==Ge||Ve.morphNormals!==Et||Ve.morphColors!==Qt||Ve.toneMapping!==Vt||Ve.morphTargetsCount!==on||!!Ve.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,Ve.__version=ie.version);let Sn=Ve.currentProgram;Tt===!0&&(Sn=kr(ie,G,ee),Q&&ie.isNodeMaterial&&Q.onUpdateProgram(ie,Sn,Ve));let _t=!1,di=!1,Hi=!1;const Lt=Sn.getUniforms(),qt=Ve.uniforms;if(S.useProgram(Sn.program)&&(_t=!0,di=!0,Hi=!0),ie.id!==Y&&(Y=ie.id,di=!0),Ve.needsLights){const Ft=dc(P.state.lightProbeGridArray,ee);Ve.lightProbeGrid!==Ft&&(Ve.lightProbeGrid=Ft,di=!0)}if(_t||j!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Lt.setValue(z,"projectionMatrix",w.projectionMatrix),Lt.setValue(z,"viewMatrix",w.matrixWorldInverse);const Qn=Lt.map.cameraPosition;Qn!==void 0&&Qn.setValue(z,gt.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&Lt.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Lt.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,di=!0,Hi=!0)}if(Ve.needsLights&&(tn.state.sunShadowMap.length>0&&Lt.setValue(z,"sunShadowMap",tn.state.sunShadowMap,he),tn.state.directionalShadowMap.length>0&&Lt.setValue(z,"directionalShadowMap",tn.state.directionalShadowMap,he),tn.state.spotShadowMap.length>0&&Lt.setValue(z,"spotShadowMap",tn.state.spotShadowMap,he),tn.state.pointShadowMap.length>0&&Lt.setValue(z,"pointShadowMap",tn.state.pointShadowMap,he)),ee.isSkinnedMesh){Lt.setOptional(z,ee,"bindMatrix"),Lt.setOptional(z,ee,"bindMatrixInverse");const Ft=ee.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Lt.setValue(z,"boneTexture",Ft.boneTexture,he))}ee.isBatchedMesh&&(Lt.setOptional(z,ee,"batchingTexture"),Lt.setValue(z,"batchingTexture",ee._matricesTexture,he),Lt.setOptional(z,ee,"batchingIdTexture"),Lt.setValue(z,"batchingIdTexture",ee._indirectTexture,he),Lt.setOptional(z,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Lt.setValue(z,"batchingColorTexture",ee._colorsTexture,he));const fi=ue.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&H.update(ee,ue,Sn),(di||Ve.receiveShadow!==ee.receiveShadow)&&(Ve.receiveShadow=ee.receiveShadow,Lt.setValue(z,"receiveShadow",ee.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&G.environment!==null&&(qt.envMapIntensity.value=G.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=k1()),di){if(Lt.setValue(z,"toneMappingExposure",B.toneMappingExposure),Ve.needsLights&&fc(qt,Hi),ke&&ie.fog===!0&&Ze.refreshFogUniforms(qt,ke),Ze.refreshMaterialUniforms(qt,ie,de,J,P.state.transmissionRenderTarget[w.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ft=Ve.lightProbeGrid;qt.probesSH.value=Ft.texture,qt.probesMin.value.copy(Ft.boundingBox.min),qt.probesMax.value.copy(Ft.boundingBox.max),qt.probesResolution.value.copy(Ft.resolution)}jl.upload(z,oa(Ve),qt,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(jl.upload(z,oa(Ve),qt,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Lt.setValue(z,"center",ee.center),Lt.setValue(z,"modelViewMatrix",ee.modelViewMatrix),Lt.setValue(z,"normalMatrix",ee.normalMatrix),Lt.setValue(z,"modelMatrix",ee.matrixWorld),ie.uniformsGroups!==void 0){const Ft=ie.uniformsGroups;for(let Qn=0,hi=Ft.length;Qn<hi;Qn++){const pi=Ft[Qn];_e.update(pi,Sn),_e.bind(pi,Sn)}}return Sn}function fc(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function la(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,G,ue){const ie=re.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),re.get(w.texture).__webglTexture=G,re.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ue,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const ue=re.get(w);ue.__webglFramebuffer=G,ue.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,ue=0){K=w,pe=G,ne=ue;let ie=null,ee=!1,ke=!1;if(w){const Fe=re.get(w);if(Fe.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(z.FRAMEBUFFER,Fe.__webglFramebuffer),L.copy(w.viewport),ae.copy(w.scissor),ve=w.scissorTest,S.viewport(L),S.scissor(ae),S.setScissorTest(ve),Y=-1;return}else if(Fe.__webglFramebuffer===void 0)he.setupRenderTarget(w);else if(Fe.__hasExternalTextures)he.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const dt=w.depthTexture;if(Fe.__boundDepthTexture!==dt){if(dt!==null&&re.has(dt)&&(w.width!==dt.image.width||w.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(w)}}const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ke=!0);const Je=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?ie=Je[G][ue]:ie=Je[G],ee=!0):w.samples>0&&he.useMultisampledRTT(w)===!1?ie=re.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?ie=Je[ue]:ie=Je,L.copy(w.viewport),ae.copy(w.scissor),ve=w.scissorTest}else L.copy(Be).multiplyScalar(de).floor(),ae.copy(Ce).multiplyScalar(de).floor(),ve=yt;if(ue!==0&&(ie=oe),S.bindFramebuffer(z.FRAMEBUFFER,ie)&&S.drawBuffers(w,ie),S.viewport(L),S.scissor(ae),S.setScissorTest(ve),ee){const Fe=re.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Fe.__webglTexture,ue)}else if(ke){const Fe=G;for(let qe=0;qe<w.textures.length;qe++){const Je=re.get(w.textures[qe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+qe,Je.__webglTexture,ue,Fe)}}else if(w!==null&&ue!==0){const Fe=re.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Fe.__webglTexture,ue)}Y=-1};function ca(w){const G=re.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=I.textureFormatReadable(w.format),G.__typeReadable=I.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,ue,ie,ee,ke,Ue,Fe=0){if(!(w&&w.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(qe=qe[Ue]),qe){S.bindFramebuffer(z.FRAMEBUFFER,qe);try{const Je=w.textures[Fe],dt=Je.format,pt=Je.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Fe);const Ge=ca(Je);if(Ge.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-ie&&ue>=0&&ue<=w.height-ee&&z.readPixels(G,ue,ie,ee,Le.convert(dt),Le.convert(pt),ke)}finally{const Je=K!==null?re.get(K).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(w,G,ue,ie,ee,ke,Ue,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(qe=qe[Ue]),qe)if(G>=0&&G<=w.width-ie&&ue>=0&&ue<=w.height-ee){S.bindFramebuffer(z.FRAMEBUFFER,qe);const Je=w.textures[Fe],dt=Je.format,pt=Je.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Fe);const Ge=ca(Je);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.bufferData(z.PIXEL_PACK_BUFFER,ke.byteLength,z.STREAM_READ),z.readPixels(G,ue,ie,ee,Le.convert(dt),Le.convert(pt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Qt=K!==null?re.get(K).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Qt);const Vt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Q_(z,Vt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ke),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Et),z.deleteSync(Vt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,ue=0){const ie=Math.pow(2,-ue),ee=Math.floor(w.image.width*ie),ke=Math.floor(w.image.height*ie),Ue=G!==null?G.x:0,Fe=G!==null?G.y:0;he.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,ue,0,0,Ue,Fe,ee,ke),S.unbindTexture()},this.copyTextureToTexture=function(w,G,ue=null,ie=null,ee=0,ke=0){let Ue,Fe,qe,Je,dt,pt,Ge,Et,Qt;const Vt=w.isCompressedTexture?w.mipmaps[ke]:w.image;if(ue!==null)Ue=ue.max.x-ue.min.x,Fe=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,Je=ue.min.x,dt=ue.min.y,pt=ue.isBox3?ue.min.z:0;else{const qt=Math.pow(2,-ee);Ue=Math.floor(Vt.width*qt),Fe=Math.floor(Vt.height*qt),w.isDataArrayTexture?qe=Vt.depth:w.isData3DTexture?qe=Math.floor(Vt.depth*qt):qe=1,Je=0,dt=0,pt=0}ie!==null?(Ge=ie.x,Et=ie.y,Qt=ie.z):(Ge=0,Et=0,Qt=0);const It=Le.convert(G.format),on=Le.convert(G.type);let Ve;G.isData3DTexture?(he.setTexture3D(G,0),Ve=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(he.setTexture2DArray(G,0),Ve=z.TEXTURE_2D_ARRAY):(he.setTexture2D(G,0),Ve=z.TEXTURE_2D),S.activeTexture(z.TEXTURE0),S.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),S.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),S.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const tn=S.getParameter(z.UNPACK_ROW_LENGTH),Tt=S.getParameter(z.UNPACK_IMAGE_HEIGHT),Sn=S.getParameter(z.UNPACK_SKIP_PIXELS),_t=S.getParameter(z.UNPACK_SKIP_ROWS),di=S.getParameter(z.UNPACK_SKIP_IMAGES);S.pixelStorei(z.UNPACK_ROW_LENGTH,Vt.width),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Vt.height),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Je),S.pixelStorei(z.UNPACK_SKIP_ROWS,dt),S.pixelStorei(z.UNPACK_SKIP_IMAGES,pt);const Hi=w.isDataArrayTexture||w.isData3DTexture,Lt=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const qt=re.get(w),fi=re.get(G),Ft=re.get(qt.__renderTarget),Qn=re.get(fi.__renderTarget);S.bindFramebuffer(z.READ_FRAMEBUFFER,Ft.__webglFramebuffer),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let hi=0;hi<qe;hi++)Hi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,re.get(w).__webglTexture,ee,pt+hi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,re.get(G).__webglTexture,ke,Qt+hi)),z.blitFramebuffer(Je,dt,Ue,Fe,Ge,Et,Ue,Fe,z.DEPTH_BUFFER_BIT,z.NEAREST);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ee!==0||w.isRenderTargetTexture||re.has(w)){const qt=re.get(w),fi=re.get(G);S.bindFramebuffer(z.READ_FRAMEBUFFER,W),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,Z);for(let Ft=0;Ft<qe;Ft++)Hi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qt.__webglTexture,ee,pt+Ft):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,qt.__webglTexture,ee),Lt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fi.__webglTexture,ke,Qt+Ft):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fi.__webglTexture,ke),ee!==0?z.blitFramebuffer(Je,dt,Ue,Fe,Ge,Et,Ue,Fe,z.COLOR_BUFFER_BIT,z.NEAREST):Lt?z.copyTexSubImage3D(Ve,ke,Ge,Et,Qt+Ft,Je,dt,Ue,Fe):z.copyTexSubImage2D(Ve,ke,Ge,Et,Je,dt,Ue,Fe);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Lt?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Ve,ke,Ge,Et,Qt,Ue,Fe,qe,It,on,Vt.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Ve,ke,Ge,Et,Qt,Ue,Fe,qe,It,Vt.data):z.texSubImage3D(Ve,ke,Ge,Et,Qt,Ue,Fe,qe,It,on,Vt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ke,Ge,Et,Ue,Fe,It,on,Vt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ke,Ge,Et,Vt.width,Vt.height,It,Vt.data):z.texSubImage2D(z.TEXTURE_2D,ke,Ge,Et,Ue,Fe,It,on,Vt);S.pixelStorei(z.UNPACK_ROW_LENGTH,tn),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tt),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Sn),S.pixelStorei(z.UNPACK_SKIP_ROWS,_t),S.pixelStorei(z.UNPACK_SKIP_IMAGES,di),ke===0&&G.generateMipmaps&&z.generateMipmap(Ve),S.unbindTexture()},this.initRenderTarget=function(w){re.get(w).__webglFramebuffer===void 0&&he.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?he.setTextureCube(w,0):w.isData3DTexture?he.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?he.setTexture2DArray(w,0):he.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){pe=0,ne=0,K=null,S.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function B1(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255, 250, 240, 1)"),t.addColorStop(.22,"rgba(245, 185, 115, 0.92)"),t.addColorStop(.55,"rgba(217, 138, 60, 0.36)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new bv(s)}const z1=({activeSection:s,activeSkillIdx:e,activeProjectIdx:t,activeExpIdx:r,typingPulse:o,nexusTriggered:l,onTriggerNexus:u})=>{const f=Ot.useRef(null),p=Ot.useRef({activeSection:s,activeSkillIdx:e,activeProjectIdx:t,activeExpIdx:r,typingPulse:o,nexusTriggered:l,lastTypingPulse:o,pulseBoost:0});Ot.useEffect(()=>{const _=p.current;_.lastTypingPulse!==o&&(_.pulseBoost=1,_.lastTypingPulse=o),_.activeSection=s,_.activeSkillIdx=e,_.activeProjectIdx=t,_.activeExpIdx=r,_.nexusTriggered=l},[s,e,t,r,o,l]);const m=Ot.useRef(u);return Ot.useEffect(()=>{m.current=u},[u]),Ot.useEffect(()=>{const _=f.current;if(!_)return;const y=new pv,g=new oi(45,_.clientWidth/_.clientHeight,.1,100);g.position.set(0,0,7.2);const M=new O1({antialias:!0,alpha:!0,powerPreference:"high-performance"});M.setSize(_.clientWidth,_.clientHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.innerHTML="",_.appendChild(M.domElement);const A=B1(),R=210,v=new Float32Array(R*3),x=[new Float32Array(R*3),new Float32Array(R*3),new Float32Array(R*3),new Float32Array(R*3)];for(let Ce=0;Ce<R;Ce++){const yt=Ce/R;if(Ce<42){const nt=Math.pow(Math.random(),2)*.85,ht=Math.random()*Math.PI*2,z=Math.acos(2*Math.random()-1);x[0][Ce*3]=nt*Math.sin(z)*Math.cos(ht),x[0][Ce*3+1]=nt*Math.sin(z)*Math.sin(ht)*.6,x[0][Ce*3+2]=nt*Math.cos(z)*.5}else{const nt=Ce%2===0?-1:1,ht=.3+Math.random()*4.5,z=(Math.random()-.5)*(.4+ht*.36),Ut=(Math.random()-.5)*1.1;x[0][Ce*3]=nt*ht,x[0][Ce*3+1]=z,x[0][Ce*3+2]=Ut}v[Ce*3]=x[0][Ce*3],v[Ce*3+1]=x[0][Ce*3+1],v[Ce*3+2]=x[0][Ce*3+2];const Xe=Math.acos(1-2*(Ce+.5)/R),ut=Math.PI*(1+Math.sqrt(5))*Ce,Mt=Ce%5===0?2.3:1.6;x[1][Ce*3]=Mt*Math.sin(Xe)*Math.cos(ut),x[1][Ce*3+1]=Mt*Math.sin(Xe)*Math.sin(ut),x[1][Ce*3+2]=Mt*Math.cos(Xe);const lt=yt*Math.PI*2*3,gt=1.7+Math.cos(lt*3)*.46;x[2][Ce*3]=Math.cos(lt)*gt,x[2][Ce*3+1]=Math.sin(lt)*gt,x[2][Ce*3+2]=Math.sin(lt*3)*.82;const Bt=yt*Math.PI*6,Ht=Ce%2===0?1:-1;x[3][Ce*3]=Math.cos(Bt)*1.4*Ht,x[3][Ce*3+1]=(yt-.5)*4.2,x[3][Ce*3+2]=Math.sin(Bt)*1.4*Ht}const b=new Ja;y.add(b);const O=new Un;O.setAttribute("position",new ui(v,3));const C=new qg({size:.22,map:A,transparent:!0,opacity:.92,depthWrite:!1,blending:Zs,color:16171383}),N=new Rv(O,C);b.add(N);const P=850,F=new Float32Array(P*6),E=new Un;E.setAttribute("position",new ui(F,3));const D=new Xg({color:14256700,transparent:!0,opacity:.28,blending:Zs}),B=new Cv(E,D);b.add(B);const q=new Lf(1.12,1),Q=new Pf({color:15046729,wireframe:!0,transparent:!0,opacity:0,blending:Zs}),oe=new zi(q,Q);b.add(oe);const W=new Hg({map:A,color:16772565,transparent:!0,opacity:.95,blending:Zs}),Z=new Mv(W);Z.scale.set(1.5,1.5,1),b.add(Z);let pe=0,ne=0,K=!1,Y=0,j=0,L=0,ae=0,ve=0;const ce=Ce=>{const yt=_.getBoundingClientRect();if(pe=(Ce.clientX-yt.left)/yt.width*2-1,ne=-((Ce.clientY-yt.top)/yt.height)*2+1,K){const Xe=Ce.clientX-j,ut=Ce.clientY-L;Y+=Math.hypot(Xe,ut),ae+=Xe*.01,ve=Math.max(-.6,Math.min(.6,ve+ut*.008)),j=Ce.clientX,L=Ce.clientY}},Se=Ce=>{K=!0,Y=0,j=Ce.clientX,L=Ce.clientY},Re=()=>{K&&Y<6&&m.current(),K=!1},J=M.domElement;J.addEventListener("pointermove",ce),J.addEventListener("pointerdown",Se),window.addEventListener("pointerup",Re);const de=()=>{_&&(g.aspect=_.clientWidth/_.clientHeight,g.updateProjectionMatrix(),M.setSize(_.clientWidth,_.clientHeight))};window.addEventListener("resize",de);let Te;const Ke=new zv,Be=()=>{const Ce=Math.min(Ke.getDelta(),.05),yt=Ke.getElapsedTime(),Xe=p.current;Xe.pulseBoost>.01&&(Xe.pulseBoost=Math.max(0,Xe.pulseBoost-Ce*2.5));const ut=x[Xe.activeSection]||x[0],Mt=pe*3.2,lt=ne*2.2;for(let nt=0;nt<R;nt++){let ht=ut[nt*3],z=ut[nt*3+1],Ut=ut[nt*3+2];if(Xe.activeSection===1){const re=1+Xe.activeSkillIdx*.14,he=Xe.activeSkillIdx*.8,we=ht*Math.cos(he)-Ut*Math.sin(he),be=ht*Math.sin(he)+Ut*Math.cos(he);ht=we*re,Ut=be*re}if(Xe.activeSection===2){const re=Math.sin(nt*.2+Xe.activeProjectIdx*2.1)*.35;ht+=re,z+=Math.cos(nt*.15+Xe.activeProjectIdx)*.25}const xt=Math.sin(yt*1.6+nt*.15)*.05;ht+=xt,z+=Math.cos(yt*1.4+nt*.12)*.05;const I=Mt-ht,S=lt-z,$=Math.hypot(I,S);if($<1.8){const re=(1-$/1.8)*.28;ht+=I*re,z+=S*re}v[nt*3]+=(ht-v[nt*3])*.07,v[nt*3+1]+=(z-v[nt*3+1])*.07,v[nt*3+2]+=(Ut-v[nt*3+2])*.07}O.attributes.position.needsUpdate=!0;let gt=0;const Bt=Xe.activeSection===0?.9:1.04;for(let nt=0;nt<R;nt++){const ht=v[nt*3],z=v[nt*3+1],Ut=v[nt*3+2];for(let xt=nt+1;xt<R&&!(gt>=P);xt++){const I=v[xt*3],S=v[xt*3+1],$=v[xt*3+2];(ht-I)*(ht-I)+(z-S)*(z-S)+(Ut-$)*(Ut-$)<Bt*Bt&&(F[gt*6]=ht,F[gt*6+1]=z,F[gt*6+2]=Ut,F[gt*6+3]=I,F[gt*6+4]=S,F[gt*6+5]=$,gt++)}}E.setDrawRange(0,gt*2),E.attributes.position.needsUpdate=!0,Xe.activeSection===0?(b.rotation.y+=(pe*.16-b.rotation.y)*.06,b.rotation.x+=(-ne*.12-b.rotation.x)*.06,Q.opacity+=(0-Q.opacity)*.1):(ae+=Ce*(.2+Xe.pulseBoost*1.4),b.rotation.y+=(ae+pe*.32-b.rotation.y)*.08,b.rotation.x+=(ve-ne*.22-b.rotation.x)*.08,Q.opacity+=(.18-Q.opacity)*.08,oe.rotation.y-=Ce*.38);const Ht=(Xe.activeSection===0?1.45:1.8)+Math.sin(yt*4.2)*.22+Xe.pulseBoost*.85;Z.scale.set(Ht,Ht,1),M.render(y,g),Te=requestAnimationFrame(Be)};return Te=requestAnimationFrame(Be),()=>{cancelAnimationFrame(Te),J.removeEventListener("pointermove",ce),J.removeEventListener("pointerdown",Se),window.removeEventListener("pointerup",Re),window.removeEventListener("resize",de),A.dispose(),M.dispose()}},[]),k.jsx("div",{ref:f,className:"h-full w-full cursor-pointer",title:"Gerakkan kursor atau klik untuk berinteraksi dengan konstelasi 3D"})};class V1{constructor(){Vu(this,"ctx",null);Vu(this,"enabled",!0)}getCtx(){if(!this.enabled||typeof window>"u")return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}playCompassClick(){const e=this.getCtx();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="triangle",t.frequency.setValueAtTime(640,e.currentTime),t.frequency.exponentialRampToValueAtTime(980,e.currentTime+.08),r.gain.setValueAtTime(.05,e.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.09),t.connect(r),r.connect(e.destination),t.start(),t.stop(e.currentTime+.095)}catch{}}playPageFlip(){const e=this.getCtx();if(e)try{const t=e.sampleRate*.14,r=e.createBuffer(1,t,e.sampleRate),o=r.getChannelData(0);for(let p=0;p<t;p++)o[p]=(Math.random()*2-1)*Math.sin(p/t*Math.PI);const l=e.createBufferSource();l.buffer=r;const u=e.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(1100,e.currentTime);const f=e.createGain();f.gain.setValueAtTime(.06,e.currentTime),f.gain.exponentialRampToValueAtTime(.001,e.currentTime+.14),l.connect(u),u.connect(f),f.connect(e.destination),l.start()}catch{}}playGearTurn(){const e=this.getCtx();if(e)try{[0,.045,.09].forEach((t,r)=>{const o=e.createOscillator(),l=e.createGain();o.type="sawtooth";const u=e.currentTime+t;o.frequency.setValueAtTime(220+r*45,u),o.frequency.exponentialRampToValueAtTime(110,u+.035),l.gain.setValueAtTime(.035,u),l.gain.exponentialRampToValueAtTime(1e-4,u+.04),o.connect(l),l.connect(e.destination),o.start(u),o.stop(u+.042)})}catch{}}playSlideShutter(){const e=this.getCtx();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="square",t.frequency.setValueAtTime(420,e.currentTime),t.frequency.exponentialRampToValueAtTime(140,e.currentTime+.055),r.gain.setValueAtTime(.05,e.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.06),t.connect(r),r.connect(e.destination),t.start(),t.stop(e.currentTime+.065)}catch{}}playMapPin(){const e=this.getCtx();if(e)try{[440,659.25].forEach((r,o)=>{const l=e.createOscillator(),u=e.createGain();l.type="sine";const f=e.currentTime+o*.06;l.frequency.setValueAtTime(r,f),u.gain.setValueAtTime(.045,f),u.gain.exponentialRampToValueAtTime(1e-4,f+.18),l.connect(u),u.connect(e.destination),l.start(f),l.stop(f+.2)})}catch{}}playTypewriterKey(){const e=this.getCtx();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="triangle";const o=520+Math.random()*160;t.frequency.setValueAtTime(o,e.currentTime),t.frequency.exponentialRampToValueAtTime(130,e.currentTime+.025),r.gain.setValueAtTime(.045,e.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.028),t.connect(r),r.connect(e.destination),t.start(),t.stop(e.currentTime+.03)}catch{}}playTypewriterBell(){const e=this.getCtx();if(e)try{const t=e.createOscillator(),r=e.createGain();t.type="sine",t.frequency.setValueAtTime(1760,e.currentTime),r.gain.setValueAtTime(.08,e.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+.65),t.connect(r),r.connect(e.destination),t.start(),t.stop(e.currentTime+.68)}catch{}}}const Ti=new V1,Cd=[{id:"home-screen",label:"Home Screen",indent:0,hasChildren:!0,expanded:!0,sectionTarget:0,codeTitle:"BiamtieroPortfolio.tsx",codeLines:[{line:1,tokens:[{text:"import ",color:"text-[#E59849]"},{text:"'package:biamtiero/core.ts'",color:"text-[#D4A373]"},{text:";",color:"text-stone-500"}]},{line:2,tokens:[{text:"import ",color:"text-[#E59849]"},{text:"'package:three/constellation.webgl'",color:"text-[#D4A373]"},{text:";",color:"text-stone-500"}]},{line:3,tokens:[{text:"import ",color:"text-[#E59849]"},{text:"'package:ui/interactive_studio.tsx'",color:"text-[#D4A373]"},{text:";",color:"text-stone-500"}]},{line:4,tokens:[]},{line:5,tokens:[{text:"export class ",color:"text-[#E59849]"},{text:"BiamtieroStudio ",color:"text-[#F6C177]"},{text:"extends ",color:"text-[#E59849]"},{text:"FullStackArchitect {",color:"text-stone-200"}]},{line:6,tokens:[{text:"  const ",color:"text-[#E59849]"},{text:"Developer(",color:"text-[#7DD3FC]"},{text:"{ name: ",color:"text-stone-300"},{text:"'Biamtiero Amiral Kalman'",color:"text-[#86EFAC]"},{text:" });",color:"text-stone-300"}]},{line:7,tokens:[]},{line:8,tokens:[{text:"  @override",color:"text-stone-400"}]},{line:9,tokens:[{text:"  Widget ",color:"text-[#86EFAC]"},{text:"build",color:"text-[#F6C177]"},{text:"(BuildContext context) {",color:"text-stone-300"}]},{line:10,tokens:[{text:"    return ",color:"text-[#E59849]"},{text:"Scaffold(",color:"text-[#F6C177]"}]},{line:11,tokens:[{text:"      theme: ",color:"text-stone-300"},{text:"WarmObsidian3D.amberGlow(),",color:"text-[#E59849]"}]},{line:12,tokens:[{text:"      children: [",color:"text-stone-300"}]},{line:13,tokens:[{text:"        ConstellationHandsHero(),",color:"text-[#86EFAC]"}]},{line:14,tokens:[{text:"        InteractiveSkillSphere(),",color:"text-[#86EFAC]"}]},{line:15,tokens:[{text:"        ProductionProjectsGrid(),",color:"text-[#86EFAC]"}]},{line:16,tokens:[{text:"      ],",color:"text-stone-400"}]},{line:17,tokens:[{text:"    );",color:"text-stone-500"}]},{line:18,tokens:[{text:"  }",color:"text-stone-500"}]}]},{id:"container",label:"Container",indent:1,hasChildren:!0,expanded:!0,sectionTarget:1,codeTitle:"SkillArchitecture.ts",codeLines:[{line:1,tokens:[{text:"import ",color:"text-[#E59849]"},{text:"{ React, NextJS, ThreeJS } ",color:"text-stone-200"},{text:"from ",color:"text-[#E59849]"},{text:"'@biamtiero/frontend'",color:"text-[#D4A373]"},{text:";",color:"text-stone-500"}]},{line:2,tokens:[{text:"import ",color:"text-[#E59849]"},{text:"{ Node, FastAPI, PostgreSQL } ",color:"text-stone-200"},{text:"from ",color:"text-[#E59849]"},{text:"'@biamtiero/backend'",color:"text-[#D4A373]"},{text:";",color:"text-stone-500"}]},{line:3,tokens:[]},{line:4,tokens:[{text:"export const ",color:"text-[#E59849]"},{text:"stackConfig ",color:"text-[#F6C177]"},{text:"= createStack({",color:"text-stone-300"}]},{line:5,tokens:[{text:"  frontend: ",color:"text-stone-300"},{text:"['React 18', 'TypeScript', 'Tailwind', 'WebGL']",color:"text-[#86EFAC]"},{text:",",color:"text-stone-400"}]},{line:6,tokens:[{text:"  backend: ",color:"text-stone-300"},{text:"['Node.js', 'Python FastAPI', 'Prisma ORM']",color:"text-[#86EFAC]"},{text:",",color:"text-stone-400"}]},{line:7,tokens:[{text:"  latencyTarget: ",color:"text-stone-300"},{text:"'< 35ms p99'",color:"text-[#F6C177]"},{text:",",color:"text-stone-400"}]},{line:8,tokens:[{text:"});",color:"text-stone-400"}]}]},{id:"column",label:"Column",indent:2,hasChildren:!0,expanded:!0,sectionTarget:1,codeTitle:"Interactive3DEngine.ts",codeLines:[{line:1,tokens:[{text:"const ",color:"text-[#E59849]"},{text:"scene ",color:"text-[#F6C177]"},{text:"= new THREE.Scene();",color:"text-stone-300"}]},{line:2,tokens:[{text:"const ",color:"text-[#E59849]"},{text:"plexus ",color:"text-[#F6C177]"},{text:"= new ConstellationMorph({ nodes: 210 });",color:"text-[#86EFAC]"}]},{line:3,tokens:[{text:"plexus.onCursorMove((cursor) => {",color:"text-stone-300"}]},{line:4,tokens:[{text:"  plexus.attractNodes(cursor, { strength: 0.28 });",color:"text-[#E59849]"}]},{line:5,tokens:[{text:"});",color:"text-stone-400"}]}]},{id:"responsive-nav",label:"Responsive Nav",indent:3,sectionTarget:2,codeTitle:"NexaFlowWorkspace.tsx",codeLines:[{line:1,tokens:[{text:"// Project 01: NexaFlow Collaborative Workspace",color:"text-stone-500"}]},{line:2,tokens:[{text:"export async function ",color:"text-[#E59849]"},{text:"syncKanbanBoard",color:"text-[#F6C177]"},{text:"(sprintId: string) {",color:"text-stone-300"}]},{line:3,tokens:[{text:"  const ",color:"text-[#E59849]"},{text:"tasks = await db.sprint.findMany({ sprintId });",color:"text-[#86EFAC]"}]},{line:4,tokens:[{text:"  return ",color:"text-[#E59849]"},{text:"RealtimeSocket.broadcast(tasks);",color:"text-[#F6C177]"}]},{line:5,tokens:[{text:"}",color:"text-stone-400"}]}]},{id:"header-component",label:"Header Component",indent:3,hasChildren:!0,expanded:!0,sectionTarget:2,codeTitle:"LuminaCommerce.tsx",codeLines:[{line:1,tokens:[{text:"// Project 02: High-Speed E-Commerce & Inventory",color:"text-stone-500"}]},{line:2,tokens:[{text:"export const ",color:"text-[#E59849]"},{text:"LuminaCheckout ",color:"text-[#F6C177]"},{text:"= () => {",color:"text-stone-300"}]},{line:3,tokens:[{text:"  return ",color:"text-[#E59849]"},{text:"<InstantSearch lighthouseScore={99} />;",color:"text-[#86EFAC]"}]},{line:4,tokens:[{text:"};",color:"text-stone-400"}]}]},{id:"button-node",label:"Button",indent:4,sectionTarget:2,codeTitle:"AskDocAIEngine.py",codeLines:[{line:1,tokens:[{text:"# Project 03: AskDoc AI Vector Document Assistant",color:"text-stone-500"}]},{line:2,tokens:[{text:"async def ",color:"text-[#E59849]"},{text:"semantic_query",color:"text-[#F6C177]"},{text:"(doc_id: str, prompt: str):",color:"text-stone-300"}]},{line:3,tokens:[{text:"    chunks = await vector_store.search(doc_id, prompt)",color:"text-[#86EFAC]"}]},{line:4,tokens:[{text:"    return ",color:"text-[#E59849]"},{text:"synthesize_citations(chunks)",color:"text-[#F6C177]"}]}]},{id:"content-box",label:"Content Box",indent:1,hasChildren:!0,expanded:!0,sectionTarget:3,codeTitle:"ContactSignal.ts",codeLines:[{line:1,tokens:[{text:"export const ",color:"text-[#E59849]"},{text:"connectWithBiamtiero ",color:"text-[#F6C177]"},{text:"= {",color:"text-stone-300"}]},{line:2,tokens:[{text:"  email: 'biamtiero.kalman@gmail.com',",color:"text-[#86EFAC]"}]},{line:3,tokens:[{text:"  status: 'Available for Full-Time & Freelance',",color:"text-[#F6C177]"}]},{line:4,tokens:[{text:"};",color:"text-stone-400"}]}]}];function H1(){const[s,e]=Ot.useState(0),[t,r]=Ot.useState(!0),[o,l]=Ot.useState(!1),[u,f]=Ot.useState("home-screen"),[p,m]=Ot.useState({x:0,y:0}),[_,y]=Ot.useState(0),[g,M]=Ot.useState(0),[A,R]=Ot.useState(0),[v,x]=Ot.useState(""),[b,O]=Ot.useState(""),[C,N]=Ot.useState(""),[P,F]=Ot.useState(""),[E,D]=Ot.useState(!1),[B,q]=Ot.useState(0),[Q,oe]=Ot.useState(!1),W=Ot.useRef([]);Ot.useEffect(()=>{const ce=new IntersectionObserver(Se=>{Se.forEach(Re=>{if(Re.isIntersecting){const J=Number(Re.target.getAttribute("data-section-index"));Number.isNaN(J)||e(J)}})},{threshold:.32});return W.current.forEach(Se=>{Se&&ce.observe(Se)}),()=>ce.disconnect()},[]);const Z=ce=>{var Se;Ti.playCompassClick(),l(!0),e(ce),(Se=W.current[ce])==null||Se.scrollIntoView({behavior:"smooth"})},pe=()=>{var Se;Ti.playCompassClick(),l(!0);const ce=(s+1)%4;e(ce),(Se=W.current[ce])==null||Se.scrollIntoView({behavior:"smooth"})},ne=ce=>{const Se=ce.currentTarget.getBoundingClientRect(),Re=(ce.clientX-Se.left)/Se.width*2-1,J=(ce.clientY-Se.top)/Se.height*2-1;m({x:Re,y:J})},K=(ce,Se)=>{ce(Se),Ti.playTypewriterKey(),q(Re=>Re+1),Q&&oe(!1)},Y=ce=>{ce.preventDefault(),Ti.playTypewriterBell(),oe(!0)},j=ce=>{ce.preventDefault(),P.trim()&&(Ti.playTypewriterBell(),D(!0),O(P))},L=()=>{const ce=!t;r(ce),Ti.enabled=ce,ce&&Ti.playCompassClick()},ae=Cd.find(ce=>ce.id===u)||Cd[0],ve=jn.skills[_];return k.jsxs("div",{className:"relative min-h-screen bg-[#080706] text-[#F5F2EB] selection:bg-[#D98A3C]/30 selection:text-white",children:[k.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none fixed inset-0 z-0 overflow-hidden",children:[k.jsx("div",{className:"absolute -top-28 right-[8%] h-[420px] w-[620px] rounded-full bg-[#D98A3C]/[0.08] blur-[130px]"}),k.jsx("div",{className:"absolute top-[42%] left-1/2 -translate-x-1/2 h-[360px] w-[700px] rounded-full bg-[#C87D32]/[0.06] blur-[140px]"})]}),k.jsx("div",{className:`fixed inset-0 z-10 pointer-events-none transition-all duration-700 ${s===0?"opacity-90":"lg:left-[48%] opacity-85"}`,children:k.jsx("div",{className:"pointer-events-auto h-full w-full",children:k.jsx(z1,{activeSection:s,activeSkillIdx:_,activeProjectIdx:g,activeExpIdx:A,typingPulse:B,nexusTriggered:o,onTriggerNexus:pe})})}),k.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#080706]/75 backdrop-blur-xl",children:k.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8",children:[k.jsxs("button",{onClick:()=>Z(0),className:"flex items-center gap-3 text-left group",children:[k.jsx("span",{className:"relative flex h-6 w-6 items-center justify-center",children:k.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5 text-[#E59849] drop-shadow-[0_0_8px_rgba(229,152,73,0.45)]",fill:"currentColor",children:k.jsx("path",{d:"M12 2L3 19h18L12 2zm0 4.8l5.6 10.2H6.4L12 6.8z"})})}),k.jsx("span",{className:"font-display text-lg font-medium tracking-tight text-white",children:"biamtiero"})]}),k.jsx("nav",{className:"hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-[#9E968E]",children:[{label:"Preview",idx:0},{label:"Skills & Stack",idx:1},{label:"Selected Works",idx:2},{label:"Experience & Contact",idx:3}].map(ce=>k.jsx("button",{onClick:()=>Z(ce.idx),className:`transition-colors hover:text-[#F6C177] ${s===ce.idx?"text-[#F6C177] font-semibold":""}`,children:ce.label},ce.idx))}),k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("button",{onClick:L,className:"shipcraft-btn-ghost rounded-full p-2 text-stone-300 hover:text-white",title:t?"Suara Interaksi: Aktif":"Suara Interaksi: Senyap",children:t?k.jsx(m_,{className:"h-3.5 w-3.5 text-[#E59849]"}):k.jsx(g_,{className:"h-3.5 w-3.5 text-stone-500"})}),k.jsxs("button",{onClick:()=>Z(3),className:"shipcraft-badge hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[#F5F2EB] hover:border-[#F6C177] transition",children:[k.jsx("span",{children:"Get in touch"}),k.jsx(dm,{className:"h-3.5 w-3.5 text-[#E59849]"})]})]})]})}),k.jsxs("section",{id:"beranda","data-section-index":0,ref:ce=>{W.current[0]=ce},onMouseMove:ne,className:"relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-28 pb-12 px-4 sm:px-8 select-none",children:[k.jsxs("div",{className:"relative z-20 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 pt-2 sm:pt-6",children:[k.jsxs("div",{className:"lg:col-span-5 flex flex-col items-start text-left",children:[k.jsxs("div",{className:"shipcraft-badge inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium text-[#F3E5D8]",children:[k.jsx(h_,{className:"h-3.5 w-3.5 text-[#E59849]"}),k.jsx("span",{children:jn.profile.role})]}),k.jsxs("h1",{className:"mt-6 font-display text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight leading-[1.06] text-white",children:["Your next app",k.jsx("br",{}),"starts with"," ",k.jsx("span",{className:"bg-gradient-to-r from-[#FFF7ED] via-[#F6C177] to-[#D98A3C] bg-clip-text text-transparent",children:"Biamtiero."})]}),k.jsx("p",{className:"mt-5 max-w-md text-sm sm:text-[15px] leading-relaxed text-[#9E968E]",children:"Merancang arsitektur full-stack, kanvas 3D interaktif, hingga kode siap produksi untuk web dan aplikasi modern. Teliti, terstruktur, dan berorientasi solusi."}),k.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3.5",children:[k.jsxs("button",{onClick:pe,className:"shipcraft-btn inline-flex items-center gap-2.5 rounded-[14px] px-6 py-3.5 text-xs sm:text-sm font-medium text-white",children:[k.jsx("span",{children:"Explore Works"}),k.jsx(um,{className:"h-4 w-4 text-[#F6C177]"})]}),k.jsx("button",{onClick:()=>Z(1),className:"shipcraft-btn-ghost inline-flex items-center gap-2 rounded-[14px] px-5 py-3.5 text-xs sm:text-sm font-medium text-stone-300 hover:text-white",children:k.jsx("span",{children:"View Tech Stack"})})]})]}),k.jsx("div",{className:"lg:col-span-7 flex items-center justify-center lg:justify-end",children:k.jsxs("div",{className:"relative w-full max-w-[650px] transition-transform duration-300 ease-out",style:{transform:`perspective(1350px) rotateX(${12-p.y*4}deg) rotateY(${-16+p.x*5}deg) rotateZ(${3.5-p.x*1.2}deg)`},children:[k.jsx("div",{className:"pointer-events-none absolute -top-6 left-10 right-10 h-12 rounded-full bg-[#E59849]/25 blur-2xl"}),k.jsx("div",{className:"shipcraft-ide-surface overflow-hidden rounded-2xl",children:k.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-12 min-h-[320px]",children:[k.jsxs("div",{className:"sm:col-span-5 border-b sm:border-b-0 sm:border-r border-white/[0.07] p-4 sm:p-5",children:[k.jsxs("div",{className:"flex items-center gap-2 pb-3.5 border-b border-white/[0.06] text-xs font-medium text-stone-300",children:[k.jsx(c_,{className:"h-3.5 w-3.5 text-[#E59849]"}),k.jsx("span",{children:"Widget Tree"})]}),k.jsx("div",{className:"mt-3 space-y-1 font-mono text-[11px]",children:Cd.map(ce=>{const Se=ce.id===u;return k.jsxs("button",{onClick:()=>{Ti.playCompassClick(),f(ce.id),q(Re=>Re+1)},style:{paddingLeft:`${8+ce.indent*12}px`},className:`flex w-full items-center gap-1.5 rounded-lg py-1.5 pr-2.5 text-left transition ${Se?"shipcraft-tree-active text-[#F6C177] font-medium":"text-stone-400 hover:bg-white/[0.04] hover:text-stone-200"}`,children:[ce.hasChildren?k.jsx(n_,{className:"h-3 w-3 shrink-0 text-stone-500"}):k.jsx(i_,{className:"h-3 w-3 shrink-0 text-stone-600"}),k.jsx(e_,{className:`h-3 w-3 shrink-0 ${Se?"text-[#E59849]":"text-stone-500"}`}),k.jsx("span",{className:"truncate",children:ce.label})]},ce.id)})})]}),k.jsxs("div",{className:"sm:col-span-7 p-4 sm:p-5 flex flex-col justify-between relative",children:[k.jsxs("div",{children:[k.jsxs("div",{className:"flex items-center justify-between pb-3.5 border-b border-white/[0.06] text-xs font-medium text-stone-300",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx(r_,{className:"h-3.5 w-3.5 text-[#E59849]"}),k.jsx("span",{children:"Code"})]}),k.jsx("span",{className:"font-mono text-[10px] text-[#E59849]",children:ae.codeTitle})]}),k.jsx("div",{className:"mt-3.5 space-y-1 font-mono text-[11px] leading-relaxed",children:ae.codeLines.map(ce=>k.jsxs("div",{className:"flex items-start gap-3",children:[k.jsx("span",{className:"w-4 select-none text-right text-[10px] text-stone-600",children:ce.line}),k.jsx("div",{className:"flex-1 whitespace-pre overflow-x-auto",children:ce.tokens.map((Se,Re)=>k.jsx("span",{className:Se.color,children:Se.text},Re))})]},ce.line))})]}),k.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3",children:[k.jsx("span",{className:"font-mono text-[10px] text-stone-500",children:"Klik item di Widget Tree untuk inspeksi kode"}),k.jsxs("button",{onClick:()=>Z(ae.sectionTarget),className:"font-mono text-[10px] text-[#F6C177] hover:underline inline-flex items-center gap-1",children:[k.jsx("span",{children:"Buka Bagian"}),k.jsx(dm,{className:"h-3 w-3"})]})]}),k.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#080706] to-transparent"})]})]})})]})})]}),k.jsxs("div",{className:"relative z-10 mx-auto mt-6 flex w-full max-w-6xl flex-col items-center justify-center",children:[k.jsxs("div",{className:"relative w-full overflow-hidden transition-transform duration-200 ease-out",style:{transform:`perspective(1200px) rotateY(${p.x*3.5}deg) rotateX(${-p.y*3.5}deg)`},children:[k.jsx("div",{className:"pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-80 rounded-full bg-[#D98A3C]/20 blur-3xl"}),k.jsx("img",{src:"/hero-hands.jpg",alt:"Digital Constellation Hands Connecting",className:"mx-auto w-full max-h-[42vh] object-contain pointer-events-none select-none",style:{maskImage:"radial-gradient(ellipse 86% 78% at 50% 50%, black 58%, transparent 100%)",WebkitMaskImage:"radial-gradient(ellipse 86% 78% at 50% 50%, black 58%, transparent 100%)"}}),k.jsxs("button",{onClick:pe,className:"group absolute left-1/2 top-[48%] z-30 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center focus:outline-none",title:"Klik Titik Sentuh Energi untuk Merakit Konstelasi 3D",children:[k.jsx("span",{className:"absolute h-20 w-20 rounded-full bg-[#E59849]/25 blur-xl transition-all duration-300 group-hover:scale-150 group-hover:bg-[#F6C177]/45"}),k.jsx("span",{className:"relative flex h-10 w-10 items-center justify-center rounded-full border border-[#F6C177]/60 bg-[#D98A3C]/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-125",children:k.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-[#FFF7ED] shadow-[0_0_18px_#fff,0_0_30px_#E59849]"})}),k.jsx("span",{className:"pointer-events-none absolute top-12 whitespace-nowrap rounded-full border border-[#E59849]/40 bg-[#080706]/90 px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-[#F6C177] opacity-0 transition-opacity group-hover:opacity-100",children:"Sentuh Energi Konstelasi ↓"})]})]}),k.jsx("p",{className:"mt-2 font-mono text-[11px] tracking-widest uppercase text-[#78716C] text-center",children:"Klik item pada Widget Tree 3D atau titik cahaya di ujung jari untuk berinteraksi"})]})]}),k.jsx("div",{className:"relative z-20 mx-auto max-w-7xl px-4 sm:px-8",children:k.jsxs("div",{className:"lg:w-[54%] space-y-28 pb-28",children:[k.jsxs("section",{id:"skill","data-section-index":1,ref:ce=>{W.current[1]=ce},className:"min-h-[82vh] flex flex-col justify-center pt-16",children:[k.jsxs("div",{className:"shipcraft-badge inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium text-[#F6C177]",children:[k.jsx(s_,{className:"h-3.5 w-3.5 text-[#E59849]"}),k.jsx("span",{children:"02 · Architecture & Stack"})]}),k.jsx("h2",{className:"mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white",children:"Every surface in sync, from UI to database."}),k.jsxs("p",{className:"mt-2.5 text-sm text-[#9E968E] leading-relaxed",children:["Partikel konstelasi di sebelah kanan kini merakit"," ",k.jsx("strong",{className:"text-stone-200",children:"Bola Arsitektur 3D"}),". Pilih lapisan keahlian di bawah untuk memutar frekuensi simpul 3D-nya."]}),k.jsx("div",{className:"mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3",children:jn.skills.map((ce,Se)=>{const Re=_===Se;return k.jsxs("button",{onClick:()=>{Ti.playGearTurn(),y(Se)},className:`rounded-2xl p-4 text-left transition ${Re?"shipcraft-tree-active text-white shadow-[0_8px_30px_rgba(217,138,60,0.18)]":"border border-white/[0.08] bg-white/[0.02] text-stone-300 hover:border-[#D98A3C]/40"}`,children:[k.jsxs("div",{className:"font-mono text-[10px] tracking-widest uppercase text-[#E59849]",children:["LAYER 0",Se+1]}),k.jsx("div",{className:"mt-1 font-display text-sm font-semibold text-white",children:ce.title})]},ce.id)})}),k.jsxs("div",{className:"shipcraft-card mt-5 rounded-2xl p-6 sm:p-7",children:[k.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.07] pb-4",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"font-display text-lg font-semibold text-white",children:ve.title}),k.jsx("p",{className:"text-xs text-[#9E968E] mt-0.5",children:ve.subtitle})]}),k.jsx("span",{className:"shipcraft-badge rounded-full px-3 py-1 font-mono text-[10px] text-[#F6C177]",children:"3D Lattice Synced"})]}),k.jsx("p",{className:"mt-4 text-xs sm:text-sm leading-relaxed text-stone-300",children:ve.description}),k.jsx("div",{className:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",children:ve.items.map(ce=>k.jsxs("div",{className:"flex items-center justify-between rounded-xl border border-white/[0.07] bg-[#0B0908]/80 p-3.5",children:[k.jsxs("div",{children:[k.jsx("div",{className:"font-display text-sm font-medium text-white",children:ce.name}),k.jsx("div",{className:"font-mono text-[11px] text-[#9E968E]",children:ce.role})]}),k.jsx("span",{className:"font-mono text-[10px] text-[#E59849]",children:ce.exp})]},ce.name))})]})]}),k.jsxs("section",{id:"proyek","data-section-index":2,ref:ce=>{W.current[2]=ce},className:"min-h-[82vh] flex flex-col justify-center pt-16",children:[k.jsxs("div",{className:"shipcraft-badge inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium text-[#F6C177]",children:[k.jsx(l_,{className:"h-3.5 w-3.5 text-[#E59849]"}),k.jsx("span",{children:"03 · Selected Works"})]}),k.jsx("h2",{className:"mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white",children:"Shipped to production, built for scale."}),k.jsxs("p",{className:"mt-2.5 text-sm text-[#9E968E]",children:["Klik salah satu proyek di bawah untuk mengubah frekuensi geometri"," ",k.jsx("strong",{className:"text-stone-200",children:"Portal Konstelasi 3D"})," ","di sebelah kanan."]}),k.jsx("div",{className:"mt-6 space-y-5",children:jn.projects.map((ce,Se)=>{const Re=g===Se;return k.jsxs("div",{onClick:()=>{Ti.playSlideShutter(),M(Se)},className:`shipcraft-card cursor-pointer rounded-2xl p-6 ${Re?"border-[#E59849]/60 shadow-[0_0_40px_rgba(217,138,60,0.2)]":""}`,children:[k.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[k.jsxs("span",{className:"text-[#E59849] font-medium",children:[ce.code," · ",ce.category]}),k.jsx("span",{className:"text-stone-500",children:ce.year})]}),k.jsx("h3",{className:"mt-2.5 font-display text-xl font-semibold text-white",children:ce.title}),k.jsx("p",{className:"mt-2 text-xs sm:text-sm leading-relaxed text-[#9E968E]",children:ce.summary}),k.jsx("ul",{className:"mt-3.5 space-y-1.5",children:ce.highlights.map((J,de)=>k.jsxs("li",{className:"flex items-start gap-2 text-xs text-stone-300",children:[k.jsx(fm,{className:"mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E59849]"}),k.jsx("span",{children:J})]},de))}),k.jsxs("div",{className:"mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-4",children:[k.jsx("div",{className:"flex flex-wrap gap-1.5",children:ce.techStack.map(J=>k.jsx("span",{className:"rounded-md border border-[#D98A3C]/25 bg-[#D98A3C]/[0.08] px-2.5 py-0.5 font-mono text-[11px] text-[#F6C177]",children:J},J))}),k.jsxs("div",{className:"flex items-center gap-4 font-mono text-xs",onClick:J=>J.stopPropagation(),children:[k.jsxs("a",{href:ce.demoUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[#F6C177] hover:text-white",children:[k.jsx("span",{children:"Live Preview"}),k.jsx(a_,{className:"h-3.5 w-3.5"})]}),k.jsxs("a",{href:ce.repoUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-stone-400 hover:text-white",children:[k.jsx(hm,{className:"h-3.5 w-3.5"}),k.jsx("span",{children:"Source"})]})]})]})]},ce.id)})})]}),k.jsxs("section",{id:"kontak","data-section-index":3,ref:ce=>{W.current[3]=ce},className:"min-h-[82vh] flex flex-col justify-center pt-16",children:[k.jsxs("div",{className:"shipcraft-badge inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium text-[#F6C177]",children:[k.jsx(t_,{className:"h-3.5 w-3.5 text-[#E59849]"}),k.jsx("span",{children:"04 · Journey & Collaboration"})]}),k.jsx("h2",{className:"mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white",children:"Experience & Direct Contact"}),k.jsx("div",{className:"mt-6 space-y-3.5",children:jn.experience.map((ce,Se)=>k.jsxs("div",{onClick:()=>{Ti.playMapPin(),R(Se)},className:`shipcraft-card cursor-pointer rounded-2xl p-5 ${A===Se?"border-[#E59849]/55":""}`,children:[k.jsxs("div",{className:"flex items-center justify-between font-mono text-xs text-[#E59849]",children:[k.jsx("span",{children:ce.period}),k.jsx("span",{className:"text-stone-500",children:ce.location})]}),k.jsxs("h3",{className:"mt-1 font-display text-base font-semibold text-white",children:[ce.role," ·"," ",k.jsx("span",{className:"font-normal text-stone-300",children:ce.company})]}),k.jsx("p",{className:"mt-2 text-xs leading-relaxed text-[#9E968E]",children:ce.description})]},ce.id))}),k.jsxs("div",{className:"shipcraft-card mt-8 rounded-2xl p-6 sm:p-8",children:[k.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E59849]",children:[k.jsx(p_,{className:"h-3.5 w-3.5"}),k.jsx("span",{children:"Start a Project"})]}),k.jsx("h3",{className:"mt-1 font-display text-xl font-semibold text-white",children:"Mari Bangun Produk Digital Berikutnya"}),k.jsx("p",{className:"mt-1 text-xs text-[#9E968E]",children:"Setiap ketikan Anda pada formulir di bawah akan memancarkan impuls cahaya pada heliks konstelasi 3D di samping."}),Q?k.jsxs("div",{className:"mt-6 rounded-xl border border-[#E59849]/40 bg-[#D98A3C]/10 p-6 text-center",children:[k.jsx(fm,{className:"mx-auto h-9 w-9 text-[#F6C177]"}),k.jsx("h4",{className:"mt-3 font-display text-base font-semibold text-white",children:"Pesan Siap Dikirim"}),k.jsxs("div",{className:"mt-4 flex justify-center gap-3",children:[k.jsxs("a",{href:`mailto:${jn.profile.email}?subject=${encodeURIComponent(`Kolaborasi Proyek dari ${v}`)}&body=${encodeURIComponent(`${C}

Dari: ${v} (${b})`)}`,className:"shipcraft-btn inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-medium text-white",children:[k.jsx(d_,{className:"h-3.5 w-3.5 text-[#F6C177]"})," Buka Aplikasi Email"]}),k.jsx("button",{onClick:()=>oe(!1),className:"shipcraft-btn-ghost rounded-xl px-4 py-2.5 text-xs text-stone-300 hover:text-white",children:"Kembali"})]})]}):k.jsxs("form",{onSubmit:Y,className:"mt-5 space-y-4",children:[k.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[k.jsx("input",{type:"text",required:!0,value:v,onChange:ce=>K(x,ce.target.value),placeholder:"Nama Anda",className:"w-full rounded-xl border border-white/10 bg-[#0A0908] px-4 py-3 text-xs text-white placeholder-stone-500 focus:border-[#E59849] focus:outline-none"}),k.jsx("input",{type:"email",required:!0,value:b,onChange:ce=>K(O,ce.target.value),placeholder:"email@perusahaan.com",className:"w-full rounded-xl border border-white/10 bg-[#0A0908] px-4 py-3 text-xs text-white placeholder-stone-500 focus:border-[#E59849] focus:outline-none"})]}),k.jsx("textarea",{rows:4,required:!0,value:C,onChange:ce=>K(N,ce.target.value),placeholder:"Ceritakan ide aplikasi, website, atau kebutuhan tim Anda...",className:"w-full rounded-xl border border-white/10 bg-[#0A0908] p-4 text-xs text-white placeholder-stone-500 focus:border-[#E59849] focus:outline-none"}),k.jsxs("button",{type:"submit",className:"shipcraft-btn inline-flex items-center gap-2.5 rounded-[14px] px-6 py-3 text-xs font-medium text-white",children:[k.jsx(f_,{className:"h-3.5 w-3.5 text-[#F6C177]"}),k.jsx("span",{children:"Kirim Pesan Sekarang"})]})]})]})]})]})}),k.jsxs("footer",{className:"relative z-30 border-t border-white/[0.06] bg-[#080706] pt-16 overflow-hidden",children:[k.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-8",children:k.jsxs("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-12",children:[k.jsxs("div",{className:"md:col-span-4",children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("svg",{viewBox:"0 0 24 24",className:"h-6 w-6 text-[#E59849]",fill:"currentColor",children:k.jsx("path",{d:"M12 2L3 19h18L12 2zm0 4.8l5.6 10.2H6.4L12 6.8z"})}),k.jsx("span",{className:"font-display text-xl font-medium tracking-tight text-white",children:"biamtiero"})]}),k.jsx("p",{className:"mt-4 max-w-xs text-xs leading-relaxed text-[#8E867E]",children:"Biamtiero keeps every surface in sync, so your product scales seamlessly from backend architecture to interactive 3D web."}),k.jsxs("div",{className:"mt-6 flex items-center gap-2.5",children:[k.jsx("a",{href:jn.profile.linkedin,target:"_blank",rel:"noreferrer",className:"flex h-8 w-8 items-center justify-center rounded-md border border-[#D98A3C]/40 bg-[#D98A3C]/[0.06] text-[#E59849] transition hover:border-[#F6C177] hover:text-white",title:"LinkedIn",children:k.jsx(u_,{className:"h-3.5 w-3.5"})}),k.jsx("a",{href:jn.profile.instagram,target:"_blank",rel:"noreferrer",className:"flex h-8 w-8 items-center justify-center rounded-md border border-[#D98A3C]/40 bg-[#D98A3C]/[0.06] text-[#E59849] transition hover:border-[#F6C177] hover:text-white",title:"Instagram",children:k.jsx(o_,{className:"h-3.5 w-3.5"})}),k.jsx("a",{href:jn.profile.github,target:"_blank",rel:"noreferrer",className:"flex h-8 w-8 items-center justify-center rounded-md border border-[#D98A3C]/40 bg-[#D98A3C]/[0.06] text-[#E59849] transition hover:border-[#F6C177] hover:text-white",title:"GitHub",children:k.jsx(hm,{className:"h-3.5 w-3.5"})})]})]}),k.jsxs("div",{className:"grid grid-cols-3 gap-6 md:col-span-4 text-xs",children:[k.jsxs("div",{children:[k.jsx("h4",{className:"font-medium text-white",children:"Navigation"}),k.jsxs("ul",{className:"mt-3.5 space-y-2.5 text-[#8E867E]",children:[k.jsx("li",{children:k.jsx("button",{onClick:()=>Z(0),className:"hover:text-white transition",children:"Preview"})}),k.jsx("li",{children:k.jsx("button",{onClick:()=>Z(1),className:"hover:text-white transition",children:"Tech Stack"})}),k.jsx("li",{children:k.jsx("button",{onClick:()=>Z(2),className:"hover:text-white transition",children:"Selected Works"})}),k.jsx("li",{children:k.jsx("button",{onClick:()=>Z(3),className:"hover:text-white transition",children:"Experience"})})]})]}),k.jsxs("div",{children:[k.jsx("h4",{className:"font-medium text-white",children:"Resources"}),k.jsxs("ul",{className:"mt-3.5 space-y-2.5 text-[#8E867E]",children:[k.jsx("li",{children:k.jsx("button",{onClick:()=>Z(0),className:"hover:text-white transition",children:"Widget Tree"})}),k.jsx("li",{children:k.jsx("button",{onClick:()=>Z(1),className:"hover:text-white transition",children:"Architecture"})}),k.jsx("li",{children:k.jsx("a",{href:jn.profile.github,target:"_blank",rel:"noreferrer",className:"hover:text-white transition",children:"Repositories"})}),k.jsx("li",{children:k.jsx("button",{onClick:()=>Z(3),className:"hover:text-white transition",children:"Community"})})]})]}),k.jsxs("div",{children:[k.jsx("h4",{className:"font-medium text-white",children:"Contact"}),k.jsxs("ul",{className:"mt-3.5 space-y-2.5 text-[#8E867E]",children:[k.jsx("li",{children:k.jsx("a",{href:`mailto:${jn.profile.email}`,className:"hover:text-white transition",children:"Direct Email"})}),k.jsx("li",{children:k.jsx("a",{href:jn.profile.linkedin,target:"_blank",rel:"noreferrer",className:"hover:text-white transition",children:"LinkedIn"})}),k.jsx("li",{children:k.jsx("a",{href:jn.profile.instagram,target:"_blank",rel:"noreferrer",className:"hover:text-white transition",children:"Instagram"})})]})]})]}),k.jsxs("div",{className:"md:col-span-4",children:[k.jsx("h4",{className:"text-xs font-medium text-white",children:"Start a conversation with Biamtiero"}),k.jsx("form",{onSubmit:j,className:"mt-3.5",children:k.jsxs("div",{className:"shipcraft-input-shell flex items-center justify-between rounded-xl p-1.5 pl-4",children:[k.jsx("input",{type:"email",value:P,onChange:ce=>{F(ce.target.value),E&&D(!1)},placeholder:"you@company.example",className:"w-full bg-transparent text-xs text-white placeholder-[#6E675F] focus:outline-none"}),k.jsx("button",{type:"submit",className:"shipcraft-btn flex h-9 w-10 shrink-0 items-center justify-center rounded-lg text-white",title:"Lanjutkan ke Pesan Kolaborasi",children:k.jsx(um,{className:"h-4 w-4 text-[#F6C177]"})})]})}),k.jsx("p",{className:"mt-2 text-[11px] text-[#6E675F]",children:E?"✓ Email tersimpan — silakan tulis detail proyek Anda di formulir atas.":"Respon cepat untuk kolaborasi proyek & full-time"})]})]})}),k.jsxs("div",{className:"relative mt-12 pt-6 pb-2",children:[k.jsxs("div",{className:"relative z-20 mx-auto text-center text-xs leading-relaxed text-[#7E766E]",children:[k.jsx("div",{children:"©2026"}),k.jsx("div",{className:"text-[#9E968E]",children:"Biamtiero"}),k.jsx("div",{children:"Build a real app, fast."})]}),k.jsx("div",{"aria-hidden":"true",className:"pointer-events-none relative z-10 mt-2 select-none text-center font-display text-[17vw] font-light leading-[0.82] tracking-tight text-[#6E4523]/45",children:"Biamtiero"})]})]})]})}Kx.createRoot(document.getElementById("root")).render(k.jsx(Gx.StrictMode,{children:k.jsx(H1,{})}));
